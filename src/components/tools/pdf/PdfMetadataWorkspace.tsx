import React, { useEffect, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT, useLocale } from '../../shared/I18nContext';
import { readMetadata, stripMetadata, type PdfMetadata } from '../../../lib/pdf/pageOps';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

export function PdfMetadataWorkspace() {
  const t = useT();
  const locale = useLocale();
  const pdf = usePdfDocument();
  const [meta, setMeta] = useState<PdfMetadata | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setMeta(null);
    setStatus('');
    if (pdf.bytes) readMetadata(pdf.bytes).then(setMeta, (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const date = (iso?: string) => (iso ? new Date(iso).toLocaleString(locale) : undefined);
  const rows: [string, string | undefined][] = meta
    ? [
        [t('ctl.meta.title'), meta.title],
        [t('ctl.meta.author'), meta.author],
        [t('ctl.meta.subject'), meta.subject],
        [t('ctl.meta.keywords'), meta.keywords],
        [t('ctl.meta.creator'), meta.creator],
        [t('ctl.meta.producer'), meta.producer],
        [t('ctl.meta.created'), date(meta.creationDate)],
        [t('ctl.meta.modified'), date(meta.modificationDate)],
        [t('ctl.meta.xmp'), meta.hasXmp ? t('ctl.meta.present') : undefined],
      ]
    : [];
  const found = rows.filter(([, v]) => v);

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const out = await stripMetadata(pdf.bytes);
      const name = pdfName(pdf.file?.name, 'clean');
      savePdf(out, name);
      setStatus(`${t('ctl.meta.removed')} ${t('ctl.pdf.done', { name })}`);
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={<p className="text-[14px] text-graphite leading-relaxed">{t('ctl.meta.explain')}</p>}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <section className="border border-ink bg-paper-bright">
          <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.meta.found')}</h2>
          {meta && found.length === 0 ? (
            <p className="p-4 text-[15px] text-ink">{t('ctl.meta.nothing')}</p>
          ) : (
            <dl className="divide-y divide-pencil">
              {found.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(7rem,12rem)_minmax(0,1fr)] gap-3 px-4 py-2.5 text-[15px]">
                  <dt className="text-graphite">{k}</dt>
                  <dd className="text-ink break-words">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      </PdfToolLayout>
    </>
  );
}
