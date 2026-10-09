const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public/images/products/crops');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Map each product image to 4 distinct macro zoom regions on the product itself
// xPct, yPct are center points (0-1) and zoomScale controls how close the macro zoom is
const productConfigs = [
  {
    prefix: 'pulley_set',
    src: 'public/images/products/pulley-set.png',
    // Pulley set has: outer drive face, center spline hub, ramp guides, cooling fan fins
    points: [
      { name: 'pulley_set_1', cx: 0.28, cy: 0.40, zoom: 2.8 }, // CNC pulley face
      { name: 'pulley_set_2', cx: 0.72, cy: 0.35, zoom: 2.8 }, // ramp angles / slider track
      { name: 'pulley_set_3', cx: 0.30, cy: 0.75, zoom: 2.8 }, // air fins / cooling blades
      { name: 'pulley_set_4', cx: 0.72, cy: 0.72, zoom: 2.8 }, // center bushing / splines
    ]
  },
  {
    prefix: 'bell',
    src: 'public/images/products/bell.png',
    // Clutch bell: outer bell rim, cooling vent cutouts, splined center, heat-dissipation surface
    points: [
      { name: 'bell_1', cx: 0.50, cy: 0.25, zoom: 2.6 }, // outer rim / stainless steel
      { name: 'bell_2', cx: 0.50, cy: 0.50, zoom: 3.0 }, // center splined shaft hub
      { name: 'bell_3', cx: 0.28, cy: 0.55, zoom: 2.8 }, // heat dissipation venting
      { name: 'bell_4', cx: 0.70, cy: 0.65, zoom: 2.8 }, // linear inner friction grooves
    ]
  },
  {
    prefix: 'clutch_lining',
    src: 'public/images/products/clutch-lining.png',
    // Clutch lining assembly: friction pad shoe, pivot mount, return spring anchor, clutch shoe base
    points: [
      { name: 'clutch_lining_1', cx: 0.50, cy: 0.22, zoom: 2.8 }, // friction lining pad
      { name: 'clutch_lining_2', cx: 0.28, cy: 0.60, zoom: 2.8 }, // left clutch shoe arm
      { name: 'clutch_lining_3', cx: 0.72, cy: 0.60, zoom: 2.8 }, // right clutch shoe arm
      { name: 'clutch_lining_4', cx: 0.50, cy: 0.50, zoom: 3.2 }, // center mounting assembly
    ]
  },
  {
    prefix: 'clutch_spring',
    src: 'public/images/products/clutch-spring.png',
    // Clutch springs: coil body, hooked tension end, high-temper coating, tension pitch
    points: [
      { name: 'clutch_spring_1', cx: 0.35, cy: 0.35, zoom: 2.6 }, // top spring coil
      { name: 'clutch_spring_2', cx: 0.65, cy: 0.35, zoom: 2.6 }, // top hook end
      { name: 'clutch_spring_3', cx: 0.35, cy: 0.70, zoom: 2.6 }, // bottom spring coil
      { name: 'clutch_spring_4', cx: 0.65, cy: 0.70, zoom: 2.6 }, // retention anchor hook
    ]
  },
  {
    prefix: 'flyball',
    src: 'public/images/products/flyball.png',
    // Flyball roller weights: outer teflon sleeve, brass core, weight bevel, smooth roller contact
    points: [
      { name: 'flyball_1', cx: 0.32, cy: 0.35, zoom: 2.8 }, // roller weight 1
      { name: 'flyball_2', cx: 0.68, cy: 0.35, zoom: 2.8 }, // roller weight 2
      { name: 'flyball_3', cx: 0.35, cy: 0.72, zoom: 2.8 }, // roller weight 3
      { name: 'flyball_4', cx: 0.65, cy: 0.72, zoom: 2.8 }, // brass core interior
    ]
  },
  {
    prefix: 'slider_piece',
    src: 'public/images/products/slider-piece.png',
    // Slider pieces: friction guide rail, clip retention groove, impact edge, polymer body
    points: [
      { name: 'slider_piece_1', cx: 0.22, cy: 0.50, zoom: 2.6 }, // left slider piece
      { name: 'slider_piece_2', cx: 0.50, cy: 0.50, zoom: 2.8 }, // center slider piece
      { name: 'slider_piece_3', cx: 0.78, cy: 0.50, zoom: 2.6 }, // right slider piece
      { name: 'slider_piece_4', cx: 0.50, cy: 0.35, zoom: 3.2 }, // guide ramp engagement notch
    ]
  },
  {
    prefix: 'cvt_cleaner',
    src: 'public/images/products/cvt-cleaner.png',
    // CVT cleaner spray can: spray nozzle, nozzle cap, formula graphic, aerosol canister
    points: [
      { name: 'cvt_cleaner_1', cx: 0.50, cy: 0.12, zoom: 3.0 }, // precision spray nozzle
      { name: 'cvt_cleaner_2', cx: 0.50, cy: 0.30, zoom: 2.5 }, // upper can label
      { name: 'cvt_cleaner_3', cx: 0.50, cy: 0.55, zoom: 2.5 }, // product formula & logo
      { name: 'cvt_cleaner_4', cx: 0.50, cy: 0.85, zoom: 2.5 }, // pressure cylinder base
    ]
  },
  {
    prefix: 'brakepad',
    src: 'public/images/products/brakepad.png',
    // Brake pads: ceramic friction surface, steel backing plate, mounting eyelet, heat slot
    points: [
      { name: 'brakepad_1', cx: 0.35, cy: 0.38, zoom: 2.6 }, // friction compound pad
      { name: 'brakepad_2', cx: 0.70, cy: 0.38, zoom: 2.6 }, // backing steel plate
      { name: 'brakepad_3', cx: 0.35, cy: 0.68, zoom: 2.6 }, // heat dissipation channel
      { name: 'brakepad_4', cx: 0.70, cy: 0.68, zoom: 2.6 }, // pin mounting bracket
    ]
  },
  {
    prefix: 'fork_oil',
    src: 'public/images/products/fork-oil.png',
    // Fork oil bottle: cap/seal, viscosity rating, high performance damping fluid, bottle body
    points: [
      { name: 'fork_oil_1', cx: 0.50, cy: 0.12, zoom: 3.0 }, // bottle spout cap
      { name: 'fork_oil_2', cx: 0.50, cy: 0.35, zoom: 2.6 }, // viscosity spec
      { name: 'fork_oil_3', cx: 0.50, cy: 0.60, zoom: 2.6 }, // damping formula label
      { name: 'fork_oil_4', cx: 0.50, cy: 0.85, zoom: 2.6 }, // reinforced bottle base
    ]
  },
  {
    prefix: 'torque_drive',
    src: 'public/images/products/torque-drive.png',
    // Torque drive: guide pin cam groove, sliding sheave, bearing race, seal seat
    points: [
      { name: 'torque_drive_1', cx: 0.50, cy: 0.30, zoom: 2.8 }, // cam angle guide track
      { name: 'torque_drive_2', cx: 0.30, cy: 0.60, zoom: 2.8 }, // inner bronze bushing
      { name: 'torque_drive_3', cx: 0.70, cy: 0.60, zoom: 2.8 }, // outer sheave face
      { name: 'torque_drive_4', cx: 0.50, cy: 0.75, zoom: 2.8 }, // o-ring oil seal collar
    ]
  }
];

