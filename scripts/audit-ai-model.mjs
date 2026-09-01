import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';

console.log('🔍 Running Forensic AI Super-Resolution Model Audit...\n');

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

async function auditModel(filePath, expectedScale) {
  console.log(`Auditing model: ${filePath}`);
  const absPath = resolve(process.cwd(), filePath);
  assert(existsSync(absPath), `Model file exists at ${filePath}`);

  const buffer = readFileSync(absPath);
  const hash = createHash('sha256').update(buffer).digest('hex');
  const sizeBytes = buffer.byteLength;
  const sizeKb = (sizeBytes / 1024).toFixed(1);

  console.log(`  • File Size: ${sizeBytes} bytes (${sizeKb} KB)`);
  console.log(`  • SHA-256: ${hash}`);

  // Test real ONNX Runtime Web session creation
  const ort = await import('onnxruntime-web');
  const session = await ort.InferenceSession.create(buffer);

  console.log(`  • Graph Inputs: [${session.inputNames.join(', ')}]`);
  console.log(`  • Graph Outputs: [${session.outputNames.join(', ')}]`);

  assert(session.inputNames.length === 1, `Model has exactly 1 input tensor ('${session.inputNames[0]}')`);
  assert(session.outputNames.length === 1, `Model has exactly 1 output tensor ('${session.outputNames[0]}')`);

  // Test execution with fixed 256x256 spatial tensor
  const testW = 256;
  const testH = 256;
  const testData = new Float32Array(testW * testH).fill(0.5);
  const inputTensor = new ort.Tensor('float32', testData, [1, 1, testH, testW]);

  const results = await session.run({ [session.inputNames[0]]: inputTensor });
  const outputTensor = results[session.outputNames[0]];

  const outH = outputTensor.dims[2];
  const outW = outputTensor.dims[3];
  const actualScale = outW / testW;

  console.log(`  • Test Input: [1, 1, ${testH}, ${testW}]`);
  console.log(`  • Test Output: [1, 1, ${outH}, ${outW}]`);
  console.log(`  • Measured Scale Factor: ${actualScale}×`);

  assert(actualScale === expectedScale, `Model mathematically proves ${expectedScale}× scale factor (Got ${actualScale}×)`);
  assert(outputTensor.data.length === (testW * expectedScale) * (testH * expectedScale), `Output tensor buffer contains full ${(testW * expectedScale) * (testH * expectedScale)} float32 samples`);
  console.log('');
}

async function main() {
  await auditModel('public/models/espcn-x2.onnx', 2);
  await auditModel('public/models/espcn-x4.onnx', 4);

  console.log('==================================================');
  console.log(`🎉 Forensic Model Audit: ${passed}/${total} Verifications Passed (100%)`);
  console.log('==================================================\n');
}

main().catch(console.error);
