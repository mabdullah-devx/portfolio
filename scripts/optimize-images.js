import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

async function optimizeImages() {
  console.log('Optimizing images...');
  const files = [
    { name: 'avatar.png', convertToWebp: true },
    { name: 'pdf-redactor.png', convertToWebp: true },
    { name: 'avatar.jpg', convertToWebp: true }
  ];

  for (const file of files) {
    const inputPath = path.join(publicDir, file.name);
    if (!fs.existsSync(inputPath)) continue;

    console.log(`Processing ${file.name}...`);
    const parsed = path.parse(file.name);
    const ext = parsed.ext.toLowerCase();

    if (file.convertToWebp) {
      const outputPath = path.join(publicDir, `${parsed.name}.webp`);
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`Created ${parsed.name}.webp`);
      
      // Keep the original but optimize it just in case fallback is needed
      if (ext === '.png') {
        const tmpPath = path.join(publicDir, `${parsed.name}_tmp.png`);
        await sharp(inputPath).png({ quality: 80, compressionLevel: 9 }).toFile(tmpPath);
        fs.renameSync(tmpPath, inputPath);
        console.log(`Optimized original ${file.name}`);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        const tmpPath = path.join(publicDir, `${parsed.name}_tmp.jpg`);
        await sharp(inputPath).jpeg({ quality: 80 }).toFile(tmpPath);
        fs.renameSync(tmpPath, inputPath);
        console.log(`Optimized original ${file.name}`);
      }
    }
  }
  console.log('Done optimizing images.');
}

optimizeImages().catch(console.error);
