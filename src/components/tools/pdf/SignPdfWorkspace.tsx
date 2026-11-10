import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CalendarDays, Copy, PenLine, Plus, Type as TypeIcon, X } from 'lucide-react';
import { DragFrameOverlay } from '../../shared/DragFrameOverlay';
import { useLocale } from '../../shared/I18nContext';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { stampMany } from '../../../lib/pdf/pageOps';
import { PagePreview } from './PagePreview';
import { PositionSliders, dataUrlBytes, textToPng, type Stamp } from './StampPlacer';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const INK = { black: '#141414', blue: '#1a3d9c' } as const;
const SCRIPT = ['italic 500', '"Georgia", "Times New Roman", serif'] as const;
const PLAIN = ['normal 400', '"Helvetica", "Arial", sans-serif'] as const;

/** Something placed on the document: the signature, initials, a date or a line of text */
type ItemKind = 'signature' | 'initials' | 'date' | 'text';
interface Item {
  id: string;
  kind: ItemKind;
  /** 0-based page */
  page: number;
  /** Centre and width as fractions of the page */
  cx: number;
  cy: number;
  w: number;
  text: string;
}
let seq = 0;
const newId = () => `s${Date.now().toString(36)}${(seq++).toString(36)}`;
const KIND_LABEL = { signature: 'ctl.sign.kindSignature', initials: 'ctl.sign.kindInitials', date: 'ctl.sign.kindDate', text: 'ctl.sign.kindText' } as const;
// A text item's starting width, so a short date and a long name come out at a similar letter size
const widthFor = (text: string, script: boolean) => Math.min(0.6, Math.max(0.06, text.length * (script ? 0.014 : 0.011)));
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
  const locale = useLocale();
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Item[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // The first signature goes where it always did, so drawing and downloading still works in one go
  const placedFirst = useRef(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setPage(1);
    setItems([]);
    setSelectedId(null);
    placedFirst.current = false;
  }, [pdf.doc]);

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

  useEffect(() => {
    if (!stamp || placedFirst.current || items.some((i) => i.kind === 'signature')) return;
    placedFirst.current = true;
    const first: Item = { id: newId(), kind: 'signature', page: page - 1, cx: 0.72, cy: 0.85, w: 0.28, text: '' };
    setItems((list) => [...list, first]);
    setSelectedId(first.id);
  }, [stamp]);

  // What each item looks like: the signature itself, or its text in the signature's ink
  const looks = useMemo(() => {
    const out = new Map<string, Stamp | null>();
    for (const item of items) {
      if (item.kind === 'signature') out.set(item.id, stamp);
      else {
        const [style, family] = item.kind === 'initials' ? SCRIPT : PLAIN;
        out.set(item.id, textToPng(item.text, INK[ink], style, family));
      }
    }
    return out;
  }, [items, stamp, ink]);
  const selected = items.find((i) => i.id === selectedId) ?? null;
  const textRef = useRef<HTMLInputElement>(null);
  const focusText = useRef(false);
  useEffect(() => {
    if (focusText.current && textRef.current) {
      focusText.current = false;
      textRef.current.focus();
    }
  });
  const update = (id: string, patch: Partial<Item>) => setItems((list) => list.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  const initialsOf = (n: string) =>
    n.trim().split(/\s+/).filter(Boolean).map((w) => w[0]).join('').toUpperCase().slice(0, 4);
  const add = (kind: ItemKind) => {
    const text =
      kind === 'date'
        ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date())
        : kind === 'initials'
          ? initialsOf(name)
          : kind === 'text'
            ? name.trim()
            : '';
    // Where people expect each: initials in the bottom corner, the date under the signature, text at the bottom left;
    // another of the same kind on this page goes a step higher, so they don't pile up
    const START = { signature: [0.72, 0.85], initials: [0.9, 0.95], date: [0.72, 0.93], text: [0.3, 0.88] } as const;
    const same = items.filter((i) => i.page === page - 1 && i.kind === kind).length;
    const item: Item = {
      id: newId(),
      kind,
      page: page - 1,
      cx: START[kind][0],
      cy: Math.max(0.05, START[kind][1] - same * 0.07),
      w: kind === 'signature' ? 0.28 : widthFor(text || 'AB', kind === 'initials'),
      text,
    };
    setItems((list) => [...list, item]);
    setSelectedId(item.id);
    if (kind !== 'signature' && !text) focusText.current = true;
  };
  const copyToEveryPage = (item: Item) => {
    const copies = Array.from({ length: pdf.pageCount }, (_, p) => p)
      .filter((p) => p !== item.page && !items.some((i) => i.page === p && i.kind === item.kind && i.text === item.text && Math.abs(i.cx - item.cx) < 0.01 && Math.abs(i.cy - item.cy) < 0.01))
      .map((p) => ({ ...item, id: newId(), page: p }));
    setItems((list) => [...list, ...copies]);
  };

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes) return;
    // An initials or text item still empty would otherwise just be left out
    if (items.some((i) => i.kind !== 'signature' && !i.text.trim())) return setError(t('ctl.sign.emptyItems'));
    const ready = items.filter((i) => looks.get(i.id));
    if (!ready.length) return setError(t('ctl.sign.needSignature'));
    setBusy(true);
    setError(null);
    try {
      // One set of bytes per distinct image, so a signature placed five times is stored once
      const bytesOf = new Map<string, Uint8Array>();
      const png = (url: string) => bytesOf.get(url) ?? (bytesOf.set(url, dataUrlBytes(url)), bytesOf.get(url)!);
      const out = await stampMany(
        pdf.bytes,
        ready.map((i) => ({ png: png(looks.get(i.id)!.url), page: i.page, cx: i.cx, cy: i.cy, widthFraction: i.w }))
      );
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
        <span className="slug block">{t('ctl.sign.placed')}</span>
        {items.length > 0 && (
          <ul className="border border-ink rounded-md divide-y divide-pencil-soft overflow-hidden">
            {items.map((item) => (
              <li key={item.id} className="flex items-stretch">
                <button
                  type="button"
                  aria-pressed={item.id === selectedId}
                  onClick={() => {
                    // A second click lets go of it
                    if (item.id === selectedId) return setSelectedId(null);
                    setSelectedId(item.id);
                    setPage(item.page + 1);
                  }}
                  className={`flex-1 min-h-[40px] px-3 text-left text-[15px] truncate transition-colors ${item.id === selectedId ? 'seg-on' : 'seg-off'}`}
                >
                  {t(KIND_LABEL[item.kind])}
                  {item.kind !== 'signature' ? `: ${item.text.trim() || t('ctl.sign.typeIt')}` : ''} <span className="text-graphite">· {t('ctl.pdf.pageN', { n: item.page + 1 })}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setItems((list) => list.filter((i) => i.id !== item.id));
                    if (selectedId === item.id) setSelectedId(null);
                  }}
                  aria-label={t('ctl.sign.removeItem', { name: `${t(KIND_LABEL[item.kind])}, ${t('ctl.pdf.pageN', { n: item.page + 1 })}` })}
                  title={t('ctl.sign.removeItem', { name: t(KIND_LABEL[item.kind]) })}
                  className="w-10 shrink-0 flex items-center justify-center seg-off border-l border-pencil-soft"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="btn-rule" onClick={() => add('signature')} disabled={!stamp}>
            <PenLine className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.sign.addSignature')}</span>
          </button>
          <button type="button" className="btn-rule" onClick={() => add('initials')}>
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.sign.addInitials')}</span>
          </button>
          <button type="button" className="btn-rule" onClick={() => add('date')}>
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.sign.addDate')}</span>
          </button>
          <button type="button" className="btn-rule" onClick={() => add('text')}>
            <TypeIcon className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.sign.addText')}</span>
          </button>
        </div>
        {pdf.pageCount > 1 && (
          <div className="space-y-1">
            <label htmlFor="sign-page" className="block text-[14px] text-graphite">
              {t('ctl.sign.page')}
            </label>
            <select
              id="sign-page"
              value={page}
              onChange={(e) => {
                const n = Number(e.target.value);
                setPage(n);
                // Only the page shown changes; an item on another page is let go, never moved
                if (selected && selected.page !== n - 1) setSelectedId(null);
              }}
              className={inputClass}
            >
              {Array.from({ length: pdf.pageCount }, (_, i) => (
                <option key={i} value={i + 1}>
                  {t('ctl.pdf.pageN', { n: i + 1 })}
                </option>
              ))}
            </select>
          </div>
        )}
        {selected && (
          <div className="space-y-3 p-3 bg-paper-stock border border-pencil rounded-md">
            {selected.kind !== 'signature' && (
              <div className="space-y-1">
                <label htmlFor="sign-item-text" className="block text-[14px] text-graphite">
                  {t('ctl.sign.itemText')}
                </label>
                <input id="sign-item-text" ref={textRef} type="text" value={selected.text} onChange={(e) => update(selected.id, { text: e.target.value })} className={inputClass} />
              </div>
            )}
            {pdf.pageCount > 1 && (
              <div className="space-y-1">
                <label htmlFor="sign-item-page" className="block text-[14px] text-graphite">
                  {t('ctl.sign.itemPage')}
                </label>
                <select
                  id="sign-item-page"
                  value={selected.page + 1}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    update(selected.id, { page: n - 1 });
                    setPage(n);
                  }}
                  className={inputClass}
                >
                  {Array.from({ length: pdf.pageCount }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {t('ctl.pdf.pageN', { n: i + 1 })}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <RangeField id="sign-w" label={t('ctl.sign.width')} value={Math.round(selected.w * 100)} min={3} max={80} unit="%" onChange={(v) => update(selected.id, { w: v / 100 })} />
            <PositionSliders
              place={{ cx: selected.cx, cy: selected.cy, w: selected.w, rotate: 0, opacity: 1 }}
              onChange={(pl) => update(selected.id, { cx: pl.cx, cy: pl.cy })}
              labels={{ x: t('ctl.text.horizontalPosition'), y: t('ctl.text.verticalPosition') }}
            />
            {pdf.pageCount > 1 && (
              <button type="button" className="btn-rule w-full" onClick={() => copyToEveryPage(selected)}>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>{t('ctl.sign.copyAll')}</span>
              </button>
            )}
          </div>
        )}
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
          {(canvas) => {
            const here = items.filter((i) => i.page === page - 1 && looks.get(i.id));
            return (
              <>
                {here.map((i) => (
                  <img
                    key={i.id}
                    src={looks.get(i.id)!.url}
                    alt=""
                    aria-hidden="true"
                    className={`absolute pointer-events-none ${i.id === selectedId ? 'outline outline-2 outline-offset-2 outline-[#0072b0]' : ''}`}
                    style={{ left: `${i.cx * 100}%`, top: `${i.cy * 100}%`, width: `${i.w * 100}%`, transform: 'translate(-50%, -50%)' }}
                  />
                ))}
                <DragFrameOverlay
                  canvasElement={canvas}
                  boxes={here.map((i) => {
                    const look = looks.get(i.id)!;
                    const w = i.w * canvas.width;
                    return { id: i.id, box: { cx: i.cx * canvas.width, cy: i.cy * canvas.height, w, h: (w / look.width) * look.height }, label: t(KIND_LABEL[i.kind]) };
                  })}
                  onMove={(id, x, y) => {
                    setSelectedId(id);
                    update(id, { cx: x / 100, cy: y / 100 });
                  }}
                  hint={t('ctl.sign.placeHint')}
                />
              </>
            );
          }}
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}
