import React, { useEffect, useRef, useState } from 'react';
import { FileUp, Layers } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { openPdf, PdfPasswordError } from '../../../lib/pdf/pdfToImages';
import { parseRanges } from '../../../lib/pdf/pageOps';
import { overlayPdf, type OverlayOptions } from '../../../lib/pdf/overlay';
import { PDF_ACCEPT, PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';
import { PagePicker, PagePreview } from './PagePreview';

const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

/** Overlay PDF: put a letterhead, background or stamp sheet (another PDF) on top of or under every page */
export function OverlayPdfWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const replace = usePdfReplace(pdf.load);
  const editError = useEditError();
  const [overlay, setOverlay] = useState<{ name: string; bytes: ArrayBuffer; pages: number } | null>(null);
  const [position, setPosition] = useState<OverlayOptions['position']>('over');
  const [match, setMatch] = useState<OverlayOptions['match']>('first');
  const [scope, setScope] = useState<'all' | 'some'>('all');
  const [range, setRange] = useState('');
  const [opacity, setOpacity] = useState(100);
  const [result, setResult] = useState<{ bytes: Uint8Array; doc: PDFDocumentProxy } | null>(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const overlayInput = useRef<HTMLInputElement>(null);
  const run = useRef(0);

  // The result is rebuilt and previewed whenever a setting changes
  useEffect(() => {
    const id = ++run.current;
    if (!pdf.bytes || !overlay) return setResult(null);
    const pages = scope === 'all' ? 'all' : parseRanges(range, pdf.pageCount).flat();
    const timer = window.setTimeout(async () => {
      try {
        const bytes = await overlayPdf(pdf.bytes!, overlay.bytes, { position, match, pages, opacity: opacity / 100 });
        if (id !== run.current) return;
        const doc = await openPdf(new File([new Uint8Array(bytes)], 'preview.pdf', { type: 'application/pdf' }));
        if (id !== run.current) return doc.destroy();
        setResult({ bytes, doc });
        setError(null);
      } catch (err) {
        if (id === run.current) setError(editError(err));
      }
    }, 300);
    return () => window.clearTimeout(timer);
    // editError only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes, overlay, position, match, scope, range, opacity]);
  useEffect(
    () => () => {
      result?.doc.destroy();
    },
    [result]
  );
  useEffect(() => setPage(1), [pdf.doc]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const chooseOverlay = async (file: File) => {
    try {
      const doc = await openPdf(file);
      const pages = doc.numPages;
      doc.destroy();
      setOverlay({ name: file.name, bytes: await file.arrayBuffer(), pages });
      setError(null);
    } catch (err) {
      setError(err instanceof PdfPasswordError ? t('ctl.frompdf.errPassword') : t('ctl.frompdf.errInvalid'));
    }
  };

  const panel = (
    <>
      <input
        ref={overlayInput}
        id="overlay-file"
        type="file"
        accept={PDF_ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) chooseOverlay(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <div className="space-y-2">
        {overlay ? <p className="text-[14px] text-ink break-all">{t('ctl.overlay.overlayFile', { name: overlay.name, n: overlay.pages })}</p> : <p className="text-[14px] text-graphite">{t('ctl.overlay.needOverlay')}</p>}
        <button type="button" onClick={() => overlayInput.current?.click()} className={overlay ? 'btn-rule w-full' : 'btn-ink w-full min-h-[44px]'}>
          <FileUp className="w-4 h-4" aria-hidden="true" />
          {t('ctl.overlay.choose')}
        </button>
      </div>
      <Segmented
        label={t('ctl.overlay.position')}
        value={position}
        options={[
          { value: 'over', label: t('ctl.overlay.over') },
          { value: 'under', label: t('ctl.overlay.under') },
        ]}
        onChange={setPosition}
      />
      {position === 'under' && <p className="text-[13px] text-graphite">{t('ctl.overlay.underNote')}</p>}
      {overlay && overlay.pages > 1 && (
        <div className="space-y-1">
          <label htmlFor="overlay-match" className="block text-[14px] text-ink">
            {t('ctl.overlay.match')}
          </label>
          <select id="overlay-match" value={match} onChange={(e) => setMatch(e.target.value as OverlayOptions['match'])} className={field}>
            <option value="first">{t('ctl.overlay.first')}</option>
            <option value="same">{t('ctl.overlay.same')}</option>
            <option value="repeat">{t('ctl.overlay.repeat')}</option>
          </select>
        </div>
      )}
      <Segmented
        label={t('ctl.pu.pages')}
        value={scope}
        options={[
          { value: 'all', label: t('ctl.pu.allPages') },
          { value: 'some', label: t('ctl.pu.somePages') },
        ]}
        onChange={setScope}
      />
      {scope === 'some' && <input aria-label={t('ctl.pu.pages')} value={range} onChange={(e) => setRange(e.target.value)} placeholder={t('ctl.pdf.rangePlaceholder')} className={field} inputMode="numeric" />}
      <RangeField id="overlay-opacity" label={t('ctl.overlay.opacity')} value={opacity} min={10} max={100} step={5} unit="%" onChange={setOpacity} />
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={Layers}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={() => {
          if (!result) return;
          const name = pdfName(pdf.file?.name, 'overlay');
          savePdf(result.bytes, name);
          setStatus(t('ctl.pdf.done', { name }));
        }}
        actionDisabled={!result}
        status={status}
        error={error}
      >
        <div className="space-y-2">
          <PagePicker page={page} count={pdf.pageCount} onChange={setPage} />
          <PagePreview doc={result?.doc ?? pdf.doc} page={Math.min(page, pdf.pageCount)} />
        </div>
      </PdfToolLayout>
    </>
  );
}
