import { isHeicFile, convertHeic, convertHeicToBlob } from './heicLoader';
import { isTiffFile, convertTiff } from './tiffLoader';

export interface LoadedImage {
  file: File;
  img: HTMLImageElement;
  /** Object URL of the decoded image (revoke with URL.revokeObjectURL when done) */
  url: string;
  width: number;
  height: number;
}

/** Decode an image file (iPhone HEIC and TIFF included) into an <img> that canvases can draw; a TIFF gives its first page */
export async function loadImageFile(file: File): Promise<LoadedImage> {
  const blob = isHeicFile(file) ? await convertHeicToBlob(file) : isTiffFile(file) ? (await convertTiff(file, true)).blobs[0] : file;
  return decodeBlob(file, blob);
}

/** Like loadImageFile, but a multi-page TIFF or a HEIC holding several images gives one image per page */
export async function loadImageFiles(file: File): Promise<LoadedImage[]> {
  if (!isTiffFile(file) && !isHeicFile(file)) return [await loadImageFile(file)];
  const blobs = isHeicFile(file) ? await convertHeic(file) : (await convertTiff(file)).blobs;
  return Promise.all(blobs.map((b) => decodeBlob(file, b)));
}

async function decodeBlob(file: File, blob: Blob): Promise<LoadedImage> {
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
