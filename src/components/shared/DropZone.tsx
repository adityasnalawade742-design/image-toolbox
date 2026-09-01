'use client';

import React, { useRef, useState, useEffect } from 'react';
import { UploadCloud, FileImage, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { validateImageFile } from '@/lib/canvas/file-utils';

interface DropZoneProps {
  onFileLoaded?: (file: File) => void;
  onFilesLoaded?: (files: File[]) => void;
  multiple?: boolean;
  maxFiles?: number;
  title?: string;
  subtitle?: string;
  accept?: string;
}

export const DropZone: React.FC<DropZoneProps> = ({
  onFileLoaded,
  onFilesLoaded,
  multiple = false,
  maxFiles = 50,
  title = 'Drop an image here',
  subtitle = 'or choose from your device',
  accept = 'image/jpeg,image/png,image/webp,image/avif,image/gif'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPasting, setIsPasting] = useState<boolean>(false);

  // Global clipboard paste listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!e.clipboardData || !e.clipboardData.items) return;
      
      const pastedFiles: File[] = [];
      for (let i = 0; i < e.clipboardData.items.length; i++) {
        const item = e.clipboardData.items[i];
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) pastedFiles.push(file);
        }
      }

      if (pastedFiles.length > 0) {
        handleIncomingFiles(pastedFiles);
        setIsPasting(true);
        setTimeout(() => setIsPasting(false), 2000);
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [multiple, maxFiles]);

  const handleIncomingFiles = (fileList: FileList | File[]) => {
    setErrorMessage(null);
    const filesArray = Array.from(fileList);
    if (filesArray.length === 0) return;

    if (!multiple) {
      const singleFile = filesArray[0];
      const validation = validateImageFile(singleFile);
      if (!validation.valid) {
        setErrorMessage(validation.error || 'Invalid file.');
        return;
      }
      onFileLoaded?.(singleFile);
      return;
    }

    // Multi-file batch validation
    if (filesArray.length > maxFiles) {
      setErrorMessage(`Maximum batch limit is ${maxFiles} images at once. Please select fewer files.`);
      return;
    }

    const validFiles: File[] = [];
    const errors: string[] = [];

    for (const f of filesArray) {
      const val = validateImageFile(f);
      if (val.valid) {
        validFiles.push(f);
      } else {
        errors.push(`${f.name}: ${val.error}`);
      }
    }

    if (validFiles.length === 0) {
      setErrorMessage(errors[0] || 'No valid image files found.');
      return;
    }

    if (errors.length > 0) {
      setErrorMessage(`Skipped ${errors.length} invalid file(s). Processing remaining ${validFiles.length} images.`);
    }

    onFilesLoaded?.(validFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleIncomingFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleIncomingFiles(e.target.files);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        aria-label={multiple ? 'Upload multiple images area. Click or press enter to choose files' : 'Upload Image Area. Click or press enter to choose an image'}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-14 text-center cursor-pointer transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
          isDragging
            ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-950/20 scale-[1.01]'
            : 'border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/30 hover:border-brand-400 dark:hover:border-brand-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={handleInputChange}
        />

        {/* Paste notification */}
        {isPasting && (
          <div className="absolute inset-0 bg-brand-950/90 rounded-2xl flex items-center justify-center gap-2 text-white font-medium z-10 animate-in fade-in">
            <Sparkles className="w-5 h-5 text-brand-400 animate-spin" />
            <span>Image{multiple ? '(s)' : ''} pasted from clipboard!</span>
          </div>
        )}

        <div className="space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <UploadCloud className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all">
              <FileImage className="w-4 h-4" />
              <span>{multiple ? 'Choose Images' : 'Choose Image'}</span>
            </span>
          </div>

          {/* Formats, limits, and privacy guarantee badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              JPG, PNG, WebP
            </span>
            {multiple && (
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">
                Up to {maxFiles} images / 50MB per file
              </span>
            )}
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              Supports Ctrl+V Paste
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% In-Browser Privacy
            </span>
          </div>
        </div>
      </div>

      {/* Error / Skip Message */}
      {errorMessage && (
        <div className="mt-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
