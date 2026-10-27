/**
 * Image to Text with Tesseract (Apache-2.0), on the device. The worker, the engine and the language data are served
 * from this site (copied in at build time by scripts/self-host-models.mjs), so the image goes nowhere.
 */
import { createWorker, type Worker } from 'tesseract.js';
import assets from '../ai/modelAssets.json';

/** Tesseract codes for the site's languages; the language data is ~1-4 MB each and cached after the first use */
export const OCR_LANGS = ['eng', 'spa', 'fra', 'deu', 'por', 'ita', 'jpn', 'kor', 'ind', 'tur'] as const;
export type OcrLang = (typeof OCR_LANGS)[number];

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

/** Read the text in an image. One job at a time; the worker stays loaded for the next image. */
export async function recognizeText(image: Blob | HTMLCanvasElement, lang: OcrLang, onProgress?: (p: OcrProgress) => void): Promise<OcrResult> {
  listener = onProgress || null;
  try {
    const w = await getWorker(lang);
    if (workerLang !== lang) {
      onProgress?.({ stage: 'loading', fraction: 0 });
      await w.reinitialize(lang, 1);
      workerLang = lang;
    }
    const { data } = await w.recognize(image);
    return { text: data.text.replace(/\n{3,}/g, '\n\n').trim(), confidence: data.confidence };
  } finally {
    listener = null;
  }
}
