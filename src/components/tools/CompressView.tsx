'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  Sparkles, 
  Loader2, 
  TrendingDown, 
  ArrowRight, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { processCompress } from '@/lib/canvas/compress';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface CompressViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const CompressView: React.FC<CompressViewProps> = ({ image, onResetImage }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [quality, setQuality] = useState<number>(0.8);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Auto-compress preview whenever quality or format changes
  useEffect(() => {
    if (!imgRef.current) return;

    let isMounted = true;

    const runCompression = async () => {
      if (!imgRef.current) return;
      setIsProcessing(true);
      try {
        const res = await processCompress(
          imgRef.current,
          {
            quality,
            format: exportFormat
          },
          image.name,
          image.size
        );
        if (isMounted) {
          setResult(res);
        }
      } catch (err) {
        console.error('Compression preview failed:', err);
      } finally {
        if (isMounted) setIsProcessing(false);
      }
    };

    runCompression();

    return () => {
      isMounted = false;
      if (result?.url) URL.revokeObjectURL(result.url);
    };
  }, [quality, exportFormat, image]);

  const handleDownload = () => {
    if (result) {
      triggerDownload(result.blob, result.filename);
    }
  };

  const isPng = exportFormat === 'image/png';
  const hasReduction = result && result.outputSize < result.originalSize;
  const reductionDiff = result ? Math.max(0, result.originalSize - result.outputSize) : 0;
  const reductionPercent = result && result.originalSize > 0
    ? Math.max(0, ((result.originalSize - result.outputSize) / result.originalSize) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Visual Preview (7 Cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-sm flex flex-col">
          
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Dimensions: {image.width} × {image.height} px</span>
            <span>Original: {formatBytes(image.size)}</span>
          </div>

          <div className="relative min-h-[380px] max-h-[500px] w-full flex items-center justify-center p-4 bg-checkerboard select-none overflow-hidden">
            <img
              ref={imgRef}
              src={result?.url || image.objectUrl}
              alt="Compression preview"
              className="max-h-[440px] w-auto object-contain block"
            />
          </div>

          {/* Savings Metric Footer */}
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
                Compressed: <strong className="text-emerald-400 font-bold">{formatBytes(result.outputSize)}</strong>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Control Sidebar (5 Cols) */}
      <div className="lg:col-span-5 space-y-5">
        
        {/* Live Reduction Stat Card */}
        {result && (
          <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4" /> Size Reduction
              </span>
              <span className="text-lg font-extrabold font-mono text-emerald-700 dark:text-emerald-400">
                {hasReduction ? `-${reductionPercent}%` : 'Optimal Size'}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-900/40 text-xs">
              <div>
                <div className="text-slate-400 text-[11px]">Original</div>
                <div className="font-mono font-bold text-slate-800 dark:text-slate-200">{formatBytes(result.originalSize)}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-500" />
              <div>
                <div className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">Output ({exportFormat.replace('image/', '').toUpperCase()})</div>
                <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{formatBytes(result.outputSize)}</div>
              </div>
            </div>

            {hasReduction && (
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                Saved {formatBytes(reductionDiff)} without visible loss of sharpness.
              </div>
            )}
          </div>
        )}

        {/* Compression Settings */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
            Target Format
          </div>

          {/* Format Selector */}
          <div className="grid grid-cols-3 gap-2">
            {(['image/webp', 'image/jpeg', 'image/png'] as ExportFormat[]).map((fmt) => (
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

          {/* Quality Slider (for WebP & JPG) */}
          {!isPng ? (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-slate-700 dark:text-slate-300">Compression Quality</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                aria-label="Compression Quality"
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Small File (40%)</span>
                <span>Balanced (75-85%)</span>
                <span>High Quality (95%)</span>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="font-semibold text-slate-900 dark:text-slate-200">PNG Lossless Encoding</div>
              <div className="text-[11px]">PNG retains full lossless pixel quality and alpha transparency. For higher file size reduction, select WebP or JPG.</div>
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
                <span>Optimizing...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Compressed Image</span>
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
