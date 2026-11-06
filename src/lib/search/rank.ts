/**
 * Tool search that understands how people type: "image to pdf", "photo to png", "make pdf smaller", "combine pdf",
 * partial words ("compr") and small typos. Scores each tool by how well every word of the query matches its name,
 * slug, keywords and tagline (in the page's language), with synonyms for everyday words, and recognises
 * "<from> to <to>" conversions.
 */
export interface Searchable {
  slug: string;
  name: string;
  tagline: string;
  keywords: string[];
  popular?: boolean;
}

// Everyday words for "a picture", in the site's languages, all meaning any image format
const IMAGE_WORDS = ['image', 'images', 'img', 'photo', 'photos', 'picture', 'pictures', 'pic', 'pics', 'graphic', 'screenshot', 'imagen', 'imagenes', 'imagem', 'imagens', 'bild', 'bilder', 'immagine', 'immagini', 'gambar', 'resim', 'gorsel', 'foto', 'fotos', 'fotografia', '画像', '写真', '이미지', '사진'];
const IMAGE_FORMATS = ['jpg', 'png', 'webp', 'heic', 'gif', 'bmp', 'tiff', 'avif', 'svg', 'image'];
// When a query names no exact format, converters of the most common formats come first
const COMMON = ['jpg', 'png', 'heic', 'webp', 'pdf', 'gif', 'tiff', 'avif', 'bmp', 'svg'];
const commonness = (f?: string) => (f && COMMON.includes(f) ? (COMMON.length - COMMON.indexOf(f)) / COMMON.length : 0);

/** Words that mean the same thing for search: each maps to the forms that appear in tool names and slugs */
const SYNONYMS: Record<string, string[]> = {
  jpeg: ['jpg'],
  jpe: ['jpg'],
  tif: ['tiff'],
  heif: ['heic'],
  doc: ['word'],
  docx: ['word'],
  xls: ['excel'],
  xlsx: ['excel'],
  spreadsheet: ['excel'],
  ppt: ['powerpoint'],
  pptx: ['powerpoint'],
  slides: ['powerpoint'],
  txt: ['text'],
  md: ['markdown'],
  ico: ['favicon', 'icon'],
  bg: ['background'],
  shrink: ['compress', 'reduce'],
  smaller: ['compress', 'reduce'],
  reduce: ['compress'],
  minimize: ['compress'],
  optimize: ['compress'],
  optimise: ['compress'],
  combine: ['merge'],
  join: ['merge'],
  cut: ['crop', 'split'],
  trim: ['crop'],
  scale: ['resize'],
  enlarge: ['resize', 'upscale'],
  turn: ['rotate'],
  mirror: ['flip'],
  password: ['protect', 'unlock'],
  lock: ['protect'],
  ocr: ['text', 'searchable'],
  scan: ['scanner', 'ocr'],
  signature: ['sign'],
  cutout: ['background'],
  transparent: ['background', 'transparent'],
  blur: ['blur', 'censor'],
  pixelate: ['censor'],
  hide: ['censor', 'hide'],
  stamp: ['watermark'],
  logo: ['watermark', 'icon'],
  numbers: ['number'],
  pages: ['page'],
};
for (const w of IMAGE_WORDS) SYNONYMS[w] = ['image', 'photo', ...(SYNONYMS[w] ?? [])];

// Words that carry no meaning in a search ("how to convert my jpg to png online free")
const STOP = new Set(['変換', '変換する', '作成', '변환', '만들기', 'a', 'an', 'the', 'my', 'me', 'i', 'into', 'convert', 'converter', 'conversion', 'change', 'online', 'free', 'tool', 'tools', 'how', 'do', 'can', 'file', 'files', 'for', 'of', 'in', 'on', 'with', 'and', 'or', 'please', 'want', 'make', 'from', 'app', 'website', 'best', 'easy', 'quick']);
const TO = new Set(['to', '2', 'into', 'as', 'a']);

const norm = (s: string) =>
  s
    .toLowerCase()
    // Full-width letters to normal ones, accents off Latin letters, and Korean syllables kept whole
    .normalize('NFKC')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .normalize('NFC')
    // Split letters from digits and different scripts so "画像をpdfに" -> 画像を pdf に
    .replace(/([a-z0-9])([^a-z0-9\s])|([^a-z0-9\s])([a-z0-9])/g, '$1$3 $2$4')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
const words = (s: string) => norm(s).split(' ').filter(Boolean);

