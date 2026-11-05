import React, { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useT } from '../../shared/I18nContext';
import { openPdf } from '../../../lib/pdf/pdfToImages';
import { PagePicker, PagePreview } from './PagePreview';

/**
 * The PDF a tool will download, rebuilt (after a short pause) whenever its settings change, so the preview is the
 * real result. `build` returns null when there's nothing to make yet.
 */
export function useOutputPreview(build: () => Promise<Uint8Array | null>, deps: unknown[], onError: (err: unknown) => void, delay = 250) {
  const [out, setOut] = useState<{ bytes: Uint8Array; doc: PDFDocumentProxy } | null>(null);
  const [building, setBuilding] = useState(false);
  const id = useRef(0);
  useEffect(() => {
    const mine = ++id.current;
    setBuilding(true);
    const timer = window.setTimeout(async () => {
      try {
        const bytes = await build();
        if (!bytes) {
          if (mine === id.current) setOut(null);
          return;
        }
        const doc = await openPdf(new File([new Uint8Array(bytes)], 'preview.pdf', { type: 'application/pdf' }));
        if (mine !== id.current) return doc.loadingTask.destroy();
        setOut((prev) => {
          prev?.doc.loadingTask.destroy();
          return { bytes, doc };
        });
      } catch (err) {
        if (mine === id.current) onError(err);
      } finally {
        if (mine === id.current) setBuilding(false);
      }
    }, delay);
    return () => window.clearTimeout(timer);
    // The caller lists what build depends on
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { out, building };
}

/** The previewed result, one page at a time */
export function OutputPages({ out, building, page, onPage, info }: { out: { doc: PDFDocumentProxy } | null; building: boolean; page: number; onPage: (n: number) => void; info?: React.ReactNode }) {
  const t = useT();
  const count = out?.doc.numPages ?? 0;
  const shown = Math.min(page, Math.max(1, count));
  return (
    <>
      {out ? (
        <div className={`transition-opacity ${building ? 'opacity-60' : ''}`} aria-busy={building}>
          <PagePreview doc={out.doc} page={shown} />
        </div>
      ) : (
        <div className="bg-paper-bright border border-ink min-h-[260px] rounded-xl flex items-center justify-center text-[15px] text-graphite">{building ? t('ctl.pdf.working') : null}</div>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
        {info && <span className="text-ink">{info}</span>}
        <span className="ml-auto">
          <PagePicker page={shown} count={count} onChange={onPage} />
        </span>
      </div>
    </>
  );
}
