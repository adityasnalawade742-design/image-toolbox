import { readFileSync } from 'fs';
import { resolve } from 'path';

console.log('🧪 ==================================================================');
console.log('🧪 FORENSIC CONTROL TEST: UNTRAINED vs MATHEMATICAL INTERPOLATION');
console.log('🧪 ==================================================================\n');

async function main() {
  const ort = await import('onnxruntime-web');

  const buf2 = readFileSync(resolve(process.cwd(), 'public/models/espcn-x2.onnx'));
  const buf4 = readFileSync(resolve(process.cwd(), 'public/models/espcn-x4.onnx'));

  const session2 = await ort.InferenceSession.create(buf2);
  const session4 = await ort.InferenceSession.create(buf4);

  // Test Pattern 1: Flat gray (0.5)
  const flat = new Float32Array(256 * 256).fill(0.5);

  // Test Pattern 2: Step edge
  const edge = new Float32Array(256 * 256);
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      edge[y * 256 + x] = x >= 128 ? 1.0 : 0.0;
    }
  }

  // Test Pattern 3: Checkerboard
  const checker = new Float32Array(256 * 256);
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      checker[y * 256 + x] = ((Math.floor(x / 8) + Math.floor(y / 8)) % 2 === 0) ? 1.0 : 0.0;
    }
  }

  async function evaluate(name, data) {
    console.log(`--- Test Pattern: ${name} ---`);
    const inTensor = new ort.Tensor('float32', data, [1, 1, 256, 256]);

    // 2x
    const res2 = await session2.run({ input: inTensor });
    const out2 = res2.output.data;
    let sum2 = 0;
    let min2 = Infinity;
    let max2 = -Infinity;
    for (let i = 0; i < out2.length; i++) {
      sum2 += out2[i];
      if (out2[i] < min2) min2 = out2[i];
      if (out2[i] > max2) max2 = out2[i];
    }
    const mean2 = sum2 / out2.length;

    console.log(`  ESPCN 2× Output:`);
    console.log(`    Mean: ${mean2.toFixed(4)}, Min: ${min2.toFixed(4)}, Max: ${max2.toFixed(4)}`);

    // 4x
    const res4 = await session4.run({ input: inTensor });
    const out4 = res4.output.data;
    let sum4 = 0;
    let min4 = Infinity;
    let max4 = -Infinity;
    for (let i = 0; i < out4.length; i++) {
      sum4 += out4[i];
      if (out4[i] < min4) min4 = out4[i];
      if (out4[i] > max4) max4 = out4[i];
    }
    const mean4 = sum4 / out4.length;

    console.log(`  ESPCN 4× Output:`);
    console.log(`    Mean: ${mean4.toFixed(4)}, Min: ${min4.toFixed(4)}, Max: ${max4.toFixed(4)}\n`);
  }

  await evaluate('Flat Color (0.500)', flat);
  await evaluate('Sharp Step Edge (0.0 / 1.0)', edge);
  await evaluate('Checkerboard Pattern (0.0 / 1.0)', checker);
}

main().catch(console.error);
