'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  RefreshCw,
  Palette,
  ShieldCheck
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { processConvert } from '@/lib/canvas/convert';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface ConvertViewProps {
  image: LoadedImage;
  onResetImage: () => void;
  defaultFormat?: ExportFormat;
}

export const ConvertView: React.FC<ConvertViewProps> = ({ 
  image, 
  onResetImage, 
  defaultFormat = 'image/png' 
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [exportFormat, setExportFormat] = useState<ExportFormat>(defaultFormat);
  const [quality, setQuality] = useState<number>(0.92);
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Auto-convert preview when format, quality, or bgColor changes
  useEffect(() => {
    if (!imgRef.current) return;

    let isMounted = true;

    const runConversion = async () => {
      if (!imgRef.current) return;
      setIsProcessing(true);
      try {
        const res = await processConvert(
          imgRef.current,
          {
            format: exportFormat,
            quality,
            backgroundColor: bgColor
          },
          image.name,
          image.size
        );
        if (isMounted) {
          setResult(res);
        }
      } catch (err) {
        console.error('Conversion preview failed:', err);
      } finally {
        if (isMounted) setIsProcessing(false);
      }
    };

    runConversion();

    return () => {
      isMounted = false;
      if (result?.url) URL.revokeObjectURL(result.url);
    };
  }, [exportFormat, quality, bgColor, image]);

  const handleDownload = () => {
    if (result) {
      triggerDownload(result.blob, result.filename);
    }
  };

  const isJpeg = exportFormat === 'image/jpeg';
  const isPng = exportFormat === 'image/png';
  const isWebp = exportFormat === 'image/webp';

  const sourceExt = image.type.replace('image/', '').toUpperCase();
  const targetExt = exportFormat.replace('image/', '').toUpperCase();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Visual Preview (7 Cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-sm flex flex-col">
          
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Input: {sourceExt} ({image.width} × {image.height} px)</span>
            <span>Target: <strong className="text-brand-400">{targetExt}</strong></span>
          </div>

          <div className="relative min-h-[380px] max-h-[500px] w-full flex items-center justify-center p-4 bg-checkerboard select-none overflow-hidden">
            <img
              ref={imgRef}
              src={result?.url || image.objectUrl}
              alt="Converted preview"
              className="max-h-[440px] w-auto object-contain block"
            />
          </div>

          {/* Metrics Footer */}
          {result && (
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Status:</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready to download
                </span>
              </div>
              <div className="text-xs font-mono text-slate-300">
                Converted Size: <strong className="text-emerald-400 font-bold">{formatBytes(result.outputSize)}</strong>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Control Sidebar (5 Cols) */}
      <div className="lg:col-span-5 space-y-5">
        
        {/* Conversion Stat Banner */}
        {result && (
          <div className="p-5 rounded-2xl border border-brand-200 dark:border-brand-900/50 bg-brand-50/50 dark:bg-brand-950/20 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-800 dark:text-brand-300">
              <span>Conversion Summary</span>
              <span className="font-mono text-slate-500 font-normal">100% Client-Side</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-brand-200/60 dark:border-brand-900/40 text-xs">
              <div>
                <div className="text-slate-400 text-[11px] font-semibold">{sourceExt} (Original)</div>
                <div className="font-mono font-bold text-slate-800 dark:text-slate-200">{formatBytes(result.originalSize)}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-500" />
              <div>
                <div className="text-brand-600 dark:text-brand-400 text-[11px] font-semibold">{targetExt} (Output)</div>
                <div className="font-mono font-bold text-brand-600 dark:text-brand-400">{formatBytes(result.outputSize)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Format & Quality Settings */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
            Target Format
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(['image/png', 'image/jpeg', 'image/webp'] as ExportFormat[]).map((fmt) => (
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

          {/* Lossy Quality Slider (for JPG & WebP) */}
          {!isPng && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Quality</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                aria-label="Target format quality"
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>
          )}

          {/* Background Color for JPEG (replaces transparent pixels) */}
          {isJpeg && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-brand-500" />
                  <span>JPEG Background (for transparent areas)</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">{bgColor}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBgColor('#FFFFFF')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    bgColor === '#FFFFFF' ? 'bg-brand-50 border-brand-500 text-brand-700' : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  White
                </button>
                <button
                  type="button"
                  onClick={() => setBgColor('#000000')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    bgColor === '#000000' ? 'bg-brand-50 border-brand-500 text-brand-700' : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  Black
                </button>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  aria-label="Custom background color"
                  className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer p-0.5 bg-transparent"
                />
              </div>
            </div>
          )}

          {/* PNG Lossless Notice */}
          {isPng && (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-slate-200">Lossless PNG Output</div>
              <div className="text-[11px]">PNG output preserves full crisp lines and alpha transparency without compression artifacts.</div>
            </div>
          )}

          {/* Download Action */}
          <button
            onClick={handleDownload}
            disabled={isProcessing || !result}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Converting...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download {targetExt}</span>
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
