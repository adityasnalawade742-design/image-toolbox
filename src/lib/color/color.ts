/**
 * Colour conversion and WCAG contrast, free of the DOM so it can be tested. Colours are sRGB 0–255 with alpha 0–1.
 */
export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

// The CSS named colours (CSS Color Module Level 4)
export const CSS_NAMES: Record<string, string> = {
  aliceblue: 'f0f8ff', antiquewhite: 'faebd7', aqua: '00ffff', aquamarine: '7fffd4', azure: 'f0ffff', beige: 'f5f5dc', bisque: 'ffe4c4', black: '000000', blanchedalmond: 'ffebcd', blue: '0000ff', blueviolet: '8a2be2', brown: 'a52a2a', burlywood: 'deb887', cadetblue: '5f9ea0', chartreuse: '7fff00', chocolate: 'd2691e', coral: 'ff7f50', cornflowerblue: '6495ed', cornsilk: 'fff8dc', crimson: 'dc143c', cyan: '00ffff', darkblue: '00008b', darkcyan: '008b8b', darkgoldenrod: 'b8860b', darkgray: 'a9a9a9', darkgreen: '006400', darkgrey: 'a9a9a9', darkkhaki: 'bdb76b', darkmagenta: '8b008b', darkolivegreen: '556b2f', darkorange: 'ff8c00', darkorchid: '9932cc', darkred: '8b0000', darksalmon: 'e9967a', darkseagreen: '8fbc8f', darkslateblue: '483d8b', darkslategray: '2f4f4f', darkslategrey: '2f4f4f', darkturquoise: '00ced1', darkviolet: '9400d3', deeppink: 'ff1493', deepskyblue: '00bfff', dimgray: '696969', dimgrey: '696969', dodgerblue: '1e90ff', firebrick: 'b22222', floralwhite: 'fffaf0', forestgreen: '228b22', fuchsia: 'ff00ff', gainsboro: 'dcdcdc', ghostwhite: 'f8f8ff', gold: 'ffd700', goldenrod: 'daa520', gray: '808080', green: '008000', greenyellow: 'adff2f', grey: '808080', honeydew: 'f0fff0', hotpink: 'ff69b4', indianred: 'cd5c5c', indigo: '4b0082', ivory: 'fffff0', khaki: 'f0e68c', lavender: 'e6e6fa', lavenderblush: 'fff0f5', lawngreen: '7cfc00', lemonchiffon: 'fffacd', lightblue: 'add8e6', lightcoral: 'f08080', lightcyan: 'e0ffff', lightgoldenrodyellow: 'fafad2', lightgray: 'd3d3d3', lightgreen: '90ee90', lightgrey: 'd3d3d3', lightpink: 'ffb6c1', lightsalmon: 'ffa07a', lightseagreen: '20b2aa', lightskyblue: '87cefa', lightslategray: '778899', lightslategrey: '778899', lightsteelblue: 'b0c4de', lightyellow: 'ffffe0', lime: '00ff00', limegreen: '32cd32', linen: 'faf0e6', magenta: 'ff00ff', maroon: '800000', mediumaquamarine: '66cdaa', mediumblue: '0000cd', mediumorchid: 'ba55d3', mediumpurple: '9370db', mediumseagreen: '3cb371', mediumslateblue: '7b68ee', mediumspringgreen: '00fa9a', mediumturquoise: '48d1cc', mediumvioletred: 'c71585', midnightblue: '191970', mintcream: 'f5fffa', mistyrose: 'ffe4e1', moccasin: 'ffe4b5', navajowhite: 'ffdead', navy: '000080', oldlace: 'fdf5e6', olive: '808000', olivedrab: '6b8e23', orange: 'ffa500', orangered: 'ff4500', orchid: 'da70d6', palegoldenrod: 'eee8aa', palegreen: '98fb98', paleturquoise: 'afeeee', palevioletred: 'db7093', papayawhip: 'ffefd5', peachpuff: 'ffdab9', peru: 'cd853f', pink: 'ffc0cb', plum: 'dda0dd', powderblue: 'b0e0e6', purple: '800080', rebeccapurple: '663399', red: 'ff0000', rosybrown: 'bc8f8f', royalblue: '4169e1', saddlebrown: '8b4513', salmon: 'fa8072', sandybrown: 'f4a460', seagreen: '2e8b57', seashell: 'fff5ee', sienna: 'a0522d', silver: 'c0c0c0', skyblue: '87ceeb', slateblue: '6a5acd', slategray: '708090', slategrey: '708090', snow: 'fffafa', springgreen: '00ff7f', steelblue: '4682b4', tan: 'd2b48c', teal: '008080', thistle: 'd8bfd8', tomato: 'ff6347', turquoise: '40e0d0', violet: 'ee82ee', wheat: 'f5deb3', white: 'ffffff', whitesmoke: 'f5f5f5', yellow: 'ffff00', yellowgreen: '9acd32',
};

