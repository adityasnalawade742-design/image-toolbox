/**
 * Erase and restore brush for AI cutouts. The cutout (the subject on transparency) is edited in place on its canvas:
 * erasing cuts a soft round dab out of it, restoring paints the original photo back through one, so restored hair
 * and hands keep their real pixels. Both run on the canvas, so a 16-megapixel photo paints without reading pixels.
 */
export type BrushMode = 'erase' | 'restore';

/** Points along a stroke segment, close enough together that the dabs join into a smooth line */
export function dabsAlong(from: { x: number; y: number }, to: { x: number; y: number }, radius: number): { x: number; y: number }[] {
  const step = Math.max(1, radius * 0.3);
  const d = Math.hypot(to.x - from.x, to.y - from.y);
  const n = Math.max(1, Math.ceil(d / step));
  const out: { x: number; y: number }[] = [];
  for (let i = 1; i <= n; i++) out.push({ x: from.x + ((to.x - from.x) * i) / n, y: from.y + ((to.y - from.y) * i) / n });
  return out;
}

/** The dab's soft edge: full strength out to 55% of the radius, fading to nothing at the edge */
function softDab(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  const g = ctx.createRadialGradient(x, y, r * 0.55, x, y, r);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

/** One dab of the brush on the cutout. `scratch` is a reusable canvas for restoring */
export function paintDab(
  subject: CanvasRenderingContext2D,
  original: CanvasImageSource,
  x: number,
  y: number,
  r: number,
  mode: BrushMode,
  scratch: HTMLCanvasElement
) {
  if (mode === 'erase') {
    subject.save();
    subject.globalCompositeOperation = 'destination-out';
    softDab(subject, x, y, r);
    subject.restore();
    return;
  }
  // The photo, cut to the soft dab, then laid over the cutout
  const size = Math.ceil(r * 2) + 2;
  if (scratch.width < size || scratch.height < size) {
    scratch.width = Math.max(scratch.width, size);
    scratch.height = Math.max(scratch.height, size);
  }
  const s = scratch.getContext('2d')!;
  const left = Math.floor(x - r) - 1;
  const top = Math.floor(y - r) - 1;
  s.save();
  s.clearRect(0, 0, size, size);
  softDab(s, x - left, y - top, r);
  s.globalCompositeOperation = 'source-in';
  s.drawImage(original, left, top, size, size, 0, 0, size, size);
  s.restore();
  subject.drawImage(scratch, 0, 0, size, size, left, top, size, size);
}

/** A rectangle that grows to cover every dab of a stroke, kept inside the picture */
export class DirtyBox {
  x0 = Infinity;
  y0 = Infinity;
  x1 = -Infinity;
  y1 = -Infinity;
  add(x: number, y: number, r: number) {
    this.x0 = Math.min(this.x0, x - r - 2);
    this.y0 = Math.min(this.y0, y - r - 2);
    this.x1 = Math.max(this.x1, x + r + 2);
    this.y1 = Math.max(this.y1, y + r + 2);
  }
  clamp(w: number, h: number) {
    const x = Math.max(0, Math.floor(this.x0));
    const y = Math.max(0, Math.floor(this.y0));
    const right = Math.min(w, Math.ceil(this.x1));
    const bottom = Math.min(h, Math.ceil(this.y1));
    return right > x && bottom > y ? { x, y, w: right - x, h: bottom - y } : null;
  }
}
