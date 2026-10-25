import React from 'react';
import { DragFrameOverlay } from '../../shared/DragFrameOverlay';
import { RangeField } from './common';

export interface Stamp {
  /** Data URL of the PNG to place */
  url: string;
  /** Natural size, for the aspect ratio */
  width: number;
  height: number;
}

export interface Placement {
  /** Centre as a fraction of the page (0–1, from the top-left as seen on screen) */
  cx: number;
  cy: number;
  /** Width as a fraction of the page width */
  w: number;
  rotate: number;
  opacity: number;
}

/** Shows a stamp (watermark or signature) on the page preview and lets it be dragged */
export function StampOverlay({ canvas, stamp, place, onMove, hint }: { canvas: HTMLCanvasElement; stamp: Stamp; place: Placement; onMove: (cx: number, cy: number) => void; hint: string }) {
  const wPx = place.w * canvas.width;
  const hPx = (wPx / stamp.width) * stamp.height;
  return (
    <>
      <img
        src={stamp.url}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: `${place.cx * 100}%`,
          top: `${place.cy * 100}%`,
          width: `${place.w * 100}%`,
          opacity: place.opacity,
          transform: `translate(-50%, -50%) rotate(${-place.rotate}deg)`,
        }}
      />
      <DragFrameOverlay
        canvasElement={canvas}
        boxes={[{ id: 'stamp', box: { cx: place.cx * canvas.width, cy: place.cy * canvas.height, w: wPx, h: hPx }, label: hint }]}
        onMove={(_, x, y) => onMove(x / 100, y / 100)}
        hint={hint}
      />
    </>
  );
}

/** Position sliders: the keyboard route to what dragging the stamp does */
export function PositionSliders({ place, onChange, labels }: { place: Placement; onChange: (p: Placement) => void; labels: { x: string; y: string } }) {
  return (
    <div className="space-y-3">
      <RangeField id="stamp-x" label={labels.x} value={Math.round(place.cx * 100)} min={0} max={100} unit="%" onChange={(v) => onChange({ ...place, cx: v / 100 })} />
      <RangeField id="stamp-y" label={labels.y} value={Math.round(place.cy * 100)} min={0} max={100} unit="%" onChange={(v) => onChange({ ...place, cy: v / 100 })} />
    </div>
  );
}

/** Render text to a transparent PNG (any script, any font the browser has), cropped to the text */
export function textToPng(text: string, color: string, style: string, family: string): { url: string; width: number; height: number } | null {
  // Also runs during server rendering, where there is no canvas
  if (!text.trim() || typeof document === 'undefined') return null;
  const size = 160;
  // CSS font shorthand: style and weight first, then size, then family
  const font = `${style} ${size}px ${family}`;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d')!;
  ctx.font = font;
  const m = ctx.measureText(text);
  const w = Math.ceil(m.width + size * 0.2);
  const h = Math.ceil(size * 1.4);
  c.width = w;
  c.height = h;
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size * 0.1, h / 2);
  return { url: c.toDataURL('image/png'), width: w, height: h };
}

export const dataUrlBytes = (url: string) => Uint8Array.from(atob(url.split(',')[1]), (ch) => ch.charCodeAt(0));
