/**
 * PDF editor: draws what the user added (text, images, highlights, drawings, shapes, whiteout boxes, links) onto the
 * pages, and redacts. Positions are in points on the page as it is seen, measured from its top-left corner, so the
 * editor's preview and the saved file agree whatever the page's rotation or crop box.
 */
import {
  BlendMode,
  LineCapStyle,
  PDFArray,
  PDFDict,
  PDFName,
  PDFRef,
  PDFStream,
  PDFString,
  StandardFonts,
  degrees,
  rgb,
  type PDFDocument,
  type PDFFont,
  type PDFObject,
  type PDFPage,
} from 'pdf-lib';
import { dropUnreachable, loadPdf, placeCentred, visualPage, type FontLoader } from './pageOps';

export { dropUnreachable };
import { PdfUnsupportedTextError } from './errors';
import { fontScriptFor, type FontScript } from './unicodeFont';

interface Base {
  id: string;
  /** 0-based page */
  page: number;
}
export type TextFont = 'sans' | 'serif' | 'mono';
export interface TextItem extends Base {
  kind: 'text';
  /** Top-left corner of the first line */
  x: number;
  y: number;
  text: string;
  /** Font size in points */
  size: number;
  color: string;
  font: TextFont;
  bold: boolean;
}
export interface ImageItem extends Base {
  kind: 'image';
  x: number;
  y: number;
  w: number;
  h: number;
  /** PNG or JPEG data URL */
  url: string;
}
export type BoxKind = 'highlight' | 'underline' | 'strike' | 'whiteout' | 'redact' | 'rect' | 'ellipse' | 'link';
export interface BoxItem extends Base {
  kind: BoxKind;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  /** Border width in points (rectangles and ellipses) */
  width: number;
  /** Rectangles and ellipses: filled with the colour instead of outlined */
  fill: boolean;
  /** Links: the web or email address */
  url: string;
}
export interface LineItem extends Base {
  kind: 'line' | 'arrow';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
}
export interface InkItem extends Base {
  kind: 'ink';
  /** x, y, x, y, … */
  points: number[];
  color: string;
  width: number;
}
export type EditItem = TextItem | ImageItem | BoxItem | LineItem | InkItem;

/** Text layout shared with the editor preview: baseline of the first line, and the distance between lines */
export const TEXT_ASCENT = 0.8;
export const TEXT_LINE_HEIGHT = 1.25;
export const HIGHLIGHT_OPACITY = 0.45;

/** Underline and strike-through thickness for a marked box of height h */
export const markThickness = (h: number) => Math.max(1, h * 0.08);

/** Arrow head: two strokes back from the tip */
export function arrowHead(x1: number, y1: number, x2: number, y2: number, width: number) {
  const len = Math.max(8, width * 4);
  const a = Math.atan2(y2 - y1, x2 - x1);
  const side = (d: number) => ({ x: x2 - len * Math.cos(a + d), y: y2 - len * Math.sin(a + d) });
  return [side(Math.PI / 7), side(-Math.PI / 7)];
}

/** "example.com" → "https://example.com/", "me@example.com" → "mailto:…"; null for anything that isn't an address */
export function normalizeUrl(input: string): string | null {
  const s = input.trim();
  if (!s || /\s/.test(s)) return null;
  let candidate = s;
  if (/^mailto:/i.test(s)) candidate = s;
  else if (/^[^@/:]+@[^@/:]+\.[^@/:]+$/.test(s)) candidate = `mailto:${s}`;
  else if (!/^https?:\/\//i.test(s)) candidate = `https://${s}`;
  try {
    const u = new URL(candidate);
    if (u.protocol === 'mailto:') return u.pathname.includes('@') ? candidate : null;
    if (!/^https?:$/.test(u.protocol) || !u.hostname.includes('.')) return null;
    return u.href;
  } catch {
    return null;
  }
}

const hex = (c: string) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(c);
  const n = m ? parseInt(m[1], 16) : 0;
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

/** The page-space rectangle of a box on the visible page (pages turn in quarter turns, so it stays a rectangle) */
function pageRect(page: PDFPage, x: number, y: number, w: number, h: number) {
  const view = visualPage(page);
  const a = view.toPage(x, y);
  const b = view.toPage(x + w, y + h);
  return { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y), width: Math.abs(a.x - b.x), height: Math.abs(a.y - b.y) };
}

const STANDARD: Record<TextFont, [StandardFonts, StandardFonts]> = {
  sans: [StandardFonts.Helvetica, StandardFonts.HelveticaBold],
  serif: [StandardFonts.TimesRoman, StandardFonts.TimesRomanBold],
  mono: [StandardFonts.Courier, StandardFonts.CourierBold],
};

