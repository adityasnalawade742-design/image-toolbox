/** Where each image goes when several are merged into one picture. Pure, so it can be unit-tested. */

export type MergeDirection = 'horizontal' | 'vertical' | 'grid';

export interface MergeOptions {
  direction: MergeDirection;
  /** Grid only */
  columns: number;
  /** Gap between images and around the edge, in px */
  spacing: number;
  /** Scale images so edges line up (same height in a row, same width in a column, same cell in a grid) */
  matchSizes: boolean;
}

export interface Placement {
  /** Destination rectangle on the output canvas */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Source crop (grid cells with matchSizes fill the cell and trim the overflow) */
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export interface MergeLayout {
  width: number;
  height: number;
  placements: Placement[];
}

const full = (s: { width: number; height: number }) => ({ sx: 0, sy: 0, sw: s.width, sh: s.height });

export function layoutMerge(sizes: { width: number; height: number }[], opts: MergeOptions): MergeLayout {
  const gap = Math.max(0, Math.round(opts.spacing));
  if (!sizes.length) return { width: 0, height: 0, placements: [] };

  if (opts.direction === 'horizontal' || opts.direction === 'vertical') {
    const row = opts.direction === 'horizontal';
    // Matching scales to the smallest side, so nothing is enlarged and blurred
    const common = Math.min(...sizes.map((s) => (row ? s.height : s.width)));
    const scaled = sizes.map((s) => {
      if (!opts.matchSizes) return { w: s.width, h: s.height };
      return row ? { w: Math.round((s.width * common) / s.height), h: common } : { w: common, h: Math.round((s.height * common) / s.width) };
    });
    const cross = Math.max(...scaled.map((s) => (row ? s.h : s.w)));
    let cursor = gap;
    const placements = scaled.map((s, i) => {
      // Centre on the cross axis when sizes differ
      const p = row
        ? { x: cursor, y: gap + Math.round((cross - s.h) / 2), w: s.w, h: s.h, ...full(sizes[i]) }
        : { x: gap + Math.round((cross - s.w) / 2), y: cursor, w: s.w, h: s.h, ...full(sizes[i]) };
      cursor += (row ? s.w : s.h) + gap;
      return p;
    });
    return row ? { width: cursor, height: cross + gap * 2, placements } : { width: cross + gap * 2, height: cursor, placements };
  }

  // Grid
  const cols = Math.max(1, Math.min(opts.columns, sizes.length));
  const rows = Math.ceil(sizes.length / cols);
  const cellW = opts.matchSizes ? Math.min(...sizes.map((s) => s.width)) : Math.max(...sizes.map((s) => s.width));
  const cellH = opts.matchSizes ? Math.min(...sizes.map((s) => s.height)) : Math.max(...sizes.map((s) => s.height));
  const placements = sizes.map((s, i) => {
    const cx = gap + (i % cols) * (cellW + gap);
    const cy = gap + Math.floor(i / cols) * (cellH + gap);
    if (!opts.matchSizes) {
      return { x: cx + Math.round((cellW - s.width) / 2), y: cy + Math.round((cellH - s.height) / 2), w: s.width, h: s.height, ...full(s) };
    }
    // Cover the cell, trimming the overflow evenly
    const scale = Math.max(cellW / s.width, cellH / s.height);
    const sw = cellW / scale;
    const sh = cellH / scale;
    return { x: cx, y: cy, w: cellW, h: cellH, sx: (s.width - sw) / 2, sy: (s.height - sh) / 2, sw, sh };
  });
  return { width: gap + cols * (cellW + gap), height: gap + rows * (cellH + gap), placements };
}

/** Browsers refuse canvases past ~16k px a side or ~268M px; scale the whole layout down to stay well inside */
export function fitToCanvasLimits(layout: MergeLayout, maxSide = 16000, maxArea = 120_000_000): { layout: MergeLayout; scale: number } {
  const scale = Math.min(1, maxSide / layout.width, maxSide / layout.height, Math.sqrt(maxArea / (layout.width * layout.height)));
  if (scale >= 1) return { layout, scale: 1 };
  const r = (n: number) => Math.round(n * scale);
  return {
    scale,
    layout: {
      width: r(layout.width),
      height: r(layout.height),
      placements: layout.placements.map((p) => ({ ...p, x: r(p.x), y: r(p.y), w: r(p.w), h: r(p.h) })),
    },
  };
}
