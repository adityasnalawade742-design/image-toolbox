'use client';

import React, { useState, useEffect } from 'react';
import { 
  Info, 
  RotateCcw, 
  Copy, 
  Check, 
  Crop, 
  Maximize2, 
  Minimize2, 
  ShieldCheck,
  FileCode,
  Eye,
  Layers,
  Cpu
} from 'lucide-react';
import { LoadedImage } from '@/types/image';
import { analyzeImage, ImageAnalysisData } from '@/lib/canvas/analyzer';
import { formatBytes } from '@/lib/canvas/file-utils';

interface AnalyzerViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const AnalyzerView: React.FC<AnalyzerViewProps> = ({ image, onResetImage }) => {
  const [data, setData] = useState<ImageAnalysisData | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = image.objectUrl;
    img.onload = async () => {
      const res = await analyzeImage(img, image.file);
      setData(res);
    };
  }, [image]);

  const handleCopyReport = () => {
    if (!data) return;
    const text = `Image Analysis Report
Filename: ${data.filename}
MIME Type: ${data.mimeType}
File Size: ${formatBytes(data.fileSize)}
Dimensions: ${data.width} × ${data.height} px
Aspect Ratio: ${data.aspectRatio} (${data.orientation})
Megapixels: ${data.megapixels} MP
Transparency: ${data.hasTransparency ? 'Yes (Alpha Channel present)' : 'No (Opaque)'}
Color Depth: ${data.colorDepth}
Raw Memory Footprint: ${formatBytes(data.rawMemorySize)}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Image Analysis & Properties
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              {data ? `${data.width} × ${data.height} px • ${formatBytes(data.fileSize)}` : 'Inspecting...'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyReport}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Report!' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={onResetImage}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Analyze Another</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Properties Panel (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Basic Information Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <Eye className="w-4 h-4 text-brand-500" />
              <span>Basic Information</span>
            </div>

            {data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">File Name</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100 truncate" title={data.filename}>
                    {data.filename}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">File Size</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {formatBytes(data.fileSize)}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">Dimensions</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {data.width} × {data.height} px
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">Aspect Ratio & Orientation</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {data.aspectRatio} ({data.orientation})
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">Resolution</span>
                  <div className="font-mono font-semibold text-brand-600 dark:text-brand-400">
                    {data.megapixels} Megapixels
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">MIME Type</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {data.mimeType}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Technical Details Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Technical & Memory Specs</span>
            </div>

            {data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">Alpha Transparency</span>
                  <div className={`font-semibold ${data.hasTransparency ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                    {data.hasTransparency ? 'Yes (Transparent Alpha)' : 'No (Fully Opaque)'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-500">Color Depth</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {data.colorDepth}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1 sm:col-span-2">
                  <span className="text-slate-500">Uncompressed RAM Footprint</span>
                  <div className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    ~{formatBytes(data.rawMemorySize)} (Raw 32-bit RGBA)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Next Steps for this Image:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <a
                href="/crop-image"
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-500 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 transition-colors"
              >
                <Crop className="w-3.5 h-3.5" />
                <span>Crop</span>
              </a>
              <a
                href="/resize-image"
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-500 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Resize</span>
              </a>
              <a
                href="/compress-image"
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-500 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 transition-colors"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Compress</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Preview Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[360px]">
            <img
              src={image.objectUrl}
              alt="Analyzed image preview"
              className="max-h-[420px] max-w-full object-contain rounded-xl shadow-inner"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
