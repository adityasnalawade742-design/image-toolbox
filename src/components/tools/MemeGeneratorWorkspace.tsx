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
    name: 'Drake Reject / Approve',
    topDefault: 'WRITING 500 LINES OF CODE',
    bottomDefault: 'USING A 1-LINE CSS PROPERTY',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700"><rect width="700" height="700" fill="%23f1f5f9"/><line x1="0" y1="350" x2="700" y2="350" stroke="%23cbd5e1" stroke-width="4"/><line x1="350" y1="0" x2="350" y2="700" stroke="%23cbd5e1" stroke-width="4"/><rect width="350" height="350" fill="%23fee2e2"/><text x="175" y="180" font-family="sans-serif" font-size="70" text-anchor="middle" fill="%23ef4444">🙅‍♂️</text><text x="175" y="240" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" fill="%23991b1b">NAH...</text><rect y="350" width="350" height="350" fill="%23dcfce7"/><text x="175" y="530" font-family="sans-serif" font-size="70" text-anchor="middle" fill="%2322c55e">👉</text><text x="175" y="590" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" fill="%23166534">THAT ONE!</text></svg>',
  },
  {
    name: 'Two Buttons Dilemma',
    topDefault: 'SWEATING OVER THE CHOICE',
    bottomDefault: 'FIX BUG  vs  ADD NEW FEATURE',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="500" viewBox="0 0 700 500"><rect width="700" height="500" fill="%231e293b"/><circle cx="240" cy="180" r="80" fill="%23ef4444" stroke="%23b91c1c" stroke-width="8"/><circle cx="460" cy="180" r="80" fill="%233b82f6" stroke="%231d4ed8" stroke-width="8"/><path d="M350 320 Q 350 480 350 500" stroke="%2394a3b8" stroke-width="8" fill="none"/><circle cx="350" cy="380" r="60" fill="%23fde047"/><text x="350" y="390" font-size="40" text-anchor="middle">😰</text></svg>',
  },
  {
    name: 'Buff Doge vs Cheems',
    topDefault: 'BROWSERS IN 2010',
    bottomDefault: 'BROWSERS IN 2026 WITH 32GB RAM',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="400" height="500" fill="%23fef3c7"/><rect x="400" width="400" height="500" fill="%23f3f4f6"/><line x1="400" y1="0" x2="400" y2="500" stroke="%23cbd5e1" stroke-width="4"/><text x="200" y="260" font-size="100" text-anchor="middle">🐕💪</text><text x="200" y="340" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="%2392400e">ULTRA POWERFUL</text><text x="600" y="260" font-size="80" text-anchor="middle">🐶🥺</text><text x="600" y="340" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="%236b7280">OUT OF MEMORY</text></svg>',
  },
  {
    name: 'Expanding Brain',
    topDefault: 'NORMAL SOLUTION',
    bottomDefault: 'GALAXY BRAIN 1-LINER',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="200" fill="%231e1e24"/><rect y="200" width="600" height="200" fill="%232b1055"/><rect y="400" width="600" height="200" fill="%233b0764"/><rect y="600" width="600" height="200" fill="%23581c87"/><text x="500" y="120" font-size="60" text-anchor="middle">🧠</text><text x="500" y="320" font-size="65" text-anchor="middle">⚡🧠</text><text x="500" y="520" font-size="70" text-anchor="middle">✨🧠✨</text><text x="500" y="720" font-size="75" text-anchor="middle">🌌🧠🌌</text><line x1="0" y1="200" x2="600" y2="200" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="0" y1="400" x2="600" y2="400" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="0" y1="600" x2="600" y2="600" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="380" y1="0" x2="380" y2="800" stroke="%23ffffff" stroke-width="3" opacity="0.4"/></svg>',
  },
  {
    name: 'Distracted Focus',
    topDefault: 'ME WORKING ON MY MAIN PROJECT',
    bottomDefault: 'BUILDING A NEW RANDOM SIDE PROJECT',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%230f172a"/><circle cx="200" cy="220" r="90" fill="%23ec4899" opacity="0.3"/><text x="200" y="240" font-size="70" text-anchor="middle">💃</text><circle cx="480" cy="220" r="90" fill="%233b82f6" opacity="0.3"/><text x="480" y="240" font-size="70" text-anchor="middle">🚶‍♂️👀</text><circle cx="700" cy="220" r="90" fill="%2364748b" opacity="0.3"/><text x="700" y="240" font-size="70" text-anchor="middle">🤦‍♀️</text></svg>',
  },
  {
    name: 'Change My Mind',
    topDefault: 'IMAGE TOOLBOX IS THE FASTEST SUITE',
    bottomDefault: 'CHANGE MY MIND',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23f8fafc"/><rect x="100" y="160" width="600" height="260" rx="16" fill="%23ffffff" stroke="%230f172a" stroke-width="8"/><circle cx="400" cy="100" r="60" fill="%233b82f6"/><text x="400" y="115" font-size="50" text-anchor="middle">☕</text><text x="400" y="320" font-family="Impact" font-size="36" text-anchor="middle" fill="%230f172a">CHANGE MY MIND</text></svg>',
  },
  {
    name: 'Cyberpunk Neon',
    topDefault: 'WHEN THE UI HAS NEON GLOW',
    bottomDefault: '1000% MORE ENGAGEMENT',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%25" stop-color="%23090d16"/><stop offset="100%25" stop-color="%232b1055"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><circle cx="700" cy="100" r="160" fill="%23f43f5e" opacity="0.25"/><circle cx="100" cy="500" r="200" fill="%2306b6d4" opacity="0.25"/><rect x="60" y="60" width="680" height="480" rx="16" fill="none" stroke="%23ec4899" stroke-width="3"/></svg>',
  },
  {
    name: 'Dark Studio Clean',
    topDefault: 'TOP CAPTION HERE',
    bottomDefault: 'BOTTOM CAPTION HERE',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23111827"/><circle cx="400" cy="300" r="280" fill="%231f2937"/><rect x="80" y="60" width="640" height="480" rx="24" fill="%230f172a" stroke="%23374151" stroke-width="4"/></svg>',
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

  const handleTemplateSelect = (template: (typeof MEME_TEMPLATES)[0]) => {
    const img = new Image();
    img.onload = () => {
      setImgElement(img);
      setSelectedFile(new File([], `${template.name}.svg`, { type: 'image/svg+xml' }));
      if (template.topDefault) setTopText(template.topDefault);
      if (template.bottomDefault) setBottomText(template.bottomDefault);
    };
    img.src = template.url;
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
                  onClick={() => handleTemplateSelect(t)}
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
        <div className="space-y-4">
          {/* Quick Template Switcher Strip */}
          <div className="flex items-center gap-2 overflow-x-auto p-2 bg-surface-card border border-hairline rounded-lg text-xs">
            <span className="text-mute font-medium whitespace-nowrap pl-1">Templates:</span>
            {MEME_TEMPLATES.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleTemplateSelect(t)}
                className="px-2.5 py-1 bg-surface-elevated hover:bg-surface border border-hairline hover:border-hairline-strong rounded text-[11px] text-body hover:text-ink transition-colors whitespace-nowrap"
              >
                {t.name}
              </button>
            ))}
          </div>

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
      </div>
      )}
    </div>
  );
}
