import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  EyeOff,
  Download,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Trash2,
  Undo,
  Square,
  Circle,
  Grid,
  Copy,
  Check,
} from 'lucide-react';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';

interface CensorBox {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  mode: 'pixelate' | 'blur' | 'blackout';
  intensity: number;
  shape?: 'rect' | 'circle';
}

export function CensorImageWorkspace() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);

  // Tool Config
  const [censorMode, setCensorMode] = useState<'pixelate' | 'blur' | 'blackout'>('pixelate');
  const [intensity, setIntensity] = useState<number>(14);
  const [boxes, setBoxes] = useState<CensorBox[]>([]);

  // Drag-to-draw state
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number; shape?: 'rect' | 'circle' } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);
    setBoxes([]);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  // Images handed off from other tools / the homepage, and Ctrl+V paste
  useImageIntake(handleFileSelect);

  // Shape selection
  const [shape, setShape] = useState<'rect' | 'circle'>('rect');

  // Re-draw Canvas with all censor boxes
  useEffect(() => {
    if (!imgElement || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const naturalW = imgElement.naturalWidth || imgElement.width;
    const naturalH = imgElement.naturalHeight || imgElement.height;

    canvas.width = naturalW;
    canvas.height = naturalH;

    // 1. Draw base image
    ctx.drawImage(imgElement, 0, 0, naturalW, naturalH);

    // 2. Render each censor box
    const allBoxesToRender = [...boxes];
    if (currentBox && isDrawing) {
      allBoxesToRender.push({
        id: 'temp',
        ...currentBox,
        mode: censorMode,
        intensity: intensity,
        shape: currentBox.shape || shape,
      });
    }

    allBoxesToRender.forEach((b) => {
      const bx = Math.round(Math.max(0, Math.min(b.x, naturalW)));
      const by = Math.round(Math.max(0, Math.min(b.y, naturalH)));
      const bw = Math.round(Math.min(b.w, naturalW - bx));
      const bh = Math.round(Math.min(b.h, naturalH - by));

      if (bw <= 0 || bh <= 0) return;

      ctx.save();

      // Circle/Ellipse clipping path if circular shape
      if (b.shape === 'circle') {
        ctx.beginPath();
        ctx.ellipse(bx + bw / 2, by + bh / 2, bw / 2, bh / 2, 0, 0, Math.PI * 2);
        ctx.clip();
      }

      // Keep redaction strength consistent on high-resolution photos
      const strength = b.intensity * Math.max(1, Math.max(naturalW, naturalH) / 1200);

      const pixelate = (blockSize: number) => {
        const offCanvas = document.createElement('canvas');
        const offW = Math.max(1, Math.floor(bw / blockSize));
        const offH = Math.max(1, Math.floor(bh / blockSize));
        offCanvas.width = offW;
        offCanvas.height = offH;
        const offCtx = offCanvas.getContext('2d');
        if (offCtx) {
          // Draw from source image directly to avoid compound scaling blur
          offCtx.drawImage(imgElement, bx, by, bw, bh, 0, 0, offW, offH);
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(offCanvas, 0, 0, offW, offH, bx, by, bw, bh);
          ctx.imageSmoothingEnabled = true;
        }
      };

      if (b.mode === 'blackout') {
        ctx.fillStyle = '#000000';
        ctx.fillRect(bx, by, bw, bh);
      } else if (b.mode === 'pixelate') {
        pixelate(Math.max(4, strength));
      } else if (b.mode === 'blur') {
        // Opaque coarse base first: covers blur edge falloff at image borders and browsers without ctx.filter
        pixelate(Math.max(8, strength * 2));

        // Blur a padded region so the kernel never samples transparency inside the box, then keep the inner part
        const pad = Math.ceil(strength * 2);
        const sx = Math.max(0, bx - pad);
        const sy = Math.max(0, by - pad);
        const sw = Math.min(naturalW, bx + bw + pad) - sx;
        const sh = Math.min(naturalH, by + bh + pad) - sy;
        const offCanvas = document.createElement('canvas');
        offCanvas.width = sw;
        offCanvas.height = sh;
        const offCtx = offCanvas.getContext('2d');
        if (offCtx) {
          offCtx.filter = `blur(${strength}px)`;
          offCtx.drawImage(imgElement, sx, sy, sw, sh, 0, 0, sw, sh);
          ctx.drawImage(offCanvas, bx - sx, by - sy, bw, bh, bx, by, bw, bh);
        }
      }

      ctx.restore();

      // Draw dashed selection border if currently drawing
      if (b.id === 'temp') {
        ctx.save();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(2, Math.round(naturalW / 600));
        ctx.setLineDash([8, 8]);
        if (b.shape === 'circle') {
          ctx.beginPath();
          ctx.ellipse(bx + bw / 2, by + bh / 2, bw / 2, bh / 2, 0, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.strokeRect(bx, by, bw, bh);
        }
        ctx.restore();
      }
    });
  }, [imgElement, boxes, currentBox, isDrawing, censorMode, intensity, shape]);

  // Coordinate mapping from mouse/touch to image natural pixels
  const getCoordsFromPoint = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const coords = getCoordsFromPoint(e.clientX, e.clientY);
    setIsDrawing(true);
    setStartPos(coords);
    setCurrentBox({ x: coords.x, y: coords.y, w: 0, h: 0, shape });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos) return;
    const coords = getCoordsFromPoint(e.clientX, e.clientY);

    const x = Math.min(startPos.x, coords.x);
    const y = Math.min(startPos.y, coords.y);
    const w = Math.abs(coords.x - startPos.x);
    const h = Math.abs(coords.y - startPos.y);

    setCurrentBox({ x, y, w, h, shape });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    const coords = getCoordsFromPoint(touch.clientX, touch.clientY);
    setIsDrawing(true);
    setStartPos(coords);
    setCurrentBox({ x: coords.x, y: coords.y, w: 0, h: 0, shape });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const coords = getCoordsFromPoint(touch.clientX, touch.clientY);

    const x = Math.min(startPos.x, coords.x);
    const y = Math.min(startPos.y, coords.y);
    const w = Math.abs(coords.x - startPos.x);
    const h = Math.abs(coords.y - startPos.y);

    setCurrentBox({ x, y, w, h, shape });
  };

  const handleEndDrawing = () => {
    if (isDrawing && currentBox && currentBox.w > 5 && currentBox.h > 5) {
      setBoxes((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          ...currentBox,
          mode: censorMode,
          intensity: intensity,
          shape: currentBox.shape || shape,
        },
      ]);
    }
    setIsDrawing(false);
    setStartPos(null);
    setCurrentBox(null);
  };

  const handleUndo = () => {
    setBoxes((prev) => prev.slice(0, -1));
  };

  const handleClearAll = () => {
    setBoxes([]);
  };

  const handleDownload = (format: 'png' | 'jpeg' | 'webp' = 'png') => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `redacted-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvasRef.current.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  const [copiedToast, setCopiedToast] = useState(false);

  const handleCopyClipboard = async () => {
    if (!canvasRef.current) return;
    try {
      const blob = await new Promise<Blob | null>((res) => canvasRef.current?.toBlob(res, 'image/png', 1.0));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.error('Copy to clipboard failed:', err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Interactive Drawing Canvas Area (Order 1 on mobile, Order 2 on desktop) */}
          <div className="min-w-0 order-1 space-y-4">
            <div
              ref={containerRef}
              className="canvas-checkerboard border border-ink p-4 min-h-[360px] sm:min-h-[480px] flex items-center justify-center relative select-none touch-none"
            >
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleEndDrawing}
                onMouseLeave={handleEndDrawing}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleEndDrawing}
                onTouchCancel={handleEndDrawing}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-pencil cursor-crosshair touch-none"
              />
            </div>
          </div>

          {/* Controls Sidebar (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 space-y-5 bg-paper-bright border border-ink p-5">
            <div>
              <h3 className="text-base font-bold text-ink flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-ink" />
                <span>Censor Tool Settings</span>
              </h3>
              <p className="text-[14px] text-graphite mt-1">
                Drag on the photo to draw a censor region. Touch supported on phones.
              </p>
            </div>

            {/* Shape Switch: Rectangle vs Circle */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-graphite uppercase tracking-wider block">
                Redaction Shape
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShape('rect')}
                  className={`py-2 px-3 rounded-xl border text-[14px] font-medium flex items-center justify-center gap-2 transition-all ${
                    shape === 'rect'
                      ? 'border-ink bg-paper-stock text-ink font-bold'
                      : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                  }`}
                >
                  <Square className="w-3.5 h-3.5" />
                  <span>Rectangle</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShape('circle')}
                  className={`py-2 px-3 rounded-xl border text-[14px] font-medium flex items-center justify-center gap-2 transition-all ${
                    shape === 'circle'
                      ? 'border-ink bg-paper-stock text-ink font-bold'
                      : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                  }`}
                >
                  <Circle className="w-3.5 h-3.5" />
                  <span>Circle / Oval</span>
                </button>
              </div>
            </div>

            {/* Censor Modes */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-graphite uppercase tracking-wider block">
                Redaction Style
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setCensorMode('pixelate')}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    censorMode === 'pixelate'
                      ? 'border-ink bg-paper-stock text-ink shadow-md'
                      : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-ink">Mosaic Pixelation</span>
                    <Grid className="w-4 h-4 text-ink" />
                  </div>
                  <p className="text-[14px] text-graphite mt-1">Retro block mosaic pixelation</p>
                </button>

                <button
                  type="button"
                  onClick={() => setCensorMode('blur')}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    censorMode === 'blur'
                      ? 'border-ink bg-paper-stock text-ink shadow-md'
                      : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-ink">Gaussian Blur</span>
                    <Sparkles className="w-4 h-4 text-ink" />
                  </div>
                  <p className="text-[14px] text-graphite mt-1">Smooth heavy Gaussian defocus blur</p>
                </button>

                <button
                  type="button"
                  onClick={() => setCensorMode('blackout')}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    censorMode === 'blackout'
                      ? 'border-ink bg-paper-stock text-ink shadow-md'
                      : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-ink">Solid Blackout Bar</span>
                    <Square className="w-4 h-4 text-graphite" />
                  </div>
                  <p className="text-[14px] text-graphite mt-1">100% opaque black redaction box</p>
                </button>
              </div>
            </div>

            {/* Intensity Slider */}
            {censorMode !== 'blackout' && (
              <div className="space-y-1.5 pt-2 border-t border-pencil">
                <div className="flex justify-between text-[14px] text-body">
                  <span>{censorMode === 'pixelate' ? 'Block Size' : 'Blur Radius'}</span>
                  <span className="font-mono text-graphite">{intensity}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="45"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full h-1.5 bg-paper-stock rounded-lg appearance-none cursor-pointer accent-ink"
                />
              </div>
            )}

            {/* Box List & History Actions */}
            <div className="pt-3 border-t border-pencil space-y-2">
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-graphite">
                  Active Redactions: <strong className="text-ink">{boxes.length}</strong>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={boxes.length === 0}
                    onClick={handleUndo}
                    className="text-[14px] text-graphite hover:text-ink flex items-center gap-1 disabled:opacity-40 transition-colors py-1 px-2 rounded-md hover:bg-paper-stock"
                  >
                    <Undo className="w-3.5 h-3.5" />
                    <span>Undo</span>
                  </button>
                  <button
                    type="button"
                    disabled={boxes.length === 0}
                    onClick={handleClearAll}
                    className="text-[14px] text-accent-red hover:text-accent-red flex items-center gap-1 disabled:opacity-40 transition-colors py-1 px-2 rounded-md hover:bg-paper-stock"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Download and Copy Buttons */}
            <div className="pt-3 border-t border-pencil space-y-2">
              <button
                type="button"
                onClick={() => handleDownload('png')}
                className="w-full py-3 px-4 rounded-xl bg-process-key hover:bg-process-key text-ink font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Redacted Image (PNG)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                className="w-full py-2.5 px-3 rounded-xl bg-paper-stock hover:bg-pencil-soft text-ink text-[14px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copiedToast ? (
                  <>
                    <Check className="w-4 h-4 text-accent-green" />
                    <span className="text-accent-green">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Redacted Image</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleDownload('webp')}
                  className="py-2 px-3 rounded-xl bg-paper-stock hover:bg-pencil-soft text-body text-[14px] font-medium transition-all cursor-pointer text-center"
                >
                  Download WebP
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload('jpeg')}
                  className="py-2 px-3 rounded-xl bg-paper-stock hover:bg-pencil-soft text-body text-[14px] font-medium transition-all cursor-pointer text-center"
                >
                  Download JPG
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedFile(null);
                  setImgElement(null);
                  setBoxes([]);
                }}
                className="w-full py-2 px-4 rounded-xl bg-transparent hover:bg-paper-stock text-graphite hover:text-ink text-[14px] font-medium transition-all cursor-pointer"
              >
                Choose Different Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
