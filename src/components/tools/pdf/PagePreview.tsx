import React, { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { renderPageToCanvas } from '../../shared/usePdfDocument';
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
      renderPageToCanvas(doc, page, canvasRef.current).then((s) => !cancelled && setSize(s));
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
