import type { LocalizedHomeData } from '../types';

export const idHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'Semua alat gambar yang Anda butuhkan, di satu tempat',
    subtitle:
      'Potong, ubah ukuran, kompres, konversi, hapus background, dan rapikan foto secara gratis. Tanpa daftar, tanpa watermark, dan file Anda tetap di perangkat Anda.',
    dropzoneTitle: 'Letakkan gambar untuk memulai',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, SVG, atau HEIC dari iPhone, hingga 50 MB',
  },
  sections: {
    indexTitle: 'Semua alat',
    indexSubtitle: 'Setiap alat memakai ruang kerja yang sama: buka gambar, atur, lalu unduh.',
    pillarsTitle: 'Cara kerjanya',
    faqTitle: 'Pertanyaan',
  },
  trustPillars: [
    {
      title: 'Satu ruang kerja untuk semua tugas',
      description:
        'Setiap alat terbuka dengan cara yang sama, dan Anda bisa langsung meneruskan gambar ke alat berikutnya, misalnya potong lalu kompres.',
      icon: 'Layers',
    },
    {
      title: 'Tidak ada yang diunggah',
      description:
        'Gambar diproses oleh browser di perangkat Anda sendiri, jadi tidak ada waktu tunggu unggahan dan tidak ada salinan di server.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Gratis, tanpa akun',
      description:
        'Tanpa daftar, tanpa watermark, dan tanpa batas harian. Satu file bisa hingga 50 MB; alat massal menerima hingga 50 file.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Edit & Ubah',
    'optimize-compress': 'Optimasi & Kompresi',
    'convert-formats': 'Konversi Format',
    'pdf-documents': 'PDF & Dokumen',
    utilities: 'Inspeksi & Utilitas',
    developer: 'Alat Developer',
  },
  faqs: [
    {
      question: 'Apakah gambar saya diunggah ke suatu tempat?',
      answer:
        'Tidak. Setiap alat berjalan di dalam browser Anda, jadi gambar diproses di perangkat Anda sendiri dan tidak pernah dikirim ke server. Alat penghapus background mengunduh model AI-nya sekali, lalu juga berjalan di perangkat.',
    },
    {
      question: 'Apakah benar-benar gratis?',
      answer: 'Ya. Semua alat bisa dipakai gratis tanpa akun, dan tidak ada watermark.',
    },
    {
      question: 'Seberapa besar gambar yang bisa saya pakai?',
      answer:
        'Satu gambar bisa hingga 50 MB. Kompresor massal dan pengubah ukuran massal menerima hingga 50 gambar sekaligus, masing-masing hingga 50 MB. Foto yang sangat besar mungkin lambat di HP lama.',
    },
    {
      question: 'Format apa saja yang bisa saya buka dan simpan?',
      answer:
        'Anda bisa membuka foto JPG, PNG, WebP, AVIF, GIF, BMP, SVG, dan HEIC dari iPhone. Anda bisa menyimpan sebagai JPG, PNG, WebP, atau AVIF, tergantung alatnya.',
    },
    {
      question: 'Apakah bisa dipakai di HP saya?',
      answer:
        'Ya. Alat-alat ini bisa dipakai di browser HP terbaru di iPhone dan Android, termasuk untuk foto HEIC dari iPhone. Anda juga bisa memasang situs ini sebagai aplikasi. Setelah kunjungan pertama, sebagian besar alat bisa dipakai offline; ekspor AVIF dan penghapusan latar belakang perlu dipakai sekali saat online.',
    },
    {
      question: 'Bisakah saya memakai satu alat setelah alat lain?',
      answer:
        'Bisa. Setelah mengedit, pilih langkah berikutnya seperti Kompres atau Ubah Ukuran, dan gambar Anda langsung terbuka di alat itu tanpa perlu disimpan dan diunggah ulang.',
    },
  ],
};
