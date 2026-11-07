import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FileScan, RotateCw, ScanLine, Wand2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { ImageOrderList } from '../../shared/ImageOrderList';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { useImageIntake } from '../../shared/useImageIntake';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';
import { CornerEditor, fullQuad } from './CornerEditor';
import { detectPage } from '../../../lib/scan/detect';
import { scanPage, type PageShape, type Turn } from '../../../lib/scan/pipeline';
import type { ScanMode } from '../../../lib/scan/clean';
import { isConvex, type Quad } from '../../../lib/photo/perspective';
import { runPhoto, toCanvas } from '../../../lib/photo/runPhoto';

/** Detected pages below this are a guess: the whole picture is used instead, and nothing is cut off */
const CONFIDENT = 0.6;
/** Longest side of a finished page: about 200 DPI on A4, sharp for reading and printing, modest in size */
const PAGE_MAX = 2339;
type Mode = ScanMode | 'none';

/** Pixels of a picture at no more than `max` on its longer side */
function pixelsOf(img: CanvasImageSource, w: number, h: number, max: number) {
  const s = Math.min(1, max / Math.max(w, h));
  const fit = fitWithinPixels(Math.round(w * s), Math.round(h * s));
  const c = document.createElement('canvas');
  c.width = fit.width;
  c.height = fit.height;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, c.width, c.height);
  return { data: ctx.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height, scale: c.width / w };
}

const scaleQuad = (q: Quad, k: number) => q.map((p) => ({ x: p.x * k, y: p.y * k })) as Quad;

/** Find the page; below the confidence bar, the whole picture */
function findPage(img: CanvasImageSource, w: number, h: number) {
  const small = pixelsOf(img, w, h, 1200);
  const d = detectPage(small.data, small.w, small.h);
  return d && d.confidence >= CONFIDENT ? { quad: scaleQuad(d.quad, 1 / small.scale), found: true } : { quad: fullQuad(w, h), found: false };
}

function modeOptions(t: ReturnType<typeof useT>, withNone: boolean) {
  return [
    ...(withNone ? [{ value: 'none' as Mode, label: t('ctl.docscan.modeNone') }] : []),
    { value: 'color' as Mode, label: t('ctl.docscan.modeColor') },
    { value: 'gray' as Mode, label: t('ctl.docscan.modeGray') },
    { value: 'bw' as Mode, label: t('ctl.docscan.modeBw') },
  ];
}

/** The finished page as a preview canvas (a smaller copy, so it updates as corners move) */
function usePreview(img: CanvasImageSource | null, w: number, h: number, quad: Quad, mode: Mode, strength: number, shape: PageShape, turn: Turn, max = 900) {
  const ref = useRef<HTMLCanvasElement>(null);
  const small = useMemo(() => (img ? pixelsOf(img, w, h, 1400) : null), [img, w, h]);
  useEffect(() => {
    const c = ref.current;
    if (!c || !small || !isConvex(quad)) return;
    const id = window.setTimeout(() => {
      const r = scanPage(small.data, small.w, small.h, { quad: scaleQuad(quad, small.scale), shape, clean: mode === 'none' ? null : { mode, strength }, turn, maxSide: max });
      c.width = r.w;
      c.height = r.h;
      c.getContext('2d')!.putImageData(new ImageData(r.data as Uint8ClampedArray<ArrayBuffer>, r.w, r.h), 0, 0);
    }, 40);
    return () => window.clearTimeout(id);
  }, [small, quad, mode, strength, shape, turn, max]);
  return ref;
}

/** Full-size page in the worker, as a file: black and white as PNG (small and lossless), the rest as JPEG */
async function renderPage(img: CanvasImageSource, w: number, h: number, quad: Quad, mode: Mode, strength: number, shape: PageShape, turn: Turn) {
  const px = pixelsOf(img, w, h, 6000);
  const r = await runPhoto({ op: 'scan', o: { quad: scaleQuad(quad, px.scale), shape, clean: mode === 'none' ? null : { mode, strength }, turn, maxSide: PAGE_MAX } }, px.data, px.w, px.h);
  const canvas = toCanvas(r.data, r.w, r.h);
  const type = mode === 'bw' ? 'image/png' : 'image/jpeg';
  return { blob: await canvasToBlob(canvas, type, 0.85), type, width: r.w, height: r.h };
}

