/**
 * libimagequant (GPL-3.0, via the `imagequant` package) loaded without a bundler WebAssembly plugin: the package's
 * glue expects `import * as wasm from './imagequant_bg.wasm'`, so the module is instantiated here and handed over.
 */
// @ts-expect-error the package ships no types for its glue file
import * as glue from 'imagequant/imagequant_bg.js';
import wasmUrl from 'imagequant/imagequant_bg.wasm?url';

export interface ImagequantImage {
  free(): void;
}
export interface Imagequant {
  set_quality(minimum: number, target: number): void;
  set_speed(value: number): void;
  process(image: ImagequantImage): Uint8Array;
  free(): void;
}

let loading: Promise<void> | null = null;

export function ready(): Promise<void> {
  loading ??= (async () => {
    const res = await fetch(wasmUrl);
    if (!res.ok) throw new Error(`imagequant download failed (${res.status})`);
    const { instance } = await WebAssembly.instantiate(await res.arrayBuffer(), { './imagequant_bg.js': glue });
    glue.__wbg_set_wasm(instance.exports);
  })();
  return loading;
}

export function api(): {
  Imagequant: new () => Imagequant;
  ImagequantImage: new (data: Uint8Array, width: number, height: number, gamma: number) => ImagequantImage;
} {
  return { Imagequant: glue.Imagequant, ImagequantImage: glue.ImagequantImage };
}
