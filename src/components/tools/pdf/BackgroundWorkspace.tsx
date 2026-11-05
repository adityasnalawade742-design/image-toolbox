import React, { useState } from 'react';
import { PaintBucket } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { addBackground, type BackgroundOptions } from '../../../lib/pdf/background';
import { parseRanges } from '../../../lib/pdf/pageOps';
import { OutputPages, useOutputPreview } from './OutputPreview';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

// Soft paper tones first: they keep text readable
const SWATCHES = ['#fff4d6', '#fde2e4', '#e2f0e4', '#dde9f8', '#efe7f8', '#f1f1ec'];
const hexToRgb = (h: string): [number, number, number] => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

export function BackgroundWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [color, setColor] = useState(SWATCHES[0]);
  const [mode, setMode] = useState<BackgroundOptions['mode']>('behind');
  const [scope, setScope] = useState<'all' | 'some'>('all');
  const [range, setRange] = useState('1');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);
  const pages = scope === 'all' ? ('all' as const) : parseRanges(range, pdf.pageCount).flat();
  const { out, building } = useOutputPreview(
    async () => (pdf.bytes ? addBackground(pdf.bytes, { color: hexToRgb(color), mode, pages }) : null),
    [pdf.bytes, color, mode, scope, range],
    (err) => setError(editError(err))
  );

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = () => {
    if (!out) return;
    const name = pdfName(pdf.file?.name, 'background');
    savePdf(out.bytes, name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block" id="bg-color">{t('ctl.pdfbg.color')}</span>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-labelledby="bg-color">
          {SWATCHES.map((hex) => (
            <button
              key={hex}
              type="button"
              aria-pressed={color === hex}
              aria-label={hex}
              onClick={() => setColor(hex)}
              className={`w-11 h-11 rounded-full border-2 ${color === hex ? 'border-ink ring-2 ring-offset-2 ring-ink' : 'border-pencil'}`}
              style={{ background: hex }}
            />
          ))}
          <label
            className={`w-11 h-11 rounded-full border-2 overflow-hidden cursor-pointer relative ${SWATCHES.includes(color) ? 'border-pencil' : 'border-ink ring-2 ring-offset-2 ring-ink'}`}
            title={t('ctl.graph.custom')}
            style={{ background: 'conic-gradient(#e33, #ec3, #3c5, #3ae, #93e, #e33)' }}
          >
            <span className="sr-only">{t('ctl.graph.custom')}</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          </label>
        </div>
      </div>
      <Segmented
        label={t('ctl.pdfbg.mode')}
        value={mode}
        onChange={setMode}
        options={[
          { value: 'behind', label: t('ctl.pdfbg.behind') },
          { value: 'tint', label: t('ctl.pdfbg.tint') },
        ]}
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t(mode === 'behind' ? 'ctl.pdfbg.behindNote' : 'ctl.pdfbg.tintNote')}</p>
      <div className="pt-4 border-t border-ink space-y-3">
        <Segmented
          label={t('ctl.pdfbg.pages')}
          value={scope}
          onChange={setScope}
          options={[
            { value: 'all', label: t('ctl.pdfbg.allPages') },
            { value: 'some', label: t('ctl.pdfbg.somePages') },
          ]}
        />
        {scope === 'some' && (
          <div className="space-y-1">
            <label htmlFor="bg-range" className="block text-[14px] text-graphite">{t('ctl.pdfbg.range')}</label>
            <input id="bg-range" type="text" value={range} onChange={(e) => setRange(e.target.value)} placeholder="1-3, 5" className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink rounded-md" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={PaintBucket}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!out || building || (scope === 'some' && !(pages as number[]).length)}
        busy={building}
        status={building ? t('ctl.pdf.working') : status}
        error={error}
      >
        <OutputPages out={out} building={building} page={page} onPage={setPage} />
      </PdfToolLayout>
    </>
  );
}
