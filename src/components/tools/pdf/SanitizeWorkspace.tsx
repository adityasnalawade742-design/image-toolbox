import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { sanitizePdf, type SanitizeOptions, type SanitizeReport } from '../../../lib/pdf/sanitize';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const ALL: SanitizeOptions = { attachments: true, links: true, comments: true, metadata: true };

export function SanitizeWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [opts, setOpts] = useState<SanitizeOptions>({ attachments: true, links: false, comments: false, metadata: true });
  const [found, setFound] = useState<SanitizeReport | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setFound(null);
    setStatus('');
    if (pdf.bytes) sanitizePdf(pdf.bytes, ALL, true).then((r) => setFound(r.report), (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const r = await sanitizePdf(pdf.bytes, opts);
      const name = pdfName(pdf.file?.name, 'sanitized');
      savePdf(r.bytes!, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const yes = (n: number | boolean) => (typeof n === 'boolean' ? (n ? t('ctl.san.yes') : t('ctl.san.no')) : String(n));
  const rows: { label: string; value: number | boolean; option?: keyof SanitizeOptions }[] = found
    ? [
        { label: t('ctl.san.scripts'), value: found.scripts },
        { label: t('ctl.san.actions'), value: found.actions },
        { label: t('ctl.san.media'), value: found.media },
        { label: t('ctl.san.xfa'), value: found.xfa },
        { label: t('ctl.san.attachments'), value: found.attachments, option: 'attachments' },
        { label: t('ctl.san.links'), value: found.links, option: 'links' },
        { label: t('ctl.san.comments'), value: found.comments, option: 'comments' },
        { label: t('ctl.san.metadata'), value: found.metadata, option: 'metadata' },
      ]
    : [];

  const panel = (
    <>
      <p className="text-[14px] text-ink leading-relaxed">{t('ctl.san.always')}</p>
      <fieldset className="space-y-1 pt-4 border-t border-ink">
        <legend className="slug mb-1">{t('ctl.san.also')}</legend>
        {(['attachments', 'links', 'comments', 'metadata'] as const).map((k) => (
          <label key={k} className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
            <input type="checkbox" checked={opts[k]} onChange={(e) => setOpts((o) => ({ ...o, [k]: e.target.checked }))} />
            <span className="text-ink">{t(`ctl.san.opt.${k}` as 'ctl.san.opt.links')}</span>
          </label>
        ))}
      </fieldset>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.san.note')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={ShieldCheck}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!found}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <section className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.san.found')}</h2>
          {!found ? (
            <p className="p-4 text-[15px] text-graphite">{t('ctl.pdf.working')}</p>
          ) : (
            <dl className="divide-y divide-pencil" data-measure>
              {rows.map((r) => (
                <div key={r.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-4 py-2.5 text-[15px]">
                  <dt className="text-ink">
                    {r.label}
                    {r.option && <span className="block text-[13px] text-graphite">{opts[r.option] ? t('ctl.san.willRemove') : t('ctl.san.willKeep')}</span>}
                  </dt>
                  <dd className={`font-semibold ${r.value ? 'text-ink' : 'text-graphite'}`}>{yes(r.value)}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      </PdfToolLayout>
    </>
  );
}
