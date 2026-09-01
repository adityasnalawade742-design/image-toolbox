'use client';

import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles,
  Download
} from 'lucide-react';
import { LoadedImage } from '@/types/image';
import { extractDominantColors, ColorInfo } from '@/lib/canvas/palette';

interface PaletteViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const PaletteView: React.FC<PaletteViewProps> = ({ image, onResetImage }) => {
  const [colorCount, setColorCount] = useState<3 | 5 | 8>(5);
  const [colors, setColors] = useState<ColorInfo[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = image.objectUrl;
    img.onload = () => {
      const extracted = extractDominantColors(img, colorCount);
      setColors(extracted);
    };
  }, [image.objectUrl, colorCount]);

  const handleCopySingle = (hex: string, index: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const paletteString = colors.map(c => c.hex).join(', ');
    navigator.clipboard.writeText(paletteString);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Image Color Palette Generator
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Extract dominant color harmonies and hex codes from any photo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyAll}
            disabled={colors.length === 0}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedAll ? 'Copied Full Palette!' : 'Copy Full Palette'}</span>
          </button>

          <button
            onClick={onResetImage}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Generate Another</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Controls & Swatches Panel (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Palette Size Selector Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-slate-100">
              <span>Palette Density</span>
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 text-xs bg-slate-50 dark:bg-slate-800">
                {([3, 5, 8] as const).map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setColorCount(cnt)}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      colorCount === cnt ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {cnt} Colors
                  </button>
                ))}
              </div>
            </div>

            {/* Continuous Connected Palette Strip */}
            <div className="h-16 w-full rounded-xl overflow-hidden flex shadow-inner border border-slate-200 dark:border-slate-700">
              {colors.map((c, idx) => (
                <div
                  key={idx}
                  className="h-full flex-1 transition-all hover:scale-105 cursor-pointer relative group"
                  style={{ backgroundColor: c.hex }}
                  onClick={() => handleCopySingle(c.hex, idx)}
                  title={`Click to copy ${c.hex}`}
                />
              ))}
            </div>
          </div>

          {/* Color Swatch List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="min-w-0">
                    <div className="font-mono font-bold text-slate-900 dark:text-slate-100">
                      {color.hex}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono truncate">
                      {color.rgb}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopySingle(color.hex, idx)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Preview Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[360px]">
            <img
              src={image.objectUrl}
              alt="Source palette image"
              className="max-h-[420px] max-w-full object-contain rounded-xl shadow-inner"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
