import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, Archive, FilePen, Plus } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { DEFAULT_OPTIONS, newName, sortItems, uniqueNames, type CaseMode, type RenameOptions, type SortMode, type SpaceMode } from '../../../lib/storage/batchRename';

interface Item {
  id: string;
  file: File;
  name: string;
  modified: number;
  /** When the photo was taken (EXIF); null = none, undefined = still reading */
  taken?: Date | null;
}

const MAX_FILES = 500;
// A ZIP is built in memory: stay well under what a browser tab can hold, and under the 4 GB plain ZIP limit
const MAX_TOTAL = 2 * 1024 ** 3;
// Files that can carry a "date taken": photos, including HEIC, TIFF and camera RAW
const PHOTO = /\.(jpe?g|heic|heif|tiff?|png|webp|avif|cr2|cr3|nef|nrw|arw|dng|raf|orf|rw2|pef|srw)$/i;

/** When a photo was taken, from its EXIF (DateTimeOriginal, else CreateDate); null when it has none */
async function readTaken(file: File): Promise<Date | null> {
  if (!PHOTO.test(file.name) && !file.type.startsWith('image/')) return null;
  try {
    const exifr = (await import('exifr')).default;
    const d = (await exifr.parse(file, ['DateTimeOriginal', 'CreateDate'])) as { DateTimeOriginal?: Date; CreateDate?: Date } | undefined;
    const when = d?.DateTimeOriginal ?? d?.CreateDate;
    return when instanceof Date && !isNaN(when.getTime()) ? when : null;
  } catch {
    return null;
  }
}

const field = 'w-full min-h-[40px] px-3 border border-ink bg-paper-bright text-[15px] text-ink rounded-md';

/**
 * Batch Rename Files: new names for many files from one pattern, every name shown before download, renamed copies
 * in a ZIP (a web page can't rename files on the visitor's disk). Any file type; nothing is uploaded.
 */
