---
name: Image Toolbox
description: Free in-browser image tools, printed as a press proof sheet. Measured, marked, passed for press.
colors:
  paper: "#fbfbf9"
  paper-stock: "#f1f1ec"
  paper-bright: "#ffffff"
  key-ink: "#141414"
  body-ink: "#2b2b29"
  graphite: "#5b5b58"
  pencil: "#cfcfc8"
  pencil-soft: "#e4e4de"
  nonrepro-blue: "#9fd3e6"
  checker-tint: "#ebebe5"
  process-cyan: "#00a0df"
  process-magenta: "#e4007c"
  process-yellow: "#ffe100"
  status-red: "#c2006a"
  status-red-soft: "#fbe3ef"
  status-green: "#1d7440"
  status-green-soft: "#e1f1e6"
  status-amber: "#7d6300"
  status-amber-soft: "#fff6bf"
  status-blue: "#00729e"
  status-blue-soft: "#dff2f9"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, Roboto, Hiragino Sans, Noto Sans JP, Noto Sans KR, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'kern' 1, 'liga' 1"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  item:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.375
  label:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.08em"
  measure:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  none: "0"
spacing:
  hairline: "1px"
  row: "10px"
  panel: "16px"
  block: "24px"
  section: "64px"
  section-wide: "80px"
  page-gutter: "16px"
  page-gutter-lg: "32px"
components:
  button-ink:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.item}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.key-ink}"
  button-rule:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "40px"
  button-rule-hover:
    backgroundColor: "{colors.paper-stock}"
  segment-off:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.none}"
    height: "40px"
  segment-on:
    backgroundColor: "{colors.paper-stock}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.none}"
    height: "40px"
  input-field:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    typography: "{typography.measure}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "40px"
  control-panel:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.panel}"
    width: "23rem"
  measure-tag:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.measure}"
    padding: "2px 8px"
  slug-label:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
  category-mark:
    rounded: "{rounded.none}"
    size: "10px"
---

# Design System: Image Toolbox

## Overview

**Creative North Star: "The Press Proof Sheet"**

Every image is placed on a press proof sheet: measured, marked, and passed for press. The page is coated paper printed in key-black ink, ruled with 1px lines, and annotated the way a print shop annotates a proof: crop marks at the corners of the image, dimension lines that state its pixel size, a CMYK control strip across the masthead, and a slug-line job ticket under the sheet that says exactly what goes in and what comes out. Color is quarantined. The four process inks appear only as flat category marks and in the control strip; everything else is ink on paper, so the user's own image is the most colorful thing on screen.

The density is that of a printed index, not a dashboard. Tool lists are typeset as ruled columns with no folding and no icon tiles; controls sit in a ruled panel beside the sheet; the single solid black block on a tool page is the Download button. The world refuses the category default (white page, colorful icon tiles, giant rounded blue upload button) and the dark developer-tool look this site previously wore. There are no gradients, glows, shadows or rounded cards anywhere in the chrome.

Every number is real and set in tabular figures. That is the trust mechanism: the visitor sees their image measured the moment it lands and the output ticket reports the real format, pixels and bytes.

**Key Characteristics:**
- Coated paper ground, key-black ink, graphite for secondary text.
- Square corners everywhere; 1px ink rules divide and contain; 2px ink rules head sections.
- Process inks (magenta, cyan, yellow, key) and a registration mark encode tool categories and nothing else.
- Crop marks, dimension lines, a non-repro blue layout grid and a CMYK strip are the decorative vocabulary; each one also carries information.
- Barlow / Barlow Semi Condensed with tabular figures for every measurement.
- One solid key-ink action per page; selection is shown by a heavier rule, not a fill.

## Colors

Ink on coated paper, with four flat process inks held in reserve for category marks and the control strip.

### Primary
- **Key Ink** (`key-ink`): all headings, body-weight labels, every 1px rule and border, crop marks, dimension lines, focus-independent outlines, and the one solid action (Download). Also the selection outline of ruled segments and the fill of small measure tags placed on the image.

### Secondary (process inks, category and press-mark use only)
- **Process Magenta** (`process-magenta`): category mark for Edit & Transform; second chip of the color bar; text caret.
- **Process Cyan** (`process-cyan`): category mark for Optimize & Compress; first chip of the color bar; the global focus ring.
- **Process Yellow** (`process-yellow`): category mark for Convert Formats; third chip of the color bar; text selection highlight; the drop sheet while a file is dragged over it.
- **Registration** (key-ink crosshair on paper-bright, inside a 1px key-ink square): category mark for Developer tools. Inspect & Utilities uses a solid key-ink square.

