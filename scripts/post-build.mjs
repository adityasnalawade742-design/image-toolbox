import fs from 'fs';
import path from 'path';

const distAstroDir = path.resolve('dist/_astro');

if (fs.existsSync(distAstroDir)) {
  const files = fs.readdirSync(distAstroDir);
  let cleaned = 0;

  files.forEach((file) => {
    if (file.endsWith('.wasm')) {
      fs.unlinkSync(path.join(distAstroDir, file));
      cleaned++;
    }
  });

  if (cleaned > 0) {
    console.log(`[post-build] Successfully pruned ${cleaned} redundant WASM artifacts from dist/_astro`);
  }
}
