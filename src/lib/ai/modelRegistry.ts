/**
 * Verified AI Super-Resolution Model Registry
 */

export interface AIModelDefinition {
  id: string;
  name: string;
  architecture: string;
  scale: 2 | 4;
  modelUrl: string;
  sizeBytes: number;
  sizeKb: number;
  sha256: string;
  inputChannels: number;
  license: string;
}

export const AI_MODELS: Record<2 | 4, AIModelDefinition> = {
  2: {
    id: 'espcn-x2',
    name: 'ESPCN 2× Super-Resolution',
    architecture: 'Sub-Pixel Convolutional Neural Network',
    scale: 2,
    modelUrl: '/models/espcn-x2.onnx',
    sizeBytes: 91223,
    sizeKb: 89.1,
    sha256: '051287075b52189240c6bae02edaee5dbde5e211e7efdc80fd69b4521b800d0f',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
  },
  4: {
    id: 'espcn-x4',
    name: 'ESPCN 4× Super-Resolution',
    architecture: 'Sub-Pixel Convolutional Neural Network',
    scale: 4,
    modelUrl: '/models/espcn-x4.onnx',
    sizeBytes: 105049,
    sizeKb: 102.6,
    sha256: 'c9c87c513122dc189f6594a0dc3c726e3a276dd0adf8ed6bc45b1e62cb0dbd41',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
  },
};

export function getAIModel(scale: 2 | 4): AIModelDefinition {
  return AI_MODELS[scale] || AI_MODELS[2];
}
