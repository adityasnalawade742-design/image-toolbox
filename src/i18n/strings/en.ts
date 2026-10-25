import { editStrings } from './en/edit';
import { utilityStrings } from './en/utility';
import { creativeAStrings } from './en/creative-a';
import { creativeBStrings } from './en/creative-b';
import { batchStrings } from './en/batch';
import { bgStrings } from './en/bg';
import { newToolStrings } from './en/new-tools';
import { pdfStrings } from './en/pdf';

// Source of truth for interface text in React islands. Other locales translate these keys;
// keep placeholders like {count} intact. Grouped by prefix so pickStrings() can ship sections.
export const en = {
  // Tool search
  'search.trigger': 'Find a tool',
  'search.dialogLabel': 'Find a tool',
  'search.placeholder': 'Search {count} tools…',
  'search.close': 'Close search',
  'search.results': 'Matching tools',
  'search.noResults': 'No tool matches “{query}”.',
  'search.hint': '↑ ↓ to move · Enter to open · Esc to close',
  'search.count': '{count} tools',

  // Home drop zone
  'home.dropTitle': 'Drop an image to start',
  'home.chooseImage': 'Choose image',
  'home.dropHint': 'JPG, PNG, WebP, AVIF, GIF, SVG or iPhone HEIC, up to 50 MB. You can also paste with Ctrl+V.',
  'home.preparing': 'Opening your image…',
  'home.chooseTool': 'What do you want to do?',
  'home.clear': 'Choose a different image',
  'home.errorNotImage': 'That file isn’t an image. Try a JPG, PNG, WebP or HEIC photo.',
  'home.errorTooLarge': 'That image is larger than 50 MB. Try a smaller file.',
  'home.errorHeic': 'This iPhone photo couldn’t be opened. Try exporting it as JPG first.',
  'home.errorDecode': 'This image couldn’t be opened. The file may be damaged or in an unsupported format.',

  // Shared tool workspace
  'ws.dropTitle': 'Drop an image here',
  'ws.chooseImage': 'Choose image',
  'ws.chooseImages': 'Choose images',
  'ws.dropHint': 'JPG, PNG, WebP and more, up to 50 MB. You can also paste with Ctrl+V.',
  'ws.rendering': 'Updating preview…',
  'ws.previewLabel': 'Preview of your image with the current settings',
  'ws.pickerLabel': 'Color picker on your image',
  'ws.pickerValue': '{hex}, {x}% across, {y}% down',
  'ws.pickerPicked': 'Picked {hex}',
  'ws.pickerHelp': 'Click the image to pick a color. With a keyboard, select the image, move with the arrow keys (hold Shift for bigger steps) and press Enter to pick.',
  'ws.source': 'Source',
  'ws.output': 'Output',
  'ws.replace': 'Replace image',
  'ws.settings': 'Settings',
  'ws.saveAs': 'Save as',
  'ws.outputFormat': 'Output format',
  'ws.fillTransparent': 'Fill transparent areas',
  'ws.quality': 'Quality',
  'ws.qualityLabel': 'Output quality',
  'ws.pngLossless': 'PNG is lossless',
  'ws.download': 'Download {format}',
  'ws.downloadZip': 'Download favicon package (ZIP)',
  'ws.preparing': 'Preparing download…',
  'ws.copy': 'Copy image',
  'ws.copied': 'Copied to clipboard',
  'ws.copiedShort': 'Copied',
  'ws.copyCode': 'Copy code',
  'ws.faviconSnippet': 'HTML for your <head>',
  'ws.next': 'Next step',
  'ws.crashed': 'This tool hit a problem',
  'ws.crashBody': "Something went wrong while processing. Your original file is unchanged. Reload the page to try again.",
  'ws.reload': "Reload",
  'ws.allTools': "All tools",
  'ws.errTooLarge': 'That image is larger than 50 MB. Try a smaller file.',
  'ws.errHeic': 'This iPhone photo couldn’t be opened. Try exporting it as JPG first.',
  'ws.errDecode': 'This image couldn’t be opened. The file may be damaged or in an unsupported format.',
  'ws.errExport': 'The download couldn’t be created. The image may be too large for this browser; try a smaller size or another format.',
  'ws.errCopy': 'Your browser blocked copying the image. Use Download instead.',
  'ws.errFormatFallback': 'Your browser can’t save {wanted}, so this was saved as {actual}.',

  // Language selector
  'lang.label': 'Language',
  'lang.current': 'Current language: {language}',

  // Per-tool control strings ('ctl.*'), one file per tool group
  ...editStrings,
  ...utilityStrings,
  ...creativeAStrings,
  ...creativeBStrings,
  ...batchStrings,
  ...bgStrings,
  ...newToolStrings,
  ...pdfStrings,
} as const;

export type StringKey = keyof typeof en;
