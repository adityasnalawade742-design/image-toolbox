import React, { useMemo, useRef, useState } from 'react';
import { Copy, Download, FileText } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { IMAGE_ACCEPT } from './useOneImage';
import { bestOf, dHash, groupDuplicates, pHash, SENSITIVITY, type Fingerprint } from '../../../lib/photo/duplicates';

interface Item extends Fingerprint {
  file: File;
  name: string;
  width: number;
  height: number;
  bytes: number;
  thumb: string;
}

/** Grey thumbnail of a picture at an exact size (high-quality downscale first, so small details don't alias) */
function grey(img: CanvasImageSource, w: number, h: number): number[] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  const out: number[] = [];
  for (let p = 0; p < d.length; p += 4) out.push(0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2]);
  return out;
}

async function fingerprint(file: File): Promise<Item> {
  const [buf, loaded] = await Promise.all([file.arrayBuffer(), loadImageFile(file)]);
  try {
    const sha = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', buf)), (b) => b.toString(16).padStart(2, '0')).join('');
    // Shrink in two steps: canvases average poorly over very large reductions
    const mid = document.createElement('canvas');
    const s = Math.min(1, 256 / Math.max(loaded.width, loaded.height));
    mid.width = Math.max(1, Math.round(loaded.width * s));
    mid.height = Math.max(1, Math.round(loaded.height * s));
    const mctx = mid.getContext('2d')!;
    mctx.imageSmoothingQuality = 'high';
    mctx.drawImage(loaded.img, 0, 0, mid.width, mid.height);
    const thumb = await new Promise<string>((res) => mid.toBlob((b) => res(b ? URL.createObjectURL(b) : ''), 'image/jpeg', 0.8));
    return { file, name: file.name, width: loaded.width, height: loaded.height, bytes: file.size, thumb, sha, d: dHash(grey(mid, 9, 8)), p: pHash(grey(mid, 32, 32)) };
  } finally {
    URL.revokeObjectURL(loaded.url);
  }
}

