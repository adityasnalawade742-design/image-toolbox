/**
 * Image sizes the big social networks ask for, and how a photo is placed in them: filling the frame (cropped) or
 * shown whole on a background. Networks change their numbers now and then. Checked against their help pages in
 * October 2026 where they state one (YouTube, Instagram, LinkedIn, Facebook, Pinterest); the X and post-link sizes
 * are common practice.
 */
import { stepDown } from './engine';

export type SocialPresetId =
  | 'ig-square' | 'ig-portrait' | 'ig-tall' | 'ig-landscape' | 'story'
  | 'yt-thumb' | 'yt-thumb-4k' | 'yt-banner'
  | 'fb-cover' | 'fb-post'
  | 'li-banner' | 'li-post'
  | 'pin' | 'og'
  | 'x-header' | 'x-post';

export interface SocialPreset {
  id: SocialPresetId;
  width: number;
  height: number;
  /** What every device shows, in output pixels: a guide only, never part of the saved picture */
  safe?: { x: number; y: number; w: number; h: number };
  /** The network's upload limit */
  maxBytes?: number;
}

const MB = 1024 * 1024;

export const SOCIAL_PRESETS: Record<SocialPresetId, SocialPreset> = {
  'ig-square': { id: 'ig-square', width: 1080, height: 1080 },
  'ig-portrait': { id: 'ig-portrait', width: 1080, height: 1350 },
  // Instagram keeps a 1080-wide photo uncropped from 1.91:1 (566 high) to 3:4 (1440 high)
  'ig-tall': { id: 'ig-tall', width: 1080, height: 1440 },
  'ig-landscape': { id: 'ig-landscape', width: 1080, height: 566 },
  // The app's own buttons and caption cover the top and bottom; Reels need more room at the bottom than Stories
  story: { id: 'story', width: 1080, height: 1920, safe: { x: 0, y: 250, w: 1080, h: 1330 } },
  // YouTube asks for as large as possible (3840 × 2160); uploads from a phone are limited to 2 MB, from a computer 50 MB
  'yt-thumb': { id: 'yt-thumb', width: 1280, height: 720, maxBytes: 2 * MB },
  'yt-thumb-4k': { id: 'yt-thumb-4k', width: 3840, height: 2160, maxBytes: 50 * MB },
  // Phones and computers only show the middle strip; TVs show all of it
  'yt-banner': { id: 'yt-banner', width: 2560, height: 1440, safe: { x: 507, y: 508, w: 1546, h: 423 }, maxBytes: 6 * MB },
  // Facebook crops covers differently per device (2.4:1 on phones) without saying exactly where, so no guide is drawn
  'fb-cover': { id: 'fb-cover', width: 851, height: 315 },
  'fb-post': { id: 'fb-post', width: 1200, height: 630 },
  'li-banner': { id: 'li-banner', width: 1584, height: 396, maxBytes: 8 * MB },
  'li-post': { id: 'li-post', width: 1200, height: 627 },
  pin: { id: 'pin', width: 1000, height: 1500 },
  og: { id: 'og', width: 1200, height: 630 },
  'x-header': { id: 'x-header', width: 1500, height: 500 },
  'x-post': { id: 'x-post', width: 1600, height: 900 },
};

export const ALL_SOCIAL_PRESETS = Object.keys(SOCIAL_PRESETS) as SocialPresetId[];

export type FitMode = 'fill' | 'fit';

export interface Placement {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Where the picture goes in the frame.
 * @param zoom 1 is the picture just filling (or just fitting inside) the frame
 * @param fx,fy 0–1: which part of the overflow is hidden on the left/top; 0.5 is centred
 */
export function placeImage(iw: number, ih: number, W: number, H: number, mode: FitMode, zoom = 1, fx = 0.5, fy = 0.5): Placement {
  const base = mode === 'fill' ? Math.max(W / iw, H / ih) : Math.min(W / iw, H / ih);
  const w = iw * base * zoom;
  const h = ih * base * zoom;
  return { x: (W - w) * fx, y: (H - h) * fy, w, h };
}

export interface SocialOptions {
  mode: FitMode;
  zoom: number;
  fx: number;
  fy: number;
  /** Behind a whole picture: the photo itself blurred, or a colour */
  background: 'blur' | string;
}

/** Draw the picture into a canvas of the given size */
export function renderSocial(canvas: HTMLCanvasElement, img: HTMLImageElement, W: number, H: number, o: SocialOptions) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  if (o.mode === 'fit') {
    if (o.background === 'blur') {
      // Shrink to a few pixels first: quick at any photo size, and all that survives is the colors
      const tw = Math.max(1, Math.round(W >= H ? 16 : (16 * W) / H));
      const th = Math.max(1, Math.round(W >= H ? (16 * H) / W : 16));
      const tiny = document.createElement('canvas');
      tiny.width = tw;
      tiny.height = th;
      const tctx = tiny.getContext('2d')!;
      tctx.imageSmoothingQuality = 'high';
      const cover = placeImage(iw, ih, tw, th, 'fill');
      const small = stepDown(img, 0, 0, iw, ih, cover.w, cover.h);
      tctx.drawImage(small.source, small.sx, small.sy, small.sw, small.sh, cover.x, cover.y, cover.w, cover.h);
      // Enlarge with a real blur where the browser has one, overscanned so the edges don't fade; without one, the
      // smooth enlargement alone is still soft
      const blur = Math.max(W, H) / 16;
      ctx.save();
      if ('filter' in ctx) ctx.filter = `blur(${blur}px)`;
      ctx.drawImage(tiny, -blur * 2, -blur * 2, W + blur * 4, H + blur * 4);
      ctx.restore();
    } else {
      ctx.fillStyle = o.background;
      ctx.fillRect(0, 0, W, H);
    }
  }

  const p = placeImage(iw, ih, W, H, o.mode, o.zoom, o.fx, o.fy);
  const down = stepDown(img, 0, 0, iw, ih, p.w, p.h);
  ctx.drawImage(down.source, down.sx, down.sy, down.sw, down.sh, p.x, p.y, p.w, p.h);
}
