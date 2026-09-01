import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const tools = [
  { slug: 'crop-image', en: 'Crop Image', es: 'Recortar Imagen', fr: 'Rogner une Image', de: 'Bild Zuschneiden', pt: 'Cortar Imagem', it: 'Ritaglia Immagine', ja: '画像を切り抜き・トリミング', ko: '이미지 자르기 및 트리밍', id: 'Potong Gambar Online' },
  { slug: 'resize-image', en: 'Resize Image', es: 'Redimensionar Imagen', fr: 'Redimensionner une Image', de: 'Bild Skalieren & Größe Ändern', pt: 'Redimensionar Imagem', it: 'Ridimensiona Immagine', ja: '画像サイズ変更・リサイズ', ko: '이미지 크기 조절', id: 'Ubah Ukuran Gambar' },
  { slug: 'compress-image', en: 'Compress Image', es: 'Comprimir Imagen', fr: 'Compresser une Image', de: 'Bild Komprimieren', pt: 'Comprimir Imagem', it: 'Comprimi Immagine', ja: '画像圧縮・軽量化', ko: '이미지 압축', id: 'Kompres Gambar' },
  { slug: 'rotate-image', en: 'Rotate Image', es: 'Rotar Imagen', fr: 'Faire Pivoter une Image', de: 'Bild Drehen', pt: 'Girar Imagem', it: 'Ruota Immagine', ja: '画像を回転・傾き補正', ko: '이미지 회전', id: 'Putar Gambar' },
  { slug: 'flip-image', en: 'Flip Image', es: 'Voltear Imagen', fr: 'Retourner une Image', de: 'Bild Spiegeln', pt: 'Inverter Imagem', it: 'Capovolgi Immagine', ja: '画像を反転・ミラー', ko: '이미지 뒤집기', id: 'Balik Gambar' },
  { slug: 'convert-image', en: 'Universal Image Converter', es: 'Convertidor de Imágenes Universal', fr: 'Convertisseur d’Image Universel', de: 'Universeller Bildkonverter', pt: 'Conversor de Imagens Universal', it: 'Convertitore Universale di Immagini', ja: '画像フォーマット一括変換', ko: '만능 이미지 포맷 변환기', id: 'Konverter Gambar Universal' },
  { slug: 'jpg-to-png', en: 'JPG to PNG Converter', es: 'Convertir JPG a PNG', fr: 'Convertir JPG en PNG', de: 'JPG in PNG Umwandeln', pt: 'Converter JPG para PNG', it: 'Convertire JPG in PNG', ja: 'JPGをPNGに変換', ko: 'JPG를 PNG로 변환', id: 'Konversi JPG ke PNG' },
  { slug: 'png-to-jpg', en: 'PNG to JPG Converter', es: 'Convertir PNG a JPG', fr: 'Convertir PNG en JPG', de: 'PNG in JPG Umwandeln', pt: 'Converter PNG para JPG', it: 'Convertire PNG in JPG', ja: 'PNGをJPGに変換', ko: 'PNG를 JPG로 변환', id: 'Konversi PNG ke JPG' },
  { slug: 'jpg-to-webp', en: 'JPG to WebP Converter', es: 'Convertir JPG a WebP', fr: 'Convertir JPG en WebP', de: 'JPG in WebP Umwandeln', pt: 'Converter JPG para WebP', it: 'Convertire JPG in WebP', ja: 'JPGをWebPに変換', ko: 'JPG를 WebP로 변환', id: 'Konversi JPG ke WebP' },
  { slug: 'png-to-webp', en: 'PNG to WebP Converter', es: 'Convertir PNG a WebP', fr: 'Convertir PNG en WebP', de: 'PNG in WebP Umwandeln', pt: 'Converter PNG para WebP', it: 'Convertire PNG in WebP', ja: 'PNGをWebPに変換', ko: 'PNG를 WebP로 변환', id: 'Konversi PNG ke WebP' },
  { slug: 'webp-to-jpg', en: 'WebP to JPG Converter', es: 'Convertir WebP a JPG', fr: 'Convertir WebP en JPG', de: 'WebP in JPG Umwandeln', pt: 'Converter WebP para JPG', it: 'Convertire WebP in JPG', ja: 'WebPをJPGに変換', ko: 'WebP를 JPG로 변환', id: 'Konversi WebP ke JPG' },
  { slug: 'webp-to-png', en: 'WebP to PNG Converter', es: 'Convertir WebP a PNG', fr: 'Convertir WebP en PNG', de: 'WebP in PNG Umwandeln', pt: 'Converter WebP para PNG', it: 'Convertire WebP in PNG', ja: 'WebPをPNGに変換', ko: 'WebP를 PNG로 변환', id: 'Konversi WebP ke PNG' },
  { slug: 'bulk-image-resizer', en: 'Bulk Image Resizer', es: 'Redimensionador de Imágenes por Lotes', fr: 'Redimensionnement d’Images par Lot', de: 'Massen-Bildskalierer (Batch)', pt: 'Redimensionar Imagens em Lote', it: 'Ridimensionamento Immagini in Blocco', ja: '画像一括リサイズ（バッチ処理）', ko: '일괄 이미지 크기 조절', id: 'Ubah Ukuran Gambar Massal' },
  { slug: 'bulk-image-compressor', en: 'Bulk Image Compressor', es: 'Compresor de Imágenes por Lotes', fr: 'Compression d’Images par Lot', de: 'Massen-Bildkomprimierer (Batch)', pt: 'Comprimir Imagens em Lote', it: 'Compressione Immagini in Blocco', ja: '画像一括圧縮（バッチ処理）', ko: '일괄 이미지 압축', id: 'Kompres Gambar Massal' },
  { slug: 'remove-image-metadata', en: 'Remove Image Metadata (EXIF)', es: 'Eliminar Metadatos EXIF de Fotos', fr: 'Supprimer les Métadonnées d’Image (EXIF)', de: 'Bild-Metadaten & EXIF Löschen', pt: 'Remover Metadados EXIF da Imagem', it: 'Rimuovi Metadati EXIF dalle Immagini', ja: 'EXIFメタデータ削除・プライバシー保護', ko: '이미지 EXIF 메타데이터 삭제', id: 'Hapus Metadata EXIF Gambar' },
  { slug: 'image-analyzer', en: 'Image Analyzer & Inspector', es: 'Analizador de Imágenes', fr: 'Analyseur d’Image & Propriétés', de: 'Bildanalyse-Tool & Inspektor', pt: 'Analisador de Imagens', it: 'Analizzatore di Immagini', ja: '画像解析・プロパティ確認', ko: '이미지 분석기 및 속성 확인', id: 'Penganalisis Gambar & Dimensi' },
  { slug: 'image-color-picker', en: 'Image Color Picker (Eyedropper)', es: 'Selector de Color de Imagen (Cuentagotas)', fr: 'Pipette à Couleurs d’Image', de: 'Bild-Farbpipette (Color Picker)', pt: 'Conta-gotas de Cores da Imagem', it: 'Contagocce di Colori da Immagine', ja: 'スポイト・カラーピッカーツール', ko: '이미지 스포이드 색상 추출기', id: 'Pemilih Warna Gambar (Eyedropper)' },
  { slug: 'image-palette-generator', en: 'Image Palette Generator', es: 'Generador de Paletas de Color', fr: 'Générateur de Palette de Couleurs', de: 'Farbpaletten-Generator', pt: 'Gerador de Paleta de Cores', it: 'Generatore di Palette di Colori', ja: 'カラーパレット自動抽出ツール', ko: '이미지 컬러 팔레트 생성기', id: 'Generator Palet Warna Gambar' },
  { slug: 'add-text-to-image', en: 'Add Text to Image', es: 'Añadir Texto a la Imagen', fr: 'Ajouter du Texte sur une Image', de: 'Text zu Bild Hinzufügen', pt: 'Adicionar Texto na Imagem', it: 'Aggiungi Testo all’Immagine', ja: '画像にテキスト・文字入れ', ko: '이미지에 글자 및 텍스트 추가', id: 'Tambah Teks ke Gambar' },
  { slug: 'watermark-image', en: 'Watermark Image', es: 'Marca de Agua para Fotos', fr: 'Ajouter un Filigrane sur une Image', de: 'Wasserzeichen auf Bild Setzen', pt: 'Adicionar Marca d’Água na Imagem', it: 'Applica Filigrana alle Immagini', ja: '画像に透かし・ウォーターマーク追加', ko: '이미지 워터마크 추가', id: 'Beri Watermark pada Gambar' },
  { slug: 'add-border-to-image', en: 'Add Border to Image', es: 'Añadir Borde a la Imagen', fr: 'Ajouter une Bordure à une Image', de: 'Rahmen zu Bild Hinzufügen', pt: 'Adicionar Borda na Imagem', it: 'Aggiungi Bordo all’Immagine', ja: '画像に枠線・フレーム追加', ko: '이미지에 테두리 추가', id: 'Tambah Bingkai ke Gambar' },
  { slug: 'round-image', en: 'Round Image Corners', es: 'Redondear Esquinas de Imagen', fr: 'Arrondir les Coins d’Image', de: 'Bild Ecken Abrunden & Kreisavatar', pt: 'Arredondar Cantos da Imagem', it: 'Arrotonda Angoli Immagine', ja: '画像を丸く切り抜き・角丸作成', ko: '이미지 둥글게 자르기 및 원형 아바타', id: 'Bulatkan Sudut Gambar' },
  { slug: 'favicon-generator', en: 'Favicon Generator Package', es: 'Generador de Favicons e Iconos', fr: 'Générateur de Favicon Complet', de: 'Favicon-Generator (ICO & PNG)', pt: 'Gerador de Favicon Completo', it: 'Generatore di Favicon per Siti Web', ja: 'ファビコン作成・ICO生成ツール', ko: '파비콘 및 아이콘 패키지 생성기', id: 'Generator Favicon ICO & PNG' },
  { slug: 'image-to-base64', en: 'Image to Base64 Converter', es: 'Convertir Imagen a Base64', fr: 'Convertir Image en Base64', de: 'Bild in Base64 Umwandeln', pt: 'Converter Imagem para Base64', it: 'Converti Immagine in Base64', ja: '画像をBase64文字列に変換', ko: '이미지를 Base64 문자열로 변환', id: 'Konversi Gambar ke Base64' },
  { slug: 'image-to-data-uri', en: 'Image to Data URI', es: 'Generar Data URI de Imagen', fr: 'Générer un Data URI d’Image', de: 'Bild in Data URI Konvertieren', pt: 'Gerar Data URI da Imagem', it: 'Genera Data URI da Immagine', ja: '画像をData URI形式に変換', ko: '이미지 Data URI 생성기', id: 'Buat Data URI dari Gambar' },
  { slug: 'base64-to-image', en: 'Base64 to Image Decoder', es: 'Decodificar Base64 a Imagen', fr: 'Convertir Base64 en Image', de: 'Base64 in Bild Dekodieren', pt: 'Decodificar Base64 para Imagem', it: 'Decodifica Base64 in Immagine', ja: 'Base64コードを画像に変換', ko: 'Base64 문자열을 이미지로 복원', id: 'Dekode Base64 ke Gambar' },
  { slug: 'svg-to-png', en: 'SVG to PNG Converter', es: 'Convertir SVG a PNG de Alta Resolución', fr: 'Convertir SVG en PNG Haute Résolution', de: 'SVG in PNG Konvertieren', pt: 'Converter SVG para PNG de Alta Resolução', it: 'Convertire SVG in PNG ad Alta Risoluzione', ja: 'SVGを透過PNGに高画質変換', ko: 'SVG 벡터를 PNG 이미지로 변환', id: 'Konversi SVG ke PNG' },
];