export function DuplicateFinderWorkspace() {
  const t = useT();
  const [items, setItems] = useState<Item[]>([]);
  const [failed, setFailed] = useState<string[]>([]);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [level, setLevel] = useState<keyof typeof SENSITIVITY>('normal');
  // Indices the visitor chose to drop (default: every copy except the best in its group)
  const [overrides, setOverrides] = useState<Record<number, boolean>>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = async (files: File[]) => {
    setError(null);
    setStatus('');
    const start = items.length;
    const next: Item[] = [];
    const bad: string[] = [];
    setProgress({ done: 0, total: files.length });
    // A few at a time: fast, without holding many full-size photos in memory at once
    let i = 0;
    const worker = async () => {
      while (i < files.length) {
        const f = files[i++];
        try {
          next.push(await fingerprint(f));
        } catch {
          bad.push(f.name);
        }
        setProgress({ done: next.length + bad.length, total: files.length });
      }
    };
    await Promise.all([worker(), worker(), worker()]);
    // Keep the order the files were given in
    const order = new Map(files.map((f, k) => [f, k]));
    next.sort((a, b) => order.get(a.file)! - order.get(b.file)!);
    setItems((prev) => [...prev, ...next]);
    setFailed(bad);
    setProgress(null);
    if (start === 0) setOverrides({});
  };

  const groups = useMemo(() => groupDuplicates(items, SENSITIVITY[level]), [items, level]);
  const best = useMemo(() => new Map(groups.map((g) => [g, bestOf(items, g)])), [groups, items]);
  const dropped = (i: number, g: number[]) => overrides[i] ?? i !== best.get(g);
  const dropSet = useMemo(() => new Set(groups.flatMap((g) => g.filter((i) => dropped(i, g)))), [groups, overrides, best]); // eslint-disable-line react-hooks/exhaustive-deps
  const saved = [...dropSet].reduce((s, i) => s + items[i].bytes, 0);

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={IMAGE_ACCEPT}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) add(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );

  if (!items.length) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={add} accept={IMAGE_ACCEPT} multiple hint={t('ctl.dupes.dropHint')} />
        {progress && <p role="status" className="text-[15px] text-ink">{t('ctl.dupes.reading', { done: progress.done, total: progress.total })}</p>}
        {failed.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: failed.join(', ') })}</p>}
      </div>
    );
  }

  const zip = async () => {
    setBusy(true);
    setError(null);
    try {
      const { default: JSZip } = await import('jszip');
      const z = new JSZip();
      const used = new Set<string>();
      items.forEach((it, i) => {
        if (dropSet.has(i)) return;
        // Two files can share a name when they come from different folders
        let n = it.name, k = 2;
        while (used.has(n.toLowerCase())) n = it.name.replace(/(\.[^.]+)?$/, ` (${k++})$1`);
        used.add(n.toLowerCase());
        z.file(n, it.file, { compression: 'STORE', date: new Date(it.file.lastModified) });
      });
      const name = 'photos-without-duplicates.zip';
      downloadBlob(await z.generateAsync({ type: 'blob' }), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };
  const csv = () => {
    const q = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const rows = ['group,file,width,height,bytes,action'];
    groups.forEach((g, gi) => g.forEach((i) => rows.push([gi + 1, q(items[i].name), items[i].width, items[i].height, items[i].bytes, dropSet.has(i) ? 'remove' : 'keep'].join(','))));
    const name = 'duplicates.csv';
    downloadBlob(new Blob([rows.join('\n')], { type: 'text/csv' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const panel = (
    <>
      <p className="text-[15px] text-ink" aria-live="polite" data-measure>
        {groups.length ? t('ctl.dupes.summary', { groups: groups.length, remove: dropSet.size, size: formatBytes(saved) }) : t('ctl.dupes.none')}
      </p>
      <Segmented
        label={t('ctl.dupes.match')}
        value={level}
        cols={3}
        onChange={(v) => {
          setLevel(v);
          setOverrides({});
        }}
        options={[
          { value: 'strict', label: t('ctl.dupes.strict') },
          { value: 'normal', label: t('ctl.dupes.normal') },
          { value: 'loose', label: t('ctl.dupes.loose') },
        ]}
      />
      <p className="text-[13px] text-graphite -mt-1 leading-relaxed">{t(`ctl.dupes.${level}Note` as 'ctl.dupes.normalNote')}</p>
      <button type="button" onClick={csv} disabled={!groups.length} className="btn-rule min-h-[44px] w-full disabled:opacity-40">
        <FileText className="w-4 h-4" aria-hidden="true" />
        {t('ctl.dupes.csv')}
      </button>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.dupes.note')}</p>
    </>
  );

  return (
    <>
      {fileInput}
      <PdfToolLayout
        icon={Copy}
        fileLabel={t('ctl.dupes.count', { n: items.length })}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ctl.list.add')}
        panel={panel}
        actionLabel={t('ctl.dupes.zip', { n: items.length - dropSet.size })}
        actionIcon={Download}
        onAction={zip}
        busy={busy || !!progress}
        busyLabel={progress ? t('ctl.dupes.reading', { done: progress.done, total: progress.total }) : undefined}
        status={status}
        error={error ?? (failed.length ? t('ctl.list.skipped', { names: failed.join(', ') }) : null)}
      >
        {groups.length === 0 ? (
          <p className="border border-ink bg-paper-bright rounded-xl p-4 text-[15px] text-ink">{t('ctl.dupes.noneLong', { n: items.length })}</p>
        ) : (
          <ol className="space-y-4">
            {groups.map((g, gi) => (
              <li key={g.join('-')} className="border border-ink bg-paper-bright rounded-xl p-3 space-y-2">
                <h2 className="slug">{t('ctl.dupes.group', { n: gi + 1, count: g.length })}</h2>
                <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                  {g.map((i) => {
                    const it = items[i];
                    const drop = dropSet.has(i);
                    return (
                      <li key={i} className={`rounded-lg border p-2 space-y-1.5 ${drop ? 'border-pencil' : 'border-ink border-2'}`}>
                        <div className={`aspect-[4/3] bg-paper-stock rounded-md overflow-hidden flex items-center justify-center ${drop ? 'opacity-50' : ''}`}>
                          <img src={it.thumb} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <p className="text-[13px] text-ink break-all leading-snug">{it.name}</p>
                        <p className="text-[12px] text-graphite" data-measure>{it.width} × {it.height} · {formatBytes(it.bytes)}{i === best.get(g) ? ` · ${t('ctl.dupes.best')}` : ''}</p>
                        <label className="flex items-center gap-2 text-[14px] text-ink min-h-[32px] cursor-pointer">
                          <input type="checkbox" checked={!drop} onChange={(e) => setOverrides((o) => ({ ...o, [i]: !e.target.checked }))} />
                          {t('ctl.dupes.keep')}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        )}
      </PdfToolLayout>
    </>
  );
}
