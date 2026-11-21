---
title: 'How to print a poster on multiple pages at home'
description: 'Print a big poster on A4 or Letter paper with a home printer: how large it can be, how many pixels you need, and how to print and assemble the pages.'
published: 2026-11-27
tools: [poster-splitter, pdf-to-png, upscale-image]
---

You don't need a print shop for a big poster. Any home or office printer can print one in pieces: the picture is
enlarged, split over several sheets of A4 or Letter paper, and you trim and glue the sheets together. It works well for
classroom displays, birthday banners, maps, room decorations and planning boards, and costs a few sheets of paper.

## What you need

- A picture: a photo, a design exported from Canva or a page from a PDF.
- An ordinary printer and A4 or Letter paper. Thicker paper (120 g/m² or more) bends less when you glue it.
- Scissors or, better, a ruler and a craft knife.
- Glue stick or tape.

## Step 1: split the picture over pages

1. Open [Poster Splitter](/poster-splitter) and add your picture.
2. Choose the paper (A4, Letter or A3) and whether the pages are portrait or landscape.
3. Choose how many pages across, from 1 to 10. The number of rows follows from the shape of the picture, and the
   tool shows the finished poster size in centimetres and inches.
4. Choose the overlap: 10 mm is a good default. It is the strip that each page shares with its neighbour, so there is
   room to glue and small printing shifts don't leave gaps.
5. Keep cut marks and labels on, and download the PDF.

Each page gets a label: letters for rows and numbers for columns, so A1 is the top left, A2 is next to it, and B1 is
below A1.

<figure>
  <img src="/guides/poster-split-3-across.webp" width="800" height="534" loading="lazy" alt="A landscape photo of hills at sunset divided into six parts labelled A1, A2, A3 along the top and B1, B2, B3 below, with yellow strips where neighbouring pages overlap." />
  <figcaption>Poster Splitter's preview of a 2000 × 1333 pixel photo over 3 A4 pages across: a 55 × 37 cm poster on 6 sheets. The yellow strips are the overlaps. Photo: Daniel Genser, Unsplash.</figcaption>
</figure>

## How big will the poster be?

Printers can't print right to the edge of the paper, so each page keeps a 10 mm white border, and neighbouring pages
overlap. With A4 paper in portrait and a 10 mm overlap, the width of the poster is:

| Pages across | Poster width | Pixels needed across (good) | Pixels needed across (sharp) |
|---|---|---|---|
| 2 | 37 cm (14.6 in) | 1,460 | 2,190 |
| 3 | 55 cm (21.7 in) | 2,170 | 3,250 |
| 4 | 73 cm (28.7 in) | 2,870 | 4,310 |
| 5 | 91 cm (35.8 in) | 3,580 | 5,370 |

The height depends on your picture: a portrait photo 3 pages wide ends up about 4 pages tall. Turning the pages to
landscape makes each page wider, so the same number of pages across gives a wider poster.

## Is my picture big enough?

The table above shows how many pixels the picture needs across for each poster width. "Good" is 100 pixels per inch,
which looks fine from a step or two away, like most posters. "Sharp" is 150 pixels per inch, for posters people look at
up close, such as maps and charts.

Poster Splitter warns you when your picture will have fewer than 100 pixels per inch at the size you chose. The photo
in the picture above is 2,000 pixels wide, a little short of the 2,170 needed for 3 pages across, and the tool warned
that it would have about 92 pixels per inch. If you get the warning:

- Use fewer pages across, so the poster is smaller.
- Find a bigger version of the picture. Images saved from websites and messaging apps are often shrunk.
- Enlarge a small photo with [AI Image Upscaler](/upscale-image), which redraws it at 2× or 4× with sharper edges
  than ordinary enlarging. It helps most with photos and simple graphics.

## Step 2: print at actual size

This is the step that goes wrong most often. In the print dialog:

- Choose **Actual size** or **100%**. "Fit to page" or "Shrink oversized pages" scales every page down a little, and
  then the overlaps and cut marks no longer line up.
- Use the same paper size you chose in the tool.
- Print one-sided.
- If you can, choose a better quality setting: large areas of colour look more even.

Print one page first and measure it, to check that nothing was scaled, before printing the rest.

## Step 3: put the poster together

1. Lay the pages out on a table in label order: A1, A2, A3 along the top row, B1, B2, B3 below, and so on.
2. On each page, cut off the white border along the edges that overlap a neighbour: the left and top edges, except on
   the first column and first row. The cut marks show exactly where.
3. Lay each trimmed edge over its neighbour so the picture lines up, then glue or tape it from the back.
4. Work one row at a time, then join the rows.
5. Trim the outer white border if you want the picture to go to the edge.

A ruler and craft knife make straighter cuts than scissors, and straight cuts make the joins nearly invisible.

## From Canva, Word or a PDF

Poster Splitter works with pictures (JPG, PNG, WebP, HEIC or TIFF), so turn your design into one first:

- **Canva:** Share › Download, and choose PNG. With Canva Pro you can also raise the size, which gives more pixels.
- **Word or PowerPoint:** save the page as a PDF, then turn it into a picture with [PDF to PNG](/pdf-to-png) at 300 DPI.
- **A PDF:** convert the page you want with [PDF to PNG](/pdf-to-png) at 300 DPI.

300 DPI keeps text crisp when the page is enlarged several times.

## Other ways to do it

Adobe Acrobat Reader can also print a PDF as a poster: in the print dialog, choose **Poster** under Page Sizing &
Handling and set the tile scale. Some printer drivers on Windows have a poster option in their own settings. Both work,
but they print directly, so you can't check the pages first, and they don't show how sharp the result will be. Word
and Canva can't split a page over several sheets on their own.

If you need a poster that is perfectly smooth, without joins, or larger than about a metre, a print shop is still the
better choice. For everything else, a printer and a glue stick do the job.
