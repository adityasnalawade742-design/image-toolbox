import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, ChevronLeft, ChevronRight, Download, LayoutGrid, Loader2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { ImageOrderList } from '../../shared/ImageOrderList';
import { useImageList, type ListImage } from '../../shared/useImageList';
import { useT } from '../../shared/I18nContext';
import { Segmented } from '../../shared/PdfToolLayout';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload, lanczosDownscale } from '../../../lib/canvas/engine';
import { DPI, fitInBox, layoutSheet, type PageSize, type Sheet } from '../../../lib/canvas/contactSheet';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
type Format = 'pdf' | 'png' | 'jpg';
const PREVIEW_MAX = 1100;
const FONT = 'Barlow, system-ui, -apple-system, "Segoe UI", sans-serif';

/** A caption that fits the box: cut with an ellipsis when too long */
function fitText(ctx: CanvasRenderingContext2D, text: string, width: number): string {
  if (ctx.measureText(text).width <= width) return text;
  let lo = 0, hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (ctx.measureText(text.slice(0, mid) + '…').width <= width) lo = mid;
    else hi = mid - 1;
  }
  return text.slice(0, lo) + '…';
}

/** Draw one page; `best` shrinks each photo with Lanczos (for the download) instead of the browser's quick resize */
async function drawPage(canvas: HTMLCanvasElement, sheet: Sheet, page: number, items: ListImage[], o: { captions: boolean; title: string }, scale: number, best: boolean) {
  canvas.width = Math.round(sheet.width * scale);
  canvas.height = Math.round(sheet.height * scale);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.scale(scale, scale);
  ctx.fillStyle = '#141414';
  ctx.textBaseline = 'alphabetic';
  if (o.title) {
    ctx.font = `600 ${sheet.titleSize}px ${FONT}`;
    ctx.fillText(fitText(ctx, o.title, sheet.width - sheet.margin * 2), sheet.margin, sheet.margin + sheet.titleSize);
  }
  ctx.imageSmoothingQuality = 'high';
  for (const cell of sheet.pages[page] ?? []) {
    const it = items[cell.item];
    const box = fitInBox(it.width, it.height, cell);
    const small = best ? await lanczosDownscale(it.img, 0, 0, it.width, it.height, Math.round(box.w * scale), Math.round(box.h * scale)) : null;
    ctx.drawImage(small ?? it.img, box.x, box.y, box.w, box.h);
    if (small) small.width = small.height = 0;
    ctx.strokeStyle = '#cfcfc8';
    ctx.lineWidth = Math.max(1, sheet.gap / 12);
    ctx.strokeRect(box.x, box.y, box.w, box.h);
    if (o.captions) {
      ctx.fillStyle = '#2b2b29';
      ctx.font = `${sheet.captionSize}px ${FONT}`;
      ctx.fillText(fitText(ctx, it.name, cell.w), cell.x, cell.captionY);
      ctx.fillStyle = '#141414';
    }
  }
  if (sheet.pages.length > 1) {
    ctx.fillStyle = '#5b5b58';
    ctx.font = `${sheet.captionSize}px ${FONT}`;
    ctx.textAlign = 'right';
    ctx.fillText(`${page + 1} / ${sheet.pages.length}`, sheet.width - sheet.margin, sheet.height - sheet.margin / 2);
    ctx.textAlign = 'left';
  }
}

