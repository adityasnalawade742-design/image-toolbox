import React, { useEffect, useRef, useState } from 'react';
import { Grip } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { PALETTES, SCREEN_ANGLES, adjust, cmyk, dither, dotRadius, type DitherMethod, type RGB } from '../../../lib/canvas/halftone';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
const PREVIEW_SIDE = 1600;
// Process inks: the colours a press prints with
const INKS: Record<'c' | 'm' | 'y' | 'k', string> = { c: 'rgb(0,174,239)', m: 'rgb(236,0,140)', y: 'rgb(255,242,0)', k: 'rgb(35,31,32)' };

type Effect = 'halftone' | 'dither';
interface Settings {
  effect: Effect;
  color: 'mono' | 'cmyk';
  dots: number;
  angle: number;
  method: DitherMethod;
  palette: string;
  duo: [string, string];
  pixel: number;
  brightness: number;
  contrast: number;
}

const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

/** The effect on a picture, drawn into a new canvas of the same size */
function render(source: HTMLCanvasElement, s: Settings): HTMLCanvasElement {
  const W = source.width, H = source.height;
  const sctx = source.getContext('2d', { willReadFrequently: true })!;
  const rgba = adjust(sctx.getImageData(0, 0, W, H).data, s.brightness, s.contrast);
  const out = document.createElement('canvas');
  out.width = W;
  out.height = H;
  const ctx = out.getContext('2d')!;

  if (s.effect === 'dither') {
    // Dither at a lower resolution for chunky pixels, then enlarge without smoothing
    const p = Math.max(1, s.pixel);
    const w = Math.max(1, Math.round(W / p)), h = Math.max(1, Math.round(H / p));
    const small = document.createElement('canvas');
    small.width = w;
    small.height = h;
    const smctx = small.getContext('2d', { willReadFrequently: true })!;
    const full = document.createElement('canvas');
    full.width = W;
    full.height = H;
    full.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(rgba), W, H), 0, 0);
    smctx.imageSmoothingQuality = 'high';
    smctx.drawImage(full, 0, 0, w, h);
    const palette = s.palette === 'duo' ? [hex(s.duo[0]), hex(s.duo[1])] : PALETTES[s.palette];
    const d = dither(smctx.getImageData(0, 0, w, h).data, w, h, s.method, palette);
    smctx.putImageData(new ImageData(new Uint8ClampedArray(d), w, h), 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, W, H);
    return out;
  }

  // Halftone: one sample per cell, from a copy shrunk so each pixel is a cell's average
  const cell = Math.max(2, Math.max(W, H) / s.dots);
  const sw = Math.max(1, Math.round(W / cell)), sh = Math.max(1, Math.round(H / cell));
  const avg = document.createElement('canvas');
  avg.width = sw;
  avg.height = sh;
  const actx = avg.getContext('2d', { willReadFrequently: true })!;
  const adjusted = document.createElement('canvas');
  adjusted.width = W;
  adjusted.height = H;
  adjusted.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(rgba), W, H), 0, 0);
  actx.imageSmoothingQuality = 'high';
  // Stretch the picture over whole sample pixels: a part-covered edge pixel would mix in white and print a pale rim
  // Transparent areas count as white paper
  actx.fillStyle = '#ffffff';
  actx.fillRect(0, 0, sw, sh);
  actx.drawImage(adjusted, 0, 0, W, H, 0, 0, sw, sh);
  const data = actx.getImageData(0, 0, sw, sh).data;
  const sample = (x: number, y: number): [number, number, number] => {
    const ix = Math.min(sw - 1, Math.max(0, Math.floor((x / W) * sw))), iy = Math.min(sh - 1, Math.max(0, Math.floor((y / H) * sh)));
    const i = (iy * sw + ix) * 4;
    return [data[i], data[i + 1], data[i + 2]];
  };
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  const layers: { angle: number; ink: string; amount: (r: number, g: number, b: number) => number }[] =
    s.color === 'mono'
      ? [{ angle: s.angle, ink: INKS.k, amount: (r, g, b) => 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255 }]
      : (['c', 'm', 'y', 'k'] as const).map((ch, n) => ({ angle: SCREEN_ANGLES[ch], ink: INKS[ch], amount: (r: number, g: number, b: number) => cmyk(r, g, b)[n] }));
  if (s.color === 'cmyk') ctx.globalCompositeOperation = 'multiply';
  const diag = Math.hypot(W, H);
  for (const layer of layers) {
    const a = (layer.angle * Math.PI) / 180;
    const cos = Math.cos(a), sin = Math.sin(a);
    ctx.fillStyle = layer.ink;
    ctx.beginPath();
    // Walk a rotated grid that covers the whole picture
    for (let v = -diag / 2; v < diag / 2; v += cell)
      for (let u = -diag / 2; u < diag / 2; u += cell) {
        const x = W / 2 + u * cos - v * sin, y = H / 2 + u * sin + v * cos;
        if (x < -cell || y < -cell || x > W + cell || y > H + cell) continue;
        const r = dotRadius(layer.amount(...sample(x, y)), cell);
        if (r < 0.3) continue;
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, Math.PI * 2);
      }
    ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  return out;
}

