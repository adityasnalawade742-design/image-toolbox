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
    sizeBytes: 92003,
    sizeKb: 89.8,
    sha256: '7b6017a344ceea7cb07e804dfd672af2b6b058e24b50b3f4dfb9534d1f747331',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
  },
  4: {
    id: 'espcn-x4',
    name: 'ESPCN 4× Super-Resolution',
    architecture: 'Sub-Pixel Convolutional Neural Network',
    scale: 4,
    modelUrl: '/models/espcn-x4.onnx',
    sizeBytes: 105829,
    sizeKb: 103.3,
    sha256: '33a18fa8f55a40d32391de3ece1d03547b179d61f1274c7e752ee62e9c35a814',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
  },
};

export function getAIModel(scale: 2 | 4): AIModelDefinition {
  return AI_MODELS[scale] || AI_MODELS[2];
}
