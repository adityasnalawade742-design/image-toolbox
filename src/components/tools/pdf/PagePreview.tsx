import React, { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { renderPageToCanvas } from '../../shared/usePdfDocument';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useT } from '../../shared/I18nContext';

interface Props {
  doc: PDFDocumentProxy;
  /** 1-based */
  page: number;
  /** Overlays positioned over the page; receive the canvas once it has been drawn */
  children?: (canvas: HTMLCanvasElement, pageSize: { width: number; height: number }) => React.ReactNode;
}

/** One PDF page drawn on a canvas inside the proof sheet, with room for overlays (watermark, signature, crop) */
export function PagePreview({ doc, page, children }: Props) {
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (canvasRef.current) {
      renderPageToCanvas(doc, page, canvasRef.current)
        .then((s) => !cancelled && s && setSize(s))
        .catch((err) => console.error('Page preview failed:', err));
    }
    return () => {
      cancelled = true;
    };
  }, [doc, page]);

  return (
    <div className="bg-paper-bright border border-ink flex items-center justify-center px-6 py-8 sm:px-12 sm:py-10 min-h-[260px] overflow-hidden rounded-xl">
      <div className="relative inline-flex max-w-full crop-marks">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={t('ctl.pdf.previewLabel', { n: page })}
          className="block max-w-full max-h-[70vh] w-auto h-auto border border-pencil bg-white"
        />
        {size && canvasRef.current && children?.(canvasRef.current, size)}
      </div>
    </div>
  );
}

/** Which page a single-page preview shows: previous / next and a list (shown only for files with several pages) */
export function PagePicker({ page, count, onChange }: { page: number; count: number; onChange: (page: number) => void }) {
  const t = useT();
  if (count < 2) return null;
  const btn = 'btn-rule w-11 px-0 disabled:opacity-40';
  return (
    <div className="flex items-center gap-2">
      <button type="button" className={btn} onClick={() => onChange(Math.max(1, page - 1))} disabled={page <= 1} aria-label={t('ctl.edit.prevPage')} title={t('ctl.edit.prevPage')}>
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <label htmlFor="preview-page" className="sr-only">
        {t('ctl.view.previewPage')}
      </label>
      <select id="preview-page" value={page} onChange={(e) => onChange(Number(e.target.value))} className="flex-1 min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink">
        {Array.from({ length: count }, (_, i) => (
          <option key={i} value={i + 1}>
            {t('ctl.pdf.pageN', { n: i + 1 })}
          </option>
        ))}
      </select>
      <button type="button" className={btn} onClick={() => onChange(Math.min(count, page + 1))} disabled={page >= count} aria-label={t('ctl.edit.nextPage')} title={t('ctl.edit.nextPage')}>
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
