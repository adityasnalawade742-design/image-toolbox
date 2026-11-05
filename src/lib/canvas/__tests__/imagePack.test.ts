import { describe, expect, it } from 'vitest';
import { borderColor, channelStats, compareImages, deltaE, differenceMap, histogram, labToRgb, makeTransparent, replaceColor, rgbToLab } from '../imageMath';
import { androidIcons, iosIcons, webIcons } from '../appIcons';
import { arrowHead, bounds, moved, shadowCanvas } from '../annotate';

const img = (w: number, h: number, fn: (x: number, y: number) => [number, number, number, number?]) => {
  const px = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const [r, g, b, a = 255] = fn(x, y);
    px.set([r, g, b, a], (y * w + x) * 4);
  }
  return px;
};

describe('colour spaces', () => {
  it('round-trips sRGB through Lab', () => {
    for (const c of [[0, 0, 0], [255, 255, 255], [200, 30, 90], [12, 140, 250]] as [number, number, number][]) expect(labToRgb(...rgbToLab(...c))).toEqual(c);
  });
  it('measures white to black as the largest difference', () => {
    expect(deltaE(rgbToLab(255, 255, 255), rgbToLab(0, 0, 0))).toBeCloseTo(100, 0);
  });
});

describe('compare', () => {
  it('finds identical pictures identical', () => {
    const a = img(10, 10, () => [10, 20, 30]);
    expect(compareImages(a, a)).toEqual({ changed: 0, visible: 0, maxDelta: 0, psnr: Infinity });
  });
  it('counts changed and visibly changed pixels', () => {
    const a = img(10, 10, () => [100, 100, 100]);
    const b = img(10, 10, (x, y) => (y === 0 ? [200, 100, 100] : x === 0 ? [102, 100, 100] : [100, 100, 100]));
    const s = compareImages(a, b, 8);
    expect(s.changed).toBeCloseTo(19 / 100);
    expect(s.visible).toBeCloseTo(10 / 100);
    expect(s.maxDelta).toBe(100);
    const map = differenceMap(a, b, 8);
    expect([map[0], map[1], map[2]]).toEqual([255, 0, 90]);
    expect(map[(5 * 10 + 5) * 4]).toBeGreaterThan(200);
  });
});

describe('histogram', () => {
  it('counts each channel and brightness, skipping transparent pixels', () => {
    const h = histogram(img(4, 1, (x) => (x === 3 ? [0, 0, 0, 0] : [255, 0, 0])));
    expect(h.count).toBe(3);
    expect(h.r[255]).toBe(3);
    expect(h.g[0]).toBe(3);
    expect(h.l[54]).toBe(3);
  });
  it('reports mean, median, spread and clipping', () => {
    const bins = new Uint32Array(256);
    bins[0] = 1;
    bins[128] = 2;
    bins[255] = 1;
    const s = channelStats(bins);
    expect(s.median).toBe(128);
    expect(s.mean).toBeCloseTo(127.75);
    expect([s.min, s.max, s.clippedLow, s.clippedHigh]).toEqual([0, 255, 0.25, 0.25]);
  });
});

describe('transparency', () => {
  // A red square on white
  const pic = img(20, 20, (x, y) => (x >= 5 && x < 15 && y >= 5 && y < 15 ? [220, 20, 20] : [255, 255, 255]));
  it('clears the background and keeps the subject', () => {
    const out = makeTransparent(pic, 20, 20, { color: [255, 255, 255], tolerance: 5, softness: 0, fromEdges: true });
    expect(out[3]).toBe(0);
    expect(out[(10 * 20 + 10) * 4 + 3]).toBe(255);
  });
  it('leaves the same colour inside the subject alone when working from the edges', () => {
    const ring = img(20, 20, (x, y) => {
      const inSquare = x >= 3 && x < 17 && y >= 3 && y < 17;
      const hole = x >= 8 && x < 12 && y >= 8 && y < 12;
      return inSquare && !hole ? [0, 0, 200] : [255, 255, 255];
    });
    const edge = makeTransparent(ring, 20, 20, { color: [255, 255, 255], tolerance: 5, softness: 0, fromEdges: true });
    expect(edge[(10 * 20 + 10) * 4 + 3]).toBe(255);
    const all = makeTransparent(ring, 20, 20, { color: [255, 255, 255], tolerance: 5, softness: 0, fromEdges: false });
    expect(all[(10 * 20 + 10) * 4 + 3]).toBe(0);
  });
  it('falls back to white when the border is transparent', () => {
    expect(borderColor(img(4, 4, () => [0, 0, 0, 0]), 4, 4)).toEqual([255, 255, 255]);
  });
  it('finds the background colour from the border', () => {
    expect(borderColor(pic, 20, 20).map((v) => Math.abs(v - 255) <= 3)).toEqual([true, true, true]);
  });
});

