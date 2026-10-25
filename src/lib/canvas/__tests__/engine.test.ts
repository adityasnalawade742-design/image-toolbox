import { describe, it, expect } from 'vitest';
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  rgbToCmyk,
  formatBytes,
  paletteFromPixels,
  wrapTextLines,
} from '../engine';

describe('Canvas Engine — Color Conversion Math', () => {
  it('correctly converts HEX to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  it('correctly converts RGB to HEX', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#FF0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00FF00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000FF');
    expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
  });

  it('correctly converts RGB to HSL', () => {
    const redHsl = rgbToHsl(255, 0, 0);
    expect(redHsl.h).toBe(0);
    expect(redHsl.s).toBe(100);
    expect(redHsl.l).toBe(50);

    const greenHsl = rgbToHsl(0, 255, 0);
    expect(greenHsl.h).toBe(120);
    expect(greenHsl.s).toBe(100);
    expect(greenHsl.l).toBe(50);
  });

  it('correctly converts RGB to HSV', () => {
    const blueHsv = rgbToHsv(0, 0, 255);
    expect(blueHsv.h).toBe(240);
    expect(blueHsv.s).toBe(100);
    expect(blueHsv.v).toBe(100);
  });

  it('correctly converts RGB to CMYK', () => {
    const blackCmyk = rgbToCmyk(0, 0, 0);
    expect(blackCmyk).toEqual({ c: 0, m: 0, y: 0, k: 100 });

    const whiteCmyk = rgbToCmyk(255, 255, 255);
    expect(whiteCmyk).toEqual({ c: 0, m: 0, y: 0, k: 0 });

    const yellowCmyk = rgbToCmyk(255, 255, 0);
    expect(yellowCmyk.c).toBe(0);
    expect(yellowCmyk.m).toBe(0);
    expect(yellowCmyk.y).toBe(100);
    expect(yellowCmyk.k).toBe(0);
  });
});

describe('Canvas Engine — Utility Formatters', () => {
  it('formats bytes into readable strings', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1024 * 1024 * 2.5)).toBe('2.5 MB');
    expect(formatBytes(1024 * 1024 * 1024 * 1.2)).toBe('1.2 GB');
  });
});

describe('Canvas Engine — Palette Extraction', () => {
  // Build an RGBA buffer from [r, g, b, a, pixelCount] runs
  const pixels = (runs: [number, number, number, number, number][]) => {
    const out: number[] = [];
    for (const [r, g, b, a, n] of runs) for (let i = 0; i < n; i++) out.push(r, g, b, a);
    return new Uint8ClampedArray(out);
  };

  it('never pads with fake colors when the image has fewer colors than requested', () => {
    const palette = paletteFromPixels(pixels([[255, 0, 0, 255, 60], [0, 0, 255, 255, 40]]), 6);
    expect(palette).toEqual(['#FF0000', '#0000FF']);
  });

  it('orders colors by how much of the image they cover', () => {
    const palette = paletteFromPixels(pixels([[0, 128, 0, 255, 10], [200, 200, 0, 255, 90]]), 2);
    expect(palette).toEqual(['#C8C800', '#008000']);
  });

  it('merges near-duplicate shades into one swatch', () => {
    const palette = paletteFromPixels(
      pixels([[250, 250, 250, 255, 50], [244, 246, 248, 255, 50], [10, 10, 10, 255, 20]]),
      3
    );
    expect(palette).toHaveLength(2);
    expect(palette[1]).toBe('#0A0A0A');
  });

  it('ignores transparent pixels', () => {
    expect(paletteFromPixels(pixels([[255, 0, 0, 0, 100], [0, 255, 0, 255, 5]]), 4)).toEqual(['#00FF00']);
  });
});

describe('Canvas Engine — Text Wrapping', () => {
  const measure = (s: string) => s.length * 10; // 10px per character

  it('wraps words onto new lines to fit the width', () => {
    expect(wrapTextLines('one does not simply walk', 100, measure)).toEqual(['one does', 'not simply', 'walk']);
  });

  it('keeps explicit line breaks', () => {
    expect(wrapTextLines('top\nbottom line here', 120, measure)).toEqual(['top', 'bottom line', 'here']);
  });

  it('leaves a single over-long word on its own line instead of dropping it', () => {
    expect(wrapTextLines('a supercalifragilistic b', 100, measure)).toEqual(['a', 'supercalifragilistic', 'b']);
  });
});
