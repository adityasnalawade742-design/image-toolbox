'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Square, 
  RotateCcw, 
  Download, 
  Loader2, 
  Maximize, 
  Minimize,
  Sparkles
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { BorderConfig, renderBorderToBlob } from '@/lib/canvas/editor';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface BorderViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const BorderView: React.FC<BorderViewProps> = ({ image, onResetImage }) => {
  const [config, setConfig] = useState<BorderConfig>({
    width: Math.max(10, Math.round(image.width * 0.02)),
    color: '#000000',
    opacity: 1,
    mode: 'outside'
  });

  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/jpeg');
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
    const scaledOrigW = Math.round(img.naturalWidth * scale);
    const scaledOrigH = Math.round(img.naturalHeight * scale);
    const scaledBw = Math.round(config.width * scale);

    let dispW = scaledOrigW;
    let dispH = scaledOrigH;
    let imgX = 0;
    let imgY = 0;

    if (config.mode === 'outside' && scaledBw > 0) {
      dispW = scaledOrigW + scaledBw * 2;
      dispH = scaledOrigH + scaledBw * 2;
      imgX = scaledBw;
      imgY = scaledBw;
    }

    canvas.width = dispW;
    canvas.height = dispH;

    // Fill background / border
    if (scaledBw > 0) {
      ctx.save();
      ctx.globalAlpha = config.opacity;
      ctx.fillStyle = config.color;
      ctx.fillRect(0, 0, dispW, dispH);
      ctx.restore();
    }

    // Draw base image
    ctx.drawImage(img, imgX, imgY, scaledOrigW, scaledOrigH);

    // Inside stroke
    if (config.mode === 'inside' && scaledBw > 0) {
      ctx.save();
      ctx.globalAlpha = config.opacity;
      ctx.strokeStyle = config.color;
      ctx.lineWidth = scaledBw * 2;
      ctx.strokeRect(0, 0, dispW, dispH);
      ctx.restore();
    }
  };

  useEffect(() => {
    drawPreview();
  }, [config]);

  const handleDownload = async () => {
    if (!imgRef.current) return;
    setIsExporting(true);
    try {
      const result: ProcessingResult = await renderBorderToBlob(
        imgRef.current,
        config,
        exportFormat,
        quality,
        image.name,
        image.size
      );
      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Border export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const outputWidth = config.mode === 'outside' ? image.width + config.width * 2 : image.width;
  const outputHeight = config.mode === 'outside' ? image.height + config.width * 2 : image.height;

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Square className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Add Photo Border & Frame
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Output Dimensions: {outputWidth} × {outputHeight} px
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
            <canvas
              ref={previewCanvasRef}
              className="max-h-[480px] max-w-full object-contain rounded-xl shadow-inner border border-slate-200 dark:border-slate-700"
            />
          </div>
        </div>

        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Border Controls Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Border Settings
            </div>

            {/* Mode: Inside vs Outside */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Border Placement Mode</label>
              <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-50 dark:bg-slate-800 text-xs">
                <button
                  onClick={() => setConfig(prev => ({ ...prev, mode: 'outside' }))}
                  className={`flex-1 py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    config.mode === 'outside' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Maximize className="w-3.5 h-3.5" />
                  <span>Outside Frame (Expand)</span>
                </button>
                <button
                  onClick={() => setConfig(prev => ({ ...prev, mode: 'inside' }))}
                  className={`flex-1 py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    config.mode === 'inside' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Minimize className="w-3.5 h-3.5" />
                  <span>Inside Border (Inset)</span>
                </button>
              </div>
            </div>

            {/* Border Width Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 font-medium">Border Width</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{config.width}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={config.width}
                onChange={(e) => setConfig(prev => ({ ...prev, width: parseInt(e.target.value) || 0 }))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>

            {/* Border Color & Opacity */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-500 font-medium">Border Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.color}
                    onChange={(e) => setConfig(prev => ({ ...prev, color: e.target.value }))}
                    className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                  />
                  <span className="font-mono text-xs font-semibold">{config.color}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Opacity</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(config.opacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={config.opacity}
                  onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            </div>

          </div>

          {/* Export Settings Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Export Format
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['image/jpeg', 'image/png', 'image/webp'] as ExportFormat[]).map((fmt) => (
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
                  <span>Rendering Border...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Bordered Image</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