/** Fonts for text items: the standard PDF fonts for Latin-1, a site font for other scripts */
function fontPicker(doc: PDFDocument, loadFont?: FontLoader) {
  const standard = new Map<StandardFonts, PDFFont>();
  const site = new Map<FontScript, PDFFont>();
  return async (text: string, family: TextFont, bold: boolean): Promise<PDFFont | null> => {
    const name = STANDARD[family][bold ? 1 : 0];
    let font = standard.get(name);
    if (!font) {
      font = await doc.embedFont(name);
      standard.set(name, font);
    }
    try {
      font.encodeText(text);
      return font;
    } catch {
      if (!loadFont) return null;
    }
    const script = fontScriptFor(text);
    let other = site.get(script);
    if (!other) {
      if (!site.size) doc.registerFontkit((await import('@pdf-lib/fontkit')).default);
      // Embedded whole: fontkit's subsetting drops glyphs from these fonts (see fillForm)
      other = await doc.embedFont(await loadFont(script), { subset: false });
      site.set(script, other);
    }
    const covered = new Set(other.getCharacterSet());
    return [...text].every((ch) => /\s/.test(ch) || covered.has(ch.codePointAt(0)!)) ? other : null;
  };
}

const dataUrlBytes = (url: string) => Uint8Array.from(atob(url.split(',')[1] || ''), (ch) => ch.charCodeAt(0));

async function drawItem(doc: PDFDocument, page: PDFPage, item: EditItem, font: ReturnType<typeof fontPicker>, unsupported: string[]) {
  const view = visualPage(page);
  switch (item.kind) {
    case 'text': {
      const lines = item.text.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].replace(/\t/g, '    ');
        if (!line.trim()) continue;
        const f = await font(line, item.font, item.bold);
        if (!f) {
          unsupported.push(item.text.slice(0, 30));
          return;
        }
        const p = view.toPage(item.x, item.y + item.size * (TEXT_ASCENT + i * TEXT_LINE_HEIGHT));
        page.drawText(line, { x: p.x, y: p.y, size: item.size, font: f, color: hex(item.color), rotate: degrees(view.rotation) });
      }
      return;
    }
    case 'image': {
      const bytes = dataUrlBytes(item.url);
      const img = /^data:image\/jpe?g/i.test(item.url) ? await doc.embedJpg(bytes) : await doc.embedPng(bytes);
      const { x, y, rotate } = placeCentred(page, item.x + item.w / 2, item.y + item.h / 2, item.w, item.h);
      page.drawImage(img, { x, y, width: item.w, height: item.h, rotate });
      return;
    }
    case 'ink': {
      if (item.points.length < 2) return;
      const pts: string[] = [];
      for (let i = 0; i < item.points.length; i += 2) {
        const p = view.toPage(item.points[i], item.points[i + 1]);
        // drawSvgPath flips y (SVG y runs down), so page y goes in negated
        pts.push(`${i ? 'L' : 'M'}${p.x.toFixed(2)} ${(-p.y).toFixed(2)}`);
      }
      // A tap leaves a dot
      if (item.points.length === 2) pts.push(pts[0].replace('M', 'L'));
      page.drawSvgPath(pts.join(' '), { x: 0, y: 0, borderColor: hex(item.color), borderWidth: item.width, borderLineCap: LineCapStyle.Round });
      return;
    }
    case 'line':
    case 'arrow': {
      const strokes: [number, number, number, number][] = [[item.x1, item.y1, item.x2, item.y2]];
      if (item.kind === 'arrow') arrowHead(item.x1, item.y1, item.x2, item.y2, item.width).forEach((s) => strokes.push([item.x2, item.y2, s.x, s.y]));
      for (const [ax, ay, bx, by] of strokes) {
        page.drawLine({ start: view.toPage(ax, ay), end: view.toPage(bx, by), thickness: item.width, color: hex(item.color), lineCap: LineCapStyle.Round });
      }
      return;
    }
    case 'link':
      return addLink(doc, page, item);
    case 'underline':
    case 'strike': {
      const t = markThickness(item.h);
      const y = item.kind === 'underline' ? item.y + item.h - t / 2 : item.y + item.h / 2;
      page.drawLine({ start: view.toPage(item.x, y), end: view.toPage(item.x + item.w, y), thickness: t, color: hex(item.color) });
      return;
    }
    case 'ellipse': {
      const c = view.toPage(item.x + item.w / 2, item.y + item.h / 2);
      const sideways = view.rotation === 90 || view.rotation === 270;
      const [xs, ys] = sideways ? [item.h / 2, item.w / 2] : [item.w / 2, item.h / 2];
      const inset = item.fill ? 0 : item.width / 2;
      page.drawEllipse({
        x: c.x,
        y: c.y,
        xScale: Math.max(0.5, xs - inset),
        yScale: Math.max(0.5, ys - inset),
        ...(item.fill ? { color: hex(item.color) } : { borderColor: hex(item.color), borderWidth: item.width }),
      });
      return;
    }
    default: {
      const r = pageRect(page, item.x, item.y, item.w, item.h);
      if (item.kind === 'highlight') page.drawRectangle({ ...r, color: hex(item.color), opacity: HIGHLIGHT_OPACITY, blendMode: BlendMode.Multiply });
      else if (item.kind === 'whiteout') page.drawRectangle({ ...r, color: hex(item.color) });
      else if (item.kind === 'redact') page.drawRectangle({ ...r, color: rgb(0, 0, 0) });
      else if (item.fill) page.drawRectangle({ ...r, color: hex(item.color) });
      else {
        // The border is drawn inside the box, as in the preview
        const i = item.width / 2;
        page.drawRectangle({ x: r.x + i, y: r.y + i, width: Math.max(0, r.width - item.width), height: Math.max(0, r.height - item.width), borderColor: hex(item.color), borderWidth: item.width });
      }
    }
  }
}

