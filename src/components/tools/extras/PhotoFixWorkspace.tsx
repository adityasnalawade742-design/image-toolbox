import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pipette, ScanEye, Sparkles, Wand2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { exportableFormat, formatExtension, type OutputFormat } from '../../../lib/canvas/outputFormat';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage, type OneImage } from './useOneImage';
import { applyColor, autoWhiteBalance, estimateNoise, gainsFromGray, gainsFromSliders, suggestDenoise, type DenoiseOptions, type Gains, type SharpenOptions } from '../../../lib/photo/filters';
import { previewPixels, runPhoto, toCanvas } from '../../../lib/photo/runPhoto';
import type { PhotoJob } from '../../../lib/photo/photo.worker';

const DETAIL_W = 360, DETAIL_H = 280;

/** Output keeps the photo's own format (JPEG stays JPEG at high quality, PNG stays lossless) */
function useOutput(img: OneImage | null, suffix: string) {
  const type: OutputFormat = img ? exportableFormat(img.file.type) : 'image/jpeg';
  const name = img ? `${img.file.name.replace(/\.[^.]+$/, '')}-${suffix}.${formatExtension(type)}` : '';
  return { type, name, encode: (c: HTMLCanvasElement) => canvasToBlob(c, type, 0.95, undefined, forDownload(type)) };
}

/**
 * Whole-photo overview to choose a spot, and that spot at 100% before and after: sharpening and noise only show at
 * full size, so a shrunken preview would hide exactly what the tool changes.
 */
