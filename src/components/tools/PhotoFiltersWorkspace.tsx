import React, { useState, useRef } from 'react';
import { Sliders, RotateCcw, Download, Copy, Check, ChevronsLeftRight, AlertCircle } from 'lucide-react';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';
import { formatBytes } from '../../lib/canvas/engine';

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

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);
  const [saveFormat, setSaveFormat] = useState<SaveFormat>('png');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const splitContainerRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  // Images handed off from other tools / the homepage, and Ctrl+V paste
  useImageIntake(handleFileSelect);

  const applyPreset = (preset: FilterPreset) => {
    setActivePreset(preset.id);
    setBrightness(preset.brightness);
    setContrast(preset.contrast);
    setSaturate(preset.saturate);
    setSepia(preset.sepia);
    setGrayscale(preset.grayscale);
    setHueRotate(preset.hueRotate);
    setInvert(preset.invert);
    setBlur(preset.blur);
    setVignette(preset.vignette);
    setClarity(preset.clarity || 0);
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

    // Apply CSS Filters
    ctx.filter = `brightness(${brightness}%) contrast(${effectiveContrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) blur(${blur}px)`;
    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    // Apply Vignette overlay matching visual preview
    if (vignette > 0) {
      const maxDim = Math.max(canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        (maxDim / 2) * (1 - vignette / 100),
        canvas.width / 2,
        canvas.height / 2,
        maxDim * 0.7
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(1, `rgba(0,0,0,${vignette / 100})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return canvas;
  };

  const handleDownload = (format: SaveFormat = 'png') => {
    const canvas = renderCanvas();
    const link = document.createElement('a');
    link.download = `filtered-${activePreset}-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvas.toDataURL(`image/${format}`, 0.95);
    link.click();
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
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${effectiveContrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) blur(${blur}px)`,
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

      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Proof sheet */}
          <div className="min-w-0 space-y-3">
            <div className="bg-paper-bright border border-ink px-6 py-8 sm:px-12 sm:py-10 min-h-[260px] sm:min-h-[420px] flex items-center justify-center">
              {!showComparison ? (
                <div className="relative inline-flex max-w-full max-h-[65vh] canvas-checkerboard crop-marks">
                  <img
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
                  className="relative w-full max-w-2xl overflow-hidden border border-ink select-none touch-none cursor-ew-resize focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  style={{
                    aspectRatio: `${imgElement.naturalWidth} / ${imgElement.naturalHeight}`,
                    maxHeight: '65vh',
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
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[14px] font-medium text-ink underline hover:no-underline"
                >
                  {t('ws.replace')}
                </button>
              </span>
            </div>
          </div>

          {/* Ruled control panel */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="border border-ink bg-paper-bright">
              <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-ink">
                <h2 className="slug flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-ink" aria-hidden="true" />
                  {t('ctl.filters.panel')}
                </h2>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[14px] font-medium text-ink underline hover:no-underline"
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
                </div>

                {/* Fine adjustments */}
                <div className="space-y-4 pt-4 border-t border-ink">
                  <span className="slug block">{t('ctl.filters.adjustments')}</span>
                  <RangeField label={t('ctl.filters.brightness')} value={brightness} unit="%" min={0} max={200} onChange={adjust(setBrightness)} />
                  <RangeField label={t('ctl.filters.contrast')} value={contrast} unit="%" min={0} max={200} onChange={adjust(setContrast)} />
                  <RangeField label={t('ctl.filters.saturation')} value={saturate} unit="%" min={0} max={200} onChange={adjust(setSaturate)} />
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
                  <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
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
