'use client';

import React, { useState, useEffect } from 'react';
import { 
  Binary, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  Code, 
  AlertTriangle 
} from 'lucide-react';
import { LoadedImage } from '@/types/image';
import { fileToDataUri } from '@/lib/canvas/base64';
import { formatBytes, triggerDownload } from '@/lib/canvas/file-utils';

interface ImageToBase64ViewProps {
  image: LoadedImage;
  onResetImage: () => void;
  defaultMode?: 'data-uri' | 'raw';
}

export const ImageToBase64View: React.FC<ImageToBase64ViewProps> = ({
  image,
  onResetImage,
  defaultMode = 'data-uri'
}) => {
  const [mode, setMode] = useState<'data-uri' | 'raw'>(defaultMode);
  const [dataUri, setDataUri] = useState<string>('');
  const [rawBase64, setRawBase64] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const convert = async () => {
      try {
        const uri = await fileToDataUri(image.file);
        setDataUri(uri);
        const raw = uri.replace(/^data:image\/[a-zA-Z0-9.+_-]+;base64,/, '');
        setRawBase64(raw);
      } catch (err) {
        console.error('Base64 conversion failed:', err);
      }
    };
    convert();
  }, [image]);

  const activeContent = mode === 'data-uri' ? dataUri : rawBase64;
  const isLarge = activeContent.length > 500000; // > 500KB

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([activeContent], { type: 'text/plain;charset=utf-8' });
    const filename = `${image.name.replace(/\.[^/.]+$/, '')}-${mode}.txt`;
    triggerDownload(blob, filename);
  };

  const base64Bytes = Math.round((rawBase64.length * 3) / 4);

  return (
    <div className="space-y-6">
      
      {/* Top Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              {mode === 'data-uri' ? 'Image to Data URI' : 'Image to Base64 String'}
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Base64 Length: {activeContent.length.toLocaleString()} characters ({formatBytes(base64Bytes)})
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
        
        {/* Output String & Controls (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            
            {/* Mode Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex rounded-xl border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-50 dark:bg-slate-800 text-xs">
                <button
                  onClick={() => setMode('data-uri')}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                    mode === 'data-uri' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Data URI (with prefix)</span>
                </button>
                <button
                  onClick={() => setMode('raw')}
                  className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                    mode === 'raw' ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Binary className="w-3.5 h-3.5" />
                  <span>Raw Base64</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy String'}</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
              </div>
            </div>

            {/* Warning if large */}
            {isLarge && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>
                  Large Base64 payload. Preview is truncated to ensure smooth browser rendering. Full payload will be copied/downloaded.
                </span>
              </div>
            )}

            {/* Textarea Display */}
            <textarea
              readOnly
              rows={8}
              value={isLarge ? activeContent.slice(0, 15000) + '\n\n... [TRUNCATED FOR DISPLAY — FULL PAYLOAD IN CLIPBOARD / DOWNLOAD]' : activeContent}
              className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed focus:outline-none select-all"
            />

          </div>

        </div>

        {/* Diagnostic Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider">
              Payload Metrics
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Original Binary Size:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{formatBytes(image.size)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Base64 Encoded Size:</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{formatBytes(base64Bytes)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Encoding Overhead:</span>
                <span className="font-mono font-bold text-amber-600">+33.3%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">MIME Type:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{image.type}</span>
              </div>
            </div>

            {/* Quick HTML/CSS embedding snippet */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs text-slate-500 font-medium">HTML &lt;img&gt; Usage</span>
              <pre className="p-2.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto leading-relaxed">
                {`<img src="data:${image.type};base64,...">`}
              </pre>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
