import { describe, it, expect } from 'vitest';
import { DirtyBox, dabsAlong } from '../refineBrush';

describe('refine brush strokes', () => {
  it('places dabs close enough to join, ending exactly at the pointer', () => {
    const pts = dabsAlong({ x: 0, y: 0 }, { x: 100, y: 0 }, 20);
    expect(pts.at(-1)).toEqual({ x: 100, y: 0 });
    // A step of 30% of the radius (6 px): 17 dabs over 100 px
    expect(pts.length).toBe(17);
    for (let i = 1; i < pts.length; i++) expect(pts[i].x - pts[i - 1].x).toBeLessThanOrEqual(6);
  });

  it('still paints one dab when the pointer has not moved', () => {
    expect(dabsAlong({ x: 5, y: 5 }, { x: 5, y: 5 }, 10)).toEqual([{ x: 5, y: 5 }]);
  });

  it('covers every dab of a stroke for undo, kept inside the picture', () => {
    const box = new DirtyBox();
    box.add(10, 10, 5);
    box.add(50, 30, 5);
    expect(box.clamp(100, 100)).toEqual({ x: 3, y: 3, w: 54, h: 34 });
    // A stroke over the edge is cut to the picture
    const edge = new DirtyBox();
    edge.add(-5, 90, 10);
    expect(edge.clamp(100, 100)).toEqual({ x: 0, y: 78, w: 7, h: 22 });
  });

  it('has nothing to keep for a stroke entirely outside the picture', () => {
    const box = new DirtyBox();
    box.add(-50, -50, 5);
    expect(box.clamp(100, 100)).toBeNull();
  });
});
