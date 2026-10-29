import React, { useState, useEffect, useRef, useCallback } from 'react';
import { resizeCrop, drawCrop } from '../../lib/canvas/cropGeometry';

interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  origWidth: number;
  origHeight: number;
  crop: CropRect;
  lockAspect?: boolean;
  isCircle?: boolean;
  canvasElement: HTMLCanvasElement | null;
  onCropChange: (crop: CropRect) => void;
}

type DragHandle = 'move' | 'nw' | 'ne' | 'se' | 'sw' | 'n' | 's' | 'w' | 'e' | 'draw';

export function InteractiveCropOverlay({
  origWidth,
  origHeight,
  crop,
  lockAspect = false,
  isCircle = false,
  canvasElement,
  onCropChange,
}: Props) {
  const [activeHandle, setActiveHandle] = useState<DragHandle | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{
    clientX: number;
    clientY: number;
    startXImg: number;
    startYImg: number;
    initialCrop: CropRect;
    /** Locked width/height ratio captured at drag start (null when freeform) */
    aspect: number | null;
  } | null>(null);

  const [dims, setDims] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Update overlay dimensions whenever canvas size changes
  useEffect(() => {
    if (!canvasElement) return;
    const updateSize = () => {
      const rect = canvasElement.getBoundingClientRect();
      setDims({
        width: rect.width || canvasElement.clientWidth,
        height: rect.height || canvasElement.clientHeight,
      });
    };
    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(canvasElement);
    return () => observer.disconnect();
  }, [canvasElement]);

  const scaleX = origWidth > 0 && dims.width > 0 ? dims.width / origWidth : 1;
  const scaleY = origHeight > 0 && dims.height > 0 ? dims.height / origHeight : 1;

  const boxX = crop.x * scaleX;
  const boxY = crop.y * scaleY;
  const boxW = Math.max(10, crop.width * scaleX);
  const boxH = Math.max(10, crop.height * scaleY);

  const handlePointerDown = (handle: DragHandle, e: React.PointerEvent) => {
    // A second finger is a pinch-zoom of the page, not a drag
    if (!e.isPrimary) return;
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setActiveHandle(handle);

    const rect = containerRef.current?.getBoundingClientRect() || canvasElement?.getBoundingClientRect();
    const clickX = rect ? (e.clientX - rect.left) / scaleX : crop.x;
    const clickY = rect ? (e.clientY - rect.top) / scaleY : crop.y;

    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      startXImg: Math.max(0, Math.min(origWidth, clickX)),
      startYImg: Math.max(0, Math.min(origHeight, clickY)),
      initialCrop: { ...crop },
      aspect: lockAspect && crop.height > 0 ? crop.width / crop.height : null,
    };
  };

  const handleBackdropPointerDown = (e: React.PointerEvent) => {
    // A second finger is a pinch-zoom of the page, not a drag
    if (!e.isPrimary) return;
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect() || canvasElement?.getBoundingClientRect();
    if (!rect || scaleX <= 0 || scaleY <= 0) return;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setActiveHandle('draw');

    const clickX = Math.max(0, Math.min(origWidth, (e.clientX - rect.left) / scaleX));
    const clickY = Math.max(0, Math.min(origHeight, (e.clientY - rect.top) / scaleY));

    // The new box keeps the current (preset) ratio; nothing changes until the pointer actually moves,
    // so a stray tap on the backdrop doesn't wipe the selection
    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      startXImg: clickX,
      startYImg: clickY,
      initialCrop: { ...crop },
      aspect: lockAspect && crop.height > 0 ? crop.width / crop.height : null,
    };
  };

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!activeHandle || !dragStartRef.current || scaleX <= 0 || scaleY <= 0) return;

      const drag = dragStartRef.current;
      const deltaScreenX = e.clientX - drag.clientX;
      const deltaScreenY = e.clientY - drag.clientY;
      const deltaImgX = deltaScreenX / scaleX;
      const deltaImgY = deltaScreenY / scaleY;
      const bounds = { width: origWidth, height: origHeight };

      if (activeHandle === 'draw') {
        if (Math.hypot(deltaScreenX, deltaScreenY) < 4) return; // tap, not a drag
        onCropChange(
          drawCrop(
            { x: drag.startXImg, y: drag.startYImg },
            { x: drag.startXImg + deltaImgX, y: drag.startYImg + deltaImgY },
            bounds,
            drag.aspect
          )
        );
      } else if (activeHandle === 'move') {
        const init = drag.initialCrop;
        onCropChange({
          ...init,
          x: Math.round(Math.max(0, Math.min(origWidth - init.width, init.x + deltaImgX))),
          y: Math.round(Math.max(0, Math.min(origHeight - init.height, init.y + deltaImgY))),
        });
      } else {
        onCropChange(resizeCrop(activeHandle, drag.initialCrop, deltaImgX, deltaImgY, bounds, drag.aspect));
      }
    },
    [activeHandle, scaleX, scaleY, origWidth, origHeight, onCropChange]
  );

  const handlePointerUp = useCallback(() => {
    setActiveHandle(null);
    dragStartRef.current = null;
  }, []);

  useEffect(() => {
    if (activeHandle) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
        window.removeEventListener('pointercancel', handlePointerUp);
      };
    }
  }, [activeHandle, handlePointerMove, handlePointerUp]);

  if (dims.width === 0 || dims.height === 0) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto select-none overflow-hidden touch-pinch-zoom"
      style={{ width: dims.width, height: dims.height }}
      onPointerDown={handleBackdropPointerDown}
    >
      {/* Darkened backdrop with transparent cutout (Rectangle or Circle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="crop-mask">
            <rect width="100%" height="100%" fill="white" />
            {isCircle ? (
              <ellipse
                cx={boxX + boxW / 2}
                cy={boxY + boxH / 2}
                rx={boxW / 2}
                ry={boxH / 2}
                fill="black"
              />
            ) : (
              <rect x={boxX} y={boxY} width={boxW} height={boxH} fill="black" />
            )}
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="rgba(20, 20, 20, 0.55)" mask="url(#crop-mask)" />
      </svg>

      {/* Interactive Selection Box */}
      <div
        className={`absolute border-2 border-paper-bright outline outline-1 outline-ink pointer-events-auto cursor-move touch-pinch-zoom ${
          isCircle ? 'rounded-full' : ''
        }`}
        style={{
          left: boxX,
          top: boxY,
          width: boxW,
          height: boxH,
        }}
        onPointerDown={(e) => handlePointerDown('move', e)}
      >
        {/* Rule of Thirds Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-60">
          <div className="border-r border-b border-paper-bright" />
          <div className="border-r border-b border-paper-bright" />
          <div className="border-b border-paper-bright" />
          <div className="border-r border-b border-paper-bright" />
          <div className="border-r border-b border-paper-bright" />
          <div className="border-b border-paper-bright" />
          <div className="border-r border-b border-paper-bright" />
          <div className="border-r border-b border-paper-bright" />
          <div />
        </div>

        {/* Live Pixel Dimension Label */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 bg-process-key text-paper text-[12px] font-semibold px-2 py-0.5 whitespace-nowrap pointer-events-none transition-all ${
            boxY < 28 ? 'top-2' : '-top-6'
          }`}
        >
          {crop.width} × {crop.height} px
        </div>

        {/* Corner Handles (Generous touch padding) */}
        <div
          className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center cursor-nwse-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('nw', e)}
        >
          <div className="w-3.5 h-3.5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center cursor-nesw-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('ne', e)}
        >
          <div className="w-3.5 h-3.5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute -bottom-5 -left-5 w-10 h-10 flex items-center justify-center cursor-nesw-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('sw', e)}
        >
          <div className="w-3.5 h-3.5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute -bottom-5 -right-5 w-10 h-10 flex items-center justify-center cursor-nwse-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('se', e)}
        >
          <div className="w-3.5 h-3.5 bg-paper-bright border border-ink" />
        </div>

        {/* Midpoint Edge Handles */}
        <div
          className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-12 flex items-center justify-center cursor-ew-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('w', e)}
        >
          <div className="w-2.5 h-5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-12 flex items-center justify-center cursor-ew-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('e', e)}
        >
          <div className="w-2.5 h-5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-10 flex items-center justify-center cursor-ns-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('n', e)}
        >
          <div className="w-5 h-2.5 bg-paper-bright border border-ink" />
        </div>
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-10 flex items-center justify-center cursor-ns-resize pointer-events-auto touch-pinch-zoom"
          onPointerDown={(e) => handlePointerDown('s', e)}
        >
          <div className="w-5 h-2.5 bg-paper-bright border border-ink" />
        </div>
      </div>
    </div>
  );
}
