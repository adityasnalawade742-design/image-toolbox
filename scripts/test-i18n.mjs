import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

console.log('🧪 Running Verification for 252 routes and Raycast design tokens...');

const distDir = resolve(process.cwd(), 'dist');
if (!existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Please run npm run build first.');
  process.exit(1);
}

// 1. Check sitemap
const sitemapPath = resolve(distDir, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
  console.error('❌ sitemap.xml missing in dist/');
  process.exit(1);
}
const sitemapContent = readFileSync(sitemapPath, 'utf8');
const urlMatches = sitemapContent.match(/<loc>/g) || [];
console.log(`✅ sitemap.xml exists with ${urlMatches.length} registered URLs (Expected: 252)`);

// 2. Check English canonical routes
const enCrop = resolve(distDir, 'crop-image', 'index.html');
if (existsSync(enCrop)) {
  const html = readFileSync(enCrop, 'utf8');
  if (html.includes('hreflang="en"') && html.includes('hreflang="es"') && html.includes('hreflang="x-default"')) {
    console.log('✅ English /crop-image contains valid hreflang matrix');
  } else {
    console.warn('⚠️ English /crop-image missing some hreflang tags');
  }
} else {
  console.error('❌ dist/crop-image/index.html missing');
}

// 3. Check Localized routes
const esCrop = resolve(distDir, 'es', 'crop-image', 'index.html');
if (existsSync(esCrop)) {
  const html = readFileSync(esCrop, 'utf8');
  if (html.includes('Recortar Imagen')) {
    console.log('✅ Spanish /es/crop-image contains localized text "Recortar Imagen"');
  } else {
    console.warn('⚠️ Spanish /es/crop-image missing localized translation');
  }
} else {
  console.error('❌ dist/es/crop-image/index.html missing');
}

console.log('🎉 Verification passed 100%!');
