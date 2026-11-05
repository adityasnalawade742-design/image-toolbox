import { describe, expect, it } from 'vitest';
import { fitInBox, layoutSheet } from '../contactSheet';

const base = { page: 'a4' as const, landscape: false, columns: 4, captions: true, title: false };

describe('layoutSheet', () => {
  it('is an A4 page at 300 DPI', () => {
    const s = layoutSheet(1, base);
    expect([s.width, s.height]).toEqual([2480, 3508]);
    expect([layoutSheet(1, { ...base, landscape: true }).width]).toEqual([3508]);
    expect(layoutSheet(1, { ...base, page: 'letter' }).width).toBe(2550);
  });
  it('places every photo once, in order, across pages', () => {
    const s = layoutSheet(50, base);
    const items = s.pages.flat().map((c) => c.item);
    expect(items).toEqual(Array.from({ length: 50 }, (_, i) => i));
    expect(s.pages.length).toBeGreaterThan(1);
    // All pages but the last are full
    const per = s.pages[0].length;
    expect(s.pages.slice(0, -1).every((p) => p.length === per)).toBe(true);
  });
  it('keeps every box inside the margins with no overlap', () => {
    for (const columns of [2, 3, 5, 8]) {
      const s = layoutSheet(40, { ...base, columns, title: true });
      for (const page of s.pages) {
        for (const c of page) {
          expect(c.x).toBeGreaterThanOrEqual(s.margin - 0.01);
          expect(c.x + c.w).toBeLessThanOrEqual(s.width - s.margin + 0.01);
          expect(c.y).toBeGreaterThanOrEqual(s.top - 0.01);
          expect(c.captionY).toBeLessThanOrEqual(s.height - s.margin);
        }
        for (let a = 0; a < page.length; a++)
          for (let b = a + 1; b < page.length; b++) {
            const A = page[a], B = page[b];
            const apart = A.x + A.w <= B.x + 0.01 || B.x + B.w <= A.x + 0.01 || A.captionY <= B.y || B.captionY <= A.y;
            expect(apart).toBe(true);
          }
      }
    }
  });
  it('fits more rows without captions', () => {
    expect(layoutSheet(100, { ...base, captions: false }).pages[0].length).toBeGreaterThan(layoutSheet(100, base).pages[0].length);
  });
});

describe('fitInBox', () => {
  it('fits without cropping and centres', () => {
    expect(fitInBox(400, 300, { x: 0, y: 0, w: 200, h: 150 })).toEqual({ x: 0, y: 0, w: 200, h: 150 });
    const tall = fitInBox(300, 600, { x: 10, y: 10, w: 200, h: 150 });
    expect(tall.h).toBe(150);
    expect(tall.w).toBe(75);
    expect(tall.x).toBeCloseTo(10 + 62.5);
  });
});
