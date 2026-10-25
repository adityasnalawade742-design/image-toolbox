import { describe, it, expect } from 'vitest';
import { searchQuality } from '../targetSize';

// A fake encoder whose output grows with quality, like a real JPEG encoder
const encoderOf = (bytesAt: (q: number) => number) => async (q: number) => new Blob([new Uint8Array(Math.round(bytesAt(q)))]);

describe('searchQuality', () => {
  it('returns the top quality when it already fits', async () => {
    const r = await searchQuality(encoderOf((q) => q * 1000), 5000);
    expect(r.fit?.quality).toBe(0.95);
  });

  it('finds the highest quality under the budget', async () => {
    const r = await searchQuality(encoderOf((q) => q * 100_000), 50_000);
    expect(r.fit).not.toBeNull();
    expect(r.fit!.blob.size).toBeLessThanOrEqual(50_000);
    // within one search step of the true answer (0.5)
    expect(r.fit!.quality).toBeGreaterThan(0.48);
    expect(r.fit!.quality).toBeLessThanOrEqual(0.5);
  });

  it('never returns a result over the budget', async () => {
    for (const budget of [6_000, 21_000, 47_500, 90_000]) {
      const r = await searchQuality(encoderOf((q) => 5_000 + q * q * 100_000), budget);
      expect(r.fit!.blob.size).toBeLessThanOrEqual(budget);
    }
  });

  it('reports no fit when even the lowest quality is too big', async () => {
    const r = await searchQuality(encoderOf(() => 80_000), 20_000);
    expect(r.fit).toBeNull();
    expect(r.smallest.quality).toBe(0.05);
  });
});
