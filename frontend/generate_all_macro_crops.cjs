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

const brochureSpecs = [
  {
    key: 'center_spring',
    file: 'Center Spring.jpg',
    crops: [
      { left: 1128, top: 1145, width: 175, height: 175 }, // High-Grade Spring Steel
      { left: 855, top: 1175, width: 180, height: 180 },  // Precision Spring Rate
      { left: 545, top: 1165, width: 180, height: 180 },  // Heat-Resistant Performance
      { left: 245, top: 1115, width: 180, height: 180 }   // Enhanced Clutch Response
    ]
  },
  {
    key: 'pulley_set',
    file: 'Pullet Set.jpg',
    crops: [
      { left: 1145, top: 1165, width: 185, height: 185 }, // High-Grade Aluminum Alloy
      { left: 885, top: 1190, width: 185, height: 185 },  // Precision Machined Surface
      { left: 595, top: 1200, width: 185, height: 185 },  // Optimized Ramp Angle
      { left: 300, top: 1170, width: 185, height: 185 }   // Air Fins
    ]
  },
  {
    key: 'bell',
    file: 'Bell.jpg',
    crops: [
      { left: 1190, top: 1110, width: 195, height: 195 }, // Stainless Steel Material
      { left: 870, top: 1140, width: 195, height: 195 },  // Linear Groove
      { left: 535, top: 1150, width: 195, height: 195 },  // Dust Hole
      { left: 180, top: 1120, width: 195, height: 195 }   // Wing Cooling Vanes
    ]
  },
  {
    key: 'clutch_lining',
    file: 'Clutch Lining - Assy.jpg',
    crops: [
      { left: 1160, top: 1150, width: 185, height: 185 }, // Kevlar Material
      { left: 875, top: 1175, width: 185, height: 185 },  // Enhanced Grip
      { left: 565, top: 1175, width: 185, height: 185 },  // Structural Housing
      { left: 255, top: 1150, width: 185, height: 185 }   // Heat Resistant
    ]
  },
  {
    key: 'flyball',
    file: 'Flyball.jpg',
    crops: [
      { left: 1145, top: 1145, width: 195, height: 195 }, // Improved Acceleration
      { left: 850, top: 1175, width: 195, height: 195 },  // Low Friction Surface
      { left: 530, top: 1180, width: 195, height: 195 },  // High Wear Resistance
      { left: 210, top: 1155, width: 195, height: 195 }   // Solid Brass Core
    ]
  },
  {
    key: 'clutch_spring',
    file: 'Clutch Spring.jpg',
    crops: [
      { left: 1190, top: 1145, width: 195, height: 195 }, // High-Tensile Spring Steel
      { left: 890, top: 1175, width: 195, height: 195 },  // Optimized RPM Rating
      { left: 575, top: 1175, width: 195, height: 195 },  // Heat-Treated Performance
      { left: 245, top: 1145, width: 195, height: 195 }   // Enhanced Initial Engagement
    ]
  },
  {
    key: 'cvt_cleaner',
    file: 'CVT Cleaner.jpg',
    crops: [
      { left: 1145, top: 1145, width: 195, height: 195 }, // Fast-Acting Degreasing Formula
      { left: 865, top: 1175, width: 195, height: 195 },  // Improved CVT Transmission
      { left: 560, top: 1175, width: 195, height: 195 },  // Smooth Engagement
      { left: 240, top: 1145, width: 195, height: 195 }   // Non-Corrosive
    ]
  },
  {
    key: 'slider_piece',
    file: 'Slider Piece.jpg',
    crops: [
      { left: 1165, top: 1140, width: 190, height: 190 }, // High-Wear Resistant Material
      { left: 875, top: 1165, width: 190, height: 190 },  // Reduced Friction Ramp
      { left: 560, top: 1170, width: 190, height: 190 },  // Precise Fitment Guide
      { left: 245, top: 1150, width: 190, height: 190 }   // Stable Ramp Movement
    ]
  }
];

async function generateAll() {
  const outDir = path.join(__dirname, 'public/images/brochures/crops');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const item of brochureSpecs) {
    const src = path.join(__dirname, 'public/images/brochures', item.file);
    if (!fs.existsSync(src)) {
      console.warn('Source file missing:', src);
      continue;
    }
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
