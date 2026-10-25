import React, { useState, useEffect, useRef } from 'react';
import { Download, Loader2, AlertCircle, CheckCircle2, Target } from 'lucide-react';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useImageIntake } from '../shared/useImageIntake';
import { useT } from '../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../lib/canvas/loadImage';
import { compressToTarget, type TargetFormat, type TargetResult } from '../../lib/canvas/targetSize';
import { downloadBlob } from '../../lib/canvas/engine';
import { outputFileName } from '../../lib/storage/fileNames';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/heic,image/heif,.heic,.heif';
// Sizes people are most often asked for by upload forms
const KB_PRESETS = [10, 20, 30, 50, 100, 200, 500, 1024];
type SizeMode = 'keep' | 'passport' | 'square' | 'custom';
// 35 × 45 mm at 300 dpi, and 2 × 2 in at 300 dpi
const SIZE_PRESETS: Record<'passport' | 'square', { width: number; height: number }> = {
  passport: { width: 413, height: 531 },
  square: { width: 600, height: 600 },
};


export function CompressToKbWorkspace() {
  const t = useT();
  // Forms and Windows count 1 KB as 1,024 bytes; using the same unit keeps results under their limit
  const kb = (bytes: number) => `${(bytes / 1024).toFixed(1)} ${t('ctl.kb.unitKb')}`;
  const kbLabel = (k: number) => (k >= 1024 ? `${k / 1024} ${t('ctl.kb.unitMb')}` : `${k} ${t('ctl.kb.unitKb')}`);
  const [source, setSource] = useState<LoadedImage | null>(null);
  const [targetKb, setTargetKb] = useState(50);
  const [customKb, setCustomKb] = useState('');
  const [sizeMode, setSizeMode] = useState<SizeMode>('keep');
  const [customW, setCustomW] = useState(600);
  const [customH, setCustomH] = useState(800);
  const [format, setFormat] = useState<TargetFormat>('image/jpeg');
  const [result, setResult] = useState<(TargetResult & { url: string }) | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const runId = useRef(0);

  const handleFile = async (file: File) => {
    setError(null);
    try {
      const loaded = await loadImageFile(file);
      setSource((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return loaded;
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(handleFile);

  const exactSize = sizeMode === 'keep' ? undefined : sizeMode === 'custom' ? { width: customW, height: customH } : SIZE_PRESETS[sizeMode];

  // Re-run the search whenever an input changes (debounced so typing a number doesn't queue work)
  useEffect(() => {
    if (!source) return;
    const id = ++runId.current;
    setBusy(true);
    const timer = setTimeout(async () => {
      try {
        const r = await compressToTarget(source.img, source.width, source.height, { maxBytes: targetKb * 1024, format, exactSize });
        if (id !== runId.current) return;
        setResult((prev) => {
          if (prev) URL.revokeObjectURL(prev.url);
          return { ...r, url: URL.createObjectURL(r.blob) };
        });
        setError(null);
      } catch {
        if (id === runId.current) setError(t('ws.errExport'));
      } finally {
        if (id === runId.current) setBusy(false);
      }
    }, 250);
    return () => clearTimeout(timer);
    // exactSize is derived from sizeMode and the custom fields
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, targetKb, format, sizeMode, customW, customH]);

  const handleDownload = () => {
    if (!result || !source) return;
    downloadBlob(result.blob, outputFileName(source.file.name, `${targetKb}kb`, format === 'image/jpeg' ? 'jpg' : 'webp'));
  };

  if (!source) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => handleFile(files[0])} accept={ACCEPT} hint={t('ctl.kb.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const shrunk = result && sizeMode === 'keep' && (result.width !== source.width || result.height !== source.height);
  const downloadLabel = t('ws.download', { format: format === 'image/jpeg' ? 'JPG' : 'WEBP' });
  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const numberClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

  return (
    <div className={result ? 'pb-20 lg:pb-0' : ''}>
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFile(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="relative bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10">
            <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
              <img
                src={result?.url || source.url}
                alt={result ? t('ctl.kb.resultAlt') : ''}
                className={`block max-h-[55vh] sm:max-h-[540px] max-w-full object-contain ${busy ? 'opacity-60' : ''}`}
              />
            </div>
            {busy && (
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-paper border border-ink text-[12px] text-ink">
                <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                <span>{t('ctl.kb.working')}</span>
              </div>
            )}
          </div>

          {/* Job ticket */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
            <span className="flex items-baseline gap-2">
              <span className="slug">{t('ws.source')}</span>
              <span className="text-ink font-semibold">{source.width} × {source.height} px</span>
              <span className="text-graphite">{kb(source.file.size)}</span>
            </span>
            {result && (
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ws.output')}</span>
                <span className="text-ink font-semibold">{result.width} × {result.height} px</span>
                <span className="text-graphite">{kb(result.blob.size)} · {t('ws.quality')} {Math.round(result.quality * 100)}%</span>
              </span>
            )}
            <button type="button" onClick={() => fileInputRef.current?.click()} className="ml-auto inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline">
              {t('ws.replace')}
            </button>
          </div>

          {/* Outcome, announced when it changes */}
          <div role="status" aria-live="polite">
            {result && !busy && (
              result.fits ? (
                <p className="flex items-start gap-2 text-[16px] text-ink">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-accent-green" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">{t('ctl.kb.fits', { size: kb(result.blob.size), target: kbLabel(targetKb) })}</strong>
                    {shrunk && <> {t('ctl.kb.shrunk', { w: result.width, h: result.height })}</>}
                  </span>
                </p>
              ) : (
                <p className="flex items-start gap-2 p-3 bg-accent-red-soft border border-accent-red text-[15px] text-accent-red">
                  <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t('ctl.kb.noFit', { target: kbLabel(targetKb), w: result.width, h: result.height, size: kb(result.blob.size) })}</span>
                </p>
              )
            )}
          </div>
          {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
        </div>

        <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <Target className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">
              {/* Size limit */}
              <div className="space-y-2">
                <span className="slug block" id="kb-target-label">{t('ctl.kb.targetSize')}</span>
                <div className="grid grid-cols-4 gap-px bg-ink border border-ink" role="group" aria-labelledby="kb-target-label">
                  {KB_PRESETS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      aria-pressed={targetKb === k && !customKb}
                      onClick={() => {
                        setTargetKb(k);
                        setCustomKb('');
                      }}
                      className={seg(targetKb === k && !customKb)}
                      data-measure
                    >
                      {kbLabel(k)}
                    </button>
                  ))}
                </div>
                <label htmlFor="kb-custom" className="block text-[14px] text-graphite pt-1">
                  {t('ctl.kb.custom')}
                </label>
                <input
                  id="kb-custom"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={10240}
                  placeholder={String(targetKb)}
                  value={customKb}
                  onChange={(e) => {
                    setCustomKb(e.target.value);
                    const v = parseInt(e.target.value, 10);
                    if (v >= 1 && v <= 10240) setTargetKb(v);
                  }}
                  className={numberClass}
                  data-measure
                />
                <p className="text-[13px] text-graphite">{t('ctl.kb.kbNote')}</p>
              </div>

              {/* Dimensions */}
              <div className="pt-4 border-t border-ink">
              <fieldset className="space-y-2">
                <legend className="slug mb-2">{t('ctl.kb.dimensions')}</legend>
                <div className="grid gap-2" role="radiogroup" aria-label={t('ctl.kb.dimensions')}>
                  {(
                    [
                      ['keep', t('ctl.kb.dimKeep'), t('ctl.kb.dimKeepNote')],
                      ['passport', t('ctl.kb.dimPassport'), t('ctl.kb.dimPassportNote')],
                      ['square', t('ctl.kb.dimSquare'), t('ctl.kb.dimSquareNote')],
                      ['custom', t('ctl.kb.dimCustom'), t('ctl.kb.cropNote')],
                    ] as const
                  ).map(([mode, label, note]) => (
                    <button
                      key={mode}
                      type="button"
                      role="radio"
                      aria-checked={sizeMode === mode}
                      onClick={() => setSizeMode(mode)}
                      className={`w-full text-left border border-ink px-3 py-2 ${sizeMode === mode ? 'seg-on' : 'seg-off'}`}
                    >
                      <span className="block text-[15px] font-semibold">{label}</span>
                      <span className="block text-[13px] font-normal text-graphite">{note}</span>
                    </button>
                  ))}
                </div>
                {sizeMode === 'custom' && (
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {(
                      [
                        ['kb-w', t('ctl.crop.width'), customW, setCustomW],
                        ['kb-h', t('ctl.crop.height'), customH, setCustomH],
                      ] as const
                    ).map(([id, label, value, set]) => (
                      <div key={id} className="space-y-1">
                        <label htmlFor={id} className="block text-[14px] text-graphite">
                          {label} <span className="text-[13px]">(px)</span>
                        </label>
                        <input
                          id={id}
                          type="number"
                          inputMode="numeric"
                          min={16}
                          max={8000}
                          value={value}
                          onChange={(e) => {
                            const v = parseInt(e.target.value, 10);
                            if (v >= 16 && v <= 8000) set(v);
                          }}
                          className={numberClass}
                          data-measure
                        />
                      </div>
                    ))}
                  </div>
                )}
              </fieldset>
              </div>

              {/* Format */}
              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block">{t('ws.saveAs')}</span>
                <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                  {(['image/jpeg', 'image/webp'] as const).map((f) => (
                    <button key={f} type="button" aria-pressed={format === f} onClick={() => setFormat(f)} className={seg(format === f)}>
                      {f === 'image/jpeg' ? 'JPG' : 'WebP'}
                    </button>
                  ))}
                </div>
                <p className="text-[13px] text-graphite">{t('ctl.kb.formatNote')}</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button type="button" onClick={handleDownload} disabled={!result || busy} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-not-allowed">
              <Download className="w-5 h-5" aria-hidden="true" />
              <span>{downloadLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {result && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button type="button" onClick={handleDownload} disabled={busy} className="btn-ink w-full min-h-[48px] text-[16px]">
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>{downloadLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