const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id'];

mkdirSync(resolve(process.cwd(), 'src/i18n/tools'), { recursive: true });

for (const loc of locales) {
  const dict = {};
  for (const t of tools) {
    const localizedName = t[loc] || t.en;
    dict[t.slug] = {
      name: localizedName,
      shortName: localizedName.split(' ')[0] || localizedName,
      tagline: `${localizedName} — Fast, private, and 100% in-browser processing.`,
      seoTitle: `${localizedName} — Free Online Tool — Image Toolbox`,
      seoDescription: `${localizedName} online for free. Fast, private client-side processing with zero server uploads.`,
      keywords: [t.slug, localizedName.toLowerCase(), 'image tool', 'online free', loc],
      howToSteps: [
        { title: 'Upload Image', description: 'Drag and drop your image or click to select from your device.' },
        { title: 'Adjust Settings', description: 'Fine-tune options using precision sliders and instant preview.' },
        { title: 'Download Result', description: 'Save the optimized output instantly to your computer.' },
      ],
      features: [
        { title: '100% Client-Side Privacy', description: 'Your photos never leave your device.' },
        { title: 'Instant Processing', description: 'No upload queues or network latency.' },
        { title: 'Lossless Output Quality', description: 'High-precision Canvas 2D rendering.' },
      ],
      faqs: [
        { question: `Is this ${localizedName} tool free?`, answer: 'Yes, it is 100% free with unlimited usage.' },
        { question: 'Are my images stored anywhere?', answer: 'No. All processing happens in your browser memory.' },
      ],
    };
  }

  const fileContent = `import type { LocalizedToolItem } from '../types';\n\nexport const ${loc}Tools: Record<string, LocalizedToolItem> = ${JSON.stringify(dict, null, 2)};\n`;
  writeFileSync(resolve(process.cwd(), `src/i18n/tools/${loc}.ts`), fileContent, 'utf8');
}

