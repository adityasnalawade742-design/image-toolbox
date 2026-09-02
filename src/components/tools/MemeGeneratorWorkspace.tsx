import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  Smile,
  Type,
  Download,
  RotateCcw,
  Sparkles,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Palette,
  Copy,
  Check,
} from 'lucide-react';

const MEME_TEMPLATES = [
  {
    name: 'Dark Studio',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23111827"/><circle cx="400" cy="300" r="280" fill="%231f2937"/><rect x="80" y="60" width="640" height="480" rx="24" fill="%230f172a" stroke="%23374151" stroke-width="4"/></svg>',
  },
  {
    name: 'Cyberpunk Neon',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%25" stop-color="%23090d16"/><stop offset="100%25" stop-color="%232b1055"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><circle cx="700" cy="100" r="160" fill="%23f43f5e" opacity="0.25"/><circle cx="100" cy="500" r="200" fill="%2306b6d4" opacity="0.25"/><rect x="60" y="60" width="680" height="480" rx="16" fill="none" stroke="%23ec4899" stroke-width="3"/></svg>',
  },
  {
    name: 'Clean Studio White',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f8fafc"/><rect x="50" y="50" width="700" height="500" rx="20" fill="%23ffffff" stroke="%23e2e8f0" stroke-width="6"/></svg>',
  },
  {
    name: 'Split Comparison',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="400" height="600" fill="%23ef4444"/><rect x="400" width="400" height="600" fill="%2310b981"/><line x1="400" y1="0" x2="400" y2="600" stroke="%23ffffff" stroke-width="8"/></svg>',
  },
];

