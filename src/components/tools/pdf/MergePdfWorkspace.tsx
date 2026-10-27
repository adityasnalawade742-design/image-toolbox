import React, { useEffect, useRef, useState } from 'react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { ImageOrderList, type OrderItem } from '../../shared/ImageOrderList';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { THUMB_DPI } from '../../shared/usePdfDocument';
import { useT } from '../../shared/I18nContext';
import { openPdf, renderPage } from '../../../lib/pdf/pdfToImages';
import { mergePdfs } from '../../../lib/pdf/pageOps';
import { PDF_ACCEPT, pdfName, savePdf, useEditError } from './common';

type PdfItem = OrderItem & { file: File; pages: number };

export function MergePdfWorkspace() {
  const t = useT();
  const [items, setItems] = useState<PdfItem[]>([]);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const editError = useEditError();
  const itemsRef = useRef(items);
  itemsRef.current = items;
  useEffect(() => () => itemsRef.current.forEach((i) => i.url && URL.revokeObjectURL(i.url)), []);

  const addFiles = async (files: File[]) => {
    const added: PdfItem[] = [];
    const failed: string[] = [];
    for (const file of files) {
      try {
        const doc = await openPdf(file);
        const url = URL.createObjectURL(await renderPage(doc, 1, THUMB_DPI, 'image/jpeg'));
        added.push({ id: `${Date.now()}-${added.length}-${file.name}`, name: file.name, url, width: 0, height: 0, detail: t('ctl.pdf.pagesCount', { n: doc.numPages }), file, pages: doc.numPages });
        doc.destroy();
      } catch {
        failed.push(file.name);
      }
    }
    setItems((prev) => [...prev, ...added]);
    setSkipped(failed);
  };

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept={PDF_ACCEPT}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) addFiles(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );
  const skippedNote = skipped.length > 0 && (
    <p role="alert" className="text-[15px] text-accent-red">
      {t('ctl.list.skipped', { names: skipped.join(', ') })}
    </p>
  );

  if (!items.length) {
    return (
      <div className="space-y-3">
        {input}
        <ProofDropZone onFiles={addFiles} accept={PDF_ACCEPT} multiple title={t('ctl.pdf.dropTitleMany')} buttonLabel={t('ctl.pdf.chooseMany')} hint={t('ctl.pdf.dropHintMany')} />
        {skippedNote}
      </div>
    );
  }

  const total = items.reduce((n, i) => n + i.pages, 0);
  const run = async () => {
    if (items.length < 2) return setError(t('ctl.mergepdf.needTwo'));
    setBusy(true);
    setError(null);
    try {
      const out = await mergePdfs(await Promise.all(items.map((i) => i.file.arrayBuffer())));
      const name = pdfName(items[0].name, 'merged');
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
      {input}
      <PdfToolLayout
        panel={
          <div className="space-y-2">
            <span className="slug block">{t('ctl.mergepdf.files')}</span>
            <ImageOrderList
              items={items}
              onChange={(next) => {
                const keep = new Set(next.map((n) => n.id));
                items.filter((i) => !keep.has(i.id)).forEach((i) => URL.revokeObjectURL(i.url));
                setItems(next);
              }}
              onAdd={() => inputRef.current?.click()}
              addLabel={t('ctl.mergepdf.add')}
            />
            <p className="text-[14px] text-graphite" data-measure>
              {t('ctl.mergepdf.total', { n: total })}
            </p>
          </div>
        }
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={items.length < 2}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : items.length < 2 ? t('ctl.mergepdf.needTwo') : status}
        error={error}
      >
        <ol className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <li key={item.id} className="border border-ink bg-paper-bright flex flex-col rounded-lg overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-3 bg-paper-stock min-h-[9rem]">
                <img src={item.url} alt="" className="max-h-40 w-auto border border-pencil bg-white" />
              </div>
              <p className="border-t border-ink px-3 py-2 text-[13px] text-ink">
                <span className="font-semibold" data-measure>
                  {i + 1}.
                </span>{' '}
                <span className="break-all">{item.name}</span>
              </p>
            </li>
          ))}
        </ol>
        {skippedNote}
      </PdfToolLayout>
    </>
  );
}
