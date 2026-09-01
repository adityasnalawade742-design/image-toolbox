'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Type, 
  RotateCcw, 
  Download, 
  Bold, 
  Italic, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Move,
  Loader2,
  Sparkles
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { TextOverlayConfig, renderTextOverlayToBlob } from '@/lib/canvas/editor';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface AddTextViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

const FONTS = [
  { name: 'Inter / Modern Sans', value: 'Inter, sans-serif' },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Times New Roman', value: '"Times New Roman", serif' },
  { name: 'Courier New / Mono', value: '"Courier New", monospace' },
  { name: 'Impact / Headline', value: 'Impact, sans-serif' }
];

export const AddTextView: React.FC<AddTextViewProps> = ({ image, onResetImage }) => {
  const [config, setConfig] = useState<TextOverlayConfig>({
    text: 'Your Text Here',
    fontFamily: 'Inter, sans-serif',
    fontSize: Math.max(24, Math.round(image.width * 0.04)),
    color: '#FFFFFF',
    opacity: 1,
    bold: true,
    italic: false,
    align: 'center',
    xPct: 50,
    yPct: 50,
    hasShadow: true,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowBlur: 8
  });

  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/png');
  const [quality, setQuality] = useState<number>(0.92);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

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

  // Redraw preview on config change
  const drawPreview = () => {
    const canvas = previewCanvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use a display-scale canvas for smooth performance
    const maxDisplayW = 800;
    const scale = Math.min(1, maxDisplayW / img.naturalWidth);
    const dispW = Math.round(img.naturalWidth * scale);
    const dispH = Math.round(img.naturalHeight * scale);

    canvas.width = dispW;
    canvas.height = dispH;

    // Draw base
    ctx.drawImage(img, 0, 0, dispW, dispH);

    // Draw text overlay
    if (config.text.trim()) {
      ctx.save();
      ctx.globalAlpha = config.opacity;

      const scaledFontSize = config.fontSize * scale;
      const fontStyle = `${config.italic ? 'italic ' : ''}${config.bold ? 'bold ' : ''}${scaledFontSize}px ${config.fontFamily}`;
      ctx.font = fontStyle;
      ctx.fillStyle = config.color;
      ctx.textAlign = config.align;
      ctx.textBaseline = 'middle';

      if (config.hasShadow) {
        ctx.shadowColor = config.shadowColor || 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = (config.shadowBlur || 8) * scale;
        ctx.shadowOffsetX = 2 * scale;
        ctx.shadowOffsetY = 2 * scale;
      }

      const posX = (config.xPct / 100) * dispW;
      const posY = (config.yPct / 100) * dispH;

      const lines = config.text.split('\n');
      const lineHeight = scaledFontSize * 1.25;
      const startY = posY - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, idx) => {
        ctx.fillText(line, posX, startY + idx * lineHeight);
      });

      ctx.restore();
    }
  };

  useEffect(() => {
    drawPreview();
  }, [config]);

  // Pointer drag logic
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePositionFromPointer(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    updatePositionFromPointer(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(false);
  };

  const updatePositionFromPointer = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)));
    const yPct = Math.max(0, Math.min(100, Math.round((y / rect.height) * 100)));

    setConfig(prev => ({ ...prev, xPct, yPct }));
  };

  // Full-Resolution Export
  const handleDownload = async () => {
    if (!imgRef.current) return;
    setIsExporting(true);
    try {
      const result: ProcessingResult = await renderTextOverlayToBlob(
        imgRef.current,
        config,
        exportFormat,
        quality,
        image.name,
        image.size
      );
      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Text export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Add Text Overlay
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Drag text anywhere over the image or adjust coordinates below
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
            <div className="relative inline-block cursor-move touch-none max-w-full">
              <canvas
                ref={previewCanvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="max-h-[480px] max-w-full object-contain rounded-xl shadow-inner border border-slate-200 dark:border-slate-700"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Move className="w-3.5 h-3.5 text-brand-500" />
              <span>Position: X {config.xPct}% • Y {config.yPct}% (Click & drag anywhere)</span>
            </div>
          </div>
        </div>

        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Typography Controls Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Text & Style
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Text Content</label>
              <textarea
                rows={2}
                value={config.text}
                onChange={(e) => setConfig(prev => ({ ...prev, text: e.target.value }))}
                placeholder="Enter text to overlay..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:border-brand-500"
              />
            </div>

            {/* Font Family */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Font Family</label>
              <select
                value={config.fontFamily}
                onChange={(e) => setConfig(prev => ({ ...prev, fontFamily: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500"
              >
                {FONTS.map(f => (
                  <option key={f.value} value={f.value}>{f.name}</option>
                ))}
              </select>
            </div>

            {/* Font Size & Alignment */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Size</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{config.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="300"
                  value={config.fontSize}
                  onChange={(e) => setConfig(prev => ({ ...prev, fontSize: parseInt(e.target.value) || 24 }))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-500 font-medium">Alignment</label>
                <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-50 dark:bg-slate-800">
                  {(['left', 'center', 'right'] as const).map(al => (
                    <button
                      key={al}
                      onClick={() => setConfig(prev => ({ ...prev, align: al }))}
                      className={`flex-1 py-1 rounded-lg text-xs flex items-center justify-center transition-colors ${
                        config.align === al ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {al === 'left' && <AlignLeft className="w-3.5 h-3.5" />}
                      {al === 'center' && <AlignCenter className="w-3.5 h-3.5" />}
                      {al === 'right' && <AlignRight className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Formatting: Bold, Italic, Shadow */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setConfig(prev => ({ ...prev, bold: !prev.bold }))}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  config.bold 
                    ? 'bg-brand-600 text-white border-brand-500' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Bold className="w-3.5 h-3.5" />
                <span>Bold</span>
              </button>

              <button
                onClick={() => setConfig(prev => ({ ...prev, italic: !prev.italic }))}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  config.italic 
                    ? 'bg-brand-600 text-white border-brand-500' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Italic className="w-3.5 h-3.5" />
                <span>Italic</span>
              </button>

              <button
                onClick={() => setConfig(prev => ({ ...prev, hasShadow: !prev.hasShadow }))}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  config.hasShadow 
                    ? 'bg-brand-600 text-white border-brand-500' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Shadow</span>
              </button>
            </div>

            {/* Text Color & Opacity */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-500 font-medium">Text Color</label>
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

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Rendering Full Res...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Image with Text</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
