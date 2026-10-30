/**
 * Overlay PDF: draw the pages of one PDF (a letterhead, a background, a stamp sheet) on top of or underneath the
 * pages of another, scaled to fit each page as it is seen.
 */
import { PDFArray, type PDFPage } from 'pdf-lib';
import { loadPdf, placeCentred, visualPage } from './pageOps';

export interface OverlayOptions {
  /** 'over' draws on top of the page; 'under' draws behind its content (hidden where the page paints a white background) */
  position: 'over' | 'under';
  /** Which overlay page goes on page i: always the first, page by page (extra pages get none), or page by page repeating */
  match: 'first' | 'same' | 'repeat';
  /** 0-based pages to cover; 'all' for every page */
  pages: number[] | 'all';
  opacity: number;
}

/** Move the content stream just drawn to the front, so the page's own content paints over it */
function sendToBack(page: PDFPage) {
  const contents = page.node.normalizedEntries().Contents;
  if (!(contents instanceof PDFArray) || contents.size() < 2) return;
  const last = contents.get(contents.size() - 1);
  contents.remove(contents.size() - 1);
  contents.insert(0, last);
}

export async function overlayPdf(baseBytes: Uint8Array | ArrayBuffer, overlayBytes: Uint8Array | ArrayBuffer, opts: OverlayOptions): Promise<Uint8Array> {
  const doc = await loadPdf(baseBytes);
  const src = await loadPdf(overlayBytes);
  const count = src.getPageCount();
  const embedded = await doc.embedPages(src.getPages());
  const pages = doc.getPages();
  const targets = opts.pages === 'all' ? pages.map((_, i) => i) : opts.pages.filter((i) => i >= 0 && i < pages.length);
  targets.forEach((i, n) => {
    // Page by page follows the position among the covered pages, so "pages 2-5" gets overlay pages 1-4
    const which = opts.match === 'first' ? 0 : opts.match === 'same' ? n : n % count;
    if (which >= count) return;
    const page = pages[i];
    const art = embedded[which];
    const view = visualPage(page);
    // Fit inside the page, keeping proportions, centred
    const s = Math.min(view.width / art.width, view.height / art.height);
    const w = art.width * s;
    const h = art.height * s;
    const { x, y, rotate } = placeCentred(page, view.width / 2, view.height / 2, w, h);
    page.drawPage(art, { x, y, width: w, height: h, rotate, opacity: opts.opacity });
    if (opts.position === 'under') sendToBack(page);
  });
  return doc.save();
}
