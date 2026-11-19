---
title: 'We tested free file tools: TinyPNG, iLovePDF, remove.bg and TadaFile'
description: 'Image compression, PDF compression and conversion, and background removal, measured on the same public test files. Where each tool did better, with the numbers.'
published: 2026-11-19
tools: [compress-image, compress-pdf, pdf-to-word, pdf-to-excel, word-to-pdf, remove-background]
---

We make TadaFile, so we have a stake in how this comes out. That is why every result below is a measurement rather than an
opinion, the test files are public or described in full, and the places where another tool did better are left in. The
test also found four problems in our own tools; we fixed them, and they are listed at the end.

## The short version

| Task | Compared with | Result |
|---|---|---|
| Compressing photos (JPEG) | TinyPNG | TadaFile's files are smaller at the same quality |
| Compressing graphics and screenshots (PNG) | TinyPNG | About equal |
| Compressing photos saved as PNG | TinyPNG | TinyPNG did better: smaller and sharper |
| Compress PDF | iLovePDF | Equal on photos; on a scan, iLovePDF smaller and TadaFile sharper |
| PDF to Word | iLovePDF | Equal on text and tables; iLovePDF kept reading order slightly better |
| PDF to Excel | iLovePDF | Equal |
| Word to PDF | iLovePDF | Equal; TadaFile embedded every font |
| Background removal | remove.bg | remove.bg more reliable; TadaFile as accurate on 5 of 6 photos, at full size |

## How we tested

- **Default settings, free versions, no account**, the way most people use these sites. We ran the tests on 18 November 2026;
  the sites change, so results may differ later.
- **Test files:** three photos from the Kodak image set that codec developers use to compare encoders, a 3155 × 1963 camera
  photo, a screenshot, a graphic with gradients, and six photos with hand-made reference masks from the
  alphamatting.com benchmark. The PDFs and Word files are documents we wrote for the test: a report, a page of tables, an
  invoice, a two-column article, a sheet of four photos and a scanned page.
- **Quality** is measured with SSIM (structural similarity), which compares the result with the original the way the eye
  judges structure and detail. 1.0 means identical; the closer to 1, the closer it looks.
- **Conversions** were checked by counting the words and table cells that came through, and whether they stayed in the right
  place and order.

## Compressing images

### Photos (JPEG)

Each site chooses its own default trade-off between size and quality, so comparing the default files alone doesn't tell
you which compressor is better:

| Photo (original size) | TinyPNG | TadaFile |
|---|---|---|
| Kodak caps, 768 × 512 (140 KB) | 93 KB, SSIM 0.977 | 49 KB, SSIM 0.956 |
| Kodak portrait, 768 × 512 (168 KB) | 123 KB, SSIM 0.979 | 57 KB, SSIM 0.938 |
| Camera photo, 3155 × 1963 (966 KB) | 265 KB, SSIM 0.944 | 493 KB, SSIM 0.973 |

On the small Kodak photos TadaFile compressed harder; on the large camera photo TinyPNG did. To compare fairly, we encoded
each original with a standard JPEG encoder (libjpeg) at every quality setting, then asked: how large would a standard JPEG
be at the same SSIM as each tool's result? Below zero means smaller than a standard JPEG of the same quality.

| Photo | TinyPNG | TadaFile |
|---|---|---|
| Kodak caps | +3.2% | −10.3% |
| Kodak portrait | +6.3% | −8.8% |
| Camera photo | −7.7% | −30.3% |

At the same quality, TadaFile's JPEGs were 9 to 30% smaller than standard JPEG, and TinyPNG's ranged from 8% smaller to 6%
larger. TadaFile uses MozJPEG, an encoder tuned to squeeze more out of every byte. If you want more detail at the cost of
size, move the Quality slider up.

### Graphics, screenshots and PNG photos

Both tools shrink a PNG by reducing it to a palette of up to 256 colours, which most pictures survive with no visible change.

