/** Icon sizes for apps: iOS (Xcode asset catalog), Android (launcher mipmaps and adaptive layers) and web apps */

export interface IconFile {
  path: string;
  size: number;
  /** Fill transparency with the background colour (iOS and the App Store reject transparent icons) */
  opaque: boolean;
  /** Shrink the artwork into the centre to leave the safe zone empty (adaptive and maskable icons) */
  safeZone?: number;
  /** Background layer only: the colour, no artwork */
  backgroundOnly?: boolean;
  /** Round mask (Android round launcher icon) */
  round?: boolean;
}

// iPhone, iPad and App Store sizes in points and scales, as Xcode lists them
const IOS: [string, number, number[]][] = [
  ['iphone', 20, [2, 3]],
  ['iphone', 29, [2, 3]],
  ['iphone', 40, [2, 3]],
  ['iphone', 60, [2, 3]],
  ['ipad', 20, [1, 2]],
  ['ipad', 29, [1, 2]],
  ['ipad', 40, [1, 2]],
  ['ipad', 76, [1, 2]],
  ['ipad', 83.5, [2]],
  ['ios-marketing', 1024, [1]],
];

export function iosIcons(): { files: IconFile[]; contents: string } {
  const files = new Map<number, IconFile>();
  const images: Record<string, string>[] = [];
  for (const [idiom, pt, scales] of IOS)
    for (const s of scales) {
      const px = Math.round(pt * s);
      const name = `icon-${px}.png`;
      files.set(px, { path: `ios/AppIcon.appiconset/${name}`, size: px, opaque: true });
      images.push({ filename: name, idiom, scale: `${s}x`, size: `${pt}x${pt}` });
    }
  return { files: [...files.values()].sort((a, b) => a.size - b.size), contents: JSON.stringify({ images, info: { author: 'xcode', version: 1 } }, null, 2) };
}

const DENSITIES: [string, number][] = [
  ['mdpi', 1],
  ['hdpi', 1.5],
  ['xhdpi', 2],
  ['xxhdpi', 3],
  ['xxxhdpi', 4],
];

export function androidIcons(): { files: IconFile[]; adaptiveXml: string } {
  const files: IconFile[] = [];
  for (const [d, k] of DENSITIES) {
    files.push({ path: `android/mipmap-${d}/ic_launcher.png`, size: 48 * k, opaque: false });
    files.push({ path: `android/mipmap-${d}/ic_launcher_round.png`, size: 48 * k, opaque: false, round: true });
    // Adaptive layers are 108 dp; the launcher may mask anything outside the central 66 dp
    files.push({ path: `android/mipmap-${d}/ic_launcher_foreground.png`, size: 108 * k, opaque: false, safeZone: 66 / 108 });
    files.push({ path: `android/mipmap-${d}/ic_launcher_background.png`, size: 108 * k, opaque: true, backgroundOnly: true });
  }
  files.push({ path: 'android/play-store-512.png', size: 512, opaque: true });
  const adaptiveXml =
    '<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n' +
    '    <background android:drawable="@mipmap/ic_launcher_background" />\n    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n</adaptive-icon>\n';
  return { files, adaptiveXml };
}

export function webIcons(name: string, background: string): { files: IconFile[]; manifest: string } {
  const files: IconFile[] = [
    { path: 'web/icon-192.png', size: 192, opaque: false },
    { path: 'web/icon-512.png', size: 512, opaque: false },
    // Maskable icons keep their artwork inside the central 80% circle
    { path: 'web/icon-maskable-512.png', size: 512, opaque: true, safeZone: 0.8 },
    { path: 'web/apple-touch-icon.png', size: 180, opaque: true },
  ];
  const manifest = JSON.stringify(
    {
      name,
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
      background_color: background,
      theme_color: background,
      display: 'standalone',
    },
    null,
    2
  );
  return { files, manifest };
}
