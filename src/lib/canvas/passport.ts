/** Geometry for the passport photo maker: the crop window and the print-sheet layout. Pure, so it can be tested. */

export const mmToPx = (mm: number, dpi = 300) => Math.round((mm / 25.4) * dpi);

export interface Crop {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * The crop window, in source pixels, for a photo of the given aspect ratio (width / height).
 * zoom 1 is the largest window that fits; cx, cy (0–1) place its centre and are clamped so it stays inside the image.
 */
export function computeCrop(imgW: number, imgH: number, aspect: number, zoom: number, cx: number, cy: number): Crop {
  let w = imgW;
  let h = w / aspect;
  if (h > imgH) {
    h = imgH;
    w = h * aspect;
  }
  const z = Math.max(1, zoom);
  w /= z;
  h /= z;
  const x = Math.max(0, Math.min(imgW - w, cx * imgW - w / 2));
  const y = Math.max(0, Math.min(imgH - h, cy * imgH - h / 2));
  return { x, y, w, h };
}

/** The centre (0–1) that a clamped crop actually ends up at, so sliders reflect the real position */
export const cropCentre = (c: Crop, imgW: number, imgH: number) => ({ cx: (c.x + c.w / 2) / imgW, cy: (c.y + c.h / 2) / imgH });

export interface SheetLayout {
  cols: number;
  rows: number;
  /** Top-left of each photo, in mm from the paper's top-left */
  slots: { x: number; y: number }[];
}

/** As many photos as fit on the paper, centred, with a gap between them and a margin around the edge */
export function sheetLayout(paperW: number, paperH: number, photoW: number, photoH: number, gap = 2, margin = 5): SheetLayout {
  const cols = Math.max(0, Math.floor((paperW - 2 * margin + gap) / (photoW + gap)));
  const rows = Math.max(0, Math.floor((paperH - 2 * margin + gap) / (photoH + gap)));
  const usedW = cols * photoW + Math.max(0, cols - 1) * gap;
  const usedH = rows * photoH + Math.max(0, rows - 1) * gap;
  const left = (paperW - usedW) / 2;
  const top = (paperH - usedH) / 2;
  const slots: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) slots.push({ x: left + c * (photoW + gap), y: top + r * (photoH + gap) });
  return { cols, rows, slots };
}