### Tertiary (status, text-safe)
- **Status Red / Red Soft** (`status-red`, `status-red-soft`): errors and crash panels; soft tint as the alert ground with a red 1px rule.
- **Status Amber** (`status-amber`): export warnings (format fallback, output larger than input). Amber, not process yellow, because it must read as text (4.5:1 or better on paper).
- **Status Green** (`status-green`): bytes saved and other confirmed-good readouts.
- **Status Blue** (`status-blue`): informational text where a link-like or info tone is needed. Soft tints exist for each status hue; use them only as alert grounds.

### Neutral
- **Paper** (`paper`): page ground, masthead, footer, sticky mobile action rail, theme-color.
- **Paper Stock** (`paper-stock`): hover ground for rows and ruled buttons; the ground of a selected segment.
- **Paper Bright** (`paper-bright`): the proof sheet under the image, the control panel, inputs and unselected segments. Brighter than the page, like a sheet laid on a table.
- **Body Ink** (`body-ink`): running text and taglines, a step softer than key ink for long reading.
- **Graphite** (`graphite`): secondary text, slug labels, descriptions in the tool index, scrollbar thumb.
- **Pencil / Pencil Soft** (`pencil`, `pencil-soft`): inner dividers between list rows and inside panels, where a key-ink rule would be too loud.
- **Non-repro Blue** (`nonrepro-blue`, drawn at 55% alpha): the 24px layout grid on the empty drop sheet only. Never text, never a fill.
- **Checker Tint** (`checker-tint`): the 16px transparency checkerboard under images.

### Named Rules
**The Color Quarantine Rule.** Process inks mark categories, the CMYK strip, focus, caret and selection. They never fill buttons, panels, headings or backgrounds. If a chrome element is colored, it must be a category mark.

**The One Solid Block Rule.** Download (`.btn-ink`) is the only solid key-ink block on a tool page. Selected options use the ruled state (2px key-ink outline inset on paper stock), never a solid fill. Small measure tags laid on the image are annotations, not controls, and are exempt.

**The Non-Repro Rule.** Non-repro blue is the printer's invisible guide color: grid lines only, and only on the empty sheet.

## Typography

**Display Font:** Barlow Semi Condensed (with Barlow, system-ui)
**Body Font:** Barlow (with system-ui, Segoe UI, Roboto, Hiragino Sans, Noto Sans JP, Noto Sans KR)
**Label/Mono Font:** Barlow with tabular figures for measurements; ui-monospace only for literal code

**Character:** A DIN-like grotesk from the world of paper standards. The semi-condensed cut sets headlines and slug labels with the narrow economy of a printed chart; regular Barlow carries reading text. Measurements are never set in a monospace face; they are Barlow with tabular figures so columns of numbers align.

### Hierarchy
- **Display** (Semi Condensed 700, 40px phone / 56px sm / 64px lg, line-height 1.02, -0.01em): home headline only.
- **Headline** (Semi Condensed 700, 34px phone / 48px sm, line-height 1.02, -0.01em): tool page H1.
- **Title** (Semi Condensed 700, 26px; home sections 28-40px, line-height 1 to 1.25): section heads, always sitting on a 2px key-ink rule.
- **Lead** (Barlow 400, 17-19px, line-height 1.625, max 75ch / 34rem): taglines and intros under headlines.
- **Body** (Barlow 400, 15-16px, line-height 1.625, max-width prose): explanations, FAQ answers, feature text.
- **Item** (Barlow 600, 15-17px): tool names in the index, FAQ questions, step titles, panel headings.
- **Label / Slug** (Semi Condensed 600, 12px, uppercase, 0.08em, graphite): field labels, job-ticket keys, panel and list headers such as Settings, Next step, Related tools.
- **Measure** (Barlow 600, 12-14px, tabular figures, 0.01em): every pixel, byte, percent and count.
- **Code** (ui-monospace, 12-13px): favicon snippets, Base64 output, error messages.

### Named Rules
**The Tabular Rule.** Every number a user reads as a measurement (W × H px, KB, %, counts) is set in tabular figures. Use the measure role; never a monospace face for numbers.

**The Slug Is A Label Rule.** The uppercase slug style names a field, a ticket key or a ruled list. It is never placed above a headline as a decorative tag.

