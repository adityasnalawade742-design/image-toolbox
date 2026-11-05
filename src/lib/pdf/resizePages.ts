/**
 * Change page size in place: the content is scaled to fit (or kept at 100%) and centred, and links, form fields and
 * comments move with it, so nothing on the page is lost.
 */
import { PDFArray, PDFDict, PDFName, PDFNumber, type PDFDocument, type PDFPage } from 'pdf-lib';
import { loadPdf } from './pageOps';
import { annotations, num } from './pageContent';

const enc = new TextEncoder();
export const PAGE_SIZES = {
  a4: [595.28, 841.89],
  a3: [841.89, 1190.55],
  a5: [419.53, 595.28],
  letter: [612, 792],
  legal: [612, 1008],
  tabloid: [792, 1224],
} as const;
export type PageSizeName = keyof typeof PAGE_SIZES;

export interface ResizeOptions {
  size: PageSizeName;
  /** 'auto' keeps each page's own orientation */
  orientation: 'auto' | 'portrait' | 'landscape';
  /** 'fit' scales content to the new size; 'keep' leaves it at 100% (bigger pages get margins, smaller ones are cut) */
  mode: 'fit' | 'keep';
}

/** Turn an array of x, y pairs in place */
function mapPoints(doc: PDFDocument, arr: unknown, f: (x: number, y: number) => [number, number]) {
  const a = doc.context.lookup(arr as never);
  if (!(a instanceof PDFArray)) return;
  for (let i = 0; i + 1 < a.size(); i += 2) {
    const [x, y] = f(num(doc.context.lookup(a.get(i))), num(doc.context.lookup(a.get(i + 1))));
    a.set(i, PDFNumber.of(x));
    a.set(i + 1, PDFNumber.of(y));
  }
}

function resizePage(doc: PDFDocument, page: PDFPage, o: ResizeOptions) {
  const box = page.getCropBox();
  const r = ((Math.round(page.getRotation().angle / 90) * 90) % 360 + 360) % 360;
  const sideways = r === 90 || r === 270;
  // Sizes as seen on screen
  const seenW = sideways ? box.height : box.width, seenH = sideways ? box.width : box.height;
  const [a, b] = PAGE_SIZES[o.size];
  const landscape = o.orientation === 'landscape' || (o.orientation === 'auto' && seenW > seenH);
  const targetSeenW = landscape ? Math.max(a, b) : Math.min(a, b), targetSeenH = landscape ? Math.min(a, b) : Math.max(a, b);
  // Back in the page's own (unrotated) frame
  const W = sideways ? targetSeenH : targetSeenW, H = sideways ? targetSeenW : targetSeenH;
  const s = o.mode === 'fit' ? Math.min(W / box.width, H / box.height) : 1;
  const tx = (W - box.width * s) / 2 - box.x * s, ty = (H - box.height * s) / 2 - box.y * s;
  const f = (x: number, y: number): [number, number] => [x * s + tx, y * s + ty];

  // Clipped to the old visible area: a cropped page mustn't show what the crop hid in its new margins
  const start = doc.context.register(doc.context.stream(enc.encode(`q ${s} 0 0 ${s} ${tx} ${ty} cm ${box.x} ${box.y} ${box.width} ${box.height} re W n\n`)));
  const end = doc.context.register(doc.context.stream(enc.encode('\nQ\n')));
  page.node.wrapContentStreams(start, end);
  page.setMediaBox(0, 0, W, H);
  for (const key of ['CropBox', 'BleedBox', 'TrimBox', 'ArtBox']) page.node.delete(PDFName.of(key));

  for (const { dict } of annotations(page)) {
    mapPoints(doc, dict.get(PDFName.of('Rect')), f);
    for (const key of ['QuadPoints', 'Vertices', 'L', 'CL']) mapPoints(doc, dict.get(PDFName.of(key)), f);
    const ink = doc.context.lookup(dict.get(PDFName.of('InkList')));
    if (ink instanceof PDFArray) for (let i = 0; i < ink.size(); i++) mapPoints(doc, ink.get(i), f);
    // The appearance is fitted to the (now scaled) rectangle, so it scales with it; a border width keeps its look
    const bs = doc.context.lookup(dict.get(PDFName.of('BS')));
    if (bs instanceof PDFDict && bs.get(PDFName.of('W'))) bs.set(PDFName.of('W'), PDFNumber.of(num(bs.get(PDFName.of('W'))) * s));
  }
  return { width: targetSeenW, height: targetSeenH, scale: s };
}

export async function resizePages(bytes: Uint8Array | ArrayBuffer, o: ResizeOptions): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  for (const page of doc.getPages()) resizePage(doc, page, o);
  return doc.save({ updateFieldAppearances: false });
}
