import { useState, useRef, useEffect } from 'react';
import { Download, Archive, Trash2, CheckCircle2, AlertCircle, Loader2, Circle, Ban, Plus, X, Eraser } from 'lucide-react';
import { canvasToBlob, downloadBlob, formatBytes } from '../../lib/canvas/engine';
import { fitWithinPixels } from '../../lib/canvas/limits';
import { formatExtension, type OutputFormat } from '../../lib/canvas/outputFormat';
import { outputFileName, createUniqueNamer } from '../../lib/storage/fileNames';
import { removeBackground, preloadBackgroundRemoval, type RemovalMode, type RemovalProgress } from '../../lib/ai/backgroundRemover';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import { MediaViewer, blobImage, formatKB, type ViewerItem } from '../shared/MediaViewer';
import { FileThumb } from '../shared/ViewableThumb';
import { RemovalProgressBar, activeDownload } from '../shared/RemovalProgressBar';
import { HqConsent, ModelPicker, isModelReady, markModelReady, saveData, saveRemovalMode, savedRemovalMode } from '../shared/RemovalModel';

/**
 * Bulk Remove Background: the same models as Remove Background (backgroundRemover.ts), one photo at a time. Each
 * cutout is kept as a transparent PNG, so the background color and the file format can change afterwards without
 * running the AI again; only another model does.
 */
interface QueueItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  /** The subject on a transparent background, at the processed size */
  cutout?: Blob;
  /** Rejected when added (not a supported image / too large); never processed */
  rejected?: boolean;
  status: 'pending' | 'processing' | 'done' | 'error';
  errorMsg?: string;
}

const ACCEPT = 'image/png,image/jpeg,image/webp';
const TYPES = ACCEPT.split(',');
const MAX_FILES = 50;
const MAX_BYTES = 50 * 1024 * 1024;
const FORMATS = ['image/png', 'image/webp', 'image/jpeg'] as const;

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });

