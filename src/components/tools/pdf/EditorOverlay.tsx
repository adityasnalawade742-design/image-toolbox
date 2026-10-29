import React, { useRef, useState } from 'react';
import { HIGHLIGHT_OPACITY, TEXT_ASCENT, TEXT_LINE_HEIGHT, arrowHead, markThickness, type BoxItem, type BoxKind, type EditItem, type TextItem } from '../../../lib/pdf/editOps';

export type EditorTool = 'select' | 'text' | 'image' | 'draw' | 'highlight' | 'shape' | 'whiteout' | 'redact' | 'link';
export type MarkStyle = 'highlight' | 'underline' | 'strike';
export type ShapeKind = 'rect' | 'ellipse' | 'line' | 'arrow';

/** The tool that makes (and edits) an item of this kind */
export function toolFor(kind: EditItem['kind']): EditorTool {
  if (kind === 'text' || kind === 'image' || kind === 'whiteout' || kind === 'redact' || kind === 'link') return kind;
  if (kind === 'ink') return 'draw';
  if (kind === 'highlight' || kind === 'underline' || kind === 'strike') return 'highlight';
  return 'shape';
}

export const FONT_FAMILY = { sans: 'Helvetica, Arial, sans-serif', serif: '"Times New Roman", Times, serif', mono: '"Courier New", Courier, monospace' } as const;

let measureCtx: CanvasRenderingContext2D | null = null;
/** Size of a text item on the page, in points */
export function textBox(item: TextItem) {
  measureCtx ??= document.createElement('canvas').getContext('2d');
  const lines = item.text.split('\n');
  let w = item.size;
  if (measureCtx) {
    measureCtx.font = `${item.bold ? 'bold ' : ''}${item.size}px ${FONT_FAMILY[item.font]}`;
    w = Math.max(item.size * 0.6, ...lines.map((l) => measureCtx!.measureText(l.replace(/\t/g, '    ')).width));
  }
  return { x: item.x, y: item.y, w, h: item.size * (TEXT_ASCENT + 0.25 + (lines.length - 1) * TEXT_LINE_HEIGHT) };
}

/** Bounding box of any item, in points */
export function bounds(item: EditItem) {
  switch (item.kind) {
    case 'text':
      return textBox(item);
    case 'ink': {
      const xs = item.points.filter((_, i) => i % 2 === 0);
      const ys = item.points.filter((_, i) => i % 2 === 1);
      const pad = item.width / 2;
      return { x: Math.min(...xs) - pad, y: Math.min(...ys) - pad, w: Math.max(...xs) - Math.min(...xs) + pad * 2, h: Math.max(...ys) - Math.min(...ys) + pad * 2 };
    }
    case 'line':
    case 'arrow': {
      const pad = Math.max(item.width, 4);
      return { x: Math.min(item.x1, item.x2) - pad, y: Math.min(item.y1, item.y2) - pad, w: Math.abs(item.x2 - item.x1) + pad * 2, h: Math.abs(item.y2 - item.y1) + pad * 2 };
    }
    default:
      return { x: item.x, y: item.y, w: item.w, h: item.h };
  }
}

/** Move an item by dx, dy points */
export function moveBy(item: EditItem, dx: number, dy: number): EditItem {
  if (item.kind === 'ink') return { ...item, points: item.points.map((v, i) => v + (i % 2 ? dy : dx)) };
  if ('x1' in item) return { ...item, x1: item.x1 + dx, y1: item.y1 + dy, x2: item.x2 + dx, y2: item.y2 + dy };
  return { ...item, x: item.x + dx, y: item.y + dy };
}

