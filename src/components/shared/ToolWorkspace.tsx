import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  UploadCloud,
  Download,
  Archive,
  Sliders,
  AlertCircle,
  Copy,
  Check,
  Code,
  Loader2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import {
  loadImage,
  createImageProxy,
  processCanvas,
  canvasToBlob,
  downloadBlob,
  generateFaviconBundle,
  extractDominantPalette,
  checkImageTransparency,
} from '../../lib/canvas/engine';
import type {
  TextOverlayOptions,
  WatermarkOptions,
  BorderOptions,
  ImageProcessingOptions,
} from '../../lib/canvas/engine';
import { saveHandoffImage, consumeHandoffImage } from '../../lib/storage/handoffStorage';
import { isHeicFile, convertHeicToBlob } from '../../lib/canvas/heicLoader';
import { vpsCompress } from '../../lib/vps/vpsClient';

import { CropControls } from '../tools/CropControls';
import { InteractiveCropOverlay } from '../tools/InteractiveCropOverlay';
import { InteractiveTextOverlay } from '../tools/InteractiveTextOverlay';
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
import { PhotoFiltersWorkspace } from '../tools/PhotoFiltersWorkspace';
import { MemeGeneratorWorkspace } from '../tools/MemeGeneratorWorkspace';
import { ImageSplitterWorkspace } from '../tools/ImageSplitterWorkspace';
import { CensorImageWorkspace } from '../tools/CensorImageWorkspace';
import { ErrorBoundary } from './ErrorBoundary';

interface Props {
  slug: string;
  toolName: string;
  accept?: string;
}

