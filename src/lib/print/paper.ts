/** Paper sizes and unit conversion for print, and aspect-ratio arithmetic for pictures and screens */

export type Unit = 'mm' | 'cm' | 'in' | 'pt' | 'px';
export interface Paper {
  id: string;
  name: string;
  group: 'iso-a' | 'iso-b' | 'iso-c' | 'us' | 'photo' | 'envelope' | 'jis';
  /** Portrait width and height in millimetres (the standards define sizes in mm or inches; inches are converted exactly) */
  w: number;
  h: number;
}

const inch = (v: number) => v * 25.4;
const series = (prefix: string, group: Paper['group'], w0: number, h0: number): Paper[] => {
  // ISO 216: each size halves the previous one, rounded down to whole millimetres
  const out: Paper[] = [];
  let w = w0, h = h0;
  for (let i = 0; i <= 10; i++) {
    out.push({ id: `${prefix.toLowerCase()}${i}`, name: `${prefix}${i}`, group, w, h });
    [w, h] = [Math.floor(h / 2), w];
  }
  return out;
};

export const PAPERS: Paper[] = [
  ...series('A', 'iso-a', 841, 1189),
  ...series('B', 'iso-b', 1000, 1414),
  ...series('C', 'iso-c', 917, 1297),
  { id: 'letter', name: 'Letter', group: 'us', w: inch(8.5), h: inch(11) },
  { id: 'legal', name: 'Legal', group: 'us', w: inch(8.5), h: inch(14) },
  { id: 'tabloid', name: 'Tabloid / Ledger', group: 'us', w: inch(11), h: inch(17) },
  { id: 'executive', name: 'Executive', group: 'us', w: inch(7.25), h: inch(10.5) },
  { id: 'half-letter', name: 'Half Letter (Statement)', group: 'us', w: inch(5.5), h: inch(8.5) },
  { id: 'government-letter', name: 'Government Letter', group: 'us', w: inch(8), h: inch(10.5) },
  { id: 'arch-a', name: 'Arch A', group: 'us', w: inch(9), h: inch(12) },
  { id: 'arch-b', name: 'Arch B', group: 'us', w: inch(12), h: inch(18) },
  { id: 'arch-c', name: 'Arch C', group: 'us', w: inch(18), h: inch(24) },
  { id: 'arch-d', name: 'Arch D', group: 'us', w: inch(24), h: inch(36) },
  { id: 'photo-3x5', name: '3.5 × 5 in', group: 'photo', w: inch(3.5), h: inch(5) },
  { id: 'photo-4x6', name: '4 × 6 in (10 × 15 cm)', group: 'photo', w: inch(4), h: inch(6) },
  { id: 'photo-5x7', name: '5 × 7 in', group: 'photo', w: inch(5), h: inch(7) },
  { id: 'photo-8x10', name: '8 × 10 in', group: 'photo', w: inch(8), h: inch(10) },
  { id: 'photo-11x14', name: '11 × 14 in', group: 'photo', w: inch(11), h: inch(14) },
  { id: 'photo-13x18', name: '13 × 18 cm', group: 'photo', w: 130, h: 180 },
  { id: 'photo-20x30', name: '20 × 30 cm', group: 'photo', w: 200, h: 300 },
  { id: 'dl', name: 'DL envelope', group: 'envelope', w: 110, h: 220 },
  { id: 'c5-env', name: 'C5 envelope', group: 'envelope', w: 162, h: 229 },
  { id: 'no10', name: '#10 envelope', group: 'envelope', w: inch(4.125), h: inch(9.5) },
  ...[
    [0, 1030, 1456], [1, 728, 1030], [2, 515, 728], [3, 364, 515], [4, 257, 364], [5, 182, 257], [6, 128, 182],
  ].map(([i, w, h]) => ({ id: `jis-b${i}`, name: `JIS B${i}`, group: 'jis' as const, w, h })),
];

/** Millimetres to a unit (pixels need a DPI) */
export function fromMm(mm: number, unit: Unit, dpi = 300): number {
  switch (unit) {
    case 'mm': return mm;
    case 'cm': return mm / 10;
    case 'in': return mm / 25.4;
    case 'pt': return (mm / 25.4) * 72;
    case 'px': return (mm / 25.4) * dpi;
  }
}
export const toMm = (v: number, unit: Unit, dpi = 300) => v / fromMm(1, unit, dpi);

/** A tidy number for display: whole pixels and points, sensible decimals otherwise */
export function show(v: number, unit: Unit): string {
  if (unit === 'px' || unit === 'pt') return String(Math.round(v));
  const d = unit === 'in' ? 2 : unit === 'cm' ? 1 : 0;
  return String(Math.round(v * 10 ** d) / 10 ** d);
}

/** The listed size closest to a width × height in mm (either orientation), with the difference in mm */
export function nearestPaper(wMm: number, hMm: number): { paper: Paper; off: number } {
  const [a, b] = [Math.min(wMm, hMm), Math.max(wMm, hMm)];
  let best = PAPERS[0], off = Infinity;
  for (const p of PAPERS) {
    const d = Math.max(Math.abs(p.w - a), Math.abs(p.h - b));
    if (d < off) [best, off] = [p, d];
  }
  return { paper: best, off };
}

// ---------- aspect ratios ----------
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export const COMMON_RATIOS: [number, number, string][] = [
  [1, 1, 'Square'], [4, 3, 'Classic photo, iPad'], [3, 2, 'DSLR photo, 4×6 print'], [5, 4, '8×10 print'], [16, 9, 'HD video, YouTube'], [16, 10, 'Laptop screen'],
  [21, 9, 'Ultrawide'], [9, 16, 'Phone, Stories, Reels, TikTok'], [4, 5, 'Instagram portrait'], [2, 3, 'Portrait photo'], [3, 4, 'Portrait'], [1.91, 1, 'Link preview (Open Graph)'],
  [2.39, 1, 'Cinema widescreen'], [1.414, 1, 'A-series paper (√2)'],
];

/** Width × height as the simplest whole-number ratio, its decimal value, and the nearest common ratio */
export function ratioOf(w: number, h: number) {
  const W = Math.round(w), H = Math.round(h);
  if (W <= 0 || H <= 0) return null;
  const g = gcd(W, H);
  const value = W / H;
  let near = COMMON_RATIOS[0], diff = Infinity;
  for (const r of COMMON_RATIOS) {
    const d = Math.abs(Math.log(value / (r[0] / r[1])));
    if (d < diff) [near, diff] = [r, d];
  }
  return { w: W / g, h: H / g, value, nearest: { w: near[0], h: near[1], label: near[2], exact: diff < 0.005 } };
}

/** The other side for a ratio: give a width to get the height, or a height to get the width */
export const heightFor = (width: number, rw: number, rh: number) => (width * rh) / rw;
export const widthFor = (height: number, rw: number, rh: number) => (height * rw) / rh;

/** Read "16:9", "16/9", "16x9" or "1.78" */
export function parseRatio(s: string): [number, number] | null {
  const m = /^\s*(\d+(?:\.\d+)?)\s*[:/x×]\s*(\d+(?:\.\d+)?)\s*$/i.exec(s);
  if (m && +m[1] > 0 && +m[2] > 0) return [+m[1], +m[2]];
  const v = parseFloat(s);
  return Number.isFinite(v) && v > 0 && /^\s*\d+(\.\d+)?\s*$/.test(s) ? [v, 1] : null;
}
