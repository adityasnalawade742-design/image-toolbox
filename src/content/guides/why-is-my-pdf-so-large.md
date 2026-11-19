---
title: 'Why is my PDF so large? And how to make it smaller'
description: 'The five usual reasons a PDF is bigger than it should be, and how to shrink it without making the text blurry or unsearchable.'
published: 2026-11-19
tools: [compress-pdf, split-pdf, pdf-attachments, ocr-pdf]
---

A ten-page report should be a few hundred kilobytes. When it's 20 MB and your email bounces it, the cause is almost always
one of five things, and only one of them is the text. Text is tiny: a whole page of it takes a few kilobytes.

## 1. Photos at full camera resolution

This is the most common cause by far. When you put a photo into a document, the PDF usually keeps the whole original, even
if it appears the size of a postage stamp on the page. A modern phone photo is 12 megapixels or more and 2 to 5 MB as a
JPEG, so a handful of them make a large PDF.

In one of our tests, a sheet of four photos printed to PDF came out at **6.2 MB**. Each photo was stored at around
500 dpi, far more detail than a screen or a printer uses at that size. Reduced to 150 dpi, enough for screens and ordinary
printing, the same PDF was **298 KB**, 95% smaller, and looked practically the same at normal zoom.

**Fix:** [Compress PDF](/compress-pdf) lowers the resolution of pictures to what the page needs and saves them as JPEG. Text,
lines and drawings are not touched, so they stay sharp and selectable.

## 2. Scanned pages

A scanned page is not text. It is a photo of the page, so every page carries the weight of a picture: a page scanned in
colour at 300 dpi is easily 1 MB or more, and a 30-page scan can be 30 MB.

**Fix:** compress it. Our test scan went from 1.3 MB to 285 KB with the text still easy to read. If the pages are black
text on white paper, also turn on **Black and white (grey)** in Compress PDF: colour adds size and nothing else to a
page of plain text. To make a scan searchable as well, run [OCR PDF](/ocr-pdf) on it.

Next time you scan, choose 300 dpi and greyscale for text documents. That is plenty for reading and printing, and far
smaller than colour at 600 dpi.

## 3. Fonts

A PDF carries the fonts it uses so it looks the same on every computer. Usually only the letters actually used are
embedded, which costs little. But some programs embed whole fonts, and a complete font for Chinese, Japanese or Korean can
add several megabytes on its own.

**Fix:** compressing the PDF keeps only the parts of each font the document uses. Removing fonts altogether is not a good
idea: the text may then show in a different font, or not at all, on someone else's computer.

## 4. Attachments, duplicates and leftovers

A PDF can hold more than its pages:

- **Attached files.** A PDF can carry other files inside it, like an email: spreadsheets, earlier versions, source images.
  They don't show on the page, so they are easy to miss. [PDF Attachments](/pdf-attachments) lists them and removes the
  ones you don't need.
- **The same image many times.** Some programs store a logo or letterhead again on every page instead of once. Compress
  PDF finds repeated images and keeps a single copy.
- **Earlier versions.** When a PDF is edited and saved quickly, many programs add the changes to the end of the file and
  keep the old version of each changed part inside it. Rewriting the file, which compression does, leaves the old
  versions out.

## 5. Complex drawings

Maps, plans and charts drawn with millions of points or lines are big for a good reason: every line is real detail.
Compression helps little here, because there are no pictures to reduce. Splitting the file into parts, or exporting the
drawing at a simpler level of detail from the program that made it, works better.

## Which setting to use

Compress PDF has three levels. All of them keep text sharp; they differ in how much detail pictures keep:

| Setting | Pictures kept at | Use it for |
|---|---|---|
| Smallest | 96 dpi | Email, reading on screens |
| Balanced (default) | 150 dpi | Most documents, and ordinary printing |
| High quality | 220 dpi | Photos that will be printed large or looked at closely |

Custom lets you set the resolution and the picture quality yourself. If a setting doesn't make the file smaller, the tool
gives you back your original rather than a larger file.

## Getting under an email limit

Gmail accepts attachments up to 25 MB and Outlook up to 20 MB; some company mail servers allow less, often 10 MB. If
compressing isn't enough:

1. Try the **Smallest** setting, with **Black and white (grey)** if colour doesn't matter.
2. Use [Split PDF](/split-pdf) to send the document in two or three parts.
3. For very large files, share a link from a cloud drive instead of attaching the file.

## What to avoid

- **Turning the PDF into images and back.** Converting each page to a JPG and then back to PDF can make it smaller, but the
  text stops being text: it can no longer be searched, selected or read aloud by a screen reader.
- **Converting to grey for size alone, with the wrong tool.** [PDF to Grayscale](/pdf-to-grayscale) is made for printing: it
  keeps pictures at full resolution, so the file may not get much smaller. For a smaller file, use Compress PDF with the
  black and white option.
- **Compressing the same file again and again.** Each pass at a lower setting loses more detail in the pictures. Start from
  the original and pick the setting you need.
