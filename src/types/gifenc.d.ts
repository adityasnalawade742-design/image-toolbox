declare module 'gifenc' {
  export const GIFEncoder: () => any;
  export const quantize: (rgba: Uint8Array, colors: number, options?: object) => number[][];
  export const applyPalette: (rgba: Uint8Array, palette: number[][], format?: string) => Uint8Array;
}
