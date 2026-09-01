'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Pipette, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles,
  MousePointerClick
} from 'lucide-react';
import { LoadedImage } from '@/types/image';
import { rgbToHex, rgbToHsl } from '@/lib/canvas/palette';

interface ColorPickerViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const ColorPickerView: React.FC<ColorPickerViewProps> = ({ image, onResetImage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [selectedColor, setSelectedColor] = useState<{
    hex: string;
    rgb: string;
    hsl: string;
    r: number;
    g: number;
    b: number;
    a: number;
  }>({
    hex: '#4F46E5',
    rgb: 'rgb(79, 70, 229)',
    hsl: 'hsl(243, 75%, 59%)',
    r: 79,
    g: 70,
    b: 229,
    a: 1
  });

  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  // Draw image on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = image.objectUrl;
    img.onload = () => {
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      ctx.drawImage(img, 0, 0);

      // Sample center pixel by default
      const centerX = Math.floor(canvas.width / 2);
      const centerY = Math.floor(canvas.height / 2);
      samplePixel(centerX, centerY);
    };
  }, [image.objectUrl]);

  const samplePixel = (canvasX: number, canvasY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const clX = Math.max(0, Math.min(canvas.width - 1, canvasX));
    const clY = Math.max(0, Math.min(canvas.height - 1, canvasY));

    const pixel = ctx.getImageData(clX, clY, 1, 1).data;
    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];
    const a = pixel[3] / 255;

    const hex = rgbToHex(r, g, b);
    const rgb = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})` : `rgb(${r}, ${g}, ${b})`;
    const hsl = rgbToHsl(r, g, b);

    setSelectedColor({ hex, rgb, hsl, r, g, b, a });
    setCoords({ x: clX, y: clY });
  };

  const handlePointerInteraction = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const canvasX = Math.floor((clientX - rect.left) * scaleX);
    const canvasY = Math.floor((clientY - rect.top) * scaleY);

    samplePixel(canvasX, canvasY);
  };

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Pipette className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Image Color Picker & Eyedropper
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Click or tap anywhere on the image to inspect pixel color codes
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
        
        {/* Interactive Canvas Workspace (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div 
            ref={containerRef}
            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[380px] overflow-hidden"
          >
            <div className="relative inline-block cursor-crosshair max-w-full">
              <canvas
                ref={canvasRef}
                onClick={handlePointerInteraction}
                onTouchStart={handlePointerInteraction}
                onTouchMove={handlePointerInteraction}
                className="max-h-[460px] max-w-full object-contain rounded-xl shadow-inner touch-none"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <MousePointerClick className="w-3.5 h-3.5 text-brand-500" />
              <span>
                {coords ? `Pixel at X: ${coords.x}, Y: ${coords.y}` : 'Click to inspect pixel'}
              </span>
            </div>
          </div>
        </div>

        {/* Color Inspector Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>Selected Color</span>
              <div 
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
                style={{ backgroundColor: selectedColor.hex }}
              />
            </div>

            {/* Large Color Preview Box */}
            <div 
              className="w-full h-24 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner flex items-end justify-between p-3 transition-all"
              style={{ backgroundColor: selectedColor.hex }}
            >
              <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white font-mono text-xs font-bold">
                {selectedColor.hex}
              </div>
            </div>

            {/* Formats and Copy Buttons */}
            <div className="space-y-2.5 text-xs">
              
              {/* HEX */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">HEX</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{selectedColor.hex}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(selectedColor.hex, 'hex')}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold flex items-center gap-1 transition-colors"
                >
                  {copiedFormat === 'hex' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFormat === 'hex' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* RGB */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">RGB</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{selectedColor.rgb}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(selectedColor.rgb, 'rgb')}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold flex items-center gap-1 transition-colors"
                >
                  {copiedFormat === 'rgb' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFormat === 'rgb' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* HSL */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">HSL</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{selectedColor.hsl}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(selectedColor.hsl, 'hsl')}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold flex items-center gap-1 transition-colors"
                >
                  {copiedFormat === 'hsl' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFormat === 'hsl' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
