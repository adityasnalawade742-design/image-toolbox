/** Perspective correction: map a four-cornered area of a photo onto a flat rectangle */

export type Pt = { x: number; y: number };
/** Corners in order: top-left, top-right, bottom-right, bottom-left */
export type Quad = [Pt, Pt, Pt, Pt];

/** Solve A·x = b (n×n) by Gaussian elimination with partial pivoting */
function solve(A: number[][], b: number[]): number[] {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    if (Math.abs(M[c][c]) < 1e-12) throw new Error('degenerate');
    for (let r = c + 1; r < n; r++) {
      const f = M[r][c] / M[c][c];
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  const x = new Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) {
    let s = M[r][n];
    for (let k = r + 1; k < n; k++) s -= M[r][k] * x[k];
    x[r] = s / M[r][r];
  }
  return x;
}

/** The 3×3 homography (row-major, h33 = 1) taking each `from` point to the matching `to` point */
export function homography(from: Quad, to: Quad): number[] {
  const A: number[][] = [], b: number[] = [];
  for (let i = 0; i < 4; i++) {
    const { x, y } = from[i], { x: u, y: v } = to[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]);
    b.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]);
    b.push(v);
  }
  return [...solve(A, b), 1];
}

export const applyH = (H: number[], x: number, y: number): Pt => {
  const d = H[6] * x + H[7] * y + H[8];
  return { x: (H[0] * x + H[1] * y + H[2]) / d, y: (H[3] * x + H[4] * y + H[5]) / d };
};

const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

/** True if the corners make a convex shape in clockwise order (a usable selection) */
export function isConvex(q: Quad): boolean {
  let sign = 0;
  for (let i = 0; i < 4; i++) {
    const a = q[i], b = q[(i + 1) % 4], c = q[(i + 2) % 4];
    const cross = (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
    if (Math.abs(cross) < 1e-9) return false;
    const s = Math.sign(cross);
    if (sign && s !== sign) return false;
    sign = s;
  }
  return sign > 0;
}

/**
 * Output size for a selection. 'auto' keeps the longer of each pair of opposite edges, so no detail is lost;
 * a fixed ratio (width / height) keeps the area of that estimate.
 */
export function outputSize(q: Quad, ratio: number | 'auto'): { width: number; height: number } {
  const w = Math.max(dist(q[0], q[1]), dist(q[3], q[2]));
  const h = Math.max(dist(q[0], q[3]), dist(q[1], q[2]));
  if (ratio === 'auto') return { width: Math.max(1, Math.round(w)), height: Math.max(1, Math.round(h)) };
  const area = w * h;
  const height = Math.sqrt(area / ratio);
  return { width: Math.max(1, Math.round(height * ratio)), height: Math.max(1, Math.round(height)) };
}

/**
 * Warp the selected area of `src` (RGBA, sw×sh) to a width×height rectangle. Each output pixel is traced back
 * into the photo and sampled bicubically (sharper than bilinear for the enlargement this usually involves).
 */
export function warp(src: Uint8ClampedArray, sw: number, sh: number, q: Quad, width: number, height: number): Uint8ClampedArray {
  const rect: Quad = [
    { x: 0, y: 0 },
    { x: width, y: 0 },
    { x: width, y: height },
    { x: 0, y: height },
  ];
  // Output pixel → photo position
  const H = homography(rect, q);
  const out = new Uint8ClampedArray(width * height * 4);
  const px = (x: number, y: number, c: number) => src[(Math.min(sh - 1, Math.max(0, y)) * sw + Math.min(sw - 1, Math.max(0, x))) * 4 + c];
  // Catmull-Rom weights
  const cub = (t: number) => {
    const t2 = t * t, t3 = t2 * t;
    return [-0.5 * t3 + t2 - 0.5 * t, 1.5 * t3 - 2.5 * t2 + 1, -1.5 * t3 + 2 * t2 + 0.5 * t, 0.5 * t3 - 0.5 * t2];
  };
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = applyH(H, x + 0.5, y + 0.5);
      const fx = p.x - 0.5, fy = p.y - 0.5;
      const ix = Math.floor(fx), iy = Math.floor(fy);
      const wx = cub(fx - ix), wy = cub(fy - iy);
      const o = (y * width + x) * 4;
      for (let c = 0; c < 4; c++) {
        let v = 0;
        for (let j = 0; j < 4; j++) {
          let row = 0;
          for (let i = 0; i < 4; i++) row += wx[i] * px(ix - 1 + i, iy - 1 + j, c);
          v += wy[j] * row;
        }
        out[o + c] = v;
      }
    }
  }
  return out;
}
