/**
 * Tiled Neural Inference Engine with Seam Blending & Cancellation
 */
import type { PreprocessedImage } from './imagePreprocessor.ts';
import { generateTileGrid } from './imagePreprocessor.ts';

export interface InferenceProgressCallback {
  (currentTile: number, totalTiles: number, percent: number, stageMessage: string): void;
}

/**
 * Execute real ONNX tensor inference across image tiles
 */
export async function runTiledNeuralInference(
  session: any,
  preprocessed: PreprocessedImage,
  scale: number = 3,
  abortSignal?: AbortSignal,
  onProgress?: InferenceProgressCallback
): Promise<Float32Array> {
  const ort = await import('onnxruntime-web');

  const { width, height, yChannel } = preprocessed;
  const outWidth = width * scale;
  const outHeight = height * scale;

  const outYChannel = new Float32Array(outWidth * outHeight);
  const blendWeights = new Float32Array(outWidth * outHeight);

  const TILE_DIM = 224;
  const overlap = 16;
  const tiles = generateTileGrid(width, height, TILE_DIM, overlap, scale);
  const totalTiles = tiles.length;

  for (let i = 0; i < totalTiles; i++) {
    if (abortSignal?.aborted) {
      throw new Error('Inference cancelled by user');
    }

    const tile = tiles[i];
    
    // Fixed 224x224 tensor input required by the ONNX model graph
    const tileData = new Float32Array(TILE_DIM * TILE_DIM);

    // Copy available tile pixels into 224x224 buffer
    for (let row = 0; row < tile.h; row++) {
      const srcOffset = (tile.y + row) * width + tile.x;
      const dstOffset = row * TILE_DIM;
      tileData.set(yChannel.subarray(srcOffset, srcOffset + tile.w), dstOffset);
    }

    // Create real Float32 Tensor [1, 1, 224, 224]
    const inputTensor = new ort.Tensor('float32', tileData, [1, 1, TILE_DIM, TILE_DIM]);

    // Real ONNX Neural Inference Session Run
    const inputName = session.inputNames[0] || 'input';
    const outputName = session.outputNames[0] || 'output';

    const results = await session.run({ [inputName]: inputTensor });
    const outputTensor = results[outputName];
    const outData = outputTensor.data as Float32Array;

    const outTileW = tile.w * scale;
    const outTileH = tile.h * scale;
    const modelOutDim = TILE_DIM * scale; // 672

    // Splice tile into reconstructed full Y channel with edge feathering
    for (let row = 0; row < outTileH; row++) {
      const targetY = tile.outY + row;
      if (targetY >= outHeight) continue;

      for (let col = 0; col < outTileW; col++) {
        const targetX = tile.outX + col;
        if (targetX >= outWidth) continue;

        const outIdx = targetY * outWidth + targetX;
        const tileIdx = row * modelOutDim + col;

        // Linear feathering weight near tile borders to blend seams
        const edgeDistX = Math.min(col, outTileW - 1 - col);
        const edgeDistY = Math.min(row, outTileH - 1 - row);
        const weight = Math.min(1.0, Math.min(edgeDistX, edgeDistY) / (overlap * scale || 1) + 0.1);

        outYChannel[outIdx] = (outYChannel[outIdx] * blendWeights[outIdx] + outData[tileIdx] * weight) / (blendWeights[outIdx] + weight);
        blendWeights[outIdx] += weight;
      }
    }

    const percent = Math.round(((i + 1) / totalTiles) * 100);
    onProgress?.(i + 1, totalTiles, percent, `Processing neural tile ${i + 1}/${totalTiles} (${percent}%)...`);

    // Yield main thread briefly so UI remains responsive
    await new Promise((r) => setTimeout(r, 0));
  }

  return outYChannel;
}
