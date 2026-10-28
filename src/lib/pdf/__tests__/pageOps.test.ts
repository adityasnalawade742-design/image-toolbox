import { describe, it, expect, vi } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import assets from '../../ai/modelAssets.json';
import type { FontScript } from '../unicodeFont';
import { PdfUnsupportedTextError } from '../errors';
import { PDFDocument, StandardFonts, degrees } from 'pdf-lib';
import {
  parseRanges,
  chunkRanges,
  mergePdfs,
  buildFromPages,
  extractPages,
  splitPdf,
  rotatePages,
  addPageNumbers,
  pageLabel,
  readMetadata,
  stripMetadata,
  cropPages,
  listFormFields,
  fillForm,
  stampImage,
  loadPdf,
  visualPage,
  placeCentred,
} from '../pageOps';

// A PDF with `n` pages; page i is (100 + i) points wide, so pages can be told apart after reordering
async function makePdf(n: number, meta = false) {
  const doc = await PDFDocument.create();
  for (let i = 0; i < n; i++) doc.addPage([100 + i, 200]);
  if (meta) {
    doc.setTitle('Secret plan');
    doc.setAuthor('Someone');
  }
  return doc.save();
}
const widths = async (bytes: Uint8Array) => (await PDFDocument.load(bytes)).getPages().map((p) => Math.round(p.getWidth()));

// 1×1 transparent PNG
const PNG = Uint8Array.from(
  atob('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='),
  (c) => c.charCodeAt(0)
);

describe('parseRanges', () => {
  it('reads single pages, ranges and open ends', () => {
    expect(parseRanges('1-3, 5, 8-', 10)).toEqual([[0, 1, 2], [4], [7, 8, 9]]);
  });
  it('clamps to the document and ignores nonsense', () => {
    expect(parseRanges('0, 4-99, abc, 12', 6)).toEqual([[3, 4, 5]]);
  });
  it('accepts reversed ranges and en dashes', () => {
    expect(parseRanges('3–1', 5)).toEqual([[0, 1, 2]]);
  });
});

describe('chunkRanges', () => {
  it('splits into groups', () => {
    expect(chunkRanges(5, 2)).toEqual([[0, 1], [2, 3], [4]]);
  });
});

