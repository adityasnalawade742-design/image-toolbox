import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Move } from 'lucide-react';
import type { TextOverlayOptions } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  canvasElement: HTMLCanvasElement | null;
  options: TextOverlayOptions;
  onChange: (opts: TextOverlayOptions) => void;
}

export function InteractiveTextOverlay({ canvasElement, options, onChange }: Props) {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  // Pointer position relative to the text anchor when the drag started, so the text doesn't jump
  const grabOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
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

  // Mirror the engine's text placement (src/lib/canvas/engine.ts, text overlay) in canvas pixels:
  // fixed positions sit 30px from the edges and the anchor is the first line's centre.
  const canvasW = canvasElement?.width || dims.width;
  const canvasH = canvasElement?.height || dims.height;
  const lineHeight = options.fontSize * 1.25;
  const totalTextHeight = options.text.split('\n').length * lineHeight;
  const isCustom = options.position === 'custom';

  let anchorY: number;
  if (options.position === 'top') anchorY = 30 + lineHeight / 2;
  else if (options.position === 'bottom') anchorY = canvasH - 30 - totalTextHeight + lineHeight / 2;
  else if (isCustom && options.customYPercent !== undefined) anchorY = (canvasH * options.customYPercent) / 100;
  else anchorY = (canvasH - totalTextHeight) / 2 + lineHeight / 2;

  let anchorX = canvasW / 2;
  if (isCustom && options.customXPercent !== undefined) anchorX = (canvasW * options.customXPercent) / 100;
  else if (options.textAlign === 'left') anchorX = 30;
  else if (options.textAlign === 'right') anchorX = canvasW - 30;

  const xPct = Math.round((anchorX / canvasW) * 100);
  const yPct = Math.round((anchorY / canvasH) * 100);
  // The engine aligns text to the anchor, so the handle does too
  const alignShift = options.textAlign === 'left' ? 'translate-x-0' : options.textAlign === 'right' ? '-translate-x-full' : '-translate-x-1/2';

  const leftPx = (anchorX / canvasW) * dims.width;
  const topPx = (anchorY / canvasH) * dims.height;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // A second finger is a pinch-zoom of the page, not a drag
    if (!e.isPrimary) return;
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    if (canvasElement) {
      const rect = canvasElement.getBoundingClientRect();
      grabOffsetRef.current = { x: e.clientX - rect.left - leftPx, y: e.clientY - rect.top - topPx };
    }
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !canvasElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const clampedX = Math.max(5, Math.min(rect.width - 5, e.clientX - rect.left - grabOffsetRef.current.x));
    const clampedY = Math.max(5, Math.min(rect.height - 5, e.clientY - rect.top - grabOffsetRef.current.y));

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
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    setIsDragging(false);
  };

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
      {/* Draggable handle, anchored where the engine draws the first line */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        // Pointer shortcut only: the position menu and sliders in the panel are the accessible route
        aria-hidden="true"
        title={t('ctl.textOverlay.hint')}
        className={`absolute ${alignShift} -translate-y-1/2 pointer-events-auto cursor-move touch-pinch-zoom group`}
        style={{
          left: `${leftPx}px`,
          top: `${topPx}px`,
        }}
      >
        <div
          className={`min-h-[40px] px-2.5 py-1.5 border border-ink flex items-center gap-2 transition-colors ${
            isDragging ? 'seg-on' : 'seg-off'
          }`}
        >
          <Move className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="text-[13px] font-semibold whitespace-nowrap select-none">
            {options.text.length > 28 ? `${options.text.slice(0, 28)}…` : options.text}
          </span>
          <span className="text-[12px] whitespace-nowrap text-graphite" data-measure>
            {xPct}%, {yPct}%
          </span>
        </div>

        {/* Hover hint */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-process-key text-paper text-[12px] font-medium px-2 py-0.5">
          {t('ctl.textOverlay.hint')}
        </div>
      </div>
    </div>
  );
}
