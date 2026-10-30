import React, { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { useT } from '../../shared/I18nContext';
import type { StringKey } from '../../../i18n/strings';
import { canvasToBlob, downloadBlob, stepDown } from '../../../lib/canvas/engine';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { VISION_TYPES, simulateVision, type VisionType } from '../../../lib/canvas/colorBlind';
import { outputFileName } from '../../../lib/storage/fileNames';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
const PREVIEW_MAX = 1400;

const LABEL: Record<VisionType, StringKey> = {
  deuteranomaly: 'ctl.cb.deuteranomaly',
  deuteranopia: 'ctl.cb.deuteranopia',
  protanomaly: 'ctl.cb.protanomaly',
  protanopia: 'ctl.cb.protanopia',
  tritanomaly: 'ctl.cb.tritanomaly',
  tritanopia: 'ctl.cb.tritanopia',
  achromatopsia: 'ctl.cb.achromatopsia',
};

function draw(canvas: HTMLCanvasElement, img: HTMLImageElement, w: number, h: number, type: VisionType | null) {
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  const down = stepDown(img, 0, 0, iw, ih, w, h);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(down.source, down.sx, down.sy, down.sw, down.sh, 0, 0, w, h);
  if (type) {
    const pixels = ctx.getImageData(0, 0, w, h);
    simulateVision(pixels.data, type);
    ctx.putImageData(pixels, 0, 0);
  }
}

export function ColorBlindWorkspace() {
  const t = useT();
  const [src, setSrc] = useState<LoadedImage | null>(null);
  const [type, setType] = useState<VisionType>('deuteranomaly');
  const [showOriginal, setShowOriginal] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const image = await loadImageFile(file);
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return image;
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  useEffect(() => {
    if (!src || !canvasRef.current) return;
    const scale = Math.min(1, PREVIEW_MAX / Math.max(src.width, src.height));
    draw(canvasRef.current, src.img, Math.round(src.width * scale), Math.round(src.height * scale), showOriginal ? null : type);
    setStatus('');
  }, [src, type, showOriginal]);

  if (!src) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.cb.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const build = () => {
    const c = document.createElement('canvas');
    draw(c, src.img, src.width, src.height, type);
    return canvasToBlob(c, 'image/png', 1, undefined, { best: true });
  };

  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      const name = outputFileName(src.file.name, type, 'png');
      downloadBlob(await build(), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const panel = (
    <>
      <label htmlFor="cb-type" className="block space-y-1.5">
        <span className="slug block">{t('ctl.cb.type')}</span>
        <select id="cb-type" value={type} onChange={(e) => setType(e.target.value as VisionType)} className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink">
          {VISION_TYPES.map((v) => (
            <option key={v} value={v}>{t(LABEL[v])}</option>
          ))}
        </select>
      </label>
      <div className="space-y-1.5">
        <span className="slug block" id="cb-show">{t('ctl.cb.show')}</span>
        <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="cb-show">
          <button type="button" aria-pressed={!showOriginal} onClick={() => setShowOriginal(false)} className={seg(!showOriginal)}>{t('ctl.cb.simulated')}</button>
          <button type="button" aria-pressed={showOriginal} onClick={() => setShowOriginal(true)} className={seg(showOriginal)}>{t('ctl.cb.original')}</button>
        </div>
      </div>
      <p className="text-[13px] text-graphite leading-relaxed pt-4 border-t border-ink">{t('ctl.cb.note')}</p>
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
        icon={Eye}
        fileLabel={`${src.width} × ${src.height} px · ${src.file.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        busy={busy}
        status={status}
        error={error}
        ticketAction={<FullSizeView label={t(LABEL[type])} load={async () => blobImage(await build())} original={() => urlImage(src.url, src.file.size)} />}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-4 sm:p-8 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
            <canvas ref={canvasRef} role="img" aria-label={showOriginal ? t('ctl.cb.original') : t(LABEL[type])} className="block max-w-full max-h-[60vh] w-auto h-auto" />
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
