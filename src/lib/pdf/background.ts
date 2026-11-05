/** A coloured background on PDF pages */
import { BlendMode, rgb } from 'pdf-lib';
import { loadPdf } from './pageOps';
import { isolateContent } from './pageContent';

export interface BackgroundOptions {
  color: [number, number, number];
  /**
   * 'behind' paints under the page content, like paper colour; pages that paint their own white background hide it.
   * 'tint' multiplies the colour over the page: white areas take the colour, black text stays black, photos are tinted.
   */
  mode: 'behind' | 'tint';
  /** 0-based pages, or 'all' */
  pages: number[] | 'all';
}

export async function addBackground(bytes: Uint8Array | ArrayBuffer, o: BackgroundOptions): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const pages = doc.getPages();
  const [r, g, b] = o.color.map((v) => v / 255);
  for (const i of o.pages === 'all' ? pages.map((_, k) => k) : o.pages) {
    const page = pages[i];
    if (!page) continue;
    // The whole media box, so the colour reaches the edge however the page is cropped
    const box = page.getMediaBox();
    if (o.mode === 'behind') {
      isolateContent(doc, page, `q ${r} ${g} ${b} rg ${box.x} ${box.y} ${box.width} ${box.height} re f Q`);
    } else {
      isolateContent(doc, page);
      page.drawRectangle({ x: box.x, y: box.y, width: box.width, height: box.height, color: rgb(r, g, b), blendMode: BlendMode.Multiply });
    }
  }
  return doc.save({ updateFieldAppearances: false });
}
