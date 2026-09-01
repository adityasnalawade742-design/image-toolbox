const http = require('http');

const routes = [
  '/', '/crop-image', '/resize-image', '/compress-image', '/rotate-image', '/flip-image',
  '/convert-image', '/jpg-to-png', '/png-to-jpg', '/jpg-to-webp', '/png-to-webp',
  '/webp-to-jpg', '/webp-to-png', '/bulk-image-resizer', '/bulk-image-compressor',
  '/remove-image-metadata', '/image-analyzer', '/image-color-picker', '/image-palette-generator',
  '/add-text-to-image', '/watermark-image', '/add-border-to-image', '/round-image',
  '/favicon-generator', '/image-to-base64', '/image-to-data-uri', '/base64-to-image',
  '/svg-to-png', '/sitemap.xml', '/robots.txt'
];

async function checkRoutes() {
  console.log('--- TESTING ALL PRODUCTION ROUTES ON STAGING VPS ---');
  let successCount = 0;
  for (const r of routes) {
    await new Promise((resolve) => {
      http.get('http://127.0.0.1:3000' + r, (res) => {
        const pass = res.statusCode === 200;
        console.log(`  ${r.padEnd(28)} -> HTTP ${res.statusCode} ${pass ? '✓ PASS' : '❌ FAIL'}`);
        if (pass) successCount++;
        resolve();
      }).on('error', (err) => {
        console.log(`  ${r.padEnd(28)} -> ERROR: ${err.message}`);
        resolve();
      });
    });
  }
  console.log(`\nROUTE AUDIT SUMMARY: ${successCount}/${routes.length} ROUTES RETURNED HTTP 200 OK.`);
}

checkRoutes();
