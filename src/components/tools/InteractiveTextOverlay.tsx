import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Move } from 'lucide-react';
import type { TextOverlayOptions } from '../../lib/canvas/engine';

interface Props {
  canvasElement: HTMLCanvasElement | null;
  options: TextOverlayOptions;
  onChange: (opts: TextOverlayOptions) => void;
}

export function InteractiveTextOverlay({ canvasElement, options, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dims, setDims] = useState<{ width: number; height: number; left: number; top: number } | null>(null);

  // Sync with canvas layout
  const updateDims = useCallback(() => {
    if (!canvasElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const parentRect = canvasElement.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    setDims({
      width: rect.width,
      height: rect.height,
      left: rect.left - parentRect.left,
      top: rect.top - parentRect.top,
    });
  }, [canvasElement]);

  useEffect(() => {
    updateDims();
    window.addEventListener('resize', updateDims);
    const observer = new ResizeObserver(updateDims);
    if (canvasElement) observer.observe(canvasElement);

    return () => {
      window.removeEventListener('resize', updateDims);
      observer.disconnect();
    };
  }, [canvasElement, updateDims]);

  if (!dims || dims.width === 0 || dims.height === 0 || !options.text.trim()) {
    return null;
  }

  // Calculate percentage positions
  let xPct = options.customXPercent ?? 50;
  let yPct = 50;
  if (options.position === 'top') yPct = 15;
  else if (options.position === 'bottom') yPct = 85;
  else if (options.position === 'custom' && options.customYPercent !== undefined) yPct = options.customYPercent;

  if (options.position !== 'custom' && options.customXPercent === undefined) {
    if (options.textAlign === 'left') xPct = 15;
    else if (options.textAlign === 'right') xPct = 85;
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !canvasElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const clampedX = Math.max(5, Math.min(rect.width - 5, e.clientX - rect.left));
    const clampedY = Math.max(5, Math.min(rect.height - 5, e.clientY - rect.top));

    const newXPct = Math.round((clampedX / rect.width) * 100);
    const newYPct = Math.round((clampedY / rect.height) * 100);

    onChange({
      ...options,
      position: 'custom',
      customXPercent: newXPct,
      customYPercent: newYPct,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    setIsDragging(false);
  };

  const leftPx = (dims.width * xPct) / 100;
  const topPx = (dims.height * yPct) / 100;

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-none select-none z-20"
      style={{
        left: `${dims.left}px`,
        top: `${dims.top}px`,
        width: `${dims.width}px`,
        height: `${dims.height}px`,
      }}
    >
      {/* Draggable Text Bounding Box */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-move group transition-shadow ${
          isDragging ? 'scale-[1.02] shadow-2xl' : ''
        }`}
        style={{
          left: `${leftPx}px`,
          top: `${topPx}px`,
        }}
      >
        <div
          className={`p-2.5 rounded-lg border-2 border-dashed transition-all flex items-center gap-2 ${
            isDragging
              ? 'border-primary-400 bg-primary-500/20'
              : 'border-white/60 hover:border-primary-400 bg-black/40 hover:bg-black/60 backdrop-blur-sm'
          }`}
        >
          <Move className="w-3.5 h-3.5 text-primary-400 shrink-0 animate-pulse" />
          <span className="text-[11px] font-semibold text-white tracking-wide whitespace-nowrap drop-shadow-md select-none">
            {options.text.length > 28 ? `${options.text.slice(0, 28)}...` : options.text}
          </span>
          <span className="text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 rounded ml-1">
            {xPct}%, {yPct}%
          </span>
        </div>

        {/* Floating Hint */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-black/90 text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-lg">
          Click & Drag to reposition text
        </div>
      </div>
    </div>
  );
}
