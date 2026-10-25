import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Archive, Sliders, AlertCircle, Copy, Check, Code, Loader2, ArrowRight } from 'lucide-react';
import {
  loadImage,
  createImageProxy,
  processCanvas,
  canvasToBlob,
  downloadBlob,
  generateFaviconBundle,
  extractDominantPalette,
  checkImageTransparency,
  formatBytes,
} from '../../lib/canvas/engine';
import type {
  TextOverlayOptions,
  WatermarkOptions,
  BorderOptions,
  ImageProcessingOptions,
} from '../../lib/canvas/engine';
import { saveHandoffImage, consumeHandoffImage } from '../../lib/storage/handoffStorage';
import { isHeicFile, convertHeicToBlob } from '../../lib/canvas/heicLoader';
import { isAvifSuperseded } from '../../lib/canvas/avifEncoder';
import { getOutputFormatPolicy, formatExtension, type OutputFormat } from '../../lib/canvas/outputFormat';
import { installWindowDropGuard } from './useImageIntake';
import { I18nProvider } from './I18nContext';
import { createT, type Strings } from '../../i18n/strings';

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
import { RemoveBackgroundWorkspace } from '../tools/RemoveBackgroundWorkspace';
import { CompressToKbWorkspace } from '../tools/CompressToKbWorkspace';
import { JpgToPdfWorkspace } from '../tools/JpgToPdfWorkspace';
import { PdfToJpgWorkspace } from '../tools/PdfToJpgWorkspace';
import { MergeImagesWorkspace } from '../tools/MergeImagesWorkspace';
import { MergePdfWorkspace } from '../tools/pdf/MergePdfWorkspace';
import { SplitPdfWorkspace } from '../tools/pdf/SplitPdfWorkspace';
import { PdfPagesWorkspace } from '../tools/pdf/PdfPagesWorkspace';
import { PageNumbersWorkspace } from '../tools/pdf/PageNumbersWorkspace';
import { WatermarkPdfWorkspace } from '../tools/pdf/WatermarkPdfWorkspace';
import { SignPdfWorkspace } from '../tools/pdf/SignPdfWorkspace';
import { FillFormWorkspace } from '../tools/pdf/FillFormWorkspace';
import { PdfMetadataWorkspace } from '../tools/pdf/PdfMetadataWorkspace';
import { CropPdfWorkspace } from '../tools/pdf/CropPdfWorkspace';
import { ErrorBoundary } from './ErrorBoundary';

export interface NextTool {
  slug: string;
  name: string;
  inkClass: string;
}

interface Props {
  slug: string;
  toolName: string;
  accept?: string;
  locale?: string;
  strings?: Strings;
  /** Localized next-step handoff targets */
  nextTools?: NextTool[];
}

// Shown and copied verbatim; matches the files generateFaviconBundle() writes
const FAVICON_SNIPPET = `<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`;

// Tools whose result is information (text, colors, metrics), not an edited image
const NO_EXPORT_TOOLS = ['image-to-base64', 'image-to-data-uri', 'image-analyzer', 'image-color-picker', 'image-palette-generator'];

