export interface LoadedImage {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  width: number;
  height: number;
  aspectRatio: number;
  objectUrl: string;
  dataUrl?: string;
}

export type ExportFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CropOptions {
  rect: CropRect;
  rotation: number; // -180 to 180 deg
  flipHorizontal: boolean;
  flipVertical: boolean;
  isCircular: boolean;
  format: ExportFormat;
  quality: number; // 0.1 to 1.0
}

export interface ResizeOptions {
  width: number;
  height: number;
  maintainAspectRatio: boolean;
  preventUpscaling: boolean;
  format: ExportFormat;
  quality: number;
}

export interface CompressOptions {
  quality: number; // 0.1 to 1.0
  format: ExportFormat;
  maxSizeKB?: number;
}

export interface ConvertOptions {
  format: ExportFormat;
  quality: number; // 0.1 to 1.0 for lossy formats (JPEG/WebP)
  backgroundColor?: string; // Optional background color when converting transparent PNG/WebP to JPEG (default #FFFFFF)
}

export interface RotateOptions {
  angle: number; // total degrees
  format: ExportFormat;
  quality: number;
}

export interface FlipOptions {
  horizontal: boolean;
  vertical: boolean;
  format: ExportFormat;
  quality: number;
}

export interface ProcessingResult {
  blob: Blob;
  url: string;
  filename: string;
  width: number;
  height: number;
  originalSize: number;
  outputSize: number;
  reductionPercentage: number;
}