**The Phrase Break Rule.** Headings balance their lines. Japanese headings break at phrase boundaries (`word-break: auto-phrase`); Korean text never breaks inside a word (`keep-all`).

## Layout

A single 1280px measure (max-w-7xl) with 16px / 24px / 32px gutters at phone / sm / lg. Vertical rhythm is generous between sections (64px phone, 80px sm on tool pages; 80px and 112px on home) and tight inside them (10px rows, 16px panel padding), the contrast of a printed index: dense lists, clear air between blocks.

**Tool page.** Breadcrumb with category mark, headline and lead sit left above the workspace. Once an image is loaded the workspace is a two-column grid: the proof sheet takes the fluid column and a 23rem ruled control panel sits right, sticky at 96px from the top. Below lg the panel drops under the sheet and Download moves to a fixed bottom action rail (paper ground, 1px key-ink top rule) so it stays under the thumb. Below the workspace, content runs in a fluid column with an 18rem sticky Related tools rail.

**Home.** A 5:7 split of headline plus a ruled spec list (tools, formats, uploads: 0) against the proof-sheet drop zone, then the full tool index typeset in CSS columns (1 / 2 / 3) with every tool listed and nothing folded, then a three-column ruled pillars row and FAQ.

**Translation.** Every label must fit the 23rem panel in German and survive CJK. Segmented groups use equal grid columns; text wraps rather than truncating, and controls never rely on a fixed character count.

**The Full Index Rule.** The tool index shows every tool, grouped by category ink, with no accordion, carousel or "show more".

**Ad placement.** Ad slots appear in the explanatory column below the workspace, never beside upload, download or handoff controls.

## Elevation & Depth

Flat. The Tailwind shadow scale is set to `none` at every step and no surface casts a shadow. Depth is expressed the way paper expresses it: a brighter sheet (paper-bright) laid on the page (paper), contained by a 1px key-ink rule, with crop marks standing just outside its corners. Hover darkens to paper stock; selection adds a heavier rule. Overlays (tool search) sit on a 40% key-ink scrim with no shadow.

**The Flat Stock Rule.** No box-shadow, glow, blur or gradient fill in the chrome. Layering is told by paper tone and ink rules only.

### Motion
- **Registration snap** (520ms, `cubic-bezier(0.16, 1, 0.3, 1)`): when an image lands, cyan, magenta and yellow outlines start a few pixels off-register and lock onto the image while fading out. Reduced motion shows only the registered state.
- **Color transitions** on hover (Tailwind default 150ms). The FAQ plus rotates 45° to a cross when open.
- All animation and transition durations collapse to near zero under `prefers-reduced-motion`.

## Shapes

Square corners without exception: every radius token in the Tailwind theme resolves to 0. Containers are rectangles defined by 1px key-ink rules; section heads sit on 2px key-ink rules; inner divisions use pencil hairlines. Segmented groups are a single ruled box divided by 1px key-ink lines (or a 1px key-ink gap grid). Category marks are 10px squares (16px in index headers, 8px in the footer). The only circles are functional: the circle crop mask and the circular avatar output, which describe the user's image, not the chrome. Icons are 1.5px-stroke line drawings in key ink.

**The Crop Mark Rule.** The proof sheet and the image on it carry 14px crop marks offset 6px outside each corner. Any element with crop marks needs padding around it (20px phone, 24px sm) so the marks are not clipped.

## Components

### Buttons
Ink on paper: one solid action, everything else ruled.
- **Shape:** square (0 radius), 1px border.
- **Ink (primary):** key-ink fill, paper text, Barlow 600, 16px, 44px minimum height (52px in the panel, 48px in the mobile rail), full width in the panel. Icon plus label ("Download JPG"). Used once per page.
- **Hover / Focus:** inverts to paper ground with key-ink text and keeps its rule. Focus is a 2px process-cyan outline offset 2px, site-wide. Disabled: 60% opacity, wait cursor.
- **Rule (secondary):** paper-bright ground, key-ink 1px border, Barlow 500, 40px minimum height; hover to paper stock. Copy image, Reload, All tools, Lock ratio.
- **Text action:** underlined key-ink text that drops its underline on hover (Replace image).

### Segmented options
- **Style:** a ruled group divided by key-ink lines; each option paper-bright, Barlow 600 14px, 40px minimum height, label centred, optional 16px line icon.
- **State:** selected is the ruled state: paper-stock ground, bold weight, 2px key-ink outline inset by 2px. Unselected hovers to paper stock. Selection is exposed with `aria-pressed`.

