import { describe, expect, it } from 'vitest';
import { PDFDocument, StandardFonts, degrees } from 'pdf-lib';
import { booklet, bookletOrder, nUp, nupGrid } from '../impose';

async function makePdf(count: number, size: [number, number] = [595.28, 841.89], rotate = 0) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  for (let i = 0; i < count; i++) {
    const p = doc.addPage(size);
    p.drawText(`Page ${i + 1}`, { x: 50, y: 50, size: 40, font });
    if (rotate) p.setRotation(degrees(rotate));
  }
  return doc.save();
}
const sizes = async (bytes: Uint8Array) => (await PDFDocument.load(bytes)).getPages().map((p) => p.getSize());

describe('bookletOrder', () => {
  it('imposes 8 pages on 2 sheets, outer pages first', () => {
    expect(bookletOrder(8)).toEqual([[7, 0], [1, 6], [5, 2], [3, 4]]);
  });
  it('pads to a multiple of 4 with blanks at the end', () => {
    expect(bookletOrder(5)).toEqual([[null, 0], [1, null], [null, 2], [3, 4]]);
    expect(bookletOrder(1)).toEqual([[null, 0], [null, null]]);
  });
  it('uses every page exactly once', () => {
    for (const n of [3, 12, 17, 40]) {
      const used = bookletOrder(n).flat().filter((x) => x !== null).sort((a, b) => a! - b!);
      expect(used).toEqual(Array.from({ length: n }, (_, i) => i));
    }
  });
  it('mirrors the halves for right-to-left binding', () => {
    expect(bookletOrder(4, true)).toEqual([[0, 3], [2, 1]]);
  });
});

describe('nupGrid', () => {
  it('lays portrait pages 2 to a landscape sheet and 4 to a portrait one', () => {
    const two = nupGrid(2, 595, 842, 595, 842, 18);
    expect([two.cols, two.rows, two.width > two.height]).toEqual([2, 1, true]);
    const four = nupGrid(4, 595, 842, 595, 842, 18);
    expect([four.cols, four.rows, four.width < four.height]).toEqual([2, 2, true]);
  });
  it('lays landscape slides 2 to a portrait sheet, one above the other', () => {
    const g = nupGrid(2, 595, 842, 960, 540, 18);
    expect([g.cols, g.rows, g.width < g.height]).toEqual([1, 2, true]);
  });
});

describe('nUp', () => {
  it('puts 4 pages per sheet and keeps the sheet size', async () => {
    const out = await nUp(await makePdf(9), { perSheet: 4, sheet: 'a4', order: 'across', borders: true, margin: 18 });
    const s = await sizes(out);
    expect(s.length).toBe(3);
    expect(Math.round(s[0].width)).toBe(595);
  });
  it('handles rotated pages', async () => {
    const out = await nUp(await makePdf(2, [595, 842], 90), { perSheet: 2, sheet: 'a4', order: 'across', borders: false, margin: 18 });
    expect((await sizes(out)).length).toBe(1);
  });
});

describe('booklet', () => {
  it('makes 2 landscape sides per 4 pages', async () => {
    const out = await booklet(await makePdf(6), { sheet: 'a4', rightToLeft: false });
    const s = await sizes(out);
    expect(s.length).toBe(4);
    expect(s[0].width).toBeGreaterThan(s[0].height);
  });
  it('keeps full size on a double-width sheet', async () => {
    const out = await booklet(await makePdf(4, [400, 600]), { sheet: 'double', rightToLeft: false });
    const s = await sizes(out);
    expect([Math.round(s[0].width), Math.round(s[0].height)]).toEqual([800, 600]);
  });
});
