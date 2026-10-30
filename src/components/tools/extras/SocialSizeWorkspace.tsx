import React, { useEffect, useRef, useState } from 'react';
import { Share2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { FullSizeView, blobImage, formatKB, urlImage } from '../../shared/MediaViewer';
import { useT } from '../../shared/I18nContext';
import type { StringKey } from '../../../i18n/strings';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { searchQuality } from '../../../lib/canvas/targetSize';
import { outputFileName } from '../../../lib/storage/fileNames';
import { ALL_SOCIAL_PRESETS, SOCIAL_PRESETS, placeImage, renderSocial, type FitMode, type SocialPresetId } from '../../../lib/canvas/socialSizes';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
const PREVIEW_MAX = 1000;
type SaveFormat = 'image/jpeg' | 'image/png' | 'image/webp';
const FORMATS: { mime: SaveFormat; label: string; ext: string }[] = [
  { mime: 'image/jpeg', label: 'JPG', ext: 'jpg' },
  { mime: 'image/png', label: 'PNG', ext: 'png' },
  { mime: 'image/webp', label: 'WebP', ext: 'webp' },
];

const PRESET_LABEL: Record<SocialPresetId, StringKey> = {
  'ig-square': 'ctl.social.p.igSquare',
  'ig-portrait': 'ctl.social.p.igPortrait',
  'ig-landscape': 'ctl.social.p.igLandscape',
  story: 'ctl.social.p.story',
  'yt-thumb': 'ctl.social.p.ytThumb',
  'yt-banner': 'ctl.social.p.ytBanner',
  'fb-cover': 'ctl.social.p.fbCover',
  'fb-post': 'ctl.social.p.fbPost',
  'li-banner': 'ctl.social.p.liBanner',
  'li-post': 'ctl.social.p.liPost',
  pin: 'ctl.social.p.pin',
  og: 'ctl.social.p.og',
  'x-header': 'ctl.social.p.xHeader',
  'x-post': 'ctl.social.p.xPost',
};

/** One editor for every network's sizes; each tool page offers its own short list */
export function SocialSizeWorkspace({ presets = ALL_SOCIAL_PRESETS }: { presets?: SocialPresetId[] }) {
  const t = useT();
  const [src, setSrc] = useState<LoadedImage | null>(null);
  const [presetId, setPresetId] = useState<SocialPresetId>(presets[0]);
  const [mode, setMode] = useState<FitMode>('fill');
  const [zoom, setZoom] = useState(100);
  const [fx, setFx] = useState(50);
  const [fy, setFy] = useState(50);
  const [bg, setBg] = useState<'blur' | 'color'>('blur');
  const [color, setColor] = useState('#ffffff');
  const [guides, setGuides] = useState(true);
  const [format, setFormat] = useState<SaveFormat>('image/jpeg');
  const [quality, setQuality] = useState(90);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drag = useRef<{ x: number; y: number; fx: number; fy: number } | null>(null);

  const preset = SOCIAL_PRESETS[presetId];
  const { width: W, height: H } = preset;
  const options = { mode, zoom: zoom / 100, fx: fx / 100, fy: fy / 100, background: bg === 'blur' ? 'blur' : color };

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const image = await loadImageFile(file);
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return image;
      });
      setZoom(100);
      setFx(50);
      setFy(50);
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  // The preview is a smaller copy; guides are drawn over it in the page and never reach the saved picture
  useEffect(() => {
    if (!src || !canvasRef.current) return;
    const scale = Math.min(1, PREVIEW_MAX / Math.max(W, H));
    renderSocial(canvasRef.current, src.img, Math.round(W * scale), Math.round(H * scale), options);
    setStatus('');
    // options is rebuilt from these values every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, W, H, mode, zoom, fx, fy, bg, color]);

  if (!src) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.social.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const placed = placeImage(src.width, src.height, W, H, mode, options.zoom, options.fx, options.fy);
  // Being enlarged by more than a little makes a photo look soft
  const soft = placed.w / src.width > 1.15;
  const fmt = FORMATS.find((f) => f.mime === format)!;

  /** The saved file: full size; for a network with an upload limit, the best quality that fits under it */
  const build = async (): Promise<Blob> => {
    const c = document.createElement('canvas');
    renderSocial(c, src.img, W, H, options);
    const encode = (q: number) => canvasToBlob(c, format, q, undefined, { best: true });
    if (!preset.maxBytes || format === 'image/png') return encode(quality / 100);
    const { fit, smallest } = await searchQuality(encode, preset.maxBytes, { max: quality / 100 });
    return (fit ?? smallest).blob;
  };

  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      const blob = await build();
      const name = outputFileName(src.file.name, `${W}x${H}`, fmt.ext);
      downloadBlob(blob, name);
      setStatus(t('ctl.social.saved', { name, size: formatKB(blob.size) }));
      if (preset.maxBytes && blob.size > preset.maxBytes) setError(t('ctl.social.overLimit', { limit: formatKB(preset.maxBytes) }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  // Dragging moves the picture by the same distance on screen, whatever the preview's size
  const onPointerDown = (e: React.PointerEvent) => {
    if (!e.isPrimary) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, fx, fy };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || !e.isPrimary || !canvasRef.current) return;
    const toOutput = W / canvasRef.current.getBoundingClientRect().width;
    const spareX = W - placed.w;
    const spareY = H - placed.h;
    if (Math.abs(spareX) > 0.5) setFx(Math.max(0, Math.min(100, drag.current.fx + (((e.clientX - drag.current.x) * toOutput) / spareX) * 100)));
    if (Math.abs(spareY) > 0.5) setFy(Math.max(0, Math.min(100, drag.current.fy + (((e.clientY - drag.current.y) * toOutput) / spareY) * 100)));
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const slider = (id: string, label: string, value: number, set: (v: number) => void, min: number, max: number, unit = '%') => (
    <label htmlFor={id} className="block space-y-1.5">
      <span className="flex items-center justify-between">
        <span className="slug">{label}</span>
        <span className="font-semibold text-ink" data-measure>{Math.round(value)}{unit}</span>
      </span>
      <input id={id} type="range" min={min} max={max} value={Math.round(value)} onChange={(e) => set(parseInt(e.target.value, 10))} className="w-full" />
    </label>
  );

  const panel = (
    <>
      {presets.length > 1 && (
        <label htmlFor="social-size" className="block space-y-1.5">
          <span className="slug block">{t('ctl.social.size')}</span>
          <select id="social-size" value={presetId} onChange={(e) => setPresetId(e.target.value as SocialPresetId)} className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink">
            {presets.map((id) => (
              <option key={id} value={id}>
                {t(PRESET_LABEL[id])} ({SOCIAL_PRESETS[id].width} × {SOCIAL_PRESETS[id].height})
              </option>
            ))}
          </select>
        </label>
      )}

      <div className="space-y-1.5">
        <span className="slug block" id="social-fit">{t('ctl.social.fit')}</span>
        <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="social-fit">
          <button type="button" aria-pressed={mode === 'fill'} onClick={() => setMode('fill')} className={seg(mode === 'fill')}>{t('ctl.social.fill')}</button>
          <button type="button" aria-pressed={mode === 'fit'} onClick={() => setMode('fit')} className={seg(mode === 'fit')}>{t('ctl.social.whole')}</button>
        </div>
      </div>

      {mode === 'fit' && (
        <div className="space-y-1.5">
          <span className="slug block" id="social-bg">{t('ctl.social.background')}</span>
          <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="social-bg">
            <button type="button" aria-pressed={bg === 'blur'} onClick={() => setBg('blur')} className={seg(bg === 'blur')}>{t('ctl.social.bgBlur')}</button>
            <button type="button" aria-pressed={bg === 'color'} onClick={() => setBg('color')} className={seg(bg === 'color')}>{t('ctl.social.bgColor')}</button>
          </div>
          {bg === 'color' && (
            <label className="flex items-center justify-between gap-3 pt-1 text-[15px] text-ink">
              <span>{t('ctl.social.pickColor')}</span>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-9 h-9 border border-ink bg-transparent cursor-pointer" />
            </label>
          )}
        </div>
      )}

      <div className="space-y-3 pt-4 border-t border-ink">
        {slider('social-zoom', t('ctl.social.zoom'), zoom, setZoom, 100, 400)}
        {slider('social-x', t('ctl.social.posX'), fx, setFx, 0, 100)}
        {slider('social-y', t('ctl.social.posY'), fy, setFy, 0, 100)}
      </div>

      {preset.safe && (
        <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
          <input type="checkbox" checked={guides} onChange={(e) => setGuides(e.target.checked)} className="w-5 h-5" />
          {t('ctl.social.guides')}
        </label>
      )}

      <div className="space-y-1.5 pt-4 border-t border-ink">
        <span className="slug block" id="social-format">{t('ctl.social.format')}</span>
        <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="social-format">
          {FORMATS.map((f) => (
            <button key={f.mime} type="button" aria-pressed={format === f.mime} onClick={() => setFormat(f.mime)} className={seg(format === f.mime)}>{f.label}</button>
          ))}
        </div>
      </div>
      {format !== 'image/png' && slider('social-quality', t('ctl.social.quality'), quality, setQuality, 40, 100)}
      {preset.maxBytes && <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.social.limit', { limit: formatKB(preset.maxBytes) })}</p>}
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
        icon={Share2}
        fileLabel={`${W} × ${H} px · ${t(PRESET_LABEL[presetId])}`}
        fileSlug={t('ws.output')}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: fmt.label })}
        onAction={run}
        busy={busy}
        status={status}
        error={error}
        ticketAction={
          <FullSizeView
            label={`${W} × ${H}`}
            transparent={format !== 'image/jpeg'}
            load={async () => blobImage(await build())}
            original={() => urlImage(src.url, src.file.size)}
          />
        }
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-4 sm:p-8 rounded-xl">
          <div
            className="relative inline-flex max-w-full canvas-checkerboard cursor-move select-none"
            style={{ touchAction: 'pinch-zoom' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <canvas ref={canvasRef} role="img" aria-label={t('ctl.social.previewAlt')} className="block max-w-full max-h-[60vh] w-auto h-auto" />
            {guides && preset.safe && (
              <div
                className="absolute border-2 border-dashed border-white pointer-events-none"
                style={{
                  left: `${(preset.safe.x / W) * 100}%`,
                  top: `${(preset.safe.y / H) * 100}%`,
                  width: `${(preset.safe.w / W) * 100}%`,
                  height: `${(preset.safe.h / H) * 100}%`,
                  boxShadow: '0 0 0 1px rgba(0,0,0,.6), inset 0 0 0 1px rgba(0,0,0,.6)',
                }}
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <p className="text-[14px] text-graphite">{t('ctl.social.dragHint')}{guides && preset.safe ? ` ${t('ctl.social.guideHint')}` : ''}</p>
        {soft && <p className="text-[14px] text-accent-yellow">{t('ctl.social.soft', { width: src.width, height: src.height })}</p>}
      </PdfToolLayout>
    </>
  );
}
