/**
 * Verified Pretrained AI Super-Resolution Model Registry
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
  source: string;
  trainingDataset: string;
  provenance: 'VERIFIED_PRETRAINED';
}

export const AI_MODELS: Record<2 | 4, AIModelDefinition> = {
  2: {
    id: 'espcn-x2',
    name: 'ESPCN 2× Super-Resolution',
    architecture: 'Sub-Pixel Convolutional Neural Network (Shi et al. 2016)',
    scale: 2,
    modelUrl: '/models/espcn-x2.onnx',
    sizeBytes: 93835,
    sizeKb: 91.6,
    sha256: '9f6a37399fbf18f4ab6f6f324936b1f63dc2e6ce35d5ea87a2c40a6eeca9ca3d',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
    source: 'OpenCV Contrib dnn_superres / TF-ESPCN GSoC',
    trainingDataset: 'DIV2K Dataset',
    provenance: 'VERIFIED_PRETRAINED',
  },
  4: {
    id: 'espcn-x4',
    name: 'ESPCN 4× Super-Resolution',
    architecture: 'Sub-Pixel Convolutional Neural Network (Shi et al. 2016)',
    scale: 4,
    modelUrl: '/models/espcn-x4.onnx',
    sizeBytes: 107709,
    sizeKb: 105.2,
    sha256: 'dbb231565275e2aa032815ab6fc455f7fc566c57ac77d8cf7a7e67442ce28d49',
    inputChannels: 1,
    license: 'BSD-3-Clause / MIT',
    source: 'OpenCV Contrib dnn_superres / TF-ESPCN GSoC',
    trainingDataset: 'DIV2K Dataset',
    provenance: 'VERIFIED_PRETRAINED',
  },
};

export function getAIModel(scale: 2 | 4): AIModelDefinition {
  return AI_MODELS[scale] || AI_MODELS[2];
}
