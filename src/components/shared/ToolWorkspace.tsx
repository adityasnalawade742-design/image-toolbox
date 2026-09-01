import React, { useState, useEffect, useRef } from 'react';
import {
  UploadCloud,
  Download,
  Archive,
  Sliders,
  Sparkles,
} from 'lucide-react';
import {
  loadImage,
  processCanvas,
  canvasToBlob,
  downloadBlob,
  generateFaviconBundle,
  extractDominantPalette,
} from '../../lib/canvas/engine';
import type {
  TextOverlayOptions,
  WatermarkOptions,
  BorderOptions,
} from '../../lib/canvas/engine';

import { CropControls } from '../tools/CropControls';
import { ResizeControls } from '../tools/ResizeControls';
import { RotateControls } from '../tools/RotateControls';
import { FlipControls } from '../tools/FlipControls';
import { TextControls } from '../tools/TextControls';
import { WatermarkControls } from '../tools/WatermarkControls';
import { BorderControls } from '../tools/BorderControls';
import { RoundControls } from '../tools/RoundControls';
import { CompressControls } from '../tools/CompressControls';
import { MetadataStripperControls } from '../tools/MetadataStripperControls';
import { PngToJpgControls } from '../tools/PngToJpgControls';
import { AnalyzerControls } from '../tools/AnalyzerControls';
import { ColorPickerControls } from '../tools/ColorPickerControls';
import { PaletteGeneratorControls } from '../tools/PaletteGeneratorControls';
import { Base64GeneratorControls } from '../tools/Base64GeneratorControls';
import { SvgToPngControls } from '../tools/SvgToPngControls';
import { BulkCompressorWorkspace } from '../tools/BulkCompressorWorkspace';
import { BulkResizerWorkspace } from '../tools/BulkResizerWorkspace';
import { Base64ToImageWorkspace } from '../tools/Base64ToImageWorkspace';

interface Props {
  slug: string;
  toolName: string;
  accept?: string;
}