/** Very large photos (phones shoot 24-48 MP) are reduced first, as in Remove Background */
async function prepare(file: File): Promise<File> {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    const fit = fitWithinPixels(img.naturalWidth, img.naturalHeight);
    if (!fit.scaled) return file;
    const canvas = document.createElement('canvas');
    canvas.width = fit.width;
    canvas.height = fit.height;
    canvas.getContext('2d')?.drawImage(img, 0, 0, fit.width, fit.height);
    const type = file.type === 'image/jpeg' ? 'image/jpeg' : 'image/png';
    return new File([await canvasToBlob(canvas, type, 0.95)], file.name, { type });
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function BulkRemoveBackgroundWorkspace() {
  const t = useT();
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [mode, setMode] = useState<RemovalMode>('portrait');
  const [ready, setReady] = useState<Record<RemovalMode, boolean>>({ portrait: false, hq: false });
  // The large model never downloads without an explicit click
  const [awaitingHqConsent, setAwaitingHqConsent] = useState(false);
  const [background, setBackground] = useState<'transparent' | 'color'>('transparent');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [format, setFormat] = useState<OutputFormat>('image/png');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<RemovalProgress | null>(null);
  const [isZipping, setIsZipping] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [overflowCount, setOverflowCount] = useState(0);
  const [viewId, setViewId] = useState<string | null>(null);
  const isCancelledRef = useRef(false);
  const queueRef = useRef(queue);
  queueRef.current = queue;
  const addMoreInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMode(savedRemovalMode());
    setReady({ portrait: isModelReady('portrait'), hq: isModelReady('hq') });
  }, []);

  // Fetch and load the model while photos are being chosen: the large one only once it was downloaded with consent
  const warmUp = (m: RemovalMode = mode) => {
    if (m === 'hq' ? !isModelReady('hq') : !isModelReady('portrait') && saveData()) return;
    preloadBackgroundRemoval(m);
  };

  const handleFilesAdded = (files: FileList | File[]) => {
    const list = Array.from(files);
    const room = Math.max(0, MAX_FILES - queue.length);
    const added: QueueItem[] = list.slice(0, room).map((file) => {
      const item: QueueItem = { id: `${file.name}-${Date.now()}-${Math.random()}`, file, name: file.name, originalSize: file.size, status: 'pending' };
      if (!TYPES.includes(file.type)) return { ...item, status: 'error', rejected: true, errorMsg: t('ctl.bulk.errNotImage') };
      if (file.size > MAX_BYTES) return { ...item, status: 'error', rejected: true, errorMsg: t('ctl.bulk.errTooLarge') };
      return item;
    });
    setOverflowCount(list.length - added.length);
    setQueue((prev) => [...prev, ...added]);
    warmUp();
  };

  const update = (id: string, patch: Partial<QueueItem>) => setQueue((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));

  /** `consented`: the visitor just agreed to the large model's first download */
  const processQueue = async (runMode: RemovalMode = mode, consented = false) => {
    if (runMode === 'hq' && !isModelReady('hq') && !consented) {
      setAwaitingHqConsent(true);
      return;
    }
    setAwaitingHqConsent(false);
    setIsProcessing(true);
    setZipError(false);
    isCancelledRef.current = false;
    const todo = queueRef.current.filter((q) => !q.rejected && q.status !== 'done');
    for (const item of todo) {
      if (isCancelledRef.current) break;
      // Removed from the list while waiting
      if (!queueRef.current.some((q) => q.id === item.id)) continue;
      update(item.id, { status: 'processing', errorMsg: undefined });
      setProgress({ stage: 'downloading' });
      try {
        const image = await prepare(item.file);
        const result = await removeBackground(image, runMode, setProgress);
        markModelReady(runMode);
        setReady((r) => ({ ...r, [runMode]: true }));
        const canvas = document.createElement('canvas');
        canvas.width = result.width;
        canvas.height = result.height;
        canvas.getContext('2d')!.putImageData(result, 0, 0);
        update(item.id, { status: 'done', cutout: await canvasToBlob(canvas, 'image/png') });
      } catch (err) {
        console.error(`Removing the background of ${item.name} failed:`, err);
        update(item.id, { status: 'error', errorMsg: t('ctl.bulk.errProcess') });
      }
    }
    setProgress(null);
    setIsProcessing(false);
  };

  // Another model makes new cutouts; background and format only change how they are saved
  const chooseMode = (m: RemovalMode) => {
    if (m === mode) return;
    setMode(m);
    saveRemovalMode(m);
    setAwaitingHqConsent(false);
    setQueue((prev) => prev.map((q) => (q.status === 'done' ? { ...q, status: 'pending', cutout: undefined } : q)));
    warmUp(m);
  };

  /** The cutout over the chosen background, in the chosen format */
  const output = async (item: QueueItem): Promise<{ blob: Blob; name: string }> => {
    const bitmap = await createImageBitmap(item.cutout!);
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d')!;
    // JPG has no transparency: it always gets the color
    if (background === 'color' || format === 'image/jpeg') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();
    const blob = await canvasToBlob(canvas, format, 0.92);
    return { blob, name: outputFileName(item.name, 'no-background', formatExtension((blob.type || format) as OutputFormat)) };
  };

  const downloadSingle = async (item: QueueItem) => {
    if (!item.cutout) return;
    const { blob, name } = await output(item);
    downloadBlob(blob, name);
  };

  const downloadAllAsZip = async () => {
    const done = queue.filter((q) => q.status === 'done' && q.cutout);
    if (!done.length) return;
    setIsZipping(true);
    setZipError(false);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      const uniqueName = createUniqueNamer();
      for (const item of done) {
        const { blob, name } = await output(item);
        zip.file(uniqueName(name), blob);
      }
      downloadBlob(await zip.generateAsync({ type: 'blob' }), 'no-background-images.zip');
    } catch (err) {
      console.error(err);
      setZipError(true);
    } finally {
      setIsZipping(false);
    }
  };

  const removeItem = (id: string) => setQueue((prev) => prev.filter((q) => q.id !== id));
  const clearAll = () => {
    setQueue([]);
    setOverflowCount(0);
    setZipError(false);
    setAwaitingHqConsent(false);
  };

  if (queue.length === 0) {
    return <ProofDropZone onFiles={handleFilesAdded} onPick={() => warmUp()} accept={ACCEPT} multiple title={t('ctl.bulk.dropTitle')} hint={t('ctl.bulkBg.dropHint')} />;
  }

  const completedCount = queue.filter((q) => q.status === 'done').length;
  const rejectedCount = queue.filter((q) => q.rejected).length;
  const processableCount = queue.filter((q) => !q.rejected && q.status !== 'done').length;
  const totalCount = queue.length - rejectedCount;
  const allDone = completedCount > 0 && processableCount === 0;
  const queueFull = queue.length >= MAX_FILES;
  // "x MB of y MB" only while the model itself downloads, as in Remove Background
  const download = activeDownload(progress);
  const progressLabel = download
    ? t('ctl.bg.downloadingModelSize', { loaded: formatBytes(download.loaded), total: formatBytes(download.total) })
    : progress?.stage === 'downloading' && !ready[mode] && !progress.totalBytes
      ? t('ctl.bg.downloadingModel')
      : t('ctl.bg.processing');
  const current = queue.find((q) => q.status === 'processing');

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
          e.target.value = '';
        }}
      />

      <div className="min-w-0 space-y-3">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-2.5 border-b border-ink">
            <h2 className="slug">{t('ctl.bulk.queue')}</h2>
            <span className="text-[14px] text-graphite" data-measure>
              {t('ctl.bulk.fileCount', { count: queue.length })}
            </span>
          </div>
          <ul className="max-h-[480px] overflow-y-auto divide-y divide-pencil-soft">
            {queue.map((item) => (
              <li key={item.id} className="flex items-start gap-3 px-4 py-2.5 text-[14px]">
                <StatusIcon item={item} />
                {!item.rejected && <FileThumb file={item.status === 'done' && item.cutout ? item.cutout : item.file} onView={() => setViewId(item.id)} label={t('ctl.view.view', { name: item.name })} />}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-ink font-medium" title={item.name}>{item.name}</p>
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[13px] text-graphite">
                    <StatusText item={item} />
                    <span data-measure>{formatBytes(item.originalSize)}</span>
                  </p>
                  {item.status === 'error' && item.errorMsg && <p className="text-[13px] text-accent-red">{item.errorMsg}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {item.status === 'done' && item.cutout && (
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
                      className="w-9 h-9 inline-flex items-center justify-center text-graphite hover:text-ink hover:bg-paper-stock"
                      aria-label={t('ctl.bulk.removeItem', { name: item.name })}
                      title={t('ctl.bulk.removeItem', { name: item.name })}
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {viewId !== null && (() => {
            // Finished photos show the result as it will be saved, with the original one switch away
            const list = queue.filter((q) => !q.rejected);
            const items: ViewerItem[] = list.map((item) => ({
              key: `${item.id}:${item.cutout ? `out:${background}:${bgColor}:${format}` : 'in'}`,
              label: item.name,
              detail: formatKB(item.originalSize),
              load: async () => blobImage(item.cutout ? (await output(item)).blob : item.file),
              original: item.cutout ? () => blobImage(item.file) : undefined,
              transparent: true,
            }));
            const at = list.findIndex((q) => q.id === viewId);
            return at < 0 ? null : <MediaViewer items={items} index={at} onIndex={(i) => setViewId(list[i].id)} onClose={() => setViewId(null)} />;
          })()}
        </div>

        {isProcessing && current && (
          <div className="border border-ink bg-paper px-4 py-3 rounded-xl space-y-1">
            <p className="text-[14px] text-ink truncate" title={current.name}>{current.name}</p>
            <RemovalProgressBar key={current.id} progress={progress} mode={mode} label={progressLabel} />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]">
          <span className="text-ink font-semibold" aria-live="polite" data-measure>
            {t('ctl.bulk.progress', { done: completedCount, total: totalCount })}
          </span>
          {rejectedCount > 0 && <span className="text-graphite" data-measure>{t('ctl.bulk.skippedCount', { count: rejectedCount })}</span>}
          <span className="text-graphite">{t('ctl.bulk.dropMoreHint')}</span>
        </div>

        {overflowCount > 0 && (
          <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{t('ctl.bulk.limitReached', { count: overflowCount })}</span>
          </p>
        )}

        {awaitingHqConsent && <HqConsent onDownload={() => processQueue('hq', true)} onUseFast={() => chooseMode('portrait')} />}
      </div>

      <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
            <Eraser className="w-4 h-4 text-ink" aria-hidden="true" />
            {t('ctl.bulk.settings')}
          </h2>
          <div className="p-4 space-y-5 text-[15px]">
            <ModelPicker mode={mode} ready={ready} onChoose={chooseMode} disabled={isProcessing} />

            <div className="space-y-2 pt-4 border-t border-ink">
              <span className="slug">{t('ctl.bg.background')}</span>
              <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.bg.background')}>
                {(['transparent', 'color'] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={background === b}
                    onClick={() => setBackground(b)}
                    className={`min-h-[40px] text-[14px] font-semibold transition-colors ${background === b ? 'seg-on' : 'seg-off'}`}
                  >
                    {b === 'transparent' ? t('ctl.bg.transparent') : t('ctl.bg.color')}
                  </button>
                ))}
              </div>
              {(background === 'color' || format === 'image/jpeg') && (
                <label className="flex items-center justify-between gap-3">
                  <span>{t('ctl.bg.colorPick')}</span>
                  <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-9 h-9 border border-ink bg-transparent cursor-pointer" />
                </label>
              )}
            </div>

            <div className="space-y-2 pt-4 border-t border-ink">
              <span className="slug">{t('ws.saveAs')}</span>
              <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                {FORMATS.map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    aria-pressed={format === fmt}
                    onClick={() => setFormat(fmt)}
                    className={`min-h-[40px] text-[14px] font-semibold transition-colors ${format === fmt ? 'seg-on' : 'seg-off'}`}
                  >
                    {formatExtension(fmt).toUpperCase()}
                  </button>
                ))}
              </div>
              {format === 'image/jpeg' && background === 'transparent' && <p className="text-[14px] text-graphite">{t('ctl.bg.jpgNeedsColor')}</p>}
              <p className="text-[14px] text-graphite">{t('ctl.bulkBg.changeLater')}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {isProcessing ? (
            <>
              <button type="button" disabled className="btn-ink w-full min-h-[52px] text-[16px]">
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>{t('ctl.bulkBg.running')}</span>
              </button>
              <button type="button" onClick={() => (isCancelledRef.current = true)} className="btn-rule w-full">
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
              <button type="button" onClick={() => processQueue()} disabled={processableCount === 0} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
                <span>{t('ctl.bulkBg.run', { count: processableCount })}</span>
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
            <button type="button" onClick={() => addMoreInputRef.current?.click()} disabled={queueFull} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.bulk.addMore')}</span>
            </button>
            <button type="button" onClick={clearAll} disabled={isProcessing} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
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
  if (item.status === 'error') return item.rejected ? <Ban className={`${cls} text-accent-red`} aria-hidden="true" /> : <AlertCircle className={`${cls} text-accent-red`} aria-hidden="true" />;
  return <Circle className={`${cls} text-graphite`} aria-hidden="true" />;
}

function StatusText({ item }: { item: QueueItem }) {
  const t = useT();
  const label =
    item.status === 'done'
      ? t('ctl.bulk.statusDone')
      : item.status === 'processing'
        ? t('ctl.bulkBg.statusProcessing')
        : item.status === 'error'
          ? item.rejected ? t('ctl.bulk.statusRejected') : t('ctl.bulk.statusError')
          : t('ctl.bulk.statusPending');
  const tone = item.status === 'done' ? 'text-accent-green' : item.status === 'error' ? 'text-accent-red' : 'text-ink';
  return <span className={`font-semibold ${tone}`}>{label}</span>;
}
