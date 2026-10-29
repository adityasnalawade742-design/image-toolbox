import React, { useEffect, useRef, useState } from 'react';
import { UserSquare2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { computeCrop, cropCentre, mmToPx, sheetLayout } from '../../../lib/canvas/passport';
import { setDpi } from '../../../lib/canvas/dpi';
import { canvasToBlob, downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { removeBackground, type RemovalProgress } from '../../../lib/ai/backgroundRemover';
import { RemovalProgressBar, activeDownload } from '../../shared/RemovalProgressBar';
import { RangeField } from '../pdf/common';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';

// Sizes in mm, and where the guides sit (fraction of the photo height) for the top of the head and the chin
const PRESETS = {
  p35x45: { w: 35, h: 45, top: 0.09, chin: 0.84, label: '35 × 45 mm' },
  us2x2: { w: 50.8, h: 50.8, top: 0.12, chin: 0.72, label: '2 × 2 in' },
  p33x48: { w: 33, h: 48, top: 0.1, chin: 0.73, label: '33 × 48 mm' },
} as const;
type PresetId = keyof typeof PRESETS | 'custom';
const PAPER = { '4x6': { w: 101.6, h: 152.4 }, a4: { w: 210, h: 297 } } as const;
const BACKGROUNDS = { keep: null, white: '#ffffff', grey: '#eeeeee', blue: '#dbe8f4' } as const;
type Bg = keyof typeof BACKGROUNDS;

export function PassportPhotoWorkspace() {
  const t = useT();
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [preset, setPreset] = useState<PresetId>('p35x45');
  const [customW, setCustomW] = useState(35);
  const [customH, setCustomH] = useState(45);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ cx: 0.5, cy: 0.4 });
  const [bg, setBg] = useState<Bg>('keep');
  const [bgBusy, setBgBusy] = useState(false);
  const [bgProgress, setBgProgress] = useState<RemovalProgress | null>(null);
  const [output, setOutput] = useState<'single' | 'sheet'>('single');
  const [paper, setPaper] = useState<keyof typeof PAPER>('4x6');
  const [format, setFormat] = useState<'jpg' | 'pdf'>('jpg');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const sheetRef = useRef<HTMLCanvasElement>(null);
  // The picture we crop from: the photo itself, or the photo with its background replaced
  const sourceRef = useRef<HTMLCanvasElement | null>(null);
  const cutoutRef = useRef<HTMLCanvasElement | null>(null);
  const drag = useRef<{ x: number; y: number; cx: number; cy: number } | null>(null);

  const size = preset === 'custom' ? { w: customW, h: customH, top: 0.1, chin: 0.8 } : PRESETS[preset];
  const aspect = size.w / size.h;

  const buildSource = (img: LoadedImage, fill: string | null) => {
    const c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d')!;
    if (fill && cutoutRef.current) {
      ctx.fillStyle = fill;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(cutoutRef.current, 0, 0);
    } else {
      ctx.drawImage(img.img, 0, 0);
    }
    sourceRef.current = c;
    setTick((n) => n + 1);
  };

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    try {
      const img = await loadImageFile(file);
      cutoutRef.current = null;
      setBg('keep');
      setZoom(1);
      setPos({ cx: 0.5, cy: 0.4 });
      setImage((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return img;
      });
      buildSource(img, null);
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  const chooseBg = async (next: Bg) => {
    setBg(next);
    if (!image) return;
    const fill = BACKGROUNDS[next];
    if (fill && !cutoutRef.current) {
      setBgBusy(true);
      setError(null);
      try {
        // Hand the model a plain PNG so iPhone HEIC photos work too
        const c = document.createElement('canvas');
        c.width = image.width;
        c.height = image.height;
        c.getContext('2d')!.drawImage(image.img, 0, 0);
        const cut = await removeBackground(await canvasToBlob(c, 'image/png'), 'portrait', setBgProgress);
        const layer = document.createElement('canvas');
        layer.width = cut.width;
        layer.height = cut.height;
        layer.getContext('2d')!.putImageData(cut, 0, 0);
        cutoutRef.current = layer;
      } catch (err: any) {
        setError(t('ctl.passport.bgFailed', { message: err?.message || '' }));
        setBg('keep');
        setBgBusy(false);
        setBgProgress(null);
        buildSource(image, null);
        return;
      }
      setBgBusy(false);
      setBgProgress(null);
    }
    buildSource(image, fill);
  };

  const crop = image ? computeCrop(image.width, image.height, aspect, zoom, pos.cx, pos.cy) : null;
  const photoPx = { w: mmToPx(size.w), h: mmToPx(size.h) };

  const drawPhoto = (canvas: HTMLCanvasElement) => {
    if (!crop || !sourceRef.current) return;
    canvas.width = photoPx.w;
    canvas.height = photoPx.h;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sourceRef.current, crop.x, crop.y, crop.w, crop.h, 0, 0, canvas.width, canvas.height);
  };

  const drawSheet = (canvas: HTMLCanvasElement, dpi: number) => {
    const p = PAPER[paper];
    const layout = sheetLayout(p.w, p.h, size.w, size.h);
    const photo = document.createElement('canvas');
    drawPhoto(photo);
    canvas.width = mmToPx(p.w, dpi);
    canvas.height = mmToPx(p.h, dpi);
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingQuality = 'high';
    ctx.strokeStyle = '#bdbdbd';
    ctx.lineWidth = Math.max(1, dpi / 150);
    for (const s of layout.slots) {
      const x = mmToPx(s.x, dpi), y = mmToPx(s.y, dpi), w = mmToPx(size.w, dpi), h = mmToPx(size.h, dpi);
      ctx.drawImage(photo, x, y, w, h);
      // Thin outline to cut along
      ctx.strokeRect(x - 0.5, y - 0.5, w + 1, h + 1);
    }
    return layout.slots.length;
  };

  // Redraw previews whenever anything that affects them changes
  useEffect(() => {
    if (previewRef.current) drawPhoto(previewRef.current);
    if (output === 'sheet' && sheetRef.current) drawSheet(sheetRef.current, 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, zoom, pos, preset, customW, customH, output, paper, image]);

  if (!image) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t('ctl.passport.dropHint')} />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const centre = crop ? cropCentre(crop, image.width, image.height) : pos;
  const sheetCount = sheetLayout(PAPER[paper].w, PAPER[paper].h, size.w, size.h).slots.length;
  const sizeName = `${Math.round(size.w)}x${Math.round(size.h)}mm`;

  const run = async () => {
    setError(null);
    try {
      if (output === 'single') {
        const c = document.createElement('canvas');
        drawPhoto(c);
        const bytes = setDpi(new Uint8Array(await (await canvasToBlob(c, 'image/jpeg', 0.95)).arrayBuffer()), 300);
        const name = `passport-photo-${sizeName}.jpg`;
        downloadBlob(new Blob([new Uint8Array(bytes)], { type: 'image/jpeg' }), name);
        setStatus(t('ctl.pdf.done', { name }));
        return;
      }
      const c = document.createElement('canvas');
      drawSheet(c, 300);
      const jpeg = new Uint8Array(await (await canvasToBlob(c, 'image/jpeg', 0.95)).arrayBuffer());
      if (format === 'jpg') {
        const name = `passport-sheet-${paper}-${sizeName}.jpg`;
        downloadBlob(new Blob([new Uint8Array(setDpi(jpeg, 300))], { type: 'image/jpeg' }), name);
        setStatus(t('ctl.pdf.done', { name }));
      } else {
        // A PDF page of the exact paper size prints at the right scale everywhere
        const { PDFDocument } = await import('pdf-lib');
        const pdf = await PDFDocument.create();
        const pt = (mm: number) => (mm / 25.4) * 72;
        const page = pdf.addPage([pt(PAPER[paper].w), pt(PAPER[paper].h)]);
        const img = await pdf.embedJpg(jpeg);
        page.drawImage(img, { x: 0, y: 0, width: page.getWidth(), height: page.getHeight() });
        const name = `passport-sheet-${paper}-${sizeName}.pdf`;
        downloadBlob(new Blob([new Uint8Array(await pdf.save())], { type: 'application/pdf' }), name);
        setStatus(t('ctl.pdf.done', { name }));
      }
    } catch {
      setError(t('ws.errExport'));
    }
  };

  const numberInput = (id: string, label: string, value: number, set: (v: number) => void) => (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-[14px] text-graphite">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={10}
        max={100}
        value={value}
        onChange={(e) => {
          const v = parseFloat(e.target.value);
          if (v >= 10 && v <= 100) set(v);
        }}
        className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
        data-measure
      />
    </div>
  );

  const panel = (
    <>
      <div className="space-y-2">
        <Segmented
          label={t('ctl.passport.size')}
          value={preset}
          onChange={(v) => {
            setPreset(v);
            setZoom(1);
          }}
          cols={2}
          options={[
            { value: 'p35x45', label: PRESETS.p35x45.label },
            { value: 'us2x2', label: PRESETS.us2x2.label },
            { value: 'p33x48', label: PRESETS.p33x48.label },
            { value: 'custom', label: t('ctl.passport.custom') },
          ]}
        />
        {preset === 'custom' && (
          <div className="grid grid-cols-2 gap-3">
            {numberInput('pp-w', t('ctl.passport.widthMm'), customW, setCustomW)}
            {numberInput('pp-h', t('ctl.passport.heightMm'), customH, setCustomH)}
          </div>
        )}
      </div>
      <div className="pt-4 border-t border-ink space-y-3">
        <span className="slug block">{t('ctl.passport.adjust')}</span>
        <RangeField id="pp-zoom" label={t('ctl.passport.zoom')} value={Math.round(zoom * 100)} min={100} max={400} step={5} unit="%" onChange={(v) => setZoom(v / 100)} />
        <RangeField id="pp-x" label={t('ctl.text.horizontalPosition')} value={Math.round(centre.cx * 100)} min={0} max={100} unit="%" onChange={(v) => setPos({ cx: v / 100, cy: centre.cy })} />
        <RangeField id="pp-y" label={t('ctl.text.verticalPosition')} value={Math.round(centre.cy * 100)} min={0} max={100} unit="%" onChange={(v) => setPos({ cx: centre.cx, cy: v / 100 })} />
        <p className="text-[13px] text-graphite">{t('ctl.passport.dragHint')}</p>
      </div>
      <div className="pt-4 border-t border-ink space-y-2">
        <Segmented
          label={t('ctl.passport.background')}
          value={bg}
          onChange={chooseBg}
          cols={2}
          options={[
            { value: 'keep', label: t('ctl.passport.bgKeep') },
            { value: 'white', label: t('ctl.passport.bgWhite') },
            { value: 'grey', label: t('ctl.passport.bgGrey') },
            { value: 'blue', label: t('ctl.passport.bgBlue') },
          ]}
        />
        <p className="text-[13px] text-graphite">{t('ctl.passport.bgNote')}</p>
      </div>
      <div className="pt-4 border-t border-ink space-y-3">
        <Segmented
          label={t('ctl.passport.output')}
          value={output}
          onChange={setOutput}
          options={[
            { value: 'single', label: t('ctl.passport.single') },
            { value: 'sheet', label: t('ctl.passport.sheet') },
          ]}
        />
        {output === 'sheet' && (
          <>
            <Segmented
              label={t('ctl.passport.paper')}
              value={paper}
              onChange={setPaper}
              options={[
                { value: '4x6', label: '4 × 6 in' },
                { value: 'a4', label: 'A4' },
              ]}
            />
            <Segmented
              label={t('ws.saveAs')}
              value={format}
              onChange={setFormat}
              options={[
                { value: 'jpg', label: 'JPG' },
                { value: 'pdf', label: 'PDF' },
              ]}
            />
            <p className="text-[14px] text-ink" data-measure>
              {t('ctl.passport.sheetCount', { n: sheetCount })}
            </p>
          </>
        )}
      </div>
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
        icon={UserSquare2}
        fileLabel={`${size.w === 50.8 ? '2 × 2 in' : `${size.w} × ${size.h} mm`} · ${photoPx.w} × ${photoPx.h} px · 300 dpi`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: output === 'sheet' ? format.toUpperCase() : 'JPG' })}
        onAction={run}
        busy={bgBusy}
        status={bgBusy ? t('ctl.passport.bgWorking') : sheetCount === 0 && output === 'sheet' ? t('ctl.passport.tooBig') : status}
        error={error}
      >
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
          <div className="relative overflow-hidden bg-paper-bright border border-ink flex items-center justify-center p-6 min-h-[300px] rounded-xl">
            {bgBusy && (
              <div className="absolute inset-x-0 bottom-0 z-10 bg-paper border-t border-ink px-4 py-3">
                <RemovalProgressBar
                  progress={bgProgress}
                  mode="portrait"
                  live={false}
                  label={(() => {
                    const download = activeDownload(bgProgress);
                    return download
                      ? t('ctl.bg.downloadingModelSize', { loaded: formatBytes(download.loaded), total: formatBytes(download.total) })
                      : t('ctl.passport.bgWorking');
                  })()}
                />
              </div>
            )}
            <div
              className="relative block w-[min(100%,18rem)] crop-marks touch-none cursor-grab active:cursor-grabbing select-none"
              onPointerDown={(e) => {
                if (!crop) return;
                e.currentTarget.setPointerCapture(e.pointerId);
                drag.current = { x: e.clientX, y: e.clientY, cx: centre.cx, cy: centre.cy };
              }}
              onPointerMove={(e) => {
                if (!drag.current || !crop || !previewRef.current) return;
                // Moving the photo right means the window moves left over the source
                const scale = crop.w / previewRef.current.getBoundingClientRect().width;
                setPos({
                  cx: drag.current.cx - ((e.clientX - drag.current.x) * scale) / image.width,
                  cy: drag.current.cy - ((e.clientY - drag.current.y) * scale) / image.height,
                });
              }}
              onPointerUp={() => (drag.current = null)}
              onPointerCancel={() => (drag.current = null)}
            >
              <canvas ref={previewRef} role="img" aria-label={t('ctl.passport.previewLabel')} className="block w-full h-auto border border-pencil" />
              {/* Head guides: top of head and chin */}
              <span aria-hidden="true" className="absolute inset-x-0 border-t-2 border-dashed border-process-magenta pointer-events-none" style={{ top: `${size.top * 100}%` }}>
                <span className="absolute right-1 -top-5 bg-process-key text-paper text-[11px] px-1">{t('ctl.passport.guideTop')}</span>
              </span>
              <span aria-hidden="true" className="absolute inset-x-0 border-t-2 border-dashed border-process-magenta pointer-events-none" style={{ top: `${size.chin * 100}%` }}>
                <span className="absolute right-1 top-1 bg-process-key text-paper text-[11px] px-1">{t('ctl.passport.guideChin')}</span>
              </span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 border-2 border-dashed border-process-magenta/70 rounded-[50%] pointer-events-none"
                style={{ top: `${size.top * 100}%`, height: `${(size.chin - size.top) * 100}%`, width: `${(size.chin - size.top) * 100 * (size.h / size.w) * 0.72}%` }}
              />
            </div>
          </div>
          {output === 'sheet' && (
            <div className="bg-paper-bright border border-ink flex items-center justify-center p-6 min-h-[300px] rounded-xl">
              <canvas ref={sheetRef} role="img" aria-label={t('ctl.passport.sheetLabel')} className="block max-h-[60vh] w-auto max-w-full border border-pencil" />
            </div>
          )}
        </div>
        <p className="text-[14px] text-graphite leading-relaxed">{t('ctl.passport.guideHint')}</p>
        <p className="text-[14px] text-graphite leading-relaxed">{t('ctl.passport.check')}</p>
      </PdfToolLayout>
    </>
  );
}
