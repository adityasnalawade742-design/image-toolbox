'use client';

import React, { useState, useRef } from 'react';
import { 
  Lock, 
  Unlock, 
  Download, 
  RefreshCw, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import { LoadedImage, ExportFormat } from '@/types/image';
import { processResize } from '@/lib/canvas/resize';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface ResizeViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const ResizeView: React.FC<ResizeViewProps> = ({ image, onResetImage }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [widthStr, setWidthStr] = useState<string>(image.width.toString());
  const [heightStr, setHeightStr] = useState<string>(image.height.toString());
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(false);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [quality, setQuality] = useState<number>(0.9);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const aspect = image.width / image.height;

  // Safe numerical width and height
  const currentWidth = Math.max(1, Math.min(16384, parseInt(widthStr) || 1));
  const currentHeight = Math.max(1, Math.min(16384, parseInt(heightStr) || 1));

  // Handle Width change
  const handleWidthInput = (val: string) => {
    setWidthStr(val);
    const num = parseInt(val);
    if (!isNaN(num) && num > 0) {
      let clampedW = Math.min(16384, num);
      if (preventUpscale && clampedW > image.width) clampedW = image.width;
      if (lockAspect) {
        setHeightStr(Math.max(1, Math.round(clampedW / aspect)).toString());
      }
    }
  };

  // Handle Height change
  const handleHeightInput = (val: string) => {
    setHeightStr(val);
    const num = parseInt(val);
    if (!isNaN(num) && num > 0) {
      let clampedH = Math.min(16384, num);
      if (preventUpscale && clampedH > image.height) clampedH = image.height;
      if (lockAspect) {
        setWidthStr(Math.max(1, Math.round(clampedH * aspect)).toString());
      }
    }
  };

  // Percentage scaling helper
  const handleScalePercent = (percent: number) => {
    const factor = percent / 100;
    const newW = Math.max(1, Math.round(image.width * factor));
    const newH = Math.max(1, Math.round(image.height * factor));
    setWidthStr(newW.toString());
    setHeightStr(newH.toString());
  };

  const handleExecuteResize = async () => {
    if (!imgRef.current) return;
    setIsProcessing(true);
    try {
      const result = await processResize(
        imgRef.current,
        {
          width: currentWidth,
          height: currentHeight,
          maintainAspectRatio: lockAspect,
          preventUpscaling: preventUpscale,
          format: exportFormat,
          quality
        },
        image.name,
        image.size
      );

      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Resize failed:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Preview Viewport (7 Cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-sm flex flex-col">
          
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Target: <strong className="text-brand-400">{currentWidth} × {currentHeight} px</strong></span>
            <span>Original: {image.width} × {image.height} px</span>
          </div>

          <div className="relative min-h-[380px] max-h-[500px] w-full flex items-center justify-center p-4 bg-checkerboard select-none overflow-hidden">
            <img
              ref={imgRef}
              src={image.objectUrl}
              alt="Resize source"
              className="max-h-[440px] w-auto object-contain block"
            />
          </div>

          <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Original Size: {formatBytes(image.size)}</span>
            <button
              onClick={() => {
                setWidthStr(image.width.toString());
                setHeightStr(image.height.toString());
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Dimensions</span>
            </button>
          </div>

        </div>
      </div>

      {/* Control Sidebar (5 Cols) */}
      <div className="lg:col-span-5 space-y-5">
        
        {/* Dimensions Settings */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>Dimensions</span>
            <span className="text-xs text-slate-500 font-mono">pixels</span>
          </div>

          <div className="grid grid-cols-2 gap-3 items-center">
            {/* Width Input */}
            <div className="space-y-1">
              <label htmlFor="width-input" className="text-xs text-slate-500 font-medium">Width (px)</label>
              <input
                id="width-input"
                type="number"
                min="1"
                max="16384"
                value={widthStr}
                onChange={(e) => handleWidthInput(e.target.value)}
                onBlur={() => setWidthStr(currentWidth.toString())}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>

            {/* Height Input */}
            <div className="space-y-1">
              <label htmlFor="height-input" className="text-xs text-slate-500 font-medium">Height (px)</label>
              <input
                id="height-input"
                type="number"
                min="1"
                max="16384"
                value={heightStr}
                onChange={(e) => handleHeightInput(e.target.value)}
                onBlur={() => setHeightStr(currentHeight.toString())}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Quick Percentage Presets */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs text-slate-500 font-medium">Quick Presets</label>
            <div className="grid grid-cols-5 gap-1.5">
              {[25, 50, 75, 150, 200].map((pct) => (
                <button
                  key={pct}
                  onClick={() => handleScalePercent(pct)}
                  className="py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Aspect Ratio Lock & Upscale Toggles */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs">
            <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={lockAspect}
                onChange={(e) => setLockAspect(e.target.checked)}
                className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="flex items-center gap-1.5">
                {lockAspect ? <Lock className="w-3.5 h-3.5 text-brand-500" /> : <Unlock className="w-3.5 h-3.5 text-slate-400" />}
                <span>Maintain aspect ratio</span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={preventUpscale}
                onChange={(e) => setPreventUpscale(e.target.checked)}
                className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span>Prevent upscaling beyond original dimensions</span>
            </label>
          </div>
        </div>

        {/* Output Options & Download */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
            Export Options
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(['image/webp', 'image/png', 'image/jpeg'] as ExportFormat[]).map((fmt) => (
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

          {exportFormat !== 'image/png' ? (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 font-medium">Quality</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                aria-label="Quality Slider"
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>
          ) : (
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              PNG format is lossless (ideal for graphics and transparency).
            </div>
          )}

          <button
            onClick={handleExecuteResize}
            disabled={isProcessing}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Resizing Image...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Resized Image</span>
              </>
            )}
          </button>

          <button
            onClick={onResetImage}
            className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
          >
            Upload Different Image
          </button>
        </div>

      </div>

    </div>
  );
};
