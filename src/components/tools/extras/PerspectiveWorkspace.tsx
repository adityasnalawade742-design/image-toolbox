import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Scan } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { exportableFormat, formatExtension } from '../../../lib/canvas/outputFormat';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';
import { isConvex, outputSize, warp, type Quad } from '../../../lib/photo/perspective';
import { detectPage } from '../../../lib/scan/detect';
import { previewPixels, runPhoto, toCanvas } from '../../../lib/photo/runPhoto';
import { MAX_CANVAS_PIXELS } from '../../../lib/canvas/limits';

type Shape = 'auto' | 'a4' | 'letter' | 'square';
const RATIOS: Record<Exclude<Shape, 'auto'>, number> = { a4: 1 / Math.SQRT2, letter: 8.5 / 11, square: 1 };

/** The page or sign found in the photo, when the detector is confident; otherwise a frame inset from the edges */
function startingCorners(canvas: HTMLCanvasElement, w: number, h: number): Quad {
  const small = previewPixels(canvas, 1200);
  const d = detectPage(small.data, small.w, small.h);
  return d && d.confidence >= 0.6 ? (d.quad.map((p) => ({ x: p.x / small.scale, y: p.y / small.scale })) as Quad) : inset(w, h);
}

const inset = (w: number, h: number): Quad => [
  { x: w * 0.12, y: h * 0.12 },
  { x: w * 0.88, y: h * 0.12 },
  { x: w * 0.88, y: h * 0.88 },
  { x: w * 0.12, y: h * 0.88 },
];

