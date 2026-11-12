import type { HubTexts } from './types';

export const enHubs: HubTexts = {
  labels: {
    server: 'Uses our server',
    more: 'More collections',
    allTools: 'All {count} tools',
  },
  pages: {
    'pdf-tools': {
      title: 'Free PDF Tools: Merge, Convert, Edit and Sign PDFs',
      description: '57 free PDF tools in one place: merge, split and compress PDFs, convert to and from Word or images, edit, sign and protect them. No sign-up, no watermarks.',
      h1: 'PDF tools',
      intro:
        'Everything for working with PDFs, free and without an account: combine and split files, turn Word, Excel, PowerPoint and images into PDFs and back, edit, fill in, sign and protect them. Most tools run in your browser, so the PDF never leaves your device; the few that need our server are marked, and their files are deleted right after.',
      groups: {
        toPdf: 'Convert to PDF',
        fromPdf: 'Convert from PDF',
        edit: 'Edit and annotate',
        pages: 'Organize pages',
        secure: 'Sign, protect and clean',
        fix: 'Compress, repair and check',
      },
      faqs: [
        { question: 'Are these PDF tools free?', answer: 'Yes. Every tool is free to use without an account, with no watermark and no daily limit.' },
        {
          question: 'Are my PDFs uploaded?',
          answer:
            'Most tools work inside your browser, so the file stays on your device. Tools marked “Uses our server”, such as Word to PDF, Compress PDF and OCR PDF, send the file over an encrypted connection and delete it as soon as the result is sent back.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Free Image Editing Tools: Crop, Resize, Remove Backgrounds',
      description: '42 free photo editing tools in your browser: crop, resize, rotate, remove or change backgrounds, add text and watermarks, and size images for social media.',
      h1: 'Image editing tools',
      intro:
        'Quick edits without installing anything: crop and resize, cut out or replace backgrounds, add text, watermarks and borders, sharpen and fix colours, or size a picture for Instagram, YouTube and other networks. Every tool runs in your browser, so your photos are never uploaded, and they keep their format where possible.',
      groups: {
        basics: 'Crop, resize and rotate',
        background: 'Backgrounds and cutouts',
        text: 'Text, watermarks and marks',
        enhance: 'Fix and enhance',
        social: 'Social media sizes',
        combine: 'Combine and split',
      },
      faqs: [
        { question: 'Do I need to install an app?', answer: 'No. The tools work in any current browser on a computer or phone, and your photos stay on your device.' },
        {
          question: 'Will my photo lose quality?',
          answer: 'Edits are made on the full-size photo, which is saved in its original format where possible. JPG and WebP files are saved again at a high quality.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Free Image Converter: HEIC, JPG, PNG, WebP, AVIF and More',
      description: '26 free image converters in your browser: HEIC to JPG, JPG to PNG, WebP and AVIF, GIF, BMP, TIFF and SVG to everyday formats, several files at once.',
      h1: 'Image format converters',
      intro:
        'Change a picture to the format you need: iPhone HEIC photos to JPG, PNG to JPG or WebP for smaller files, AVIF for the web, or GIF, BMP, TIFF and SVG to everyday formats. Most converters take several files at once, and all of them run in your browser, so nothing is uploaded. Not sure which to use? The universal converter opens almost any image and saves it as JPG, PNG, WebP or AVIF.',
      groups: {
        any: 'Any format',
        heic: 'iPhone photos (HEIC)',
        jpgPng: 'JPG and PNG',
        web: 'WebP and AVIF',
        other: 'GIF, BMP, TIFF and SVG',
        pdf: 'To PDF and text',
      },
      faqs: [
        {
          question: 'Which format should I choose?',
          answer: 'JPG for photos that must open everywhere, PNG for screenshots, logos and transparency, and WebP or AVIF for smaller files on websites. HEIC photos from an iPhone are best turned into JPG for sharing.',
        },
        { question: 'Can I convert many images at once?', answer: 'Yes. Drop several files on a converter and they are converted together with the same settings, then downloaded as one ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Free QR Code and Barcode Generator and Scanner',
      description: '15 free tools to make QR codes for links, Wi-Fi, contacts, WhatsApp and payments, create EAN, UPC and ISBN barcodes, and read codes with your camera.',
      h1: 'QR code and barcode tools',
      intro:
        'Make a QR code for a link, Wi-Fi network, contact card, WhatsApp chat or payment, create EAN, UPC, ISBN, Data Matrix and PDF417 barcodes, or make hundreds at once from a list and print them on a sheet. You can also read codes from a photo or your camera. Everything runs in your browser, and there is no sign-up.',
      groups: {
        qr: 'QR codes',
        barcodes: 'Barcodes',
        read: 'Scan and read',
      },
      faqs: [
        { question: 'Do the QR codes expire?', answer: 'No. The content is stored in the code itself, not behind a link of ours, so it works for as long as the printed code can be read.' },
        {
          question: 'Can I use these barcodes on products in shops?',
          answer: 'The barcodes are drawn to the standard, but EAN and UPC numbers for products sold in shops must come from GS1. For your own stock, shelves or events, any number works.',
        },
      ],
    },
    'image-utilities': {
      title: 'Free Image Utilities: EXIF Viewer, Color Picker, DPI and More',
      description: '21 free tools to inspect images: view and remove metadata, pick colours, change DPI, convert pixels to inches or cm, compare photos and copy text.',
      h1: 'Image utilities',
      intro:
        'Small tools for the questions that come up around pictures: what a photo’s metadata reveals and how to remove it, which colours it uses, how big it prints at a given DPI, whether two photos differ, or what text it contains. They all run in your browser, so your images stay on your device.',
      groups: {
        inspect: 'Inspect photos',
        colour: 'Colours',
        size: 'Sizes, DPI and print',
        text: 'Text and hidden messages',
      },
      faqs: [
        {
          question: 'Can I remove the location from a photo?',
          answer: 'Yes. Remove Image Metadata deletes the GPS location, camera details and other EXIF data, and EXIF Viewer shows what a photo contains before you share it.',
        },
        {
          question: 'What DPI do I need for printing?',
          answer: '300 DPI is the usual target for photos and documents. DPI only sets the printed size, not the number of pixels: Change Image DPI writes it into the file, and the pixels-to-inches and pixels-to-cm calculators show how large it will print.',
        },
      ],
    },
  },
};
