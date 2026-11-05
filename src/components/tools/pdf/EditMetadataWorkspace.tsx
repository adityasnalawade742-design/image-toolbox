import React, { useEffect, useState } from 'react';
import { FilePen } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { readMetadata, type PdfMetadata } from '../../../lib/pdf/pageOps';
import { writeMetadata, type MetadataFields } from '../../../lib/pdf/metadataEdit';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const EMPTY: MetadataFields = { title: '', author: '', subject: '', keywords: '', creator: '', producer: '' };
const field = 'w-full min-h-[44px] px-3 border border-ink bg-paper-bright text-[16px] text-ink rounded-md';

export function EditMetadataWorkspace() {
  const t = useT();
  const locale = useLocale();
  const pdf = usePdfDocument();
  const [meta, setMeta] = useState<PdfMetadata | null>(null);
  const [values, setValues] = useState<MetadataFields>(EMPTY);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setMeta(null);
    setStatus('');
    if (pdf.bytes)
      readMetadata(pdf.bytes).then((m) => {
        setMeta(m);
        setValues({ title: m.title ?? '', author: m.author ?? '', subject: m.subject ?? '', keywords: m.keywords ?? '', creator: m.creator ?? '', producer: m.producer ?? '' });
      }, (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const out = await writeMetadata(pdf.bytes, values);
      const name = pdfName(pdf.file?.name, 'edited');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const date = (iso?: string) => (iso ? new Date(iso).toLocaleString(locale) : '—');
  const inputs: [keyof MetadataFields, string, string?][] = [
    ['title', t('ctl.meta.title')],
    ['author', t('ctl.meta.author')],
    ['subject', t('ctl.meta.subject')],
    ['keywords', t('ctl.meta.keywords'), t('ctl.metaEdit.keywordsHint')],
    ['creator', t('ctl.meta.creator'), t('ctl.metaEdit.creatorHint')],
    ['producer', t('ctl.meta.producer'), t('ctl.metaEdit.producerHint')],
  ];

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={FilePen}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={<p className="text-[14px] text-graphite leading-relaxed">{t('ctl.metaEdit.explain')}</p>}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!meta}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <section className="border border-ink bg-paper-bright rounded-xl p-4 space-y-4">
          {inputs.map(([key, label, hint]) => (
            <div key={key} className="space-y-1">
              <label htmlFor={`meta-${key}`} className="slug block">{label}</label>
              {key === 'subject' ? (
                <textarea id={`meta-${key}`} value={values[key]} onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))} className={`${field} min-h-[72px] py-2`} />
              ) : (
                <input id={`meta-${key}`} type="text" value={values[key]} onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))} className={field} />
              )}
              {hint && <p className="text-[13px] text-graphite">{hint}</p>}
            </div>
          ))}
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 pt-3 border-t border-pencil text-[14px]">
            <dt className="text-graphite">{t('ctl.meta.created')}</dt>
            <dd className="text-ink">{date(meta?.creationDate)}</dd>
            <dt className="text-graphite">{t('ctl.meta.modified')}</dt>
            <dd className="text-ink">{date(meta?.modificationDate)} → {t('ctl.metaEdit.now')}</dd>
          </dl>
        </section>
      </PdfToolLayout>
    </>
  );
}
