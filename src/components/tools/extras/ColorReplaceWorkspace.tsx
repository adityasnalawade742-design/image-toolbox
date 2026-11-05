import React, { useEffect, useRef, useState } from 'react';
import { Eye, Paintbrush, Pipette } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { hexToRgb, replaceColor, rgbToHex } from '../../../lib/canvas/imageMath';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, canvasPoint, useOneImage } from './useOneImage';

const PREVIEW = 1400;

export function ColorReplaceWorkspace() {
  const t = useT();
  const [from, setFrom] = useState<[number, number, number] | null>(null);
  const [to, setTo] = useState('#2f7de1');
  const [tolerance, setTolerance] = useState(20);
  const [softness, setSoftness] = useState(10);
  const [keepShading, setKeepShading] = useState(true);
  const [showOriginal, setShowOriginal] = useState(false);
  const [changed, setChanged] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage(() => {
    setFrom(null);
    setStatus('');
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const small = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!one.img) return;
    const s = Math.min(1, PREVIEW / Math.max(one.img.width, one.img.height));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(one.img.width * s));
    c.height = Math.max(1, Math.round(one.img.height * s));
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(one.img.canvas, 0, 0, c.width, c.height);
    small.current = c;
  }, [one.img]);

  useEffect(() => {
    const view = canvasRef.current, sm = small.current;
    if (!view || !sm) return;
    const id = window.setTimeout(() => {
      const px = sm.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, sm.width, sm.height).data;
      const r = from && !showOriginal ? replaceColor(px, { from, to: hexToRgb(to), tolerance, softness, keepShading }) : null;
      view.width = sm.width;
      view.height = sm.height;
      view.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(r ? r.data : px), sm.width, sm.height), 0, 0);
      if (r) setChanged(r.changed / (sm.width * sm.height));
    }, 60);
    return () => window.clearTimeout(id);
  }, [one.img, from, to, tolerance, softness, keepShading, showOriginal]);

  const type = one.img?.file.type === 'image/jpeg' ? 'image/jpeg' : one.img?.file.type === 'image/webp' ? 'image/webp' : 'image/png';
  const ext = type === 'image/jpeg' ? 'jpg' : type === 'image/webp' ? 'webp' : 'png';
  const fileName = () => `${one.img!.file.name.replace(/\.[^.]+$/, '')}-recolored.${ext}`;
  const build = async () => {
    const im = one.img!;
    const { data } = replaceColor(one.pixels(), { from: from!, to: hexToRgb(to), tolerance, softness, keepShading });
    const c = document.createElement('canvas');
    c.width = im.width;
    c.height = im.height;
    c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(data), im.width, im.height), 0, 0);
    return canvasToBlob(c, type, 0.95, undefined, forDownload(type));
  };

  if (!one.img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.recolor.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const run = async () => {
    if (!from) return;
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
    const sm = small.current;
    if (!sm) return;
    const p = canvasPoint(e, e.currentTarget, sm.width, sm.height);
    const d = sm.getContext('2d', { willReadFrequently: true })!.getImageData(p.x, p.y, 1, 1).data;
    setFrom([d[0], d[1], d[2]]);
  };

  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block">{t('ctl.recolor.from')}</span>
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-full border-2 border-ink shrink-0" style={{ background: from ? rgbToHex(...from) : 'transparent' }} aria-hidden="true" />
          <span className="text-[15px] text-ink" data-measure>{from ? rgbToHex(...from).toUpperCase() : t('ctl.recolor.clickPicture')}</span>
          <Pipette className="w-4 h-4 ml-auto text-graphite" aria-hidden="true" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="rc-to" className="slug block">{t('ctl.recolor.to')}</label>
        <div className="flex items-center gap-3">
          <input id="rc-to" type="color" value={to} onChange={(e) => setTo(e.target.value)} className="w-11 h-11 rounded-full border-2 border-ink cursor-pointer bg-transparent" />
          <span className="font-mono text-[15px] text-ink">{to.toUpperCase()}</span>
        </div>
      </div>
      <RangeField id="rc-tol" label={t('ctl.trans.tolerance')} value={tolerance} min={1} max={80} onChange={setTolerance} />
      <RangeField id="rc-soft" label={t('ctl.trans.softness')} value={softness} min={0} max={40} onChange={setSoftness} />
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={keepShading} onChange={(e) => setKeepShading(e.target.checked)} />
        <span className="text-ink">{t('ctl.recolor.keepShading')}</span>
      </label>
      {from && <p className="text-[14px] text-ink">{t('ctl.recolor.changed', { percent: (changed * 100).toFixed(1) })}</p>}
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Paintbrush}
        fileLabel={`${one.img.width} × ${one.img.height} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={from ? <FullSizeView label={fileName()} load={async () => blobImage(await build())} original={() => urlImage(one.img!.url)} /> : undefined}
        panel={panel}
        actionLabel={t('ws.download', { format: ext.toUpperCase() })}
        onAction={run}
        actionDisabled={!from}
        busy={busy}
        status={from ? status : t('ctl.recolor.clickPicture')}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard">
            <canvas ref={canvasRef} onPointerDown={pick} role="img" aria-label={t('ctl.recolor.preview')} className="block max-h-[60vh] max-w-full object-contain cursor-crosshair" />
          </div>
        </div>
        {from && (
          <button
            type="button"
            onPointerDown={() => setShowOriginal(true)}
            onPointerUp={() => setShowOriginal(false)}
            onPointerLeave={() => setShowOriginal(false)}
            onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && setShowOriginal(true)}
            onKeyUp={() => setShowOriginal(false)}
            className="btn-rule min-h-[44px]"
          >
            <Eye className="w-4 h-4" aria-hidden="true" />
            {t('ctl.recolor.holdOriginal')}
          </button>
        )}
      </PdfToolLayout>
    </>
  );
}
