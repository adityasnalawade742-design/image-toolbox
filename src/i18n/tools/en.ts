import type { LocalizedToolItem } from '../types';

export const enTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Crop Image",
    shortName: "Crop",
    tagline: "Cut out the part of a photo you want with drag handles, exact pixel values, or ready-made aspect ratios.",
    intro:
      "Crop Image trims a photo to the area you select and saves only that area at full resolution. Use it to remove empty edges, frame a subject, or fit the shape a social media post needs. Besides free-form cropping, it has ratio presets such as 1:1, 4:5, 9:16 and 16:9, exact pixel inputs, and a circle mode for profile pictures.",
    seoTitle: "Crop Image Online – Free, No Upload",
    seoDescription:
      "Crop image files online for free. Drag the frame or type exact pixels, use 1:1, 4:5, 16:9 or 9:16 presets, and save as JPG, PNG, WebP or AVIF. No upload.",
    keywords: [
      "crop image",
      "crop photo online",
      "crop picture to square",
      "crop image for instagram",
      "crop image to 16:9",
      "circle crop image",
      "crop image without losing quality",
    ],
    howToSteps: [
      {
        title: "Add your photo",
        description:
          "Drop an image on the upload box, click to choose a file, or paste it with Ctrl+V. JPG, PNG, WebP, AVIF, GIF and iPhone HEIC files are supported.",
      },
      {
        title: "Select the crop area",
        description:
          "Drag the frame and its handles on the preview, or click a ratio such as 1:1 Square, 9:16 Story or a social media preset. For an exact result, type the X offset, Y offset, width and height in pixels.",
      },
      {
        title: "Choose the shape and format",
        description:
          "Switch to Circle / Avatar (1:1) for a round crop. The original file format is kept by default, or you can pick JPG, PNG, WebP or AVIF under Save As.",
      },
      {
        title: "Download the cropped image",
        description:
          "Click Download to save only the selected area at full resolution, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Ratio and social media presets",
        description:
          "Original, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 and 21:9, plus shapes for Instagram portrait (4:5), Reels and TikTok, YouTube thumbnails and Pinterest pins.",
      },
      {
        title: "Pixel-exact inputs",
        description:
          "Type the offset, width and height in pixels, lock the ratio if you need it, and see the final output size before you save.",
      },
      {
        title: "Circle crop for avatars",
        description:
          "Circle mode locks the frame to a square and cuts a round image. Save as PNG or WebP to keep the corners transparent.",
      },
      {
        title: "Cropped from the original pixels",
        description:
          "The preview may be scaled down for speed, but the download is cut from the full-resolution photo on your device. Nothing is uploaded.",
      },
    ],
    faqs: [
      {
        question: "Does cropping reduce image quality?",
        answer:
          "Cropping only removes the pixels outside the frame; the rest stay sharp. If you save as JPG, WebP or AVIF, the image is compressed again, so use 90% quality or higher, or save as PNG, to stay close to the original.",
      },
      {
        question: "How do I crop a photo to a square for Instagram?",
        answer:
          "Click 1:1 Square or Instagram (1:1) and drag the frame over the part you want to keep. For a taller portrait post, use Insta Portrait (4:5) instead.",
      },
      {
        question: "How do I make a circular profile picture?",
        answer:
          "Select Circle / Avatar (1:1), move the circle over the face, and save as PNG or WebP. JPG cannot store transparency, so the area outside the circle would be filled with white.",
      },
      {
        question: "Can I crop an iPhone HEIC photo?",
        answer:
          "Yes. The HEIC file is converted in your browser when you open it. The cropped result is saved as JPG by default, and you can switch to PNG, WebP or AVIF.",
      },
      {
        question: "Is the photo's EXIF data kept after cropping?",
        answer:
          "No. The new file is created from the image pixels only, so camera details and GPS location from the original are not copied into it.",
      },
      {
        question: "Can I crop an animated GIF?",
        answer:
          "You can open a GIF, but the result is a single still image, because JPG, PNG, WebP and AVIF are saved here without animation.",
      },
    ],
  },
  "resize-image": {
    name: "Resize Image",
    shortName: "Resize",
    tagline: "Change an image's width and height in pixels or by percentage, with the aspect ratio locked or free.",
    intro:
      "Resize Image changes the pixel dimensions of a photo or graphic. Use it to make a large camera photo small enough for email or a website, or to meet an exact size such as 1080 × 1080. You can type a width and height or scale by a percentage from 10% to 300%, and the Prevent Upscaling option stops you from enlarging an image by mistake.",
    seoTitle: "Resize Image Online – Exact Pixels or Percent",
    seoDescription:
      "Resize image dimensions online for free. Type exact width and height in pixels or scale by percent, keep the aspect ratio, and save as JPG, PNG, WebP or AVIF.",
    keywords: [
      "resize image",
      "resize image online",
      "change image size in pixels",
      "resize photo without losing quality",
      "resize image to 1080x1080",
      "reduce image dimensions",
      "scale image by percentage",
    ],
    howToSteps: [
      {
        title: "Open your image",
        description: "Drop, choose or paste (Ctrl+V) a JPG, PNG, WebP, AVIF or iPhone HEIC image.",
      },
      {
        title: "Set the new size",
        description:
          "In Pixels mode, type a width or height; with Lock Aspect Ratio on, the other side updates automatically. In Percentage mode, use the slider or the 25% to 200% buttons.",
      },
      {
        title: "Choose the file format",
        description:
          "The original format is kept by default. You can switch to JPG, PNG, WebP or AVIF and set the quality for JPG, WebP and AVIF.",
      },
      {
        title: "Download the result",
        description:
          "Click Download to save the resized image, or send it to Compress if you also want a smaller file size.",
      },
    ],
    features: [
      {
        title: "Pixels or percentage",
        description: "Type exact dimensions up to 10,000 pixels, or scale the whole image from 10% to 300%.",
      },
      {
        title: "Aspect ratio lock",
        description:
          "Keep the original proportions so the image is not stretched, or unlock it to set width and height separately.",
      },
      {
        title: "Prevent upscaling",
        description:
          "Limits the size to the original dimensions, so a small image is never enlarged and made blurry by accident.",
      },
      {
        title: "Keeps your file type",
        description: "A JPG stays a JPG and a PNG stays a PNG, unless you choose a different format.",
      },
    ],
    faqs: [
      {
        question: "How do I resize an image without losing quality?",
        answer:
          "Making an image smaller keeps it sharp. Making it larger than the original cannot add detail, so it will look softer; turn on Prevent Upscaling to avoid this. Save as PNG, or use 90% quality or higher for JPG and WebP.",
      },
      {
        question: "Does resizing reduce the file size?",
        answer:
          "Usually, yes. Halving the width and the height leaves about a quarter of the pixels, so the file becomes much smaller. For even smaller files, compress the result afterwards.",
      },
      {
        question: "Can I resize to an exact size like 1080 × 1080?",
        answer:
          "Yes. Turn off Lock Aspect Ratio and type both numbers. If the original is not square, it will be stretched, so crop it to 1:1 first and then resize.",
      },
      {
        question: "Can I resize many images at once?",
        answer:
          "This page resizes one image at a time. To resize up to 50 images in one step and download them as a ZIP, use the Bulk Image Resizer.",
      },
      {
        question: "Can I resize photos from my iPhone?",
        answer:
          "Yes. HEIC photos are converted in your browser and the resized image is saved as JPG by default.",
      },
    ],
  },
  "compress-image": {
    name: "Compress Image",
    shortName: "Compress",
    tagline: "Make an image file smaller by choosing a format and quality, and see the new size before you download.",
    intro:
      "Compress Image reduces the file size of a photo so it loads faster on a website or fits an email or upload limit. It saves the image again as WebP (the default), AVIF, JPG or PNG at the quality you choose, and shows the estimated new size and the percentage saved as you move the slider. A Target File Size mode sets the quality for you when you need to stay under a limit such as 100 KB.",
    seoTitle: "Compress Image Online – Reduce File Size",
    seoDescription:
      "Compress images online for free. Pick WebP, AVIF, JPG or PNG, set the quality or a target size in KB, and see the saving before you download. No upload needed.",
    keywords: [
      "compress image",
      "reduce image file size",
      "compress jpg",
      "compress image to 100kb",
      "image compressor online",
      "compress photo for email",
      "compress png",
      "convert and compress to webp",
    ],
    howToSteps: [
      {
        title: "Add an image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Choose the output format",
        description:
          "WebP is selected by default. AVIF usually makes the smallest files but takes longer to encode, JPG opens everywhere, and PNG is lossless, so it saves the least space.",
      },
      {
        title: "Set the quality or a target size",
        description:
          "Move the quality slider and watch the size estimate, or switch to Target File Size and type a size in KB or click 50, 100, 200 or 500 KB.",
      },
      {
        title: "Check and download",
        description: "Look at the preview and the percentage saved, then click Download.",
      },
    ],
    features: [
      {
        title: "Live size estimate",
        description:
          "The new file size and the percentage saved update as you change settings, and you are warned when the result would be larger than the original.",
      },
      {
        title: "AVIF, WebP, JPG and PNG",
        description:
          "Four output formats, including AVIF, which is encoded directly in your browser with a WebAssembly encoder.",
      },
      {
        title: "Target file size mode",
        description:
          "Type a size in KB and the tool chooses a quality setting for it. It is an estimate, so check the live size before you download.",
      },
      {
        title: "Dimensions stay the same",
        description:
          "Compression keeps the width and height. To make a file much smaller, resize it first and then compress it.",
      },
    ],
    faqs: [
      {
        question: "How much smaller will my image get?",
        answer:
          "It depends on the image. Large camera photos often shrink a lot as WebP or AVIF at 70% to 85% quality, while small graphics or files that are already compressed may shrink very little. The live estimate shows the result before you download.",
      },
      {
        question: "Which format makes the smallest file: AVIF, WebP or JPG?",
        answer:
          "AVIF is usually the smallest at similar visual quality, followed by WebP and then JPG. AVIF takes longer to encode in the browser, especially for large photos, and some older programs cannot open it.",
      },
      {
        question: "How do I compress an image to 100 KB?",
        answer:
          "Choose Target File Size and click 100 KB. If the live size is still above 100 KB, lower the quality a little more, or reduce the dimensions with Resize Image first.",
      },
      {
        question: "Will compression make my photo look worse?",
        answer:
          "WebP, AVIF and JPG remove detail that is hard to see. At 75% to 90% quality most photos look the same at normal viewing size, while very low settings cause blur and blocky areas.",
      },
      {
        question: "Why is the compressed file bigger than the original?",
        answer:
          "This happens when the original was already well optimized, or when a photo is saved as PNG. Try WebP or AVIF, or a lower quality setting.",
      },
      {
        question: "Is EXIF data removed when I compress a photo?",
        answer:
          "Yes. The new file is built from the image pixels, so camera information and GPS location are not included.",
      },
    ],
  },
  "rotate-image": {
    name: "Rotate Image",
    shortName: "Rotate",
    tagline: "Turn an image by 90°, 180° or any angle from -180° to 180°, and save it in the format you need.",
    intro:
      "Rotate Image fixes photos that appear sideways or upside down, and straightens pictures that are slightly tilted. Use the 90° buttons for quick turns or the Custom Angle slider for small corrections. When the angle is not a multiple of 90°, the canvas grows to fit the whole rotated picture, so no corners are cut off.",
    seoTitle: "Rotate Image Online – 90°, 180° or Any Angle",
    seoDescription:
      "Rotate images online for free. Turn a photo 90° left or right, 180°, or any custom angle to straighten it, then save as JPG, PNG, WebP or AVIF. No upload.",
    keywords: [
      "rotate image",
      "rotate photo online",
      "rotate image 90 degrees",
      "rotate picture",
      "straighten photo",
      "rotate jpg",
      "rotate image by angle",
    ],
    howToSteps: [
      {
        title: "Open the image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Rotate it",
        description:
          "Click +90° to turn clockwise, -90° to turn counterclockwise, or 180° to turn it upside down. For a small correction, drag the Custom Angle slider.",
      },
      {
        title: "Choose the format",
        description:
          "The original format is kept by default. After a custom angle, PNG, WebP and AVIF keep the new corners transparent, while JPG fills them with white.",
      },
      {
        title: "Download",
        description: "Click Download to save the rotated image, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Quick 90° and 180° turns",
        description: "Fix sideways or upside-down photos with one click, and use Reset to go back to the start.",
      },
      {
        title: "Any angle",
        description: "Straighten a tilted horizon or document with the slider, in steps of one degree from -180° to 180°.",
      },
      {
        title: "Nothing is cut off",
        description: "For custom angles, the output canvas is enlarged so the entire rotated image fits inside it.",
      },
      {
        title: "Works with iPhone photos",
        description: "HEIC photos are converted in your browser, so you do not need to convert them first.",
      },
    ],
    faqs: [
      {
        question: "Why does my photo look sideways in some apps?",
        answer:
          "Phones often save the picture in one direction and add a rotation tag to the EXIF data, which some apps ignore. The file you download here has the pixels themselves turned and no rotation tag, so it looks the same everywhere.",
      },
      {
        question: "Does rotating an image reduce its quality?",
        answer:
          "Turning by 90° or 180° moves pixels without changing them. Other angles require the pixels to be recalculated, which softens the image very slightly. Saving as JPG, WebP or AVIF also compresses it again, which PNG avoids.",
      },
      {
        question: "What fills the corners after a custom rotation?",
        answer:
          "The canvas grows to fit the turned image. In PNG, WebP and AVIF the new corner areas are transparent; in JPG they are white.",
      },
      {
        question: "Can I rotate an iPhone HEIC photo?",
        answer:
          "Yes. The photo is converted in your browser and the rotated version is saved as JPG unless you choose another format.",
      },
    ],
  },
  "flip-image": {
    name: "Flip Image",
    shortName: "Flip",
    tagline: "Mirror a picture horizontally or vertically, for example to fix a reversed selfie or backwards text.",
    intro:
      "Flip Image creates a mirror copy of a picture. A horizontal flip swaps left and right, which fixes selfies from a front camera where writing appears backwards. A vertical flip turns the picture upside down like a reflection in water, and using both flips together gives the same result as a 180° rotation.",
    seoTitle: "Flip Image Online – Mirror Horizontally or Vertically",
    seoDescription:
      "Flip images online for free. Mirror a photo horizontally or vertically, fix reversed selfies and backwards text, and save as JPG, PNG, WebP or AVIF. No upload.",
    keywords: [
      "flip image",
      "mirror image online",
      "flip photo horizontally",
      "flip image vertically",
      "mirror selfie",
      "reverse image left to right",
      "flip picture",
    ],
    howToSteps: [
      {
        title: "Open the image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Choose the flip direction",
        description:
          "Click Flip Horizontal to swap left and right, or Flip Vertical to turn it upside down. Click a button again to undo it, or use Flip Both or Reset.",
      },
      {
        title: "Choose the format",
        description: "The original format is kept by default, or you can save as JPG, PNG, WebP or AVIF.",
      },
      {
        title: "Download",
        description: "Click Download to save the mirrored image, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Horizontal and vertical mirror",
        description: "Flip in one direction or both, and see the result in the preview straight away.",
      },
      {
        title: "Pixels are not changed",
        description: "A flip only moves pixels to new positions. Save as PNG to keep every pixel exactly as it was.",
      },
      {
        title: "Keeps your format",
        description: "A JPG is saved as JPG and a PNG as PNG by default, so you get the same kind of file back.",
      },
      {
        title: "Processed in your browser",
        description: "The image is flipped on your device and is never uploaded to a server.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between flipping and rotating?",
        answer:
          "Flipping creates a mirror image, so any text reads backwards. Rotating turns the whole picture around its center, and text stays readable.",
      },
      {
        question: "How do I fix a mirrored selfie?",
        answer:
          "Many front cameras save selfies as a mirror image. Open the photo, click Flip Horizontal and download it; text in the background will read correctly again.",
      },
      {
        question: "Does flipping an image reduce its quality?",
        answer:
          "The flip itself does not change any pixel values. If you save as JPG, WebP or AVIF the image is compressed again, so use a high quality setting or PNG.",
      },
      {
        question: "Can I flip an image both ways at once?",
        answer:
          "Yes. Flip Both mirrors the image horizontally and vertically, which looks the same as rotating it by 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Universal Image Converter",
    shortName: "Converter",
    tagline: "Convert JPG, PNG, WebP, AVIF, GIF, BMP, SVG or iPhone HEIC images to JPG, PNG, WebP or AVIF.",
    intro:
      "Universal Image Converter changes an image from one file format to another. It opens any image your browser can display, such as JPG, PNG, WebP, AVIF, GIF, BMP and SVG, as well as iPhone HEIC photos, and saves it as JPG, PNG, WebP or AVIF. JPG and HEIC photos are set to WebP by default and other images to PNG, but you can choose any of the four outputs.",
    seoTitle: "Image Converter – JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Free image converter that runs in your browser. Convert HEIC, PNG, JPG, WebP, GIF, BMP or SVG to JPG, PNG, WebP or AVIF with adjustable quality. No upload.",
    keywords: [
      "image converter",
      "convert image to jpg",
      "heic to jpg",
      "convert image to webp",
      "convert image to avif",
      "gif to png",
      "bmp to jpg",
      "online image format converter",
    ],
    howToSteps: [
      {
        title: "Open your image",
        description: "Drop, choose or paste an image in any format your browser can open, or an iPhone HEIC photo.",
      },
      {
        title: "Choose the output format",
        description: "Under Save As, select JPG, PNG, WebP or AVIF.",
      },
      {
        title: "Adjust quality and background",
        description:
          "For JPG, WebP and AVIF, set the quality. If the image has transparent areas and you chose JPG, pick the color that fills them.",
      },
      {
        title: "Download the converted file",
        description: "Click Download. AVIF can take a few seconds for large photos because it is encoded in your browser.",
      },
    ],
    features: [
      {
        title: "Many input formats",
        description: "Opens JPG, PNG, WebP, AVIF, GIF, BMP, SVG and other formats your browser supports, plus HEIC and HEIF.",
      },
      {
        title: "Four modern outputs",
        description: "Save as JPG, PNG, WebP or AVIF. AVIF is encoded on your device with a WebAssembly encoder.",
      },
      {
        title: "Transparency handled correctly",
        description: "PNG, WebP and AVIF keep transparent areas. For JPG, you choose the color that replaces them.",
      },
      {
        title: "Quality control",
        description: "Set the quality from 10% to 100% for lossy formats to balance file size and detail.",
      },
    ],
    faqs: [
      {
        question: "How do I convert HEIC to JPG?",
        answer:
          "Open the HEIC photo, select JPG under Save As and click Download. The conversion happens in your browser, so the photo is not sent anywhere.",
      },
      {
        question: "Which format should I choose?",
        answer:
          "JPG for photos that must open everywhere, PNG for screenshots, logos and graphics with sharp edges or transparency, WebP for smaller web images, and AVIF for the smallest files in modern browsers.",
      },
      {
        question: "Can I convert to GIF, BMP or SVG?",
        answer:
          "No. These formats can be opened, but the output is always JPG, PNG, WebP or AVIF. An animated GIF becomes a single still image.",
      },
      {
        question: "Will my transparent background be kept?",
        answer:
          "Yes, if you save as PNG, WebP or AVIF. JPG cannot store transparency, so transparent areas are filled with the color you select.",
      },
      {
        question: "Is the conversion lossless?",
        answer:
          "Saving as PNG is lossless. JPG, WebP and AVIF are lossy formats: a higher quality keeps more detail but creates a larger file.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG to PNG",
    shortName: "JPG → PNG",
    tagline: "Turn a JPG photo into a PNG file that will not lose more quality when you edit and save it again.",
    intro:
      "JPG to PNG converts a JPEG image into the PNG format. PNG uses lossless compression, so the image does not lose more quality each time you edit and save it, which is useful for screenshots, graphics and files you plan to work on later. The PNG has exactly the same pixels and dimensions as your JPG, but the file is usually larger.",
    seoTitle: "JPG to PNG Converter – Free, In Your Browser",
    seoDescription:
      "Convert JPG to PNG online for free. Get a lossless PNG with the same pixels and dimensions as your JPEG, created in your browser without uploading the file.",
    keywords: [
      "jpg to png",
      "convert jpg to png",
      "jpeg to png",
      "jpg to png converter",
      "change jpg to png",
      "save jpg as png",
    ],
    howToSteps: [
      {
        title: "Open a JPG",
        description: "Drop a JPG or JPEG file on the upload box, click to choose one, or paste it with Ctrl+V.",
      },
      {
        title: "Check the preview",
        description: "The output is always PNG, so there are no settings to change. The dimensions stay the same.",
      },
      {
        title: "Download the PNG",
        description: "Click Download PNG, or send the image to another tool such as Resize from the Next action buttons.",
      },
    ],
    features: [
      {
        title: "Exact pixel copy",
        description: "Every pixel of the JPG is stored in the PNG without further compression loss.",
      },
      {
        title: "Safe for repeated editing",
        description: "PNG can be edited and saved many times without new compression artifacts.",
      },
      {
        title: "Same dimensions",
        description: "The PNG has the same width and height as the original JPG.",
      },
      {
        title: "No upload",
        description: "The file is converted inside your browser tab and stays on your device.",
      },
    ],
    faqs: [
      {
        question: "Will converting JPG to PNG improve the quality?",
        answer:
          "No. PNG keeps the image exactly as it is now, but it cannot bring back detail that JPEG compression has already removed.",
      },
      {
        question: "Does converting to PNG make the background transparent?",
        answer:
          "No. A JPG has no transparency, so the PNG keeps the same solid background. To remove the background, use the Remove Background tool.",
      },
      {
        question: "Why is the PNG file bigger than the JPG?",
        answer:
          "PNG stores every pixel without lossy compression, while JPG discards fine detail to save space. Photos saved as PNG are often several times larger.",
      },
      {
        question: "Can I convert several JPGs to PNG at once?",
        answer:
          "This page converts one file at a time. The Bulk Image Resizer can save up to 50 images as PNG in one ZIP if you set the scale to 100%.",
      },
      {
        question: "Is the EXIF data of the JPG kept?",
        answer:
          "No. The PNG is created from the pixels only, so camera information and GPS location are not copied.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG to JPG",
    shortName: "PNG → JPG",
    tagline: "Convert a PNG to a smaller JPG file and choose the color that replaces transparent areas.",
    intro:
      "PNG to JPG turns a PNG image into a JPEG, which is usually much smaller for photos and is accepted by almost every website and app. JPEG cannot store transparency, so you choose white, black or any custom color to fill transparent areas. You can also set the JPG quality from 10% to 100%.",
    seoTitle: "PNG to JPG Converter – Choose Background Color",
    seoDescription:
      "Convert PNG to JPG online for free. Choose a white, black or custom background for transparent areas and set the JPG quality. Works in your browser, no upload.",
    keywords: [
      "png to jpg",
      "convert png to jpg",
      "png to jpeg",
      "png to jpg with white background",
      "png to jpg converter",
      "reduce png file size",
    ],
    howToSteps: [
      {
        title: "Open a PNG",
        description: "Drop a PNG file on the upload box, click to choose one, or paste it with Ctrl+V.",
      },
      {
        title: "Pick the background color",
        description: "Choose White, Black or any color with the color picker. It fills every transparent area.",
      },
      {
        title: "Set the quality",
        description: "85% is a good default. Use a higher value for images with text or fine lines.",
      },
      {
        title: "Download the JPG",
        description: "Click Download JPG to save the converted file.",
      },
    ],
    features: [
      {
        title: "Background color of your choice",
        description: "Transparent and semi-transparent pixels are blended onto white, black or a custom color.",
      },
      {
        title: "Adjustable quality",
        description: "Choose from 10% to 100% to balance file size against detail.",
      },
      {
        title: "Smaller files for photos",
        description: "Photos and detailed screenshots are usually much smaller as JPG than as PNG.",
      },
      {
        title: "Same dimensions",
        description: "The JPG keeps the exact width and height of the PNG.",
      },
    ],
    faqs: [
      {
        question: "What happens to the transparent background?",
        answer:
          "JPG has no transparency, so transparent and semi-transparent pixels are blended onto the background color you choose. White is selected by default.",
      },
      {
        question: "Will the JPG be smaller than the PNG?",
        answer:
          "For photos and images with many colors, usually yes, often much smaller. For simple graphics with few colors, the PNG may already be small, and the JPG can even be larger.",
      },
      {
        question: "What quality setting should I use?",
        answer:
          "85%, the default, works well for most photos. Use 90% to 100% for images with text or fine detail, and lower values when file size matters more than detail.",
      },
      {
        question: "Why does text look blurry in my JPG?",
        answer:
          "JPEG compression can add soft edges and small spots around sharp text and lines. Use a higher quality, or keep logos and screenshots as PNG or WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG to WebP",
    shortName: "JPG → WebP",
    tagline: "Convert JPG photos to WebP for smaller image files that make web pages load faster.",
    intro:
      "JPG to WebP converts JPEG photos to the WebP format, which all current major browsers can display. At similar visual quality, a WebP file is usually smaller than the same image as JPG, so pages that use it load faster. You set the quality with a slider from 10% to 100%, and the image keeps its original dimensions.",
    seoTitle: "JPG to WebP Converter – Smaller Web Images",
    seoDescription:
      "Convert JPG to WebP online for free. Get smaller image files for faster websites, adjust the quality from 10% to 100%, and keep the original size. No upload.",
    keywords: [
      "jpg to webp",
      "convert jpg to webp",
      "jpeg to webp",
      "jpg to webp converter",
      "convert photos to webp for website",
      "webp image converter",
    ],
    howToSteps: [
      {
        title: "Open a JPG",
        description: "Drop a JPG or JPEG photo on the upload box, click to choose one, or paste it with Ctrl+V.",
      },
      {
        title: "Set the quality",
        description: "Start around 80%. Higher values keep more detail; lower values make smaller files.",
      },
      {
        title: "Download the WebP",
        description: "Click Download WebP and compare the new file size with the original.",
      },
    ],
    features: [
      {
        title: "Smaller files at similar quality",
        description: "WebP usually needs fewer bytes than JPG for a photo that looks the same.",
      },
      {
        title: "Quality slider",
        description: "Choose any quality from 10% to 100% to fit your page speed and image detail needs.",
      },
      {
        title: "Original dimensions",
        description: "The photo is converted without changing its width or height.",
      },
      {
        title: "Converted on your device",
        description: "Your photo is processed in the browser and is not uploaded.",
      },
    ],
    faqs: [
      {
        question: "Is WebP better than JPG?",
        answer:
          "For websites, WebP usually gives smaller files at the same visual quality and can also store transparency. JPG is still accepted by more older programs, printers and upload forms.",
      },
      {
        question: "Do all browsers support WebP?",
        answer:
          "Current versions of Chrome, Edge, Firefox and Safari display WebP images. Some older apps and operating systems cannot open them.",
      },
      {
        question: "Why did I get a PNG instead of a WebP?",
        answer:
          "Some browsers, including some versions of Safari, can display WebP but cannot create it. In that case the tool tells you and saves a PNG; use Chrome, Edge or Firefox to get a WebP file.",
      },
      {
        question: "How can I see the file size before downloading?",
        answer:
          "This converter does not show a size estimate. Compress Image with WebP selected shows the expected size and the percentage saved while you adjust the quality.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG to WebP",
    shortName: "PNG → WebP",
    tagline: "Convert PNG images to WebP and keep transparent backgrounds, usually with a much smaller file.",
    intro:
      "PNG to WebP converts PNG files such as screenshots, logos and graphics to the WebP format. WebP supports transparency, so transparent areas stay transparent after conversion. The result is usually much smaller than the PNG, and a quality slider lets you keep text and thin lines sharp.",
    seoTitle: "PNG to WebP Converter – Keeps Transparency",
    seoDescription:
      "Convert PNG to WebP online for free. Transparent backgrounds are kept, files are usually much smaller, and you can set the quality. Runs fully in your browser.",
    keywords: [
      "png to webp",
      "convert png to webp",
      "png to webp transparent",
      "png to webp converter",
      "reduce png size for website",
      "transparent webp",
    ],
    howToSteps: [
      {
        title: "Open a PNG",
        description: "Drop a PNG file on the upload box, click to choose one, or paste a screenshot with Ctrl+V.",
      },
      {
        title: "Set the quality",
        description: "Use 90% or more for logos, text and screenshots; 75% to 85% is usually enough for photos.",
      },
      {
        title: "Download the WebP",
        description: "Click Download WebP. Transparent areas remain transparent in the new file.",
      },
    ],
    features: [
      {
        title: "Transparency kept",
        description: "The alpha channel of your PNG is stored in the WebP, so logos and icons keep their see-through background.",
      },
      {
        title: "Much smaller files",
        description: "WebP compression usually reduces PNG screenshots and graphics to a fraction of their size.",
      },
      {
        title: "Quality control",
        description: "Set the quality from 10% to 100% depending on how much detail the image needs.",
      },
      {
        title: "Same dimensions",
        description: "The WebP keeps the exact width and height of the PNG.",
      },
    ],
    faqs: [
      {
        question: "Does PNG to WebP keep the transparent background?",
        answer: "Yes. WebP supports transparency, so transparent and semi-transparent pixels are kept.",
      },
      {
        question: "Why is the WebP so much smaller than the PNG?",
        answer:
          "PNG is lossless and stores every pixel exactly. WebP here uses lossy compression, which removes detail that is hard to see and saves a lot of space.",
      },
      {
        question: "What quality should I use for logos and screenshots?",
        answer:
          "Use 90% to 100% so that text, icons and thin lines stay sharp. For photos, 75% to 85% is usually enough.",
      },
      {
        question: "Can I use WebP images on my website?",
        answer:
          "Yes. All current major browsers display WebP. If you also support very old browsers or apps, keep the original PNG as a fallback.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP to JPG",
    shortName: "WebP → JPG",
    tagline: "Convert WebP images to JPG so they open in any app, photo viewer or upload form.",
    intro:
      "WebP to JPG converts WebP files, which are common on websites, into standard JPEG images. JPG is the safest choice when an older program, an upload form or a printing service does not accept WebP. If the WebP has transparent areas, you choose the color that fills them, because JPG cannot store transparency.",
    seoTitle: "WebP to JPG Converter – Free, No Upload",
    seoDescription:
      "Convert WebP to JPG online for free. Make WebP images open in any app or upload form, choose a fill color for transparent areas, and set the quality. No upload.",
    keywords: [
      "webp to jpg",
      "convert webp to jpg",
      "webp to jpeg",
      "save webp as jpg",
      "webp to jpg converter",
      "open webp file",
    ],
    howToSteps: [
      {
        title: "Open a WebP file",
        description: "Drop a WebP image on the upload box, click to choose one, or paste it with Ctrl+V.",
      },
      {
        title: "Set the quality and fill color",
        description:
          "Choose a quality between 10% and 100%. If the image has transparent parts, pick the color that will replace them.",
      },
      {
        title: "Download the JPG",
        description: "Click Download JPG to save a file that opens almost anywhere.",
      },
    ],
    features: [
      {
        title: "Maximum compatibility",
        description: "JPG opens in nearly every program, device, printer and website upload form.",
      },
      {
        title: "Fill color for transparency",
        description: "Transparent areas of the WebP are filled with white or any color you choose.",
      },
      {
        title: "Adjustable quality",
        description: "Use the quality slider to balance file size and detail.",
      },
      {
        title: "Private conversion",
        description: "The image is decoded and saved as JPG in your browser; nothing is uploaded.",
      },
    ],
    faqs: [
      {
        question: "Why do images from websites save as WebP?",
        answer:
          "Many websites deliver images as WebP because the files are smaller. When you save one, you get the WebP file, which some older programs cannot open.",
      },
      {
        question: "What happens to transparent parts of a WebP?",
        answer:
          "JPG cannot store transparency, so those areas are filled with a solid color. White is used by default, and you can choose another color.",
      },
      {
        question: "Can I convert an animated WebP?",
        answer: "Only a single still frame is converted, because JPG cannot store animation.",
      },
      {
        question: "Will the JPG lose quality?",
        answer:
          "The WebP is decoded and saved again as JPG, which is a lossy format. Use 90% or higher to keep the result very close to the original.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP to PNG",
    shortName: "WebP → PNG",
    tagline: "Convert WebP images to lossless PNG files that keep transparency and every pixel.",
    intro:
      "WebP to PNG converts WebP images into PNG, a lossless format that almost every editor and viewer supports. Transparent areas stay transparent, and the decoded pixels are saved exactly, so the image does not lose quality when you edit and save it again. Use it when an app cannot open WebP or when you need a file for further editing.",
    seoTitle: "WebP to PNG Converter – Lossless, Transparent",
    seoDescription:
      "Convert WebP to PNG online for free. Keep transparent backgrounds and get a lossless PNG that opens in any image editor. The file is converted in your browser.",
    keywords: [
      "webp to png",
      "convert webp to png",
      "webp to png transparent",
      "webp to png converter",
      "webp to png without losing quality",
      "save webp as png",
    ],
    howToSteps: [
      {
        title: "Open a WebP file",
        description: "Drop a WebP image on the upload box, click to choose one, or paste it with Ctrl+V.",
      },
      {
        title: "Check the preview",
        description: "The output is always a lossless PNG at the same size, so there is no quality setting.",
      },
      {
        title: "Download the PNG",
        description: "Click Download PNG to save the converted file.",
      },
    ],
    features: [
      {
        title: "Transparency preserved",
        description: "Transparent and semi-transparent areas of the WebP stay transparent in the PNG.",
      },
      {
        title: "Lossless output",
        description: "The decoded pixels are stored exactly, with no new compression loss.",
      },
      {
        title: "Opens everywhere",
        description: "PNG is supported by practically all image editors, viewers and office programs.",
      },
      {
        title: "No upload",
        description: "The conversion runs in your browser, so the file stays on your device.",
      },
    ],
    faqs: [
      {
        question: "Does WebP to PNG keep the transparent background?",
        answer: "Yes. PNG fully supports transparency, so the background stays see-through.",
      },
      {
        question: "Why is the PNG larger than the WebP?",
        answer:
          "Most WebP images use lossy compression, while PNG stores every pixel without loss. The same image therefore usually needs more bytes as PNG.",
      },
      {
        question: "Does converting to PNG improve the image quality?",
        answer:
          "No. The PNG keeps the image exactly as it looks now, but it cannot restore detail that WebP compression has already removed.",
      },
      {
        question: "Can I convert an animated WebP to PNG?",
        answer:
          "The tool saves one still image. PNG output here does not include animation frames.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Bulk Image Resizer",
    shortName: "Bulk Resize",
    tagline: "Resize up to 50 images at once by percentage, exact width, or a maximum box, and download them as one ZIP.",
    intro:
      "Bulk Image Resizer applies the same size rule to many images in one step. You can scale every file by a percentage, set an exact width, or fit each image inside a box such as 1200 × 800 so that no side is larger than the box. Each file can keep its original format, and all results download together in one ZIP.",
    seoTitle: "Bulk Image Resizer – Resize Multiple Images",
    seoDescription:
      "Resize multiple images at once for free. Scale up to 50 JPG, PNG or WebP files by percent, exact width or a maximum box, keep their formats, and get one ZIP.",
    keywords: [
      "bulk image resizer",
      "resize multiple images at once",
      "batch resize images",
      "resize images in bulk online",
      "batch resize photos",
      "resize images and download zip",
    ],
    howToSteps: [
      {
        title: "Add your images",
        description: "Drop up to 50 JPG, PNG or WebP files (up to 50 MB each) on the upload area, or click to choose them.",
      },
      {
        title: "Choose a resize mode",
        description:
          "Percentage Scale resizes each image from 10% to 200%. Exact Pixels sets the width, and also the height if you unlock the aspect ratio. Fit Within Box shrinks each image to fit inside the width and height you enter.",
      },
      {
        title: "Pick the output format",
        description:
          "Keep Same as original, or convert everything to PNG, JPG or WebP. Prevent Upscaling is on by default so smaller images are not enlarged.",
      },
      {
        title: "Resize and download",
        description: "Click Resize All, then Download ZIP, or save single files from the list.",
      },
    ],
    features: [
      {
        title: "Three resize modes",
        description: "Scale by percentage, set an exact width, or fit inside a maximum width and height.",
      },
      {
        title: "Keeps each file's format",
        description: "With Same as original, JPGs stay JPG, PNGs stay PNG and WebP files stay WebP.",
      },
      {
        title: "Prevent upscaling",
        description:
          "In Exact Pixels and Fit Within Box modes, images that are already smaller than the target keep their size.",
      },
      {
        title: "One ZIP download",
        description: "Resized files keep their original names with -resized added, and download together in one archive.",
      },
    ],
    faqs: [
      {
        question: "How many images can I resize at once?",
        answer:
          "Up to 50 images per batch, each up to 50 MB. Very large photos use a lot of memory, so on a phone it can help to work in smaller batches.",
      },
      {
        question: "Will my images be stretched?",
        answer:
          "Not in Percentage Scale or Fit Within Box mode, which always keep the proportions. In Exact Pixels mode, if you unlock the aspect ratio and set both sides, images with a different shape will be stretched.",
      },
      {
        question: "Which file formats are supported?",
        answer:
          "JPG, PNG and WebP. iPhone HEIC files are not accepted here; convert them first with the Universal Image Converter.",
      },
      {
        question: "What quality is used for JPG and WebP files?",
        answer:
          "Resized JPG and WebP files are saved at 90% quality. When you convert transparent images to JPG, transparent areas become white.",
      },
      {
        question: "Are my files uploaded anywhere?",
        answer: "No. All images are resized in this browser tab and the ZIP file is created on your device.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Bulk Image Compressor",
    shortName: "Bulk Compress",
    tagline: "Compress up to 50 images at once to WebP, AVIF, JPG or PNG and download them in one ZIP.",
    intro:
      "Bulk Image Compressor reduces the file size of many images in one batch. You choose one output format and quality for all files, start the compression, and see the original size, new size and percentage saved for each image. It is useful for preparing a folder of photos for a website, an online shop or an email.",
    seoTitle: "Bulk Image Compressor – Compress Many Images",
    seoDescription:
      "Compress up to 50 images at once for free. Convert JPG, PNG and WebP files to WebP, AVIF, JPG or PNG, see the saving per file, and get them all in one ZIP.",
    keywords: [
      "bulk image compressor",
      "compress multiple images",
      "batch compress images",
      "compress images in bulk online",
      "batch convert images to webp",
      "compress photos and download zip",
    ],
    howToSteps: [
      {
        title: "Add your images",
        description: "Drop up to 50 JPG, PNG or WebP files (up to 50 MB each), or click to choose them.",
      },
      {
        title: "Choose format and quality",
        description:
          "WebP at 80% is selected by default. Choose AVIF for the smallest files, JPG for compatibility or PNG for lossless output.",
      },
      {
        title: "Compress all files",
        description: "Click Compress All and watch each file's new size and percentage saved appear in the list.",
      },
      {
        title: "Download the results",
        description: "Click Download ZIP to save all compressed files at once, or download single files from the list.",
      },
    ],
    features: [
      {
        title: "Results for every file",
        description:
          "See the size before and after and the percentage saved for each image, with a clear label when a file became larger.",
      },
      {
        title: "Four output formats",
        description: "AVIF, WebP, JPG or PNG, with one quality setting from 10% to 100% for the whole batch.",
      },
      {
        title: "ZIP with original names",
        description: "Each file keeps its name with -compressed added, and duplicate names are numbered automatically.",
      },
      {
        title: "Runs on your device",
        description: "All files are compressed in your browser and never leave your computer or phone.",
      },
    ],
    faqs: [
      {
        question: "How many images can I compress in one batch?",
        answer: "You can add up to 50 images, and each one can be up to 50 MB.",
      },
      {
        question: "Which output format should I choose?",
        answer:
          "WebP is a good balance of size, quality and support. AVIF is usually smaller but encodes more slowly, which is noticeable with many large photos. JPG opens everywhere, and PNG is lossless but reduces the size the least.",
      },
      {
        question: "Why did one of my files get larger?",
        answer:
          "Some images are already well compressed, and saving them again does not help. The list marks these files, so you can keep the original for them.",
      },
      {
        question: "Does bulk compression change the image dimensions?",
        answer:
          "No, the width and height stay the same. To reduce dimensions as well, run the files through the Bulk Image Resizer first.",
      },
      {
        question: "What happens to transparent PNGs when I choose JPG?",
        answer: "JPG cannot store transparency, so transparent areas are filled with white.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Remove Image Metadata",
    shortName: "EXIF Stripper",
    tagline: "Remove EXIF data such as GPS location, camera model and date from a photo before you share it.",
    intro:
      "Remove Image Metadata creates a clean copy of your photo without its hidden EXIF information. Photos from phones and cameras often record the GPS location where they were taken, the device model, and the date and time. This tool redraws the image from its pixels and saves a new file, so that information is not carried over, and it shows the new file size before you download.",
    seoTitle: "Remove EXIF Data from Photos – GPS & Metadata",
    seoDescription:
      "Remove EXIF metadata from photos for free. Strip the GPS location, camera model and date before you share a picture. Processed in your browser, never uploaded.",
    keywords: [
      "remove exif data",
      "remove metadata from photo",
      "remove gps location from photo",
      "exif remover",
      "strip metadata from image",
      "delete photo location data",
      "remove metadata from iphone photo",
    ],
    howToSteps: [
      {
        title: "Open the photo",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC photo.",
      },
      {
        title: "Check the clean copy",
        description: "The preview shows the image that will be saved, together with its new file size.",
      },
      {
        title: "Choose format and quality",
        description:
          "The original format is kept by default. For JPG and WebP, use 90% to 100% quality to stay close to the original, or choose PNG for lossless output.",
      },
      {
        title: "Download and share the new file",
        description: "Click Download and share this copy instead of the original photo.",
      },
    ],
    features: [
      {
        title: "Removes location and camera data",
        description:
          "GPS coordinates, camera make and model, lens, capture date and other EXIF and IPTC fields are not written to the new file.",
      },
      {
        title: "Clean copy from pixels",
        description: "The image is redrawn from its pixels, so no hidden data can be copied over by accident.",
      },
      {
        title: "File size readout",
        description: "See the size of the clean file before you download it.",
      },
      {
        title: "Done on your device",
        description: "Your photo is never uploaded, so its location data is not shared with anyone during the process.",
      },
    ],
    faqs: [
      {
        question: "What metadata is removed?",
        answer:
          "All of it: EXIF data (camera, settings, date and GPS), IPTC and XMP fields such as author or copyright, and the embedded color profile. Only the visible image is kept.",
      },
      {
        question: "Does removing metadata change the image quality?",
        answer:
          "The image is saved again. PNG keeps every pixel, while JPG, WebP and AVIF are compressed again, so choose a high quality. Photos with a wide color profile, such as many iPhone photos, may look slightly less vivid because the profile is not kept.",
      },
      {
        question: "How can I check that the location is gone?",
        answer:
          "Open the downloaded file in Image Analyzer. It reads EXIF data on your device and shows a warning when a GPS location is present.",
      },
      {
        question: "Do apps and websites remove EXIF data for me?",
        answer:
          "Some large platforms remove part of the metadata when you upload, but email, messaging apps and file sharing often send the original file unchanged. Removing it yourself is the safe choice.",
      },
      {
        question: "Can I remove metadata from iPhone HEIC photos?",
        answer:
          "Yes. The HEIC photo is converted in your browser and the clean copy is saved as JPG by default.",
      },
    ],
  },
  "image-analyzer": {
    name: "Image Analyzer",
    shortName: "Analyzer",
    tagline: "See an image's dimensions, file size, aspect ratio, print size and camera EXIF data, with a warning for GPS location.",
    intro:
      "Image Analyzer shows the technical details of an image file without changing it. It reports the file size, format, pixel dimensions, aspect ratio, megapixels and whether the image has transparency. For photos, it also reads camera EXIF data such as camera model, lens, exposure, ISO, date taken and GPS location, and warns you when a photo reveals where it was taken.",
    seoTitle: "Image Analyzer – Check EXIF, Size & Dimensions",
    seoDescription:
      "Check image details online for free: dimensions, file size, aspect ratio, print size and camera EXIF data, with a warning when a photo contains GPS location.",
    keywords: [
      "exif viewer online",
      "image metadata viewer",
      "check image dimensions",
      "view photo exif data",
      "check if photo has gps location",
      "image resolution checker",
      "image info online",
    ],
    howToSteps: [
      {
        title: "Open an image",
        description: "Drop, choose or paste any image your browser can open, including iPhone HEIC photos.",
      },
      {
        title: "Read the specifications",
        description:
          "See the file size, format, dimensions, aspect ratio, megapixels, transparency and print size at 300 DPI.",
      },
      {
        title: "Check the camera data",
        description:
          "The EXIF section lists camera, lens, exposure and date. If the photo contains a GPS location, a warning appears with a button to remove the metadata.",
      },
      {
        title: "Copy the report",
        description: "Click Copy Report to copy all values as plain text.",
      },
    ],
    features: [
      {
        title: "Technical specifications",
        description:
          "File size, format, MIME type, dimensions, aspect ratio, megapixels, color depth, transparency and estimated memory use.",
      },
      {
        title: "Camera EXIF reader",
        description:
          "Shows camera, lens, date taken, exposure time, aperture, ISO, focal length, flash, orientation and editing software when present.",
      },
      {
        title: "GPS location warning",
        description:
          "Displays the coordinates when a photo contains them and offers a one-click way to make a copy without metadata.",
      },
      {
        title: "Print size estimate",
        description: "Shows how large the image prints at 300 DPI, in inches and centimeters.",
      },
      {
        title: "Read-only and local",
        description: "The file is not changed, and all data is read on your device.",
      },
    ],
    faqs: [
      {
        question: "How do I see the EXIF data of a photo?",
        answer:
          "Open the photo here and look at the Camera & EXIF Metadata section. If it says there is no EXIF metadata, the file was saved without it, which is common for screenshots and images downloaded from social media.",
      },
      {
        question: "How can I tell if a photo shows where it was taken?",
        answer:
          "If the photo contains GPS coordinates, the analyzer shows them and displays a warning. Click Remove metadata to create a copy without the location.",
      },
      {
        question: "Which files contain EXIF data?",
        answer:
          "Photos from phones and cameras in JPG and HEIC format usually do. WebP and AVIF files can contain it too, while screenshots and many exported or edited images have little or none.",
      },
      {
        question: "What does the print size at 300 DPI mean?",
        answer:
          "It is the size of a print at 300 dots per inch, a common quality for photo prints. For example, a 3000 × 2000 pixel image prints at about 10 × 6.7 inches.",
      },
      {
        question: "Is the color depth value exact?",
        answer:
          "It is based on the format and on whether the image has transparency (24-bit RGB or 32-bit RGBA). It does not detect 16-bit or HDR images.",
      },
    ],
  },
  "image-color-picker": {
    name: "Image Color Picker",
    shortName: "Color Picker",
    tagline: "Click any point on an image to get its exact color as HEX, RGB, HSL, HSV and CMYK.",
    intro:
      "Image Color Picker finds the exact color of any pixel in a picture. Move the pointer over the image to see a magnified view of the pixels underneath, then click to select a color and copy its code as HEX, RGB, HSL, HSV or CMYK. Colors are read from the full-resolution image, not from the scaled-down preview.",
    seoTitle: "Image Color Picker – Get HEX & RGB from Image",
    seoDescription:
      "Pick colors from any image online for free. Click a pixel to get its HEX, RGB, HSL, HSV and CMYK code, use the zoom loupe for precision, and copy in one click.",
    keywords: [
      "color picker from image",
      "get hex code from image",
      "image color picker",
      "eyedropper tool online",
      "find color in picture",
      "rgb color from image",
      "hex color finder",
    ],
    howToSteps: [
      {
        title: "Open an image",
        description: "Drop, choose or paste an image. A screenshot pasted with Ctrl+V works well.",
      },
      {
        title: "Aim with the magnifier",
        description: "Move the mouse over the preview; a round loupe shows the pixels under the pointer, enlarged.",
      },
      {
        title: "Click to pick the color",
        description: "Click or tap the spot you want. The color appears with its HEX, RGB, HSL, HSV and CMYK values.",
      },
      {
        title: "Copy the code",
        description: "Click Copy next to the format you need. Recent colors are saved below for quick reuse.",
      },
    ],
    features: [
      {
        title: "Magnifier loupe",
        description: "A zoomed 7 × 7 pixel view helps you hit small details, such as a thin line or a single letter.",
      },
      {
        title: "Five color formats",
        description: "Copy HEX, RGB, HSL, HSV or CMYK values with one click each.",
      },
      {
        title: "Color history",
        description: "The last 12 colors you picked are kept as swatches, and clicking one selects it again.",
      },
      {
        title: "Full-resolution sampling",
        description: "Each color is read from the original image pixels, so the value is not affected by the preview size.",
      },
    ],
    faqs: [
      {
        question: "How do I get the HEX code of a color in an image?",
        answer:
          "Open the image, click the color you want, and press Copy next to the HEX value. You can paste it into any design program or CSS file.",
      },
      {
        question: "Can I pick a color from a screenshot?",
        answer:
          "Yes. Take a screenshot, press Ctrl+V on this page to paste it, and click the color you need.",
      },
      {
        question: "Does the color picker work on phones?",
        answer:
          "Yes. Tap the image to select a color. The magnifier appears only with a mouse pointer, so zoom in on the page if you need to hit a very small area.",
      },
      {
        question: "Why do nearby pixels in a photo have slightly different colors?",
        answer:
          "Photos contain noise, gradients and compression effects, so neighboring pixels rarely match exactly. Pick a few points and choose the one that looks right.",
      },
      {
        question: "Why is the CMYK value different from my print software?",
        answer:
          "The CMYK values here are a simple mathematical conversion from RGB. Print software uses color profiles for specific inks and paper, so its numbers can differ.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Image Palette Generator",
    shortName: "Palette",
    tagline: "Extract the main colors of an image as a palette, and copy them as HEX codes, CSS variables or JSON.",
    intro:
      "Image Palette Generator finds the dominant colors in a photo or design and shows them as swatches. You can choose 3, 4, 5, 6 or 8 colors; they are ordered from the color that covers the most area, and very similar shades are merged so each swatch is distinct. Copy the palette as CSS variables or a JSON array, or download it as a PNG swatch sheet.",
    seoTitle: "Color Palette from Image – Extract HEX Codes",
    seoDescription:
      "Generate a color palette from any image for free. Extract 3 to 8 dominant colors, copy HEX codes, CSS variables or JSON, and download a PNG swatch sheet.",
    keywords: [
      "color palette from image",
      "extract colors from image",
      "image palette generator",
      "color scheme from photo",
      "dominant colors in image",
      "palette extractor hex codes",
    ],
    howToSteps: [
      {
        title: "Open an image",
        description: "Drop, choose or paste a photo, illustration, logo or screenshot.",
      },
      {
        title: "Choose the number of colors",
        description: "Click 3, 4, 5, 6 or 8. The swatches update immediately.",
      },
      {
        title: "Copy single colors",
        description: "Click the copy icon on a swatch to copy its HEX code.",
      },
      {
        title: "Export the palette",
        description: "Use Copy CSS or Copy JSON, or download the palette as a PNG swatch sheet.",
      },
    ],
    features: [
      {
        title: "Ordered by coverage",
        description: "The first swatch is the color that covers the largest part of the image.",
      },
      {
        title: "Distinct shades",
        description: "Colors that are nearly identical are merged, so the palette does not repeat the same tone.",
      },
      {
        title: "Ready for developers",
        description: "Export as CSS custom properties (--color-1, --color-2 and so on) or as a JSON array of HEX codes.",
      },
      {
        title: "PNG swatch sheet",
        description: "Download an image of the palette with each HEX code written under its swatch.",
      },
    ],
    faqs: [
      {
        question: "How are the palette colors chosen?",
        answer:
          "The image is sampled at a small size, similar colors are grouped together, and the groups that cover the most area are shown first. Transparent pixels are ignored.",
      },
      {
        question: "Why do I get fewer colors than I selected?",
        answer:
          "Shades that are very close to each other are merged so every swatch is clearly different. An image with only a few distinct colors may return fewer swatches.",
      },
      {
        question: "How do I use the palette in CSS?",
        answer:
          "Click Copy CSS to get a :root block with variables named --color-1, --color-2 and so on, then paste it into your stylesheet.",
      },
      {
        question: "Why is a small accent color missing?",
        answer:
          "The palette favors colors that cover a larger area, so a tiny detail such as a small logo may not appear. Use Image Color Picker to get the exact value of a specific spot.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Add Text to Image",
    shortName: "Add Text",
    tagline: "Write captions or titles on a photo with your choice of font, size, color, outline and background box.",
    intro:
      "Add Text to Image places one or more lines of text on a picture. Drag the text to any spot on the preview, or place it at the top, center or bottom, and style it with seven fonts, bold or italic, alignment, opacity, a drop shadow, an outline and a colored background box. The text is drawn onto the full-resolution image when you download it.",
    seoTitle: "Add Text to Image Online – Free Caption Maker",
    seoDescription:
      "Add text to images online for free. Drag captions anywhere, pick font, size, color, outline, shadow and a background box, then save as JPG, PNG, WebP or AVIF.",
    keywords: [
      "add text to image",
      "add text to photo online",
      "write on picture",
      "put caption on photo",
      "text on image editor",
      "add words to picture",
    ],
    howToSteps: [
      {
        title: "Open your image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Type your text",
        description: "Enter the text in the box. Press Enter to start a new line.",
      },
      {
        title: "Style and position it",
        description:
          "Choose the font, size (12 to 240 px), color, opacity and alignment. Drag the text on the preview, or choose Top, Center, Bottom or Custom Y%.",
      },
      {
        title: "Download",
        description: "Keep the original format or choose JPG, PNG, WebP or AVIF, then click Download.",
      },
    ],
    features: [
      {
        title: "Drag to place",
        description: "Move the text directly on the preview to put it exactly where you want it.",
      },
      {
        title: "Seven fonts",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New and Impact, with bold and italic options.",
      },
      {
        title: "Readable on any photo",
        description: "Add a drop shadow, an outline from 1 to 20 px, or a background box with its own color and opacity.",
      },
      {
        title: "Multi-line text",
        description: "Write several lines and align them left, center or right.",
      },
    ],
    faqs: [
      {
        question: "How do I make text readable on a busy photo?",
        answer:
          "Turn on Outline and choose a color that contrasts with the text, or enable Background box to put a solid or semi-transparent box behind it. A drop shadow also helps on bright areas.",
      },
      {
        question: "Can I add more than one text block?",
        answer:
          "The tool adds one text block, which can have several lines. To add text in a second place, download the result, open it again and add the next text.",
      },
      {
        question: "Which fonts can I use?",
        answer:
          "You can choose from seven fonts. Most of them are system fonts, so if one is not installed on your device, the browser uses a similar font instead.",
      },
      {
        question: "Will the text look sharp in the downloaded image?",
        answer:
          "Yes. The text is drawn at the full resolution of your image. If you save as JPG, use a high quality setting to keep the letter edges clean.",
      },
    ],
  },
  "watermark-image": {
    name: "Watermark Image",
    shortName: "Watermark",
    tagline: "Protect your photos with a text or logo watermark, placed in one spot or repeated across the whole image.",
    intro:
      "Watermark Image adds a copyright notice, website name or logo on top of a photo. Place a text or logo watermark at one of nine positions and set its size and opacity, or repeat the text across the entire image, which is much harder to crop out. Logos can be PNG, WebP, JPG or SVG files; a logo with a transparent background looks best.",
    seoTitle: "Watermark Image Online – Add Text or Logo",
    seoDescription:
      "Add a watermark to photos online for free. Use text or your logo, choose from nine positions, set opacity and rotation, or tile the text across the whole image.",
    keywords: [
      "watermark image",
      "add watermark to photo",
      "add logo to photo",
      "watermark photos online free",
      "copyright watermark",
      "tiled watermark",
      "transparent watermark",
    ],
    howToSteps: [
      {
        title: "Open your photo",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Choose text or logo",
        description:
          "Select Text Watermark and type your text, or select Image Logo and choose a PNG, WebP, JPG or SVG file.",
      },
      {
        title: "Place and style it",
        description:
          "Click a position in the 3 × 3 grid, then set the opacity and size. For text, you can also set the color and rotation, or turn on Repeat Across Image.",
      },
      {
        title: "Download",
        description: "Keep the original format or choose another one, then click Download.",
      },
    ],
    features: [
      {
        title: "Text or logo",
        description: "Use a copyright line or website address, or upload your own logo image.",
      },
      {
        title: "Nine positions",
        description: "Corners, edges or center, with a margin that adapts to the image size.",
      },
      {
        title: "Tiled text pattern",
        description: "Repeat your text across the whole photo at the angle you choose.",
      },
      {
        title: "Opacity, size and rotation",
        description: "Opacity from 10% to 100%, text size from 14 to 140 px, logo width from 5% to 60% of the image, and text rotation from -90° to 90°.",
      },
    ],
    faqs: [
      {
        question: "How do I add my logo as a watermark?",
        answer:
          "Choose Image Logo, click Choose Logo and select your file. Set the logo size as a percentage of the image width, pick a position, and lower the opacity so the photo stays visible.",
      },
      {
        question: "What opacity should a watermark have?",
        answer:
          "Around 30% to 50% is visible without hiding the photo. Use a higher value if the watermark must be easy to read.",
      },
      {
        question: "What is a tiled watermark?",
        answer:
          "Repeat Across Image prints your text many times over the whole photo. It is much harder to remove by cropping than a single mark in a corner. It is available for text watermarks.",
      },
      {
        question: "Why does my logo have a white box around it?",
        answer:
          "The logo file has a solid background. Use a PNG, WebP or SVG with a transparent background, or remove the background first with Remove Background.",
      },
      {
        question: "Can a watermark stop people from copying my photo?",
        answer:
          "A watermark makes copying less attractive and shows who owns the image, but it cannot fully prevent copying. Large, central or tiled marks are harder to remove than a small corner mark.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Add Border to Image",
    shortName: "Add Border",
    tagline: "Add a solid color border or frame around a photo, outside the image or over its edges.",
    intro:
      "Add Border to Image draws a colored frame around a picture. In Outside mode the canvas grows, so the whole photo stays visible inside the border; in Inside mode the border is drawn over the edges and the image keeps its original size. You can set the width from 1 to 100 pixels, any color, and an opacity level.",
    seoTitle: "Add Border to Image Online – Free Photo Frame",
    seoDescription:
      "Add a border to images online for free. Choose a color, a width from 1 to 100 px and the opacity, and place it outside the photo or over its edges. No upload.",
    keywords: [
      "add border to image",
      "add frame to photo",
      "image border online",
      "put a border around a picture",
      "white border for instagram",
      "photo outline",
    ],
    howToSteps: [
      {
        title: "Open your image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Choose the border mode",
        description: "Outside (Expand Canvas) adds the border around the photo. Inside (Preserve Size) draws it over the edges.",
      },
      {
        title: "Set width, color and opacity",
        description: "Drag the width slider from 1 to 100 px, pick any color, and lower the opacity for a softer frame.",
      },
      {
        title: "Download",
        description: "Keep the original format or choose JPG, PNG, WebP or AVIF, then click Download.",
      },
    ],
    features: [
      {
        title: "Outside or inside",
        description: "Add space around the photo, or keep the exact original dimensions.",
      },
      {
        title: "Any width and color",
        description: "From a thin 1 px line to a wide 100 px frame, in any color.",
      },
      {
        title: "Adjustable opacity",
        description: "Make the border semi-transparent for a lighter effect.",
      },
      {
        title: "Keeps your format",
        description: "The bordered image is saved in the same format as the original unless you choose another one.",
      },
    ],
    faqs: [
      {
        question: "Will adding a border change the image size?",
        answer:
          "In Outside mode the border width is added to every side, so a 1000 × 800 image with a 20 px border becomes 1040 × 840. Inside mode keeps the size and covers the outer edge of the photo.",
      },
      {
        question: "How do I add a white border for Instagram?",
        answer:
          "Crop the photo to 1:1 first, then add a white border in Outside mode. The result stays square because the same width is added to every side.",
      },
      {
        question: "Can I make a border with rounded corners?",
        answer:
          "The border itself is rectangular. For a rounded look, add the border first and then open the result in Round Image Corners.",
      },
      {
        question: "What does the border opacity do?",
        answer:
          "Lower opacity makes the border see-through. In Inside mode the photo shows through it; in Outside mode the border area becomes partly transparent in PNG, WebP and AVIF, and blends with white in JPG.",
      },
    ],
  },
  "round-image": {
    name: "Round Image Corners",
    shortName: "Round Corners",
    tagline: "Round the corners of an image or cut it into a circle, with a transparent background in PNG.",
    intro:
      "Round Image Corners gives a picture soft rounded corners or turns it into a circle for a profile picture or app icon. Choose the Small, Medium or Large preset, set an exact radius with the slider, or click Make Circle Avatar. The result is saved as PNG by default, so the cut-away corners stay transparent.",
    seoTitle: "Round Image Corners Online – Circle Crop Too",
    seoDescription:
      "Round image corners online for free or cut a photo into a circle. Set the corner radius, keep a transparent background as PNG, or pick a fill color for JPG.",
    keywords: [
      "round image corners",
      "rounded corners image online",
      "make image circle",
      "circle profile picture maker",
      "round profile picture",
      "rounded corner png",
    ],
    howToSteps: [
      {
        title: "Open your image",
        description: "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC image.",
      },
      {
        title: "Choose the shape",
        description: "Click Make Circle Avatar, choose Small, Medium or Large corners, or drag the radius slider.",
      },
      {
        title: "Choose the format",
        description:
          "PNG is selected by default. If you choose JPG, pick white, black or a custom color for the corners.",
      },
      {
        title: "Download",
        description: "Click Download to save the rounded image, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Presets and exact radius",
        description: "Small, Medium and Large presets, or any radius from 0 up to half of the shorter side.",
      },
      {
        title: "Circle avatar",
        description: "Turns the image into a circle in one click, ready for profile pictures.",
      },
      {
        title: "Transparent corners",
        description: "PNG, WebP and AVIF keep the area outside the curve transparent.",
      },
      {
        title: "Fill color for JPG",
        description: "When you save as JPG, the corners are filled with white, black or a color you choose.",
      },
    ],
    faqs: [
      {
        question: "How do I make a round profile picture?",
        answer:
          "Click Make Circle Avatar. The circle uses the shorter side of the image and is centered, so for a non-square photo, crop it to 1:1 first to center the face and avoid empty space at the sides.",
      },
      {
        question: "Why are my corners white or black instead of transparent?",
        answer: "JPG cannot store transparency. Choose PNG, WebP or AVIF to keep the corners transparent.",
      },
      {
        question: "What do the Small, Medium and Large presets mean?",
        answer:
          "The largest possible radius is half of the shorter side of the image. Small, Medium and Large use 10%, 25% and 50% of that maximum.",
      },
      {
        question: "Why is my rounded image file so large?",
        answer:
          "PNG is lossless, so a full-size camera photo can create a big file. Resize the photo first, or save as WebP, which also keeps transparency and is much smaller.",
      },
    ],
  },
  "favicon-generator": {
    name: "Favicon Generator",
    shortName: "Favicon",
    tagline: "Create favicon.ico, an Apple touch icon, Android icons and a web manifest from one image, in a single ZIP.",
    intro:
      "Favicon Generator turns a logo or image into the set of icon files a website needs. It crops the image to a centered square and creates favicon.ico (with 16, 32 and 48 pixel sizes), PNG icons from 16 to 512 pixels, a 180 × 180 apple-touch-icon.png and a site.webmanifest file, all in one ZIP. The page also shows the HTML link tags to paste into the head section of your site.",
    seoTitle: "Favicon Generator – ICO, PNG & Apple Touch Icon",
    seoDescription:
      "Free favicon generator. Upload a PNG, JPG or SVG logo and get favicon.ico, PNG icons from 16 to 512 px, an Apple touch icon and a web manifest in one ZIP file.",
    keywords: [
      "favicon generator",
      "favicon maker",
      "create favicon ico",
      "png to ico",
      "apple touch icon generator",
      "favicon from image",
      "website icon generator",
    ],
    howToSteps: [
      {
        title: "Upload your logo",
        description:
          "Drop or choose a PNG, JPG, SVG or HEIC image. A square image of at least 512 × 512 pixels gives the best result.",
      },
      {
        title: "Make sure it is centered",
        description:
          "Icons are cut from the center of the image. If your logo is off-center or the image is not square, crop it to 1:1 first with Crop Image.",
      },
      {
        title: "Download the favicon package",
        description: "Click Download Favicon Package (.ZIP) to get all icon files and the manifest.",
      },
      {
        title: "Add it to your website",
        description:
          "Upload the files to the root folder of your site, then click Copy Code and paste the HTML tags into the head section of your pages.",
      },
    ],
    features: [
      {
        title: "Multi-size favicon.ico",
        description: "One ICO file containing 16 × 16, 32 × 32 and 48 × 48 icons for browser tabs and bookmarks.",
      },
      {
        title: "PNG icons for every device",
        description: "PNG files at 16, 32, 48, 64, 128, 192 and 512 pixels, plus a 180 × 180 apple-touch-icon.png.",
      },
      {
        title: "Web app manifest",
        description: "A site.webmanifest file that points to the 192 and 512 pixel icons for Android and installable web apps.",
      },
      {
        title: "Clear small sizes",
        description: "Icons are reduced in several steps from the full image, which keeps the 16 and 32 pixel versions cleaner.",
      },
      {
        title: "Ready-to-paste HTML",
        description: "Copy the link tags for the icons and the manifest with one click.",
      },
    ],
    faqs: [
      {
        question: "What size should my favicon image be?",
        answer:
          "Use a square image of at least 512 × 512 pixels so the largest icon stays sharp. Simple shapes and strong colors stay recognizable at 16 × 16.",
      },
      {
        question: "What files are in the ZIP?",
        answer:
          "favicon.ico, favicon-16x16.png to favicon-512x512.png (16, 32, 48, 64, 128, 192 and 512), apple-touch-icon.png at 180 × 180, and site.webmanifest.",
      },
      {
        question: "Where do I put the favicon files?",
        answer:
          "Upload them to the root folder of your website, the same place as your home page. Then paste the HTML tags shown on this page into the head section of every page.",
      },
      {
        question: "Why is part of my logo cut off?",
        answer:
          "The tool takes the largest centered square from your image. If the logo is wide or not centered, crop it to a square with some space around it before you generate the icons.",
      },
      {
        question: "Can I use an SVG logo?",
        answer:
          "Yes. The SVG is drawn as an image and saved as PNG and ICO files. The ZIP does not include an SVG favicon.",
      },
      {
        question: "Do I need to edit the manifest file?",
        answer:
          "Yes. site.webmanifest uses the placeholder name App and dark theme colors. Open it in a text editor and change name, short_name and the colors to match your site.",
      },
    ],
  },
  "image-to-base64": {
    name: "Image to Base64",
    shortName: "Image → Base64",
    tagline: "Convert an image file to a Base64 string you can copy, with ready-made HTML and CSS snippets.",
    intro:
      "Image to Base64 encodes an image file as Base64 text, so it can be stored or sent as plain text, for example inside JSON, an HTML page or a CSS file. The string is created from the file's original bytes, so the image is not compressed again or changed. The tool shows the character count and also gives you an HTML img tag and a CSS background-image rule that contain the full image.",
    seoTitle: "Image to Base64 Converter – Copy Base64 String",
    seoDescription:
      "Convert images to Base64 online for free. Encode the original JPG, PNG, WebP, GIF or SVG bytes and copy the string, an HTML img tag or a CSS rule in one click.",
    keywords: [
      "image to base64",
      "convert image to base64",
      "base64 encode image",
      "png to base64",
      "jpg to base64",
      "svg to base64",
      "base64 image string",
    ],
    howToSteps: [
      {
        title: "Open an image",
        description: "Drop, choose or paste any image file. Small images such as icons work best.",
      },
      {
        title: "Get the Base64 string",
        description: "The string appears right away, with its length in characters and its approximate size.",
      },
      {
        title: "Copy what you need",
        description: "Click Copy Base64 for the bare string, or use Copy HTML or Copy CSS for a ready-made snippet.",
      },
      {
        title: "Paste it into your code",
        description: "Paste the string into your JSON, HTML, CSS or script.",
      },
    ],
    features: [
      {
        title: "Byte-exact encoding",
        description: "The original file is encoded as it is, with no re-compression or quality change.",
      },
      {
        title: "Size information",
        description: "See the number of characters and the approximate size of the string before you use it.",
      },
      {
        title: "HTML and CSS snippets",
        description: "Copy an img tag or a background-image rule with the complete data URI included.",
      },
      {
        title: "Encoded locally",
        description: "The file is read and encoded in your browser and is never uploaded.",
      },
    ],
    faqs: [
      {
        question: "What is Base64 used for with images?",
        answer:
          "Base64 turns binary image data into plain text characters. Developers use it to place small images directly in HTML, CSS, JSON or email templates, so no separate image file has to be loaded.",
      },
      {
        question: "Why is the Base64 string larger than the image file?",
        answer:
          "Base64 uses 4 text characters for every 3 bytes, so the result is about 33% larger. A 30 KB image becomes roughly 40 KB of text.",
      },
      {
        question: "What is the difference between Base64 and a data URI?",
        answer:
          "Base64 is only the encoded text. A data URI adds a prefix such as data:image/png;base64, so browsers know the file type. This tool gives the bare string; Image to Data URI gives the full version.",
      },
      {
        question: "Should I convert large images to Base64?",
        answer:
          "Usually not. Base64 works best for small images such as icons. Large photos make your HTML or CSS much heavier, and the browser cannot cache the image as a separate file.",
      },
      {
        question: "Is my image changed during encoding?",
        answer:
          "No, the original bytes are encoded. The only exception is iPhone HEIC photos, which are converted to PNG first because most browsers cannot display HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Image to Data URI",
    shortName: "Data URI",
    tagline: "Turn an image into a complete data URI, ready to paste into an HTML src attribute or a CSS url() value.",
    intro:
      "Image to Data URI converts an image file into a data URI: one line of text that contains both the file type and the Base64-encoded image. You can paste it directly into an img src attribute or a CSS url() value, and the image displays without a separate file. The MIME type in the prefix is taken from your file, and the image bytes are not changed.",
    seoTitle: "Image to Data URI Converter – HTML & CSS Ready",
    seoDescription:
      "Convert an image to a data URI online for free. Get a data:image Base64 string with the correct MIME type and copy it as an HTML img tag or CSS background rule.",
    keywords: [
      "image to data uri",
      "data uri generator",
      "convert image to data url",
      "base64 data uri",
      "inline image in css",
      "embed image in html",
      "data url image",
    ],
    howToSteps: [
      {
        title: "Open an image",
        description: "Drop, choose or paste any image file, such as an icon, logo or small graphic.",
      },
      {
        title: "Get the data URI",
        description: "The complete data URI, starting with data:image/, appears with its length and approximate size.",
      },
      {
        title: "Copy it",
        description: "Click Copy Data URI, or use Copy HTML or Copy CSS for a ready-made snippet.",
      },
      {
        title: "Paste it into your page",
        description: "Use it anywhere a normal image URL works, such as an img tag or a CSS background.",
      },
    ],
    features: [
      {
        title: "Correct MIME type",
        description: "The prefix matches your file, for example image/png, image/jpeg or image/svg+xml.",
      },
      {
        title: "Original bytes",
        description: "The file is encoded as it is, so quality and size are not changed by re-compression.",
      },
      {
        title: "Copy-ready snippets",
        description: "Get a full img tag or a background-image rule with the data URI already inside.",
      },
      {
        title: "Private",
        description: "The data URI is created in your browser, so the image is not uploaded.",
      },
    ],
    faqs: [
      {
        question: "What is a data URI?",
        answer:
          "A data URI is a link that contains the file itself instead of pointing to it. For images it starts with data:image/png;base64, or a similar prefix, and browsers display it like a normal image URL.",
      },
      {
        question: "How do I use a data URI in CSS?",
        answer:
          "Click Copy CSS to get a background-image rule with the full URI inside url(), and paste it into your stylesheet.",
      },
      {
        question: "When should I avoid data URIs?",
        answer:
          "Avoid them for large images and for images used on many pages. The encoded text is about one third larger than the file, and the browser cannot cache it separately.",
      },
      {
        question: "Do data URI images work in emails?",
        answer:
          "Support varies. Many email programs, including some webmail services, do not show data URI images, so test your email or use an image hosted online.",
      },
      {
        question: "Which image types are supported?",
        answer:
          "Any image your browser can open, such as JPG, PNG, GIF, WebP, AVIF and SVG. iPhone HEIC photos are converted to PNG first, so their data URI uses image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 to Image",
    shortName: "Base64 → Image",
    tagline: "Paste a Base64 string or data URI to preview the image and download it as PNG, JPG or WebP.",
    intro:
      "Base64 to Image decodes Base64 text back into a picture you can see and save. You can paste a bare Base64 string, a full data URI, or a CSS url() or HTML src snippet that contains one; URL-safe Base64 and line breaks are handled automatically. The tool detects whether the data is PNG, JPEG, GIF, WebP, SVG, BMP or AVIF, and shows the decoded image with its dimensions.",
    seoTitle: "Base64 to Image Decoder – Preview & Download",
    seoDescription:
      "Decode Base64 to an image online for free. Paste a Base64 string, data URI or CSS or HTML snippet, preview the picture, and download it as PNG, JPG or WebP.",
    keywords: [
      "base64 to image",
      "decode base64 image",
      "base64 to png",
      "base64 to jpg",
      "data uri to image",
      "convert base64 string to image",
      "base64 image viewer",
    ],
    howToSteps: [
      {
        title: "Paste the Base64 data",
        description: "Paste into the text box, click Paste, or load a .txt file that contains the string.",
      },
      {
        title: "Check the preview",
        description: "The image is decoded automatically and shown with its width and height. An error message appears if the text is not valid.",
      },
      {
        title: "Choose an export format",
        description: "Select PNG, JPG or WebP.",
      },
      {
        title: "Download the image",
        description: "Click Download Decoded Image to save it to your device.",
      },
    ],
    features: [
      {
        title: "Accepts many input shapes",
        description:
          "Bare Base64, data URIs, CSS url() and HTML src snippets, URL-safe Base64, and text broken over several lines.",
      },
      {
        title: "Automatic format detection",
        description: "Recognizes PNG, JPEG, GIF, WebP, SVG, BMP and AVIF from the data itself, even if the prefix is missing or wrong.",
      },
      {
        title: "Instant preview",
        description: "See the decoded image and its dimensions as soon as you paste.",
      },
      {
        title: "Three export formats",
        description: "Save the result as PNG, JPG or WebP.",
      },
    ],
    faqs: [
      {
        question: "What kind of Base64 text can I paste?",
        answer:
          "A bare Base64 string, a data URI such as data:image/png;base64,..., or a CSS or HTML snippet that contains one. Spaces, line breaks and URL-safe characters are cleaned up automatically.",
      },
      {
        question: "Why do I get an error?",
        answer:
          "The text is often cut off when it is copied. Make sure you copied the whole string, including the end, which may contain = signs.",
      },
      {
        question: "Is the downloaded file identical to the original?",
        answer:
          "The image is decoded and saved again in the format you choose. PNG keeps every pixel, while JPG and WebP are compressed again. Animated GIFs become a single still image, and SVG graphics are saved as pixel images.",
      },
      {
        question: "How does the tool know which image type it is?",
        answer:
          "Each format starts with a known signature, for example iVBORw0KGgo for PNG or /9j/ for JPEG. The tool reads these first characters to decode the image correctly.",
      },
      {
        question: "Is my Base64 data sent to a server?",
        answer: "No. The text is decoded in your browser and the image is created on your device.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG to PNG",
    shortName: "SVG → PNG",
    tagline: "Convert SVG vector files to sharp PNG images at 1x, 2x, 4x or 8x size, with transparency kept.",
    intro:
      "SVG to PNG turns a vector graphic, such as a logo or icon, into a PNG image for places that do not accept SVG files. Choose 1x, 2x, 4x or 8x the SVG's own size; because the vector is drawn again at that size, a larger scale gives a sharper image instead of a blurry one. Transparent backgrounds stay transparent in the PNG.",
    seoTitle: "SVG to PNG Converter – High Resolution, Transparent",
    seoDescription:
      "Convert SVG to PNG online for free. Export at 1x, 2x, 4x or 8x for sharp, high-resolution images with a transparent background. Converted in your browser.",
    keywords: [
      "svg to png",
      "convert svg to png",
      "svg to png high resolution",
      "svg to png transparent",
      "export svg as png",
      "svg converter",
    ],
    howToSteps: [
      {
        title: "Open an SVG file",
        description: "Drop an .svg file on the upload box or click to choose one.",
      },
      {
        title: "Choose the scale",
        description: "Select 1x, 2x, 4x or 8x. The output width and height in pixels are shown below the buttons.",
      },
      {
        title: "Download the PNG",
        description: "Click Download PNG to save the image, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Sharp at every scale",
        description: "The vector is rendered again at the chosen size, so lines and text stay crisp.",
      },
      {
        title: "Transparent background",
        description: "Areas without fill in the SVG stay transparent in the PNG.",
      },
      {
        title: "Output size preview",
        description: "See the exact pixel dimensions for each scale before you download.",
      },
      {
        title: "Lossless PNG",
        description: "The rendered image is saved as PNG with no compression loss.",
      },
    ],
    faqs: [
      {
        question: "How do I get a high-resolution PNG from an SVG?",
        answer:
          "Choose 4x or 8x. A 256 × 256 SVG becomes 1024 × 1024 at 4x or 2048 × 2048 at 8x, and stays sharp because it is drawn again at that size.",
      },
      {
        question: "Why is the output size not what I expected?",
        answer:
          "The 1x size comes from the width and height set in the SVG file. If the SVG has only a viewBox and no width or height, the browser may use a default size; add width and height attributes to control it.",
      },
      {
        question: "Why are fonts or pictures missing in my PNG?",
        answer:
          "When an SVG is drawn as an image, browsers do not load external files it links to, such as web fonts or linked pictures. Convert text to outlines and embed images in the SVG before converting.",
      },
      {
        question: "Will the PNG keep the transparent background?",
        answer: "Yes. Any area of the SVG without a fill or background stays transparent.",
      },
      {
        question: "Can I convert SVG to JPG?",
        answer:
          "This tool saves PNG only. To get a JPG, convert to PNG first and then open the PNG in PNG to JPG, where you can also choose a background color.",
      },
    ],
  },
  "photo-filters": {
    name: "Photo Filters & Effects",
    shortName: "Filters",
    tagline: "Apply ready-made looks such as Vintage, Noir or Cinematic, then adjust brightness, contrast, color and vignette.",
    intro:
      "Photo Filters & Effects changes the look and mood of a photo. Start with one of eight presets, such as Cinematic, Vintage 70s, Moody Noir or Sunset Warm, and then adjust brightness, contrast, saturation, sepia, black and white, hue, clarity, vignette and soft blur with sliders. A split view lets you compare the edited photo with the original before you download it as PNG, JPG or WebP.",
    seoTitle: "Photo Filters Online – Free Effects & Presets",
    seoDescription:
      "Apply photo filters online for free. Try Vintage, Noir, Cinematic and more, adjust brightness, contrast, saturation and vignette, and compare before and after.",
    keywords: [
      "photo filters online",
      "add filter to photo",
      "black and white photo converter",
      "vintage photo filter",
      "sepia filter online",
      "adjust brightness and contrast online",
      "vignette effect",
    ],
    howToSteps: [
      {
        title: "Upload a photo",
        description: "Drop, choose or paste a JPG, PNG or WebP image.",
      },
      {
        title: "Choose a preset",
        description:
          "Try Cinematic, Vintage 70s, Cyberpunk, Moody Noir, Sunset Warm, Cool Fade, Dramatic HDR or Negative. Original removes all effects.",
      },
      {
        title: "Fine-tune with sliders",
        description:
          "Adjust brightness, contrast, saturation, sepia, monochrome, hue shift, clarity, vignette and soft focus until the photo looks right.",
      },
      {
        title: "Compare and download",
        description: "Use Compare Split View to check the before and after, then download as PNG, WebP or JPG, or copy the image.",
      },
    ],
    features: [
      {
        title: "Eight one-click presets",
        description: "Ready-made looks from warm vintage tones to high-contrast black and white.",
      },
      {
        title: "Nine adjustment sliders",
        description: "Brightness, contrast and saturation up to 200%, plus sepia, monochrome, hue, clarity, vignette and blur.",
      },
      {
        title: "Before and after view",
        description: "Drag the split line across the photo to compare the original and the edited version, on desktop or touch screens.",
      },
      {
        title: "Full-resolution export",
        description: "The effects are applied to the full-size photo when you download it.",
      },
    ],
    faqs: [
      {
        question: "How do I make a photo black and white?",
        answer:
          "Click the Moody Noir preset for a high-contrast look, or set the Monochrome (B&W) slider to 100% and adjust brightness and contrast yourself.",
      },
      {
        question: "Can I undo a filter?",
        answer:
          "Yes. Click Reset to return to the original look at any time. Your original file is never changed.",
      },
      {
        question: "Does applying a filter lower the resolution?",
        answer:
          "No. The download has the same width and height as your original photo.",
      },
      {
        question: "Which download format should I choose?",
        answer:
          "JPG and WebP are saved at 95% quality and are much smaller for photos. PNG keeps every pixel but creates large files for photos.",
      },
      {
        question: "Can I use filters on iPhone HEIC photos?",
        answer:
          "This tool does not open HEIC files. Convert the photo to JPG first with the Universal Image Converter, then open the JPG here.",
      },
    ],
  },
  "meme-generator": {
    name: "Meme Generator",
    shortName: "Meme Maker",
    tagline: "Make a meme from your own photo or a starter template, with bold captions at the top, middle and bottom.",
    intro:
      "Meme Generator adds classic meme captions to a picture. Upload your own image or start from one of eight simple built-in templates, then type the top, middle and bottom captions; long lines wrap automatically to fit the width. Choose the font (Impact by default), size, text and outline colors, alignment and uppercase, and download the meme as PNG, JPG or WebP without any watermark.",
    seoTitle: "Meme Generator – Add Captions to Any Image",
    seoDescription:
      "Make memes online for free. Add top, middle and bottom captions to your photo or a template, choose font, size and outline, and download with no watermark.",
    keywords: [
      "meme generator",
      "meme maker",
      "make a meme",
      "add meme text to image",
      "impact font meme",
      "meme generator no watermark",
      "custom meme from photo",
    ],
    howToSteps: [
      {
        title: "Choose a picture",
        description: "Upload or paste a JPG, PNG or WebP image, or click one of the quick templates.",
      },
      {
        title: "Write the captions",
        description: "Type the top and bottom captions, and add a middle caption if you need one.",
      },
      {
        title: "Style the text",
        description: "Pick the font, size, text color, outline color and width, alignment, and whether to use uppercase.",
      },
      {
        title: "Download or copy",
        description: "Download the meme as PNG, WebP or JPG, or copy it to the clipboard to paste into a chat.",
      },
    ],
    features: [
      {
        title: "Three caption areas",
        description: "Top, middle and bottom captions, with automatic line wrapping for long text.",
      },
      {
        title: "Classic meme style",
        description: "White Impact text with a black outline by default, plus Arial, Comic Sans, Montserrat and Times fonts.",
      },
      {
        title: "Text scales with the image",
        description: "The font size is relative to the image height, so captions look the same on small and large pictures.",
      },
      {
        title: "No watermark",
        description: "Your meme is saved exactly as you see it, without any added logo.",
      },
    ],
    faqs: [
      {
        question: "Does the meme have a watermark?",
        answer: "No. The downloaded image contains only your picture and your captions.",
      },
      {
        question: "What font do memes usually use?",
        answer:
          "The classic meme style is Impact in white with a black outline, which is the default here. If a font is not installed on your device, the browser uses a similar one.",
      },
      {
        question: "Can I use my own picture?",
        answer: "Yes. Upload a JPG, PNG or WebP image, or paste one from the clipboard with Ctrl+V.",
      },
      {
        question: "My caption covers too much of the picture. What can I do?",
        answer:
          "Lower the font size, or move part of the text to the middle or bottom caption. Long captions wrap onto several lines automatically.",
      },
      {
        question: "Can I make memes on my phone?",
        answer:
          "Yes. The meme generator works in mobile browsers; type your captions and use the download button to save the image.",
      },
    ],
  },
  "split-image": {
    name: "Image Splitter & Grid Cutter",
    shortName: "Split Grid",
    tagline: "Cut one image into a grid of tiles, such as a 3×3 Instagram grid or a panorama carousel, and download a ZIP.",
    intro:
      "Image Splitter & Grid Cutter divides a picture into rows and columns of separate image files. Use the Instagram 3×3 preset for a profile grid, Panorama 3×1 or Carousel 2×1 for swipeable posts, 2×2 for four equal parts, or set your own grid of up to 12 rows and 12 columns. All tiles download together as numbered PNG files in a ZIP, or you can click a single tile to save only that one.",
    seoTitle: "Split Image into Grid – Instagram 3×3 & Panorama",
    seoDescription:
      "Split an image into a grid online for free. Make a 3x3 Instagram grid, panorama carousel slices or a custom grid up to 12x12, and download all tiles as a ZIP.",
    keywords: [
      "split image into grid",
      "image splitter",
      "instagram grid maker",
      "split panorama for instagram carousel",
      "cut image into pieces",
      "3x3 grid photo",
      "split image into tiles",
    ],
    howToSteps: [
      {
        title: "Upload your image",
        description: "Drop, choose or paste a JPG, PNG or WebP image.",
      },
      {
        title: "Choose the grid",
        description:
          "Pick Instagram 3×3 Grid, Panorama 3×1, Carousel 2×1 or 4-Square (2×2), or type your own number of rows and columns.",
      },
      {
        title: "Check the preview",
        description: "The preview shows where the image will be cut and the number of each tile.",
      },
      {
        title: "Download the tiles",
        description: "Click Download All Tiles (ZIP), or click a single tile in the preview to download just that one.",
      },
    ],
    features: [
      {
        title: "Social media presets",
        description: "One click for a 3×3 profile grid, a 3-slide or 2-slide panorama carousel, or a 2×2 split.",
      },
      {
        title: "Custom grids",
        description: "Any combination from 1 to 12 rows and 1 to 12 columns, up to 144 tiles.",
      },
      {
        title: "Numbered tiles",
        description: "Files are named tile_01, tile_02 and so on, from left to right and top to bottom.",
      },
      {
        title: "No quality loss",
        description: "Tiles are cut from the full-resolution image and saved as lossless PNG files.",
      },
    ],
    faqs: [
      {
        question: "In which order should I post the tiles on Instagram?",
        answer:
          "Tiles are numbered from left to right and top to bottom, starting with tile_01. Instagram shows the newest post first, so upload the last tile first (tile_09 for a 3×3 grid) and finish with tile_01.",
      },
      {
        question: "What image should I use for a 3×3 grid?",
        answer:
          "For square tiles, start with a square image; crop it to 1:1 first if needed. Instagram may show profile thumbnails with a different crop, so check the result after posting.",
      },
      {
        question: "How do I split a panorama for a carousel post?",
        answer:
          "Choose Panorama 3×1 for three slides or Carousel 2×1 for two. For square slides, the image should be three times (or two times) as wide as it is tall.",
      },
      {
        question: "Are all tiles exactly the same size?",
        answer:
          "If the width or height cannot be divided evenly, the last column or row receives the extra pixels, so it may be a pixel or two larger.",
      },
      {
        question: "Does splitting reduce the image quality?",
        answer: "No. Each tile is cut from the original pixels and saved as PNG, which is lossless.",
      },
    ],
  },
  "censor-image": {
    name: "Blur & Pixelate Censor",
    shortName: "Censor Photo",
    tagline: "Hide faces, license plates, names or numbers in a photo with blackout, pixelation or blur.",
    intro:
      "Blur & Pixelate Censor hides private details in a picture before you share it. Draw rectangles or ovals over faces, license plates, addresses or account numbers, and choose a solid blackout, pixelation or blur for each area. Blurred areas are placed over a coarse pixelated layer, so the original details cannot show through at the edges.",
    seoTitle: "Blur or Pixelate Image – Censor Faces & Text",
    seoDescription:
      "Censor images online for free. Blur, pixelate or black out faces, license plates and private text with rectangles or ovals. Nothing is uploaded.",
    keywords: [
      "blur image online",
      "pixelate image",
      "censor photo",
      "blur face in photo",
      "redact image",
      "black out text in screenshot",
      "blur license plate",
    ],
    howToSteps: [
      {
        title: "Upload the image",
        description: "Drop, choose or paste a JPG, PNG or WebP image, such as a photo or a screenshot.",
      },
      {
        title: "Choose shape and method",
        description:
          "Select Rectangle or Circle / Oval, then Pixelate, Blur or Blackout. For pixelate and blur, set the strength from 4 to 45.",
      },
      {
        title: "Draw over private details",
        description: "Drag across each area you want to hide. Use Undo to remove the last area or Clear to start again.",
      },
      {
        title: "Download the censored image",
        description: "Download it as PNG, WebP or JPG, or copy it to the clipboard.",
      },
    ],
    features: [
      {
        title: "Three hiding methods",
        description: "Solid black boxes, mosaic pixelation, or blur on top of a pixelated base.",
      },
      {
        title: "Rectangles and ovals",
        description: "Use ovals for faces and rectangles for text, plates and numbers.",
      },
      {
        title: "Mix methods in one image",
        description: "Each area keeps the method and strength it was drawn with, so you can black out a name and blur a face.",
      },
      {
        title: "Consistent on large photos",
        description: "The strength is scaled to the image resolution, so high-resolution photos are hidden just as well.",
      },
      {
        title: "Undo and clear",
        description: "Remove the last area or all areas without reloading the photo.",
      },
    ],
    faqs: [
      {
        question: "Which method is safest for hiding text?",
        answer:
          "Blackout replaces the pixels completely and is the safest choice for passwords, account numbers and documents. Strong pixelation or blur also works, but small text with weak settings can sometimes be guessed.",
      },
      {
        question: "Can someone undo the blur in the downloaded file?",
        answer:
          "The pixels inside each area are replaced in the downloaded image, not hidden on a separate layer. Your original photo on your device is not changed, so share only the censored copy.",
      },
      {
        question: "Is the EXIF data removed too?",
        answer:
          "Yes. The download is created from the pixels on the canvas, so camera details and GPS location from the original are not included.",
      },
      {
        question: "Can I use different effects in the same image?",
        answer:
          "Yes. Change the method or strength before you draw the next area. Areas you have already drawn keep their own settings.",
      },
      {
        question: "Does it work on phones?",
        answer: "Yes. Drag your finger over the area you want to hide to draw a box or oval.",
      },
    ],
  },
  "remove-background": {
    "name": "Remove Background",
    "shortName": "Remove BG",
    "tagline": "Remove the background from a photo with AI that runs on your device, and save a transparent PNG.",
    "intro": "Remove Background cuts out the main subject of a photo and removes everything behind it, using an AI model that runs in your browser, so your images never leave your device. Choose Fast, a smaller model that is quick and best for photos of people, or Best quality, a larger model with better results on any subject, including products, pets and objects. Save the result as a transparent PNG, or put it on a solid color.",
    "seoTitle": "Remove Background from Image – Free, On-Device",
    "seoDescription": "Remove image backgrounds for free with AI that runs in your browser. Pick a fast model or best quality, then save a transparent PNG. Photos stay on your device.",
    "keywords": [
      "remove background from image",
      "background remover",
      "remove background from photo free",
      "make background transparent",
      "transparent background maker",
      "cut out image background",
      "remove background online"
    ],
    "howToSteps": [
      {
        "title": "Upload a photo",
        "description": "Drop, choose or paste a JPG, PNG or WebP image."
      },
      {
        "title": "Choose a model",
        "description": "Fast is selected by default and works well for photos of people. Choose Best quality for products, pets, objects, or whenever you want the cleanest edges."
      },
      {
        "title": "Download the model once",
        "description": "The first time you use a model, your browser downloads it: about 33 MB for Fast and about 100 MB for Best quality, which asks before it starts. After that it is stored in your browser."
      },
      {
        "title": "Choose the background and download",
        "description": "Keep it transparent and save as PNG, or pick a solid color and save as PNG or JPG."
      }
    ],
    "features": [
      {
        "title": "AI that runs on your device",
        "description": "The model runs inside your browser, so your photos are never uploaded to a server."
      },
      {
        "title": "Two models to choose from",
        "description": "Fast is quick and best for people. Best quality is larger and slower but gives better results on any subject."
      },
      {
        "title": "Downloaded once",
        "description": "Each model is stored in your browser after its first use, and the tool shows which ones are already downloaded."
      },
      {
        "title": "Transparent or colored background",
        "description": "Save a transparent PNG, or place the subject on a solid color of your choice."
      }
    ],
    "faqs": [
      {
        "question": "Are my photos uploaded to a server?",
        "answer": "No. Only the AI model is downloaded to your browser. Your photos are processed on your device and are not sent anywhere."
      },
      {
        "question": "What is the difference between Fast and Best quality?",
        "answer": "Fast uses a smaller model (about 33 MB) and takes about 5 seconds per photo; it works well for people but can miss parts of objects. Best quality uses a larger model (about 100 MB) and takes about 15–30 seconds, with better results on products, pets, objects and people."
      },
      {
        "question": "Why does the first use take longer?",
        "answer": "The model has to be downloaded first. Best quality asks before downloading its 100 MB model. After the first use, your browser stores the model, so later photos start much faster."
      },
      {
        "question": "Does it work on iPhone and Android phones?",
        "answer": "Yes. Fast is the best choice on phones. Best quality also runs on phones, but its larger download and longer processing time are more noticeable there, especially on mobile data."
      },
      {
        "question": "Can I put a new background color behind the subject?",
        "answer": "Yes. Choose a solid color, then save as PNG or JPG. For a transparent background, save as PNG."
      },
      {
        "question": "Why are some edges not perfect?",
        "answer": "Fine hair, fur, glass, and subjects with colors similar to the background are hard for any model. Try Best quality, or use a photo with clear contrast between the subject and the background."
      }
    ]
  },
  "compress-image-to-kb": {
    "name": "Compress Image to KB",
    "shortName": "Compress to KB",
    "tagline": "Make a photo smaller than an exact size, like 20 KB, 50 KB or 100 KB, for online forms. It runs on your device.",
    "intro": "Many application and upload forms only accept photos under a fixed size, such as 20 KB or 50 KB, and an ordinary phone photo is many times larger. Compress Image to KB makes the file smaller than the limit you choose. It tries quality levels until it finds the best one that fits, and only reduces the photo's dimensions when even the lowest quality would still be too big. You can also set exact dimensions, such as a 35 × 45 mm passport photo, and the photo is cropped from the center to fill them. Everything happens in your browser, so photos of you and your documents are never uploaded.",
    "seoTitle": "Compress Image to 20KB, 50KB or 100KB – Free",
    "seoDescription": "Reduce a photo to under 20 KB, 50 KB, 100 KB or any size for online forms. Keeps the best quality that fits. Free, private, no upload.",
    "keywords": [
      "compress image to 20kb",
      "compress image to 50kb",
      "compress image to 100kb",
      "reduce image size in kb",
      "photo size reducer in kb",
      "compress jpeg to 200kb",
      "passport photo size in kb"
    ],
    "howToSteps": [
      {
        "title": "Add your photo",
        "description": "Drop, choose or paste a JPG, PNG, WebP or iPhone HEIC photo."
      },
      {
        "title": "Choose the size limit",
        "description": "Pick 10 KB to 1 MB, or type the exact limit your form asks for."
      },
      {
        "title": "Set the dimensions if needed",
        "description": "Keep the original size, or choose a passport photo, a 2 × 2 inch square or a custom width and height."
      },
      {
        "title": "Download",
        "description": "Check that the result says it is under the limit, then download the JPG or WebP."
      }
    ],
    "features": [
      {
        "title": "Always under the limit",
        "description": "The tool measures the real file it creates, so the download is smaller than the size you chose, not just close to it."
      },
      {
        "title": "Best quality that fits",
        "description": "It keeps the highest quality that fits, and reduces the dimensions only when it has to."
      },
      {
        "title": "Passport and custom sizes",
        "description": "Presets for 35 × 45 mm passport photos and 2 × 2 inch photos, or any width and height you need."
      },
      {
        "title": "Private by design",
        "description": "Your photo is processed in your browser and is never uploaded, which matters for ID and application photos."
      }
    ],
    "faqs": [
      {
        "question": "Will the file really be under the limit?",
        "answer": "Yes. The tool checks the size of the actual file it creates, and only shows a success message when it is under your limit. It counts 1 KB as 1,024 bytes, the way Windows and most forms do, so the file is also under the limit if a form counts 1 KB as 1,000 bytes."
      },
      {
        "question": "Why did the dimensions of my photo change?",
        "answer": "With Keep size selected, the tool first lowers the quality. If the file is still too big at the lowest quality, it reduces the width and height step by step until it fits. The result message tells you when this happened and shows the new size."
      },
      {
        "question": "Why can't it reach my limit?",
        "answer": "When you set exact dimensions, the tool can't make the photo smaller, so a very low limit with large dimensions may not be reachable. Raise the limit, choose smaller dimensions, or select Keep size."
      },
      {
        "question": "What size and format does my form need?",
        "answer": "Every form sets its own rules. Read its instructions for the maximum file size, the width and height in pixels or millimetres, and the format, then set the same values here. JPG is accepted almost everywhere."
      },
      {
        "question": "Will compressing reduce the quality?",
        "answer": "Some quality is always lost when a photo is made much smaller, but the tool keeps as much as the limit allows. For faces, a limit of 30 KB or more usually looks clean at passport-photo dimensions."
      },
      {
        "question": "Is my photo uploaded?",
        "answer": "No. The photo is compressed by your browser on your device. Nothing is sent to a server, so it is safe to use with ID photos and documents."
      }
    ]
  },
  "heic-to-jpg": {
    "name": "HEIC to JPG",
    "shortName": "HEIC → JPG",
    "tagline": "Convert iPhone HEIC photos to JPG so they open on any computer, phone or website. The conversion runs on your device.",
    "intro": "iPhones and many recent phones save photos as HEIC, a format that keeps good quality in smaller files. Many Windows computers, older apps and upload forms can't open it, though. HEIC to JPG converts the photo to a standard JPG that works almost everywhere. The photo is decoded and converted inside your browser, so it never leaves your device, and the converted JPG does not include the location, camera and date details stored in the original.",
    "seoTitle": "HEIC to JPG Converter – Free, No Upload",
    "seoDescription": "Convert iPhone HEIC photos to JPG in your browser. Works on Windows, Mac, Android and iPhone. Free, private, nothing is uploaded.",
    "keywords": [
      "heic to jpg",
      "convert heic to jpg",
      "iphone photo to jpg",
      "heic converter",
      "heic to jpeg",
      "open heic on windows"
    ],
    "howToSteps": [
      {
        "title": "Add your HEIC photo",
        "description": "Drop, choose or paste a .heic or .heif file from your iPhone or computer."
      },
      {
        "title": "Wait for the preview",
        "description": "Your browser decodes the photo. Large photos can take a few seconds."
      },
      {
        "title": "Download the JPG",
        "description": "Save the converted photo. It opens in any photo viewer, browser or upload form."
      }
    ],
    "features": [
      {
        "title": "Works everywhere",
        "description": "JPG opens on Windows, Mac, Android, in every browser and on almost every website."
      },
      {
        "title": "Private conversion",
        "description": "The photo is converted on your device and is never uploaded."
      },
      {
        "title": "No location data",
        "description": "GPS location, camera details and dates from the original are not copied into the JPG."
      },
      {
        "title": "Continue editing",
        "description": "Send the converted photo straight to crop, resize or compress it."
      }
    ],
    "faqs": [
      {
        "question": "What is a HEIC file?",
        "answer": "HEIC (High Efficiency Image Container) is the photo format iPhones use by default since iOS 11. It stores photos in about half the space of a JPG at similar quality, but many computers and websites still can't open it."
      },
      {
        "question": "Will the JPG look the same?",
        "answer": "Yes, for normal viewing. The JPG is saved at high quality. JPG files are usually larger than the HEIC original, because JPG compression is less efficient."
      },
      {
        "question": "Can I convert several HEIC photos at once?",
        "answer": "This tool converts one photo at a time. If a single HEIC file holds several images, such as a burst, the first image is converted."
      },
      {
        "question": "How do I make my iPhone take JPG photos instead?",
        "answer": "On the iPhone, open Settings, then Camera, then Formats, and choose Most Compatible. New photos are then saved as JPG. Photos you already took stay in HEIC."
      },
      {
        "question": "Is my photo uploaded?",
        "answer": "No. The HEIC decoder runs in your browser, so the photo stays on your device."
      }
    ]
  },
  "heic-to-png": {
    "name": "HEIC to PNG",
    "shortName": "HEIC → PNG",
    "tagline": "Convert iPhone HEIC photos to lossless PNG for editing and design work. The conversion runs on your device.",
    "intro": "HEIC is the photo format iPhones use by default, and many design tools, older apps and websites can't open it. HEIC to PNG converts the photo to PNG, a lossless format, so no further detail is lost when you edit and save it again. That makes it a good choice for photos you will retouch, put into a design or cut out. The conversion happens inside your browser, so the photo never leaves your device. For sharing or uploading, HEIC to JPG gives much smaller files.",
    "seoTitle": "HEIC to PNG Converter – Free, Lossless",
    "seoDescription": "Convert iPhone HEIC photos to lossless PNG in your browser for editing and design. Free, private, and nothing is uploaded.",
    "keywords": [
      "heic to png",
      "convert heic to png",
      "iphone photo to png",
      "heic to png converter",
      "heif to png"
    ],
    "howToSteps": [
      {
        "title": "Add your HEIC photo",
        "description": "Drop, choose or paste a .heic or .heif file."
      },
      {
        "title": "Wait for the preview",
        "description": "Your browser decodes the photo on your device."
      },
      {
        "title": "Download the PNG",
        "description": "Save the lossless PNG and open it in any editor or design tool."
      }
    ],
    "features": [
      {
        "title": "Lossless output",
        "description": "PNG keeps every pixel of the decoded photo, so repeated editing doesn't add compression artifacts."
      },
      {
        "title": "Opens in any editor",
        "description": "PNG works in Photoshop, GIMP, Figma, Canva, Office and every browser."
      },
      {
        "title": "Private conversion",
        "description": "The photo is converted on your device and never uploaded."
      },
      {
        "title": "No location data",
        "description": "GPS location and camera details from the original are not copied into the PNG."
      }
    ],
    "faqs": [
      {
        "question": "PNG or JPG: which should I choose?",
        "answer": "Choose PNG when you will edit the photo further or need exact pixels. Choose JPG for sharing, email and upload forms, because PNG files of photos are several times larger."
      },
      {
        "question": "Why is the PNG so much bigger than the HEIC?",
        "answer": "HEIC uses very efficient lossy compression. PNG is lossless, so it stores far more data. A 2 MB iPhone photo can become a PNG of 10 MB or more."
      },
      {
        "question": "Does the PNG have a transparent background?",
        "answer": "No. Photos have no transparency, so the PNG is fully opaque. To remove the background, open the result in Remove Background."
      },
      {
        "question": "Is my photo uploaded?",
        "answer": "No. The HEIC decoder runs in your browser, so the photo stays on your device."
      }
    ]
  },
  "jpg-to-pdf": {
    "name": "JPG to PDF",
    "shortName": "JPG → PDF",
    "tagline": "Turn one or more photos into a single PDF, in the order you choose, with A4 or Letter pages. Nothing is uploaded.",
    "intro": "JPG to PDF puts your photos into one PDF file, one photo per page. It is the quick way to send scanned pages, receipts, notes or ID photos as a single document. Add JPG, PNG, WebP or iPhone HEIC images, put them in order, and choose the page size, orientation and margins. JPG photos are placed into the PDF without being re-compressed, so they keep their original quality. The PDF is created by your browser, so your documents are never uploaded to a server.",
    "seoTitle": "JPG to PDF Converter – Combine Photos, Free",
    "seoDescription": "Convert JPG, PNG and iPhone photos to one PDF in your browser. Reorder pages, choose A4 or Letter. Free, no upload, no watermark.",
    "keywords": [
      "jpg to pdf",
      "image to pdf",
      "convert photo to pdf",
      "png to pdf",
      "combine images into pdf",
      "jpg to pdf converter"
    ],
    "howToSteps": [
      {
        "title": "Add your images",
        "description": "Drop or choose one or more JPG, PNG, WebP or HEIC images. You can add more at any time."
      },
      {
        "title": "Put them in order",
        "description": "Use the up and down buttons to arrange the pages, and remove any you don't need."
      },
      {
        "title": "Choose the page layout",
        "description": "Pick A4, Letter or a page that matches each image, the orientation and the margin."
      },
      {
        "title": "Create the PDF",
        "description": "Download one PDF with every image on its own page."
      }
    ],
    "features": [
      {
        "title": "Many images, one PDF",
        "description": "Combine as many photos as your device can handle into a single document."
      },
      {
        "title": "Original JPG quality",
        "description": "JPG photos are embedded as they are, without another round of compression."
      },
      {
        "title": "A4, Letter or fit to image",
        "description": "Standard paper sizes with automatic orientation, or pages the exact size of each image."
      },
      {
        "title": "Private and watermark-free",
        "description": "The PDF is built on your device, has no watermark, and nothing is uploaded."
      }
    ],
    "faqs": [
      {
        "question": "How many images can I add?",
        "answer": "There is no fixed limit. Dozens of phone photos work on most devices; very large batches may run out of memory on older phones."
      },
      {
        "question": "Will the photos lose quality?",
        "answer": "JPG photos are placed into the PDF without re-compression, so they keep their original quality. PNG images stay lossless. WebP and HEIC images are converted to high-quality JPG first, because PDF can't store them directly."
      },
      {
        "question": "Why is my PDF so large?",
        "answer": "The PDF contains your photos at full resolution. To make it smaller, reduce the photos first with Compress Image or Resize Image, then add them here."
      },
      {
        "question": "Will sideways phone photos be rotated correctly?",
        "answer": "Yes. Photos are placed the way they appear on your phone, using the orientation stored in the file."
      },
      {
        "question": "Is my document uploaded?",
        "answer": "No. The PDF is created by your browser on your device, so receipts, IDs and private documents never leave it."
      }
    ]
  },
  "pdf-to-jpg": {
    "name": "PDF to JPG",
    "shortName": "PDF → JPG",
    "tagline": "Save every page of a PDF as a JPG or PNG image, one page at a time or all together in a ZIP. Nothing is uploaded.",
    "intro": "PDF to JPG turns the pages of a PDF into images you can post, share in a chat, insert into a slide or upload to a form that only accepts pictures. Choose JPG for small files or PNG for sharp text, and pick the resolution: 72 dpi for screens, 150 dpi for most uses, or 300 dpi for printing. Download a single page or every page at once in a ZIP file. The PDF is opened by your browser on your device, so private documents are never uploaded.",
    "seoTitle": "PDF to JPG Converter – Every Page, Free",
    "seoDescription": "Convert PDF pages to JPG or PNG images in your browser. Choose 72, 150 or 300 dpi and download one page or all as a ZIP. Free, no upload.",
    "keywords": [
      "pdf to jpg",
      "pdf to image",
      "convert pdf to jpg",
      "pdf to png",
      "pdf page to image",
      "save pdf as jpg"
    ],
    "howToSteps": [
      {
        "title": "Add your PDF",
        "description": "Drop or choose a PDF file. Its pages appear as previews."
      },
      {
        "title": "Choose format and resolution",
        "description": "Pick JPG or PNG, and 72, 150 or 300 dpi."
      },
      {
        "title": "Download",
        "description": "Save a single page, or download every page together in a ZIP file."
      }
    ],
    "features": [
      {
        "title": "Every page or just one",
        "description": "Download the page you need, or all pages at once as a ZIP."
      },
      {
        "title": "Print-quality resolution",
        "description": "Render at up to 300 dpi for sharp text and printing."
      },
      {
        "title": "JPG or PNG",
        "description": "JPG for small files, PNG for crisp text and diagrams."
      },
      {
        "title": "Private documents stay private",
        "description": "The PDF is opened on your device and never uploaded."
      }
    ],
    "faqs": [
      {
        "question": "Which resolution should I pick?",
        "answer": "150 dpi suits most uses, from sharing to slides. Choose 300 dpi to print or to zoom into small text, and 72 dpi for the smallest files. Higher resolutions take longer and make larger files."
      },
      {
        "question": "JPG or PNG?",
        "answer": "JPG gives much smaller files and is best for pages with photos. PNG keeps text and line drawings perfectly sharp, but files are larger."
      },
      {
        "question": "Can I convert a password-protected PDF?",
        "answer": "Not yet. If a PDF needs a password to open, the tool will tell you. Open it in a PDF reader with the password, save an unprotected copy, and try that copy."
      },
      {
        "question": "Will the text still be selectable?",
        "answer": "No. Each page becomes a picture, so the text can't be selected or searched. Keep the original PDF if you need the text."
      },
      {
        "question": "Is my PDF uploaded?",
        "answer": "No. The PDF is read and rendered by your browser, so contracts, statements and other private documents never leave your device."
      }
    ]
  },
  "merge-images": {
    "name": "Merge Images",
    "shortName": "Merge",
    "tagline": "Join photos side by side, stacked, or in a grid, with spacing and a background color, and save one image.",
    "intro": "Merge Images combines several pictures into one: side by side for before-and-after comparisons, stacked for long screenshots and step-by-step guides, or in a grid for a simple collage. Put the images in order, choose the gap between them and the background color, and let the tool match their heights or widths so the edges line up. Save the result as JPG, PNG or WebP. All of it happens in your browser, so your photos are never uploaded.",
    "seoTitle": "Merge Images Online – Combine Photos, Free",
    "seoDescription": "Combine photos side by side, vertically or in a grid in your browser. Add spacing and a background color. Free, private, no upload.",
    "keywords": [
      "merge images",
      "combine images",
      "join photos",
      "put two pictures side by side",
      "photo collage maker",
      "stitch images vertically"
    ],
    "howToSteps": [
      {
        "title": "Add your images",
        "description": "Drop or choose two or more JPG, PNG, WebP or HEIC images."
      },
      {
        "title": "Arrange them",
        "description": "Use the up and down buttons to set the order, and remove any you don't need."
      },
      {
        "title": "Choose the layout",
        "description": "Side by side, stacked, or a grid with the number of columns you want, plus the spacing and background."
      },
      {
        "title": "Download",
        "description": "Save the merged image as JPG, PNG or WebP."
      }
    ],
    "features": [
      {
        "title": "Three layouts",
        "description": "Horizontal for comparisons, vertical for screenshots and guides, and a grid for collages."
      },
      {
        "title": "Edges that line up",
        "description": "Match heights or widths automatically, or keep every image at its original size."
      },
      {
        "title": "Spacing and background",
        "description": "Set the gap between images and fill it with any color, or keep it transparent in PNG and WebP."
      },
      {
        "title": "Private",
        "description": "Images are merged on your device and are never uploaded."
      }
    ],
    "faqs": [
      {
        "question": "How many images can I merge?",
        "answer": "As many as you like, within your device's memory. Very large results are scaled down automatically to stay within the size browsers can save."
      },
      {
        "question": "What does Match sizes do?",
        "answer": "In a row, every image is scaled to the same height; in a column, to the same width; in a grid, every image fills a cell of the same size. Turn it off to keep each image at its original size."
      },
      {
        "question": "Can the background be transparent?",
        "answer": "Yes. Choose Transparent and save as PNG or WebP. JPG can't store transparency, so it uses the background color instead."
      },
      {
        "question": "How do I make a before-and-after image?",
        "answer": "Add the two photos, choose Side by side, keep Match sizes on, and add a small gap. The two images will have the same height."
      },
      {
        "question": "Are my images uploaded?",
        "answer": "No. The images are combined by your browser on your device."
      }
    ]
  },
};
