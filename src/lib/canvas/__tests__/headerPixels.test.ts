import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { headerPixels, pixelsOf } from '../headerPixels';

const sample = (f: string) => new Blob([readFileSync(resolve('scripts/a11y/samples', f))]);

describe('image size from the file header', () => {
  it.each([
    ['photo.jpg', 480 * 321],
    ['photo2.jpg', 480 * 319],
    ['portrait.jpg', 360 * 450],
    ['rotated.jpg', 321 * 480],
    ['signature-photo.jpg', 900 * 500],
    ['photo.png', 320 * 214],
    ['text.png', 1400 * 520],
    ['photo.webp', 480 * 321],
    ['photo.gif', 320 * 214],
  ])('%s', async (f, pixels) => {
    expect(await headerPixels(sample(f))).toBe(pixels);
  });

  it('reads lossless and extended WebP headers', () => {
    const riff = (kind: string, body: number[]) => new Uint8Array([...'RIFF'].map((c) => c.charCodeAt(0)).concat([0, 0, 0, 0], [...'WEBP'].map((c) => c.charCodeAt(0)), [...kind].map((c) => c.charCodeAt(0)), [0, 0, 0, 0], body));
    // VP8L: signature, then width-1 and height-1 in 14 bits each (4000 x 3000)
    const bits = (4000 - 1) | ((3000 - 1) << 14);
    expect(pixelsOf(riff('VP8L', [0x2f, bits & 255, (bits >> 8) & 255, (bits >> 16) & 255, (bits >>> 24) & 255, 0, 0, 0, 0, 0]))).toBe(4000 * 3000);
    // VP8X: flags and reserved bytes, then canvas width-1 and height-1 in 24 bits each (6000 x 4000)
    const w = 6000 - 1;
    const h = 4000 - 1;
    expect(pixelsOf(riff('VP8X', [0, 0, 0, 0, w & 255, (w >> 8) & 255, w >> 16, h & 255, (h >> 8) & 255, h >> 16]))).toBe(6000 * 4000);
  });

  it('finds the JPEG frame header behind a large EXIF block', () => {
    const exif = new Uint8Array(60_000);
    const len = exif.length + 2;
    const jpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xe1, len >> 8, len & 255, ...exif, 0xff, 0xc2, 0, 17, 8, 0x0b, 0xb8, 0x0f, 0xa0, 3, 0, 0, 0]);
    // Progressive frame: 3000 high, 4000 wide
    expect(pixelsOf(jpeg)).toBe(4000 * 3000);
  });

  it.each(['photo.heic', 'photo.tif', 'photo.avif', 'photo.bmp', 'shape.svg', 'b64.txt'])('%s: unknown', async (f) => {
    expect(await headerPixels(sample(f))).toBeNull();
  });

  it('a cut-off file is unknown, not a wrong size', () => {
    expect(pixelsOf(new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 16]))).toBeNull();
    expect(pixelsOf(new Uint8Array([0x89, 0x50, 0x4e, 0x47]))).toBeNull();
  });
});
