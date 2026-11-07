/**
 * Find a document page in a photo: the four corners of the bright, low-colour sheet that stands out from what's
 * around it. Pure pixel maths (no DOM), so it runs in a worker and in tests. Returns null when no confident page is
 * found, and the visitor drags the corners instead.
 */
import type { Pt, Quad } from '../photo/perspective';

export interface Detection {
  quad: Quad;
  /** 0–1: how well the sheet fills its outline and stands out; below ~0.5 the result is a guess */
  confidence: number;
}

/** A small grey copy (and how much it was shrunk), longer side `max` */
function shrink(rgba: Uint8ClampedArray, w: number, h: number, max: number) {
  const s = Math.min(1, max / Math.max(w, h));
  const sw = Math.max(1, Math.round(w * s)), sh = Math.max(1, Math.round(h * s));
  const L = new Float32Array(sw * sh), S = new Float32Array(sw * sh);
  // Box-average every source pixel that falls in each small pixel
  const cnt = new Float32Array(sw * sh), R = new Float32Array(sw * sh), G = new Float32Array(sw * sh), B = new Float32Array(sw * sh);
  for (let y = 0; y < h; y++) {
    const yy = Math.min(sh - 1, Math.floor(y * s));
    for (let x = 0; x < w; x++) {
      const i = yy * sw + Math.min(sw - 1, Math.floor(x * s)), p = (y * w + x) * 4;
      R[i] += rgba[p];
      G[i] += rgba[p + 1];
      B[i] += rgba[p + 2];
      cnt[i]++;
    }
  }
  for (let i = 0; i < sw * sh; i++) {
    const r = R[i] / cnt[i], g = G[i] / cnt[i], b = B[i] / cnt[i];
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    L[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    S[i] = mx - mn;
  }
  return { L, S, w: sw, h: sh, scale: s };
}

/** Otsu's threshold of values 0–255 */
function otsu(v: Float32Array): number {
  const hist = new Float64Array(256);
  for (const x of v) hist[Math.max(0, Math.min(255, Math.round(x)))]++;
  const n = v.length;
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sumB = 0, wB = 0, best = 0, t = 128;
  for (let i = 0; i < 256; i++) {
    wB += hist[i];
    if (!wB) continue;
    const wF = n - wB;
    if (!wF) break;
    sumB += i * hist[i];
    const mB = sumB / wB, mF = (sum - sumB) / wF;
    const between = wB * wF * (mB - mF) ** 2;
    if (between > best) [best, t] = [between, i];
  }
  return t;
}

/** Largest 4-connected region of `mask`, as a 0/1 array */
function largestRegion(mask: Uint8Array, w: number, h: number): { region: Uint8Array; size: number } {
  const label = new Int32Array(w * h).fill(-1);
  let bestLabel = -1, bestSize = 0, next = 0;
  const stack: number[] = [];
  for (let i = 0; i < w * h; i++) {
    if (!mask[i] || label[i] >= 0) continue;
    let size = 0;
    stack.push(i);
    label[i] = next;
    while (stack.length) {
      const j = stack.pop()!;
      size++;
      const x = j % w, y = (j - x) / w;
      const nb = [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < h - 1 ? j + w : -1];
      for (const k of nb) if (k >= 0 && mask[k] && label[k] < 0) {
        label[k] = next;
        stack.push(k);
      }
    }
    if (size > bestSize) [bestSize, bestLabel] = [size, next];
    next++;
  }
  const region = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) region[i] = label[i] === bestLabel ? 1 : 0;
  return { region, size: bestSize };
}

/** Fill holes (text, pictures) inside a region: everything not reachable from the border is inside */
function fillHoles(region: Uint8Array, w: number, h: number) {
  const outside = new Uint8Array(w * h);
  const stack: number[] = [];
  for (let x = 0; x < w; x++) for (const y of [0, h - 1]) if (!region[y * w + x]) stack.push(y * w + x);
  for (let y = 0; y < h; y++) for (const x of [0, w - 1]) if (!region[y * w + x]) stack.push(y * w + x);
  for (const i of stack) outside[i] = 1;
  while (stack.length) {
    const j = stack.pop()!;
    const x = j % w, y = (j - x) / w;
    for (const k of [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < h - 1 ? j + w : -1])
      if (k >= 0 && !region[k] && !outside[k]) {
        outside[k] = 1;
        stack.push(k);
      }
  }
  let size = 0;
  for (let i = 0; i < w * h; i++) {
    region[i] = outside[i] ? 0 : 1;
    size += region[i];
  }
  return size;
}

