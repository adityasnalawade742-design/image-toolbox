'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Download, 
  UploadCloud, 
  Grid, 
  Repeat, 
  Move, 
  Loader2, 
  Type, 
  Image as ImageIcon 
} from 'lucide-react';
import { LoadedImage, ExportFormat, ProcessingResult } from '@/types/image';
import { WatermarkConfig, renderWatermarkToBlob } from '@/lib/canvas/editor';
import { triggerDownload } from '@/lib/canvas/file-utils';

interface WatermarkViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

const PRESET_POSITIONS = [
  { label: 'TL', xPct: 15, yPct: 15, name: 'Top Left' },
  { label: 'TC', xPct: 50, yPct: 15, name: 'Top Center' },
  { label: 'TR', xPct: 85, yPct: 15, name: 'Top Right' },
  { label: 'CL', xPct: 15, yPct: 50, name: 'Center Left' },
  { label: 'C',  xPct: 50, yPct: 50, name: 'Center' },
  { label: 'CR', xPct: 85, yPct: 50, name: 'Center Right' },
  { label: 'BL', xPct: 15, yPct: 85, name: 'Bottom Left' },
  { label: 'BC', xPct: 50, yPct: 85, name: 'Bottom Center' },
  { label: 'BR', xPct: 85, yPct: 85, name: 'Bottom Right' }
];

