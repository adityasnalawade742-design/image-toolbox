import React, { useState, useRef } from 'react';
import { UploadCloud, Download, Archive, Trash2, CheckCircle2, AlertCircle, RefreshCw, Lock, Unlock } from 'lucide-react';
import { loadImage, canvasToBlob, downloadBlob } from '../../lib/canvas/engine';

interface QueueItem {
  id: string;
  file: File;
  name: string;
  originalWidth: number;
  originalHeight: number;
  targetWidth?: number;
  targetHeight?: number;
  outputBlob?: Blob;
  status: 'pending' | 'processing' | 'done' | 'error';
  errorMsg?: string;
}

export function BulkResizerWorkspace() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [mode, setMode] = useState<'percentage' | 'pixels'>('percentage');
  const [percentage, setPercentage] = useState<number>(50);
  const [fixedWidth, setFixedWidth] = useState<number>(1200);
  const [fixedHeight, setFixedHeight] = useState<number>(800);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(true);
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/png');

  const [isProcessing, setIsProcessing] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const isCancelledRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesAdded = async (files: FileList | File[]) => {
    const newItems: QueueItem[] = [];
    const maxFiles = 50;
    const maxSizeBytes = 50 * 1024 * 1024; // 50 MB

    for (let i = 0; i < files.length; i++) {
      if (queue.length + newItems.length >= maxFiles) break;
      const file = files[i];
      if (!file.type.startsWith('image/')) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalWidth: 0,
          originalHeight: 0,
          status: 'error',
          errorMsg: 'Unsupported non-image file',
        });
      } else if (file.size > maxSizeBytes) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalWidth: 0,
          originalHeight: 0,
          status: 'error',
          errorMsg: 'Exceeds 50 MB limit',
        });
      } else {
        try {
          const img = await loadImage(file);
          newItems.push({
            id: `${file.name}-${Date.now()}-${Math.random()}`,
            file,
            name: file.name,
            originalWidth: img.naturalWidth || img.width,
            originalHeight: img.naturalHeight || img.height,
            status: 'pending',
          });
        } catch {
          newItems.push({
            id: `${file.name}-${Date.now()}-${Math.random()}`,
            file,
            name: file.name,
            originalWidth: 0,
            originalHeight: 0,
            status: 'error',
            errorMsg: 'Corrupted or unreadable image',
          });
        }
      }
    }
    setQueue((prev) => [...prev, ...newItems]);
  };

  const processQueue = async () => {
    setIsProcessing(true);
    isCancelledRef.current = false;

    for (let i = 0; i < queue.length; i++) {
      if (isCancelledRef.current) break;
      const item = queue[i];
      if (item.status === 'done') continue;

      setQueue((prev) =>
        prev.map((q, idx) => (idx === i ? { ...q, status: 'processing' } : q))
      );

      try {
        const img = await loadImage(item.file);
        let targetW = item.originalWidth;
        let targetH = item.originalHeight;

        if (mode === 'percentage') {
          targetW = Math.round((item.originalWidth * percentage) / 100);
          targetH = Math.round((item.originalHeight * percentage) / 100);
        } else {
          if (lockAspect) {
            const aspect = item.originalWidth / item.originalHeight;
            targetW = fixedWidth;
            targetH = Math.round(fixedWidth / aspect);
          } else {
            targetW = fixedWidth;
            targetH = fixedHeight;
          }
        }

        if (preventUpscale) {
          targetW = Math.min(targetW, item.originalWidth);
          targetH = Math.min(targetH, item.originalHeight);
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, targetW);
        canvas.height = Math.max(1, targetH);
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D context unavailable');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const blob = await canvasToBlob(canvas, format, 0.9);

        setQueue((prev) =>
          prev.map((q, idx) =>
            idx === i
              ? {
                  ...q,
                  targetWidth: canvas.width,
                  targetHeight: canvas.height,
                  outputBlob: blob,
                  status: 'done',
                }
              : q
          )
        );
      } catch (err: any) {
        setQueue((prev) =>
          prev.map((q, idx) =>
            idx === i ? { ...q, status: 'error', errorMsg: err.message || 'Error' } : q
          )
        );
      }
    }

    setIsProcessing(false);
  };

  const cancelProcessing = () => {
    isCancelledRef.current = true;
    setIsProcessing(false);
  };

  const downloadSingle = (item: QueueItem) => {
    if (!item.outputBlob) return;
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    const baseName = item.name.replace(/\.[^/.]+$/, '');
    downloadBlob(item.outputBlob, `${baseName}-resized.${ext}`);
  };

  const downloadAllAsZip = async () => {
    const doneItems = queue.filter((q) => q.status === 'done' && q.outputBlob);
    if (doneItems.length === 0) return;

    setIsZipping(true);
    try {
      const JSZipModule = await import('jszip');
      const JSZip = JSZipModule.default;
      const zip = new JSZip();
      const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';

      doneItems.forEach((item) => {
        if (item.outputBlob) {
          const baseName = item.name.replace(/\.[^/.]+$/, '');
          zip.file(`${baseName}-resized.${ext}`, item.outputBlob);
        }
      });

      const zipContent = await zip.generateAsync({ type: 'blob' });
      downloadBlob(zipContent, 'bulk-resized-images.zip');
    } catch (err) {
      console.error(err);
    } finally {
      setIsZipping(false);
    }
  };

  const completedCount = queue.filter((q) => q.status === 'done').length;

  return (
    <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl space-y-6">
      {/* Multi-file Dropzone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files) handleFilesAdded(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
        className="border border-dashed border-hairline hover:border-hairline-strong rounded-lg p-8 sm:p-10 text-center cursor-pointer bg-surface-elevated/40 hover:bg-surface-elevated transition-all flex flex-col items-center justify-center space-y-3"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) handleFilesAdded(e.target.files);
          }}
        />
        <div className="w-10 h-10 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-accent-blue">
          <UploadCloud className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-semibold text-ink">
            Drag & Drop Multiple Images for Bulk Resizing (Up to 50 photos)
          </h3>
          <p className="text-[11px] text-mute mt-0.5">
            JPG, PNG, WebP — Resize all images in unified dimensions
          </p>
        </div>
      </div>

      {queue.length > 0 && (
        <div className="space-y-4">
          {/* Header Controls */}
          <div className="p-4 bg-surface-elevated border border-hairline rounded-lg space-y-3 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Mode switch */}
              <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
                <button
                  type="button"
                  onClick={() => setMode('percentage')}
                  className={`px-3 py-1 rounded font-medium ${
                    mode === 'percentage' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
                  }`}
                >
                  Percentage Scale
                </button>
                <button
                  type="button"
                  onClick={() => setMode('pixels')}
                  className={`px-3 py-1 rounded font-medium ${
                    mode === 'pixels' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
                  }`}
                >
                  Exact Pixels
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {isProcessing ? (
                  <button
                    type="button"
                    onClick={cancelProcessing}
                    className="px-3 py-1.5 bg-accent-red/20 text-accent-red border border-accent-red/30 rounded-md text-xs font-semibold"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={processQueue}
                    className="px-4 py-1.5 bg-white hover:bg-neutral-200 text-black rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Resize All ({queue.length})</span>
                  </button>
                )}

                {completedCount > 0 && (
                  <button
                    type="button"
                    disabled={isZipping}
                    onClick={downloadAllAsZip}
                    className="px-4 py-1.5 bg-surface-card hover:bg-surface border border-hairline-strong text-ink rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Archive className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{isZipping ? 'Zipping...' : `Download ZIP (${completedCount})`}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setQueue([])}
                  disabled={isProcessing}
                  className="p-1.5 text-mute hover:text-accent-red rounded transition-colors"
                  title="Clear All"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-controls */}
            {mode === 'percentage' ? (
              <div className="flex items-center gap-3 pt-2 border-t border-hairline">
                <span className="text-mute">Scale all by:</span>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={percentage}
                  onChange={(e) => setPercentage(parseInt(e.target.value) || 50)}
                  className="w-36 h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
                />
                <span className="font-mono text-ink font-bold">{percentage}%</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 pt-2 border-t border-hairline">
                <div className="flex items-center gap-2">
                  <span className="text-mute">Target Width:</span>
                  <input
                    type="number"
                    value={fixedWidth}
                    onChange={(e) => setFixedWidth(parseInt(e.target.value) || 800)}
                    className="w-20 bg-surface-card border border-hairline rounded px-2 py-1 text-ink font-mono text-xs"
                  />
                </div>
                {!lockAspect && (
                  <div className="flex items-center gap-2">
                    <span className="text-mute">Target Height:</span>
                    <input
                      type="number"
                      value={fixedHeight}
                      onChange={(e) => setFixedHeight(parseInt(e.target.value) || 600)}
                      className="w-20 bg-surface-card border border-hairline rounded px-2 py-1 text-ink font-mono text-xs"
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setLockAspect(!lockAspect)}
                  className="flex items-center gap-1 text-[11px] text-mute hover:text-ink"
                >
                  {lockAspect ? <Lock className="w-3 h-3 text-accent-blue" /> : <Unlock className="w-3 h-3" />}
                  <span>{lockAspect ? 'Aspect Locked' : 'Aspect Free'}</span>
                </button>
              </div>
            )}
            {/* Common Options: Format & Upscale Safety */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-hairline text-xs">
              <div className="flex items-center gap-2">
                <span className="text-body">Format:</span>
                <select
                  value={format}
                  disabled={isProcessing}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="bg-surface-card border border-hairline rounded px-2 py-1 text-ink focus:outline-none"
                >
                  <option value="image/png">PNG (Lossless)</option>
                  <option value="image/jpeg">JPEG (JPG)</option>
                  <option value="image/webp">WebP (Optimal)</option>
                </select>
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none text-mute hover:text-ink">
                <input
                  type="checkbox"
                  checked={preventUpscale}
                  onChange={(e) => setPreventUpscale(e.target.checked)}
                  className="rounded border-hairline bg-surface-card accent-white cursor-pointer"
                />
                <span>Prevent Upscaling (keep smaller originals)</span>
              </label>
            </div>
          </div>

          {/* Queue List Table */}
          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline-soft bg-surface">
            <div className="px-4 py-2 bg-surface-card flex items-center justify-between text-[11px] font-semibold text-mute uppercase tracking-wider">
              <span>File Queue ({queue.length} items)</span>
              <span>{completedCount}/{queue.length} Completed</span>
            </div>

            <div className="max-h-72 overflow-y-auto divide-y divide-hairline-soft">
              {queue.map((item) => (
                <div key={item.id} className="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 truncate max-w-[200px] sm:max-w-xs">
                    {item.status === 'done' && <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0" />}
                    {item.status === 'processing' && <RefreshCw className="w-4 h-4 text-accent-blue animate-spin shrink-0" />}
                    {item.status === 'pending' && <span className="w-2 h-2 rounded-full bg-ash shrink-0" />}
                    {item.status === 'error' && <AlertCircle className="w-4 h-4 text-accent-red shrink-0" />}
                    <span className="truncate text-ink font-medium">{item.name}</span>
                  </div>

                  <div className="flex items-center gap-4 text-mute font-mono text-[11px]">
                    <span>{item.originalWidth} × {item.originalHeight} px</span>
                    {item.targetWidth && (
                      <>
                        <span>→</span>
                        <span className="text-accent-blue font-bold">{item.targetWidth} × {item.targetHeight} px</span>
                      </>
                    )}

                    {item.status === 'done' && item.outputBlob && (
                      <button
                        type="button"
                        onClick={() => downloadSingle(item)}
                        className="p-1 hover:text-ink text-mute transition-colors"
                        title="Download item"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
