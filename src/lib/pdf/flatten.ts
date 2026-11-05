/**
 * Flatten a PDF: form fields and comments become part of the page, drawn exactly as their saved appearance shows
 * them, and can no longer be edited. Follows the PDF specification's rule for placing an appearance (12.5.5):
 * the appearance box, turned by its own matrix, is fitted onto the annotation rectangle.
 */
import {
  PDFArray,
  PDFDict,
  PDFName,
  PDFRef,
  PDFStream,
  PDFTextField,
  StandardFonts,
  concatTransformationMatrix,
  drawObject,
  popGraphicsState,
  pushGraphicsState,
  type PDFDocument,
} from 'pdf-lib';
import { dropUnreachable, loadPdf } from './pageOps';
import { annotations, isolateContent, num, rectOf, removeAnnotations } from './pageContent';

export interface FlattenOptions {
  forms: boolean;
  comments: boolean;
}

export interface FlattenResult {
  bytes: Uint8Array;
  fields: number;
  comments: number;
  /** Items left as they were because they have no saved appearance to draw */
  kept: number;
}

const HIDDEN = 2;
const NO_VIEW = 32;
// Kept as they are: links still work after flattening, popups are only the open note window
const SKIP = new Set(['Link', 'Popup']);

/** The appearance stream a viewer shows for this annotation now (the right state for check boxes) */
function normalAppearance(doc: PDFDocument, annot: PDFDict): { ref: PDFRef; stream: PDFStream } | null {
  const ap = doc.context.lookup(annot.get(PDFName.of('AP')));
  if (!(ap instanceof PDFDict)) return null;
  let n = ap.get(PDFName.of('N'));
  const resolved = doc.context.lookup(n);
  if (resolved instanceof PDFDict && !(resolved instanceof PDFStream)) {
    const state = annot.get(PDFName.of('AS'));
    n = state instanceof PDFName ? resolved.get(state) : undefined;
  }
  if (!(n instanceof PDFRef)) return null;
  const stream = doc.context.lookup(n);
  return stream instanceof PDFStream ? { ref: n, stream } : null;
}

/** The transform that puts an appearance's box onto the annotation rectangle */
export function appearanceMatrix(bbox: [number, number, number, number], matrix: number[], rect: [number, number, number, number]) {
  const [a, b, c, d, e, f] = matrix;
  const pts = [[bbox[0], bbox[1]], [bbox[2], bbox[1]], [bbox[0], bbox[3]], [bbox[2], bbox[3]]].map(([x, y]) => [a * x + c * y + e, b * x + d * y + f]);
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const bx = Math.min(...xs), by = Math.min(...ys), bw = Math.max(...xs) - bx, bh = Math.max(...ys) - by;
  const sx = bw ? (rect[2] - rect[0]) / bw : 1, sy = bh ? (rect[3] - rect[1]) / bh : 1;
  return [sx, 0, 0, sy, rect[0] - bx * sx, rect[1] - by * sy];
}

/** How many form fields and comments a file has (what flattening would draw into the pages) */
export async function countFlattenable(bytes: Uint8Array | ArrayBuffer): Promise<{ fields: number; comments: number }> {
  const doc = await loadPdf(bytes);
  let fields = 0, comments = 0;
  for (const page of doc.getPages())
    for (const { dict } of annotations(page)) {
      const subtype = (dict.get(PDFName.of('Subtype')) as PDFName | undefined)?.decodeText?.() ?? '';
      if (subtype === 'Widget') fields++;
      else if (!SKIP.has(subtype)) comments++;
    }
  return { fields, comments };
}

