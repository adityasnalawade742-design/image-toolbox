'use client';

import React, { useState } from 'react';
import { 
  FileCode, 
  Download, 
  Check, 
  AlertCircle, 
  RotateCcw, 
  Loader2, 
  Sparkles,
  Info
} from 'lucide-react';
import { parseDataUri } from '@/lib/canvas/base64';
import { ExportFormat } from '@/types/image';
import { canvasToBlob, triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

export const Base64ToImageView: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [decodedImg, setDecodedImg] = useState<{
    src: string;
    width: number;
    height: number;
    mimeType: string;
    sizeBytes: number;
  } | null>(null);

  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/png');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleDecode = () => {
    setError(null);
    if (!inputString.trim()) {
      setError('Please paste a Base64 string or Data URI first.');
      return;
    }

    const parsed = parseDataUri(inputString);
    if (!parsed.valid || !parsed.dataUri) {
      setError(parsed.error || 'Failed to parse Base64 image.');
      return;
    }

    const img = new Image();
    img.onload = () => {
      setDecodedImg({
        src: parsed.dataUri!,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        mimeType: parsed.mimeType || 'image/png',
        sizeBytes: parsed.sizeBytes || 0
      });
    };
    img.onerror = () => {
      setError('The provided Base64 string is not a valid or supported image payload.');
    };
    img.src = parsed.dataUri;
  };

  const handleReset = () => {
    setInputString('');
    setDecodedImg(null);
    setError(null);
  };

  const handleDownload = async () => {
    if (!decodedImg) return;
    setIsExporting(true);
    try {
      const img = new Image();
      img.src = decodedImg.src;
      await new Promise(r => { img.onload = r; });

      const canvas = document.createElement('canvas');
      canvas.width = decodedImg.width;
      canvas.height = decodedImg.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas 2D context');

      if (exportFormat === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      const blob = await canvasToBlob(canvas, exportFormat, 0.92);
      const ext = exportFormat === 'image/jpeg' ? 'jpg' : exportFormat === 'image/webp' ? 'webp' : 'png';
      triggerDownload(blob, `decoded-image.${ext}`);
    } catch (err) {
      console.error('Download failed:', err);
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
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Base64 to Image Decoder
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Paste Data URI or raw Base64 string to decode and view full resolution photo
            </p>
          </div>
        </div>

        {decodedImg && (
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Decode Another</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Input & Preview (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {!decodedImg ? (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-500 font-medium">
                  Paste Base64 or Data URI String
                </label>
                <textarea
                  rows={8}
                  value={inputString}
                  onChange={(e) => setInputString(e.target.value)}
                  placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA... OR raw Base64 string"
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed focus:border-brand-500"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleDecode}
                disabled={!inputString.trim()}
                className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                <span>Decode to Image</span>
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
              <div className="p-2 rounded-2xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px]">
                <img
                  src={decodedImg.src}
                  alt="Decoded"
                  className="max-h-[460px] max-w-full object-contain rounded-xl shadow-inner border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
          )}

        </div>

        {/* Right Info & Export Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {decodedImg ? (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
              <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                Decoded Image Details
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Dimensions:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{decodedImg.width} × {decodedImg.height} px</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">MIME Type:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{decodedImg.mimeType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Decoded File Size:</span>
                  <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{formatBytes(decodedImg.sizeBytes)}</span>
                </div>
              </div>

              {/* Format selection */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs text-slate-500 font-medium">Download Format</label>
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
              </div>

              <button
                onClick={handleDownload}
                disabled={isExporting}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Rendering...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Image File</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-brand-500" />
                <span>Supported Formats</span>
              </div>
              <p>
                You can paste complete Data URIs (e.g. <code className="font-mono text-brand-600">data:image/png;base64,...</code>) or raw base64 character strings.
              </p>
              <p>
                Supported formats: <strong>PNG, JPEG, WebP, GIF, SVG</strong>. Decoding executes 100% locally in your browser memory.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
