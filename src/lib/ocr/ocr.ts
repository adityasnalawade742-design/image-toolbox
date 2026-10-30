/**
 * Image to Text with Tesseract (Apache-2.0), on the device. The worker, the engine and the language data are served
 * from this site (copied in at build time by scripts/self-host-models.mjs), so the image goes nowhere.
 */
import { createWorker, type Worker } from 'tesseract.js';
import assets from '../ai/modelAssets.json';

/** Tesseract codes for the site's languages; the language data is ~1-4 MB each and cached after the first use */
export const OCR_LANGS = ['eng', 'spa', 'fra', 'deu', 'por', 'ita', 'jpn', 'kor', 'ind', 'tur'] as const;
export type OcrLang = (typeof OCR_LANGS)[number];

/** Each language in its own name, for the language lists */
export const OCR_LANG_NAMES: Record<OcrLang, string> = {
  eng: 'English', spa: 'Español', fra: 'Français', deu: 'Deutsch', por: 'Português',
  ita: 'Italiano', jpn: '日本語', kor: '한국어', ind: 'Bahasa Indonesia', tur: 'Türkçe',
};

/** The OCR language that matches a site locale */
export const OCR_LANG_FOR_LOCALE: Record<string, OcrLang> = {
  en: 'eng', es: 'spa', fr: 'fra', de: 'deu', pt: 'por', it: 'ita', ja: 'jpn', ko: 'kor', id: 'ind', tr: 'tur',
};

export interface OcrProgress {
  stage: 'loading' | 'recognizing';
  /** 0–1, real progress reported by Tesseract */
  fraction: number;
}

export interface OcrResult {
  text: string;
  /** Tesseract's mean word confidence, 0–100 */
  confidence: number;
}

const base = () => `${self.location.origin}/models/ocr`;
let worker: Promise<Worker> | null = null;
let workerLang: OcrLang | null = null;
let listener: ((p: OcrProgress) => void) | null = null;

function getWorker(lang: OcrLang): Promise<Worker> {
  if (!worker) {
    workerLang = lang;
    worker = createWorker(lang, 1 /* LSTM only: the fast language data has no legacy model */, {
      workerPath: `${base()}/${assets.ocr.version}/worker.min.js`,
      corePath: `${base()}/core-${assets.ocr.coreVersion}`,
      langPath: `${base()}/tessdata/${assets.ocr.tessdata.commit.slice(0, 12)}`,
      gzip: false,
      logger: (m: { status: string; progress: number }) => {
        listener?.({ stage: m.status === 'recognizing text' ? 'recognizing' : 'loading', fraction: m.progress || 0 });
      },
    });
    // A failed start (e.g. offline on first use) must not block later attempts
    worker.catch(() => {
      worker = null;
      workerLang = null;
    });
  }
  return worker;
}

/** Start loading the engine and a language before the image arrives (e.g. while the file picker is open) */
export function preloadOcr(lang: OcrLang) {
  getWorker(lang).catch(() => {});
}

// Tesseract reads best when letters are about 20-30 px tall: a poor reading of a small image is retried enlarged
const ENLARGE_BELOW = 1600;
const ENLARGE_TO = 2400;
const MAX_ENLARGE = 3;
// A first reading below this mean confidence is retried enlarged (small images) and upside down; the most
// confident reading wins. Good images keep their first reading, unchanged and without extra time.
const RETRY_BELOW = 60;
// A retry replaces the first reading only when clearly more confident, not by noise
const RETRY_MARGIN = 10;

function enlarged(src: HTMLCanvasElement): HTMLCanvasElement {
  const scale = Math.min(MAX_ENLARGE, ENLARGE_TO / Math.max(src.width, src.height));
  const c = document.createElement('canvas');
  c.width = Math.round(src.width * scale);
  c.height = Math.round(src.height * scale);
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(src, 0, 0, c.width, c.height);
  return c;
}

function rotated(src: HTMLCanvasElement, quarterTurns: number): HTMLCanvasElement {
  const c = document.createElement('canvas');
  const sideways = quarterTurns % 2 === 1;
  c.width = sideways ? src.height : src.width;
  c.height = sideways ? src.width : src.height;
  const ctx = c.getContext('2d')!;
  ctx.translate(c.width / 2, c.height / 2);
  ctx.rotate((quarterTurns * Math.PI) / 2);
  ctx.drawImage(src, -src.width / 2, -src.height / 2);
  return c;
}

// Tesseract occasionally emits replacement characters or control codes for marks it can't place
const clean = (text: string) =>
  text
    .replace(/[\uFFFD\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

/**
 * Read the text in an image. One job at a time; the worker stays loaded for the next image.
 * If the first reading looks poor, the image is also read enlarged (when small) and upside down, and the most
 * confident reading wins. Good images need only the first pass.
 */
export async function recognizeText(image: HTMLCanvasElement, lang: OcrLang, onProgress?: (p: OcrProgress) => void): Promise<OcrResult> {
  listener = onProgress || null;
  try {
    const w = await getWorker(lang);
    if (workerLang !== lang) {
      onProgress?.({ stage: 'loading', fraction: 0 });
      await w.reinitialize(lang, 1);
      workerLang = lang;
    }
    const read = async (src: HTMLCanvasElement): Promise<OcrResult> => {
      const { data } = await w.recognize(src);
      return { text: clean(data.text), confidence: data.confidence };
    };
    let best = await read(image);
    if (best.confidence >= RETRY_BELOW) return best;
    // Further passes keep the bar full rather than restarting it
    listener = null;
    onProgress?.({ stage: 'recognizing', fraction: 1 });
    const retries: HTMLCanvasElement[] = [];
    if (Math.max(image.width, image.height) < ENLARGE_BELOW) retries.push(enlarged(image));
    retries.push(rotated(image, 2));
    for (const src of retries) {
      const result = await read(src);
      if (result.confidence >= best.confidence + RETRY_MARGIN) best = result;
      if (best.confidence >= RETRY_BELOW) break;
    }
    return best;
  } finally {
    listener = null;
  }
}