export function HalftoneWorkspace() {
  const t = useT();
  const [src, setSrc] = useState<{ name: string; url: string; full: HTMLCanvasElement; preview: HTMLCanvasElement; scale: number } | null>(null);
  const [s, setS] = useState<Settings>({ effect: 'halftone', color: 'mono', dots: 120, angle: 45, method: 'floyd', palette: 'bw', duo: ['#1b2a4a', '#f4efe4'], pixel: 2, brightness: 0, contrast: 0 });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const set = (patch: Partial<Settings>) => setS((prev) => ({ ...prev, ...patch }));

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const img = await loadImageFile(file);
      const fit = fitWithinPixels(img.width, img.height);
      const full = document.createElement('canvas');
      full.width = fit.width;
      full.height = fit.height;
      full.getContext('2d')!.drawImage(img.img, 0, 0, fit.width, fit.height);
      const scale = Math.min(1, PREVIEW_SIDE / Math.max(fit.width, fit.height));
      const preview = document.createElement('canvas');
      preview.width = Math.max(1, Math.round(fit.width * scale));
      preview.height = Math.max(1, Math.round(fit.height * scale));
      const pctx = preview.getContext('2d')!;
      pctx.imageSmoothingQuality = 'high';
      pctx.drawImage(full, 0, 0, preview.width, preview.height);
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return { name: file.name, url: img.url, full, preview, scale };
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  // The preview is drawn small; dither pixels are scaled with it so it looks like the full-size result
  const previewSettings = (x: Settings, scale: number): Settings => ({ ...x, pixel: Math.max(1, Math.round(x.pixel * scale)) });

  useEffect(() => {
    if (!src || !canvasRef.current) return;
    const id = window.setTimeout(() => {
      const out = render(src.preview, previewSettings(s, src.scale));
      const c = canvasRef.current!;
      c.width = out.width;
      c.height = out.height;
      c.getContext('2d')!.drawImage(out, 0, 0);
    }, 80);
    return () => window.clearTimeout(id);
  }, [src, s]);

  const build = async () => canvasToBlob(render(src!.full, s), 'image/png', 1, undefined, forDownload('image/png'));
  const fileName = () => `${src!.name.replace(/\.[^.]+$/, '')}-${s.effect}.png`;

  const run = async () => {
    if (!src) return;
    setBusy(true);
    setError(null);
    try {
      const blob = await build();
      downloadBlob(blob, fileName());
      setStatus(t('ctl.pdf.done', { name: fileName() }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  if (!src) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.halftone.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const panel = (
    <>
      <Segmented
        label={t('ctl.halftone.effect')}
        value={s.effect}
        options={[
          { value: 'halftone', label: t('ctl.halftone.halftone') },
          { value: 'dither', label: t('ctl.halftone.dither') },
        ]}
        onChange={(v) => set({ effect: v })}
      />
      {s.effect === 'halftone' ? (
        <>
          <Segmented
            label={t('ctl.halftone.color')}
            value={s.color}
            options={[
              { value: 'mono', label: t('ctl.halftone.mono') },
              { value: 'cmyk', label: t('ctl.halftone.cmyk') },
            ]}
            onChange={(v) => set({ color: v })}
          />
          <RangeField id="ht-dots" label={t('ctl.halftone.dots')} value={s.dots} min={20} max={400} step={5} onChange={(v) => set({ dots: v })} />
          {s.color === 'mono' && <RangeField id="ht-angle" label={t('ctl.halftone.angle')} value={s.angle} min={0} max={90} unit="°" onChange={(v) => set({ angle: v })} />}
        </>
      ) : (
        <>
          <Segmented
            label={t('ctl.halftone.method')}
            value={s.method}
            cols={2}
            options={[
              { value: 'floyd', label: 'Floyd–Steinberg' },
              { value: 'atkinson', label: 'Atkinson' },
              { value: 'bayer4', label: t('ctl.halftone.ordered') },
              { value: 'none', label: t('ctl.halftone.noDither') },
            ]}
            onChange={(v) => set({ method: v })}
          />
          <Segmented
            label={t('ctl.halftone.palette')}
            value={s.palette}
            cols={3}
            options={[
              { value: 'bw', label: t('ctl.halftone.palBw') },
              { value: 'gray4', label: t('ctl.halftone.palGray') },
              { value: 'gameboy', label: 'Game Boy' },
              { value: 'cga', label: 'CGA' },
              { value: 'newsprint', label: t('ctl.halftone.palNews') },
              { value: 'duo', label: t('ctl.halftone.palDuo') },
            ]}
            onChange={(v) => set({ palette: v })}
          />
          {s.palette === 'duo' && (
            <div className="flex items-center gap-4 text-[15px]">
              {[0, 1].map((n) => (
                <label key={n} className="flex items-center gap-2">
                  <input type="color" value={s.duo[n]} onChange={(e) => set({ duo: (n === 0 ? [e.target.value, s.duo[1]] : [s.duo[0], e.target.value]) as [string, string] })} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />
                  {t(n === 0 ? 'ctl.halftone.dark' : 'ctl.halftone.light')}
                </label>
              ))}
            </div>
          )}
          <RangeField id="ht-pixel" label={t('ctl.halftone.pixel')} value={s.pixel} min={1} max={12} unit=" px" onChange={(v) => set({ pixel: v })} />
        </>
      )}
      <RangeField id="ht-bright" label={t('ctl.halftone.brightness')} value={s.brightness} min={-100} max={100} onChange={(v) => set({ brightness: v })} />
      <RangeField id="ht-contrast" label={t('ctl.halftone.contrast')} value={s.contrast} min={-100} max={100} onChange={(v) => set({ contrast: v })} />
    </>
  );

  return (
    <>
      <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { if (e.target.files?.[0]) load(e.target.files[0]); e.target.value = ''; }} />
      <PdfToolLayout
        icon={Grip}
        fileLabel={`${src.full.width} × ${src.full.height} px · ${src.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={fileName()} load={async () => blobImage(await build())} original={() => urlImage(src.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        busy={busy}
        status={status}
        error={error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
          <canvas ref={canvasRef} role="img" aria-label={t('ctl.halftone.result')} className="block max-h-[60vh] max-w-full object-contain" />
        </div>
      </PdfToolLayout>
    </>
  );
}
