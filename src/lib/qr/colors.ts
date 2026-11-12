/** Relative luminance of a #rrggbb colour (WCAG) */
export const lum = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

/**
 * Whether scanners will struggle with these colours: too little contrast (below 4:1), or a code lighter than its
 * background, which many scanners can't read. Null when the colours are fine.
 */
export function colorProblem(dark: string, light: string): 'inverted' | 'lowContrast' | null {
  const contrast = (Math.max(lum(dark), lum(light)) + 0.05) / (Math.min(lum(dark), lum(light)) + 0.05);
  if (lum(dark) > lum(light)) return 'inverted';
  return contrast < 4 ? 'lowContrast' : null;
}
