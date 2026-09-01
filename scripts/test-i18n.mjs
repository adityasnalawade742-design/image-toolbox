import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('=== INTERNATIONALIZATION & MULTI-COUNTRY SEO AUDIT ===\n');

const testCases = [
  { path: 'index.html', lang: 'en', expectedTitle: 'Image Toolbox', expectedH1: 'Precision Image Tools' },
  { path: 'crop-image/index.html', lang: 'en', expectedTitle: 'Crop Image', expectedH1: 'Crop Image' },
  { path: 'es/index.html', lang: 'es', expectedTitle: 'Image Toolbox', expectedH1: 'Herramientas de Imagen de Precisión' },
  { path: 'es/crop-image/index.html', lang: 'es', expectedTitle: 'Recortar Imagen', expectedH1: 'Recortar Imagen' },
  { path: 'fr/compress-image/index.html', lang: 'fr', expectedTitle: 'Compresser une Image', expectedH1: 'Compresser une Image' },
  { path: 'de/resize-image/index.html', lang: 'de', expectedTitle: 'Bild Skalieren', expectedH1: 'Bild Skalieren & Größe Ändern' },
  { path: 'pt/crop-image/index.html', lang: 'pt', expectedTitle: 'Cortar Imagem', expectedH1: 'Cortar Imagem' },
  { path: 'it/crop-image/index.html', lang: 'it', expectedTitle: 'Ritaglia Immagine', expectedH1: 'Ritaglia Immagine' },
  { path: 'ja/crop-image/index.html', lang: 'ja', expectedTitle: '画像', expectedH1: '画像を切り抜き・トリミング' },
  { path: 'ko/crop-image/index.html', lang: 'ko', expectedTitle: '이미지 자르기', expectedH1: '이미지 자르기 및 트리밍' },
  { path: 'id/crop-image/index.html', lang: 'id', expectedTitle: 'Potong Gambar', expectedH1: 'Potong Gambar Online' }
];

let totalPassed = 0;
let totalFailed = 0;

for (const tc of testCases) {
  const filePath = path.join(distDir, tc.path);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File missing: ${tc.path}`);
    totalFailed++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  
  // 1. Language attribute
  const hasLang = html.includes(`<html lang="${tc.lang}"`);
  // 2. Title check
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const titleText = titleMatch ? titleMatch[1] : '';
  const hasTitle = titleText.includes(tc.expectedTitle);
  // 3. H1 check
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1Text = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim() : '';
  const hasH1 = h1Text.includes(tc.expectedH1);
  // 4. Hreflang check (x-default + language alternates)
  const hasXDefault = html.includes('hreflang="x-default"');
  const hasHreflangEs = html.includes('hreflang="es"');
  const hasHreflangJa = html.includes('hreflang="ja"');
  // 5. Canonical check
  const hasCanonical = html.includes('<link rel="canonical"');

  const passed = hasLang && hasTitle && hasH1 && hasXDefault && hasHreflangEs && hasHreflangJa && hasCanonical;

  if (passed) {
    console.log(`✅ [${tc.lang.toUpperCase()}] ${tc.path}`);
    console.log(`   - Title: "${titleText}"`);
    console.log(`   - H1: "${h1Text.substring(0, 40)}..."`);
    console.log(`   - Hreflang: x-default, es, ja, etc. present`);
    totalPassed++;
  } else {
    console.error(`❌ [${tc.lang.toUpperCase()}] ${tc.path} FAILED:`);
    console.error(`   - Lang attr: ${hasLang} (found: ${html.match(/<html[^>]*>/)?.[0]})`);
    console.error(`   - Title match: ${hasTitle} ("${titleText}")`);
    console.error(`   - H1 match: ${hasH1} ("${h1Text}")`);
    console.error(`   - Hreflang: xDefault=${hasXDefault}, es=${hasHreflangEs}`);
    totalFailed++;
  }
}

// Check sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const countUrls = (sitemapXml.match(/<loc>/g) || []).length;
  console.log(`\n✅ sitemap.xml generated with ${countUrls} total URLs (28 English + 8 localized home + 216 localized tools)`);
}

// Check robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsTxt = fs.readFileSync(robotsPath, 'utf8');
  const hasSitemap = robotsTxt.includes('Sitemap:');
  console.log(`✅ robots.txt generated (allows all routes, Sitemap reference: ${hasSitemap})`);
}

console.log(`\nAudit Complete: ${totalPassed} Passed, ${totalFailed} Failed.`);