export function ToolWorkspace({ slug, toolName, accept = 'image/*' }: Props) {
  // Delegate dedicated batch/decoder/creative tools directly with ErrorBoundary protection
  if (slug === 'bulk-image-compressor') return <ErrorBoundary><BulkCompressorWorkspace /></ErrorBoundary>;
  if (slug === 'bulk-image-resizer') return <ErrorBoundary><BulkResizerWorkspace /></ErrorBoundary>;
  if (slug === 'base64-to-image') return <ErrorBoundary><Base64ToImageWorkspace /></ErrorBoundary>;
  if (slug === 'photo-filters') return <ErrorBoundary><PhotoFiltersWorkspace /></ErrorBoundary>;
  if (slug === 'meme-generator') return <ErrorBoundary><MemeGeneratorWorkspace /></ErrorBoundary>;
  if (slug === 'split-image') return <ErrorBoundary><ImageSplitterWorkspace /></ErrorBoundary>;
  if (slug === 'censor-image') return <ErrorBoundary><CensorImageWorkspace /></ErrorBoundary>;

  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [previewImageElement, setPreviewImageElement] = useState<HTMLImageElement | null>(null);
  const [rawFile, setRawFile] = useState<File | null>(null);
  const [filename, setFilename] = useState<string>('image');
  const [fileSize, setFileSize] = useState<number>(0);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [outputBytes, setOutputBytes] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hasRealTransparency, setHasRealTransparency] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Tool specific states
  const [origW, setOrigW] = useState<number>(0);
  const [origH, setOrigH] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(false);

  // Crop
  const [crop, setCrop] = useState<{ x: number; y: number; width: number; height: number }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [cropLockAspect, setCropLockAspect] = useState<boolean>(false);
  const [isCropCircle, setIsCropCircle] = useState<boolean>(false);

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
    imageScale: 20,
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
  const [format, setFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif'>('image/png');
  const [quality, setQuality] = useState<number>(85);
  const [useVpsEngine, setUseVpsEngine] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const renderTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleFile = async (file: File) => {
    try {
      setErrorMessage(null);
      const maxSizeBytes = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSizeBytes) {
        setErrorMessage('File size exceeds the 50 MB limit. Please select a smaller image.');
        return;
      }

      let activeFile: File | Blob = file;
      if (isHeicFile(file)) {
        try {
          const convertedBlob = await convertHeicToBlob(file);
          activeFile = new File([convertedBlob], file.name.replace(/\.(heic|heif)$/i, '.png'), { type: 'image/png' });
        } catch (heicErr) {
          console.error('HEIC decoding failed:', heicErr);
          setErrorMessage('Failed to decode iPhone HEIC image. Please ensure the file is not corrupted.');
          return;
        }
      }

      setFilename(file.name.replace(/\.[^/.]+$/, ''));
      setFileSize(file.size);
      setMimeType(activeFile.type || 'image/png');
      setRawFile(file);

      const img = await loadImage(activeFile);
      setImageElement(img);

      // Generate downscaled proxy for silky-smooth preview interactions
      const proxy = await createImageProxy(img, 1200);
      setPreviewImageElement(proxy);

      const nw = img.naturalWidth || img.width;
      const nh = img.naturalHeight || img.height;
      setOrigW(nw);
      setOrigH(nh);
      setWidth(nw);
      setHeight(nh);

      if (slug === 'crop-image') {
        const padX = Math.round(nw * 0.075);
        const padY = Math.round(nh * 0.075);
        setCrop({ x: padX, y: padY, width: Math.max(20, nw - padX * 2), height: Math.max(20, nh - padY * 2) });
      } else {
        setCrop({ x: 0, y: 0, width: nw, height: nh });
      }

      // Detect real alpha channel transparency
      const isTransparent = checkImageTransparency(img);
      setHasRealTransparency(isTransparent);

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
    } catch {
      setErrorMessage('Failed to decode image. The file format may be unsupported or corrupted.');
    }
  };

  // Global Clipboard Paste (Ctrl+V) listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            handleFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // Check cached handoff image from homepage dropzone or cross-tool handoff
  useEffect(() => {
    consumeHandoffImage().then((cached) => {
      if (cached) {
        fetch(cached.dataUrl)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], cached.filename || 'image.png', { type: blob.type });
            handleFile(file);
          })
          .catch((err) => console.warn('Failed to parse cached handoff blob:', err));
      }
    });
  }, []);

  // Re-extract palette when palette count changes
  useEffect(() => {
    if (imageElement) {
      const p = extractDominantPalette(imageElement, paletteCount);
      setPaletteColors(p);
    }
  }, [paletteCount, imageElement]);

  const [isRendering, setIsRendering] = useState<boolean>(false);

  // Compute current processing options
  const getProcessingOptions = useCallback((forExport: boolean = false): ImageProcessingOptions => {
    let targetW = width;
    let targetH = height;

    if (slug === 'svg-to-png') {
      targetW = origW * svgScale;
      targetH = origH * svgScale;
    }

    return {
      width: targetW,
      height: targetH,
      rotation,
      flipH,
      flipV,
      crop: (forExport || slug !== 'crop-image') && (crop.width < origW || crop.height < origH || crop.x > 0 || crop.y > 0) ? crop : undefined,
      textOverlay: slug === 'add-text-to-image' ? textOptions : undefined,
      watermark: slug === 'watermark-image' ? watermarkOptions : undefined,
      border: slug === 'add-border-to-image' ? borderOptions : undefined,
      cornerRadius: slug === 'round-image' && !isCircleAvatar ? roundRadius : undefined,
      isCircle: slug === 'round-image' ? isCircleAvatar : (slug === 'crop-image' ? isCropCircle : false),
      backgroundColor: slug === 'png-to-jpg' || ((slug === 'round-image' || slug === 'crop-image') && format === 'image/jpeg') ? bgFillColor : undefined,
    };
  }, [
    width,
    height,
    slug,
    origW,
    origH,
    svgScale,
    rotation,
    flipH,
    flipV,
    crop,
    textOptions,
    watermarkOptions,
    borderOptions,
    roundRadius,
    isCircleAvatar,
    format,
    bgFillColor,
  ]);

  // Main Debounced Canvas Rendering Pipeline
  useEffect(() => {
    const activeImg = previewImageElement || imageElement;
    if (!activeImg || !canvasRef.current) return;

    if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
    setIsRendering(true);

    renderTimeoutRef.current = window.setTimeout(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        try {
          const options = getProcessingOptions(false);
          const processed = processCanvas(activeImg, options);

          const displayCanvas = canvasRef.current;
          if (!displayCanvas) return;

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
        } finally {
          setIsRendering(false);
        }
      });
    }, 60);

    return () => {
      if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [
    imageElement,
    previewImageElement,
    getProcessingOptions,
    format,
    quality,
    slug,
  ]);

  // Eyedropper pixel sampler directly from full original image for 100% lossless color precision
  const [loupe, setLoupe] = useState<{
    visible: boolean;
    x: number;
    y: number;
    hex: string;
    rgb: string;
    matrix: string[];
  }>({
    visible: false,
    x: 0,
    y: 0,
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
    matrix: [],
  });

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!slug.includes('color') || !canvasRef.current || !imageElement) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const normX = Math.max(0, Math.min(1, clientX / rect.width));
    const normY = Math.max(0, Math.min(1, clientY / rect.height));

    const fullW = imageElement.naturalWidth || imageElement.width;
    const fullH = imageElement.naturalHeight || imageElement.height;
    const srcX = Math.floor(normX * fullW);
    const srcY = Math.floor(normY * fullH);

    const offCanvas = document.createElement('canvas');
    offCanvas.width = 7;
    offCanvas.height = 7;
    const ctx = offCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(imageElement, srcX - 3, srcY - 3, 7, 7, 0, 0, 7, 7);
    const imgData = ctx.getImageData(0, 0, 7, 7).data;

    const matrix: string[] = [];
    for (let i = 0; i < 49; i++) {
      const idx = i * 4;
      matrix.push(`rgb(${imgData[idx]}, ${imgData[idx + 1]}, ${imgData[idx + 2]})`);
    }

    const centerIdx = 24 * 4;
    const r = imgData[centerIdx];
    const g = imgData[centerIdx + 1];
    const b = imgData[centerIdx + 2];
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`.toUpperCase();

    setLoupe({
      visible: true,
      x: clientX,
      y: clientY,
      hex,
      rgb: `rgb(${r}, ${g}, ${b})`,
      matrix,
    });
  };

  const handleCanvasMouseLeave = () => {
    if (slug.includes('color')) {
      setLoupe((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !imageElement) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const normX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const normY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    const fullW = imageElement.naturalWidth || imageElement.width;
    const fullH = imageElement.naturalHeight || imageElement.height;
    const srcX = Math.floor(normX * fullW);
    const srcY = Math.floor(normY * fullH);

    const offCanvas = document.createElement('canvas');
    offCanvas.width = 1;
    offCanvas.height = 1;
    const ctx = offCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(imageElement, srcX, srcY, 1, 1, 0, 0, 1, 1);
    const pixel = ctx.getImageData(0, 0, 1, 1).data;
    const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`.toUpperCase();
    setSelectedHex(hex);
    setColorHistory((prev) => {
      const filtered = prev.filter((c) => c !== hex);
      return [...filtered, hex];
    });
  };

  const handleDownload = async () => {
    if (!imageElement) return;

    if (slug === 'favicon-generator') {
      await generateFaviconBundle(imageElement, `${filename}-favicon-package.zip`);
      return;
    }

    // Always process from full-resolution original source image for pristine output quality
    const options = getProcessingOptions(true);
    const fullResCanvas = processCanvas(imageElement, options);

    // If AVIF is selected or VPS compression is preferred for compress-image
    if (format === 'image/avif' || (slug === 'compress-image' && useVpsEngine)) {
      try {
        // Convert full resolution canvas to intermediate PNG blob for lossless transmission
        const intermediatePngBlob = await canvasToBlob(fullResCanvas, 'image/png', 1.0);
        const vpsBlob = await vpsCompress(intermediatePngBlob, {
          quality,
          format,
          subsampling: '4:2:0',
          stripExif: true,
        });
        const ext = format === 'image/avif' ? 'avif' : format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
        downloadBlob(vpsBlob, `${filename}-processed.${ext}`);
        return;
      } catch (vpsErr) {
        console.warn('VPS compression failed, falling back to local canvas engine:', vpsErr);
      }
    }

    // Standard client-side fallback
    const fallbackFmt = format === 'image/avif' ? 'image/webp' : format;
    const blob = await canvasToBlob(fullResCanvas, fallbackFmt, quality / 100);
    const ext = fallbackFmt === 'image/webp' ? 'webp' : fallbackFmt === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(blob, `${filename}-processed.${ext}`);
  };

  const handleCopyImage = async () => {
    if (!imageElement) return;
    try {
      const options = getProcessingOptions(true);
      const fullResCanvas = processCanvas(imageElement, options);
      const blob = await canvasToBlob(fullResCanvas, 'image/png', 1.0);
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2200);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleSendToTool = async (targetSlug: string) => {
    if (!imageElement) return;
    try {
      const options = getProcessingOptions(true);
      const fullResCanvas = processCanvas(imageElement, options);
      const dataUrl = fullResCanvas.toDataURL('image/png');
      await saveHandoffImage(dataUrl, `${filename || 'image'}`);

      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(Boolean);
      const supportedLocales = ['es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id', 'tr'];
      const localePrefix = supportedLocales.includes(pathParts[0]) ? `/${pathParts[0]}` : '';

      window.location.href = `${localePrefix}/${targetSlug}`;
    } catch (err) {
      console.error('Failed to hand off image to next tool:', err);
    }
  };

  // Pro Keyboard Shortcuts (Ctrl+S to save, Ctrl+C to copy, Esc to clear)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isInput = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select';

      // Ctrl/Cmd + S -> Instant Download
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        if (imageElement) {
          e.preventDefault();
          handleDownload();
        }
      }

      // Ctrl/Cmd + C -> Copy Processed Image to Clipboard (when not selecting input text)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !isInput) {
        const selection = window.getSelection()?.toString();
        if (!selection && imageElement) {
          e.preventDefault();
          handleCopyImage();
        }
      }

      // Escape -> Clear current image
      if (e.key === 'Escape' && imageElement && !isInput) {
        setImageElement(null);
        setPreviewImageElement(null);
        setErrorMessage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageElement, filename, format, quality, handleDownload, handleCopyImage]);

  return (
    <ErrorBoundary fallbackTitle={`Error in ${toolName} Workspace`}>
      <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl space-y-4">
        {errorMessage && (
          <div className="flex items-center gap-2 p-3 bg-accent-red/10 border border-accent-red/20 rounded-lg text-xs text-accent-red">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

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
              Supports PNG, JPG, WebP, SVG, AVIF (Max 50 MB) • Paste image with <kbd className="font-mono bg-surface px-1.5 py-0.5 rounded border border-hairline text-ink">Ctrl+V</kbd>
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
          {/* Canvas Viewport (Order 1 on Desktop, Order 2 on Mobile) */}
          <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
            <div className="relative rounded-lg border border-hairline overflow-hidden canvas-checkerboard flex items-center justify-center min-h-[340px] sm:min-h-[380px] max-h-[550px] p-4">
              <div className="relative inline-flex items-center justify-center max-w-full max-h-[500px]">
                <canvas
                  ref={canvasRef}
                  onClick={slug.includes('color') ? handleCanvasClick : undefined}
                  onMouseMove={slug.includes('color') ? handleCanvasMouseMove : undefined}
                  onMouseLeave={slug.includes('color') ? handleCanvasMouseLeave : undefined}
                  className={`max-w-full max-h-[500px] object-contain rounded shadow-2xl block ${
                    slug.includes('color') ? 'cursor-crosshair' : ''
                  }`}
                />
                {slug === 'crop-image' && canvasRef.current && (
                  <InteractiveCropOverlay
                    origWidth={origW}
                    origHeight={origH}
                    crop={crop}
                    lockAspect={cropLockAspect}
                    isCircle={isCropCircle}
                    canvasElement={canvasRef.current}
                    onCropChange={setCrop}
                  />
                )}
                {slug === 'add-text-to-image' && canvasRef.current && (
                  <InteractiveTextOverlay
                    canvasElement={canvasRef.current}
                    options={textOptions}
                    onChange={setTextOptions}
                  />
                )}
                {/* Floating Eyedropper Magnifier Loupe */}
                {slug.includes('color') && loupe.visible && (
                  <div
                    className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-full pb-3 transition-opacity"
                    style={{
                      left: `${loupe.x}px`,
                      top: `${loupe.y}px`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border-2 border-white shadow-2xl overflow-hidden relative bg-black/80 flex items-center justify-center">
                        {/* 7x7 Zoom Matrix */}
                        <div className="grid grid-cols-7 grid-rows-7 w-full h-full">
                          {loupe.matrix.map((col, idx) => (
                            <div key={idx} style={{ backgroundColor: col }} className="w-full h-full" />
                          ))}
                        </div>
                        {/* Reticle / Center Target */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-3 h-3 border border-white/90 shadow-sm rounded-xs" />
                        </div>
                      </div>
                      {/* Color Tag Badge */}
                      <div className="mt-1 px-2 py-0.5 bg-black/90 text-white rounded text-[10px] font-mono font-semibold shadow-lg border border-white/20 flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full border border-white/30"
                          style={{ backgroundColor: loupe.hex }}
                        />
                        <span>{loupe.hex}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {isRendering && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-surface/85 backdrop-blur border border-hairline rounded text-[10px] text-mute font-mono">
                  <Loader2 className="w-3 h-3 animate-spin text-accent-blue" />
                  <span>Processing...</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-surface-elevated border border-hairline rounded-md text-xs font-mono text-mute">
              <div className="flex items-center gap-3">
                <span>{origW} × {origH} px</span>
                <span>•</span>
                <span>Format: {format.replace('image/', '').toUpperCase()}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setImageElement(null);
                  setPreviewImageElement(null);
                }}
                className="text-[11px] text-mute hover:text-ink transition-colors"
              >
                Upload Different Image
              </button>
            </div>
          </div>

          {/* Precision Control Panel (Order 2 on Desktop, Order 1 on Mobile) */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
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
                  lockAspect={cropLockAspect}
                  isCircle={isCropCircle}
                  onLockAspectChange={setCropLockAspect}
                  onIsCircleChange={setIsCropCircle}
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
                  useVps={useVpsEngine}
                  onToggleVps={setUseVpsEngine}
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
                  hasTransparency={hasRealTransparency}
                  activeFile={rawFile}
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

              {slug === 'favicon-generator' && (
                <div className="p-3.5 bg-surface-card border border-hairline rounded-lg space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-accent-blue" />
                      <span>HTML &lt;head&gt; Snippet</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const htmlSnippet = `<link rel="icon" type="image/x-icon" href="/favicon.ico">\n<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n<link rel="manifest" href="/site.webmanifest">`;
                        navigator.clipboard.writeText(htmlSnippet);
                        setCopiedToast(true);
                        setTimeout(() => setCopiedToast(false), 2200);
                      }}
                      className="text-[11px] text-mute hover:text-ink transition-colors flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Code</span>
                    </button>
                  </div>
                  <pre className="p-2.5 bg-surface rounded border border-hairline text-[10px] font-mono text-mute overflow-x-auto select-all leading-relaxed">
{`<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`}
                  </pre>
                </div>
              )}

              {/* Universal Output Format and Quality */}
              {![
                'compress-image',
                'image-to-base64',
                'image-to-data-uri',
                'image-analyzer',
                'image-color-picker',
                'image-palette-generator',
              ].includes(slug) && (
                <div className="space-y-2 pt-2 border-t border-hairline text-xs">
                  {format === 'image/png' ? (
                    <div className="flex items-center justify-between py-1 text-mute text-[11px]">
                      <span>PNG Quality</span>
                      <span className="font-mono text-ink">Lossless (100%)</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-body">Output Quality</span>
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
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Action CTA Buttons (Download & Copy to Clipboard) */}
            {slug !== 'image-to-base64' && slug !== 'image-to-data-uri' && slug !== 'image-analyzer' && (
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-full py-3 px-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md shadow-lg flex items-center justify-center gap-2 transition-all h-[42px]"
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

                {slug !== 'favicon-generator' && (
                  <button
                    type="button"
                    onClick={handleCopyImage}
                    className="w-full py-2.5 px-4 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-body hover:text-ink font-medium text-xs rounded-md flex items-center justify-center gap-2 transition-all h-[38px]"
                  >
                    {copiedToast ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Image Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Image to Clipboard</span>
                      </>
                    )}
                  </button>
                )}

                {/* Cross-Tool Workflow Handoff Bar */}
                {slug !== 'favicon-generator' && slug !== 'image-to-base64' && slug !== 'image-to-data-uri' && slug !== 'image-analyzer' && (
                  <div className="pt-3 border-t border-hairline space-y-2">
                    <span className="text-[11px] font-semibold text-mute uppercase tracking-wider block">
                      Continue In Another Tool:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      {slug !== 'compress-image' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('compress-image')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Compress</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'crop-image' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('crop-image')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Crop</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'resize-image' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('resize-image')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Resize</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'add-text-to-image' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('add-text-to-image')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Add Text</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'watermark-image' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('watermark-image')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Watermark</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'photo-filters' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('photo-filters')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>Filters</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                      {slug !== 'ai-image-upscaler' && (
                        <button
                          type="button"
                          onClick={() => handleSendToTool('ai-image-upscaler')}
                          className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong text-mute hover:text-ink rounded text-[11px] flex items-center justify-between transition-colors"
                        >
                          <span>AI Upscaler</span>
                          <ArrowRight className="w-3 h-3 text-mute" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
}
