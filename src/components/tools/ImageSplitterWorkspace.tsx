import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  Grid,
  Download,
  Archive,
  Sparkles,
  Layers,
  CheckCircle,
} from 'lucide-react';
import JSZip from 'jszip';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';

interface SplitPreset {
  id: string;
  name: string;
  rows: number;
  cols: number;
  description: string;
}

const PRESETS: SplitPreset[] = [
  { id: 'insta-3x3', name: 'Instagram 3×3 Grid', rows: 3, cols: 3, description: '9 Tiles for Instagram Profile Grid' },
  { id: 'insta-3x1', name: 'Panorama 3×1', rows: 1, cols: 3, description: '3 Swipeable Carousel Slices' },
  { id: 'insta-2x1', name: 'Carousel 2×1', rows: 1, cols: 2, description: '2 Swipeable Carousel Slices' },
  { id: 'grid-2x2', name: '4-Square (2×2)', rows: 2, cols: 2, description: '4 Equal Quadrants' },
  { id: 'custom', name: 'Custom Grid', rows: 2, cols: 3, description: 'Custom Row × Col Split' },
];

export function ImageSplitterWorkspace() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [activePreset, setActivePreset] = useState<string>('insta-3x3');
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);

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
  const downloadSingleSlice = (r: number, c: number, index: number, format: 'png' | 'jpeg' = 'png') => {
    const canvas = getSliceCanvas(r, c);
    const link = document.createElement('a');
    link.download = `tile-${index + 1}-${r + 1}x${c + 1}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvas.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  // Download all slices as ZIP
  const downloadAllZip = async (format: 'png' | 'jpeg' = 'png') => {
    if (!imgElement) return;
    setIsZipping(true);
    setZipProgress(10);

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
    setTimeout(() => {
      setIsZipping(false);
      setZipProgress(0);
    }, 1000);
  };

  const totalTiles = rows * cols;
  const imgW = imgElement?.naturalWidth || imgElement?.width || 1;
  const imgH = imgElement?.naturalHeight || imgElement?.height || 1;
  const tileW = Math.floor(imgW / cols);
  const tileH = Math.floor(imgH / rows);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {!selectedFile && <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />}

      {selectedFile && imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Interactive Grid Overlay Preview (Order 1 on mobile, Order 2 on desktop) */}
          <div className="min-w-0 order-1 space-y-4">
            <div className="canvas-checkerboard border border-ink p-4 min-h-[360px] sm:min-h-[480px] flex flex-col items-center justify-center">
              <div className="w-full flex justify-between items-center text-[14px] text-graphite mb-3">
                <span>Interactive Grid Preview (Tap/Click any tile to download)</span>
                <span className="font-mono text-ink font-semibold">{totalTiles} Total Tiles</span>
              </div>

              <div
                className="relative max-h-[65vh] w-auto max-w-full rounded-xl overflow-hidden shadow-2xl border border-pencil group"
                style={{
                  aspectRatio: `${imgW} / ${imgH}`,
                }}
              >
                {/* Background Image */}
                <img
                  src={imgElement.src}
                  alt="Original Grid Preview"
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Grid Overlay Matrix */}
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
                        <div
                          key={`${r}-${c}`}
                          onClick={() => downloadSingleSlice(r, c, tileNum - 1, 'png')}
                          title={`Click to download Tile #${tileNum}`}
                          className="border border-white/40 hover:border-ink hover:bg-paper-stock transition-all cursor-pointer relative flex items-center justify-center group/tile"
                        >
                          <span className="w-7 h-7 rounded-full bg-black/75 backdrop-blur-md text-paper text-[14px] font-bold flex items-center justify-center shadow-lg border border-ink group-hover/tile:scale-110 group-hover/tile:bg-process-key transition-all">
                            {tileNum}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Controls Sidebar (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 space-y-5 bg-paper-bright border border-ink p-5">
            <div>
              <h3 className="text-base font-bold text-ink flex items-center gap-2">
                <Grid className="w-4 h-4 text-ink" />
                <span>Split Configuration</span>
              </h3>
              <p className="text-[14px] text-graphite mt-1">
                Original: {imgW}×{imgH}px • Each Tile: ~{tileW}×{tileH}px
              </p>
            </div>

            {/* Presets Grid */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-graphite uppercase tracking-wider block">
                Social Presets
              </label>
              <div className="grid grid-cols-1 gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePresetSelect(p)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activePreset === p.id
                        ? 'border-ink bg-paper-stock text-ink shadow-md'
                        : 'border-pencil bg-paper-stock text-graphite hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-ink">{p.name}</span>
                      <span className="text-[14px] font-mono text-ink font-semibold bg-paper-stock px-2 py-0.5 rounded border border-ink">
                        {p.rows}×{p.cols}
                      </span>
                    </div>
                    <p className="text-[14px] text-graphite mt-1">{p.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Rows & Cols */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-pencil">
              <div>
                <label className="text-[14px] font-semibold text-graphite block mb-1">Rows (Horizontal)</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={rows}
                  onChange={(e) => {
                    setActivePreset('custom');
                    setRows(Math.max(1, Math.min(12, Number(e.target.value) || 1)));
                  }}
                  className="w-full bg-paper-stock border border-pencil rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="text-[14px] font-semibold text-graphite block mb-1">Columns (Vertical)</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={cols}
                  onChange={(e) => {
                    setActivePreset('custom');
                    setCols(Math.max(1, Math.min(12, Number(e.target.value) || 1)));
                  }}
                  className="w-full bg-paper-stock border border-pencil rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-ink"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-pencil space-y-2">
              <button
                type="button"
                disabled={isZipping}
                onClick={() => downloadAllZip('png')}
                className="w-full py-3.5 px-4 rounded-xl bg-process-key hover:bg-process-key text-ink font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer text-sm"
              >
                <Archive className="w-4 h-4" />
                <span>Download All {totalTiles} Tiles (ZIP)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedFile(null);
                  setImgElement(null);
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-paper-stock text-graphite hover:text-ink text-[14px] font-medium transition-all cursor-pointer"
              >
                Choose Different Photo
              </button>
            </div>

            {/* Progress Bar */}
            {isZipping && (
              <div className="p-4 rounded-xl bg-paper-bright border border-pencil space-y-2">
                <div className="flex justify-between text-[14px] text-body">
                  <span>Compressing {totalTiles} tiles into ZIP archive...</span>
                  <span className="font-mono text-ink font-bold">{zipProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-paper-stock overflow-hidden">
                  <div
                    className="h-full bg-process-key transition-all duration-150"
                    style={{ width: `${zipProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
