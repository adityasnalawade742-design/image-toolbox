import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Download, Loader2, AlertCircle, LayoutGrid } from 'lucide-react';
import { ProofDropZone } from '../shared/ProofDropZone';
import { ImageOrderList } from '../shared/ImageOrderList';
import { useImageList } from '../shared/useImageList';
import { useT } from '../shared/I18nContext';
import { layoutMerge, fitToCanvasLimits, type MergeDirection } from '../../lib/canvas/mergeLayout';
import { canvasToBlob, downloadBlob } from '../../lib/canvas/engine';
import { FullSizeView, blobImage } from '../shared/MediaViewer';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
type MergeFormat = 'image/png' | 'image/jpeg' | 'image/webp';
const FORMAT_LABEL: Record<MergeFormat, string> = { 'image/png': 'PNG', 'image/jpeg': 'JPG', 'image/webp': 'WebP' };
// The on-page preview is drawn small; the download is drawn again at full size
const PREVIEW_MAX = 1400;

export function MergeImagesWorkspace() {
  const t = useT();
  const { items, setOrdered, addFiles, skipped, loading } = useImageList();
  const [direction, setDirection] = useState<MergeDirection>('horizontal');
  const [columns, setColumns] = useState(2);
  const [spacing, setSpacing] = useState(16);
  const [matchSizes, setMatchSizes] = useState(true);
  const [transparent, setTransparent] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [format, setFormat] = useState<MergeFormat>('image/jpeg');
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fitted = useMemo(() => {
    if (!items.length) return null;
    return fitToCanvasLimits(layoutMerge(items, { direction, columns, spacing, matchSizes }));
  }, [items, direction, columns, spacing, matchSizes]);

  const fill = transparent && format !== 'image/jpeg' ? null : bgColor;

  const draw = (canvas: HTMLCanvasElement, scale: number) => {
    if (!fitted) return;
    const { layout } = fitted;
    canvas.width = Math.max(1, Math.round(layout.width * scale));
    canvas.height = Math.max(1, Math.round(layout.height * scale));
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.imageSmoothingQuality = 'high';
    layout.placements.forEach((p, i) => {
      ctx.drawImage(items[i].img, p.sx, p.sy, p.sw, p.sh, p.x * scale, p.y * scale, p.w * scale, p.h * scale);
    });
  };

  useEffect(() => {
    if (!canvasRef.current || !fitted) return;
    draw(canvasRef.current, Math.min(1, PREVIEW_MAX / Math.max(fitted.layout.width, fitted.layout.height)));
    // draw reads the current items and fill
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitted, fill, items]);

  const handleDownload = async () => {
    if (!fitted || items.length < 2 || exporting) return;
    setExporting(true);
    setError(null);
    try {
      const canvas = document.createElement('canvas');
      draw(canvas, 1);
      const blob = await canvasToBlob(canvas, format, 0.92);
      canvas.width = canvas.height = 0;
      downloadBlob(blob, `merged.${format === 'image/jpeg' ? 'jpg' : format === 'image/png' ? 'png' : 'webp'}`);
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setExporting(false);
    }
  };

  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept={ACCEPT}
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
        <ProofDropZone onFiles={addFiles} accept={ACCEPT} multiple hint={t('ctl.merge.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ws.rendering')}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const downloadLabel = t('ws.download', { format: FORMAT_LABEL[format].toUpperCase() });
  const canDownload = items.length >= 2;

  return (
    <div className="pb-20 lg:pb-0">
      {fileInput}
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10 rounded-xl">
            <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
              <canvas ref={canvasRef} role="img" aria-label={t('ctl.merge.previewLabel')} className="block max-w-full max-h-[60vh] w-auto h-auto object-contain" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
            <span className="flex items-baseline gap-2">
              <span className="slug">{t('ws.output')}</span>
              {fitted && <span className="text-ink font-semibold">{fitted.layout.width} × {fitted.layout.height} px</span>}
            </span>
            {fitted && items.length >= 2 && (
              <FullSizeView
                className="ml-auto"
                label={`merged.${format === 'image/jpeg' ? 'jpg' : format === 'image/png' ? 'png' : 'webp'}`}
                load={async () => {
                  const canvas = document.createElement('canvas');
                  draw(canvas, 1);
                  const blob = await canvasToBlob(canvas, format, 0.92);
                  canvas.width = canvas.height = 0;
                  return blobImage(blob);
                }}
              />
            )}
          </div>
          {!canDownload && <p className="text-[15px] text-ink">{t('ctl.merge.needTwo')}</p>}
          {fitted && fitted.scale < 1 && <p className="text-[14px] text-graphite">{t('ctl.merge.scaledDown', { percent: Math.round(fitted.scale * 100) })}</p>}
          {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
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

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block" id="merge-layout">{t('ctl.merge.layout')}</span>
                <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="merge-layout">
                  {(
                    [
                      ['horizontal', t('ctl.merge.horizontal')],
                      ['vertical', t('ctl.merge.vertical')],
                      ['grid', t('ctl.merge.grid')],
                    ] as const
                  ).map(([v, label]) => (
                    <button key={v} type="button" aria-pressed={direction === v} onClick={() => setDirection(v)} className={seg(direction === v)}>
                      {label}
                    </button>
                  ))}
                </div>
                {direction === 'grid' && (
                  <label className="block space-y-1 pt-1">
                    <span className="flex items-center justify-between">
                      <span className="text-[14px] text-graphite">{t('ctl.merge.columns')}</span>
                      <span className="font-semibold text-ink" data-measure>{columns}</span>
                    </span>
                    <input type="range" min={2} max={6} value={columns} onChange={(e) => setColumns(Number(e.target.value))} className="w-full" />
                  </label>
                )}
                <label className="flex items-start gap-2.5 min-h-[40px] pt-1 cursor-pointer">
                  <input type="checkbox" checked={matchSizes} onChange={(e) => setMatchSizes(e.target.checked)} />
                  <span>
                    <span className="block text-ink">{t('ctl.merge.match')}</span>
                    <span className="block text-[13px] text-graphite">{t('ctl.merge.matchNote')}</span>
                  </span>
                </label>
              </div>

              <label className="block space-y-1 pt-4 border-t border-ink">
                <span className="flex items-center justify-between">
                  <span className="slug">{t('ctl.merge.spacing')}</span>
                  <span className="font-semibold text-ink" data-measure>{spacing} px</span>
                </span>
                <input type="range" min={0} max={100} value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} className="w-full" />
              </label>

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block" id="merge-bg">{t('ctl.merge.background')}</span>
                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 flex-1 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="merge-bg">
                    <button type="button" aria-pressed={!transparent} onClick={() => setTransparent(false)} className={seg(!transparent)}>
                      {t('ctl.merge.color')}
                    </button>
                    <button type="button" aria-pressed={transparent} onClick={() => setTransparent(true)} className={seg(transparent)}>
                      {t('ctl.merge.transparent')}
                    </button>
                  </div>
                  {!transparent && (
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      aria-label={t('ctl.merge.colorPick')}
                      className="w-10 h-10 border border-ink bg-transparent cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block">{t('ws.saveAs')}</span>
                <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                  {(['image/jpeg', 'image/png', 'image/webp'] as const).map((f) => (
                    <button key={f} type="button" aria-pressed={format === f} onClick={() => setFormat(f)} className={seg(format === f)}>
                      {FORMAT_LABEL[f]}
                    </button>
                  ))}
                </div>
                {transparent && format === 'image/jpeg' && <p className="text-[13px] text-graphite">{t('ctl.merge.jpgNeedsColor')}</p>}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button type="button" onClick={handleDownload} disabled={!canDownload || exporting} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
              {exporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              <span>{exporting ? t('ws.preparing') : downloadLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
        <button type="button" onClick={handleDownload} disabled={!canDownload || exporting} className="btn-ink w-full min-h-[48px] text-[16px]">
          {exporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
          <span>{exporting ? t('ws.preparing') : downloadLabel}</span>
        </button>
      </div>
    </div>
  );
}
