'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  RotateCcw, 
  Download, 
  Archive, 
  Copy, 
  Check, 
  Loader2, 
  Sparkles,
  Layers,
  Code
} from 'lucide-react';
import { LoadedImage } from '@/types/image';
import { generateFaviconPackage, FaviconPackageResult } from '@/lib/canvas/favicon';
import { generateAndDownloadZip } from '@/lib/canvas/zip-utils';
import { formatBytes } from '@/lib/canvas/file-utils';

interface FaviconViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

export const FaviconView: React.FC<FaviconViewProps> = ({ image, onResetImage }) => {
  const [bgColor, setBgColor] = useState<string>('transparent');
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [packageResult, setPackageResult] = useState<FaviconPackageResult | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  const runGenerate = async () => {
    setIsGenerating(true);
    try {
      const img = new Image();
      img.src = image.objectUrl;
      await new Promise((res) => { img.onload = res; });

      const res = await generateFaviconPackage(img, bgColor);
      setPackageResult(res);
    } catch (err) {
      console.error('Favicon generation failed:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    runGenerate();
  }, [image.objectUrl, bgColor]);

  const handleDownloadZip = async () => {
    if (!packageResult) return;
    setIsZipping(true);
    try {
      const zipItems = packageResult.files.map(f => ({
        blob: f.blob,
        filename: f.name
      }));
      await generateAndDownloadZip(zipItems, 'favicon-package.zip');
    } catch (err) {
      console.error('ZIP download failed:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const handleCopySnippet = () => {
    if (!packageResult) return;
    navigator.clipboard.writeText(packageResult.htmlSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Favicon & App Icon Generator
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Generates complete web, iOS, Android, and favicon.ico assets
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResetImage}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Upload Another</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Assets Preview Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Generated Favicon Assets</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                {packageResult?.files.length || 0} Files Ready
              </span>
            </div>

            {/* Asset Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {packageResult?.files.map((file, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-inner">
                    {file.name.endsWith('.webmanifest') ? (
                      <Code className="w-6 h-6 text-brand-500" />
                    ) : (
                      <img
                        src={URL.createObjectURL(file.blob)}
                        alt={file.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>
                  <div className="min-w-0 w-full">
                    <div className="font-mono font-semibold text-[11px] text-slate-900 dark:text-slate-100 truncate" title={file.name}>
                      {file.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {file.size > 0 ? `${file.size}×${file.size}px` : 'JSON Config'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HTML Snippet Card */}
          {packageResult && (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-400 uppercase tracking-wider">
                  HTML &lt;head&gt; Code
                </span>
                <button
                  onClick={handleCopySnippet}
                  className="px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/40 text-xs font-semibold flex items-center gap-1 hover:bg-brand-100 transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied HTML!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
                {packageResult.htmlSnippet}
              </pre>
            </div>
          )}

        </div>

        {/* Right Controls & Download Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Favicon Settings
            </div>

            {/* Background Color Picker */}
            <div className="space-y-2">
              <label className="text-xs text-slate-500 font-medium">Background Fill</label>
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

            {/* One-Click ZIP Download */}
            <button
              onClick={handleDownloadZip}
              disabled={isGenerating || isZipping}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {isZipping ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Packaging ZIP...</span>
                </>
              ) : (
                <>
                  <Archive className="w-4 h-4" />
                  <span>Download Complete Favicon ZIP</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
