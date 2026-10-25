export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type ResizeHandle = 'nw' | 'ne' | 'se' | 'sw' | 'n' | 's' | 'w' | 'e';

interface Bounds {
  width: number;
  height: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const round = (r: Rect): Rect => ({
  x: Math.round(r.x),
  y: Math.round(r.y),
  width: Math.round(r.width),
  height: Math.round(r.height),
});

/**
 * Resize a crop box by dragging one handle by (dx, dy) image pixels.
 * With an `aspect` (width / height) the opposite corner (or the opposite edge's midpoint) stays pinned
 * and the ratio is preserved for every handle; the box always stays inside the image.
 */
export function resizeCrop(
  handle: ResizeHandle,
  init: Rect,
  dx: number,
  dy: number,
  bounds: Bounds,
  aspect: number | null,
  min: number = 10
): Rect {
  const hasW = handle.includes('w');
  const hasE = handle.includes('e');
  const hasN = handle.includes('n');
  const hasS = handle.includes('s');

  if (!aspect) {
    let left = init.x;
    let right = init.x + init.width;
    let top = init.y;
    let bottom = init.y + init.height;
    if (hasW) left = clamp(left + dx, 0, right - min);
    if (hasE) right = clamp(right + dx, left + min, bounds.width);
    if (hasN) top = clamp(top + dy, 0, bottom - min);
    if (hasS) bottom = clamp(bottom + dy, top + min, bounds.height);
    return round({ x: left, y: top, width: right - left, height: bottom - top });
  }

  const minW = Math.max(min, min * aspect);
  const isCorner = (hasW || hasE) && (hasN || hasS);

  if (isCorner) {
    const anchorX = hasE ? init.x : init.x + init.width;
    const anchorY = hasS ? init.y : init.y + init.height;
    const proposedW = init.width + (hasE ? dx : -dx);
    const proposedH = init.height + (hasS ? dy : -dy);
    // Follow whichever axis the pointer moved further along
    let width = Math.max(proposedW, proposedH * aspect);
    const maxW = Math.min(hasE ? bounds.width - anchorX : anchorX, (hasS ? bounds.height - anchorY : anchorY) * aspect);
    width = clamp(width, Math.min(minW, maxW), maxW);
    const height = width / aspect;
    return round({ x: hasE ? anchorX : anchorX - width, y: hasS ? anchorY : anchorY - height, width, height });
  }

  if (hasE || hasW) {
    const anchorX = hasE ? init.x : init.x + init.width;
    const centerY = init.y + init.height / 2;
    const maxW = Math.min(hasE ? bounds.width - anchorX : anchorX, 2 * Math.min(centerY, bounds.height - centerY) * aspect);
    const width = clamp(init.width + (hasE ? dx : -dx), Math.min(minW, maxW), maxW);
    const height = width / aspect;
    return round({ x: hasE ? anchorX : anchorX - width, y: centerY - height / 2, width, height });
  }

  const anchorY = hasS ? init.y : init.y + init.height;
  const centerX = init.x + init.width / 2;
  const maxH = Math.min(hasS ? bounds.height - anchorY : anchorY, (2 * Math.min(centerX, bounds.width - centerX)) / aspect);
  const height = clamp(init.height + (hasS ? dy : -dy), Math.min(minW / aspect, maxH), maxH);
  const width = height * aspect;
  return round({ x: centerX - width / 2, y: hasS ? anchorY : anchorY - height, width, height });
}

/** Draw a new crop box from `start` to `current` (image pixels), optionally locked to `aspect`. */
export function drawCrop(
  start: { x: number; y: number },
  current: { x: number; y: number },
  bounds: Bounds,
  aspect: number | null,
  min: number = 10
): Rect {
  const sx = current.x >= start.x ? 1 : -1;
  const sy = current.y >= start.y ? 1 : -1;
  const maxW = sx > 0 ? bounds.width - start.x : start.x;
  const maxH = sy > 0 ? bounds.height - start.y : start.y;

  let width = Math.min(Math.abs(current.x - start.x), maxW);
  let height = Math.min(Math.abs(current.y - start.y), maxH);

  if (aspect) {
    width = Math.min(Math.max(width, height * aspect), maxW, maxH * aspect);
    height = width / aspect;
  }

  width = Math.max(Math.min(min, maxW), width);
  height = Math.max(Math.min(min, maxH), height);
  return round({ x: sx > 0 ? start.x : start.x - width, y: sy > 0 ? start.y : start.y - height, width, height });
}
