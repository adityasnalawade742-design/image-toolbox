import { LocalizedHomeData } from '../types';

export const idHome: LocalizedHomeData = {
  heroPill: 'Privasi Terjamin • Tanpa Unggah ke Server • 27 Alat Gratis',
  heroHeadlineMain: 'Alat Gambar Presisi Tinggi,',
  heroHeadlineAccent: 'Langsung di Browser Anda',
  heroSubheadline: 'Potong, ubah ukuran, kompres, konversi, dan edit gambar secara lokal tanpa unggah ke cloud, dengan kecepatan instan dan kualitas maksimal.',
  guarantee1: '100% Privasi di Browser',
  guarantee2: 'Kecepatan Instan Tanpa Unggah',
  guarantee3: 'Tanpa Batasan Ukuran',
  whyChooseTitle: 'Alasan Profesional Memilih Image Toolbox',
  whyChooseSubtitle: 'Dirancang untuk developer, desainer, fotografer, dan pengguna yang mengutamakan privasi.',
  feature1Title: 'Nol Pengunggahan ke Server',
  feature1Desc: 'Gambar Anda tetap aman di perangkat Anda. HTML5 Canvas memproses semuanya secara lokal tanpa transmisi data.',
  feature2Title: 'Mesin Canvas Secepat Kilat',
  feature2Desc: 'Pratinjau langsung, operasi batch multi-gambar, dan encoder WebP/PNG berkinerja tinggi tanpa antrean server.',
  feature3Title: 'Siap untuk Developer & Webmaster',
  feature3Desc: 'Dari konversi Base64 hingga rasterisasi SVG, penghapusan EXIF, dan generator favicon lengkap.',
  categories: [
    { id: 'edit', label: 'Edit & Transformasi', description: 'Potong, ubah ukuran, putar, balik, dan bingkai foto' },
    { id: 'optimize', label: 'Optimasi & Kompres', description: 'Kecilkan ukuran file dan hapus metadata' },
    { id: 'convert', label: 'Konversi Format', description: 'Konversi antara WebP, PNG, JPG, dan AVIF' },
    { id: 'utilities', label: 'Kalkulator & Utilitas', description: 'Pipet warna, rasio aspek, dan hitung DPI' },
    { id: 'developer', label: 'Alat Web & Developer', description: 'Generator favicon, Base64, dan Data URI' }
  ],
  faqs: [
    {
      question: 'Apakah foto saya diunggah ke server eksternal?',
      answer: 'Tidak, sama sekali tidak. Image Toolbox memproses seluruh operasi langsung di dalam browser web Anda menggunakan HTML5 Canvas.'
    },
    {
      question: 'Apakah Image Toolbox benar-benar 100% gratis?',
      answer: 'Ya, seluruh 27 alat gratis tanpa batasan kuota, tanpa watermark, dan tanpa perlu mendaftar akun.'
    },
    {
      question: 'Format gambar apa saja yang didukung?',
      answer: 'Mendukung format JPG, PNG, WebP, AVIF, SVG, GIF, dan Data URI Base64 untuk seluruh fitur.'
    },
    {
      question: 'Bisakah saya memproses banyak gambar sekaligus?',
      answer: 'Bisa! Alat pengubah ukuran dan kompresi massal kami dapat memproses puluhan gambar sekaligus dan mengunduhnya dalam format ZIP instan.'
    }
  ]
};
