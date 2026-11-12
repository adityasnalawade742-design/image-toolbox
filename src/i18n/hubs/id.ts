import type { HubTexts } from './types';

export const idHubs: HubTexts = {
  labels: {
    server: 'Memakai server kami',
    more: 'Koleksi lainnya',
    allTools: 'Semua {count} alat',
  },
  pages: {
    'pdf-tools': {
      title: 'Alat PDF Gratis: Gabung, Konversi, Edit, dan Tanda Tangan',
      description: '58 alat PDF gratis: gabungkan, pisahkan, kompres, konversi dari dan ke Word atau gambar, edit, tanda tangani, dan lindungi. Tanpa daftar.',
      h1: 'Alat PDF',
      intro:
        'Semua untuk bekerja dengan PDF, gratis dan tanpa akun: gabungkan dan pisahkan file, ubah Word, Excel, PowerPoint, dan gambar menjadi PDF dan sebaliknya, edit, isi, tanda tangani, dan lindungi. Sebagian besar alat berjalan di browser, jadi PDF tidak meninggalkan perangkat Anda; beberapa alat yang memerlukan server kami diberi tanda, dan filenya langsung dihapus setelah selesai.',
      groups: {
        toPdf: 'Konversi ke PDF',
        fromPdf: 'Konversi dari PDF',
        edit: 'Edit dan beri anotasi',
        pages: 'Atur halaman',
        secure: 'Tanda tangan, lindungi, dan bersihkan',
        fix: 'Kompres, perbaiki, dan periksa',
      },
      faqs: [
        { question: 'Apakah alat PDF ini gratis?', answer: 'Ya. Semua alat gratis dipakai tanpa akun, tanpa watermark, dan tanpa batas harian.' },
        {
          question: 'Apakah PDF saya diunggah?',
          answer:
            'Sebagian besar alat bekerja di dalam browser, jadi file tetap di perangkat Anda. Alat bertanda “Memakai server kami”, seperti Word ke PDF, Kompres PDF, dan OCR PDF, mengirim file lewat koneksi terenkripsi dan menghapusnya begitu hasilnya dikirim kembali.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Alat Edit Gambar Gratis: Potong, Ubah Ukuran, Hapus Latar',
      description: '42 alat edit foto gratis: potong, ubah ukuran, hapus atau ganti latar, tambahkan teks dan watermark, serta sesuaikan untuk media sosial.',
      h1: 'Alat edit gambar',
      intro:
        'Edit cepat tanpa memasang apa pun: potong dan ubah ukuran, hapus atau ganti latar belakang, tambahkan teks, watermark, dan bingkai, pertajam dan perbaiki warna, atau sesuaikan gambar untuk Instagram, YouTube, dan jaringan lain. Semua alat berjalan di browser, jadi foto Anda tidak pernah diunggah dan formatnya dipertahankan bila memungkinkan.',
      groups: {
        basics: 'Potong, ubah ukuran, dan putar',
        background: 'Latar belakang dan potongan',
        text: 'Teks, watermark, dan tanda',
        enhance: 'Perbaiki dan tingkatkan',
        social: 'Ukuran media sosial',
        combine: 'Gabung dan pisah',
      },
      faqs: [
        { question: 'Apakah saya perlu memasang aplikasi?', answer: 'Tidak. Alat ini berjalan di browser terbaru mana pun, di komputer atau ponsel, dan foto Anda tetap di perangkat.' },
        {
          question: 'Apakah kualitas foto saya turun?',
          answer: 'Edit dilakukan pada foto berukuran penuh, yang disimpan dalam format aslinya bila memungkinkan. File JPG dan WebP disimpan ulang dengan kualitas tinggi.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Konverter Gambar Gratis: HEIC, JPG, PNG, WebP, AVIF',
      description: '26 konverter gambar gratis di browser: HEIC ke JPG, JPG ke PNG, WebP, dan AVIF, serta GIF, BMP, TIFF, dan SVG ke format umum, beberapa file sekaligus.',
      h1: 'Konverter format gambar',
      intro:
        'Ubah gambar ke format yang Anda perlukan: foto HEIC iPhone ke JPG, PNG ke JPG atau WebP agar lebih kecil, AVIF untuk web, atau GIF, BMP, TIFF, dan SVG ke format sehari-hari. Sebagian besar konverter menerima beberapa file sekaligus, dan semuanya berjalan di browser, jadi tidak ada yang diunggah. Bingung memilih? Konverter Gambar Universal membuka hampir semua gambar dan menyimpannya sebagai JPG, PNG, WebP, atau AVIF.',
      groups: {
        any: 'Format apa pun',
        heic: 'Foto iPhone (HEIC)',
        jpgPng: 'JPG dan PNG',
        web: 'WebP dan AVIF',
        other: 'GIF, BMP, TIFF, dan SVG',
        pdf: 'Ke PDF dan teks',
      },
      faqs: [
        {
          question: 'Format mana yang sebaiknya saya pilih?',
          answer: 'JPG untuk foto yang harus bisa dibuka di mana saja, PNG untuk tangkapan layar, logo, dan latar transparan, serta WebP atau AVIF untuk file lebih kecil di situs web. Foto HEIC dari iPhone paling baik diubah ke JPG untuk dibagikan.',
        },
        { question: 'Bisakah saya mengonversi banyak gambar sekaligus?', answer: 'Bisa. Letakkan beberapa file di konverter, lalu semuanya dikonversi dengan pengaturan yang sama dan diunduh dalam satu ZIP.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Pembuat dan Pemindai Kode QR dan Barcode Gratis',
      description: '15 alat gratis untuk membuat kode QR tautan, Wi-Fi, kontak, WhatsApp, dan pembayaran, membuat barcode EAN, UPC, dan ISBN, serta membaca kode dengan kamera.',
      h1: 'Alat kode QR dan barcode',
      intro:
        'Buat kode QR untuk tautan, jaringan Wi-Fi, kartu kontak, chat WhatsApp, atau pembayaran, buat barcode EAN, UPC, ISBN, Data Matrix, dan PDF417, atau buat ratusan sekaligus dari daftar dan cetak di satu lembar. Anda juga bisa membaca kode dari foto atau kamera. Semuanya berjalan di browser, tanpa daftar.',
      groups: {
        qr: 'Kode QR',
        barcodes: 'Barcode',
        read: 'Pindai dan baca',
      },
      faqs: [
        { question: 'Apakah kode QR-nya kedaluwarsa?', answer: 'Tidak. Isinya tersimpan di dalam kode itu sendiri, bukan di balik tautan kami, jadi tetap berfungsi selama kode yang dicetak masih bisa dibaca.' },
        {
          question: 'Bisakah barcode ini dipakai untuk produk di toko?',
          answer: 'Barcode dibuat sesuai standar, tetapi nomor EAN dan UPC untuk produk yang dijual di toko harus diperoleh dari GS1. Untuk stok, rak, atau acara sendiri, nomor apa pun bisa dipakai.',
        },
      ],
    },
    'image-utilities': {
      title: 'Utilitas Gambar Gratis: Penampil EXIF, Pengambil Warna, DPI',
      description: '21 alat gratis untuk memeriksa gambar: lihat dan hapus metadata, ambil warna, ubah DPI, ubah piksel ke inci atau cm, dan salin teks dari gambar.',
      h1: 'Utilitas gambar',
      intro:
        'Alat kecil untuk pertanyaan seputar gambar: apa yang terungkap dari metadata foto dan cara menghapusnya, warna apa yang dipakai, seberapa besar hasil cetaknya pada DPI tertentu, apakah dua foto berbeda, atau teks apa yang ada di dalamnya. Semuanya berjalan di browser, jadi gambar Anda tetap di perangkat.',
      groups: {
        inspect: 'Periksa foto',
        colour: 'Warna',
        size: 'Ukuran, DPI, dan cetak',
        text: 'Teks dan pesan tersembunyi',
      },
      faqs: [
        {
          question: 'Bisakah saya menghapus lokasi dari foto?',
          answer: 'Bisa. Hapus Metadata Gambar menghapus lokasi GPS, detail kamera, dan data EXIF lainnya, dan Penampil EXIF menunjukkan isi foto sebelum Anda membagikannya.',
        },
        {
          question: 'Berapa DPI yang saya perlukan untuk mencetak?',
          answer: '300 DPI adalah target umum untuk foto dan dokumen. DPI hanya menentukan ukuran cetak, bukan jumlah piksel: Ubah DPI Gambar menuliskannya ke file, dan kalkulator Piksel ke Inci serta Piksel ke CM menunjukkan ukuran cetaknya.',
        },
      ],
    },
  },
};
