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
/** Width of the widest line, in the picture's pixels, as the engine measures it */
let measureCtx: CanvasRenderingContext2D | null = null;
function measureBlock(layer: TextOverlayOptions): number {
  measureCtx ??= document.createElement('canvas').getContext('2d');
  if (!measureCtx) return 0;
  const s = layer.scale ?? 1;
  measureCtx.font = `${layer.italic ? 'italic ' : ''}${layer.bold ? 'bold ' : ''}${layer.fontSize * s}px ${layer.fontFamily || 'Inter, sans-serif'}`;
  return Math.max(...layer.text.split('\n').map((line) => measureCtx!.measureText(line).width));
}

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
        const { x, y, lineHeight, totalHeight } = textAnchor(canvasW, canvasH, layer);
        const leftPx = (x / canvasW) * dims.width;
        const topPx = (y / canvasH) * dims.height;
        const selected = index === active;
        // The whole block, measured like the engine draws it, so the frame sits around the text and not on top of it
        const k = dims.width / canvasW;
        const blockW = measureBlock(layer) * k;
        const blockH = totalHeight * k;
        const pad = 6;
        const blockLeft = (layer.textAlign === 'left' ? leftPx : layer.textAlign === 'right' ? leftPx - blockW : leftPx - blockW / 2) - pad;
        const blockTop = topPx - (lineHeight * k) / 2 - pad;
        // The label goes above the frame, or below it when the text is at the very top
        const labelBelow = blockTop < 44;
        // Centred on the frame, unless that would push it past the picture's edge
        const centre = blockLeft + blockW / 2 + pad;
        const labelSide = centre < 120 ? 'left-0' : centre > dims.width - 120 ? 'right-0' : 'left-1/2 -translate-x-1/2';

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
            className={`absolute pointer-events-auto cursor-move touch-pinch-zoom group ${selected ? 'z-10' : ''}`}
            style={{
              left: `${blockLeft}px`,
              top: `${blockTop}px`,
              width: `${blockW + pad * 2}px`,
              height: `${blockH + pad * 2}px`,
              transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined,
            }}
          >
            {/* The frame is the grab area; the text itself shows through */}
            <div
              className={`absolute inset-0 border-dashed ${selected ? 'border-2 border-white' : 'border border-white/70'}`}
              style={{ boxShadow: '0 0 0 1px rgba(0,0,0,.55), inset 0 0 0 1px rgba(0,0,0,.55)' }}
            />
            {selected ? (
              <div
                className={`absolute ${labelSide} ${labelBelow ? 'top-full mt-1' : 'bottom-full mb-1'} min-h-[40px] px-2.5 py-1.5 border-2 border-ink seg-on flex items-center gap-2 transition-colors`}
              >
                <Move className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-[13px] font-semibold whitespace-nowrap select-none">
                  {layer.text.length > 24 ? `${layer.text.slice(0, 24)}…` : layer.text}
                </span>
                <span className="text-[12px] whitespace-nowrap text-graphite" data-measure>
                  {Math.round((x / canvasW) * 100)}%, {Math.round((y / canvasH) * 100)}%
                </span>
              </div>
            ) : (
              // The others stay small, at the frame's corner, so the handles don't hide the texts being placed
              <div className="absolute -top-px -left-px -translate-y-full h-8 px-1.5 border border-ink seg-off flex items-center gap-1 transition-colors">
                <Move className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span className="text-[12px] font-semibold" data-measure>{index + 1}</span>
              </div>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-process-key text-paper text-[12px] font-medium px-2 py-0.5">
              {t('ctl.textOverlay.hint')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