describe('page operations', () => {
  it('merges documents in order', async () => {
    const out = await mergePdfs([await makePdf(2), await makePdf(1)]);
    expect(await widths(out)).toEqual([100, 101, 100]);
  });

  it('reorders, drops and rotates pages', async () => {
    const out = await buildFromPages(await makePdf(4), [{ index: 3 }, { index: 0, rotate: 90 }]);
    const doc = await PDFDocument.load(out);
    expect(await widths(out)).toEqual([103, 100]);
    expect(doc.getPage(1).getRotation().angle).toBe(90);
  });

  it('extracts and splits', async () => {
    const src = await makePdf(5);
    expect(await widths(await extractPages(src, [4, 1]))).toEqual([104, 101]);
    const parts = await splitPdf(src, [[0, 1], [4]]);
    expect(parts.length).toBe(2);
    expect(await widths(parts[1])).toEqual([104]);
  });

  it('rotates chosen pages and wraps past 360', async () => {
    const r1 = await rotatePages(await makePdf(3), [1], 270);
    const r2 = await rotatePages(r1, 'all', 180);
    const doc = await PDFDocument.load(r2);
    expect(doc.getPages().map((p) => p.getRotation().angle)).toEqual([180, 90, 180]);
  });

  it('adds page numbers without errors and formats labels', async () => {
    const out = await addPageNumbers(await makePdf(3), { position: 'bottom-center', format: 'n-of-total', start: 1, fontSize: 10, margin: 20, skipFirst: true });
    expect((await PDFDocument.load(out)).getPageCount()).toBe(3);
    expect(pageLabel(2, 5, 'n-of-total')).toBe('2 / 5');
    expect(pageLabel(3, 5, 'dash')).toBe('– 3 –');
  });

  it('stamps an image on chosen pages', async () => {
    const out = await stampImage(await makePdf(2), { png: PNG, cx: 0.5, cy: 0.5, widthFraction: 0.3, opacity: 0.5, rotate: 30, pages: [0] });
    expect((await PDFDocument.load(out)).getPageCount()).toBe(2);
  });

  describe('rotated pages', () => {
    // A 600 × 400 page whose crop box starts at (10, 20), shown turned by `angle`
    const page = async (angle: number) => {
      const doc = await PDFDocument.create();
      const p = doc.addPage([600, 400]);
      p.setCropBox(10, 20, 580, 360);
      p.setRotation(degrees(angle));
      return p;
    };

    it('measures and maps the page as seen on screen', async () => {
      // Visible top-left corner → the unrotated corner that turning brings to the top-left
      const corners: Record<number, [number, number]> = { 0: [10, 380], 90: [10, 20], 180: [590, 20], 270: [590, 380] };
      for (const angle of [0, 90, 180, 270]) {
        const v = visualPage(await page(angle));
        expect([v.width, v.height]).toEqual(angle % 180 ? [360, 580] : [580, 360]);
        const c = v.toPage(0, 0);
        expect([c.x, c.y]).toEqual(corners[angle]);
      }
      // A quarter turn: moving right on screen moves up the unrotated page
      const v = visualPage(await page(90));
      expect(v.toPage(100, 0)).toEqual({ x: 10, y: 120 });
    });

    it('keeps a stamp centred where it was placed and upright on screen', async () => {
      for (const angle of [0, 90, 180, 270]) {
        const p = await page(angle);
        const { x, y, rotate } = placeCentred(p, 50, 30, 80, 20, 15);
        // Drawn angle = on-screen angle + page rotation, so the page's turn cancels out
        expect(((rotate.angle - angle) % 360 + 360) % 360).toBeCloseTo(15);
        // The box's centre, from its rotated bottom-left corner, lands on the mapped point
        const a = (rotate.angle * Math.PI) / 180;
        const cx = x + 40 * Math.cos(a) - 10 * Math.sin(a);
        const cy = y + 40 * Math.sin(a) + 10 * Math.cos(a);
        const want = visualPage(p).toPage(50, 30);
        expect(cx).toBeCloseTo(want.x);
        expect(cy).toBeCloseTo(want.y);
      }
    });

    it('numbers and stamps rotated pages', async () => {
      const doc = await PDFDocument.create();
      doc.addPage([300, 200]).setRotation(degrees(90));
      const src = await doc.save();
      const numbered = await addPageNumbers(src, { position: 'bottom-right', format: 'n', start: 1, fontSize: 10, margin: 20 });
      const stamped = await stampImage(numbered, { png: PNG, cx: 0.8, cy: 0.9, widthFraction: 0.2, pages: 'all' });
      expect((await PDFDocument.load(stamped)).getPage(0).getRotation().angle).toBe(90);
    });
  });

  it('reads and strips metadata', async () => {
    const src = await makePdf(1, true);
    expect((await readMetadata(src)).title).toBe('Secret plan');
    const clean = await readMetadata(await stripMetadata(src));
    expect(clean.title).toBeUndefined();
    expect(clean.author).toBeUndefined();
    expect(clean.hasXmp).toBe(false);
  });

  it('crops pages to a smaller visible area', async () => {
    const out = await cropPages(await makePdf(1), { top: 0.1, right: 0, bottom: 0.1, left: 0.25 }, 'all');
    const box = (await PDFDocument.load(out)).getPage(0).getCropBox();
    expect(Math.round(box.x)).toBe(25);
    expect(Math.round(box.width)).toBe(75);
    expect(Math.round(box.height)).toBe(160);
  });

  it('lists and fills form fields, then flattens', async () => {
    const doc = await PDFDocument.create();
    const page = doc.addPage([300, 300]);
    const form = doc.getForm();
    const name = form.createTextField('name');
    name.addToPage(page, { x: 10, y: 200, width: 200, height: 20 });
    const agree = form.createCheckBox('agree');
    agree.addToPage(page, { x: 10, y: 150, width: 15, height: 15 });
    await doc.embedFont(StandardFonts.Helvetica);
    const src = await doc.save();

    const fields = await listFormFields(src);
    expect(fields.map((f) => [f.name, f.type])).toEqual([
      ['name', 'text'],
      ['agree', 'checkbox'],
    ]);
    const filled = await fillForm(src, { name: 'Aditya', agree: true }, false);
    const after = await listFormFields(filled);
    expect(after[0].value).toBe('Aditya');
    expect(after[1].value).toBe(true);
    const flat = await fillForm(src, { name: 'Aditya' }, true);
    expect((await listFormFields(flat)).length).toBe(0);
  });

  describe('form text outside Latin-1', () => {
    // The pinned site fonts, from the build cache (present after one build)
    const cached = (script: FontScript) => readFileSync(resolve('.cache/models', assets.fonts.files[script].sha256));
    const haveFonts = Object.values(assets.fonts.files).every((f) => existsSync(resolve('.cache/models', f.sha256)));
    const formPdf = async () => {
      const doc = await PDFDocument.create();
      const page = doc.addPage([400, 300]);
      ['a', 'b', 'c'].forEach((n, i) => doc.getForm().createTextField(n).addToPage(page, { x: 10, y: 20 + i * 60, width: 300, height: 30 }));
      return doc.save();
    };

    it('keeps Latin-1 text on the standard font without loading another', async () => {
      const load = vi.fn(async (s: FontScript) => cached(s));
      await fillForm(await formPdf(), { a: 'Café – 10 €' }, true, load);
      expect(load).not.toHaveBeenCalled();
    });

    it.skipIf(!haveFonts)('writes Cyrillic, Japanese and Korean with the matching font', async () => {
      const load = vi.fn(async (s: FontScript) => cached(s));
      const out = await fillForm(await formPdf(), { a: 'Привет, Ğüşİ', b: '東京都 山田太郎', c: '서울 홍길동' }, false, load);
      expect(load.mock.calls.map((c) => c[0]).sort()).toEqual(['ja', 'ko', 'latin']);
      const vals = (await listFormFields(out)).map((f) => f.value);
      expect(vals).toEqual(['Привет, Ğüşİ', '東京都 山田太郎', '서울 홍길동']);
      await fillForm(await formPdf(), { b: '東京都' }, true, load);
    });

    it.skipIf(!haveFonts)('names the fields whose writing system no font covers', async () => {
      const err = await fillForm(await formPdf(), { a: 'ok', b: 'مرحبا' }, false, async (s) => cached(s)).catch((e) => e);
      expect(err).toBeInstanceOf(PdfUnsupportedTextError);
      expect(err.fields).toEqual(['b']);
    });
  });

  it('opens normal documents', async () => {
    await expect(loadPdf(await makePdf(1))).resolves.toBeTruthy();
  });
});