export function MemeGeneratorWorkspace() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);

  // Meme Text Config
  const [topText, setTopText] = useState<string>('WHEN THE CODE COMPILES');
  const [middleText, setMiddleText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('ON THE FIRST TRY');
  const [fontSize, setFontSize] = useState<number>(42);
  const [fontFamily, setFontFamily] = useState<string>('Impact');
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [strokeColor, setStrokeColor] = useState<string>('#000000');
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [isUppercase, setIsUppercase] = useState<boolean>(true);
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  const handleTemplateSelect = (url: string) => {
    const img = new Image();
    img.onload = () => {
      setImgElement(img);
      setSelectedFile(new File([], 'template.svg', { type: 'image/svg+xml' }));
    };
    img.src = url;
  };

  // Re-draw Canvas whenever state changes
  useEffect(() => {
    if (!imgElement || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = imgElement.naturalWidth || imgElement.width || 800;
    const h = imgElement.naturalHeight || imgElement.height || 600;

    canvas.width = w;
    canvas.height = h;

    // Draw background image
    ctx.drawImage(imgElement, 0, 0, w, h);

    // Text Style Setup
    const computedFontSize = (fontSize / 600) * h;
    ctx.font = `900 ${computedFontSize}px ${fontFamily}, Impact, sans-serif`;
    ctx.textAlign = textAlign;
    ctx.fillStyle = textColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = (strokeWidth / 600) * h;
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    const textX = textAlign === 'center' ? w / 2 : textAlign === 'left' ? 30 : w - 30;

    const drawWrappedText = (text: string, startY: number, position: 'top' | 'middle' | 'bottom') => {
      const finalStr = isUppercase ? text.toUpperCase() : text;
      const lines = finalStr.split('\n');
      const lineHeight = computedFontSize * 1.15;

      if (position === 'middle') {
        const totalHeight = lines.length * lineHeight;
        const middleStartY = startY - totalHeight / 2 + lineHeight / 2;
        lines.forEach((line, index) => {
          const y = middleStartY + index * lineHeight;
          if (strokeWidth > 0) ctx.strokeText(line, textX, y);
          ctx.fillText(line, textX, y);
        });
      } else {
        lines.forEach((line, index) => {
          const y = position === 'top' ? startY + (index + 1) * lineHeight : startY - (lines.length - 1 - index) * lineHeight;
          if (strokeWidth > 0) ctx.strokeText(line, textX, y);
          ctx.fillText(line, textX, y);
        });
      }
    };

    // Draw Top Text
    if (topText.trim()) {
      drawWrappedText(topText, 20, 'top');
    }

    // Draw Middle Text
    if (middleText.trim()) {
      drawWrappedText(middleText, h / 2, 'middle');
    }

    // Draw Bottom Text
    if (bottomText.trim()) {
      drawWrappedText(bottomText, h - 30, 'bottom');
    }
  }, [imgElement, topText, middleText, bottomText, fontSize, fontFamily, textColor, strokeColor, strokeWidth, isUppercase, textAlign]);

  const handleDownload = (format: 'png' | 'jpeg' | 'webp' = 'png') => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `meme-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvasRef.current.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  const handleCopyClipboard = async () => {
    if (!canvasRef.current) return;
    try {
      const blob = await new Promise<Blob | null>((res) => canvasRef.current?.toBlob(res, 'image/png', 1.0));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.error('Copy to clipboard failed:', err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {!imgElement && (
        <div className="space-y-6">
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
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Upload Photo or Pick a Meme Starter</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
              Drag & drop any image or paste from clipboard (Ctrl+V) to create viral high-resolution memes instantly.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-xs text-gray-300 border border-gray-700">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Free, Private & Watermark-Free</span>
            </div>
          </div>

          {/* Quick Starter Templates (Zero CORS taint) */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Or Choose a Quick Template
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MEME_TEMPLATES.map((t, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTemplateSelect(t.url)}
                  className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-primary-500 transition-all aspect-video cursor-pointer"
                >
                  <img
                    src={t.url}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    {t.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {imgElement && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Canvas Live Preview Area (Order 1 on mobile, Order 2 on desktop) */}
          <div className="lg:col-span-2 space-y-4 order-1 lg:order-2">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 min-h-[360px] sm:min-h-[480px] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-gray-800"
              />
            </div>
          </div>

          {/* Controls Sidebar (Order 2 on mobile, Order 1 on desktop) */}
          <div className="lg:col-span-1 space-y-5 bg-gray-900 border border-gray-800 rounded-2xl p-5 max-h-[85vh] overflow-y-auto custom-scrollbar order-2 lg:order-1">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Smile className="w-4 h-4 text-primary-400" />
                <span>Meme Text & Styling</span>
              </h3>
              <button
                type="button"
                onClick={() => {
                  setTopText('WHEN THE CODE COMPILES');
                  setMiddleText('');
                  setBottomText('ON THE FIRST TRY');
                  setFontSize(42);
                  setFontFamily('Impact');
                  setTextColor('#FFFFFF');
                  setStrokeColor('#000000');
                  setStrokeWidth(4);
                  setIsUppercase(true);
                  setTextAlign('center');
                }}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors py-1 px-2 rounded-md hover:bg-gray-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Text Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1">Top Caption</label>
                <textarea
                  rows={2}
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="Enter top caption..."
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 resize-none font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1">Middle Caption (Optional)</label>
                <input
                  type="text"
                  value={middleText}
                  onChange={(e) => setMiddleText(e.target.value)}
                  placeholder="Middle caption..."
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1">Bottom Caption</label>
                <textarea
                  rows={2}
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="Enter bottom caption..."
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 resize-none font-medium"
                />
              </div>
            </div>

            {/* Typography Controls */}
            <div className="space-y-4 pt-3 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-3">
                {/* Font Family */}
                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Font Family</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:border-primary-500"
                  >
                    <option value="Impact">Impact (Classic)</option>
                    <option value="Arial">Arial</option>
                    <option value="Comic Sans MS">Comic Sans</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Times New Roman">Times Roman</option>
                  </select>
                </div>

                {/* Text Alignment */}
                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Alignment</label>
                  <div className="flex rounded-xl bg-gray-800 border border-gray-700 p-0.5">
                    <button
                      type="button"
                      onClick={() => setTextAlign('left')}
                      className={`flex-1 py-1.5 flex justify-center rounded-lg ${
                        textAlign === 'left' ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <AlignLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextAlign('center')}
                      className={`flex-1 py-1.5 flex justify-center rounded-lg ${
                        textAlign === 'center' ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <AlignCenter className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextAlign('right')}
                      className={`flex-1 py-1.5 flex justify-center rounded-lg ${
                        textAlign === 'right' ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <AlignRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Font Size Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Font Size</span>
                  <span className="font-mono text-gray-400">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Stroke Width Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Outline Stroke Width</span>
                  <span className="font-mono text-gray-400">{strokeWidth}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
              </div>

              {/* Colors & Caps Toggle */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Text Color</label>
                  <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-1.5">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-xs font-mono text-gray-300 uppercase">{textColor}</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Outline Color</label>
                  <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-1.5">
                    <input
                      type="color"
                      value={strokeColor}
                      onChange={(e) => setStrokeColor(e.target.value)}
                      className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-xs font-mono text-gray-300 uppercase">{strokeColor}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-gray-300">Convert to ALL CAPS</span>
                <input
                  type="checkbox"
                  checked={isUppercase}
                  onChange={(e) => setIsUppercase(e.target.checked)}
                  className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-primary-500 focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-800 space-y-2">
              <button
                type="button"
                onClick={() => handleDownload('png')}
                className="w-full py-3 px-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-950/50 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res Meme (PNG)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                className="w-full py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copiedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Meme Image</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleDownload('webp')}
                  className="py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold transition-all cursor-pointer text-center"
                >
                  Download WebP
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload('jpeg')}
                  className="py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold transition-all cursor-pointer text-center"
                >
                  Download JPG
                </button>
              </div>

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
          </div>
        </div>
      )}
    </div>
  );
}
