import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  Sparkles,
  Download,
  ShieldCheck,
  Zap,
  Info,
  XCircle,
  Cloud,
  Cpu,
} from 'lucide-react';
import {
  runCloudRealEsrganUpscale,
  runAiSuperResolution,
  runStandardCanvasUpscale,
  type UpscaleResult,
} from '../../lib/ai/upscalerEngine.ts';
import { getAIModel } from '../../lib/ai/modelRegistry.ts';

export function AiUpscalerWorkspace() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [engine, setEngine] = useState<'cloud-realesrgan' | 'ai-neural' | 'standard-canvas'>('cloud-realesrgan');
  const [scale, setScale] = useState<2 | 4>(4);
  const [progressMsg, setProgressMsg] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [result, setResult] = useState<UpscaleResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }
    setErrorMsg(null);
    setSelectedFile(file);
    setResult(null);

    const img = new Image();
    img.onload = () => {
      if (img.width < 16 || img.height < 16) {
        setErrorMsg('Image is too small (minimum 16×16 px).');
        setSelectedFile(null);
        setImgElement(null);
        return;
      }
      setImgElement(img);
    };
    img.src = URL.createObjectURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleProcess = async () => {
    if (!imgElement || !selectedFile) return;

    setIsProcessing(true);
    setErrorMsg(null);
    setProgressPercent(5);
    setProgressMsg('Initializing upscale process...');

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      if (engine === 'cloud-realesrgan') {
        const res = await runCloudRealEsrganUpscale(
          selectedFile,
          scale,
          abortController.signal,
          (percent, msg) => {
            setProgressPercent(percent);
            setProgressMsg(msg);
          }
        );
        setProgressPercent(100);
        setResult(res);
      } else if (engine === 'ai-neural') {
        const res = await runAiSuperResolution(
          imgElement,
          scale,
          abortController.signal,
          (_curr, _total, percent, msg) => {
            setProgressPercent(percent);
            setProgressMsg(msg);
          }
        );
        setResult(res);
      } else {
        setProgressMsg('Executing 2D bicubic interpolation...');
        setProgressPercent(50);
        const res = await runStandardCanvasUpscale(imgElement, scale);
        setProgressPercent(100);
        setResult(res);
      }
    } catch (err: any) {
      if (abortController.signal.aborted || err?.message?.includes('cancelled')) {
        setProgressMsg('Operation cancelled by user.');
      } else {
        setErrorMsg(err.message || 'An error occurred during upscaling.');
      }
    } finally {
      setIsProcessing(false);
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleDownload = (format: 'png' | 'jpeg' | 'webp' = 'png') => {
    if (!result) return;
    const link = document.createElement('a');
    link.download = `upscaled-${scale}x-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = result.canvas.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  // Render canvas preview
  useEffect(() => {
    if (result && previewCanvasRef.current) {
      const cvs = previewCanvasRef.current;
      cvs.width = result.width;
      cvs.height = result.height;
      const ctx = cvs.getContext('2d');
      if (ctx) {
        ctx.drawImage(result.canvas, 0, 0);
      }
    }
  }, [result]);

  const activeModel = getAIModel(scale);
  const imgWidth = imgElement?.naturalWidth || imgElement?.width || 1;
  const imgHeight = imgElement?.naturalHeight || imgElement?.height || 1;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Upload Drop Zone */}
      {!selectedFile && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-700 hover:border-primary-500 rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 bg-gray-900/50 hover:bg-gray-800/50 group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          />
          <div className="w-16 h-16 rounded-full bg-primary-950/60 text-primary-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Upload Image to Upscale</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
            Drag and drop your image here, or click to browse. Supports JPG, PNG, and WebP.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-xs text-gray-300 border border-gray-700">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Private & Fast — Choose Cloud Ultra Real-ESRGAN or 100% In-Browser AI</span>
          </div>
        </div>
      )}

      {/* Main Workspace */}
      {selectedFile && imgElement && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Sidebar */}
          <div className="lg:col-span-1 space-y-5 bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-400" />
                Upscale Configuration
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Original: {imgWidth} × {imgHeight} px
              </p>
            </div>

            {/* Engine Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                AI & Upscaling Engine
              </label>
              <div className="space-y-2">
                {/* 1. Cloud Ultra AI (Real-ESRGAN) */}
                <button
                  type="button"
                  onClick={() => {
                    setEngine('cloud-realesrgan');
                    setScale(4);
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    engine === 'cloud-realesrgan'
                      ? 'border-indigo-500 bg-indigo-950/40 text-white shadow-lg shadow-indigo-950/40'
                      : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-sm text-indigo-300">
                      <Cloud className="w-4 h-4 text-indigo-400" />
                      <span>Cloud Ultra AI</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-indigo-900 text-indigo-200">
                      Highest Quality
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Real-ESRGAN 4K Neural Network (Oracle Cloud)</p>
                </button>

                {/* 2. Browser Local AI */}
                <button
                  type="button"
                  onClick={() => setEngine('ai-neural')}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    engine === 'ai-neural'
                      ? 'border-primary-500 bg-primary-950/40 text-white'
                      : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-sm text-primary-300">
                      <Cpu className="w-4 h-4 text-primary-400" />
                      <span>Browser Local AI</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      100% Private
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">ONNX Runtime Web (Zero Server Uploads)</p>
                </button>

                {/* 3. Standard Fast Bicubic */}
                <button
                  type="button"
                  onClick={() => setEngine('standard-canvas')}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    engine === 'standard-canvas'
                      ? 'border-amber-500 bg-amber-950/40 text-white'
                      : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-sm text-amber-300">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Standard Fast</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300">
                      Instant
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">HTML5 2D Canvas Interpolation</p>
                </button>
              </div>
            </div>

            {/* Scale Factor Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Scale Factor
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setScale(2)}
                  className={`py-2.5 px-4 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
                    scale === 2
                      ? 'border-primary-500 bg-primary-600 text-white'
                      : 'border-gray-800 bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  2× Scale ({imgWidth * 2}×{imgHeight * 2})
                </button>
                <button
                  type="button"
                  onClick={() => setScale(4)}
                  className={`py-2.5 px-4 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
                    scale === 4
                      ? 'border-primary-500 bg-primary-600 text-white'
                      : 'border-gray-800 bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  4× Scale ({imgWidth * 4}×{imgHeight * 4})
                </button>
              </div>
            </div>

            {/* Engine Info Box */}
            <div className="p-3.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-xs space-y-2">
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400">Model:</span>
                <span className="font-semibold text-white">
                  {engine === 'cloud-realesrgan'
                    ? 'Real-ESRGAN x4plus (Flagship)'
                    : engine === 'ai-neural'
                    ? activeModel.name
                    : '2D Bicubic Resampling'}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400">Processing:</span>
                <span className="font-mono text-emerald-400">
                  {engine === 'cloud-realesrgan'
                    ? 'Oracle Cloud (4 ARM64 Cores)'
                    : engine === 'ai-neural'
                    ? 'In-Browser Tensor Ops'
                    : 'Instant Browser 2D Canvas'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              {!isProcessing ? (
                <button
                  type="button"
                  onClick={handleProcess}
                  className="w-full py-3.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>
                    Start {engine === 'cloud-realesrgan' ? 'Ultra AI' : engine === 'ai-neural' ? 'Local AI' : 'Standard'} Upscale
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Cancel Upscale</span>
                </button>
              )}

              <button
                type="button"
                disabled={isProcessing}
                onClick={() => {
                  setSelectedFile(null);
                  setImgElement(null);
                  setResult(null);
                  setErrorMsg(null);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium transition-all cursor-pointer"
              >
                Choose Different Image
              </button>
            </div>

            {/* Progress Display */}
            {isProcessing && (
              <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 space-y-3 animate-pulse">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">{progressMsg}</span>
                  <span className="text-primary-400 font-mono font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all duration-200"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          {/* Preview & Comparison Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative min-h-[420px] bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden flex items-center justify-center p-4">
              {result ? (
                <div className="w-full flex flex-col items-center justify-center space-y-4">
                  {/* Dynamic Aspect Ratio Split Comparison Viewer */}
                  <div
                    className="relative w-full max-w-2xl bg-gray-900 rounded-xl overflow-hidden border border-gray-800 select-none shadow-2xl"
                    style={{
                      aspectRatio: `${imgWidth} / ${imgHeight}`,
                      maxHeight: '65vh',
                    }}
                  >
                    {/* Before (Original) */}
                    <img
                      src={imgElement.src}
                      alt="Original"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />

                    {/* After (Upscaled) with Pixel-Matched Clip Path */}
                    <div
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                      style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                    >
                      <canvas
                        ref={previewCanvasRef}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>

                    {/* Draggable Divider */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center pointer-events-none"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-gray-900 shadow-xl flex items-center justify-center text-xs font-bold border border-gray-300">
                        ↔
                      </div>
                    </div>

                    {/* Range Input Overlay */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPos}
                      onChange={(e) => setSliderPos(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                    />

                    {/* Labels */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] text-gray-300 font-semibold uppercase tracking-wider pointer-events-none border border-white/10">
                      Original ({imgWidth}×{imgHeight})
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-primary-950/85 border border-primary-500/50 backdrop-blur-md text-[10px] text-primary-300 font-semibold uppercase tracking-wider pointer-events-none shadow-md">
                      Upscaled ({result.width}×{result.height})
                    </div>
                  </div>

                  {/* Result Stats Banner */}
                  <div className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-3 p-3 bg-gray-900/80 border border-gray-800 rounded-xl text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Model:</span>
                      <span className="font-semibold text-white">{result.modelName || 'Super Resolution'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Duration:</span>
                      <span className="font-mono text-emerald-400">{result.inferenceDurationMs} ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Resolution:</span>
                      <span className="font-mono text-primary-300">{result.width} × {result.height} px</span>
                    </div>
                  </div>

                  {/* Download Options */}
                  <div className="w-full max-w-2xl flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleDownload('png')}
                      className="py-2.5 px-5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-primary-950/50"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PNG (Lossless)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload('webp')}
                      className="py-2.5 px-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-sm transition-all cursor-pointer"
                    >
                      <span>WebP</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload('jpeg')}
                      className="py-2.5 px-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-sm transition-all cursor-pointer"
                    >
                      <span>JPG</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <img
                    src={imgElement.src}
                    alt="Original Preview"
                    className="max-h-72 rounded-xl object-contain mx-auto border border-gray-800 shadow-xl"
                  />
                  <p className="text-xs text-gray-400">
                    Ready to upscale. Click "Start {engine === 'cloud-realesrgan' ? 'Ultra AI' : engine === 'ai-neural' ? 'Local AI' : 'Standard'} Upscale" on the left.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
