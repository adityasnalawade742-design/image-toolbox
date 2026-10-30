/**
 * How a picture looks with colour vision deficiency: the physiologically based model of Machado, Oliveira and
 * Fernandes (2009), applied in linear light. "-omaly" types use the published severity 0.6 matrices; achromatopsia
 * is plain luminance.
 */

export type VisionType = 'protanopia' | 'deuteranopia' | 'tritanopia' | 'protanomaly' | 'deuteranomaly' | 'tritanomaly' | 'achromatopsia';

export const VISION_TYPES: VisionType[] = ['deuteranomaly', 'deuteranopia', 'protanomaly', 'protanopia', 'tritanomaly', 'tritanopia', 'achromatopsia'];

export const VISION_MATRICES: Record<VisionType, readonly number[]> = {
  protanopia: [0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216, -0.003882, -0.048116, 1.051998],
  deuteranopia: [0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413, -0.01182, 0.04294, 0.968881],
  tritanopia: [1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602, 0.004733, 0.691367, 0.3039],
  protanomaly: [0.38545, 0.769005, -0.154455, 0.100526, 0.829802, 0.069673, -0.007442, -0.02219, 1.029632],
  deuteranomaly: [0.547494, 0.607765, -0.155259, 0.181692, 0.781742, 0.036566, -0.01041, 0.027275, 0.983136],
  tritanomaly: [1.104996, -0.046633, -0.058363, -0.032137, 0.971635, 0.060503, 0.001336, 0.317922, 0.680742],
  achromatopsia: [0.2126, 0.7152, 0.0722, 0.2126, 0.7152, 0.0722, 0.2126, 0.7152, 0.0722],
};

const TO_LINEAR = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  TO_LINEAR[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// A table is far quicker than the power function per pixel; 4096 steps are enough for 8-bit output
const TO_SRGB = new Uint8ClampedArray(4097);
for (let i = 0; i <= 4096; i++) {
  const c = i / 4096;
  TO_SRGB[i] = Math.round(255 * (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055));
}
const encode = (v: number) => TO_SRGB[v <= 0 ? 0 : v >= 1 ? 4096 : Math.round(v * 4096)];

/** Simulate in place on RGBA pixels; alpha is left alone */
export function simulateVision(data: Uint8ClampedArray, type: VisionType) {
  const m = VISION_MATRICES[type];
  for (let i = 0; i < data.length; i += 4) {
    const r = TO_LINEAR[data[i]];
    const g = TO_LINEAR[data[i + 1]];
    const b = TO_LINEAR[data[i + 2]];
    data[i] = encode(m[0] * r + m[1] * g + m[2] * b);
    data[i + 1] = encode(m[3] * r + m[4] * g + m[5] * b);
    data[i + 2] = encode(m[6] * r + m[7] * g + m[8] * b);
  }
}
