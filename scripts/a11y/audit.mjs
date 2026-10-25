// Accessibility audit of every tool, empty and with an image loaded (all controls visible).
// axe-core (WCAG 2.0-2.2 A/AA + best practice) plus checks axe can't do: keyboard walk with visible-focus test,
// target size, canvas names, live regions, reflow at 320px.
// usage: npm run a11y [-- baseUrl [slug,slug]]  (needs `npm run build && npx astro preview` running; CHROME_PATH overrides Chrome)
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const BROWSER = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const [BASE = 'http://127.0.0.1:4321', ONLY] = process.argv.slice(2);
const OUT = join(ROOT, '.a11y-report');
mkdirSync(OUT, { recursive: true });
const S = (f) => join(HERE, 'samples', f);
const AXE = readFileSync(join(ROOT, 'node_modules/axe-core/axe.min.js'), 'utf8');
const TOOLS = readFileSync(join(ROOT, 'src/config/tools.ts'), 'utf8').match(/slug: '([^']+)'/g).map((m) => m.slice(7, -1));
const INPUT = {
  'jpg-to-png': [S('photo.jpg')], 'jpg-to-webp': [S('photo.jpg')],
  'png-to-jpg': [S('photo.png')], 'png-to-webp': [S('photo.png')],
  'webp-to-jpg': [S('photo.webp')], 'webp-to-png': [S('photo.webp')],
  'svg-to-png': [S('shape.svg')], 'favicon-generator': [S('photo.png')],
  'bulk-image-compressor': [S('photo.jpg'), S('photo2.png')], 'bulk-image-resizer': [S('photo.jpg'), S('photo2.png')],
};
const PORT = 9433;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = spawn(BROWSER, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'a11y-'))}`, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
let targets;
for (let i = 0; i < 60; i++) { try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json(); break; } catch { await sleep(500); } }
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let seq = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const id = ++seq; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (x) => { const r = await send('Runtime.evaluate', { expression: x, awaitPromise: true, returnByValue: true }); if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'eval error'); return r.result?.result?.value; };
await send('Runtime.enable'); await send('Page.enable'); await send('DOM.enable');
const viewport = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });

const runAxe = async () => {
  if (!(await ev('!!window.axe'))) await ev(AXE + ';0');
  return ev(`axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice'] }, resultTypes: ['violations'] })
    .then((r) => r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 6).map((n) => ({ target: n.target.join(' '), html: n.html.slice(0, 160), why: (n.failureSummary || '').split('\\n').slice(1, 3).join(' ').slice(0, 220) })), count: v.nodes.length })))`);
};

// Interactive elements under 24x24 CSS px (WCAG 2.5.8), ignoring inline text links and visually hidden inputs
const smallTargets = () => ev(`(() => {
  const out = [];
  for (const el of document.querySelectorAll('button, a[href], input, select, textarea, summary, [role=button], [role=radio], [role=tab], [role=slider], [role=checkbox], [tabindex]:not([tabindex="-1"])')) {
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    if (!r.width || !r.height || cs.visibility === 'hidden' || cs.display === 'none') continue;
    if (el.matches('input[type=file]') || (r.width <= 2 && r.height <= 2)) continue;
    if (el.tagName === 'A' && cs.display === 'inline' && el.closest('p, li, dd')) continue;
    if (r.width < 24 || r.height < 24) out.push(Math.round(r.width) + 'x' + Math.round(r.height) + ' ' + el.tagName.toLowerCase() + (el.type ? '[' + el.type + ']' : '') + ' "' + (el.getAttribute('aria-label') || el.textContent || el.value || '').trim().slice(0, 40) + '"');
  }
  return [...new Set(out)];
})()`);

// Tab through the page: record each stop, flag stops with no visible focus indicator, detect traps
const keyboardWalk = async (maxStops = 120) => {
  await ev(`document.activeElement && document.activeElement.blur(); window.scrollTo(0,0); 0`);
  const stops = [];
  let same = 0, prev = null;
  for (let i = 0; i < maxStops; i++) {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await sleep(30);
    const s = await ev(`(() => {
      const el = document.activeElement; if (!el || el === document.body) return null;
      const cs = getComputedStyle(el);
      const ring = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || (cs.boxShadow && cs.boxShadow !== 'none');
      // a focus-within ring on a wrapping label/parent also counts (e.g. visually hidden radio inside a styled label)
      let parentRing = false; let p = el.parentElement;
      for (let k = 0; p && k < 3; k++, p = p.parentElement) { const pc = getComputedStyle(p); if ((pc.outlineStyle !== 'none' && parseFloat(pc.outlineWidth) > 0) || (pc.boxShadow && pc.boxShadow !== 'none')) { parentRing = true; break; } }
      const r = el.getBoundingClientRect();
      const name = (el.getAttribute('aria-label') || el.innerText || el.value || el.getAttribute('title') || el.name || '').trim().replace(/\\s+/g, ' ').slice(0, 50);
      if (!el.dataset.a11yId) el.dataset.a11yId = String(Math.random()).slice(2, 10);
      return { id: el.dataset.a11yId, tag: el.tagName.toLowerCase() + (el.type ? '[' + el.type + ']' : '') + (el.getAttribute('role') ? '{' + el.getAttribute('role') + '}' : ''), name, ring: ring || parentRing, offscreen: r.bottom < 0 || r.top > innerHeight };
    })()`);
    if (!s) { stops.push({ tag: '(body)', name: '', ring: true }); continue; }
    if (prev && s.id === prev) { if (++same > 2) return { stops, trap: s.tag + ' "' + s.name + '"' }; } else same = 0;
    if (stops.some((x) => x.id === s.id) && stops.length > 3) break; // wrapped around to the start
    prev = s.id; stops.push(s);
  }
  return { stops, trap: null };
};

const extras = () => ev(`(() => {
  const canvases = [...document.querySelectorAll('main canvas')].filter((c) => c.getBoundingClientRect().width > 40);
  const unnamedCanvas = canvases.filter((c) => !(c.getAttribute('aria-label') || c.getAttribute('aria-labelledby') || c.getAttribute('role') === 'presentation' || c.getAttribute('aria-hidden') === 'true' || c.closest('[aria-hidden=true]'))).length;
  const imgsNoAlt = [...document.querySelectorAll('main img')].filter((i) => !i.hasAttribute('alt')).length;
  const live = document.querySelectorAll('[aria-live], [role=status], [role=alert], output').length;
  const h1 = document.querySelectorAll('h1').length;
  const ranges = [...document.querySelectorAll('input[type=range]')].map((r) => ({ named: !!(r.labels?.length || r.getAttribute('aria-label') || r.getAttribute('aria-labelledby')), valuetext: r.getAttribute('aria-valuetext') }));
  return { canvases: canvases.length, unnamedCanvas, imgsNoAlt, live, h1, ranges: ranges.length, rangesUnnamed: ranges.filter((r) => !r.named).length };
})()`);

const loadInput = async (slug) => {
  if (slug === 'base64-to-image') {
    const txt = readFileSync(S('b64.txt'), 'utf8');
    return ev(`(() => { const t = document.querySelector('main textarea'); if (!t) return false;
      const set = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set; set.call(t, ${JSON.stringify(txt)});
      t.dispatchEvent(new Event('input', { bubbles: true })); return true; })()`);
  }
  const { root } = (await send('DOM.getDocument', { depth: -1 })).result;
  const q = (await send('DOM.querySelector', { nodeId: root.nodeId, selector: 'main input[type=file]' })).result;
  if (!q?.nodeId) return false;
  await send('DOM.setFileInputFiles', { nodeId: q.nodeId, files: INPUT[slug] || [S('photo.jpg')] });
  return true;
};

const report = [];
const list = ONLY ? ONLY.split(',') : TOOLS;
for (const slug of list) {
  const r = { slug };
  try {
    await viewport(1366, 900, false);
    await send('Page.navigate', { url: `${BASE}/${slug}/` });
    await sleep(2500);
    r.emptyAxe = await runAxe();
    r.loaded = await loadInput(slug);
    await sleep(slug === 'remove-background' ? 2000 : 3500);
    r.loadedAxe = await runAxe();
    r.extras = await extras();
    r.kbd = await keyboardWalk();
    await viewport(390, 844, true); await sleep(600);
    r.smallTargetsMobile = await smallTargets();
    await viewport(320, 700, true); await sleep(600);
    r.reflow320 = await ev(`(() => { const w = document.documentElement.scrollWidth; const over = w > innerWidth + 1 ? [...document.querySelectorAll('main *')].filter((e) => e.getBoundingClientRect().right > innerWidth + 1 && getComputedStyle(e).position !== 'fixed').slice(0, 4).map((e) => e.tagName.toLowerCase() + '.' + String(e.className).split(' ').slice(0, 3).join('.') + ' ' + Math.round(e.getBoundingClientRect().right)) : []; return { scrollWidth: w, over }; })()`);
    await send('Page.captureScreenshot', { format: 'png' }).then((s) => writeFileSync(join(OUT, `m-${slug}.png`), Buffer.from(s.result.data, 'base64')));
  } catch (err) { r.error = String(err).slice(0, 300); }
  const noRing = (r.kbd?.stops || []).filter((s) => !s.ring);
  console.log(`${slug.padEnd(26)} axe empty ${r.emptyAxe?.length ?? '?'} loaded ${r.loadedAxe?.length ?? '?'} | stops ${r.kbd?.stops.length ?? '?'} noRing ${noRing.length}${r.kbd?.trap ? ' TRAP ' + r.kbd.trap : ''} | small ${r.smallTargetsMobile?.length ?? '?'} | reflow ${r.reflow320?.scrollWidth ?? '?'} | canvas unnamed ${r.extras?.unnamedCanvas ?? '?'}/${r.extras?.canvases ?? '?'} live ${r.extras?.live ?? '?'}${r.error ? ' ERR ' + r.error : ''}`);
  report.push(r);
}
writeFileSync(join(OUT, ONLY ? 'report-partial.json' : 'report.json'), JSON.stringify(report, null, 1));
const problems = report.filter((r) => r.error || r.emptyAxe?.length || r.loadedAxe?.length || r.kbd?.trap || r.kbd?.stops.some((s) => !s.ring) || r.smallTargetsMobile?.length || r.reflow320?.scrollWidth > 320 || r.extras?.unnamedCanvas);
console.log(problems.length ? `
${problems.length} tool(s) need attention; details in .a11y-report/` : `
All ${report.length} tools pass.`);
process.exitCode = problems.length ? 1 : 0;
ws.close(); browser.kill(); process.exit(process.exitCode);
