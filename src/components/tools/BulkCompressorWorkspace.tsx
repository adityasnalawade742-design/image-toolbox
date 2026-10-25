import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Download, Archive, Trash2, CheckCircle2, AlertCircle, RefreshCw, Cloud, Zap } from 'lucide-react';
import { loadImage, canvasToBlob, downloadBlob } from '../../lib/canvas/engine';
import { formatExtension } from '../../lib/canvas/outputFormat';
import { outputFileName, createUniqueNamer } from '../../lib/storage/fileNames';

interface QueueItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  outputBlob?: Blob;
  outputSize?: number;
  /** Extension of the format this output was actually encoded in */
  outputExt?: string;
  /** Rejected when added (not an image / too large); never processed */
  rejected?: boolean;
  status: 'pending' | 'processing' | 'done' | 'error';
  errorMsg?: string;
}

export function BulkCompressorWorkspace() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif'>('image/webp');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const isCancelledRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatBytes = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFilesAdded = (files: FileList | File[]) => {
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
          originalSize: file.size,
          status: 'error',
          rejected: true,
          errorMsg: 'Not an image file',
        });
      } else if (file.size > maxSizeBytes) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalSize: file.size,
          status: 'error',
          rejected: true,
          errorMsg: 'Larger than 50 MB',
        });
      } else {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalSize: file.size,
          status: 'pending',
        });
      }
    }
    setQueue((prev) => [...prev, ...newItems]);
  };

  // Changing settings invalidates finished results so "Compress All" re-runs them
  useEffect(() => {
    setQueue((prev) =>
      prev.some((q) => q.status === 'done')
        ? prev.map((q) => (q.status === 'done' ? { ...q, status: 'pending', outputBlob: undefined, outputSize: undefined } : q))
        : prev
    );
  }, [quality, format]);

  const processQueue = async () => {
    setIsProcessing(true);
    isCancelledRef.current = false;

    for (let i = 0; i < queue.length; i++) {
      if (isCancelledRef.current) break;
      const item = queue[i];
      if (item.status === 'done' || item.rejected) continue;

      setQueue((prev) =>
        prev.map((q, idx) => (idx === i ? { ...q, status: 'processing' } : q))
      );

      try {
        const img = await loadImage(item.file);
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D unavailable');
        if (format === 'image/jpeg') {
          // JPEG has no alpha; fill white so transparent areas don't turn black
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);

        const outputBlob = await canvasToBlob(canvas, format, quality / 100);
        const outputExt = formatExtension((outputBlob.type || format) as typeof format);

        setQueue((prev) =>
          prev.map((q, idx) =>
            idx === i
              ? {
                  ...q,
                  outputBlob,
                  outputSize: outputBlob.size,
                  outputExt,
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

  // The loop stops after the current file and clears isProcessing itself, so a second run can't overlap
  const cancelProcessing = () => {
    isCancelledRef.current = true;
  };

  const downloadSingle = (item: QueueItem) => {
    if (!item.outputBlob || !item.outputExt) return;
    downloadBlob(item.outputBlob, outputFileName(item.name, 'compressed', item.outputExt));
  };

  const downloadAllAsZip = async () => {
    const doneItems = queue.filter((q) => q.status === 'done' && q.outputBlob);
    if (doneItems.length === 0) return;

    setIsZipping(true);
    try {
      const JSZipModule = await import('jszip');
      const JSZip = JSZipModule.default;
      const zip = new JSZip();
      const uniqueName = createUniqueNamer();

      doneItems.forEach((item) => {
        if (item.outputBlob && item.outputExt) {
          zip.file(uniqueName(outputFileName(item.name, 'compressed', item.outputExt)), item.outputBlob);
        }
      });

      const zipContent = await zip.generateAsync({ type: 'blob' });
      downloadBlob(zipContent, 'bulk-compressed-images.zip');
    } catch (err) {
      console.error(err);
    } finally {
      setIsZipping(false);
    }
  };

  const totalOrigSize = queue.reduce((acc, q) => acc + q.originalSize, 0);
  const totalOutSize = queue.reduce((acc, q) => acc + (q.outputSize || q.originalSize), 0);
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
            if (e.target.files) handleFilesAdded(Array.from(e.target.files));
            e.target.value = ''; // allow re-adding the same files after Clear All
          }}
        />
        <div className="w-10 h-10 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-accent-blue">
          <UploadCloud className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-[14px] font-semibold text-ink">
            Drag & Drop Multiple Images (Up to 50 photos)
          </h3>
          <p className="text-[13px] text-mute mt-0.5">
            JPG, PNG, WebP — Processed sequentially 100% in your browser
          </p>
        </div>
      </div>

      {queue.length > 0 && (
        <div className="space-y-4">
          {/* Header Controls: Settings & Action Buttons */}
          <div className="p-4 bg-surface-elevated border border-hairline rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Format & Quality */}
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto text-[14px]">
              <div className="flex items-center gap-2">
                <span className="text-body">Format:</span>
                <select
                  value={format}
                  disabled={isProcessing}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="bg-surface-card border border-hairline rounded px-2 py-1 text-ink focus:outline-none"
                >
                  <option value="image/avif">AVIF (Smallest, slower)</option>
                  <option value="image/webp">WebP (Optimal)</option>
                  <option value="image/jpeg">JPEG (JPG)</option>
                  <option value="image/png">PNG (Lossless)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-body">Quality:</span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  disabled={isProcessing}
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value) || 80)}
                  className="w-24 h-1 bg-surface-card rounded appearance-none cursor-pointer accent-ink"
                />
                <span className="font-mono text-ink font-semibold">{quality}%</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              {isProcessing ? (
                <button
                  type="button"
                  onClick={cancelProcessing}
                  className="px-3 py-1.5 bg-accent-red/20 text-accent-red border border-accent-red/30 rounded-md text-[14px] font-semibold hover:bg-accent-red/30 transition-colors"
                >
                  Cancel
                </button>
              ) : (
                <button
                  type="button"
                  onClick={processQueue}
                  className="px-4 py-1.5 bg-process-key text-paper border border-ink hover:bg-paper hover:text-ink rounded-md text-[14px] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Compress All ({queue.length})</span>
                </button>
              )}

              {completedCount > 0 && (
                <button
                  type="button"
                  disabled={isZipping}
                  onClick={downloadAllAsZip}
                  className="px-4 py-1.5 bg-surface-card hover:bg-surface border border-hairline-strong text-ink rounded-md text-[14px] font-semibold transition-colors flex items-center gap-1.5 disabled:opacity-50"
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

          {/* Queue List Table */}
          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline-soft bg-surface">
            <div className="px-4 py-2 bg-surface-card flex items-center justify-between text-[13px] font-semibold text-mute uppercase tracking-wider">
              <span>File Queue ({queue.length} items • {formatBytes(totalOrigSize)} {completedCount > 0 ? `→ ${formatBytes(totalOutSize)}` : ''})</span>
              <span>{completedCount}/{queue.length} Completed</span>
            </div>

            <div className="max-h-72 overflow-y-auto divide-y divide-hairline-soft">
              {queue.map((item) => {
                const savings = item.outputSize
                  ? ((item.originalSize - item.outputSize) / item.originalSize) * 100
                  : 0;

                return (
                  <div key={item.id} className="px-4 py-2.5 flex items-center justify-between gap-3 text-[14px]">
                    <div className="flex items-center gap-2.5 truncate max-w-[200px] sm:max-w-xs">
                      {item.status === 'done' && <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0" />}
                      {item.status === 'processing' && <RefreshCw className="w-4 h-4 text-accent-blue animate-spin shrink-0" />}
                      {item.status === 'pending' && <span className="w-2 h-2 rounded-full bg-ash shrink-0" />}
                      {item.status === 'error' && <AlertCircle className="w-4 h-4 text-accent-red shrink-0" />}
                      <span className="truncate text-ink font-medium">{item.name}</span>
                      {item.status === 'error' && item.errorMsg && (
                        <span className="text-accent-red text-[13px] shrink-0">{item.errorMsg}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-mute font-mono text-[13px]">
                      <span>{formatBytes(item.originalSize)}</span>
                      {item.outputSize && (
                        <>
                          <span>→</span>
                          <span className="text-ink font-semibold">{formatBytes(item.outputSize)}</span>
                          <span className={`font-bold ${savings > 0 ? 'text-accent-green' : 'text-accent-yellow'}`}>
                            {savings > 0 ? `-${savings.toFixed(0)}%` : `+${Math.abs(savings).toFixed(0)}% larger`}
                          </span>
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
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
