import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { toolHref } from '../../shared/ToolSearch';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { exportableFormat, formatExtension, type OutputFormat } from '../../../lib/canvas/outputFormat';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage, type OneImage } from './useOneImage';
import { canUpscale, cancelUpscale, upscale, UpscaleError } from '../../../lib/ai/upscaler';
import { allowedScales, planTiles } from '../../../lib/ai/upscaleTiles';
import assets from '../../../lib/ai/modelAssets.json';

type Scale = 2 | 4;
// The part shown at 100% in the comparison, in output pixels
const SPOT_W = 320, SPOT_H = 240;
const { tile: TILE, margin: MARGIN } = assets.upscaler;

const seg = (on: boolean) => `min-h-[44px] px-2 text-[15px] font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${on ? 'seg-on' : 'seg-off'}`;
const toCanvas = (img: ImageData) => {
  const c = document.createElement('canvas');
  c.width = img.width;
  c.height = img.height;
  c.getContext('2d')!.putImageData(img, 0, 0);
  return c;
};

/** Runs upscaler jobs one after another: a spot preview never cancels the full enlargement, or the other way round */
function useSerial() {
  const chain = useRef<Promise<unknown>>(Promise.resolve());
  // The same function every render: the spot preview's effect depends on it
  return useCallback(function serial<T>(job: () => Promise<T>): Promise<T> {
    const run = chain.current.then(job, job);
    chain.current = run.catch(() => {});
    return run;
  }, []);
}

/**
 * The whole photo to choose a spot, and that spot at 100% of the enlarged size: ordinary enlarging beside the AI's.
 */
