import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UploadCloud, Download, AlertCircle, FileCode, CheckCircle2, Clipboard, Loader2, Play } from 'lucide-react';
import { loadImage, canvasToBlob, downloadBlob } from '../../lib/canvas/engine';

export function Base64ToImageWorkspace() {
  const [inputText, setInputText] = useState('');
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [format, setFormat] = useState<'image/png' | 'image/jpeg' | 'image/webp'>('image/png');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  const performDecode = useCallback(async (text: string) => {
    if (!text.trim()) {
      setImageElement(null);
      setErrorMsg(null);
      setIsDecoding(false);
      return;
    }

    setIsDecoding(true);
    setErrorMsg(null);

    let cleanSrc = text.trim();
    if (!cleanSrc.startsWith('data:image/')) {
      cleanSrc = `data:image/png;base64,${cleanSrc}`;
    }

    try {
      const img = await loadImage(cleanSrc);
      setImageElement(img);
      setErrorMsg(null);
    } catch {
      setImageElement(null);
      setErrorMsg('Invalid Base64 string or corrupted image payload.');
    } finally {
      setIsDecoding(false);
    }
  }, []);

  const handleTextChange = (text: string) => {
    setInputText(text);
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (!text.trim()) {
      setImageElement(null);
      setErrorMsg(null);
      return;
    }

    // Debounce decoding by 350ms to prevent UI freezing on huge strings
    debounceTimeoutRef.current = window.setTimeout(() => {
      performDecode(text);
    }, 350);
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setInputText(text);
        performDecode(text);
      }
    } catch {
      // Fallback
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = (e.target?.result as string) || '';
      setInputText(result);
      performDecode(result);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!imageElement || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = imageElement.naturalWidth || imageElement.width;
    canvas.height = imageElement.naturalHeight || imageElement.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageElement, 0, 0);
    }
  }, [imageElement]);

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, format, 0.92);
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(blob, `decoded-image.${ext}`);
  };

  return (
    <div className="w-full bg-surface border border-hairline rounded-xl p-4 sm:p-6 shadow-2xl space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Input Area (6 Cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <label className="font-semibold text-ink flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-accent-blue" />
              <span>Paste Base64 or Data URI</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePasteClipboard}
                className="flex items-center gap-1 text-[11px] text-body hover:text-ink transition-colors px-2 py-0.5 bg-surface-card border border-hairline rounded"
              >
                <Clipboard className="w-3 h-3" />
                <span>Paste</span>
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-[11px] text-mute hover:text-ink transition-colors"
              >
                Upload .txt
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,text/plain"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
              }}
            />
          </div>

          <div className="relative">
            <textarea
              rows={10}
              value={inputText}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Paste your base64 string or data:image/png;base64,... here"
              className="w-full bg-surface-card border border-hairline rounded-lg p-3 text-xs font-mono text-ink placeholder-ash focus:outline-none focus:border-hairline-strong resize-none"
            />
            {isDecoding && (
              <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-surface-elevated/90 border border-hairline rounded text-[11px] text-accent-blue font-medium shadow">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Decoding...</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-mute font-mono">
              {inputText.length > 0 ? `${inputText.length.toLocaleString()} characters` : 'Ready for input'}
            </span>
            <button
              type="button"
              onClick={() => performDecode(inputText)}
              disabled={!inputText.trim() || isDecoding}
              className="flex items-center gap-1.5 px-3 py-1 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong rounded text-xs font-medium text-ink transition-colors disabled:opacity-40"
            >
              <Play className="w-3 h-3 text-accent-green" />
              <span>Decode Immediately</span>
            </button>
          </div>

          {errorMsg ? (
            <div className="flex items-center gap-2 p-2.5 bg-accent-red/10 border border-accent-red/20 rounded-md text-xs text-accent-red">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          ) : imageElement ? (
            <div className="flex items-center gap-2 p-2.5 bg-accent-green/10 border border-accent-green/20 rounded-md text-xs text-accent-green font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Valid Image Decoded: {imageElement.naturalWidth} × {imageElement.naturalHeight} px</span>
            </div>
          ) : null}
        </div>

        {/* Right Preview & Export Panel (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-lg border border-hairline overflow-hidden canvas-checkerboard flex items-center justify-center min-h-[260px] max-h-[350px] p-4">
            {imageElement ? (
              <canvas
                ref={canvasRef}
                className="max-w-full max-h-[300px] object-contain rounded shadow-xl"
              />
            ) : (
              <div className="text-center text-xs text-mute space-y-1">
                <UploadCloud className="w-6 h-6 mx-auto text-ash" />
                <p>Decoded image preview will appear here</p>
              </div>
            )}
          </div>

          {imageElement && (
            <div className="p-4 bg-surface-elevated border border-hairline rounded-lg space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-body">Export Format</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['image/png', 'image/jpeg', 'image/webp'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      className={`py-1.5 rounded-md border text-center font-medium transition-colors ${
                        format === fmt
                          ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                          : 'bg-surface border-hairline text-mute hover:text-ink'
                      }`}
                    >
                      {fmt === 'image/png' ? 'PNG' : fmt === 'image/jpeg' ? 'JPG' : 'WebP'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                className="w-full py-2.5 px-4 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-md shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Decoded Image</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
