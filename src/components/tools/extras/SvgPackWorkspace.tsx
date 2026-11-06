import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Copy, FileCode2, FileType } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { useImageIntake } from '../../shared/useImageIntake';
import { RangeField, savePdf } from '../pdf/common';
import { OutputPages, useOutputPreview } from '../pdf/OutputPreview';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { DEFAULT_SVG_OPTIONS, optimizeSvg, type SvgOptions } from '../../../lib/svg/optimize';

const ACCEPT = 'image/svg+xml,.svg';
const dataUrl = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
const baseName = (n: string) => n.replace(/\.svg$/i, '');

/** An SVG file or pasted code, shared by both tools */
function useSvgSource() {
  const t = useT();
  const [name, setName] = useState('');
  const [svg, setSvg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const load = async (f: File) => {
    setError(null);
    const text = await f.text();
    if (!/<svg[\s>]/i.test(text)) return setError(t('ctl.svgopt.notSvg'));
    setName(f.name);
    setSvg(text);
  };
  useImageIntake((f) => {
    if (/svg/i.test(f.type) || /\.svg$/i.test(f.name)) load(f);
  });
  const input = <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { if (e.target.files?.[0]) load(e.target.files[0]); e.target.value = ''; }} />;
  return { name, svg, setSvg, setName, error, setError, load, input, replace: () => inputRef.current?.click() };
}

function SvgStart({ src, hint }: { src: ReturnType<typeof useSvgSource>; hint: string }) {
  const t = useT();
  const [code, setCode] = useState('');
  return (
    <div className="space-y-4">
      <ProofDropZone onFiles={(f) => src.load(f[0])} accept={ACCEPT} hint={hint} />
      <div className="space-y-1.5">
        <label htmlFor="svg-paste" className="slug block">{t('ctl.svgopt.paste')}</label>
        <textarea id="svg-paste" value={code} onChange={(e) => setCode(e.target.value)} rows={4} spellCheck={false} placeholder="<svg …>" className="w-full p-3 border border-ink bg-paper-bright text-[14px] font-mono text-ink rounded-md" />
        <button
          type="button"
          disabled={!code.trim()}
          onClick={() => {
            if (!/<svg[\s>]/i.test(code)) return src.setError(t('ctl.svgopt.notSvg'));
            src.setError(null);
            src.setName('pasted.svg');
            src.setSvg(code);
          }}
          className="btn-rule min-h-[44px] disabled:opacity-40"
        >
          {t('ctl.svgopt.usePasted')}
        </button>
      </div>
      {src.error && <p role="alert" className="text-[15px] text-accent-red">{src.error}</p>}
    </div>
  );
}

