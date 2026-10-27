// Copies the background remover's AI models and runtimes into dist/models, so the site never loads them from
// Hugging Face, IMG.LY or jsDelivr. Downloads are pinned in src/lib/ai/modelAssets.json, checked against their
// SHA-256 and kept in .cache/models (gitignored), so later builds work offline.
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const assets = JSON.parse(fs.readFileSync(path.resolve('src/lib/ai/modelAssets.json'), 'utf8'));
const CACHE = path.resolve('.cache/models');
const OUT = path.resolve('dist/models');
// Cloudflare's per-file limit for static assets
const LIMIT = 25 * 1024 * 1024;

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

/** The file at url whose SHA-256 is hash, from the cache or downloaded once */
async function pinned(url, hash) {
  const file = path.join(CACHE, hash);
  if (fs.existsSync(file)) {
    const buf = fs.readFileSync(file);
    if (sha256(buf) === hash) return buf;
  }
  // A few tries: one network hiccup shouldn't fail a build (files are cached after the first success)
  let buf;
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`[models] ${res.status} downloading ${url}`);
      buf = Buffer.from(await res.arrayBuffer());
      break;
    } catch (err) {
      if (attempt >= 3) throw err;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  if (sha256(buf) !== hash) throw new Error(`[models] Checksum mismatch for ${url}`);
  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(file, buf);
  return buf;
}

function put(rel, buf) {
  if (buf.length > LIMIT) throw new Error(`[models] ${rel} is ${(buf.length / 1048576).toFixed(1)} MiB, over Cloudflare's 25 MiB limit`);
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buf);
}

/** Run jobs a few at a time */
async function pool(jobs, size = 6) {
  const queue = [...jobs];
  await Promise.all(Array.from({ length: size }, async () => {
    while (queue.length) await queue.shift()();
  }));
}

export async function selfHostModels() {
  fs.rmSync(OUT, { recursive: true, force: true });
  let bytes = 0;
  const count = (buf) => (bytes += buf.length, buf);

  // MODNet ("Fast" model) for transformers.js, at the pinned revision
  const { modnet } = assets;
  const modnetDir = `modnet/${modnet.revision.slice(0, 12)}`;
  await pool(Object.entries(modnet.files).map(([file, hash]) => async () => {
    put(`${modnetDir}/${file}`, count(await pinned(`https://huggingface.co/${modnet.repo}/resolve/${modnet.revision}/${file}`, hash)));
  }));

  // IMG.LY ISNet ("Best quality" model): resources.json plus the chunks of the parts we use
  const { imgly } = assets;
  const imglyBase = `https://staticimgly.com/${imgly.package}/${imgly.version}/dist/`;
  const resources = JSON.parse(await pinned(`${imglyBase}resources.json`, imgly.resourcesSha256));
  const kept = Object.fromEntries(imgly.resources.map((key) => {
    if (!resources[key]) throw new Error(`[models] ${key} is not in IMG.LY's resources.json`);
    return [key, resources[key]];
  }));
  await pool(Object.values(kept).flatMap((r) => r.chunks.map((chunk) => async () => {
    put(`imgly/${imgly.version}/${chunk.name}`, count(await pinned(imglyBase + chunk.name, chunk.hash)));
  })));
  put(`imgly/${imgly.version}/resources.json`, Buffer.from(JSON.stringify(kept)));

  // ONNX Runtime for transformers.js: the plain WebAssembly build (MODNet runs on the CPU), from the exact
  // version transformers.js depends on
  const wanted = JSON.parse(fs.readFileSync(path.resolve('node_modules/@huggingface/transformers/package.json'), 'utf8')).dependencies['onnxruntime-web'];
  const ortDir = ['node_modules/@huggingface/transformers/node_modules/onnxruntime-web', 'node_modules/onnxruntime-web']
    .map((d) => path.resolve(d))
    .find((d) => fs.existsSync(d) && JSON.parse(fs.readFileSync(path.join(d, 'package.json'), 'utf8')).version === wanted);
  if (!ortDir) throw new Error(`[models] onnxruntime-web ${wanted} (needed by transformers.js) is not installed`);
  for (const file of assets.ort.files) put(`ort/${wanted}/${file}`, count(fs.readFileSync(path.join(ortDir, 'dist', file))));

  // Tesseract OCR (Image to Text): the worker, the LSTM engine builds (the worker picks one for the browser) and the
  // fast language data for the site's languages
  const { ocr } = assets;
  const tjsVersion = JSON.parse(fs.readFileSync(path.resolve('node_modules/tesseract.js/package.json'), 'utf8')).version;
  const coreVersion = JSON.parse(fs.readFileSync(path.resolve('node_modules/tesseract.js-core/package.json'), 'utf8')).version;
  // The page loads these from versioned paths named in modelAssets.json, so they must match what is installed
  if (tjsVersion !== ocr.version || coreVersion !== ocr.coreVersion) {
    throw new Error(`[models] modelAssets.json names tesseract.js ${ocr.version} / core ${ocr.coreVersion}, but ${tjsVersion} / ${coreVersion} are installed`);
  }
  put(`ocr/${tjsVersion}/worker.min.js`, count(fs.readFileSync(path.resolve('node_modules/tesseract.js/dist/worker.min.js'))));
  for (const file of ocr.coreFiles) put(`ocr/core-${coreVersion}/${file}`, count(fs.readFileSync(path.resolve('node_modules/tesseract.js-core', file))));
  const td = ocr.tessdata;
  await pool(Object.entries(td.langs).map(([lang, hash]) => async () => {
    put(`ocr/tessdata/${td.commit.slice(0, 12)}/${lang}.traineddata`, count(await pinned(`https://raw.githubusercontent.com/${td.repo}/${td.commit}/${lang}.traineddata`, hash)));
  }));

  put('THIRD-PARTY.txt', Buffer.from(
    [
      'AI models and runtimes served with this site:',
      `- MODNet, ${modnet.repo} on Hugging Face at revision ${modnet.revision}: ${modnet.license} (https://www.apache.org/licenses/LICENSE-2.0)`,
      `- IMG.LY background removal data ${imgly.version} (${imgly.package}): ${imgly.license} (https://www.gnu.org/licenses/agpl-3.0.html)`,
      `- ONNX Runtime Web ${wanted}: MIT (https://github.com/microsoft/onnxruntime/blob/main/LICENSE)`,
      `- Tesseract.js ${tjsVersion} and tesseract.js-core ${coreVersion}: Apache-2.0 (https://www.apache.org/licenses/LICENSE-2.0)`,
      `- Tesseract fast language data (${td.repo} at ${td.commit}): ${td.license}`,
      '',
    ].join('\n')
  ));
  console.log(`[post-build] Self-hosted AI models: ${(bytes / 1048576).toFixed(0)} MiB in dist/models`);
}
