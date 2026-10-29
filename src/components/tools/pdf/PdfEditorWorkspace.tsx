import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Eraser, Highlighter, ImagePlus, Link2, MousePointer2, PenLine, Redo2, Shapes, SquareX, Trash2, Type, Undo2, type LucideIcon } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { applyEdits, normalizeUrl, type BoxItem, type BoxKind, type EditItem, type PageRasterizer, type TextFont } from '../../../lib/pdf/editOps';
import { loadSiteFont } from '../../../lib/pdf/unicodeFont';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { PagePreview } from './PagePreview';
import { EditorOverlay, bounds, moveBy, toolFor, type Draft, type EditorTool, type MarkStyle, type ShapeKind } from './EditorOverlay';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const inputClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

const TOOLS: { tool: EditorTool; icon: LucideIcon }[] = [
  { tool: 'select', icon: MousePointer2 },
  { tool: 'text', icon: Type },
  { tool: 'image', icon: ImagePlus },
  { tool: 'draw', icon: PenLine },
  { tool: 'highlight', icon: Highlighter },
  { tool: 'shape', icon: Shapes },
  { tool: 'whiteout', icon: Eraser },
  { tool: 'redact', icon: SquareX },
  { tool: 'link', icon: Link2 },
];

const INK = [
  ['black', '#141414'],
  ['blue', '#1a3d9c'],
  ['red', '#c8102e'],
  ['green', '#1e7b34'],
] as const;
const MARKERS = [
  ['yellow', '#ffe14d'],
  ['green', '#7ee08a'],
  ['pink', '#ff8fd0'],
  ['blue', '#7fcbff'],
] as const;

interface Style {
  textColor: string;
  textSize: number;
  font: TextFont;
  bold: boolean;
  inkColor: string;
  inkWidth: number;
  mark: MarkStyle;
  markColor: string;
  shape: ShapeKind;
  shapeColor: string;
  shapeWidth: number;
  shapeFill: boolean;
  whiteColor: string;
}
const DEFAULT_STYLE: Style = {
  textColor: '#141414',
  textSize: 14,
  font: 'sans',
  bold: false,
  inkColor: '#1a3d9c',
  inkWidth: 2,
  mark: 'highlight',
  markColor: '#ffe14d',
  shape: 'rect',
  shapeColor: '#c8102e',
  shapeWidth: 2,
  shapeFill: false,
  whiteColor: '#ffffff',
};

let seq = 0;
const newId = () => `e${Date.now().toString(36)}${(seq++).toString(36)}`;

/** Colour buttons plus a custom colour picker */
type ColorName = 'black' | 'blue' | 'red' | 'green' | 'yellow' | 'pink' | 'white';

function Swatches({ label, value, colors, onChange }: { label: string; value: string; colors: readonly (readonly [ColorName, string])[]; onChange: (c: string) => void }) {
  const t = useT();
  const id = React.useId();
  return (
    <div className="space-y-2">
      <span className="slug block" id={id}>
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-labelledby={id}>
        {colors.map(([name, hex]) => (
          <button
            key={name}
            type="button"
            aria-pressed={value.toLowerCase() === hex}
            aria-label={t(`ctl.edit.color.${name}`)}
            title={t(`ctl.edit.color.${name}`)}
            onClick={() => onChange(hex)}
            className={`w-10 h-10 rounded-full border ${value.toLowerCase() === hex ? 'border-ink ring-2 ring-ink ring-offset-2 ring-offset-paper-bright' : 'border-pencil'}`}
            style={{ background: hex }}
          />
        ))}
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} aria-label={t('ctl.edit.customColor')} title={t('ctl.edit.customColor')} className="w-10 h-10 border border-pencil bg-paper-bright cursor-pointer" />
      </div>
    </div>
  );
}

