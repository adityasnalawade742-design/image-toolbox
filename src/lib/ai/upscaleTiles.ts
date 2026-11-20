/**
 * Pixel arithmetic for the AI upscaler (upscale.worker.ts), kept free of the model so it can be tested.
 *
 * The model enlarges 4x. A photo goes through in tiles, each with a margin of surrounding pixels the model sees but
 * whose result is thrown away: the network looks about 33 px around every pixel, so tiles without margins show
 * seams. Measured against a whole-image run: a 24 px margin leaves differences of at most 1.2/255. Tiles stay small
 * because one long job on a phone's graphics chip can be stopped by the system (Chrome on Android closed when a
 * 1024 x 768 image went through in one piece).
 */
export interface Tile {
  /** The part of the photo this tile produces */
  x: number;
  y: number;
  w: number;
  h: number;
  /** What the model sees: the part plus its margin, cut off at the photo's edges */
  wx: number;
  wy: number;
  ww: number;
  wh: number;
}

export function planTiles(width: number, height: number, core: number, margin: number): Tile[] {
  const tiles: Tile[] = [];
  for (let y = 0; y < height; y += core) {
    for (let x = 0; x < width; x += core) {
      const w = Math.min(core, width - x);
      const h = Math.min(core, height - y);
      const wx = Math.max(0, x - margin);
      const wy = Math.max(0, y - margin);
      tiles.push({ x, y, w, h, wx, wy, ww: Math.min(width, x + w + margin) - wx, wh: Math.min(height, y + h + margin) - wy });
    }
  }
  return tiles;
}

/** A tile's window of an RGBA photo as the model's input: RGB planes, 0..1 */
export function toPlanar(rgba: Uint8ClampedArray, width: number, t: Tile): Float32Array {
  const plane = t.ww * t.wh;
  const out = new Float32Array(3 * plane);
  for (let y = 0; y < t.wh; y++) {
    let src = ((t.wy + y) * width + t.wx) * 4;
    let dst = y * t.ww;
    for (let x = 0; x < t.ww; x++, src += 4, dst++) {
      out[dst] = rgba[src] / 255;
      out[plane + dst] = rgba[src + 1] / 255;
      out[2 * plane + dst] = rgba[src + 2] / 255;
    }
  }
  return out;
}

/**
 * Writes a tile's result into the enlarged photo. `model` is the model's 4x output for the tile's window (RGB planes,
 * 0..1); `scale` is 4, or 2 (each 2 x 2 block of the 4x result averaged). Alpha is filled in separately.
 */
export function writeTile(out: Uint8ClampedArray, outWidth: number, model: Float32Array, t: Tile, scale: 2 | 4) {
  const mw = t.ww * 4;
  const plane = mw * t.wh * 4;
  // Where the tile's own part starts inside the model's output
  const ox = (t.x - t.wx) * 4;
  const oy = (t.y - t.wy) * 4;
  const f = 4 / scale;
  const w = t.w * scale;
  const h = t.h * scale;
  const byte = (v: number) => (v <= 0 ? 0 : v >= 1 ? 255 : Math.round(v * 255));
  for (let y = 0; y < h; y++) {
    let dst = ((t.y * scale + y) * outWidth + t.x * scale) * 4;
    for (let x = 0; x < w; x++, dst += 4) {
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        for (let dy = 0; dy < f; dy++) {
          const row = c * plane + (oy + y * f + dy) * mw + ox + x * f;
          for (let dx = 0; dx < f; dx++) sum += model[row + dx];
        }
        out[dst + c] = byte(sum / (f * f));
      }
    }
  }
}

/** Whether any pixel is see-through */
export function hasAlpha(rgba: Uint8ClampedArray): boolean {
  for (let i = 3; i < rgba.length; i += 4) if (rgba[i] < 255) return true;
  return false;
}

/** Fills the enlarged photo's alpha from the original's, smoothly (bilinear); opaque when the original has none */
export function fillAlpha(out: Uint8ClampedArray, rgba: Uint8ClampedArray, width: number, height: number, scale: number) {
  const ow = width * scale;
  const oh = height * scale;
  if (!hasAlpha(rgba)) {
    for (let i = 3; i < out.length; i += 4) out[i] = 255;
    return;
  }
  const a = (x: number, y: number) => rgba[(y * width + x) * 4 + 3];
  for (let y = 0; y < oh; y++) {
    const sy = Math.min(height - 1, Math.max(0, (y + 0.5) / scale - 0.5));
    const y0 = Math.floor(sy);
    const y1 = Math.min(height - 1, y0 + 1);
    const fy = sy - y0;
    for (let x = 0; x < ow; x++) {
      const sx = Math.min(width - 1, Math.max(0, (x + 0.5) / scale - 0.5));
      const x0 = Math.floor(sx);
      const x1 = Math.min(width - 1, x0 + 1);
      const fx = sx - x0;
      const top = a(x0, y0) * (1 - fx) + a(x1, y0) * fx;
      const bottom = a(x0, y1) * (1 - fx) + a(x1, y1) * fx;
      out[(y * ow + x) * 4 + 3] = Math.round(top * (1 - fy) + bottom * fy);
    }
  }
}

/**
 * The largest picture the upscaler makes: about 16.7 million pixels, the most a phone browser draws in one canvas
 * (and already a 4x enlargement of a 1 MP photo).
 */
export const MAX_OUTPUT_PIXELS = 16_777_216;

/** Which enlargements fit for a photo of this size */
export function allowedScales(width: number, height: number): (2 | 4)[] {
  return ([2, 4] as const).filter((s) => width * height * s * s <= MAX_OUTPUT_PIXELS);
}
