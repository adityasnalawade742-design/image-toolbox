import React, { useEffect, useRef, useState } from 'react';
import { useT } from '../../shared/I18nContext';
import { isConvex, type Pt, type Quad } from '../../../lib/photo/perspective';

/**
 * A picture with four draggable corner handles (mouse, touch or arrow keys). Handles stay about 44 px across on
 * screen whatever the picture's resolution.
 */
export function CornerEditor({ src, width, height, quad, onChange, maxHeight = '62vh' }: { src: string; width: number; height: number; quad: Quad; onChange: (q: Quad) => void; maxHeight?: string }) {
  const t = useT();
  const svgRef = useRef<SVGSVGElement>(null);
  const [drag, setDrag] = useState<number | null>(null);
  const [shownW, setShownW] = useState(0);
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setShownW(el.getBoundingClientRect().width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const valid = isConvex(quad);
  const handle = shownW ? (22 * width) / shownW : Math.max(width, height) / 45;
  const toImage = (e: React.PointerEvent): Pt => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: Math.max(0, Math.min(width, ((e.clientX - r.left) / r.width) * width)), y: Math.max(0, Math.min(height, ((e.clientY - r.top) / r.height) * height)) };
  };
  const move = (i: number, p: Pt) => onChange(quad.map((v, j) => (j === i ? p : v)) as Quad);
  const nudge = (i: number, e: React.KeyboardEvent) => {
    const d = (e.shiftKey ? 20 : 2) * Math.max(1, Math.max(width, height) / 800);
    const m: Record<string, [number, number]> = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] };
    if (!m[e.key]) return;
    e.preventDefault();
    const p = quad[i];
    move(i, { x: Math.max(0, Math.min(width, p.x + m[e.key][0])), y: Math.max(0, Math.min(height, p.y + m[e.key][1])) });
  };
  const names = [t('ctl.persp.tl'), t('ctl.persp.tr'), t('ctl.persp.br'), t('ctl.persp.bl')];
  return (
    <div className="relative inline-block max-w-full">
      <img src={src} alt="" className="block max-w-full select-none" style={{ maxHeight }} draggable={false} />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full touch-none"
        onPointerMove={(e) => drag !== null && move(drag, toImage(e))}
        onPointerUp={() => setDrag(null)}
        onPointerCancel={() => setDrag(null)}
      >
        <path d={`M0 0H${width}V${height}H0Z M${quad.map((p) => `${p.x} ${p.y}`).join(' L')} Z`} fill="rgba(0,0,0,0.45)" fillRule="evenodd" />
        <polygon points={quad.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={valid ? '#ffffff' : '#ff3b5c'} strokeWidth={handle / 6} />
        {quad.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={handle}
            tabIndex={0}
            role="slider"
            aria-label={names[i]}
            aria-valuetext={`${Math.round(p.x)}, ${Math.round(p.y)}`}
            aria-valuenow={Math.round(p.x)}
            fill="rgba(226,0,122,0.85)"
            stroke="#ffffff"
            strokeWidth={handle / 5}
            className="cursor-grab focus:outline-none focus-visible:[stroke:#000]"
            onPointerDown={(e) => {
              (e.currentTarget.ownerSVGElement as SVGSVGElement).setPointerCapture(e.pointerId);
              setDrag(i);
            }}
            onKeyDown={(e) => nudge(i, e)}
          />
        ))}
      </svg>
    </div>
  );
}

/** The whole picture as a quad (used when no page is found, so nothing is cropped) */
export const fullQuad = (w: number, h: number): Quad => [
  { x: 0, y: 0 },
  { x: w, y: 0 },
  { x: w, y: h },
  { x: 0, y: h },
];
