'use client';

import React, { useState, useRef } from 'react';
import { 
  FlipHorizontal, 
  FlipVertical, 
  RefreshCw, 
  Download, 
  Loader2 
} from 'lucide-react';
import { LoadedImage, ExportFormat } from '@/types/image';
import { processFlip } from '@/lib/canvas/transform';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface FlipViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const FlipView: React.FC<FlipViewProps> = ({ image, onResetImage }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [quality, setQuality] = useState<number>(0.92);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleExecuteFlip = async () => {
    if (!imgRef.current) return;
    setIsProcessing(true);
    try {
      const result = await processFlip(
        imgRef.current,
        {
          horizontal: flipH,
          vertical: flipV,
          format: exportFormat,
          quality
        },
        image.name,
        image.size
      );

      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Flip failed:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Canvas Viewport (7 Cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-sm flex flex-col">
          
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Dimensions: {image.width} × {image.height} px</span>
            <span>Original Size: {formatBytes(image.size)}</span>
          </div>

          <div className="relative min-h-[380px] max-h-[500px] w-full flex items-center justify-center p-6 bg-checkerboard select-none overflow-hidden">
            <img
              ref={imgRef}
              src={image.objectUrl}
              alt="Flip source preview"
              className="max-h-[440px] w-auto object-contain block transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`
              }}
            />
          </div>

          {/* Quick Toolbar */}
          <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlipH(!flipH)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  flipH ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span>Flip Horizontally</span>
              </button>

              <button
                onClick={() => setFlipV(!flipV)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  flipV ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FlipVertical className="w-3.5 h-3.5" />
                <span>Flip Vertically</span>
              </button>
            </div>

            <button
              onClick={() => {
                setFlipH(false);
                setFlipV(false);
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>
      </div>

      {/* Control Sidebar (5 Cols) */}
      <div className="lg:col-span-5 space-y-5">
        
        {/* Flip Orientation Card */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>Mirror Direction</span>
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400">
              {flipH && flipV ? 'Both Axes' : flipH ? 'Horizontal' : flipV ? 'Vertical' : 'Standard'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFlipH(!flipH)}
              className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                flipH 
                  ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-500 text-brand-700 dark:text-brand-300' 
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <FlipHorizontal className="w-4 h-4" />
              <span>Flip X (Mirror)</span>
            </button>

            <button
              onClick={() => setFlipV(!flipV)}
              className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                flipV 
                  ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-500 text-brand-700 dark:text-brand-300' 
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <FlipVertical className="w-4 h-4" />
              <span>Flip Y (Invert)</span>
            </button>
          </div>
        </div>

        {/* Output Settings & Download */}
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

          {exportFormat !== 'image/png' && (
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
          )}

          <button
            onClick={handleExecuteFlip}
            disabled={isProcessing}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Flipping Image...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Flipped Image</span>
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