export const WatermarkView: React.FC<WatermarkViewProps> = ({ image, onResetImage }) => {
  const [mode, setMode] = useState<'text' | 'image'>('text');
  const [config, setConfig] = useState<WatermarkConfig>({
    type: 'text',
    text: '© IMAGE TOOLBOX',
    fontFamily: 'Inter, sans-serif',
    fontSize: Math.max(20, Math.round(image.width * 0.04)),
    color: '#FFFFFF',
    opacity: 0.6,
    rotation: -25,
    xPct: 50,
    yPct: 50,
    isTiled: false,
    scale: 0.4
  });

  const [watermarkLogo, setWatermarkLogo] = useState<HTMLImageElement | null>(null);
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

  // Handle Logo Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const logo = new Image();
    logo.src = url;
    logo.onload = () => {
      setWatermarkLogo(logo);
      setConfig(prev => ({ ...prev, watermarkImg: logo }));
    };
  };

  const drawPreview = () => {
    const canvas = previewCanvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const maxDisplayW = 800;
    const scale = Math.min(1, maxDisplayW / img.naturalWidth);
    const dispW = Math.round(img.naturalWidth * scale);
    const dispH = Math.round(img.naturalHeight * scale);

    canvas.width = dispW;
    canvas.height = dispH;

    // Base image
    ctx.drawImage(img, 0, 0, dispW, dispH);

    ctx.save();
    ctx.globalAlpha = config.opacity;

    if (config.type === 'text' && config.text?.trim()) {
      const fontSize = (config.fontSize || 24) * scale;
      ctx.font = `bold ${fontSize}px ${config.fontFamily || 'Inter, sans-serif'}`;
      ctx.fillStyle = config.color || '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (config.isTiled) {
        const spacing = (config.tileSpacing || Math.round(fontSize * 4));
        const rot = ((config.rotation || -25) * Math.PI) / 180;

        for (let y = -dispH; y < dispH * 2; y += spacing) {
          for (let x = -dispW; x < dispW * 2; x += spacing * 1.5) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot);
            ctx.fillText(config.text, 0, 0);
            ctx.restore();
          }
        }
      } else {
        const posX = (config.xPct / 100) * dispW;
        const posY = (config.yPct / 100) * dispH;
        const rot = ((config.rotation || 0) * Math.PI) / 180;

        ctx.save();
        ctx.translate(posX, posY);
        if (rot !== 0) ctx.rotate(rot);
        ctx.fillText(config.text, 0, 0);
        ctx.restore();
      }
    } else if (config.type === 'image' && watermarkLogo) {
      const wmScale = (config.scale || 0.4) * scale;
      const wmWidth = (watermarkLogo.naturalWidth || watermarkLogo.width) * wmScale;
      const wmHeight = (watermarkLogo.naturalHeight || watermarkLogo.height) * wmScale;

      if (config.isTiled) {
        const spacingX = wmWidth * 1.8;
        const spacingY = wmHeight * 1.8;

        for (let y = 0; y < dispH; y += spacingY) {
          for (let x = 0; x < dispW; x += spacingX) {
            ctx.drawImage(watermarkLogo, x, y, wmWidth, wmHeight);
          }
        }
      } else {
        const posX = (config.xPct / 100) * dispW - wmWidth / 2;
        const posY = (config.yPct / 100) * dispH - wmHeight / 2;
        ctx.drawImage(watermarkLogo, posX, posY, wmWidth, wmHeight);
      }
    }

    ctx.restore();
  };

  useEffect(() => {
    drawPreview();
  }, [config, watermarkLogo]);

  // Pointer drag logic
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (config.isTiled) return;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging || config.isTiled) return;
    updatePosition(e);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(false);
  };

  const updatePosition = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)));
    const yPct = Math.max(0, Math.min(100, Math.round((y / rect.height) * 100)));
    setConfig(prev => ({ ...prev, xPct, yPct }));
  };

  const handleDownload = async () => {
    if (!imgRef.current) return;
    setIsExporting(true);
    try {
      const result: ProcessingResult = await renderWatermarkToBlob(
        imgRef.current,
        config,
        exportFormat,
        quality,
        image.name,
        image.size
      );
      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Watermark export failed:', err);
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
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Watermark Image
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Protect your copyright with custom text or transparent logo watermarks
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
              <span>
                {config.isTiled ? 'Tiled Mode Enabled' : `Position: X ${config.xPct}% • Y ${config.yPct}% (Click & drag)`}
              </span>
            </div>
          </div>
        </div>

        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Watermark Type Selector */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-50 dark:bg-slate-800 text-xs">
              <button
                onClick={() => {
                  setMode('text');
                  setConfig(prev => ({ ...prev, type: 'text' }));
                }}
                className={`flex-1 py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  mode === 'text' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                <span>Text Watermark</span>
              </button>
              <button
                onClick={() => {
                  setMode('image');
                  setConfig(prev => ({ ...prev, type: 'image' }));
                }}
                className={`flex-1 py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                  mode === 'image' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Logo / Image</span>
              </button>
            </div>

            {mode === 'text' ? (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-500 font-medium">Watermark Text</label>
                  <input
                    type="text"
                    value={config.text}
                    onChange={(e) => setConfig(prev => ({ ...prev, text: e.target.value }))}
                    placeholder="© Your Name / Brand"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Font Size</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{config.fontSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="200"
                      value={config.fontSize}
                      onChange={(e) => setConfig(prev => ({ ...prev, fontSize: parseInt(e.target.value) || 24 }))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Angle</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{config.rotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="-90"
                      max="90"
                      value={config.rotation}
                      onChange={(e) => setConfig(prev => ({ ...prev, rotation: parseInt(e.target.value) || 0 }))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="block p-3 border-2 border-dashed rounded-xl border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center cursor-pointer hover:border-brand-500 transition-colors">
                  <UploadCloud className="w-5 h-5 mx-auto text-brand-500 mb-1" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {watermarkLogo ? 'Change Logo Image' : 'Upload Logo (PNG/WebP)'}
                  </span>
                  <input
                    type="file"
                    accept="image/png,image/webp,image/jpeg"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                </label>

                {watermarkLogo && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Logo Scale</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round((config.scale || 0.4) * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.5"
                      step="0.05"
                      value={config.scale}
                      onChange={(e) => setConfig(prev => ({ ...prev, scale: parseFloat(e.target.value) }))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Opacity & Tiling */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Watermark Opacity</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(config.opacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="1.0"
                  step="0.05"
                  value={config.opacity}
                  onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.isTiled}
                  onChange={(e) => setConfig(prev => ({ ...prev, isTiled: e.target.checked }))}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="flex items-center gap-1">
                  <Repeat className="w-3.5 h-3.5 text-brand-500" />
                  <span>Tile repeating watermark pattern</span>
                </span>
              </label>
            </div>

            {/* 9-Position Preset Grid */}
            {!config.isTiled && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs text-slate-500 font-medium">Quick Position Presets</label>
                <div className="grid grid-cols-3 gap-1.5 w-36 mx-auto">
                  {PRESET_POSITIONS.map(p => (
                    <button
                      key={p.label}
                      onClick={() => setConfig(prev => ({ ...prev, xPct: p.xPct, yPct: p.yPct }))}
                      title={p.name}
                      className="py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-brand-50 hover:border-brand-400 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                  <span>Applying Full Res Watermark...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Watermarked Image</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