function editDistanceAtMostOne(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

interface Prepared {
  item: Searchable;
  index: number;
  fields: { words: string[]; text: string; weight: number }[];
  from?: string;
  to?: string;
}

const prepCache = new WeakMap<Searchable[], Prepared[]>();
function prepare(items: Searchable[]): Prepared[] {
  let p = prepCache.get(items);
  if (p) return p;
  p = items.map((item, index) => {
    const slugWords = item.slug.split('-');
    const conv = /^([a-z0-9]+)-to-([a-z0-9]+)$/.exec(item.slug);
    const field = (text: string, weight: number) => ({ words: words(text), text: norm(text), weight });
    return {
      item,
      index,
      fields: [field(item.name, 5), { words: slugWords, text: slugWords.join(' '), weight: 4 }, field(item.keywords.join(' '), 3), field(item.tagline, 1)],
      from: conv?.[1],
      to: conv?.[2],
    };
  });
  prepCache.set(items, p);
  return p;
}

/** How well one query word (or any of its alternatives) matches a tool; 0 when it doesn't */
function termScore(p: Prepared, alts: string[]): number {
  let best = 0;
  alts.forEach((term, k) => {
    const synonym = k === 0 ? 1 : 0.85;
    for (const f of p.fields) {
      let s = 0;
      if (f.words.includes(term)) s = 1;
      else if (term.length >= 2 && f.words.some((w) => w.startsWith(term))) s = 0.8;
      // Scripts written without spaces (Japanese) match inside the text
      else if (/[^\x00-\x7f]/.test(term) && f.text.includes(term)) s = 0.75;
      else if (term.length >= 5 && f.words.some((w) => w.length >= 4 && editDistanceAtMostOne(w, term))) s = 0.5;
      best = Math.max(best, s * f.weight * synonym);
    }
  });
  return best;
}

const groupOf = (w: string): string[] | null => {
  if (IMAGE_WORDS.includes(w)) return IMAGE_FORMATS;
  const syn = SYNONYMS[w];
  return [w, ...(syn ?? [])];
};

/**
 * Japanese and Korean say "X to Y" with particles: 画像をPDFに (image を pdf に), PDFから画像 (pdf から image),
 * 이미지를 PDF로 (image 를 pdf 로). Rewrite those as "X to Y" so conversions are understood.
 */
function conversionPhrase(q: string): string {
  return q
    .replace(/(\S+?)\s*を\s*(\S+?)\s*(?:に|へ)(?=\s|変換|$)/g, '$1 to $2 ')
    .replace(/(\S+?)\s*から\s*(\S+)/g, '$1 to $2')
    .replace(/(\S+?)\s*[을를]\s*(\S+?)\s*(?:으로|로)(?=\s|변환|$)/g, '$1 to $2 ');
}

/** Tools for a query, best first; all tools in their usual order for an empty query */
export function rankTools<T extends Searchable>(items: T[], query: string): T[] {
  const raw = words(conversionPhrase(query));
  if (!raw.length) return items;
  // "<from> to <to>": a conversion
  const toAt = raw.findIndex((w, i) => TO.has(w) && i > 0 && i < raw.length - 1);
  const fromGroup = toAt > 0 ? groupOf(raw[toAt - 1]) : null;
  const toGroup = toAt > 0 ? groupOf(raw[toAt + 1]) : null;
  const terms = raw.filter((w) => !STOP.has(w) && !TO.has(w)).map((w) => [w, ...(SYNONYMS[w] ?? [])]);
  const prepared = prepare(items);
  const scored = prepared.map((p) => {
    let total = 0, matched = 0;
    for (const alts of terms) {
      const s = termScore(p, alts);
      if (s > 0) matched++;
      total += s;
    }
    if (fromGroup && toGroup) {
      const anyImage = fromGroup === IMAGE_FORMATS;
      // The all-formats converter is the answer to "image to <image format>"
      if (p.item.slug === 'convert-image' && anyImage && IMAGE_FORMATS.includes(toGroup[0]) && toGroup !== IMAGE_FORMATS) total = 200 + total * 0.1;
      // An exact conversion: the most common formats first, word matches only break ties
      else if (p.from && p.to && fromGroup.includes(p.from) && toGroup.includes(p.to)) total = 100 + 10 * commonness(p.from) + 5 * commonness(p.to) + total * 0.1;
      // Right result, wrong source: "image to text" also suits "pdf to text" tools a little
      else if (p.to && toGroup.includes(p.to)) total += 3;
    }
    if (p.item.popular) total += 0.5;
    return { p, total, matched };
  });
  const need = terms.length;
  // Every word should match; if no tool matches them all, show the tools that match the most
  const best = Math.max(...scored.map((s) => s.matched));
  const keep = scored.filter((s) => s.total > 0 && (s.matched === need || (best < need && s.matched === best) || s.total >= 20));
  keep.sort((a, b) => b.total - a.total || a.p.index - b.p.index);
  return keep.map((s) => s.p.item as T);
}
