import React, { useState, useEffect } from 'react';
import { BarChart2, CheckCircle2, XCircle, Copy, Check, Printer, Layers, Camera, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { vpsAnalyzeMetadata, type ExifAnalysisResult } from '../../lib/vps/vpsClient';

interface Props {
  filename: string;
  fileSize: number;
  format: string;
  mimeType: string;
  width: number;
  height: number;
  hasTransparency: boolean;
  activeFile?: File | Blob | null;
}

export function AnalyzerControls({
  filename,
  fileSize,
  format,
  mimeType,
  width,
  height,
  hasTransparency,
  activeFile,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [exifData, setExifData] = useState<ExifAnalysisResult | null>(null);
  const [isAnalyzingExif, setIsAnalyzingExif] = useState(false);

  useEffect(() => {
    if (!activeFile) return;
    setIsAnalyzingExif(true);
    vpsAnalyzeMetadata(activeFile)
      .then((res) => setExifData(res))
      .catch(() => setExifData(null))
      .finally(() => setIsAnalyzingExif(false));
  }, [activeFile]);

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height) || 1;
  const aspectFraction = `${width / divisor}:${height / divisor}`;
  const megapixels = ((width * height) / 1000000).toFixed(2);
  const uncompressedMem = ((width * height * 4) / (1024 * 1024)).toFixed(1);

  // Dynamic Color Depth calculation
  const cleanFmt = (format || '').toLowerCase();
  const isJpg = cleanFmt.includes('jpg') || cleanFmt.includes('jpeg');
  let colorDepth = '24-bit TrueColor (8-bit/channel RGB)';
  if (isJpg) {
    colorDepth = '24-bit TrueColor (RGB, No Alpha)';
  } else if (hasTransparency) {
    colorDepth = '32-bit RGBA (24-bit RGB + 8-bit Alpha)';
  } else {
    colorDepth = '24-bit TrueColor (RGB, Opaque)';
  }

  // Print Size Calculations
  const printW300 = (width / 300).toFixed(1);
  const printH300 = (height / 300).toFixed(1);
  const printWcm = ((width / 300) * 2.54).toFixed(1);
  const printHcm = ((height / 300) * 2.54).toFixed(1);

  const metrics = [
    { label: 'Filename', value: filename },
    { label: 'File Size', value: formatSize(fileSize) },
    { label: 'Format', value: format.toUpperCase() },
    { label: 'MIME Type', value: mimeType || `image/${format.toLowerCase()}` },
    { label: 'Dimensions', value: `${width} × ${height} px` },
    { label: 'Aspect Ratio', value: `${aspectFraction} (${(width / (height || 1)).toFixed(2)}:1)` },
    { label: 'Resolution', value: `${megapixels} Megapixels` },
    { label: 'Color Depth', value: colorDepth },
    {
      label: 'Transparency (Alpha)',
      value: hasTransparency && !isJpg ? (
        <span className="flex items-center gap-1 text-accent-green font-medium"><CheckCircle2 className="w-3.5 h-3.5" /> Present (Alpha Channel)</span>
      ) : (
        <span className="flex items-center gap-1 text-mute"><XCircle className="w-3.5 h-3.5" /> None (100% Opaque)</span>
      ),
    },
    { label: 'Print Size (@300 DPI)', value: `${printW300}" × ${printH300}" (${printWcm} × ${printHcm} cm)` },
    { label: 'Web Display (@72 DPI)', value: `${(width / 72).toFixed(1)}" × ${(height / 72).toFixed(1)}"` },
    { label: 'Uncompressed RAM', value: `~${uncompressedMem} MB (Raw RGBA buffer)` },
  ];

  const handleCopyReport = () => {
    const text = metrics.map((m) => `${m.label}: ${typeof m.value === 'string' ? m.value : hasTransparency && !isJpg ? 'Present' : 'None'}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-ink">
          <BarChart2 className="w-4 h-4 text-accent-blue" />
          <span>Technical Specifications</span>
        </div>
        <button
          type="button"
          onClick={handleCopyReport}
          className="flex items-center gap-1 text-xs text-mute hover:text-ink transition-colors px-2 py-1 bg-surface-card border border-hairline rounded"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy Report'}</span>
        </button>
      </div>

      <div className="p-3 bg-surface-card border border-hairline rounded-lg divide-y divide-hairline-soft text-xs">
        {metrics.map((m) => (
          <div key={m.label} className="py-2 flex items-center justify-between gap-4">
            <span className="text-mute">{m.label}</span>
            <span className="text-ink font-mono font-medium truncate text-right">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Deep EXIF & Hardware Metadata Section */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Camera & Hardware EXIF</span>
          </div>
          {isAnalyzingExif && (
            <span className="flex items-center gap-1 text-[11px] text-mute font-mono">
              <Loader2 className="w-3 h-3 animate-spin text-accent-blue" />
              <span>Scanning tags...</span>
            </span>
          )}
        </div>

        {exifData && Object.keys(exifData.exif || {}).length > 0 ? (
          <div className="p-3 bg-surface-card border border-hairline rounded-lg divide-y divide-hairline-soft text-xs max-h-60 overflow-y-auto">
            {Object.entries(exifData.exif).map(([tag, val]) => (
              <div key={tag} className="py-1.5 flex items-center justify-between gap-4 text-[11px]">
                <span className="text-mute font-medium truncate max-w-[140px]">{tag}</span>
                <span className="text-ink font-mono truncate max-w-[180px] text-right">{val}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 bg-surface-card/60 border border-hairline rounded-lg text-xs text-mute flex items-center justify-between">
            <span>{isAnalyzingExif ? 'Extracting deep camera markers...' : 'No camera EXIF metadata embedded in this image file.'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
