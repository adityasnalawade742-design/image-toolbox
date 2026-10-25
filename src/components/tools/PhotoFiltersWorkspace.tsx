import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  Sliders,
  RotateCcw,
  Download,
  Sparkles,
  Sun,
  Contrast,
  Palette,
  Eye,
  Layers,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

interface FilterPreset {
  id: string;
  name: string;
  brightness: number;
  contrast: number;
  saturate: number;
  sepia: number;
  grayscale: number;
  hueRotate: number;
  invert: number;
  blur: number;
  vignette: number;
  sharpness?: number;
}

const PRESETS: FilterPreset[] = [
  { id: 'normal', name: 'Original', brightness: 100, contrast: 100, saturate: 100, sepia: 0, grayscale: 0, hueRotate: 0, invert: 0, blur: 0, vignette: 0, sharpness: 0 },
  { id: 'cinematic', name: 'Cinematic', brightness: 105, contrast: 125, saturate: 110, sepia: 15, grayscale: 0, hueRotate: 345, invert: 0, blur: 0, vignette: 30, sharpness: 15 },
  { id: 'vintage', name: 'Vintage 70s', brightness: 110, contrast: 90, saturate: 75, sepia: 40, grayscale: 0, hueRotate: 15, invert: 0, blur: 0, vignette: 40, sharpness: 0 },
  { id: 'cyberpunk', name: 'Cyberpunk', brightness: 115, contrast: 135, saturate: 160, sepia: 0, grayscale: 0, hueRotate: 180, invert: 0, blur: 0, vignette: 25, sharpness: 25 },
  { id: 'noir', name: 'Moody Noir', brightness: 95, contrast: 150, saturate: 0, sepia: 0, grayscale: 100, hueRotate: 0, invert: 0, blur: 0, vignette: 50, sharpness: 20 },
  { id: 'sunset', name: 'Sunset Warm', brightness: 108, contrast: 115, saturate: 130, sepia: 25, grayscale: 0, hueRotate: 10, invert: 0, blur: 0, vignette: 20, sharpness: 10 },
  { id: 'cool', name: 'Cool Fade', brightness: 105, contrast: 95, saturate: 85, sepia: 0, grayscale: 0, hueRotate: 200, invert: 0, blur: 0, vignette: 15, sharpness: 5 },
  { id: 'dramatic', name: 'Dramatic HDR', brightness: 110, contrast: 140, saturate: 140, sepia: 0, grayscale: 0, hueRotate: 0, invert: 0, blur: 0, vignette: 35, sharpness: 30 },
  { id: 'invert', name: 'Negative', brightness: 100, contrast: 100, saturate: 100, sepia: 0, grayscale: 0, hueRotate: 0, invert: 100, blur: 0, vignette: 0, sharpness: 0 },
];