const clamp = (v: number, lo = 0, hi = 255) => Math.min(hi, Math.max(lo, v));
const round = (v: number, d = 0) => Math.round(v * 10 ** d) / 10 ** d;

// ---------- spaces ----------
const lin = (c: number) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};
const unlin = (v: number) => 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.max(0, v) ** (1 / 2.4) - 0.055);

export function toHsl({ r, g, b }: RGBA): [number, number, number] {
  const R = r / 255, G = g / 255, B = b / 255;
  const max = Math.max(R, G, B), min = Math.min(R, G, B), l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === R ? (G - B) / d + (G < B ? 6 : 0) : max === G ? (B - R) / d + 2 : (R - G) / d + 4;
  return [h * 60, s * 100, l * 100];
}

export function fromHsl(h: number, s: number, l: number, a = 1): RGBA {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const f = (n: number) => l - s * Math.min(l, 1 - l) * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return { r: f(0) * 255, g: f(8) * 255, b: f(4) * 255, a };
}

export function toHsv({ r, g, b }: RGBA): [number, number, number] {
  const [h] = toHsl({ r, g, b, a: 1 });
  const max = Math.max(r, g, b) / 255, min = Math.min(r, g, b) / 255;
  return [h, max === 0 ? 0 : ((max - min) / max) * 100, max * 100];
}

export function fromHsv(h: number, s: number, v: number, a = 1): RGBA {
  s /= 100;
  v /= 100;
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
  };
  return { r: f(5) * 255, g: f(3) * 255, b: f(1) * 255, a };
}

/** CMYK as a quick, uncalibrated split (no printer profile): good for a starting point, not for print matching */
export function toCmyk({ r, g, b }: RGBA): [number, number, number, number] {
  const k = 1 - Math.max(r, g, b) / 255;
  if (k >= 1) return [0, 0, 0, 100];
  return [((1 - r / 255 - k) / (1 - k)) * 100, ((1 - g / 255 - k) / (1 - k)) * 100, ((1 - b / 255 - k) / (1 - k)) * 100, k * 100];
}

export const fromCmyk = (c: number, m: number, y: number, k: number, a = 1): RGBA => ({
  r: 255 * (1 - c / 100) * (1 - k / 100),
  g: 255 * (1 - m / 100) * (1 - k / 100),
  b: 255 * (1 - y / 100) * (1 - k / 100),
  a,
});