export async function flattenPdf(bytes: Uint8Array | ArrayBuffer, o: FlattenOptions): Promise<FlattenResult> {
  const doc = await loadPdf(bytes);
  const ctx = doc.context;
  let fields = 0, comments = 0, kept = 0;

  if (o.forms) {
    // Fields without a saved look (or marked to be redrawn) get one drawn now where the standard font can write them
    const acro = ctx.lookup(doc.catalog.get(PDFName.of('AcroForm')));
    const redraw = acro instanceof PDFDict && String(acro.get(PDFName.of('NeedAppearances'))) === 'true';
    try {
      const form = doc.getForm();
      const font = await doc.embedFont(StandardFonts.Helvetica);
      for (const field of form.getFields()) {
        const missing = field.acroField.getWidgets().some((w) => !normalAppearance(doc, w.dict));
        if (!missing && !redraw) continue;
        try {
          if (field instanceof PDFTextField) field.defaultUpdateAppearances(font);
          else (field as unknown as { defaultUpdateAppearances?: (f?: unknown) => void }).defaultUpdateAppearances?.(font);
        } catch {
          // Text the standard font can't write keeps its field; counted below
        }
      }
    } catch {
      // A broken form dictionary: widgets with appearances are still flattened below
    }
  }

  let formKept = false;
  for (const page of doc.getPages()) {
    const remove = new Set<PDFDict>();
    const ops = [];
    for (const { dict } of annotations(page)) {
      const subtype = (dict.get(PDFName.of('Subtype')) as PDFName | undefined)?.decodeText?.() ?? '';
      if (SKIP.has(subtype)) {
        if (subtype === 'Popup' && o.comments) remove.add(dict);
        continue;
      }
      const isField = subtype === 'Widget';
      if (isField ? !o.forms : !o.comments) continue;
      const flags = num(dict.get(PDFName.of('F')));
      if (flags & (HIDDEN | NO_VIEW)) {
        remove.add(dict);
        continue;
      }
      const ap = normalAppearance(doc, dict);
      const rect = rectOf(doc, dict.get(PDFName.of('Rect')));
      if (!ap || !rect) {
        kept++;
        if (isField) formKept = true;
        continue;
      }
      const bbox = rectOf(doc, ap.stream.dict.get(PDFName.of('BBox'))) ?? [0, 0, rect[2] - rect[0], rect[3] - rect[1]];
      const mArr = ctx.lookup(ap.stream.dict.get(PDFName.of('Matrix')));
      const matrix = mArr instanceof PDFArray && mArr.size() === 6 ? [0, 1, 2, 3, 4, 5].map((i) => num(ctx.lookup(mArr.get(i)))) : [1, 0, 0, 1, 0, 0];
      // A form XObject needs these entries; some writers leave them out of appearance streams
      ap.stream.dict.set(PDFName.of('Type'), PDFName.of('XObject'));
      ap.stream.dict.set(PDFName.of('Subtype'), PDFName.of('Form'));
      if (!ap.stream.dict.get(PDFName.of('BBox'))) ap.stream.dict.set(PDFName.of('BBox'), ctx.obj(bbox));
      const name = page.node.newXObject('Flat', ap.ref);
      const [a, b, c, d, e, f] = appearanceMatrix(bbox, matrix, rect);
      ops.push(pushGraphicsState(), concatTransformationMatrix(a, b, c, d, e, f), drawObject(name), popGraphicsState());
      remove.add(dict);
      if (isField) fields++;
      else comments++;
    }
    if (ops.length) {
      isolateContent(doc, page);
      page.pushOperators(...ops);
    }
    // A comment's popup goes with it
    for (const { dict } of annotations(page)) {
      const parent = ctx.lookup(dict.get(PDFName.of('Parent')));
      if (parent instanceof PDFDict && remove.has(parent)) remove.add(dict);
    }
    removeAnnotations(page, remove);
  }

  // With every field drawn, the form itself goes; fields that couldn't be drawn keep the form working
  if (o.forms && fields && !formKept) doc.catalog.delete(PDFName.of('AcroForm'));
  dropUnreachable(doc);
  return { bytes: await doc.save({ updateFieldAppearances: false }), fields, comments, kept };
}
