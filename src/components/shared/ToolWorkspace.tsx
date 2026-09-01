import React, { useState, useEffect, useRef } from 'react';
import {
  UploadCloud,
  Download,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Scissors,
  Layers,
  Sparkles,
  Zap,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Sliders,
  Archive,
} from 'lucide-react';
import {
  loadImage,
  processCanvas,
  canvasToBlob,
  downloadBlob,
  generateFaviconBundle,
} from '../../lib/canvas/engine';

interface Props {
  slug: string;
  toolName: string;
  accept?: string;
}

export function ToolWorkspace({ slug, toolName, accept = 'image/*' }: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState<string>('image');

  // Interactive tool states
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<string>('free');
  const [quality, setQuality] = useState<number>(85);
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/png');
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [cornerRadius, setCornerRadius] = useState<number>(0);
  const [borderWidth, setBorderWidth] = useState<number>(0);
  const [borderColor, setBorderColor] = useState<string>('#57c1ff');
  const [overlayText, setOverlayText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#ffffff');
  const [textOpacity, setTextOpacity] = useState<number>(0.9);
  const [textSize, setTextSize] = useState<number>(36);
  const [textPos, setTextPos] = useState<'top' | 'center' | 'bottom'>('center');

  // Eyedropper & Analyzer
  const [selectedColor, setSelectedColor] = useState<string>('#57c1ff');
  const [copied, setCopied] = useState(false);

  // Developer strings
  const [base64Output, setBase64Output] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check cached image from homepage dropzone
  useEffect(() => {
    const cached = sessionStorage.getItem('it_cached_image');
    const cachedName = sessionStorage.getItem('it_cached_filename');
    if (cached) {
      sessionStorage.removeItem('it_cached_image');
      sessionStorage.removeItem('it_cached_filename');
      fetch(cached)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], cachedName || 'image.png', { type: blob.type });
          handleFile(file);
        });
    }
  }, []);

  // Handle file loading
  const handleFile = async (file: File) => {
    try {
      setIsProcessing(true);
      setImageFile(file);
      setFilename(file.name.replace(/\.[^/.]+$/, ''));
      const img = await loadImage(file);
      setImageElement(img);
      setWidth(img.naturalWidth || img.width);
      setHeight(img.naturalHeight || img.height);

      if (slug.includes('webp')) setFormat('image/webp');
      else if (slug.includes('jpg') || slug.includes('jpeg')) setFormat('image/jpeg');
      else setFormat('image/png');

      setIsProcessing(false);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  // Re-render canvas preview
  useEffect(() => {
    if (!imageElement || !canvasRef.current) return;

    try {
      const processed = processCanvas(imageElement, {
        width: width || imageElement.naturalWidth,
        height: height || imageElement.naturalHeight,
        rotation,
        flipH,
        flipV,
        cornerRadius: slug === 'round-image' ? (cornerRadius || Math.min(width, height) / 2) : cornerRadius,
        border: borderWidth > 0 ? { width: borderWidth, color: borderColor } : undefined,
        textOverlay: overlayText ? { text: overlayText, fontSize: textSize, color: textColor, position: textPos, opacity: textOpacity } : undefined,
      });

      const displayCanvas = canvasRef.current;
      displayCanvas.width = processed.width;
      displayCanvas.height = processed.height;
      const ctx = displayCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
        ctx.drawImage(processed, 0, 0);
      }

      if (slug === 'image-to-base64' || slug === 'image-to-data-uri') {
        const dataUrl = displayCanvas.toDataURL(format, quality / 100);
        setBase64Output(slug === 'image-to-base64' ? dataUrl.split(',')[1] : dataUrl);
      }
    } catch (err) {
      console.error('Canvas processing error:', err);
    }
  }, [
    imageElement,
    width,
    height,
    rotation,
    flipH,
    flipV,
    cornerRadius,
    borderWidth,
    borderColor,
    overlayText,
    textColor,
    textOpacity,
    textSize,
    textPos,
    format,
    quality,
    slug,
  ]);

  // Handle Download
  const handleDownload = async () => {
    if (!canvasRef.current || !imageElement) return;

    if (slug === 'favicon-generator') {
      await generateFaviconBundle(imageElement, `${filename}-favicon-package.zip`);
      return;
    }

    const blob = await canvasToBlob(canvasRef.current, format, quality / 100);
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(blob, `${filename}-edited.${ext}`);
  };

  // Eyedropper click handler
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
    setSelectedColor(hex);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl">
      {!imageElement ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border border-dashed border-hairline hover:border-hairline-strong rounded-lg p-12 sm:p-16 text-center cursor-pointer bg-surface-elevated/40 hover:bg-surface-elevated transition-all flex flex-col items-center justify-center space-y-4"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />
          <div className="w-12 h-12 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-accent-red">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink tracking-tight">
              Select or Drop an Image to use with {toolName}
            </h3>
            <p className="text-xs text-mute mt-1">
              Supports PNG, JPG, WebP, SVG, AVIF — 100% Client-Side Processing
            </p>
          </div>
          <button className="px-4 py-2 rounded-md bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors">
            Choose File
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Canvas Viewport (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-lg border border-hairline overflow-hidden canvas-checkerboard flex items-center justify-center min-h-[380px] max-h-[550px] p-4">
              <canvas
                ref={canvasRef}
                onClick={slug.includes('color') ? handleCanvasClick : undefined}
                className={`max-w-full max-h-[500px] object-contain rounded shadow-2xl ${
                  slug.includes('color') ? 'cursor-crosshair' : ''
                }`}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-surface-elevated border border-hairline rounded-md text-xs font-mono text-mute">
              <div className="flex items-center gap-3">
                <span>{width} × {height} px</span>
                <span>•</span>
                <span>Format: {format.replace('image/', '').toUpperCase()}</span>
              </div>
              <button
                onClick={() => {
                  setImageElement(null);
                  setImageFile(null);
                }}
                className="text-[11px] text-mute hover:text-ink transition-colors"
              >
                Upload Different Image
              </button>
            </div>
          </div>

          {/* Right Precision Control Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-surface-elevated border border-hairline rounded-lg space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-accent-blue" />
                <span>Tool Controls</span>
              </h4>

              {/* Crop Aspect Ratio Chips */}
              {(slug === 'crop-image' || slug === 'resize-image') && (
                <div className="space-y-2">
                  <label className="text-xs font-medium text-body">Aspect Ratio</label>
                  <div className="grid grid-cols-5 gap-1.5 text-xs font-mono">
                    {['free', '1:1', '16:9', '4:3', '9:16'].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => {
                          setAspectRatio(ratio);
                          if (ratio === '1:1') setHeight(width);
                          else if (ratio === '16:9') setHeight(Math.round((width * 9) / 16));
                          else if (ratio === '4:3') setHeight(Math.round((width * 3) / 4));
                          else if (ratio === '9:16') setHeight(Math.round((width * 16) / 9));
                        }}
                        className={`py-1.5 rounded-md border text-center transition-all ${
                          aspectRatio === ratio
                            ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
                            : 'border-hairline text-mute hover:bg-surface-card hover:text-ink'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions Input */}
              {(slug === 'resize-image' || slug === 'bulk-image-resizer' || slug === 'crop-image') && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-mute">Width (px)</label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value) || 1)}
                      className="w-full bg-surface-card border border-hairline rounded-md px-3 py-1.5 text-xs text-ink focus:outline-none focus:border-hairline-strong"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-mute">Height (px)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || 1)}
                      className="w-full bg-surface-card border border-hairline rounded-md px-3 py-1.5 text-xs text-ink focus:outline-none focus:border-hairline-strong"
                    />
                  </div>
                </div>
              )}

              {/* Transform Controls (Rotate / Flip) */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-body">Orientation</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRotation((prev) => (prev + 90) % 360)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-surface-card hover:bg-surface border border-hairline rounded-md text-xs text-body transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Rotate 90° ({rotation}°)</span>
                  </button>
                  <button
                    onClick={() => setFlipH(!flipH)}
                    className={`p-2 rounded-md border transition-colors ${
                      flipH ? 'bg-surface-card border-hairline-strong text-ink' : 'bg-surface-card border-hairline text-mute hover:text-ink'
                    }`}
                    title="Flip Horizontal"
                  >
                    <FlipHorizontal className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setFlipV(!flipV)}
                    className={`p-2 rounded-md border transition-colors ${
                      flipV ? 'bg-surface-card border-hairline-strong text-ink' : 'bg-surface-card border-hairline text-mute hover:text-ink'
                    }`}
                    title="Flip Vertical"
                  >
                    <FlipVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quality & Format Slider */}
              <div className="space-y-3 pt-2 border-t border-hairline">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-body">Quality / Compression</span>
                  <span className="font-mono text-ink font-medium">{quality}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
                />

                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['image/png', 'image/jpeg', 'image/webp'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      className={`py-1.5 rounded-md border text-center font-medium transition-all ${
                        format === fmt
                          ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
                          : 'border-hairline text-mute hover:bg-surface-card hover:text-ink'
                      }`}
                    >
                      {fmt.replace('image/', '').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eyedropper Selected Color */}
              {slug.includes('color') && (
                <div className="p-3 bg-surface-card border border-hairline rounded-md space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-body">Selected Hex</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-white/20" style={{ backgroundColor: selectedColor }} />
                      <span className="font-mono font-bold text-ink">{selectedColor}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedColor)}
                    className="w-full py-1.5 bg-surface-elevated hover:bg-surface text-ink text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-colors border border-hairline"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Hex Code'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Action CTA Button (Raycast Solid White Button) */}
            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md shadow-lg flex items-center justify-center gap-2 transition-all h-[40px]"
            >
              {slug === 'favicon-generator' ? (
                <>
                  <Archive className="w-4 h-4" />
                  <span>Download Favicon Package (.ZIP)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Processed Image</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