function ItemShape({ item }: { item: EditItem }) {
  switch (item.kind) {
    case 'text':
      return (
        <text x={item.x} y={item.y + item.size * TEXT_ASCENT} fontSize={item.size} fontFamily={FONT_FAMILY[item.font]} fontWeight={item.bold ? 700 : 400} fill={item.color} style={{ whiteSpace: 'pre' }}>
          {item.text.split('\n').map((line, i) => (
            <tspan key={i} x={item.x} dy={i ? item.size * TEXT_LINE_HEIGHT : 0}>
              {line.replace(/\t/g, '    ') || ' '}
            </tspan>
          ))}
        </text>
      );
    case 'image':
      return <image href={item.url} x={item.x} y={item.y} width={item.w} height={item.h} preserveAspectRatio="none" />;
    case 'ink': {
      const pts = item.points.length === 2 ? [...item.points, ...item.points] : item.points;
      return <polyline points={pts.join(' ')} fill="none" stroke={item.color} strokeWidth={item.width} strokeLinecap="round" strokeLinejoin="round" />;
    }
    case 'line':
    case 'arrow':
      return (
        <g stroke={item.color} strokeWidth={item.width} strokeLinecap="round">
          <line x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} />
          {item.kind === 'arrow' && arrowHead(item.x1, item.y1, item.x2, item.y2, item.width).map((p, i) => <line key={i} x1={item.x2} y1={item.y2} x2={p.x} y2={p.y} />)}
        </g>
      );
    default:
      return <BoxShape item={item} />;
  }
}

function BoxShape({ item }: { item: BoxItem }) {
  const { x, y, w, h } = item;
  switch (item.kind) {
    case 'highlight':
      return <rect x={x} y={y} width={w} height={h} fill={item.color} fillOpacity={HIGHLIGHT_OPACITY} style={{ mixBlendMode: 'multiply' }} />;
    case 'underline':
    case 'strike': {
      const t = markThickness(h);
      const ly = item.kind === 'underline' ? y + h - t / 2 : y + h / 2;
      return (
        <g>
          {/* An invisible band so the mark can be picked up */}
          <rect x={x} y={y} width={w} height={h} fill="transparent" />
          <line x1={x} y1={ly} x2={x + w} y2={ly} stroke={item.color} strokeWidth={t} />
        </g>
      );
    }
    case 'whiteout':
      // The dashed outline is shown in the editor only, so white boxes on white paper can be found
      return <rect x={x} y={y} width={w} height={h} fill={item.color} stroke="#9aa0a6" strokeWidth={0.75} strokeDasharray="3 2" vectorEffect="non-scaling-stroke" />;
    case 'redact':
      return <rect x={x} y={y} width={w} height={h} fill="#000" />;
    case 'link':
      return <rect x={x} y={y} width={w} height={h} fill="#1a73e8" fillOpacity={0.12} stroke="#1a73e8" strokeWidth={1.5} strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />;
    case 'ellipse': {
      const inset = item.fill ? 0 : item.width / 2;
      return (
        <ellipse
          cx={x + w / 2}
          cy={y + h / 2}
          rx={Math.max(0.5, w / 2 - inset)}
          ry={Math.max(0.5, h / 2 - inset)}
          fill={item.fill ? item.color : 'transparent'}
          stroke={item.fill ? 'none' : item.color}
          strokeWidth={item.width}
        />
      );
    }
    default: {
      const i = item.fill ? 0 : item.width / 2;
      return (
        <rect
          x={x + i}
          y={y + i}
          width={Math.max(0, w - i * 2)}
          height={Math.max(0, h - i * 2)}
          fill={item.fill ? item.color : 'transparent'}
          stroke={item.fill ? 'none' : item.color}
          strokeWidth={item.width}
        />
      );
    }
  }
}

type Drag =
  | { mode: 'move'; id: string; start: { x: number; y: number }; orig: EditItem; moved: boolean }
  | { mode: 'resize'; id: string; orig: EditItem }
  | { mode: 'end'; id: string; end: 1 | 2 }
  | { mode: 'box'; start: { x: number; y: number }; end: { x: number; y: number } }
  | { mode: 'ink'; points: number[] };

export interface Draft {
  /** Box tools: what a drag would make */
  box: (rect: { x: number; y: number; w: number; h: number } | null, at: { x: number; y: number }) => EditItem | null;
  /** Line and arrow: from start to end; null start means a tap */
  line: (from: { x: number; y: number }, to: { x: number; y: number }) => EditItem | null;
  ink: (points: number[]) => EditItem;
  text: (at: { x: number; y: number }) => EditItem;
  image: (at: { x: number; y: number }) => void;
}

