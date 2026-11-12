/**
 * How wide a title is on a results page, in Latin-letter units: Chinese, Japanese and Korean characters and other
 * full-width ones take about twice the space. Search results show roughly 60 units before cutting a title off.
 */
export function titleWidth(text: string): number {
  let w = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0)!;
    const wide =
      (c >= 0x1100 && c <= 0x115f) || // Hangul Jamo
      (c >= 0x2e80 && c <= 0xa4cf) || // CJK radicals, kana, CJK ideographs, Yi
      (c >= 0xac00 && c <= 0xd7a3) || // Hangul syllables
      (c >= 0xf900 && c <= 0xfaff) || // CJK compatibility ideographs
      (c >= 0xfe30 && c <= 0xfe4f) ||
      (c >= 0xff00 && c <= 0xff60) || // full-width forms
      (c >= 0xffe0 && c <= 0xffe6) ||
      (c >= 0x20000 && c <= 0x3fffd);
    w += wide ? 2 : 1;
  }
  return w;
}

/** The page title with the site name added only when the whole still fits in a results page title */
export function brandedTitle(base: string, site: string, max = 60): string {
  const branded = `${base} | ${site}`;
  return titleWidth(branded) <= max ? branded : base;
}
