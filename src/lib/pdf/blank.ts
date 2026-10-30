/**
 * Blank page detection for Delete Blank Pages: how much of a page (rendered small) is "ink". Scanned blank pages
 * are rarely pure white (paper grain, faint show-through, scanner edges), so a little ink is allowed, and a border
 * is ignored where scanners leave shadows and punch holes.
 */

/** Share of pixels darker than near-white, inside a 4% border */
export function inkShare(rgba: Uint8ClampedArray | Uint8Array, width: number, height: number): number {
  const mx = Math.floor(width * 0.04);
  const my = Math.floor(height * 0.04);
  let ink = 0;
  let total = 0;
  for (let y = my; y < height - my; y++) {
    for (let x = mx; x < width - mx; x++) {
      const i = (y * width + x) * 4;
      // Transparent counts as paper
      const a = rgba[i + 3] / 255;
      const lum = (0.299 * rgba[i] + 0.587 * rgba[i + 1] + 0.114 * rgba[i + 2]) * a + 255 * (1 - a);
      if (lum < 200) ink++;
      total++;
    }
  }
  return total ? ink / total : 0;
}

/**
 * The ink share below which a page counts as blank, for a sensitivity from 1 (only truly empty pages) to 10
 * (also pages with a few marks, such as a stray page number or faint scan noise)
 */
export const blankThreshold = (sensitivity: number) => 0.00002 * Math.pow(2, Math.max(1, Math.min(10, sensitivity)) - 1);
