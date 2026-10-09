const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeMaskedCircle(cropBox, srcPath, destPath) {
  const size = 260;
  // Circular mask: anti-aliased clean white circle
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

// All coordinates verified on the 1536 x 2048 scans!
// Notice order: [highlight 1, highlight 2, highlight 3, highlight 4] matching left-to-right reading in UI!
const specsConfig = [
  {
    key: 'center_spring',
    file: 'Center Spring.jpg',
    crops: [
      { left: 1128, top: 1145, width: 175, height: 175 }, // 1. High-Grade Spring Steel
      { left: 855, top: 1175, width: 180, height: 180 },  // 2. Precision Spring Rate
      { left: 545, top: 1165, width: 180, height: 180 },  // 3. Heat-Resistant Performance
      { left: 245, top: 1115, width: 180, height: 180 }   // 4. Enhanced Clutch Response
    ]
  },
  {
    key: 'pulley_set',
    file: 'Pullet Set.jpg',
    crops: [
      { left: 1170, top: 1145, width: 185, height: 185 }, // 1. High-Grade Aluminum Alloy
      { left: 890, top: 1185, width: 185, height: 185 },  // 2. Precision-Machined Surface
      { left: 600, top: 1195, width: 185, height: 185 },  // 3. Optimized Ramp Angle
      { left: 300, top: 1165, width: 185, height: 185 }   // 4. Air Fins
    ]
  },
  {
    key: 'bell',
    file: 'Bell.jpg',
    crops: [
      { left: 1215, top: 1025, width: 195, height: 195 }, // 1. Stainless Steel Material
      { left: 900, top: 1070, width: 195, height: 195 },  // 2. Linear Groove
      { left: 575, top: 1085, width: 195, height: 195 },  // 3. Dust Hole
      { left: 285, top: 1060, width: 195, height: 195 }   // 4. Wing Cooling Vanes
    ]
  },
  {
    key: 'clutch_lining',
    file: 'Clutch Lining - Assy.jpg',
    crops: [
      { left: 1130, top: 1085, width: 190, height: 190 }, // 1. Kevlar Material
      { left: 865, top: 1150, width: 190, height: 190 },  // 2. Enhanced Grip
      { left: 565, top: 1165, width: 190, height: 190 },  // 3. Structural Housing
      { left: 265, top: 1140, width: 190, height: 190 }   // 4. Heat Resistant
    ]
  },
  {
    key: 'flyball',
    file: 'Flyball.jpg',
    crops: [
      { left: 1130, top: 1090, width: 195, height: 195 }, // 1. Improved Acceleration
      { left: 850, top: 1160, width: 195, height: 195 },  // 2. Low Friction Surface
      { left: 535, top: 1170, width: 195, height: 195 },  // 3. High Wear Resistance
      { left: 225, top: 1140, width: 195, height: 195 }   // 4. Solid Brass Core
    ]
  },
  {
    key: 'clutch_spring',
    file: 'Clutch Spring.jpg',
    crops: [
      { left: 1160, top: 1085, width: 195, height: 195 }, // 1. High-Tensile Spring Steel
      { left: 890, top: 1160, width: 195, height: 195 },  // 2. Optimized RPM Rating
      { left: 585, top: 1175, width: 195, height: 195 },  // 3. Heat-Treated Performance
      { left: 265, top: 1145, width: 195, height: 195 }   // 4. Enhanced Initial Engagement
    ]
  },
  {
    key: 'cvt_cleaner',
    file: 'CVT Cleaner.jpg',
    crops: [
      { left: 1120, top: 1080, width: 195, height: 195 }, // 1. Fast-Acting Degreasing Formula
      { left: 865, top: 1145, width: 195, height: 195 },  // 2. Improved CVT Transmission
      { left: 570, top: 1165, width: 195, height: 195 },  // 3. Smooth Engagement
      { left: 255, top: 1135, width: 195, height: 195 }   // 4. Non-Corrosive
    ]
  },
  {
    key: 'slider_piece',
    file: 'Slider Piece.jpg',
    crops: [
      { left: 1140, top: 1105, width: 190, height: 190 }, // 1. High-Wear Resistant Material
      { left: 875, top: 1165, width: 190, height: 190 },  // 2. Reduced Friction Ramp
      { left: 565, top: 1165, width: 190, height: 190 },  // 3. Precise Fitment Guide
      { left: 260, top: 1145, width: 190, height: 190 }   // 4. Stable Ramp Movement
    ]
  }
];

async function generateAll() {
  const outDir = path.join(__dirname, 'public/images/brochures/crops');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const item of specsConfig) {
    const src = path.join(__dirname, 'public/images/brochures', item.file);
    for (let i = 0; i < item.crops.length; i++) {
      const outName = `${item.key}_${i + 1}.png`;
      const outPath = path.join(outDir, outName);
      await makeMaskedCircle(item.crops[i], src, outPath);
      console.log(`Generated: ${outName}`);
    }
  }
  console.log('All brochure macro zoom circles successfully created!');
}

generateAll();