/** A small straightened picture of a page, for the page list */
async function thumbOf(img: CanvasImageSource, w: number, h: number, quad: Quad, turn: Turn) {
  const px = pixelsOf(img, w, h, 600);
  const r = scanPage(px.data, px.w, px.h, { quad: scaleQuad(quad, px.scale), shape: 'auto', clean: null, turn, maxSide: 160 });
  return URL.createObjectURL(await canvasToBlob(toCanvas(r.data, r.w, r.h), 'image/jpeg', 0.8));
}

// ---------- Scan to PDF ----------
interface Page {
  id: string;
  name: string;
  file: File;
  url: string;
  width: number;
  height: number;
  quad: Quad;
  found: boolean;
  turn: Turn;
  thumb: string;
}

export function ScanToPdfWorkspace() {
  const t = useT();
  const [pages, setPages] = useState<Page[]>([]);
  const [sel, setSel] = useState(0);
  const [selImg, setSelImg] = useState<HTMLImageElement | null>(null);
  const [mode, setMode] = useState<Mode>('color');
  const [strength, setStrength] = useState(50);
  const [shape, setShape] = useState<PageShape>('a4');
  const [loading, setLoading] = useState<{ done: number; total: number } | null>(null);
  const [busy, setBusy] = useState<{ done: number; total: number } | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [skipped, setSkipped] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagesRef = useRef(pages);
  pagesRef.current = pages;

  const add = async (files: File[]) => {
    setError(null);
    setStatus('');
    const bad: string[] = [];
    const added: Page[] = [];
    setLoading({ done: 0, total: files.length });
    for (const [i, f] of files.entries()) {
      try {
        const l = await loadImageFile(f);
        const { quad, found } = findPage(l.img, l.width, l.height);
        const thumb = await thumbOf(l.img, l.width, l.height, quad, 0);
        added.push({ id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 6)}`, name: f.name, file: f, url: l.url, width: l.width, height: l.height, quad, found, turn: 0, thumb });
      } catch {
        bad.push(f.name);
      }
      setLoading({ done: i + 1, total: files.length });
    }
    setPages((p) => [...p, ...added]);
    setSkipped(bad);
    setLoading(null);
  };
  useImageIntake((f) => add([f]));
  useEffect(() => () => pagesRef.current.forEach((p) => (URL.revokeObjectURL(p.url), URL.revokeObjectURL(p.thumb))), []);

  const page = pages[Math.min(sel, pages.length - 1)];
  useEffect(() => {
    if (!page) return setSelImg(null);
    const img = new Image();
    img.onload = () => setSelImg(img);
    img.src = page.url;
  }, [page?.url]); // eslint-disable-line react-hooks/exhaustive-deps
  const previewRef = usePreview(selImg && page ? selImg : null, page?.width ?? 1, page?.height ?? 1, page?.quad ?? fullQuad(1, 1), mode, strength, shape, page?.turn ?? 0);

  const update = (p: Partial<Page>) => setPages((all) => all.map((x) => (x.id === page.id ? { ...x, ...p } : x)));
  // Keep the selected page's thumbnail in step with its corners and turn
  useEffect(() => {
    if (!page || !selImg || !isConvex(page.quad)) return;
    const id = page.id;
    const timer = window.setTimeout(async () => {
      const thumb = await thumbOf(selImg, page.width, page.height, page.quad, page.turn);
      setPages((all) =>
        all.map((x) => {
          if (x.id !== id) return x;
          URL.revokeObjectURL(x.thumb);
          return { ...x, thumb };
        })
      );
    }, 400);
    return () => window.clearTimeout(timer);
  }, [page?.quad, page?.turn, selImg]); // eslint-disable-line react-hooks/exhaustive-deps
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

  if (!pages.length) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={add} accept={IMAGE_ACCEPT} multiple hint={t('ctl.docscan.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ctl.docscan.reading', { done: loading.done, total: loading.total })}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  const name = 'scan.pdf';
  const build = async () => {
    const { PDFDocument } = await import('pdf-lib');
    const pdf = await PDFDocument.create();
    const list = pagesRef.current;
    for (const [i, p] of list.entries()) {
      setBusy({ done: i, total: list.length });
      const l = await loadImageFile(p.file);
      try {
        const r = await renderPage(l.img, l.width, l.height, p.quad, mode, strength, shape, p.turn);
        const bytes = await r.blob.arrayBuffer();
        const image = r.type === 'image/png' ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
        // Paper sizes are exact; "as photographed" pages are sized for 200 DPI
        const land = r.width > r.height;
        const [pw, ph] = shape === 'a4' ? [595.28, 841.89] : shape === 'letter' ? [612, 792] : [(r.width * 72) / 200, (r.height * 72) / 200];
        const [W, H] = shape === 'auto' ? [pw, ph] : land ? [ph, pw] : [pw, ph];
        const pg = pdf.addPage([W, H]);
        pg.drawImage(image, { x: 0, y: 0, width: W, height: H });
      } finally {
        URL.revokeObjectURL(l.url);
      }
    }
    setBusy({ done: list.length, total: list.length });
    return new Blob([(await pdf.save()) as BlobPart], { type: 'application/pdf' });
  };
  const run = async () => {
    setError(null);
    try {
      downloadBlob(await build(), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(null);
    }
  };

  const panel = (
    <>
      <ImageOrderList
        items={pages.map((p) => ({ ...p, url: p.thumb }))}
        onChange={(next) => {
          const byId = new Map(pages.map((p) => [p.id, p]));
          const kept = next.map((n) => byId.get(n.id)!).filter(Boolean);
          pages.filter((p) => !kept.includes(p)).forEach((p) => (URL.revokeObjectURL(p.url), URL.revokeObjectURL(p.thumb)));
          setPages(kept);
          setSel((s) => Math.min(s, Math.max(0, kept.length - 1)));
        }}
        onAdd={() => inputRef.current?.click()}
        addLabel={t('ctl.docscan.addPages')}
        view={(i) => setSel(i)}
      />
      <Segmented label={t('ctl.docscan.mode')} value={mode} cols={2} onChange={setMode} options={modeOptions(t, true)} />
      {mode !== 'none' && <RangeField id="scan-strength" label={t('ctl.docscan.strength')} value={strength} min={0} max={100} onChange={setStrength} />}
      {mode === 'bw' && <p className="text-[13px] text-graphite -mt-2 leading-relaxed">{t('ctl.docscan.bwNote')}</p>}
      <Segmented
        label={t('ctl.docscan.pageSize')}
        value={shape}
        cols={3}
        onChange={setShape}
        options={[
          { value: 'a4', label: 'A4' },
          { value: 'letter', label: t('ctl.topdf.letter') },
          { value: 'auto', label: t('ctl.docscan.asPhotographed') },
        ]}
      />
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.docscan.ocrNote')} <a href="/ocr-pdf" className="underline">{t('ctl.docscan.ocrLink')}</a></p>
    </>
  );

  return (
    <>
      {fileInput}
      <PdfToolLayout
        icon={FileScan}
        fileLabel={t('ctl.docscan.pages', { n: pages.length })}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ctl.docscan.addPages')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!pages.every((p) => isConvex(p.quad))}
        busy={!!busy}
        busyLabel={busy ? t('ctl.docscan.making', { done: Math.min(busy.done + 1, busy.total), total: busy.total }) : undefined}
        status={status}
        error={error ?? (skipped.length ? t('ctl.list.skipped', { names: skipped.join(', ') }) : null)}
      >
        {page && selImg && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[15px] text-ink font-semibold">{t('ctl.docscan.pageOf', { n: Math.min(sel, pages.length - 1) + 1, total: pages.length })}</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => update({ quad: findPage(selImg, page.width, page.height).quad })} className="btn-rule min-h-[40px] text-[14px]">
                  <Wand2 className="w-4 h-4" aria-hidden="true" />
                  {t('ctl.docscan.findEdges')}
                </button>
                <button type="button" onClick={() => update({ quad: fullQuad(page.width, page.height) })} className="btn-rule min-h-[40px] text-[14px]">{t('ctl.docscan.whole')}</button>
                <button type="button" onClick={() => update({ turn: ((page.turn + 90) % 360) as Turn })} className="btn-rule min-h-[40px] text-[14px]" aria-label={t('ctl.docscan.turn')} title={t('ctl.docscan.turn')}>
                  <RotateCw className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            {!page.found && <p className="text-[14px] text-ink">{t('ctl.docscan.notFound')}</p>}
            <div className="grid gap-4 md:grid-cols-2 items-start">
              <div className="bg-paper-bright border border-ink rounded-xl p-2 flex justify-center">
                <CornerEditor src={page.url} width={page.width} height={page.height} quad={page.quad} onChange={(q) => update({ quad: q })} maxHeight="58vh" />
              </div>
              <div className="bg-paper-stock border border-ink rounded-xl p-2 flex justify-center">
                <canvas ref={previewRef} role="img" aria-label={t('ctl.docscan.result')} className="block max-w-full max-h-[58vh] shadow" />
              </div>
            </div>
            <p className="text-[13px] text-graphite">{t('ctl.docscan.cornersHint')}</p>
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}

// ---------- Scan cleaner ----------
export function ScanCleanerWorkspace() {
  const t = useT();
  const [mode, setMode] = useState<Mode>('gray');
  const [strength, setStrength] = useState(50);
  const [straighten, setStraighten] = useState(true);
  const [quad, setQuad] = useState<Quad | null>(null);
  const [found, setFound] = useState(false);
  const [compare, setCompare] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage((img) => {
    const r = findPage(img.canvas, img.width, img.height);
    setQuad(r.quad);
    setFound(r.found);
    // A flat scan or screenshot has no edges to find: start without straightening
    setStraighten(r.found);
    setStatus('');
  });
  const img = one.img;
  const q = img ? (straighten && quad ? quad : fullQuad(img.width, img.height)) : fullQuad(1, 1);
  const previewRef = usePreview(img?.canvas ?? null, img?.width ?? 1, img?.height ?? 1, q, compare ? 'none' : mode, strength, 'auto', 0, 1200);

  if (!img || !quad) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.scanclean.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }
  const ext = mode === 'bw' ? 'png' : 'jpg';
  const name = `${img.file.name.replace(/\.[^.]+$/, '')}-clean.${ext}`;
  const build = async () => (await renderPage(img.canvas, img.width, img.height, q, mode, strength, 'auto', 0)).blob;
  const run = async () => {
    setBusy(true);
    one.setError(null);
    try {
      downloadBlob(await build(), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      one.setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };
  const panel = (
    <>
      <Segmented label={t('ctl.docscan.mode')} value={mode} cols={3} onChange={setMode} options={modeOptions(t, false)} />
      <RangeField id="clean-strength" label={t('ctl.docscan.strength')} value={strength} min={0} max={100} onChange={setStrength} />
      {mode === 'bw' && <p className="text-[13px] text-graphite -mt-2 leading-relaxed">{t('ctl.docscan.bwNote')}</p>}
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={straighten} onChange={(e) => setStraighten(e.target.checked)} />
        <span className="text-ink">{t('ctl.scanclean.straighten')}</span>
      </label>
      {straighten && !found && <p className="text-[13px] text-graphite -mt-2">{t('ctl.docscan.notFound')}</p>}
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.scanclean.note')}</p>
    </>
  );
  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={ScanLine}
        fileLabel={`${img.width} × ${img.height} px · ${img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={name} transparent={false} load={async () => blobImage(await build())} original={() => urlImage(img.url)} disabled={!isConvex(q)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: ext.toUpperCase() })}
        onAction={run}
        actionDisabled={!isConvex(q)}
        busy={busy}
        status={status}
        error={one.error}
      >
        <div className={`grid gap-4 items-start ${straighten ? 'md:grid-cols-2' : ''}`}>
          {straighten && (
            <div className="bg-paper-bright border border-ink rounded-xl p-2 flex justify-center">
              <CornerEditor src={img.url} width={img.width} height={img.height} quad={quad} onChange={setQuad} maxHeight="58vh" />
            </div>
          )}
          <div className="space-y-2">
            <div className="bg-paper-stock border border-ink rounded-xl p-2 flex justify-center">
              <canvas ref={previewRef} role="img" aria-label={compare ? t('ctl.photofix.before') : t('ctl.docscan.result')} className="block max-w-full max-h-[58vh] shadow" />
            </div>
            <button
              type="button"
              onPointerDown={() => setCompare(true)}
              onPointerUp={() => setCompare(false)}
              onPointerLeave={() => setCompare(false)}
              onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && setCompare(true)}
              onKeyUp={() => setCompare(false)}
              className="btn-rule min-h-[40px] text-[14px]"
            >
              {t('ctl.photofix.holdCompare')}
            </button>
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
