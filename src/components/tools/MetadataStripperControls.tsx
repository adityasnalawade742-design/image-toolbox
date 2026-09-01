import React from 'react';
import { ShieldCheck, Lock, MapPin, Camera, User, FileText } from 'lucide-react';

interface Props {
  originalBytes: number;
  outputBytes: number;
}

export function MetadataStripperControls({ originalBytes, outputBytes }: Props) {
  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const guarantees = [
    { icon: <MapPin className="w-4 h-4 text-accent-red" />, title: 'GPS Coordinates Removed', desc: 'Latitude, longitude, altitude, and location timestamps stripped.' },
    { icon: <Camera className="w-4 h-4 text-accent-blue" />, title: 'Camera & Device Info Removed', desc: 'Camera model, lens, serial numbers, shutter speed, ISO data stripped.' },
    { icon: <User className="w-4 h-4 text-accent-green" />, title: 'Author & Copyright Metadata Removed', desc: 'Creator tags, software signatures, editing software logs stripped.' },
    { icon: <FileText className="w-4 h-4 text-accent-yellow" />, title: 'EXIF & IPTC Header Stripped', desc: 'Re-encoded purely from raw pixel buffers via HTML5 Canvas.' },
  ];

  return (
    <div className="space-y-4">
      {/* Privacy Guarantee Card */}
      <div className="p-4 bg-surface-card border border-hairline rounded-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-accent-green">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Verified Client-Side Privacy Strip</span>
        </div>

        <div className="space-y-2.5">
          {guarantees.map((g) => (
            <div key={g.title} className="flex items-start gap-2.5 text-xs">
              <div className="p-1 rounded bg-surface border border-hairline shrink-0 mt-0.5">
                {g.icon}
              </div>
              <div>
                <div className="font-medium text-ink">{g.title}</div>
                <div className="text-[11px] text-mute">{g.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* File Size Metric */}
      {outputBytes > 0 && (
        <div className="p-3 bg-surface-card border border-hairline rounded-md flex items-center justify-between text-xs">
          <span className="text-mute">Original: <strong className="text-ink font-mono">{formatSize(originalBytes)}</strong></span>
          <span className="text-accent-green font-mono font-medium">Cleaned Output: {formatSize(outputBytes)}</span>
        </div>
      )}
    </div>
  );
}