async function generateCrops() {
  const circleMask = Buffer.from(
    '<svg width="260" height="260"><circle cx="130" cy="130" r="126" fill="white" /></svg>'
  );

  for (const cfg of productConfigs) {
    const fullSrc = path.join(__dirname, cfg.src);
    if (!fs.existsSync(fullSrc)) {
      console.warn('File not found:', fullSrc);
      continue;
    }

    const meta = await sharp(fullSrc).metadata();
    const w = meta.width;
    const h = meta.height;

    for (const pt of cfg.points) {
      // Calculate crop size based on zoom factor
      // Smaller crop box = higher zoom magnification
      const cropSize = Math.round(Math.min(w, h) / pt.zoom);
      
      let left = Math.round(pt.cx * w - cropSize / 2);
      let top = Math.round(pt.cy * h - cropSize / 2);

      // Clamp to image bounds
      left = Math.max(0, Math.min(left, w - cropSize));
      top = Math.max(0, Math.min(top, h - cropSize));

      const outPath = path.join(outDir, `${pt.name}.png`);

      await sharp(fullSrc)
        .extract({ left, top, width: cropSize, height: cropSize })
        .resize(260, 260)
        .composite([{ input: circleMask, blend: 'dest-in' }])
        .png()
        .toFile(outPath);

      console.log(`✓ Cropped macro zoom: ${pt.name} from ${cfg.src}`);
    }
  }
}

generateCrops().catch(console.error);
