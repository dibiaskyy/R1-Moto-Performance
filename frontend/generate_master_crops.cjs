const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeMaskedCircle(cropBox, srcPath, destPath) {
  const size = 260;
  // Circular mask with subtle smooth anti-aliased edge
  const svgMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="white" /></svg>`
  );

  await sharp(srcPath)
    .extract(cropBox)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: svgMask, blend: 'dest-in' }])
    .png()
    .toFile(destPath);
}

// All coordinates rigorously verified against the 1536x2048 brochure scans!
// In exact order: [Highlight 1, Highlight 2, Highlight 3, Highlight 4]
const masterConfigs = [
  {
    key: 'center_spring',
    file: 'Center Spring.jpg',
    crops: [
      { left: 1128, top: 1145, width: 175, height: 175 }, // 1. High-Grade Spring Steel
      { left: 855, top: 1175, width: 180, height: 180 },  // 2. Precision Spring Rate (R1 1000RPM)
      { left: 545, top: 1165, width: 180, height: 180 },  // 3. Heat-Resistant Performance
      { left: 245, top: 1115, width: 180, height: 180 }   // 4. Enhanced Clutch Response
    ]
  },
  {
    key: 'pulley_set',
    file: 'Pullet Set.jpg',
    crops: [
      { left: 1165, top: 1160, width: 195, height: 195 }, // 1. High-Grade Aluminum Alloy
      { left: 888, top: 1195, width: 195, height: 195 },  // 2. Precision-Machined Surface
      { left: 590, top: 1200, width: 195, height: 195 },  // 3. Optimized Ramp Angle
      { left: 290, top: 1170, width: 195, height: 195 }   // 4. Air Fins
    ]
  },
  {
    key: 'bell',
    file: 'Bell.jpg',
    crops: [
      { left: 1145, top: 900, width: 220, height: 220 },  // 1. Stainless Steel Material
      { left: 865, top: 990, width: 220, height: 220 },   // 2. Linear Groove
      { left: 545, top: 1040, width: 220, height: 220 },  // 3. Dust Hole
      { left: 215, top: 1040, width: 220, height: 220 }   // 4. Wing Cooling Vanes
    ]
  },
  {
    key: 'clutch_lining',
    file: 'Clutch Lining - Assy.jpg',
    crops: [
      { left: 1125, top: 1045, width: 175, height: 175 }, // 1. Kevlar Material
      { left: 875, top: 1110, width: 185, height: 185 },  // 2. Enhanced Grip
      { left: 575, top: 1140, width: 185, height: 185 },  // 3. Structural Housing
      { left: 250, top: 1120, width: 200, height: 200 }   // 4. Heat Resistant
    ]
  },
  {
    key: 'flyball',
    file: 'Flyball.jpg',
    crops: [
      { left: 1110, top: 1040, width: 215, height: 215 }, // 1. Improved Acceleration
      { left: 830, top: 1120, width: 215, height: 215 },  // 2. Low Friction Surface
      { left: 520, top: 1130, width: 215, height: 215 },  // 3. High Wear Resistance
      { left: 220, top: 1100, width: 215, height: 215 }   // 4. Solid Brass Core
    ]
  },
  {
    key: 'clutch_spring',
    file: 'Clutch Spring.jpg',
    crops: [
      { left: 1140, top: 960, width: 215, height: 215 },  // 1. High-Tensile Spring Steel
      { left: 860, top: 1060, width: 215, height: 215 },  // 2. Optimized RPM Rating
      { left: 550, top: 1070, width: 215, height: 215 },  // 3. Heat-Treated Performance
      { left: 240, top: 1030, width: 215, height: 215 }   // 4. Enhanced Initial Engagement
    ]
  },
  {
    key: 'cvt_cleaner',
    file: 'CVT Cleaner.jpg',
    crops: [
      { left: 1040, top: 970, width: 215, height: 215 },  // 1. Fast-Acting Degreasing Formula
      { left: 810, top: 1060, width: 215, height: 215 },  // 2. Improved CVT Transmission
      { left: 520, top: 1070, width: 215, height: 215 },  // 3. Smooth Engagement
      { left: 220, top: 1040, width: 215, height: 215 }   // 4. Non-Corrosive
    ]
  },
  {
    key: 'slider_piece',
    file: 'Slider Piece.jpg',
    crops: [
      { left: 1120, top: 1100, width: 215, height: 215 }, // 1. High-Wear Resistant Material
      { left: 830, top: 1140, width: 215, height: 215 },  // 2. Reduced Friction Ramp
      { left: 520, top: 1140, width: 215, height: 215 },  // 3. Precise Fitment Guide
      { left: 250, top: 1120, width: 200, height: 200 }   // 4. Stable Ramp Movement
    ]
  }
];

async function run() {
  const outDir = path.join(__dirname, 'public/images/brochures/crops');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const item of masterConfigs) {
    const src = path.join(__dirname, 'public/images/brochures', item.file);
    for (let i = 0; i < item.crops.length; i++) {
      const outName = `${item.key}_${i + 1}.png`;
      const outPath = path.join(outDir, outName);
      await makeMaskedCircle(item.crops[i], src, outPath);
      console.log(`Generated: ${outName}`);
    }
  }
  console.log('ALL MASTER CIRCLES CREATED!');
}

run();
