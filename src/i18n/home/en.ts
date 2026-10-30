import type { LocalizedHomeData } from '../types';

export const enHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Every image tool you need, in one place',
    subtitle:
      'Crop, resize, compress, convert, remove backgrounds and clean up photos for free. No sign-up, no watermarks, and your images stay on your device.',
    dropzoneTitle: 'Drop an image to start',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG or iPhone HEIC, up to 50 MB',
  },
  sections: {
    indexTitle: 'All tools',
    indexSubtitle: 'Every tool uses the same workspace: open an image, adjust, download.',
    pillarsTitle: 'How it works',
    faqTitle: 'Questions',
  },
  trustPillars: [
    {
      title: 'One workspace for every job',
      description:
        'Each tool opens the same way, and you can pass your image straight to the next one, for example crop, then compress.',
      icon: 'Layers',
    },
    {
      title: 'Images are never uploaded',
      description:
        'Images are processed by your browser on your own device, so there is no upload wait and no copy on a server. A few document tools, such as Word to PDF, need our server: they are marked, and files are deleted right after.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Free, without an account',
      description: 'No sign-up, no watermarks and no daily limits. Single files can be up to 50 MB; bulk tools take up to 50 files.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Edit & Transform',
    'optimize-compress': 'Optimize & Compress',
    'convert-formats': 'Convert Formats',
    'pdf-documents': 'PDF & Documents',
    utilities: 'Inspect & Utilities',
    developer: 'Developer Tools',
  },
  faqs: [
    {
      question: 'Are my images uploaded anywhere?',
      answer:
        'No. Every image tool runs inside your browser, so your images are processed on your own device and never sent to a server. The background remover downloads its AI model once, then also works on-device. A few document tools (Word, Excel and PowerPoint to PDF, PDF to Word, Compress, Protect, Unlock, OCR, PDF/A and Repair PDF) need our server: they are marked “Uses our server”, and your file is deleted as soon as the result is sent back.',
    },
    {
      question: 'Is it really free?',
      answer: 'Yes. All tools are free to use without an account, and nothing is watermarked.',
    },
    {
      question: 'How large can my images be?',
      answer:
        'Single images can be up to 50 MB. The bulk compressor and bulk resizer accept up to 50 images at once, each up to 50 MB. Very large photos may be slow on older phones.',
    },
    {
      question: 'Which formats can I open and save?',
      answer:
        'You can open JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, TIFF, SVG and iPhone HEIC photos. You can save as JPG, PNG, WebP or AVIF, depending on the tool.',
    },
    {
      question: 'Does it work on my phone?',
      answer:
        'Yes. The tools work in current mobile browsers on iPhone and Android, including iPhone HEIC photos. You can also install the site as an app. After your first visit most tools work offline; AVIF export and background removal need to be used once while online.',
    },
    {
      question: 'Can I use one tool after another?',
      answer:
        'Yes. After editing, choose a next step such as Compress or Resize and your image opens in that tool without saving and re-uploading it.',
    },
  ],
};