const indexContent = `import type { LocalizedToolItem } from '../types';
import { enTools } from './en';
import { esTools } from './es';
import { frTools } from './fr';
import { deTools } from './de';
import { ptTools } from './pt';
import { itTools } from './it';
import { jaTools } from './ja';
import { koTools } from './ko';
import { idTools } from './id';

const TOOL_DICTIONARIES: Record<string, Record<string, LocalizedToolItem>> = {
  en: enTools,
  es: esTools,
  fr: frTools,
  de: deTools,
  pt: ptTools,
  it: itTools,
  ja: jaTools,
  ko: koTools,
  id: idTools,
};

export function getLocalizedToolContent(slug: string, locale: string = 'en'): LocalizedToolItem {
  const loc = (locale || 'en').toLowerCase();
  const dict = TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
  return dict[slug] || enTools[slug] || {
    name: slug,
    shortName: slug,
    tagline: 'Image tool',
    seoTitle: 'Image Tool',
    seoDescription: 'Online image tool',
    keywords: [slug],
    howToSteps: [],
    features: [],
    faqs: [],
  };
}

export function getAllLocalizedTools(locale: string = 'en'): Record<string, LocalizedToolItem> {
  const loc = (locale || 'en').toLowerCase();
  return TOOL_DICTIONARIES[loc] || TOOL_DICTIONARIES.en;
}

export { enTools, esTools, frTools, deTools, ptTools, itTools, jaTools, koTools, idTools };
`;

writeFileSync(resolve(process.cwd(), 'src/i18n/tools/index.ts'), indexContent, 'utf8');
console.log('✅ Generated 9 tool dictionaries with type-only imports successfully!');
