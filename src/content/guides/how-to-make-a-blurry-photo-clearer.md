---
title: 'How to make a blurry photo clearer (and when nothing can)'
description: 'Why photos look blurry, which kinds an AI upscaler, sharpening or noise reduction can fix, and which kinds no tool can, with real results and timings.'
published: 2026-11-20
tools: [upscale-image, sharpen-image, denoise-image, resize-image]
---

"Blurry" covers several different problems, and the fix depends on which one you have. A small photo blown up to a bigger
size, a JPEG that has been compressed too hard, a grainy night shot and a photo where the camera moved all look unclear,
but they need different tools, and some of them can't be fixed at all. Working out which kind you have first saves a lot
of trying.

## First, find out what kind of blur it is

Zoom in to 100% and look at edges, such as the outline of a face, a line of text or the edge of a building.

| What you see | What it is | What helps |
|---|---|---|
| The photo is small and turns soft or blocky when you make it bigger | Too few pixels (low resolution) | [AI Image Upscaler](/upscale-image) |
| Square blocks and smeared color around edges | Heavy JPEG compression | [AI Image Upscaler](/upscale-image), which removes JPEG blocks |
| Everything is in focus but slightly soft | Mild softness from the lens or the phone's processing | [Sharpen Image](/sharpen-image) |
| Grainy speckles, worst in dark areas | Noise, from low light | [Reduce Image Noise](/denoise-image) |
| Streaks, or every edge appears twice | Motion blur | Nothing fixes it reliably |
| The subject is soft but something else is sharp | Missed focus | Nothing fixes it reliably |

## Small or low-resolution pictures: upscale with AI

When you enlarge a picture the ordinary way, the program spreads the pixels it has over a bigger area and smooths
between them. No detail is added, so the result is the same blurry picture, just bigger. This is what Resize Image,
browsers and most editors do.

An AI upscaler redraws the picture at the bigger size instead. [AI Image Upscaler](/upscale-image) uses Real-ESRGAN, a
model trained on real photos, to work out where edges, lines and texture should be and draw them sharply. It also cleans
up JPEG blocks and blur along the way.

<figure>
  <img src="/guides/upscale-ordinary-vs-ai.webp" width="640" height="812" loading="lazy" alt="Two crops of the same enlarged landscape photo. In the top one, made with ordinary enlarging, the shoreline and rock edges are soft and blurred. In the bottom one, made with the AI upscaler, the shoreline and rock edges are crisp." />
  <figcaption>The same 300 × 225 pixel photo enlarged 4× to 1200 × 900, shown at full size. Top: ordinary enlarging. Bottom: AI Image Upscaler. Photo: Alexey Topolyanskiy, Unsplash.</figcaption>
</figure>

The shoreline and the edges of the rocks are clearly sharper in the AI version. Look at the slopes too: the AI has
smoothed their fine texture into something that looks slightly painted. That is the trade-off with this kind of model.
It is very good at edges, text and smooth surfaces, and less convincing on fine, random texture such as grass, gravel or
fabric.

How to use it:

1. Open [AI Image Upscaler](/upscale-image) and add your picture.
2. Choose 2× or 4×. 4× makes the picture four times as wide and four times as tall.
3. Click the picture to choose a part, and compare ordinary enlarging with the AI's version side by side at full size.
4. Click Download. The whole picture is upscaled, with its progress shown.

It runs on your device's graphics card in Chrome or Edge, on a computer or an Android phone, so the picture is never
uploaded. Safari, including on iPhone, and Firefox can't run it yet.

How long it takes depends on the graphics card and the size of the picture. In our tests:

| Picture | Laptop (Intel Iris Xe graphics) | Mid-range Android phone |
|---|---|---|
| 300 × 225 enlarged 4× to 1200 × 900 | 4 seconds | 7 seconds |
| 1500 × 1000 enlarged 2× to 3000 × 2000 | 68 seconds | 109 seconds |

Results are limited to 16.7 megapixels, the most a phone browser can draw in one picture. So 4× works for pictures of up
to about 1 megapixel and 2× for pictures of up to about 4 megapixels. A picture that is already larger than that rarely
needs upscaling: if it looks blurry, the cause is usually one of the others below.

## Slightly soft photos: sharpen

When a photo has plenty of pixels but looks a little soft, [Sharpen Image](/sharpen-image) is the right tool. It
increases the contrast along edges, which makes them look crisper. Check the result at 100%, as the tool shows you:
too much sharpening draws bright and dark halos along edges, and makes noise stand out.

There is usually no need to sharpen a picture you have just upscaled. The AI's result is already sharp, and sharpening it
again mostly adds halos.

## Grainy photos: reduce noise first

Photos taken in dim light are often covered in fine grain and colored speckles. [Reduce Image Noise](/denoise-image)
smooths these out while keeping edges. If a photo is both grainy and soft, reduce the noise first and sharpen
afterwards: sharpening first would make the grain stronger.

The AI upscaler removes noise as well, so a small, grainy picture only needs the upscaler.

## What no tool can fix

**Motion blur.** When the camera or the subject moved during the shot, each point is smeared into a streak. The
information about where things really were is mixed together, and no tool on TadaFile, or any free tool we know of,
separates it again reliably.

**Missed focus.** If the camera focused on the background, the subject's detail was never recorded. Sharpening makes the
outlines a little firmer, and an upscaler can tidy edges, but neither brings back eyelashes or text that the photo never
captured.

**Faces that are very blurry.** Specialised face-restoration AI can turn a blurry face into a sharp one, but it does that
by inventing a face, which may not look like the real person. TadaFile doesn't include one. The upscaler sharpens what
is there and doesn't redraw faces.

If you can, take the photo again: hold the phone with both hands, tap the subject to focus, and use more light. For a
printed photo, a flatbed scan at 600 dpi gives far more detail than a photo of the print.
