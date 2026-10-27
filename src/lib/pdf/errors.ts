// Kept apart from pageOps.ts so that UI code can recognise this error without pulling pdf-lib into its bundle
export class PdfEncryptedError extends Error {}
