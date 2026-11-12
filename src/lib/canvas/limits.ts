/** Largest canvas iOS Safari will draw (4096 × 4096 pixels); bigger canvases fail there without an error */
export const MAX_CANVAS_PIXELS = 16_777_216;

/** The scale that turns one side into px pixels, kept within what a browser canvas can hold */
export function scaleToSide(px: number, side: number, otherSide: number, maxPixels = MAX_CANVAS_PIXELS) {
  if (!(px > 0) || !(side > 0)) return 1;
  const max = Math.sqrt(maxPixels / Math.max(1, side * otherSide));
  return Math.min(px / side, max);
}

/** Dimensions scaled down (never up) to fit within maxPixels, keeping the aspect ratio */
export function fitWithinPixels(width: number, height: number, maxPixels = MAX_CANVAS_PIXELS) {
  if (width * height <= maxPixels) return { width, height, scaled: false };
  const s = Math.sqrt(maxPixels / (width * height));
  let w = Math.max(1, Math.floor(width * s));
  let h = Math.max(1, Math.floor(height * s));
  // Rounding can leave the area a hair over the limit
  while (w * h > maxPixels) {
    if (w >= h) w--;
    else h--;
  }
  return { width: w, height: h, scaled: true };
}
