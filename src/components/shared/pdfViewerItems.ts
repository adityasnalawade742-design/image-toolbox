import type { PDFDocumentProxy } from 'pdfjs-dist';
import { renderPage } from '../../lib/pdf/pdfToImages';
import { blobImage, type ViewerItem } from './MediaViewer';

/** Pages drawn sharp for this screen: about its own pixel size, between 1600 and 3200 px on the long side */
const viewSide = () => {
  if (typeof window === 'undefined') return 2000;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  return Math.round(Math.min(3200, Math.max(1600, Math.max(window.innerWidth, window.innerHeight) * dpr)));
};

/** Viewer items for PDF pages, in the order and turn the tool shows them */
export function pdfPageItems(doc: PDFDocumentProxy, pages: { key: string; index: number; rotate?: number }[], label: (index: number) => string): ViewerItem[] {
  return pages.map((p) => ({
    key: `${p.key}@${p.rotate ?? 0}`,
    label: label(p.index),
    load: async () => blobImage(await renderPage(doc, p.index + 1, 200, 'image/jpeg', viewSide(), p.rotate ?? 0)),
  }));
}
