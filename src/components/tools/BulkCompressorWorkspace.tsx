import { useState, useRef, useEffect } from 'react';
import { Download, Archive, Trash2, CheckCircle2, AlertCircle, Loader2, Circle, Ban, Plus, X, Sliders } from 'lucide-react';
import { loadImage, canvasToBlob, downloadBlob, formatBytes } from '../../lib/canvas/engine';
import { formatExtension } from '../../lib/canvas/outputFormat';
import { outputFileName, createUniqueNamer } from '../../lib/storage/fileNames';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import { MediaViewer, blobImage, formatKB, type ViewerItem } from '../shared/MediaViewer';
import { FileThumb } from '../shared/ViewableThumb';

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

type CompressFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

const ACCEPT = 'image/png,image/jpeg,image/webp';
const MAX_FILES = 50;
const FORMATS: CompressFormat[] = ['image/avif', 'image/webp', 'image/jpeg', 'image/png'];
const FORMAT_HINT = {
  'image/avif': 'ctl.bulkCompress.hintAvif',
  'image/webp': 'ctl.bulkCompress.hintWebp',
  'image/jpeg': 'ctl.bulkCompress.hintJpeg',
  'image/png': 'ctl.bulkCompress.hintPng',
} as const;

export function BulkCompressorWorkspace() {
  const t = useT();
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<CompressFormat>('image/webp');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [overflowCount, setOverflowCount] = useState(0);
  const [viewId, setViewId] = useState<string | null>(null);
  const isCancelledRef = useRef(false);
  const addMoreInputRef = useRef<HTMLInputElement>(null);

  const handleFilesAdded = (files: FileList | File[]) => {
    const newItems: QueueItem[] = [];
    const maxSizeBytes = 50 * 1024 * 1024; // 50 MB

    for (let i = 0; i < files.length; i++) {
      if (queue.length + newItems.length >= MAX_FILES) break;
      const file = files[i];
      if (!file.type.startsWith('image/')) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalSize: file.size,
          status: 'error',
          rejected: true,
          errorMsg: t('ctl.bulk.errNotImage'),
        });
      } else if (file.size > maxSizeBytes) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          name: file.name,
          originalSize: file.size,
          status: 'error',
          rejected: true,
          errorMsg: t('ctl.bulk.errTooLarge'),
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
    setOverflowCount(files.length - newItems.length);
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
    setZipError(false);
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
      } catch (err) {
        console.error(`Compressing ${item.name} failed:`, err);
        setQueue((prev) =>
          prev.map((q, idx) =>
            idx === i ? { ...q, status: 'error', errorMsg: t('ctl.bulk.errProcess') } : q
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
    setZipError(false);
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
      setZipError(true);
    } finally {
      setIsZipping(false);
    }
  };

  // Item indices drive the running loop, so rows are only removed while nothing runs
  const removeItem = (id: string) => setQueue((prev) => prev.filter((q) => q.id !== id));
  const clearAll = () => {
    setQueue([]);
    setOverflowCount(0);
    setZipError(false);
  };

  if (queue.length === 0) {
    return (
      <ProofDropZone
        onFiles={handleFilesAdded}
        accept={ACCEPT}
        multiple
        title={t('ctl.bulk.dropTitle')}
        hint={t('ctl.bulkCompress.dropHint')}
      />
    );
  }

  const completedCount = queue.filter((q) => q.status === 'done').length;
  const rejectedCount = queue.filter((q) => q.rejected).length;
  const processableCount = queue.filter((q) => !q.rejected && q.status !== 'done').length;
  const totalCount = queue.length - rejectedCount;
  const allDone = completedCount > 0 && processableCount === 0;
  const totalOrigSize = queue.reduce((acc, q) => acc + q.originalSize, 0);
  const totalOutSize = queue.reduce((acc, q) => acc + (q.outputSize || q.originalSize), 0);
  const queueFull = queue.length >= MAX_FILES;

  const zipButtonContent = (
    <>
      {isZipping ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Archive className="w-5 h-5" aria-hidden="true" />}
      <span>{isZipping ? t('ctl.bulk.zipping') : t('ctl.bulk.downloadZip', { count: completedCount })}</span>
    </>
  );

  return (
    <div
      className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (!queueFull && e.dataTransfer.files?.length) handleFilesAdded(Array.from(e.dataTransfer.files));
      }}
    >
      <input
        ref={addMoreInputRef}
        type="file"
        accept={ACCEPT}
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) handleFilesAdded(Array.from(e.target.files));
          e.target.value = ''; // allow re-adding the same files after Clear all
        }}
      />

      {/* Queue sheet */}
      <div className="min-w-0 space-y-3">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-2.5 border-b border-ink">
            <h2 className="slug">{t('ctl.bulk.queue')}</h2>
            <span className="text-[14px] text-graphite" data-measure>
              {t('ctl.bulk.fileCount', { count: queue.length })} · {formatBytes(totalOrigSize)}
              {completedCount > 0 && ` → ${formatBytes(totalOutSize)}`}
            </span>
          </div>

          <ul className="max-h-[480px] overflow-y-auto divide-y divide-pencil-soft">
            {queue.map((item) => {
              const savings = item.outputSize ? ((item.originalSize - item.outputSize) / item.originalSize) * 100 : 0;
              return (
                <li key={item.id} className="flex items-start gap-3 px-4 py-2.5 text-[14px]">
                  <StatusIcon item={item} />
                  {!item.rejected && <FileThumb file={item.file} onView={() => setViewId(item.id)} label={t('ctl.view.view', { name: item.name })} />}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-ink font-medium" title={item.name}>{item.name}</p>
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[13px] text-graphite">
                      <StatusText item={item} processingLabel={t('ctl.bulkCompress.statusProcessing')} />
                      <span data-measure>
                        {formatBytes(item.originalSize)}
                        {item.outputSize !== undefined && (
                          <>
                            {' → '}
                            <span className="text-ink font-semibold">{formatBytes(item.outputSize)}</span>
                          </>
                        )}
                      </span>
                      {item.outputSize !== undefined && (
                        <span className={`font-semibold ${savings > 0 ? 'text-accent-green' : 'text-accent-yellow'}`} data-measure>
                          {savings > 0
                            ? t('ctl.bulkCompress.smaller', { pct: savings.toFixed(0) })
                            : t('ctl.bulkCompress.larger', { pct: Math.abs(savings).toFixed(0) })}
                        </span>
                      )}
                    </p>
                    {item.status === 'error' && item.errorMsg && (
                      <p className="text-[13px] text-accent-red">{item.errorMsg}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {item.status === 'done' && item.outputBlob && (
                      <button
                        type="button"
                        onClick={() => downloadSingle(item)}
                        className="w-9 h-9 inline-flex items-center justify-center text-ink hover:bg-paper-stock"
                        aria-label={t('ctl.bulk.downloadItem', { name: item.name })}
                        title={t('ctl.bulk.downloadItem', { name: item.name })}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                    {item.status !== 'processing' && (
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        disabled={isProcessing}
                        className="w-9 h-9 inline-flex items-center justify-center text-graphite hover:text-ink hover:bg-paper-stock disabled:opacity-40 disabled:hover:bg-transparent"
                        aria-label={t('ctl.bulk.removeItem', { name: item.name })}
                        title={t('ctl.bulk.removeItem', { name: item.name })}
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {viewId !== null && (() => {
            // Processed files show the result, with the original one switch away
            const list = queue.filter((q) => !q.rejected);
            const items: ViewerItem[] = list.map((item) => ({
              key: `${item.id}:${item.outputBlob ? 'out' : 'in'}`,
              label: item.name,
              detail: item.outputSize !== undefined ? `${formatKB(item.originalSize)} → ${formatKB(item.outputSize)}` : formatKB(item.originalSize),
              load: () => blobImage(item.outputBlob ?? item.file),
              original: item.outputBlob ? () => blobImage(item.file) : undefined,
              transparent: true,
            }));
            const at = list.findIndex((q) => q.id === viewId);
            return at < 0 ? null : <MediaViewer items={items} index={at} onIndex={(i) => setViewId(list[i].id)} onClose={() => setViewId(null)} />;
          })()}
        </div>

        {/* Job ticket: progress through the queue */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]">
          <span className="text-ink font-semibold" aria-live="polite" data-measure>
            {t('ctl.bulk.progress', { done: completedCount, total: totalCount })}
          </span>
          {rejectedCount > 0 && (
            <span className="text-graphite" data-measure>{t('ctl.bulk.skippedCount', { count: rejectedCount })}</span>
          )}
          <span className="text-graphite">{t('ctl.bulk.dropMoreHint')}</span>
        </div>

        {overflowCount > 0 && (
          <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{t('ctl.bulk.limitReached', { count: overflowCount })}</span>
          </p>
        )}
      </div>

      {/* Ruled control panel */}
      <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
            <Sliders className="w-4 h-4 text-ink" aria-hidden="true" />
            {t('ctl.bulk.settings')}
          </h2>
          <div className="p-4 space-y-4 text-[15px]">
            <div className="space-y-1.5">
              <span className="slug">{t('ctl.bulk.format')}</span>
              <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.bulk.formatGroup')}>
                {FORMATS.map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    aria-pressed={format === fmt}
                    disabled={isProcessing}
                    onClick={() => setFormat(fmt)}
                    className={`min-h-[40px] text-[14px] font-semibold transition-colors disabled:cursor-not-allowed ${
                      format === fmt ? 'seg-on' : 'seg-off'
                    }`}
                  >
                    {formatExtension(fmt).toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="text-[14px] text-graphite">{t(FORMAT_HINT[format])}</p>
            </div>

            {format === 'image/png' ? (
              <p className="text-[14px] text-graphite pt-4 border-t border-ink">{t('ctl.bulkCompress.pngLossless')}</p>
            ) : (
              <label className="block space-y-1.5 pt-4 border-t border-ink">
                <span className="flex items-center justify-between">
                  <span className="slug">{t('ctl.bulkCompress.quality')}</span>
                  <span className="font-semibold text-ink" data-measure>{quality}%</span>
                </span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  disabled={isProcessing}
                  value={quality}
                  aria-label={t('ctl.bulkCompress.qualityLabel')}
                  onChange={(e) => setQuality(parseInt(e.target.value) || 80)}
                  className="w-full"
                />
              </label>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {isProcessing ? (
            <>
              <button type="button" disabled className="btn-ink w-full min-h-[52px] text-[16px]">
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>{t('ctl.bulkCompress.running')}</span>
              </button>
              <button type="button" onClick={cancelProcessing} className="btn-rule w-full">
                <Ban className="w-4 h-4" aria-hidden="true" />
                <span>{t('ctl.bulk.cancel')}</span>
              </button>
            </>
          ) : allDone ? (
            <button type="button" disabled={isZipping} onClick={downloadAllAsZip} className="btn-ink w-full min-h-[52px] text-[16px]">
              {zipButtonContent}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={processQueue}
                disabled={processableCount === 0}
                className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed"
              >
                <span>{t('ctl.bulkCompress.run', { count: processableCount })}</span>
              </button>
              {completedCount > 0 && (
                <button type="button" disabled={isZipping} onClick={downloadAllAsZip} className="btn-rule w-full disabled:opacity-60">
                  {zipButtonContent}
                </button>
              )}
            </>
          )}

          {zipError && (
            <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-red">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{t('ctl.bulk.errZip')}</span>
            </p>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => addMoreInputRef.current?.click()}
              disabled={queueFull}
              className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.bulk.addMore')}</span>
            </button>
            <button
              type="button"
              onClick={clearAll}
              disabled={isProcessing}
              className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.bulk.clearAll')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ item }: { item: QueueItem }) {
  const cls = 'w-4 h-4 shrink-0 mt-0.5';
  if (item.status === 'done') return <CheckCircle2 className={`${cls} text-accent-green`} aria-hidden="true" />;
  if (item.status === 'processing') return <Loader2 className={`${cls} text-ink animate-spin`} aria-hidden="true" />;
  if (item.status === 'error') return item.rejected
    ? <Ban className={`${cls} text-accent-red`} aria-hidden="true" />
    : <AlertCircle className={`${cls} text-accent-red`} aria-hidden="true" />;
  return <Circle className={`${cls} text-graphite`} aria-hidden="true" />;
}

function StatusText({ item, processingLabel }: { item: QueueItem; processingLabel: string }) {
  const t = useT();
  const label =
    item.status === 'done'
      ? t('ctl.bulk.statusDone')
      : item.status === 'processing'
        ? processingLabel
        : item.status === 'error'
          ? item.rejected ? t('ctl.bulk.statusRejected') : t('ctl.bulk.statusError')
          : t('ctl.bulk.statusPending');
  const tone = item.status === 'done' ? 'text-accent-green' : item.status === 'error' ? 'text-accent-red' : 'text-ink';
  return <span className={`font-semibold ${tone}`}>{label}</span>;
}
