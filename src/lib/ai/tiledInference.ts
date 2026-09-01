/**
 * Tiled Neural Inference Engine with Seam Blending & Cancellation
 */
import type { PreprocessedImage } from './imagePreprocessor.ts';
import { generateTileGrid } from './imagePreprocessor.ts';
import { getOrt } from './modelLoader.ts';

export interface InferenceProgressCallback {
  (currentTile: number, totalTiles: number, percent: number, stageMessage: string): void;
}

/**
 * Execute real ONNX tensor inference across image tiles
 */
export async function runTiledNeuralInference(
  session: any,
  preprocessed: PreprocessedImage,
  scale: 2 | 4 = 2,
  abortSignal?: AbortSignal,
  onProgress?: InferenceProgressCallback
): Promise<Float32Array> {
  const ort = await getOrt();

  const { width, height, yChannel } = preprocessed;
  const outWidth = width * scale;
  const outHeight = height * scale;

  const outYChannel = new Float32Array(outWidth * outHeight);
  const blendWeights = new Float32Array(outWidth * outHeight);

  const tileSize = 256;
  const overlap = 16;
  const tiles = generateTileGrid(width, height, tileSize, overlap, scale);
  const totalTiles = tiles.length;

  for (let i = 0; i < totalTiles; i++) {
    if (abortSignal?.aborted) {
      throw new Error('Inference cancelled by user');
    }

    const tile = tiles[i];
    const tilePixels = tile.w * tile.h;
    const tileData = new Float32Array(tilePixels);

    // Copy tile pixels from full Y channel
    for (let row = 0; row < tile.h; row++) {
      const srcOffset = (tile.y + row) * width + tile.x;
      const dstOffset = row * tile.w;
      tileData.set(yChannel.subarray(srcOffset, srcOffset + tile.w), dstOffset);
    }

    // Dynamic Float32 Tensor [1, 1, tile.h, tile.w]
    const inputTensor = new ort.Tensor('float32', tileData, [1, 1, tile.h, tile.w]);

    // Real ONNX Neural Inference Session Run
    const inputName = session.inputNames[0] || 'input';
    const outputName = session.outputNames[0] || 'output';

    const results = await session.run({ [inputName]: inputTensor });
    const outputTensor = results[outputName];
    const outData = outputTensor.data as Float32Array;

    const outTileW = tile.w * scale;
    const outTileH = tile.h * scale;

    // Single tile optimization (no blending needed if only 1 tile)
    if (totalTiles === 1) {
      outYChannel.set(outData);
      break;
    }

    // Multi-tile splicing with linear feathering
    for (let row = 0; row < outTileH; row++) {
      const targetY = tile.outY + row;
      if (targetY >= outHeight) continue;

      for (let col = 0; col < outTileW; col++) {
        const targetX = tile.outX + col;
        if (targetX >= outWidth) continue;

        const outIdx = targetY * outWidth + targetX;
        const tileIdx = row * outTileW + col;

        // Linear feathering near tile borders to blend seams
        const edgeDistX = Math.min(col, outTileW - 1 - col);
        const edgeDistY = Math.min(row, outTileH - 1 - row);
        const weight = Math.min(1.0, Math.min(edgeDistX, edgeDistY) / (overlap * scale || 1) + 0.05);

        outYChannel[outIdx] = (outYChannel[outIdx] * blendWeights[outIdx] + outData[tileIdx] * weight) / (blendWeights[outIdx] + weight);
        blendWeights[outIdx] += weight;
      }
    }

    const percent = Math.round(((i + 1) / totalTiles) * 100);
    onProgress?.(i + 1, totalTiles, percent, `Processing neural tile ${i + 1}/${totalTiles} (${percent}%)...`);

    // Yield main thread so UI stays responsive
    await new Promise((r) => setTimeout(r, 0));
  }

  return outYChannel;
}
