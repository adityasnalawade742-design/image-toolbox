// Tell search engines which pages changed, right after a deploy, through IndexNow (Bing, Yandex, Naver, Seznam and
// others share submissions). The build lists the pages whose visible content changed since the live site
// (scripts/sitemap-lastmod.mjs); this sends that list once the new site, and its key file, are live.
//
//   node scripts/indexnow.mjs          changed pages from the last build
//   node scripts/indexnow.mjs --all    every page in the sitemap (first submission)
//   node scripts/indexnow.mjs --dry    show what would be sent
//
// It never fails a deploy: problems are reported and the list is kept for the next run.
import fs from 'fs';
import path from 'path';
import { INDEXNOW_PENDING } from './sitemap-lastmod.mjs';

const SITE = (process.env.PUBLIC_SITE_URL || 'https://tadafile.com').replace(/\/$/, '');
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_PER_REQUEST = 10000;
const args = new Set(process.argv.slice(2));
const log = (msg) => console.log(`[indexnow] ${msg}`);

function readKey() {
  const file = fs.readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
  return file ? fs.readFileSync(path.join('public', file), 'utf8').trim() : null;
}

function urlsToSend() {
  if (args.has('--all')) {
    const xml = fs.readFileSync('dist/sitemap.xml', 'utf8');
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }
  if (!fs.existsSync(INDEXNOW_PENDING)) return null;
  return JSON.parse(fs.readFileSync(INDEXNOW_PENDING, 'utf8'));
}

async function main() {
  const key = readKey();
  if (!key) return log('no key file in public/, nothing sent');
  const urls = urlsToSend();
  if (urls === null) return log('the last build could not compare with the live site, so nothing is sent (use --all to send every page)');
  // Only this site's own pages; IndexNow rejects the whole request otherwise
  const list = [...new Set(urls)].filter((u) => u.startsWith(`${SITE}/`) || u === SITE);
  if (!list.length) return log('no pages changed, nothing to send');
  if (args.has('--dry')) return log(`would send ${list.length} page(s):\n  ${list.slice(0, 20).join('\n  ')}${list.length > 20 ? '\n  …' : ''}`);

  // The search engines fetch the key file to check the request, so it must already be live
  const keyLocation = `${SITE}/${key}.txt`;
  const live = await fetch(keyLocation, { headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(15000) })
    .then(async (r) => (r.ok ? (await r.text()).trim() : ''))
    .catch(() => '');
  if (live !== key) return log(`the key file isn't live at ${keyLocation} yet; ${list.length} page(s) kept for the next run`);

  const host = new URL(SITE).host;
  for (let i = 0; i < list.length; i += MAX_PER_REQUEST) {
    const urlList = list.slice(i, i + MAX_PER_REQUEST);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key, keyLocation, urlList }),
      signal: AbortSignal.timeout(30000),
    }).catch((e) => ({ ok: false, status: 0, statusText: e.message }));
    // 200 = received, 202 = received and the key is still being checked
    if (res.status !== 200 && res.status !== 202) {
      return log(`not accepted (HTTP ${res.status} ${res.statusText}); ${list.length - i} page(s) kept for the next run`);
    }
  }
  log(`sent ${list.length} page(s) to search engines`);
  if (!args.has('--all')) fs.rmSync(INDEXNOW_PENDING, { force: true });
}

await main().catch((e) => log(`skipped: ${e.message}`));
