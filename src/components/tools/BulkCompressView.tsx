'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Download, 
  Trash2, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Archive, 
  Plus, 
  StopCircle,
  FileImage,
  TrendingDown,
  Sparkles,
  Minimize2
} from 'lucide-react';
import { ExportFormat } from '@/types/image';
import { processCompress } from '@/lib/canvas/compress';
import { loadImageFromFile, formatBytes, triggerDownload } from '@/lib/canvas/file-utils';
import { generateAndDownloadZip } from '@/lib/canvas/zip-utils';

export interface BulkCompressItem {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: 'queued' | 'processing' | 'complete' | 'failed' | 'cancelled';
  outputBlob?: Blob;
  outputUrl?: string;
  outputSize?: number;
  reductionPercentage?: number;
  outputFilename?: string;
  error?: string;
}

interface BulkCompressViewProps {
  initialFiles: File[];
  onReset: () => void;
}

export const BulkCompressView: React.FC<BulkCompressViewProps> = ({ initialFiles, onReset }) => {
  const [items, setItems] = useState<BulkCompressItem[]>(() => 
    initialFiles.map((file, idx) => ({
      id: `bulk-comp-${idx}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'queued'
    }))
  );

  const [quality, setQuality] = useState<number>(0.8);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isCancelledRef = useRef<boolean>(false);

  // Cleanup object URLs
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
    const newItems: BulkCompressItem[] = newFiles.map((file, idx) => ({
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

  // Memory-safe sequential compressor
  const handleStartBatchCompression = async () => {
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

        const result = await processCompress(
          imgElement,
          {
            quality,
            format: exportFormat
          },
          item.name,
          item.size
        );

        setItems(prev => prev.map((it, idx) => idx === i ? {
          ...it,
          status: 'complete',
          outputBlob: result.blob,
          outputUrl: result.url,
          outputSize: result.outputSize,
          reductionPercentage: result.reductionPercentage,
          outputFilename: result.filename
        } : it));

      } catch (err: any) {
        console.error(`Error compressing ${item.name}:`, err);
        setItems(prev => prev.map((it, idx) => idx === i ? {
          ...it,
          status: 'failed',
          error: err?.message || 'Compression failed'
        } : it));
      } finally {
        if (loadedImg?.objectUrl) {
          URL.revokeObjectURL(loadedImg.objectUrl);
        }
        imgElement = null;
        loadedImg = null;
      }
    }

    setIsProcessing(false);
  };

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

      await generateAndDownloadZip(zipList, 'compressed-images.zip', (p) => setZipProgress(p));
    } catch (err) {
      console.error('ZIP generation failed:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const completedCount = items.filter(i => i.status === 'complete').length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;
  
  const totalInputBytes = items.reduce((acc, curr) => acc + curr.size, 0);
  const totalOutputBytes = items.reduce((acc, curr) => acc + (curr.outputSize || curr.size), 0);
  const totalSavedBytes = Math.max(0, totalInputBytes - totalOutputBytes);
  const totalReductionPct = totalInputBytes > 0 
    ? Math.max(0, ((totalSavedBytes) / totalInputBytes) * 100).toFixed(1)
    : '0.0';

  const isPng = exportFormat === 'image/png';

  return (
    <div className="space-y-6">
      
      {/* Top Batch Header Bar */}
      <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
            <Minimize2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
              Bulk Compression Queue ({items.length} image{items.length === 1 ? '' : 's'})
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
          
          {/* Live Cumulative Savings Card (when completed) */}
          {completedCount > 0 && (
            <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <span className="flex items-center gap-1">
                  <TrendingDown className="w-4 h-4" /> Batch Savings
                </span>
                <span className="font-mono text-base font-extrabold text-emerald-700 dark:text-emerald-400">
                  -{totalReductionPct}%
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-900/40 text-xs">
                <div>
                  <div className="text-slate-400 text-[11px]">Total Input</div>
                  <div className="font-mono font-bold text-slate-800 dark:text-slate-200">{formatBytes(totalInputBytes)}</div>
                </div>
                <div>
                  <div className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">Total Output</div>
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{formatBytes(totalOutputBytes)}</div>
                </div>
              </div>
            </div>
          )}

          {/* Compression Settings Card */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
            <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
              Output Format
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['image/webp', 'image/jpeg', 'image/png'] as ExportFormat[]).map((fmt) => (
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

            {!isPng ? (
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Quality Level</span>
                  <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  aria-label="Quality Level Slider"
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Small Files (30%)</span>
                  <span>Balanced (75-85%)</span>
                  <span>Max Quality (95%)</span>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-900 dark:text-slate-200">PNG Lossless Encoding</div>
                <div className="text-[11px]">PNG output preserves lossless graphics and alpha transparency. For maximum file size reduction, select WebP or JPG.</div>
              </div>
            )}

            {/* Primary Action Button */}
            {!isProcessing ? (
              <button
                onClick={handleStartBatchCompression}
                disabled={items.length === 0}
                className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                <Minimize2 className="w-4 h-4" />
                <span>{completedCount > 0 ? 'Recompress All Images' : `Compress All ${items.length} Images`}</span>
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

            {/* Batch ZIP Download */}
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
                  {isProcessing ? `Optimizing image ${currentIndex} of ${items.length}...` : `Completed ${completedCount} of ${items.length} images`}
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

          {/* Files List */}
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
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-1.5">
                          → {formatBytes(item.outputSize)} ({item.outputSize < item.size ? `-${item.reductionPercentage}%` : 'Optimal'})
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
                      Compressing
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
