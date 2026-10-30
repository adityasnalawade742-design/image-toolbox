import { describe, it, expect } from 'vitest';
import { ALL_SOCIAL_PRESETS, SOCIAL_PRESETS, placeImage } from '../socialSizes';
import { VISION_MATRICES, VISION_TYPES, simulateVision } from '../colorBlind';
import { aspectRatio, convertLength, formatLength, megapixels } from '../../calc/printUnits';

describe('placing a picture in a frame', () => {
  it('fill covers the frame and centres the overflow', () => {
    const p = placeImage(2000, 1000, 1000, 1000, 'fill');
    expect(p).toEqual({ x: -500, y: 0, w: 2000, h: 1000 });
  });

  it('fit shows the whole picture inside the frame', () => {
    const p = placeImage(2000, 1000, 1000, 1000, 'fit');
    expect(p).toEqual({ x: 0, y: 250, w: 1000, h: 500 });
  });

  it('position slides along the overflow, and never leaves a gap when filling', () => {
    expect(placeImage(2000, 1000, 1000, 1000, 'fill', 1, 0, 0.5).x).toBeCloseTo(0);
    expect(placeImage(2000, 1000, 1000, 1000, 'fill', 1, 1, 0.5).x).toBe(-1000);
    for (const [fx, fy, zoom] of [[0, 0, 1], [1, 1, 1], [0.3, 0.8, 2.5]]) {
      const p = placeImage(1600, 900, 1080, 1350, 'fill', zoom, fx, fy);
      expect(p.x).toBeLessThanOrEqual(0);
      expect(p.y).toBeLessThanOrEqual(0.0001);
      expect(p.x + p.w).toBeGreaterThanOrEqual(1080);
      expect(p.y + p.h).toBeGreaterThanOrEqual(1349.9999);
    }
  });

  it('zoom grows the picture around the chosen position', () => {
    const p = placeImage(1000, 1000, 1000, 1000, 'fill', 2);
    expect(p).toEqual({ x: -500, y: -500, w: 2000, h: 2000 });
  });
});

describe('social presets', () => {
  it('every safe zone sits inside its frame', () => {
    for (const id of ALL_SOCIAL_PRESETS) {
      const { width, height, safe } = SOCIAL_PRESETS[id];
      expect(width).toBeGreaterThan(0);
      expect(height).toBeGreaterThan(0);
      if (!safe) continue;
      expect(safe.x + safe.w).toBeLessThanOrEqual(width);
      expect(safe.y + safe.h).toBeLessThanOrEqual(height);
    }
  });

  it('safe zones are centred', () => {
    const b = SOCIAL_PRESETS['yt-banner'];
    expect(b.safe!.x * 2 + b.safe!.w).toBe(b.width);
    expect(Math.abs(b.safe!.y * 2 + b.safe!.h - b.height)).toBeLessThanOrEqual(1);
  });
});

describe('print units', () => {
  it('converts both ways at a DPI', () => {
    expect(convertLength(300, 'px', 'in', 300)).toBeCloseTo(1);
    expect(convertLength(1, 'in', 'px', 96)).toBeCloseTo(96);
    expect(convertLength(2.54, 'cm', 'px', 300)).toBeCloseTo(300);
    expect(convertLength(1000, 'px', 'cm', 300)).toBeCloseTo(8.4667, 3);
    expect(convertLength(10, 'mm', 'cm', 72)).toBeCloseTo(1);
  });

  it('round-trips', () => {
    for (const dpi of [72, 96, 150, 300, 600]) expect(convertLength(convertLength(1234, 'px', 'cm', dpi), 'cm', 'px', dpi)).toBeCloseTo(1234);
  });

  it('formats results', () => {
    expect(formatLength(299.6, 'px')).toBe('300');
    expect(formatLength(8.46666, 'cm')).toBe('8.467');
    expect(formatLength(2, 'in')).toBe('2');
    expect(formatLength(Infinity, 'in')).toBe('');
  });

  it('names aspect ratios', () => {
    expect(aspectRatio(1920, 1080)).toBe('16:9');
    expect(aspectRatio(1080, 1350)).toBe('4:5');
    expect(aspectRatio(1000, 667)).toBe('1.50:1');
    expect(aspectRatio(0, 10)).toBe('');
    expect(megapixels(4000, 3000)).toBe(12);
  });
});

describe('colour vision simulation', () => {
  const px = (r: number, g: number, b: number) => new Uint8ClampedArray([r, g, b, 200]);

  it('every matrix leaves white and grey alone (rows sum to 1)', () => {
    for (const t of VISION_TYPES) {
      const m = VISION_MATRICES[t];
      for (let row = 0; row < 3; row++) expect(m[row * 3] + m[row * 3 + 1] + m[row * 3 + 2]).toBeCloseTo(1, 3);
      for (const v of [255, 128, 0]) {
        const d = px(v, v, v);
        simulateVision(d, t);
        expect(Math.abs(d[0] - v)).toBeLessThanOrEqual(1);
        expect(Math.abs(d[1] - v)).toBeLessThanOrEqual(1);
        expect(Math.abs(d[2] - v)).toBeLessThanOrEqual(1);
      }
    }
  });

  it('keeps transparency', () => {
    const d = px(200, 50, 50);
    simulateVision(d, 'protanopia');
    expect(d[3]).toBe(200);
  });

  it('makes red and green hard to tell apart for red-green types, but not for tritanopia', () => {
    const distance = (t: Parameters<typeof simulateVision>[1]) => {
      const a = px(200, 40, 40);
      const b = px(40, 160, 40);
      simulateVision(a, t);
      simulateVision(b, t);
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
    };
    expect(distance('deuteranopia')).toBeLessThan(distance('tritanopia'));
    expect(distance('protanopia')).toBeLessThan(distance('tritanopia'));
  });

  it('achromatopsia gives grey', () => {
    const d = px(200, 40, 90);
    simulateVision(d, 'achromatopsia');
    expect(d[0]).toBe(d[1]);
    expect(d[1]).toBe(d[2]);
  });
});