export function BatchRenameWorkspace() {
  const t = useT();
  const [items, setItems] = useState<Item[]>([]);
  const [opts, setOpts] = useState<RenameOptions>({ ...DEFAULT_OPTIONS, pattern: '{name}' });
  const [sort, setSort] = useState<SortMode>('added');
  const [skipped, setSkipped] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const addRef = useRef<HTMLInputElement>(null);
  const patternRef = useRef<HTMLInputElement>(null);
  const set = (o: Partial<RenameOptions>) => setOpts((p) => ({ ...p, ...o }));
  const placeholders: [string, string][] = [
    ['{name}', t('ctl.rename.token.name')],
    ['{n}', t('ctl.rename.token.n')],
    ['{date}', t('ctl.rename.token.date')],
    ['{time}', t('ctl.rename.token.time')],
  ];

  const add = (list: File[]) => {
    setError(null);
    setStatus('');
    let total = items.reduce((n, i) => n + i.file.size, 0);
    const room = Math.max(0, MAX_FILES - items.length);
    const fresh: Item[] = [];
    let over = Math.max(0, list.length - room);
    for (const file of list.slice(0, room)) {
      if (total + file.size > MAX_TOTAL) {
        over++;
        continue;
      }
      total += file.size;
      fresh.push({ id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2)}`, file, name: file.name, modified: file.lastModified });
    }
    setSkipped(over);
    setItems((prev) => [...prev, ...fresh]);
    // Dates taken, a few at a time, in the background
    (async () => {
      const queue = [...fresh];
      const worker = async () => {
        for (let it = queue.shift(); it; it = queue.shift()) {
          const taken = await readTaken(it.file);
          const id = it.id;
          setItems((prev) => prev.map((x) => (x.id === id ? { ...x, taken } : x)));
        }
      };
      await Promise.all(Array.from({ length: 4 }, worker));
    })();
  };

  const ordered = useMemo(() => sortItems(items, sort), [items, sort]);
  const planned = useMemo(() => {
    const raw = ordered.map((it, i) => newName(it, i, opts));
    const unique = uniqueNames(raw);
    return ordered.map((it, i) => ({ it, name: unique[i], renamedAgain: unique[i] !== raw[i] }));
  }, [ordered, opts]);
  const changed = planned.filter((p) => p.name !== p.it.name).length;
  const duplicates = planned.filter((p) => p.renamedAgain).length;
  const usesDate = /\{(date|time)\}/i.test(opts.pattern) || sort === 'taken';
  const reading = usesDate && items.some((i) => i.taken === undefined);
  const noDate = usesDate ? items.filter((i) => i.taken === null).length : 0;
  const total = items.reduce((n, i) => n + i.file.size, 0);

  // A new list or pattern makes an old "saved" message wrong
  useEffect(() => setStatus(''), [items, opts, sort]);

  const insert = (token: string) => {
    const el = patternRef.current;
    const at = el?.selectionStart ?? opts.pattern.length;
    const end = el?.selectionEnd ?? at;
    const next = opts.pattern.slice(0, at) + token + opts.pattern.slice(end);
    set({ pattern: next });
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(at + token.length, at + token.length);
    });
  };

  const download = async () => {
    if (!planned.length) return;
    setBusy(true);
    setError(null);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      // Stored, not compressed: photos and most documents are compressed already, and this keeps it fast
      for (const p of planned) zip.file(p.name, p.it.file, { binary: true, date: new Date(p.it.modified) });
      downloadBlob(await zip.generateAsync({ type: 'blob', compression: 'STORE' }), 'renamed-files.zip');
      setStatus(t('ctl.rename.saved', { count: planned.length }));
    } catch (err) {
      console.error('Batch rename ZIP failed:', err);
      setError(t('ctl.rename.errZip'));
    } finally {
      setBusy(false);
    }
  };

  if (!items.length) {
    return <ProofDropZone onFiles={add} accept="*/*" multiple title={t('ctl.rename.dropTitle')} hint={t('ctl.rename.dropHint')} buttonLabel={t('ctl.rename.choose')} />;
  }

  const panel = (
    <>
      <div className="space-y-2">
        <label htmlFor="rename-pattern" className="slug block">{t('ctl.rename.pattern')}</label>
        <input id="rename-pattern" ref={patternRef} type="text" value={opts.pattern} onChange={(e) => set({ pattern: e.target.value })} spellCheck={false} autoComplete="off" className={`${field} font-semibold`} />
        <div className="flex flex-wrap gap-1.5" role="group" aria-label={t('ctl.rename.insert')}>
          {placeholders.map(([p, label]) => (
            // A plus: these add to the name (the order options below share some words)
            <button key={p} type="button" onClick={() => insert(p)} className="btn-rule min-h-[36px] px-2.5 gap-1 text-[14px]">
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
        <p className="text-[14px] text-graphite">{t('ctl.rename.patternHint')}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="space-y-1.5">
          <span className="slug block">{t('ctl.rename.start')}</span>
          <input type="number" inputMode="numeric" min={0} value={opts.start} onChange={(e) => set({ start: Math.max(0, parseInt(e.target.value, 10) || 0) })} className={field} data-measure />
        </label>
        <label className="space-y-1.5">
          <span className="slug block">{t('ctl.rename.digits')}</span>
          <select value={opts.digits} onChange={(e) => set({ digits: Number(e.target.value) })} className={field}>
            {[1, 2, 3, 4, 5, 6].map((d) => (
              <option key={d} value={d}>{d === 1 ? '1, 2, 3' : `${'0'.repeat(d - 1)}1`}</option>
            ))}
          </select>
        </label>
      </div>

      <Segmented<SortMode>
        label={t('ctl.rename.order')}
        value={sort}
        onChange={setSort}
        options={[
          { value: 'added', label: t('ctl.rename.orderAdded') },
          { value: 'name', label: t('ctl.rename.orderName') },
          { value: 'taken', label: t('ctl.rename.orderTaken') },
        ]}
      />

      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-pencil">
        <label className="space-y-1.5">
          <span className="slug block">{t('ctl.rename.find')}</span>
          <input type="text" value={opts.find} onChange={(e) => set({ find: e.target.value })} spellCheck={false} className={field} />
        </label>
        <label className="space-y-1.5">
          <span className="slug block">{t('ctl.rename.replace')}</span>
          <input type="text" value={opts.replace} onChange={(e) => set({ replace: e.target.value })} spellCheck={false} className={field} />
        </label>
      </div>

      <Segmented<CaseMode>
        label={t('ctl.rename.case')}
        value={opts.caseMode}
        onChange={(v) => set({ caseMode: v })}
        options={[
          { value: 'keep', label: t('ctl.rename.keep') },
          { value: 'lower', label: 'abc' },
          { value: 'upper', label: 'ABC' },
        ]}
      />
      <Segmented<SpaceMode>
        label={t('ctl.rename.spaces')}
        value={opts.spaces}
        onChange={(v) => set({ spaces: v })}
        options={[
          { value: 'keep', label: t('ctl.rename.keep') },
          { value: 'dash', label: t('ctl.rename.dash') },
          { value: 'underscore', label: t('ctl.rename.underscore') },
        ]}
      />
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={opts.lowerExt} onChange={(e) => set({ lowerExt: e.target.checked })} />
        <span className="text-ink">{t('ctl.rename.lowerExt')}</span>
      </label>
    </>
  );

  return (
    <PdfToolLayout
      icon={FilePen}
      fileSlug={t('ctl.rename.files')}
      fileLabel={<span data-measure>{t('ctl.bulk.fileCount', { count: items.length })} · {formatBytes(total)}</span>}
      onReplace={() => {
        setItems([]);
        setSkipped(0);
      }}
      replaceLabel={t('ctl.rename.clear')}
      panel={panel}
      actionLabel={t('ctl.rename.download', { count: items.length })}
      actionIcon={Archive}
      onAction={download}
      busy={busy}
      busyLabel={t('ctl.bulk.zipping')}
      status={status}
      error={error}
    >
      <input
        ref={addRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) add(Array.from(e.target.files));
          e.target.value = '';
        }}
      />
      <div
        className="border border-ink bg-paper-bright rounded-xl"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files?.length) add(Array.from(e.dataTransfer.files));
        }}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 px-4 py-2.5 border-b border-ink">
          <span className="slug">{t('ctl.rename.before')}</span>
          <span className="slug">{t('ctl.rename.after')}</span>
        </div>
        <ol className="max-h-[520px] overflow-y-auto divide-y divide-pencil-soft">
          {planned.map(({ it, name, renamedAgain }) => (
            <li key={it.id} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 px-4 py-2 text-[14px]">
              <span className="truncate text-graphite" title={it.name}>{it.name}</span>
              <span className={`truncate font-semibold ${name === it.name ? 'text-graphite' : 'text-ink'}`} title={name}>
                {name}
                {renamedAgain && <span className="ml-2 text-[12px] font-semibold text-accent-yellow" title={t('ctl.rename.dupHint')}>{t('ctl.rename.dup')}</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
        <span className="text-ink font-semibold" data-measure>{t('ctl.rename.changed', { count: changed, total: items.length })}</span>
        <button type="button" onClick={() => addRef.current?.click()} className="inline-flex items-center gap-1.5 min-h-[40px] font-medium text-ink underline hover:no-underline">
          <Plus className="w-4 h-4" aria-hidden="true" />
          {t('ctl.rename.addMore')}
        </button>
      </div>
      {reading && <p className="text-[14px] text-graphite">{t('ctl.rename.readingDates')}</p>}
      {!reading && noDate > 0 && <p className="text-[14px] text-graphite">{t('ctl.rename.noDate', { count: noDate })}</p>}
      {duplicates > 0 && <p className="text-[14px] text-graphite">{t('ctl.rename.dupNote', { count: duplicates })}</p>}
      {skipped > 0 && (
        <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t('ctl.rename.skipped', { count: skipped })}</span>
        </p>
      )}
    </PdfToolLayout>
  );
}
