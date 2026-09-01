import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { TOOLS } from '../src/config/tools.ts';

console.log('🧪 Verifying all 27 tool static HTML build files in dist/ ...\n');

const distDir = resolve(process.cwd(), 'dist');
let passed = 0;

for (const tool of TOOLS) {
  const filePath = resolve(distDir, tool.slug, 'index.html');
  if (existsSync(filePath)) {
    const html = readFileSync(filePath, 'utf8');
    if (html.length > 500 && html.includes('<title>')) {
      console.log(`  ✅ [200 OK] /${tool.slug} (${(html.length / 1024).toFixed(1)} KB)`);
      passed++;
    } else {
      console.error(`  ❌ [MALFORMED] /${tool.slug}`);
    }
  } else {
    console.error(`  ❌ [MISSING] /${tool.slug}`);
  }
}

console.log(`\n==================================================`);
console.log(`🎉 Route Audit: ${passed}/${TOOLS.length} Tools Validated in Built Output`);
console.log(`==================================================\n`);
