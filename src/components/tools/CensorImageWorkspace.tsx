import React, { useState, useRef, useEffect } from 'react';
import { EyeOff, Download, Trash2, Undo2, Square, Circle, Copy, Check, AlertCircle } from 'lucide-react';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';

type CensorMode = 'pixelate' | 'blur' | 'blackout';
type OutputFormat = 'png' | 'jpeg' | 'webp';

const MODES: { id: CensorMode; labelKey: StringKey; descKey: StringKey }[] = [
  { id: 'pixelate', labelKey: 'ctl.censor.modePixelate', descKey: 'ctl.censor.descPixelate' },
  { id: 'blur', labelKey: 'ctl.censor.modeBlur', descKey: 'ctl.censor.descBlur' },
  { id: 'blackout', labelKey: 'ctl.censor.modeBlackout', descKey: 'ctl.censor.descBlackout' },
];

const FORMAT_LABEL: Record<OutputFormat, string> = { png: 'PNG', jpeg: 'JPG', webp: 'WebP' };

/** True when the keyboard focus is somewhere typing should win over shortcuts */
function isTextField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  if (target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return true;
  if (target instanceof HTMLInputElement) {
    return !['range', 'checkbox', 'radio', 'button', 'submit', 'reset', 'color', 'file'].includes(target.type);
  }
  return false;
}

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
  const t = useT();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);

  // Tool Config
  const [censorMode, setCensorMode] = useState<CensorMode>('pixelate');
  const [format, setFormat] = useState<OutputFormat>('png');
  const [intensity, setIntensity] = useState<number>(14);
  const [boxes, setBoxes] = useState<CensorBox[]>([]);

  // Drag-to-draw state
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number; shape?: 'rect' | 'circle' } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        ctx.strokeStyle = '#e4007c';
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

  // Ctrl+Z / Cmd+Z removes the last box, unless the user is typing in a field
  const hasBoxes = boxes.length > 0;
  useEffect(() => {
    if (!imgElement || !hasBoxes) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey || e.key.toLowerCase() !== 'z') return;
      if (isTextField(e.target)) return;
      e.preventDefault();
      setBoxes((prev) => prev.slice(0, -1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [imgElement, hasBoxes]);

  const handleDownload = (format: OutputFormat = 'png') => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `redacted-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvasRef.current.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  const [copiedToast, setCopiedToast] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const handleCopyClipboard = async () => {
    if (!canvasRef.current) return;
    setCopyError(null);
    try {
      const blob = await new Promise<Blob | null>((res) => canvasRef.current?.toBlob(res, 'image/png', 1.0));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.error('Copy to clipboard failed:', err);
      setCopyError(t('ctl.censor.errCopy'));
    }
  };

  const loaded = Boolean(selectedFile && imgElement);
  const imgW = imgElement?.naturalWidth || imgElement?.width || 0;
  const imgH = imgElement?.naturalHeight || imgElement?.height || 0;
  const activeMode = MODES.find((m) => m.id === censorMode) ?? MODES[0];
  const downloadLabel = t('ctl.censor.download', { format: FORMAT_LABEL[format] });

  const segmentClass = (selected: boolean) =>
    `min-h-[40px] px-2 text-[14px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
      selected ? 'seg-on' : 'seg-off'
    }`;

  return (
    <div className={`w-full max-w-6xl mx-auto space-y-6 ${loaded ? 'pb-20 lg:pb-0' : ''}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
          e.target.value = '';
        }}
      />

      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Proof sheet: drawing happens on the canvas only, so the page still scrolls around it on phones */}
          <div className="min-w-0 space-y-3">
            <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10 select-none">
              <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
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
                aria-label={t('ctl.censor.canvasLabel')}
                className="block max-h-[70vh] w-auto max-w-full object-contain cursor-crosshair touch-none"
              />
              </div>
            </div>

            {/* Job ticket */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ws.source')}</span>
                <span className="text-ink font-semibold">{imgW} × {imgH} px</span>
              </span>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ctl.censor.boxes')}</span>
                <span className="text-ink font-semibold" aria-live="polite">{boxes.length}</span>
              </span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="ml-auto text-[14px] font-medium text-ink underline hover:no-underline"
              >
                {t('ws.replace')}
              </button>
            </div>
            <p className="text-[14px] text-graphite">{t('ctl.censor.hint')}</p>
          </div>

          {/* Ruled control panel */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="border border-ink bg-paper-bright">
              <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-ink" aria-hidden="true" />
                {t('ctl.censor.settings')}
              </h2>
              <div className="p-4 space-y-4 text-[15px]">
                {/* Shape */}
                <div className="space-y-1.5">
                  <span className="slug">{t('ctl.censor.shape')}</span>
                  <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.censor.shape')}>
                    <button type="button" aria-pressed={shape === 'rect'} onClick={() => setShape('rect')} className={segmentClass(shape === 'rect')}>
                      <Square className="w-4 h-4" aria-hidden="true" />
                      <span>{t('ctl.censor.shapeRect')}</span>
                    </button>
                    <button type="button" aria-pressed={shape === 'circle'} onClick={() => setShape('circle')} className={segmentClass(shape === 'circle')}>
                      <Circle className="w-4 h-4" aria-hidden="true" />
                      <span>{t('ctl.censor.shapeOval')}</span>
                    </button>
                  </div>
                </div>

                {/* Style */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ctl.censor.style')}</span>
                  <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.censor.style')}>
                    {MODES.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        aria-pressed={censorMode === m.id}
                        onClick={() => setCensorMode(m.id)}
                        className={segmentClass(censorMode === m.id)}
                      >
                        {t(m.labelKey)}
                      </button>
                    ))}
                  </div>
                  <p className="text-[14px] text-graphite">{t(activeMode.descKey)}</p>
                </div>

                {/* Strength */}
                {censorMode !== 'blackout' && (
                  <label className="block space-y-1.5">
                    <span className="flex items-center justify-between">
                      <span className="slug">{censorMode === 'pixelate' ? t('ctl.censor.blockSize') : t('ctl.censor.blurStrength')}</span>
                      <span className="font-semibold text-ink" data-measure>{intensity} px</span>
                    </span>
                    <input
                      type="range"
                      min="4"
                      max="45"
                      value={intensity}
                      onChange={(e) => setIntensity(Number(e.target.value))}
                      className="w-full"
                    />
                  </label>
                )}

                {/* History */}
                <div className="space-y-2 pt-4 border-t border-ink">
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" disabled={boxes.length === 0} onClick={handleUndo} className="btn-rule disabled:opacity-40 disabled:pointer-events-none">
                      <Undo2 className="w-4 h-4" aria-hidden="true" />
                      <span>{t('ctl.censor.undo')}</span>
                    </button>
                    <button type="button" disabled={boxes.length === 0} onClick={handleClearAll} className="btn-rule disabled:opacity-40 disabled:pointer-events-none">
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                      <span>{t('ctl.censor.clearAll')}</span>
                    </button>
                  </div>
                  <p className="text-[13px] text-graphite">{t('ctl.censor.undoShortcut')}</p>
                </div>

                {/* Output format */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ctl.censor.saveAs')}</span>
                  <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.censor.outputFormat')}>
                    {(['png', 'jpeg', 'webp'] as const).map((fmt) => (
                      <button key={fmt} type="button" aria-pressed={format === fmt} onClick={() => setFormat(fmt)} className={segmentClass(format === fmt)}>
                        {FORMAT_LABEL[fmt]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="hidden lg:block">
                <button type="button" onClick={() => handleDownload(format)} className="btn-ink w-full min-h-[52px] text-[16px]">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>{downloadLabel}</span>
                </button>
              </div>

              <button type="button" onClick={handleCopyClipboard} className="btn-rule w-full">
                {copiedToast ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span aria-live="polite">{copiedToast ? t('ctl.censor.copied') : t('ctl.censor.copy')}</span>
              </button>

              {copyError && (
                <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-red leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{copyError}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Phones: the primary action stays under the thumb */}
      {loaded && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button type="button" onClick={() => handleDownload(format)} className="btn-ink w-full min-h-[48px] text-[16px]">
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>{downloadLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
