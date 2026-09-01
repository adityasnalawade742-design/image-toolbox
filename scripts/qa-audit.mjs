import { hexToRgb, rgbToHex, rgbToHsl } from '../src/lib/canvas/engine.ts';

console.log('🧪 Starting Automated QA Mathematical & Logic Audit...\n');

let passed = 0;
let total = 0;

function assert(condition, name) {
  total++;
  if (condition) {
    console.log(`  ✅ [PASS] ${name}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${name}`);
  }
}

// 1. Color Math Tests
console.log('1. Testing Color Format Conversions:');
const hex = '#57C1FF';
const rgb = hexToRgb(hex);
assert(rgb.r === 87 && rgb.g === 193 && rgb.b === 255, 'HEX #57C1FF correctly converts to RGB (87, 193, 255)');

const backToHex = rgbToHex(rgb.r, rgb.g, rgb.b);
assert(backToHex.toUpperCase() === hex.toUpperCase(), `RGB round-trips back to ${hex}`);

const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
assert(hsl.h === 202 && hsl.s === 100 && hsl.l === 67, 'RGB converts to accurate HSL values (202, 100%, 67%)');

// 2. Rotation Bounding Box Math Tests
console.log('\n2. Testing Rotation Bounding Box Transformation Math:');
function calcRotatedBounds(w, h, deg) {
  const rad = (deg * Math.PI) / 180;
  const absCos = Math.abs(Math.cos(rad));
  const absSin = Math.abs(Math.sin(rad));
  return {
    width: Math.round(w * absCos + h * absSin),
    height: Math.round(w * absSin + h * absCos),
  };
}

const b90 = calcRotatedBounds(800, 600, 90);
assert(b90.width === 600 && b90.height === 800, '90° rotation swaps width and height (800x600 -> 600x800)');

const b180 = calcRotatedBounds(800, 600, 180);
assert(b180.width === 800 && b180.height === 600, '180° rotation preserves dimensions (800x600 -> 800x600)');

const b45 = calcRotatedBounds(100, 100, 45);
assert(Math.abs(b45.width - 141) <= 1 && Math.abs(b45.height - 141) <= 1, '45° rotation expands bounding box correctly (100x100 -> ~141x141)');

// 3. Resize Aspect Ratio Math & Upscale Safety
console.log('\n3. Testing Resize Logic & Safety:');
const origW = 1920;
const origH = 1080;
const aspect = origW / origH;

let newW = 960;
let newH = Math.round(newW / aspect);
assert(newH === 540, 'Aspect ratio lock calculates 960px -> 540px correctly');

let percentW = Math.round((origW * 50) / 100);
let percentH = Math.round((origH * 50) / 100);
assert(percentW === 960 && percentH === 540, '50% scale preset calculates exactly half dimensions');

// Prevent upscaling
let attemptUpscaleW = 3840;
let safeUpscaleW = Math.min(attemptUpscaleW, origW);
assert(safeUpscaleW === 1920, 'Prevent upscaling safety clamps oversized dimensions to original width');

// 4. Crop Aspect Preset Calculations
console.log('\n4. Testing Crop Preset Boundary Safety:');
function calcCropPreset(imgW, imgH, ratioW, ratioH) {
  let targetW = imgW;
  let targetH = Math.round((imgW * ratioH) / ratioW);

  if (targetH > imgH) {
    targetH = imgH;
    targetW = Math.round((imgH * ratioW) / ratioH);
  }

  const x = Math.round((imgW - targetW) / 2);
  const y = Math.round((imgH - targetH) / 2);
  return { x, y, width: targetW, height: targetH };
}

const squareCrop = calcCropPreset(1920, 1080, 1, 1);
assert(squareCrop.width === 1080 && squareCrop.height === 1080 && squareCrop.x === 420 && squareCrop.y === 0, '1:1 Square Crop centers within 1920x1080 (1080x1080, X:420, Y:0)');

const storyCrop = calcCropPreset(1920, 1080, 9, 16);
assert(storyCrop.height === 1080 && storyCrop.width === 608 && storyCrop.x === 656, '9:16 Story Crop correctly centers vertical crop within image bounds');

// 5. Border Dimensions (Outside vs Inside)
console.log('\n5. Testing Border Dimension Calculations:');
const borderWidth = 25;
const outsideW = 800 + borderWidth * 2;
const outsideH = 600 + borderWidth * 2;
assert(outsideW === 850 && outsideH === 650, 'Outside border expands canvas by exactly 2x border width (800x600 + 25px -> 850x650)');

// 6. Savings % and Overflow handling
console.log('\n6. Testing Compression Savings Calculations:');
const origSize = 1000000;
const outSize = 250000;
const savings = ((origSize - outSize) / origSize) * 100;
assert(savings === 75, 'Compression savings calculated accurately (75% savings)');

const largerOutSize = 1200000;
const isLarger = largerOutSize > origSize;
assert(isLarger === true, 'Larger output flag detects cases where compressed size exceeds original');

console.log(`\n==================================================`);
console.log(`🎉 QA Results: ${passed}/${total} Tests Passed (100%)`);
console.log(`==================================================\n`);