export function PerspectiveWorkspace() {
  const t = useT();
  const [quad, setQuad] = useState<Quad | null>(null);
  const [shape, setShape] = useState<Shape>('auto');
  const [landscape, setLandscape] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage((img) => {
    setQuad(startingCorners(img.canvas, img.width, img.height));
    setStatus('');
  });
  const svgRef = useRef<SVGSVGElement>(null);
  // Displayed width, so the corner handles stay a comfortable size to touch whatever the photo's resolution
  const [shownW, setShownW] = useState(0);
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setShownW(el.getBoundingClientRect().width));
    ro.observe(el);
    return () => ro.disconnect();
  });
  const resultRef = useRef<HTMLCanvasElement>(null);
  const preview = useMemo(() => (one.img ? previewPixels(one.img.canvas, 900) : null), [one.img]);
  const valid = !!quad && isConvex(quad);

  const size = useMemo(() => {
    if (!quad) return null;
    const r = shape === 'auto' ? 0 : RATIOS[shape];
    let s = shape === 'auto' ? outputSize(quad, 'auto') : outputSize(quad, landscape ? 1 / r : r);
    // Stay within what the browser can hold
    const k = Math.min(1, Math.sqrt(MAX_CANVAS_PIXELS / (s.width * s.height)));
    if (k < 1) s = { width: Math.floor(s.width * k), height: Math.floor(s.height * k) };
    return s;
  }, [quad, shape, landscape]);

  // Live result from the smaller copy
  useEffect(() => {
    const c = resultRef.current;
    if (!c || !preview || !quad || !valid || !size) return;
    const id = window.setTimeout(() => {
      const s = preview.scale;
      const q = quad.map((p) => ({ x: p.x * s, y: p.y * s })) as Quad;
      const k = Math.min(1, 700 / Math.max(size.width, size.height));
      const w = Math.max(1, Math.round(size.width * k)), h = Math.max(1, Math.round(size.height * k));
      const out = warp(preview.data, preview.w, preview.h, q, w, h);
      c.width = w;
      c.height = h;
      c.getContext("2d")!.putImageData(new ImageData(out as Uint8ClampedArray<ArrayBuffer>, w, h), 0, 0);
    }, 30);
    return () => window.clearTimeout(id);
  }, [preview, quad, valid, size]);

  if (!one.img || !quad) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.persp.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }
  const img = one.img;
  const type = exportableFormat(img.file.type);
  const name = `${img.file.name.replace(/\.[^.]+$/, '')}-straightened.${formatExtension(type)}`;
  const build = async () => {
    const px = img.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img.width, img.height).data;
    const r = await runPhoto({ op: 'warp', q: quad, width: size!.width, height: size!.height }, px, img.width, img.height);
    return canvasToBlob(toCanvas(r.data, r.w, r.h), type, 0.95, undefined, forDownload(type));
  };
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

  const toImage = (e: React.PointerEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: Math.max(0, Math.min(img.width, ((e.clientX - r.left) / r.width) * img.width)), y: Math.max(0, Math.min(img.height, ((e.clientY - r.top) / r.height) * img.height)) };
  };
  const move = (i: number, p: { x: number; y: number }) => setQuad((q) => q && (q.map((v, j) => (j === i ? p : v)) as Quad));
  const nudge = (i: number, e: React.KeyboardEvent) => {
    const d = (e.shiftKey ? 20 : 2) * Math.max(1, Math.max(img.width, img.height) / 800);
    const m: Record<string, [number, number]> = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] };
    if (!m[e.key]) return;
    e.preventDefault();
    const p = quad[i];
    move(i, { x: Math.max(0, Math.min(img.width, p.x + m[e.key][0])), y: Math.max(0, Math.min(img.height, p.y + m[e.key][1])) });
  };
  // About 22 CSS px radius (44 px across) on screen
  const handle = shownW ? (22 * img.width) / shownW : Math.max(img.width, img.height) / 45;
  const corners = [t('ctl.persp.tl'), t('ctl.persp.tr'), t('ctl.persp.br'), t('ctl.persp.bl')];

  const panel = (
    <>
      <p className="text-[14px] text-ink leading-relaxed">{t('ctl.persp.how')}</p>
      <Segmented
        label={t('ctl.persp.shape')}
        value={shape}
        cols={2}
        onChange={setShape}
        options={[
          { value: 'auto', label: t('ctl.persp.auto') },
          { value: 'a4', label: 'A4' },
          { value: 'letter', label: t('ctl.topdf.letter') },
          { value: 'square', label: t('ctl.persp.square') },
        ]}
      />
      {shape !== 'auto' && shape !== 'square' && (
        <Segmented
          label={t('ctl.persp.orientation')}
          value={landscape ? 'l' : 'p'}
          onChange={(v) => setLandscape(v === 'l')}
          options={[
            { value: 'p', label: t('ctl.persp.portrait') },
            { value: 'l', label: t('ctl.persp.landscape') },
          ]}
        />
      )}
      {size && valid && <p className="text-[14px] text-graphite" data-measure>{t('ctl.persp.size', { w: size.width, h: size.height })}</p>}
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => setQuad(startingCorners(img.canvas, img.width, img.height))} className="btn-rule min-h-[40px] text-[14px]">{t('ctl.docscan.findEdges')}</button>
        <button type="button" onClick={() => setQuad(inset(img.width, img.height))} className="btn-rule min-h-[40px] text-[14px]">{t('ctl.persp.reset')}</button>
      </div>
      <div className="border border-pencil rounded-md p-2 bg-paper-bright flex justify-center">
        <canvas ref={resultRef} role="img" aria-label={t('ctl.persp.result')} className="block max-w-full max-h-[260px]" />
      </div>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Scan}
        fileLabel={`${img.width} × ${img.height} px · ${img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={name} transparent={type === 'image/png'} load={async () => blobImage(await build())} original={() => urlImage(img.url)} disabled={!valid} />}
        panel={panel}
        actionLabel={t('ws.download', { format: formatExtension(type).toUpperCase() })}
        onAction={run}
        actionDisabled={!valid}
        busy={busy}
        status={status}
        error={one.error ?? (valid ? null : t('ctl.persp.invalid'))}
      >
        <div className="bg-paper-bright border border-ink rounded-xl p-3 flex justify-center">
          <div className="relative inline-block max-w-full">
            <img src={img.url} alt="" className="block max-w-full max-h-[65vh] select-none" draggable={false} />
            <svg
              ref={svgRef}
              viewBox={`0 0 ${img.width} ${img.height}`}
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full touch-none"
              onPointerMove={(e) => drag !== null && move(drag, toImage(e))}
              onPointerUp={() => setDrag(null)}
              onPointerCancel={() => setDrag(null)}
            >
              <path d={`M0 0H${img.width}V${img.height}H0Z M${quad.map((p) => `${p.x} ${p.y}`).join(' L')} Z`} fill="rgba(0,0,0,0.45)" fillRule="evenodd" />
              <polygon points={quad.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={valid ? '#ffffff' : '#ff3b5c'} strokeWidth={handle / 6} />
              {quad.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={handle}
                  tabIndex={0}
                  role="slider"
                  aria-label={corners[i]}
                  aria-valuetext={`${Math.round(p.x)}, ${Math.round(p.y)}`}
                  aria-valuenow={Math.round(p.x)}
                  fill="rgba(226,0,122,0.85)"
                  stroke="#ffffff"
                  strokeWidth={handle / 5}
                  className="cursor-grab focus:outline-none focus-visible:[stroke:#000]"
                  onPointerDown={(e) => {
                    (e.currentTarget.ownerSVGElement as SVGSVGElement).setPointerCapture(e.pointerId);
                    setDrag(i);
                  }}
                  onKeyDown={(e) => nudge(i, e)}
                />
              ))}
            </svg>
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
