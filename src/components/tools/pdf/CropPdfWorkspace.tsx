import React, { useEffect, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { cropPages, type CropMargins } from '../../../lib/pdf/pageOps';
import { PagePicker, PagePreview } from './PagePreview';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

export function CropPdfWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  // The page the preview shows (the edit applies to the pages chosen in the panel)
  const [previewPage, setPreviewPage] = useState(1);
  useEffect(() => setPreviewPage(1), [pdf.doc]);
  // Percent of the page trimmed from each side
  const [m, setM] = useState({ top: 5, right: 5, bottom: 5, left: 5 });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const fr: CropMargins = { top: m.top / 100, right: m.right / 100, bottom: m.bottom / 100, left: m.left / 100 };
      const out = await cropPages(pdf.bytes, fr, 'all');
      const name = pdfName(pdf.file?.name, 'cropped');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  // Opposite sides together leave at least 10% of the page
  const setSide = (side: keyof typeof m, v: number) => {
    const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[side] as keyof typeof m;
    setM((prev) => ({ ...prev, [side]: Math.min(v, 90 - prev[opposite]) }));
  };

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={
          <div className="space-y-3">
            <span className="slug block">{t('ctl.croppdf.trim')}</span>
            {(
              [
                ['top', t('ctl.croppdf.top')],
                ['right', t('ctl.croppdf.right')],
                ['bottom', t('ctl.croppdf.bottom')],
                ['left', t('ctl.croppdf.left')],
              ] as const
            ).map(([side, label]) => (
              <RangeField key={side} id={`crop-${side}`} label={label} value={m[side]} min={0} max={45} unit="%" onChange={(v) => setSide(side, v)} />
            ))}
            <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.croppdf.note')}</p>
          </div>
        }
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PagePicker page={previewPage} count={pdf.pageCount} onChange={setPreviewPage} />
        <PagePreview doc={pdf.doc} page={Math.min(previewPage, pdf.pageCount || 1)}>
          {() => (
            <span aria-hidden="true" className="absolute inset-0 pointer-events-none">
              {/* Dim what will be trimmed; outline what stays */}
              <span className="absolute inset-x-0 top-0 bg-process-key/45" style={{ height: `${m.top}%` }} />
              <span className="absolute inset-x-0 bottom-0 bg-process-key/45" style={{ height: `${m.bottom}%` }} />
              <span className="absolute left-0 bg-process-key/45" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, width: `${m.left}%` }} />
              <span className="absolute right-0 bg-process-key/45" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, width: `${m.right}%` }} />
              <span className="absolute border-2 border-dashed border-process-magenta" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, left: `${m.left}%`, right: `${m.right}%` }} />
            </span>
          )}
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}
