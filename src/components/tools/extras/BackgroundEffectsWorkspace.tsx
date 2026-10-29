import React, { useEffect, useRef, useState } from 'react';
import { Aperture, Wallpaper } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { RemovalProgressBar, activeDownload } from '../../shared/RemovalProgressBar';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { blurBackground } from '../../../lib/canvas/backgroundBlur';
import { canvasToBlob, downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { removeBackground, preloadBackgroundRemoval, type RemovalProgress } from '../../../lib/ai/backgroundRemover';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
// The blurred background is computed at this size and scaled up: blurred detail doesn't need full resolution
const BLUR_WORK_SIDE = 1024;
const SWATCHES = ['#ffffff', '#f1f1ec', '#141414', '#dff2f9', '#2f6fb5', '#e1f1e6', '#fbe3ef'];

type Mode = 'blur' | 'replace';
type Fill = { kind: 'color'; color: string } | { kind: 'image'; img: HTMLImageElement; name: string };

interface Source {
  name: string;
  /** The uploaded file, shown until the result is ready */
  previewUrl: string;
  /** The photo (capped at the canvas limit) */
  photo: HTMLCanvasElement;
  /** The subject cut out, background transparent, same size */
  subject: HTMLCanvasElement | null;
  /** Subject alpha at the blur working size */
  smallAlpha: Uint8ClampedArray | null;
  small: { w: number; h: number; rgba: Uint8ClampedArray };
}

const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

/** Blur Background and Change Background: the background model finds the subject, then the background is redone */
export function BackgroundEffectsWorkspace({ mode }: { mode: Mode }) {
  const t = useT();
  const [src, setSrc] = useState<Source | null>(null);
  const [progress, setProgress] = useState<RemovalProgress | null>(null);
  const [working, setWorking] = useState(false);
  const [strength, setStrength] = useState(50);
  const [fill, setFill] = useState<Fill>({ kind: 'color', color: '#ffffff' });
  const [format, setFormat] = useState<'jpg' | 'png'>('jpg');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [scaledTo, setScaledTo] = useState<{ w: number; h: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const seq = useRef(0);

  const load = async (file: File) => {
    const mySeq = ++seq.current;
    setError(null);
    setStatus('');
    try {
      const image = await loadImageFile(file);
      // Huge phone photos are reduced to what every browser (iOS Safari included) can draw
      const fit = fitWithinPixels(image.width, image.height);
      const photo = document.createElement('canvas');
      photo.width = fit.width;
      photo.height = fit.height;
      photo.getContext('2d')!.drawImage(image.img, 0, 0, fit.width, fit.height);
      setScaledTo(fit.scaled ? { w: fit.width, h: fit.height } : null);

      const s = Math.min(1, BLUR_WORK_SIDE / Math.max(fit.width, fit.height));
      const sw = Math.max(1, Math.round(fit.width * s));
      const sh = Math.max(1, Math.round(fit.height * s));
      const smallCanvas = document.createElement('canvas');
      smallCanvas.width = sw;
      smallCanvas.height = sh;
      const sctx = smallCanvas.getContext('2d', { willReadFrequently: true })!;
      sctx.drawImage(photo, 0, 0, sw, sh);
      const base: Source = { name: file.name, previewUrl: image.url, photo, subject: null, smallAlpha: null, small: { w: sw, h: sh, rgba: sctx.getImageData(0, 0, sw, sh).data } };
      if (mySeq !== seq.current) {
        URL.revokeObjectURL(image.url);
        return;
      }
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.previewUrl);
        return base;
      });

      setWorking(true);
      setProgress({ stage: 'downloading' });
      const cut = await removeBackground(await canvasToBlob(photo, 'image/png'), 'portrait', (p) => mySeq === seq.current && setProgress(p));
      if (mySeq !== seq.current) return;
      const subject = document.createElement('canvas');
      subject.width = cut.width;
      subject.height = cut.height;
      subject.getContext('2d')!.putImageData(cut, 0, 0);
      // The subject's alpha at the working size, for the blur
      sctx.clearRect(0, 0, sw, sh);
      sctx.drawImage(subject, 0, 0, sw, sh);
      const sd = sctx.getImageData(0, 0, sw, sh).data;
      const smallAlpha = new Uint8ClampedArray(sw * sh);
      for (let i = 0; i < smallAlpha.length; i++) smallAlpha[i] = sd[i * 4 + 3];
      setSrc({ ...base, subject, smallAlpha });
    } catch (err: any) {
      if (mySeq === seq.current) setError(err?.message ? t('ctl.bgfx.failed', { message: err.message }) : t('ws.errDecode'));
    } finally {
      if (mySeq === seq.current) {
        setWorking(false);
        setProgress(null);
      }
    }
  };
  useImageIntake(load);

  // Draw the result for the current settings
  const paint = () => {
    if (!src?.subject || !canvasRef.current) return;
    {
      const canvas = canvasRef.current;
      const { photo, subject, small, smallAlpha } = src;
      canvas.width = photo.width;
      canvas.height = photo.height;
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mode === 'blur') {
        const radius = (strength / 100) * Math.min(small.w, small.h) * 0.06;
        const blurred = blurBackground(small.rgba, smallAlpha!, small.w, small.h, Math.max(1, radius));
        const layer = document.createElement('canvas');
        layer.width = small.w;
        layer.height = small.h;
        layer.getContext('2d')!.putImageData(new ImageData(blurred, small.w, small.h), 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(layer, 0, 0, canvas.width, canvas.height);
      } else if (fill.kind === 'color') {
        ctx.fillStyle = fill.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Cover: fill the frame, cropping the background image from its centre
        const s = Math.max(canvas.width / fill.img.naturalWidth, canvas.height / fill.img.naturalHeight);
        const w = fill.img.naturalWidth * s;
        const h = fill.img.naturalHeight * s;
        ctx.drawImage(fill.img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
      }
      ctx.drawImage(subject!, 0, 0);
    }
  };

  // Redraw whenever a setting changes (lightly debounced so the blur slider stays smooth)
  useEffect(() => {
    if (!src?.subject) return;
    const id = window.setTimeout(paint, 60);
    return () => window.clearTimeout(id);
  }, [src, mode, strength, fill]);

  const chooseBackgroundImage = async (file: File) => {
    try {
      const image = await loadImageFile(file);
      setFill({ kind: 'image', img: image.img, name: file.name });
    } catch {
      setError(t('ws.errDecode'));
    }
  };

  if (!src) {
    return (
      <div className="space-y-3">
        <ProofDropZone
          onFiles={(files) => load(files[0])}
          onPick={() => !saveData() && preloadBackgroundRemoval('portrait')}
          accept={ACCEPT}
          hint={t('ctl.bgfx.dropHint')}
        />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const ready = !!src.subject && !working;
  const run = async () => {
    if (!canvasRef.current || !ready) return;
    // Draw now: a quick tap could otherwise beat the debounced redraw and save an empty or outdated canvas
    paint();
    const type = format === 'png' ? 'image/png' : 'image/jpeg';
    const blob = await canvasToBlob(canvasRef.current, type, 0.92);
    const name = `${src.name.replace(/\.[^.]+$/, '')}-${mode === 'blur' ? 'blurred-background' : 'new-background'}.${format}`;
    downloadBlob(blob, name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const download = activeDownload(progress);
  const workingLabel = download
    ? t('ctl.bg.downloadingModelSize', { loaded: formatBytes(download.loaded), total: formatBytes(download.total) })
    : t('ctl.bgfx.working');

  const panel = (
    <>
      {mode === 'blur' ? (
        <RangeField id="bgfx-strength" label={t('ctl.bgfx.strength')} value={strength} min={1} max={100} onChange={setStrength} />
      ) : (
        <div className="space-y-3">
          <span className="slug block" id="bgfx-color">
            {t('ctl.bgfx.background')}
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="bgfx-color">
            {SWATCHES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFill({ kind: 'color', color: c })}
                aria-pressed={fill.kind === 'color' && fill.color === c}
                aria-label={c}
                className={`w-10 h-10 rounded-md border ${fill.kind === 'color' && fill.color === c ? 'border-ink outline outline-2 outline-offset-2 outline-ink' : 'border-pencil'}`}
                style={{ background: c }}
              />
            ))}
            <label className="w-10 h-10 rounded-md border border-ink overflow-hidden cursor-pointer" title={t('ctl.bgfx.pickColor')}>
              <span className="sr-only">{t('ctl.bgfx.pickColor')}</span>
              <input
                type="color"
                value={fill.kind === 'color' ? fill.color : '#ffffff'}
                onChange={(e) => setFill({ kind: 'color', color: e.target.value })}
                className="w-12 h-12 -m-1 cursor-pointer"
              />
            </label>
          </div>
          <button type="button" onClick={() => bgInputRef.current?.click()} className="btn-rule w-full">
            <Wallpaper className="w-4 h-4" aria-hidden="true" />
            <span>{fill.kind === 'image' ? t('ctl.bgfx.imageChosen', { name: fill.name }) : t('ctl.bgfx.useImage')}</span>
          </button>
          <input
            ref={bgInputRef}
            type="file"
            accept={ACCEPT}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) chooseBackgroundImage(e.target.files[0]);
              e.target.value = '';
            }}
          />
        </div>
      )}
      <Segmented
        label={t('ws.saveAs')}
        value={format}
        options={[
          { value: 'jpg', label: 'JPG' },
          { value: 'png', label: 'PNG' },
        ]}
        onChange={setFormat}
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.bgfx.note')}</p>
    </>
  );

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) load(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <PdfToolLayout
        icon={mode === 'blur' ? Aperture : Wallpaper}
        fileLabel={`${src.photo.width} × ${src.photo.height} px · ${src.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        ticketAction={
          ready && (
            <FullSizeView
              label={`${src.name.replace(/\.[^.]+$/, '')}-${mode === 'blur' ? 'blurred-background' : 'new-background'}.${format}`}
              load={async () => {
                paint();
                return blobImage(await canvasToBlob(canvasRef.current!, format === 'png' ? 'image/png' : 'image/jpeg', 0.92));
              }}
              original={() => urlImage(src.previewUrl)}
            />
          )
        }
        panel={panel}
        actionLabel={t('ws.download', { format: format.toUpperCase() })}
        onAction={run}
        actionDisabled={!ready}
        status={status}
        error={error}
      >
        <div className="relative overflow-hidden bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
            {src.subject ? (
              <canvas ref={canvasRef} role="img" aria-label={t('ctl.bgfx.result')} className="block max-h-[55vh] sm:max-h-[540px] max-w-full object-contain" />
            ) : (
              <img src={src.previewUrl} alt="" className="block max-h-[55vh] sm:max-h-[540px] max-w-full object-contain opacity-60" />
            )}
          </div>
          {working && (
            <div className="absolute inset-x-0 bottom-0 bg-paper border-t border-ink px-4 py-3">
              <RemovalProgressBar key={seq.current} progress={progress} mode="portrait" label={workingLabel} />
            </div>
          )}
        </div>
        {scaledTo && <p className="text-[14px] text-graphite" data-measure>{t('ctl.bg.scaledDown', { w: scaledTo.w, h: scaledTo.h })}</p>}
      </PdfToolLayout>
    </>
  );
}
