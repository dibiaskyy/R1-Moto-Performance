const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rawDir = 'd:/R1-Moto-Performance-E-commerce/R1 Products Raw Photos-20261007T080800Z-1-001/R1 Products Raw Photos';
const prodDir = path.join(__dirname, 'public/images/products');

const allItems = [
  { raw: 'Pulley set.png', out: 'pulley-set.png', thresh: 252 },
  { raw: 'Bell.png', out: 'bell.png', thresh: 248, isBell: true },
  { raw: 'Clutch Lining.png', out: 'clutch-lining.png', thresh: 248 },
  { raw: 'Clutch Spring.png', out: 'clutch-spring.png', thresh: 248 },
  { raw: 'Flyball.png', out: 'flyball.png', thresh: 248 },
  { raw: 'Slider Piece.png', out: 'slider-piece.png', thresh: 248 },
  { raw: 'BrakePad.png', out: 'brakepad.png', thresh: 248 },
  { raw: 'CVT  Cleaner.png', out: 'cvt-cleaner.png', thresh: 248 }
];

async function processAll() {
  for (const item of allItems) {
    const rawPath = path.join(rawDir, item.raw);
    if (!fs.existsSync(rawPath)) {
      console.warn('Raw not found:', rawPath);
      continue;
    }
    const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;
    const visited = new Uint8Array(w * h);
    const queue = new Int32Array(w * h);
    let qHead = 0, qTail = 0;

    // Seed outer boundary pixels only
    for (let x = 0; x < w; x++) { queue[qTail++] = x; visited[x] = 1; const b = (h-1)*w + x; queue[qTail++] = b; visited[b] = 1; }
    for (let y = 1; y < h - 1; y++) { const l = y*w; queue[qTail++] = l; visited[l] = 1; const r = y*w + (w-1); queue[qTail++] = r; visited[r] = 1; }

    const THRESH = item.thresh;
    while(qHead < qTail) {
      const curr = queue[qHead++];
      const cx = curr % w, cy = Math.floor(curr / w);
      const nb = [cx > 0 ? curr-1 : -1, cx < w-1 ? curr+1 : -1, cy > 0 ? curr-w : -1, cy < h-1 ? curr+w : -1];
      for (const n of nb) {
        if (n >= 0 && !visited[n]) {
          const idx = n * 3;
          if (data[idx] >= THRESH && data[idx+1] >= THRESH && data[idx+2] >= THRESH) {
            visited[n] = 1; queue[qTail++] = n;
          }
        }
      }
    }

    if (item.isBell) {
      // For Bell: transparentize internal vent holes and central hole, leaving R1 logo intact
      const whiteVisited = new Uint8Array(w * h);
      for(let y=308; y<=703; y++) {
        for(let x=327; x<=721; x++) {
          const idx = y*w + x;
          if (!visited[idx] && !whiteVisited[idx]) {
            const s = idx * 3;
            if (data[s] >= THRESH && data[s+1] >= THRESH && data[s+2] >= THRESH) {
              const cQueue = [idx];
              whiteVisited[idx] = 1;
              let head = 0;
              while(head < cQueue.length) {
                const cur = cQueue[head++];
                const px = cur % w, py = Math.floor(cur / w);
                const nbs = [px > 0 ? cur-1 : -1, px < w-1 ? cur+1 : -1, py > 0 ? cur-w : -1, py < h-1 ? cur+w : -1];
                for(const n of nbs) {
                  if (n >= 0 && !visited[n] && !whiteVisited[n]) {
                    const ns = n * 3;
                    if (data[ns] >= THRESH && data[ns+1] >= THRESH && data[ns+2] >= THRESH) {
                      whiteVisited[n] = 1;
                      cQueue.push(n);
                    }
                  }
                }
              }
              if (cQueue.length >= 500) {
                for(const p of cQueue) visited[p] = 1;
              }
            }
          }
        }
      }
    }

    const rgba = Buffer.alloc(w * h * 4);
    let minX = w, maxX = 0, minY = h, maxY = 0;

    for (let i = 0; i < w * h; i++) {
      const x = i % w, y = Math.floor(i / w);
      const sIdx = i * 3;
      const dIdx = i * 4;
      rgba[dIdx] = data[sIdx];
      rgba[dIdx + 1] = data[sIdx + 1];
      rgba[dIdx + 2] = data[sIdx + 2];
      if (visited[i]) {
        rgba[dIdx + 3] = 0;
      } else {
        rgba[dIdx + 3] = 255;
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
    }

    const pad = 12;
    const cropX = Math.max(0, minX - pad);
    const cropY = Math.max(0, minY - pad);
    const cropW = Math.min(w - cropX, maxX - minX + pad * 2);
    const cropH = Math.min(h - cropY, maxY - minY + pad * 2);

    const outPath = path.join(prodDir, item.out);
    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
      .png()
      .toFile(outPath);

    console.log('Saved HD product:', item.out, cropW + 'x' + cropH);
  }
}

processAll().catch(console.error);
