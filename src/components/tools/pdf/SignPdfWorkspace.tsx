import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { stampImage } from '../../../lib/pdf/pageOps';
import { PagePreview } from './PagePreview';
import { PositionSliders, StampOverlay, dataUrlBytes, textToPng, type Placement, type Stamp } from './StampPlacer';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const INK = { black: '#141414', blue: '#1a3d9c' } as const;
const inputClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

/** Trim transparent edges so the signature box hugs the ink */
function trimToInk(canvas: HTMLCanvasElement): Stamp | null {
  const ctx = canvas.getContext('2d')!;
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;
  let x0 = width, y0 = height, x1 = -1, y1 = -1;
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++)
      if (data[(y * width + x) * 4 + 3] > 10) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
  if (x1 < 0) return null;
  const pad = 4;
  const w = Math.min(width, x1 - x0 + 1 + pad * 2);
  const h = Math.min(height, y1 - y0 + 1 + pad * 2);
  const out = document.createElement('canvas');
  out.width = w;
  out.height = h;
  out.getContext('2d')!.drawImage(canvas, Math.max(0, x0 - pad), Math.max(0, y0 - pad), w, h, 0, 0, w, h);
  return { url: out.toDataURL('image/png'), width: w, height: h };
}

/** Freehand signature pad (pointer events: mouse, touch and stylus) */
function SignaturePad({ color, onChange, label, clearLabel }: { color: string; onChange: (s: Stamp | null) => void; label: string; clearLabel: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const last = useRef<{ x: number; y: number } | null>(null);
  const point = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * e.currentTarget.width, y: ((e.clientY - r.top) / r.height) * e.currentTarget.height };
  };
  return (
    <div className="space-y-2">
      <canvas
        ref={ref}
        width={800}
        height={300}
        role="img"
        aria-label={label}
        className="w-full h-auto border border-ink bg-white touch-none cursor-crosshair"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          last.current = point(e);
        }}
        onPointerMove={(e) => {
          if (!last.current) return;
          const p = point(e);
          const ctx = e.currentTarget.getContext('2d')!;
          ctx.strokeStyle = color;
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.beginPath();
          ctx.moveTo(last.current.x, last.current.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
          last.current = p;
        }}
        onPointerUp={() => {
          last.current = null;
          if (ref.current) onChange(trimToInk(ref.current));
        }}
        onPointerCancel={() => (last.current = null)}
      />
      <button
        type="button"
        className="btn-rule w-full"
        onClick={() => {
          const c = ref.current;
          if (!c) return;
          c.getContext('2d')!.clearRect(0, 0, c.width, c.height);
          onChange(null);
        }}
      >
        {clearLabel}
      </button>
    </div>
  );
}

