---
name: Image Toolbox
description: Free in-browser image tools on a friendly press proof sheet. Measured, marked, easy to pick up.
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
  tint-edit: "#fde6f2"
  tint-edit-ink: "#a3005a"
  tint-optimize: "#e0f3fb"
  tint-optimize-ink: "#00658c"
  tint-convert: "#fff5b8"
  tint-convert-ink: "#665200"
  tint-pdf: "#f6e8dc"
  tint-pdf-ink: "#8a2d00"
  tint-neutral: "#ecece6"
  drop-tray: "#eef8fc"
  drop-tray-rule: "#2f8cb5"
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
  field: "8px"
  control: "10px"
  card: "12px"
  panel: "16px"
  tray: "20px"
  pill: "9999px"
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
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.key-ink}"
  button-rule:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.control}"
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
    rounded: "{rounded.field}"
    padding: "0 10px"
    height: "40px"
  control-panel:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.panel}"
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
    rounded: "{rounded.pill}"
    size: "10px"
  tool-tile:
    backgroundColor: "{colors.tint-edit}"
    textColor: "{colors.tint-edit-ink}"
    rounded: "{rounded.control}"
    size: "40px"
  drop-tray:
    backgroundColor: "{colors.drop-tray}"
    rounded: "{rounded.tray}"
---

# Design System: Image Toolbox

## Overview

**Creative North Star: "The Press Proof Sheet", friendly edition**

The owner chose a friendlier take on 2026-10-27 (option A of three previews). The proof-sheet identity stays: ink on paper, process-ink categories, the CMYK strip, crop marks and dimension lines on the image, tabular measurements. It is softened for non-technical visitors on phones with rounded corners, a soft tint of each category ink, an icon for every tool and a tinted drop tray.

Every image is placed on a press proof sheet: measured, marked, and passed for press. The page is coated paper printed in key-black ink, ruled with 1px lines, and annotated the way a print shop annotates a proof: crop marks at the corners of the image, dimension lines that state its pixel size, a CMYK control strip across the masthead, and a slug-line job ticket under the sheet that says exactly what goes in and what comes out. Color is quarantined. The four process inks appear only as flat category marks and in the control strip; everything else is ink on paper, so the user's own image is the most colorful thing on screen.

The density is that of a printed index, not a dashboard. Every tool is listed, each with its icon on a soft tile of its category's tint, inside a white card per category; controls sit in a rounded panel beside the sheet; the single solid black block on a tool page is the Download button. There are no gradients, glows or decorative shadows; a soft lift is reserved for things that float (menus, the search dialog, the drop icon).

Every number is real and set in tabular figures. That is the trust mechanism: the visitor sees their image measured the moment it lands and the output ticket reports the real format, pixels and bytes.

**Key Characteristics:**
- Coated paper ground, key-black ink, graphite for secondary text.
- Soft corners from one scale (8px fields, 10px buttons and option groups, 12px lists, 16px panels, 20px drop tray); 1px rules contain; 2px ink rules head sections.
- Process inks (magenta, cyan, yellow, key) and a registration mark encode tool categories; their soft tints ground icon tiles and nav pills.
- Crop marks and dimension lines on the image, and the CMYK strip, are the press vocabulary; each one also carries information.
- Barlow / Barlow Semi Condensed with tabular figures for every measurement.
- One solid key-ink action per page; selection is shown by a heavier rule, not a fill.

## Colors

Ink on coated paper, with four flat process inks held in reserve for category marks and the control strip.

### Primary
- **Key Ink** (`key-ink`): all headings, body-weight labels, every 1px rule and border, crop marks, dimension lines, focus-independent outlines, and the one solid action (Download). Also the selection outline of ruled segments and the fill of small measure tags placed on the image.

### Secondary (process inks, category and press-mark use only)
- **Process Magenta** (`process-magenta`): category mark for Edit & Transform; second chip of the color bar; text caret.
- **Process Cyan** (`process-cyan`): category mark for Optimize & Compress; first chip of the color bar. The global focus ring uses Focus Cyan (`#0072b0`), a darker shade of it: process cyan on paper is only 2.85:1, below the 3:1 a focus indicator needs (WCAG 1.4.11).
- **Process Yellow** (`process-yellow`): category mark for Convert Formats; third chip of the color bar; text selection highlight.
- **Registration** (key-ink crosshair on paper-bright, inside a 1px key-ink square): category mark for Developer tools. Inspect & Utilities uses a solid key-ink square.
- **Overprint** (magenta and yellow split on the diagonal, the two inks printed over each other make process red): category mark for PDF & Documents. Still only process inks, so the quarantine rule holds.

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
- **Non-repro Blue** (`nonrepro-blue`): retired with the gridded drop sheet; kept as a token only.

### Tints (category grounds)
- **Category tints** (`tint-edit`, `tint-optimize`, `tint-convert`, `tint-pdf`, and `tint-neutral` for Utilities and Developer): the ground of a tool's icon tile and of the masthead's category pills. Icons on a tile use the paired `-ink` shade (5.6:1 or better on its tint); pill text stays key ink.
- **Drop tray** (`drop-tray` ground with a 2px dashed `drop-tray-rule` at 3.5:1): the empty drop target on every tool. Hover deepens the ground; dragging a file over it makes the rule solid status blue.
- **Checker Tint** (`checker-tint`): the 16px transparency checkerboard under images.

