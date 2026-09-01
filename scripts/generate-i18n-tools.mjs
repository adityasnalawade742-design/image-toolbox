import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to write file safely
function writeTS(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created ${path.relative(rootDir, filePath)}`);
}

console.log('Building localized tool datasets...');