describe('colour replacement', () => {
  it('moves matching colours and keeps their shading', () => {
    // Two shades of red and one blue pixel
    const px = img(3, 1, (x) => (x === 0 ? [200, 30, 30] : x === 1 ? [150, 20, 20] : [20, 20, 200]));
    const { data, changed } = replaceColor(px, { from: [200, 30, 30], to: [30, 160, 40], tolerance: 25, softness: 0, keepShading: true });
    expect(changed).toBe(2);
    expect(data[1]).toBeGreaterThan(data[0]);
    // The darker red stays darker after becoming green
    expect(data[4 + 1]).toBeLessThan(data[1]);
    expect([data[8], data[9], data[10]]).toEqual([20, 20, 200]);
  });
  it('paints flat when asked', () => {
    const px = img(2, 1, (x) => (x === 0 ? [200, 30, 30] : [150, 20, 20]));
    const { data } = replaceColor(px, { from: [200, 30, 30], to: [0, 0, 255], tolerance: 25, softness: 0, keepShading: false });
    expect([data[0], data[1], data[2], data[4], data[5], data[6]]).toEqual([0, 0, 255, 0, 0, 255]);
  });
});

describe('app icons', () => {
  it('lists the iOS sizes once each, all opaque, with a matching Contents.json', () => {
    const { files, contents } = iosIcons();
    const sizes = files.map((f) => f.size);
    expect(sizes).toContain(1024);
    expect(sizes).toContain(180);
    expect(new Set(sizes).size).toBe(sizes.length);
    expect(files.every((f) => f.opaque)).toBe(true);
    const json = JSON.parse(contents);
    expect(json.images.every((i: { filename: string }) => files.some((f) => f.path.endsWith(i.filename)))).toBe(true);
  });
  it('has Android densities from 48 to 192 px and adaptive layers', () => {
    const { files, adaptiveXml } = androidIcons();
    const launcher = files.filter((f) => f.path.endsWith('/ic_launcher.png')).map((f) => f.size);
    expect(launcher).toEqual([48, 72, 96, 144, 192]);
    expect(files.find((f) => f.path.includes('xxxhdpi/ic_launcher_foreground'))?.size).toBe(432);
    expect(adaptiveXml).toContain('ic_launcher_foreground');
  });
  it('makes a web manifest that names the maskable icon', () => {
    const m = JSON.parse(webIcons('My app', '#123456').manifest);
    expect(m.icons.some((i: { purpose?: string }) => i.purpose === 'maskable')).toBe(true);
    expect(m.background_color).toBe('#123456');
  });
});

describe('annotations', () => {
  it('points the arrow head along the line', () => {
    const [tip, a, b] = arrowHead({ x1: 0, y1: 0, x2: 100, y2: 0, size: 4 });
    expect(tip).toEqual([100, 0]);
    expect(a[0]).toBeLessThan(100);
    expect(a[1]).toBeCloseTo(-b[1]);
  });
  it('moves and bounds shapes', () => {
    const s = { id: 1, tool: 'rect' as const, x1: 10, y1: 10, x2: 50, y2: 30, color: '#f00', size: 2 };
    expect(bounds(moved(s, 5, 5))).toEqual({ x: 13, y: 13, w: 44, h: 24 });
  });
  it('grows the canvas so a shadow is never cut off', () => {
    expect(shadowCanvas(100, 50, { dx: 10, dy: 10, blur: 20 })).toEqual({ width: 148, height: 98, x: 14, y: 14 });
  });
});
