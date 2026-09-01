import React, { useState } from 'react';
import { LoadedImage } from '@/types/image';
import { loadImageFromFile } from '@/lib/canvas/file-utils';
import { DropZone } from './DropZone';

// Tool Views
import { CropView } from '../tools/CropView';
import { ResizeView } from '../tools/ResizeView';
import { RotateView } from '../tools/RotateView';
import { FlipView } from '../tools/FlipView';
import { CompressView } from '../tools/CompressView';
import { ConvertView } from '../tools/ConvertView';
import { BulkResizeView } from '../tools/BulkResizeView';
import { BulkCompressView } from '../tools/BulkCompressView';
import { MetadataView } from '../tools/MetadataView';
import { AnalyzerView } from '../tools/AnalyzerView';
import { ColorPickerView } from '../tools/ColorPickerView';
import { PaletteView } from '../tools/PaletteView';
import { AddTextView } from '../tools/AddTextView';
import { WatermarkView } from '../tools/WatermarkView';
import { BorderView } from '../tools/BorderView';
import { RoundImageView } from '../tools/RoundImageView';
import { FaviconView } from '../tools/FaviconView';
import { ImageToBase64View } from '../tools/ImageToBase64View';
import { Base64ToImageView } from '../tools/Base64ToImageView';
import { SvgToPngView } from '../tools/SvgToPngView';

interface ToolWorkspaceProps {
  toolSlug: string;
}

export const ToolWorkspace: React.FC<ToolWorkspaceProps> = ({ toolSlug }) => {
  const [loadedImage, setLoadedImage] = useState<LoadedImage | null>(null);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isBulkTool = toolSlug === 'bulk-image-resizer' || toolSlug === 'bulk-image-compressor';
  const isSvgTool = toolSlug === 'svg-to-png';
  const isBase64ToImageTool = toolSlug === 'base64-to-image';

  // Handle single file loading
  const handleSingleFile = async (file: File) => {
    setIsLoading(true);
    try {
      const img = await loadImageFromFile(file);
      setLoadedImage(img);
    } catch (err) {
      console.error('Failed to load image:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle multiple files for bulk tools
  const handleMultipleFiles = (files: File[]) => {
    setMultipleFiles(files);
  };

  const handleReset = () => {
    if (loadedImage?.objectUrl) {
      URL.revokeObjectURL(loadedImage.objectUrl);
    }
    setLoadedImage(null);
    setMultipleFiles([]);
  };

  // Base64-to-Image has its own internal text input
  if (isBase64ToImageTool) {
    return <Base64ToImageView />;
  }

  // SVG to PNG has its own internal file/text input
  if (isSvgTool) {
    return <SvgToPngView />;
  }

  // Bulk tools dropzone handler
  if (isBulkTool && multipleFiles.length === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <DropZone
          multiple={true}
          onFilesLoaded={handleMultipleFiles}
          title={toolSlug === 'bulk-image-resizer' ? 'Choose or drop images to resize in bulk' : 'Choose or drop images to compress in bulk'}
          subtitle="Process multiple JPG, PNG, or WebP files at once"
        />
      </div>
    );
  }

  // Bulk tool views when files are loaded
  if (toolSlug === 'bulk-image-resizer' && multipleFiles.length > 0) {
    return <BulkResizeView initialFiles={multipleFiles} onReset={handleReset} />;
  }
  if (toolSlug === 'bulk-image-compressor' && multipleFiles.length > 0) {
    return <BulkCompressView initialFiles={multipleFiles} onReset={handleReset} />;
  }

  // Single file dropzone when not yet uploaded
  if (!loadedImage) {
    return (
      <div className="max-w-2xl mx-auto">
        <DropZone
          onFileLoaded={handleSingleFile}
          title={isSvgTool ? 'Drop an SVG file here' : 'Drop an image here to start'}
          subtitle={isSvgTool ? 'Upload .svg vector file' : 'JPG, PNG, WebP, AVIF, or GIF supported'}
          accept={isSvgTool ? 'image/svg+xml,.svg' : undefined}
        />
      </div>
    );
  }

  // Render respective single-image view
  switch (toolSlug) {
    case 'crop-image':
      return <CropView image={loadedImage} onResetImage={handleReset} />;
    
    case 'resize-image':
      return <ResizeView image={loadedImage} onResetImage={handleReset} />;
    
    case 'rotate-image':
      return <RotateView image={loadedImage} onResetImage={handleReset} />;
    
    case 'flip-image':
      return <FlipView image={loadedImage} onResetImage={handleReset} />;
    
    case 'compress-image':
      return <CompressView image={loadedImage} onResetImage={handleReset} />;
    
    case 'convert-image':
      return <ConvertView image={loadedImage} onResetImage={handleReset} />;
    
    case 'jpg-to-png':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/png" />;
    
    case 'jpg-to-webp':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/webp" />;
    
    case 'png-to-jpg':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/jpeg" />;
    
    case 'png-to-webp':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/webp" />;
    
    case 'webp-to-jpg':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/jpeg" />;
    
    case 'webp-to-png':
      return <ConvertView image={loadedImage} onResetImage={handleReset} defaultFormat="image/png" />;
    
    case 'remove-image-metadata':
      return <MetadataView image={loadedImage} onResetImage={handleReset} />;
    
    case 'image-analyzer':
      return <AnalyzerView image={loadedImage} onResetImage={handleReset} />;
    
    case 'image-color-picker':
      return <ColorPickerView image={loadedImage} onResetImage={handleReset} />;
    
    case 'image-palette-generator':
      return <PaletteView image={loadedImage} onResetImage={handleReset} />;
    
    case 'add-text-to-image':
      return <AddTextView image={loadedImage} onResetImage={handleReset} />;
    
    case 'watermark-image':
      return <WatermarkView image={loadedImage} onResetImage={handleReset} />;
    
    case 'add-border-to-image':
      return <BorderView image={loadedImage} onResetImage={handleReset} />;
    
    case 'round-image':
      return <RoundImageView image={loadedImage} onResetImage={handleReset} />;
    
    case 'favicon-generator':
      return <FaviconView image={loadedImage} onResetImage={handleReset} />;
    
    case 'image-to-base64':
      return <ImageToBase64View image={loadedImage} onResetImage={handleReset} defaultMode="raw" />;
    
    case 'image-to-data-uri':
      return <ImageToBase64View image={loadedImage} onResetImage={handleReset} defaultMode="data-uri" />;
    
    case 'svg-to-png':
      return <SvgToPngView />;
    
    default:
      return <CropView image={loadedImage} onResetImage={handleReset} />;
  }
};
