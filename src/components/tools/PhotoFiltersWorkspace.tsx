import React, { useState, useRef } from 'react';
import { Sliders, RotateCcw, Download, Copy, Check, ChevronsLeftRight, AlertCircle } from 'lucide-react';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';
import { formatBytes, canvasToBlob, downloadBlob, forDownload } from '../../lib/canvas/engine';
import { FullSizeView, blobImage, urlImage } from '../shared/MediaViewer';
import { applyMatrices, canvasFilterWorks, chainMatrices, cssFilter, gainMatrix, gaussianBlur, whiteBalanceGains, type FilterValues } from '../../lib/canvas/filterChain';

interface FilterPreset {
  id: string;
  nameKey: StringKey;
  brightness: number;
  contrast: number;
  saturate: number;
  sepia: number;
  grayscale: number;
  hueRotate: number;
  invert: number;
  blur: number;
  vignette: number;
  /** Extra contrast on top of `contrast` (labelled "Clarity"; it does not sharpen) */
  clarity?: number;
}

const PRESETS: FilterPreset[] = [
  { id: 'normal', nameKey: 'ctl.filters.preset.normal', brightness: 100, contrast: 100, saturate: 100, sepia: 0, grayscale: 0, hueRotate: 0, invert: 0, blur: 0, vignette: 0, clarity: 0 },
  { id: 'cinematic', nameKey: 'ctl.filters.preset.cinematic', brightness: 105, contrast: 125, saturate: 110, sepia: 15, grayscale: 0, hueRotate: 345, invert: 0, blur: 0, vignette: 30, clarity: 15 },
  { id: 'vintage', nameKey: 'ctl.filters.preset.vintage', brightness: 110, contrast: 90, saturate: 75, sepia: 40, grayscale: 0, hueRotate: 15, invert: 0, blur: 0, vignette: 40, clarity: 0 },
  { id: 'cyberpunk', nameKey: 'ctl.filters.preset.cyberpunk', brightness: 115, contrast: 135, saturate: 160, sepia: 0, grayscale: 0, hueRotate: 180, invert: 0, blur: 0, vignette: 25, clarity: 25 },
  { id: 'noir', nameKey: 'ctl.filters.preset.noir', brightness: 95, contrast: 150, saturate: 0, sepia: 0, grayscale: 100, hueRotate: 0, invert: 0, blur: 0, vignette: 50, clarity: 20 },
  { id: 'sunset', nameKey: 'ctl.filters.preset.sunset', brightness: 108, contrast: 115, saturate: 130, sepia: 25, grayscale: 0, hueRotate: 10, invert: 0, blur: 0, vignette: 20, clarity: 10 },
  { id: 'cool', nameKey: 'ctl.filters.preset.cool', brightness: 105, contrast: 95, saturate: 85, sepia: 0, grayscale: 0, hueRotate: 200, invert: 0, blur: 0, vignette: 15, clarity: 5 },
  { id: 'dramatic', nameKey: 'ctl.filters.preset.dramatic', brightness: 110, contrast: 140, saturate: 140, sepia: 0, grayscale: 0, hueRotate: 0, invert: 0, blur: 0, vignette: 35, clarity: 30 },
  { id: 'invert', nameKey: 'ctl.filters.preset.invert', brightness: 100, contrast: 100, saturate: 100, sepia: 0, grayscale: 0, hueRotate: 0, invert: 100, blur: 0, vignette: 0, clarity: 0 },
];

type SaveFormat = 'png' | 'jpeg' | 'webp';
const SAVE_FORMATS: SaveFormat[] = ['png', 'jpeg', 'webp'];
const formatLabel = (f: SaveFormat) => (f === 'jpeg' ? 'JPG' : f.toUpperCase());

// Checked once: Safari draws canvases without ctx.filter, so the filters are applied pixel by pixel there
let nativeFilter: boolean | null = null;
const hasNativeFilter = () => (nativeFilter ??= canvasFilterWorks());

