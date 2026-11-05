import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { POSTER_MARGIN, posterLayout, posterPdf, tileLabel } from '../poster';
import { MM, graphGeometry, graphPdf, type GraphOptions } from '../graphPaper';

const opts = { sheet: 'a4' as const, landscape: false, across: 3, overlap: 10, marks: true };

describe('posterLayout', () => {
  it('spreads the picture over whole pages, with the overlap counted once per join', () => {
    const L = posterLayout(3000, 2000, opts);
    expect(L.cols).toBe(3);
    expect(L.posterW).toBeCloseTo(3 * L.printW - 2 * L.overlap, 6);
    expect(L.posterH / L.posterW).toBeCloseTo(2000 / 3000, 6);
    // Enough rows to cover the height, and not one more
    expect((L.rows - 1) * (L.printH - L.overlap) + L.printH).toBeGreaterThanOrEqual(L.posterH);
    expect((L.rows - 2) * (L.printH - L.overlap) + L.printH).toBeLessThan(L.posterH);
  });
  it('keeps a printable border', () => {
    const L = posterLayout(100, 100, opts);
    expect(L.pageW - L.printW).toBeCloseTo(2 * POSTER_MARGIN, 6);
  });
  it('labels tiles by row letter and column number', () => {
    expect(tileLabel(0, 0)).toBe('A1');
    expect(tileLabel(2, 3)).toBe('C4');
  });
});

describe('posterPdf', () => {
  it('makes one page per tile', async () => {
    const png = Uint8Array.from(atob('iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAIAAAB7QOjdAAAAEElEQVR4nGP4z8DAwMDAAAAOAgEA0n2c3gAAAABJRU5ErkJggg=='), (c) => c.charCodeAt(0));
    const L = posterLayout(2, 1, opts);
    const bytes = await posterPdf((doc) => doc.embedPng(png), 2, 1, opts);
    expect((await PDFDocument.load(bytes)).getPageCount()).toBe(L.cols * L.rows);
  });
});

const base: GraphOptions = { kind: 'square', sheet: 'a4', landscape: false, spacing: 5 * MM, major: 0, color: [150, 170, 200], weight: 0.4, margin: 10 * MM };

describe('graphGeometry', () => {
  it('draws whole 5 mm squares centred inside the margins', () => {
    const g = graphGeometry(base);
    // A4 is 210 mm wide: 190 mm inside the margins makes 38 squares, so 39 vertical lines
    const vertical = [];
    for (let i = 0; i < g.lines.length; i += 4) if (Math.abs(g.lines[i] - g.lines[i + 2]) < 1e-6) vertical.push(g.lines[i]);
    expect(vertical.length).toBe(39);
    expect(vertical[0]).toBeCloseTo(10 * MM, 1);
    expect(vertical[1] - vertical[0]).toBeCloseTo(5 * MM, 6);
  });
  it('puts every second-level line in the heavy set', () => {
    const g = graphGeometry({ ...base, spacing: 1 * MM, major: 10 });
    expect(g.majors.length / 4).toBe(20 + 28);
  });
  it('keeps every line and dot inside the margins', () => {
    for (const kind of ['square', 'dots', 'isometric', 'hex', 'lined'] as const) {
      const g = graphGeometry({ ...base, kind });
      const m = 10 * MM - 1e-6;
      const all = [...g.lines, ...g.majors];
      for (let i = 0; i < all.length; i += 2) {
        expect(all[i]).toBeGreaterThanOrEqual(m);
        expect(all[i]).toBeLessThanOrEqual(g.width - m);
        expect(all[i + 1]).toBeGreaterThanOrEqual(m);
        expect(all[i + 1]).toBeLessThanOrEqual(g.height - m);
      }
      for (let i = 0; i < g.dots.length; i += 2) expect(g.dots[i]).toBeGreaterThanOrEqual(m);
      expect(all.length + g.dots.length, kind).toBeGreaterThan(0);
    }
  });
  it('isometric lines meet at shared points: three directions through the centre', () => {
    const g = graphGeometry({ ...base, kind: 'isometric' });
    const angles = new Set<number>();
    for (let i = 0; i < g.lines.length; i += 4) angles.add(Math.round((Math.atan2(g.lines[i + 3] - g.lines[i + 1], g.lines[i + 2] - g.lines[i]) * 180) / Math.PI + 360) % 180);
    expect([...angles].sort((a, b) => a - b)).toEqual([30, 90, 150]);
  });
  it('draws each hexagon edge once', () => {
    const g = graphGeometry({ ...base, kind: 'hex' });
    const keys = new Set<string>();
    for (let i = 0; i < g.lines.length; i += 4) keys.add([g.lines[i], g.lines[i + 1], g.lines[i + 2], g.lines[i + 3]].map((v) => v.toFixed(2)).join());
    expect(keys.size).toBe(g.lines.length / 4);
  });
});

describe('graphPdf', () => {
  it('is one vector page of the chosen size', async () => {
    const doc = await PDFDocument.load(await graphPdf({ ...base, sheet: 'letter', landscape: true }));
    expect(doc.getPageCount()).toBe(1);
    expect(doc.getPage(0).getSize()).toEqual({ width: 792, height: 612 });
  });
});