/** Boundary pixels of a region */
function boundary(region: Uint8Array, w: number, h: number): Pt[] {
  const pts: Pt[] = [];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (!region[i]) continue;
      if (x === 0 || y === 0 || x === w - 1 || y === h - 1 || !region[i - 1] || !region[i + 1] || !region[i - w] || !region[i + w]) pts.push({ x: x + 0.5, y: y + 0.5 });
    }
  return pts;
}

const cross = (o: Pt, a: Pt, b: Pt) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
function hull(pts: Pt[]): Pt[] {
  const p = [...pts].sort((a, b) => a.x - b.x || a.y - b.y);
  const lower: Pt[] = [], upper: Pt[] = [];
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop();
    lower.push(q);
  }
  for (let i = p.length - 1; i >= 0; i--) {
    const q = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop();
    upper.push(q);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}
const area = (q: Pt[]) => Math.abs(q.reduce((s, p, i) => s + p.x * q[(i + 1) % q.length].y - q[(i + 1) % q.length].x * p.y, 0)) / 2;

/** The 4 hull points that enclose the most area (exact over hull vertices, the hull is small after shrinking) */
function bestQuad(h: Pt[]): Pt[] {
  // Thin the hull to at most 40 points so the search stays quick
  const step = Math.max(1, Math.ceil(h.length / 40));
  const v = h.filter((_, i) => i % step === 0);
  let best: Pt[] = v.slice(0, 4), bestA = -1;
  const n = v.length;
  for (let a = 0; a < n; a++)
    for (let b = a + 1; b < n; b++)
      for (let c = b + 1; c < n; c++)
        for (let d = c + 1; d < n; d++) {
          const q = [v[a], v[b], v[c], v[d]];
          const A = area(q);
          if (A > bestA) [bestA, best] = [A, q];
        }
  return best;
}

/** Fit a line to points (total least squares): returns point and direction */
function fitLine(pts: Pt[]) {
  const mx = pts.reduce((s, p) => s + p.x, 0) / pts.length, my = pts.reduce((s, p) => s + p.y, 0) / pts.length;
  let sxx = 0, syy = 0, sxy = 0;
  for (const p of pts) {
    sxx += (p.x - mx) ** 2;
    syy += (p.y - my) ** 2;
    sxy += (p.x - mx) * (p.y - my);
  }
  const ang = 0.5 * Math.atan2(2 * sxy, sxx - syy);
  return { p: { x: mx, y: my }, d: { x: Math.cos(ang), y: Math.sin(ang) } };
}
function intersect(l1: ReturnType<typeof fitLine>, l2: ReturnType<typeof fitLine>): Pt | null {
  const den = l1.d.x * l2.d.y - l1.d.y * l2.d.x;
  if (Math.abs(den) < 1e-9) return null;
  const t = ((l2.p.x - l1.p.x) * l2.d.y - (l2.p.y - l1.p.y) * l2.d.x) / den;
  return { x: l1.p.x + t * l1.d.x, y: l1.p.y + t * l1.d.y };
}

/** Order corners top-left, top-right, bottom-right, bottom-left */
export function orderCorners(q: Pt[]): Quad {
  const c = { x: q.reduce((s, p) => s + p.x, 0) / 4, y: q.reduce((s, p) => s + p.y, 0) / 4 };
  const byAngle = [...q].sort((a, b) => Math.atan2(a.y - c.y, a.x - c.x) - Math.atan2(b.y - c.y, b.x - c.x));
  // Start from the corner with the smallest x + y (top-left), keep clockwise order (angles grow clockwise on screen)
  let start = 0;
  byAngle.forEach((p, i) => {
    if (p.x + p.y < byAngle[start].x + byAngle[start].y) start = i;
  });
  return [0, 1, 2, 3].map((k) => byAngle[(start + k) % 4]) as Quad;
}