interface Props {
  /** Visible page size in points */
  size: { width: number; height: number };
  items: EditItem[];
  tool: EditorTool;
  /** Shape tool: lines and arrows are dragged end to end */
  lineShape: boolean;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  /** Live change while dragging; `done` closes the gesture (one undo step) */
  onChange: (id: string, item: EditItem, done: boolean) => void;
  onCreate: (item: EditItem) => void;
  draft: Draft;
  label: string;
}

/** The editor's layer over the page preview: shows the items and turns pointer gestures into new or moved items */
export function EditorOverlay({ size, items, tool, lineShape, selectedId, onSelect, onChange, onCreate, draft, label }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<Drag | null>(null);
  const [preview, setPreview] = useState<EditItem | null>(null);

  const point = (e: React.PointerEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(size.width, ((e.clientX - r.left) / r.width) * size.width)),
      y: Math.max(0, Math.min(size.height, ((e.clientY - r.top) / r.height) * size.height)),
    };
  };
  // Points per screen pixel, so handles and taps keep a usable size on any zoom
  const perPx = () => {
    const r = svgRef.current?.getBoundingClientRect();
    return r && r.width ? size.width / r.width : 1;
  };
  const interactive = (item: EditItem) => tool !== 'draw' && (tool === 'select' || toolFor(item.kind) === tool);

  const capture = (e: React.PointerEvent) => {
    try {
      svgRef.current?.setPointerCapture(e.pointerId);
    } catch {
      // the pointer is already gone
    }
  };

  const onItemDown = (e: React.PointerEvent, item: EditItem) => {
    if (!interactive(item)) return;
    e.stopPropagation();
    e.preventDefault();
    capture(e);
    onSelect(item.id);
    drag.current = { mode: 'move', id: item.id, start: point(e), orig: item, moved: false };
  };

  const onBackgroundDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const p = point(e);
    if (tool === 'select') return onSelect(null);
    e.preventDefault();
    if (tool === 'text') {
      const item = draft.text(p);
      onCreate(item);
      return;
    }
    if (tool === 'image') return draft.image(p);
    capture(e);
    onSelect(null);
    drag.current = tool === 'draw' ? { mode: 'ink', points: [p.x, p.y] } : { mode: 'box', start: p, end: p };
  };

  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const p = point(e);
    if (d.mode === 'move') {
      const dx = p.x - d.start.x;
      const dy = p.y - d.start.y;
      if (!d.moved && Math.hypot(dx, dy) < 2 * perPx()) return;
      d.moved = true;
      onChange(d.id, moveBy(d.orig, dx, dy), false);
    } else if (d.mode === 'resize') {
      const o = d.orig;
      if (!('w' in o)) return;
      let w = Math.max(4, p.x - o.x);
      let h = Math.max(4, p.y - o.y);
      // Images keep their proportions
      if (o.kind === 'image') h = (w / o.w) * o.h;
      onChange(d.id, { ...o, w, h }, false);
    } else if (d.mode === 'end') {
      const item = items.find((i) => i.id === d.id);
      if (item && (item.kind === 'line' || item.kind === 'arrow')) onChange(d.id, d.end === 1 ? { ...item, x1: p.x, y1: p.y } : { ...item, x2: p.x, y2: p.y }, false);
    } else if (d.mode === 'box') {
      d.end = p;
      const rect = { x: Math.min(d.start.x, p.x), y: Math.min(d.start.y, p.y), w: Math.abs(p.x - d.start.x), h: Math.abs(p.y - d.start.y) };
      setPreview(lineShape && tool === 'shape' ? draft.line(d.start, p) : draft.box(rect, d.start));
    } else {
      const n = d.points.length;
      // Skip points closer than half a screen pixel: the line looks the same and the file stays small
      if (Math.hypot(p.x - d.points[n - 2], p.y - d.points[n - 1]) < 0.5 * perPx()) return;
      d.points.push(p.x, p.y);
      setPreview(draft.ink(d.points.slice()));
    }
  };

  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    setPreview(null);
    if (!d) return;
    if (d.mode === 'move') {
      const item = items.find((i) => i.id === d.id);
      if (d.moved && item) onChange(d.id, item, true);
    } else if (d.mode === 'resize' || d.mode === 'end') {
      const item = items.find((i) => i.id === d.id);
      if (item) onChange(d.id, item, true);
    } else if (d.mode === 'box') {
      const p = point(e);
      const tap = Math.hypot(p.x - d.start.x, p.y - d.start.y) < 4 * perPx();
      const rect = tap ? null : { x: Math.min(d.start.x, p.x), y: Math.min(d.start.y, p.y), w: Math.abs(p.x - d.start.x), h: Math.abs(p.y - d.start.y) };
      const item = lineShape && tool === 'shape' ? draft.line(d.start, tap ? { x: d.start.x + 100, y: d.start.y } : p) : draft.box(rect, d.start);
      if (item) onCreate(item);
    } else {
      onCreate(draft.ink(d.points));
    }
  };

  const selected = items.find((i) => i.id === selectedId);
  const handle = 9 * perPx();
  const handleProps = (mode: 'resize' | 'end', end?: 1 | 2) => ({
    onPointerDown: (e: React.PointerEvent) => {
      if (!selected) return;
      e.stopPropagation();
      e.preventDefault();
      capture(e);
      drag.current = mode === 'resize' ? { mode, id: selected.id, orig: selected } : { mode, id: selected.id, end: end! };
    },
    style: { cursor: mode === 'resize' ? 'nwse-resize' : 'move' },
    fill: '#ffffff',
    stroke: '#c2185b',
    strokeWidth: 1.5,
    vectorEffect: 'non-scaling-stroke' as const,
  });

  const cursor = tool === 'select' ? 'default' : tool === 'text' ? 'text' : 'crosshair';
  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size.width} ${size.height}`}
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full select-none"
      // Finger drags draw or move things here in every mode (touch-action on inner SVG shapes isn't reliable); two-finger zoom still works
      style={{ cursor, touchAction: 'pinch-zoom' }}
      role="img"
      aria-label={label}
      onPointerDown={onBackgroundDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={() => {
        drag.current = null;
        setPreview(null);
      }}
    >
      {items.map((item) => (
        <g
          key={item.id}
          onPointerDown={(e) => onItemDown(e, item)}
          style={{ cursor: interactive(item) ? 'move' : undefined, pointerEvents: interactive(item) ? 'all' : 'none' }}
        >
          <ItemShape item={item} />
        </g>
      ))}
      {preview && (
        <g opacity={0.7} pointerEvents="none">
          <ItemShape item={preview} />
        </g>
      )}
      {selected && (
        <g>
          {(() => {
            const b = bounds(selected);
            const pad = 2 * perPx();
            return (
              <rect
                x={b.x - pad}
                y={b.y - pad}
                width={b.w + pad * 2}
                height={b.h + pad * 2}
                fill="none"
                stroke="#c2185b"
                strokeWidth={1.5}
                strokeDasharray="5 3"
                vectorEffect="non-scaling-stroke"
                pointerEvents="none"
              />
            );
          })()}
          {interactive(selected) && (selected.kind === 'line' || selected.kind === 'arrow') && (
            <>
              <circle cx={selected.x1} cy={selected.y1} r={handle / 2} {...handleProps('end', 1)} />
              <circle cx={selected.x2} cy={selected.y2} r={handle / 2} {...handleProps('end', 2)} />
            </>
          )}
          {interactive(selected) && 'w' in selected && (
            <rect x={selected.x + selected.w - handle / 2} y={selected.y + selected.h - handle / 2} width={handle} height={handle} {...handleProps('resize')} />
          )}
        </g>
      )}
    </svg>
  );
}

export type { BoxKind };