### Named Rules
**The Color Quarantine Rule.** Solid process inks mark categories, the CMYK strip, focus, caret and selection. Their soft tints may ground a tool's icon tile or a category pill, and the drop tray is a pale cyan. Nothing else in the chrome is colored: buttons, panels and headings stay ink on paper.

**The One Solid Block Rule.** Download (`.btn-ink`) is the only solid key-ink block on a tool page. Selected options use the ruled state (2px key-ink outline inset on paper stock), never a solid fill. Small measure tags laid on the image are annotations, not controls, and are exempt.

**The Tint Rule.** A tint always sits behind something that belongs to its category (a tool icon, a category pill). It is never a section background or a decorative wash.

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

**Home.** A 5:7 split of headline plus spec chips (tools, formats, and a green "uploads 0") against the drop tray, then the full tool index in CSS columns (1 / 2 / 3): one white rounded card per category, every tool listed with its icon tile, name and one-line description, nothing folded; then a three-column ruled pillars row and FAQ.

**Translation.** Every label must fit the 23rem panel in German and survive CJK. Segmented groups use equal grid columns; text wraps rather than truncating, and controls never rely on a fixed character count.

**The Full Index Rule.** The tool index shows every tool, grouped by category ink, with no accordion, carousel or "show more".

**Ad placement.** Ad slots appear in the explanatory column below the workspace, never beside upload, download or handoff controls.

## Elevation & Depth

Mostly flat. Depth is told the way paper tells it: a brighter sheet (paper-bright) on the page (paper), contained by a 1px rule. Hover darkens to paper stock; selection adds a heavier rule. The Tailwind shadow scale has soft steps (`sm`, `DEFAULT`, `md`, `lg`: offset plus blur at 8-10% ink) used only for things that float over the page: the language menu and the search dialog (`lg`; search also sits on a 40% key-ink scrim) and the drop tray's icon disc (`sm`).

**The Soft Lift Rule.** Cards and panels never cast shadows; only floating pieces do. No glow, blur or gradient fill in the chrome.

### Motion
- **Registration snap** (520ms, `cubic-bezier(0.16, 1, 0.3, 1)`): when an image lands, cyan, magenta and yellow outlines start a few pixels off-register and lock onto the image while fading out. Reduced motion shows only the registered state.
- **Color transitions** on hover (Tailwind default 150ms). The FAQ plus rotates 45° to a cross when open.
- All animation and transition durations collapse to near zero under `prefers-reduced-motion`.

## Shapes

Soft corners from one scale (Tailwind `rounded`): 8px for text fields and menus (set globally in `global.css`), 10px (`rounded-md`) for buttons, option groups, icon tiles and hover rows, 12px (`rounded-lg`) for info lists and page cards, 16px (`rounded-xl`) for panels, preview frames and the index cards, 20px (`rounded-2xl`) for the drop tray, and full for pills, chips and category marks. Interactive controls keep their 1px key-ink border (they need 3:1 against the page); containers that are not controls may use the softer pencil rule. Section heads still sit on 2px key-ink rules. Segmented groups are one rounded ruled box that clips its options (class `seg-group`); their focus ring is drawn inside. Category marks are round dots. Icons are lucide line drawings at a 1.75px stroke.

**The Crop Mark Rule.** Crop marks and dimension lines belong to the image: they frame the loaded image inside its preview frame, never the empty drop tray or the chrome.

## Components

### Buttons
Ink on paper: one solid action, everything else ruled.
- **Shape:** 10px radius, 1px border.
- **Ink (primary):** key-ink fill, paper text, Barlow 600, 16px, 44px minimum height (52px in the panel, 48px in the mobile rail), full width in the panel. Icon plus label ("Download JPG"). Used once per page.
- **Hover / Focus:** inverts to paper ground with key-ink text and keeps its rule. Focus is a 2px Focus Cyan (`#0072b0`) outline offset 2px, site-wide. Disabled: 60% opacity, wait cursor.
- **Rule (secondary):** paper-bright ground, key-ink 1px border, Barlow 500, 40px minimum height; hover to paper stock. Copy image, Reload, All tools, Lock ratio.
- **Text action:** underlined key-ink text that drops its underline on hover (Replace image).

### Segmented options
- **Style:** a ruled group (10px radius, clipped by `seg-group`) divided by key-ink lines; each option paper-bright, Barlow 600 14px, 40px minimum height, label centred, optional 16px line icon. The focus ring is inset 4px so the clip never hides it.
- **State:** selected is the ruled state: paper-stock ground, bold weight, 2px key-ink outline inset by 2px. Unselected hovers to paper stock. Selection is exposed with `aria-pressed`.