// ---------- SVG optimizer ----------
export function SvgOptimizerWorkspace() {
  const t = useT();
  const locale = useLocale();
  const src = useSvgSource();
  const [o, setO] = useState<SvgOptions>(DEFAULT_SVG_OPTIONS);
  const [out, setOut] = useState<{ svg: string; before: number; after: number } | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const set = (p: Partial<SvgOptions>) => setO((prev) => ({ ...prev, ...p }));

  useEffect(() => {
    if (!src.svg) return;
    let cancelled = false;
    const id = window.setTimeout(async () => {
      try {
        const { optimize } = await import('svgo/browser');
        const r = optimizeSvg(optimize as never, src.svg, o);
        if (!cancelled) {
          setOut(r);
          setError(null);
        }
      } catch {
        if (!cancelled) setError(t('ctl.svgopt.failed'));
      }
    }, 150);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
    // t is stable per page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src.svg, o]);

  if (!src.svg) return <SvgStart src={src} hint={t('ctl.svgopt.dropHint')} />;

  const name = `${baseName(src.name)}.min.svg`;
  const saved = out ? 1 - out.after / out.before : 0;
  const run = () => {
    if (!out) return;
    downloadBlob(new Blob([out.svg], { type: 'image/svg+xml' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };
  const panel = (
    <>
      <RangeField id="svg-prec" label={t('ctl.svgopt.precision')} value={o.precision} min={0} max={5} onChange={(v) => set({ precision: v })} />
      <p className="text-[13px] text-graphite -mt-2">{t('ctl.svgopt.precisionNote')}</p>
      {(
        [
          ['cleanIds', t('ctl.svgopt.cleanIds')],
          ['removeTitles', t('ctl.svgopt.removeTitles')],
          ['keepEditorData', t('ctl.svgopt.keepEditor')],
          ['pretty', t('ctl.svgopt.pretty')],
        ] as [keyof SvgOptions, string][]
      ).map(([k, label]) => (
        <label key={k} className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={o[k] as boolean} onChange={(e) => set({ [k]: e.target.checked })} />
          <span className="text-ink">{label}</span>
        </label>
      ))}
      {out && (
        <button type="button" onClick={() => navigator.clipboard.writeText(out.svg).then(() => setStatus(t('ctl.svgopt.copied')), () => {})} className="btn-rule min-h-[44px] w-full">
          <Copy className="w-4 h-4" aria-hidden="true" />
          {t('ctl.svgopt.copy')}
        </button>
      )}
    </>
  );
  return (
    <>
      {src.input}
      <PdfToolLayout
        icon={FileCode2}
        fileLabel={src.name}
        onReplace={src.replace}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'SVG' })}
        onAction={run}
        actionDisabled={!out}
        status={status}
        error={error}
      >
        {out && (
          <p className="text-[17px] text-ink" aria-live="polite" data-measure>
            <strong>{formatBytes(out.before)} → {formatBytes(out.after)}</strong>
            <span className="text-graphite"> · {saved > 0 ? t('ctl.svgopt.smaller', { percent: (saved * 100).toLocaleString(locale, { maximumFractionDigits: 1 }) }) : t('ctl.svgopt.noGain')}</span>
          </p>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [t('ctl.svgopt.before'), src.svg],
            [t('ctl.svgopt.after'), out?.svg ?? ''],
          ].map(([label, code]) => (
            <figure key={label} className="border border-ink rounded-xl bg-paper-bright p-3 space-y-2">
              <figcaption className="slug">{label}</figcaption>
              <div className="canvas-checkerboard rounded-md flex items-center justify-center min-h-[200px] p-3">
                {code && <img src={dataUrl(code)} alt="" className="max-h-[260px] max-w-full object-contain" />}
              </div>
            </figure>
          ))}
        </div>
      </PdfToolLayout>
    </>
  );
}

// ---------- SVG to PDF ----------
type Page = 'fit' | 'a4' | 'letter';
const PAGE_PT: Record<Exclude<Page, 'fit'>, [number, number]> = { a4: [595.28, 841.89], letter: [612, 792] };

/** The drawing's size in CSS pixels, from width/height or the viewBox */
function svgSize(el: SVGSVGElement): [number, number] {
  const px = (v: string | null) => {
    if (!v) return NaN;
    const m = /^([\d.]+)(px|pt|mm|cm|in)?$/.exec(v.trim());
    if (!m) return NaN;
    const k = { px: 1, pt: 96 / 72, mm: 96 / 25.4, cm: 96 / 2.54, in: 96 }[(m[2] || 'px') as 'px'];
    return parseFloat(m[1]) * k;
  };
  const vb = el.getAttribute('viewBox')?.split(/[\s,]+/).map(Number);
  let w = px(el.getAttribute('width')), h = px(el.getAttribute('height'));
  if (vb && vb.length === 4) {
    if (!(w > 0) && h > 0) w = (h * vb[2]) / vb[3];
    else if (!(h > 0) && w > 0) h = (w * vb[3]) / vb[2];
    else if (!(w > 0)) [w, h] = [vb[2], vb[3]];
  }
  return [w > 0 ? w : 300, h > 0 ? h : 150];
}

async function svgToPdf(svg: string, page: Page, margin: number): Promise<Uint8Array> {
  const { jsPDF } = await import('jspdf');
  await import('svg2pdf.js');
  const el = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement as unknown as SVGSVGElement;
  if (el.nodeName.toLowerCase() !== 'svg') throw new Error('not svg');
  // svg2pdf reads computed styles, so the drawing is attached (out of sight) while it's converted
  const holder = document.createElement('div');
  holder.style.cssText = 'position:fixed;left:-10000px;top:0;visibility:hidden';
  holder.appendChild(el);
  document.body.appendChild(holder);
  try {
    const [wPx, hPx] = svgSize(el);
    const w = wPx * 0.75, h = hPx * 0.75;
    let pw: number, ph: number;
    if (page === 'fit') [pw, ph] = [w + 2 * margin, h + 2 * margin];
    else {
      const [a, b] = PAGE_PT[page];
      [pw, ph] = w > h ? [b, a] : [a, b];
    }
    const s = page === 'fit' ? 1 : Math.min((pw - 2 * margin) / w, (ph - 2 * margin) / h);
    const doc = new jsPDF({ unit: 'pt', format: [pw, ph], orientation: pw > ph ? 'landscape' : 'portrait', compress: true });
    await (doc as unknown as { svg: (el: Element, o: object) => Promise<unknown> }).svg(el, { x: (pw - w * s) / 2, y: (ph - h * s) / 2, width: w * s, height: h * s });
    return new Uint8Array(doc.output('arraybuffer'));
  } finally {
    holder.remove();
  }
}

export function SvgToPdfWorkspace() {
  const t = useT();
  const src = useSvgSource();
  const [page, setPage] = useState<Page>('fit');
  const [margin, setMargin] = useState<'none' | 'small' | 'large'>('none');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState(1);
  const m = { none: 0, small: 18, large: 36 }[margin];
  const { out, building } = useOutputPreview(async () => (src.svg ? svgToPdf(src.svg, page, m) : null), [src.svg, page, margin], () => setError(t('ctl.svgpdf.failed')));
  const preview = useMemo(() => (src.svg ? dataUrl(src.svg) : ''), [src.svg]);

  if (!src.svg) return <SvgStart src={src} hint={t('ctl.svgpdf.dropHint')} />;

  const name = `${baseName(src.name)}.pdf`;
  const run = () => {
    if (!out) return;
    savePdf(out.bytes, name);
    setStatus(t('ctl.pdf.done', { name }));
  };
  const panel = (
    <>
      <Segmented
        label={t('ctl.impose.paper')}
        value={page}
        cols={3}
        onChange={setPage}
        options={[
          { value: 'fit', label: t('ctl.svgpdf.fit') },
          { value: 'a4', label: 'A4' },
          { value: 'letter', label: t('ctl.topdf.letter') },
        ]}
      />
      <Segmented
        label={t('ctl.numbers.margin')}
        value={margin}
        cols={3}
        onChange={setMargin}
        options={[
          { value: 'none', label: t('ctl.impose.none') },
          { value: 'small', label: t('ctl.topdf.marginSmall') },
          { value: 'large', label: t('ctl.topdf.marginLarge') },
        ]}
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.svgpdf.note')}</p>
      <div className="border border-pencil rounded-md canvas-checkerboard p-2 flex justify-center">
        <img src={preview} alt="" className="max-h-[120px] max-w-full object-contain" />
      </div>
    </>
  );
  return (
    <>
      {src.input}
      <PdfToolLayout
        icon={FileType}
        fileLabel={src.name}
        onReplace={src.replace}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!out || building}
        busy={building}
        status={building ? t('ctl.pdf.working') : status}
        error={error}
      >
        <OutputPages out={out} building={building} page={view} onPage={setView} info={out ? `PDF · ${formatBytes(out.bytes.length)}` : undefined} />
      </PdfToolLayout>
    </>
  );
}
