import { describe, it, expect } from 'vitest';
import { findColumns, type OcrLine } from '../columns';
// Word boxes from Tesseract's first reading (the site's tesseract.js and English data) of test pages made for this:
// columns of prose, and layouts with wide gaps that must stay whole (a receipt, a table, a menu, a phone photo)
import pages from './columns.fixture.json';

type Page = { width: number; height: number; lines: { text: string; bbox: number[]; words: number[][] }[] };
const box = ([x0, y0, x1, y1]: number[]) => ({ x0, y0, x1, y1 });
const layout = (name: keyof typeof pages) => {
  const page = pages[name] as Page;
  const lines: OcrLine[] = page.lines.map((l) => ({ text: l.text, bbox: box(l.bbox), words: l.words.map((w) => ({ bbox: box(w) })) }));
  return findColumns(lines, page.width, page.height);
};

describe('finding text set in columns', () => {
  it('splits two columns at the gutter', () => {
    const found = layout('two-columns');
    expect(found?.columns).toHaveLength(2);
    expect(found?.before).toHaveLength(0);
    expect(found?.after).toHaveLength(0);
    // The cut is in the gutter between the columns (150-790 and 910-1550 px)
    expect(found!.columns[1].left).toBeGreaterThan(790);
    expect(found!.columns[1].left).toBeLessThan(910);
  });

  it('keeps a heading over both columns as one line before them', () => {
    const found = layout('headline-2col');
    expect(found?.columns).toHaveLength(2);
    expect(found?.before.map((l) => l.text)).toEqual(['Harbour news: ferry timetable changes']);
    // The columns start below the heading
    expect(found!.columns[0].top).toBeGreaterThan(found!.before[0].bbox.y1);
  });

  it('splits three columns of different lengths', () => {
    expect(layout('three-col')?.columns).toHaveLength(3);
  });

  it.each(['small-receipt', 'staff-table', 'menu', 'clean-page', 'phone-photo', 'accents'] as const)(
    'leaves %s as one block',
    (name) => {
      expect(layout(name)).toBeNull();
    },
  );

  it('needs a few lines of text to judge', () => {
    const page = pages['two-columns'] as Page;
    const lines: OcrLine[] = page.lines.slice(0, 3).map((l) => ({ text: l.text, bbox: box(l.bbox), words: l.words.map((w) => ({ bbox: box(w) })) }));
    expect(findColumns(lines, page.width, page.height)).toBeNull();
  });
});
