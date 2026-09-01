'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Circle, 
  RotateCcw, 
  Download, 
  Loader2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { RoundConfig, renderRoundedCornersToBlob } from '@/lib/canvas/editor';
import { triggerDownload } from '@/lib/canvas/file-utils';

interface RoundImageViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const RoundImageView: React.FC<RoundImageViewProps> = ({ image, onResetImage }) => {
  const maxRadius = Math.round(Math.min(image.width, image.height) / 2);

  const [config, setConfig] = useState<RoundConfig>({
    radius: Math.min(32, maxRadius),
    isCircle: false,
    backgroundColor: '#FFFFFF'
  });

  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/png');
  const [quality, setQuality] = useState<number>(0.92);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Load source image
  useEffect(() => {
    const img = new Image();
    img.src = image.objectUrl;
    img.onload = () => {
      imgRef.current = img;
      drawPreview();
    };
  }, [image.objectUrl]);

  const drawPreview = () => {
    const canvas = previewCanvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const maxDisplayW = 800;
    const scale = Math.min(1, maxDisplayW / img.naturalWidth);
    const origW = img.naturalWidth;
    const origH = img.naturalHeight;

    let dispW = Math.round(origW * scale);
    let dispH = Math.round(origH * scale);
    let drawX = 0;
    let drawY = 0;
    let drawW = dispW;
    let drawH = dispH;

    if (config.isCircle) {
      const minDim = Math.min(dispW, dispH);
      dispW = minDim;
      dispH = minDim;
      drawX = (minDim - Math.round(origW * scale)) / 2;
      drawY = (minDim - Math.round(origH * scale)) / 2;
      drawW = Math.round(origW * scale);
      drawH = Math.round(origH * scale);
    }

    canvas.width = dispW;
    canvas.height = dispH;

    // Fill background for non-transparent format or custom color
    if (exportFormat === 'image/jpeg' || (config.backgroundColor && config.backgroundColor !== '#FFFFFF')) {
      ctx.fillStyle = config.backgroundColor || '#FFFFFF';
      ctx.fillRect(0, 0, dispW, dispH);
    }

    ctx.save();

    if (config.isCircle) {
      const r = dispW / 2;
      ctx.beginPath();
      ctx.arc(r, r, r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
    } else if (config.radius > 0) {
      const scaledR = Math.min(config.radius * scale, dispW / 2, dispH / 2);
      ctx.beginPath();
      ctx.moveTo(scaledR, 0);
      ctx.lineTo(dispW - scaledR, 0);
      ctx.arcTo(dispW, 0, dispW, scaledR, scaledR);
      ctx.lineTo(dispW, dispH - scaledR);
      ctx.arcTo(dispW, dispH, dispW - scaledR, dispH, scaledR);
      ctx.lineTo(scaledR, dispH);
      ctx.arcTo(0, dispH, 0, dispH - scaledR, scaledR);
      ctx.lineTo(0, scaledR);
      ctx.arcTo(0, 0, scaledR, 0, scaledR);
      ctx.closePath();
      ctx.clip();
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  };

  useEffect(() => {
    drawPreview();
  }, [config, exportFormat]);

  const handleDownload = async () => {
    if (!imgRef.current) return;
    setIsExporting(true);
    try {
      const result: ProcessingResult = await renderRoundedCornersToBlob(
        imgRef.current,
        config,
        exportFormat,
        quality,
        image.name,
        image.size
      );
      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Round image export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Circle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Round Image & Rounded Corners
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              {config.isCircle ? 'Circular Avatar Mode (1:1 Aspect)' : `Corner Radius: ${config.radius}px`}
            </p>
          </div>
        </div>

        <button
          onClick={onResetImage}
          className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Upload Another</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Canvas Preview Workspace (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
            {/* Checkerboard transparency background container */}
            <div className="relative inline-block max-w-full p-2 rounded-2xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px]">
              <canvas
                ref={previewCanvasRef}
                className="max-h-[460px] max-w-full object-contain rounded-xl shadow-inner"
              />
            </div>
            <div className="mt-3 text-xs text-slate-500 font-mono">
              Checkerboard indicates transparent background
            </div>
          </div>
        </div>

        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Presets & Radius Controls Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Round Presets
            </div>

            {/* Quick Presets */}
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: 'Small', r: 16, circle: false },
                { label: 'Medium', r: 32, circle: false },
                { label: 'Large', r: 64, circle: false },
                { label: 'Circle', r: maxRadius, circle: true }
              ].map(p => {
                const isSelected = p.circle ? config.isCircle : (!config.isCircle && config.radius === p.r);
                return (
                  <button
                    key={p.label}
                    onClick={() => setConfig(prev => ({ ...prev, radius: p.r, isCircle: p.circle }))}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-colors ${
                      isSelected
                        ? 'bg-brand-600 text-white border-brand-500'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Radius Slider */}
            {!config.isCircle && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Custom Radius</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{config.radius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxRadius}
                  value={config.radius}
                  onChange={(e) => setConfig(prev => ({ ...prev, radius: parseInt(e.target.value) || 0, isCircle: false }))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            )}

            {/* Background Color for Non-Transparent formats */}
            {exportFormat === 'image/jpeg' && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs text-slate-500 font-medium">Background Fill (for JPEG)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.backgroundColor || '#FFFFFF'}
                    onChange={(e) => setConfig(prev => ({ ...prev, backgroundColor: e.target.value }))}
                    className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                  />
                  <span className="font-mono text-xs font-semibold">{config.backgroundColor}</span>
                </div>
              </div>
            )}

          </div>

          {/* Export Settings Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Export Format
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['image/png', 'image/webp', 'image/jpeg'] as ExportFormat[]).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setExportFormat(fmt)}
                  className={`py-2 rounded-xl text-xs font-semibold border uppercase transition-colors ${
                    exportFormat === fmt
                      ? 'bg-brand-600 text-white border-brand-500'
                      : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {fmt.replace('image/', '')}
                </button>
              ))}
            </div>

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Rounding Full Res...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Rounded Image</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
