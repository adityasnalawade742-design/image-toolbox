/**
 * "Keep" brush: keep only the parts of a cutout the visitor painted over. The cutout's visible pixels (alpha above a
 * threshold) form connected regions, such as each person in a group photo; every region a mark touches stays, the rest
 * becomes transparent. Pixels keep their own alpha, so soft edges such as hair stay soft.
 *
 * Regions are found on a grid of cells (at most GRID cells along the longer side), which keeps a 16 MP cutout well
 * under a second. Kept cells are grown by one cell so the faint halo just outside a region isn't cut off.
 */
export interface Mark {
  x: number;
  y: number;
  /** Brush radius, in the cutout's pixels */
  r: number;
}

const GRID = 1024;
// Alpha at or below this is faint enough not to join two subjects into one region
const THRESHOLD = 24;

/**
 * Changes `data` (RGBA, w x h) in place. Returns how many cutout regions were kept, or 0 when the marks touched none
 * (then nothing changes).
 */
export function keepMarked(data: Uint8ClampedArray, w: number, h: number, marks: Mark[]): number {
  const cell = Math.max(1, Math.ceil(Math.max(w, h) / GRID));
  const gw = Math.ceil(w / cell);
  const gh = Math.ceil(h / cell);
  // A cell is solid when any of its pixels is clearly visible
  const solid = new Uint8Array(gw * gh);
  for (let y = 0; y < h; y++) {
    const row = ((y / cell) | 0) * gw;
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > THRESHOLD) solid[row + ((x / cell) | 0)] = 1;
    }
  }
  // Connected regions of solid cells (8-connected), labelled 1, 2, ...
  const label = new Int32Array(gw * gh);
  const stack = new Int32Array(gw * gh);
  let regions = 0;
  for (let start = 0; start < gw * gh; start++) {
    if (!solid[start] || label[start]) continue;
    regions++;
    let top = 0;
    stack[top++] = start;
    label[start] = regions;
    while (top) {
      const i = stack[--top];
      const cx = i % gw;
      const cy = (i / gw) | 0;
      for (let dy = -1; dy <= 1; dy++) {
        const ny = cy + dy;
        if (ny < 0 || ny >= gh) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const nx = cx + dx;
          if (nx < 0 || nx >= gw) continue;
          const j = ny * gw + nx;
          if (solid[j] && !label[j]) {
            label[j] = regions;
            stack[top++] = j;
          }
        }
      }
    }
  }
  // The regions the marks touch
  const keep = new Set<number>();
  for (const m of marks) {
    const r = m.r / cell + 0.5;
    const mx = m.x / cell;
    const my = m.y / cell;
    for (let cy = Math.max(0, Math.floor(my - r)); cy <= Math.min(gh - 1, Math.ceil(my + r)); cy++) {
      for (let cx = Math.max(0, Math.floor(mx - r)); cx <= Math.min(gw - 1, Math.ceil(mx + r)); cx++) {
        const l = label[cy * gw + cx];
        if (l && (cx + 0.5 - mx) ** 2 + (cy + 0.5 - my) ** 2 <= r * r) keep.add(l);
      }
    }
  }
  if (!keep.size) return 0;
  // Kept cells, grown by one cell into empty cells only (never into another subject close by)
  const kept = new Uint8Array(gw * gh);
  for (let i = 0; i < gw * gh; i++) {
    if (!keep.has(label[i])) continue;
    const cx = i % gw;
    const cy = (i / gw) | 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx < 0 || nx >= gw || ny < 0 || ny >= gh) continue;
        const j = ny * gw + nx;
        if (j === i || !label[j]) kept[j] = 1;
      }
    }
  }
  for (let y = 0; y < h; y++) {
    const row = ((y / cell) | 0) * gw;
    for (let x = 0; x < w; x++) {
      if (!kept[row + ((x / cell) | 0)]) data[(y * w + x) * 4 + 3] = 0;
    }
  }
  return keep.size;
}