export function SignPdfWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [source, setSource] = useState<'draw' | 'type' | 'image'>('draw');
  const [ink, setInk] = useState<keyof typeof INK>('blue');
  const [drawn, setDrawn] = useState<Stamp | null>(null);
  const [name, setName] = useState('');
  const [uploaded, setUploaded] = useState<HTMLImageElement | null>(null);
  const [removeWhite, setRemoveWhite] = useState(true);
  const [page, setPage] = useState(1);
  const [place, setPlace] = useState<Placement>({ cx: 0.72, cy: 0.85, w: 0.28, rotate: 0, opacity: 1 });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => setPage(1), [pdf.doc]);

  const typed = useMemo(() => (source === 'type' ? textToPng(name, INK[ink], 'italic 500', '"Georgia", "Times New Roman", serif') : null), [source, name, ink]);
  const image = useMemo<Stamp | null>(() => {
    if (source !== 'image' || !uploaded) return null;
    const c = document.createElement('canvas');
    c.width = uploaded.naturalWidth;
    c.height = uploaded.naturalHeight;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(uploaded, 0, 0);
    if (removeWhite) {
      const d = ctx.getImageData(0, 0, c.width, c.height);
      for (let i = 0; i < d.data.length; i += 4) {
        // Paper white fades out; ink stays
        const light = Math.min(d.data[i], d.data[i + 1], d.data[i + 2]);
        if (light > 200) d.data[i + 3] = Math.max(0, Math.round(((255 - light) / 55) * 255));
      }
      ctx.putImageData(d, 0, 0);
    }
    return trimToInk(c);
  }, [source, uploaded, removeWhite]);
  const stamp = source === 'draw' ? drawn : source === 'type' ? typed : image;

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    if (!stamp) return setError(t('ctl.sign.needSignature'));
    setBusy(true);
    setError(null);
    try {
      const out = await stampImage(pdf.bytes, { png: dataUrlBytes(stamp.url), cx: place.cx, cy: place.cy, widthFraction: place.w, opacity: 1, rotate: 0, pages: [page - 1] });
      const fileName = pdfName(pdf.file?.name, 'signed');
      savePdf(out, fileName);
      setStatus(t('ctl.pdf.done', { name: fileName }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <>
      <Segmented
        label={t('ctl.sign.source')}
        value={source}
        onChange={setSource}
        options={[
          { value: 'draw', label: t('ctl.sign.draw') },
          { value: 'type', label: t('ctl.sign.type') },
          { value: 'image', label: t('ctl.sign.upload') },
        ]}
      />
      {source !== 'image' && (
        <Segmented
          label={t('ctl.sign.ink')}
          value={ink}
          onChange={setInk}
          options={[
            { value: 'blue', label: t('ctl.sign.blue') },
            { value: 'black', label: t('ctl.sign.black') },
          ]}
        />
      )}
      {source === 'draw' && <SignaturePad color={INK[ink]} onChange={setDrawn} label={t('ctl.sign.padLabel')} clearLabel={t('ctl.sign.clear')} />}
      {source === 'type' && (
        <div className="space-y-1">
          <label htmlFor="sign-name" className="block text-[14px] text-graphite">
            {t('ctl.sign.name')}
          </label>
          <input id="sign-name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
      )}
      {source === 'image' && (
        <div className="space-y-2">
          <input
            ref={fileInput}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              const img = new Image();
              img.onload = () => setUploaded(img);
              img.src = URL.createObjectURL(f);
              e.target.value = '';
            }}
          />
          <button type="button" className="btn-rule w-full" onClick={() => fileInput.current?.click()}>
            {t('ctl.sign.uploadButton')}
          </button>
          <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
            <input type="checkbox" checked={removeWhite} onChange={(e) => setRemoveWhite(e.target.checked)} />
            <span className="text-ink">{t('ctl.sign.removeWhite')}</span>
          </label>
        </div>
      )}
      <div className="pt-4 border-t border-ink space-y-3">
        {pdf.pageCount > 1 && (
          <div className="space-y-1">
            <label htmlFor="sign-page" className="block text-[14px] text-graphite">
              {t('ctl.sign.page')}
            </label>
            <select id="sign-page" value={page} onChange={(e) => setPage(Number(e.target.value))} className={inputClass}>
              {Array.from({ length: pdf.pageCount }, (_, i) => (
                <option key={i} value={i + 1}>
                  {t('ctl.pdf.pageN', { n: i + 1 })}
                </option>
              ))}
            </select>
          </div>
        )}
        <RangeField id="sign-w" label={t('ctl.sign.size')} value={Math.round(place.w * 100)} min={5} max={80} unit="%" onChange={(v) => setPlace({ ...place, w: v / 100 })} />
        <PositionSliders place={place} onChange={setPlace} labels={{ x: t('ctl.text.horizontalPosition'), y: t('ctl.text.verticalPosition') }} />
        <p className="text-[13px] text-graphite">{t('ctl.sign.placeHint')}</p>
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PagePreview doc={pdf.doc} page={page}>
          {(canvas) => stamp && <StampOverlay canvas={canvas} stamp={stamp} place={place} onMove={(cx, cy) => setPlace((p) => ({ ...p, cx, cy }))} hint={t('ctl.sign.placeHint')} />}
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}
