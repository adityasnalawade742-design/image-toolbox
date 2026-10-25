// Interface strings for the browser PDF tools (merge, split, organize, sign, ...). Other locales translate them.
export const pdfStrings = {
  // Shared
  'ctl.pdf.dropHint': 'A PDF file. It is edited on your device and never uploaded.',
  'ctl.pdf.dropTitleMany': 'Drop PDF files here',
  'ctl.pdf.chooseMany': 'Choose PDFs',
  'ctl.pdf.dropHintMany': 'Two or more PDF files. They are combined on your device and never uploaded.',
  'ctl.pdf.pageN': 'Page {n}',
  'ctl.pdf.pagesCount': '{n} pages',
  'ctl.pdf.working': 'Working…',
  'ctl.pdf.done': 'Done: {name} is downloading.',
  'ctl.pdf.downloadZip': 'Download ZIP',
  'ctl.pdf.selectAll': 'Select all',
  'ctl.pdf.selectNone': 'Clear selection',
  'ctl.pdf.selectedCount': '{n} of {total} pages selected',
  'ctl.pdf.needOne': 'Select at least one page.',
  'ctl.pdf.scope': 'Apply to',
  'ctl.pdf.scopeAll': 'All pages',
  'ctl.pdf.scopeSelected': 'Selected pages',
  'ctl.pdf.scopeRange': 'Pages',
  'ctl.pdf.rangePlaceholder': 'e.g. 1-3, 5',
  'ctl.pdf.moveEarlier': 'Move page {n} earlier',
  'ctl.pdf.moveLater': 'Move page {n} later',
  'ctl.pdf.rotatePage': 'Rotate page {n}',
  'ctl.pdf.deletePage': 'Delete page {n}',
  'ctl.pdf.pageMoved': 'Page {n} moved to position {pos} of {total}',
  'ctl.pdf.pageRotated': 'Page {n} rotated to {deg}°',
  'ctl.pdf.pageDeleted': 'Page {n} deleted',
  'ctl.pdf.previewLabel': 'Preview of page {n}',

  // Merge
  'ctl.mergepdf.files': 'Files, in order',
  'ctl.mergepdf.add': 'Add more PDFs',
  'ctl.mergepdf.needTwo': 'Add at least one more PDF to merge.',
  'ctl.mergepdf.total': 'Total: {n} pages',

  // Split
  'ctl.splitpdf.mode': 'Split by',
  'ctl.splitpdf.modeRanges': 'Ranges',
  'ctl.splitpdf.modeEvery': 'Every N pages',
  'ctl.splitpdf.modeEach': 'Every page',
  'ctl.splitpdf.ranges': 'Page ranges',
  'ctl.splitpdf.rangesHint': 'For example 1-3, 5, 8-. Each range becomes its own PDF.',
  'ctl.splitpdf.every': 'Pages per file',
  'ctl.splitpdf.summary': 'You will get {n} files:',
  'ctl.splitpdf.part': 'File {n}: pages {pages}',
  'ctl.splitpdf.noRanges': 'Enter at least one valid page range.',

  // Organize
  'ctl.organize.hint': 'Use the buttons under each page to move, rotate or delete it. You can also drag pages to reorder them.',
  'ctl.organize.reset': 'Undo all changes',

  // Rotate
  'ctl.rotatepdf.angle': 'Rotate by',
  'ctl.rotatepdf.right': '90° right',
  'ctl.rotatepdf.half': '180°',
  'ctl.rotatepdf.left': '90° left',

  // Page numbers
  'ctl.numbers.position': 'Position',
  'ctl.numbers.format': 'Format',
  'ctl.numbers.start': 'Start at',
  'ctl.numbers.size': 'Text size',
  'ctl.numbers.margin': 'Distance from the edge',
  'ctl.numbers.marginMedium': 'Medium',
  'ctl.numbers.skipFirst': 'Don’t number the first page (cover)',

  // Watermark PDF
  'ctl.pdfwm.size': 'Width on the page',
  'ctl.pdfwm.text': 'Watermark text',
  'ctl.pdfwm.dragHint': 'Drag the watermark on the page, or use the sliders.',

  // Sign
  'ctl.sign.source': 'Signature',
  'ctl.sign.draw': 'Draw',
  'ctl.sign.type': 'Type',
  'ctl.sign.upload': 'Image',
  'ctl.sign.padLabel': 'Signature drawing area. Draw with a mouse, finger or stylus, or choose Type instead.',
  'ctl.sign.drawHint': 'Draw with your mouse, finger or stylus.',
  'ctl.sign.clear': 'Clear',
  'ctl.sign.name': 'Your name',
  'ctl.sign.uploadButton': 'Choose signature image',
  'ctl.sign.removeWhite': 'Make the white background transparent',
  'ctl.sign.ink': 'Ink',
  'ctl.sign.black': 'Black',
  'ctl.sign.blue': 'Blue',
  'ctl.sign.page': 'Page',
  'ctl.sign.size': 'Signature width',
  'ctl.sign.placeHint': 'Drag the signature on the page, or use the sliders.',
  'ctl.sign.needSignature': 'Add a signature first: draw it, type your name or choose an image.',

  // Fill form
  'ctl.form.fields': 'Form fields',
  'ctl.form.none': 'This PDF has no fillable form fields.',
  'ctl.form.flatten': 'Flatten the form, so the answers can’t be changed',
  'ctl.form.readOnly': 'read-only',
  'ctl.form.unsupported': 'Signature and button fields are skipped. Use Sign PDF to add a signature.',
  'ctl.form.choose': 'Choose…',

  // Remove metadata
  'ctl.meta.explain': 'Downloads a copy without the title, author, software and date details stored in the file. The pages themselves are not changed.',
  'ctl.meta.found': 'Found in this PDF',
  'ctl.meta.title': 'Title',
  'ctl.meta.author': 'Author',
  'ctl.meta.subject': 'Subject',
  'ctl.meta.keywords': 'Keywords',
  'ctl.meta.creator': 'Created with',
  'ctl.meta.producer': 'Producer',
  'ctl.meta.created': 'Created',
  'ctl.meta.modified': 'Modified',
  'ctl.meta.xmp': 'XMP metadata',
  'ctl.meta.present': 'Present',
  'ctl.meta.nothing': 'This PDF has no document information to remove.',
  'ctl.meta.removed': 'Removed. The new PDF has no document information.',

  // Crop
  'ctl.croppdf.trim': 'Trim from each side',
  'ctl.croppdf.top': 'Top',
  'ctl.croppdf.right': 'Right',
  'ctl.croppdf.bottom': 'Bottom',
  'ctl.croppdf.left': 'Left',
  'ctl.croppdf.note': 'The trimmed area is hidden, not deleted, so a PDF editor can still restore it.',
} as const;
