import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Move } from 'lucide-react';

export interface FrameBox {
  /** Centre and size in canvas pixels */
  cx: number;
  cy: number;
  w: number;
  h: number;
}

interface Props {
  canvasElement: HTMLCanvasElement | null;
  boxes: { id: string; box: FrameBox; label: string }[];
  /** New centre as a percentage of the image (0–100) */
  onMove: (id: string, xPercent: number, yPercent: number) => void;
  hint: string;
}

/**
 * Dashed frames over things placed on a canvas (a watermark, meme captions) that can be dragged freely.
 * A pointer shortcut: each tool also offers position sliders, which are the keyboard and screen-reader route.
 */
export function DragFrameOverlay({ canvasElement, boxes, onMove, hint }: Props) {
  const [dims, setDims] = useState<{ width: number; height: number; left: number; top: number } | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  // Pointer position relative to the frame centre when the drag started, so the frame doesn't jump
  const grab = useRef({ x: 0, y: 0 });

  const updateDims = useCallback(() => {
    if (!canvasElement?.parentElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const parent = canvasElement.parentElement.getBoundingClientRect();
    setDims({ width: rect.width, height: rect.height, left: rect.left - parent.left, top: rect.top - parent.top });
  }, [canvasElement]);

  useEffect(() => {
    updateDims();
    const observer = new ResizeObserver(updateDims);
    if (canvasElement) observer.observe(canvasElement);
    window.addEventListener('resize', updateDims);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateDims);
    };
  }, [canvasElement, updateDims]);

  if (!canvasElement || !dims || !dims.width || !canvasElement.width) return null;
  const sx = dims.width / canvasElement.width;
  const sy = dims.height / canvasElement.height;

  const toPercent = (clientX: number, clientY: number) => {
    const rect = canvasElement.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left - grab.current.x));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top - grab.current.y));
    return [Math.round((x / rect.width) * 1000) / 10, Math.round((y / rect.height) * 1000) / 10] as const;
  };

  return (
    <div
      className="absolute pointer-events-none select-none z-20"
      style={{ left: dims.left, top: dims.top, width: dims.width, height: dims.height }}
      aria-hidden="true"
    >
      {boxes.map(({ id, box, label }) => {
        // Keep a comfortable grab area even for small text
        const w = Math.max(44, box.w * sx + 12);
        const h = Math.max(44, box.h * sy + 12);
        const left = box.cx * sx - w / 2;
        const top = box.cy * sy - h / 2;
        const active = dragging === id;
        return (
          <div
            key={id}
            title={hint}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              e.currentTarget.setPointerCapture(e.pointerId);
              const rect = canvasElement.getBoundingClientRect();
              grab.current = { x: e.clientX - rect.left - box.cx * sx, y: e.clientY - rect.top - box.cy * sy };
              setDragging(id);
            }}
            onPointerMove={(e) => {
              if (dragging !== id) return;
              const [x, y] = toPercent(e.clientX, e.clientY);
              onMove(id, x, y);
            }}
            onPointerUp={(e) => {
              try {
                e.currentTarget.releasePointerCapture(e.pointerId);
              } catch {
                // already released
              }
              setDragging(null);
            }}
            onPointerCancel={() => setDragging(null)}
            className={`group absolute pointer-events-auto cursor-move touch-none border-2 border-dashed transition-colors ${
              active ? 'border-process-magenta bg-process-magenta/10' : 'border-process-magenta/70 hover:border-process-magenta hover:bg-process-magenta/5'
            }`}
            style={{ left, top, width: w, height: h }}
          >
            <span className="absolute -top-3 -left-3 w-6 h-6 flex items-center justify-center bg-process-key text-paper">
              <Move className="w-3.5 h-3.5" />
            </span>
            <span className="absolute left-0 top-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-process-key text-paper text-[12px] font-medium px-2 py-0.5">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