export function ToolWorkspace({ slug, toolName, accept = 'image/*', locale = 'en', strings = {}, nextTools = [] }: Props) {
  const t = createT(strings);

  // Dedicated batch/decoder/creative tools render their own workspace
  const standalone: Record<string, React.ReactNode> = {
    'bulk-image-compressor': <BulkCompressorWorkspace />,
    'bulk-image-resizer': <BulkResizerWorkspace />,
    'base64-to-image': <Base64ToImageWorkspace />,
    'photo-filters': <PhotoFiltersWorkspace />,
    'meme-generator': <MemeGeneratorWorkspace />,
    'split-image': <ImageSplitterWorkspace />,
    'censor-image': <CensorImageWorkspace />,
    'remove-background': <RemoveBackgroundWorkspace />,
    'compress-image-to-kb': <CompressToKbWorkspace />,
    'jpg-to-pdf': <JpgToPdfWorkspace />,
    'pdf-to-jpg': <PdfToJpgWorkspace />,
    'merge-images': <MergeImagesWorkspace />,
    'merge-pdf': <MergePdfWorkspace />,
    'split-pdf': <SplitPdfWorkspace />,
    'extract-pdf-pages': <PdfPagesWorkspace mode="extract" />,
    'organize-pdf': <PdfPagesWorkspace mode="organize" />,
    'rotate-pdf': <PdfPagesWorkspace mode="rotate" />,
    'add-page-numbers-pdf': <PageNumbersWorkspace />,
    'watermark-pdf': <WatermarkPdfWorkspace />,
    'sign-pdf': <SignPdfWorkspace />,
    'fill-pdf-form': <FillFormWorkspace />,
    'remove-pdf-metadata': <PdfMetadataWorkspace />,
    'crop-pdf': <CropPdfWorkspace />,
  };
  if (standalone[slug]) {
    return (
      <I18nProvider strings={strings} locale={locale}>
        <ErrorBoundary fallbackTitle={t('ws.crashed')} fallbackBody={t('ws.crashBody')} reloadLabel={t('ws.reload')} homeLabel={t('ws.allTools')}>{standalone[slug]}</ErrorBoundary>
      </I18nProvider>
    );
  }

  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [previewImageElement, setPreviewImageElement] = useState<HTMLImageElement | null>(null);
  const [filename, setFilename] = useState<string>('image');
  const [fileSize, setFileSize] = useState<number>(0);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  // Size of the rendered result, for the dimension lines and job ticket
  const [outDims, setOutDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  // Bumped per loaded image to replay the registration snap
  const [registerTick, setRegisterTick] = useState<number>(0);
  // Browser-displayable version of the upload (HEIC converted), used for byte-exact Base64 output
  const [displayableFile, setDisplayableFile] = useState<Blob | null>(null);
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
  const [format, setFormat] = useState<OutputFormat>('image/png');
  const [formatSelectable, setFormatSelectable] = useState<boolean>(false);
  const [quality, setQuality] = useState<number>(85);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  // Size of the file actually produced by the last download, for the job ticket
  const [lastExportBytes, setLastExportBytes] = useState<number | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const renderTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  // Drops size estimates that resolve after a newer one started (AVIF encodes are slow)
  const estimateSeqRef = useRef<number>(0);

  const handleFile = async (file: File) => {
    try {
      setErrorMessage(null);
      const maxSizeBytes = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSizeBytes) {
        setErrorMessage(t('ws.errTooLarge'));
        return;
      }

      let activeFile: File | Blob = file;
      if (isHeicFile(file)) {
        try {
          const convertedBlob = await convertHeicToBlob(file);
          activeFile = new File([convertedBlob], file.name.replace(/\.(heic|heif)$/i, '.png'), { type: 'image/png' });
        } catch (heicErr) {
          console.error('HEIC decoding failed:', heicErr);
          setErrorMessage(t('ws.errHeic'));
          return;
        }
      }

      const sourceMime = isHeicFile(file) ? 'image/heic' : file.type || activeFile.type || 'image/png';
      setFilename(file.name.replace(/\.[^/.]+$/, ''));
      setFileSize(file.size);
      setMimeType(sourceMime);
      setSourceFile(file);
      setDisplayableFile(activeFile);
      setExportError(null);

      const img = await loadImage(activeFile);
      setImageElement(img);
      setRegisterTick((n) => n + 1);

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

      // Converters export their target format; editors keep the input format by default
      const formatPolicy = getOutputFormatPolicy(slug, sourceMime);
      setFormat(formatPolicy.format);
      setFormatSelectable(formatPolicy.selectable);

      // Extract initial palette
      const initialPalette = extractDominantPalette(img, paletteCount);
      setPaletteColors(initialPalette);
    } catch {
      setErrorMessage(t('ws.errDecode'));
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
    const removeDropGuard = installWindowDropGuard((file) => handleFile(file));
    return () => {
      window.removeEventListener('paste', handlePaste);
      removeDropGuard();
    };
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

  // Base64 / Data URI encode the original file bytes, not a re-rendered canvas
  useEffect(() => {
    if (!displayableFile || (slug !== 'image-to-base64' && slug !== 'image-to-data-uri')) return;
    let cancelled = false;
    const reader = new FileReader();
    reader.onload = () => {
      if (cancelled || typeof reader.result !== 'string') return;
      setBase64Output(slug === 'image-to-base64' ? reader.result.split(',')[1] : reader.result);
    };
    reader.readAsDataURL(displayableFile);
    return () => {
      cancelled = true;
    };
  }, [displayableFile, slug]);

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

    const isCropped = crop.width < origW || crop.height < origH || crop.x > 0 || crop.y > 0;
    // Crop preview shows the whole image under the overlay; the export is exactly the selected region
    if (slug === 'crop-image' && forExport && isCropped) {
      targetW = Math.round(crop.width);
      targetH = Math.round(crop.height);
    }

    return {
      width: targetW,
      height: targetH,
      rotation,
      flipH,
      flipV,
      crop: (forExport || slug !== 'crop-image') && isCropped ? crop : undefined,
      textOverlay: slug === 'add-text-to-image' ? textOptions : undefined,
      watermark: slug === 'watermark-image' ? watermarkOptions : undefined,
      border: slug === 'add-border-to-image' ? borderOptions : undefined,
      cornerRadius: slug === 'round-image' && !isCircleAvatar ? roundRadius : undefined,
      isCircle: slug === 'round-image' ? isCircleAvatar : (slug === 'crop-image' ? isCropCircle && forExport : false),
      // JPEG has no alpha channel, so transparent areas get the chosen fill instead of black
      backgroundColor: format === 'image/jpeg' ? bgFillColor : undefined,
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

  // Any change to the settings makes the last download's size stale
  useEffect(() => {
    setLastExportBytes(null);
  }, [getProcessingOptions, format, quality]);

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
          setOutDims({ w: processed.width, h: processed.height });
          const ctx = displayCanvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
            ctx.drawImage(processed, 0, 0);
          }

          // Calculate output size metrics (only the tools that display them pay for the encode)
          if (slug === 'compress-image' || slug === 'remove-image-metadata') {
            const estimateSeq = ++estimateSeqRef.current;
            canvasToBlob(displayCanvas, format, quality / 100, 'preview-estimate')
              .then((b) => {
                if (estimateSeq === estimateSeqRef.current) setOutputBytes(b.size);
              })
              .catch((err) => {
                if (!isAvifSuperseded(err)) console.error('Output size estimate failed:', err);
              });
          }
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

  // Picker position as a fraction of the image, shared by mouse and keyboard
  const [pickPos, setPickPos] = useState({ x: 0.5, y: 0.5 });
  const [pickAnnouncement, setPickAnnouncement] = useState('');

  // Show the loupe at a normalized point of the image
  const showLoupeAt = (normX: number, normY: number) => {
    if (!canvasRef.current || !imageElement) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = normX * rect.width;
    const clientY = normY * rect.height;

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

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!slug.includes('color') || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const pos = {
      x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
    };
    setPickPos(pos);
    showLoupeAt(pos.x, pos.y);
  };

  const handleCanvasMouseLeave = () => {
    if (slug.includes('color')) {
      setLoupe((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    pickAt(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)), Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
  };

  // Keyboard picking: arrows move the loupe (Shift for bigger steps), Enter or Space picks
  const handleCanvasKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    const step = e.shiftKey ? 0.1 : 0.01;
    const moves: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (moves[e.key]) {
      e.preventDefault();
      const pos = {
        x: Math.max(0, Math.min(1, pickPos.x + moves[e.key][0])),
        y: Math.max(0, Math.min(1, pickPos.y + moves[e.key][1])),
      };
      setPickPos(pos);
      showLoupeAt(pos.x, pos.y);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pickAt(pickPos.x, pickPos.y);
    }
  };

  const pickAt = (normX: number, normY: number) => {
    if (!imageElement) return;
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
    setPickAnnouncement(t('ws.pickerPicked', { hex }));
  };

  const handleDownload = async () => {
    if (!imageElement || isExporting) return;
    setIsExporting(true);
    setExportError(null);

    try {
      if (slug === 'favicon-generator') {
        await generateFaviconBundle(imageElement, `${filename}-favicon-package.zip`);
        return;
      }

      // Always process from full-resolution original source image for pristine output quality
      const options = getProcessingOptions(true);
      const fullResCanvas = processCanvas(imageElement, options);

      const blob = await canvasToBlob(fullResCanvas, format, quality / 100);
      // Some browsers silently fall back to PNG for formats they can't encode (e.g. older Safari and WebP)
      const actualFormat = (blob.type || format) as OutputFormat;
      if (actualFormat !== format) {
        setExportError(t('ws.errFormatFallback', { wanted: formatExtension(format).toUpperCase(), actual: formatExtension(actualFormat).toUpperCase() }));
      }
      downloadBlob(blob, `${filename}-processed.${formatExtension(actualFormat)}`);
      setLastExportBytes(blob.size);
    } catch (err) {
      console.error('Export failed:', err);
      setExportError(t('ws.errExport'));
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyImage = async () => {
    if (!imageElement) return;
    try {
      // Hand ClipboardItem a promise synchronously; Safari rejects writes that happen after an await
      const pngPromise = Promise.resolve().then(() =>
        canvasToBlob(processCanvas(imageElement, getProcessingOptions(true)), 'image/png', 1.0)
      );
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': pngPromise })]);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2200);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      setExportError(t('ws.errCopy'));
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

  const outW = slug === 'crop-image' ? Math.round(crop.width) : outDims.w;
  const outH = slug === 'crop-image' ? Math.round(crop.height) : outDims.h;
  const sourceExt = mimeType.replace('image/', '').replace('svg+xml', 'svg').replace('jpeg', 'jpg').toUpperCase();
  const canExport = !NO_EXPORT_TOOLS.includes(slug);
  const downloadLabel = slug === 'favicon-generator' ? t('ws.downloadZip') : t('ws.download', { format: formatExtension(format).toUpperCase() });

  return (
    <I18nProvider strings={strings} locale={locale}>
    <ErrorBoundary fallbackTitle={t('ws.crashed')} fallbackBody={t('ws.crashBody')} reloadLabel={t('ws.reload')} homeLabel={t('ws.allTools')}>
      <div className={imageElement && canExport ? 'pb-20 lg:pb-0' : ''}>
        {errorMessage && (
          <div role="alert" className="flex items-start gap-2 mb-4 p-3 bg-accent-red-soft border border-accent-red text-[15px] text-accent-red">
            <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{errorMessage}</span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
            e.target.value = '';
          }}
        />

        {!imageElement ? (
          /* Empty state: the sheet is the drop target */
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <button
              type="button"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
              className="crop-marks w-full proof-grid border border-ink flex flex-col items-center justify-center gap-3 px-6 py-16 sm:py-24 text-center hover:bg-paper-stock transition-colors"
              aria-describedby="ws-drop-hint"
            >
              <svg className="w-10 h-10 text-ink" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="6" y="9" width="28" height="22" />
                <path d="M6 26l8-8 6 6 4-4 10 10" />
                <circle cx="27" cy="15" r="2.5" />
              </svg>
              <span className="text-[20px] sm:text-[22px] font-semibold text-ink">{t('ws.dropTitle')}</span>
              <span className="btn-ink pointer-events-none">{t('ws.chooseImage')}</span>
              <span id="ws-drop-hint" className="text-[14px] text-graphite max-w-md">{t('ws.dropHint')}</span>
            </button>
          </div>
        ) : (
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
            {/* Proof sheet */}
            <div className="min-w-0 space-y-3">
              <div className="relative bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 pt-14 pb-7 sm:px-20 sm:pt-16 sm:pb-10 overflow-hidden">
                <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks registration-snap is-registering">
                  {slug.includes('color') ? (
                    <canvas
                      ref={canvasRef}
                      tabIndex={0}
                      role="slider"
                      aria-label={t('ws.pickerLabel')}
                      aria-describedby="ws-picker-help"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(pickPos.x * 100)}
                      aria-valuetext={t('ws.pickerValue', { hex: loupe.hex, x: Math.round(pickPos.x * 100), y: Math.round(pickPos.y * 100) })}
                      onClick={handleCanvasClick}
                      onMouseMove={handleCanvasMouseMove}
                      onMouseLeave={handleCanvasMouseLeave}
                      onKeyDown={handleCanvasKeyDown}
                      onFocus={() => showLoupeAt(pickPos.x, pickPos.y)}
                      onBlur={handleCanvasMouseLeave}
                      className="block max-w-full max-h-[55vh] sm:max-h-[540px] object-contain cursor-crosshair"
                    />
                  ) : (
                    <canvas
                      ref={canvasRef}
                      role="img"
                      aria-label={t('ws.previewLabel')}
                      className="block max-w-full max-h-[55vh] sm:max-h-[540px] object-contain"
                    />
                  )}
                  <span key={`c${registerTick}`} className="plate plate-c" aria-hidden="true" />
                  <span key={`m${registerTick}`} className="plate plate-m" aria-hidden="true" />
                  <span key={`y${registerTick}`} className="plate plate-y" aria-hidden="true" />

                  {/* Live dimension lines: width above, height to the left */}
                  <span className="absolute left-0 right-0 -top-12 sm:-top-14 h-4 pointer-events-none" aria-hidden="true">
                    <span className="absolute inset-x-0 top-1/2 border-t border-ink" />
                    <span className="absolute left-0 top-0 bottom-0 border-l border-ink" />
                    <span className="absolute right-0 top-0 bottom-0 border-r border-ink" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper-bright px-1.5 text-[12px] font-semibold text-ink whitespace-nowrap" data-measure>
                      {canvasRef.current?.width ?? origW} px
                    </span>
                  </span>
                  <span className="hidden sm:block absolute top-0 bottom-0 -left-14 w-4 pointer-events-none" aria-hidden="true">
                    <span className="absolute inset-y-0 left-1/2 border-l border-ink" />
                    <span className="absolute top-0 left-0 right-0 border-t border-ink" />
                    <span className="absolute bottom-0 left-0 right-0 border-b border-ink" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 bg-paper-bright px-1.5 text-[12px] font-semibold text-ink whitespace-nowrap" data-measure>
                      {canvasRef.current?.height ?? origH} px
                    </span>
                  </span>

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
                    <InteractiveTextOverlay canvasElement={canvasRef.current} options={textOptions} onChange={setTextOptions} />
                  )}
                  {slug.includes('color') && loupe.visible && (
                    <div
                      className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-full pb-3"
                      style={{ left: `${loupe.x}px`, top: `${loupe.y}px` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 border-2 border-ink overflow-hidden relative bg-paper-bright">
                          <div className="grid grid-cols-7 grid-rows-7 w-full h-full">
                            {loupe.matrix.map((col, idx) => (
                              <div key={idx} style={{ backgroundColor: col }} className="w-full h-full" />
                            ))}
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 border border-paper-bright outline outline-1 outline-ink" />
                          </div>
                        </div>
                        <div className="mt-1 px-2 bg-process-key text-paper text-[12px] font-semibold flex items-center gap-1.5" data-measure>
                          <span className="w-2.5 h-2.5 border border-paper" style={{ backgroundColor: loupe.hex }} />
                          <span>{loupe.hex}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {slug.includes('color') && (
                  <span className="sr-only" aria-live="polite">
                    {pickAnnouncement}
                  </span>
                )}

                {isRendering && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-paper border border-ink text-[12px] text-ink" role="status">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                    <span>{t('ws.rendering')}</span>
                  </div>
                )}
              </div>

              {slug.includes('color') && (
                <p id="ws-picker-help" className="text-[14px] text-graphite leading-relaxed">
                  {t('ws.pickerHelp')}
                </p>
              )}

              {/* Job ticket: what goes in, what comes out */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
                <span className="flex items-baseline gap-2">
                  <span className="slug">{t('ws.source')}</span>
                  <span className="text-ink font-semibold">{origW} × {origH} px</span>
                  <span className="text-graphite">{sourceExt} · {formatBytes(fileSize)}</span>
                </span>
                {canExport && (
                  <span className="flex items-baseline gap-2">
                    <span className="slug">{t('ws.output')}</span>
                    <span className="text-ink font-semibold">{outW} × {outH} px</span>
                    <span className="text-graphite">
                      {formatExtension(format).toUpperCase()}
                      {lastExportBytes !== null
                        ? ` · ${formatBytes(lastExportBytes)} · ${lastExportBytes <= fileSize ? '−' : '+'}${Math.abs(Math.round((1 - lastExportBytes / fileSize) * 100))}%`
                        : (slug === 'compress-image' || slug === 'remove-image-metadata') && outputBytes > 0
                          ? ` · ≈ ${formatBytes(outputBytes)}`
                          : ''}
                    </span>
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="ml-auto inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline"
                >
                  {t('ws.replace')}
                </button>
              </div>
            </div>

            {/* Ruled control panel */}
            <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
              <div className="border border-ink bg-paper-bright">
                <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-ink" aria-hidden="true" />
                  {t('ws.settings')}
                </h2>
                <div className="p-4 space-y-4 text-[15px]">
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
                  format={mimeType.replace('image/', '').replace('svg+xml', 'svg')}
                  mimeType={mimeType}
                  width={origW}
                  height={origH}
                  hasTransparency={hasRealTransparency}
                  sourceFile={sourceFile}
                  onRemoveMetadata={() => handleSendToTool('remove-image-metadata')}
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
                  mimeType={displayableFile?.type || 'image/png'}
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-ink flex items-center gap-1.5">
                      <Code className="w-4 h-4" aria-hidden="true" />
                      {t('ws.faviconSnippet')}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(FAVICON_SNIPPET);
                        setCopiedToast(true);
                        setTimeout(() => setCopiedToast(false), 2200);
                      }}
                      className="btn-rule min-h-[34px] px-2.5 text-[13px]"
                    >
                      {copiedToast ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                      <span aria-live="polite">{copiedToast ? t('ws.copiedShort') : t('ws.copyCode')}</span>
                    </button>
                  </div>
                  <pre className="p-2.5 bg-paper border border-pencil text-[12px] font-code text-ink whitespace-pre-wrap break-all select-all leading-relaxed">{FAVICON_SNIPPET}</pre>
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
                'favicon-generator',
              ].includes(slug) && (
                <div className="space-y-3 pt-4 border-t border-ink">
                  {formatSelectable && (
                    <div className="space-y-1.5">
                      <span className="slug">{t('ws.saveAs')}</span>
                      <div className="grid grid-cols-4 border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                        {(['image/jpeg', 'image/png', 'image/webp', 'image/avif'] as const).map((fmt) => (
                          <button
                            key={fmt}
                            type="button"
                            aria-pressed={format === fmt}
                            onClick={() => setFormat(fmt)}
                            className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                              format === fmt ? 'seg-on' : 'seg-off'
                            }`}
                          >
                            {formatExtension(fmt).toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {format === 'image/jpeg' && hasRealTransparency && slug !== 'png-to-jpg' && (
                    <label className="flex items-center justify-between gap-3">
                      <span>{t('ws.fillTransparent')}</span>
                      <input
                        type="color"
                        value={bgFillColor}
                        onChange={(e) => setBgFillColor(e.target.value)}
                        className="w-9 h-9 border border-ink bg-transparent cursor-pointer"
                      />
                    </label>
                  )}
                  {format === 'image/png' ? (
                    <p className="text-[14px] text-graphite">{t('ws.pngLossless')}</p>
                  ) : (
                    <label className="block space-y-1.5">
                      <span className="flex items-center justify-between">
                        <span className="slug">{t('ws.quality')}</span>
                        <span className="font-semibold text-ink" data-measure>{quality}%</span>
                      </span>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={quality}
                        aria-label={t('ws.qualityLabel')}
                        onChange={(e) => setQuality(parseInt(e.target.value) || 85)}
                        className="w-full"
                      />
                    </label>
                  )}
                </div>
              )}
                </div>
              </div>

              {canExport && (
                <div className="space-y-2">
                  <div className="hidden lg:block">
                    <button type="button" onClick={handleDownload} disabled={isExporting} className="btn-ink w-full min-h-[52px] text-[16px]">
                      {isExporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : slug === 'favicon-generator' ? <Archive className="w-5 h-5" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
                      <span>{isExporting ? t('ws.preparing') : downloadLabel}</span>
                    </button>
                  </div>

                  {exportError && (
                    <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow leading-relaxed">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{exportError}</span>
                    </p>
                  )}

                  {slug !== 'favicon-generator' && (
                    <button type="button" onClick={handleCopyImage} className="btn-rule w-full">
                      {copiedToast ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                      <span aria-live="polite">{copiedToast ? t('ws.copied') : t('ws.copy')}</span>
                    </button>
                  )}

                  {slug !== 'favicon-generator' && nextTools.length > 0 && (
                    <div className="pt-4">
                      <h3 className="slug pb-1.5 border-b border-ink">{t('ws.next')}</h3>
                      <ul className="divide-y divide-pencil-soft">
                        {nextTools.map((next) => (
                          <li key={next.slug}>
                            <button
                              type="button"
                              onClick={() => handleSendToTool(next.slug)}
                              className="w-full flex items-center gap-2.5 py-2 text-left text-[15px] text-ink hover:bg-paper-stock"
                            >
                              <span className={`w-2.5 h-2.5 shrink-0 ${next.inkClass}`} aria-hidden="true" />
                              <span className="flex-1">{next.name}</span>
                              <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Phones: the primary action stays under the thumb */}
        {imageElement && canExport && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
            <button type="button" onClick={handleDownload} disabled={isExporting} className="btn-ink w-full min-h-[48px] text-[16px]">
              {isExporting ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              <span>{isExporting ? t('ws.preparing') : downloadLabel}</span>
            </button>
          </div>
        )}
      </div>
    </ErrorBoundary>
    </I18nProvider>
  );
}