export function ContactSheetWorkspace() {
  const t = useT();
  const { items, setOrdered, addFiles, skipped, loading } = useImageList();
  const [page, setPage] = useState<PageSize>('a4');
  const [landscape, setLandscape] = useState(false);
  const [columns, setColumns] = useState(4);
  const [captions, setCaptions] = useState(true);
  const [title, setTitle] = useState('');
  const [format, setFormat] = useState<Format>('pdf');
  const [view, setView] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sheet = useMemo(() => layoutSheet(items.length, { page, landscape, columns, captions, title: !!title.trim() }), [items.length, page, landscape, columns, captions, title]);
  const pageCount = sheet.pages.length;
  const shown = Math.min(view, Math.max(0, pageCount - 1));

  useEffect(() => {
    if (!canvasRef.current || !items.length) return;
    const id = window.setTimeout(() => drawPage(canvasRef.current!, sheet, shown, items, { captions, title: title.trim() }, PREVIEW_MAX / Math.max(sheet.width, sheet.height), false), 60);
    return () => window.clearTimeout(id);
  }, [sheet, shown, items, captions, title]);

  const run = async () => {
    if (!items.length || busy) return;
    setBusy(true);
    setError(null);
    setStatus('');
    try {
      const o = { captions, title: title.trim() };
      const canvas = document.createElement('canvas');
      const base = 'contact-sheet';
      if (format === 'pdf') {
        const { PDFDocument } = await import('pdf-lib');
        const pdf = await PDFDocument.create();
        for (let p = 0; p < pageCount; p++) {
          setStatus(t('ctl.sheet.working', { n: p + 1, total: pageCount }));
          await drawPage(canvas, sheet, p, items, o, 1, true);
          const jpg = await (await canvasToBlob(canvas, 'image/jpeg', 0.92)).arrayBuffer();
          const image = await pdf.embedJpg(jpg);
          const pdfPage = pdf.addPage([(sheet.width / DPI) * 72, (sheet.height / DPI) * 72]);
          pdfPage.drawImage(image, { x: 0, y: 0, width: pdfPage.getWidth(), height: pdfPage.getHeight() });
        }
        downloadBlob(new Blob([new Uint8Array(await pdf.save())], { type: 'application/pdf' }), `${base}.pdf`);
        setStatus(t('ctl.pdf.done', { name: `${base}.pdf` }));
      } else {
        const type = format === 'png' ? 'image/png' : 'image/jpeg';
        const blobs: Blob[] = [];
        for (let p = 0; p < pageCount; p++) {
          setStatus(t('ctl.sheet.working', { n: p + 1, total: pageCount }));
          await drawPage(canvas, sheet, p, items, o, 1, true);
          blobs.push(await canvasToBlob(canvas, type, 0.92, undefined, forDownload(type)));
        }
        if (blobs.length === 1) {
          downloadBlob(blobs[0], `${base}.${format}`);
          setStatus(t('ctl.pdf.done', { name: `${base}.${format}` }));
        } else {
          const { default: JSZip } = await import('jszip');
          const zip = new JSZip();
          blobs.forEach((b, i) => zip.file(`${base}-${String(i + 1).padStart(2, '0')}.${format}`, b));
          downloadBlob(await zip.generateAsync({ type: 'blob' }), `${base}.zip`);
          setStatus(t('ctl.pdf.done', { name: `${base}.zip` }));
        }
      }
      canvas.width = canvas.height = 0;
    } catch {
      setError(t('ws.errExport'));
      setStatus('');
    } finally {
      setBusy(false);
    }
  };

  const fileInput = (
    <input ref={fileInputRef} type="file" accept={ACCEPT} multiple className="hidden" onChange={(e) => { if (e.target.files?.length) addFiles(Array.from(e.target.files)); e.target.value = ''; }} />
  );

  if (!items.length) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={addFiles} accept={ACCEPT} multiple hint={t('ctl.sheet.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ws.rendering')}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  const label = format === 'pdf' ? 'PDF' : format.toUpperCase();
  return (
    <div className="pb-20 lg:pb-0">
      {fileInput}
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="bg-paper-stock border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
            <canvas ref={canvasRef} role="img" aria-label={t('ctl.sheet.preview', { n: shown + 1, total: pageCount })} className="block max-w-full max-h-[70vh] w-auto h-auto object-contain shadow-[0_2px_10px_rgba(0,0,0,0.12)]" />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
            <span className="text-ink">{t('ctl.sheet.summary', { photos: items.length, pages: pageCount })}</span>
            {pageCount > 1 && (
              <span className="ml-auto flex items-center gap-1">
                <button type="button" onClick={() => setView(Math.max(0, shown - 1))} disabled={shown === 0} aria-label={t('ctl.sheet.prev')} className="btn-rule min-h-[40px] px-2 disabled:opacity-40">
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="px-2 font-semibold">{shown + 1} / {pageCount}</span>
                <button type="button" onClick={() => setView(Math.min(pageCount - 1, shown + 1))} disabled={shown >= pageCount - 1} aria-label={t('ctl.sheet.next')} className="btn-rule min-h-[40px] px-2 disabled:opacity-40">
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </span>
            )}
          </div>
          {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
          {status && <p role="status" className="text-[15px] text-ink">{status}</p>}
          {error && (
            <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright rounded-xl">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">
              <div className="space-y-2">
                <span className="slug block">{t('ctl.list.images')}</span>
                <ImageOrderList items={items} onChange={setOrdered} onAdd={() => fileInputRef.current?.click()} view />
              </div>
              <div className="pt-4 border-t border-ink space-y-5">
                <Segmented label={t('ctl.sheet.page')} value={page} options={[{ value: 'a4', label: 'A4' }, { value: 'letter', label: 'Letter' }]} onChange={setPage} />
                <Segmented label={t('ctl.sheet.orientation')} value={landscape ? 'l' : 'p'} options={[{ value: 'p', label: t('ctl.sheet.portrait') }, { value: 'l', label: t('ctl.sheet.landscape') }]} onChange={(v) => setLandscape(v === 'l')} />
                <RangeField id="sheet-cols" label={t('ctl.sheet.columns')} value={columns} min={2} max={8} onChange={setColumns} />
                <label className="flex items-center gap-3 min-h-[40px]">
                  <input type="checkbox" checked={captions} onChange={(e) => setCaptions(e.target.checked)} className="w-5 h-5 accent-ink" />
                  {t('ctl.sheet.captions')}
                </label>
                <div className="space-y-1.5">
                  <label htmlFor="sheet-title" className="slug block">{t('ctl.sheet.title')}</label>
                  <input id="sheet-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t('ctl.sheet.titlePlaceholder')} className="w-full min-h-[44px] px-3 border border-ink bg-paper-bright text-[16px] text-ink rounded-md" />
                </div>
                <Segmented label={t('ws.saveAs')} value={format} options={[{ value: 'pdf', label: 'PDF' }, { value: 'png', label: 'PNG' }, { value: 'jpg', label: 'JPG' }]} onChange={setFormat} />
                {format !== 'pdf' && pageCount > 1 && <p className="text-[13px] text-graphite">{t('ctl.sheet.zipNote')}</p>}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <button type="button" onClick={run} disabled={busy} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
              {busy ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              <span>{busy ? t('ws.preparing') : t('ws.download', { format: label })}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
        <button type="button" onClick={run} disabled={busy} className="btn-ink w-full min-h-[48px] text-[16px]">
          {busy ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
          <span>{busy ? t('ws.preparing') : t('ws.download', { format: label })}</span>
        </button>
      </div>
    </div>
  );
}