/** The image (drawn at w × h) with its edge pixels stretched outward by `pad`, for blurring without a faded border */
function edgePadded(img: HTMLImageElement, w: number, h: number, pad: number) {
  const c = document.createElement('canvas');
  c.width = w + 2 * pad;
  c.height = h + 2 * pad;
  const x = c.getContext('2d')!;
  const W = img.naturalWidth || w;
  const H = img.naturalHeight || h;
  const sx = W / w;
  const sy = H / h;
  x.drawImage(img, pad, pad, w, h);
  // One-pixel edge strips stretched into the margins, then the corner pixels
  x.drawImage(img, 0, 0, W, sy, pad, 0, w, pad);
  x.drawImage(img, 0, H - sy, W, sy, pad, pad + h, w, pad);
  x.drawImage(img, 0, 0, sx, H, 0, pad, pad, h);
  x.drawImage(img, W - sx, 0, sx, H, pad + w, pad, pad, h);
  x.drawImage(img, 0, 0, sx, sy, 0, 0, pad, pad);
  x.drawImage(img, W - sx, 0, sx, sy, pad + w, 0, pad, pad);
  x.drawImage(img, 0, H - sy, sx, sy, 0, pad + h, pad, pad);
  x.drawImage(img, W - sx, H - sy, sx, sy, pad + w, pad + h, pad, pad);
  return c;
}

function RangeField({
  label,
  value,
  unit,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="flex items-center justify-between gap-3">
        <span className="text-ink">{label}</span>
        <span className="font-semibold text-ink" data-measure>
          {value}
          {unit}
        </span>
      </span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
    </label>
  );
}

