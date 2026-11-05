import React, { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { countFlattenable, flattenPdf } from '../../../lib/pdf/flatten';
import { PagePicker, PagePreview } from './PagePreview';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

export function FlattenWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [forms, setForms] = useState(true);
  const [comments, setComments] = useState(true);
  const [found, setFound] = useState<{ fields: number; comments: number } | null>(null);
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setFound(null);
    setStatus('');
    setPage(1);
    if (pdf.bytes) countFlattenable(pdf.bytes).then(setFound, (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const r = await flattenPdf(pdf.bytes, { forms, comments });
      const name = pdfName(pdf.file?.name, 'flat');
      savePdf(r.bytes, name);
      const parts = [t('ctl.flat.result', { fields: r.fields, comments: r.comments })];
      if (r.kept) parts.push(t('ctl.flat.kept', { n: r.kept }));
      parts.push(t('ctl.pdf.done', { name }));
      setStatus(parts.join(' '));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const nothing = found && !found.fields && !found.comments;
  const panel = (
    <>
      <p className="text-[15px] text-ink" data-measure>
        {found ? t('ctl.flat.found', { fields: found.fields, comments: found.comments }) : t('ctl.pdf.working')}
      </p>
      <div className="space-y-1 pt-4 border-t border-ink">
        <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={forms} onChange={(e) => setForms(e.target.checked)} />
          <span className="text-ink">{t('ctl.flat.forms')}</span>
        </label>
        <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={comments} onChange={(e) => setComments(e.target.checked)} />
          <span className="text-ink">{t('ctl.flat.comments')}</span>
        </label>
      </div>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.flat.note')}</p>
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
        onAction={run}
        actionDisabled={!found || !!nothing || (!forms && !comments)}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : nothing ? t('ctl.flat.nothing') : status}
        error={error}
      >
        <PagePreview doc={pdf.doc} page={page} />
        <div className="flex justify-end">
          <PagePicker page={page} count={pdf.pageCount} onChange={setPage} />
        </div>
      </PdfToolLayout>
    </>
  );
}
