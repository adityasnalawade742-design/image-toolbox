/**
 * Pen pressure for freehand strokes (Sign PDF's signature pad, Image Annotator's pen). A stylus (Apple Pencil, Surface
 * Pen, Wacom, S Pen) reports how hard it is pressed; the stroke gets thinner when pressed lightly and thicker when
 * pressed hard. A mouse or a finger reports no real pressure, so their strokes keep the chosen width.
 */

/** Pressure as a width factor: 0.35 at the lightest touch, 1 at a normal press (0.5), 1.5 at full pressure */
export const MIN_FACTOR = 0.35;
export const MAX_FACTOR = 1.5;

export function pressureFactor(e: { pointerType?: string; pressure?: number }): number | null {
  if (e.pointerType !== 'pen' || !(typeof e.pressure === 'number' && e.pressure > 0)) return null;
  const p = Math.min(1, e.pressure);
  // Piecewise linear through (0, min), (0.5, 1), (1, max): a normal press draws at the chosen width
  return p <= 0.5 ? MIN_FACTOR + (1 - MIN_FACTOR) * (p / 0.5) : 1 + (MAX_FACTOR - 1) * ((p - 0.5) / 0.5);
}

/** Eases the width between samples so a stroke doesn't step (pens report pressure in coarse jumps) */
export function smoothFactor(previous: number | null, next: number): number {
  return previous === null ? next : previous * 0.6 + next * 0.4;
}
