const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeMaskedCircle(cropBox, srcPath, destPath) {
  const size = 220;
  const svgMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="white" /></svg>`
  );

  await sharp(srcPath)
    .extract(cropBox)
    .resize(size, size)
    .composite([{ input: svgMask, blend: 'dest-in' }])
    .png()
    .toFile(destPath);
}

async function run() {
  const outDir = path.join(__dirname, 'public/images/brochures/crops');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const csFile = path.join(__dirname, 'public/images/brochures/Center Spring.jpg');
  await makeMaskedCircle({ left: 1128, top: 1145, width: 175, height: 175 }, csFile, path.join(outDir, 'center_spring_1.png'));
  await makeMaskedCircle({ left: 855, top: 1175, width: 180, height: 180 }, csFile, path.join(outDir, 'center_spring_2.png'));
  await makeMaskedCircle({ left: 545, top: 1165, width: 180, height: 180 }, csFile, path.join(outDir, 'center_spring_3.png'));
  await makeMaskedCircle({ left: 245, top: 1115, width: 180, height: 180 }, csFile, path.join(outDir, 'center_spring_4.png'));
  console.log('Center spring masked circles created successfully!');
}

run();