function addLink(doc: PDFDocument, page: PDFPage, item: BoxItem) {
  const url = normalizeUrl(item.url);
  if (!url) return;
  const r = pageRect(page, item.x, item.y, item.w, item.h);
  const ref = doc.context.register(
    doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [r.x, r.y, r.x + r.width, r.y + r.height],
      Border: [0, 0, 0],
      A: { Type: 'Action', S: 'URI', URI: PDFString.of(url) },
    })
  );
  let annots = page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
  if (!annots) {
    annots = doc.context.obj([]);
    page.node.set(PDFName.of('Annots'), annots);
  }
  annots.push(ref);
}

/** Black boxes to burn into a page, and the page image that comes back with them burnt in */
export type PageRasterizer = (pageIndex: number, boxes: { x: number; y: number; w: number; h: number }[]) => Promise<{ bytes: Uint8Array; type: 'jpg' | 'png' }>;

/**
 * Replace a page's content with an image of it. The page object stays (so bookmarks and links to it still work),
 * but its text, drawings, form fields, annotations and thumbnail go.
 */
async function flattenToImage(doc: PDFDocument, index: number, image: { bytes: Uint8Array; type: 'jpg' | 'png' }) {
  const page = doc.getPage(index);
  const node = page.node;
  const pageRef = page.ref;
  const acro = doc.catalog.lookupMaybe(PDFName.of('AcroForm'), PDFDict);
  if (acro) {
    const form = doc.getForm();
    const annotRefs = new Set((node.lookupMaybe(PDFName.of('Annots'), PDFArray)?.asArray() ?? []).map(String));
    for (const field of form.getFields()) {
      const onPage = field.acroField.getWidgets().some((w) => {
        const ref = doc.context.getObjectRef(w.dict);
        return w.P() === pageRef || (ref && annotRefs.has(String(ref)));
      });
      // A filled-in value would survive in the form data, so the whole field goes
      if (onPage) form.removeField(field);
    }
  }
  for (const key of ['Annots', 'Thumb', 'PieceInfo', 'StructParents', 'Group']) node.delete(PDFName.of(key));
  // pdf-lib expects these to exist on a page it draws on
  node.set(PDFName.of('Resources'), doc.context.obj({ Font: {}, XObject: {}, ExtGState: {} }));
  node.set(PDFName.of('Contents'), doc.context.obj([]));
  const img = image.type === 'jpg' ? await doc.embedJpg(image.bytes) : await doc.embedPng(image.bytes);
  const { width, height } = visualPage(page);
  const { x, y, rotate } = placeCentred(page, width / 2, height / 2, width, height);
  page.drawImage(img, { x, y, width, height, rotate });
}

export interface ApplyOptions {
  loadFont?: FontLoader;
  /** Needed when there are redactions */
  rasterize?: PageRasterizer;
}

/** Apply the editor's items to a PDF; items later in the list are drawn on top */
export async function applyEdits(bytes: Uint8Array | ArrayBuffer, items: EditItem[], opts: ApplyOptions = {}): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const pageCount = doc.getPageCount();
  const valid = items.filter((it) => it.page >= 0 && it.page < pageCount);

  // Redact first: the page becomes an image with the boxes burnt in, then everything else is drawn over it
  const redactions = new Map<number, BoxItem[]>();
  for (const it of valid) if (it.kind === 'redact') redactions.set(it.page, [...(redactions.get(it.page) ?? []), it]);
  if (redactions.size) {
    if (!opts.rasterize) throw new Error('Redaction needs a page rasterizer');
    for (const [index, boxes] of redactions) {
      await flattenToImage(doc, index, await opts.rasterize(index, boxes.map(({ x, y, w, h }) => ({ x, y, w, h }))));
    }
    // Tags can carry the text of the content they describe
    doc.catalog.delete(PDFName.of('StructTreeRoot'));
  }

  const font = fontPicker(doc, opts.loadFont);
  const unsupported: string[] = [];
  for (const it of valid) await drawItem(doc, doc.getPage(it.page), it, font, unsupported);
  if (unsupported.length) throw new PdfUnsupportedTextError(unsupported);

  if (redactions.size) dropUnreachable(doc);
  return doc.save();
}