### Control panel
- **Corner Style:** square.
- **Background:** paper-bright inside a 1px key-ink rule.
- **Header:** slug label with a line icon over a 1px key-ink rule (Settings).
- **Internal Padding:** 16px; groups separated by 16px and pencil rules, the output-format group by a key-ink rule.
- **Width:** 23rem at lg; full width below.

### Inputs / Fields
- **Style:** paper-bright ground, 1px key-ink border, square, 40px minimum height, 15px key-ink text in tabular figures; units in graphite beside the field.
- **Range and checkboxes:** native controls with key-ink accent color.
- **Focus:** the global process-cyan 2px outline.
- **Error:** status-red text with a line alert icon; alert blocks use the red soft tint with a 1px status-red rule.

### Navigation (masthead)
- **Style:** sticky paper bar with a 1px key-ink bottom rule, topped by the 6px CMYK color bar (cyan, magenta, yellow, key in four equal blocks).
- **Wordmark:** registration-target line glyph plus the site name as live text (Semi Condensed 700, 17px, uppercase, 0.04em). The name is swappable text, never artwork.
- **Links:** four everyday categories with their ink marks, Barlow 500 15px, underline on hover; shown from xl up. Tool search trigger and language selector are ruled buttons on the right.

### Lists and index
- **Style:** rows divided by pencil-soft hairlines under a 1px key-ink header rule. Each row: category mark, item-weight name, graphite one-line description. Hover underlines the name or grounds the row in paper stock. Next-step handoff rows end with a line arrow.

### Proof sheet (signature)
- **Empty:** a full-width button on paper-bright with the 24px non-repro grid, a 1px key-ink rule and crop marks; a line-drawn image glyph, a 20-22px item-weight title, the ink button as a visual cue and a graphite hint. Hover to paper stock; dragging over it turns the sheet process yellow.
- **Loaded:** the image on a 16px checkerboard inside the paper-bright sheet, crop-marked, with a width dimension line above and a height dimension line to the left (hidden on phones), each labelled in 12px measure type on a paper knock-out. A rendering status chip sits top-right.
- **Measure tag:** small key-ink tags with paper text for live readouts laid on the image (crop size, loupe hex value, tile numbers).
- **Job ticket:** a band between two key-ink rules under the sheet: Source and Output slug keys, W × H px in measure type, format and bytes in graphite, and saving or growth as a signed percent.

### Category mark
A flat square of process ink: magenta Edit & Transform, cyan Optimize & Compress, yellow Convert Formats, key Inspect & Utilities, registration crosshair Developer. Always paired with the category or tool name; never used alone as an icon.

## Do's and Don'ts

### Do:
- **Do** set every container, field and button with square corners and a 1px key-ink rule; head sections with a 2px key-ink rule.
- **Do** mark selection with the ruled state (2px key-ink inset outline on paper stock) so Download stays the only solid key-ink block.
- **Do** set every pixel, byte, percent and count in Barlow with tabular figures.
- **Do** pair each tool or category with its process-ink square, and keep that ink to the mark.
- **Do** report real numbers in the job ticket: source and output W × H, format, bytes, signed saving.
- **Do** leave 20-24px of padding around crop-marked elements.
- **Do** keep the panel's labels fitting 23rem in German and break CJK headings at phrases (`auto-phrase` for Japanese, `keep-all` for Korean).
- **Do** keep the site name as live, swappable text in the masthead and footer.

### Don't:
- **Don't** use box-shadows, glows, blurs, gradient fills or rounded cards in the chrome.
- **Don't** fill buttons, segments, panels or headings with a process ink; process inks are category marks, the color bar, focus, caret and selection only.
- **Don't** use the non-repro blue for anything but grid lines on the empty sheet.
- **Don't** fill a selected option with solid key ink.
- **Don't** put the uppercase slug style above headlines as a decorative tag.
- **Don't** fold or truncate the tool index, and don't present tools as colorful icon tiles.
- **Don't** set measurements in a monospace face; monospace is for literal code only.
- **Don't** place ad slots beside upload, download or handoff controls.

## Decided Against

**Grid snap for crop and resize** (dropped by the owner, 2026-10-25). The direction contract raised "crop and resize snap to a visible hairline grid". It is not part of the system: crop and resize move freely to the pixel, because snapping fights precise handle placement on phones. The non-repro grid stays decorative and appears only on the empty drop sheet; live dimension lines carry the measuring role instead.
