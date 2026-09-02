import { describe, it, expect } from 'vitest';
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  rgbToCmyk,
  formatBytes,
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
