import { describe, it, expect } from 'vitest';
import { svgWithCaption } from '../caption';
import { cellPixels, cellWidth } from '../sheet';
import { obscureBox, type Shape } from '../../canvas/annotate';

const SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 33 33" shape-rendering="crispEdges"><path d="M0 0h33v33H0z"/></svg>';

describe('QR caption in SVG', () => {
  it('leaves the file alone without a caption', () => {
    expect(svgWithCaption(SVG, '  ', '#000000', '#ffffff')).toBe(SVG);
  });
  it('grows the picture downwards and keeps its width', () => {
    const out = svgWithCaption(SVG, 'Scan me', '#000000', '#ffffff');
    const vb = out.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/)!;
    expect(Number(vb[1])).toBe(33);
    expect(Number(vb[2])).toBeGreaterThan(33);
    expect(out).toContain('width="1024"');
    expect(Number(out.match(/\sheight="(\d+)"/)![1])).toBe(Math.round((1024 * Number(vb[2])) / 33));
    expect(out).toContain('>Scan me</text></svg>');
  });
  it('escapes text so it cannot break the file', () => {
    expect(svgWithCaption(SVG, 'a<b & "c"', '#000', '#fff')).toContain('>a&lt;b &amp; &quot;c&quot;</text>');
  });
});

describe('Printable code sheet', () => {
  it('fits the columns between 10 mm margins with 4 mm gaps', () => {
    const mm = 72 / 25.4;
    expect(cellWidth('a4', 1)).toBeCloseTo(595.28 - 20 * mm, 2);
    expect(cellWidth('a4', 4) * 4 + 3 * 4 * mm + 20 * mm).toBeCloseTo(595.28, 2);
    expect(cellWidth('letter', 3)).toBeGreaterThan(cellWidth('a4', 3));
  });
  it('draws codes at 300 dpi', () => {
    expect(cellPixels('a4', 1)).toBe(Math.round((cellWidth('a4', 1) / 72) * 300));
  });
});

describe('Blur and pixelate area', () => {
  const shape = (x1: number, y1: number, x2: number, y2: number): Shape => ({ id: 1, tool: 'blur', x1, y1, x2, y2, color: '#000', size: 4 });
  it('works whichever way it was dragged', () => {
    expect(obscureBox(shape(80, 60, 20, 10), 100, 100)).toEqual({ x: 20, y: 10, w: 60, h: 50 });
  });
  it('stays inside the picture', () => {
    expect(obscureBox(shape(-30, -5, 150, 40.2), 100, 80)).toEqual({ x: 0, y: 0, w: 100, h: 41 });
    expect(obscureBox(shape(120, 10, 140, 20), 100, 80).w).toBe(0);
  });
});
