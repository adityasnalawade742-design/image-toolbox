/**
 * In-browser EXIF extraction via exifr (JPEG, HEIC, TIFF, WebP, AVIF). Nothing is uploaded.
 */

export interface ExifSummary {
  tags: { label: string; value: string }[];
  hasGps: boolean;
}

const pad = (n: number) => String(n).padStart(2, '0');

function formatDate(d: unknown): string | undefined {
  if (!(d instanceof Date) || isNaN(d.getTime())) return undefined;
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function formatExposure(seconds: unknown): string | undefined {
  if (typeof seconds !== 'number' || seconds <= 0) return undefined;
  return seconds < 1 ? `1/${Math.round(1 / seconds)} s` : `${seconds} s`;
}

export async function readExifSummary(file: Blob): Promise<ExifSummary> {
  const empty: ExifSummary = { tags: [], hasGps: false };

  let data: Record<string, any> | undefined;
  try {
    const exifr = (await import('exifr')).default;
    data = await exifr.parse(await file.arrayBuffer(), {
      tiff: true,
      exif: true,
      gps: true,
      translateValues: true,
      reviveValues: true,
      mergeOutput: true,
    });
  } catch {
    return empty;
  }
  if (!data) return empty;

  const camera = [data.Make, data.Model].filter(Boolean).join(' ').trim();
  const hasGps = typeof data.latitude === 'number' && typeof data.longitude === 'number';

  const candidates: [string, string | undefined][] = [
    ['Camera', camera || undefined],
    ['Lens', data.LensModel],
    ['Taken', formatDate(data.DateTimeOriginal ?? data.CreateDate)],
    ['Exposure', formatExposure(data.ExposureTime)],
    ['Aperture', typeof data.FNumber === 'number' ? `f/${data.FNumber}` : undefined],
    ['ISO', data.ISO != null ? String(data.ISO) : undefined],
    ['Focal Length', typeof data.FocalLength === 'number' ? `${data.FocalLength} mm` : undefined],
    ['Flash', typeof data.Flash === 'string' ? data.Flash : undefined],
    ['Orientation', typeof data.Orientation === 'string' ? data.Orientation : undefined],
    ['Software', data.Software],
    ['GPS Location', hasGps ? `${data.latitude.toFixed(5)}, ${data.longitude.toFixed(5)}` : undefined],
  ];

  return {
    tags: candidates
      .filter((c): c is [string, string] => typeof c[1] === 'string' && c[1].trim() !== '')
      .map(([label, value]) => ({ label, value })),
    hasGps,
  };
}
