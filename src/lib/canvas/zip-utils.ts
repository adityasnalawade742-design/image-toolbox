import { triggerDownload } from './file-utils';

export interface ZipItem {
  blob: Blob;
  filename: string;
}

/**
 * Lazy-loads JSZip on-demand only when a ZIP download is triggered.
 * This guarantees zero impact on the initial JS bundle for single-image tools.
 */
export async function generateAndDownloadZip(
  items: ZipItem[],
  zipFilename: string = 'images-optimized.zip',
  onProgress?: (percent: number) => void
): Promise<void> {
  if (!items || items.length === 0) {
    throw new Error('No items provided for ZIP generation.');
  }

  // Dynamic import of JSZip for code-splitting
  const JSZipModule = await import('jszip');
  const JSZip = JSZipModule.default || JSZipModule;
  const zip = new JSZip();

  // Deduplicate filenames safely
  const seenNames = new Map<string, number>();

  for (const item of items) {
    let name = item.filename;
    if (seenNames.has(name)) {
      const count = seenNames.get(name)! + 1;
      seenNames.set(name, count);
      const dotIdx = name.lastIndexOf('.');
      if (dotIdx !== -1) {
        const base = name.substring(0, dotIdx);
        const ext = name.substring(dotIdx);
        name = `${base} (${count})${ext}`;
      } else {
        name = `${name} (${count})`;
      }
    } else {
      seenNames.set(name, 0);
    }

    zip.file(name, item.blob);
  }

  // Generate ZIP blob with compression progress feedback
  const zipBlob = await zip.generateAsync(
    { 
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );

  // Trigger download
  triggerDownload(zipBlob, zipFilename);
}
