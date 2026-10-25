import { describe, it, expect } from 'vitest';
import { resizeCrop, drawCrop } from '../cropGeometry';

const IMG = { width: 1000, height: 800 };
const box = { x: 200, y: 200, width: 400, height: 200 }; // 2:1

describe('Crop Geometry — resizeCrop', () => {
  it('freeform: moves only the dragged edges', () => {
    expect(resizeCrop('se', box, 50, 30, IMG, null)).toEqual({ x: 200, y: 200, width: 450, height: 230 });
    expect(resizeCrop('nw', box, -50, -30, IMG, null)).toEqual({ x: 150, y: 170, width: 450, height: 230 });
    expect(resizeCrop('n', box, 0, 40, IMG, null)).toEqual({ x: 200, y: 240, width: 400, height: 160 });
  });

  it('locked ratio: every corner keeps the ratio and pins the opposite corner', () => {
    for (const handle of ['nw', 'ne', 'se', 'sw'] as const) {
      const sign = { nw: [-1, -1], ne: [1, -1], se: [1, 1], sw: [-1, 1] }[handle];
      const r = resizeCrop(handle, box, 100 * sign[0], 0, IMG, 2);
      expect(r.width / r.height).toBeCloseTo(2);
      expect(r.width).toBe(500);
      if (handle.includes('e')) expect(r.x).toBe(200);
      else expect(r.x + r.width).toBe(600);
      if (handle.includes('s')) expect(r.y).toBe(200);
      else expect(r.y + r.height).toBe(400);
    }
  });

  it('locked ratio: vertical-only drags on the n and s edges resize too', () => {
    const s = resizeCrop('s', box, 0, 50, IMG, 2);
    expect(s).toEqual({ x: 150, y: 200, width: 500, height: 250 });
    const n = resizeCrop('n', box, 0, -50, IMG, 2);
    expect(n).toEqual({ x: 150, y: 150, width: 500, height: 250 });
  });

  it('locked ratio: never grows past the image bounds', () => {
    const r = resizeCrop('se', box, 5000, 5000, IMG, 2);
    expect(r.x + r.width).toBeLessThanOrEqual(IMG.width);
    expect(r.y + r.height).toBeLessThanOrEqual(IMG.height);
    expect(r.width / r.height).toBeCloseTo(2);
  });

  it('respects the minimum size', () => {
    const r = resizeCrop('se', box, -5000, -5000, IMG, null);
    expect(r.width).toBe(10);
    expect(r.height).toBe(10);
  });
});

describe('Crop Geometry — drawCrop', () => {
  it('freeform: spans the drag in any direction', () => {
    expect(drawCrop({ x: 500, y: 400 }, { x: 300, y: 300 }, IMG, null)).toEqual({ x: 300, y: 300, width: 200, height: 100 });
  });

  it('locked ratio: draws in the preset ratio, not 1:1', () => {
    const r = drawCrop({ x: 100, y: 100 }, { x: 400, y: 150 }, IMG, 16 / 9);
    expect(r.width / r.height).toBeCloseTo(16 / 9, 1);
    expect(r.width).toBe(300);
  });

  it('locked ratio: clamps to the image while keeping the ratio', () => {
    const r = drawCrop({ x: 900, y: 700 }, { x: 2000, y: 2000 }, IMG, 1);
    expect(r).toEqual({ x: 900, y: 700, width: 100, height: 100 });
  });
});
