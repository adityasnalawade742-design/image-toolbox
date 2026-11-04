declare module 'pica' {
  interface PicaOptions {
    features?: Array<'js' | 'wasm' | 'ww' | 'cib' | 'all'>;
  }
  interface ResizeOptions {
    filter?: 'box' | 'hamming' | 'lanczos2' | 'lanczos3' | 'mks2013';
    unsharpAmount?: number;
    unsharpRadius?: number;
    unsharpThreshold?: number;
  }
  class Pica {
    constructor(options?: PicaOptions);
    resize(from: HTMLCanvasElement | HTMLImageElement | ImageBitmap, to: HTMLCanvasElement, options?: ResizeOptions): Promise<HTMLCanvasElement>;
  }
  export default Pica;
}
