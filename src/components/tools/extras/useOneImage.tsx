import React, { useRef, useState } from 'react';
import { useImageIntake } from '../../shared/useImageIntake';
import { useT } from '../../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';

export const IMAGE_ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif,image/avif,image/gif,image/bmp';

export interface OneImage extends LoadedImage {
  /** Full-resolution pixels (shrunk only past the browser's canvas limit) */
  canvas: HTMLCanvasElement;
}

/** One picture for a tool: load, replace, paste/hand-off intake, and a hidden input for "Replace" */
export function useOneImage(onLoaded?: (img: OneImage) => void) {
  const t = useT();
  const [img, setImg] = useState<OneImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async (file: File) => {
    setError(null);
    try {
      const l = await loadImageFile(file);
      const fit = fitWithinPixels(l.width, l.height);
      const canvas = document.createElement('canvas');
      canvas.width = fit.width;
      canvas.height = fit.height;
      canvas.getContext('2d', { willReadFrequently: true })!.drawImage(l.img, 0, 0, fit.width, fit.height);
      const next = { ...l, width: fit.width, height: fit.height, canvas };
      setImg((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return next;
      });
      onLoaded?.(next);
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept={IMAGE_ACCEPT}
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.[0]) load(e.target.files[0]);
        e.target.value = '';
      }}
    />
  );
  const pixels = () => img!.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, img!.width, img!.height).data;
  return { img, error, setError, load, input, replace: () => inputRef.current?.click(), pixels };
}

/** Point on a displayed canvas → pixel in the picture */
export function canvasPoint(e: React.PointerEvent | React.MouseEvent, canvas: HTMLCanvasElement, w: number, h: number) {
  const r = canvas.getBoundingClientRect();
  return { x: Math.max(0, Math.min(w - 1, Math.floor(((e.clientX - r.left) / r.width) * w))), y: Math.max(0, Math.min(h - 1, Math.floor(((e.clientY - r.top) / r.height) * h))) };
}
