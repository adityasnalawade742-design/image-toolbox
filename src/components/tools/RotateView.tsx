'use client';

import React, { useState, useRef } from 'react';
import { 
  RotateCcw, 
  RotateCw, 
  RefreshCw, 
  Download, 
  Loader2, 
  Sliders 
} from 'lucide-react';
import { LoadedImage, ExportFormat } from '@/types/image';
import { processRotate } from '@/lib/canvas/transform';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface RotateViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const RotateView: React.FC<RotateViewProps> = ({ image, onResetImage }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const [stepAngle, setStepAngle] = useState<number>(0); // 0, 90, 180, 270
  const [fineAngle, setFineAngle] = useState<number>(0); // -45 to +45
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [quality, setQuality] = useState<number>(0.92);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const totalAngle = (stepAngle + fineAngle) % 360;

  // Calculate transformed bounding dimensions for display
  const rad = (totalAngle * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad));
  const cos = Math.abs(Math.cos(rad));
  const rotWidth = Math.round(image.width * cos + image.height * sin);
  const rotHeight = Math.round(image.width * sin + image.height * cos);

  const handleExecuteRotate = async () => {
    if (!imgRef.current) return;
    setIsProcessing(true);
    try {
      const result = await processRotate(
        imgRef.current,
        {
          angle: totalAngle,
          format: exportFormat,
          quality
        },
        image.name,
        image.size
      );

      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Rotate failed:', err);
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
            <span>Rotated: <strong className="text-brand-400">{rotWidth} × {rotHeight} px</strong> ({totalAngle}°)</span>
            <span>Original: {image.width} × {image.height} px</span>
          </div>

          <div className="relative min-h-[380px] max-h-[500px] w-full flex items-center justify-center p-6 bg-checkerboard select-none overflow-hidden">
            <img
              ref={imgRef}
              src={image.objectUrl}
              alt="Rotate source"
              className="max-h-[440px] w-auto object-contain block transition-transform duration-200 ease-out"
              style={{
                transform: `rotate(${totalAngle}deg)`
              }}
            />
          </div>

          {/* Quick Toolbar */}
          <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStepAngle((a) => (a - 90 + 360) % 360)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>-90° Left</span>
              </button>

              <button
                onClick={() => setStepAngle((a) => (a + 90) % 360)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>+90° Right</span>
              </button>

              <button
                onClick={() => setStepAngle((a) => (a + 180) % 360)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <span>180° Flip</span>
              </button>
            </div>

            <button
              onClick={() => {
                setStepAngle(0);
                setFineAngle(0);
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>

        {/* Fine Angle Slider */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-2 text-xs">
          <div className="flex justify-between text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Sliders className="w-3.5 h-3.5 text-brand-500" />
              <span>Fine Adjustment</span>
            </span>
            <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{fineAngle}°</span>
          </div>
          <input
            type="range"
            min="-45"
            max="45"
            step="1"
            value={fineAngle}
            onChange={(e) => setFineAngle(parseInt(e.target.value))}
            aria-label="Fine Rotation Slider"
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

      </div>

      {/* Control Sidebar (5 Cols) */}
      <div className="lg:col-span-5 space-y-5">
        
        {/* Preset Angles */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>Rotation Angle</span>
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold">{totalAngle}°</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[0, 90, 180, 270].map((deg) => (
              <button
                key={deg}
                onClick={() => {
                  setStepAngle(deg);
                  setFineAngle(0);
                }}
                className={`py-2 rounded-xl text-xs font-semibold border transition-colors ${
                  stepAngle === deg && fineAngle === 0
                    ? 'bg-brand-600 text-white border-brand-500'
                    : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {deg}°
              </button>
            ))}
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
            onClick={handleExecuteRotate}
            disabled={isProcessing}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Rotating Image...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Rotated Image</span>
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
