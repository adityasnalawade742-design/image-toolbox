import React, { useState } from 'react';
import { PanelTop } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { addHeaderFooter, type Slot } from '../../../lib/pdf/headerFooter';
import { loadSiteFont } from '../../../lib/pdf/unicodeFont';
import { OutputPages, useOutputPreview } from './OutputPreview';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const MARGINS = { small: 18, medium: 28, large: 42 } as const;
const COLORS: [string, [number, number, number]][] = [
  ['#3c3c3c', [60, 60, 60]],
  ['#000000', [0, 0, 0]],
  ['#7a7a7a', [122, 122, 122]],
  ['#1f4e8c', [31, 78, 140]],
];
const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink rounded-md';

export function HeaderFooterWorkspace() {
  const t = useT();
  const locale = useLocale();
  const pdf = usePdfDocument();
  const [text, setText] = useState<Partial<Record<Slot, string>>>({ bottomCenter: t('ctl.hf.defaultFooter') });
  const [fontSize, setFontSize] = useState(10);
  const [margin, setMargin] = useState<keyof typeof MARGINS>('medium');
  const [color, setColor] = useState(0);
  const [skipFirst, setSkipFirst] = useState(false);
  const [start, setStart] = useState(1);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [unsupported, setUnsupported] = useState<string[]>([]);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);
  const date = new Date().toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });

  const build = async () => {
    if (!pdf.bytes) return null;
    const r = await addHeaderFooter(
      pdf.bytes,
      { text, fontSize, margin: MARGINS[margin], color: COLORS[color][1], skipFirst, start, fileName: pdf.file?.name ?? '', date },
      loadSiteFont
    );
    setUnsupported(r.unsupported);
    return r.bytes;
  };
  const { out, building } = useOutputPreview(build, [pdf.bytes, JSON.stringify(text), fontSize, margin, color, skipFirst, start], (err) => setError(editError(err)), 400);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = () => {
    if (!out) return;
    const name = pdfName(pdf.file?.name, 'header-footer');
    savePdf(out.bytes, name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const row = (slots: Slot[], label: string) => (
    <fieldset className="space-y-1.5">
      <legend className="slug">{label}</legend>
      {/* One full-width box per position: "Page {page} of {pages}" needs the room */}
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2.5 gap-y-1.5">
        {slots.map((s) => {
          const where = t(`ctl.hf.${s.replace(/^(top|bottom)/, '').toLowerCase()}` as 'ctl.hf.left');
          return (
            <React.Fragment key={s}>
              <label htmlFor={`hf-${s}`} className="text-[14px] text-graphite">{where}</label>
              <input id={`hf-${s}`} type="text" value={text[s] ?? ''} onChange={(e) => setText((prev) => ({ ...prev, [s]: e.target.value }))} className={field} />
            </React.Fragment>
          );
        })}
      </div>
    </fieldset>
  );

  const panel = (
    <>
      {row(['topLeft', 'topCenter', 'topRight'], t('ctl.hf.header'))}
      {row(['bottomLeft', 'bottomCenter', 'bottomRight'], t('ctl.hf.footer'))}
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.hf.tokens')}</p>
      <div className="pt-4 border-t border-ink space-y-5">
        <RangeField id="hf-size" label={t('ctl.numbers.size')} value={fontSize} min={6} max={24} unit=" pt" onChange={setFontSize} />
        <Segmented
          label={t('ctl.numbers.margin')}
          value={margin}
          cols={3}
          onChange={setMargin}
          options={[
            { value: 'small', label: t('ctl.topdf.marginSmall') },
            { value: 'medium', label: t('ctl.numbers.marginMedium') },
            { value: 'large', label: t('ctl.topdf.marginLarge') },
          ]}
        />
        <div className="space-y-2">
          <span className="slug block" id="hf-color">{t('ctl.hf.color')}</span>
          <div className="flex gap-2" role="group" aria-labelledby="hf-color">
            {COLORS.map(([hex], i) => (
              <button
                key={hex}
                type="button"
                aria-pressed={color === i}
                aria-label={hex}
                onClick={() => setColor(i)}
                className={`w-11 h-11 rounded-full border-2 ${color === i ? 'border-ink ring-2 ring-offset-2 ring-ink' : 'border-pencil'}`}
                style={{ background: hex }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="hf-start" className="block text-[14px] text-graphite">{t('ctl.numbers.start')}</label>
          <input
            id="hf-start"
            type="number"
            inputMode="numeric"
            min={0}
            max={9999}
            value={start}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (v >= 0 && v <= 9999) setStart(v);
            }}
            className={field}
          />
        </div>
        <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={skipFirst} onChange={(e) => setSkipFirst(e.target.checked)} />
          <span className="text-ink">{t('ctl.hf.skipFirst')}</span>
        </label>
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={PanelTop}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!out || building || !Object.values(text).some((v) => v?.trim())}
        busy={building}
        status={building ? t('ctl.pdf.working') : status}
        error={error ?? (unsupported.length ? t('ctl.hf.unsupported', { text: unsupported.join(', ') }) : null)}
      >
        <OutputPages out={out} building={building} page={page} onPage={setPage} />
      </PdfToolLayout>
    </>
  );
}
