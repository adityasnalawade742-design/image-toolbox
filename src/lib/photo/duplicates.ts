/**
 * Duplicate and near-duplicate photos: two perceptual fingerprints per picture, so resized, recompressed or
 * re-saved copies match while different photos don't.
 */

/** 64-bit fingerprint as two 32-bit halves */
export type Hash64 = [number, number];

const bits = (v: number) => {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return (((v + (v >>> 4)) & 0xf0f0f0f) * 0x1010101) >>> 24;
};
export const hamming = (a: Hash64, b: Hash64) => bits((a[0] ^ b[0]) >>> 0) + bits((a[1] ^ b[1]) >>> 0);

function pack(flags: boolean[]): Hash64 {
  let hi = 0, lo = 0;
  for (let i = 0; i < 32; i++) if (flags[i]) hi |= 1 << (31 - i);
  for (let i = 0; i < 32; i++) if (flags[32 + i]) lo |= 1 << (31 - i);
  return [hi >>> 0, lo >>> 0];
}

/** Difference hash from a 9×8 grey thumbnail (row-major): is each pixel brighter than its right neighbour? */
export function dHash(gray9x8: ArrayLike<number>): Hash64 {
  const f: boolean[] = [];
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) f.push(gray9x8[y * 9 + x] > gray9x8[y * 9 + x + 1]);
  return pack(f);
}

/** Perceptual hash from a 32×32 grey thumbnail: signs of the lowest 8×8 DCT frequencies against their median */
export function pHash(gray32: ArrayLike<number>): Hash64 {
  const N = 32;
  const cos: number[][] = [];
  for (let u = 0; u < 8; u++) {
    cos.push([]);
    for (let x = 0; x < N; x++) cos[u].push(Math.cos(((2 * x + 1) * u * Math.PI) / (2 * N)));
  }
  // Separable DCT, only the 8×8 corner is needed
  const rows: number[][] = [];
  for (let y = 0; y < N; y++) {
    rows.push([]);
    for (let u = 0; u < 8; u++) {
      let s = 0;
      for (let x = 0; x < N; x++) s += gray32[y * N + x] * cos[u][x];
      rows[y].push(s);
    }
  }
  const d: number[] = [];
  for (let v = 0; v < 8; v++)
    for (let u = 0; u < 8; u++) {
      let s = 0;
      for (let y = 0; y < N; y++) s += rows[y][u] * cos[v][y];
      d.push(s);
    }
  // The DC term (overall brightness) is left out of the median
  const sorted = d.slice(1).sort((a, b) => a - b);
  const median = (sorted[31] + sorted[32]) / 2;
  return pack(d.map((v) => v > median));
}

export interface Fingerprint {
  d: Hash64;
  p: Hash64;
  /** Exact content, for "identical file" */
  sha?: string;
}

export interface Sensitivity {
  /** Most differing bits (of 64) for both hashes to still count as the same picture */
  maxD: number;
  maxP: number;
}
export const SENSITIVITY: Record<'strict' | 'normal' | 'loose', Sensitivity> = {
  strict: { maxD: 4, maxP: 6 },
  normal: { maxD: 10, maxP: 12 },
  loose: { maxD: 16, maxP: 18 },
};

export const sameImage = (a: Fingerprint, b: Fingerprint, s: Sensitivity) =>
  (a.sha !== undefined && a.sha === b.sha) || (hamming(a.d, b.d) <= s.maxD && hamming(a.p, b.p) <= s.maxP);

/** Groups (of indices) of pictures that match, largest first; pictures with no match are left out */
export function groupDuplicates(prints: Fingerprint[], s: Sensitivity): number[][] {
  const parent = prints.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  for (let i = 0; i < prints.length; i++)
    for (let j = i + 1; j < prints.length; j++) if (sameImage(prints[i], prints[j], s)) parent[find(j)] = find(i);
  const groups = new Map<number, number[]>();
  prints.forEach((_, i) => {
    const r = find(i);
    groups.set(r, [...(groups.get(r) ?? []), i]);
  });
  return [...groups.values()].filter((g) => g.length > 1).sort((a, b) => b.length - a.length || a[0] - b[0]);
}

export interface Candidate {
  width: number;
  height: number;
  bytes: number;
}
/** The copy to keep: most pixels, then the larger file (less compressed), then the first */
export function bestOf(items: Candidate[], group: number[]): number {
  return [...group].sort((a, b) => items[b].width * items[b].height - items[a].width * items[a].height || items[b].bytes - items[a].bytes || a - b)[0];
}
