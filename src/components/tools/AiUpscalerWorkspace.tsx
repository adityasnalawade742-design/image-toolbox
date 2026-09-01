import React, { useState, useEffect, useRef } from 'react';
import {
  UploadCloud,
  Download,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  AlertTriangle,
  RotateCcw,
  Sliders,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import {
  detectAccelerationCapabilities,
  validateUpscalerInput,
  runAiSuperResolution,
} from '../../lib/ai/upscalerEngine';
import type {
  AccelerationInfo,
  UpscaleProgress,
  UpscaleResult,
} from '../../lib/ai/upscalerEngine';
import { loadImage, downloadBlob } from '../../lib/canvas/engine';

export function AiUpscalerWorkspace() {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState<string>('image');
  const [fileSize, setFileSize] = useState<number>(0);
  const [origW, setOrigW] = useState<number>(0);
  const [origH, setOrigH] = useState<number>(0);

  // Settings
  const [scale, setScale] = useState<2 | 4>(2);
  const [format, setFormat] = useState<'image/png' | 'image/webp' | 'image/jpeg'>('image/png');
  const [viewMode, setViewMode] = useState<'split' | 'side-by-side'>('split');
  const [splitPos, setSplitPos] = useState<number>(50); // percentage 0 - 100

  // Acceleration & Progress
  const [accelInfo, setAccelInfo] = useState<AccelerationInfo | null>(null);
  const [progress, setProgress] = useState<UpscaleProgress>({
    stage: 'idle',
    percent: 0,
    message: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<UpscaleResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const splitContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingSplitRef = useRef(false);

  // Detect WebGPU / WebGL on mount
  useEffect(() => {
    detectAccelerationCapabilities().then(setAccelInfo);
  }, []);

  const handleFile = async (file: File) => {
    try {
      setErrorMessage(null);
      setResult(null);
      setProgress({ stage: 'idle', percent: 0, message: '' });

      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage('File size exceeds 50 MB limit.');
        return;
      }

      setFilename(file.name.replace(/\.[^/.]+$/, ''));
      setFileSize(file.size);

      const img = await loadImage(file);
      setImageElement(img);

      const nw = img.naturalWidth || img.width;
      const nh = img.naturalHeight || img.height;
      setOrigW(nw);
      setOrigH(nh);

      const validation = validateUpscalerInput(nw, nh, scale);
      if (!validation.isValid) {
        setErrorMessage(validation.error || 'Image resolution not supported');
      }
    } catch {
      setErrorMessage('Failed to decode image.');
    }
  };

  const handleStartUpscale = async () => {
    if (!imageElement) return;

    try {
      setIsProcessing(true);
      setErrorMessage(null);

      const res = await runAiSuperResolution(imageElement, scale, (p) => {
        setProgress(p);
      });

      setResult(res);
      setIsProcessing(false);
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage(err.message || 'An error occurred during AI upscaling');
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(result.blob, `${filename}-${result.scale}x-upscaled.${ext}`);
  };

  // Split view dragging
  const handleMouseDown = () => {
    isDraggingSplitRef.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingSplitRef.current || !splitContainerRef.current) return;
    const rect = splitContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const pct = Math.round((x / rect.width) * 100);
    setSplitPos(pct);
  };

  const handleMouseUp = () => {
    isDraggingSplitRef.current = false;
  };

  const validation = origW > 0 ? validateUpscalerInput(origW, origH, scale) : null;

  return (
    <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl space-y-6">
      {/* Top Hardware Acceleration Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-surface-elevated border border-hairline rounded-lg text-xs">
        <div className="flex items-center gap-2">
          {accelInfo?.hasWebGPU ? (
            <Zap className="w-4 h-4 text-accent-green shrink-0" />
          ) : (
            <Cpu className="w-4 h-4 text-accent-blue shrink-0" />
          )}
          <span className="font-medium text-ink">
            {accelInfo ? accelInfo.label : 'Detecting hardware acceleration...'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-mute">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-green" />
          <span>100% Client-Side Neural Inference</span>
        </div>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 p-3 bg-accent-red/10 border border-accent-red/20 rounded-lg text-xs text-accent-red">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {!imageElement ? (
        /* Empty Upload Dropzone */
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border border-dashed border-hairline hover:border-hairline-strong rounded-lg p-12 sm:p-16 text-center cursor-pointer bg-surface-elevated/40 hover:bg-surface-elevated transition-all flex flex-col items-center justify-center space-y-4"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />
          <div className="w-12 h-12 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-accent-blue">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink tracking-tight">
              Select or Drop an Image for AI Super-Resolution
            </h3>
            <p className="text-xs text-mute mt-1">
              Supports PNG, JPG, WebP • 2× and 4× Neural Upscaling • 100% In-Browser Privacy
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors"
          >
            Choose Image
          </button>
        </div>
      ) : (
        /* Active AI Workbench */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Canvas / Comparison Viewer (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div
              ref={splitContainerRef}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative rounded-lg border border-hairline overflow-hidden canvas-checkerboard flex items-center justify-center min-h-[380px] max-h-[550px] select-none"
            >
              {result ? (
                viewMode === 'split' ? (
                  /* Split Before / After Slider */
                  <div className="relative w-full h-full flex items-center justify-center min-h-[380px] max-h-[550px] p-2">
                    {/* Upscaled Result (Base Image) */}
                    <img
                      src={result.canvas.toDataURL()}
                      alt="AI Upscaled"
                      className="max-w-full max-h-[500px] object-contain rounded"
                    />

                    {/* Original Image (Clipped Left Overlay) */}
                    <div
                      style={{ clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)` }}
                      className="absolute inset-0 flex items-center justify-center p-2"
                    >
                      <img
                        src={imageElement.src}
                        alt="Original"
                        className="max-w-full max-h-[500px] object-contain rounded filter blur-[0.2px]"
                      />
                    </div>

                    {/* Split Divider Line & Drag Handle */}
                    <div
                      style={{ left: `${splitPos}%` }}
                      onMouseDown={handleMouseDown}
                      className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-2xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold shadow-lg">
                        ↔
                      </div>
                    </div>

                    {/* Overlay Badges */}
                    <div className="absolute top-4 left-4 px-2 py-1 bg-canvas/80 backdrop-blur rounded text-[10px] font-mono text-mute border border-hairline pointer-events-none">
                      Original ({origW}×{origH})
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 bg-canvas/80 backdrop-blur rounded text-[10px] font-mono text-accent-green border border-hairline pointer-events-none">
                      AI {result.scale}× ({result.outputWidth}×{result.outputHeight})
                    </div>
                  </div>
                ) : (
                  /* Side-by-Side View */
                  <div className="grid grid-cols-2 gap-3 w-full p-3 items-center">
                    <div className="space-y-1.5 text-center">
                      <img src={imageElement.src} alt="Original" className="max-h-[350px] mx-auto rounded border border-hairline" />
                      <span className="text-[11px] font-mono text-mute">Original ({origW}×{origH})</span>
                    </div>
                    <div className="space-y-1.5 text-center">
                      <img src={result.canvas.toDataURL()} alt="AI Upscaled" className="max-h-[350px] mx-auto rounded border border-hairline shadow-lg" />
                      <span className="text-[11px] font-mono text-accent-green">AI {result.scale}× ({result.outputWidth}×{result.outputHeight})</span>
                    </div>
                  </div>
                )
              ) : (
                /* Pre-inference Preview */
                <div className="p-4 flex flex-col items-center justify-center text-center space-y-3">
                  <img
                    src={imageElement.src}
                    alt="Original Preview"
                    className="max-w-full max-h-[420px] object-contain rounded shadow-2xl"
                  />
                  <div className="text-xs text-mute font-mono">
                    Ready to upscale: {origW} × {origH} px → {validation?.outputWidth} × {validation?.outputHeight} px ({scale}×)
                  </div>
                </div>
              )}
            </div>

            {/* View Mode & Reset Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-surface-elevated border border-hairline rounded-md text-xs font-mono text-mute">
              <div className="flex items-center gap-2">
                {result && (
                  <div className="flex items-center gap-1 bg-surface-card rounded p-0.5 border border-hairline">
                    <button
                      type="button"
                      onClick={() => setViewMode('split')}
                      className={`px-2 py-1 rounded text-[11px] ${viewMode === 'split' ? 'bg-surface text-ink font-semibold' : 'text-mute hover:text-ink'}`}
                    >
                      Split View
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('side-by-side')}
                      className={`px-2 py-1 rounded text-[11px] ${viewMode === 'side-by-side' ? 'bg-surface text-ink font-semibold' : 'text-mute hover:text-ink'}`}
                    >
                      Side by Side
                    </button>
                  </div>
                )}
                <span>Memory Peak: ~{validation?.memoryEstimateMb || 10} MB</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setImageElement(null);
                  setResult(null);
                }}
                className="text-[11px] text-mute hover:text-ink transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Upload New Image</span>
              </button>
            </div>
          </div>

          {/* Right AI Controls & Parameters (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-surface-elevated border border-hairline rounded-lg space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-accent-blue" />
                <span>AI Super-Resolution Settings</span>
              </h4>

              {/* Scale Factor Selection */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-body">Upscale Factor</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => setScale(2)}
                    className={`py-2 px-3 rounded-md border text-xs font-semibold flex flex-col items-center justify-center gap-0.5 transition-all ${
                      scale === 2
                        ? 'bg-white text-black border-white shadow'
                        : 'bg-surface-card text-body hover:text-ink border-hairline hover:bg-surface'
                    }`}
                  >
                    <span className="text-sm font-bold">2× Scale</span>
                    <span className="text-[10px] opacity-75">
                      {origW * 2} × {origH * 2} px
                    </span>
                  </button>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => setScale(4)}
                    className={`py-2 px-3 rounded-md border text-xs font-semibold flex flex-col items-center justify-center gap-0.5 transition-all ${
                      scale === 4
                        ? 'bg-white text-black border-white shadow'
                        : 'bg-surface-card text-body hover:text-ink border-hairline hover:bg-surface'
                    }`}
                  >
                    <span className="text-sm font-bold">4× Scale</span>
                    <span className="text-[10px] opacity-75">
                      {origW * 4} × {origH * 4} px
                    </span>
                  </button>
                </div>
              </div>

              {/* Model Specifications */}
              <div className="p-3 bg-surface-card border border-hairline rounded text-xs space-y-1.5 font-mono text-mute">
                <div className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="text-ink font-sans">ESPCN Sub-Pixel CNN</span>
                </div>
                <div className="flex justify-between">
                  <span>Inference:</span>
                  <span className="text-ink font-sans">{accelInfo?.type.toUpperCase() || 'WASM'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Luminance Channel:</span>
                  <span className="text-accent-green">High-Pass Sharpened</span>
                </div>
              </div>

              {/* Memory / Safety Warnings */}
              {validation?.warning && (
                <div className="p-2.5 bg-accent-yellow/10 border border-accent-yellow/20 rounded text-[11px] text-accent-yellow">
                  {validation.warning}
                </div>
              )}

              {/* Output Format (when result is ready) */}
              {result && (
                <div className="space-y-2 pt-2 border-t border-hairline text-xs">
                  <span className="text-body block font-medium">Export Format</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['image/png', 'image/webp', 'image/jpeg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormat(fmt)}
                        className={`py-1.5 text-center text-xs rounded font-medium border transition-colors ${
                          format === fmt
                            ? 'bg-surface border-hairline-strong text-ink font-semibold'
                            : 'bg-surface-card border-hairline text-mute hover:text-ink'
                        }`}
                      >
                        {fmt.replace('image/', '').toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress State Indicator */}
              {isProcessing && (
                <div className="space-y-2 pt-2 border-t border-hairline">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-ink font-medium">{progress.message}</span>
                    <span className="text-accent-blue font-bold">{progress.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-card rounded-full overflow-hidden">
                    <div
                      style={{ width: `${progress.percent}%` }}
                      className="h-full bg-accent-blue transition-all duration-200"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Main Action CTA Button */}
            {!result ? (
              <button
                type="button"
                disabled={isProcessing || !validation?.isValid}
                onClick={handleStartUpscale}
                className="w-full py-3 px-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md shadow-lg flex items-center justify-center gap-2 transition-all h-[42px] disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>
                  {isProcessing ? 'Processing Super-Resolution...' : `Start ${scale}× AI Super-Resolution`}
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-3 px-4 bg-accent-green hover:bg-emerald-400 text-black font-bold text-xs rounded-md shadow-lg flex items-center justify-center gap-2 transition-all h-[42px]"
              >
                <Download className="w-4 h-4" />
                <span>Download AI {result.scale}× Upscaled Image</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
