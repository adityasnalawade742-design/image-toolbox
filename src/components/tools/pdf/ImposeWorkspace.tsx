import React, { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { BookOpen, LayoutGrid } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { openPdf } from '../../../lib/pdf/pdfToImages';
import { booklet, bookletOrder, nUp, type NupOptions, type SheetSize } from '../../../lib/pdf/impose';
import { PagePicker, PagePreview } from './PagePreview';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

type Mode = 'booklet' | 'nup';
const SPACING = { none: 0, small: 12, large: 30 } as const;

/** Booklet Maker and N-up PDF: the preview is the very PDF that downloads, rebuilt as settings change */
export function ImposeWorkspace({ mode }: { mode: Mode }) {
  const t = useT();
  const pdf = usePdfDocument();
  const [sheet, setSheet] = useState<SheetSize | 'double' | 'same'>(mode === 'booklet' ? 'a4' : 'same');
  const [rtl, setRtl] = useState(false);
  const [perSheet, setPerSheet] = useState<NupOptions['perSheet']>(2);
  const [order, setOrder] = useState<NupOptions['order']>('across');
  const [spacing, setSpacing] = useState<keyof typeof SPACING>('small');
  const [borders, setBorders] = useState(false);
  const [out, setOut] = useState<{ bytes: Uint8Array; doc: PDFDocumentProxy } | null>(null);
  const [view, setView] = useState(1);
  const [building, setBuilding] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);
  const buildId = useRef(0);

  const build = () =>
    mode === 'booklet'
      ? booklet(pdf.bytes!, { sheet: sheet as SheetSize | 'double', rightToLeft: rtl })
      : nUp(pdf.bytes!, { perSheet, sheet: sheet as SheetSize | 'same', order, borders, margin: SPACING[spacing] });

  useEffect(() => {
    if (!pdf.bytes) return;
    const id = ++buildId.current;
    setBuilding(true);
    setStatus('');
    setError(null);
    const timer = window.setTimeout(async () => {
      try {
        const bytes = await build();
        const doc = await openPdf(new File([new Uint8Array(bytes)], 'preview.pdf', { type: 'application/pdf' }));
        if (id !== buildId.current) return doc.loadingTask.destroy();
        setOut((prev) => {
          prev?.doc.loadingTask.destroy();
          return { bytes, doc };
        });
      } catch (err) {
        if (id === buildId.current) setError(editError(err));
      } finally {
        if (id === buildId.current) setBuilding(false);
      }
    }, 150);
    return () => window.clearTimeout(timer);
    // build reads the settings listed here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes, sheet, rtl, perSheet, order, spacing, borders]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const sides = out?.doc.numPages ?? 0;
  const shown = Math.min(view, Math.max(1, sides));
  const run = () => {
    if (!out) return;
    const name = pdfName(pdf.file?.name, mode === 'booklet' ? 'booklet' : `${perSheet}-up`);
    savePdf(out.bytes, name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const papers = [
    { value: 'a4' as const, label: 'A4' },
    { value: 'letter' as const, label: 'Letter' },
    { value: 'a3' as const, label: 'A3' },
  ];
  const panel =
    mode === 'booklet' ? (
      <>
        <Segmented label={t('ctl.impose.paper')} value={sheet} cols={2} options={[...papers, { value: 'tabloid', label: 'Tabloid' }, { value: 'double', label: t('ctl.impose.fullSize') }]} onChange={setSheet} />
        <Segmented
          label={t('ctl.impose.binding')}
          value={rtl ? 'r' : 'l'}
          options={[
            { value: 'l', label: t('ctl.impose.bindLeft') },
            { value: 'r', label: t('ctl.impose.bindRight') },
          ]}
          onChange={(v) => setRtl(v === 'r')}
        />
        <div className="pt-4 border-t border-ink space-y-2 text-[14px] text-graphite leading-relaxed">
          <p className="text-ink font-semibold">{t('ctl.impose.howToPrint')}</p>
          <p>{t('ctl.impose.printSteps')}</p>
        </div>
      </>
    ) : (
      <>
        <Segmented
          label={t('ctl.impose.perSheet')}
          value={perSheet}
          cols={3}
          options={([2, 4, 6, 8, 9, 16] as const).map((n) => ({ value: n, label: String(n) }))}
          onChange={setPerSheet}
        />
        <Segmented label={t('ctl.impose.paper')} value={sheet} cols={2} options={[{ value: 'same', label: t('ctl.impose.sameSize') }, ...papers]} onChange={setSheet} />
        <Segmented
          label={t('ctl.impose.order')}
          value={order}
          options={[
            { value: 'across', label: t('ctl.impose.across') },
            { value: 'down', label: t('ctl.impose.down') },
          ]}
          onChange={setOrder}
        />
        <Segmented
          label={t('ctl.impose.spacing')}
          value={spacing}
          cols={3}
          options={[
            { value: 'none', label: t('ctl.impose.none') },
            { value: 'small', label: t('ctl.topdf.marginSmall') },
            { value: 'large', label: t('ctl.topdf.marginLarge') },
          ]}
          onChange={setSpacing}
        />
        <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={borders} onChange={(e) => setBorders(e.target.checked)} />
          <span className="text-ink">{t('ctl.impose.borders')}</span>
        </label>
      </>
    );

  const summary =
    mode === 'booklet'
      ? t('ctl.impose.bookletSummary', { pages: pdf.pageCount, sheets: Math.ceil(bookletOrder(pdf.pageCount).length / 2) })
      : t('ctl.impose.nupSummary', { pages: pdf.pageCount, sheets: sides || Math.ceil(pdf.pageCount / perSheet) });

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={mode === 'booklet' ? BookOpen : LayoutGrid}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!out || building}
        busy={building}
        status={building ? t('ctl.pdf.working') : status}
        error={error}
      >
        {out ? (
          <div className={building ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
            <PagePreview doc={out.doc} page={shown} />
          </div>
        ) : (
          <div className="bg-paper-bright border border-ink min-h-[260px] rounded-xl" />
        )}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
          <span className="text-ink">{summary}</span>
          {mode === 'booklet' && sides > 0 && <span className="text-graphite">{t(shown % 2 ? 'ctl.impose.front' : 'ctl.impose.back', { n: Math.ceil(shown / 2) })}</span>}
          <span className="ml-auto">
            <PagePicker page={shown} count={sides} onChange={setView} />
          </span>
        </div>
      </PdfToolLayout>
    </>
  );
}
