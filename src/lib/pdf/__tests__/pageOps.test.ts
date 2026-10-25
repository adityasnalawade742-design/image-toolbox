import { describe, it, expect } from 'vitest';
import { PDFDocument, StandardFonts } from 'pdf-lib';
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

  it('opens normal documents', async () => {
    await expect(loadPdf(await makePdf(1))).resolves.toBeTruthy();
  });
});
