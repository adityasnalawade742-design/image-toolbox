/**
 * Fix an AI cutout by hand: erase leftover background or restore missed hair and hands. One hook holds the brush, and
 * two pieces use it: the controls in the settings panel and the drawing surface over the preview. Shared by Remove,
 * Blur and Change Background.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Brush, Eraser, Undo2, RotateCcw, Check } from 'lucide-react';
import { useT } from './I18nContext';
import { DirtyBox, dabsAlong, paintDab, type BrushMode } from '../../lib/canvas/refineBrush';

const MAX_UNDO = 20;

export interface RefineTarget {
  /** The cutout being edited, at the photo's size */
  subject: HTMLCanvasElement;
  /** The photo at the same size, for restoring */
  original: CanvasImageSource;
  /** The AI's result, for starting over */
  pristine: HTMLCanvasElement;
}

interface Step {
  x: number;
  y: number;
  before: HTMLCanvasElement;
}

/**
 * `onPaint` redraws the preview while a stroke is under way (called at most once a frame); `onCommit` runs when a stroke
 * ends or is undone, for work too slow to do on every frame.
 */
export function useRefineBrush(target: RefineTarget | null, onPaint: () => void, onCommit?: () => void) {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<BrushMode>('erase');
  const [size, setSize] = useState(40);
  const [steps, setSteps] = useState(0);
  const [edited, setEdited] = useState(false);
  const undoRef = useRef<Step[]>([]);
  const frame = useRef(0);

  // A new photo or a new AI result starts fresh
  useEffect(() => {
    undoRef.current = [];
    setSteps(0);
    setEdited(false);
    setActive(false);
  }, [target?.subject]);

  const repaint = () => {
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      onPaint();
    });
  };
  const push = (step: Step) => {
    undoRef.current.push(step);
    if (undoRef.current.length > MAX_UNDO) undoRef.current.shift();
    setSteps(undoRef.current.length);
    setEdited(true);
  };
  const undo = () => {
    const step = undoRef.current.pop();
    if (!step || !target) return;
    const ctx = target.subject.getContext('2d')!;
    ctx.clearRect(step.x, step.y, step.before.width, step.before.height);
    ctx.drawImage(step.before, step.x, step.y);
    setSteps(undoRef.current.length);
    setEdited(undoRef.current.length > 0);
    onPaint();
    onCommit?.();
  };
  const reset = () => {
    if (!target) return;
    const ctx = target.subject.getContext('2d')!;
    ctx.clearRect(0, 0, target.subject.width, target.subject.height);
    ctx.drawImage(target.pristine, 0, 0);
    undoRef.current = [];
    setSteps(0);
    setEdited(false);
    onPaint();
    onCommit?.();
  };
  return { target, active, setActive, mode, setMode, size, setSize, steps, edited, undo, reset, repaint, push, onCommit };
}

export type RefineBrushState = ReturnType<typeof useRefineBrush>;

