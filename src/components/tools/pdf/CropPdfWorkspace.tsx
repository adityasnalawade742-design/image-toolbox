import React, { useEffect, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { cropPages, parseRanges, type CropMargins } from '../../../lib/pdf/pageOps';
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
  // Which pages: all, the one in the preview, or typed numbers
  const [scope, setScope] = useState<'all' | 'this' | 'range'>('all');
  const [range, setRange] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const shownPage = Math.min(previewPage, pdf.pageCount || 1);
  const targets: number[] | 'all' = scope === 'all' ? 'all' : scope === 'this' ? [shownPage - 1] : [...new Set(parseRanges(range, pdf.pageCount).flat())];
  // The preview shows the trim only on pages it will change
  const affected = targets === 'all' || targets.includes(shownPage - 1);

  const run = async () => {
    if (!pdf.bytes) return;
    if (targets !== 'all' && !targets.length) {
      setError(t('ctl.splitpdf.noRanges'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const fr: CropMargins = { top: m.top / 100, right: m.right / 100, bottom: m.bottom / 100, left: m.left / 100 };
      const out = await cropPages(pdf.bytes, fr, targets);
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
            <div className="pt-4 border-t border-ink space-y-2">
              <Segmented
                label={t('ctl.pdf.scope')}
                value={scope}
                onChange={setScope}
                options={[
                  { value: 'all', label: t('ctl.pdf.scopeAll') },
                  { value: 'this', label: t('ctl.pdf.scopeThis') },
                  { value: 'range', label: t('ctl.pdf.scopeRange') },
                ]}
              />
              {scope === 'range' && (
                <input
                  type="text"
                  inputMode="numeric"
                  aria-label={t('ctl.pdf.scopeRange')}
                  placeholder={t('ctl.pdf.rangePlaceholder')}
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                  className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
                />
              )}
              {scope === 'this' && <p className="text-[13px] text-graphite">{t('ctl.croppdf.thisPage', { n: shownPage })}</p>}
            </div>
          </div>
        }
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PagePicker page={previewPage} count={pdf.pageCount} onChange={setPreviewPage} />
        <PagePreview doc={pdf.doc} page={shownPage}>
          {() =>
            affected && (
            <span aria-hidden="true" className="absolute inset-0 pointer-events-none">
              {/* Dim what will be trimmed; outline what stays */}
              <span className="absolute inset-x-0 top-0 bg-process-key/45" style={{ height: `${m.top}%` }} />
              <span className="absolute inset-x-0 bottom-0 bg-process-key/45" style={{ height: `${m.bottom}%` }} />
              <span className="absolute left-0 bg-process-key/45" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, width: `${m.left}%` }} />
              <span className="absolute right-0 bg-process-key/45" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, width: `${m.right}%` }} />
              <span className="absolute border-2 border-dashed border-process-magenta" style={{ top: `${m.top}%`, bottom: `${m.bottom}%`, left: `${m.left}%`, right: `${m.right}%` }} />
            </span>
            )
          }
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}