export function toLab({ r, g, b }: RGBA): [number, number, number] {
  const R = lin(r), G = lin(g), B = lin(b);
  const f = (t: number) => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116);
  const x = f((0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047);
  const y = f(0.2126729 * R + 0.7151522 * G + 0.072175 * B);
  const z = f((0.0193339 * R + 0.119192 * G + 0.9503041 * B) / 1.08883);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

export function fromLab(L: number, A: number, B: number, a = 1): RGBA {
  const fi = (t: number) => (t ** 3 > 216 / 24389 ? t ** 3 : (116 * t - 16) / (24389 / 27));
  const fy = (L + 16) / 116, fx = fy + A / 500, fz = fy - B / 200;
  const X = fi(fx) * 0.95047, Y = fi(fy), Z = fi(fz) * 1.08883;
  return {
    r: unlin(3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z),
    g: unlin(-0.969266 * X + 1.8760108 * Y + 0.041556 * Z),
    b: unlin(0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z),
    a,
  };
}

/** OKLCH (Björn Ottosson's OKLab), as CSS uses it: L 0–1, C, H in degrees */
export function toOklch({ r, g, b }: RGBA): [number, number, number] {
  const R = lin(r), G = lin(g), B = lin(b);
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const Bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const C = Math.hypot(A, Bb);
  let H = (Math.atan2(Bb, A) * 180) / Math.PI;
  if (H < 0) H += 360;
  return [L, C, C < 1e-4 ? 0 : H];
}

export function fromOklch(L: number, C: number, H: number, a = 1): RGBA {
  const A = C * Math.cos((H * Math.PI) / 180), Bb = C * Math.sin((H * Math.PI) / 180);
  const l = (L + 0.3963377774 * A + 0.2158037573 * Bb) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * Bb) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * Bb) ** 3;
  return {
    r: unlin(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    g: unlin(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    b: unlin(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
    a,
  };
}

// ---------- parsing ----------
const num = (s: string, scale: number) => (s.trim().endsWith('%') ? (parseFloat(s) / 100) * scale : parseFloat(s));
const alpha = (s?: string) => (s === undefined ? 1 : clamp(num(s, 1), 0, 1));
const angle = (s: string) => {
  const v = parseFloat(s);
  if (/turn$/.test(s)) return v * 360;
  if (/rad$/.test(s)) return (v * 180) / Math.PI;
  if (/grad$/.test(s)) return v * 0.9;
  return v;
};

/** Read a colour in any common notation; null if it isn't one */
export function parseColor(input: string): RGBA | null {
  const s = input.trim().toLowerCase().replace(/;$/, '');
  if (!s) return null;
  if (CSS_NAMES[s]) return parseColor('#' + CSS_NAMES[s]);
  if (s === 'transparent') return { r: 0, g: 0, b: 0, a: 0 };
  let m = /^#?([0-9a-f]{3,8})$/.exec(s);
  if (m && [3, 4, 6, 8].includes(m[1].length)) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: h.length === 8 ? round(parseInt(h.slice(6, 8), 16) / 255, 3) : 1 };
  }
  // fn(a b c / d) or fn(a, b, c, d)
  m = /^([a-z]+)\(\s*([^)]*)\)$/.exec(s);
  const parts = (str: string) => {
    const [main, slash] = str.split('/');
    const p = main.split(/[\s,]+/).filter(Boolean);
    if (slash) p.push(slash.trim());
    return p;
  };
  if (m) {
    const fn = m[1], p = parts(m[2]);
    if ((fn === 'rgb' || fn === 'rgba') && p.length >= 3) return { r: clamp(num(p[0], 255)), g: clamp(num(p[1], 255)), b: clamp(num(p[2], 255)), a: alpha(p[3]) };
    if ((fn === 'hsl' || fn === 'hsla') && p.length >= 3) return fromHsl(angle(p[0]), parseFloat(p[1]), parseFloat(p[2]), alpha(p[3]));
    if ((fn === 'hsv' || fn === 'hsb') && p.length >= 3) return fromHsv(angle(p[0]), parseFloat(p[1]), parseFloat(p[2]), alpha(p[3]));
    if (fn === 'cmyk' && p.length >= 4) return fromCmyk(parseFloat(p[0]), parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3]));
    if (fn === 'lab' && p.length >= 3) return fromLab(parseFloat(p[0]), parseFloat(p[1]), parseFloat(p[2]), alpha(p[3]));
    if (fn === 'oklch' && p.length >= 3) return fromOklch(num(p[0], 1), parseFloat(p[1]), angle(p[2]), alpha(p[3]));
    return null;
  }
  // Bare numbers: "255, 0, 128" or "255 0 128"
  const bare = s.split(/[\s,]+/).filter(Boolean);
  if (bare.length === 3 && bare.every((v) => /^\d{1,3}$/.test(v) && +v <= 255)) return { r: +bare[0], g: +bare[1], b: +bare[2], a: 1 };
  return null;
}

