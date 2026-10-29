import React, { useEffect, useRef, useState } from 'react';
import { PenLine } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { extractSignature, type InkColor } from '../../../lib/canvas/signature';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { RangeField } from '../pdf/common';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
// Phone photos are large; signatures don't need more than this to stay crisp
const MAX_SIDE = 2000;

export function SignatureExtractorWorkspace() {
  const t = useT();
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [sensitivity, setSensitivity] = useState(50);
  const [ink, setInk] = useState<InkColor>('keep');
  const [found, setFound] = useState<boolean | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pixels = useRef<{ data: Uint8ClampedArray; w: number; h: number } | null>(null);

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const img = await loadImageFile(file);
      const scale = Math.min(1, MAX_SIDE / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d', { willReadFrequently: true })!;
      ctx.drawImage(img.img, 0, 0, w, h);
      pixels.current = { data: ctx.getImageData(0, 0, w, h).data, w, h };
      setImage((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return img;
      });
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  // Re-extract when the photo or a setting changes (debounced so slider drags stay smooth)
  useEffect(() => {
    if (!image || !pixels.current) return;
    const timer = setTimeout(() => {
      const p = pixels.current!;
      const r = extractSignature(p.data, p.w, p.h, { sensitivity, ink });
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (!r.box) {
        setFound(false);
        canvas.width = 1;
        canvas.height = 1;
        return;
      }
      setFound(true);
      const full = document.createElement('canvas');
      full.width = r.width;
      full.height = r.height;
      full.getContext('2d')!.putImageData(new ImageData(r.data as Uint8ClampedArray<ArrayBuffer>, r.width, r.height), 0, 0);
      canvas.width = r.box.w;
      canvas.height = r.box.h;
      canvas.getContext('2d')!.drawImage(full, r.box.x, r.box.y, r.box.w, r.box.h, 0, 0, r.box.w, r.box.h);
    }, 120);
    return () => clearTimeout(timer);
  }, [image, sensitivity, ink]);

  if (!image) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.sig.dropHint')} />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const run = async () => {
    if (!canvasRef.current || !found) return;
    const name = `${image.file.name.replace(/\.[^.]+$/, '')}-signature.png`;
    downloadBlob(await canvasToBlob(canvasRef.current, 'image/png'), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

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
        icon={PenLine}
        fileLabel={image.file.name}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={
          <>
            <div className="space-y-1">
              <RangeField id="sig-sens" label={t('ctl.sig.sensitivity')} value={sensitivity} min={0} max={100} onChange={setSensitivity} />
              <p className="text-[13px] text-graphite">{t('ctl.sig.sensitivityHint')}</p>
            </div>
            <Segmented
              label={t('ctl.sign.ink')}
              value={ink}
              onChange={setInk}
              options={[
                { value: 'keep', label: t('ctl.sig.original') },
                { value: 'black', label: t('ctl.sign.black') },
                { value: 'blue', label: t('ctl.sign.blue') },
              ]}
            />
            <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.sig.useHint')}</p>
          </>
        }
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        actionDisabled={!found}
        status={found === false ? t('ctl.sig.noInk') : status}
        error={error}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <figure className="space-y-2">
            <figcaption className="slug">{t('ws.source')}</figcaption>
            <div className="bg-paper-bright border border-ink flex items-center justify-center p-4 min-h-[180px] rounded-xl">
              <img src={image.url} alt="" className="block max-h-[40vh] max-w-full object-contain" />
            </div>
          </figure>
          <figure className="space-y-2">
            <figcaption className="slug">{t('ws.output')}</figcaption>
            <div className="bg-paper-bright border border-ink flex items-center justify-center p-4 min-h-[180px] rounded-xl">
              <div className="canvas-checkerboard inline-flex max-w-full">
                <canvas ref={canvasRef} role="img" aria-label={t('ctl.sig.resultLabel')} className="block max-h-[40vh] max-w-full object-contain" />
              </div>
            </div>
          </figure>
        </div>
      </PdfToolLayout>
    </>
  );
}
