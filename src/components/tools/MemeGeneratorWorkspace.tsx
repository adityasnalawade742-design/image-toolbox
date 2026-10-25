import { useState, useRef, useEffect } from 'react';
import '@fontsource/anton/400.css';
import { Type, Download, RotateCcw, AlignLeft, AlignCenter, AlignRight, Copy, Check, AlertCircle } from 'lucide-react';
import { useImageIntake } from '../shared/useImageIntake';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT, useLocale } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';
import { wrapTextLines, formatBytes } from '../../lib/canvas/engine';

interface MemeTemplate {
  id: string;
  nameKey: StringKey;
  topKey: StringKey;
  bottomKey: StringKey;
  url: string;
}

const MEME_TEMPLATES: MemeTemplate[] = [
  {
    id: 'drake',
    nameKey: 'ctl.meme.tpl.drake',
    topKey: 'ctl.meme.tpl.drakeTop',
    bottomKey: 'ctl.meme.tpl.drakeBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700"><rect width="700" height="700" fill="%23f1f5f9"/><line x1="0" y1="350" x2="700" y2="350" stroke="%23cbd5e1" stroke-width="4"/><line x1="350" y1="0" x2="350" y2="700" stroke="%23cbd5e1" stroke-width="4"/><rect width="350" height="350" fill="%23fee2e2"/><text x="175" y="180" font-family="sans-serif" font-size="70" text-anchor="middle" fill="%23ef4444">🙅‍♂️</text><text x="175" y="240" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" fill="%23991b1b">NAH...</text><rect y="350" width="350" height="350" fill="%23dcfce7"/><text x="175" y="530" font-family="sans-serif" font-size="70" text-anchor="middle" fill="%2322c55e">👉</text><text x="175" y="590" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" fill="%23166534">THAT ONE!</text></svg>',
  },
  {
    id: 'buttons',
    nameKey: 'ctl.meme.tpl.buttons',
    topKey: 'ctl.meme.tpl.buttonsTop',
    bottomKey: 'ctl.meme.tpl.buttonsBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="700" height="500" viewBox="0 0 700 500"><rect width="700" height="500" fill="%231e293b"/><circle cx="240" cy="180" r="80" fill="%23ef4444" stroke="%23b91c1c" stroke-width="8"/><circle cx="460" cy="180" r="80" fill="%233b82f6" stroke="%231d4ed8" stroke-width="8"/><path d="M350 320 Q 350 480 350 500" stroke="%2394a3b8" stroke-width="8" fill="none"/><circle cx="350" cy="380" r="60" fill="%23fde047"/><text x="350" y="390" font-size="40" text-anchor="middle">😰</text></svg>',
  },
  {
    id: 'doge',
    nameKey: 'ctl.meme.tpl.doge',
    topKey: 'ctl.meme.tpl.dogeTop',
    bottomKey: 'ctl.meme.tpl.dogeBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="400" height="500" fill="%23fef3c7"/><rect x="400" width="400" height="500" fill="%23f3f4f6"/><line x1="400" y1="0" x2="400" y2="500" stroke="%23cbd5e1" stroke-width="4"/><text x="200" y="260" font-size="100" text-anchor="middle">🐕💪</text><text x="200" y="340" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="%2392400e">ULTRA POWERFUL</text><text x="600" y="260" font-size="80" text-anchor="middle">🐶🥺</text><text x="600" y="340" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="%236b7280">OUT OF MEMORY</text></svg>',
  },
  {
    id: 'brain',
    nameKey: 'ctl.meme.tpl.brain',
    topKey: 'ctl.meme.tpl.brainTop',
    bottomKey: 'ctl.meme.tpl.brainBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="200" fill="%231e1e24"/><rect y="200" width="600" height="200" fill="%232b1055"/><rect y="400" width="600" height="200" fill="%233b0764"/><rect y="600" width="600" height="200" fill="%23581c87"/><text x="500" y="120" font-size="60" text-anchor="middle">🧠</text><text x="500" y="320" font-size="65" text-anchor="middle">⚡🧠</text><text x="500" y="520" font-size="70" text-anchor="middle">✨🧠✨</text><text x="500" y="720" font-size="75" text-anchor="middle">🌌🧠🌌</text><line x1="0" y1="200" x2="600" y2="200" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="0" y1="400" x2="600" y2="400" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="0" y1="600" x2="600" y2="600" stroke="%23ffffff" stroke-width="2" opacity="0.3"/><line x1="380" y1="0" x2="380" y2="800" stroke="%23ffffff" stroke-width="3" opacity="0.4"/></svg>',
  },
  {
    id: 'distracted',
    nameKey: 'ctl.meme.tpl.distracted',
    topKey: 'ctl.meme.tpl.distractedTop',
    bottomKey: 'ctl.meme.tpl.distractedBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%230f172a"/><circle cx="200" cy="220" r="90" fill="%23ec4899" opacity="0.3"/><text x="200" y="240" font-size="70" text-anchor="middle">💃</text><circle cx="480" cy="220" r="90" fill="%233b82f6" opacity="0.3"/><text x="480" y="240" font-size="70" text-anchor="middle">🚶‍♂️👀</text><circle cx="700" cy="220" r="90" fill="%2364748b" opacity="0.3"/><text x="700" y="240" font-size="70" text-anchor="middle">🤦‍♀️</text></svg>',
  },
  {
    id: 'change-mind',
    nameKey: 'ctl.meme.tpl.changeMind',
    topKey: 'ctl.meme.tpl.changeMindTop',
    bottomKey: 'ctl.meme.tpl.changeMindBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23f8fafc"/><rect x="100" y="160" width="600" height="260" rx="16" fill="%23ffffff" stroke="%230f172a" stroke-width="8"/><circle cx="400" cy="100" r="60" fill="%233b82f6"/><text x="400" y="115" font-size="50" text-anchor="middle">☕</text><text x="400" y="320" font-family="Impact" font-size="36" text-anchor="middle" fill="%230f172a">CHANGE MY MIND</text></svg>',
  },
  {
    id: 'neon',
    nameKey: 'ctl.meme.tpl.neon',
    topKey: 'ctl.meme.tpl.neonTop',
    bottomKey: 'ctl.meme.tpl.neonBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%25" stop-color="%23090d16"/><stop offset="100%25" stop-color="%232b1055"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><circle cx="700" cy="100" r="160" fill="%23f43f5e" opacity="0.25"/><circle cx="100" cy="500" r="200" fill="%2306b6d4" opacity="0.25"/><rect x="60" y="60" width="680" height="480" rx="16" fill="none" stroke="%23ec4899" stroke-width="3"/></svg>',
  },
  {
    id: 'studio',
    nameKey: 'ctl.meme.tpl.studio',
    topKey: 'ctl.meme.tpl.studioTop',
    bottomKey: 'ctl.meme.tpl.studioBottom',
    url: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23111827"/><circle cx="400" cy="300" r="280" fill="%231f2937"/><rect x="80" y="60" width="640" height="480" rx="24" fill="%230f172a" stroke="%23374151" stroke-width="4"/></svg>',
  },
];

