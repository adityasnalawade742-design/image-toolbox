import { describe, it, expect } from 'vitest';
import { layoutMerge, fitToCanvasLimits } from '../mergeLayout';

const a = { width: 400, height: 300 };
const b = { width: 200, height: 200 };

describe('layoutMerge', () => {
  it('side by side with matched heights scales to the smaller height', () => {
    const l = layoutMerge([a, b], { direction: 'horizontal', columns: 2, spacing: 10, matchSizes: true });
    expect(l.placements.map((p) => p.h)).toEqual([200, 200]);
    expect(l.placements[0].w).toBe(267); // 400 × 200/300
    expect(l.width).toBe(10 + 267 + 10 + 200 + 10);
    expect(l.height).toBe(220);
    expect(l.placements[1].x).toBe(10 + 267 + 10);
  });

  it('stacked without matching keeps original sizes and centres them', () => {
    const l = layoutMerge([a, b], { direction: 'vertical', columns: 2, spacing: 0, matchSizes: false });
    expect(l.width).toBe(400);
    expect(l.height).toBe(500);
    expect(l.placements[1]).toMatchObject({ x: 100, y: 300, w: 200, h: 200 });
  });

  it('grid with matched sizes fills equal cells and crops the overflow', () => {
    const l = layoutMerge([a, b, a], { direction: 'grid', columns: 2, spacing: 0, matchSizes: true });
    expect(l.width).toBe(400); // two 200-wide cells
    expect(l.height).toBe(400); // two rows of 200
    expect(l.placements[2]).toMatchObject({ x: 0, y: 200, w: 200, h: 200 });
    // a 400×300 image covering a 200×200 cell uses its central 300×300
    expect(l.placements[0].sw).toBeCloseTo(300);
    expect(l.placements[0].sx).toBeCloseTo(50);
  });

  it('never makes more columns than images', () => {
    const l = layoutMerge([a, b], { direction: 'grid', columns: 5, spacing: 0, matchSizes: false });
    expect(l.width).toBe(800);
  });
});

describe('fitToCanvasLimits', () => {
  it('leaves normal layouts alone', () => {
    const l = layoutMerge([a, b], { direction: 'horizontal', columns: 2, spacing: 0, matchSizes: false });
    expect(fitToCanvasLimits(l).scale).toBe(1);
  });

  it('scales huge layouts inside the browser canvas limit', () => {
    const big = { width: 9000, height: 6000 };
    const l = layoutMerge([big, big, big], { direction: 'horizontal', columns: 3, spacing: 0, matchSizes: false });
    const { layout, scale } = fitToCanvasLimits(l);
    expect(scale).toBeLessThan(1);
    expect(layout.width).toBeLessThanOrEqual(16000);
    expect(layout.width * layout.height).toBeLessThanOrEqual(120_000_000 * 1.01);
  });
});
