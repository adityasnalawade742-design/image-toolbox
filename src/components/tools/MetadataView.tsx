'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Download, 
  RotateCcw, 
  MapPinOff, 
  CameraOff, 
  CalendarOff, 
  Lock, 
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { stripImageMetadata } from '@/lib/canvas/metadata';
import { formatBytes, triggerDownload } from '@/lib/canvas/file-utils';

interface MetadataViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const MetadataView: React.FC<MetadataViewProps> = ({ image, onResetImage }) => {
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/jpeg');
  const [quality, setQuality] = useState<number>(0.92);
  const [result, setResult] = useState<ProcessingResult | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const runStrip = async () => {
    if (!imgRef.current) return;
    setIsProcessing(true);
    try {
      const res = await stripImageMetadata(
        imgRef.current,
        { format: exportFormat, quality },
        image.name,
        image.size
      );
      setResult(res);
    } catch (err) {
      console.error('Metadata removal failed:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = image.objectUrl;
    img.onload = () => {
      imgRef.current = img;
      runStrip();
    };
  }, [image.objectUrl]);

  useEffect(() => {
    if (imgRef.current) {
      runStrip();
    }
  }, [exportFormat, quality]);

  return (
    <div className="space-y-6">
      
      {/* Top Status Bar */}
      <div className="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              EXIF & Location Privacy Guard
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Raw pixel data re-encoded in browser memory — Zero metadata preserved
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
        
        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Metadata Stripping Guarantees Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3">
            <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider">
              Removed Information Tags
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <MapPinOff className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">GPS Coordinates</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CameraOff className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Camera & Lens</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <CalendarOff className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Date & Timestamp</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Serial & Device ID</span>
              </div>
            </div>
          </div>

          {/* Export Settings Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Clean Output Format
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

            {exportFormat !== 'image/png' && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Visual Quality</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.0"
                  step="0.02"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            )}

            {/* Metrics Comparison */}
            {result && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Original Size:</span>
                  <span className="font-mono">{formatBytes(image.size)}</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-100">
                  <span>Cleaned File Size:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">{formatBytes(result.outputSize)}</span>
                </div>
              </div>
            )}

            {/* Download Button */}
            <button
              onClick={() => result && triggerDownload(result.blob, result.filename)}
              disabled={!result || isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sanitizing...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Clean Image</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Preview Panel (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[380px]">
            <img
              src={result?.url || image.objectUrl}
              alt="Cleaned preview"
              className="max-h-[460px] max-w-full object-contain rounded-xl shadow-inner"
            />
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{image.width} × {image.height} px • Metadata-Free Buffer</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
