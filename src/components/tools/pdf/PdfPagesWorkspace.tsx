import React, { useEffect, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfPageGrid, type GridPage } from '../../shared/PdfPageGrid';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { buildFromPages, extractPages, rotatePages } from '../../../lib/pdf/pageOps';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

type Mode = 'extract' | 'organize' | 'rotate';

/** Extract pages, Organize PDF and Rotate PDF: one page grid, three jobs */
export function PdfPagesWorkspace({ mode }: { mode: Mode }) {
  const t = useT();
  const pdf = usePdfDocument();
  const [pages, setPages] = useState<GridPage[]>([]);
  const [angle, setAngle] = useState<90 | 180 | 270>(90);
  const [scope, setScope] = useState<'all' | 'selected'>('all');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  const initial = (n: number) => Array.from({ length: n }, (_, i) => ({ key: `p${i}`, index: i, rotate: 0, selected: false }));
  useEffect(() => {
    setPages(initial(pdf.pageCount));
    setStatus('');
    setError(null);
  }, [pdf.doc]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const selected = pages.filter((p) => p.selected);
  // Rotate previews the turn on the pages it will affect
  const shown =
    mode === 'rotate' ? pages.map((p) => ({ ...p, rotate: scope === 'all' || p.selected ? angle : 0 })) : pages;

  const run = async () => {
    if (!pdf.bytes) return;
    if ((mode === 'extract' || (mode === 'rotate' && scope === 'selected')) && !selected.length) {
      setError(t('ctl.pdf.needOne'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      let out: Uint8Array;
      let name: string;
      if (mode === 'extract') {
        out = await extractPages(pdf.bytes, selected.map((p) => p.index));
        name = pdfName(pdf.file?.name, 'pages');
      } else if (mode === 'organize') {
        out = await buildFromPages(pdf.bytes, pages.map((p) => ({ index: p.index, rotate: p.rotate })));
        name = pdfName(pdf.file?.name, 'organized');
      } else {
        out = await rotatePages(pdf.bytes, scope === 'all' ? 'all' : selected.map((p) => p.index), angle);
        name = pdfName(pdf.file?.name, 'rotated');
      }
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const selectionTools = (
    <div className="space-y-2">
      <p className="text-[14px] text-graphite" data-measure>
        {t('ctl.pdf.selectedCount', { n: selected.length, total: pages.length })}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" className="btn-rule" onClick={() => setPages(pages.map((p) => ({ ...p, selected: true })))}>
          {t('ctl.pdf.selectAll')}
        </button>
        <button type="button" className="btn-rule" onClick={() => setPages(pages.map((p) => ({ ...p, selected: false })))}>
          {t('ctl.pdf.selectNone')}
        </button>
      </div>
    </div>
  );

  const panel =
    mode === 'extract' ? (
      selectionTools
    ) : mode === 'organize' ? (
      <div className="space-y-3">
        <p className="text-[14px] text-graphite leading-relaxed">{t('ctl.organize.hint')}</p>
        <button type="button" className="btn-rule w-full" onClick={() => setPages(initial(pdf.pageCount))}>
          {t('ctl.organize.reset')}
        </button>
      </div>
    ) : (
      <>
        <Segmented
          label={t('ctl.rotatepdf.angle')}
          value={angle}
          onChange={setAngle}
          options={[
            { value: 90, label: t('ctl.rotatepdf.right') },
            { value: 180, label: t('ctl.rotatepdf.half') },
            { value: 270, label: t('ctl.rotatepdf.left') },
          ]}
        />
        <div className="pt-4 border-t border-ink space-y-3">
          <Segmented
            label={t('ctl.pdf.scope')}
            value={scope}
            onChange={setScope}
            options={[
              { value: 'all', label: t('ctl.pdf.scopeAll') },
              { value: 'selected', label: t('ctl.pdf.scopeSelected') },
            ]}
          />
          {scope === 'selected' && selectionTools}
        </div>
      </>
    );

  const gridMode = mode === 'organize' ? 'organize' : mode === 'extract' || scope === 'selected' ? 'select' : 'view';

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PdfPageGrid pages={shown} thumbs={pdf.thumbs} mode={gridMode} onChange={mode === 'rotate' ? (next) => setPages(next.map((p) => ({ ...p, rotate: 0 }))) : setPages} />
      </PdfToolLayout>
    </>
  );
}
