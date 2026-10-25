import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download, Loader2, AlertCircle, Eye, EyeOff, Eraser, RotateCcw } from 'lucide-react';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useImageIntake } from '../shared/useImageIntake';
import { useT } from '../shared/I18nContext';
import { removeBackground, hasWebGPU, type RemovalMode, type RemovalProgress } from '../../lib/ai/backgroundRemover';
import { canvasToBlob, downloadBlob, formatBytes } from '../../lib/canvas/engine';
import { formatExtension, type OutputFormat } from '../../lib/canvas/outputFormat';
import { outputFileName } from '../../lib/storage/fileNames';

const ACCEPT = 'image/png,image/jpeg,image/webp';
// Approximate one-time downloads per model and device (from the model repositories)
const MODEL_SIZE = { portrait: { webgpu: '13 MB', wasm: '26 MB' }, hq: { webgpu: '115 MB', wasm: '115 MB' } } as const;

export function RemoveBackgroundWorkspace() {
  const t = useT();
  const [file, setFile] = useState<File | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [sourceDims, setSourceDims] = useState({ w: 0, h: 0 });
  const [mode, setMode] = useState<RemovalMode>('portrait');
  const [gpu, setGpu] = useState<boolean | null>(null);
  const [cutout, setCutout] = useState<ImageData | null>(null);
  const [progress, setProgress] = useState<RemovalProgress | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [background, setBackground] = useState<'transparent' | 'color'>('transparent');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [format, setFormat] = useState<OutputFormat>('image/png');
  const [showOriginal, setShowOriginal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runSeq = useRef(0);

  useEffect(() => {
    hasWebGPU().then(setGpu);
  }, []);

  const run = useCallback(
    async (image: File, runMode: RemovalMode) => {
      const seq = ++runSeq.current;
      setIsRunning(true);
      setError(null);
      setProgress({ stage: 'downloading' });
      try {
        const result = await removeBackground(image, runMode, (p) => {
          if (seq === runSeq.current) setProgress(p);
        });
        if (seq === runSeq.current) setCutout(result);
      } catch (err: any) {
        if (seq === runSeq.current) setError(t('ctl.bg.failed', { message: err?.message || '' }));
      } finally {
        if (seq === runSeq.current) {
          setIsRunning(false);
          setProgress(null);
        }
      }
    },
    [t]
  );

  const handleFile = (f: File) => {
    if (!ACCEPT.split(',').includes(f.type)) {
      setError(t('ws.errDecode'));
      return;
    }
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => setSourceDims({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = url;
    setFile(f);
    setSourceUrl(url);
    setCutout(null);
    setShowOriginal(false);
    run(f, mode);
  };

  useImageIntake(handleFile);

  // Composite the cutout over the chosen background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !cutout) return;
    canvas.width = cutout.width;
    canvas.height = cutout.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const layer = document.createElement('canvas');
    layer.width = cutout.width;
    layer.height = cutout.height;
    layer.getContext('2d')?.putImageData(cutout, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (background === 'color' || format === 'image/jpeg') {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(layer, 0, 0);
  }, [cutout, background, bgColor, format]);

  const handleDownload = async () => {
    if (!canvasRef.current || !file || isExporting) return;
    setIsExporting(true);
    try {
      const blob = await canvasToBlob(canvasRef.current, format, 0.92);
      downloadBlob(blob, outputFileName(file.name, 'no-background', formatExtension((blob.type || format) as OutputFormat)));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setIsExporting(false);
    }
  };

  if (!file) {
    return <ProofDropZone onFiles={(files) => handleFile(files[0])} accept={ACCEPT} hint={t('ctl.bg.dropHint')} />;
  }

  const device = gpu ? 'webgpu' : 'wasm';
  const progressLabel =
    progress?.stage === 'processing' || !progress
      ? t('ctl.bg.processing')
      : progress.fraction !== undefined && progress.totalBytes
        ? t('ctl.bg.downloadingModelSize', { loaded: formatBytes(progress.loadedBytes || 0), total: formatBytes(progress.totalBytes) })
        : t('ctl.bg.downloadingModel', { percent: 0 });
  const downloadLabel = t('ws.download', { format: formatExtension(format).toUpperCase() });

  return (
    <div className={cutout ? 'pb-20 lg:pb-0' : ''}>
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="relative canvas-checkerboard border border-ink flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-6">
            {sourceUrl && (showOriginal || !cutout) && (
              <img src={sourceUrl} alt="" className={`max-h-[540px] max-w-full object-contain ${isRunning ? 'opacity-60' : ''}`} />
            )}
            <canvas ref={canvasRef} className={`max-h-[540px] max-w-full object-contain ${cutout && !showOriginal ? 'block' : 'hidden'}`} />

            {isRunning && (
              <div className="absolute inset-x-0 bottom-0 bg-paper border-t border-ink px-4 py-3" role="status" aria-live="polite">
                <div className="flex items-center gap-2 text-[15px] text-ink">
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span data-measure>{progressLabel}</span>
                </div>
                {progress?.stage === 'downloading' && progress.fraction !== undefined && (
                  <div className="mt-2 h-1.5 bg-pencil-soft" aria-hidden="true">
                    <div className="h-full bg-process-key" style={{ width: `${Math.round(progress.fraction * 100)}%` }} />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
            <span className="flex items-baseline gap-2">
              <span className="slug">{t('ws.source')}</span>
              <span className="text-ink font-semibold">{sourceDims.w} × {sourceDims.h} px</span>
              <span className="text-graphite">{formatBytes(file.size)}</span>
            </span>
            {cutout && (
              <button type="button" onClick={() => setShowOriginal((v) => !v)} className="flex items-center gap-1.5 text-ink underline hover:no-underline" aria-pressed={showOriginal}>
                {showOriginal ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
                {showOriginal ? t('ctl.bg.showResult') : t('ctl.bg.showOriginal')}
              </button>
            )}
            <label className="ml-auto text-ink underline hover:no-underline cursor-pointer">
              {t('ws.replace')}
              <input
                type="file"
                accept={ACCEPT}
                className="sr-only"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFile(e.target.files[0]);
                  e.target.value = '';
                }}
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft border border-accent-red text-[15px] text-accent-red">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <div className="space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <Eraser className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">
              <div className="space-y-2">
                <span className="slug">{t('ctl.bg.mode')}</span>
                <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.bg.mode')}>
                  {(['portrait', 'hq'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      aria-pressed={mode === m}
                      disabled={m === 'hq' && gpu === false}
                      onClick={() => setMode(m)}
                      className={`min-h-[40px] px-2 text-[14px] font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                        mode === m ? 'bg-process-key text-paper' : 'bg-paper-bright text-ink hover:bg-paper-stock'
                      }`}
                    >
                      {m === 'portrait' ? t('ctl.bg.modePortrait') : t('ctl.bg.modeHq')}
                    </button>
                  ))}
                </div>
                <p className="text-[14px] text-graphite">
                  {mode === 'portrait' ? t('ctl.bg.modePortraitNote') : t('ctl.bg.modeHqNote')}{' '}
                  {t('ctl.bg.modelOnce', { size: MODEL_SIZE[mode][device] })}
                </p>
                {gpu === false && <p className="text-[14px] text-accent-yellow">{t('ctl.bg.hqUnavailable')}</p>}
                <button type="button" onClick={() => run(file, mode)} disabled={isRunning} className="btn-rule w-full disabled:opacity-50">
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  {cutout ? t('ctl.bg.rerun') : t('ctl.bg.run')}
                </button>
              </div>

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug">{t('ctl.bg.background')}</span>
                <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.bg.background')}>
                  {(['transparent', 'color'] as const).map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={background === b}
                      onClick={() => setBackground(b)}
                      className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                        background === b ? 'bg-process-key text-paper' : 'bg-paper-bright text-ink hover:bg-paper-stock'
                      }`}
                    >
                      {b === 'transparent' ? t('ctl.bg.transparent') : t('ctl.bg.color')}
                    </button>
                  ))}
                </div>
                {(background === 'color' || format === 'image/jpeg') && (
                  <label className="flex items-center justify-between gap-3">
                    <span>{t('ctl.bg.colorPick')}</span>
                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-9 h-9 border border-ink bg-transparent cursor-pointer" />
                  </label>
                )}
              </div>

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug">{t('ws.saveAs')}</span>
                <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                  {(['image/png', 'image/webp', 'image/jpeg'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      aria-pressed={format === fmt}
                      onClick={() => setFormat(fmt)}
                      className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                        format === fmt ? 'bg-process-key text-paper' : 'bg-paper-bright text-ink hover:bg-paper-stock'
                      }`}
                    >
                      {formatExtension(fmt).toUpperCase()}
                    </button>
                  ))}
                </div>
                {format === 'image/jpeg' && background === 'transparent' && <p className="text-[14px] text-graphite">{t('ctl.bg.jpgNeedsColor')}</p>}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button type="button" onClick={handleDownload} disabled={!cutout || isExporting} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
              {isExporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              <span>{isExporting ? t('ws.preparing') : downloadLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {cutout && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button type="button" onClick={handleDownload} disabled={isExporting} className="btn-ink w-full min-h-[48px] text-[16px]">
            {isExporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
            <span>{isExporting ? t('ws.preparing') : downloadLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
