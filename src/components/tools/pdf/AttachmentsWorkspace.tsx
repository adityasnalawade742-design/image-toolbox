import React, { useEffect, useRef, useState } from 'react';
import { Download, Paperclip, Plus, RotateCcw, X } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { listAttachments, readAttachment, updateAttachments, type Attachment } from '../../../lib/pdf/attachments';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const iconBtn = 'inline-flex items-center gap-1.5 min-h-[40px] px-2.5 border border-pencil rounded-md text-[14px] text-ink hover:border-ink';

export function AttachmentsWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [list, setList] = useState<Attachment[] | null>(null);
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const [added, setAdded] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);
  const addRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setList(null);
    setRemoved(new Set());
    setAdded([]);
    setStatus('');
    if (pdf.bytes) listAttachments(pdf.bytes).then(setList, (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const save = async (a: Attachment) => {
    if (!pdf.bytes) return;
    const data = await readAttachment(pdf.bytes, a.id);
    if (data) downloadBlob(new Blob([new Uint8Array(data)]), a.name.split(/[\\/]/).pop() || 'attachment');
    else setError(t('ctl.att.unreadable', { name: a.name }));
  };
  const toggle = (id: string) =>
    setRemoved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const changed = removed.size > 0 || added.length > 0;
  const run = async () => {
    if (!pdf.bytes || !changed) return;
    setBusy(true);
    setError(null);
    try {
      const add = await Promise.all(added.map(async (f) => ({ name: f.name, bytes: new Uint8Array(await f.arrayBuffer()), type: f.type })));
      const out = await updateAttachments(pdf.bytes, { remove: [...removed], add });
      const name = pdfName(pdf.file?.name, 'attachments');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <>
      <p className="text-[15px] text-ink" data-measure>{list ? (list.length ? t('ctl.att.count', { n: list.length }) : t('ctl.att.none')) : t('ctl.pdf.working')}</p>
      <input
        ref={addRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length) setAdded((a) => [...a, ...files]);
          e.target.value = '';
        }}
      />
      <button type="button" onClick={() => addRef.current?.click()} className="btn-rule min-h-[44px] w-full">
        <Plus className="w-4 h-4" aria-hidden="true" />
        {t('ctl.att.add')}
      </button>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.att.note')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={Paperclip}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!changed}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status || (!changed && list?.length ? t('ctl.att.noChanges') : '')}
        error={error}
      >
        <section className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.att.files')}</h2>
          {list && list.length === 0 && added.length === 0 ? (
            <p className="p-4 text-[15px] text-ink">{t('ctl.att.none')}</p>
          ) : (
            <ul className="divide-y divide-pencil">
              {(list ?? []).map((a) => {
                const gone = removed.has(a.id);
                return (
                  <li key={a.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                    <div className={`flex-1 min-w-[10rem] ${gone ? 'line-through text-graphite' : 'text-ink'}`}>
                      <p className="text-[15px] font-semibold break-all">{a.name}</p>
                      <p className="text-[13px] text-graphite">
                        {[a.size !== null ? formatBytes(a.size) : null, a.page ? t('ctl.att.onPage', { n: a.page }) : null, a.description || null].filter(Boolean).join(' · ')}
                      </p>
                    </div>
                    <button type="button" className={iconBtn} onClick={() => save(a)}>
                      <Download className="w-4 h-4" aria-hidden="true" />
                      {t('ctl.att.save')}
                    </button>
                    <button type="button" className={iconBtn} onClick={() => toggle(a.id)} aria-pressed={gone}>
                      {gone ? <RotateCcw className="w-4 h-4" aria-hidden="true" /> : <X className="w-4 h-4" aria-hidden="true" />}
                      {gone ? t('ctl.att.keep') : t('ctl.att.remove')}
                    </button>
                  </li>
                );
              })}
              {added.map((f, i) => (
                <li key={`new-${i}`} className="flex flex-wrap items-center gap-3 px-4 py-3">
                  <div className="flex-1 min-w-[10rem] text-ink">
                    <p className="text-[15px] font-semibold break-all">{f.name}</p>
                    <p className="text-[13px] text-graphite">{formatBytes(f.size)} · {t('ctl.att.new')}</p>
                  </div>
                  <button type="button" className={iconBtn} onClick={() => setAdded((list) => list.filter((_, k) => k !== i))}>
                    <X className="w-4 h-4" aria-hidden="true" />
                    {t('ctl.att.remove')}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </PdfToolLayout>
    </>
  );
}