### Control panel
- **Corner Style:** 16px.
- **Background:** paper-bright inside a 1px key-ink rule.
- **Header:** slug label with a line icon over a 1px key-ink rule (Settings).
- **Internal Padding:** 16px; groups separated by 16px and pencil rules, the output-format group by a key-ink rule.
- **Width:** 23rem at lg; full width below.

### Inputs / Fields
- **Style:** paper-bright ground, 1px key-ink border, 8px radius, 40px minimum height, 15px key-ink text in tabular figures; units in graphite beside the field.
- **Range and checkboxes:** native controls with key-ink accent color.
- **Focus:** the global Focus Cyan 2px outline.
- **Error:** status-red text with a line alert icon; alert blocks use the red soft tint with a 1px status-red rule and a 10px radius.

### Navigation (masthead)
- **Style:** sticky paper-bright bar with a 1px pencil bottom rule, topped by the 6px CMYK color bar (cyan, magenta, yellow, key in four equal blocks).
- **Wordmark:** registration-target line glyph plus the site name as live text (Semi Condensed 700, 17px, uppercase, 0.04em). The name is swappable text, never artwork.
- **Links:** five categories (all but Developer) as pills on their category tint, key-ink Barlow 500 15px, underline on hover; shown from xl up. They use the short category names (Edit, Compress, Convert, PDF, Utilities) in every language: the full names of five categories overflow the 1280px masthead next to search and language. Tool search trigger and language selector are ruled buttons on the right.

### Lists and index
- **Tool index and Related tools:** each row is a 10px-rounded link with a 40px (36px in Related tools) icon tile on the category tint, the item-weight name and a graphite one-line description; hover grounds the row in paper stock and underlines the name. On the home page each category is a white 16px card with a pencil-soft rule, a round category mark, the category name and its count.
- **Other lists** (search results, next step, handoff choices): rows divided by pencil-soft hairlines, a round category mark and the name; handoff rows end with a line arrow.

### Proof sheet (signature)
- **Empty (drop tray, `.drop-target`):** a full-width button with a 20px radius, drop-tray ground and a 2px dashed drop-tray rule; an upload icon in a white disc (`.drop-icon`), a 24-26px Semi Condensed title, the ink button as a visual cue and a graphite hint. Hover deepens the ground; dragging a file over it (`.is-dragging`) makes the rule solid.
- **Loaded:** the image on a 16px checkerboard inside the paper-bright preview frame (16px radius), crop-marked, with a width dimension line above and a height dimension line to the left (hidden on phones), each labelled in 12px measure type on a paper knock-out. A rendering status chip sits top-right.
- **Measure tag:** small key-ink tags with paper text for live readouts laid on the image (crop size, loupe hex value, tile numbers).
- **Job ticket:** a band between two key-ink rules under the sheet: Source and Output slug keys, W × H px in measure type, format and bytes in graphite, and saving or growth as a signed percent.

### Category mark
A round dot of process ink: magenta Edit & Transform, cyan Optimize & Compress, yellow Convert Formats, the magenta and yellow overprint PDF & Documents, key Inspect & Utilities, registration crosshair Developer. Always paired with the category or tool name. A tool's own icon (`iconName` in `src/config/tools.ts`, rendered at build time by `src/components/shared/ToolIcon.astro`) sits on its category tint.

## Do's and Don'ts

### Do:
- **Do** take every radius from the scale (field 8, control 10, card 12, panel 16, tray 20, pill) and keep a 1px key-ink rule on controls; head sections with a 2px key-ink rule.
- **Do** mark selection with the ruled state (2px key-ink inset outline on paper stock) so Download stays the only solid key-ink block.
- **Do** set every pixel, byte, percent and count in Barlow with tabular figures.
- **Do** pair each tool with its icon on its category tint, and each category with its round ink mark.
- **Do** report real numbers in the job ticket: source and output W × H, format, bytes, signed saving.
- **Do** keep crop marks on the loaded image only, with room inside the preview frame for them.
- **Do** keep the panel's labels fitting 23rem in German and break CJK headings at phrases (`auto-phrase` for Japanese, `keep-all` for Korean).
- **Do** keep the site name as live, swappable text in the masthead and footer.

### Don't:
- **Don't** put shadows on cards or panels, or use glows, blurs or gradient fills in the chrome.
- **Don't** fill buttons, segments, panels or headings with a process ink or a tint; tints only ground icon tiles and category pills.
- **Don't** invent radii or colors outside the scale and the tints.
- **Don't** fill a selected option with solid key ink.
- **Don't** put the uppercase slug style above headlines as a decorative tag.
- **Don't** fold or truncate the tool index, and don't drop the one-line descriptions: icons help people scan, the text tells similar tools apart.
- **Don't** set measurements in a monospace face; monospace is for literal code only.
- **Don't** place ad slots beside upload, download or handoff controls.

## Decided Against

**Grid snap for crop and resize** (dropped by the owner, 2026-10-25). The direction contract raised "crop and resize snap to a visible hairline grid". It is not part of the system: crop and resize move freely to the pixel, because snapping fights precise handle placement on phones. The non-repro grid stays decorative and appears only on the empty drop sheet; live dimension lines carry the measuring role instead.
