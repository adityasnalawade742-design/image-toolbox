import { describe, it, expect } from 'vitest';
import { computeCrop, cropCentre, sheetLayout, mmToPx } from '../passport';

describe('passport geometry', () => {
  it('converts millimetres to pixels at 300 dpi', () => {
    expect(mmToPx(35)).toBe(413);
    expect(mmToPx(45)).toBe(531);
    expect(mmToPx(50.8)).toBe(600);
  });

  it('fits the largest window of the right shape at zoom 1', () => {
    const c = computeCrop(4000, 3000, 35 / 45, 1, 0.5, 0.5);
    expect(c.h).toBe(3000);
    expect(c.w).toBeCloseTo(3000 * (35 / 45));
    expect(c.x).toBeCloseTo((4000 - c.w) / 2);
  });

  it('zooms in and keeps the window inside the image', () => {
    const c = computeCrop(1000, 1000, 1, 2, 0.05, 0.99);
    expect(c.w).toBe(500);
    expect(c.x).toBe(0);
    expect(c.y).toBe(500);
    const centre = cropCentre(c, 1000, 1000);
    expect(centre.cx).toBe(0.25);
    expect(centre.cy).toBe(0.75);
  });

  it('lays out 35×45 mm photos on 4×6 in paper', () => {
    const l = sheetLayout(101.6, 152.4, 35, 45);
    expect(l.cols).toBe(2);
    expect(l.rows).toBe(3);
    expect(l.slots.length).toBe(6);
    // centred: equal space left and right
    const right = 101.6 - (l.slots[1].x + 35);
    expect(l.slots[0].x).toBeCloseTo(right);
  });

  it('lays out photos on A4', () => {
    const l = sheetLayout(210, 297, 35, 45);
    expect(l.cols * l.rows).toBe(l.slots.length);
    expect(l.cols).toBe(5);
    expect(l.rows).toBe(6);
  });
});
