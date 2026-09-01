'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  RotateCcw, 
  RotateCw, 
  FlipHorizontal, 
  FlipVertical, 
  Download, 
  RefreshCw, 
  Check, 
  ZoomIn,
  Loader2,
  Sliders
} from 'lucide-react';
import { LoadedImage, ExportFormat, CropRect } from '@/types/image';
import { processCrop } from '@/lib/canvas/crop';
import { triggerDownload, formatBytes } from '@/lib/canvas/file-utils';

interface CropViewProps {
  image: LoadedImage;
  onResetImage: () => void;
}

type AspectRatioOption = {
  id: string;
  name: string;
  ratio: number | null;
  isCircle?: boolean;
};

const ASPECT_RATIO_PRESETS: AspectRatioOption[] = [
  { id: 'free', name: 'Freeform', ratio: null },
  { id: '1:1', name: '1:1 Square', ratio: 1 },
  { id: '16:9', name: '16:9 Landscape', ratio: 16 / 9 },
  { id: '9:16', name: '9:16 Story', ratio: 9 / 16 },
  { id: '4:3', name: '4:3 Standard', ratio: 4 / 3 },
  { id: '3:2', name: '3:2 Photo', ratio: 3 / 2 },
  { id: '21:9', name: '21:9 Cinema', ratio: 21 / 9 },
  { id: 'circle', name: 'Circle / Avatar', ratio: 1, isCircle: true },
];

