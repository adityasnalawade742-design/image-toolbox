// Live-site check: pages, redirects, and real server jobs through tadafile.com (the Worker and the document
// server together). Run after every deploy and every hour from GitHub Actions; exits 1 when anything fails.
//   node scripts/smoke.mjs [base URL]
// Right after a deploy the edge can serve old files for a moment, so a failing check is retried for about a minute.

const BASE = (process.argv[2] || 'https://tadafile.com').replace(/\/$/, '');
const ORIGIN = new URL(BASE).origin;

/** A one-page PDF with a small table, written by hand so the check needs no files or packages */
function samplePdf() {
  const lines = [
    ['Item', 'Qty', 'Price'],
    ['Paper', '4', '12.50'],
    ['Toner', '1', '89.00'],
    ['Pens', '10', '7.25'],
  ];
  const text = lines
    .map((row, i) => row.map((cell, j) => `BT /F1 11 Tf ${72 + j * 120} ${720 - i * 18} Td (${cell}) Tj ET`).join('\n'))
    .join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${text.length} >>\nstream\n${text}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((body, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  pdf += offsets.map((o) => `${String(o).padStart(10, '0')} 00000 n \n`).join('');
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, 'latin1');
}

/** A multipart body with a known length: the Worker refuses uploads without Content-Length */
function multipart(name, data, type) {
  const boundary = `----smoke${Date.now()}`;
  const head = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${name}"\r\nContent-Type: ${type}\r\n\r\n`);
  const tail = Buffer.from(`\r\n--${boundary}--\r\n`);
  return { body: Buffer.concat([head, data, tail]), type: `multipart/form-data; boundary=${boundary}` };
}

async function job(endpoint, query) {
  const { body, type } = multipart('smoke.pdf', samplePdf(), 'application/pdf');
  return fetch(`${BASE}/api/doc/${endpoint}?${query}`, {
    method: 'POST',
    headers: { 'Content-Type': type, 'Content-Length': String(body.length), Origin: ORIGIN },
    body,
    signal: AbortSignal.timeout(120_000),
  });
}

const isZip = (buf) => buf[0] === 0x50 && buf[1] === 0x4b; // DOCX and XLSX are ZIP files
const isPdf = (buf) => buf.subarray(0, 5).toString() === '%PDF-';

const CHECKS = [
  ['home page', async () => {
    const r = await fetch(`${BASE}/`);
    return r.status === 200 && (await r.text()).includes('tadafile') ? null : `status ${r.status}`;
  }],
  ['tool and collection pages', async () => {
    for (const path of ['/compress-image', '/pdf-to-excel', '/pdf-tools', '/ja/merge-pdf']) {
      const r = await fetch(BASE + path);
      if (r.status !== 200) return `${path}: status ${r.status}`;
    }
    return null;
  }],
  ['trailing slash redirects', async () => {
    const r = await fetch(`${BASE}/merge-pdf/`, { redirect: 'manual' });
    return r.status === 301 ? null : `status ${r.status}`;
  }],
  ['server tools are reachable', async () => {
    const r = await fetch(`${BASE}/api/doc/health`, { cache: 'no-store' });
    const body = await r.text();
    return r.status === 200 && body.includes('"ok":true') ? null : `status ${r.status}: ${body.slice(0, 80)}`;
  }],
  ['PDF to Word converts', async () => {
    const r = await job('convert', 'to=docx');
    const buf = Buffer.from(await r.arrayBuffer());
    return r.status === 200 && isZip(buf) ? null : `status ${r.status}: ${buf.subarray(0, 80).toString()}`;
  }],
  ['PDF to Excel converts', async () => {
    const r = await job('convert', 'to=xlsx');
    const buf = Buffer.from(await r.arrayBuffer());
    return r.status === 200 && isZip(buf) ? null : `status ${r.status}: ${buf.subarray(0, 80).toString()}`;
  }],
  ['Compress PDF works', async () => {
    const r = await job('compress', 'preset=ebook');
    const buf = Buffer.from(await r.arrayBuffer());
    return r.status === 200 && isPdf(buf) ? null : `status ${r.status}: ${buf.subarray(0, 80).toString()}`;
  }],
];

let failed = 0;
for (const [name, check] of CHECKS) {
  let problem = 'not run';
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      problem = await check();
    } catch (e) {
      problem = String(e?.message || e);
    }
    if (!problem) break;
    if (attempt < 4) await new Promise((done) => setTimeout(done, 20_000));
  }
  console.log(`${problem ? 'FAIL' : 'ok  '} ${name}${problem ? ` — ${problem}` : ''}`);
  if (problem) failed++;
}
if (failed) {
  console.error(`\n[smoke] ${failed} check(s) failed on ${BASE}. If this follows a deploy, roll back the site or the server.`);
  process.exit(1);
}
console.log(`[smoke] ${BASE}: all ${CHECKS.length} checks passed`);
