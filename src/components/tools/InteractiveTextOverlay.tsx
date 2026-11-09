import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Move } from 'lucide-react';
import { textAnchor, type TextOverlayOptions } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  canvasElement: HTMLCanvasElement | null;
  layers: TextOverlayOptions[];
  active: number;
  onSelect: (index: number) => void;
  onChange: (layers: TextOverlayOptions[]) => void;
}

/**
 * A drag handle for each text block, placed where the engine draws its first line (`textAnchor`). Grabbing a handle
 * selects that block for the panel; dragging moves it.
 */
export function InteractiveTextOverlay({ canvasElement, layers, active, onSelect, onChange }: Props) {
  const t = useT();
  // Pointer position relative to the text anchor when the drag started, so the text doesn't jump
  const grabOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<number | null>(null);
  const [dims, setDims] = useState<{ width: number; height: number; left: number; top: number } | null>(null);

  const updateDims = useCallback(() => {
    if (!canvasElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const parentRect = canvasElement.parentElement?.getBoundingClientRect();
    if (!parentRect) return;
    setDims({ width: rect.width, height: rect.height, left: rect.left - parentRect.left, top: rect.top - parentRect.top });
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

  if (!dims || dims.width === 0 || dims.height === 0) return null;
  const canvasW = canvasElement?.width || dims.width;
  const canvasH = canvasElement?.height || dims.height;

  return (
    <div
      className="absolute pointer-events-none select-none z-20"
      style={{ left: `${dims.left}px`, top: `${dims.top}px`, width: `${dims.width}px`, height: `${dims.height}px` }}
    >
      {layers.map((layer, index) => {
        if (!layer.text.trim()) return null;
        const { x, y } = textAnchor(canvasW, canvasH, layer);
        const leftPx = (x / canvasW) * dims.width;
        const topPx = (y / canvasH) * dims.height;
        const selected = index === active;
        // The engine aligns text to the anchor, so the handle does too
        const alignShift = layer.textAlign === 'left' ? 'translate-x-0' : layer.textAlign === 'right' ? '-translate-x-full' : '-translate-x-1/2';

        const down = (e: React.PointerEvent<HTMLDivElement>) => {
          // A second finger is a pinch-zoom of the page, not a drag
          if (!e.isPrimary) return;
          e.stopPropagation();
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          if (canvasElement) {
            const rect = canvasElement.getBoundingClientRect();
            grabOffsetRef.current = { x: e.clientX - rect.left - leftPx, y: e.clientY - rect.top - topPx };
          }
          onSelect(index);
          setDragging(index);
        };
        const move = (e: React.PointerEvent<HTMLDivElement>) => {
          if (dragging !== index || !canvasElement) return;
          const rect = canvasElement.getBoundingClientRect();
          const cx = Math.max(5, Math.min(rect.width - 5, e.clientX - rect.left - grabOffsetRef.current.x));
          const cy = Math.max(5, Math.min(rect.height - 5, e.clientY - rect.top - grabOffsetRef.current.y));
          onChange(
            layers.map((l, i) =>
              i === index ? { ...l, position: 'custom', customXPercent: Math.round((cx / rect.width) * 100), customYPercent: Math.round((cy / rect.height) * 100) } : l
            )
          );
        };
        const up = (e: React.PointerEvent<HTMLDivElement>) => {
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {
            // Ignored
          }
          setDragging(null);
        };

        return (
          <div
            key={index}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
            // Pointer shortcut only: the text list and position sliders in the panel are the accessible route
            aria-hidden="true"
            title={t('ctl.textOverlay.hint')}
            className={`absolute ${alignShift} -translate-y-1/2 pointer-events-auto cursor-move touch-pinch-zoom group ${selected ? 'z-10' : 'opacity-80'}`}
            style={{ left: `${leftPx}px`, top: `${topPx}px` }}
          >
            {selected ? (
              <div className="min-h-[40px] px-2.5 py-1.5 border-2 border-ink seg-on flex items-center gap-2 transition-colors">
                <Move className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-[13px] font-semibold whitespace-nowrap select-none">
                  {layer.text.length > 24 ? `${layer.text.slice(0, 24)}…` : layer.text}
                </span>
                <span className="text-[12px] whitespace-nowrap text-graphite" data-measure>
                  {Math.round((x / canvasW) * 100)}%, {Math.round((y / canvasH) * 100)}%
                </span>
              </div>
            ) : (
              // The others stay small, so the handles don't hide the texts being placed
              <div className="h-8 px-1.5 border border-ink seg-off flex items-center gap-1 transition-colors">
                <Move className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span className="text-[12px] font-semibold" data-measure>{index + 1}</span>
              </div>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-process-key text-paper text-[12px] font-medium px-2 py-0.5">
              {t('ctl.textOverlay.hint')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
