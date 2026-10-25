import type { LocalizedToolItem } from '../types';

export const idTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Potong Gambar",
    shortName: "Potong",
    tagline: "Ambil bagian foto yang Anda inginkan dengan menggeser bingkai, mengetik ukuran piksel, atau memilih rasio aspek siap pakai.",
    intro:
      "Potong Gambar memangkas foto ke area yang Anda pilih dan hanya menyimpan area itu dalam resolusi penuh. Gunakan untuk membuang tepi kosong, membingkai subjek, atau menyesuaikan bentuk yang dibutuhkan postingan media sosial. Selain pemotongan bebas, tersedia preset rasio seperti 1:1, 4:5, 9:16, dan 16:9, input piksel yang pasti, serta mode lingkaran untuk foto profil.",
    seoTitle: "Potong Gambar Online – Gratis, Tanpa Unggah",
    seoDescription:
      "Potong gambar online gratis. Geser bingkai atau ketik piksel, pakai preset 1:1, 4:5, 16:9, atau 9:16, lalu simpan ke JPG, PNG, WebP, atau AVIF. Tanpa unggah.",
    keywords: [
      "potong gambar",
      "crop foto online",
      "potong foto jadi persegi",
      "crop foto untuk instagram",
      "potong gambar 16:9",
      "crop foto bulat",
      "potong gambar tanpa mengurangi kualitas",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto Anda",
        description:
          "Letakkan gambar di kotak unggah, klik untuk memilih file, atau tempel dengan Ctrl+V. File JPG, PNG, WebP, AVIF, GIF, dan HEIC dari iPhone didukung.",
      },
      {
        title: "Pilih area potongan",
        description:
          "Geser bingkai dan pegangannya di pratinjau, atau klik rasio seperti Persegi 1:1, Story 9:16, atau preset media sosial. Untuk hasil yang pasti, ketik posisi X, posisi Y, lebar, dan tinggi dalam piksel.",
      },
      {
        title: "Pilih bentuk dan format",
        description:
          "Beralih ke Lingkaran / Avatar (1:1) untuk potongan bulat. Format file asli dipertahankan secara default, atau Anda bisa memilih JPG, PNG, WebP, atau AVIF di Simpan sebagai.",
      },
      {
        title: "Unduh gambar hasil potongan",
        description:
          "Klik Unduh untuk menyimpan hanya area yang dipilih dalam resolusi penuh, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Preset rasio dan media sosial",
        description:
          "Asli, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2, dan 21:9, ditambah bentuk untuk potret Instagram (4:5), Reels dan TikTok, thumbnail YouTube, serta pin Pinterest.",
      },
      {
        title: "Input piksel yang pasti",
        description:
          "Ketik posisi, lebar, dan tinggi dalam piksel, kunci rasionya jika perlu, dan lihat ukuran hasil akhir sebelum menyimpan.",
      },
      {
        title: "Potongan lingkaran untuk avatar",
        description:
          "Mode lingkaran mengunci bingkai menjadi persegi dan memotong gambar bulat. Simpan sebagai PNG atau WebP agar sudutnya tetap transparan.",
      },
      {
        title: "Dipotong dari piksel asli",
        description:
          "Pratinjau mungkin diperkecil agar cepat, tetapi hasil unduhan dipotong dari foto beresolusi penuh di perangkat Anda. Tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah memotong gambar menurunkan kualitasnya?",
        answer:
          "Pemotongan hanya membuang piksel di luar bingkai; sisanya tetap tajam. Jika Anda menyimpan sebagai JPG, WebP, atau AVIF, gambar dikompres lagi, jadi pakai kualitas 90% atau lebih, atau simpan sebagai PNG, agar tetap mendekati aslinya.",
      },
      {
        question: "Bagaimana cara memotong foto jadi persegi untuk Instagram?",
        answer:
          "Klik Persegi 1:1 atau Instagram (1:1), lalu geser bingkai ke bagian yang ingin Anda simpan. Untuk postingan potret yang lebih tinggi, pakai Potret Insta (4:5).",
      },
      {
        question: "Bagaimana cara membuat foto profil berbentuk lingkaran?",
        answer:
          "Pilih Lingkaran / Avatar (1:1), geser lingkaran ke wajah, lalu simpan sebagai PNG atau WebP. JPG tidak bisa menyimpan transparansi, jadi area di luar lingkaran akan diisi warna putih.",
      },
      {
        question: "Bisakah saya memotong foto HEIC dari iPhone?",
        answer:
          "Bisa. File HEIC dikonversi di browser Anda saat dibuka. Hasil potongan disimpan sebagai JPG secara default, dan Anda bisa menggantinya ke PNG, WebP, atau AVIF.",
      },
      {
        question: "Apakah data EXIF foto tetap ada setelah dipotong?",
        answer:
          "Tidak. File baru dibuat hanya dari piksel gambar, jadi detail kamera dan lokasi GPS dari file asli tidak ikut tersalin.",
      },
      {
        question: "Bisakah saya memotong GIF animasi?",
        answer:
          "Anda bisa membuka GIF, tetapi hasilnya berupa satu gambar diam, karena JPG, PNG, WebP, dan AVIF di sini disimpan tanpa animasi.",
      },
    ],
  },
  "resize-image": {
    name: "Ubah Ukuran Gambar",
    shortName: "Ubah Ukuran",
    tagline: "Ubah lebar dan tinggi gambar dalam piksel atau persentase, dengan rasio aspek terkunci atau bebas.",
    intro:
      "Ubah Ukuran Gambar mengubah dimensi piksel foto atau grafik. Gunakan untuk memperkecil foto kamera yang besar agar cocok untuk email atau situs web, atau untuk memenuhi ukuran pasti seperti 1080 × 1080. Anda bisa mengetik lebar dan tinggi atau mengubah skala dengan persentase dari 10% hingga 300%, dan opsi Jangan perbesar mencegah Anda memperbesar gambar secara tidak sengaja.",
    seoTitle: "Ubah Ukuran Gambar Online – Piksel atau Persen",
    seoDescription:
      "Ubah ukuran gambar online gratis. Ketik lebar dan tinggi dalam piksel atau pakai persen, kunci rasio aspek, lalu simpan ke JPG, PNG, WebP, atau AVIF.",
    keywords: [
      "ubah ukuran gambar",
      "resize foto online",
      "mengubah ukuran gambar dalam pixel",
      "resize foto tanpa mengurangi kualitas",
      "resize foto 1080x1080",
      "memperkecil ukuran foto",
      "ubah skala gambar dengan persen",
    ],
    howToSteps: [
      {
        title: "Buka gambar Anda",
        description: "Letakkan, pilih, atau tempel (Ctrl+V) gambar JPG, PNG, WebP, AVIF, atau HEIC dari iPhone.",
      },
      {
        title: "Atur ukuran baru",
        description:
          "Di mode Piksel, ketik lebar atau tinggi; jika Pertahankan rasio aspek aktif, sisi lainnya diperbarui otomatis. Di mode Persen, gunakan slider atau tombol 25% hingga 200%.",
      },
      {
        title: "Pilih format file",
        description:
          "Format asli dipertahankan secara default. Anda bisa beralih ke JPG, PNG, WebP, atau AVIF dan mengatur kualitas untuk JPG, WebP, dan AVIF.",
      },
      {
        title: "Unduh hasilnya",
        description:
          "Klik Unduh untuk menyimpan gambar yang sudah diubah ukurannya, atau kirim ke Kompres jika Anda juga ingin ukuran file yang lebih kecil.",
      },
    ],
    features: [
      {
        title: "Piksel atau persentase",
        description: "Ketik dimensi pasti hingga 10.000 piksel, atau ubah skala seluruh gambar dari 10% hingga 300%.",
      },
      {
        title: "Kunci rasio aspek",
        description:
          "Pertahankan proporsi asli agar gambar tidak melar, atau buka kuncinya untuk mengatur lebar dan tinggi secara terpisah.",
      },
      {
        title: "Cegah pembesaran",
        description:
          "Membatasi ukuran pada dimensi asli, jadi gambar kecil tidak pernah diperbesar dan menjadi buram tanpa sengaja.",
      },
      {
        title: "Jenis file tetap sama",
        description: "JPG tetap JPG dan PNG tetap PNG, kecuali Anda memilih format lain.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mengubah ukuran gambar tanpa mengurangi kualitas?",
        answer:
          "Memperkecil gambar membuatnya tetap tajam. Memperbesar melebihi ukuran asli tidak bisa menambah detail, jadi gambar akan terlihat lebih lembut; aktifkan Jangan perbesar untuk menghindarinya. Simpan sebagai PNG, atau pakai kualitas 90% atau lebih untuk JPG dan WebP.",
      },
      {
        question: "Apakah mengubah ukuran memperkecil ukuran file?",
        answer:
          "Biasanya ya. Membagi dua lebar dan tinggi menyisakan sekitar seperempat piksel, jadi file menjadi jauh lebih kecil. Untuk file yang lebih kecil lagi, kompres hasilnya setelah itu.",
      },
      {
        question: "Bisakah saya mengubah ke ukuran pasti seperti 1080 × 1080?",
        answer:
          "Bisa. Matikan Pertahankan rasio aspek dan ketik kedua angkanya. Jika gambar asli tidak persegi, gambar akan melar, jadi potong dulu ke 1:1 lalu ubah ukurannya.",
      },
      {
        question: "Bisakah saya mengubah ukuran banyak gambar sekaligus?",
        answer:
          "Halaman ini mengubah ukuran satu gambar sekali jalan. Untuk mengubah ukuran hingga 50 gambar dalam satu langkah dan mengunduhnya sebagai ZIP, gunakan Ubah Ukuran Gambar Massal.",
      },
      {
        question: "Bisakah saya mengubah ukuran foto dari iPhone?",
        answer:
          "Bisa. Foto HEIC dikonversi di browser Anda dan gambar hasilnya disimpan sebagai JPG secara default.",
      },
    ],
  },
  "compress-image": {
    name: "Kompres Gambar",
    shortName: "Kompres",
    tagline: "Perkecil file gambar dengan memilih format dan kualitas, dan lihat ukuran barunya sebelum mengunduh.",
    intro:
      "Kompres Gambar memperkecil ukuran file foto agar lebih cepat dimuat di situs web atau muat dalam batas email atau unggahan. Gambar disimpan ulang sebagai WebP (default), AVIF, JPG, atau PNG dengan kualitas yang Anda pilih, dan perkiraan ukuran baru serta persentase penghematannya terlihat saat Anda menggeser slider. Mode Ukuran file mengatur kualitas untuk Anda saat Anda harus tetap di bawah batas tertentu, misalnya 100 KB.",
    seoTitle: "Kompres Gambar Online – Perkecil Ukuran File",
    seoDescription:
      "Kompres foto online gratis. Pilih WebP, AVIF, JPG, atau PNG, atur kualitas atau target ukuran dalam KB, dan lihat penghematannya sebelum mengunduh. Tanpa unggah.",
    keywords: [
      "kompres gambar",
      "kompres foto",
      "memperkecil ukuran file foto",
      "kompres jpg",
      "kompres foto 100kb",
      "kompres foto untuk email",
      "kompres png",
      "konversi dan kompres ke webp",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih format hasil",
        description:
          "WebP dipilih secara default. AVIF biasanya menghasilkan file terkecil tetapi butuh waktu lebih lama untuk dienkode, JPG bisa dibuka di mana saja, dan PNG bersifat lossless, jadi penghematannya paling sedikit.",
      },
      {
        title: "Atur kualitas atau target ukuran",
        description:
          "Geser slider kualitas dan perhatikan perkiraan ukurannya, atau beralih ke Ukuran file dan ketik ukuran dalam KB atau klik 50, 100, 200, atau 500 KB.",
      },
      {
        title: "Periksa dan unduh",
        description: "Lihat pratinjau dan persentase penghematannya, lalu klik Unduh.",
      },
    ],
    features: [
      {
        title: "Perkiraan ukuran langsung",
        description:
          "Ukuran file baru dan persentase penghematan diperbarui saat Anda mengubah pengaturan, dan Anda diberi peringatan jika hasilnya akan lebih besar dari aslinya.",
      },
      {
        title: "AVIF, WebP, JPG, dan PNG",
        description:
          "Empat format hasil, termasuk AVIF, yang dienkode langsung di browser Anda dengan encoder WebAssembly.",
      },
      {
        title: "Mode target ukuran file",
        description:
          "Ketik ukuran dalam KB dan alat ini memilih pengaturan kualitasnya. Ini hanya perkiraan, jadi periksa ukuran langsungnya sebelum mengunduh.",
      },
      {
        title: "Dimensi tetap sama",
        description:
          "Kompresi mempertahankan lebar dan tinggi. Untuk membuat file jauh lebih kecil, ubah ukurannya dulu lalu kompres.",
      },
    ],
    faqs: [
      {
        question: "Seberapa kecil gambar saya nanti?",
        answer:
          "Tergantung gambarnya. Foto kamera yang besar sering menyusut banyak sebagai WebP atau AVIF pada kualitas 70% hingga 85%, sedangkan grafik kecil atau file yang sudah dikompres mungkin hanya menyusut sedikit. Perkiraan langsung menunjukkan hasilnya sebelum Anda mengunduh.",
      },
      {
        question: "Format mana yang menghasilkan file terkecil: AVIF, WebP, atau JPG?",
        answer:
          "AVIF biasanya paling kecil pada kualitas visual yang mirip, disusul WebP lalu JPG. AVIF butuh waktu lebih lama untuk dienkode di browser, terutama untuk foto besar, dan beberapa program lama tidak bisa membukanya.",
      },
      {
        question: "Bagaimana cara mengompres gambar menjadi 100 KB?",
        answer:
          "Pilih Ukuran file dan klik 100 KB. Jika ukuran langsungnya masih di atas 100 KB, turunkan kualitas sedikit lagi, atau perkecil dimensinya dulu dengan Ubah Ukuran Gambar.",
      },
      {
        question: "Apakah kompresi membuat foto saya terlihat lebih jelek?",
        answer:
          "WebP, AVIF, dan JPG membuang detail yang sulit terlihat. Pada kualitas 75% hingga 90%, sebagian besar foto terlihat sama pada ukuran tampilan normal, sedangkan pengaturan yang sangat rendah menimbulkan buram dan area kotak-kotak.",
      },
      {
        question: "Kenapa file hasil kompres lebih besar dari aslinya?",
        answer:
          "Ini terjadi jika file asli sudah teroptimasi dengan baik, atau jika foto disimpan sebagai PNG. Coba WebP atau AVIF, atau pengaturan kualitas yang lebih rendah.",
      },
      {
        question: "Apakah data EXIF dihapus saat saya mengompres foto?",
        answer:
          "Ya. File baru dibuat dari piksel gambar, jadi informasi kamera dan lokasi GPS tidak disertakan.",
      },
    ],
  },
  "rotate-image": {
    name: "Putar Gambar",
    shortName: "Putar",
    tagline: "Putar gambar 90°, 180°, atau sudut apa pun dari -180° hingga 180°, lalu simpan dalam format yang Anda butuhkan.",
    intro:
      "Putar Gambar memperbaiki foto yang tampil miring ke samping atau terbalik, dan meluruskan gambar yang sedikit miring. Gunakan tombol 90° untuk putaran cepat atau slider Sudut khusus untuk koreksi kecil. Jika sudutnya bukan kelipatan 90°, kanvas membesar agar seluruh gambar yang diputar muat, jadi tidak ada sudut yang terpotong.",
    seoTitle: "Putar Gambar Online – 90°, 180°, atau Sudut Bebas",
    seoDescription:
      "Putar gambar online gratis. Putar foto 90° ke kiri atau kanan, 180°, atau sudut bebas untuk meluruskannya, lalu simpan ke JPG, PNG, WebP, atau AVIF. Tanpa unggah.",
    keywords: [
      "putar gambar",
      "rotate foto online",
      "putar gambar 90 derajat",
      "memutar foto",
      "meluruskan foto miring",
      "putar jpg",
      "putar gambar dengan sudut tertentu",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Putar gambarnya",
        description:
          "Klik +90° untuk memutar searah jarum jam, -90° untuk berlawanan arah jarum jam, atau 180° untuk membaliknya. Untuk koreksi kecil, geser slider Sudut khusus.",
      },
      {
        title: "Pilih format",
        description:
          "Format asli dipertahankan secara default. Setelah memakai sudut khusus, PNG, WebP, dan AVIF membuat sudut baru tetap transparan, sedangkan JPG mengisinya dengan warna putih.",
      },
      {
        title: "Unduh",
        description: "Klik Unduh untuk menyimpan gambar yang sudah diputar, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Putaran cepat 90° dan 180°",
        description: "Perbaiki foto yang miring ke samping atau terbalik dengan satu klik, dan gunakan Atur ulang untuk kembali ke awal.",
      },
      {
        title: "Sudut apa pun",
        description: "Luruskan cakrawala atau dokumen yang miring dengan slider, per satu derajat dari -180° hingga 180°.",
      },
      {
        title: "Tidak ada yang terpotong",
        description: "Untuk sudut khusus, kanvas hasil diperbesar agar seluruh gambar yang diputar muat di dalamnya.",
      },
      {
        title: "Bisa untuk foto iPhone",
        description: "Foto HEIC dikonversi di browser Anda, jadi Anda tidak perlu mengonversinya dulu.",
      },
    ],
    faqs: [
      {
        question: "Kenapa foto saya terlihat miring ke samping di beberapa aplikasi?",
        answer:
          "HP sering menyimpan gambar dalam satu arah dan menambahkan tag rotasi di data EXIF, yang diabaikan oleh sebagian aplikasi. File yang Anda unduh di sini memiliki piksel yang benar-benar diputar dan tanpa tag rotasi, jadi tampilannya sama di mana saja.",
      },
      {
        question: "Apakah memutar gambar menurunkan kualitasnya?",
        answer:
          "Putaran 90° atau 180° memindahkan piksel tanpa mengubahnya. Sudut lain mengharuskan piksel dihitung ulang, yang membuat gambar sedikit sekali lebih lembut. Menyimpan sebagai JPG, WebP, atau AVIF juga mengompresnya lagi, sedangkan PNG tidak.",
      },
      {
        question: "Apa yang mengisi sudut setelah putaran khusus?",
        answer:
          "Kanvas membesar agar gambar yang diputar muat. Pada PNG, WebP, dan AVIF, area sudut baru menjadi transparan; pada JPG menjadi putih.",
      },
      {
        question: "Bisakah saya memutar foto HEIC dari iPhone?",
        answer:
          "Bisa. Foto dikonversi di browser Anda dan versi yang diputar disimpan sebagai JPG kecuali Anda memilih format lain.",
      },
    ],
  },
  "flip-image": {
    name: "Balik Gambar",
    shortName: "Balik",
    tagline: "Cerminkan gambar secara horizontal atau vertikal, misalnya untuk memperbaiki selfie terbalik atau tulisan yang terbaca mundur.",
    intro:
      "Balik Gambar membuat salinan cermin dari sebuah gambar. Balik horizontal menukar kiri dan kanan, yang memperbaiki selfie dari kamera depan saat tulisannya terbaca terbalik. Balik vertikal membuat gambar terbalik atas-bawah seperti bayangan di air, dan memakai keduanya sekaligus memberi hasil yang sama dengan putaran 180°.",
    seoTitle: "Balik Gambar Online – Mirror Horizontal atau Vertikal",
    seoDescription:
      "Balik gambar online gratis. Cerminkan foto horizontal atau vertikal, perbaiki selfie terbalik dan tulisan mundur, lalu simpan ke JPG, PNG, WebP, atau AVIF.",
    keywords: [
      "balik gambar",
      "mirror foto online",
      "membalik foto horizontal",
      "balik gambar vertikal",
      "mirror selfie",
      "membalik gambar kiri ke kanan",
      "flip foto",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih arah pembalikan",
        description:
          "Klik Horizontal untuk menukar kiri dan kanan, atau Vertikal untuk membaliknya atas-bawah. Klik tombol lagi untuk membatalkannya, atau gunakan Balik keduanya atau Atur ulang.",
      },
      {
        title: "Pilih format",
        description: "Format asli dipertahankan secara default, atau Anda bisa menyimpan sebagai JPG, PNG, WebP, atau AVIF.",
      },
      {
        title: "Unduh",
        description: "Klik Unduh untuk menyimpan gambar cermin, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Cermin horizontal dan vertikal",
        description: "Balik ke satu arah atau keduanya, dan lihat hasilnya langsung di pratinjau.",
      },
      {
        title: "Piksel tidak diubah",
        description: "Pembalikan hanya memindahkan piksel ke posisi baru. Simpan sebagai PNG agar setiap piksel tetap persis seperti semula.",
      },
      {
        title: "Format tetap sama",
        description: "JPG disimpan sebagai JPG dan PNG sebagai PNG secara default, jadi Anda mendapat jenis file yang sama.",
      },
      {
        title: "Diproses di browser Anda",
        description: "Gambar dibalik di perangkat Anda dan tidak pernah diunggah ke server.",
      },
    ],
    faqs: [
      {
        question: "Apa bedanya membalik dan memutar?",
        answer:
          "Membalik menghasilkan gambar cermin, jadi tulisan apa pun terbaca mundur. Memutar memutar seluruh gambar di titik tengahnya, dan tulisan tetap bisa dibaca.",
      },
      {
        question: "Bagaimana cara memperbaiki selfie yang terbalik?",
        answer:
          "Banyak kamera depan menyimpan selfie sebagai gambar cermin. Buka fotonya, klik Horizontal, lalu unduh; tulisan di latar belakang akan terbaca dengan benar lagi.",
      },
      {
        question: "Apakah membalik gambar menurunkan kualitasnya?",
        answer:
          "Pembalikan itu sendiri tidak mengubah nilai piksel apa pun. Jika Anda menyimpan sebagai JPG, WebP, atau AVIF, gambar dikompres lagi, jadi pakai pengaturan kualitas tinggi atau PNG.",
      },
      {
        question: "Bisakah saya membalik gambar ke dua arah sekaligus?",
        answer:
          "Bisa. Balik keduanya mencerminkan gambar secara horizontal dan vertikal, yang hasilnya sama dengan memutarnya 180°.",
      },
    ],
  },
  "convert-image": {
    name: "Konverter Gambar Universal",
    shortName: "Konverter",
    tagline: "Ubah gambar JPG, PNG, WebP, AVIF, GIF, BMP, SVG, atau HEIC dari iPhone ke JPG, PNG, WebP, atau AVIF.",
    intro:
      "Konverter Gambar Universal mengubah gambar dari satu format file ke format lain. Alat ini membuka gambar apa pun yang bisa ditampilkan browser Anda, seperti JPG, PNG, WebP, AVIF, GIF, BMP, dan SVG, serta foto HEIC dari iPhone, lalu menyimpannya sebagai JPG, PNG, WebP, atau AVIF. Foto JPG dan HEIC diatur ke WebP secara default dan gambar lain ke PNG, tetapi Anda bisa memilih salah satu dari keempat format hasil.",
    seoTitle: "Konverter Gambar – JPG, PNG, WebP, AVIF, HEIC",
    seoDescription:
      "Konverter gambar gratis di browser. Ubah HEIC, PNG, JPG, WebP, GIF, BMP, atau SVG ke JPG, PNG, WebP, atau AVIF dengan kualitas pilihan Anda. Tanpa unggah.",
    keywords: [
      "konverter gambar",
      "ubah gambar ke jpg",
      "heic ke jpg",
      "ubah gambar ke webp",
      "ubah gambar ke avif",
      "gif ke png",
      "bmp ke jpg",
      "konversi format gambar online",
    ],
    howToSteps: [
      {
        title: "Buka gambar Anda",
        description: "Letakkan, pilih, atau tempel gambar dalam format apa pun yang bisa dibuka browser Anda, atau foto HEIC dari iPhone.",
      },
      {
        title: "Pilih format hasil",
        description: "Di Simpan sebagai, pilih JPG, PNG, WebP, atau AVIF.",
      },
      {
        title: "Atur kualitas dan latar",
        description:
          "Untuk JPG, WebP, dan AVIF, atur kualitasnya. Jika gambar punya area transparan dan Anda memilih JPG, pilih warna untuk mengisinya.",
      },
      {
        title: "Unduh file hasil konversi",
        description: "Klik Unduh. AVIF bisa memakan beberapa detik untuk foto besar karena dienkode di browser Anda.",
      },
    ],
    features: [
      {
        title: "Banyak format masukan",
        description: "Membuka JPG, PNG, WebP, AVIF, GIF, BMP, SVG, dan format lain yang didukung browser Anda, ditambah HEIC dan HEIF.",
      },
      {
        title: "Empat format hasil modern",
        description: "Simpan sebagai JPG, PNG, WebP, atau AVIF. AVIF dienkode di perangkat Anda dengan encoder WebAssembly.",
      },
      {
        title: "Transparansi ditangani dengan benar",
        description: "PNG, WebP, dan AVIF mempertahankan area transparan. Untuk JPG, Anda memilih warna penggantinya.",
      },
      {
        title: "Kontrol kualitas",
        description: "Atur kualitas dari 10% hingga 100% untuk format lossy agar ukuran file dan detail seimbang.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mengubah HEIC ke JPG?",
        answer:
          "Buka foto HEIC, pilih JPG di Simpan sebagai, lalu klik Unduh. Konversi terjadi di browser Anda, jadi foto tidak dikirim ke mana pun.",
      },
      {
        question: "Format mana yang sebaiknya saya pilih?",
        answer:
          "JPG untuk foto yang harus bisa dibuka di mana saja, PNG untuk screenshot, logo, dan grafik dengan tepi tajam atau transparansi, WebP untuk gambar web yang lebih kecil, dan AVIF untuk file terkecil di browser modern.",
      },
      {
        question: "Bisakah saya mengonversi ke GIF, BMP, atau SVG?",
        answer:
          "Tidak. Format ini bisa dibuka, tetapi hasilnya selalu JPG, PNG, WebP, atau AVIF. GIF animasi menjadi satu gambar diam.",
      },
      {
        question: "Apakah background transparan saya tetap ada?",
        answer:
          "Ya, jika Anda menyimpan sebagai PNG, WebP, atau AVIF. JPG tidak bisa menyimpan transparansi, jadi area transparan diisi dengan warna yang Anda pilih.",
      },
      {
        question: "Apakah konversinya lossless?",
        answer:
          "Menyimpan sebagai PNG bersifat lossless. JPG, WebP, dan AVIF adalah format lossy: kualitas yang lebih tinggi mempertahankan lebih banyak detail tetapi menghasilkan file yang lebih besar.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG ke PNG",
    shortName: "JPG → PNG",
    tagline: "Ubah foto JPG menjadi file PNG yang tidak akan kehilangan kualitas lagi saat Anda mengedit dan menyimpannya ulang.",
    intro:
      "JPG ke PNG mengonversi gambar JPEG ke format PNG. PNG memakai kompresi lossless, jadi gambar tidak kehilangan kualitas setiap kali Anda mengedit dan menyimpannya, yang berguna untuk screenshot, grafik, dan file yang akan Anda olah nanti. PNG memiliki piksel dan dimensi yang persis sama dengan JPG Anda, tetapi filenya biasanya lebih besar.",
    seoTitle: "Ubah JPG ke PNG – Gratis, Langsung di Browser",
    seoDescription:
      "Ubah JPG ke PNG online gratis. Dapatkan PNG lossless dengan piksel dan dimensi yang sama dengan JPEG Anda, dibuat di browser tanpa mengunggah file.",
    keywords: [
      "jpg ke png",
      "ubah jpg ke png",
      "convert jpg ke png",
      "jpeg ke png",
      "konverter jpg ke png",
      "simpan jpg sebagai png",
    ],
    howToSteps: [
      {
        title: "Buka file JPG",
        description: "Letakkan file JPG atau JPEG di kotak unggah, klik untuk memilihnya, atau tempel dengan Ctrl+V.",
      },
      {
        title: "Periksa pratinjau",
        description: "Hasilnya selalu PNG, jadi tidak ada pengaturan yang perlu diubah. Dimensinya tetap sama.",
      },
      {
        title: "Unduh PNG",
        description: "Klik Unduh PNG, atau kirim gambar ke alat lain seperti Ubah Ukuran lewat tombol Langkah berikutnya.",
      },
    ],
    features: [
      {
        title: "Salinan piksel yang persis",
        description: "Setiap piksel JPG disimpan di PNG tanpa kehilangan kualitas akibat kompresi tambahan.",
      },
      {
        title: "Aman untuk diedit berulang kali",
        description: "PNG bisa diedit dan disimpan berkali-kali tanpa artefak kompresi baru.",
      },
      {
        title: "Dimensi sama",
        description: "PNG memiliki lebar dan tinggi yang sama dengan JPG aslinya.",
      },
      {
        title: "Tanpa unggah",
        description: "File dikonversi di dalam tab browser Anda dan tetap berada di perangkat Anda.",
      },
    ],
    faqs: [
      {
        question: "Apakah mengubah JPG ke PNG meningkatkan kualitas?",
        answer:
          "Tidak. PNG mempertahankan gambar persis seperti sekarang, tetapi tidak bisa mengembalikan detail yang sudah dibuang oleh kompresi JPEG.",
      },
      {
        question: "Apakah konversi ke PNG membuat background jadi transparan?",
        answer:
          "Tidak. JPG tidak memiliki transparansi, jadi PNG tetap memakai background padat yang sama. Untuk menghapus background, gunakan alat Hapus Background.",
      },
      {
        question: "Kenapa file PNG lebih besar dari JPG?",
        answer:
          "PNG menyimpan setiap piksel tanpa kompresi lossy, sedangkan JPG membuang detail halus untuk menghemat ruang. Foto yang disimpan sebagai PNG sering beberapa kali lebih besar.",
      },
      {
        question: "Bisakah saya mengubah beberapa JPG ke PNG sekaligus?",
        answer:
          "Halaman ini mengonversi satu file sekali jalan. Ubah Ukuran Gambar Massal bisa menyimpan hingga 50 gambar sebagai PNG dalam satu ZIP jika Anda mengatur skalanya ke 100%.",
      },
      {
        question: "Apakah data EXIF dari JPG tetap ada?",
        answer:
          "Tidak. PNG dibuat hanya dari pikselnya, jadi informasi kamera dan lokasi GPS tidak ikut tersalin.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG ke JPG",
    shortName: "PNG → JPG",
    tagline: "Ubah PNG menjadi file JPG yang lebih kecil dan pilih warna pengganti area transparan.",
    intro:
      "PNG ke JPG mengubah gambar PNG menjadi JPEG, yang biasanya jauh lebih kecil untuk foto dan diterima oleh hampir semua situs web dan aplikasi. JPEG tidak bisa menyimpan transparansi, jadi Anda memilih putih, hitam, atau warna khusus apa pun untuk mengisi area transparan. Anda juga bisa mengatur kualitas JPG dari 10% hingga 100%.",
    seoTitle: "Ubah PNG ke JPG – Pilih Warna Background",
    seoDescription:
      "Ubah PNG ke JPG online gratis. Pilih background putih, hitam, atau warna khusus untuk area transparan dan atur kualitas JPG. Berjalan di browser Anda, tanpa unggah.",
    keywords: [
      "png ke jpg",
      "ubah png ke jpg",
      "convert png ke jpg",
      "png ke jpeg",
      "png ke jpg background putih",
      "konverter png ke jpg",
      "memperkecil ukuran file png",
    ],
    howToSteps: [
      {
        title: "Buka file PNG",
        description: "Letakkan file PNG di kotak unggah, klik untuk memilihnya, atau tempel dengan Ctrl+V.",
      },
      {
        title: "Pilih warna latar",
        description: "Pilih Putih, Hitam, atau warna apa pun dengan pemilih warna. Warna ini mengisi semua area transparan.",
      },
      {
        title: "Atur kualitas",
        description: "85% adalah nilai awal yang baik. Pakai nilai lebih tinggi untuk gambar dengan teks atau garis halus.",
      },
      {
        title: "Unduh JPG",
        description: "Klik Unduh JPG untuk menyimpan file hasil konversi.",
      },
    ],
    features: [
      {
        title: "Warna latar pilihan Anda",
        description: "Piksel transparan dan semi-transparan dipadukan ke warna putih, hitam, atau warna khusus.",
      },
      {
        title: "Kualitas bisa diatur",
        description: "Pilih dari 10% hingga 100% untuk menyeimbangkan ukuran file dengan detail.",
      },
      {
        title: "File lebih kecil untuk foto",
        description: "Foto dan screenshot yang detail biasanya jauh lebih kecil sebagai JPG dibanding PNG.",
      },
      {
        title: "Dimensi sama",
        description: "JPG mempertahankan lebar dan tinggi PNG secara persis.",
      },
    ],
    faqs: [
      {
        question: "Apa yang terjadi pada background transparan?",
        answer:
          "JPG tidak memiliki transparansi, jadi piksel transparan dan semi-transparan dipadukan ke warna latar yang Anda pilih. Putih dipilih secara default.",
      },
      {
        question: "Apakah JPG akan lebih kecil dari PNG?",
        answer:
          "Untuk foto dan gambar dengan banyak warna, biasanya ya, sering jauh lebih kecil. Untuk grafik sederhana dengan sedikit warna, PNG mungkin sudah kecil, dan JPG bahkan bisa lebih besar.",
      },
      {
        question: "Pengaturan kualitas berapa yang sebaiknya saya pakai?",
        answer:
          "85%, nilai default, cocok untuk sebagian besar foto. Pakai 90% hingga 100% untuk gambar dengan teks atau detail halus, dan nilai lebih rendah jika ukuran file lebih penting daripada detail.",
      },
      {
        question: "Kenapa teks terlihat buram di JPG saya?",
        answer:
          "Kompresi JPEG bisa menambah tepi lembut dan bintik kecil di sekitar teks dan garis yang tajam. Pakai kualitas lebih tinggi, atau simpan logo dan screenshot sebagai PNG atau WebP.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG ke WebP",
    shortName: "JPG → WebP",
    tagline: "Ubah foto JPG ke WebP agar file gambar lebih kecil dan halaman web lebih cepat dimuat.",
    intro:
      "JPG ke WebP mengonversi foto JPEG ke format WebP, yang bisa ditampilkan oleh semua browser utama saat ini. Pada kualitas visual yang mirip, file WebP biasanya lebih kecil daripada gambar yang sama dalam JPG, jadi halaman yang memakainya lebih cepat dimuat. Anda mengatur kualitas dengan slider dari 10% hingga 100%, dan gambar tetap memakai dimensi aslinya.",
    seoTitle: "Ubah JPG ke WebP – Gambar Web Lebih Kecil",
    seoDescription:
      "Ubah JPG ke WebP online gratis. Dapatkan gambar lebih kecil agar situs lebih cepat, atur kualitas 10% hingga 100%, dan pertahankan ukuran asli. Tanpa unggah.",
    keywords: [
      "jpg ke webp",
      "ubah jpg ke webp",
      "convert jpg ke webp",
      "jpeg ke webp",
      "konverter jpg ke webp",
      "ubah foto ke webp untuk website",
    ],
    howToSteps: [
      {
        title: "Buka file JPG",
        description: "Letakkan foto JPG atau JPEG di kotak unggah, klik untuk memilihnya, atau tempel dengan Ctrl+V.",
      },
      {
        title: "Atur kualitas",
        description: "Mulai dari sekitar 80%. Nilai lebih tinggi mempertahankan lebih banyak detail; nilai lebih rendah menghasilkan file lebih kecil.",
      },
      {
        title: "Unduh WebP",
        description: "Klik Unduh WebP dan bandingkan ukuran file baru dengan aslinya.",
      },
    ],
    features: [
      {
        title: "File lebih kecil dengan kualitas mirip",
        description: "WebP biasanya butuh lebih sedikit byte dibanding JPG untuk foto yang terlihat sama.",
      },
      {
        title: "Slider kualitas",
        description: "Pilih kualitas apa pun dari 10% hingga 100% sesuai kebutuhan kecepatan halaman dan detail gambar Anda.",
      },
      {
        title: "Dimensi asli",
        description: "Foto dikonversi tanpa mengubah lebar atau tingginya.",
      },
      {
        title: "Dikonversi di perangkat Anda",
        description: "Foto Anda diproses di browser dan tidak diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah WebP lebih baik dari JPG?",
        answer:
          "Untuk situs web, WebP biasanya menghasilkan file lebih kecil pada kualitas visual yang sama dan juga bisa menyimpan transparansi. JPG masih diterima oleh lebih banyak program lama, printer, dan formulir unggah.",
      },
      {
        question: "Apakah semua browser mendukung WebP?",
        answer:
          "Versi terbaru Chrome, Edge, Firefox, dan Safari bisa menampilkan gambar WebP. Beberapa aplikasi dan sistem operasi lama tidak bisa membukanya.",
      },
      {
        question: "Kenapa saya mendapat PNG, bukan WebP?",
        answer:
          "Beberapa browser, termasuk beberapa versi Safari, bisa menampilkan WebP tetapi tidak bisa membuatnya. Dalam hal itu, alat ini memberi tahu Anda dan menyimpan PNG; gunakan Chrome, Edge, atau Firefox untuk mendapatkan file WebP.",
      },
      {
        question: "Bagaimana cara melihat ukuran file sebelum mengunduh?",
        answer:
          "Konverter ini tidak menampilkan perkiraan ukuran. Kompres Gambar dengan WebP terpilih menampilkan perkiraan ukuran dan persentase penghematan saat Anda mengatur kualitas.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG ke WebP",
    shortName: "PNG → WebP",
    tagline: "Ubah gambar PNG ke WebP dan pertahankan background transparan, biasanya dengan file yang jauh lebih kecil.",
    intro:
      "PNG ke WebP mengonversi file PNG seperti screenshot, logo, dan grafik ke format WebP. WebP mendukung transparansi, jadi area transparan tetap transparan setelah konversi. Hasilnya biasanya jauh lebih kecil daripada PNG, dan slider kualitas membantu Anda menjaga teks dan garis tipis tetap tajam.",
    seoTitle: "Ubah PNG ke WebP – Transparansi Tetap Terjaga",
    seoDescription:
      "Ubah PNG ke WebP online gratis. Background transparan tetap terjaga, file biasanya jauh lebih kecil, dan kualitasnya bisa diatur. Berjalan penuh di browser Anda.",
    keywords: [
      "png ke webp",
      "ubah png ke webp",
      "convert png ke webp",
      "png ke webp transparan",
      "konverter png ke webp",
      "memperkecil png untuk website",
    ],
    howToSteps: [
      {
        title: "Buka file PNG",
        description: "Letakkan file PNG di kotak unggah, klik untuk memilihnya, atau tempel screenshot dengan Ctrl+V.",
      },
      {
        title: "Atur kualitas",
        description: "Pakai 90% atau lebih untuk logo, teks, dan screenshot; 75% hingga 85% biasanya cukup untuk foto.",
      },
      {
        title: "Unduh WebP",
        description: "Klik Unduh WebP. Area transparan tetap transparan di file baru.",
      },
    ],
    features: [
      {
        title: "Transparansi tetap terjaga",
        description: "Kanal alfa PNG Anda disimpan di WebP, jadi logo dan ikon tetap memiliki background tembus pandang.",
      },
      {
        title: "File jauh lebih kecil",
        description: "Kompresi WebP biasanya memperkecil screenshot dan grafik PNG menjadi sebagian kecil dari ukuran aslinya.",
      },
      {
        title: "Kontrol kualitas",
        description: "Atur kualitas dari 10% hingga 100% sesuai seberapa banyak detail yang dibutuhkan gambar.",
      },
      {
        title: "Dimensi sama",
        description: "WebP mempertahankan lebar dan tinggi PNG secara persis.",
      },
    ],
    faqs: [
      {
        question: "Apakah PNG ke WebP mempertahankan background transparan?",
        answer: "Ya. WebP mendukung transparansi, jadi piksel transparan dan semi-transparan tetap terjaga.",
      },
      {
        question: "Kenapa WebP jauh lebih kecil dari PNG?",
        answer:
          "PNG bersifat lossless dan menyimpan setiap piksel secara persis. WebP di sini memakai kompresi lossy, yang membuang detail yang sulit terlihat dan menghemat banyak ruang.",
      },
      {
        question: "Kualitas berapa yang sebaiknya untuk logo dan screenshot?",
        answer:
          "Pakai 90% hingga 100% agar teks, ikon, dan garis tipis tetap tajam. Untuk foto, 75% hingga 85% biasanya cukup.",
      },
      {
        question: "Bisakah saya memakai gambar WebP di situs web saya?",
        answer:
          "Bisa. Semua browser utama saat ini menampilkan WebP. Jika Anda juga mendukung browser atau aplikasi yang sangat lama, simpan PNG asli sebagai cadangan.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP ke JPG",
    shortName: "WebP → JPG",
    tagline: "Ubah gambar WebP ke JPG agar bisa dibuka di aplikasi, penampil foto, atau formulir unggah apa pun.",
    intro:
      "WebP ke JPG mengonversi file WebP, yang umum dipakai di situs web, menjadi gambar JPEG standar. JPG adalah pilihan paling aman saat program lama, formulir unggah, atau layanan cetak tidak menerima WebP. Jika WebP punya area transparan, Anda memilih warna untuk mengisinya, karena JPG tidak bisa menyimpan transparansi.",
    seoTitle: "Ubah WebP ke JPG – Gratis, Tanpa Unggah",
    seoDescription:
      "Ubah WebP ke JPG online gratis. Buat gambar WebP bisa dibuka di aplikasi atau formulir unggah apa pun, pilih warna isi untuk area transparan, dan atur kualitasnya.",
    keywords: [
      "webp ke jpg",
      "ubah webp ke jpg",
      "convert webp ke jpg",
      "webp ke jpeg",
      "simpan webp sebagai jpg",
      "konverter webp ke jpg",
      "cara membuka file webp",
    ],
    howToSteps: [
      {
        title: "Buka file WebP",
        description: "Letakkan gambar WebP di kotak unggah, klik untuk memilihnya, atau tempel dengan Ctrl+V.",
      },
      {
        title: "Atur kualitas dan warna isi",
        description:
          "Pilih kualitas antara 10% dan 100%. Jika gambar punya bagian transparan, pilih warna yang akan menggantikannya.",
      },
      {
        title: "Unduh JPG",
        description: "Klik Unduh JPG untuk menyimpan file yang bisa dibuka hampir di mana saja.",
      },
    ],
    features: [
      {
        title: "Kompatibilitas maksimal",
        description: "JPG bisa dibuka di hampir semua program, perangkat, printer, dan formulir unggah situs web.",
      },
      {
        title: "Warna isi untuk transparansi",
        description: "Area transparan pada WebP diisi dengan putih atau warna apa pun yang Anda pilih.",
      },
      {
        title: "Kualitas bisa diatur",
        description: "Gunakan slider kualitas untuk menyeimbangkan ukuran file dan detail.",
      },
      {
        title: "Konversi privat",
        description: "Gambar didekode dan disimpan sebagai JPG di browser Anda; tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Kenapa gambar dari situs web tersimpan sebagai WebP?",
        answer:
          "Banyak situs web menyajikan gambar sebagai WebP karena filenya lebih kecil. Saat Anda menyimpannya, Anda mendapat file WebP, yang tidak bisa dibuka oleh sebagian program lama.",
      },
      {
        question: "Apa yang terjadi pada bagian transparan WebP?",
        answer:
          "JPG tidak bisa menyimpan transparansi, jadi area itu diisi dengan warna padat. Putih dipakai secara default, dan Anda bisa memilih warna lain.",
      },
      {
        question: "Bisakah saya mengonversi WebP animasi?",
        answer: "Hanya satu frame diam yang dikonversi, karena JPG tidak bisa menyimpan animasi.",
      },
      {
        question: "Apakah JPG akan kehilangan kualitas?",
        answer:
          "WebP didekode lalu disimpan ulang sebagai JPG, yang merupakan format lossy. Pakai 90% atau lebih agar hasilnya sangat mendekati aslinya.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP ke PNG",
    shortName: "WebP → PNG",
    tagline: "Ubah gambar WebP menjadi file PNG lossless yang mempertahankan transparansi dan setiap piksel.",
    intro:
      "WebP ke PNG mengonversi gambar WebP menjadi PNG, format lossless yang didukung hampir semua editor dan penampil gambar. Area transparan tetap transparan, dan piksel hasil dekode disimpan secara persis, jadi gambar tidak kehilangan kualitas saat Anda mengedit dan menyimpannya lagi. Gunakan saat aplikasi tidak bisa membuka WebP atau saat Anda butuh file untuk diedit lebih lanjut.",
    seoTitle: "Ubah WebP ke PNG – Lossless dan Transparan",
    seoDescription:
      "Ubah WebP ke PNG online gratis. Pertahankan background transparan dan dapatkan PNG lossless yang bisa dibuka di editor gambar apa pun. Diproses di browser Anda.",
    keywords: [
      "webp ke png",
      "ubah webp ke png",
      "convert webp ke png",
      "webp ke png transparan",
      "konverter webp ke png",
      "webp ke png tanpa mengurangi kualitas",
    ],
    howToSteps: [
      {
        title: "Buka file WebP",
        description: "Letakkan gambar WebP di kotak unggah, klik untuk memilihnya, atau tempel dengan Ctrl+V.",
      },
      {
        title: "Periksa pratinjau",
        description: "Hasilnya selalu PNG lossless dengan ukuran yang sama, jadi tidak ada pengaturan kualitas.",
      },
      {
        title: "Unduh PNG",
        description: "Klik Unduh PNG untuk menyimpan file hasil konversi.",
      },
    ],
    features: [
      {
        title: "Transparansi terjaga",
        description: "Area transparan dan semi-transparan pada WebP tetap transparan di PNG.",
      },
      {
        title: "Hasil lossless",
        description: "Piksel hasil dekode disimpan secara persis, tanpa kehilangan kualitas akibat kompresi baru.",
      },
      {
        title: "Bisa dibuka di mana saja",
        description: "PNG didukung oleh hampir semua editor gambar, penampil, dan program perkantoran.",
      },
      {
        title: "Tanpa unggah",
        description: "Konversi berjalan di browser Anda, jadi file tetap berada di perangkat Anda.",
      },
    ],
    faqs: [
      {
        question: "Apakah WebP ke PNG mempertahankan background transparan?",
        answer: "Ya. PNG sepenuhnya mendukung transparansi, jadi background tetap tembus pandang.",
      },
      {
        question: "Kenapa PNG lebih besar dari WebP?",
        answer:
          "Sebagian besar gambar WebP memakai kompresi lossy, sedangkan PNG menyimpan setiap piksel tanpa kehilangan. Karena itu, gambar yang sama biasanya butuh lebih banyak byte sebagai PNG.",
      },
      {
        question: "Apakah konversi ke PNG meningkatkan kualitas gambar?",
        answer:
          "Tidak. PNG mempertahankan gambar persis seperti tampilannya sekarang, tetapi tidak bisa mengembalikan detail yang sudah dibuang oleh kompresi WebP.",
      },
      {
        question: "Bisakah saya mengubah WebP animasi ke PNG?",
        answer:
          "Alat ini menyimpan satu gambar diam. Hasil PNG di sini tidak menyertakan frame animasi.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Ubah Ukuran Gambar Massal",
    shortName: "Resize Massal",
    tagline: "Ubah ukuran hingga 50 gambar sekaligus dengan persentase, lebar pasti, atau kotak maksimum, lalu unduh dalam satu ZIP.",
    intro:
      "Ubah Ukuran Gambar Massal menerapkan aturan ukuran yang sama ke banyak gambar dalam satu langkah. Anda bisa mengubah skala setiap file dengan persentase, mengatur lebar yang pasti, atau memuatkan setiap gambar ke dalam kotak seperti 1200 × 800 agar tidak ada sisi yang melebihi kotak itu. Setiap file bisa mempertahankan format aslinya, dan semua hasil diunduh bersama dalam satu ZIP.",
    seoTitle: "Resize Foto Sekaligus – Ubah Ukuran Banyak Gambar",
    seoDescription:
      "Ubah ukuran banyak gambar sekaligus, gratis. Atur hingga 50 file JPG, PNG, atau WebP dengan persen, lebar pasti, atau kotak maksimum, lalu unduh satu ZIP.",
    keywords: [
      "resize foto sekaligus",
      "ubah ukuran banyak gambar sekaligus",
      "resize gambar massal",
      "batch resize foto",
      "resize banyak foto online",
      "resize gambar dan unduh zip",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar Anda",
        description: "Letakkan hingga 50 file JPG, PNG, atau WebP (masing-masing hingga 50 MB) di area unggah, atau klik untuk memilihnya.",
      },
      {
        title: "Pilih mode ubah ukuran",
        description:
          "Persentase mengubah ukuran setiap gambar dari 10% hingga 200%. Piksel pasti mengatur lebar, dan juga tinggi jika Anda membuka kunci rasio aspek. Muat dalam kotak memperkecil setiap gambar agar muat di dalam lebar dan tinggi yang Anda masukkan.",
      },
      {
        title: "Pilih format hasil",
        description:
          "Biarkan Asli, atau ubah semuanya ke PNG, JPG, atau WebP. Jangan perbesar gambar kecil aktif secara default, jadi gambar yang lebih kecil tidak diperbesar.",
      },
      {
        title: "Ubah ukuran dan unduh",
        description: "Klik Ubah ukuran semua, lalu Unduh ZIP, atau simpan file satu per satu dari daftar.",
      },
    ],
    features: [
      {
        title: "Tiga mode ubah ukuran",
        description: "Ubah skala dengan persentase, atur lebar yang pasti, atau muatkan ke dalam lebar dan tinggi maksimum.",
      },
      {
        title: "Format setiap file tetap",
        description: "Dengan Asli, JPG tetap JPG, PNG tetap PNG, dan file WebP tetap WebP.",
      },
      {
        title: "Cegah pembesaran",
        description:
          "Di mode Piksel pasti dan Muat dalam kotak, gambar yang sudah lebih kecil dari target tetap pada ukurannya.",
      },
      {
        title: "Satu unduhan ZIP",
        description: "File hasil tetap memakai nama aslinya dengan tambahan -resized, dan diunduh bersama dalam satu arsip.",
      },
    ],
    faqs: [
      {
        question: "Berapa banyak gambar yang bisa saya ubah ukurannya sekaligus?",
        answer:
          "Hingga 50 gambar per batch, masing-masing hingga 50 MB. Foto yang sangat besar memakai banyak memori, jadi di HP sebaiknya Anda memproses dalam batch yang lebih kecil.",
      },
      {
        question: "Apakah gambar saya akan melar?",
        answer:
          "Tidak di mode Persentase atau Muat dalam kotak, yang selalu mempertahankan proporsi. Di mode Piksel pasti, jika Anda membuka kunci rasio aspek dan mengatur kedua sisi, gambar dengan bentuk berbeda akan melar.",
      },
      {
        question: "Format file apa saja yang didukung?",
        answer:
          "JPG, PNG, dan WebP. File HEIC dari iPhone tidak diterima di sini; konversi dulu dengan Konverter Gambar Universal.",
      },
      {
        question: "Kualitas berapa yang dipakai untuk file JPG dan WebP?",
        answer:
          "File JPG dan WebP hasil ubah ukuran disimpan dengan kualitas 90%. Saat Anda mengubah gambar transparan ke JPG, area transparan menjadi putih.",
      },
      {
        question: "Apakah file saya diunggah ke suatu tempat?",
        answer: "Tidak. Semua gambar diubah ukurannya di tab browser ini dan file ZIP dibuat di perangkat Anda.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Kompres Gambar Massal",
    shortName: "Kompres Massal",
    tagline: "Kompres hingga 50 gambar sekaligus ke WebP, AVIF, JPG, atau PNG dan unduh dalam satu ZIP.",
    intro:
      "Kompres Gambar Massal memperkecil ukuran file banyak gambar dalam satu batch. Anda memilih satu format hasil dan kualitas untuk semua file, memulai kompresi, lalu melihat ukuran asli, ukuran baru, dan persentase penghematan untuk setiap gambar. Alat ini berguna untuk menyiapkan satu folder foto untuk situs web, toko online, atau email.",
    seoTitle: "Kompres Foto Sekaligus – Kompres Banyak Gambar",
    seoDescription:
      "Kompres hingga 50 foto sekaligus, gratis. Ubah JPG, PNG, dan WebP ke WebP, AVIF, JPG, atau PNG, lihat penghematan per file, lalu unduh semuanya dalam satu ZIP.",
    keywords: [
      "kompres foto sekaligus",
      "kompres banyak gambar",
      "kompres gambar massal",
      "batch compress foto",
      "kompres banyak foto online",
      "ubah banyak gambar ke webp",
      "kompres foto dan unduh zip",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar Anda",
        description: "Letakkan hingga 50 file JPG, PNG, atau WebP (masing-masing hingga 50 MB), atau klik untuk memilihnya.",
      },
      {
        title: "Pilih format dan kualitas",
        description:
          "WebP 80% dipilih secara default. Pilih AVIF untuk file terkecil, JPG untuk kompatibilitas, atau PNG untuk hasil lossless.",
      },
      {
        title: "Kompres semua file",
        description: "Klik Kompres semua dan lihat ukuran baru serta persentase penghematan setiap file muncul di daftar.",
      },
      {
        title: "Unduh hasilnya",
        description: "Klik Unduh ZIP untuk menyimpan semua file terkompres sekaligus, atau unduh file satu per satu dari daftar.",
      },
    ],
    features: [
      {
        title: "Hasil untuk setiap file",
        description:
          "Lihat ukuran sebelum dan sesudah serta persentase penghematan untuk setiap gambar, dengan label jelas jika sebuah file menjadi lebih besar.",
      },
      {
        title: "Empat format hasil",
        description: "AVIF, WebP, JPG, atau PNG, dengan satu pengaturan kualitas dari 10% hingga 100% untuk seluruh batch.",
      },
      {
        title: "ZIP dengan nama asli",
        description: "Setiap file tetap memakai namanya dengan tambahan -compressed, dan nama yang sama diberi nomor secara otomatis.",
      },
      {
        title: "Berjalan di perangkat Anda",
        description: "Semua file dikompres di browser Anda dan tidak pernah meninggalkan komputer atau HP Anda.",
      },
    ],
    faqs: [
      {
        question: "Berapa banyak gambar yang bisa saya kompres dalam satu batch?",
        answer: "Anda bisa menambahkan hingga 50 gambar, dan masing-masing bisa hingga 50 MB.",
      },
      {
        question: "Format hasil mana yang sebaiknya saya pilih?",
        answer:
          "WebP menawarkan keseimbangan yang baik antara ukuran, kualitas, dan dukungan. AVIF biasanya lebih kecil tetapi proses enkodenya lebih lambat, yang terasa jika ada banyak foto besar. JPG bisa dibuka di mana saja, dan PNG bersifat lossless tetapi paling sedikit mengurangi ukuran.",
      },
      {
        question: "Kenapa salah satu file saya jadi lebih besar?",
        answer:
          "Beberapa gambar sudah terkompres dengan baik, dan menyimpannya ulang tidak membantu. Daftar menandai file-file ini, jadi Anda bisa tetap memakai file aslinya.",
      },
      {
        question: "Apakah kompresi massal mengubah dimensi gambar?",
        answer:
          "Tidak, lebar dan tingginya tetap sama. Untuk memperkecil dimensi juga, proses dulu file-filenya dengan Ubah Ukuran Gambar Massal.",
      },
      {
        question: "Apa yang terjadi pada PNG transparan jika saya memilih JPG?",
        answer: "JPG tidak bisa menyimpan transparansi, jadi area transparan diisi warna putih.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Hapus Metadata Gambar",
    shortName: "Hapus EXIF",
    tagline: "Hapus data EXIF seperti lokasi GPS, model kamera, dan tanggal dari foto sebelum Anda membagikannya.",
    intro:
      "Hapus Metadata Gambar membuat salinan bersih dari foto Anda tanpa informasi EXIF tersembunyinya. Foto dari HP dan kamera sering merekam lokasi GPS tempat foto diambil, model perangkat, serta tanggal dan waktunya. Alat ini menggambar ulang gambar dari pikselnya dan menyimpan file baru, jadi informasi itu tidak ikut terbawa, dan ukuran file baru ditampilkan sebelum Anda mengunduh.",
    seoTitle: "Hapus Data EXIF Foto – GPS dan Metadata",
    seoDescription:
      "Hapus metadata EXIF dari foto, gratis. Buang lokasi GPS, model kamera, dan tanggal sebelum Anda membagikan foto. Diproses di browser Anda, tidak pernah diunggah.",
    keywords: [
      "hapus data exif",
      "hapus metadata foto",
      "hapus lokasi gps dari foto",
      "exif remover",
      "menghapus metadata gambar",
      "hapus data lokasi foto",
      "hapus metadata foto iphone",
    ],
    howToSteps: [
      {
        title: "Buka foto",
        description: "Letakkan, pilih, atau tempel foto JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Periksa salinan bersih",
        description: "Pratinjau menampilkan gambar yang akan disimpan, beserta ukuran file barunya.",
      },
      {
        title: "Pilih format dan kualitas",
        description:
          "Format asli dipertahankan secara default. Untuk JPG dan WebP, pakai kualitas 90% hingga 100% agar tetap mendekati aslinya, atau pilih PNG untuk hasil lossless.",
      },
      {
        title: "Unduh dan bagikan file baru",
        description: "Klik Unduh dan bagikan salinan ini, bukan foto aslinya.",
      },
    ],
    features: [
      {
        title: "Menghapus data lokasi dan kamera",
        description:
          "Koordinat GPS, merek dan model kamera, lensa, tanggal pengambilan, serta kolom EXIF dan IPTC lainnya tidak ditulis ke file baru.",
      },
      {
        title: "Salinan bersih dari piksel",
        description: "Gambar digambar ulang dari pikselnya, jadi tidak ada data tersembunyi yang bisa ikut tersalin tanpa sengaja.",
      },
      {
        title: "Tampilan ukuran file",
        description: "Lihat ukuran file bersih sebelum Anda mengunduhnya.",
      },
      {
        title: "Diproses di perangkat Anda",
        description: "Foto Anda tidak pernah diunggah, jadi data lokasinya tidak dibagikan kepada siapa pun selama proses berlangsung.",
      },
    ],
    faqs: [
      {
        question: "Metadata apa saja yang dihapus?",
        answer:
          "Semuanya: data EXIF (kamera, pengaturan, tanggal, dan GPS), kolom IPTC dan XMP seperti pembuat atau hak cipta, serta profil warna yang tertanam. Hanya gambar yang terlihat yang dipertahankan.",
      },
      {
        question: "Apakah menghapus metadata mengubah kualitas gambar?",
        answer:
          "Gambar disimpan ulang. PNG mempertahankan setiap piksel, sedangkan JPG, WebP, dan AVIF dikompres lagi, jadi pilih kualitas tinggi. Foto dengan profil warna lebar, seperti banyak foto iPhone, mungkin terlihat sedikit kurang cerah karena profilnya tidak dipertahankan.",
      },
      {
        question: "Bagaimana cara memastikan lokasinya sudah hilang?",
        answer:
          "Buka file hasil unduhan di Analisis Gambar. Alat itu membaca data EXIF di perangkat Anda dan menampilkan peringatan jika ada lokasi GPS.",
      },
      {
        question: "Apakah aplikasi dan situs web menghapus data EXIF untuk saya?",
        answer:
          "Beberapa platform besar menghapus sebagian metadata saat Anda mengunggah, tetapi email, aplikasi chat, dan layanan berbagi file sering mengirim file asli tanpa perubahan. Menghapusnya sendiri adalah pilihan yang aman.",
      },
      {
        question: "Bisakah saya menghapus metadata dari foto HEIC iPhone?",
        answer:
          "Bisa. Foto HEIC dikonversi di browser Anda dan salinan bersihnya disimpan sebagai JPG secara default.",
      },
    ],
  },
  "image-analyzer": {
    name: "Analisis Gambar",
    shortName: "Analisis",
    tagline: "Lihat dimensi, ukuran file, rasio aspek, ukuran cetak, dan data EXIF kamera dari gambar, dengan peringatan untuk lokasi GPS.",
    intro:
      "Analisis Gambar menampilkan detail teknis file gambar tanpa mengubahnya. Alat ini melaporkan ukuran file, format, dimensi piksel, rasio aspek, megapiksel, dan apakah gambar memiliki transparansi. Untuk foto, alat ini juga membaca data EXIF kamera seperti model kamera, lensa, eksposur, ISO, tanggal pengambilan, dan lokasi GPS, serta memperingatkan Anda jika sebuah foto mengungkap tempat foto itu diambil.",
    seoTitle: "Cek EXIF Foto Online – Ukuran dan Dimensi Gambar",
    seoDescription:
      "Cek detail gambar online gratis: dimensi, ukuran file, rasio aspek, ukuran cetak, dan data EXIF kamera, dengan peringatan jika foto berisi lokasi GPS.",
    keywords: [
      "cek exif foto online",
      "melihat metadata foto",
      "cek ukuran gambar",
      "lihat data exif foto",
      "cek lokasi gps di foto",
      "cek resolusi gambar",
      "info gambar online",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel gambar apa pun yang bisa dibuka browser Anda, termasuk foto HEIC dari iPhone.",
      },
      {
        title: "Baca spesifikasinya",
        description:
          "Lihat ukuran file, format, dimensi, rasio aspek, megapiksel, transparansi, dan ukuran cetak pada 300 DPI.",
      },
      {
        title: "Periksa data kamera",
        description:
          "Bagian EXIF menampilkan kamera, lensa, eksposur, dan tanggal. Jika foto berisi lokasi GPS, muncul peringatan dengan tombol untuk menghapus metadata.",
      },
      {
        title: "Salin laporannya",
        description: "Klik Salin laporan untuk menyalin semua nilai sebagai teks biasa.",
      },
    ],
    features: [
      {
        title: "Spesifikasi teknis",
        description:
          "Ukuran file, format, jenis MIME, dimensi, rasio aspek, megapiksel, kedalaman warna, transparansi, dan perkiraan pemakaian memori.",
      },
      {
        title: "Pembaca EXIF kamera",
        description:
          "Menampilkan kamera, lensa, tanggal pengambilan, waktu eksposur, bukaan, ISO, panjang fokus, flash, orientasi, dan software pengedit jika ada.",
      },
      {
        title: "Peringatan lokasi GPS",
        description:
          "Menampilkan koordinat jika foto memilikinya dan menyediakan cara sekali klik untuk membuat salinan tanpa metadata.",
      },
      {
        title: "Perkiraan ukuran cetak",
        description: "Menunjukkan seberapa besar gambar tercetak pada 300 DPI, dalam inci dan sentimeter.",
      },
      {
        title: "Hanya membaca, secara lokal",
        description: "File tidak diubah, dan semua data dibaca di perangkat Anda.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara melihat data EXIF sebuah foto?",
        answer:
          "Buka foto di sini dan lihat bagian Data kamera dan EXIF. Jika tertulis tidak ada data EXIF, file disimpan tanpanya, yang umum terjadi pada screenshot dan gambar yang diunduh dari media sosial.",
      },
      {
        question: "Bagaimana cara mengetahui apakah foto menunjukkan tempat pengambilannya?",
        answer:
          "Jika foto berisi koordinat GPS, alat analisis menampilkannya beserta peringatan. Klik Hapus metadata untuk membuat salinan tanpa lokasi.",
      },
      {
        question: "File apa saja yang berisi data EXIF?",
        answer:
          "Foto dari HP dan kamera dalam format JPG dan HEIC biasanya berisi EXIF. File WebP dan AVIF juga bisa memilikinya, sedangkan screenshot dan banyak gambar hasil ekspor atau edit hanya punya sedikit atau tidak sama sekali.",
      },
      {
        question: "Apa arti ukuran cetak pada 300 DPI?",
        answer:
          "Itu adalah ukuran cetakan pada 300 titik per inci, kualitas yang umum untuk cetak foto. Misalnya, gambar 3000 × 2000 piksel tercetak sekitar 10 × 6,7 inci.",
      },
      {
        question: "Apakah nilai kedalaman warnanya akurat?",
        answer:
          "Nilainya didasarkan pada format dan apakah gambar memiliki transparansi (RGB 24-bit atau RGBA 32-bit). Alat ini tidak mendeteksi gambar 16-bit atau HDR.",
      },
    ],
  },
  "image-color-picker": {
    name: "Pengambil Warna Gambar",
    shortName: "Ambil Warna",
    tagline: "Klik titik mana pun pada gambar untuk mendapatkan warnanya secara persis dalam HEX, RGB, HSL, HSV, dan CMYK.",
    intro:
      "Pengambil Warna Gambar menemukan warna persis dari piksel mana pun dalam sebuah gambar. Arahkan pointer ke gambar untuk melihat tampilan piksel yang diperbesar di bawahnya, lalu klik untuk memilih warna dan menyalin kodenya sebagai HEX, RGB, HSL, HSV, atau CMYK. Warna dibaca dari gambar beresolusi penuh, bukan dari pratinjau yang diperkecil.",
    seoTitle: "Ambil Warna dari Gambar – Kode HEX dan RGB",
    seoDescription:
      "Ambil warna dari gambar online gratis. Klik piksel untuk melihat kode HEX, RGB, HSL, HSV, dan CMYK, pakai kaca pembesar agar presisi, lalu salin sekali klik.",
    keywords: [
      "ambil warna dari gambar",
      "cari kode hex dari gambar",
      "color picker dari gambar",
      "eyedropper online",
      "cek kode warna di foto",
      "kode warna rgb dari gambar",
      "pencari kode warna hex",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel gambar. Screenshot yang ditempel dengan Ctrl+V juga bisa.",
      },
      {
        title: "Bidik dengan kaca pembesar",
        description: "Gerakkan mouse di atas pratinjau; kaca pembesar bulat menampilkan piksel di bawah pointer dalam ukuran besar.",
      },
      {
        title: "Klik untuk mengambil warna",
        description: "Klik atau ketuk titik yang Anda inginkan. Warna muncul beserta nilai HEX, RGB, HSL, HSV, dan CMYK-nya.",
      },
      {
        title: "Salin kodenya",
        description: "Klik Salin di samping format yang Anda butuhkan. Warna terakhir disimpan di bawah agar mudah dipakai ulang.",
      },
    ],
    features: [
      {
        title: "Kaca pembesar",
        description: "Tampilan 7 × 7 piksel yang diperbesar membantu Anda membidik detail kecil, seperti garis tipis atau satu huruf.",
      },
      {
        title: "Lima format warna",
        description: "Salin nilai HEX, RGB, HSL, HSV, atau CMYK, masing-masing dengan satu klik.",
      },
      {
        title: "Riwayat warna",
        description: "12 warna terakhir yang Anda ambil disimpan sebagai contoh warna, dan mengkliknya akan memilihnya lagi.",
      },
      {
        title: "Diambil dari resolusi penuh",
        description: "Setiap warna dibaca dari piksel gambar asli, jadi nilainya tidak dipengaruhi ukuran pratinjau.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mendapatkan kode HEX dari warna di gambar?",
        answer:
          "Buka gambar, klik warna yang Anda inginkan, lalu tekan Salin di samping nilai HEX. Anda bisa menempelkannya ke program desain atau file CSS apa pun.",
      },
      {
        question: "Bisakah saya mengambil warna dari screenshot?",
        answer:
          "Bisa. Ambil screenshot, tekan Ctrl+V di halaman ini untuk menempelkannya, lalu klik warna yang Anda butuhkan.",
      },
      {
        question: "Apakah pengambil warna bisa dipakai di HP?",
        answer:
          "Bisa. Ketuk gambar untuk memilih warna. Kaca pembesar hanya muncul dengan pointer mouse, jadi perbesar halaman jika Anda perlu membidik area yang sangat kecil.",
      },
      {
        question: "Kenapa piksel yang berdekatan di foto punya warna yang sedikit berbeda?",
        answer:
          "Foto mengandung noise, gradasi, dan efek kompresi, jadi piksel yang bersebelahan jarang sama persis. Ambil beberapa titik dan pilih yang terlihat paling pas.",
      },
      {
        question: "Kenapa nilai CMYK berbeda dari software cetak saya?",
        answer:
          "Nilai CMYK di sini adalah konversi matematis sederhana dari RGB. Software cetak memakai profil warna untuk tinta dan kertas tertentu, jadi angkanya bisa berbeda.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Pembuat Palet Warna dari Gambar",
    shortName: "Palet",
    tagline: "Ambil warna-warna utama dari gambar sebagai palet, lalu salin sebagai kode HEX, variabel CSS, atau JSON.",
    intro:
      "Pembuat Palet Warna dari Gambar menemukan warna dominan dalam foto atau desain dan menampilkannya sebagai contoh warna. Anda bisa memilih 3, 4, 5, 6, atau 8 warna; urutannya dimulai dari warna yang menutupi area terluas, dan nuansa yang sangat mirip digabung agar setiap contoh warna berbeda. Salin palet sebagai variabel CSS atau array JSON, atau unduh sebagai lembar warna PNG.",
    seoTitle: "Palet Warna dari Gambar – Ambil Kode HEX",
    seoDescription:
      "Buat palet warna dari gambar apa pun secara gratis. Ambil 3 hingga 8 warna dominan, salin kode HEX, variabel CSS, atau JSON, dan unduh lembar warna PNG.",
    keywords: [
      "palet warna dari gambar",
      "ambil warna dari gambar",
      "pembuat palet warna",
      "skema warna dari foto",
      "warna dominan gambar",
      "kode hex palet warna",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel foto, ilustrasi, logo, atau screenshot.",
      },
      {
        title: "Pilih jumlah warna",
        description: "Klik 3, 4, 5, 6, atau 8. Contoh warna langsung diperbarui.",
      },
      {
        title: "Salin warna satu per satu",
        description: "Klik ikon salin pada contoh warna untuk menyalin kode HEX-nya.",
      },
      {
        title: "Ekspor palet",
        description: "Gunakan Salin variabel CSS atau Salin JSON, atau unduh palet sebagai lembar warna PNG.",
      },
    ],
    features: [
      {
        title: "Diurutkan berdasarkan cakupan",
        description: "Contoh warna pertama adalah warna yang menutupi bagian terbesar dari gambar.",
      },
      {
        title: "Nuansa yang berbeda",
        description: "Warna yang hampir sama digabung, jadi palet tidak mengulang nada yang sama.",
      },
      {
        title: "Siap untuk developer",
        description: "Ekspor sebagai CSS custom properties (--color-1, --color-2, dan seterusnya) atau sebagai array JSON berisi kode HEX.",
      },
      {
        title: "Lembar warna PNG",
        description: "Unduh gambar palet dengan kode HEX tertulis di bawah setiap contoh warna.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana warna palet dipilih?",
        answer:
          "Gambar diambil sampelnya dalam ukuran kecil, warna yang mirip dikelompokkan, dan kelompok yang menutupi area terluas ditampilkan lebih dulu. Piksel transparan diabaikan.",
      },
      {
        question: "Kenapa saya mendapat lebih sedikit warna dari yang saya pilih?",
        answer:
          "Nuansa yang sangat mirip digabung agar setiap contoh warna jelas berbeda. Gambar yang hanya punya sedikit warna berbeda bisa menghasilkan lebih sedikit contoh warna.",
      },
      {
        question: "Bagaimana cara memakai palet di CSS?",
        answer:
          "Klik Salin variabel CSS untuk mendapatkan blok :root dengan variabel bernama --color-1, --color-2, dan seterusnya, lalu tempelkan ke stylesheet Anda.",
      },
      {
        question: "Kenapa warna aksen kecil tidak muncul?",
        answer:
          "Palet mengutamakan warna yang menutupi area lebih luas, jadi detail kecil seperti logo kecil mungkin tidak muncul. Gunakan Pengambil Warna Gambar untuk mendapatkan nilai persis dari titik tertentu.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Tambah Teks ke Gambar",
    shortName: "Tambah Teks",
    tagline: "Tulis keterangan atau judul di foto dengan font, ukuran, warna, garis tepi, dan kotak latar pilihan Anda.",
    intro:
      "Tambah Teks ke Gambar menempatkan satu atau beberapa baris teks di atas gambar. Geser teks ke titik mana pun di pratinjau, atau letakkan di atas, tengah, atau bawah, lalu atur gayanya dengan tujuh font, tebal atau miring, perataan, opasitas, bayangan, garis tepi, dan kotak latar berwarna. Teks digambar ke gambar beresolusi penuh saat Anda mengunduhnya.",
    seoTitle: "Tambah Teks ke Foto Online – Gratis",
    seoDescription:
      "Tambah tulisan di foto online gratis. Geser teks ke mana saja, atur font, ukuran, warna, garis tepi, bayangan, dan kotak latar. Simpan ke JPG, PNG, WebP, atau AVIF.",
    keywords: [
      "tambah teks ke gambar",
      "menulis di foto online",
      "tambah tulisan di foto",
      "kasih caption di foto",
      "edit teks di gambar",
      "menambahkan tulisan pada gambar",
    ],
    howToSteps: [
      {
        title: "Buka gambar Anda",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Ketik teks Anda",
        description: "Masukkan teks di kotak. Tekan Enter untuk membuat baris baru.",
      },
      {
        title: "Atur gaya dan posisinya",
        description:
          "Pilih font, ukuran (12 hingga 240 px), warna, opasitas, dan perataan. Geser teks di pratinjau, atau pilih Atas, Tengah, Bawah, atau Khusus (Y%).",
      },
      {
        title: "Unduh",
        description: "Pertahankan format asli atau pilih JPG, PNG, WebP, atau AVIF, lalu klik Unduh.",
      },
    ],
    features: [
      {
        title: "Geser untuk menempatkan",
        description: "Pindahkan teks langsung di pratinjau untuk meletakkannya tepat di tempat yang Anda inginkan.",
      },
      {
        title: "Tujuh font",
        description: "Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New, dan Impact, dengan pilihan tebal dan miring.",
      },
      {
        title: "Terbaca di foto apa pun",
        description: "Tambahkan bayangan, garis tepi dari 1 hingga 20 px, atau kotak latar dengan warna dan opasitasnya sendiri.",
      },
      {
        title: "Teks beberapa baris",
        description: "Tulis beberapa baris dan ratakan ke kiri, tengah, atau kanan.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana agar teks terbaca di foto yang ramai?",
        answer:
          "Aktifkan Garis tepi dan pilih warna yang kontras dengan teks, atau aktifkan Kotak latar untuk menaruh kotak padat atau semi-transparan di belakangnya. Bayangan juga membantu di area yang terang.",
      },
      {
        question: "Bisakah saya menambahkan lebih dari satu blok teks?",
        answer:
          "Alat ini menambahkan satu blok teks, yang bisa berisi beberapa baris. Untuk menambahkan teks di tempat kedua, unduh hasilnya, buka lagi, lalu tambahkan teks berikutnya.",
      },
      {
        question: "Font apa saja yang bisa saya pakai?",
        answer:
          "Anda bisa memilih dari tujuh font. Sebagian besar adalah font sistem, jadi jika salah satunya tidak terpasang di perangkat Anda, browser memakai font yang mirip sebagai gantinya.",
      },
      {
        question: "Apakah teks akan terlihat tajam di gambar yang diunduh?",
        answer:
          "Ya. Teks digambar pada resolusi penuh gambar Anda. Jika Anda menyimpan sebagai JPG, pakai pengaturan kualitas tinggi agar tepi huruf tetap bersih.",
      },
    ],
  },
  "watermark-image": {
    name: "Watermark Gambar",
    shortName: "Watermark",
    tagline: "Lindungi foto Anda dengan watermark teks atau logo, di satu titik atau diulang di seluruh gambar.",
    intro:
      "Watermark Gambar menambahkan keterangan hak cipta, nama situs web, atau logo di atas foto. Letakkan watermark teks atau logo di salah satu dari sembilan posisi dan atur ukuran serta opasitasnya, atau ulangi teks di seluruh gambar, yang jauh lebih sulit dihilangkan dengan cara dipotong. Logo bisa berupa file PNG, WebP, JPG, atau SVG; logo dengan latar transparan memberi hasil terbaik.",
    seoTitle: "Watermark Foto Online – Tambah Teks atau Logo",
    seoDescription:
      "Tambah watermark ke foto online gratis. Pakai teks atau logo Anda, pilih dari sembilan posisi, atur opasitas dan rotasi, atau ulangi teks di seluruh gambar.",
    keywords: [
      "watermark foto",
      "cara membuat watermark di foto",
      "tambah logo di foto",
      "watermark foto online gratis",
      "watermark hak cipta",
      "watermark berulang",
      "watermark transparan",
    ],
    howToSteps: [
      {
        title: "Buka foto Anda",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih teks atau logo",
        description:
          "Pilih Teks lalu ketik teks Anda, atau pilih Gambar logo lalu pilih file PNG, WebP, JPG, atau SVG.",
      },
      {
        title: "Atur posisi dan gayanya",
        description:
          "Klik posisi di grid 3 × 3, lalu atur opasitas dan ukurannya. Untuk teks, Anda juga bisa mengatur warna dan rotasi, atau mengaktifkan Ulangi di seluruh gambar.",
      },
      {
        title: "Unduh",
        description: "Pertahankan format asli atau pilih format lain, lalu klik Unduh.",
      },
    ],
    features: [
      {
        title: "Teks atau logo",
        description: "Pakai baris hak cipta atau alamat situs web, atau unggah gambar logo Anda sendiri.",
      },
      {
        title: "Sembilan posisi",
        description: "Sudut, tepi, atau tengah, dengan margin yang menyesuaikan ukuran gambar.",
      },
      {
        title: "Pola teks berulang",
        description: "Ulangi teks Anda di seluruh foto dengan sudut yang Anda pilih.",
      },
      {
        title: "Opasitas, ukuran, dan rotasi",
        description: "Opasitas dari 10% hingga 100%, ukuran teks dari 14 hingga 140 px, lebar logo dari 5% hingga 60% dari gambar, dan rotasi teks dari -90° hingga 90°.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara menambahkan logo saya sebagai watermark?",
        answer:
          "Pilih Gambar logo, klik Pilih gambar logo, lalu pilih file Anda. Atur ukuran logo sebagai persentase dari lebar gambar, pilih posisi, dan turunkan opasitasnya agar foto tetap terlihat.",
      },
      {
        question: "Berapa opasitas yang sebaiknya untuk watermark?",
        answer:
          "Sekitar 30% hingga 50% sudah terlihat tanpa menutupi foto. Pakai nilai lebih tinggi jika watermark harus mudah dibaca.",
      },
      {
        question: "Apa itu watermark berulang?",
        answer:
          "Ulangi di seluruh gambar mencetak teks Anda berkali-kali di seluruh foto. Watermark ini jauh lebih sulit dihapus dengan cara dipotong dibanding satu tanda di sudut. Fitur ini tersedia untuk watermark teks.",
      },
      {
        question: "Kenapa logo saya punya kotak putih di sekelilingnya?",
        answer:
          "File logo memiliki latar padat. Pakai PNG, WebP, atau SVG dengan latar transparan, atau hapus latarnya dulu dengan Hapus Background.",
      },
      {
        question: "Bisakah watermark mencegah orang menyalin foto saya?",
        answer:
          "Watermark membuat penyalinan kurang menarik dan menunjukkan siapa pemilik gambar, tetapi tidak bisa sepenuhnya mencegah penyalinan. Tanda yang besar, di tengah, atau berulang lebih sulit dihapus daripada tanda kecil di sudut.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Tambah Bingkai ke Gambar",
    shortName: "Bingkai",
    tagline: "Tambahkan border atau bingkai warna polos di sekeliling foto, di luar gambar atau di atas tepinya.",
    intro:
      "Tambah Bingkai ke Gambar menggambar bingkai berwarna di sekeliling gambar. Di mode Luar, kanvas membesar sehingga seluruh foto tetap terlihat di dalam bingkai; di mode Dalam, bingkai digambar di atas tepi dan gambar tetap pada ukuran aslinya. Anda bisa mengatur tebal dari 1 hingga 100 piksel, warna apa pun, dan tingkat opasitas.",
    seoTitle: "Tambah Bingkai Foto Online – Border Gratis",
    seoDescription:
      "Tambah border ke gambar online gratis. Pilih warna, tebal dari 1 hingga 100 px, dan opasitas, lalu letakkan di luar foto atau di atas tepinya. Tanpa unggah.",
    keywords: [
      "tambah bingkai foto",
      "tambah border foto",
      "bingkai foto online",
      "border gambar online",
      "border putih untuk instagram",
      "garis tepi foto",
    ],
    howToSteps: [
      {
        title: "Buka gambar Anda",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih mode bingkai",
        description: "Luar (menambah ukuran) memasang bingkai di sekeliling foto. Dalam (ukuran tetap) menggambarnya di atas tepi.",
      },
      {
        title: "Atur tebal, warna, dan opasitas",
        description: "Geser slider tebal dari 1 hingga 100 px, pilih warna apa pun, dan turunkan opasitas untuk bingkai yang lebih lembut.",
      },
      {
        title: "Unduh",
        description: "Pertahankan format asli atau pilih JPG, PNG, WebP, atau AVIF, lalu klik Unduh.",
      },
    ],
    features: [
      {
        title: "Luar atau dalam",
        description: "Tambahkan ruang di sekeliling foto, atau pertahankan dimensi asli secara persis.",
      },
      {
        title: "Tebal dan warna bebas",
        description: "Dari garis tipis 1 px hingga bingkai lebar 100 px, dalam warna apa pun.",
      },
      {
        title: "Opasitas bisa diatur",
        description: "Buat bingkai semi-transparan untuk efek yang lebih ringan.",
      },
      {
        title: "Format tetap sama",
        description: "Gambar berbingkai disimpan dalam format yang sama dengan aslinya kecuali Anda memilih format lain.",
      },
    ],
    faqs: [
      {
        question: "Apakah menambah bingkai mengubah ukuran gambar?",
        answer:
          "Di mode Luar, tebal bingkai ditambahkan ke setiap sisi, jadi gambar 1000 × 800 dengan bingkai 20 px menjadi 1040 × 840. Mode Dalam mempertahankan ukuran dan menutupi tepi luar foto.",
      },
      {
        question: "Bagaimana cara menambahkan border putih untuk Instagram?",
        answer:
          "Potong foto ke 1:1 terlebih dahulu, lalu tambahkan bingkai putih dengan mode Luar. Hasilnya tetap persegi karena tebal yang sama ditambahkan ke setiap sisi.",
      },
      {
        question: "Bisakah saya membuat bingkai dengan sudut membulat?",
        answer:
          "Bingkainya sendiri berbentuk persegi panjang. Untuk tampilan membulat, tambahkan bingkai dulu, lalu buka hasilnya di Bulatkan Sudut Gambar.",
      },
      {
        question: "Apa fungsi opasitas bingkai?",
        answer:
          "Opasitas yang lebih rendah membuat bingkai tembus pandang. Di mode Dalam, foto terlihat menembus bingkai; di mode Luar, area bingkai menjadi sebagian transparan di PNG, WebP, dan AVIF, dan berpadu dengan putih di JPG.",
      },
    ],
  },
  "round-image": {
    name: "Bulatkan Sudut Gambar",
    shortName: "Sudut Bulat",
    tagline: "Bulatkan sudut gambar atau potong menjadi lingkaran, dengan background transparan dalam PNG.",
    intro:
      "Bulatkan Sudut Gambar memberi sudut yang membulat lembut pada gambar atau mengubahnya menjadi lingkaran untuk foto profil atau ikon aplikasi. Pilih preset Kecil, Sedang, atau Besar, atur radius pasti dengan slider, atau klik Jadikan lingkaran. Hasilnya disimpan sebagai PNG secara default, jadi sudut yang terpotong tetap transparan.",
    seoTitle: "Bulatkan Sudut Gambar Online – Bisa Jadi Lingkaran",
    seoDescription:
      "Bulatkan sudut gambar online gratis atau potong foto jadi lingkaran. Atur radius sudut, simpan PNG transparan, atau pilih warna isi untuk JPG.",
    keywords: [
      "bulatkan sudut gambar",
      "sudut gambar melengkung online",
      "membuat foto bulat",
      "membuat foto profil bulat",
      "foto profil lingkaran",
      "png sudut bulat",
    ],
    howToSteps: [
      {
        title: "Buka gambar Anda",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih bentuknya",
        description: "Klik Jadikan lingkaran, pilih sudut Kecil, Sedang, atau Besar, atau geser slider radius.",
      },
      {
        title: "Pilih format",
        description:
          "PNG dipilih secara default. Jika Anda memilih JPG, pilih putih, hitam, atau warna khusus untuk sudutnya.",
      },
      {
        title: "Unduh",
        description: "Klik Unduh untuk menyimpan gambar bersudut bulat, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Preset dan radius pasti",
        description: "Preset Kecil, Sedang, dan Besar, atau radius apa pun dari 0 hingga setengah dari sisi terpendek.",
      },
      {
        title: "Avatar lingkaran",
        description: "Mengubah gambar menjadi lingkaran dengan satu klik, siap untuk foto profil.",
      },
      {
        title: "Sudut transparan",
        description: "PNG, WebP, dan AVIF membuat area di luar lengkungan tetap transparan.",
      },
      {
        title: "Warna isi untuk JPG",
        description: "Saat Anda menyimpan sebagai JPG, sudut diisi dengan putih, hitam, atau warna pilihan Anda.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara membuat foto profil bulat?",
        answer:
          "Klik Jadikan lingkaran. Lingkaran memakai sisi terpendek gambar dan diletakkan di tengah, jadi untuk foto yang tidak persegi, potong dulu ke 1:1 agar wajah berada di tengah dan tidak ada ruang kosong di samping.",
      },
      {
        question: "Kenapa sudut saya putih atau hitam, bukan transparan?",
        answer: "JPG tidak bisa menyimpan transparansi. Pilih PNG, WebP, atau AVIF agar sudut tetap transparan.",
      },
      {
        question: "Apa arti preset Kecil, Sedang, dan Besar?",
        answer:
          "Radius terbesar yang mungkin adalah setengah dari sisi terpendek gambar. Kecil, Sedang, dan Besar memakai 10%, 25%, dan 50% dari nilai maksimum itu.",
      },
      {
        question: "Kenapa file gambar bersudut bulat saya begitu besar?",
        answer:
          "PNG bersifat lossless, jadi foto kamera berukuran penuh bisa menghasilkan file besar. Ubah ukuran foto dulu, atau simpan sebagai WebP, yang juga mempertahankan transparansi dan jauh lebih kecil.",
      },
    ],
  },
  "favicon-generator": {
    name: "Pembuat Favicon",
    shortName: "Favicon",
    tagline: "Buat favicon.ico, Apple touch icon, ikon Android, dan web manifest dari satu gambar, dalam satu ZIP.",
    intro:
      "Pembuat Favicon mengubah logo atau gambar menjadi kumpulan file ikon yang dibutuhkan situs web. Alat ini memotong gambar menjadi persegi di tengah lalu membuat favicon.ico (dengan ukuran 16, 32, dan 48 piksel), ikon PNG dari 16 hingga 512 piksel, apple-touch-icon.png berukuran 180 × 180, dan file site.webmanifest, semuanya dalam satu ZIP. Halaman ini juga menampilkan tag link HTML untuk ditempel di bagian head situs Anda.",
    seoTitle: "Pembuat Favicon – ICO, PNG, dan Apple Touch Icon",
    seoDescription:
      "Pembuat favicon gratis. Unggah logo PNG, JPG, atau SVG dan dapatkan favicon.ico, ikon PNG 16 hingga 512 px, Apple touch icon, dan web manifest dalam satu ZIP.",
    keywords: [
      "favicon generator",
      "cara membuat favicon",
      "buat favicon ico",
      "png ke ico",
      "apple touch icon generator",
      "favicon dari gambar",
      "membuat ikon website",
    ],
    howToSteps: [
      {
        title: "Unggah logo Anda",
        description:
          "Letakkan atau pilih gambar PNG, JPG, SVG, atau HEIC. Gambar persegi minimal 512 × 512 piksel memberi hasil terbaik.",
      },
      {
        title: "Pastikan posisinya di tengah",
        description:
          "Ikon dipotong dari bagian tengah gambar. Jika logo Anda tidak di tengah atau gambarnya tidak persegi, potong dulu ke 1:1 dengan Potong Gambar.",
      },
      {
        title: "Unduh paket favicon",
        description: "Klik Unduh paket favicon (ZIP) untuk mendapatkan semua file ikon dan manifest.",
      },
      {
        title: "Tambahkan ke situs web Anda",
        description:
          "Unggah file-file itu ke folder root situs Anda, lalu klik Salin kode dan tempel tag HTML-nya di bagian head halaman Anda.",
      },
    ],
    features: [
      {
        title: "favicon.ico multi-ukuran",
        description: "Satu file ICO berisi ikon 16 × 16, 32 × 32, dan 48 × 48 untuk tab browser dan bookmark.",
      },
      {
        title: "Ikon PNG untuk setiap perangkat",
        description: "File PNG berukuran 16, 32, 48, 64, 128, 192, dan 512 piksel, ditambah apple-touch-icon.png 180 × 180.",
      },
      {
        title: "Web app manifest",
        description: "File site.webmanifest yang merujuk ke ikon 192 dan 512 piksel untuk Android dan aplikasi web yang bisa dipasang.",
      },
      {
        title: "Ukuran kecil tetap jelas",
        description: "Ikon diperkecil dalam beberapa tahap dari gambar penuh, sehingga versi 16 dan 32 piksel tetap lebih bersih.",
      },
      {
        title: "HTML siap tempel",
        description: "Salin tag link untuk ikon dan manifest dengan satu klik.",
      },
    ],
    faqs: [
      {
        question: "Berapa ukuran gambar favicon yang sebaiknya?",
        answer:
          "Pakai gambar persegi minimal 512 × 512 piksel agar ikon terbesar tetap tajam. Bentuk sederhana dan warna yang kuat tetap mudah dikenali pada ukuran 16 × 16.",
      },
      {
        question: "File apa saja yang ada di ZIP?",
        answer:
          "favicon.ico, favicon-16x16.png hingga favicon-512x512.png (16, 32, 48, 64, 128, 192, dan 512), apple-touch-icon.png berukuran 180 × 180, dan site.webmanifest.",
      },
      {
        question: "Di mana saya meletakkan file favicon?",
        answer:
          "Unggah ke folder root situs web Anda, tempat yang sama dengan halaman beranda. Lalu tempel tag HTML yang ditampilkan di halaman ini ke bagian head setiap halaman.",
      },
      {
        question: "Kenapa sebagian logo saya terpotong?",
        answer:
          "Alat ini mengambil persegi terbesar di tengah gambar Anda. Jika logonya lebar atau tidak di tengah, potong menjadi persegi dengan sedikit ruang di sekelilingnya sebelum membuat ikon.",
      },
      {
        question: "Bisakah saya memakai logo SVG?",
        answer:
          "Bisa. SVG digambar sebagai gambar dan disimpan sebagai file PNG dan ICO. ZIP tidak menyertakan favicon SVG.",
      },
      {
        question: "Apakah saya perlu mengedit file manifest?",
        answer:
          "Ya. site.webmanifest memakai nama sementara App dan warna tema gelap. Buka di editor teks dan ubah name, short_name, serta warnanya agar sesuai dengan situs Anda.",
      },
    ],
  },
  "image-to-base64": {
    name: "Gambar ke Base64",
    shortName: "Gambar → Base64",
    tagline: "Ubah file gambar menjadi string Base64 yang bisa Anda salin, dengan potongan kode HTML dan CSS siap pakai.",
    intro:
      "Gambar ke Base64 mengenkode file gambar sebagai teks Base64, sehingga bisa disimpan atau dikirim sebagai teks biasa, misalnya di dalam JSON, halaman HTML, atau file CSS. String dibuat dari byte asli file, jadi gambar tidak dikompres ulang atau diubah. Alat ini menampilkan jumlah karakter dan juga memberi Anda tag img HTML serta aturan background-image CSS yang berisi gambar lengkap.",
    seoTitle: "Ubah Gambar ke Base64 – Salin String Base64",
    seoDescription:
      "Ubah gambar ke Base64 online gratis. Enkode byte asli JPG, PNG, WebP, GIF, atau SVG, lalu salin string, tag img HTML, atau aturan CSS dengan satu klik.",
    keywords: [
      "gambar ke base64",
      "convert gambar ke base64",
      "base64 encode gambar",
      "png ke base64",
      "jpg ke base64",
      "svg ke base64",
      "string base64 gambar",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel file gambar apa pun. Gambar kecil seperti ikon paling cocok.",
      },
      {
        title: "Dapatkan string Base64",
        description: "String langsung muncul, beserta panjangnya dalam karakter dan perkiraan ukurannya.",
      },
      {
        title: "Salin yang Anda butuhkan",
        description: "Klik Salin Base64 untuk string saja, atau gunakan Salin HTML atau Salin CSS untuk potongan kode siap pakai.",
      },
      {
        title: "Tempel ke kode Anda",
        description: "Tempel string ke JSON, HTML, CSS, atau skrip Anda.",
      },
    ],
    features: [
      {
        title: "Enkode byte yang persis",
        description: "File asli dienkode apa adanya, tanpa kompresi ulang atau perubahan kualitas.",
      },
      {
        title: "Informasi ukuran",
        description: "Lihat jumlah karakter dan perkiraan ukuran string sebelum Anda memakainya.",
      },
      {
        title: "Potongan kode HTML dan CSS",
        description: "Salin tag img atau aturan background-image yang sudah berisi data URI lengkap.",
      },
      {
        title: "Dienkode secara lokal",
        description: "File dibaca dan dienkode di browser Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Untuk apa Base64 dipakai pada gambar?",
        answer:
          "Base64 mengubah data gambar biner menjadi karakter teks biasa. Developer memakainya untuk menaruh gambar kecil langsung di HTML, CSS, JSON, atau template email, jadi tidak perlu memuat file gambar terpisah.",
      },
      {
        question: "Kenapa string Base64 lebih besar dari file gambarnya?",
        answer:
          "Base64 memakai 4 karakter teks untuk setiap 3 byte, jadi hasilnya sekitar 33% lebih besar. Gambar 30 KB menjadi sekitar 40 KB teks.",
      },
      {
        question: "Apa bedanya Base64 dan data URI?",
        answer:
          "Base64 hanya teks hasil enkode. Data URI menambahkan awalan seperti data:image/png;base64, agar browser tahu jenis filenya. Alat ini memberi string saja; Gambar ke Data URI memberi versi lengkapnya.",
      },
      {
        question: "Apakah sebaiknya saya mengubah gambar besar ke Base64?",
        answer:
          "Biasanya tidak. Base64 paling cocok untuk gambar kecil seperti ikon. Foto besar membuat HTML atau CSS Anda jauh lebih berat, dan browser tidak bisa menyimpan gambar itu di cache sebagai file terpisah.",
      },
      {
        question: "Apakah gambar saya diubah saat dienkode?",
        answer:
          "Tidak, byte aslinya yang dienkode. Satu-satunya pengecualian adalah foto HEIC dari iPhone, yang dikonversi ke PNG dulu karena sebagian besar browser tidak bisa menampilkan HEIC.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Gambar ke Data URI",
    shortName: "Data URI",
    tagline: "Ubah gambar menjadi data URI lengkap, siap ditempel ke atribut src HTML atau nilai url() CSS.",
    intro:
      "Gambar ke Data URI mengubah file gambar menjadi data URI: satu baris teks yang berisi jenis file sekaligus gambar yang dienkode Base64. Anda bisa menempelkannya langsung ke atribut src pada img atau nilai url() di CSS, dan gambar tampil tanpa file terpisah. Jenis MIME di awalan diambil dari file Anda, dan byte gambar tidak diubah.",
    seoTitle: "Ubah Gambar ke Data URI – Siap untuk HTML dan CSS",
    seoDescription:
      "Ubah gambar ke data URI online gratis. Dapatkan string Base64 data:image dengan jenis MIME yang benar dan salin sebagai tag img HTML atau aturan background CSS.",
    keywords: [
      "gambar ke data uri",
      "data uri generator",
      "convert gambar ke data url",
      "base64 data uri",
      "gambar inline di css",
      "sematkan gambar di html",
      "data url gambar",
    ],
    howToSteps: [
      {
        title: "Buka gambar",
        description: "Letakkan, pilih, atau tempel file gambar apa pun, seperti ikon, logo, atau grafik kecil.",
      },
      {
        title: "Dapatkan data URI",
        description: "Data URI lengkap, yang diawali data:image/, muncul beserta panjang dan perkiraan ukurannya.",
      },
      {
        title: "Salin",
        description: "Klik Salin data URI, atau gunakan Salin HTML atau Salin CSS untuk potongan kode siap pakai.",
      },
      {
        title: "Tempel ke halaman Anda",
        description: "Pakai di mana saja URL gambar biasa bisa dipakai, seperti tag img atau background CSS.",
      },
    ],
    features: [
      {
        title: "Jenis MIME yang benar",
        description: "Awalan sesuai dengan file Anda, misalnya image/png, image/jpeg, atau image/svg+xml.",
      },
      {
        title: "Byte asli",
        description: "File dienkode apa adanya, jadi kualitas dan ukuran tidak berubah karena kompresi ulang.",
      },
      {
        title: "Potongan kode siap salin",
        description: "Dapatkan tag img lengkap atau aturan background-image yang sudah berisi data URI.",
      },
      {
        title: "Privat",
        description: "Data URI dibuat di browser Anda, jadi gambar tidak diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apa itu data URI?",
        answer:
          "Data URI adalah tautan yang berisi file itu sendiri, bukan menunjuk ke file. Untuk gambar, data URI diawali data:image/png;base64, atau awalan serupa, dan browser menampilkannya seperti URL gambar biasa.",
      },
      {
        question: "Bagaimana cara memakai data URI di CSS?",
        answer:
          "Klik Salin CSS untuk mendapatkan aturan background-image dengan URI lengkap di dalam url(), lalu tempelkan ke stylesheet Anda.",
      },
      {
        question: "Kapan sebaiknya saya tidak memakai data URI?",
        answer:
          "Hindari untuk gambar besar dan gambar yang dipakai di banyak halaman. Teks hasil enkode sekitar sepertiga lebih besar dari filenya, dan browser tidak bisa menyimpannya di cache secara terpisah.",
      },
      {
        question: "Apakah gambar data URI bisa tampil di email?",
        answer:
          "Dukungannya berbeda-beda. Banyak program email, termasuk beberapa layanan webmail, tidak menampilkan gambar data URI, jadi uji email Anda atau pakai gambar yang di-hosting online.",
      },
      {
        question: "Jenis gambar apa saja yang didukung?",
        answer:
          "Gambar apa pun yang bisa dibuka browser Anda, seperti JPG, PNG, GIF, WebP, AVIF, dan SVG. Foto HEIC dari iPhone dikonversi ke PNG dulu, jadi data URI-nya memakai image/png.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64 ke Gambar",
    shortName: "Base64 → Gambar",
    tagline: "Tempel string Base64 atau data URI untuk melihat pratinjau gambar dan mengunduhnya sebagai PNG, JPG, atau WebP.",
    intro:
      "Base64 ke Gambar mendekode teks Base64 kembali menjadi gambar yang bisa Anda lihat dan simpan. Anda bisa menempel string Base64 saja, data URI lengkap, atau potongan url() CSS atau src HTML yang berisi salah satunya; Base64 yang aman untuk URL dan jeda baris ditangani otomatis. Alat ini mendeteksi apakah datanya PNG, JPEG, GIF, WebP, SVG, BMP, atau AVIF, lalu menampilkan gambar hasil dekode beserta dimensinya.",
    seoTitle: "Ubah Base64 ke Gambar – Pratinjau dan Unduh",
    seoDescription:
      "Ubah Base64 ke gambar online gratis. Tempel string Base64, data URI, atau potongan CSS atau HTML, lihat pratinjau gambarnya, lalu unduh sebagai PNG, JPG, atau WebP.",
    keywords: [
      "base64 ke gambar",
      "decode base64 gambar",
      "base64 ke png",
      "base64 ke jpg",
      "data uri ke gambar",
      "ubah string base64 ke gambar",
      "base64 image viewer",
    ],
    howToSteps: [
      {
        title: "Tempel data Base64",
        description: "Tempel ke kotak teks, klik Tempel, atau muat file .txt yang berisi string tersebut.",
      },
      {
        title: "Periksa pratinjau",
        description: "Gambar didekode otomatis dan ditampilkan beserta lebar dan tingginya. Pesan galat muncul jika teksnya tidak valid.",
      },
      {
        title: "Pilih format ekspor",
        description: "Pilih PNG, JPG, atau WebP.",
      },
      {
        title: "Unduh gambar",
        description: "Klik Unduh untuk menyimpan gambar hasil dekode ke perangkat Anda.",
      },
    ],
    features: [
      {
        title: "Menerima banyak bentuk masukan",
        description:
          "Base64 saja, data URI, potongan url() CSS dan src HTML, Base64 yang aman untuk URL, dan teks yang terpecah ke beberapa baris.",
      },
      {
        title: "Deteksi format otomatis",
        description: "Mengenali PNG, JPEG, GIF, WebP, SVG, BMP, dan AVIF dari datanya sendiri, bahkan jika awalannya tidak ada atau salah.",
      },
      {
        title: "Pratinjau instan",
        description: "Lihat gambar hasil dekode dan dimensinya begitu Anda menempel.",
      },
      {
        title: "Tiga format ekspor",
        description: "Simpan hasilnya sebagai PNG, JPG, atau WebP.",
      },
    ],
    faqs: [
      {
        question: "Teks Base64 seperti apa yang bisa saya tempel?",
        answer:
          "String Base64 saja, data URI seperti data:image/png;base64,..., atau potongan CSS atau HTML yang berisi salah satunya. Spasi, jeda baris, dan karakter yang aman untuk URL dibersihkan otomatis.",
      },
      {
        question: "Kenapa saya mendapat pesan galat?",
        answer:
          "Teks sering terpotong saat disalin. Pastikan Anda menyalin seluruh string, termasuk bagian akhirnya, yang mungkin berisi tanda =.",
      },
      {
        question: "Apakah file yang diunduh sama persis dengan aslinya?",
        answer:
          "Gambar didekode lalu disimpan ulang dalam format yang Anda pilih. PNG mempertahankan setiap piksel, sedangkan JPG dan WebP dikompres lagi. GIF animasi menjadi satu gambar diam, dan grafik SVG disimpan sebagai gambar piksel.",
      },
      {
        question: "Bagaimana alat ini tahu jenis gambarnya?",
        answer:
          "Setiap format diawali tanda tangan yang dikenal, misalnya iVBORw0KGgo untuk PNG atau /9j/ untuk JPEG. Alat ini membaca karakter pertama tersebut untuk mendekode gambar dengan benar.",
      },
      {
        question: "Apakah data Base64 saya dikirim ke server?",
        answer: "Tidak. Teks didekode di browser Anda dan gambar dibuat di perangkat Anda.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG ke PNG",
    shortName: "SVG → PNG",
    tagline: "Ubah file vektor SVG menjadi gambar PNG yang tajam dengan ukuran 1x, 2x, 4x, atau 8x, dengan transparansi tetap terjaga.",
    intro:
      "SVG ke PNG mengubah grafik vektor, seperti logo atau ikon, menjadi gambar PNG untuk tempat yang tidak menerima file SVG. Pilih 1x, 2x, 4x, atau 8x dari ukuran asli SVG; karena vektor digambar ulang pada ukuran itu, skala yang lebih besar menghasilkan gambar yang lebih tajam, bukan buram. Background transparan tetap transparan di PNG.",
    seoTitle: "Ubah SVG ke PNG – Resolusi Tinggi, Transparan",
    seoDescription:
      "Ubah SVG ke PNG online gratis. Ekspor pada 1x, 2x, 4x, atau 8x untuk gambar tajam beresolusi tinggi dengan background transparan. Dikonversi di browser Anda.",
    keywords: [
      "svg ke png",
      "ubah svg ke png",
      "convert svg ke png",
      "svg ke png resolusi tinggi",
      "svg ke png transparan",
      "ekspor svg sebagai png",
    ],
    howToSteps: [
      {
        title: "Buka file SVG",
        description: "Letakkan file .svg di kotak unggah atau klik untuk memilihnya.",
      },
      {
        title: "Pilih skala",
        description: "Pilih 1x, 2x, 4x, atau 8x. Lebar dan tinggi hasil dalam piksel ditampilkan di bawah tombol.",
      },
      {
        title: "Unduh PNG",
        description: "Klik Unduh PNG untuk menyimpan gambar, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Tajam di setiap skala",
        description: "Vektor dirender ulang pada ukuran yang dipilih, jadi garis dan teks tetap tajam.",
      },
      {
        title: "Background transparan",
        description: "Area tanpa isian di SVG tetap transparan di PNG.",
      },
      {
        title: "Pratinjau ukuran hasil",
        description: "Lihat dimensi piksel yang pasti untuk setiap skala sebelum Anda mengunduh.",
      },
      {
        title: "PNG lossless",
        description: "Gambar hasil render disimpan sebagai PNG tanpa kehilangan kualitas akibat kompresi.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mendapatkan PNG resolusi tinggi dari SVG?",
        answer:
          "Pilih 4x atau 8x. SVG 256 × 256 menjadi 1024 × 1024 pada 4x atau 2048 × 2048 pada 8x, dan tetap tajam karena digambar ulang pada ukuran itu.",
      },
      {
        question: "Kenapa ukuran hasilnya tidak sesuai harapan?",
        answer:
          "Ukuran 1x berasal dari lebar dan tinggi yang diatur di file SVG. Jika SVG hanya punya viewBox tanpa width atau height, browser mungkin memakai ukuran default; tambahkan atribut width dan height untuk mengaturnya.",
      },
      {
        question: "Kenapa font atau gambar hilang di PNG saya?",
        answer:
          "Saat SVG digambar sebagai gambar, browser tidak memuat file eksternal yang ditautkan, seperti web font atau gambar tertaut. Ubah teks menjadi outline dan sematkan gambar di SVG sebelum mengonversi.",
      },
      {
        question: "Apakah PNG akan mempertahankan background transparan?",
        answer: "Ya. Area SVG yang tidak punya isian atau latar tetap transparan.",
      },
      {
        question: "Bisakah saya mengubah SVG ke JPG?",
        answer:
          "Alat ini hanya menyimpan PNG. Untuk mendapatkan JPG, konversi ke PNG dulu, lalu buka PNG itu di PNG ke JPG, tempat Anda juga bisa memilih warna latar.",
      },
    ],
  },
  "photo-filters": {
    name: "Filter dan Efek Foto",
    shortName: "Filter",
    tagline: "Terapkan tampilan siap pakai seperti Vintage, Noir, atau Sinematik, lalu atur kecerahan, kontras, warna, dan vinyet.",
    intro:
      "Filter dan Efek Foto mengubah tampilan dan suasana sebuah foto. Mulai dari salah satu dari delapan preset, seperti Sinematik, Vintage 70-an, Noir Muram, atau Senja Hangat, lalu atur kecerahan, kontras, saturasi, sepia, hitam putih, rona, kejernihan, vinyet, dan blur lembut dengan slider. Tampilan terbagi memungkinkan Anda membandingkan foto yang diedit dengan aslinya sebelum mengunduhnya sebagai PNG, JPG, atau WebP.",
    seoTitle: "Filter Foto Online – Efek dan Preset Gratis",
    seoDescription:
      "Pasang filter foto online gratis. Coba Vintage, Noir, Sinematik, dan lainnya, atur kecerahan, kontras, saturasi, dan vinyet, lalu bandingkan sebelum dan sesudah.",
    keywords: [
      "filter foto online",
      "edit foto online gratis",
      "ubah foto jadi hitam putih",
      "filter foto vintage",
      "filter sepia online",
      "atur kecerahan dan kontras foto",
      "efek vignette",
    ],
    howToSteps: [
      {
        title: "Unggah foto",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, atau WebP.",
      },
      {
        title: "Pilih preset",
        description:
          "Coba Sinematik, Vintage 70-an, Cyberpunk, Noir Muram, Senja Hangat, Pudar Sejuk, HDR Dramatis, atau Negatif. Asli menghapus semua efek.",
      },
      {
        title: "Sempurnakan dengan slider",
        description:
          "Atur kecerahan, kontras, saturasi, sepia, hitam putih, geser rona, kejernihan, vinyet, dan fokus lembut sampai foto terlihat pas.",
      },
      {
        title: "Bandingkan dan unduh",
        description: "Gunakan Bandingkan dengan asli untuk melihat sebelum dan sesudah, lalu unduh sebagai PNG, WebP, atau JPG, atau salin gambarnya.",
      },
    ],
    features: [
      {
        title: "Delapan preset sekali klik",
        description: "Tampilan siap pakai, dari nuansa vintage yang hangat hingga hitam putih berkontras tinggi.",
      },
      {
        title: "Sembilan slider penyesuaian",
        description: "Kecerahan, kontras, dan saturasi hingga 200%, ditambah sepia, hitam putih, rona, kejernihan, vinyet, dan blur.",
      },
      {
        title: "Tampilan sebelum dan sesudah",
        description: "Geser garis pembatas di atas foto untuk membandingkan versi asli dan versi yang diedit, di desktop maupun layar sentuh.",
      },
      {
        title: "Ekspor resolusi penuh",
        description: "Efek diterapkan ke foto berukuran penuh saat Anda mengunduhnya.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara membuat foto menjadi hitam putih?",
        answer:
          "Klik preset Noir Muram untuk tampilan berkontras tinggi, atau atur slider Hitam putih ke 100% lalu sesuaikan kecerahan dan kontras sendiri.",
      },
      {
        question: "Bisakah saya membatalkan filter?",
        answer:
          "Bisa. Klik Atur ulang untuk kembali ke tampilan asli kapan saja. File asli Anda tidak pernah diubah.",
      },
      {
        question: "Apakah memasang filter menurunkan resolusi?",
        answer:
          "Tidak. Hasil unduhan memiliki lebar dan tinggi yang sama dengan foto asli Anda.",
      },
      {
        question: "Format unduhan mana yang sebaiknya saya pilih?",
        answer:
          "JPG dan WebP disimpan dengan kualitas 95% dan jauh lebih kecil untuk foto. PNG mempertahankan setiap piksel tetapi menghasilkan file besar untuk foto.",
      },
      {
        question: "Bisakah saya memakai filter pada foto HEIC dari iPhone?",
        answer:
          "Alat ini tidak bisa membuka file HEIC. Konversi foto ke JPG dulu dengan Konverter Gambar Universal, lalu buka JPG-nya di sini.",
      },
    ],
  },
  "meme-generator": {
    name: "Pembuat Meme",
    shortName: "Buat Meme",
    tagline: "Buat meme dari foto Anda sendiri atau template awal, dengan teks tebal di atas, tengah, dan bawah.",
    intro:
      "Pembuat Meme menambahkan teks meme klasik ke sebuah gambar. Unggah gambar Anda sendiri atau mulai dari salah satu dari delapan template bawaan yang sederhana, lalu ketik teks atas, tengah, dan bawah; baris yang panjang otomatis turun ke baris baru agar muat. Pilih font (Impact secara default), ukuran, warna teks dan garis tepi, perataan, serta huruf kapital, lalu unduh meme sebagai PNG, JPG, atau WebP tanpa watermark.",
    seoTitle: "Pembuat Meme Online – Tambah Teks ke Gambar",
    seoDescription:
      "Buat meme online gratis. Tambahkan teks atas, tengah, dan bawah ke foto Anda atau template, pilih font, ukuran, dan garis tepi, lalu unduh tanpa watermark.",
    keywords: [
      "meme generator",
      "buat meme online",
      "cara membuat meme",
      "tambah teks meme ke gambar",
      "meme font impact",
      "meme generator tanpa watermark",
      "buat meme dari foto sendiri",
    ],
    howToSteps: [
      {
        title: "Pilih gambar",
        description: "Unggah atau tempel gambar JPG, PNG, atau WebP, atau klik salah satu template cepat.",
      },
      {
        title: "Tulis teksnya",
        description: "Ketik teks atas dan bawah, dan tambahkan teks tengah jika perlu.",
      },
      {
        title: "Atur gaya teks",
        description: "Pilih font, ukuran, warna teks, warna dan tebal garis tepi, perataan, dan apakah memakai huruf kapital.",
      },
      {
        title: "Unduh atau salin",
        description: "Unduh meme sebagai PNG, WebP, atau JPG, atau salin ke papan klip untuk ditempel di chat.",
      },
    ],
    features: [
      {
        title: "Tiga area teks",
        description: "Teks atas, tengah, dan bawah, dengan pindah baris otomatis untuk teks yang panjang.",
      },
      {
        title: "Gaya meme klasik",
        description: "Teks Impact putih dengan garis tepi hitam secara default, ditambah font Arial, Comic Sans, Montserrat, dan Times.",
      },
      {
        title: "Teks menyesuaikan gambar",
        description: "Ukuran font relatif terhadap tinggi gambar, jadi teks terlihat sama di gambar kecil maupun besar.",
      },
      {
        title: "Tanpa watermark",
        description: "Meme Anda disimpan persis seperti yang Anda lihat, tanpa tambahan logo apa pun.",
      },
    ],
    faqs: [
      {
        question: "Apakah meme-nya ada watermark?",
        answer: "Tidak. Gambar yang diunduh hanya berisi gambar dan teks Anda.",
      },
      {
        question: "Font apa yang biasanya dipakai untuk meme?",
        answer:
          "Gaya meme klasik memakai Impact putih dengan garis tepi hitam, yang menjadi default di sini. Jika sebuah font tidak terpasang di perangkat Anda, browser memakai font yang mirip.",
      },
      {
        question: "Bisakah saya memakai gambar sendiri?",
        answer: "Bisa. Unggah gambar JPG, PNG, atau WebP, atau tempel dari papan klip dengan Ctrl+V.",
      },
      {
        question: "Teks saya menutupi terlalu banyak bagian gambar. Apa yang bisa saya lakukan?",
        answer:
          "Kecilkan ukuran font, atau pindahkan sebagian teks ke teks tengah atau bawah. Teks yang panjang otomatis terbagi ke beberapa baris.",
      },
      {
        question: "Bisakah saya membuat meme di HP?",
        answer:
          "Bisa. Pembuat meme berjalan di browser HP; ketik teks Anda dan gunakan tombol unduh untuk menyimpan gambar.",
      },
    ],
  },
  "split-image": {
    name: "Pemotong Gambar Jadi Grid",
    shortName: "Bagi Grid",
    tagline: "Potong satu gambar menjadi grid potongan, seperti grid Instagram 3×3 atau carousel panorama, lalu unduh sebagai ZIP.",
    intro:
      "Pemotong Gambar Jadi Grid membagi gambar menjadi baris dan kolom berupa file gambar terpisah. Pakai preset Instagram 3×3 untuk grid profil, Panorama 3×1 atau Carousel 2×1 untuk postingan geser, 2×2 untuk empat bagian sama besar, atau atur grid sendiri hingga 12 baris dan 12 kolom. Semua potongan diunduh bersama sebagai file PNG bernomor dalam satu ZIP, atau Anda bisa mengklik satu potongan untuk menyimpan potongan itu saja.",
    seoTitle: "Potong Gambar Jadi Grid – Instagram 3×3 dan Panorama",
    seoDescription:
      "Potong gambar jadi grid online gratis. Buat grid Instagram 3x3, potongan carousel panorama, atau grid khusus hingga 12x12, lalu unduh semua potongan sebagai ZIP.",
    keywords: [
      "potong gambar jadi grid",
      "split foto instagram",
      "grid instagram 3x3",
      "potong panorama untuk carousel instagram",
      "membagi gambar menjadi beberapa bagian",
      "foto grid 3x3",
      "split gambar online",
    ],
    howToSteps: [
      {
        title: "Unggah gambar Anda",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, atau WebP.",
      },
      {
        title: "Pilih grid",
        description:
          "Pilih Grid Instagram 3×3, Panorama 3×1, Carousel 2×1, atau Empat persegi (2×2), atau ketik jumlah baris dan kolom sendiri.",
      },
      {
        title: "Periksa pratinjau",
        description: "Pratinjau menunjukkan di mana gambar akan dipotong dan nomor setiap potongan.",
      },
      {
        title: "Unduh potongannya",
        description: "Klik Unduh semua potongan (ZIP), atau klik satu potongan di pratinjau untuk mengunduh potongan itu saja.",
      },
    ],
    features: [
      {
        title: "Preset media sosial",
        description: "Sekali klik untuk grid profil 3×3, carousel panorama 3 slide atau 2 slide, atau pembagian 2×2.",
      },
      {
        title: "Grid khusus",
        description: "Kombinasi apa pun dari 1 hingga 12 baris dan 1 hingga 12 kolom, hingga 144 potongan.",
      },
      {
        title: "Potongan bernomor",
        description: "File diberi nama tile_01, tile_02, dan seterusnya, dari kiri ke kanan dan dari atas ke bawah.",
      },
      {
        title: "Tanpa penurunan kualitas",
        description: "Potongan diambil dari gambar beresolusi penuh dan disimpan sebagai file PNG lossless.",
      },
    ],
    faqs: [
      {
        question: "Dalam urutan apa saya harus memposting potongan di Instagram?",
        answer:
          "Potongan diberi nomor dari kiri ke kanan dan dari atas ke bawah, dimulai dari tile_01. Instagram menampilkan postingan terbaru lebih dulu, jadi unggah potongan terakhir lebih dulu (tile_09 untuk grid 3×3) dan akhiri dengan tile_01.",
      },
      {
        question: "Gambar seperti apa yang sebaiknya dipakai untuk grid 3×3?",
        answer:
          "Untuk potongan persegi, mulai dari gambar persegi; potong dulu ke 1:1 jika perlu. Instagram mungkin menampilkan thumbnail profil dengan potongan berbeda, jadi periksa hasilnya setelah memposting.",
      },
      {
        question: "Bagaimana cara membagi panorama untuk postingan carousel?",
        answer:
          "Pilih Panorama 3×1 untuk tiga slide atau Carousel 2×1 untuk dua slide. Untuk slide persegi, lebar gambar sebaiknya tiga kali (atau dua kali) tingginya.",
      },
      {
        question: "Apakah semua potongan berukuran sama persis?",
        answer:
          "Jika lebar atau tinggi tidak bisa dibagi rata, kolom atau baris terakhir mendapat piksel sisanya, jadi bisa satu atau dua piksel lebih besar.",
      },
      {
        question: "Apakah memotong menjadi grid menurunkan kualitas gambar?",
        answer: "Tidak. Setiap potongan diambil dari piksel asli dan disimpan sebagai PNG, yang bersifat lossless.",
      },
    ],
  },
  "censor-image": {
    name: "Sensor Gambar dengan Blur dan Pikselasi",
    shortName: "Sensor Foto",
    tagline: "Sembunyikan wajah, pelat nomor, nama, atau angka di foto dengan balok hitam, pikselasi, atau blur.",
    intro:
      "Sensor Gambar dengan Blur dan Pikselasi menyembunyikan detail pribadi di sebuah gambar sebelum Anda membagikannya. Gambar persegi panjang atau oval di atas wajah, pelat nomor, alamat, atau nomor rekening, lalu pilih balok hitam, pikselasi, atau blur untuk setiap area. Area yang di-blur diletakkan di atas lapisan pikselasi kasar, jadi detail aslinya tidak bisa terlihat di bagian tepi.",
    seoTitle: "Blur atau Pikselasi Foto – Sensor Wajah dan Teks",
    seoDescription:
      "Sensor gambar online gratis. Blur, pikselasi, atau hitamkan wajah, pelat nomor, dan teks pribadi dengan persegi panjang atau oval. Tidak ada yang diunggah.",
    keywords: [
      "blur foto online",
      "sensor foto",
      "pixelate gambar",
      "blur wajah di foto",
      "sensor gambar online",
      "tutupi teks di screenshot",
      "blur plat nomor",
    ],
    howToSteps: [
      {
        title: "Unggah gambar",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, atau WebP, seperti foto atau screenshot.",
      },
      {
        title: "Pilih bentuk dan metode",
        description:
          "Pilih Persegi panjang atau Oval, lalu Pikselasi, Blur, atau Balok hitam. Untuk pikselasi dan blur, atur kekuatannya dari 4 hingga 45.",
      },
      {
        title: "Gambar di atas detail pribadi",
        description: "Seret di atas setiap area yang ingin Anda sembunyikan. Gunakan Urungkan untuk menghapus area terakhir atau Hapus semua area untuk mulai lagi.",
      },
      {
        title: "Unduh gambar yang disensor",
        description: "Unduh sebagai PNG, WebP, atau JPG, atau salin ke papan klip.",
      },
    ],
    features: [
      {
        title: "Tiga metode penyembunyian",
        description: "Kotak hitam pekat, pikselasi mozaik, atau blur di atas dasar pikselasi.",
      },
      {
        title: "Persegi panjang dan oval",
        description: "Pakai oval untuk wajah dan persegi panjang untuk teks, pelat nomor, dan angka.",
      },
      {
        title: "Campur metode dalam satu gambar",
        description: "Setiap area mempertahankan metode dan kekuatan saat digambar, jadi Anda bisa menutup nama dengan hitam dan mem-blur wajah.",
      },
      {
        title: "Konsisten pada foto besar",
        description: "Kekuatan disesuaikan dengan resolusi gambar, jadi foto beresolusi tinggi tersembunyi sama baiknya.",
      },
      {
        title: "Urungkan dan hapus",
        description: "Hapus area terakhir atau semua area tanpa memuat ulang foto.",
      },
    ],
    faqs: [
      {
        question: "Metode mana yang paling aman untuk menyembunyikan teks?",
        answer:
          "Balok hitam mengganti piksel sepenuhnya dan merupakan pilihan paling aman untuk kata sandi, nomor rekening, dan dokumen. Pikselasi atau blur yang kuat juga bisa, tetapi teks kecil dengan pengaturan lemah kadang masih bisa ditebak.",
      },
      {
        question: "Bisakah seseorang membatalkan blur di file yang diunduh?",
        answer:
          "Piksel di dalam setiap area diganti di gambar yang diunduh, bukan disembunyikan di lapisan terpisah. Foto asli di perangkat Anda tidak diubah, jadi bagikan hanya salinan yang sudah disensor.",
      },
      {
        question: "Apakah data EXIF juga dihapus?",
        answer:
          "Ya. File unduhan dibuat dari piksel di kanvas, jadi detail kamera dan lokasi GPS dari file asli tidak disertakan.",
      },
      {
        question: "Bisakah saya memakai efek berbeda di gambar yang sama?",
        answer:
          "Bisa. Ubah metode atau kekuatan sebelum Anda menggambar area berikutnya. Area yang sudah digambar tetap memakai pengaturannya sendiri.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Seret jari Anda di atas area yang ingin disembunyikan untuk menggambar kotak atau oval.",
      },
    ],
  },
  "remove-background": {
    name: "Hapus Background",
    shortName: "Hapus BG",
    tagline: "Hapus background foto dengan model AI yang berjalan di perangkat Anda, lalu simpan sebagai PNG transparan.",
    intro:
      "Hapus Background memisahkan subjek utama foto dan menghapus semua yang ada di belakangnya. Alat ini memakai model AI yang berjalan di browser Anda, jadi gambar Anda tidak pernah meninggalkan perangkat. Mode Orang memakai model kecil dan cepat yang lancar di HP dan paling cocok untuk orang, sedangkan mode Objek (HQ) memakai model yang lebih besar untuk produk, hewan peliharaan, dan objek lain. Simpan hasilnya sebagai PNG transparan, atau taruh di atas warna polos dan simpan sebagai PNG atau JPG.",
    seoTitle: "Hapus Background Foto – Gratis, di Perangkat Anda",
    seoDescription:
      "Hapus background foto gratis dengan AI di browser Anda. Dapatkan PNG transparan atau background warna polos. Foto Anda tidak pernah meninggalkan perangkat.",
    keywords: [
      "hapus background foto",
      "remove background",
      "hapus background foto gratis",
      "membuat background transparan",
      "foto background transparan",
      "hapus latar belakang foto",
      "remove bg online",
    ],
    howToSteps: [
      {
        title: "Unggah foto",
        description: "Letakkan, pilih, atau tempel gambar JPG, PNG, atau WebP.",
      },
      {
        title: "Pilih mode",
        description:
          "Orang dipilih secara default dan paling cocok untuk foto orang. Pilih Objek (HQ) untuk produk, hewan peliharaan, dan subjek lain, sebaiknya di browser desktop.",
      },
      {
        title: "Tunggu hasilnya",
        description:
          "Pada pemakaian pertama, model diunduh ke browser Anda; setelah itu model dimuat dari cache browser. Background lalu dihapus di perangkat Anda.",
      },
      {
        title: "Pilih background dan unduh",
        description: "Biarkan transparan dan simpan sebagai PNG, atau pilih warna polos dan simpan sebagai PNG atau JPG.",
      },
    ],
    features: [
      {
        title: "AI yang berjalan di perangkat Anda",
        description: "Model berjalan di dalam browser Anda, jadi foto Anda tidak pernah diunggah ke server.",
      },
      {
        title: "Dua model",
        description: "Model Orang yang kecil dan cepat untuk foto orang, dan model Objek (HQ) yang lebih besar untuk produk, hewan peliharaan, dan objek.",
      },
      {
        title: "Diunduh sekali",
        description: "Browser Anda menyimpan model setelah pemakaian pertama, jadi gambar berikutnya dimulai jauh lebih cepat.",
      },
      {
        title: "Background transparan atau berwarna",
        description: "Simpan PNG transparan, atau letakkan subjek di atas warna polos pilihan Anda.",
      },
    ],
    faqs: [
      {
        question: "Apakah foto saya diunggah ke server?",
        answer:
          "Tidak. Hanya model AI yang diunduh ke browser Anda. Foto Anda diproses di perangkat Anda dan tidak dikirim ke mana pun.",
      },
      {
        question: "Kenapa pemakaian pertama lebih lama?",
        answer:
          "Model harus diunduh dulu: sekitar 7 hingga 13 MB untuk mode Orang dan sekitar 115 MB untuk mode Objek (HQ). Browser Anda menyimpannya, jadi pemakaian berikutnya dimulai jauh lebih cepat.",
      },
      {
        question: "Mode mana yang sebaiknya saya pakai?",
        answer:
          "Pakai Orang untuk foto orang; mode ini cepat dan bisa dipakai di HP. Pakai Objek (HQ) untuk produk, hewan peliharaan, dan subjek lain, terutama jika tepiannya penting.",
      },
      {
        question: "Apakah bisa dipakai di HP iPhone dan Android?",
        answer:
          "Bisa, mode Orang dirancang untuk berjalan di HP. Mode Objek (HQ) jauh lebih besar dan paling baik di browser desktop yang mendukung WebGPU; di HP mode ini bisa lambat atau kehabisan memori.",
      },
      {
        question: "Bisakah saya memberi warna background baru di belakang subjek?",
        answer:
          "Bisa. Pilih warna polos, lalu simpan sebagai PNG atau JPG. Untuk background transparan, simpan sebagai PNG.",
      },
      {
        question: "Kenapa beberapa tepian tidak sempurna?",
        answer:
          "Rambut halus, bulu, kaca, dan subjek dengan warna yang mirip dengan background sulit bagi model mana pun. Coba mode Objek (HQ), atau pakai foto dengan kontras yang jelas antara subjek dan background.",
      },
    ],
  },
};