| Image (original size) | TinyPNG | TadaFile |
|---|---|---|
| Graphic with gradients (62 KB) | 14.8 KB, SSIM 0.9988 | 15.2 KB, SSIM 0.9979 |
| Screenshot (100 KB) | 37.9 KB, SSIM 0.9999 | 37.0 KB, SSIM 0.9998 |
| Photo of parrots saved as PNG (545 KB) | 146 KB, SSIM 0.921 | 161 KB, SSIM 0.908 |

Graphics and screenshots came out about the same. On the photo saved as PNG, TinyPNG's file was 10% smaller and closer to the
original. For photos, saving as JPEG or WebP gives much smaller files than any PNG in either tool.

## Compressing PDFs

iLovePDF's Recommended level against TadaFile's Balanced, the defaults:

| PDF (original size) | iLovePDF | TadaFile |
|---|---|---|
| Sheet of four photos (6.2 MB) | 275 KB (95.7% smaller), SSIM 0.976 | 298 KB (95.3% smaller), SSIM 0.972 |
| Scanned page (1.3 MB) | 210 KB (84.6% smaller), SSIM 0.982 | 285 KB (79.1% smaller), SSIM 0.993 |
| Text report (93 KB) | 65 KB (29.7% smaller), SSIM 0.993 | 66 KB (28.9% smaller), SSIM 0.9999 |

On the photo sheet the two came out within a few percent of each other. On the scan, iLovePDF made the smaller file and
TadaFile the sharper one; if size matters more, TadaFile's Smallest setting goes further. Both kept all the text selectable.

## Converting documents

**PDF to Word.** On four PDFs both tools kept 99 to 100% of the words and rebuilt the same tables. iLovePDF kept the reading
order slightly better on the two-column article (0.99 against 0.97 for TadaFile) and on the invoice (1.0 against 0.87).

**PDF to Excel.** Both put every cell of the invoice's line items in the right place, and the same 89% of cells from a page of
three tables. The misses were the same in both: a heading split over two rows ("Budget" over "Planned" and "Actual") came
out as two rows. iLovePDF puts each table on its own sheet;
TadaFile puts them on one sheet unless you choose "Put each table on its own sheet".

**Word to PDF.** On two documents, one with Japanese and Korean text, both tools kept all the text and the original page
count. TadaFile embedded every font in the PDF; iLovePDF left one of seven out, so that text depends on the reader's
computer having a matching font.

## Removing backgrounds

Six photos, each compared with a hand-made reference mask. The score is the overlap between the tool's cut-out and the
reference: 1.0 is a perfect match.

| Photo | remove.bg | TadaFile, Fast | TadaFile, Best quality |
|---|---|---|---|
| Doll with red hair | 0.980 | 0.982 | 0.950 |
| Doll with blond hair | 0.970 | 0.955 | 0.930 |
| Potted plant | 0.975 | 0.155 | 0.147 |
| Toy rabbit | 0.984 | 0.966 | 0.967 |
| Squash | 0.994 | 0.997 | 0.998 |
| Plush toy | 0.884 | 0.971 | 0.857 |
| **Average** | **0.964** | **0.838** | **0.808** |

remove.bg was the more reliable of the two. TadaFile failed badly on the potted plant, which pulls its average down; on
the other five photos its Fast mode was as accurate as remove.bg or better. Our Best quality mode was not better than Fast
on these photos, which we are looking into.

Two differences matter beyond accuracy. The free download from remove.bg was 447 × 559 pixels for a 640 × 800 photo;
TadaFile keeps the photo's full size. And TadaFile removes the background on your device, so the photo is never uploaded.

## What we fixed because of this test

- **PDF to Excel** put the quantity and price columns of an invoice one column to the right of their headings, because it
  merged the line items with the totals table below them. Cells in the right place went from 45% to 100%.
- **Compress PDF** sometimes kept a photo uncompressed, which made the photo sheet 1.19 MB instead of 298 KB.
- **PNG compression** used too few colours on gradients, which showed as grain (SSIM 0.965, now 0.998).
- **Image to Text** read pages set in two columns straight across both columns. It now reads one column at a time.

The tables above show the tools after these fixes. Still on our list: plants and other leafy subjects in background removal,
and photos saved as PNG.