/** The brush controls, for the settings panel */
export function RefinePanel({ brush, disabled, showsRemoved }: { brush: RefineBrushState; disabled?: boolean; showsRemoved?: boolean }) {
  const t = useT();
  if (!brush.active) {
    return (
      <div className="space-y-2">
        <button type="button" onClick={() => brush.setActive(true)} disabled={disabled || !brush.target} className="btn-rule w-full disabled:opacity-50">
          <Brush className="w-4 h-4" aria-hidden="true" />
          <span>{t('ctl.refine.start')}</span>
        </button>
        {brush.edited && (
          <p className="text-[13px] text-graphite">{t('ctl.refine.edited')}</p>
        )}
      </div>
    );
  }
  const seg = (on: boolean) => `min-h-[40px] flex items-center justify-center gap-1.5 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.refine.tool')}>
        <button type="button" aria-pressed={brush.mode === 'erase'} onClick={() => brush.setMode('erase')} className={seg(brush.mode === 'erase')}>
          <Eraser className="w-4 h-4" aria-hidden="true" />
          {t('ctl.refine.erase')}
        </button>
        <button type="button" aria-pressed={brush.mode === 'restore'} onClick={() => brush.setMode('restore')} className={seg(brush.mode === 'restore')}>
          <Brush className="w-4 h-4" aria-hidden="true" />
          {t('ctl.refine.restore')}
        </button>
      </div>
      <label htmlFor="refine-size" className="block space-y-1.5">
        <span className="flex items-center justify-between">
          <span className="text-[14px] text-graphite">{t('ctl.refine.size')}</span>
          <span className="font-semibold text-ink" data-measure>{brush.size} px</span>
        </span>
        <input id="refine-size" type="range" min={6} max={150} value={brush.size} onChange={(e) => brush.setSize(parseInt(e.target.value, 10))} className="w-full" />
      </label>
      <p className="text-[13px] text-graphite">{brush.mode === 'erase' ? t('ctl.refine.eraseHint') : showsRemoved ? `${t('ctl.refine.restoreHint')} ${t('ctl.refine.faint')}` : t('ctl.refine.restoreHint')}</p>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={brush.undo} disabled={!brush.steps} className="btn-rule disabled:opacity-40">
          <Undo2 className="w-4 h-4" aria-hidden="true" />
          <span>{t('ctl.refine.undo')}</span>
        </button>
        <button type="button" onClick={brush.reset} disabled={!brush.edited && !brush.steps} className="btn-rule disabled:opacity-40">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          <span>{t('ctl.refine.reset')}</span>
        </button>
      </div>
      <button type="button" onClick={() => brush.setActive(false)} className="btn-rule w-full">
        <Check className="w-4 h-4" aria-hidden="true" />
        <span>{t('ctl.refine.done')}</span>
      </button>
    </div>
  );
}

/**
 * The drawing surface: placed over the preview canvas (`canvas`, shown at any size). The canvas shows the whole cutout,
 * or only `view`, a part of it in the cutout's pixels (a zoomed crop, as in the passport photo). Pointer only, like
 * any painting tool; the panel says what each mode does.
 */
export function RefineSurface({
  brush,
  canvas,
  view,
}: {
  brush: RefineBrushState;
  canvas: HTMLCanvasElement | null;
  view?: { x: number; y: number; w: number; h: number };
}) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const stroke = useRef<{ last: { x: number; y: number }; box: DirtyBox; snapshot: HTMLCanvasElement; r: number } | null>(null);
  const scratch = useRef<HTMLCanvasElement | null>(null);
  if (!brush.active || !brush.target || !canvas) return null;
  const { subject, original } = brush.target;

  const toImage = (e: React.PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const v = view ?? { x: 0, y: 0, w: subject.width, h: subject.height };
    const kx = v.w / rect.width;
    const ky = v.h / rect.height;
    const local = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    return { x: v.x + local.x * kx, y: v.y + local.y * ky, r: (brush.size / 2) * kx, local };
  };
  const dab = (x: number, y: number, r: number) => {
    scratch.current ??= document.createElement('canvas');
    paintDab(subject.getContext('2d')!, original, x, y, r, brush.mode, scratch.current);
    stroke.current!.box.add(x, y, r);
  };

  const down = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary || e.button > 0) return;
    e.preventDefault();
    // The brush, not whatever lies under it (such as dragging the photo to frame it)
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = toImage(e);
    // The whole cutout before the stroke; only the part the stroke touches is kept for undo
    const snapshot = document.createElement('canvas');
    snapshot.width = subject.width;
    snapshot.height = subject.height;
    snapshot.getContext('2d')!.drawImage(subject, 0, 0);
    stroke.current = { last: { x: p.x, y: p.y }, box: new DirtyBox(), snapshot, r: p.r };
    dab(p.x, p.y, p.r);
    brush.repaint();
  };
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const p = toImage(e);
    setCursor(p.local);
    const s = stroke.current;
    if (!s || !e.isPrimary) return;
    for (const q of dabsAlong(s.last, p, p.r)) dab(q.x, q.y, p.r);
    s.last = { x: p.x, y: p.y };
    brush.repaint();
  };
  const up = () => {
    const s = stroke.current;
    stroke.current = null;
    if (!s) return;
    const box = s.box.clamp(subject.width, subject.height);
    if (box) {
      const before = document.createElement('canvas');
      before.width = box.w;
      before.height = box.h;
      before.getContext('2d')!.drawImage(s.snapshot, box.x, box.y, box.w, box.h, 0, 0, box.w, box.h);
      brush.push({ x: box.x, y: box.y, before });
    }
    brush.onCommit?.();
  };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-10 cursor-none"
      style={{ touchAction: 'none' }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={(e) => {
        e.stopPropagation();
        up();
      }}
      onPointerCancel={up}
      onPointerLeave={() => setCursor(null)}
    >
      {cursor && (
        <div
          className="absolute rounded-full pointer-events-none border-2 border-white"
          style={{
            left: cursor.x - brush.size / 2,
            top: cursor.y - brush.size / 2,
            width: brush.size,
            height: brush.size,
            boxShadow: '0 0 0 1px rgba(0,0,0,.7), inset 0 0 0 1px rgba(0,0,0,.7)',
            background: brush.mode === 'erase' ? 'rgba(220,40,40,.18)' : 'rgba(40,160,80,.18)',
          }}
        />
      )}
    </div>
  );
}
