import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GitCompare } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { compareImages, differenceMap } from '../../../lib/canvas/imageMath';
import { IMAGE_ACCEPT } from './useOneImage';

// Compared at up to this size: enough for every visible difference, and quick on phones
const WORK = 2000;
type Mode = 'slider' | 'side' | 'diff';

function pixelsAt(img: HTMLImageElement, w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);
  return { canvas: c, data: ctx.getImageData(0, 0, w, h).data };
}

export function CompareImagesWorkspace() {
  const t = useT();
  const [a, setA] = useState<LoadedImage | null>(null);
  const [b, setB] = useState<LoadedImage | null>(null);
  const [mode, setMode] = useState<Mode>('slider');
  const [split, setSplit] = useState(50);
  const [threshold, setThreshold] = useState(8);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const diffRef = useRef<HTMLCanvasElement>(null);

  const pick = async (f: File, which: 'a' | 'b') => {
    setError(null);
    setStatus('');
    try {
      const l = await loadImageFile(f);
      (which === 'a' ? setA : setB)((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return l;
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };

  // Both pictures at the first one's size (the second is scaled to match when they differ)
  const work = useMemo(() => {
    if (!a || !b) return null;
    const s = Math.min(1, WORK / Math.max(a.width, a.height));
    const w = Math.max(1, Math.round(a.width * s)), h = Math.max(1, Math.round(a.height * s));
    return { w, h, A: pixelsAt(a.img, w, h), B: pixelsAt(b.img, w, h) };
  }, [a, b]);
  const stats = useMemo(() => (work ? compareImages(work.A.data, work.B.data, threshold) : null), [work, threshold]);

  useEffect(() => {
    if (!work || mode !== 'diff' || !diffRef.current) return;
    const c = diffRef.current;
    c.width = work.w;
    c.height = work.h;
    c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(differenceMap(work.A.data, work.B.data, threshold)), work.w, work.h), 0, 0);
  }, [work, mode, threshold]);

  if (!a || !b) {
    return (
      <div className="space-y-3">
        <div className="grid gap-4 sm:grid-cols-2">
          {(['a', 'b'] as const).map((k) => {
            const img = k === 'a' ? a : b;
            return (
              <div key={k} className="space-y-2">
                <p className="slug">{t(k === 'a' ? 'ctl.imgcmp.first' : 'ctl.imgcmp.second')}</p>
                {img ? (
                  <div className="border border-ink rounded-xl bg-paper-bright p-3 flex items-center gap-3">
                    <img src={img.url} alt="" className="w-20 h-20 object-contain" />
                    <span className="text-[14px] text-ink break-all">{img.file.name}</span>
                  </div>
                ) : (
                  <ProofDropZone onFiles={(f) => pick(f[0], k)} accept={IMAGE_ACCEPT} hint={t('ctl.imgcmp.dropHint')} />
                )}
              </div>
            );
          })}
        </div>
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const run = async () => {
    if (!work) return;
    const c = document.createElement('canvas');
    c.width = work.w;
    c.height = work.h;
    c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(differenceMap(work.A.data, work.B.data, threshold)), work.w, work.h), 0, 0);
    const name = 'image-differences.png';
    downloadBlob(await canvasToBlob(c, 'image/png', 1), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const sizeNote = a.width !== b.width || a.height !== b.height;
  const pct = (x: number) => `${(x * 100).toFixed(x > 0 && x < 0.001 ? 3 : x < 0.1 ? 2 : 1)}%`;
  const panel = (
    <>
      <Segmented
        label={t('ctl.imgcmp.view')}
        value={mode}
        cols={3}
        onChange={setMode}
        options={[
          { value: 'slider', label: t('ctl.imgcmp.slider') },
          { value: 'side', label: t('ctl.imgcmp.side') },
          { value: 'diff', label: t('ctl.imgcmp.diff') },
        ]}
      />
      {mode === 'slider' && <RangeField id="cmp-split" label={t('ctl.imgcmp.split')} value={split} min={0} max={100} unit="%" onChange={setSplit} />}
      <RangeField id="cmp-thr" label={t('ctl.imgcmp.sensitivity')} value={threshold} min={0} max={64} onChange={setThreshold} />
      {stats && (
        <dl className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1.5 pt-4 border-t border-ink text-[14px]" data-measure>
          <dt className="text-graphite">{t('ctl.imgcmp.visible')}</dt>
          <dd className="text-ink font-semibold">{pct(stats.visible)}</dd>
          <dt className="text-graphite">{t('ctl.imgcmp.any')}</dt>
          <dd className="text-ink">{pct(stats.changed)}</dd>
          <dt className="text-graphite">{t('ctl.imgcmp.max')}</dt>
          <dd className="text-ink">{stats.maxDelta} / 255</dd>
          <dt className="text-graphite">PSNR</dt>
          <dd className="text-ink">{Number.isFinite(stats.psnr) ? `${stats.psnr.toFixed(1)} dB` : t('ctl.imgcmp.identical')}</dd>
        </dl>
      )}
      {sizeNote && <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.imgcmp.sizeNote', { a: `${a.width} × ${a.height}`, b: `${b.width} × ${b.height}` })}</p>}
      <button
        type="button"
        onClick={() => {
          setA(null);
          setB(null);
        }}
        className="btn-rule min-h-[44px] w-full"
      >
        {t('ctl.imgcmp.start')}
      </button>
    </>
  );

  const label = (img: LoadedImage, k: 'a' | 'b') => (
    <p className="text-[13px] text-graphite truncate">
      <span className="slug mr-2">{t(k === 'a' ? 'ctl.imgcmp.first' : 'ctl.imgcmp.second')}</span>
      {img.file.name} · {img.width} × {img.height} · {formatBytes(img.file.size)}
    </p>
  );

  return (
    <PdfToolLayout icon={GitCompare} panel={panel} actionLabel={t('ctl.imgcmp.download')} onAction={run} status={status} error={error}>
      <div className="bg-paper-bright border border-ink p-4 sm:p-6 rounded-xl">
        {mode === 'slider' && work && (
          <div className="relative mx-auto max-w-full w-fit select-none">
            <img src={a.url} alt={t('ctl.imgcmp.first')} className="block max-h-[60vh] max-w-full object-contain" style={{ aspectRatio: `${work.w} / ${work.h}` }} />
            <img
              src={b.url}
              alt={t('ctl.imgcmp.second')}
              className="absolute inset-0 w-full h-full object-fill"
              style={{ clipPath: `inset(0 0 0 ${split}%)` }}
            />
            <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.5)] pointer-events-none" style={{ left: `${split}%` }} aria-hidden="true" />
          </div>
        )}
        {mode === 'side' && (
          <div className="grid gap-3 sm:grid-cols-2">
            <img src={a.url} alt={t('ctl.imgcmp.first')} className="block w-full max-h-[55vh] object-contain" />
            <img src={b.url} alt={t('ctl.imgcmp.second')} className="block w-full max-h-[55vh] object-contain" />
          </div>
        )}
        {mode === 'diff' && <canvas ref={diffRef} role="img" aria-label={t('ctl.imgcmp.diffLabel')} className="block mx-auto max-h-[60vh] max-w-full object-contain" />}
      </div>
      {label(a, 'a')}
      {label(b, 'b')}
    </PdfToolLayout>
  );
}
