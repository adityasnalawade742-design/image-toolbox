// Give each sitemap entry a real "last modified" date: the date its visible content last changed, not the build date.
//
// Every build fingerprints each page's visible text (title, description and the main content, without scripts, styles
// or markup, so new code bundles alone don't count as a change) and compares it with the fingerprints the live site
// published last time in /sitemap-state.json. Unchanged pages keep their old date; changed or new pages get today's.
// If the live state can't be read, the build stops rather than date every page today.
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const DIST = path.resolve('dist');
const SITE = (process.env.PUBLIC_SITE_URL || 'https://tadafile.com').replace(/\/$/, '');
const STATE_FILE = 'sitemap-state.json';
export const INDEXNOW_PENDING = path.resolve('.cache/indexnow-pending.json');

function pageFile(loc) {
  const p = new URL(loc).pathname.replace(/^\/|\/$/g, '');
  return path.join(DIST, p, 'index.html');
}

/** Visible text of a page, so markup, scripts and asset names don't count as content changes */
export function fingerprint(html) {
  const pick = (re) => (html.match(re) || [])[1] || '';
  const text = [pick(/<title>([\s\S]*?)<\/title>/), pick(/<meta name="description" content="([^"]*)"/), pick(/<main[^>]*>([\s\S]*?)<\/main>/)]
    .join('\n')
    .replace(/<(script|style|template)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    // Astro sometimes slips NUL bytes into Japanese or Korean text (removed later in post-build); never count them
    .replaceAll('\0', '')
    .trim();
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 16);
}

async function liveState() {
  // A passing network hiccup must not reset every page's date, so try a few times
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${SITE}/${STATE_FILE}`, { signal: AbortSignal.timeout(15000), headers: { 'Cache-Control': 'no-cache' } });
      if (res.status === 404) return {}; // first release with dates: every page counts as new
      if (res.ok) return await res.json();
    } catch {
      // retried below
    }
    if (attempt < 3) await new Promise((r) => setTimeout(r, attempt * 3000));
  }
  return null;
}

export async function setSitemapDates() {
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  const today = new Date().toISOString().slice(0, 10);
  const previous = await liveState();
  // Publishing without it would date every page today and skip telling search engines what changed: stop instead
  if (!previous) {
    throw new Error(`[post-build] Couldn't read ${SITE}/${STATE_FILE} after 3 tries, so page dates can't be kept. Check the connection and build again.`);
  }
  const state = {};
  let changed = 0;
  const changedUrls = [];
  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
    const loc = (inner.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    const file = loc && pageFile(loc);
    if (!file || !fs.existsSync(file)) return block;
    const h = fingerprint(fs.readFileSync(file, 'utf8'));
    const before = previous[loc];
    const date = before && before.h === h ? before.d : today;
    if (!before || before.h !== h) {
      changed++;
      changedUrls.push(loc);
    }
    state[loc] = { h, d: date };
    const withoutDate = inner.replace(/\s*<lastmod>[^<]*<\/lastmod>/, '');
    return `<url>${withoutDate.replace(/(<\/loc>)/, `$1\n    <lastmod>${date}</lastmod>`)}</url>`;
  });
  fs.writeFileSync(sitemapPath, xml);
  fs.writeFileSync(path.join(DIST, STATE_FILE), JSON.stringify(state));
  // Pages to tell search engines about after the deploy (scripts/indexnow.mjs). Kept outside dist, so it isn't published
  fs.mkdirSync(path.dirname(INDEXNOW_PENDING), { recursive: true });
  fs.writeFileSync(INDEXNOW_PENDING, JSON.stringify(changedUrls));
  console.log(`[post-build] Sitemap dates: ${changed} of ${Object.keys(state).length} pages changed or new since the live site, the rest keep their dates`);
}
