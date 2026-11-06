import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Grid3x3 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';
import { PALETTES, type DitherMethod, type RGB } from '../../../lib/canvas/halftone';
import { pixelArt, upscale } from '../../../lib/photo/pixelArt';

type Pal = 'auto4' | 'auto8' | 'auto16' | 'auto32' | 'bw' | 'gray4' | 'gameboy';

export function PixelArtWorkspace() {
  const t = useT();
  // Grid width in pixels-art pixels; the block size follows from the photo's width
  const [cells, setCells] = useState(64);
  const [pal, setPal] = useState<Pal>('auto16');
  const [dither, setDither] = useState<DitherMethod>('none');
  const [grid, setGrid] = useState(false);
  const [scale, setScale] = useState<'tiny' | 'big'>('big');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage(() => setStatus(''));
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const result = useMemo(() => {
    if (!one.img) return null;
    const img = one.img;
    // A working copy exactly 8 pixels per art pixel across, so the grid is exactly the chosen width
    const B = 8;
    const c = document.createElement('canvas');
    c.width = cells * B;
    c.height = Math.max(B, Math.round((img.height * c.width) / img.width / B) * B);
    const ctx = c.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img.canvas, 0, 0, c.width, c.height);
    const palette: RGB[] | number = pal.startsWith('auto') ? Number(pal.slice(4)) : PALETTES[pal];
    return pixelArt(ctx.getImageData(0, 0, c.width, c.height).data, c.width, c.height, { block: B, palette, dither });
  }, [one.img, cells, pal, dither]);

  // Each art pixel becomes a square block: an integer factor keeps edges crisp; "big" is about the photo's size
  const factor = result && one.img ? (scale === 'tiny' ? 1 : Math.max(1, Math.min(32, Math.round(one.img.width / result.w)))) : 1;
  const gridColor: RGB = [40, 40, 40];
  const render = (forScreen: boolean) => {
    const f = forScreen ? Math.max(1, Math.min(factor, Math.floor(900 / result!.w))) : factor;
    const data = upscale(result!.data, result!.w, result!.h, f, grid && f >= 4 ? gridColor : undefined);
    const c = document.createElement('canvas');
    c.width = result!.w * f;
    c.height = result!.h * f;
    c.getContext('2d')!.putImageData(new ImageData(data as Uint8ClampedArray<ArrayBuffer>, c.width, c.height), 0, 0);
    return c;
  };

  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !result) return;
    const r = render(true);
    c.width = r.width;
    c.height = r.height;
    c.getContext('2d')!.drawImage(r, 0, 0);
  });

  if (!one.img || !result) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.pixel.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }
  const img = one.img;
  const name = `${img.file.name.replace(/\.[^.]+$/, '')}-pixel-art.png`;
  const build = () => canvasToBlob(render(false), 'image/png', 1, undefined, forDownload('image/png'));
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
      <RangeField id="px-cells" label={t('ctl.pixel.width')} value={cells} min={8} max={256} step={4} onChange={setCells} />
      <p className="text-[13px] text-graphite -mt-2" data-measure>{t('ctl.pixel.grid', { w: result.w, h: result.h })}</p>
      <div className="space-y-2">
        <label htmlFor="px-pal" className="slug block">{t('ctl.pixel.palette')}</label>
        <select id="px-pal" value={pal} onChange={(e) => setPal(e.target.value as Pal)} className="w-full min-h-[44px] px-2 border border-ink bg-paper-bright rounded-md text-[15px]">
          <option value="auto4">{t('ctl.pixel.auto', { n: 4 })}</option>
          <option value="auto8">{t('ctl.pixel.auto', { n: 8 })}</option>
          <option value="auto16">{t('ctl.pixel.auto', { n: 16 })}</option>
          <option value="auto32">{t('ctl.pixel.auto', { n: 32 })}</option>
          <option value="bw">{t('ctl.halftone.palBw')}</option>
          <option value="gray4">{t('ctl.halftone.palGray')}</option>
          <option value="gameboy">{t('ctl.pixel.greens')}</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={t('ctl.pixel.colors')}>
        {result.palette.map((c, i) => (
          <span key={i} className="w-5 h-5 rounded border border-ink" style={{ background: `rgb(${c[0]},${c[1]},${c[2]})` }} />
        ))}
      </div>
      <Segmented
        label={t('ctl.pixel.dither')}
        value={dither}
        cols={3}
        onChange={setDither}
        options={[
          { value: 'none', label: t('ctl.pixel.ditherNone') },
          { value: 'floyd', label: t('ctl.pixel.ditherSmooth') },
          { value: 'bayer4', label: t('ctl.pixel.ditherPattern') },
        ]}
      />
      <Segmented
        label={t('ctl.pixel.size')}
        value={scale}
        onChange={setScale}
        options={[
          { value: 'big', label: t('ctl.pixel.sizeBig') },
          { value: 'tiny', label: t('ctl.pixel.sizeTiny') },
        ]}
      />
      <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={grid} onChange={(e) => setGrid(e.target.checked)} disabled={scale === 'tiny'} />
        <span className="text-ink">{t('ctl.pixel.showGrid')}</span>
      </label>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.pixel.note')}</p>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Grid3x3}
        fileLabel={`${img.width} × ${img.height} px · ${img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={name} load={async () => blobImage(await build())} original={() => urlImage(img.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        busy={busy}
        status={status || t('ctl.pixel.outSize', { w: result.w * factor, h: result.h * factor })}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-4 rounded-xl">
          <div className="canvas-checkerboard inline-flex max-w-full">
            <canvas ref={canvasRef} role="img" aria-label={t('ctl.pixel.preview')} className="block max-w-full max-h-[62vh] object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