function SpotCompare({ img, scale, serial, onPreviewed, onError }: { img: OneImage; scale: Scale; serial: ReturnType<typeof useSerial>; onPreviewed: () => void; onError: (err: unknown) => void }) {
  const t = useT();
  const overRef = useRef<HTMLCanvasElement>(null);
  const plainRef = useRef<HTMLCanvasElement>(null);
  const aiRef = useRef<HTMLCanvasElement>(null);
  const [center, setCenter] = useState({ x: 0.5, y: 0.4 });
  const [busy, setBusy] = useState(false);
  // The spot in the photo's own pixels
  const cw = Math.min(img.width, Math.round(SPOT_W / scale));
  const ch = Math.min(img.height, Math.round(SPOT_H / scale));
  const crop = useMemo(() => {
    const x = Math.round(Math.max(0, Math.min(img.width - cw, center.x * img.width - cw / 2)));
    const y = Math.round(Math.max(0, Math.min(img.height - ch, center.y * img.height - ch / 2)));
    return { x, y };
  }, [center, img, cw, ch]);

  useEffect(() => {
    const c = overRef.current;
    if (!c) return;
    const s = Math.min(1, 640 / Math.max(img.width, img.height));
    c.width = Math.max(1, Math.round(img.width * s));
    c.height = Math.max(1, Math.round(img.height * s));
    const ctx = c.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img.canvas, 0, 0, c.width, c.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.strokeRect(crop.x * s - 1, crop.y * s - 1, cw * s + 2, ch * s + 2);
    ctx.strokeStyle = '#e2007a';
    ctx.strokeRect(crop.x * s, crop.y * s, cw * s, ch * s);
  }, [img, crop, cw, ch]);

  // Ordinary enlarging right away; the AI's version once the upscaler gets to it (only the latest spot is run)
  const latest = useRef(0);
  useEffect(() => {
    const p = plainRef.current, a = aiRef.current;
    if (!p || !a) return;
    for (const c of [p, a]) {
      c.width = cw * scale;
      c.height = ch * scale;
    }
    const pctx = p.getContext('2d')!;
    pctx.imageSmoothingEnabled = true;
    pctx.imageSmoothingQuality = 'high';
    pctx.drawImage(img.canvas, crop.x, crop.y, cw, ch, 0, 0, cw * scale, ch * scale);
    const ticket = ++latest.current;
    const id = window.setTimeout(() => {
      if (ticket !== latest.current) return;
      setBusy(true);
      // The spot with the margin the model needs around it, so it matches the full-size result
      const mx = Math.max(0, crop.x - MARGIN), my = Math.max(0, crop.y - MARGIN);
      const mw = Math.min(img.width, crop.x + cw + MARGIN) - mx, mh = Math.min(img.height, crop.y + ch + MARGIN) - my;
      const src = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(mx, my, mw, mh);
      serial(async () => {
        if (ticket !== latest.current) return;
        const out = await upscale(src, scale);
        onPreviewed();
        if (ticket !== latest.current) return;
        a.getContext('2d')!.drawImage(toCanvas(out), (crop.x - mx) * scale, (crop.y - my) * scale, cw * scale, ch * scale, 0, 0, cw * scale, ch * scale);
      })
        .catch((err) => !(err instanceof UpscaleError && err.stage === 'cancelled') && onError(err))
        .finally(() => ticket === latest.current && setBusy(false));
    }, 150);
    return () => window.clearTimeout(id);
  }, [img, crop, cw, ch, scale, serial, onPreviewed, onError]);

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
        {(
          [
            [t('ctl.upscale.plain'), plainRef, false],
            [t('ctl.upscale.ai'), aiRef, busy],
          ] as const
        ).map(([label, ref, dim]) => (
          <figure key={label} className="border border-ink rounded-xl bg-paper-bright p-2 space-y-1.5">
            <figcaption className="slug flex justify-between">
              <span>{label}</span>
              <span className="normal-case tracking-normal text-graphite">100%</span>
            </figcaption>
            <div className="overflow-hidden rounded-md flex justify-center">
              <canvas ref={ref} role="img" aria-label={`${label}, 100%`} aria-busy={dim || undefined} className={`block max-w-full ${dim ? 'opacity-60' : ''}`} />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function UpscaleWorkspace() {
  const t = useT();
  const locale = useLocale();
  const one = useOneImage();
  const img = one.img;
  const [supported, setSupported] = useState<boolean | null>(null);
  const [scale, setScale] = useState<Scale>(4);
  const [progress, setProgress] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  // Milliseconds per pixel, from one full-size tile timed after the first preview (small preview spots cost more per
  // pixel, and the first one includes loading the model, so they would overstate the time several times over)
  const [msPerPixel, setMsPerPixel] = useState<number | null>(null);
  const [previewed, setPreviewed] = useState(false);
  // The running enlargement: its own pace gives the best estimate once a few tiles are done
  const [running, setRunning] = useState<{ done: number; total: number; ms: number } | null>(null);
  const cache = useRef<{ key: string; canvas: HTMLCanvasElement } | null>(null);
  const serial = useSerial();

  useEffect(() => {
    canUpscale().then(setSupported);
  }, []);

  const scales = img ? allowedScales(img.width, img.height) : [];
  // A new photo starts at the largest enlargement it allows
  useEffect(() => {
    if (!img) return;
    const s = allowedScales(img.width, img.height);
    if (s.length) setScale(s[s.length - 1]);
    setStatus('');
    setMsPerPixel(null);
    setPreviewed(false);
  }, [img]);

  // Time one full-size tile once the model is loaded and warm (after the first preview), for the estimate
  useEffect(() => {
    if (!img || !previewed || msPerPixel !== null) return;
    const w = Math.min(TILE, img.width), h = Math.min(TILE, img.height);
    const src = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, w, h);
    // Twice: the first run of a new tile size also sets up the graphics card for it
    serial(async () => {
      let best = Infinity;
      for (let k = 0; k < 2; k++) {
        const start = performance.now();
        await upscale(src, 2);
        best = Math.min(best, performance.now() - start);
      }
      setMsPerPixel(best / (w * h));
    }).catch(() => {});
  }, [img, previewed, msPerPixel, serial]);

  const type: OutputFormat = img ? exportableFormat(img.file.type) : 'image/png';
  const name = img ? `${img.file.name.replace(/\.[^.]+$/, '')}-upscaled-${scale}x.${formatExtension(type)}` : '';

  const showError = (err: unknown) => {
    if (err instanceof UpscaleError && err.stage === 'cancelled') return;
    one.setError(err instanceof UpscaleError && err.stage === 'download' ? t('ctl.upscale.errDownload') : t('ctl.upscale.errDevice'));
  };
  const onPreviewed = useMemo(() => () => setPreviewed(true), []);
  const onSpotError = useMemo(() => (err: unknown) => showError(err), []); // eslint-disable-line react-hooks/exhaustive-deps

  const render = async (): Promise<HTMLCanvasElement> => {
    const key = `${img!.url}:${scale}`;
    if (cache.current?.key === key) return cache.current.canvas;
    const src = img!.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img!.width, img!.height);
    setProgress(0);
    try {
      const out = await serial(() =>
        upscale(src, scale, (p) => {
          setProgress(p.done / p.total);
          setRunning(p);
        })
      );
      const canvas = toCanvas(out);
      cache.current = { key, canvas };
      return canvas;
    } finally {
      setProgress(null);
      setRunning(null);
    }
  };
  const encode = (c: HTMLCanvasElement) => canvasToBlob(c, type, 0.95, undefined, forDownload(type));
  const download = async () => {
    one.setError(null);
    setStatus('');
    try {
      downloadBlob(await encode(await render()), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      if (err instanceof UpscaleError) showError(err);
      else one.setError(t('ws.errExport'));
    }
  };

  if (!img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.upscale.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const outW = img.width * scale, outH = img.height * scale;
  const tiles = planTiles(img.width, img.height, TILE - 2 * MARGIN, MARGIN);
  const windowPixels = tiles.reduce((n, tl) => n + tl.ww * tl.wh, 0);
  const estimate =
    running && running.done >= 2
      ? (running.ms / running.done) * running.total / 1000
      : msPerPixel !== null
        ? (windowPixels * msPerPixel) / 1000
        : null;
  const canRun = supported === true && scales.includes(scale);
  const megapixels = (img.width * img.height) / 1e6;

  const panel = (
    <>
      {supported === false && (
        <p role="alert" className="text-[15px] text-ink leading-relaxed border border-ink rounded-lg p-3 bg-paper-bright">
          {t('ctl.upscale.unsupported')}{' '}
          <a className="underline" href={toolHref(locale, 'resize-image')}>{t('ctl.upscale.useResize')}</a>
        </p>
      )}
      {scales.length === 0 ? (
        <p role="alert" className="text-[15px] text-ink leading-relaxed">
          {t('ctl.upscale.tooLarge', { mp: new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(megapixels) })}{' '}
          <a className="underline" href={toolHref(locale, 'resize-image')}>{t('ctl.upscale.useResize')}</a>
        </p>
      ) : (
        <>
          <div className="space-y-2">
            <span className="slug block" id="up-scale">{t('ctl.upscale.scale')}</span>
            <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="up-scale">
              {([2, 4] as const).map((s) => (
                <button key={s} type="button" aria-pressed={scale === s} disabled={!scales.includes(s) || progress !== null} onClick={() => setScale(s)} className={seg(scale === s)}>
                  {s}×
                </button>
              ))}
            </div>
            {!scales.includes(4) && <p className="text-[13px] text-graphite">{t('ctl.upscale.only2x')}</p>}
          </div>
          <p className="text-[15px] text-ink">{t('ctl.upscale.result', { w: outW, h: outH })}</p>
          {supported && (
            <p className="text-[13px] text-graphite leading-relaxed" aria-live="polite">
              {estimate === null
                ? t('ctl.upscale.timeUnknown')
                : estimate < 120
                  ? t('ctl.upscale.estimateSeconds', { seconds: estimate < 30 ? Math.max(1, Math.round(estimate)) : Math.round(estimate / 5) * 5 })
                  : t('ctl.upscale.estimateMinutes', { minutes: Math.round(estimate / 60) })}
            </p>
          )}
          {progress !== null && (
            <button type="button" onClick={() => cancelUpscale()} className="btn-rule min-h-[40px] w-full text-[14px]">
              <X className="w-4 h-4" aria-hidden="true" />
              {t('ctl.bulk.cancel')}
            </button>
          )}
        </>
      )}
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.upscale.note')}</p>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Maximize2}
        fileLabel={`${img.width} × ${img.height} px · ${img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={canRun ? <FullSizeView label={name} transparent={type === 'image/png'} load={async () => blobImage(await encode(await render()))} original={() => urlImage(img.url)} /> : undefined}
        panel={panel}
        actionLabel={t('ws.download', { format: formatExtension(type).toUpperCase() })}
        actionDisabled={!canRun}
        onAction={download}
        busy={progress !== null}
        busyLabel={progress !== null ? t('ctl.upscale.working', { percent: Math.round(progress * 100) }) : undefined}
        status={status}
        error={one.error}
      >
        {canRun ? (
          <SpotCompare img={img} scale={scale} serial={serial} onPreviewed={onPreviewed} onError={onSpotError} />
        ) : (
          <div className="bg-paper-bright border border-ink rounded-xl p-3 flex justify-center">
            <img src={img.url} alt="" className="block max-w-full max-h-[60vh] object-contain" />
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}
