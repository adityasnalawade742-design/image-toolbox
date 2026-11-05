/**
 * Edit a PDF's document properties. The document information and the XMP metadata are kept in step, because
 * readers (and PDF/A checks) use either; everything else in the XMP (PDF/A identity, history, extensions) is kept.
 */
import { PDFHexString, PDFName, PDFRawStream, PDFStream, decodePDFRawStream } from 'pdf-lib';
import { dropUnreachable, loadPdf } from './pageOps';

export interface MetadataFields {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
  producer: string;
}

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const iso = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, 'Z');

// Properties this tool writes: removed from the old XMP (element or attribute form) and written afresh
const WRITTEN = ['dc:title', 'dc:creator', 'dc:description', 'dc:subject', 'pdf:Keywords', 'pdf:Producer', 'xmp:CreatorTool', 'xmp:ModifyDate', 'xmp:MetadataDate'];

export function updateXmp(old: string | null, m: MetadataFields, now: Date): string {
  const props: string[] = [];
  if (m.title) props.push(`<dc:title><rdf:Alt><rdf:li xml:lang="x-default">${xml(m.title)}</rdf:li></rdf:Alt></dc:title>`);
  if (m.author) props.push(`<dc:creator><rdf:Seq><rdf:li>${xml(m.author)}</rdf:li></rdf:Seq></dc:creator>`);
  if (m.subject) props.push(`<dc:description><rdf:Alt><rdf:li xml:lang="x-default">${xml(m.subject)}</rdf:li></rdf:Alt></dc:description>`);
  const words = m.keywords.split(/[,;]/).map((k) => k.trim()).filter(Boolean);
  if (words.length) props.push(`<dc:subject><rdf:Bag>${words.map((k) => `<rdf:li>${xml(k)}</rdf:li>`).join('')}</rdf:Bag></dc:subject>`);
  if (m.keywords) props.push(`<pdf:Keywords>${xml(m.keywords)}</pdf:Keywords>`);
  if (m.producer) props.push(`<pdf:Producer>${xml(m.producer)}</pdf:Producer>`);
  if (m.creator) props.push(`<xmp:CreatorTool>${xml(m.creator)}</xmp:CreatorTool>`);
  props.push(`<xmp:ModifyDate>${iso(now)}</xmp:ModifyDate>`, `<xmp:MetadataDate>${iso(now)}</xmp:MetadataDate>`);
  const block =
    '<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:pdf="http://ns.adobe.com/pdf/1.3/" xmlns:xmp="http://ns.adobe.com/xap/1.0/">' +
    props.join('') +
    '</rdf:Description>';
  if (old && /<\/rdf:RDF>/.test(old)) {
    let x = old;
    for (const p of WRITTEN) {
      const q = p.replace(':', '\\:');
      x = x.replace(new RegExp(`<${q}\\b[^>]*/>`, 'g'), '').replace(new RegExp(`<${q}\\b[\\s\\S]*?</${q}>`, 'g'), '').replace(new RegExp(`\\s${q}="[^"]*"`, 'g'), '');
    }
    return x.replace('</rdf:RDF>', block + '</rdf:RDF>');
  }
  return (
    '<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
    '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">' +
    block +
    '</rdf:RDF></x:xmpmeta>\n<?xpacket end="w"?>'
  );
}

/** The XMP packet's text, if the file has one */
function readXmp(doc: Awaited<ReturnType<typeof loadPdf>>): string | null {
  const s = doc.context.lookup(doc.catalog.get(PDFName.of('Metadata')));
  if (!(s instanceof PDFStream)) return null;
  try {
    const raw = s instanceof PDFRawStream ? decodePDFRawStream(s).decode() : s.getContents();
    return new TextDecoder().decode(raw);
  } catch {
    return null;
  }
}

export async function writeMetadata(bytes: Uint8Array | ArrayBuffer, m: MetadataFields, now = new Date()): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  // getInfoDict is private in pdf-lib's types but is the document information dictionary
  const info = (doc as unknown as { getInfoDict(): import('pdf-lib').PDFDict }).getInfoDict();
  const set = (value: string, apply: (v: string) => void, key: string) => {
    if (value.trim()) apply(value.trim());
    else info.delete(PDFName.of(key));
  };
  set(m.title, (v) => doc.setTitle(v), 'Title');
  set(m.author, (v) => doc.setAuthor(v), 'Author');
  set(m.subject, (v) => doc.setSubject(v), 'Subject');
  // One text string as typed (pdf-lib's setKeywords joins a list with spaces, losing the commas)
  set(m.keywords, (v) => info.set(PDFName.of('Keywords'), PDFHexString.fromText(v)), 'Keywords');
  set(m.creator, (v) => doc.setCreator(v), 'Creator');
  set(m.producer, (v) => doc.setProducer(v), 'Producer');
  doc.setModificationDate(now);
  const trimmed = { title: m.title.trim(), author: m.author.trim(), subject: m.subject.trim(), keywords: m.keywords.trim(), creator: m.creator.trim(), producer: m.producer.trim() };
  // XMP stays uncompressed, as PDF/A requires
  const packet = new TextEncoder().encode(updateXmp(readXmp(doc), trimmed, now));
  const stream = doc.context.stream(packet, { Type: 'Metadata', Subtype: 'XML' });
  doc.catalog.set(PDFName.of('Metadata'), doc.context.register(stream));
  dropUnreachable(doc);
  return doc.save({ updateFieldAppearances: false });
}