export function PhotoFiltersWorkspace() {
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
  const [sharpness, setSharpness] = useState<number>(0);

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const splitContainerRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

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
    setSharpness(preset.sharpness || 0);
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

    // Effective contrast with sharpness boost
    const effectiveContrast = contrast + Math.round(sharpness * 0.35);

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

  const handleDownload = (format: 'png' | 'jpeg' | 'webp' = 'png') => {
    const canvas = renderCanvas();
    const link = document.createElement('a');
    link.download = `filtered-${activePreset}-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvas.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  const handleCopyClipboard = async () => {
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
    }
  };

  const effectiveContrast = contrast + Math.round(sharpness * 0.35);
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${effectiveContrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) blur(${blur}px)`,
    willChange: 'filter',
  };

  // Touch tracking for split slider
  const handleSplitPointerMove = (clientX: number) => {
    if (!splitContainerRef.current) return;
    const rect = splitContainerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(Math.round(pct));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {!selectedFile && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFileSelect(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-700 hover:border-primary-500 rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 bg-gray-900/50 hover:bg-gray-800/50 group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          />
          <div className="w-16 h-16 rounded-full bg-primary-950/60 text-primary-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Sliders className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Upload Image for Filters & Adjustments</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
            Drag & drop your photo or paste from clipboard (Ctrl+V) to apply cinematic color presets, vignette, and lighting controls.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-xs text-gray-300 border border-gray-700">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Instant GPU-Accelerated Canvas Rendering (100% Private)</span>
          </div>
        </div>
      )}

      {selectedFile && imgElement && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-5 bg-gray-900 border border-gray-800 rounded-2xl p-5 max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-primary-400" />
                <span>Presets & Adjustments</span>
              </h3>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Presets Carousel / Grid */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Aesthetic Presets
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => applyPreset(p)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                      activePreset === p.id
                        ? 'border-primary-500 bg-primary-950/60 text-primary-300 shadow-md'
                        : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Fine-Tuning Sliders */}
            <div className="space-y-4 pt-2 border-t border-gray-800">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Fine Adjustments
              </label>

              {/* Brightness */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5 text-amber-400" /> Brightness</span>
                  <span className="font-mono text-gray-400">{brightness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => {
                    setBrightness(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Contrast */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5"><Contrast className="w-3.5 h-3.5 text-blue-400" /> Contrast</span>
                  <span className="font-mono text-gray-400">{contrast}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => {
                    setContrast(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Saturation */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5"><Palette className="w-3.5 h-3.5 text-rose-400" /> Saturation</span>
                  <span className="font-mono text-gray-400">{saturate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={saturate}
                  onChange={(e) => {
                    setSaturate(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Sepia */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Sepia Warmth</span>
                  <span className="font-mono text-gray-400">{sepia}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sepia}
                  onChange={(e) => {
                    setSepia(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Grayscale */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Monochrome (B&W)</span>
                  <span className="font-mono text-gray-400">{grayscale}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={grayscale}
                  onChange={(e) => {
                    setGrayscale(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Hue Rotate */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Hue Shift</span>
                  <span className="font-mono text-gray-400">{hueRotate}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hueRotate}
                  onChange={(e) => {
                    setHueRotate(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Sharpness / Clarity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" /> Sharpness & Clarity</span>
                  <span className="font-mono text-gray-400">{sharpness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sharpness}
                  onChange={(e) => {
                    setSharpness(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Vignette */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Vignette Edge</span>
                  <span className="font-mono text-gray-400">{vignette}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={vignette}
                  onChange={(e) => {
                    setVignette(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Soft Blur */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Soft Focus / Blur</span>
                  <span className="font-mono text-gray-400">{blur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={blur}
                  onChange={(e) => {
                    setBlur(Number(e.target.value));
                    setActivePreset('custom');
                  }}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-800 space-y-2">
              <button
                type="button"
                onClick={() => handleDownload('png')}
                className="w-full py-3 px-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PNG (Lossless)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                className="w-full py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copiedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Filtered Image</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleDownload('webp')}
                  className="py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold transition-all cursor-pointer text-center"
                >
                  Download WebP
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload('jpeg')}
                  className="py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold transition-all cursor-pointer text-center"
                >
                  Download JPG
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedFile(null);
                  setImgElement(null);
                  handleReset();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-gray-800 text-gray-400 hover:text-gray-200 text-xs font-medium transition-all cursor-pointer"
              >
                Choose Different Photo
              </button>
            </div>
          </div>

          {/* Preview Area (Order 1 on mobile, Order 2 on desktop) */}
          <div className="lg:col-span-2 space-y-4 order-1 lg:order-2">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 min-h-[360px] sm:min-h-[480px] flex flex-col items-center justify-center relative">
              {/* Top View Toggle */}
              <div className="w-full flex items-center justify-between mb-3 text-xs">
                <span className="text-gray-400">
                  {imgElement.naturalWidth} × {imgElement.naturalHeight} px
                </span>
                <button
                  type="button"
                  onClick={() => setShowComparison(!showComparison)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    showComparison
                      ? 'border-primary-500 bg-primary-950 text-primary-300'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showComparison ? 'Exit Split View' : 'Compare Split View'}</span>
                </button>
              </div>

              {/* Main Image View */}
              {!showComparison ? (
                <div className="relative max-h-[65vh] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                  <img
                    src={imgElement.src}
                    alt="Filtered Preview"
                    style={filterStyle}
                    className="max-h-[65vh] object-contain transition-all duration-75"
                  />
                  {vignette > 0 && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, transparent ${100 - vignette}%, rgba(0,0,0,${vignette / 100}) 100%)`,
                      }}
                    />
                  )}
                </div>
              ) : (
                /* Split Comparison View with Touch Support */
                <div
                  ref={splitContainerRef}
                  onMouseMove={(e) => e.buttons === 1 && handleSplitPointerMove(e.clientX)}
                  onTouchMove={(e) => e.touches[0] && handleSplitPointerMove(e.touches[0].clientX)}
                  className="relative w-full max-w-2xl bg-gray-950 rounded-xl overflow-hidden border border-gray-800 select-none shadow-2xl touch-none cursor-ew-resize"
                  style={{
                    aspectRatio: `${imgElement.naturalWidth} / ${imgElement.naturalHeight}`,
                    maxHeight: '65vh',
                  }}
                >
                  {/* Before (Original) */}
                  <img
                    src={imgElement.src}
                    alt="Original"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* After (Filtered) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                  >
                    <img
                      src={imgElement.src}
                      alt="Filtered"
                      style={filterStyle}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {vignette > 0 && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, transparent ${100 - vignette}%, rgba(0,0,0,${vignette / 100}) 100%)`,
                        }}
                      />
                    )}
                  </div>

                  {/* Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-gray-900 shadow-xl flex items-center justify-center text-xs font-bold border border-gray-300">
                      ↔
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] text-gray-300 font-semibold uppercase pointer-events-none border border-white/10">
                    Original
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-primary-950/85 border border-primary-500/50 backdrop-blur-md text-[10px] text-primary-300 font-semibold uppercase pointer-events-none">
                    Filtered ({activePreset})
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
