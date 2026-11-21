// Whether a scheduled guide is due: its `published` date has come but the live site doesn't list it yet. The scheduled
// workflow (.github/workflows/publish-guides.yml) builds and deploys only then, so days without a new guide cost nothing.
// Checking the live sitemap, not just today's date, also catches a guide whose day was missed (a failed run).
//
//   node scripts/guides-due.mjs     prints the due guides; writes due=true|false to $GITHUB_OUTPUT when set
import fs from 'node:fs';
import path from 'node:path';

const SITE = (process.env.PUBLIC_SITE_URL || 'https://tadafile.com').replace(/\/$/, '');
const DIR = 'src/content/guides';

const now = Date.now();
const guides = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const text = fs.readFileSync(path.join(DIR, f), 'utf8');
    const date = text.match(/^published:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
    if (!date) throw new Error(`${f}: no published date`);
    return { slug: f.replace(/\.md$/, ''), date, out: Date.parse(`${date}T00:00:00Z`) <= now };
  });

const res = await fetch(`${SITE}/sitemap.xml`, { headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(30000) });
if (!res.ok) throw new Error(`live sitemap: HTTP ${res.status}`);
const live = await res.text();
const due = guides.filter((g) => g.out && !live.includes(`<loc>${SITE}/guides/${g.slug}</loc>`));
const later = guides.filter((g) => !g.out).sort((a, b) => a.date.localeCompare(b.date));

console.log(due.length ? `due now:\n${due.map((g) => `  ${g.date} ${g.slug}`).join('\n')}` : 'no guide due');
if (later.length) console.log(`scheduled:\n${later.map((g) => `  ${g.date} ${g.slug}`).join('\n')}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `due=${due.length > 0}\n`);
