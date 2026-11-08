import React, { useState } from 'react';
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowUp, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { addPageNumbers, numberedRange, pageLabel, type NumberFormat, type NumberPosition } from '../../../lib/pdf/pageOps';
import { loadSiteFont } from '../../../lib/pdf/unicodeFont';
import { PagePreview } from './PagePreview';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const MARGINS = { small: 18, medium: 28, large: 42 } as const;

export function PageNumbersWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [position, setPosition] = useState<NumberPosition>('bottom-center');
  const [format, setFormat] = useState<NumberFormat>('n');
  const [start, setStart] = useState(1);
  const [fontSize, setFontSize] = useState(11);
  const [margin, setMargin] = useState<keyof typeof MARGINS>('medium');
  // Pages to number, 1-based; `to` 0 means the last page
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(0);
  const [template, setTemplate] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const last = to > 0 ? Math.min(to, pdf.pageCount) : pdf.pageCount;
  const range = numberedRange(pdf.pageCount, { from: Math.min(from, last), to: last });
  const total = start + (range.last - range.first);
  const previewPage = range.first + 1;
  const tpl = template.trim() || t('ctl.numbers.templateDefault');
  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const out = await addPageNumbers(pdf.bytes, { position, format, start, fontSize, margin: MARGINS[margin], from: range.first + 1, to: range.last + 1, template: tpl }, loadSiteFont);
      const name = pdfName(pdf.file?.name, 'numbered');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const positions: { id: NumberPosition; label: string; Icon: typeof ArrowUp }[] = [
    { id: 'top-left', label: t('ctl.watermark.topLeft'), Icon: ArrowUpLeft },
    { id: 'top-center', label: t('ctl.watermark.topCenter'), Icon: ArrowUp },
    { id: 'top-right', label: t('ctl.watermark.topRight'), Icon: ArrowUpRight },
    { id: 'bottom-left', label: t('ctl.watermark.bottomLeft'), Icon: ArrowDownLeft },
    { id: 'bottom-center', label: t('ctl.watermark.bottomCenter'), Icon: ArrowDown },
    { id: 'bottom-right', label: t('ctl.watermark.bottomRight'), Icon: ArrowDownRight },
  ];

  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block" id="num-pos">{t('ctl.numbers.position')}</span>
        <div className="grid grid-cols-3 gap-px bg-ink border border-ink max-w-[15rem]" role="group" aria-labelledby="num-pos">
          {positions.map(({ id, label, Icon }) => (
            <button key={id} type="button" aria-pressed={position === id} aria-label={label} title={label} onClick={() => setPosition(id)} className={`min-h-[44px] flex items-center justify-center ${position === id ? 'seg-on' : 'seg-off'}`}>
              <Icon className="w-4 h-4" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4 border-t border-ink">
        <Segmented
          label={t('ctl.numbers.format')}
          value={format}
          onChange={setFormat}
          options={[
            { value: 'n', label: '1' },
            { value: 'n-of-total', label: '1 / N' },
            { value: 'dash', label: '– 1 –' },
            { value: 'custom', label: t('ctl.numbers.custom') },
          ]}
        />
        {format === 'custom' && (
          <div className="space-y-1 pt-3">
            <label htmlFor="num-tpl" className="block text-[14px] text-graphite">{t('ctl.numbers.template')}</label>
            <input id="num-tpl" type="text" value={template} placeholder={t('ctl.numbers.templateDefault')} onChange={(e) => setTemplate(e.target.value)} maxLength={80} aria-describedby="num-tpl-hint" className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink" />
            <p id="num-tpl-hint" className="text-[13px] text-graphite">{t('ctl.numbers.templateHint')}</p>
          </div>
        )}
      </div>
      <div className="pt-4 border-t border-ink space-y-4">
        <div className="space-y-1">
          <label htmlFor="num-start" className="block text-[14px] text-graphite">
            {t('ctl.numbers.start')}
          </label>
          <input
            id="num-start"
            type="number"
            inputMode="numeric"
            min={0}
            max={9999}
            value={start}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (v >= 0 && v <= 9999) setStart(v);
            }}
            className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          />
        </div>
        <RangeField id="num-size" label={t('ctl.numbers.size')} value={fontSize} min={7} max={24} unit=" pt" onChange={setFontSize} />
        <Segmented
          label={t('ctl.numbers.margin')}
          value={margin}
          onChange={setMargin}
          options={[
            { value: 'small', label: t('ctl.topdf.marginSmall') },
            { value: 'medium', label: t('ctl.numbers.marginMedium') },
            { value: 'large', label: t('ctl.topdf.marginLarge') },
          ]}
        />
        <fieldset className="space-y-1">
          <legend className="block text-[14px] text-graphite">{t('ctl.numbers.pages')}</legend>
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={1}
              max={pdf.pageCount}
              value={from}
              aria-label={t('ctl.numbers.fromPage')}
              onChange={(e) => setFrom(Math.max(1, Math.min(pdf.pageCount, parseInt(e.target.value, 10) || 1)))}
              className="w-20 min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
            />
            <span className="text-graphite">–</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              max={pdf.pageCount}
              value={to > 0 ? to : pdf.pageCount}
              aria-label={t('ctl.numbers.toPage')}
              onChange={(e) => setTo(Math.max(1, Math.min(pdf.pageCount, parseInt(e.target.value, 10) || pdf.pageCount)))}
              className="w-20 min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
            />
          </div>
          <p className="text-[13px] text-graphite">{t('ctl.numbers.pagesHint')}</p>
        </fieldset>
      </div>
    </>
  );

  const [v, h] = position.split('-');
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
        <PagePreview doc={pdf.doc} page={previewPage}>
          {(canvas, size) => {
            // PDF points to on-screen pixels for this preview
            const k = canvas.getBoundingClientRect().width / size.width;
            const pad = MARGINS[margin] * k;
            return (
              <span
                aria-hidden="true"
                className="absolute font-sans text-ink bg-process-yellow/40 px-0.5 pointer-events-none leading-none"
                style={{
                  fontSize: Math.max(7, fontSize * k),
                  [v === 'bottom' ? 'bottom' : 'top']: pad,
                  ...(h === 'left' ? { left: pad } : h === 'right' ? { right: pad } : { left: '50%', transform: 'translateX(-50%)' }),
                }}
              >
                {pageLabel(start, total, format, tpl)}
              </span>
            );
          }}
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}
