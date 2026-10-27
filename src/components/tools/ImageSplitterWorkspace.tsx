import { useState, useRef } from 'react';
import { Grid3x3, Archive, Loader2, AlertCircle } from 'lucide-react';
import JSZip from 'jszip';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';

interface SplitPreset {
  id: string;
  nameKey: StringKey;
  rows: number;
  cols: number;
}

const PRESETS: SplitPreset[] = [
  { id: 'insta-3x3', nameKey: 'ctl.split.presetInsta3x3', rows: 3, cols: 3 },
  { id: 'insta-3x1', nameKey: 'ctl.split.presetPanorama', rows: 1, cols: 3 },
  { id: 'insta-2x1', nameKey: 'ctl.split.presetCarousel', rows: 1, cols: 2 },
  { id: 'grid-2x2', nameKey: 'ctl.split.presetQuad', rows: 2, cols: 2 },
  { id: 'custom', nameKey: 'ctl.split.presetCustom', rows: 2, cols: 3 },
];

const MAX_SPLIT = 12;

type TileFormat = 'png' | 'jpeg';

/** Parses a typed grid count; null while the field is empty or not a whole number in range */
function parseCount(value: string): number | null {
  if (!/^\d+$/.test(value.trim())) return null;
  const n = parseInt(value, 10);
  return n >= 1 && n <= MAX_SPLIT ? n : null;
}

