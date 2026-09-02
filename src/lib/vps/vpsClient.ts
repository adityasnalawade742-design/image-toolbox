/**
 * Unified Client Connector for Oracle Cloud VPS microservices
 * Handles graceful degradation if the server is offline or unreachable.
 */

export interface VpsStatus {
  online: boolean;
  model?: string;
  hardware?: string;
}

let vpsStatusCache: { status: boolean; timestamp: number } | null = null;

export async function isVpsOnline(): Promise<boolean> {
  const now = Date.now();
  if (vpsStatusCache && now - vpsStatusCache.timestamp < 30_000) {
    return vpsStatusCache.status;
  }

  try {
    const res = await fetch('/health', {
      method: 'GET',
      signal: AbortSignal.timeout(4000),
    });
    const isOk = res.ok;
    vpsStatusCache = { status: isOk, timestamp: now };
    return isOk;
  } catch {
    vpsStatusCache = { status: false, timestamp: now };
    return false;
  }
}

export interface VpsCompressOptions {
  quality: number;
  format: 'image/webp' | 'image/jpeg' | 'image/png' | 'image/avif';
  subsampling?: '4:2:0' | '4:4:4';
  stripExif?: boolean;
}

/**
 * Server-side advanced compression using VPS LibJPEG-Turbo / WebP / AVIF
 */
export async function vpsCompress(
  file: File | Blob,
  options: VpsCompressOptions,
  abortSignal?: AbortSignal
): Promise<Blob> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('quality', options.quality.toString());
  formData.append('format', options.format.replace('image/', ''));
  if (options.subsampling) formData.append('subsampling', options.subsampling);
  if (options.stripExif !== undefined) formData.append('strip_exif', options.stripExif ? 'true' : 'false');

  const response = await fetch('/api/compress', {
    method: 'POST',
    body: formData,
    signal: abortSignal || AbortSignal.timeout(25000),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || err.error || `VPS compression error (${response.status})`);
  }

  return await response.blob();
}

/**
 * Server-side next-gen format conversion (especially native AVIF)
 */
export async function vpsConvert(
  file: File | Blob,
  targetFormat: 'avif' | 'webp' | 'jpg' | 'png',
  quality: number = 85,
  abortSignal?: AbortSignal
): Promise<Blob> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('target_format', targetFormat);
  formData.append('quality', quality.toString());

  const response = await fetch('/api/convert', {
    method: 'POST',
    body: formData,
    signal: abortSignal || AbortSignal.timeout(25000),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || err.error || `VPS conversion error (${response.status})`);
  }

  return await response.blob();
}

/**
 * Pro AI Enhancement (Denoise & Smart Unsharp Masking)
 */
export async function vpsEnhance(
  file: File | Blob,
  mode: 'denoise' | 'sharpen' | 'contrast',
  strength: number = 1.0,
  abortSignal?: AbortSignal
): Promise<Blob> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('mode', mode);
  formData.append('strength', strength.toString());

  const response = await fetch('/api/enhance', {
    method: 'POST',
    body: formData,
    signal: abortSignal || AbortSignal.timeout(25000),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || err.error || `VPS enhancement error (${response.status})`);
  }

  return await response.blob();
}

export interface ExifAnalysisResult {
  dimensions: string;
  width: number;
  height: number;
  format: string;
  mode: string;
  is_animated: boolean;
  exif: Record<string, string>;
  gps: Record<string, string> | null;
  exif_error?: string;
}

/**
 * Deep EXIF metadata extraction
 */
export async function vpsAnalyzeMetadata(
  file: File | Blob,
  abortSignal?: AbortSignal
): Promise<ExifAnalysisResult> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/analyze', {
    method: 'POST',
    body: formData,
    signal: abortSignal || AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || err.error || `VPS analysis error (${response.status})`);
  }

  return await response.json();
}
