import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const translations = {
  fr: {
    'flip-image':        { name: 'Retourner une Image', seoTitle: "Retourner une Image en Ligne Gratuit — Effet Miroir Horizontal et Vertical" },
    'rotate-image':      { name: 'Faire Pivoter une Image', seoTitle: "Faire Pivoter une Image en Ligne Gratuit — Rotation 90°, 180°, 270°" },
    'round-image':       { name: "Arrondir les Coins d'Image", seoTitle: "Arrondir les Coins d'une Photo en Ligne Gratuit — Avatar Circulaire" },
    'image-analyzer':    { name: "Analyseur d'Image", seoTitle: "Analyseur d'Image en Ligne Gratuit — Inspecter Propriétés et Dimensions" },
    'favicon-generator': { name: 'Générateur de Favicon', seoTitle: "Générateur de Favicon en Ligne Gratuit — Créer Favicon ICO et PNG" },
  },
  de: {
    'flip-image':        { name: 'Bild Spiegeln', seoTitle: "Bild Spiegeln Online Kostenlos — Horizontal und Vertikal Spiegeln" },
    'rotate-image':      { name: 'Bild Drehen', seoTitle: "Bild Drehen Online Kostenlos — Fotos 90°, 180°, 270° Rotieren" },
    'round-image':       { name: 'Bild Abrunden', seoTitle: "Bild Abrunden Online Kostenlos — Runde Ecken und Kreisavatare" },
    'image-analyzer':    { name: 'Bildanalyse-Tool', seoTitle: "Bildanalyse Online Kostenlos — Bildgröße und Eigenschaften Prüfen" },
    'favicon-generator': { name: 'Favicon-Generator', seoTitle: "Favicon-Generator Online Kostenlos — ICO und PNG Favicon Erstellen" },
  },
  pt: {
    'flip-image':        { name: 'Inverter Imagem', seoTitle: "Inverter Imagem Online Grátis — Espelhar Fotos Horizontal e Verticalmente" },
    'rotate-image':      { name: 'Girar Imagem', seoTitle: "Girar Imagem Online Grátis — Rotacionar Fotos 90°, 180°, 270°" },
    'round-image':       { name: 'Arredondar Imagem', seoTitle: "Arredondar Cantos de Foto Online Grátis — Avatar Circular" },
    'image-analyzer':    { name: 'Analisador de Imagens', seoTitle: "Analisador de Imagens Online Grátis — Inspecionar Dimensões e Propriedades" },
    'favicon-generator': { name: 'Gerador de Favicon', seoTitle: "Gerador de Favicon Online Grátis — Criar Favicon ICO e PNG" },
  },
  it: {
    'flip-image':        { name: 'Capovolgi Immagine', seoTitle: "Capovolgere Immagine Online Gratis — Specchio Orizzontale e Verticale" },
    'rotate-image':      { name: 'Ruota Immagine', seoTitle: "Ruotare Immagine Online Gratis — Rotazione 90°, 180°, 270°" },
    'round-image':       { name: 'Arrotonda Immagine', seoTitle: "Arrotondare Angoli Foto Online Gratis — Avatar Circolare" },
    'image-analyzer':    { name: 'Analizzatore di Immagini', seoTitle: "Analizzatore di Immagini Online Gratis — Ispezionare Dimensioni e Proprietà" },
    'favicon-generator': { name: 'Generatore di Favicon', seoTitle: "Generatore di Favicon Online Gratis — Creare Favicon ICO e PNG" },
  },
  ja: {
    'flip-image':        { name: '画像を反転・ミラー', seoTitle: "画像を反転・鏡像 無料オンライン — 水平・垂直反転ツール" },
    'rotate-image':      { name: '画像を回転・傾き補正', seoTitle: "画像を回転 無料オンライン — 90°・180°・270°回転ツール" },
    'round-image':       { name: '画像を丸く切り抜き', seoTitle: "画像を丸く切り抜き 無料オンライン — 円形アバター・角丸作成" },
    'image-analyzer':    { name: '画像解析・プロパティ確認', seoTitle: "画像解析 無料オンライン — 解像度・ファイルサイズ・アスペクト比確認" },
    'favicon-generator': { name: 'ファビコン作成ツール', seoTitle: "ファビコン作成 無料オンライン — ICO・PNG・Webmanifest生成" },
  },
  ko: {
    'flip-image':        { name: '이미지 뒤집기', seoTitle: "이미지 뒤집기 무료 온라인 — 좌우 상하 반전 도구" },
    'rotate-image':      { name: '이미지 회전', seoTitle: "이미지 회전 무료 온라인 — 90°・180°・270° 회전 도구" },
    'round-image':       { name: '이미지 둥글게 자르기', seoTitle: "이미지 둥글게 자르기 무료 온라인 — 원형 아바타 및 둥근 모서리" },
    'image-analyzer':    { name: '이미지 분석기', seoTitle: "이미지 분석기 무료 온라인 — 해상도・크기・비율 확인 도구" },
    'favicon-generator': { name: '파비콘 생성기', seoTitle: "파비콘 생성기 무료 온라인 — ICO・PNG 파비콘 만들기" },
  },
  id: {
    'flip-image':        { name: 'Balik Gambar', seoTitle: "Balik Gambar Online Gratis — Cermin Horizontal dan Vertikal" },
    'rotate-image':      { name: 'Putar Gambar', seoTitle: "Putar Gambar Online Gratis — Rotasi 90°, 180°, 270°" },
    'round-image':       { name: 'Bulatkan Gambar', seoTitle: "Bulatkan Sudut Foto Online Gratis — Avatar Lingkaran dan Sudut Membulat" },
    'image-analyzer':    { name: 'Penganalisis Gambar', seoTitle: "Penganalisis Gambar Online Gratis — Periksa Dimensi dan Properti Gambar" },
    'favicon-generator': { name: 'Generator Favicon', seoTitle: "Generator Favicon Online Gratis — Buat Favicon ICO dan PNG" },
  }
};

const cwd = process.cwd();

for (const [locale, tools] of Object.entries(translations)) {
  const filePath = resolve(cwd, `src/i18n/tools/${locale}.ts`);
  let content = readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [slug, t] of Object.entries(tools)) {
    // Match the slug key followed by name field within the next ~200 chars
    const oldNameRegex = new RegExp(`('${slug}'[\\s\\S]{0,100}?)"name":\\s*"[^"]+"`, 'm');
    const replacement = (match, prefix) => `${prefix}"name": "${t.name}"`;
    if (oldNameRegex.test(content)) {
      content = content.replace(oldNameRegex, replacement);
      changed = true;
      console.log(`  ✅ ${locale}/${slug} → "${t.name}"`);
    } else {
      console.log(`  ⚠️  ${locale}/${slug} — pattern not matched`);
    }
  }

  if (changed) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`Written: ${locale}.ts`);
  }
}

console.log('\nDone.');