export const CropView: React.FC<CropViewProps> = ({ image, onResetImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [selectedRatio, setSelectedRatio] = useState<AspectRatioOption>(ASPECT_RATIO_PRESETS[0]);
  const [rotationStep, setRotationStep] = useState<number>(0); // 0, 90, 180, 270
  const [fineAngle, setFineAngle] = useState<number>(0); // -45 to +45
  const [zoom, setZoom] = useState<number>(1); // 1 to 3
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [exportFormat, setExportFormat] = useState<ExportFormat>('image/webp');
  const [quality, setQuality] = useState<number>(0.92);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Total rotation angle in degrees
  const totalRotation = (rotationStep + fineAngle) % 360;

  // Normalized crop rectangle [0..1]
  const [cropBox, setCropBox] = useState<{ x: number; y: number; width: number; height: number }>({
    x: 0.1,
    y: 0.1,
    width: 0.8,
    height: 0.8
  });

  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [startCrop, setStartCrop] = useState<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, width: 0, height: 0 });

  // Calculate transformed bounding dimensions of canvas
  const rad = (totalRotation * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad));
  const cos = Math.abs(Math.cos(rad));
  const rotWidth = Math.round(image.width * cos + image.height * sin);
  const rotHeight = Math.round(image.width * sin + image.height * cos);

  // Initialize or reset crop box when ratio changes
  const applyRatio = useCallback((preset: AspectRatioOption) => {
    setSelectedRatio(preset);
    if (!preset.ratio) {
      setCropBox({ x: 0.1, y: 0.1, width: 0.8, height: 0.8 });
      return;
    }

    const currentAspect = rotWidth / rotHeight;
    const targetRatio = preset.ratio;

    let newWidth = 0.8;
    let newHeight = (newWidth * currentAspect) / targetRatio;

    if (newHeight > 0.8) {
      newHeight = 0.8;
      newWidth = (newHeight * targetRatio) / currentAspect;
    }

    setCropBox({
      x: Math.max(0, (1 - newWidth) / 2),
      y: Math.max(0, (1 - newHeight) / 2),
      width: Math.min(1, newWidth),
      height: Math.min(1, newHeight)
    });
  }, [rotWidth, rotHeight]);

  // Handle Drag / Resize interactions with pointer capture
  const handlePointerDown = (e: React.PointerEvent, handle: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(handle);
    setDragStart({ x: e.clientX, y: e.clientY });
    setStartCrop({ ...cropBox });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - dragStart.x) / rect.width;
    const dy = (e.clientY - dragStart.y) / rect.height;

    let newBox = { ...startCrop };

    if (isDragging === 'move') {
      newBox.x = Math.max(0, Math.min(1 - startCrop.width, startCrop.x + dx));
      newBox.y = Math.max(0, Math.min(1 - startCrop.height, startCrop.y + dy));
    } else if (isDragging === 'se') {
      const targetW = Math.max(0.1, Math.min(1 - startCrop.x, startCrop.width + dx));
      if (selectedRatio.ratio) {
        const currentAspect = rotWidth / rotHeight;
        const targetH = (targetW * currentAspect) / selectedRatio.ratio;
        if (startCrop.y + targetH <= 1) {
          newBox.width = targetW;
          newBox.height = targetH;
        }
      } else {
        newBox.width = targetW;
        newBox.height = Math.max(0.1, Math.min(1 - startCrop.y, startCrop.height + dy));
      }
    } else if (isDragging === 'nw') {
      const targetX = Math.max(0, Math.min(startCrop.x + startCrop.width - 0.1, startCrop.x + dx));
      const targetW = startCrop.width + (startCrop.x - targetX);
      newBox.x = targetX;
      newBox.width = targetW;
      const targetY = Math.max(0, Math.min(startCrop.y + startCrop.height - 0.1, startCrop.y + dy));
      newBox.y = targetY;
      newBox.height = startCrop.height + (startCrop.y - targetY);
    }

    setCropBox(newBox);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      setIsDragging(null);
    }
  };

  // Pixel Dimensions calculation based on transformed coordinate space
  const cropPixelWidth = Math.max(1, Math.round(cropBox.width * rotWidth));
  const cropPixelHeight = Math.max(1, Math.round(cropBox.height * rotHeight));

  const handleExecuteCrop = async () => {
    if (!imgRef.current) return;
    setIsProcessing(true);
    try {
      const cropRect: CropRect = {
        x: Math.round(cropBox.x * rotWidth),
        y: Math.round(cropBox.y * rotHeight),
        width: cropPixelWidth,
        height: cropPixelHeight
      };

      const result = await processCrop(
        imgRef.current,
        {
          rect: cropRect,
          rotation: totalRotation,
          flipHorizontal: flipH,
          flipVertical: flipV,
          isCircular: selectedRatio.isCircle || false,
          format: exportFormat,
          quality
        },
        image.name,
        image.size
      );

      triggerDownload(result.blob, result.filename);
    } catch (err) {
      console.error('Crop processing failed:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Canvas Viewport (8 Cols) */}
      <div className="lg:col-span-8 space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 overflow-hidden shadow-sm flex flex-col">
          
          {/* Top Info Bar */}
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Crop Area: <strong className="text-brand-400">{cropPixelWidth} × {cropPixelHeight} px</strong></span>
            <span>Original: {image.width} × {image.height} px ({formatBytes(image.size)})</span>
          </div>

          {/* Interactive Workspace Area */}
          <div className="relative min-h-[380px] max-h-[580px] w-full flex items-center justify-center p-4 bg-checkerboard select-none overflow-hidden touch-none">
            <div 
              ref={containerRef}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative inline-block max-w-full max-h-[500px]"
            >
              <img
                ref={imgRef}
                src={image.objectUrl}
                alt="Source crop preview"
                className="max-h-[500px] w-auto object-contain block pointer-events-none"
                style={{
                  transform: `scale(${zoom}) rotate(${totalRotation}deg) scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease'
                }}
              />

              {/* Crop Overlay Boundary */}
              <div
                style={{
                  left: `${cropBox.x * 100}%`,
                  top: `${cropBox.y * 100}%`,
                  width: `${cropBox.width * 100}%`,
                  height: `${cropBox.height * 100}%`,
                  borderRadius: selectedRatio.isCircle ? '50%' : '4px'
                }}
                className="absolute border-2 border-brand-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] cursor-move touch-none"
                onPointerDown={(e) => handlePointerDown(e, 'move')}
              >
                {/* Rule of thirds grid lines */}
                {!selectedRatio.isCircle && (
                  <>
                    <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/30 pointer-events-none" />
                    <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-white/30 pointer-events-none" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/30 pointer-events-none" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/30 pointer-events-none" />
                  </>
                )}

                {/* Resize Handles */}
                <div
                  onPointerDown={(e) => handlePointerDown(e, 'se')}
                  aria-label="Resize bottom-right handle"
                  className="absolute -right-2.5 -bottom-2.5 w-5 h-5 rounded-full bg-brand-500 border-2 border-white shadow cursor-se-resize touch-none"
                />
                <div
                  onPointerDown={(e) => handlePointerDown(e, 'nw')}
                  aria-label="Resize top-left handle"
                  className="absolute -left-2.5 -top-2.5 w-5 h-5 rounded-full bg-brand-500 border-2 border-white shadow cursor-nw-resize touch-none"
                />
              </div>
            </div>
          </div>

          {/* Transformation Controls Bar */}
          <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setRotationStep((r) => (r - 90 + 360) % 360)}
                title="Rotate Left 90°"
                aria-label="Rotate Left 90 degrees"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>-90°</span>
              </button>

              <button
                onClick={() => setRotationStep((r) => (r + 90) % 360)}
                title="Rotate Right 90°"
                aria-label="Rotate Right 90 degrees"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>+90°</span>
              </button>

              <button
                onClick={() => setFlipH(!flipH)}
                aria-label="Flip Horizontally"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${
                  flipH ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span>Flip X</span>
              </button>

              <button
                onClick={() => setFlipV(!flipV)}
                aria-label="Flip Vertically"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${
                  flipV ? 'bg-brand-600 text-white border-brand-500' : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <FlipVertical className="w-3.5 h-3.5" />
                <span>Flip Y</span>
              </button>
            </div>

            <button
              onClick={() => {
                setRotationStep(0);
                setFineAngle(0);
                setZoom(1);
                setFlipH(false);
                setFlipV(false);
                applyRatio(selectedRatio);
              }}
              title="Reset transformations"
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>

        {/* Fine-Tuning Sliders (Angle & Zoom) */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1.5">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Sliders className="w-3.5 h-3.5 text-brand-500" />
                <span>Fine Rotation</span>
              </span>
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{fineAngle}°</span>
            </div>
            <input
              type="range"
              min="-45"
              max="45"
              step="1"
              value={fineAngle}
              onChange={(e) => setFineAngle(parseInt(e.target.value))}
              aria-label="Fine Rotation Slider"
              className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ZoomIn className="w-3.5 h-3.5 text-brand-500" />
                <span>Zoom Scale</span>
              </span>
              <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{zoom.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              aria-label="Zoom Scale Slider"
              className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
          </div>
        </div>

      </div>

      {/* Control Sidebar (4 Cols) */}
      <div className="lg:col-span-4 space-y-5">
        
        {/* Aspect Ratio Presets */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-3">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>Aspect Ratio</span>
            <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold">
              {selectedRatio.name}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {ASPECT_RATIO_PRESETS.map((preset) => {
              const isSelected = selectedRatio.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => applyRatio(preset)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-brand-50 dark:bg-brand-950/50 border-brand-500 text-brand-700 dark:text-brand-300 font-semibold'
                      : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span>{preset.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Export Settings & Download */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm space-y-4">
          <div className="font-semibold text-sm text-slate-900 dark:text-slate-100">
            Export Options
          </div>

          {/* Format Selector */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-500 dark:text-slate-400 font-medium">Output Format</label>
            <div className="grid grid-cols-3 gap-2">
              {(['image/webp', 'image/png', 'image/jpeg'] as ExportFormat[]).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setExportFormat(fmt)}
                  className={`py-2 rounded-xl text-xs font-semibold border uppercase transition-colors ${
                    exportFormat === fmt
                      ? 'bg-brand-600 text-white border-brand-500'
                      : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {fmt.replace('image/', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Quality Slider (for WebP & JPG) */}
          {exportFormat !== 'image/png' ? (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Quality</span>
                <span className="font-mono text-brand-600 dark:text-brand-400 font-bold">{Math.round(quality * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                aria-label="Export Quality Slider"
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>
          ) : (
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              PNG format is lossless (ideal for graphics and transparency).
            </div>
          )}

          {/* Download Action */}
          <button
            onClick={handleExecuteCrop}
            disabled={isProcessing}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Cropped Image</span>
              </>
            )}
          </button>

          <button
            onClick={onResetImage}
            className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
          >
            Upload Different Image
          </button>
        </div>

      </div>

    </div>
  );
};
