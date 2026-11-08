import { useEffect, useMemo, useRef, useState } from 'react';
import { Download, Archive, Trash2, CheckCircle2, AlertCircle, Loader2, Circle, Ban, Plus, X, Sliders } from 'lucide-react';
import { downloadBlob, formatBytes } from '../../lib/canvas/engine';
import { batchFormat, convertImageFile, type Converted } from '../../lib/canvas/convertFile';
import { defaultQuality, formatExtension, type OutputFormat } from '../../lib/canvas/outputFormat';
import { createUniqueNamer, toolOutputName } from '../../lib/storage/fileNames';
import { useT } from './I18nContext';
import { MediaViewer, blobImage, formatKB, type ViewerItem } from './MediaViewer';
import { FileThumb } from './ViewableThumb';

interface Item {
  id: string;
  file: File;
  status: 'pending' | 'processing' | 'done' | 'error';
  rejected?: boolean;
  error?: string;
  out?: Converted;
}

const MAX_FILES = 50;
const MAX_BYTES = 50 * 1024 * 1024;
const PICKABLE: OutputFormat[] = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
const PARTIAL = { animation: 'ctl.batch.firstFrame', pages: 'ctl.batch.firstPage', images: 'ctl.batch.firstImage' } as const;

const base = (name: string) => name.replace(/\.[^/.]+$/, '');
const extOf = (name: string) => name.match(/\.([^./]+)$/)?.[1] ?? '';

/**
 * Several files through one converter (or Remove Metadata) with the same settings, one at a time, then one ZIP.
 * Each file comes out exactly as the page's single download would make it (`convertImageFile`).
 */
