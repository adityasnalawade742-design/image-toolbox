'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  Trash2, 
  RefreshCw, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Archive, 
  Plus, 
  Lock, 
  Unlock,
  StopCircle,
  FileImage,
  Layers
} from 'lucide-react';
import { ExportFormat } from '@/types/image';
import { processResize } from '@/lib/canvas/resize';
import { loadImageFromFile, formatBytes, triggerDownload } from '@/lib/canvas/file-utils';
import { generateAndDownloadZip } from '@/lib/canvas/zip-utils';

export interface BulkFileItem {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: 'queued' | 'processing' | 'complete' | 'failed' | 'cancelled';
  outputBlob?: Blob;
  outputUrl?: string;
  outputSize?: number;
  outputWidth?: number;
  outputHeight?: number;
  outputFilename?: string;
  error?: string;
}

interface BulkResizeViewProps {
  initialFiles: File[];
  onReset: () => void;
}

export const BulkResizeView: React.FC<BulkResizeViewProps> = ({ initialFiles, onReset }) => {
  const [items, setItems] = useState<BulkFileItem[]>(() => 
    initialFiles.map((file, idx) => ({
      id: `bulk-${idx}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'queued'
    }))
  );

  // Resize Configuration
  const [widthStr, setWidthStr] = useState<string>('1280');
  const [heightStr, setHeightStr] = useState<string>('720');
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(false);
  const [usePercent, setUsePercent] = useState<boolean>(false);
  const [scalePercent, setScalePercent] = useState<number>(50);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [quality, setQuality] = useState<number>(0.85);

  // Processing & Queue State
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isCancelledRef = useRef<boolean>(false);

  const targetWidth = Math.max(1, parseInt(widthStr) || 1280);
  const targetHeight = Math.max(1, parseInt(heightStr) || 720);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      items.forEach(item => {
        if (item.outputUrl) URL.revokeObjectURL(item.outputUrl);
      });
    };
  }, [items]);

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const newFiles = Array.from(e.target.files);
    const newItems: BulkFileItem[] = newFiles.map((file, idx) => ({
      id: `bulk-add-${idx}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'queued'
    }));
    setItems(prev => [...prev, ...newItems].slice(0, 50));
  };

  const handleRemoveItem = (id: string) => {
    setItems(prev => {
      const target = prev.find(i => i.id === id);
      if (target?.outputUrl) URL.revokeObjectURL(target.outputUrl);
      return prev.filter(i => i.id !== id);
    });
  };

  const handleCancelProcessing = () => {
    isCancelledRef.current = true;
    setIsProcessing(false);
  };

  // Sequential, memory-safe batch execution
  const handleStartBatchProcessing = async () => {
    setIsProcessing(true);
    isCancelledRef.current = false;

    for (let i = 0; i < items.length; i++) {
      if (isCancelledRef.current) {
        setItems(prev => prev.map((it, idx) => idx >= i ? { ...it, status: 'cancelled' } : it));
        break;
      }

      const item = items[i];
      if (item.status === 'complete') continue;

      setCurrentIndex(i + 1);
      setItems(prev => prev.map((it, idx) => idx === i ? { ...it, status: 'processing' } : it));

      let loadedImg: { width: number; height: number; objectUrl: string } | null = null;
      let imgElement: HTMLImageElement | null = null;

      try {
        // 1. Decode single image into memory
        const loaded = await loadImageFromFile(item.file);
        loadedImg = loaded;

        imgElement = new Image();
        imgElement.src = loaded.objectUrl;
        await new Promise((res, rej) => {
          if (imgElement) {
            imgElement.onload = res;
            imgElement.onerror = rej;
          }
        });

        // 2. Compute target dimensions for this specific image
        let finalW = targetWidth;
        let finalH = targetHeight;

        if (usePercent) {
          finalW = Math.max(1, Math.round(loaded.width * (scalePercent / 100)));
          finalH = Math.max(1, Math.round(loaded.height * (scalePercent / 100)));
        } else if (lockAspect) {
          const ratio = loaded.width / loaded.height;
          finalH = Math.max(1, Math.round(targetWidth / ratio));
        }

        if (preventUpscale) {
          if (finalW > loaded.width) finalW = loaded.width;
          if (finalH > loaded.height) finalH = loaded.height;
        }

        // 3. Process resize on canvas
        const result = await processResize(
          imgElement,
          {
            width: finalW,
            height: finalH,
            maintainAspectRatio: lockAspect,
            preventUpscaling: preventUpscale,
            format: exportFormat,
            quality
          },
          item.name,
          item.size
        );

        // 4. Update item record with output blob
        setItems(prev => prev.map((it, idx) => idx === i ? {
          ...it,
          status: 'complete',
          outputBlob: result.blob,
          outputUrl: result.url,
          outputSize: result.outputSize,
          outputWidth: result.width,
          outputHeight: result.height,
          outputFilename: result.filename
        } : it));

      } catch (err: any) {
        console.error(`Error processing file ${item.name}:`, err);
        setItems(prev => prev.map((it, idx) => idx === i ? {
          ...it,
          status: 'failed',
          error: err?.message || 'Processing failed'
        } : it));
      } finally {
        // 5. Explicit memory release: revoke source URL and delete img references
        if (loadedImg?.objectUrl) {
          URL.revokeObjectURL(loadedImg.objectUrl);
        }
        imgElement = null;
        loadedImg = null;
      }
    }

    setIsProcessing(false);
  };

  // Lazy-loaded batch ZIP download
  const handleDownloadAllZip = async () => {
    const completedItems = items.filter(i => i.status === 'complete' && i.outputBlob && i.outputFilename);
    if (completedItems.length === 0) return;

    setIsZipping(true);
    setZipProgress(0);
    try {
      const zipList = completedItems.map(i => ({
        blob: i.outputBlob!,
        filename: i.outputFilename!
      }));

      await generateAndDownloadZip(zipList, 'resized-images.zip', (p) => setZipProgress(p));
    } catch (err) {
      console.error('ZIP generation failed:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const completedCount = items.filter(i => i.status === 'complete').length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
  const totalInputBytes = items.reduce((acc, curr) => acc + curr.size, 0);

  return (
    <div className="space-y-6">
      
      {/* Top Batch Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Batch Queue ({items.length} image{items.length === 1 ? '' : 's'})
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Total Input Size: {formatBytes(totalInputBytes)} • Max 50 files
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors">
            <Plus className="w-3.5 h-3.5" />
            <span>Add More</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="hidden"
              onChange={handleAddFiles}
            />
          </label>

          <button
            onClick={onReset}
            className="px-3 py-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-semibold transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Controls Sidebar (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Resize Configuration Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>Resize Mode</span>
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 text-xs bg-slate-50 dark:bg-slate-800">
                <button
                  onClick={() => setUsePercent(false)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    !usePercent ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Exact Pixels
                </button>
                <button
                  onClick={() => setUsePercent(true)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    usePercent ? 'bg-brand-600 text-white font-semibold' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Percentage
                </button>
              </div>
            </div>

            {!usePercent ? (
              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 font-medium">Target Width (px)</label>
                  <input
                    type="number"
                    min="1"
                    max="16384"
                    value={widthStr}
                    onChange={(e) => setWidthStr(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 font-medium">Target Height (px)</label>
                  <input
                    type="number"
                    min="1"
                    max="16384"
                    value={heightStr}
                    onChange={(e) => setHeightStr(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-brand-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Scale Each Image By</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{scalePercent}%</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[25, 50, 75, 150, 200].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setScalePercent(pct)}
                      className={`py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                        scalePercent === pct
                          ? 'bg-brand-600 text-white border-brand-500'
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Checkboxes */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lockAspect}
                  onChange={(e) => setLockAspect(e.target.checked)}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span className="flex items-center gap-1">
                  {lockAspect ? <Lock className="w-3.5 h-3.5 text-brand-500" /> : <Unlock className="w-3.5 h-3.5 text-slate-400" />}
                  <span>Preserve individual aspect ratios</span>
                </span>
              </label>

              <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preventUpscale}
                  onChange={(e) => setPreventUpscale(e.target.checked)}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <span>Do not enlarge images smaller than target</span>
              </label>
            </div>
          </div>

          {/* Export Options & Actions */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Output Format
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
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            )}

            {/* Primary Action Button */}
            {!isProcessing ? (
              <button
                onClick={handleStartBatchProcessing}
                disabled={items.length === 0}
                className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                <Layers className="w-4 h-4" />
                <span>{completedCount > 0 ? 'Reprocess All Images' : `Resize All ${items.length} Images`}</span>
              </button>
            ) : (
              <button
                onClick={handleCancelProcessing}
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <StopCircle className="w-4 h-4" />
                <span>Cancel Processing</span>
              </button>
            )}

            {/* Batch ZIP Download Button */}
            {completedCount > 0 && (
              <button
                onClick={handleDownloadAllZip}
                disabled={isZipping}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                {isZipping ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Zipping ({zipProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <Archive className="w-4 h-4" />
                    <span>Download All as ZIP ({completedCount})</span>
                  </>
                )}
              </button>
            )}
          </div>

        </div>

        {/* Queue & Results List (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Progress Banner */}
          {(isProcessing || completedCount > 0) && (
            <div className="p-4 rounded-2xl border border-brand-200 dark:border-brand-900/50 bg-brand-50/50 dark:bg-brand-950/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-900 dark:text-brand-200">
                  {isProcessing ? `Processing image ${currentIndex} of ${items.length}...` : `Completed ${completedCount} of ${items.length} images`}
                </span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-brand-200 dark:bg-brand-950 overflow-hidden">
                <div
                  className="h-full bg-brand-600 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Files List Table */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm divide-y divide-slate-100 dark:divide-slate-800/80">
            {items.map((item, idx) => (
              <div key={item.id} className="p-3.5 flex items-center justify-between gap-3 text-xs">
                
                {/* File Thumbnail & Name */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="w-5 text-slate-400 font-mono text-[11px] flex-shrink-0">
                    {idx + 1}.
                  </span>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 flex-shrink-0">
                    <FileImage className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {formatBytes(item.size)}
                      {item.outputSize && (
                        <span className="text-brand-600 dark:text-brand-400 font-bold ml-1.5">
                          → {formatBytes(item.outputSize)} ({item.outputWidth}×{item.outputHeight}px)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {item.status === 'queued' && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium">
                      Queued
                    </span>
                  )}

                  {item.status === 'processing' && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-semibold flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Resizing
                    </span>
                  )}

                  {item.status === 'complete' && item.outputBlob && (
                    <button
                      onClick={() => triggerDownload(item.outputBlob!, item.outputFilename || item.name)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold flex items-center gap-1 hover:bg-emerald-100 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  )}

                  {item.status === 'failed' && (
                    <span className="px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 text-[10px] font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Failed
                    </span>
                  )}

                  {!isProcessing && (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
