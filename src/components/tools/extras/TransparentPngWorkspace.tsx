import React, { useEffect, useRef, useState } from 'react';
import { Droplet, Pipette } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { borderColor, makeTransparent, rgbToHex } from '../../../lib/canvas/imageMath';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, canvasPoint, useOneImage } from './useOneImage';

const PREVIEW = 1400;

export function TransparentPngWorkspace() {
  const t = useT();
  const [color, setColor] = useState<[number, number, number]>([255, 255, 255]);
  const [tolerance, setTolerance] = useState(12);
  const [softness, setSoftness] = useState(8);
  const [fromEdges, setFromEdges] = useState(true);
  const [picking, setPicking] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage((im) => {
    const px = im.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, im.width, im.height).data;
    setColor(borderColor(px, im.width, im.height));
    setStatus('');
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const small = useRef<{ canvas: HTMLCanvasElement; scale: number } | null>(null);

  // A reduced copy for the live preview; the download is made from the full picture
  useEffect(() => {
    if (!one.img) return;
    const s = Math.min(1, PREVIEW / Math.max(one.img.width, one.img.height));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(one.img.width * s));
    c.height = Math.max(1, Math.round(one.img.height * s));
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(one.img.canvas, 0, 0, c.width, c.height);
    small.current = { canvas: c, scale: s };
  }, [one.img]);

  useEffect(() => {
    const view = canvasRef.current, sm = small.current;
    if (!view || !sm) return;
    const id = window.setTimeout(() => {
      const { width: w, height: h } = sm.canvas;
      const out = makeTransparent(sm.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, w, h).data, w, h, { color, tolerance, softness, fromEdges });
      view.width = w;
      view.height = h;
      view.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(out), w, h), 0, 0);
    }, 60);
    return () => window.clearTimeout(id);
  }, [one.img, color, tolerance, softness, fromEdges]);

  const build = async () => {
    const im = one.img!;
    const out = makeTransparent(one.pixels(), im.width, im.height, { color, tolerance, softness, fromEdges });
    const c = document.createElement('canvas');
    c.width = im.width;
    c.height = im.height;
    c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(out), im.width, im.height), 0, 0);
    return canvasToBlob(c, 'image/png', 1, undefined, forDownload('image/png'));
  };
  const fileName = () => `${one.img!.file.name.replace(/\.[^.]+$/, '')}-transparent.png`;

  if (!one.img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.trans.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const run = async () => {
    setBusy(true);
    one.setError(null);
    try {
      downloadBlob(await build(), fileName());
      setStatus(t('ctl.pdf.done', { name: fileName() }));
    } catch {
      one.setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  const pick = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!picking || !small.current) return;
    const sm = small.current;
    const p = canvasPoint(e, e.currentTarget, sm.canvas.width, sm.canvas.height);
    const d = sm.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(p.x, p.y, 1, 1).data;
    setColor([d[0], d[1], d[2]]);
    setPicking(false);
  };

  const hex = rgbToHex(...color);
  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block">{t('ctl.trans.color')}</span>
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-full border-2 border-ink shrink-0" style={{ background: hex }} aria-hidden="true" />
          <span className="font-mono text-[15px] text-ink" data-measure>{hex.toUpperCase()}</span>
          <button type="button" onClick={() => setPicking((p) => !p)} aria-pressed={picking} className="btn-rule min-h-[44px] ml-auto">
            <Pipette className="w-4 h-4" aria-hidden="true" />
            {picking ? t('ctl.trans.clickPicture') : t('ctl.trans.pick')}
          </button>
        </div>
      </div>
      <RangeField id="tr-tol" label={t('ctl.trans.tolerance')} value={tolerance} min={0} max={60} onChange={setTolerance} />
      <RangeField id="tr-soft" label={t('ctl.trans.softness')} value={softness} min={0} max={40} onChange={setSoftness} />
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={fromEdges} onChange={(e) => setFromEdges(e.target.checked)} />
        <span className="text-ink">{t('ctl.trans.fromEdges')}</span>
      </label>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.trans.note')}</p>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Droplet}
        fileLabel={`${one.img.width} × ${one.img.height} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={fileName()} load={async () => blobImage(await build())} original={() => urlImage(one.img!.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        busy={busy}
        status={status}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard">
            <canvas
              ref={canvasRef}
              onPointerDown={pick}
              role="img"
              aria-label={t('ctl.trans.preview')}
              className={`block max-h-[60vh] max-w-full object-contain ${picking ? 'cursor-crosshair' : ''}`}
            />
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
