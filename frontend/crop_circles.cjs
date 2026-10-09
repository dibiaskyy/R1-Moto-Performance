const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeCircle(inputPath, outputPath) {
  const size = 260;
  const svg = Buffer.from(
    '<svg width="260" height="260"><circle cx="130" cy="130" r="126" fill="white" /></svg>'
  );
  await sharp(inputPath)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: svg, blend: 'dest-in' }])
    .png()
    .toFile(outputPath);
}

async function run() {
  const outDir = path.join(__dirname, 'public/images/brochures/crops');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const tasks = [
    {
      file: 'Center Spring.jpg',
      crops: [
        { name: 'center_spring_1', left: 1080, top: 1100, size: 215 },
        { name: 'center_spring_2', left: 810, top: 1120, size: 215 },
        { name: 'center_spring_3', left: 520, top: 1115, size: 215 },
        { name: 'center_spring_4', left: 235, top: 1105, size: 215 }
      ]
    },
    {
      file: 'Pullet Set.jpg',
      crops: [
        { name: 'pulley_set_1', left: 1120, top: 1140, size: 220 },
        { name: 'pulley_set_2', left: 870, top: 1165, size: 220 },
        { name: 'pulley_set_3', left: 585, top: 1175, size: 220 },
        { name: 'pulley_set_4', left: 295, top: 1150, size: 220 }
      ]
    },
    {
      file: 'Bell.jpg',
      crops: [
        { name: 'bell_1', left: 1130, top: 1090, size: 220 },
        { name: 'bell_2', left: 855, top: 1115, size: 220 },
        { name: 'bell_3', left: 535, top: 1125, size: 220 },
        { name: 'bell_4', left: 195, top: 1110, size: 220 }
      ]
    },
    {
      file: 'Clutch Lining - Assy.jpg',
      crops: [
        { name: 'clutch_lining_1', left: 1145, top: 1130, size: 220 },
        { name: 'clutch_lining_2', left: 865, top: 1150, size: 220 },
        { name: 'clutch_lining_3', left: 555, top: 1150, size: 220 },
        { name: 'clutch_lining_4', left: 255, top: 1130, size: 220 }
      ]
    },
    {
      file: 'Flyball.jpg',
      crops: [
        { name: 'flyball_1', left: 1105, top: 1130, size: 220 },
        { name: 'flyball_2', left: 835, top: 1155, size: 220 },
        { name: 'flyball_3', left: 525, top: 1165, size: 220 },
        { name: 'flyball_4', left: 215, top: 1135, size: 220 }
      ]
    },
    {
      file: 'Clutch Spring.jpg',
      crops: [
        { name: 'clutch_spring_1', left: 1135, top: 1130, size: 220 },
        { name: 'clutch_spring_2', left: 875, top: 1160, size: 220 },
        { name: 'clutch_spring_3', left: 575, top: 1160, size: 220 },
        { name: 'clutch_spring_4', left: 255, top: 1130, size: 220 }
      ]
    },
    {
      file: 'CVT Cleaner.jpg',
      crops: [
        { name: 'cvt_cleaner_1', left: 1105, top: 1130, size: 220 },
        { name: 'cvt_cleaner_2', left: 855, top: 1160, size: 220 },
        { name: 'cvt_cleaner_3', left: 565, top: 1160, size: 220 },
        { name: 'cvt_cleaner_4', left: 255, top: 1130, size: 220 }
      ]
    },
    {
      file: 'Slider Piece.jpg',
      crops: [
        { name: 'slider_piece_1', left: 1125, top: 1125, size: 220 },
        { name: 'slider_piece_2', left: 865, top: 1150, size: 220 },
        { name: 'slider_piece_3', left: 565, top: 1155, size: 220 },
        { name: 'slider_piece_4', left: 255, top: 1135, size: 220 }
      ]
    }
  ];

  for (const t of tasks) {
    for (const c of t.crops) {
      const raw = path.join(outDir, c.name + '_raw.jpg');
      const finalPng = path.join(outDir, c.name + '.png');
      await sharp(path.join(__dirname, 'public/images/brochures', t.file))
        .extract({ left: c.left, top: c.top, width: c.size, height: c.size })
        .toFile(raw);
      await makeCircle(raw, finalPng);
      fs.unlinkSync(raw);
    }
    console.log('Finished', t.file);
  }
}
run().then(() => console.log('All crops created!'));