export function ToolWorkspace({ slug, toolName, accept = 'image/*' }: Props) {
  // Delegate dedicated batch/decoder tools directly
  if (slug === 'bulk-image-compressor') return <BulkCompressorWorkspace />;
  if (slug === 'bulk-image-resizer') return <BulkResizerWorkspace />;
  if (slug === 'base64-to-image') return <Base64ToImageWorkspace />;

  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState<string>('image');
  const [fileSize, setFileSize] = useState<number>(0);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [outputBytes, setOutputBytes] = useState<number>(0);

  // Tool specific states
  const [origW, setOrigW] = useState<number>(0);
  const [origH, setOrigH] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(false);

  // Crop
  const [crop, setCrop] = useState<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, width: 0, height: 0 });

  // Rotate & Flip
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);

  // Text Overlay
  const [textOptions, setTextOptions] = useState<TextOverlayOptions>({
    text: 'Image Caption',
    fontFamily: 'Inter, sans-serif',
    fontSize: 36,
    color: '#ffffff',
    opacity: 1,
    position: 'center',
    bold: true,
    italic: false,
    textAlign: 'center',
    dropShadow: true,
  });

  // Watermark
  const [watermarkOptions, setWatermarkOptions] = useState<WatermarkOptions>({
    text: '© IMAGE TOOLBOX',
    opacity: 0.4,
    color: '#ffffff',
    position: 'bottom-right',
    rotation: 0,
    repeat: false,
  });

  // Border
  const [borderOptions, setBorderOptions] = useState<BorderOptions>({
    width: 20,
    color: '#57c1ff',
    opacity: 1,
    mode: 'outside',
  });

  // Round corners
  const [roundRadius, setRoundRadius] = useState<number>(30);
  const [isCircleAvatar, setIsCircleAvatar] = useState<boolean>(slug === 'round-image');
  const [bgFillColor, setBgFillColor] = useState<string>('#ffffff');

  // SVG Scale
  const [svgScale, setSvgScale] = useState<number>(2);

  // Color picker & Palette
  const [selectedHex, setSelectedHex] = useState<string>('#57c1ff');
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [paletteColors, setPaletteColors] = useState<string[]>([]);
  const [paletteCount, setPaletteCount] = useState<number>(6);

  // Base64 Code
  const [base64Output, setBase64Output] = useState<string>('');

  // Format & Quality
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/png');
  const [quality, setQuality] = useState<number>(85);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

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

  const handleFile = async (file: File) => {
    try {
      setIsProcessing(true);
      setFilename(file.name.replace(/\.[^/.]+$/, ''));
      setFileSize(file.size);
      setMimeType(file.type || 'image/png');

      const img = await loadImage(file);
      setImageElement(img);

      const nw = img.naturalWidth || img.width;
      const nh = img.naturalHeight || img.height;
      setOrigW(nw);
      setOrigH(nh);
      setWidth(nw);
      setHeight(nh);
      setCrop({ x: 0, y: 0, width: nw, height: nh });

      // Set tool-specific default formats
      if (slug.includes('webp') || slug === 'compress-image') {
        setFormat('image/webp');
      } else if (slug.includes('jpg') || slug.includes('jpeg')) {
        setFormat('image/jpeg');
      } else {
        setFormat('image/png');
      }

      // Extract initial palette
      const initialPalette = extractDominantPalette(img, paletteCount);
      setPaletteColors(initialPalette);

      setIsProcessing(false);
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
    }
  };

  // Re-extract palette when palette count changes
  useEffect(() => {
    if (imageElement) {
      const p = extractDominantPalette(imageElement, paletteCount);
      setPaletteColors(p);
    }
  }, [paletteCount, imageElement]);

  // Main Canvas Rendering Pipeline
  useEffect(() => {
    if (!imageElement || !canvasRef.current) return;

    try {
      let targetW = width;
      let targetH = height;

      if (slug === 'svg-to-png') {
        targetW = origW * svgScale;
        targetH = origH * svgScale;
      }

      const processed = processCanvas(imageElement, {
        width: targetW,
        height: targetH,
        rotation,
        flipH,
        flipV,
        crop: slug === 'crop-image' && (crop.width < origW || crop.height < origH || crop.x > 0 || crop.y > 0) ? crop : undefined,
        textOverlay: slug === 'add-text-to-image' ? textOptions : undefined,
        watermark: slug === 'watermark-image' ? watermarkOptions : undefined,
        border: slug === 'add-border-to-image' ? borderOptions : undefined,
        cornerRadius: slug === 'round-image' && !isCircleAvatar ? roundRadius : undefined,
        isCircle: slug === 'round-image' ? isCircleAvatar : false,
        backgroundColor: slug === 'png-to-jpg' || (slug === 'round-image' && format === 'image/jpeg') ? bgFillColor : undefined,
      });

      const displayCanvas = canvasRef.current;
      displayCanvas.width = processed.width;
      displayCanvas.height = processed.height;
      const ctx = displayCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
        ctx.drawImage(processed, 0, 0);
      }

      // Generate Base64 / Data URI outputs
      if (slug === 'image-to-base64' || slug === 'image-to-data-uri') {
        const dataUrl = displayCanvas.toDataURL(format, quality / 100);
        setBase64Output(slug === 'image-to-base64' ? dataUrl.split(',')[1] : dataUrl);
      }

      // Calculate output size metrics
      canvasToBlob(displayCanvas, format, quality / 100).then((b) => {
        setOutputBytes(b.size);
      });
    } catch (err) {
      console.error('Canvas processing error:', err);
    }
  }, [
    imageElement,
    width,
    height,
    crop,
    rotation,
    flipH,
    flipV,
    textOptions,
    watermarkOptions,
    borderOptions,
    roundRadius,
    isCircleAvatar,
    bgFillColor,
    svgScale,
    format,
    quality,
    slug,
    origW,
    origH,
  ]);

  // Eyedropper pixel sampler
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`.toUpperCase();
    setSelectedHex(hex);
    setColorHistory((prev) => {
      const filtered = prev.filter((c) => c !== hex);
      return [...filtered, hex];
    });
  };

  const handleDownload = async () => {
    if (!canvasRef.current || !imageElement) return;

    if (slug === 'favicon-generator') {
      await generateFaviconBundle(imageElement, `${filename}-favicon-package.zip`);
      return;
    }

    const blob = await canvasToBlob(canvasRef.current, format, quality / 100);
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(blob, `${filename}-processed.${ext}`);
  };

  return (
    <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl">
      {!imageElement ? (
        /* Empty Upload State */
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
              Select or Drop an Image for {toolName}
            </h3>
            <p className="text-xs text-mute mt-1">
              Supports PNG, JPG, WebP, SVG, AVIF — 100% Client-Side In-Browser Processing
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-white text-black font-medium text-xs hover:bg-neutral-200 transition-colors"
          >
            Choose Image
          </button>
        </div>
      ) : (
        /* Active Workbench */
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
                <span>{canvasRef.current?.width || width} × {canvasRef.current?.height || height} px</span>
                <span>•</span>
                <span>Format: {format.replace('image/', '').toUpperCase()}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setImageElement(null);
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
                <span>Tool Settings</span>
              </h4>

              {/* Tool-specific Controls */}
              {slug === 'crop-image' && (
                <CropControls
                  imgWidth={origW}
                  imgHeight={origH}
                  cropX={crop.x}
                  cropY={crop.y}
                  cropW={crop.width}
                  cropH={crop.height}
                  onChange={setCrop}
                />
              )}

              {slug === 'resize-image' && (
                <ResizeControls
                  originalWidth={origW}
                  originalHeight={origH}
                  width={width}
                  height={height}
                  lockAspect={lockAspect}
                  preventUpscale={preventUpscale}
                  onWidthChange={setWidth}
                  onHeightChange={setHeight}
                  onLockAspectChange={setLockAspect}
                  onPreventUpscaleChange={setPreventUpscale}
                />
              )}

              {slug === 'rotate-image' && (
                <RotateControls rotation={rotation} onChange={setRotation} />
              )}

              {slug === 'flip-image' && (
                <FlipControls
                  flipH={flipH}
                  flipV={flipV}
                  onFlipHChange={setFlipH}
                  onFlipVChange={setFlipV}
                />
              )}

              {slug === 'add-text-to-image' && (
                <TextControls options={textOptions} onChange={setTextOptions} />
              )}

              {slug === 'watermark-image' && (
                <WatermarkControls options={watermarkOptions} onChange={setWatermarkOptions} />
              )}

              {slug === 'add-border-to-image' && (
                <BorderControls options={borderOptions} onChange={setBorderOptions} />
              )}

              {slug === 'round-image' && (
                <RoundControls
                  maxRadius={Math.round(Math.min(origW, origH) / 2)}
                  radius={roundRadius}
                  isCircle={isCircleAvatar}
                  format={format}
                  backgroundColor={bgFillColor}
                  onRadiusChange={setRoundRadius}
                  onIsCircleChange={setIsCircleAvatar}
                  onBackgroundColorChange={setBgFillColor}
                />
              )}

              {slug === 'compress-image' && (
                <CompressControls
                  originalBytes={fileSize}
                  outputBytes={outputBytes}
                  quality={quality}
                  format={format}
                  onQualityChange={setQuality}
                  onFormatChange={setFormat}
                />
              )}

              {slug === 'remove-image-metadata' && (
                <MetadataStripperControls originalBytes={fileSize} outputBytes={outputBytes} />
              )}

              {slug === 'png-to-jpg' && (
                <PngToJpgControls
                  backgroundColor={bgFillColor}
                  onBackgroundColorChange={setBgFillColor}
                />
              )}

              {slug === 'image-analyzer' && (
                <AnalyzerControls
                  filename={filename}
                  fileSize={fileSize}
                  format={format.replace('image/', '')}
                  mimeType={mimeType}
                  width={origW}
                  height={origH}
                  hasTransparency={format === 'image/png' || format === 'image/webp'}
                />
              )}

              {slug === 'image-color-picker' && (
                <ColorPickerControls
                  selectedHex={selectedHex}
                  history={colorHistory}
                  onSelectColor={setSelectedHex}
                />
              )}

              {slug === 'image-palette-generator' && (
                <PaletteGeneratorControls
                  palette={paletteColors}
                  colorCount={paletteCount}
                  onCountChange={setPaletteCount}
                />
              )}

              {(slug === 'image-to-base64' || slug === 'image-to-data-uri') && (
                <Base64GeneratorControls
                  outputString={base64Output}
                  isDataUri={slug === 'image-to-data-uri'}
                />
              )}

              {slug === 'svg-to-png' && (
                <SvgToPngControls
                  originalWidth={origW}
                  originalHeight={origH}
                  scale={svgScale}
                  onScaleChange={setSvgScale}
                />
              )}

              {/* Universal Output Format and Quality (for tools that don't have dedicated format blocks) */}
              {![
                'compress-image',
                'image-to-base64',
                'image-to-data-uri',
                'image-analyzer',
                'image-color-picker',
                'image-palette-generator',
              ].includes(slug) && (
                <div className="space-y-2 pt-2 border-t border-hairline text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-body">Quality</span>
                    <span className="font-mono text-ink font-medium">{quality}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(parseInt(e.target.value) || 85)}
                    className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
                  />
                </div>
              )}
            </div>

            {/* Primary Action CTA Button */}
            {slug !== 'image-to-base64' && slug !== 'image-to-data-uri' && slug !== 'image-analyzer' && (
              <button
                type="button"
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
                    <span>Download {toolName.replace(' Image', '')}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
