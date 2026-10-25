import fs from 'fs';
import path from 'path';

const distAstroDir = path.resolve('dist/_astro');

if (fs.existsSync(distAstroDir)) {
  const files = fs.readdirSync(distAstroDir);
  let cleaned = 0;

  // Only onnxruntime's WASM builds are redundant (and exceed Cloudflare's 25 MiB asset limit);
  // other WASM, like the AVIF encoder, is required at runtime
  files.forEach((file) => {
    if (file.startsWith('ort-') && file.endsWith('.wasm')) {
      fs.unlinkSync(path.join(distAstroDir, file));
      cleaned++;
    }
  });

  if (cleaned > 0) {
    console.log(`[post-build] Successfully pruned ${cleaned} redundant onnxruntime WASM artifacts from dist/_astro`);
  }
}

// pdf.js loads fonts, character maps, colour profiles and image decoders on demand; serve them from the site
// so PDF to JPG works offline and without third-party requests
const pdfjsDir = path.resolve('node_modules/pdfjs-dist');
if (fs.existsSync(path.resolve('dist'))) {
  for (const sub of ['cmaps', 'standard_fonts', 'wasm', 'iccs']) {
    const from = path.join(pdfjsDir, sub);
    if (fs.existsSync(from)) fs.cpSync(from, path.resolve('dist/pdfjs', sub), { recursive: true });
  }
  console.log('[post-build] Copied pdf.js assets to dist/pdfjs');
}
