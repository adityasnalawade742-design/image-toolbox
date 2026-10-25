import { isHeicFile, convertHeicToBlob } from './heicLoader';

export interface LoadedImage {
  file: File;
  img: HTMLImageElement;
  /** Object URL of the decoded image (revoke with URL.revokeObjectURL when done) */
  url: string;
  width: number;
  height: number;
}

/** Decode an image file (iPhone HEIC included) into an <img> that canvases can draw */
export async function loadImageFile(file: File): Promise<LoadedImage> {
  const blob = isHeicFile(file) ? await convertHeicToBlob(file) : file;
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.decoding = 'async';
  img.src = url;
  try {
    await img.decode();
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
  return { file, img, url, width: img.naturalWidth, height: img.naturalHeight };
}
