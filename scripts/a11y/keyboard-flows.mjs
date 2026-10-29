// Keyboard walkthroughs of what automated checks can't judge: skip link, search dialog, language list,
// colour picker, censor boxes, text position, focus ring, page viewer. usage: npm run a11y:keys [-- baseUrl]
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const BROWSER = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const [BASE = 'http://127.0.0.1:4321'] = process.argv.slice(2);
const OUT = join(ROOT, '.a11y-report');
mkdirSync(OUT, { recursive: true });
const PORT = 9441;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = spawn(BROWSER, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'kbd-'))}`, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
let targets;
for (let i = 0; i < 60; i++) { try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json(); break; } catch { await sleep(500); } }
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r));
let seq = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const id = ++seq; pending.set(id, r); ws.send(JSON.stringify({ id, method, params })); });
const ev = async (x) => (await send('Runtime.evaluate', { expression: x, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send('Runtime.enable'); await send('Page.enable'); await send('DOM.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });

const KEYS = { Tab: 9, Enter: 13, Escape: 27, ' ': 32, ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, k: 75 };
const press = async (key, { shift = false, ctrl = false } = {}) => {
  const modifiers = (shift ? 8 : 0) | (ctrl ? 2 : 0);
  const base = { key, code: key === ' ' ? 'Space' : key.length === 1 ? 'Key' + key.toUpperCase() : key, windowsVirtualKeyCode: KEYS[key], modifiers };
  await send('Input.dispatchKeyEvent', { type: 'rawKeyDown', ...base });
  if (key === 'Enter' || key === ' ') await send('Input.dispatchKeyEvent', { type: 'char', text: key === 'Enter' ? '\r' : ' ', ...base });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', ...base });
  await sleep(120);
};
const active = () => ev(`(() => { const e = document.activeElement; return e ? (e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + ' "' + (e.getAttribute('aria-label') || e.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 50) + '"') : null; })()`);
const go = async (path) => { await send('Page.navigate', { url: BASE + path }); await sleep(2500); };
const upload = async (file) => {
  const { root } = (await send('DOM.getDocument', { depth: -1 })).result;
  const q = (await send('DOM.querySelector', { nodeId: root.nodeId, selector: 'main input[type=file]' })).result;
  await send('DOM.setFileInputFiles', { nodeId: q.nodeId, files: [join(HERE, file)] });
  await sleep(3000);
};
const focusSel = (sel) => ev(`(() => { const e = document.querySelector(${JSON.stringify(sel)}); if (!e) return false; e.focus(); return true; })()`);
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };

// 1. Skip link
await go('/crop-image/');
await press('Tab');
const first = await active();
check('Skip link is the first Tab stop', /Skip to main content/.test(first), first);
const skipVisible = await ev(`document.activeElement.getBoundingClientRect().top >= 0`);
check('Skip link becomes visible on focus', skipVisible);
await press('Enter'); await sleep(200);
check('Skip link moves focus to main content', (await active())?.startsWith('main#main'), await active());
await press('Tab');
check('Next Tab after skipping lands inside main', await ev(`!!document.activeElement.closest('main')`), await active());

// 2. Search dialog: Ctrl+K, focus inside, Escape returns focus
await go('/crop-image/');
await ev(`document.body.focus(); 0`);
await press('k', { ctrl: true }); await sleep(300);
const inDialog = await ev(`!!document.activeElement.closest('[role=dialog]')`);
check('Ctrl+K opens search with focus inside the dialog', inDialog, await active());
let escaped = false;
for (let i = 0; i < 25; i++) { await press('Tab'); if (!(await ev(`!!document.activeElement.closest('[role=dialog]')`))) { escaped = true; break; } }
check('Tab stays inside the open search dialog', !escaped, escaped ? 'focus left to ' + (await active()) : '');
await press('Escape'); await sleep(200);
check('Escape closes search', !(await ev(`!!document.querySelector('[role=dialog]')`)));
// open from the trigger button so focus has somewhere to return
await focusSel('header button'); const trigger = await active();
await press('Enter'); await sleep(300); await press('Escape'); await sleep(200);
check('Focus returns to the search button after closing', (await active()) === trigger, `${trigger} -> ${await active()}`);

// 3. Language list (disclosure of links)
await go('/crop-image/');
await focusSel('header button[aria-controls]');
await press('Enter'); await sleep(200);
check('Language button expands', (await ev(`document.activeElement.getAttribute('aria-expanded')`)) === 'true');
await press('Tab');
check('Tab moves into the language links', await ev(`!!document.activeElement.closest('ul') && document.activeElement.tagName === 'A'`), await active());
await press('Escape'); await sleep(150);
check('Escape closes the list and returns to the button', (await ev(`document.activeElement.getAttribute('aria-controls') !== null && document.activeElement.getAttribute('aria-expanded') === 'false'`)), await active());
check('No menu roles left (they promise arrow keys)', !(await ev(`!!document.querySelector('[role=menu],[role=menuitem]')`)));

// 4. Color picker by keyboard
await go('/image-color-picker/');
await upload('samples/photo.jpg');
await focusSel('canvas[role=slider]');
const v0 = await ev(`document.querySelector('canvas[role=slider]').getAttribute('aria-valuetext')`);
await press('ArrowRight', { shift: true }); await press('ArrowDown', { shift: true }); await press('ArrowLeft');
const v1 = await ev(`document.querySelector('canvas[role=slider]').getAttribute('aria-valuetext')`);
check('Arrow keys move the picker (value text updates)', v0 !== v1, `${v0} -> ${v1}`);
check('Loupe shows while the picker has focus', await ev(`!!document.querySelector('.grid-cols-7')`));
await press('Enter'); await sleep(300);
const announced = await ev(`[...document.querySelectorAll('[aria-live]')].map((e) => e.textContent).join(' | ')`);
check('Enter picks the color and announces it', /Picked #[0-9A-F]{6}/.test(announced), announced.slice(0, 120));
check('Picked color appears in the panel', await ev(`/#[0-9A-F]{6}/.test(document.querySelector('main').innerText) && !document.body.innerText.includes('Pick a color from the image')`));
await send('Page.captureScreenshot', { format: 'png' }).then((s) => writeFileSync(join(OUT, 'kbd-picker.png'), Buffer.from(s.result.data, 'base64')));

