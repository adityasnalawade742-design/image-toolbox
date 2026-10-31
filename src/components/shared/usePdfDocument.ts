import { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { openPdf, renderPage, PdfPasswordError } from '../../lib/pdf/pdfToImages';

// Thumbnails render at a fixed low resolution
export const THUMB_DPI = 36;

export type PdfLoadError = 'password' | 'invalid';

/**
 * One PDF opened for a tool: the raw bytes (for pdf-lib edits), a pdf.js document (for previews),
 * and page thumbnails rendered one after another so the first ones appear quickly.
 */
export function usePdfDocument() {
  const [file, setFile] = useState<File | null>(null);
  const [bytes, setBytes] = useState<ArrayBuffer | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [thumbs, setThumbs] = useState<string[]>([]);
  const [error, setError] = useState<PdfLoadError | null>(null);
  const [loading, setLoading] = useState(false);
  const loadId = useRef(0);

  const clear = () => {
    setThumbs((prev) => {
      prev.forEach((u) => u && URL.revokeObjectURL(u));
      return [];
    });
    setDoc((prev) => {
      prev?.loadingTask.destroy();
      return null;
    });
  };

  const load = async (f: File) => {
    const id = ++loadId.current;
    clear();
    setError(null);
    setLoading(true);
    setFile(f);
    try {
      // pdf.js may take ownership of the buffer it is given, so it gets its own copy
      const [raw, d] = await Promise.all([f.arrayBuffer(), openPdf(f)]);
      if (id !== loadId.current) return d.loadingTask.destroy();
      setBytes(raw);
      setDoc(d);
    } catch (err) {
      if (id !== loadId.current) return;
      setFile(null);
      setBytes(null);
      setError(err instanceof PdfPasswordError ? 'password' : 'invalid');
    } finally {
      if (id === loadId.current) setLoading(false);
    }
  };

  useEffect(() => {
    if (!doc) return;
    let cancelled = false;
    (async () => {
      for (let n = 1; n <= doc.numPages; n++) {
        if (cancelled) return;
        try {
          const blob = await renderPage(doc, n, THUMB_DPI, 'image/jpeg');
          if (cancelled) return;
          setThumbs((prev) => [...prev, URL.createObjectURL(blob)]);
        } catch {
          setThumbs((prev) => [...prev, '']);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [doc]);

  useEffect(() => () => clear(), []);

  const reset = () => {
    loadId.current++;
    clear();
    setFile(null);
    setBytes(null);
    setError(null);
  };

  return { file, bytes, doc, pageCount: doc?.numPages ?? 0, thumbs, error, loading, load, reset };
}

// The render each preview canvas is busy with, so a newer page can replace it (pdf.js refuses two renders into one canvas)
const latest = new WeakMap<HTMLCanvasElement, number>();
const running = new WeakMap<HTMLCanvasElement, { cancel: () => void }>();

/**
 * Render one page into a canvas for an interactive preview (watermark, sign, crop, editor), sharp on high-density
 * screens. Resolves to the page size as seen (rotation applied) in PDF points, or null when a newer page took over.
 */
export async function renderPageToCanvas(doc: PDFDocumentProxy, pageNumber: number, canvas: HTMLCanvasElement, maxWidth = 900) {
  const id = (latest.get(canvas) ?? 0) + 1;
  latest.set(canvas, id);
  const page = await doc.getPage(pageNumber);
  if (latest.get(canvas) !== id) return null;
  running.get(canvas)?.cancel();
  const base = page.getViewport({ scale: 1 });
  const dpr = typeof window === 'undefined' ? 1 : Math.min(2, window.devicePixelRatio || 1);
  const viewport = page.getViewport({ scale: Math.min(2, maxWidth / base.width) * dpr });
  canvas.width = Math.round(viewport.width);
  canvas.height = Math.round(viewport.height);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const task = page.render({ canvas, canvasContext: ctx, viewport });
  running.set(canvas, task);
  try {
    await task.promise;
  } catch (err: any) {
    if (err?.name === 'RenderingCancelledException') return null;
    throw err;
  } finally {
    if (running.get(canvas) === task) running.delete(canvas);
    page.cleanup();
  }
  if (latest.get(canvas) !== id) return null;
  // Size as seen (rotation applied), in PDF points
  return { width: base.width, height: base.height };
}
