/** Headers and footers: text at the top and bottom of every page, with page numbers, date and file name */
import { StandardFonts, rgb, type PDFDocument, type PDFFont } from 'pdf-lib';
import { dropUnreachable, loadPdf, numberedRange, placeCentred, visualPage, type FontLoader } from './pageOps';
import { isolateContent } from './pageContent';
import { fontScriptFor, type FontScript } from './unicodeFont';

export type Slot = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export const SLOTS: Slot[] = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'];

export interface HeaderFooterOptions {
  text: Partial<Record<Slot, string>>;
  fontSize: number;
  /** Distance from the page edge, in points */
  margin: number;
  color: [number, number, number];
  /** Leave the first page as it is (same as from: 2) */
  skipFirst?: boolean;
  /** Pages that get the header and footer, 1-based and inclusive (default: all) */
  from?: number;
  to?: number;
  /** Number the first page with this */
  start: number;
  fileName: string;
  date: string;
}

/** Fill in {page}, {pages}, {date} and {file} */
export function expand(template: string, page: number, pages: number, o: Pick<HeaderFooterOptions, 'fileName' | 'date'>) {
  return template
    .replace(/\{page\}/gi, String(page))
    .replace(/\{pages\}/gi, String(pages))
    .replace(/\{date\}/gi, o.date)
    .replace(/\{file\}/gi, o.fileName);
}

/** The standard font for Latin-1 text, a font from the site for other scripts; null if neither can write it */
export function fonts(doc: PDFDocument, loadFont?: FontLoader) {
  let standard: PDFFont | null = null;
  const site = new Map<FontScript, PDFFont>();
  return async (text: string): Promise<PDFFont | null> => {
    standard ??= await doc.embedFont(StandardFonts.Helvetica);
    try {
      standard.encodeText(text);
      return standard;
    } catch {
      if (!loadFont) return null;
    }
    const script = fontScriptFor(text);
    let f = site.get(script);
    if (!f) {
      if (!site.size) doc.registerFontkit((await import('@pdf-lib/fontkit')).default);
      // Embedded whole: fontkit's subsetting drops glyphs from these fonts (see fillForm)
      f = await doc.embedFont(await loadFont(script), { subset: false });
      site.set(script, f);
    }
    const covered = new Set(f.getCharacterSet());
    return [...text].every((ch) => /\s/.test(ch) || covered.has(ch.codePointAt(0)!)) ? f : null;
  };
}

export async function addHeaderFooter(bytes: Uint8Array | ArrayBuffer, o: HeaderFooterOptions, loadFont?: FontLoader): Promise<{ bytes: Uint8Array; unsupported: string[] }> {
  const doc = await loadPdf(bytes);
  const pick = fonts(doc, loadFont);
  const pages = doc.getPages();
  const range = numberedRange(pages.length, o);
  const last = o.start + range.last - range.first;
  const unsupported = new Set<string>();
  const color = rgb(o.color[0] / 255, o.color[1] / 255, o.color[2] / 255);
  for (let i = 0; i < pages.length; i++) {
    if (i < range.first || i > range.last) continue;
    const page = pages[i];
    const n = o.start + i - range.first;
    const { width, height } = visualPage(page);
    let isolated = false;
    for (const slot of SLOTS) {
      const template = o.text[slot]?.trim();
      if (!template) continue;
      const text = expand(template, n, last, o);
      const font = await pick(text);
      if (!font) {
        unsupported.add(template);
        continue;
      }
      if (!isolated) {
        isolateContent(doc, page);
        isolated = true;
      }
      const w = font.widthOfTextAtSize(text, o.fontSize);
      const h = font.heightAtSize(o.fontSize, { descender: false });
      const top = slot.startsWith('top');
      const u = slot.endsWith('Left') ? o.margin + w / 2 : slot.endsWith('Right') ? width - o.margin - w / 2 : width / 2;
      const v = top ? o.margin + h / 2 : height - o.margin - h / 2;
      const { x, y, rotate } = placeCentred(page, u, v, w, h);
      page.drawText(text, { x, y, rotate, size: o.fontSize, font, color });
    }
  }
  dropUnreachable(doc);
  return { bytes: await doc.save(), unsupported: [...unsupported] };
}
