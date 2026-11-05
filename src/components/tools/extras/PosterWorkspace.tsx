import React, { useEffect, useRef, useState } from 'react';
import { Grid3x3 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField, savePdf } from '../pdf/common';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { POSTER_MARGIN, posterLayout, posterPdf, tileLabel, type PosterOptions, type PosterSheet } from '../../../lib/pdf/poster';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
const PREVIEW_SIDE = 900;

async function isUpright(file: File) {
  try {
    const exifr = (await import('exifr')).default;
    const o = await exifr.orientation(file);
    return !o || o === 1;
  } catch {
    return true;
  }
}

/** Bytes for the PDF: the original file where PDF can hold it as is, otherwise a high-quality copy */
async function embedBytes(file: File, img: LoadedImage): Promise<{ kind: 'jpg' | 'png'; bytes: ArrayBuffer }> {
  if (file.type === 'image/png') return { kind: 'png', bytes: await file.arrayBuffer() };
  if (file.type === 'image/jpeg' && (await isUpright(file))) return { kind: 'jpg', bytes: await file.arrayBuffer() };
  const fit = fitWithinPixels(img.width, img.height);
  const c = document.createElement('canvas');
  c.width = fit.width;
  c.height = fit.height;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(img.img, 0, 0, c.width, c.height);
  // Lossless sources stay lossless; photos go to a high-quality JPEG
  const lossless = /tiff|png/.test(file.type) || /\.tiff?$/i.test(file.name);
  const blob = await new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('encode'))), lossless ? 'image/png' : 'image/jpeg', 0.95));
  c.width = c.height = 0;
  return { kind: lossless ? 'png' : 'jpg', bytes: await blob.arrayBuffer() };
}

export function PosterWorkspace() {
  const t = useT();
  const [src, setSrc] = useState<{ file: File; img: LoadedImage } | null>(null);
  const [o, setO] = useState<PosterOptions>({ sheet: 'a4', landscape: false, across: 3, overlap: 10, marks: true });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const set = (patch: Partial<PosterOptions>) => setO((prev) => ({ ...prev, ...patch }));

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const img = await loadImageFile(file);
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.img.url);
        return { file, img };
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  const L = src ? posterLayout(src.img.width, src.img.height, o) : null;

  // The picture with the pages drawn over it: each page's printed area, overlaps shaded
  useEffect(() => {
    if (!src || !L || !canvasRef.current) return;
    const c = canvasRef.current;
    const k = PREVIEW_SIDE / Math.max(L.posterW, L.posterH);
    c.width = Math.round(L.posterW * k);
    c.height = Math.round(L.posterH * k);
    const ctx = c.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(src.img.img, 0, 0, c.width, c.height);
    const stepX = (L.printW - L.overlap) * k, stepY = (L.printH - L.overlap) * k;
    ctx.fillStyle = 'rgba(255, 214, 0, 0.35)';
    for (let i = 1; i < L.cols; i++) ctx.fillRect(i * stepX, 0, L.overlap * k, c.height);
    for (let j = 1; j < L.rows; j++) ctx.fillRect(0, j * stepY, c.width, L.overlap * k);
    ctx.strokeStyle = '#141414';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    for (let i = 1; i < L.cols; i++) {
      ctx.beginPath();
      ctx.moveTo(i * stepX + L.overlap * k, 0);
      ctx.lineTo(i * stepX + L.overlap * k, c.height);
      ctx.stroke();
    }
    for (let j = 1; j < L.rows; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * stepY + L.overlap * k);
      ctx.lineTo(c.width, j * stepY + L.overlap * k);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.font = `600 ${Math.max(12, Math.min(stepX, stepY) * 0.12)}px Barlow, system-ui, sans-serif`;
    for (let j = 0; j < L.rows; j++)
      for (let i = 0; i < L.cols; i++) {
        const x = i * stepX + (i ? L.overlap * k : 0) + 8, y = j * stepY + (j ? L.overlap * k : 0) + 8;
        const label = tileLabel(j, i);
        const w = ctx.measureText(label).width;
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillRect(x - 4, y - 2, w + 8, parseInt(ctx.font.split(' ')[1]) + 6);
        ctx.fillStyle = '#141414';
        ctx.textBaseline = 'top';
        ctx.fillText(label, x, y + 1);
      }
  }, [src, L?.cols, L?.rows, L?.posterW, L?.overlap]);

  const run = async () => {
    if (!src || !L) return;
    setBusy(true);
    setError(null);
    try {
      const data = await embedBytes(src.file, src.img);
      const bytes = await posterPdf((doc) => (data.kind === 'png' ? doc.embedPng(data.bytes) : doc.embedJpg(data.bytes)), src.img.width, src.img.height, o);
      const name = `${src.file.name.replace(/\.[^.]+$/, '')}-poster.pdf`;
      savePdf(bytes, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  if (!src || !L) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.poster.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const cm = (pt: number) => (pt / 72) * 2.54;
  const dpi = Math.round(src.img.width / (L.posterW / 72));
  const panel = (
    <>
      <RangeField id="poster-across" label={t('ctl.poster.across')} value={o.across} min={1} max={10} onChange={(v) => set({ across: v })} />
      <Segmented
        label={t('ctl.sheet.page')}
        value={o.sheet}
        options={[
          { value: 'a4' as PosterSheet, label: 'A4' },
          { value: 'letter' as PosterSheet, label: 'Letter' },
          { value: 'a3' as PosterSheet, label: 'A3' },
        ]}
        onChange={(v) => set({ sheet: v })}
      />
      <Segmented
        label={t('ctl.sheet.orientation')}
        value={o.landscape ? 'l' : 'p'}
        options={[
          { value: 'p', label: t('ctl.sheet.portrait') },
          { value: 'l', label: t('ctl.sheet.landscape') },
        ]}
        onChange={(v) => set({ landscape: v === 'l' })}
      />
      <Segmented label={t('ctl.poster.overlap')} value={o.overlap} cols={4} options={[0, 5, 10, 15].map((v) => ({ value: v, label: `${v} mm` }))} onChange={(v) => set({ overlap: v })} />
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={o.marks} onChange={(e) => set({ marks: e.target.checked })} />
        <span className="text-ink">{t('ctl.poster.marks')}</span>
      </label>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.poster.howTo', { margin: Math.round(cm(POSTER_MARGIN) * 10) })}</p>
    </>
  );

  return (
    <>
      <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { if (e.target.files?.[0]) load(e.target.files[0]); e.target.value = ''; }} />
      <PdfToolLayout
        icon={Grid3x3}
        fileLabel={`${src.img.width} × ${src.img.height} px · ${src.file.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
          <canvas ref={canvasRef} role="img" aria-label={t('ctl.poster.preview', { cols: L.cols, rows: L.rows })} className="block max-h-[60vh] max-w-full object-contain" />
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
          <span className="text-ink font-semibold">{L.cols * L.rows === 1 ? '1 × 1' : t('ctl.poster.pages', { cols: L.cols, rows: L.rows, n: L.cols * L.rows })}</span>
          <span className="text-ink">
            {t('ctl.poster.size', {
              w: cm(L.posterW).toFixed(0),
              h: cm(L.posterH).toFixed(0),
              wi: (L.posterW / 72).toFixed(1),
              hi: (L.posterH / 72).toFixed(1),
            })}
          </span>
        </div>
        {dpi < 100 && <p className="text-[14px] text-ink">{t('ctl.poster.soft', { dpi })}</p>}
      </PdfToolLayout>
    </>
  );
}
