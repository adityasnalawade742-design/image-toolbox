// Give each sitemap entry a real "last modified" date: the date its visible content last changed, not the build date.
//
// Every build fingerprints each page's visible text (title, description and the main content, without scripts, styles
// or markup, so new code bundles alone don't count as a change) and compares it with the fingerprints the live site
// published last time in /sitemap-state.json. Unchanged pages keep their old date; changed or new pages get today's.
// If the live state can't be read, the sitemap leaves lastmod out rather than claim that every page changed today.
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const DIST = path.resolve('dist');
const SITE = (process.env.PUBLIC_SITE_URL || 'https://tadafile.com').replace(/\/$/, '');
const STATE_FILE = 'sitemap-state.json';

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
    .trim();
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 16);
}

async function liveState() {
  try {
    const res = await fetch(`${SITE}/${STATE_FILE}`, { signal: AbortSignal.timeout(15000), headers: { 'Cache-Control': 'no-cache' } });
    if (res.status === 404) return {}; // first release with dates: every page counts as new
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function setSitemapDates() {
  const sitemapPath = path.join(DIST, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return;
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  const today = new Date().toISOString().slice(0, 10);
  const previous = await liveState();
  const state = {};
  let changed = 0;
  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
    const loc = (inner.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    const file = loc && pageFile(loc);
    if (!file || !fs.existsSync(file)) return block;
    const h = fingerprint(fs.readFileSync(file, 'utf8'));
    const before = previous && previous[loc];
    const date = before && before.h === h ? before.d : today;
    if (date === today) changed++;
    state[loc] = { h, d: date };
    const withoutDate = inner.replace(/\s*<lastmod>[^<]*<\/lastmod>/, '');
    return previous ? `<url>${withoutDate.replace(/(<\/loc>)/, `$1\n    <lastmod>${date}</lastmod>`)}</url>` : `<url>${withoutDate}</url>`;
  });
  fs.writeFileSync(sitemapPath, xml);
  fs.writeFileSync(path.join(DIST, STATE_FILE), JSON.stringify(state));
  console.log(
    previous
      ? `[post-build] Sitemap dates: ${changed} of ${Object.keys(state).length} pages changed or new, the rest keep their dates`
      : `[post-build] Sitemap dates: live state unavailable, lastmod left out this time`
  );
}
