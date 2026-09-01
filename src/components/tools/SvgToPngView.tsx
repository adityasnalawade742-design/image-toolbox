'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileCode, 
  Download, 
  UploadCloud, 
  RotateCcw, 
  Loader2, 
  Sparkles,
  AlertCircle,
  Sliders
} from 'lucide-react';
import { sanitizeSvgMarkup, rasterizeSvgToPng } from '@/lib/canvas/svg';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

export const SvgToPngView: React.FC = () => {
  const [svgInput, setSvgInput] = useState<string>('');
  const [scale, setScale] = useState<number>(2);
  const [customWidth, setCustomWidth] = useState<number | undefined>(undefined);
  const [customHeight, setCustomHeight] = useState<number | undefined>(undefined);
  const [bgColor, setBgColor] = useState<string>('transparent');
  const [error, setError] = useState<string | null>(null);
  const [isRasterizing, setIsRasterizing] = useState<boolean>(false);
  const [previewPngUrl, setPreviewPngUrl] = useState<string | null>(null);
  const [outputBytes, setOutputBytes] = useState<number>(0);
  const [filename, setFilename] = useState<string>('vector-graphic.svg');

  // Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setFilename(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setSvgInput(reader.result as string);
    };
    reader.readAsText(file);
  };

  const handleRasterize = async () => {
    setError(null);
    if (!svgInput.trim()) {
      setError('Please upload an SVG file or paste SVG markup.');
      return;
    }

    setIsRasterizing(true);
    try {
      const res = await rasterizeSvgToPng(
        svgInput,
        scale,
        customWidth,
        customHeight,
        bgColor,
        filename
      );
      setPreviewPngUrl(res.url);
      setOutputBytes(res.outputSize);
    } catch (err: any) {
      console.error('SVG Rasterization failed:', err);
      setError(err.message || 'Failed to render SVG to PNG.');
    } finally {
      setIsRasterizing(false);
    }
  };

  useEffect(() => {
    if (svgInput.trim()) {
      handleRasterize();
    }
  }, [svgInput, scale, bgColor]);

  const handleDownload = () => {
    if (!previewPngUrl) return;
    fetch(previewPngUrl)
      .then(res => res.blob())
      .then(blob => {
        triggerDownload(blob, filename.replace(/\.svg$/i, '') + '.png');
      });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              SVG to High-Resolution PNG Converter
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Safely rasterize vector SVG graphics at up to 8x resolution
            </p>
          </div>
        </div>

        {svgInput && (
          <button
            onClick={() => {
              setSvgInput('');
              setPreviewPngUrl(null);
              setError(null);
            }}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Input & Preview Workspace (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {!previewPngUrl ? (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
              
              {/* File Upload Dropzone */}
              <label className="block p-6 border-2 border-dashed rounded-xl border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center cursor-pointer hover:border-brand-500 transition-colors">
                <UploadCloud className="w-8 h-8 mx-auto text-brand-500 mb-2" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">
                  Click to Upload SVG File
                </span>
                <span className="text-xs text-slate-500">Supports all standard XML/SVG vector formats</span>
                <input
                  type="file"
                  accept=".svg,image/svg+xml"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>

              <div className="flex items-center gap-3">
                <div className="flex-1 border-b border-slate-200 dark:border-slate-700" />
                <span className="text-xs text-slate-400 uppercase font-mono">Or Paste SVG Markup</span>
                <div className="flex-1 border-b border-slate-200 dark:border-slate-700" />
              </div>

              <textarea
                rows={6}
                value={svgInput}
                onChange={(e) => setSvgInput(e.target.value)}
                placeholder="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>...</svg>"
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed focus:border-brand-500"
              />

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
              <div className="p-2 rounded-2xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px]">
                <img
                  src={previewPngUrl}
                  alt="Rasterized PNG"
                  className="max-h-[460px] max-w-full object-contain rounded-xl shadow-inner border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
          )}

        </div>

        {/* Right Controls Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Rasterization Settings
            </div>

            {/* Resolution Scale Multipliers */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 font-medium">Resolution Multiplier</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { label: '1x', scale: 1 },
                  { label: '2x HD', scale: 2 },
                  { label: '4x 4K', scale: 4 },
                  { label: '8x Print', scale: 8 }
                ].map(s => (
                  <button
                    key={s.scale}
                    onClick={() => setScale(s.scale)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-colors ${
                      scale === s.scale
                        ? 'bg-brand-600 text-white border-brand-500'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Fill */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs text-slate-500 font-medium">Background Color</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBgColor('transparent')}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
                    bgColor === 'transparent'
                      ? 'bg-brand-600 text-white border-brand-500'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Transparent
                </button>
                <div className="flex items-center gap-2 pl-2">
                  <input
                    type="color"
                    value={bgColor === 'transparent' ? '#FFFFFF' : bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                  />
                  <span className="font-mono text-xs">{bgColor}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={!previewPngUrl || isRasterizing}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isRasterizing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Rasterizing SVG...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Raster PNG</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
