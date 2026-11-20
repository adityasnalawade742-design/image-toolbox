import { describe, it, expect } from 'vitest';
import { pngLevel } from '../pngLevel';

describe('OxiPNG level for lossless PNGs', () => {
  it.each([
    ['a 1080p screenshot', 1920 * 1080, 2],
    ['a PDF page at 150 dpi', 1241 * 1754, 2],
    ['a 1440p screenshot', 2560 * 1440, 2],
    ['exactly 4 MP', 4_000_000, 2],
    ['a 4K screenshot', 3840 * 2160, 0],
    ['a PDF page at 300 dpi', 2481 * 3508, 0],
    ['a 12 MP phone photo', 4000 * 3000, 0],
  ])('%s', (_name, pixels, level) => {
    expect(pngLevel(pixels)).toBe(level);
  });
});
