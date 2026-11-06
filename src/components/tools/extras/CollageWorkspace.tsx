import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { ImageOrderList } from '../../shared/ImageOrderList';
import { useImageList } from '../../shared/useImageList';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { FullSizeView, blobImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT } from './useOneImage';
import { CANVAS_RATIOS, canvasSize, cellRects, coverCrop, layoutsFor, type Node, type Rect } from '../../../lib/photo/collage';

interface Frame {
  panX: number;
  panY: number;
  zoom: number;
}
const NO_FRAME: Frame = { panX: 0, panY: 0, zoom: 1 };

/** A small drawing of a layout, for the picker */
function LayoutIcon({ node }: { node: Node }) {
  const rects = cellRects(node, 60, 45, 3, 0);
  return (
    <svg viewBox="0 0 60 45" className="w-full h-auto" aria-hidden="true">
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx={1.5} className="fill-current opacity-70" />
      ))}
    </svg>
  );
}

export function CollageWorkspace() {
  const t = useT();
  const { items, setOrdered, addFiles, skipped, loading } = useImageList();
  const [layoutId, setLayoutId] = useState<string | null>(null);
  const [ratio, setRatio] = useState('1:1');
  const [gap, setGap] = useState(2);
  const [margin, setMargin] = useState(2);
  const [radius, setRadius] = useState(0);
  const [bg, setBg] = useState('#ffffff');
  const [format, setFormat] = useState<'image/jpeg' | 'image/png'>('image/jpeg');
  const [frames, setFrames] = useState<Record<string, Frame>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const used = items.slice(0, 9);
  const options = used.length >= 2 ? layoutsFor(used.length) : [];
  const layout = options.find((l) => l.id === layoutId) ?? options[0];
  const size = canvasSize(CANVAS_RATIOS[ratio]);

  /** Draw at a given scale of the full size; gap, margin and corners are percentages of the shorter side */
  const draw = (canvas: HTMLCanvasElement, scale: number) => {
    const W = Math.round(size.width * scale), H = Math.round(size.height * scale);
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;
    const unit = Math.min(W, H) / 100;
    if (format === 'image/jpeg' || bg !== 'transparent') {
      ctx.fillStyle = bg === 'transparent' ? '#ffffff' : bg;
      ctx.fillRect(0, 0, W, H);
    } else ctx.clearRect(0, 0, W, H);
    const rects = cellRects(layout.node, W, H, gap * unit, margin * unit);
    rects.forEach((r: Rect, i) => {
      const it = used[i];
      if (!it) return;
      const f = frames[it.id] ?? NO_FRAME;
      const s = coverCrop(it.width, it.height, r, f.panX, f.panY, f.zoom);
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(r.x, r.y, r.w, r.h, (radius / 100) * Math.min(r.w, r.h));
      ctx.clip();
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(it.img, s.x, s.y, s.w, s.h, r.x, r.y, r.w, r.h);
      ctx.restore();
    });
    return rects;
  };

  const previewScale = Math.min(1, 900 / Math.max(size.width, size.height));
  const rectsRef = useRef<Rect[]>([]);
  useEffect(() => {
    if (!canvasRef.current || !layout) return;
    rectsRef.current = draw(canvasRef.current, previewScale);
    if (selected !== null && rectsRef.current[selected]) {
      const r = rectsRef.current[selected];
      const ctx = canvasRef.current.getContext('2d')!;
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#e2007a';
      ctx.strokeRect(r.x + 1.5, r.y + 1.5, r.w - 3, r.h - 3);
    }
  });

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={IMAGE_ACCEPT}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) addFiles(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );

  if (!items.length) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={addFiles} accept={IMAGE_ACCEPT} multiple hint={t('ctl.collage.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ws.rendering')}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  const ext = format === 'image/png' ? 'png' : 'jpg';
  const name = `collage.${ext}`;
  const build = async () => {
    const c = document.createElement('canvas');
    draw(c, 1);
    return canvasToBlob(c, format, 0.92, undefined, forDownload(format));
  };
  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      downloadBlob(await build(), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };
  const selectAt = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * e.currentTarget.width, y = ((e.clientY - r.top) / r.height) * e.currentTarget.height;
    const i = rectsRef.current.findIndex((c) => x >= c.x && x <= c.x + c.w && y >= c.y && y <= c.y + c.h);
    setSelected(i >= 0 ? i : null);
  };
  const sel = selected !== null && used[selected] ? used[selected] : null;
  // Photos stretched well past their own pixels look soft in the download
  const lowRes =
    layout &&
    cellRects(layout.node, size.width, size.height, gap * (Math.min(size.width, size.height) / 100), margin * (Math.min(size.width, size.height) / 100)).some((r, i) => {
      const it = used[i];
      return it && Math.max(r.w / it.width, r.h / it.height) * (frames[it.id]?.zoom ?? 1) > 1.5;
    });
  const frame = sel ? frames[sel.id] ?? NO_FRAME : NO_FRAME;
  const setFrame = (p: Partial<Frame>) => sel && setFrames((f) => ({ ...f, [sel.id]: { ...frame, ...p } }));

  const panel = (
    <>
      <ImageOrderList items={used.length < items.length ? items : used} onChange={setOrdered} onAdd={() => inputRef.current?.click()} view />
      {items.length > 9 && <p className="text-[14px] text-ink">{t('ctl.collage.max', { n: items.length - 9 })}</p>}
      {used.length < 2 && <p className="text-[14px] text-ink">{t('ctl.collage.needTwo')}</p>}
      {options.length > 0 && (
        <div className="space-y-2 pt-4 border-t border-ink">
          <span className="slug block" id="collage-layout">{t('ctl.collage.layout')}</span>
          <div className="grid grid-cols-4 gap-2" role="group" aria-labelledby="collage-layout">
            {options.map((l, i) => (
              <button
                key={l.id}
                type="button"
                aria-pressed={layout?.id === l.id}
                aria-label={t('ctl.collage.layoutN', { n: i + 1 })}
                onClick={() => setLayoutId(l.id)}
                className={`p-1.5 border rounded-md min-h-[44px] ${layout?.id === l.id ? 'border-ink border-2 text-ink' : 'border-pencil text-graphite hover:border-ink'}`}
              >
                <LayoutIcon node={l.node} />
              </button>
            ))}
          </div>
        </div>
      )}
      <Segmented
        label={t('ctl.collage.shape')}
        value={ratio}
        cols={4}
        onChange={setRatio}
        options={[
          { value: '1:1', label: '1:1' },
          { value: '4:5', label: '4:5' },
          { value: '3:2', label: '3:2' },
          { value: '2:3', label: '2:3' },
          { value: '16:9', label: '16:9' },
          { value: '9:16', label: '9:16' },
          { value: 'a4', label: 'A4' },
        ]}
      />
      <RangeField id="cl-gap" label={t('ctl.collage.gap')} value={gap} min={0} max={8} step={0.5} unit="%" onChange={setGap} />
      <RangeField id="cl-margin" label={t('ctl.collage.margin')} value={margin} min={0} max={10} step={0.5} unit="%" onChange={setMargin} />
      <RangeField id="cl-radius" label={t('ctl.collage.radius')} value={radius} min={0} max={30} unit="%" onChange={setRadius} />
      <div className="flex items-center gap-3">
        <label htmlFor="cl-bg" className="text-[14px] text-graphite">{t('ctl.collage.background')}</label>
        <input id="cl-bg" type="color" value={bg === 'transparent' ? '#ffffff' : bg} onChange={(e) => setBg(e.target.value)} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />
        {format === 'image/png' && (
          <label className="flex items-center gap-2 text-[14px] text-ink">
            <input type="checkbox" checked={bg === 'transparent'} onChange={(e) => setBg(e.target.checked ? 'transparent' : '#ffffff')} />
            {t('ctl.collage.transparent')}
          </label>
        )}
      </div>
      <Segmented
        label={t('ctl.collage.format')}
        value={format}
        onChange={(v) => {
          setFormat(v);
          if (v === 'image/jpeg' && bg === 'transparent') setBg('#ffffff');
        }}
        options={[
          { value: 'image/jpeg', label: 'JPG' },
          { value: 'image/png', label: 'PNG' },
        ]}
      />
      {sel && (
        <div className="space-y-3 pt-4 border-t border-ink">
          <p className="text-[14px] text-ink font-semibold">{t('ctl.collage.framing', { name: sel.name })}</p>
          <RangeField id="cl-zoom" label={t('ctl.collage.zoom')} value={Math.round(frame.zoom * 100)} min={100} max={300} step={5} unit="%" onChange={(v) => setFrame({ zoom: v / 100 })} />
          <RangeField id="cl-px" label={t('ctl.collage.panX')} value={Math.round(frame.panX * 100)} min={-100} max={100} onChange={(v) => setFrame({ panX: v / 100 })} />
          <RangeField id="cl-py" label={t('ctl.collage.panY')} value={Math.round(frame.panY * 100)} min={-100} max={100} onChange={(v) => setFrame({ panY: v / 100 })} />
        </div>
      )}
    </>
  );

  return (
    <>
      {fileInput}
      <PdfToolLayout
        icon={LayoutDashboard}
        fileLabel={`${t('ctl.collage.photos', { n: items.length })} · ${size.width} × ${size.height} px`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ctl.list.add')}
        ticketAction={used.length >= 2 ? <FullSizeView label={name} transparent={format === 'image/png'} load={async () => blobImage(await build())} /> : undefined}
        panel={panel}
        actionLabel={t('ws.download', { format: ext.toUpperCase() })}
        onAction={run}
        actionDisabled={used.length < 2}
        busy={busy}
        status={status}
        error={error}
      >
        <div className="space-y-2">
          <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-4 rounded-xl">
            <div className="canvas-checkerboard inline-flex max-w-full">
              {used.length >= 2 ? (
                <canvas ref={canvasRef} onClick={selectAt} role="img" aria-label={t('ctl.collage.preview')} className="block max-w-full max-h-[62vh] object-contain cursor-pointer" />
              ) : (
                <p className="p-8 text-[15px] text-graphite">{t('ctl.collage.needTwo')}</p>
              )}
            </div>
          </div>
          {used.length >= 2 && <p className="text-[14px] text-graphite">{t('ctl.collage.clickHint')}</p>}
          {lowRes && <p className="text-[14px] text-ink">{t('ctl.collage.lowRes')}</p>}
        </div>
      </PdfToolLayout>
    </>
  );
}
