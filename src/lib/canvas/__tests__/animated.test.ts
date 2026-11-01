import { describe, expect, it } from 'vitest';
import { isAnimatedBytes } from '../animated';

const bytes = (...parts: (string | number[])[]) =>
  new Uint8Array(parts.flatMap((p) => (typeof p === 'string' ? [...p].map((c) => c.charCodeAt(0)) : p)));

const chunk = (type: string, length = 0) => bytes([0, 0, 0, length], type, new Array(length + 4).fill(0));
const concat = (...a: Uint8Array[]) => new Uint8Array(a.flatMap((x) => [...x]));
const PNG = bytes('\x89PNG\r\n\x1a\n');

// Logical screen with no color table, then the given blocks and the trailer
const gif = (...blocks: number[][]) => bytes('GIF89a', [1, 0, 1, 0, 0, 0, 0], ...blocks, [0x3b]);
const FRAME = [0x2c, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 1, 0, 0];
const COMMENT = [0x21, 0xfe, 2, 0x2c, 0x2c, 0];

const webp = (flags: number) => bytes('RIFF', [0, 0, 0, 0], 'WEBPVP8X', [10, 0, 0, 0, flags]);

describe('isAnimatedBytes', () => {
  it('finds a GIF with two frames', () => {
    expect(isAnimatedBytes(gif(FRAME, FRAME))).toBe(true);
  });

  it('leaves a one-frame GIF alone, even with frame markers inside its comment', () => {
    expect(isAnimatedBytes(gif(COMMENT, FRAME))).toBe(false);
  });

  it('skips a frame color table', () => {
    const withTable = [0x2c, 0, 0, 0, 0, 1, 0, 1, 0, 0x80, 0x2c, 0x2c, 0x2c, 0x2c, 0x2c, 0x2c, 2, 1, 0, 0];
    expect(isAnimatedBytes(gif(withTable))).toBe(false);
    expect(isAnimatedBytes(gif(withTable, FRAME))).toBe(true);
  });

  it('finds an animated PNG only when the chunk comes before the image data', () => {
    expect(isAnimatedBytes(concat(PNG, chunk('IHDR', 13), chunk('acTL', 8), chunk('IDAT', 4)))).toBe(true);
    expect(isAnimatedBytes(concat(PNG, chunk('IHDR', 13), chunk('IDAT', 4), chunk('IEND')))).toBe(false);
  });

  it('reads the animation flag of an extended WebP', () => {
    expect(isAnimatedBytes(webp(0x02))).toBe(true);
    expect(isAnimatedBytes(webp(0x10))).toBe(false);
  });

  it('tells an AVIF sequence from a still AVIF', () => {
    expect(isAnimatedBytes(bytes([0, 0, 0, 32], 'ftypavis'))).toBe(true);
    expect(isAnimatedBytes(bytes([0, 0, 0, 32], 'ftypavif'))).toBe(false);
  });

  it('says no to other files and to truncated ones', () => {
    expect(isAnimatedBytes(bytes([0xff, 0xd8, 0xff, 0xe0]))).toBe(false);
    expect(isAnimatedBytes(bytes('GIF8'))).toBe(false);
    expect(isAnimatedBytes(new Uint8Array())).toBe(false);
  });
});