/** Refine each side by fitting a line to the boundary pixels near it, then intersecting neighbouring sides */
function refine(q: Quad, pts: Pt[]): Quad {
  const lines = [0, 1, 2, 3].map((i) => {
    const a = q[i], b = q[(i + 1) % 4];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const nx = -(b.y - a.y) / len, ny = (b.x - a.x) / len;
    // Points close to this side, away from the corners (which may be rounded, folded or hidden)
    const near = pts.filter((p) => {
      const t = ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / (len * len);
      const dist = Math.abs((p.x - a.x) * nx + (p.y - a.y) * ny);
      return t > 0.15 && t < 0.85 && dist < Math.max(2, len * 0.03);
    });
    return near.length >= 8 ? fitLine(near) : fitLine([a, b]);
  });
  const out = [0, 1, 2, 3].map((i) => intersect(lines[(i + 3) % 4], lines[i]) ?? q[i]);
  return orderCorners(out);
}

const INSET = 0.01;

/** Find the page. `rgba` is the photo (any size); corners come back in its pixels */
export function detectPage(rgba: Uint8ClampedArray, w: number, h: number): Detection | null {
  const { L, S, w: sw, h: sh, scale } = shrink(rgba, w, h, 360);
  const n = sw * sh;
  // Paper is bright and colourless: score each pixel, then split the scores in two (Otsu)
  const score = new Float32Array(n);
  for (let i = 0; i < n; i++) score[i] = Math.max(0, Math.min(255, L[i] - 0.8 * S[i]));
  let best: Detection | null = null;
  // Try the automatic split and two stricter ones (a white desk can share the paper's side of the first split)
  const t0 = otsu(score);
  for (const t of [t0, t0 + (255 - t0) * 0.25, t0 + (255 - t0) * 0.45]) {
    const mask = new Uint8Array(n);
    for (let i = 0; i < n; i++) mask[i] = score[i] > t ? 1 : 0;
    const { region } = largestRegion(mask, sw, sh);
    const size = fillHoles(region, sw, sh);
    if (size < n * 0.08) continue;
    const pts = boundary(region, sw, sh);
    const hp = hull(pts);
    if (hp.length < 4) continue;
    const quad = refine(orderCorners(bestQuad(hp)), pts);
    const qa = area(quad);
    if (!(qa > n * 0.08) || qa > n * 1.05) continue;
    // A page is a convex four-sided shape that its region fills, and is brighter than its surroundings
    const fill = Math.min(size / qa, qa / size);
    let inside = 0, inN = 0, out = 0, outN = 0;
    for (let i = 0; i < n; i++) {
      if (region[i]) {
        inside += L[i];
        inN++;
      } else {
        out += L[i];
        outN++;
      }
    }
    // A "page" that fills the frame has nothing around it to stand out from: then there's no edge to find, and the
    // whole picture is used as it is
    const framed = outN > n * 0.03;
    const contrast = framed ? Math.min(1, Math.max(0, (inside / inN - out / outN) / 60)) : 0;
    const confidence = Math.max(0, Math.min(1, (fill - 0.8) / 0.18)) * (framed ? 0.5 + 0.5 * contrast : 0.4);
    if (!best || confidence > best.confidence) best = { quad, confidence };
  }
  if (!best) return null;
  const k = 1 / scale;
  // Pull the corners in by 0.5% of the page: the soft edge of the sheet otherwise leaves a hairline of desk, which
  // cleaning turns into a dotted line. No real page has content that close to its edge.
  const c = { x: best.quad.reduce((t, p) => t + p.x, 0) / 4, y: best.quad.reduce((t, p) => t + p.y, 0) / 4 };
  best.quad = best.quad.map((p) => ({
    x: Math.max(0, Math.min(w, (p.x + (c.x - p.x) * INSET) * k)),
    y: Math.max(0, Math.min(h, (p.y + (c.y - p.y) * INSET) * k)),
  })) as Quad;
  return best;
}