// Only faces that are actually loaded: Anton ships with this tool, Barlow with the site
const MEME_FONTS: { id: string; family: string; weight: number; labelKey: StringKey }[] = [
  { id: 'anton', family: 'Anton', weight: 400, labelKey: 'ctl.meme.fontAnton' },
  { id: 'condensed', family: 'Barlow Semi Condensed', weight: 700, labelKey: 'ctl.meme.fontCondensed' },
  { id: 'barlow', family: 'Barlow', weight: 700, labelKey: 'ctl.meme.fontBarlow' },
];
const DEFAULT_FONT = 'anton';

type SaveFormat = 'png' | 'jpeg' | 'webp';
const SAVE_FORMATS: SaveFormat[] = ['png', 'jpeg', 'webp'];
const formatLabel = (f: SaveFormat) => (f === 'jpeg' ? 'JPG' : f.toUpperCase());

const fieldClass =
  'w-full bg-paper border border-pencil px-3 py-2 text-[15px] text-ink placeholder:text-graphite focus:outline-none focus:border-ink resize-none';

export function MemeGeneratorWorkspace() {
  const t = useT();
  const locale = useLocale();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [templateId, setTemplateId] = useState<string | null>(null);

  // Meme Text Config
  const [topText, setTopText] = useState<string>(() => t('ctl.meme.defaultTop'));
  const [middleText, setMiddleText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>(() => t('ctl.meme.defaultBottom'));
  // Caption size in 1/600ths of the image height
  const [fontSize, setFontSize] = useState<number>(42);
  const [fontId, setFontId] = useState<string>(DEFAULT_FONT);
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [strokeColor, setStrokeColor] = useState<string>('#000000');
  const [strokeWidth, setStrokeWidth] = useState<number>(4);
  const [isUppercase, setIsUppercase] = useState<boolean>(true);
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);
  const [saveFormat, setSaveFormat] = useState<SaveFormat>('png');
  // Bumped when a web font finishes loading so the canvas redraws with it
  const [fontTick, setFontTick] = useState<number>(0);
  const fontLoadAttempts = useRef<Set<string>>(new Set());

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const font = MEME_FONTS.find((f) => f.id === fontId) || MEME_FONTS[0];

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setSelectedFile(file);
    setTemplateId(null);

    const img = new Image();
    img.onload = () => setImgElement(img);
    img.src = URL.createObjectURL(file);
  };

  // Images handed off from other tools / the homepage, and Ctrl+V paste
  useImageIntake(handleFileSelect);

  const handleTemplateSelect = (template: MemeTemplate) => {
    const img = new Image();
    img.onload = () => {
      setImgElement(img);
      setSelectedFile(new File([], `${template.id}.svg`, { type: 'image/svg+xml' }));
      setTemplateId(template.id);
      setTopText(t(template.topKey));
      setBottomText(t(template.bottomKey));
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
    const fontSpec = `${font.weight} ${computedFontSize}px "${font.family}"`;
    ctx.font = `${fontSpec}, Impact, sans-serif`;
    ctx.textAlign = textAlign;
    ctx.fillStyle = textColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = (strokeWidth / 600) * h;
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    // Canvas never triggers web-font downloads itself: fetch the glyphs, then redraw once
    const allText = `${topText}${middleText}${bottomText}`;
    const sample = isUppercase ? allText.toUpperCase() : allText;
    if (typeof document !== 'undefined' && document.fonts && sample.trim()) {
      const probe = `${font.weight} 48px "${font.family}"`;
      const attemptKey = `${probe}|${sample}`;
      if (!document.fonts.check(probe, sample) && !fontLoadAttempts.current.has(attemptKey)) {
        fontLoadAttempts.current.add(attemptKey);
        document.fonts
          .load(probe, sample)
          .then((faces) => {
            if (faces.length) setFontTick((n) => n + 1);
          })
          .catch(() => {});
      }
    }

    const sideMargin = Math.max(30, Math.round(w * 0.04));
    const textX = textAlign === 'center' ? w / 2 : textAlign === 'left' ? sideMargin : w - sideMargin;

    const drawWrappedText = (text: string, startY: number, position: 'top' | 'middle' | 'bottom') => {
      const finalStr = isUppercase ? text.toUpperCase() : text;
      // Wrap long captions to the image width instead of letting them run off the edges
      const lines = wrapTextLines(finalStr, w - sideMargin * 2, (s) => ctx.measureText(s).width);
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
  }, [imgElement, topText, middleText, bottomText, fontSize, font, textColor, strokeColor, strokeWidth, isUppercase, textAlign, fontTick]);

  const handleDownload = (format: SaveFormat = 'png') => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `meme-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    link.href = canvasRef.current.toDataURL(`image/${format}`, 0.95);
    link.click();
  };

  const handleCopyClipboard = async () => {
    if (!canvasRef.current) return;
    setCopyError(false);
    try {
      const blob = await new Promise<Blob | null>((res) => canvasRef.current?.toBlob(res, 'image/png', 1.0));
      if (blob) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      }
    } catch (err) {
      console.error('Copy to clipboard failed:', err);
      setCopyError(true);
    }
  };

  const handleReset = () => {
    setTopText(t('ctl.meme.defaultTop'));
    setMiddleText('');
    setBottomText(t('ctl.meme.defaultBottom'));
    setFontSize(42);
    setFontId(DEFAULT_FONT);
    setTextColor('#FFFFFF');
    setStrokeColor('#000000');
    setStrokeWidth(4);
    setIsUppercase(true);
    setTextAlign('center');
  };

  const activeTemplate = MEME_TEMPLATES.find((tpl) => tpl.id === templateId);
  const sourceExt = selectedFile
    ? (selectedFile.type.replace('image/', '').replace('svg+xml', 'svg').replace('jpeg', 'jpg') || 'image').toUpperCase()
    : '';
  const sizePercent = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(fontSize / 6);
  const downloadLabel = t('ws.download', { format: formatLabel(saveFormat) });

  const alignOptions = [
    { value: 'left' as const, Icon: AlignLeft, labelKey: 'ctl.meme.alignLeft' as StringKey },
    { value: 'center' as const, Icon: AlignCenter, labelKey: 'ctl.meme.alignCenter' as StringKey },
    { value: 'right' as const, Icon: AlignRight, labelKey: 'ctl.meme.alignRight' as StringKey },
  ];

  return (
    <div className={`w-full max-w-6xl mx-auto ${imgElement ? 'pb-20 lg:pb-0' : ''}`}>
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

      {!imgElement && (
        <div className="space-y-6">
          <ProofDropZone onFiles={(files) => handleFileSelect(files[0])} accept="image/*" />

          {/* Starter templates (inline SVG, so the canvas is never CORS-tainted) */}
          <div className="mx-5 sm:mx-6 border border-ink bg-paper-bright">
            <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.meme.templates')}</h2>
            <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MEME_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => handleTemplateSelect(tpl)}
                  className="group flex flex-col border border-pencil hover:border-ink bg-paper text-left transition-colors"
                >
                  <img src={tpl.url} alt="" className="w-full aspect-video object-cover" />
                  <span className="px-2 py-1.5 border-t border-pencil group-hover:border-ink text-[14px] font-medium text-ink leading-tight">
                    {t(tpl.nameKey)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {imgElement && (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
          {/* Proof sheet */}
          <div className="min-w-0 space-y-3">
            <div className="bg-paper-bright border border-ink px-6 py-8 sm:px-12 sm:py-10 min-h-[260px] sm:min-h-[420px] flex items-center justify-center">
              <div className="relative inline-flex max-w-full canvas-checkerboard crop-marks">
                <canvas ref={canvasRef} className="block max-h-[70vh] w-auto max-w-full object-contain" />
              </div>
            </div>

            {/* Job ticket */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]">
              <span className="flex items-baseline gap-2" data-measure>
                <span className="slug">{activeTemplate ? t('ctl.meme.templateSource') : t('ws.source')}</span>
                <span className="text-ink font-semibold">
                  {imgElement.naturalWidth || imgElement.width} × {imgElement.naturalHeight || imgElement.height} px
                </span>
                <span className="text-graphite">
                  {activeTemplate ? t(activeTemplate.nameKey) : sourceExt}
                  {!activeTemplate && selectedFile && selectedFile.size > 0 && ` · ${formatBytes(selectedFile.size)}`}
                </span>
              </span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="ml-auto text-[14px] font-medium text-ink underline hover:no-underline"
              >
                {t('ws.replace')}
              </button>
            </div>

            {/* Template switcher */}
            <div className="space-y-1.5">
              <span className="slug">{t('ctl.meme.templatesShort')}</span>
              <div className="flex flex-wrap gap-2">
                {MEME_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    aria-pressed={templateId === tpl.id}
                    onClick={() => handleTemplateSelect(tpl)}
                    className="btn-rule min-h-[36px] px-2.5 text-[14px]"
                  >
                    {t(tpl.nameKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ruled control panel */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="border border-ink bg-paper-bright">
              <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-ink">
                <h2 className="slug flex items-center gap-2">
                  <Type className="w-4 h-4 text-ink" aria-hidden="true" />
                  {t('ctl.meme.panel')}
                </h2>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[14px] font-medium text-ink underline hover:no-underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  {t('ctl.meme.reset')}
                </button>
              </div>

              <div className="p-4 space-y-4 text-[15px]">
                {/* Captions */}
                <label className="block space-y-1.5">
                  <span className="slug block">{t('ctl.meme.topText')}</span>
                  <textarea
                    rows={2}
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    placeholder={t('ctl.meme.topPlaceholder')}
                    className={fieldClass}
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="slug block">{t('ctl.meme.middleText')}</span>
                  <textarea
                    rows={2}
                    value={middleText}
                    onChange={(e) => setMiddleText(e.target.value)}
                    placeholder={t('ctl.meme.middlePlaceholder')}
                    className={fieldClass}
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="slug block">{t('ctl.meme.bottomText')}</span>
                  <textarea
                    rows={2}
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    placeholder={t('ctl.meme.bottomPlaceholder')}
                    className={fieldClass}
                  />
                </label>

                {/* Typography */}
                <div className="space-y-4 pt-4 border-t border-ink">
                  <label className="block space-y-1.5">
                    <span className="slug block">{t('ctl.meme.font')}</span>
                    <select
                      value={fontId}
                      onChange={(e) => setFontId(e.target.value)}
                      className="w-full min-h-[40px] bg-paper border border-ink px-2.5 text-[15px] text-ink focus:outline-none"
                    >
                      {MEME_FONTS.map((f) => (
                        <option key={f.id} value={f.id}>
                          {t(f.labelKey)}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="space-y-1.5">
                    <span className="slug block">{t('ctl.meme.align')}</span>
                    <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.meme.align')}>
                      {alignOptions.map(({ value, Icon, labelKey }) => (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={textAlign === value}
                          aria-label={t(labelKey)}
                          title={t(labelKey)}
                          onClick={() => setTextAlign(value)}
                          className={`min-h-[40px] flex items-center justify-center transition-colors ${
                            textAlign === value ? 'seg-on' : 'seg-off'
                          }`}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block space-y-1.5">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-ink">{t('ctl.meme.size')}</span>
                      <span className="font-semibold text-ink" data-measure>
                        {t('ctl.meme.sizeValue', { value: sizePercent })}
                      </span>
                    </span>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full"
                    />
                  </label>

                  <label className="block space-y-1.5">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-ink">{t('ctl.meme.stroke')}</span>
                      <span className="font-semibold text-ink" data-measure>
                        {strokeWidth}
                      </span>
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={strokeWidth}
                      onChange={(e) => setStrokeWidth(Number(e.target.value))}
                      className="w-full"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-9 h-9 shrink-0 border border-ink bg-transparent cursor-pointer"
                      />
                      <span className="flex flex-col leading-tight">
                        <span className="text-ink">{t('ctl.meme.textColor')}</span>
                        <span className="text-[13px] text-graphite uppercase" data-measure>{textColor}</span>
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="color"
                        value={strokeColor}
                        onChange={(e) => setStrokeColor(e.target.value)}
                        className="w-9 h-9 shrink-0 border border-ink bg-transparent cursor-pointer"
                      />
                      <span className="flex flex-col leading-tight">
                        <span className="text-ink">{t('ctl.meme.strokeColor')}</span>
                        <span className="text-[13px] text-graphite uppercase" data-measure>{strokeColor}</span>
                      </span>
                    </label>
                  </div>

                  <label className="flex items-center justify-between gap-3 cursor-pointer">
                    <span className="text-ink">{t('ctl.meme.uppercase')}</span>
                    <input
                      type="checkbox"
                      checked={isUppercase}
                      onChange={(e) => setIsUppercase(e.target.checked)}
                      className="w-4 h-4 accent-ink cursor-pointer"
                    />
                  </label>
                </div>

                {/* Save as */}
                <div className="space-y-1.5 pt-4 border-t border-ink">
                  <span className="slug">{t('ws.saveAs')}</span>
                  <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                    {SAVE_FORMATS.map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        aria-pressed={saveFormat === fmt}
                        onClick={() => setSaveFormat(fmt)}
                        className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                          saveFormat === fmt ? 'seg-on' : 'seg-off'
                        }`}
                      >
                        {formatLabel(fmt)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <div className="hidden lg:block">
                <button type="button" onClick={() => handleDownload(saveFormat)} className="btn-ink w-full min-h-[52px] text-[16px]">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>{downloadLabel}</span>
                </button>
              </div>
              {copyError && (
                <p role="alert" className="flex items-start gap-1.5 text-[14px] text-accent-yellow leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t('ws.errCopy')}</span>
                </p>
              )}
              <button type="button" onClick={handleCopyClipboard} className="btn-rule w-full">
                {copiedToast ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span aria-live="polite">{copiedToast ? t('ws.copied') : t('ws.copy')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phones: the primary action stays under the thumb */}
      {imgElement && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
          <button type="button" onClick={() => handleDownload(saveFormat)} className="btn-ink w-full min-h-[48px] text-[16px]">
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>{downloadLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
