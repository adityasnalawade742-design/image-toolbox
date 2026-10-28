import React, { useEffect, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { fillForm, listFormFields, type FormField } from '../../../lib/pdf/pageOps';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';
import { loadSiteFont } from '../../../lib/pdf/unicodeFont';

const fieldClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink disabled:bg-paper-stock disabled:text-graphite';

export function FillFormWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [fields, setFields] = useState<FormField[] | null>(null);
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const [flatten, setFlatten] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setFields(null);
    setValues({});
    setStatus('');
    if (pdf.bytes)
      listFormFields(pdf.bytes).then(
        (list) => {
          setFields(list);
          setValues(Object.fromEntries(list.map((f) => [f.name, f.value])));
        },
        (err) => setError(editError(err))
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const editable = (fields || []).filter((f) => !['button', 'signature', 'unknown'].includes(f.type));
  const skippedSome = (fields || []).some((f) => f.type === 'button' || f.type === 'signature');
  const set = (name: string, v: string | boolean) => setValues((prev) => ({ ...prev, [name]: v }));

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const out = await fillForm(pdf.bytes, values, flatten, loadSiteFont);
      const name = pdfName(pdf.file?.name, 'filled');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
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
        panel={
          <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
            <input type="checkbox" checked={flatten} onChange={(e) => setFlatten(e.target.checked)} disabled={!editable.length} />
            <span className="text-ink">{t('ctl.form.flatten')}</span>
          </label>
        }
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!editable.length}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <section className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.form.fields')}</h2>
          <div className="p-4 space-y-4">
            {fields && !editable.length && <p className="text-[15px] text-ink">{t('ctl.form.none')}</p>}
            {editable.map((f, i) => {
              const id = `form-field-${i}`;
              const label = (
                <>
                  {f.name}
                  {f.readOnly && <span className="text-graphite"> ({t('ctl.form.readOnly')})</span>}
                </>
              );
              if (f.type === 'checkbox') {
                return (
                  <label key={f.name} className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-[15px] text-ink">
                    <input type="checkbox" checked={!!values[f.name]} disabled={f.readOnly} onChange={(e) => set(f.name, e.target.checked)} />
                    <span>{label}</span>
                  </label>
                );
              }
              return (
                <div key={f.name} className="space-y-1">
                  <label htmlFor={id} className="block text-[14px] text-graphite break-words">
                    {label}
                  </label>
                  {f.type === 'text' && f.multiline ? (
                    <textarea id={id} rows={3} value={String(values[f.name] ?? '')} disabled={f.readOnly} onChange={(e) => set(f.name, e.target.value)} className={`${fieldClass} py-2`} />
                  ) : f.type === 'text' ? (
                    <input id={id} type="text" value={String(values[f.name] ?? '')} disabled={f.readOnly} onChange={(e) => set(f.name, e.target.value)} className={fieldClass} />
                  ) : (
                    <select id={id} value={String(values[f.name] ?? '')} disabled={f.readOnly} onChange={(e) => set(f.name, e.target.value)} className={fieldClass}>
                      <option value="">{t('ctl.form.choose')}</option>
                      {(f.options || []).map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              );
            })}
            {skippedSome && <p className="text-[13px] text-graphite">{t('ctl.form.unsupported')}</p>}
          </div>
        </section>
      </PdfToolLayout>
    </>
  );
}