export function PhotoFiltersWorkspace() {
  const t = useT();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [activePreset, setActivePreset] = useState<string>('normal');

  // Sliders State
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [saturate, setSaturate] = useState<number>(100);
  const [sepia, setSepia] = useState<number>(0);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [hueRotate, setHueRotate] = useState<number>(0);
  const [invert, setInvert] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [vignette, setVignette] = useState<number>(0);
  const [clarity, setClarity] = useState<number>(0);
  // White balance: −100 cool … +100 warm; −100 green … +100 magenta
  const [warmth, setWarmth] = useState<number>(0);
  const [tint, setTint] = useState<number>(0);
  // How strongly the chosen preset applies, in percent
  const [strength, setStrength] = useState<number>(100);

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);
  const [saveFormat, setSaveFormat] = useState<SaveFormat>('png');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const splitContainerRef = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);
    // Save in the photo's own kind of format: a JPG photo saved as PNG would be several times bigger
    setSaveFormat(/jpe?g|heic|heif|avif/i.test(file.type) ? 'jpeg' : /webp/i.test(file.type) ? 'webp' : 'png');

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  // Images handed off from other tools / the homepage, and Ctrl+V paste
  useImageIntake(handleFileSelect);

  // A preset at `pct` percent strength: each value moves that far from Original toward the preset
  const applyPreset = (preset: FilterPreset, pct = 100) => {
    const n = PRESETS[0];
    const k = pct / 100;
    const at = (from: number, to: number) => Math.round(from + (to - from) * k);
    // Hue turns the short way round (345° is 15° back)
    const dh = ((preset.hueRotate + 180) % 360) - 180;
    setActivePreset(preset.id);
    setStrength(pct);
    setBrightness(at(n.brightness, preset.brightness));
    setContrast(at(n.contrast, preset.contrast));
    setSaturate(at(n.saturate, preset.saturate));
    setSepia(at(n.sepia, preset.sepia));
    setGrayscale(at(n.grayscale, preset.grayscale));
    setHueRotate((((Math.round(dh * k)) % 360) + 360) % 360);
    setInvert(at(n.invert, preset.invert));
    setBlur(at(n.blur, preset.blur));
    setVignette(at(n.vignette, preset.vignette));
    setClarity(at(n.clarity || 0, preset.clarity || 0));
    setWarmth(0);
    setTint(0);
  };

  const handleReset = () => {
    applyPreset(PRESETS[0]);
  };

  // Render processed image to hidden canvas for download or clipboard
  const renderCanvas = (): HTMLCanvasElement => {
    if (!imgElement) throw new Error('No image loaded');
    const canvas = document.createElement('canvas');
    canvas.width = imgElement.naturalWidth || imgElement.width;
    canvas.height = imgElement.naturalHeight || imgElement.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not create canvas context');

    // Clarity is applied as extra contrast
    const effectiveContrast = contrast + Math.round(clarity * 0.35);
    // The preview blurs the image as shown on screen; scale the radius to full size so the download looks the same
    const shownWidth = previewImgRef.current?.clientWidth || splitContainerRef.current?.clientWidth || canvas.width;
    const blurPx = blur * (canvas.width / shownWidth);

    const values: FilterValues = { brightness, contrast: effectiveContrast, saturate, sepia, grayscale, hueRotate, invert };
    const gains = whiteBalanceGains(warmth, tint);
    const balanced = gains.some((g) => g !== 1);
    if (hasNativeFilter()) {
      ctx.filter = cssFilter(values, blurPx);
      if (blurPx >= 0.5) {
        // Blur the photo with its edges extended, so the border doesn't fade into a light frame
        const pad = Math.ceil(blurPx * 3);
        const padded = edgePadded(imgElement, canvas.width, canvas.height, pad);
        ctx.drawImage(padded, -pad, -pad);
        padded.width = padded.height = 0;
      } else {
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      }
      ctx.filter = 'none';
      if (balanced) {
        const px = ctx.getImageData(0, 0, canvas.width, canvas.height);
        applyMatrices(px.data, [gainMatrix(gains)]);
        ctx.putImageData(px, 0, 0);
      }
    } else {
      // The same chain by its spec formulas, then the blur
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      const steps = chainMatrices(values);
      if (balanced) steps.push(gainMatrix(gains));
      if (steps.length || blurPx >= 0.5) {
        const px = ctx.getImageData(0, 0, canvas.width, canvas.height);
        applyMatrices(px.data, steps);
        gaussianBlur(px.data, canvas.width, canvas.height, blurPx);
        ctx.putImageData(px, 0, 0);
      }
    }

    // Vignette: the same geometry as the preview's CSS radial-gradient(circle, transparent X%, black 100%), whose
    // radius reaches the farthest corner
    if (vignette > 0) {
      const radius = Math.hypot(canvas.width / 2, canvas.height / 2);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        radius * (1 - vignette / 100),
        canvas.width / 2,
        canvas.height / 2,
        radius
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, `rgba(0,0,0,${vignette / 100})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  };

  const handleDownload = async (format: SaveFormat = 'png') => {
    const blob = await canvasToBlob(renderCanvas(), `image/${format}`, 0.95, undefined, forDownload(`image/${format}`));
    const base = (selectedFile?.name || 'photo').replace(/\.[^.]+$/, '');
    downloadBlob(blob, `${base}-${activePreset}.${format === 'jpeg' ? 'jpg' : format}`);
  };

  const handleCopyClipboard = async () => {
    setCopyError(false);
    try {
      const canvas = renderCanvas();
      const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png', 1.0));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      setCopyError(true);
    }
  };

  const effectiveContrast = contrast + Math.round(clarity * 0.35);
  // Warmth and tint have no CSS function: the preview uses an SVG colour matrix between the colour steps and the blur
  const [gr, gg, gb] = whiteBalanceGains(warmth, tint);
  const balanced = gr !== 1 || gg !== 1 || gb !== 1;
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${effectiveContrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%)${balanced ? ' url(#pf-white-balance)' : ''} blur(${blur}px)`,
    willChange: 'filter',
  };

  // Pointer tracking for split slider
  const handleSplitPointerMove = (clientX: number) => {
    if (!splitContainerRef.current) return;
    const rect = splitContainerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(Math.round(pct));
  };

  const handleSplitKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 1;
    let next: number | null = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = sliderPos - step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = sliderPos + step;
    else if (e.key === 'PageDown') next = sliderPos - 10;
    else if (e.key === 'PageUp') next = sliderPos + 10;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    if (next === null) return;
    e.preventDefault();
    setSliderPos(Math.max(0, Math.min(100, next)));
  };

  // Any manual slider change leaves the preset
  const adjust = (setter: (v: number) => void) => (v: number) => {
    setter(v);
    setActivePreset('custom');
  };

  const activePresetDef = PRESETS.find((p) => p.id === activePreset);
  const activePresetName = activePresetDef ? t(activePresetDef.nameKey) : t('ctl.filters.custom');
  const downloadLabel = t('ws.download', { format: formatLabel(saveFormat) });
  const sourceExt = selectedFile
    ? (selectedFile.type.replace('image/', '').replace('svg+xml', 'svg').replace('jpeg', 'jpg') || 'image').toUpperCase()
    : '';

  const vignetteOverlay =
    vignette > 0 ? (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, transparent ${100 - vignette}%, rgba(0,0,0,${vignette / 100}) 100%)`,
        }}
      />
    ) : null;

  const loaded = Boolean(selectedFile && imgElement);

  return (
    <div className={`w-full max-w-6xl mx-auto ${loaded ? 'pb-20 lg:pb-0' : ''}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
          e.target.value = '';
        }}
      />

      <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
        <filter id="pf-white-balance" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values={`${gr} 0 0 0 0  0 ${gg} 0 0 0  0 0 ${gb} 0 0  0 0 0 1 0`} />
        </filter>
      </svg>

      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Proof sheet */}
          <div className="min-w-0 space-y-3">
            <div className="bg-paper-bright border border-ink px-6 py-8 sm:px-12 sm:py-10 min-h-[260px] sm:min-h-[420px] flex items-center justify-center rounded-xl">
              {!showComparison ? (
                <div className="relative inline-flex max-w-full max-h-[65vh] canvas-checkerboard crop-marks">
                  <img
                    ref={previewImgRef}
                    src={imgElement.src}
                    alt={t('ctl.filters.previewAlt')}
                    style={filterStyle}
                    className="block max-w-full max-h-[65vh] object-contain"
                  />
                  {vignetteOverlay}
                </div>
              ) : (
                /* Split comparison: drag, tap or use the arrow keys */
                <div
                  ref={splitContainerRef}
                  role="slider"
                  tabIndex={0}
                  aria-label={t('ctl.filters.compareSlider')}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={sliderPos}
                  aria-valuetext={t('ctl.filters.compareValue', { value: sliderPos })}
                  aria-orientation="horizontal"
                  onKeyDown={handleSplitKeyDown}
                  onMouseDown={(e) => handleSplitPointerMove(e.clientX)}
                  onMouseMove={(e) => e.buttons === 1 && handleSplitPointerMove(e.clientX)}
                  onTouchStart={(e) => e.touches[0] && handleSplitPointerMove(e.touches[0].clientX)}
                  onTouchMove={(e) => e.touches[0] && handleSplitPointerMove(e.touches[0].clientX)}
                  className="relative overflow-hidden border border-ink select-none cursor-ew-resize focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  style={{
                    aspectRatio: `${imgElement.naturalWidth} / ${imgElement.naturalHeight}`,
                    // As wide as fits, but never taller than 65% of the screen: the box keeps the photo's shape, so nothing is cut off
                    width: `min(100%, 42rem, calc(65vh * ${imgElement.naturalWidth} / ${imgElement.naturalHeight}))`,
                    // One finger moves the divider; two fingers can still zoom the page
                    touchAction: 'pinch-zoom',
                  }}
                >
                  {/* Before (Original) */}
                  <img
                    src={imgElement.src}
                    alt={t('ctl.filters.originalAlt')}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* After (Filtered) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                  >
                    <img
                      src={imgElement.src}
                      alt={t('ctl.filters.filteredAlt')}
                      style={filterStyle}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {vignetteOverlay}
                  </div>

                  {/* Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 -ml-px bg-process-key flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                    aria-hidden="true"
                  >
                    <span className="w-8 h-8 shrink-0 bg-paper-bright text-ink border border-ink flex items-center justify-center">
                      <ChevronsLeftRight className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-paper border border-ink text-[12px] font-semibold text-ink pointer-events-none" aria-hidden="true">
                    {t('ctl.filters.original')}
                  </span>
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-paper border border-ink text-[12px] font-semibold text-ink pointer-events-none" aria-hidden="true">
                    {t('ctl.filters.filtered', { preset: activePresetName })}
                  </span>
                </div>
              )}
            </div>

            {/* Job ticket */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]">
              <span className="flex items-baseline gap-2" data-measure>
                <span className="slug">{t('ws.source')}</span>
                <span className="text-ink font-semibold">
                  {imgElement.naturalWidth} × {imgElement.naturalHeight} px
                </span>
                <span className="text-graphite">
                  {sourceExt}
                  {selectedFile.size > 0 && ` · ${formatBytes(selectedFile.size)}`}
                </span>
              </span>
              <span className="ml-auto flex items-center gap-4">
                <button
                  type="button"
                  aria-pressed={showComparison}
                  onClick={() => setShowComparison(!showComparison)}
                  className="btn-rule min-h-[36px] px-2.5 text-[14px]"
                >
                  <ChevronsLeftRight className="w-4 h-4" aria-hidden="true" />
                  <span>{t('ctl.filters.compare')}</span>
                </button>
                <FullSizeView
                  label={`filtered-${activePreset}.${saveFormat === 'jpeg' ? 'jpg' : saveFormat}`}
                  load={async () => {
                    const blob = await canvasToBlob(renderCanvas(), `image/${saveFormat}`, 0.95);
                    if (!blob) throw new Error('encode failed');
                    return blobImage(blob);
                  }}
                  original={() => urlImage(imgElement.src, selectedFile.size || undefined)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline"
                >
                  {t('ws.replace')}
                </button>
              </span>
            </div>
          </div>

          {/* Ruled control panel */}
          <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
            <div className="border border-ink bg-paper-bright rounded-xl">
              <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-ink">
                <h2 className="slug flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-ink" aria-hidden="true" />
                  {t('ctl.filters.panel')}
                </h2>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  {t('ctl.filters.reset')}
                </button>
              </div>

              <div className="p-4 space-y-4 text-[15px]">
                {/* Presets */}
                <div className="space-y-1.5">
                  <span className="slug">{t('ctl.filters.presets')}</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label={t('ctl.filters.presets')}>
                    {PRESETS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        aria-pressed={activePreset === p.id}
                        onClick={() => applyPreset(p)}
                        className={`min-h-[40px] px-2.5 py-1.5 border text-left text-[14px] font-medium leading-tight transition-colors ${
                          activePreset === p.id
                            ? 'seg-on border-ink'
                            : 'bg-paper-bright text-ink border-pencil hover:border-ink hover:bg-paper-stock'
                        }`}
                      >
                        {t(p.nameKey)}
                      </button>
                    ))}
                  </div>
                  {activePresetDef && activePreset !== 'normal' && (
                    <div className="pt-2">
                      <RangeField label={t('ctl.filters.strength')} value={strength} unit="%" min={0} max={100} onChange={(v) => applyPreset(activePresetDef, v)} />
                    </div>
                  )}
                </div>

                {/* Fine adjustments */}
                <div className="space-y-4 pt-4 border-t border-ink">
                  <span className="slug block">{t('ctl.filters.adjustments')}</span>
                  <RangeField label={t('ctl.filters.brightness')} value={brightness} unit="%" min={0} max={200} onChange={adjust(setBrightness)} />
                  <RangeField label={t('ctl.filters.contrast')} value={contrast} unit="%" min={0} max={200} onChange={adjust(setContrast)} />
                  <RangeField label={t('ctl.filters.saturation')} value={saturate} unit="%" min={0} max={200} onChange={adjust(setSaturate)} />
                  <RangeField label={t('ctl.filters.warmth')} value={warmth} unit="" min={-100} max={100} onChange={adjust(setWarmth)} />
                  <RangeField label={t('ctl.filters.tint')} value={tint} unit="" min={-100} max={100} onChange={adjust(setTint)} />
                  <RangeField label={t('ctl.filters.sepia')} value={sepia} unit="%" min={0} max={100} onChange={adjust(setSepia)} />
                  <RangeField label={t('ctl.filters.grayscale')} value={grayscale} unit="%" min={0} max={100} onChange={adjust(setGrayscale)} />
                  <RangeField label={t('ctl.filters.hue')} value={hueRotate} unit="°" min={0} max={360} onChange={adjust(setHueRotate)} />
                  <RangeField label={t('ctl.filters.clarity')} value={clarity} unit="%" min={0} max={100} onChange={adjust(setClarity)} />
                  <RangeField label={t('ctl.filters.vignette')} value={vignette} unit="%" min={0} max={100} onChange={adjust(setVignette)} />
                  <RangeField label={t('ctl.filters.blur')} value={blur} unit=" px" min={0} max={20} onChange={adjust(setBlur)} />
                </div>

                {/* Save as */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ws.saveAs')}</span>
                  <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                    {SAVE_FORMATS.map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        aria-pressed={saveFormat === fmt}
                        onClick={() => setSaveFormat(fmt)}
                        className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                          saveFormat === fmt ? 'seg-on' : 'seg-off'
                        }`}
                      >
                        {formatLabel(fmt)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <div className="hidden lg:block">
                <button type="button" onClick={() => handleDownload(saveFormat)} className="btn-ink w-full min-h-[52px] text-[16px]">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>{downloadLabel}</span>
                </button>
              </div>
              {copyError && (
                <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t('ws.errCopy')}</span>
                </p>
              )}
              <button type="button" onClick={handleCopyClipboard} className="btn-rule w-full">
                {copiedToast ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span aria-live="polite">{copiedToast ? t('ws.copied') : t('ws.copy')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phones: the primary action stays under the thumb */}
      {loaded && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button type="button" onClick={() => handleDownload(saveFormat)} className="btn-ink w-full min-h-[48px] text-[16px]">
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>{downloadLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
