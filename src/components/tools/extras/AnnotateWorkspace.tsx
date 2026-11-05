import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Circle, Hash, Highlighter, Minus, MousePointer2, PenLine, Redo2, Square, Trash2, Type, Undo2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { arrowHead, arrowShaftEnd, bounds, defaultSize, moved, type Shape, type Tool } from '../../../lib/canvas/annotate';
import { FullSizeView, blobImage, urlImage } from '../../shared/MediaViewer';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';

type Mode = Tool | 'select';
const COLORS = ['#e5262b', '#f5b800', '#1f9d55', '#1f6fe0', '#111111', '#ffffff'];
const WEIGHTS = { fine: 0.6, medium: 1, bold: 1.8 } as const;
const FONT = 'Barlow, system-ui, -apple-system, "Segoe UI", sans-serif';
const light = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 160;
};

/** Draw shapes onto a canvas the size of the picture (the download); must match the SVG below */
function drawShapes(ctx: CanvasRenderingContext2D, shapes: Shape[]) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const s of shapes) {
    ctx.save();
    ctx.strokeStyle = ctx.fillStyle = s.color;
    ctx.lineWidth = s.size;
    if (s.tool === 'highlight') {
      ctx.globalAlpha = 0.38;
      ctx.globalCompositeOperation = 'multiply';
      ctx.lineWidth = s.size * 5;
    }
    if (s.tool === 'pen' || s.tool === 'highlight') {
      const p = s.points ?? [];
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1]);
      ctx.stroke();
    } else if (s.tool === 'line' || s.tool === 'arrow') {
      const [ex, ey] = s.tool === 'arrow' ? arrowShaftEnd(s) : [s.x2, s.y2];
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      if (s.tool === 'arrow') {
        const h = arrowHead(s);
        ctx.beginPath();
        ctx.moveTo(h[0][0], h[0][1]);
        ctx.lineTo(h[1][0], h[1][1]);
        ctx.lineTo(h[2][0], h[2][1]);
        ctx.closePath();
        ctx.fill();
      }
    } else if (s.tool === 'rect') {
      ctx.strokeRect(Math.min(s.x1, s.x2), Math.min(s.y1, s.y2), Math.abs(s.x2 - s.x1), Math.abs(s.y2 - s.y1));
    } else if (s.tool === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse((s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2, Math.abs(s.x2 - s.x1) / 2, Math.abs(s.y2 - s.y1) / 2, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else if (s.tool === 'number') {
      ctx.beginPath();
      ctx.arc(s.x1, s.y1, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = light(s.color) ? '#111111' : '#ffffff';
      ctx.font = `700 ${s.size * 1.15}px ${FONT}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(s.n), s.x1, s.y1 + s.size * 0.05);
    } else if (s.tool === 'text') {
      ctx.font = `700 ${s.size}px ${FONT}`;
      ctx.textBaseline = 'top';
      ctx.lineWidth = s.size * 0.16;
      ctx.strokeStyle = light(s.color) ? '#111111' : '#ffffff';
      (s.text || '').split('\n').forEach((line, i) => {
        ctx.strokeText(line, s.x1, s.y1 + i * s.size * 1.25);
        ctx.fillText(line, s.x1, s.y1 + i * s.size * 1.25);
      });
    }
    ctx.restore();
  }
}

function ShapeSvg({ s, selected }: { s: Shape; selected: boolean }) {
  const common = { stroke: s.color, strokeWidth: s.size, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  let el: React.ReactNode = null;
  if (s.tool === 'pen' || s.tool === 'highlight') {
    const p = s.points ?? [];
    const d = p.reduce((acc, v, i) => (i % 2 ? acc : acc + `${i ? 'L' : 'M'}${v} ${p[i + 1]} `), '');
    el = <path d={d} {...common} {...(s.tool === 'highlight' ? { strokeWidth: s.size * 5, opacity: 0.38, style: { mixBlendMode: 'multiply' as const } } : {})} />;
  } else if (s.tool === 'line' || s.tool === 'arrow') {
    const [ex, ey] = s.tool === 'arrow' ? arrowShaftEnd(s) : [s.x2, s.y2];
    el = (
      <>
        <line x1={s.x1} y1={s.y1} x2={ex} y2={ey} {...common} />
        {s.tool === 'arrow' && <polygon points={arrowHead(s).map((p) => p.join(',')).join(' ')} fill={s.color} />}
      </>
    );
  } else if (s.tool === 'rect') {
    el = <rect x={Math.min(s.x1, s.x2)} y={Math.min(s.y1, s.y2)} width={Math.abs(s.x2 - s.x1)} height={Math.abs(s.y2 - s.y1)} {...common} strokeLinecap="butt" strokeLinejoin="miter" />;
  } else if (s.tool === 'ellipse') {
    el = <ellipse cx={(s.x1 + s.x2) / 2} cy={(s.y1 + s.y2) / 2} rx={Math.abs(s.x2 - s.x1) / 2} ry={Math.abs(s.y2 - s.y1) / 2} {...common} />;
  } else if (s.tool === 'number') {
    el = (
      <>
        <circle cx={s.x1} cy={s.y1} r={s.size} fill={s.color} />
        <text x={s.x1} y={s.y1 + s.size * 0.05} fill={light(s.color) ? '#111111' : '#ffffff'} fontSize={s.size * 1.15} fontWeight={700} fontFamily={FONT} textAnchor="middle" dominantBaseline="central">
          {s.n}
        </text>
      </>
    );
  } else if (s.tool === 'text') {
    el = (s.text || '').split('\n').map((line, i) => (
      <text key={i} x={s.x1} y={s.y1 + i * s.size * 1.25} fill={s.color} stroke={light(s.color) ? '#111111' : '#ffffff'} strokeWidth={s.size * 0.16} paintOrder="stroke" fontSize={s.size} fontWeight={700} fontFamily={FONT} dominantBaseline="text-before-edge">
        {line}
      </text>
    ));
  }
  const b = bounds(s);
  return (
    <g>
      {el}
      {selected && <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke="#1f6fe0" strokeWidth={Math.max(1, s.size / 3)} strokeDasharray={`${s.size * 2} ${s.size}`} />}
    </g>
  );
}

export function AnnotateWorkspace() {
  const t = useT();
  const [mode, setMode] = useState<Mode>('arrow');
  const [color, setColor] = useState(COLORS[0]);
  const [weight, setWeight] = useState<keyof typeof WEIGHTS>('medium');
  const [text, setText] = useState('');
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [redo, setRedo] = useState<Shape[][]>([]);
  const [history, setHistory] = useState<Shape[][]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [draft, setDraft] = useState<Shape | null>(null);
  const [format, setFormat] = useState<'png' | 'jpg'>('png');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage((im) => {
    setShapes([]);
    setHistory([]);
    setRedo([]);
    setSelected(null);
    setStatus('');
    setFormat(im.file.type === 'image/jpeg' ? 'jpg' : 'png');
  });
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{ start: [number, number]; orig?: Shape } | null>(null);
  const nextId = useRef(1);

  const commit = (next: Shape[]) => {
    setHistory((h) => [...h.slice(-49), shapes]);
    setRedo([]);
    setShapes(next);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest?.('input, textarea');
      if (typing) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && selected !== null) {
        e.preventDefault();
        commit(shapes.filter((s) => s.id !== selected));
        setSelected(null);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) doRedo();
        else undo();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!one.img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.annot.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const W = one.img.width, H = one.img.height;
  const size = defaultSize(W, H) * WEIGHTS[weight];
  const point = (e: React.PointerEvent): [number, number] => {
    const r = svgRef.current!.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  };
  const hit = (x: number, y: number) =>
    [...shapes].reverse().find((s) => {
      const b = bounds(s);
      const pad = size * 2;
      return x >= b.x - pad && x <= b.x + b.w + pad && y >= b.y - pad && y <= b.y + b.h + pad;
    });

  function undo() {
    if (!history.length) return;
    setRedo((r) => [...r, shapes]);
    setShapes(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
    setSelected(null);
  }
  function doRedo() {
    if (!redo.length) return;
    setHistory((h) => [...h, shapes]);
    setShapes(redo[redo.length - 1]);
    setRedo((r) => r.slice(0, -1));
  }

  const down = (e: React.PointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const [x, y] = point(e);
    if (mode === 'select') {
      const s = hit(x, y);
      setSelected(s?.id ?? null);
      drag.current = s ? { start: [x, y], orig: s } : null;
      return;
    }
    setSelected(null);
    const base = { id: nextId.current++, tool: mode, x1: x, y1: y, x2: x, y2: y, color, size };
    if (mode === 'text') {
      if (!text.trim()) return;
      commit([...shapes, { ...base, size: size * 7, text }]);
      return;
    }
    if (mode === 'number') {
      const n = shapes.filter((s) => s.tool === 'number').reduce((m, s) => Math.max(m, s.n ?? 0), 0) + 1;
      commit([...shapes, { ...base, size: size * 5, n }]);
      return;
    }
    drag.current = { start: [x, y] };
    setDraft({ ...base, points: mode === 'pen' || mode === 'highlight' ? [x, y] : undefined });
  };
  const move = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    const [x, y] = point(e);
    if (mode === 'select' && drag.current.orig) {
      const o = drag.current.orig;
      setShapes((list) => list.map((s) => (s.id === o.id ? moved(o, x - drag.current!.start[0], y - drag.current!.start[1]) : s)));
      return;
    }
    setDraft((d) => (d ? (d.points ? { ...d, points: [...d.points, x, y] } : { ...d, x2: x, y2: y }) : d));
  };
  const up = () => {
    if (mode === 'select' && drag.current?.orig) {
      const o = drag.current.orig;
      const now = shapes.find((s) => s.id === o.id);
      if (now && (now.x1 !== o.x1 || now.y1 !== o.y1)) {
        setHistory((h) => [...h.slice(-49), shapes.map((s) => (s.id === o.id ? o : s))]);
        setRedo([]);
      }
    } else if (draft) {
      const tiny = draft.points ? draft.points.length < 4 : Math.hypot(draft.x2 - draft.x1, draft.y2 - draft.y1) < size * 2;
      if (!tiny) commit([...shapes, draft]);
    }
    setDraft(null);
    drag.current = null;
  };

  const build = async () => {
    const c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    const ctx = c.getContext('2d')!;
    if (format === 'jpg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);
    }
    ctx.drawImage(one.img!.canvas, 0, 0);
    drawShapes(ctx, shapes);
    const type = format === 'jpg' ? 'image/jpeg' : 'image/png';
    return canvasToBlob(c, type, 0.95, undefined, forDownload(type));
  };
  const fileName = () => `${one.img!.file.name.replace(/\.[^.]+$/, '')}-annotated.${format}`;
  const run = async () => {
    setBusy(true);
    one.setError(null);
    try {
      downloadBlob(await build(), fileName());
      setStatus(t('ctl.pdf.done', { name: fileName() }));
    } catch {
      one.setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  const tools: [Mode, React.ComponentType<{ className?: string }>, string][] = [
    ['select', MousePointer2, t('ctl.annot.select')],
    ['arrow', ArrowUpRight, t('ctl.annot.arrow')],
    ['rect', Square, t('ctl.annot.rect')],
    ['ellipse', Circle, t('ctl.annot.ellipse')],
    ['line', Minus, t('ctl.annot.line')],
    ['pen', PenLine, t('ctl.annot.pen')],
    ['highlight', Highlighter, t('ctl.annot.highlight')],
    ['text', Type, t('ctl.annot.text')],
    ['number', Hash, t('ctl.annot.number')],
  ];
  const panel = (
    <>
      <div className="space-y-2">
        <span className="slug block" id="annot-tools">{t('ctl.annot.tool')}</span>
        <div className="grid grid-cols-5 gap-1.5" role="group" aria-labelledby="annot-tools">
          {tools.map(([m, Icon, label]) => (
            <button key={m} type="button" aria-pressed={mode === m} aria-label={label} title={label} onClick={() => setMode(m)} className={`min-h-[44px] flex items-center justify-center border border-ink rounded-md ${mode === m ? 'seg-on' : 'seg-off'}`}>
              <Icon className="w-5 h-5" aria-hidden="true" />
            </button>
          ))}
        </div>
        <p className="text-[13px] text-graphite">{tools.find(([m]) => m === mode)?.[2]}{mode === 'text' ? ` · ${t('ctl.annot.textHint')}` : mode === 'select' ? ` · ${t('ctl.annot.selectHint')}` : ''}</p>
      </div>
      {mode === 'text' && (
        <div className="space-y-1">
          <label htmlFor="annot-text" className="block text-[14px] text-graphite">{t('ctl.annot.textLabel')}</label>
          <textarea id="annot-text" value={text} onChange={(e) => setText(e.target.value)} rows={2} className="w-full p-2.5 border border-ink bg-paper-bright text-[16px] text-ink rounded-md" />
        </div>
      )}
      <div className="space-y-2">
        <span className="slug block" id="annot-color">{t('ctl.annot.color')}</span>
        <div className="flex flex-wrap gap-2" role="group" aria-labelledby="annot-color">
          {COLORS.map((c) => (
            <button key={c} type="button" aria-pressed={color === c} aria-label={c} onClick={() => setColor(c)} className={`w-10 h-10 rounded-full border-2 ${color === c ? 'border-ink ring-2 ring-offset-2 ring-ink' : 'border-pencil'}`} style={{ background: c }} />
          ))}
        </div>
      </div>
      <Segmented
        label={t('ctl.graph.weight')}
        value={weight}
        cols={3}
        onChange={setWeight}
        options={[
          { value: 'fine', label: t('ctl.graph.fine') },
          { value: 'medium', label: t('ctl.graph.medium') },
          { value: 'bold', label: t('ctl.graph.bold') },
        ]}
      />
      <div className="flex flex-wrap gap-2 pt-4 border-t border-ink">
        <button type="button" onClick={undo} disabled={!history.length} className="btn-rule min-h-[44px] disabled:opacity-40">
          <Undo2 className="w-4 h-4" aria-hidden="true" />
          {t('ctl.annot.undo')}
        </button>
        <button type="button" onClick={doRedo} disabled={!redo.length} className="btn-rule min-h-[44px] disabled:opacity-40">
          <Redo2 className="w-4 h-4" aria-hidden="true" />
          {t('ctl.annot.redo')}
        </button>
        <button
          type="button"
          onClick={() => {
            commit(shapes.filter((s) => s.id !== selected));
            setSelected(null);
          }}
          disabled={selected === null}
          className="btn-rule min-h-[44px] disabled:opacity-40"
        >
          <Trash2 className="w-4 h-4" aria-hidden="true" />
          {t('ctl.annot.delete')}
        </button>
      </div>
      <Segmented
        label={t('ws.saveAs')}
        value={format}
        onChange={setFormat}
        options={[
          { value: 'png', label: 'PNG' },
          { value: 'jpg', label: 'JPG' },
        ]}
      />
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={PenLine}
        fileLabel={`${W} × ${H} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        ticketAction={<FullSizeView label={fileName()} load={async () => blobImage(await build())} original={() => urlImage(one.img!.url)} />}
        panel={panel}
        actionLabel={t('ws.download', { format: format.toUpperCase() })}
        onAction={run}
        busy={busy}
        status={status || (shapes.length ? t('ctl.annot.count', { n: shapes.length }) : '')}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-4 sm:p-6 rounded-xl">
          <div className="relative inline-block max-w-full">
            <img src={one.img.url} alt="" className="block max-h-[65vh] max-w-full object-contain select-none" draggable={false} />
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              preserveAspectRatio="none"
              className={`absolute inset-0 w-full h-full touch-none ${mode === 'select' ? 'cursor-default' : 'cursor-crosshair'}`}
              onPointerDown={down}
              onPointerMove={move}
              onPointerUp={up}
              onPointerCancel={up}
              role="img"
              aria-label={t('ctl.annot.canvas', { n: shapes.length })}
            >
              {shapes.map((s) => (
                <ShapeSvg key={s.id} s={s} selected={s.id === selected} />
              ))}
              {draft && <ShapeSvg s={draft} selected={false} />}
            </svg>
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}
