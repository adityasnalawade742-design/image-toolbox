import { describe, it, expect } from 'vitest';
import { fitWithinPixels, MAX_CANVAS_PIXELS } from '../limits';

describe('fitWithinPixels', () => {
  it('leaves images within the limit alone', () => {
    expect(fitWithinPixels(4032, 3024)).toEqual({ width: 4032, height: 3024, scaled: false });
    expect(fitWithinPixels(4096, 4096)).toEqual({ width: 4096, height: 4096, scaled: false });
  });

  it('scales a 48 MP phone photo under the iOS canvas limit, keeping its shape', () => {
    const r = fitWithinPixels(8064, 6048);
    expect(r.scaled).toBe(true);
    expect(r.width * r.height).toBeLessThanOrEqual(MAX_CANVAS_PIXELS);
    // close to the limit, not far below it
    expect(r.width * r.height).toBeGreaterThan(MAX_CANVAS_PIXELS * 0.99);
    expect(r.width / r.height).toBeCloseTo(8064 / 6048, 2);
  });

  it('handles very long panoramas', () => {
    const r = fitWithinPixels(40000, 2000);
    expect(r.width * r.height).toBeLessThanOrEqual(MAX_CANVAS_PIXELS);
    expect(r.width / r.height).toBeCloseTo(20, 1);
  });

  it('accepts a custom limit', () => {
    const r = fitWithinPixels(2000, 1000, 500_000);
    expect(r.width * r.height).toBeLessThanOrEqual(500_000);
    expect(r).toMatchObject({ width: 1000, height: 500, scaled: true });
  });
});
