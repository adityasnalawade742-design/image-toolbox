import { describe, it, expect } from 'vitest';
import { pressureFactor, smoothFactor, MIN_FACTOR, MAX_FACTOR } from '../penPressure';

describe('pressureFactor', () => {
  it('ignores mouse and touch, which report no real pressure', () => {
    expect(pressureFactor({ pointerType: 'mouse', pressure: 0.5 })).toBeNull();
    expect(pressureFactor({ pointerType: 'touch', pressure: 1 })).toBeNull();
  });
  it('ignores a pen that reports no pressure', () => {
    expect(pressureFactor({ pointerType: 'pen', pressure: 0 })).toBeNull();
  });
  it('draws a normal press at the chosen width, lighter thinner and harder thicker', () => {
    expect(pressureFactor({ pointerType: 'pen', pressure: 0.5 })).toBeCloseTo(1);
    expect(pressureFactor({ pointerType: 'pen', pressure: 0.01 })!).toBeCloseTo(MIN_FACTOR, 1);
    expect(pressureFactor({ pointerType: 'pen', pressure: 1 })).toBeCloseTo(MAX_FACTOR);
    expect(pressureFactor({ pointerType: 'pen', pressure: 0.25 })!).toBeLessThan(1);
    expect(pressureFactor({ pointerType: 'pen', pressure: 0.75 })!).toBeGreaterThan(1);
  });
});

describe('smoothFactor', () => {
  it('starts at the first value and then eases towards new ones', () => {
    expect(smoothFactor(null, 1.2)).toBe(1.2);
    expect(smoothFactor(1, 1.5)).toBeCloseTo(1.2);
  });
});
