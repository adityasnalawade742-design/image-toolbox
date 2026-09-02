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
      {!selectedFile && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) handleFileSelect(e.dataTransfer.files[0]);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-700 hover:border-primary-500 rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 bg-gray-900/50 hover:bg-gray-800/50 group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          />
          <div className="w-16 h-16 rounded-full bg-primary-950/60 text-primary-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Grid className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Upload Photo to Split & Cut Grid</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
            Drag & drop your photo or paste from clipboard (Ctrl+V) to slice into Instagram 3×3 profile grids, swipeable panorama carousels, or custom rows & columns.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-xs text-gray-300 border border-gray-700">
            <Archive className="w-4 h-4 text-emerald-400" />
            <span>1-Click Batch ZIP Download with Zero Quality Loss</span>
          </div>
        </div>
      )}

      {selectedFile && imgElement && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Interactive Grid Overlay Preview (Order 1 on mobile, Order 2 on desktop) */}
          <div className="lg:col-span-2 space-y-4 order-1 lg:order-2">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 min-h-[360px] sm:min-h-[480px] flex flex-col items-center justify-center">
              <div className="w-full flex justify-between items-center text-xs text-gray-400 mb-3">
                <span>Interactive Grid Preview (Tap/Click any tile to download)</span>
                <span className="font-mono text-primary-300 font-semibold">{totalTiles} Total Tiles</span>
              </div>

              <div
                className="relative max-h-[65vh] w-auto max-w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 group"
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
                          className="border border-white/40 hover:border-primary-400 hover:bg-primary-500/20 transition-all cursor-pointer relative flex items-center justify-center group/tile"
                        >
                          <span className="w-7 h-7 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold flex items-center justify-center shadow-lg border border-white/20 group-hover/tile:scale-110 group-hover/tile:bg-primary-600 transition-all">
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
          <div className="lg:col-span-1 space-y-5 bg-gray-900 border border-gray-800 rounded-2xl p-5 order-2 lg:order-1">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Grid className="w-4 h-4 text-primary-400" />
                <span>Split Configuration</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Original: {imgW}×{imgH}px • Each Tile: ~{tileW}×{tileH}px
              </p>
            </div>

            {/* Presets Grid */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
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
                        ? 'border-primary-500 bg-primary-950/60 text-white shadow-md'
                        : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-gray-200">{p.name}</span>
                      <span className="text-xs font-mono text-primary-400 font-semibold bg-primary-950 px-2 py-0.5 rounded border border-primary-800/50">
                        {p.rows}×{p.cols}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{p.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Rows & Cols */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-800">
              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1">Rows (Horizontal)</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={rows}
                  onChange={(e) => {
                    setActivePreset('custom');
                    setRows(Math.max(1, Math.min(12, Number(e.target.value) || 1)));
                  }}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1">Columns (Vertical)</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={cols}
                  onChange={(e) => {
                    setActivePreset('custom');
                    setCols(Math.max(1, Math.min(12, Number(e.target.value) || 1)));
                  }}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-800 space-y-2">
              <button
                type="button"
                disabled={isZipping}
                onClick={() => downloadAllZip('png')}
                className="w-full py-3.5 px-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer text-sm"
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
                className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-gray-800 text-gray-400 hover:text-gray-200 text-xs font-medium transition-all cursor-pointer"
              >
                Choose Different Photo
              </button>
            </div>

            {/* Progress Bar */}
            {isZipping && (
              <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 space-y-2">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Compressing {totalTiles} tiles into ZIP archive...</span>
                  <span className="font-mono text-primary-400 font-bold">{zipProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all duration-150"
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
