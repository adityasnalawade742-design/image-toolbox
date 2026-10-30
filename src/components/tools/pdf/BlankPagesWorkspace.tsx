import React, { useEffect, useState } from 'react';
import { FileMinus } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfPageGrid, type GridPage } from '../../shared/PdfPageGrid';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { extractPages } from '../../../lib/pdf/pageOps';
import { blankThreshold, inkShare } from '../../../lib/pdf/blank';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

// Pages are judged from a small render: enough to see marks, quick for long scans
const CHECK_DPI = 50;

/** Delete Blank Pages: find empty pages (scanner fronts and backs) and remove them after a look */
export function BlankPagesWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const replace = usePdfReplace(pdf.load);
  const editError = useEditError();
  const [ink, setInk] = useState<number[] | null>(null);
  const [sensitivity, setSensitivity] = useState(5);
  const [pages, setPages] = useState<GridPage[]>([]);
  const [progress, setProgress] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInk(null);
    setPages([]);
    setStatus('');
    setError(null);
    const doc = pdf.doc;
    if (!doc) return;
    let live = true;
    (async () => {
      const shares: number[] = [];
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
      for (let n = 1; n <= doc.numPages; n++) {
        if (!live) return;
        setProgress(t('ctl.blank.checking', { n, total: doc.numPages }));
        const page = await doc.getPage(n);
        const viewport = page.getViewport({ scale: CHECK_DPI / 72 });
        canvas.width = Math.max(1, Math.round(viewport.width));
        canvas.height = Math.max(1, Math.round(viewport.height));
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
        page.cleanup();
        shares.push(inkShare(ctx.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height));
      }
      canvas.width = canvas.height = 0;
      if (live) setInk(shares);
    })()
      .catch(() => live && setError(t('ws.errDecode')))
      .finally(() => live && setProgress(null));
    return () => {
      live = false;
    };
    // t only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.doc]);

  // The detection decides which pages start ticked; moving the sensitivity decides again
  useEffect(() => {
    if (!ink) return;
    const limit = blankThreshold(sensitivity);
    setPages(ink.map((share, i) => ({ key: `p${i}`, index: i, rotate: 0, selected: share <= limit })));
  }, [ink, sensitivity]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const toDelete = pages.filter((p) => p.selected);
  const run = async () => {
    if (!pdf.bytes || !toDelete.length) return;
    if (toDelete.length === pages.length) return setError(t('ctl.blank.keepOne'));
    setBusy(true);
    setError(null);
    try {
      const out = await extractPages(pdf.bytes, pages.filter((p) => !p.selected).map((p) => p.index));
      const name = pdfName(pdf.file?.name, 'no-blank-pages');
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
      <div className="space-y-1">
        <RangeField id="blank-sens" label={t('ctl.blank.sensitivity')} value={sensitivity} min={1} max={10} onChange={setSensitivity} />
        <p className="text-[13px] text-graphite">{t('ctl.blank.sensitivityHint')}</p>
      </div>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.blank.hint')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={FileMinus}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ctl.blank.delete', { n: toDelete.length })}
        onAction={run}
        actionDisabled={!toDelete.length}
        busy={busy}
        status={
          progress ||
          (busy
            ? t('ctl.pdf.working')
            : ink
              ? `${toDelete.length ? t('ctl.blank.found', { n: toDelete.length, total: pages.length }) : t('ctl.blank.noneFound')}${status ? ` · ${status}` : ''}`
              : status)
        }
        error={error}
      >
        {pages.length > 0 && <PdfPageGrid pages={pages} thumbs={pdf.thumbs} doc={pdf.doc} mode="select" onChange={setPages} />}
      </PdfToolLayout>
    </>
  );
}
