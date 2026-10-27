import React, { useRef, useState } from 'react';
import { Printer } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { detectFormat, printSize, readDpi, setDpi } from '../../../lib/canvas/dpi';
import { downloadBlob } from '../../../lib/canvas/engine';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif';
const PRESETS = [72, 96, 150, 200, 300, 600];

interface Source {
  image: LoadedImage;
  /** JPEG or PNG bytes the DPI will be written into */
  bytes: Uint8Array;
  mime: 'image/jpeg' | 'image/png';
  current: number | null;
  /** The upload wasn't JPEG or PNG, so it was converted to JPEG first */
  converted: boolean;
}

export function ChangeDpiWorkspace() {
  const t = useT();
  const [src, setSrc] = useState<Source | null>(null);
  const [dpi, setDpiValue] = useState(300);
  const [custom, setCustom] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const image = await loadImageFile(file);
      let bytes = new Uint8Array(await file.arrayBuffer());
      let format = detectFormat(bytes);
      let converted = false;
      if (!format) {
        // Only JPEG and PNG store a DPI value: convert anything else to a high-quality JPEG
        const c = document.createElement('canvas');
        c.width = image.width;
        c.height = image.height;
        const ctx = c.getContext('2d')!;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(image.img, 0, 0);
        const blob = await new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej()), 'image/jpeg', 0.95));
        bytes = new Uint8Array(await blob.arrayBuffer());
        format = 'jpeg';
        converted = true;
      }
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.image.url);
        return { image, bytes, mime: format === 'png' ? 'image/png' : 'image/jpeg', current: readDpi(bytes), converted };
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  if (!src) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.dpi.dropHint')} />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const { width: w, height: h } = src.image;
  const size = printSize(w, h, dpi);
  const ext = src.mime === 'image/png' ? 'png' : 'jpg';

  const run = () => {
    const out = setDpi(src.bytes, dpi);
    const name = `${src.image.file.name.replace(/\.[^.]+$/, '')}-${dpi}dpi.${ext}`;
    downloadBlob(new Blob([new Uint8Array(out)], { type: src.mime }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block" id="dpi-label">{t('ctl.dpi.newDpi')}</span>
        <div className="grid grid-cols-3 gap-px bg-ink border border-ink" role="group" aria-labelledby="dpi-label">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={dpi === p && !custom}
              onClick={() => {
                setDpiValue(p);
                setCustom('');
              }}
              className={seg(dpi === p && !custom)}
              data-measure
            >
              {p}
            </button>
          ))}
        </div>
        <label htmlFor="dpi-custom" className="block text-[14px] text-graphite pt-1">
          {t('ctl.dpi.custom')}
        </label>
        <input
          id="dpi-custom"
          type="number"
          inputMode="numeric"
          min={1}
          max={65535}
          placeholder={String(dpi)}
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            const v = parseInt(e.target.value, 10);
            if (v >= 1 && v <= 65535) setDpiValue(v);
          }}
          className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          data-measure
        />
      </div>
      <dl className="pt-4 border-t border-ink space-y-1.5 text-[15px]" data-measure>
        <div className="flex justify-between gap-3">
          <dt className="text-graphite">{t('ctl.dpi.current')}</dt>
          <dd className="text-ink font-semibold">{src.current ? `${src.current} dpi` : t('ctl.dpi.notSet')}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-graphite">{t('ctl.dpi.printSize')}</dt>
          <dd className="text-ink font-semibold text-right">
            {size.cmW.toFixed(1)} × {size.cmH.toFixed(1)} cm
            <span className="block text-[13px] font-normal text-graphite">
              {size.inW.toFixed(2)} × {size.inH.toFixed(2)} in
            </span>
          </dd>
        </div>
      </dl>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.dpi.note')}</p>
      {src.converted && <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.dpi.converted')}</p>}
    </>
  );

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) load(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <PdfToolLayout
        icon={Printer}
        fileLabel={`${w} × ${h} px · ${src.image.file.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: ext.toUpperCase() })}
        onAction={run}
        status={status}
        error={error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10 rounded-xl">
          <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
            <img src={src.image.url} alt="" className="block max-h-[55vh] sm:max-h-[540px] max-w-full object-contain" />
          </div>
        </div>
        <p className="text-[16px] text-ink" data-measure>
          {t('ctl.dpi.summary', { dpi, cm: `${size.cmW.toFixed(1)} × ${size.cmH.toFixed(1)} cm` })}
        </p>
      </PdfToolLayout>
    </>
  );
}