function DetailPreview({ img, job, margin }: { img: OneImage; job: PhotoJob; margin: number }) {
  const t = useT();
  const overRef = useRef<HTMLCanvasElement>(null);
  const beforeRef = useRef<HTMLCanvasElement>(null);
  const afterRef = useRef<HTMLCanvasElement>(null);
  const [center, setCenter] = useState({ x: 0.5, y: 0.5 });
  const [busy, setBusy] = useState(false);
  const cw = Math.min(DETAIL_W, img.width), ch = Math.min(DETAIL_H, img.height);
  const crop = useMemo(() => {
    const x = Math.round(Math.max(0, Math.min(img.width - cw, center.x * img.width - cw / 2)));
    const y = Math.round(Math.max(0, Math.min(img.height - ch, center.y * img.height - ch / 2)));
    return { x, y };
  }, [center, img, cw, ch]);

  // Overview with the inspected area outlined
  useEffect(() => {
    const c = overRef.current;
    if (!c) return;
    const s = Math.min(1, 640 / Math.max(img.width, img.height));
    c.width = Math.round(img.width * s);
    c.height = Math.round(img.height * s);
    const ctx = c.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img.canvas, 0, 0, c.width, c.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.strokeRect(crop.x * s - 1, crop.y * s - 1, cw * s + 2, ch * s + 2);
    ctx.strokeStyle = '#e2007a';
    ctx.strokeRect(crop.x * s, crop.y * s, cw * s, ch * s);
  }, [img, crop, cw, ch]);

  // The spot, processed with a margin so its edges match the full-size result
  useEffect(() => {
    const b = beforeRef.current, a = afterRef.current;
    if (!b || !a) return;
    const mx = Math.max(0, crop.x - margin), my = Math.max(0, crop.y - margin);
    const mw = Math.min(img.width, crop.x + cw + margin) - mx, mh = Math.min(img.height, crop.y + ch + margin) - my;
    const src = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(mx, my, mw, mh);
    for (const c of [a, b]) {
      c.width = cw;
      c.height = ch;
    }
    b.getContext('2d')!.drawImage(img.canvas, crop.x, crop.y, cw, ch, 0, 0, cw, ch);
    let cancelled = false;
    setBusy(true);
    const id = window.setTimeout(() => {
      runPhoto(job, src.data, mw, mh)
        .then((r) => {
          if (cancelled) return;
          a.getContext('2d')!.drawImage(toCanvas(r.data, r.w, r.h), crop.x - mx, crop.y - my, cw, ch, 0, 0, cw, ch);
        })
        .catch(() => {})
        .finally(() => !cancelled && setBusy(false));
    }, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [img, crop, cw, ch, job, margin]);

  const pick = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCenter({ x: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), y: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)) });
  };
  const key = (e: React.KeyboardEvent) => {
    const d = e.shiftKey ? 0.1 : 0.03;
    const m: Record<string, [number, number]> = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] };
    if (!m[e.key]) return;
    e.preventDefault();
    setCenter((c) => ({ x: Math.max(0, Math.min(1, c.x + m[e.key][0])), y: Math.max(0, Math.min(1, c.y + m[e.key][1])) }));
  };

  return (
    <div className="space-y-4">
      <figure className="space-y-2">
        <figcaption className="text-[14px] text-graphite">{t('ctl.photofix.pickSpot')}</figcaption>
        <div className="bg-paper-bright border border-ink rounded-xl p-3 flex justify-center">
          <canvas
            ref={overRef}
            tabIndex={0}
            role="img"
            aria-label={t('ctl.photofix.overview')}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              pick(e);
            }}
            onPointerMove={(e) => e.buttons && pick(e)}
            onKeyDown={key}
            className="block max-w-full max-h-[40vh] cursor-crosshair touch-none"
          />
        </div>
      </figure>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          [t('ctl.photofix.before'), beforeRef],
          [t('ctl.photofix.after'), afterRef],
        ].map(([label, ref]) => (
          <figure key={label as string} className="border border-ink rounded-xl bg-paper-bright p-2 space-y-1.5">
            <figcaption className="slug flex justify-between">
              <span>{label as string}</span>
              <span className="normal-case tracking-normal text-graphite">100%</span>
            </figcaption>
            <div className="overflow-hidden rounded-md flex justify-center">
              <canvas ref={ref as React.RefObject<HTMLCanvasElement>} role="img" aria-label={`${label as string}, 100%`} className={`block max-w-full ${busy && ref === afterRef ? 'opacity-70' : ''}`} style={{ imageRendering: 'auto' }} />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

/** Shared frame: drop screen, full-size render in the worker with progress, download in the photo's own format */
function useFullRender(img: OneImage | null, job: PhotoJob, suffix: string) {
  const t = useT();
  const out = useOutput(img, suffix);
  const [progress, setProgress] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const cache = useRef<{ key: string; canvas: HTMLCanvasElement } | null>(null);
  const render = async () => {
    const key = JSON.stringify(job) + (img?.url ?? '');
    if (cache.current?.key === key) return cache.current.canvas;
    const px = img!.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img!.width, img!.height).data;
    setProgress(0);
    try {
      const r = await runPhoto(job, px, img!.width, img!.height, setProgress);
      const canvas = toCanvas(r.data, r.w, r.h);
      cache.current = { key, canvas };
      return canvas;
    } finally {
      setProgress(null);
    }
  };
  const download = async (setError: (e: string | null) => void) => {
    setError(null);
    try {
      downloadBlob(await out.encode(await render()), out.name);
      setStatus(t('ctl.pdf.done', { name: out.name }));
    } catch {
      setError(t('ws.errExport'));
    }
  };
  const busyLabel = progress !== null ? t('ctl.photofix.working', { percent: Math.round(progress * 100) }) : undefined;
  return { out, render, download, progress, status, setStatus, busyLabel };
}

function DropScreen({ one, hint }: { one: ReturnType<typeof useOneImage>; hint: string }) {
  return (
    <div className="space-y-3">
      <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={hint} />
      {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
    </div>
  );
}

// ---------- Sharpen ----------
export function SharpenWorkspace() {
  const t = useT();
  const [o, setO] = useState<SharpenOptions>({ amount: 100, radius: 1.2, threshold: 3 });
  const one = useOneImage();
  const job = useMemo<PhotoJob>(() => ({ op: 'sharpen', o }), [o]);
  const full = useFullRender(one.img, job, 'sharpened');
  if (!one.img) return <DropScreen one={one} hint={t('ctl.photofix.dropHint')} />;
  const set = (p: Partial<SharpenOptions>) => setO((v) => ({ ...v, ...p }));
  const panel = (
    <>
      <RangeField id="sh-amount" label={t('ctl.sharpen.amount')} value={o.amount} min={0} max={300} step={5} unit="%" onChange={(v) => set({ amount: v })} />
      <RangeField id="sh-radius" label={t('ctl.sharpen.radius')} value={o.radius} min={0.4} max={5} step={0.1} unit=" px" onChange={(v) => set({ radius: v })} />
      <p className="text-[13px] text-graphite -mt-2">{t('ctl.sharpen.radiusNote')}</p>
      <RangeField id="sh-threshold" label={t('ctl.sharpen.threshold')} value={o.threshold} min={0} max={30} onChange={(v) => set({ threshold: v })} />
      <p className="text-[13px] text-graphite -mt-2">{t('ctl.sharpen.thresholdNote')}</p>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.sharpen.note')}</p>
    </>
  );
  return (
    <Frame one={one} full={full} icon={Sparkles} panel={panel}>
      <DetailPreview img={one.img} job={job} margin={Math.ceil(o.radius * 9) + 4} />
    </Frame>
  );
}

// ---------- Denoise ----------
export function DenoiseWorkspace() {
  const t = useT();
  const [o, setO] = useState<DenoiseOptions>({ luma: 30, chroma: 50, detail: 15 });
  const [measured, setMeasured] = useState<{ luma: number; chroma: number } | null>(null);
  const one = useOneImage((img) => {
    // Measure the noise and start from settings that suit it
    const px = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img.width, img.height).data;
    const n = estimateNoise(px, img.width, img.height);
    setMeasured(n);
    setO(suggestDenoise(n));
  });
  const job = useMemo<PhotoJob>(() => ({ op: 'denoise', o }), [o]);
  const full = useFullRender(one.img, job, 'denoised');
  if (!one.img) return <DropScreen one={one} hint={t('ctl.photofix.dropHint')} />;
  const set = (p: Partial<DenoiseOptions>) => setO((v) => ({ ...v, ...p }));
  const level = measured ? (measured.luma < 3 && measured.chroma < 2 ? 'low' : measured.luma < 8 ? 'medium' : 'high') : null;
  const panel = (
    <>
      {level && (
        <div className="space-y-2">
          <p className="text-[15px] text-ink" aria-live="polite">{t(`ctl.denoise.level.${level}` as 'ctl.denoise.level.low')}</p>
          <button type="button" onClick={() => measured && setO(suggestDenoise(measured))} className="btn-rule min-h-[40px] w-full text-[14px]">
            <Wand2 className="w-4 h-4" aria-hidden="true" />
            {t('ctl.denoise.suggested')}
          </button>
        </div>
      )}
      <RangeField id="dn-luma" label={t('ctl.denoise.luma')} value={o.luma} min={0} max={100} onChange={(v) => set({ luma: v })} />
      <RangeField id="dn-chroma" label={t('ctl.denoise.chroma')} value={o.chroma} min={0} max={100} onChange={(v) => set({ chroma: v })} />
      <RangeField id="dn-detail" label={t('ctl.denoise.detail')} value={o.detail} min={0} max={100} onChange={(v) => set({ detail: v })} />
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.denoise.note')}</p>
    </>
  );
  return (
    <Frame one={one} full={full} icon={ScanEye} panel={panel}>
      <DetailPreview img={one.img} job={job} margin={48} />
    </Frame>
  );
}

function Frame({ one, full, icon, panel, children }: { one: ReturnType<typeof useOneImage>; full: ReturnType<typeof useFullRender>; icon: typeof Sparkles; panel: React.ReactNode; children: React.ReactNode }) {
  const t = useT();
  const img = one.img!;
  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={icon}
        fileLabel={`${img.width} × ${img.height} px · ${img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={full.out.name} transparent={full.out.type === 'image/png'} load={async () => blobImage(await full.out.encode(await full.render()))} original={() => urlImage(img.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: formatExtension(full.out.type).toUpperCase() })}
        onAction={() => full.download(one.setError)}
        busy={full.progress !== null}
        busyLabel={full.busyLabel}
        status={full.status}
        error={one.error}
      >
        {children}
      </PdfToolLayout>
    </>
  );
}

// ---------- Color and white balance ----------
export function WhiteBalanceWorkspace() {
  const t = useT();
  const [base, setBase] = useState<Gains>([1, 1, 1]);
  const [temp, setTemp] = useState(0);
  const [tint, setTint] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [picking, setPicking] = useState(false);
  const [compare, setCompare] = useState(false);
  const one = useOneImage(() => {
    setBase([1, 1, 1]);
    setTemp(0);
    setTint(0);
    setSaturation(0);
  });
  const gains = useMemo<Gains>(() => {
    const s = gainsFromSliders(temp, tint);
    return [base[0] * s[0], base[1] * s[1], base[2] * s[2]];
  }, [base, temp, tint]);
  const job = useMemo<PhotoJob>(() => ({ op: 'color', o: { gains, saturation } }), [gains, saturation]);
  const full = useFullRender(one.img, job, 'color');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const preview = useMemo(() => (one.img ? previewPixels(one.img.canvas, 1400) : null), [one.img]);

  // Colour changes are per pixel, so the preview is the whole photo, adjusted live
  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !preview) return;
    c.width = preview.w;
    c.height = preview.h;
    const data = compare ? preview.data : applyColor(preview.data, { gains, saturation });
    c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(data), preview.w, preview.h), 0, 0);
  }, [preview, gains, saturation, compare]);

  if (!one.img) return <DropScreen one={one} hint={t('ctl.photofix.dropHint')} />;
  const img = one.img;

  const auto = () => {
    setBase(autoWhiteBalance(img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img.width, img.height).data));
    setTemp(0);
    setTint(0);
    full.setStatus(t('ctl.wb.autoDone'));
  };
  const pickAt = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!picking) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - r.left) / r.width) * img.width), y = Math.round(((e.clientY - r.top) / r.height) * img.height);
    // Average a small square of the original, so noise doesn't decide the colour
    const s = Math.max(2, Math.round(Math.max(img.width, img.height) / 400));
    const x0 = Math.max(0, x - s), y0 = Math.max(0, y - s);
    const d = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(x0, y0, Math.min(img.width - x0, 2 * s + 1), Math.min(img.height - y0, 2 * s + 1)).data;
    let rs = 0, gs = 0, bs = 0, n = 0;
    for (let p = 0; p < d.length; p += 4) {
      rs += d[p];
      gs += d[p + 1];
      bs += d[p + 2];
      n++;
    }
    setBase(gainsFromGray(rs / n, gs / n, bs / n));
    setTemp(0);
    setTint(0);
    setPicking(false);
    full.setStatus(t('ctl.wb.picked'));
  };
  const reset = () => {
    setBase([1, 1, 1]);
    setTemp(0);
    setTint(0);
    setSaturation(0);
  };

  const panel = (
    <>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={auto} className="btn-rule min-h-[44px] text-[14px]">
          <Wand2 className="w-4 h-4" aria-hidden="true" />
          {t('ctl.wb.auto')}
        </button>
        <button type="button" onClick={() => setPicking((p) => !p)} aria-pressed={picking} className={`btn-rule min-h-[44px] text-[14px] ${picking ? 'seg-on' : ''}`}>
          <Pipette className="w-4 h-4" aria-hidden="true" />
          {t('ctl.wb.pick')}
        </button>
      </div>
      <p className="text-[13px] text-graphite -mt-1 leading-relaxed">{picking ? t('ctl.wb.pickHint') : t('ctl.wb.autoNote')}</p>
      <RangeField id="wb-temp" label={t('ctl.wb.temperature')} value={temp} min={-100} max={100} onChange={setTemp} />
      <RangeField id="wb-tint" label={t('ctl.wb.tint')} value={tint} min={-100} max={100} onChange={setTint} />
      <RangeField id="wb-sat" label={t('ctl.wb.saturation')} value={saturation} min={-100} max={100} onChange={setSaturation} />
      <button type="button" onClick={reset} className="btn-rule min-h-[40px] w-full text-[14px]">{t('ctl.wb.reset')}</button>
    </>
  );
  return (
    <Frame one={one} full={full} icon={Pipette} panel={panel}>
      <div className="space-y-2">
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-3 rounded-xl">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={compare ? t('ctl.photofix.before') : t('ctl.photofix.after')}
            onPointerDown={pickAt}
            className={`block max-h-[60vh] max-w-full object-contain ${picking ? 'cursor-crosshair' : ''}`}
          />
        </div>
        <button
          type="button"
          onPointerDown={() => setCompare(true)}
          onPointerUp={() => setCompare(false)}
          onPointerLeave={() => setCompare(false)}
          onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && setCompare(true)}
          onKeyUp={() => setCompare(false)}
          className="btn-rule min-h-[40px] text-[14px]"
        >
          {t('ctl.photofix.holdCompare')}
        </button>
      </div>
    </Frame>
  );
}