export function BatchConvertWorkspace({ slug, files, accept, onEmpty }: { slug: string; files: File[]; accept: string; onEmpty: () => void }) {
  const t = useT();
  const [queue, setQueue] = useState<Item[]>([]);
  const [overflow, setOverflow] = useState(0);
  const [running, setRunning] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [viewId, setViewId] = useState<string | null>(null);
  const [quality, setQuality] = useState(defaultQuality(slug));
  const [webpLossless, setWebpLossless] = useState(false);
  const [background, setBackground] = useState('#ffffff');
  const [svgScale, setSvgScale] = useState(2);
  // Only Convert Image lets you pick; the others have a fixed target, and Remove Metadata keeps each file's format
  const [chosen, setChosen] = useState<OutputFormat | undefined>(undefined);
  const cancelled = useRef(false);
  const addRef = useRef<HTMLInputElement>(null);
  const added = useRef(false);

  const add = (list: File[]) => {
    const room = Math.max(0, MAX_FILES - queue.length);
    setOverflow(Math.max(0, list.length - room));
    const items: Item[] = list.slice(0, room).map((file) => {
      const id = `${file.name}-${file.size}-${Math.random().toString(36).slice(2)}`;
      const notImage = !file.type.startsWith('image/') && !/\.(heic|heif|tiff?|svg)$/i.test(file.name);
      if (notImage) return { id, file, status: 'error', rejected: true, error: t('ctl.bulk.errNotImage') };
      if (file.size > MAX_BYTES) return { id, file, status: 'error', rejected: true, error: t('ctl.bulk.errTooLarge') };
      return { id, file, status: 'pending' };
    });
    setQueue((prev) => [...prev, ...items]);
  };

  // The files that opened this view
  useEffect(() => {
    if (added.current) return;
    added.current = true;
    add(files);
    if (slug === 'convert-image' && files[0]) setChosen(batchFormat(slug, files[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // New settings make finished results stale, so "Convert all" runs them again
  useEffect(() => {
    setQueue((prev) => (prev.some((q) => q.status === 'done') ? prev.map((q) => (q.status === 'done' ? { ...q, status: 'pending', out: undefined } : q)) : prev));
  }, [quality, webpLossless, background, svgScale, chosen]);

  const usable = queue.filter((q) => !q.rejected);
  const targets = useMemo(() => new Set(usable.map((q) => batchFormat(slug, q.file, chosen))), [usable, slug, chosen]);
  const metadata = slug === 'remove-image-metadata';
  const showWebp = targets.has('image/webp');
  const lossy = !metadata && [...targets].some((f) => f !== 'image/png') && !(targets.size === 1 && showWebp && webpLossless);

  const run = async () => {
    setRunning(true);
    setZipError(false);
    cancelled.current = false;
    for (const item of queue) {
      if (cancelled.current) break;
      if (item.rejected || item.status === 'done') continue;
      setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: 'processing' } : q)));
      try {
        const out = await convertImageFile(item.file, { slug, format: chosen, quality, webpLossless, background, svgScale });
        setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: 'done', out } : q)));
      } catch (err) {
        console.error(`Converting ${item.file.name} failed:`, err);
        setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: 'error', error: t('ctl.bulk.errProcess') } : q)));
      }
    }
    setRunning(false);
  };

  const nameFor = (item: Item) => toolOutputName(slug, base(item.file.name), item.out!.ext, extOf(item.file.name));

  const downloadZip = async () => {
    const done = queue.filter((q) => q.status === 'done' && q.out);
    if (!done.length) return;
    setZipping(true);
    setZipError(false);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const unique = createUniqueNamer();
      for (const item of done) zip.file(unique(nameFor(item)), item.out!.blob);
      downloadBlob(await zip.generateAsync({ type: 'blob' }), `${slug}.zip`);
    } catch (err) {
      console.error(err);
      setZipError(true);
    } finally {
      setZipping(false);
    }
  };

  const remove = (id: string) => {
    const left = queue.filter((q) => q.id !== id);
    setQueue(left);
    if (!left.length) onEmpty();
  };

  const doneCount = queue.filter((q) => q.status === 'done').length;
  const rejected = queue.filter((q) => q.rejected).length;
  const todo = queue.filter((q) => !q.rejected && q.status !== 'done').length;
  const allDone = doneCount > 0 && todo === 0;
  const inBytes = queue.reduce((n, q) => n + q.file.size, 0);
  const outBytes = queue.reduce((n, q) => n + (q.out?.blob.size ?? q.file.size), 0);
  const full = queue.length >= MAX_FILES;

  const zipLabel = (
    <>
      {zipping ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Archive className="w-5 h-5" aria-hidden="true" />}
      <span>{zipping ? t('ctl.bulk.zipping') : t('ctl.bulk.downloadZip', { count: doneCount })}</span>
    </>
  );

  return (
    <div
      className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (!full && !running && e.dataTransfer.files?.length) add(Array.from(e.dataTransfer.files));
      }}
    >
      <input
        ref={addRef}
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) add(Array.from(e.target.files));
          e.target.value = '';
        }}
      />

      <div className="min-w-0 space-y-3">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-2.5 border-b border-ink">
            <h2 className="slug">{t('ctl.bulk.queue')}</h2>
            <span className="text-[14px] text-graphite" data-measure>
              {t('ctl.bulk.fileCount', { count: queue.length })} · {formatBytes(inBytes)}
              {doneCount > 0 && ` → ${formatBytes(outBytes)}`}
            </span>
          </div>
          <ul className="max-h-[480px] overflow-y-auto divide-y divide-pencil-soft">
            {queue.map((item) => (
              <li key={item.id} className="flex items-start gap-3 px-4 py-2.5 text-[14px]">
                <StatusIcon item={item} />
                {!item.rejected && <FileThumb file={item.out?.blob ?? item.file} onView={() => setViewId(item.id)} label={t('ctl.view.view', { name: item.file.name })} />}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-ink font-medium" title={item.file.name}>{item.file.name}</p>
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[13px] text-graphite">
                    <StatusText item={item} />
                    <span data-measure>
                      {formatBytes(item.file.size)}
                      {item.out && (
                        <>
                          {' → '}
                          <span className="text-ink font-semibold">{formatBytes(item.out.blob.size)}</span> {item.out.ext.toUpperCase()}
                        </>
                      )}
                    </span>
                    {item.out?.partial && <span>{t(PARTIAL[item.out.partial])}</span>}
                  </p>
                  {item.status === 'error' && item.error && <p className="text-[13px] text-accent-red">{item.error}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {item.status === 'done' && item.out && (
                    <button
                      type="button"
                      onClick={() => downloadBlob(item.out!.blob, nameFor(item))}
                      className="w-9 h-9 inline-flex items-center justify-center text-ink hover:bg-paper-stock"
                      aria-label={t('ctl.bulk.downloadItem', { name: item.file.name })}
                      title={t('ctl.bulk.downloadItem', { name: item.file.name })}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                  {item.status !== 'processing' && (
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      disabled={running}
                      className="w-9 h-9 inline-flex items-center justify-center text-graphite hover:text-ink hover:bg-paper-stock disabled:opacity-40 disabled:hover:bg-transparent"
                      aria-label={t('ctl.bulk.removeItem', { name: item.file.name })}
                      title={t('ctl.bulk.removeItem', { name: item.file.name })}
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {viewId !== null && (() => {
            const items: ViewerItem[] = usable.map((item) => ({
              key: `${item.id}:${item.out ? 'out' : 'in'}`,
              label: item.file.name,
              detail: item.out ? `${formatKB(item.file.size)} → ${formatKB(item.out.blob.size)}` : formatKB(item.file.size),
              load: () => blobImage(item.out?.blob ?? item.file),
              // Only originals the browser can show (not HEIC or TIFF)
              original: item.out && !/\.(heic|heif|tiff?)$/i.test(item.file.name) ? () => blobImage(item.file) : undefined,
              transparent: true,
            }));
            const at = usable.findIndex((q) => q.id === viewId);
            return at < 0 ? null : <MediaViewer items={items} index={at} onIndex={(i) => setViewId(usable[i].id)} onClose={() => setViewId(null)} />;
          })()}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]">
          <span className="text-ink font-semibold" aria-live="polite" data-measure>
            {t('ctl.bulk.progress', { done: doneCount, total: queue.length - rejected })}
          </span>
          {rejected > 0 && <span className="text-graphite" data-measure>{t('ctl.bulk.skippedCount', { count: rejected })}</span>}
          <span className="text-graphite">{t('ctl.bulk.dropMoreHint')}</span>
        </div>
        {overflow > 0 && (
          <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{t('ctl.bulk.limitReached', { count: overflow })}</span>
          </p>
        )}
      </div>

      <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
        <div className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
            <Sliders className="w-4 h-4 text-ink" aria-hidden="true" />
            {t('ctl.bulk.settings')}
          </h2>
          <div className="p-4 space-y-4 text-[15px]">
            {metadata && <p className="text-[14px] text-graphite">{t('ctl.batch.hintMetadata')}</p>}
            {slug === 'convert-image' && (
              <div className="space-y-1.5">
                <span className="slug">{t('ws.saveAs')}</span>
                <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                  {PICKABLE.map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      aria-pressed={chosen === fmt}
                      disabled={running}
                      onClick={() => setChosen(fmt)}
                      className={`min-h-[40px] text-[14px] font-semibold transition-colors disabled:cursor-not-allowed ${chosen === fmt ? 'seg-on' : 'seg-off'}`}
                    >
                      {formatExtension(fmt).toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {slug.startsWith('svg-to-') && (
              <div className="space-y-1.5">
                <span className="slug">{t('ctl.svg.scale')}</span>
                <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.svg.scale')}>
                  {[1, 2, 4, 8].map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={svgScale === s}
                      disabled={running}
                      onClick={() => setSvgScale(s)}
                      className={`min-h-[40px] text-[14px] font-semibold transition-colors ${svgScale === s ? 'seg-on' : 'seg-off'}`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!metadata && targets.has('image/jpeg') && (
              <label className="flex items-center justify-between gap-3">
                <span>{t('ws.fillTransparent')}</span>
                <input
                  type="color"
                  value={background}
                  disabled={running}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-9 h-9 border border-ink bg-transparent cursor-pointer"
                />
              </label>
            )}
            {!metadata && showWebp && (
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-ink">
                  <input type="checkbox" className="mt-1" checked={webpLossless} disabled={running} onChange={(e) => setWebpLossless(e.target.checked)} />
                  <span>{t('ws.webpLossless')}</span>
                </label>
                <p className="text-[13px] text-graphite">{t('ws.webpAuto')}</p>
              </div>
            )}
            {!metadata && targets.size === 1 && targets.has('image/png') && <p className="text-[14px] text-graphite">{t('ws.pngLossless')}</p>}
            {lossy && (
              <label className="block space-y-1.5">
                <span className="flex items-center justify-between">
                  <span className="slug">{t('ws.quality')}</span>
                  <span className="font-semibold text-ink" data-measure>{quality}%</span>
                </span>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  disabled={running}
                  aria-label={t('ws.qualityLabel')}
                  onChange={(e) => setQuality(parseInt(e.target.value) || defaultQuality(slug))}
                  className="w-full"
                />
              </label>
            )}
          </div>
        </div>

        <div className="space-y-2">
          {running ? (
            <>
              <button type="button" disabled className="btn-ink w-full min-h-[52px] text-[16px]">
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>{t('ctl.batch.running')}</span>
              </button>
              <button type="button" onClick={() => (cancelled.current = true)} className="btn-rule w-full">
                <Ban className="w-4 h-4" aria-hidden="true" />
                <span>{t('ctl.bulk.cancel')}</span>
              </button>
            </>
          ) : allDone ? (
            <button type="button" disabled={zipping} onClick={downloadZip} className="btn-ink w-full min-h-[52px] text-[16px]">
              {zipLabel}
            </button>
          ) : (
            <>
              <button type="button" onClick={run} disabled={todo === 0} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
                <span>{t(metadata ? 'ctl.batch.runClean' : 'ctl.batch.run', { count: todo })}</span>
              </button>
              {doneCount > 0 && (
                <button type="button" disabled={zipping} onClick={downloadZip} className="btn-rule w-full disabled:opacity-60">
                  {zipLabel}
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
            <button type="button" onClick={() => addRef.current?.click()} disabled={full || running} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.bulk.addMore')}</span>
            </button>
            <button type="button" onClick={onEmpty} disabled={running} className="btn-rule disabled:opacity-40 disabled:cursor-not-allowed">
              <Trash2 className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.bulk.clearAll')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ item }: { item: Item }) {
  const cls = 'w-4 h-4 shrink-0 mt-0.5';
  if (item.status === 'done') return <CheckCircle2 className={`${cls} text-accent-green`} aria-hidden="true" />;
  if (item.status === 'processing') return <Loader2 className={`${cls} text-ink animate-spin`} aria-hidden="true" />;
  if (item.status === 'error') return item.rejected ? <Ban className={`${cls} text-accent-red`} aria-hidden="true" /> : <AlertCircle className={`${cls} text-accent-red`} aria-hidden="true" />;
  return <Circle className={`${cls} text-graphite`} aria-hidden="true" />;
}

function StatusText({ item }: { item: Item }) {
  const t = useT();
  const label =
    item.status === 'done'
      ? t('ctl.bulk.statusDone')
      : item.status === 'processing'
        ? t('ctl.batch.statusProcessing')
        : item.status === 'error'
          ? item.rejected ? t('ctl.bulk.statusRejected') : t('ctl.bulk.statusError')
          : t('ctl.bulk.statusPending');
  const tone = item.status === 'done' ? 'text-accent-green' : item.status === 'error' ? 'text-accent-red' : 'text-ink';
  return <span className={`font-semibold ${tone}`}>{label}</span>;
}
