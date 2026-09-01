import React, { useState, useRef } from 'react';
import { UploadCloud, Sparkles } from 'lucide-react';
import { showDefaultLang, defaultLang } from '../../i18n/ui';

interface Props {
  locale?: string;
  title?: string;
  subtitle?: string;
}

export function HomeDropZone({
  locale = 'en',
  title = 'Drop your images here or click to browse',
  subtitle = 'Supports PNG, JPG, WebP, SVG, AVIF, GIF — 100% in-browser processing',
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getTargetUrl = () => {
    if (!showDefaultLang && locale === defaultLang) {
      return '/crop-image';
    }
    return `/${locale}/crop-image`;
  };

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        sessionStorage.setItem('it_cached_image', dataUrl);
        sessionStorage.setItem('it_cached_filename', file.name);
        window.location.href = getTargetUrl();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
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
            Choose Image
          </span>
          <span className="text-[11px] text-mute flex items-center gap-1">
            or <kbd className="raycast-keycap px-1.5 py-0.5 rounded-xs text-[10px]">Ctrl+V</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
