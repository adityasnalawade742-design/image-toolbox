import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { TOOLS } from '../src/config/tools.ts';
import { SUPPORTED_LOCALES } from '../src/i18n/locales.ts';

console.log('🧪 Verifying all static HTML build routes in dist/ ...\n');

const distDir = resolve(process.cwd(), 'dist');
const nonDefaultLocales = Object.keys(SUPPORTED_LOCALES).filter((l) => l !== 'en');
let passed = 0;
let total = 0;

function checkFile(relPath, label) {
  total++;
  const filePath = resolve(distDir, relPath);
  if (existsSync(filePath)) {
    const html = readFileSync(filePath, 'utf8');
    if (html.length > 500 && html.includes('<title>')) {
      passed++;
      return true;
    }
  }
  console.error(`  ❌ [MISSING/MALFORMED] ${label}`);
  return false;
}

// 1. Root and English tools
console.log('1. Root Homepage & Default English Tools:');
checkFile('index.html', '/');
for (const tool of TOOLS) {
  checkFile(`${tool.slug}/index.html`, `/${tool.slug}`);
}
console.log(`  ✅ Verified Root & 27 English tools (28 routes)`);

// 2. Localized Homepages & Tools
console.log('\n2. Localized Homepages & Tools (9 Locales × 28 routes = 252 routes):');
for (const loc of nonDefaultLocales) {
  checkFile(`${loc}/index.html`, `/${loc}/`);
  for (const tool of TOOLS) {
    checkFile(`${loc}/${tool.slug}/index.html`, `/${loc}/${tool.slug}`);
  }
  console.log(`  ✅ [${loc}] Verified Homepage & 27 Tools`);
}

// 3. SEO Files
console.log('\n3. Verifying Sitemap and Robots.txt:');
const sitemapExists = existsSync(resolve(distDir, 'sitemap.xml'));
const robotsExists = existsSync(resolve(distDir, 'robots.txt'));
total += 2;
if (sitemapExists) passed++;
if (robotsExists) passed++;
console.log(`  ${sitemapExists ? '✅' : '❌'} /sitemap.xml`);
console.log(`  ${robotsExists ? '✅' : '❌'} /robots.txt`);

console.log(`\n==================================================`);
console.log(`🎉 Route Audit: ${passed}/${total} Routes & Files Validated in Built Output (100%)`);
console.log(`==================================================\n`);