/** Read an image for placing on a page: any format the site opens, at most 2000 px, as PNG (or JPEG for photos) */
async function readImage(file: File) {
  const loaded = await loadImageFile(file);
  try {
    const scale = Math.min(1, 2000 / Math.max(loaded.width, loaded.height));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(loaded.width * scale));
    c.height = Math.max(1, Math.round(loaded.height * scale));
    c.getContext('2d')!.drawImage(loaded.img, 0, 0, c.width, c.height);
    const jpeg = /jpe?g/i.test(file.type) || /\.jpe?g$/i.test(file.name);
    return { url: c.toDataURL(jpeg ? 'image/jpeg' : 'image/png', 0.92), width: c.width, height: c.height };
  } finally {
    URL.revokeObjectURL(loaded.url);
  }
}

export function PdfEditorWorkspace({ startTool = 'text' }: { startTool?: EditorTool }) {
  const t = useT();
  const pdf = usePdfDocument();
  const [tool, setTool] = useState<EditorTool>(startTool);
  const [style, setStyle] = useState<Style>(DEFAULT_STYLE);
  const [items, setItems] = useState<EditItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<{ width: number; height: number } | null>(null);
  const [history, setHistory] = useState({ undo: 0, redo: 0 });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [urlDraft, setUrlDraft] = useState('');
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const past = useRef<EditItem[][]>([]);
  const future = useRef<EditItem[][]>([]);
  const lastKey = useRef<{ key: string; at: number } | null>(null);
  const dragBase = useRef<EditItem[] | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const imageAt = useRef<{ x: number; y: number } | null>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const focusText = useRef(false);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  // A new file starts a new edit
  useEffect(() => {
    setItems([]);
    setSelectedId(null);
    setPage(1);
    past.current = [];
    future.current = [];
    setHistory({ undo: 0, redo: 0 });
    setStatus('');
    setError(null);
  }, [pdf.doc]);

  useEffect(() => {
    let cancelled = false;
    setPageSize(null);
    if (!pdf.doc) return;
    pdf.doc.getPage(page).then((p) => {
      const v = p.getViewport({ scale: 1 });
      if (!cancelled) setPageSize({ width: v.width, height: v.height });
    });
    return () => {
      cancelled = true;
    };
  }, [pdf.doc, page]);

  const syncHistory = () => setHistory({ undo: past.current.length, redo: future.current.length });

  /** Record a change as one undo step; changes with the same key in quick succession (typing, sliders) share one */
  const commit = (next: EditItem[], key?: string) => {
    const now = Date.now();
    const merge = key && lastKey.current?.key === key && now - lastKey.current.at < 1500;
    if (!merge) {
      past.current.push(itemsRef.current);
      if (past.current.length > 100) past.current.shift();
    }
    lastKey.current = key ? { key, at: now } : null;
    future.current = [];
    setItems(next);
    syncHistory();
  };
  const undo = () => {
    const prev = past.current.pop();
    if (!prev) return;
    future.current.push(itemsRef.current);
    lastKey.current = null;
    setItems(prev);
    syncHistory();
  };
  const redo = () => {
    const next = future.current.pop();
    if (!next) return;
    past.current.push(itemsRef.current);
    lastKey.current = null;
    setItems(next);
    syncHistory();
  };
  const select = (id: string | null) => {
    // An empty text box left behind is dropped
    const prev = itemsRef.current.find((i) => i.id === selectedId);
    if (prev && prev.id !== id && prev.kind === 'text' && !prev.text.trim()) setItems((list) => list.filter((i) => i.id !== prev.id));
    setSelectedId(id);
    const item = itemsRef.current.find((i) => i.id === id);
    if (item?.kind === 'link') setUrlDraft(item.url);
  };
  const update = (id: string, patch: Partial<EditItem>, key: string) => commit(itemsRef.current.map((i) => (i.id === id ? ({ ...i, ...patch } as EditItem) : i)), key);
  const remove = (id: string) => {
    commit(itemsRef.current.filter((i) => i.id !== id));
    setSelectedId(null);
  };
  /** Text, images and links stay selected so they can be filled in; marks don't, so the style controls set the next one */
  const add = (item: EditItem, keepSelected = item.kind === 'text' || item.kind === 'image' || item.kind === 'link') => {
    // Text boxes left empty are dropped when something new is added
    commit([...itemsRef.current.filter((i) => i.kind !== 'text' || i.text.trim()), item]);
    setSelectedId(keepSelected ? item.id : null);
    if (item.kind === 'link') setUrlDraft('');
    setError(null);
    setStatus('');
  };

  const selected = items.find((i) => i.id === selectedId) ?? null;
  const pageItems = items.filter((i) => i.page === page - 1);

  useEffect(() => {
    if (focusText.current && selected?.kind === 'text') {
      focusText.current = false;
      textArea.current?.focus();
    }
  });

  // Keyboard: delete, undo/redo and nudging work whenever focus isn't in a field
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable="true"]')) return;
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        return e.shiftKey ? redo() : undo();
      }
      if (mod && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        return redo();
      }
      const sel = itemsRef.current.find((i) => i.id === selectedId);
      if (!sel) return;
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        return remove(sel.id);
      }
      const step = e.shiftKey ? 10 : 1;
      const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
      // Arrows nudge only after working on the page, so they still scroll everywhere else
      if (d && (el === document.body || el.closest('[data-pdf-editor]'))) {
        e.preventDefault();
        commit(
          itemsRef.current.map((i) => (i.id === sel.id ? moveBy(i, d[0], d[1]) : i)),
          `nudge:${sel.id}`
        );
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const p0 = page - 1;
  const box = (kind: BoxKind, r: { x: number; y: number; w: number; h: number }): BoxItem => {
    const color =
      kind === 'highlight' || kind === 'underline' || kind === 'strike' ? style.markColor : kind === 'whiteout' ? style.whiteColor : kind === 'rect' || kind === 'ellipse' ? style.shapeColor : '#000000';
    return { id: newId(), page: p0, kind, ...r, color, width: style.shapeWidth, fill: style.shapeFill, url: '' };
  };
  /** The kind of box the current tool draws, and its size when the page is only tapped */
  const boxKind = (): { kind: BoxKind; w: number; h: number } | null => {
    if (tool === 'highlight') return { kind: style.mark, w: 120, h: 16 };
    if (tool === 'whiteout') return { kind: 'whiteout', w: 120, h: 24 };
    if (tool === 'redact') return { kind: 'redact', w: 120, h: 20 };
    if (tool === 'link') return { kind: 'link', w: 120, h: 20 };
    if (tool === 'shape' && (style.shape === 'rect' || style.shape === 'ellipse')) return { kind: style.shape, w: 100, h: 70 };
    return null;
  };
  const clampToPage = (r: { x: number; y: number; w: number; h: number }) => {
    const W = pageSize?.width ?? 600;
    const H = pageSize?.height ?? 800;
    const w = Math.min(r.w, W);
    const h = Math.min(r.h, H);
    return { x: Math.max(0, Math.min(W - w, r.x)), y: Math.max(0, Math.min(H - h, r.y)), w, h };
  };
  const draft: Draft = {
    box: (rect, at) => {
      const k = boxKind();
      if (!k) return null;
      return box(k.kind, clampToPage(rect && rect.w >= 2 && rect.h >= 2 ? rect : { x: at.x - k.w / 2, y: at.y - k.h / 2, w: k.w, h: k.h }));
    },
    line: (from, to) => ({ id: newId(), page: p0, kind: style.shape === 'arrow' ? 'arrow' : 'line', x1: from.x, y1: from.y, x2: to.x, y2: to.y, color: style.shapeColor, width: style.shapeWidth }),
    ink: (points) => ({ id: newId(), page: p0, kind: 'ink', points, color: style.inkColor, width: style.inkWidth }),
    text: (at) => {
      focusText.current = true;
      return { id: newId(), page: p0, kind: 'text', x: at.x, y: Math.max(0, at.y - style.textSize * 0.6), text: '', size: style.textSize, color: style.textColor, font: style.font, bold: style.bold };
    },
    image: (at) => {
      imageAt.current = at;
      imageInput.current?.click();
    },
  };

  const addAtCentre = () => {
    if (!pageSize) return;
    const at = { x: pageSize.width / 2, y: pageSize.height / 2 };
    if (tool === 'text') return add({ ...draft.text({ x: at.x - 60, y: at.y }) });
    if (tool === 'image') return draft.image(at);
    // Selected, so the position sliders can move it
    if (tool === 'shape' && (style.shape === 'line' || style.shape === 'arrow')) return add(draft.line({ x: at.x - 60, y: at.y }, { x: at.x + 60, y: at.y })!, true);
    const item = draft.box(null, at);
    if (item) add(item, true);
  };

  const placeImage = async (file: File) => {
    if (!pageSize) return;
    try {
      const img = await readImage(file);
      const at = imageAt.current ?? { x: pageSize.width / 2, y: pageSize.height / 2 };
      imageAt.current = null;
      // Natural size at 96 DPI, but no wider than 40% of the page
      let w = Math.min(img.width * 0.75, pageSize.width * 0.4);
      let h = (w / img.width) * img.height;
      if (h > pageSize.height * 0.6) {
        h = pageSize.height * 0.6;
        w = (h / img.height) * img.width;
      }
      add({ id: newId(), page: p0, kind: 'image', ...clampToPage({ x: at.x - w / 2, y: at.y - h / 2, w, h }), url: img.url });
    } catch {
      setError(t('ws.errDecode'));
    }
  };

  // While a drag is going on, items change without undo steps; the step is recorded when it ends
  const onOverlayChange = (id: string, item: EditItem, done: boolean) => {
    if (!done) {
      dragBase.current ??= itemsRef.current;
      setItems((list) => list.map((i) => (i.id === id ? item : i)));
      return;
    }
    if (dragBase.current) {
      past.current.push(dragBase.current);
      future.current = [];
      dragBase.current = null;
      lastKey.current = null;
      syncHistory();
    }
  };

  const rasterize: PageRasterizer = async (index, boxes) => {
    const p = await pdf.doc!.getPage(index + 1);
    const base = p.getViewport({ scale: 1 });
    // About 200 DPI, within what every browser can draw
    const scale = Math.min(200 / 72, Math.sqrt(16_000_000 / (base.width * base.height)));
    const viewport = p.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width);
    canvas.height = Math.round(viewport.height);
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await p.render({ canvas, canvasContext: ctx, viewport }).promise;
    p.cleanup();
    ctx.fillStyle = '#000000';
    for (const b of boxes) ctx.fillRect(b.x * scale, b.y * scale, b.w * scale, b.h * scale);
    const blob = await new Promise<Blob>((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('Page could not be drawn'))), 'image/jpeg', 0.92));
    canvas.width = canvas.height = 0;
    return { bytes: new Uint8Array(await blob.arrayBuffer()), type: 'jpg' };
  };

  const run = async () => {
    if (!pdf.bytes) return;
    const list = itemsRef.current.filter((i) => i.kind !== 'text' || i.text.trim());
    if (!list.length) return setError(t('ctl.edit.needEdit'));
    const badLink = list.find((i) => i.kind === 'link' && !normalizeUrl(i.url));
    if (badLink) {
      setPage(badLink.page + 1);
      setTool('link');
      select(badLink.id);
      return setError(t('ctl.edit.needLink'));
    }
    const redacting = list.some((i) => i.kind === 'redact');
    setBusy(true);
    setError(null);
    setStatus(redacting ? t('ctl.edit.redacting') : '');
    try {
      const out = await applyEdits(pdf.bytes, list, { loadFont: loadSiteFont, rasterize });
      const name = pdfName(pdf.file?.name, redacting ? 'redacted' : 'edited');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setStatus('');
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  // What the style controls edit: the selected item's kind, or the tool's next item
  const editing = selected ? toolFor(selected.kind) : tool;
  const setStyleAnd = (patch: Partial<Style>, itemPatch?: Partial<EditItem>, key?: string) => {
    setStyle((s) => ({ ...s, ...patch }));
    if (selected && itemPatch) update(selected.id, itemPatch, `${key}:${selected.id}`);
  };

  const textControls = (
    <>
      {selected?.kind === 'text' && (
        <div className="space-y-1">
          <label htmlFor="edit-text" className="block text-[14px] text-graphite">
            {t('ctl.edit.text')}
          </label>
          <textarea
            id="edit-text"
            ref={textArea}
            rows={3}
            value={selected.text}
            placeholder={t('ctl.edit.textPlaceholder')}
            onChange={(e) => update(selected.id, { text: e.target.value }, `text:${selected.id}`)}
            className={`${inputClass} py-2 resize-y`}
          />
        </div>
      )}
      <Segmented
        label={t('ctl.edit.font')}
        value={selected?.kind === 'text' ? selected.font : style.font}
        onChange={(font) => setStyleAnd({ font }, { font }, 'font')}
        options={(['sans', 'serif', 'mono'] as const).map((f) => ({ value: f, label: t(`ctl.edit.font.${f}`) }))}
      />
      <RangeField
        id="edit-size"
        label={t('ctl.edit.fontSize')}
        value={selected?.kind === 'text' ? selected.size : style.textSize}
        min={6}
        max={72}
        unit=" pt"
        onChange={(size) => setStyleAnd({ textSize: size }, { size }, 'size')}
      />
      <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={selected?.kind === 'text' ? selected.bold : style.bold} onChange={(e) => setStyleAnd({ bold: e.target.checked }, { bold: e.target.checked }, 'bold')} />
        <span className="text-ink">{t('ctl.edit.bold')}</span>
      </label>
      <Swatches label={t('ctl.edit.color')} value={selected?.kind === 'text' ? selected.color : style.textColor} colors={INK} onChange={(c) => setStyleAnd({ textColor: c }, { color: c }, 'color')} />
    </>
  );

  const selColor = selected && 'color' in selected ? selected.color : null;
  const selWidth = selected && 'width' in selected ? selected.width : null;
  const controls: Record<EditorTool, React.ReactNode> = {
    select: null,
    text: textControls,
    image: null,
    draw: (
      <>
        <Swatches label={t('ctl.edit.color')} value={selColor ?? style.inkColor} colors={INK} onChange={(c) => setStyleAnd({ inkColor: c }, { color: c }, 'color')} />
        <RangeField id="edit-ink" label={t('ctl.edit.thickness')} value={selWidth ?? style.inkWidth} min={1} max={12} unit=" pt" onChange={(w) => setStyleAnd({ inkWidth: w }, { width: w }, 'width')} />
      </>
    ),
    highlight: (
      <>
        <Segmented
          label={t('ctl.edit.markStyle')}
          value={selected && (selected.kind === 'highlight' || selected.kind === 'underline' || selected.kind === 'strike') ? selected.kind : style.mark}
          onChange={(mark) => setStyleAnd({ mark }, { kind: mark } as Partial<EditItem>, 'mark')}
          options={(['highlight', 'underline', 'strike'] as const).map((m) => ({ value: m, label: t(`ctl.edit.kind.${m}`) }))}
        />
        <Swatches
          label={t('ctl.edit.color')}
          value={selColor ?? style.markColor}
          colors={(selected?.kind ?? style.mark) === 'highlight' ? MARKERS : INK}
          onChange={(c) => setStyleAnd({ markColor: c }, { color: c }, 'color')}
        />
      </>
    ),
    shape: (
      <>
        {!selected && (
          <Segmented
            label={t('ctl.edit.shape')}
            value={style.shape}
            cols={2}
            onChange={(shape) => setStyle((s) => ({ ...s, shape }))}
            options={(['rect', 'ellipse', 'line', 'arrow'] as const).map((s) => ({ value: s, label: t(`ctl.edit.shape.${s}`) }))}
          />
        )}
        <Swatches label={t('ctl.edit.color')} value={selColor ?? style.shapeColor} colors={INK} onChange={(c) => setStyleAnd({ shapeColor: c }, { color: c }, 'color')} />
        {!(selected && 'fill' in selected && selected.fill) && (
          <RangeField id="edit-stroke" label={t('ctl.edit.thickness')} value={selWidth ?? style.shapeWidth} min={1} max={12} unit=" pt" onChange={(w) => setStyleAnd({ shapeWidth: w }, { width: w }, 'width')} />
        )}
        {(selected ? selected.kind === 'rect' || selected.kind === 'ellipse' : style.shape === 'rect' || style.shape === 'ellipse') && (
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer">
            <input
              type="checkbox"
              checked={selected && 'fill' in selected ? selected.fill : style.shapeFill}
              onChange={(e) => setStyleAnd({ shapeFill: e.target.checked }, { fill: e.target.checked }, 'fill')}
            />
            <span className="text-ink">{t('ctl.edit.fill')}</span>
          </label>
        )}
      </>
    ),
    whiteout: (
      <>
        <Swatches label={t('ctl.edit.color')} value={selColor ?? style.whiteColor} colors={[['white', '#ffffff']]} onChange={(c) => setStyleAnd({ whiteColor: c }, { color: c }, 'color')} />
        <p className="text-[13px] text-graphite">{t('ctl.edit.whiteoutNote')}</p>
      </>
    ),
    redact: <p className="text-[13px] text-graphite">{t('ctl.edit.redactNote')}</p>,
    link:
      selected?.kind === 'link' ? (
        <div className="space-y-1">
          <label htmlFor="edit-url" className="block text-[14px] text-graphite">
            {t('ctl.edit.url')}
          </label>
          <input
            id="edit-url"
            type="url"
            inputMode="url"
            autoComplete="url"
            value={urlDraft}
            placeholder="example.com"
            onChange={(e) => {
              setUrlDraft(e.target.value);
              update(selected.id, { url: e.target.value }, `url:${selected.id}`);
            }}
            aria-invalid={!!urlDraft.trim() && !normalizeUrl(urlDraft)}
            aria-describedby="edit-url-hint"
            className={inputClass}
          />
          {!!urlDraft.trim() && !normalizeUrl(urlDraft) && (
            <p id="edit-url-hint" className="text-[13px] text-accent-red">
              {t('ctl.edit.urlInvalid')}
            </p>
          )}
        </div>
      ) : null,
  };

  // Keyboard route to placing: position and size of the selected item
  const b = selected && pageSize ? bounds(selected) : null;
  const positionControls = selected && b && pageSize && (
    <div className="space-y-3">
      <RangeField
        id="edit-x"
        label={t('ctl.text.horizontalPosition')}
        value={Math.round(((b.x + b.w / 2) / pageSize.width) * 100)}
        min={0}
        max={100}
        unit="%"
        onChange={(v) => update(selected.id, moveBy(selected, (v / 100) * pageSize.width - (b.x + b.w / 2), 0), `x:${selected.id}`)}
      />
      <RangeField
        id="edit-y"
        label={t('ctl.text.verticalPosition')}
        value={Math.round(((b.y + b.h / 2) / pageSize.height) * 100)}
        min={0}
        max={100}
        unit="%"
        onChange={(v) => update(selected.id, moveBy(selected, 0, (v / 100) * pageSize.height - (b.y + b.h / 2)), `y:${selected.id}`)}
      />
      {'w' in selected && (
        <RangeField
          id="edit-w"
          label={t('ctl.edit.width')}
          value={Math.max(1, Math.round((selected.w / pageSize.width) * 100))}
          min={1}
          max={100}
          unit="%"
          onChange={(v) => {
            const w = (v / 100) * pageSize.width;
            update(selected.id, selected.kind === 'image' ? { w, h: (w / selected.w) * selected.h } : { w }, `w:${selected.id}`);
          }}
        />
      )}
    </div>
  );

  const kindLabel = (i: EditItem) => {
    const name = t(`ctl.edit.kind.${i.kind}`);
    return i.kind === 'text' && i.text.trim() ? `${name}: ${i.text.trim().slice(0, 24)}` : name;
  };

  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block" id="edit-tools">
          {t('ctl.edit.tools')}
        </span>
        <div className="grid grid-cols-3 border border-ink gap-px bg-ink" role="group" aria-labelledby="edit-tools">
          {TOOLS.map(({ tool: id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-pressed={tool === id}
              onClick={() => {
                setTool(id);
                if (selected && id !== 'select' && toolFor(selected.kind) !== id) select(null);
              }}
              className={`min-h-[56px] px-1 flex flex-col items-center justify-center gap-1 text-[13px] font-semibold transition-colors ${tool === id ? 'seg-on' : 'seg-off'}`}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              {t(`ctl.edit.tool.${id}`)}
            </button>
          ))}
        </div>
        <p className="text-[13px] text-graphite">{t(`ctl.edit.hint.${tool}`)}</p>
      </div>

      {controls[editing]}

      {tool === 'image' && !selected && (
        <button type="button" className="btn-rule w-full" onClick={() => draft.image({ x: (pageSize?.width ?? 0) / 2, y: (pageSize?.height ?? 0) / 2 })}>
          {t('ctl.edit.chooseImage')}
        </button>
      )}
      {tool !== 'select' && tool !== 'draw' && tool !== 'image' && (
        <button type="button" className="btn-rule w-full" onClick={addAtCentre}>
          {t('ctl.edit.addCentre')}
        </button>
      )}

      <div className="pt-4 border-t border-ink space-y-3">
        <div className="space-y-1">
          <label htmlFor="edit-item" className="block text-[14px] text-graphite">
            {t('ctl.edit.item')}
          </label>
          <select id="edit-item" value={selected?.page === p0 ? selected.id : ''} onChange={(e) => select(e.target.value || null)} className={inputClass} disabled={!pageItems.length}>
            <option value="">{pageItems.length ? t('ctl.edit.noItem') : t('ctl.edit.nothingYet')}</option>
            {pageItems.map((i, n) => (
              <option key={i.id} value={i.id}>
                {`${n + 1}. ${kindLabel(i)}`}
              </option>
            ))}
          </select>
        </div>
        {positionControls}
        <div className="grid grid-cols-3 gap-2">
          <button type="button" className="btn-rule flex-col gap-1 min-h-[56px] px-1 text-[13px] leading-tight text-center disabled:opacity-50" onClick={undo} disabled={!history.undo}>
            <Undo2 className="w-4 h-4" aria-hidden="true" />
            {t('ctl.edit.undo')}
          </button>
          <button type="button" className="btn-rule flex-col gap-1 min-h-[56px] px-1 text-[13px] leading-tight text-center disabled:opacity-50" onClick={redo} disabled={!history.redo}>
            <Redo2 className="w-4 h-4" aria-hidden="true" />
            {t('ctl.edit.redo')}
          </button>
          <button type="button" className="btn-rule flex-col gap-1 min-h-[56px] px-1 text-[13px] leading-tight text-center disabled:opacity-50" onClick={() => selected && remove(selected.id)} disabled={!selected}>
            <Trash2 className="w-4 h-4" aria-hidden="true" />
            {t('ctl.edit.delete')}
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <input
        ref={imageInput}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) placeImage(f);
          e.target.value = '';
        }}
      />
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? status || t('ctl.pdf.working') : status}
        error={error}
      >
        {pdf.pageCount > 1 && (
          <div className="flex items-center gap-2">
            <button type="button" className="btn-rule w-11 px-0" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1} aria-label={t('ctl.edit.prevPage')}>
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <label htmlFor="edit-page" className="sr-only">
              {t('ctl.sign.page')}
            </label>
            <select id="edit-page" value={page} onChange={(e) => setPage(Number(e.target.value))} className={`${inputClass} flex-1`}>
              {Array.from({ length: pdf.pageCount }, (_, i) => {
                const n = items.filter((it) => it.page === i).length;
                return (
                  <option key={i} value={i + 1}>
                    {t('ctl.pdf.pageN', { n: i + 1 })}
                    {n ? ` · ${t('ctl.edit.onPage', { n })}` : ''}
                  </option>
                );
              })}
            </select>
            <button type="button" className="btn-rule w-11 px-0" onClick={() => setPage((p) => Math.min(pdf.pageCount, p + 1))} disabled={page >= pdf.pageCount} aria-label={t('ctl.edit.nextPage')}>
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        )}
        <div data-pdf-editor>
          <PagePreview doc={pdf.doc} page={page}>
            {() =>
              pageSize && (
                <EditorOverlay
                  size={pageSize}
                  items={pageItems}
                  tool={tool}
                  lineShape={style.shape === 'line' || style.shape === 'arrow'}
                  selectedId={selectedId}
                  onSelect={select}
                  onChange={onOverlayChange}
                  onCreate={(item) => add(item)}
                  draft={draft}
                  label={t('ctl.edit.canvasLabel', { n: page })}
                />
              )
            }
          </PagePreview>
        </div>
      </PdfToolLayout>
    </>
  );
}
