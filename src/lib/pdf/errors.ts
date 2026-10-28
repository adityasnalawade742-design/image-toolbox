// Kept apart from pageOps.ts so that UI code can recognise this error without pulling pdf-lib into its bundle
export class PdfEncryptedError extends Error {}

/** Form text in a writing system none of the bundled fonts covers (e.g. Arabic, Hebrew, Thai, Devanagari) */
export class PdfUnsupportedTextError extends Error {
  constructor(public fields: string[]) {
    super(`No font for the text in: ${fields.join(', ')}`);
  }
}
