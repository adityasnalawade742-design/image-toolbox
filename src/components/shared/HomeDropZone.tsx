import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Sparkles,
  Crop,
  FileDown,
  Maximize2,
  Sliders,
  EyeOff,
  Grid,
  Smile,
  CircleDot,
  X,
} from 'lucide-react';
import { showDefaultLang, defaultLang } from '../../i18n/ui';

import { saveHandoffImage } from '../../lib/storage/handoffStorage';
import { isHeicFile, convertHeicToBlob } from '../../lib/canvas/heicLoader';

interface Props {
  locale?: string;
  title?: string;
  subtitle?: string;
}

const TOOLS = [
  { slug: 'crop-image', name: 'Crop Image', desc: 'Custom & Social Aspect Ratios', icon: Crop },
  { slug: 'compress-image', name: 'Compress Image', desc: 'Shrink file size up to 90%', icon: FileDown },
  { slug: 'resize-image', name: 'Resize Image', desc: 'Exact pixel dimensions or scale %', icon: Maximize2 },
  { slug: 'photo-filters', name: 'Photo Filters', desc: 'Cinematic, Vintage, Cyberpunk', icon: Sliders },
  { slug: 'censor-image', name: 'Blur / Censor', desc: 'Redact faces & private data', icon: EyeOff },
  { slug: 'round-image', name: 'Round Corners', desc: 'Circular avatars & curved borders', icon: CircleDot },
  { slug: 'split-image', name: 'Split Image Grid', desc: 'Instagram 3×3 & Carousels', icon: Grid },
  { slug: 'meme-generator', name: 'Meme Generator', desc: 'Impact captions & viral templates', icon: Smile },
];

export function HomeDropZone({
  locale = 'en',
  title = 'Drop your images here or click to browse',
  subtitle = 'Supports PNG, JPG, WebP, SVG, AVIF, HEIC, GIF — 100% in-browser processing',
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [stagedFile, setStagedFile] = useState<{ dataUrl: string; name: string } | null>(null);
  const [isConvertingHeic, setIsConvertingHeic] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getTargetUrl = (slug: string) => {
    if (!showDefaultLang && locale === defaultLang) {
      return `/${slug}`;
    }
    return `/${locale}/${slug}`;
  };

  const handleFileSelect = async (file: File) => {
    if (!file) return;

    if (isHeicFile(file)) {
      try {
        setIsConvertingHeic(true);
        const convertedBlob = await convertHeicToBlob(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result as string;
          const pngName = file.name.replace(/\.(heic|heif)$/i, '.png');
          setStagedFile({ dataUrl, name: pngName });
          setIsConvertingHeic(false);
        };
        reader.readAsDataURL(convertedBlob);
        return;
      } catch (err) {
        console.error('Failed to convert HEIC image:', err);
        setIsConvertingHeic(false);
      }
    }

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setStagedFile({ dataUrl, name: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLaunchTool = async (slug: string) => {
    if (!stagedFile) return;
    await saveHandoffImage(stagedFile.dataUrl, stagedFile.name);
    window.location.href = getTargetUrl(slug);
  };

  return (
    <>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files?.[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
          }
        }}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer border border-dashed rounded-xl p-8 sm:p-12 text-center transition-all ${
          isDragging
            ? 'border-accent-red bg-surface-elevated shadow-2xl scale-[1.01]'
            : 'border-hairline hover:border-hairline-strong bg-surface hover:bg-surface-elevated'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
          }}
        />

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-accent-red group-hover:scale-105 transition-transform">
            <UploadCloud className="w-6 h-6" />
          </div>

          <div className="space-y-1.5 max-w-md">
            <h3 className="text-base font-semibold text-ink tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-mute leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className="px-4 py-2 rounded-md bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors">
              {isConvertingHeic ? 'Decoding iPhone HEIC...' : 'Choose Image'}
            </span>
            <span className="text-[11px] text-mute flex items-center gap-1">
              or <kbd className="raycast-keycap px-1.5 py-0.5 rounded-xs text-[10px]">Ctrl+V</kbd>
            </span>
          </div>
        </div>
      </div>

      {/* Tool Selector Modal on Drop */}
      {stagedFile && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-surface border border-hairline rounded-2xl p-6 max-w-xl w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-ink tracking-tight">
                  Choose a Tool for Your Image
                </h3>
                <p className="text-xs text-mute mt-0.5">
                  Selected: <span className="font-mono text-ink">{stagedFile.name}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStagedFile(null)}
                className="p-1.5 rounded-lg text-mute hover:text-ink hover:bg-surface-elevated transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[60vh] overflow-y-auto">
              {TOOLS.map((t) => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => handleLaunchTool(t.slug)}
                    className="flex items-start gap-3 p-3 rounded-xl border border-hairline hover:border-hairline-strong bg-surface-card hover:bg-surface-elevated transition-all text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-surface border border-hairline flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink group-hover:text-white">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-mute line-clamp-1 mt-0.5">
                        {t.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
