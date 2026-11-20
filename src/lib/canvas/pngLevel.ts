/**
 * OxiPNG level for a lossless PNG (same pixels at every level; higher levels try more ways to pack them).
 *
 * Images above 4 MP (camera photos, 4K screenshots, PDF pages at 300 dpi and up) use the fastest level, 0. Measured on
 * two 12 MP photos, a 6.2 MP phone photo and a 4K screenshot: level 0 was 5-9x faster than level 2 (1.1-3.4 s against
 * 5-20 s on a desktop; phones take about 2.5x as long) for files 4-12% bigger. Smaller images keep level 2, which
 * takes a few seconds at most.
 */
export const PNG_THOROUGH_MAX_PIXELS = 4_000_000;

export const pngLevel = (pixels: number): 0 | 2 => (pixels > PNG_THOROUGH_MAX_PIXELS ? 0 : 2);
