import React, { useState, useEffect, useRef, useCallback } from 'react';

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
    };
  };

  const handleBackdropPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect() || canvasElement?.getBoundingClientRect();
    if (!rect || scaleX <= 0 || scaleY <= 0) return;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setActiveHandle('draw');

    const clickX = Math.max(0, Math.min(origWidth, (e.clientX - rect.left) / scaleX));
    const clickY = Math.max(0, Math.min(origHeight, (e.clientY - rect.top) / scaleY));

    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      startXImg: clickX,
      startYImg: clickY,
      initialCrop: { x: clickX, y: clickY, width: 1, height: 1 },
    };

    onCropChange({
      x: Math.round(clickX),
      y: Math.round(clickY),
      width: 1,
      height: 1,
    });
  };

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!activeHandle || !dragStartRef.current || scaleX <= 0 || scaleY <= 0) return;

      const deltaScreenX = e.clientX - dragStartRef.current.clientX;
      const deltaScreenY = e.clientY - dragStartRef.current.clientY;

      const deltaImgX = deltaScreenX / scaleX;
      const deltaImgY = deltaScreenY / scaleY;

      const init = dragStartRef.current.initialCrop;
      let newX = init.x;
      let newY = init.y;
      let newW = init.width;
      let newH = init.height;

      const targetAspect = init.width > 0 && init.height > 0 ? init.width / init.height : 1;

      if (activeHandle === 'draw') {
        // Draw new rectangle from scratch starting at startXImg, startYImg
        const currentImgX = Math.max(0, Math.min(origWidth, dragStartRef.current.startXImg + deltaImgX));
        const currentImgY = Math.max(0, Math.min(origHeight, dragStartRef.current.startYImg + deltaImgY));

        const left = Math.min(dragStartRef.current.startXImg, currentImgX);
        const top = Math.min(dragStartRef.current.startYImg, currentImgY);
        let width = Math.abs(currentImgX - dragStartRef.current.startXImg);
        let height = Math.abs(currentImgY - dragStartRef.current.startYImg);

        if (lockAspect && width > 0) {
          height = width / targetAspect;
          if (top + height > origHeight) {
            height = origHeight - top;
            width = height * targetAspect;
          }
        }

        newX = left;
        newY = top;
        newW = Math.max(10, width);
        newH = Math.max(10, height);
      } else if (activeHandle === 'move') {
        newX = Math.max(0, Math.min(origWidth - init.width, init.x + deltaImgX));
        newY = Math.max(0, Math.min(origHeight - init.height, init.y + deltaImgY));
      } else {
        if (lockAspect) {
          if (activeHandle === 'se' || activeHandle === 'e' || activeHandle === 's') {
            newW = Math.max(20, Math.min(origWidth - init.x, init.width + deltaImgX));
            newH = Math.round(newW / targetAspect);
            if (init.y + newH > origHeight) {
              newH = origHeight - init.y;
              newW = Math.round(newH * targetAspect);
            }
          } else if (activeHandle === 'nw') {
            const maxDelta = Math.min(init.width - 20, init.height - 20);
            const delta = Math.max(-Math.min(init.x, init.y), Math.min(maxDelta, deltaImgX));
            newX = init.x + delta;
            newW = init.width - delta;
            newH = Math.round(newW / targetAspect);
            newY = init.y + (init.height - newH);
          } else if (activeHandle === 'ne') {
            newW = Math.max(20, Math.min(origWidth - init.x, init.width + deltaImgX));
            newH = Math.round(newW / targetAspect);
            newY = Math.max(0, init.y + (init.height - newH));
          } else if (activeHandle === 'sw') {
            const maxDelta = init.width - 20;
            const delta = Math.max(-init.x, Math.min(maxDelta, deltaImgX));
            newX = init.x + delta;
            newW = init.width - delta;
            newH = Math.round(newW / targetAspect);
            if (init.y + newH > origHeight) {
              newH = origHeight - init.y;
              newW = Math.round(newH * targetAspect);
              newX = init.x + (init.width - newW);
            }
          }
        } else {
          // Freeform Resizing
          if (activeHandle.includes('e')) {
            newW = Math.max(10, Math.min(origWidth - init.x, init.width + deltaImgX));
          }
          if (activeHandle.includes('s')) {
            newH = Math.max(10, Math.min(origHeight - init.y, init.height + deltaImgY));
          }
          if (activeHandle.includes('w')) {
            const maxDeltaLeft = init.width - 10;
            const adjustedDelta = Math.max(-init.x, Math.min(maxDeltaLeft, deltaImgX));
            newX = init.x + adjustedDelta;
            newW = init.width - adjustedDelta;
          }
          if (activeHandle.includes('n')) {
            const maxDeltaTop = init.height - 10;
            const adjustedDelta = Math.max(-init.y, Math.min(maxDeltaTop, deltaImgY));
            newY = init.y + adjustedDelta;
            newH = init.height - adjustedDelta;
          }
        }
      }

      onCropChange({
        x: Math.max(0, Math.min(origWidth - 10, Math.round(newX))),
        y: Math.max(0, Math.min(origHeight - 10, Math.round(newY))),
        width: Math.max(10, Math.min(origWidth - Math.round(newX), Math.round(newW))),
        height: Math.max(10, Math.min(origHeight - Math.round(newY), Math.round(newH))),
      });
    },
    [activeHandle, scaleX, scaleY, origWidth, origHeight, lockAspect, onCropChange]
  );

  const handlePointerUp = useCallback(() => {
    setActiveHandle(null);
    dragStartRef.current = null;
  }, []);

  useEffect(() => {
    if (activeHandle) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [activeHandle, handlePointerMove, handlePointerUp]);

  if (dims.width === 0 || dims.height === 0) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto select-none overflow-hidden"
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
              <rect x={boxX} y={boxY} width={boxW} height={boxH} fill="black" rx="2" />
            )}
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="rgba(0, 0, 0, 0.55)" mask="url(#crop-mask)" />
      </svg>

      {/* Interactive Selection Box */}
      <div
        className={`absolute border-2 border-white/90 shadow-2xl pointer-events-auto cursor-move touch-none ${
          isCircle ? 'rounded-full' : ''
        }`}
        style={{
          left: boxX,
          top: boxY,
          width: boxW,
          height: boxH,
          boxShadow: '0 0 0 1px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.3)',
        }}
        onPointerDown={(e) => handlePointerDown('move', e)}
      >
        {/* Rule of Thirds Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40">
          <div className="border-r border-b border-white/60" />
          <div className="border-r border-b border-white/60" />
          <div className="border-b border-white/60" />
          <div className="border-r border-b border-white/60" />
          <div className="border-r border-b border-white/60" />
          <div className="border-b border-white/60" />
          <div className="border-r border-b border-white/60" />
          <div className="border-r border-b border-white/60" />
          <div />
        </div>

        {/* Live Pixel Dimension Label */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 bg-black/90 text-white border border-white/20 font-mono text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none transition-all ${
            boxY < 28 ? 'top-2' : '-top-6'
          }`}
        >
          {crop.width} × {crop.height} px
        </div>

        {/* Corner Handles (Generous touch padding) */}
        <div
          className="absolute -top-3 -left-3 w-6 h-6 flex items-center justify-center cursor-nwse-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('nw', e)}
        >
          <div className="w-3.5 h-3.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center cursor-nesw-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('ne', e)}
        >
          <div className="w-3.5 h-3.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute -bottom-3 -left-3 w-6 h-6 flex items-center justify-center cursor-nesw-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('sw', e)}
        >
          <div className="w-3.5 h-3.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute -bottom-3 -right-3 w-6 h-6 flex items-center justify-center cursor-nwse-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('se', e)}
        >
          <div className="w-3.5 h-3.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>

        {/* Midpoint Edge Handles */}
        <div
          className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-8 flex items-center justify-center cursor-ew-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('w', e)}
        >
          <div className="w-2.5 h-5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-8 flex items-center justify-center cursor-ew-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('e', e)}
        >
          <div className="w-2.5 h-5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 flex items-center justify-center cursor-ns-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('n', e)}
        >
          <div className="w-5 h-2.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-6 flex items-center justify-center cursor-ns-resize pointer-events-auto touch-none"
          onPointerDown={(e) => handlePointerDown('s', e)}
        >
          <div className="w-5 h-2.5 bg-white border border-black/50 rounded-sm shadow-md" />
        </div>
      </div>
    </div>
  );
}
