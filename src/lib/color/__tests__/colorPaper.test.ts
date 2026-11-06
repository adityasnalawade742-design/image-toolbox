import { describe, expect, it } from 'vitest';
import { contrast, formats, fromOklch, nearestName, parseColor, suggestFix, toHex, toOklch, wcag } from '../color';
import { PAPERS, fromMm, nearestPaper, parseRatio, ratioOf, heightFor, show, toMm } from '../../print/paper';

const c = (s: string) => parseColor(s)!;

describe('colour parsing', () => {
  it.each([
    ['#f00', '#ff0000'],
    ['#FF000080', '#ff000080'],
    ['ff8800', '#ff8800'],
    ['rgb(255, 128, 0)', '#ff8000'],
    ['rgb(255 128 0 / 50%)', '#ff800080'],
    ['hsl(120, 100%, 50%)', '#00ff00'],
    ['hsl(240deg 100% 50%)', '#0000ff'],
    ['hsv(0, 100%, 100%)', '#ff0000'],
    ['cmyk(0%, 100%, 100%, 0%)', '#ff0000'],
    ['rebeccapurple', '#663399'],
    ['255, 255, 255', '#ffffff'],
    ['oklch(62.8% 0.2577 29.23)', '#ff0000'],
    ['lab(53.24 80.09 67.2)', '#ff0000'],
  ])('reads %s', (input, hex) => {
    expect(toHex(c(input))).toBe(hex);
  });
  it('rejects things that aren’t colours', () => {
    for (const s of ['', 'nope', '#12', 'rgb(1,2)', '300 0 0']) expect(parseColor(s)).toBeNull();
  });
  it('writes every format', () => {
    const f = formats(c('#3366cc'));
    expect(f.hex).toBe('#3366CC');
    expect(f.rgb).toBe('rgb(51 102 204)');
    expect(f.hsl).toBe('hsl(220 60% 50%)');
    expect(f.cmyk).toBe('cmyk(75% 50% 0% 20%)');
  });
  it('round-trips through OKLCH', () => {
    for (const hex of ['#3366cc', '#ff8800', '#123456', '#ffffff', '#000000']) {
      const [L, C, H] = toOklch(c(hex));
      expect(toHex(fromOklch(L, C, H))).toBe(hex);
    }
  });
  it('names the nearest CSS colour', () => {
    expect(nearestName(c('#ff0000'))).toEqual({ name: 'red', exact: true });
    expect(nearestName(c('#fe0102')).exact).toBe(false);
  });
});

describe('contrast', () => {
  it('matches the WCAG reference values', () => {
    expect(contrast(c('#000'), c('#fff'))).toBeCloseTo(21, 5);
    expect(contrast(c('#777'), c('#fff'))).toBeCloseTo(4.48, 2);
    expect(contrast(c('#767676'), c('#fff'))).toBeCloseTo(4.54, 2);
  });
  it('grades against AA and AAA', () => {
    expect(wcag(4.54)).toMatchObject({ aaNormal: true, aaaNormal: false, aaLarge: true, aaaLarge: true });
    expect(wcag(3.2)).toMatchObject({ aaNormal: false, aaLarge: true, ui: true });
  });
  it('blends see-through text with the background', () => {
    expect(contrast(c('rgb(0 0 0 / 50%)'), c('#fff'))).toBeLessThan(contrast(c('#000'), c('#fff')));
  });
  it('suggests the nearest colour that passes', () => {
    const fix = suggestFix(c('#999999'), c('#ffffff'), 4.5)!;
    expect(contrast(fix, c('#ffffff'))).toBeGreaterThanOrEqual(4.5);
    // Still grey, just darker
    expect(Math.abs(fix.r - fix.g)).toBeLessThanOrEqual(2);
    expect(suggestFix(c('#000'), c('#fff'), 4.5)).toEqual(c('#000'));
    // The closest, not just any: #595959 is the lightest grey with 7:1 on white
    expect(toHex(suggestFix(c('#767676'), c('#fff'), 7)!)).toBe('#595959');
    expect(toHex(suggestFix(c('#999999'), c('#fff'), 4.5)!)).toBe('#767676');
  });
});

describe('paper sizes', () => {
  it('has the ISO and US sizes right', () => {
    const get = (id: string) => PAPERS.find((p) => p.id === id)!;
    expect([get('a4').w, get('a4').h]).toEqual([210, 297]);
    expect([get('a5').w, get('a5').h]).toEqual([148, 210]);
    expect([get('a0').w, get('a0').h]).toEqual([841, 1189]);
    expect([get('b5').w, get('b5').h]).toEqual([176, 250]);
    expect([get('c4').w, get('c4').h]).toEqual([229, 324]);
    expect(get('letter').w).toBeCloseTo(215.9, 5);
  });
  it('converts units', () => {
    expect(fromMm(25.4, 'in')).toBe(1);
    expect(fromMm(210, 'px', 300)).toBeCloseTo(2480.3, 1);
    expect(show(fromMm(297, 'px', 300), 'px')).toBe('3508');
    expect(toMm(72, 'pt')).toBeCloseTo(25.4, 5);
  });
  it('finds the nearest standard size', () => {
    expect(nearestPaper(297, 210).paper.id).toBe('a4');
    expect(nearestPaper(216, 279).paper.id).toBe('letter');
  });
});

describe('aspect ratios', () => {
  it('simplifies and names ratios', () => {
    expect(ratioOf(1920, 1080)).toMatchObject({ w: 16, h: 9, nearest: { w: 16, h: 9, exact: true } });
    expect(ratioOf(1080, 1350)).toMatchObject({ w: 4, h: 5 });
    expect(ratioOf(1366, 768)?.nearest.w).toBe(16);
  });
  it('solves for the missing side', () => {
    expect(heightFor(1920, 16, 9)).toBe(1080);
  });
  it('reads ratios people type', () => {
    expect(parseRatio('16:9')).toEqual([16, 9]);
    expect(parseRatio('4/3')).toEqual([4, 3]);
    expect(parseRatio('2.39')).toEqual([2.39, 1]);
    expect(parseRatio('abc')).toBeNull();
  });
});
