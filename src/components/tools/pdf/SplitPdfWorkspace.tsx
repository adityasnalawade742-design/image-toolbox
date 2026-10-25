import React, { useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfPageGrid } from '../../shared/PdfPageGrid';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { chunkRanges, parseRanges, splitPdf } from '../../../lib/pdf/pageOps';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

type Mode = 'ranges' | 'every' | 'each';

/** "1-3" style label for a group of 0-based pages */
const describe = (g: number[], dash = '–') => (g.length === 1 ? String(g[0] + 1) : `${g[0] + 1}${dash}${g[g.length - 1] + 1}`);

export function SplitPdfWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [mode, setMode] = useState<Mode>('ranges');
  const [ranges, setRanges] = useState('');
  const [every, setEvery] = useState(2);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const n = pdf.pageCount;
  const groups = mode === 'ranges' ? parseRanges(ranges, n) : mode === 'every' ? chunkRanges(n, every) : chunkRanges(n, 1);
  const pages = Array.from({ length: n }, (_, i) => ({ key: `p${i}`, index: i, rotate: 0 }));

  const run = async () => {
    if (!pdf.bytes) return;
    if (!groups.length) return setError(t('ctl.splitpdf.noRanges'));
    setBusy(true);
    setError(null);
    try {
      const parts = await splitPdf(pdf.bytes, groups);
      if (parts.length === 1) {
        const name = pdfName(pdf.file?.name, `pages-${describe(groups[0], '-')}`);
        savePdf(parts[0], name);
        setStatus(t('ctl.pdf.done', { name }));
      } else {
        const JSZip = (await import('jszip')).default;
        const zip = new JSZip();
        parts.forEach((bytes, i) => zip.file(pdfName(pdf.file?.name, `pages-${describe(groups[i], '-')}`), bytes));
        const name = pdfName(pdf.file?.name, 'split').replace(/\.pdf$/, '.zip');
        downloadBlob(await zip.generateAsync({ type: 'blob' }), name);
        setStatus(t('ctl.pdf.done', { name }));
      }
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <>
      <Segmented
        label={t('ctl.splitpdf.mode')}
        value={mode}
        onChange={setMode}
        options={[
          { value: 'ranges', label: t('ctl.splitpdf.modeRanges') },
          { value: 'every', label: t('ctl.splitpdf.modeEvery') },
          { value: 'each', label: t('ctl.splitpdf.modeEach') },
        ]}
      />
      {mode === 'ranges' && (
        <div className="space-y-1.5">
          <label htmlFor="split-ranges" className="block text-[14px] text-graphite">
            {t('ctl.splitpdf.ranges')}
          </label>
          <input
            id="split-ranges"
            type="text"
            inputMode="numeric"
            value={ranges}
            onChange={(e) => setRanges(e.target.value)}
            placeholder={t('ctl.pdf.rangePlaceholder')}
            aria-describedby="split-ranges-hint"
            className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          />
          <p id="split-ranges-hint" className="text-[13px] text-graphite">
            {t('ctl.splitpdf.rangesHint')}
          </p>
        </div>
      )}
      {mode === 'every' && (
        <div className="space-y-1.5">
          <label htmlFor="split-every" className="block text-[14px] text-graphite">
            {t('ctl.splitpdf.every')}
          </label>
          <input
            id="split-every"
            type="number"
            inputMode="numeric"
            min={1}
            max={Math.max(1, n)}
            value={every}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (v >= 1) setEvery(Math.min(v, n));
            }}
            className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          />
        </div>
      )}
      <div className="pt-4 border-t border-ink space-y-1.5">
        {groups.length ? (
          <>
            <p className="text-[14px] font-semibold text-ink">{t('ctl.splitpdf.summary', { n: groups.length })}</p>
            <ul className="text-[14px] text-body space-y-0.5 max-h-48 overflow-y-auto" data-measure>
              {groups.slice(0, 50).map((g, i) => (
                <li key={i}>{t('ctl.splitpdf.part', { n: i + 1, pages: describe(g) })}</li>
              ))}
              {groups.length > 50 && <li>…</li>}
            </ul>
          </>
        ) : (
          <p className="text-[14px] text-graphite">{t('ctl.splitpdf.noRanges')}</p>
        )}
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={groups.length > 1 ? t('ctl.pdf.downloadZip') : t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!groups.length}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PdfPageGrid pages={pages} thumbs={pdf.thumbs} mode="view" />
      </PdfToolLayout>
    </>
  );
}
