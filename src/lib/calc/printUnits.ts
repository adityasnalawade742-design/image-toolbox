/** Pixels and physical lengths at a given DPI (pixels per inch), and what a picture's size means for printing */

export type LengthUnit = 'px' | 'in' | 'cm' | 'mm';

const PER_INCH: Record<Exclude<LengthUnit, 'px'>, number> = { in: 1, cm: 2.54, mm: 25.4 };

export function convertLength(value: number, from: LengthUnit, to: LengthUnit, dpi: number): number {
  const inches = from === 'px' ? value / dpi : value / PER_INCH[from];
  return to === 'px' ? inches * dpi : inches * PER_INCH[to];
}

/** A number for a result field: whole pixels, up to 3 decimals for lengths, without trailing zeros */
export function formatLength(value: number, unit: LengthUnit): string {
  if (!Number.isFinite(value)) return '';
  if (unit === 'px') return String(Math.round(value));
  return String(Number(value.toFixed(3)));
}

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
}

/** 1920 × 1080 → "16:9"; ratios too large to be meaningful (e.g. 1000:667) are given as "1.50:1" */
export function aspectRatio(w: number, h: number): string {
  if (w <= 0 || h <= 0) return '';
  const g = gcd(Math.round(w), Math.round(h));
  const a = Math.round(w) / g;
  const b = Math.round(h) / g;
  return a <= 32 && b <= 32 ? `${a}:${b}` : `${(w / h).toFixed(2)}:1`;
}

export const megapixels = (w: number, h: number) => (w * h) / 1_000_000;