// ---------- output ----------
const hex2 = (v: number) => Math.round(clamp(v)).toString(16).padStart(2, '0');
export const toHex = (c: RGBA) => '#' + hex2(c.r) + hex2(c.g) + hex2(c.b) + (c.a < 1 ? hex2(c.a * 255) : '');

export function formats(c: RGBA) {
  const a = c.a < 1 ? ` / ${round(c.a, 2)}` : '';
  const [h, s, l] = toHsl(c), [hv, sv, vv] = toHsv(c), [C, M, Y, K] = toCmyk(c), [L, A, B] = toLab(c), [ol, oc, oh] = toOklch(c);
  const R = Math.round(clamp(c.r)), G = Math.round(clamp(c.g)), Bl = Math.round(clamp(c.b));
  return {
    hex: toHex(c).toUpperCase(),
    rgb: `rgb(${R} ${G} ${Bl}${a})`,
    hsl: `hsl(${round(h)} ${round(s)}% ${round(l)}%${a})`,
    hsv: `hsv(${round(hv)} ${round(sv)}% ${round(vv)}%)`,
    cmyk: `cmyk(${round(C)}% ${round(M)}% ${round(Y)}% ${round(K)}%)`,
    lab: `lab(${round(L, 1)} ${round(A, 1)} ${round(B, 1)}${a})`,
    oklch: `oklch(${round(ol * 100, 1)}% ${round(oc, 3)} ${round(oh, 1)}${a})`,
  };
}

/** The nearest CSS colour name (by Lab distance), and whether it's an exact match */
export function nearestName(c: RGBA): { name: string; exact: boolean } {
  const lab = toLab(c);
  let best = '', dist = Infinity;
  for (const [name, hex] of Object.entries(CSS_NAMES)) {
    const n = parseColor('#' + hex)!;
    const d = Math.hypot(...toLab(n).map((v, i) => v - lab[i]));
    if (d < dist) [best, dist] = [name, d];
  }
  return { name: best, exact: dist < 0.5 };
}

// ---------- contrast (WCAG 2.x) ----------
export const luminance = ({ r, g, b }: RGBA) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);

/** Text that isn't fully opaque is seen mixed with what's behind it */
export const over = (fg: RGBA, bg: RGBA): RGBA => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });

export function contrast(fg: RGBA, bg: RGBA): number {
  const L1 = luminance(over(fg, bg)), L2 = luminance(bg);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

export function wcag(ratio: number) {
  return {
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
    ui: ratio >= 3,
  };
}

/**
 * The closest colour to `fg` (same hue and chroma in OKLCH, lightness moved as little as possible) that reaches
 * `target` contrast against `bg`; null if no lightness can.
 */
export function suggestFix(fg: RGBA, bg: RGBA, target: number): RGBA | null {
  if (contrast(fg, bg) >= target) return fg;
  const [L, C, H] = toOklch(fg);
  // The colour at lightness l, with chroma reduced if it falls outside sRGB
  const at = (l: number): RGBA => {
    let c = C, cand = fromOklch(l, c, H, 1);
    while (c > 0 && [cand.r, cand.g, cand.b].some((v) => v < -0.5 || v > 255.5)) {
      c = Math.max(0, c - 0.01);
      cand = fromOklch(l, c, H, 1);
    }
    return { r: clamp(Math.round(cand.r)), g: clamp(Math.round(cand.g)), b: clamp(Math.round(cand.b)), a: 1 };
  };
  let best: RGBA | null = null, bestDelta = Infinity;
  for (const dir of [-1, 1]) {
    // Walk lightness in 1% steps until the target is met, then narrow down to the smallest change that passes
    for (let step = 1; step <= 100; step++) {
      const l = L + (dir * step) / 100;
      if (l < 0 || l > 1) break;
      if (contrast(at(l), bg) < target) continue;
      let lo = (step - 1) / 100, hi = step / 100;
      for (let k = 0; k < 14; k++) {
        const mid = (lo + hi) / 2;
        if (contrast(at(L + dir * mid), bg) >= target) hi = mid;
        else lo = mid;
      }
      if (hi < bestDelta) [best, bestDelta] = [at(L + dir * hi), hi];
      break;
    }
  }
  return best;
}