// 5. Censor tool without a mouse
await go('/censor-image/');
await upload('samples/photo.jpg');
const addBtn = await ev(`(() => { const b = [...document.querySelectorAll('button')].find((x) => x.textContent.trim() === 'Add box'); if (!b) return false; b.focus(); return true; })()`);
check('Add box button exists', addBtn);
await press('Enter'); await sleep(300);
check('Add box creates a box', (await ev(`[...document.querySelectorAll('button[aria-pressed]')].filter((b) => /^Box 1/.test(b.textContent)).length`)) === 1);
const before = await ev(`document.getElementById('censor-box-w').value`);
await focusSel('#censor-box-w'); await press('ArrowUp'); await press('ArrowUp'); await sleep(200);
const after = await ev(`document.getElementById('censor-box-w').value`);
check('Box width changes with arrow keys in its field', +after === +before + 2, `${before} -> ${after}`);
const pixelChanged = await ev(`(() => { const c = document.querySelector('main canvas'); const x = c.getContext('2d'); const d = x.getImageData(Math.floor(c.width/2), Math.floor(c.height/2), 1, 1).data; return d.join(','); })()`);
check('Box is drawn on the image', !!pixelChanged, pixelChanged);
await focusSel('button[aria-label="Remove box 1"]'); await press('Enter'); await sleep(200);
check('Remove box works from the keyboard', (await ev(`[...document.querySelectorAll('button[aria-pressed]')].filter((b) => /^Box /.test(b.textContent)).length`)) === 0);
await send('Page.captureScreenshot', { format: 'png' }).then((s) => writeFileSync(join(OUT, 'kbd-censor.png'), Buffer.from(s.result.data, 'base64')));

// 6. Text tool: horizontal position without dragging
await go('/add-text-to-image/');
await upload('samples/photo.jpg');
await ev(`(() => { const s = [...document.querySelectorAll('select')].find((x) => [...x.options].some((o) => o.value === 'custom')); const set = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set; set.call(s, 'custom'); s.dispatchEvent(new Event('change', { bubbles: true })); })()`);
await sleep(300);
const hx = await ev(`(() => { const l = [...document.querySelectorAll('label')].find((x) => x.textContent.includes('Horizontal position')); return l ? document.getElementById(l.htmlFor)?.type : null; })()`);
check('Custom text position has a horizontal slider', hx === 'range');
check('Drag handle is hidden from screen readers', await ev(`[...document.querySelectorAll('[aria-hidden=true]')].some((e) => (e.getAttribute('class') || '').includes('cursor-move'))`));

// 7. Focus ring contrast against paper
await go('/compress-image/'); await press('Tab'); await press('Tab');
const ring = await ev(`getComputedStyle(document.activeElement).outlineColor`);
check('Focus ring uses the darker cyan', /rgb\(0, 114, 176\)/.test(ring), ring);

// 8. Page viewer: open from a page card, stay inside, step with arrows, Escape returns to the card
await go('/organize-pdf/');
await upload('samples/doc.pdf');
await focusSel('button[aria-label="View page 2"]');
await press('Enter'); await sleep(1500);
check('Enter on a page opens the viewer with focus inside', await ev(`!!document.activeElement.closest('[role=dialog][aria-modal=true]')`), await active());
let left = false;
for (let i = 0; i < 15; i++) { await press('Tab'); if (!(await ev(`!!document.activeElement.closest('[role=dialog]')`))) { left = true; break; } }
check('Tab stays inside the viewer', !left, left ? 'focus left to ' + (await active()) : '');
await press('ArrowRight'); await sleep(800);
check('Arrow right shows the next page', /Page 3/.test(await ev(`document.querySelector('[role=dialog] p')?.textContent || ''`)));
await press('Escape'); await sleep(300);
check('Escape closes the viewer and returns to the page card', !(await ev(`!!document.querySelector('[role=dialog]')`)) && /View page 2/.test(await active()), await active());

const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
ws.close(); browser.kill(); process.exit(failed ? 1 : 0);
