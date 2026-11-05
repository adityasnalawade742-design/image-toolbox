import React, { useEffect, useRef, useState } from 'react';
import { SquareStack } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { shadowCanvas } from '../../../lib/canvas/annotate';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';

interface Settings {
  distance: number;
  angle: number;
  blur: number;
  opacity: number;
  color: string;
  radius: number;
  background: 'none' | 'color';
  bgColor: string;
}

/** The picture with its shadow, at `scale` of full size; sizes are percentages of the picture's longer side */
function render(src: HTMLCanvasElement, s: Settings, scale: number): HTMLCanvasElement {
  const unit = (Math.max(src.width, src.height) * scale) / 100;
  const w = Math.round(src.width * scale), h = Math.round(src.height * scale);
  const a = (s.angle * Math.PI) / 180;
  const dx = Math.round(Math.cos(a) * s.distance * unit), dy = Math.round(Math.sin(a) * s.distance * unit);
  const blur = s.blur * unit;
  const L = shadowCanvas(w, h, { dx, dy, blur });
  const c = document.createElement('canvas');
  c.width = L.width;
  c.height = L.height;
  const ctx = c.getContext('2d')!;
  if (s.background === 'color') {
    ctx.fillStyle = s.bgColor;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  // The picture, with rounded corners if asked: the shadow follows this shape, transparent areas included
  const shaped = document.createElement('canvas');
  shaped.width = w;
  shaped.height = h;
  const sx = shaped.getContext('2d')!;
  const r = (s.radius / 100) * Math.min(w, h);
  if (r > 0) {
    sx.beginPath();
    sx.roundRect(0, 0, w, h, r);
    sx.clip();
  }
  sx.imageSmoothingQuality = 'high';
  sx.drawImage(src, 0, 0, w, h);
  ctx.shadowColor = s.color + Math.round((s.opacity / 100) * 255).toString(16).padStart(2, '0');
  ctx.shadowBlur = blur;
  ctx.shadowOffsetX = dx;
  ctx.shadowOffsetY = dy;
  ctx.drawImage(shaped, L.x, L.y);
  return c;
}

export function DropShadowWorkspace() {
  const t = useT();
  const [s, setS] = useState<Settings>({ distance: 2, angle: 90, blur: 4, opacity: 45, color: '#000000', radius: 0, background: 'none', bgColor: '#ffffff' });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage(() => setStatus(''));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const set = (p: Partial<Settings>) => setS((prev) => ({ ...prev, ...p }));

  useEffect(() => {
    if (!one.img || !canvasRef.current) return;
    const id = window.setTimeout(() => {
      const out = render(one.img!.canvas, s, Math.min(1, 1000 / Math.max(one.img!.width, one.img!.height)));
      const v = canvasRef.current!;
      v.width = out.width;
      v.height = out.height;
      v.getContext('2d')!.drawImage(out, 0, 0);
    }, 50);
    return () => window.clearTimeout(id);
  }, [one.img, s]);

  const type = s.background === 'none' ? 'image/png' : 'image/jpeg';
  const fileName = () => `${one.img!.file.name.replace(/\.[^.]+$/, '')}-shadow.${type === 'image/png' ? 'png' : 'jpg'}`;
  const build = () => canvasToBlob(render(one.img!.canvas, s, 1), type, 0.95, undefined, forDownload(type));

  if (!one.img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.shadow.dropHint')} />
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

  const panel = (
    <>
      <RangeField id="sh-dist" label={t('ctl.shadow.distance')} value={s.distance} min={0} max={10} step={0.5} unit="%" onChange={(v) => set({ distance: v })} />
      <RangeField id="sh-angle" label={t('ctl.shadow.angle')} value={s.angle} min={0} max={359} unit="°" onChange={(v) => set({ angle: v })} />
      <RangeField id="sh-blur" label={t('ctl.shadow.blur')} value={s.blur} min={0} max={10} step={0.5} unit="%" onChange={(v) => set({ blur: v })} />
      <RangeField id="sh-op" label={t('ctl.shadow.opacity')} value={s.opacity} min={5} max={100} unit="%" onChange={(v) => set({ opacity: v })} />
      <div className="flex items-center gap-3">
        <label htmlFor="sh-color" className="text-[14px] text-graphite">{t('ctl.shadow.color')}</label>
        <input id="sh-color" type="color" value={s.color} onChange={(e) => set({ color: e.target.value })} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />
      </div>
      <RangeField id="sh-radius" label={t('ctl.shadow.radius')} value={s.radius} min={0} max={25} unit="%" onChange={(v) => set({ radius: v })} />
      <div className="pt-4 border-t border-ink space-y-3">
        <Segmented
          label={t('ctl.shadow.background')}
          value={s.background}
          onChange={(v) => set({ background: v })}
          options={[
            { value: 'none', label: t('ctl.shadow.transparent') },
            { value: 'color', label: t('ctl.shadow.solid') },
          ]}
        />
        {s.background === 'color' && <input type="color" aria-label={t('ctl.shadow.background')} value={s.bgColor} onChange={(e) => set({ bgColor: e.target.value })} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />}
        <p className="text-[13px] text-graphite leading-relaxed">{t(s.background === 'none' ? 'ctl.shadow.pngNote' : 'ctl.shadow.jpgNote')}</p>
      </div>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={SquareStack}
        fileLabel={`${one.img.width} × ${one.img.height} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={fileName()} load={async () => blobImage(await build())} original={() => urlImage(one.img!.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: type === 'image/png' ? 'PNG' : 'JPG' })}
        onAction={run}
        busy={busy}
        status={status}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard">
            <canvas ref={canvasRef} role="img" aria-label={t('ctl.shadow.preview')} className="block max-h-[60vh] max-w-full object-contain" />
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
