export interface Base64ParseResult {
  valid: boolean;
  rawBase64?: string;
  dataUri?: string;
  mimeType?: string;
  sizeBytes?: number;
  error?: string;
}

/**
 * Converts a File or Blob into a Data URI string
 */
export function fileToDataUri(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

/**
 * Extracts raw base64 and MIME from Data URI
 */
export function parseDataUri(input: string): Base64ParseResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { valid: false, error: 'Input is empty.' };
  }

  // Check if input is a complete Data URI
  const dataUriRegex = /^data:(image\/[a-zA-Z0-9.+_-]+);base64,([\s\S]+)$/;
  const match = trimmed.match(dataUriRegex);

  if (match) {
    const mimeType = match[1];
    const rawBase64 = match[2].replace(/\s/g, '');

    // Validate base64 characters
    if (!/^[A-Za-z0-9+/=]+$/.test(rawBase64)) {
      return { valid: false, error: 'Invalid Base64 characters in Data URI payload.' };
    }

    const sizeBytes = Math.round((rawBase64.length * 3) / 4);
    return {
      valid: true,
      rawBase64,
      dataUri: `data:${mimeType};base64,${rawBase64}`,
      mimeType,
      sizeBytes
    };
  }

  // If raw Base64 without data: prefix
  const cleanBase64 = trimmed.replace(/\s/g, '');
  if (/^[A-Za-z0-9+/=]+$/.test(cleanBase64) && cleanBase64.length > 8) {
    // Guess MIME from magic bytes
    let guessedMime = 'image/png';
    if (cleanBase64.startsWith('/9j/')) guessedMime = 'image/jpeg';
    else if (cleanBase64.startsWith('UklGR')) guessedMime = 'image/webp';
    else if (cleanBase64.startsWith('R0lGOD')) guessedMime = 'image/gif';
    else if (cleanBase64.startsWith('PHN2Zy') || cleanBase64.startsWith('PD94bWw')) guessedMime = 'image/svg+xml';

    const sizeBytes = Math.round((cleanBase64.length * 3) / 4);
    return {
      valid: true,
      rawBase64: cleanBase64,
      dataUri: `data:${guessedMime};base64,${cleanBase64}`,
      mimeType: guessedMime,
      sizeBytes
    };
  }

  return {
    valid: false,
    error: 'Unrecognized Base64 or Data URI format. Please ensure it begins with "data:image/..." or is a valid Base64 string.'
  };
}
