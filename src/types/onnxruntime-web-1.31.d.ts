// onnxruntime-web 1.31.1 is installed under an npm alias, beside the 1.21 that IMG.LY's library pins. Its own type
// declarations name it "onnxruntime-web/...", so the alias gets them here. (Not a tsconfig "paths" mapping: Astro
// applies those to the bundle too, which would swap the runtime for its type package.) The API used
// (InferenceSession, Tensor, env.wasm) is the same in the shared onnxruntime-common types.
declare module 'onnxruntime-web-1.31/jspi' {
  export * from 'onnxruntime-common';
}