export function ImageSplitterWorkspace() {
  const t = useT();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [activePreset, setActivePreset] = useState<string>('insta-3x3');
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  // What is in the number fields while typing; committed to rows/cols on a valid parse or blur
  const [rowsInput, setRowsInput] = useState<string>('3');
  const [colsInput, setColsInput] = useState<string>('3');
  const [format, setFormat] = useState<TileFormat>('png');
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [zipError, setZipError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);
    setZipError(null);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  // Images handed off from other tools / the homepage, and Ctrl+V paste
  useImageIntake(handleFileSelect);

  const handlePresetSelect = (preset: SplitPreset) => {
    setActivePreset(preset.id);
    setRows(preset.rows);
    setCols(preset.cols);
    setRowsInput(String(preset.rows));
    setColsInput(String(preset.cols));
  };

  const handleCountChange = (axis: 'rows' | 'cols', value: string) => {
    const setInput = axis === 'rows' ? setRowsInput : setColsInput;
    const setCount = axis === 'rows' ? setRows : setCols;
    setInput(value);
    const parsed = parseCount(value);
    if (parsed !== null) {
      setActivePreset('custom');
      setCount(parsed);
    }
  };

  const handleCountBlur = (axis: 'rows' | 'cols') => {
    const input = axis === 'rows' ? rowsInput : colsInput;
    const current = axis === 'rows' ? rows : cols;
    const setInput = axis === 'rows' ? setRowsInput : setColsInput;
    const setCount = axis === 'rows' ? setRows : setCols;
    const n = parseInt(input, 10);
    if (Number.isFinite(n)) {
      const clamped = Math.max(1, Math.min(MAX_SPLIT, n));
      if (clamped !== current) setActivePreset('custom');
      setCount(clamped);
      setInput(String(clamped));
    } else {
      setInput(String(current));
    }
  };

  // Extract individual slice as a canvas with exact pixel boundary coverage
  const getSliceCanvas = (r: number, c: number): HTMLCanvasElement => {
    if (!imgElement) throw new Error('No image loaded');
    const fullW = imgElement.naturalWidth || imgElement.width;
    const fullH = imgElement.naturalHeight || imgElement.height;

    const baseSliceW = Math.floor(fullW / cols);
    const baseSliceH = Math.floor(fullH / rows);

    const startX = c * baseSliceW;
    const startY = r * baseSliceH;
    // Last column and last row absorb remainder pixels so nothing is lost
    const sliceW = c === cols - 1 ? fullW - startX : baseSliceW;
    const sliceH = r === rows - 1 ? fullH - startY : baseSliceH;

    const canvas = document.createElement('canvas');
    canvas.width = sliceW;
    canvas.height = sliceH;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not create canvas context');

    ctx.drawImage(
      imgElement,
      startX,
      startY,
      sliceW,
      sliceH,
      0,
      0,
      sliceW,
      sliceH
    );

    return canvas;
  };

  // Download a single slice
  const downloadSingleSlice = (r: number, c: number, index: number, format: TileFormat = 'png') => {
    const canvas = getSliceCanvas(r, c);
    const link = document.createElement('a');
    link.download = `tile-${index + 1}-${r + 1}x${c + 1}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvas.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  // Download all slices as ZIP
  const downloadAllZip = async (format: TileFormat = 'png') => {
    if (!imgElement) return;
    setIsZipping(true);
    setZipError(null);
    setZipProgress(10);

    try {
      const zip = new JSZip();
      const totalTiles = rows * cols;
      let completed = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const tileIndex = r * cols + c + 1;
          const canvas = getSliceCanvas(r, c);

          const dataUrl = canvas.toDataURL(`image/${format}`, 0.95);
          const base64Data = dataUrl.split(',')[1];
          zip.file(`tile_${String(tileIndex).padStart(2, '0')}.${format === 'jpeg' ? 'jpg' : format}`, base64Data, {
            base64: true,
          });

          completed++;
          setZipProgress(Math.round((completed / totalTiles) * 80));
        }
      }

      setZipProgress(90);
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.download = `split-grid-${rows}x${cols}-${Date.now()}.zip`;
      link.href = URL.createObjectURL(content);
      link.click();
      setZipProgress(100);
    } catch (err) {
      console.error('ZIP export failed:', err);
      setZipError(t('ctl.split.errZip'));
    } finally {
      setIsZipping(false);
      setZipProgress(0);
    }
  };

  const totalTiles = rows * cols;
  const imgW = imgElement?.naturalWidth || imgElement?.width || 1;
  const imgH = imgElement?.naturalHeight || imgElement?.height || 1;
  const tileW = Math.floor(imgW / cols);
  const tileH = Math.floor(imgH / rows);
  const loaded = Boolean(selectedFile && imgElement);

  const primaryContent = (
    <>
      {isZipping ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Archive className="w-5 h-5" aria-hidden="true" />}
      <span>{isZipping ? t('ctl.split.zipping', { percent: zipProgress }) : t('ctl.split.downloadAll', { count: totalTiles })}</span>
    </>
  );

  const numberInputClass = 'w-full border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink';

  return (
    <div className={`w-full max-w-6xl mx-auto space-y-6 ${loaded ? 'pb-20 lg:pb-0' : ''}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
          e.target.value = '';
        }}
      />

      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Proof sheet with the cut grid */}
          <div className="min-w-0 space-y-3">
            <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] px-6 py-8 sm:px-12 sm:py-10 rounded-xl">
              <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
                <img
                  src={imgElement.src}
                  alt={t('ctl.split.previewAlt')}
                  className="block max-w-full max-h-[65vh] w-auto h-auto pointer-events-none select-none"
                />

                <div
                  className="absolute inset-0 grid"
                  style={{
                    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: rows }).map((_, r) =>
                    Array.from({ length: cols }).map((_, c) => {
                      const tileNum = r * cols + c + 1;
                      return (
                        <button
                          key={`${r}-${c}`}
                          type="button"
                          onClick={() => downloadSingleSlice(r, c, tileNum - 1, format)}
                          aria-label={t('ctl.split.downloadTile', { n: tileNum, row: r + 1, col: c + 1 })}
                          title={t('ctl.split.downloadTile', { n: tileNum, row: r + 1, col: c + 1 })}
                          className="relative flex items-center justify-center border border-process-magenta/80 hover:bg-process-key/20 focus-visible:bg-process-key/20 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-process-magenta transition-colors"
                        >
                          <span
                            className="inline-flex items-center justify-center min-w-[24px] h-6 px-1 bg-process-key text-paper text-[12px] font-semibold"
                            data-measure
                            aria-hidden="true"
                          >
                            {tileNum}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Job ticket */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ws.source')}</span>
                <span className="text-ink font-semibold">{imgW} × {imgH} px</span>
              </span>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ctl.split.tile')}</span>
                <span className="text-ink font-semibold">≈ {tileW} × {tileH} px</span>
                <span className="text-graphite">{t('ctl.split.tileCount', { count: totalTiles })}</span>
              </span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="ml-auto inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline"
              >
                {t('ws.replace')}
              </button>
            </div>
            <p className="text-[14px] text-graphite">{t('ctl.split.tapHint')}</p>
          </div>

          {/* Ruled control panel */}
          <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
            <div className="border border-ink bg-paper-bright rounded-xl">
              <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
                <Grid3x3 className="w-4 h-4 text-ink" aria-hidden="true" />
                {t('ctl.split.settings')}
              </h2>
              <div className="p-4 space-y-4 text-[15px]">
                {/* Presets */}
                <div className="space-y-1.5">
                  <span className="slug">{t('ctl.split.presets')}</span>
                  <div className="grid border border-ink divide-y divide-ink" role="group" aria-label={t('ctl.split.presets')}>
                    {PRESETS.map((p) => {
                      const selected = activePreset === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => handlePresetSelect(p)}
                          className={`min-h-[40px] px-3 flex items-center justify-between gap-3 text-left text-[14px] font-semibold transition-colors ${
                            selected ? 'seg-on' : 'seg-off'
                          }`}
                        >
                          <span>{t(p.nameKey)}</span>
                          <span className="text-graphite" data-measure>
                            {p.rows} × {p.cols}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom rows & columns */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ctl.split.grid')}</span>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block space-y-1">
                      <span className="text-[14px] text-ink">{t('ctl.split.rows')}</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        max={MAX_SPLIT}
                        value={rowsInput}
                        onChange={(e) => handleCountChange('rows', e.target.value)}
                        onBlur={() => handleCountBlur('rows')}
                        className={numberInputClass}
                        data-measure
                      />
                    </label>
                    <label className="block space-y-1">
                      <span className="text-[14px] text-ink">{t('ctl.split.cols')}</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        max={MAX_SPLIT}
                        value={colsInput}
                        onChange={(e) => handleCountChange('cols', e.target.value)}
                        onBlur={() => handleCountBlur('cols')}
                        className={numberInputClass}
                        data-measure
                      />
                    </label>
                  </div>
                  <p className="text-[13px] text-graphite">{t('ctl.split.gridLimit')}</p>
                </div>

                {/* Tile format */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ctl.split.saveAs')}</span>
                  <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.split.tileFormat')}>
                    {(['png', 'jpeg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        aria-pressed={format === fmt}
                        onClick={() => setFormat(fmt)}
                        className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                          format === fmt ? 'seg-on' : 'seg-off'
                        }`}
                      >
                        {fmt === 'jpeg' ? 'JPG' : 'PNG'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="hidden lg:block">
                <button
                  type="button"
                  disabled={isZipping}
                  onClick={() => downloadAllZip(format)}
                  className="btn-ink w-full min-h-[52px] text-[16px]"
                >
                  {primaryContent}
                </button>
              </div>

              {isZipping && (
                <div
                  className="h-1.5 w-full border border-ink bg-paper-stock"
                  role="progressbar"
                  aria-label={t('ctl.split.zipProgress')}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={zipProgress}
                >
                  <div className="h-full bg-process-key transition-[width] duration-150" style={{ width: `${zipProgress}%` }} />
                </div>
              )}

              {zipError && (
                <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-red leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{zipError}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Phones: the primary action stays under the thumb */}
      {loaded && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button
            type="button"
            disabled={isZipping}
            onClick={() => downloadAllZip(format)}
            className="btn-ink w-full min-h-[48px] text-[16px]"
          >
            {primaryContent}
          </button>
        </div>
      )}
    </div>
  );
}
