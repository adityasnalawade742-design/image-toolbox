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
      "Hapus Metadata Gambar membuat salinan bersih foto Anda tanpa informasi EXIF yang tersembunyi. Foto dari ponsel dan kamera sering menyimpan lokasi GPS tempat foto diambil, model perangkat, serta tanggal dan waktunya. Untuk JPG, PNG, dan WebP, hanya informasi itu yang dihapus dari file: gambarnya tidak disimpan ulang, jadi kualitas dan warnanya tetap sama persis. Ukuran file baru ditampilkan sebelum Anda mengunduh.",
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
        title: "Pertahankan format",
        description:
          "Jika format asli dipertahankan, hanya metadata yang dihapus, tanpa perubahan kualitas. Jika Anda mengganti format, gambar disimpan ulang: untuk JPG dan WebP pakai kualitas 90% hingga 100%, atau pilih PNG.",
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
        title: "Tanpa penurunan kualitas",
        description: "JPG, PNG, dan WebP mempertahankan piksel dan profil warnanya persis; hanya data tersembunyi yang dihapus.",
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
          "Data EXIF (kamera, pengaturan, tanggal, dan GPS), kolom IPTC dan XMP seperti pembuat atau hak cipta, komentar, dan teks PNG. Profil warna dipertahankan agar warna tidak berubah, dan JPG tetap menyimpan orientasinya agar tidak tampil miring.",
      },
      {
        question: "Apakah menghapus metadata mengubah kualitas gambar?",
        answer:
          "Tidak, jika format dipertahankan: file JPG, PNG, dan WebP tidak disimpan ulang, jadi setiap piksel tetap sama. Jika Anda mengonversi ke format lain, atau memulai dari foto HEIC iPhone, gambar disimpan ulang, jadi pilih kualitas tinggi.",
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
  "svg-to-jpg": {
    name: "SVG ke JPG",
    shortName: "SVG → JPG",
    tagline: "Ubah grafis SVG menjadi gambar JPG dengan skala berapa pun, dengan warna background pilihan Anda. Konversi berjalan di perangkat Anda.",
    intro: "Grafis SVG tetap tajam di ukuran berapa pun, tetapi banyak aplikasi, media sosial, dan formulir unggah hanya menerima gambar biasa. SVG ke JPG menggambar ulang SVG pada skala pilihan Anda, dari 1x hingga 8x, lalu menyimpannya sebagai JPG. JPG tidak mendukung transparansi, jadi area transparan diisi dengan putih atau warna pilihan Anda. Konversi berlangsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah SVG ke JPG – Ukuran Berapa Pun, Gratis",
    seoDescription: "Ubah grafis SVG ke JPG di browser dengan skala 1x hingga 8x dan warna background pilihan Anda. Gratis dan tidak ada yang diunggah.",
    keywords: [
      "svg ke jpg",
      "ubah svg ke jpg",
      "convert svg to jpg",
      "svg ke jpeg",
      "svg ke gambar",
    ],
    howToSteps: [
      {
        title: "Tambahkan SVG",
        description: "Seret, pilih, atau tempel file .svg.",
      },
      {
        title: "Pilih skala dan background",
        description: "Pilih 1x, 2x, 4x, atau 8x, serta warna untuk mengisi area transparan.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan JPG lalu pakai di mana saja.",
      },
    ],
    features: [
      {
        title: "Tajam di ukuran berapa pun",
        description: "SVG digambar ulang pada skala yang dipilih, jadi tepinya tetap tajam.",
      },
      {
        title: "Warna background pilihan Anda",
        description: "Area transparan diisi dengan putih atau warna apa pun.",
      },
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dipakai di semua aplikasi, media sosial, dan formulir unggah.",
      },
      {
        title: "Konversi privat",
        description: "File diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "SVG ke JPG atau SVG ke PNG?",
        answer: "Pilih PNG untuk logo dan ikon, agar transparansi dan warna rata tetap sempurna. Pilih JPG saat situs atau formulir meminta JPG, atau untuk ilustrasi dengan gradasi.",
      },
      {
        question: "Skala mana yang sebaiknya saya pakai?",
        answer: "2x cocok untuk sebagian besar layar. Pakai 4x atau 8x untuk cetak atau layar besar.",
      },
      {
        question: "Kenapa SVG saya terlihat berbeda?",
        answer: "SVG yang memuat font atau gambar dari web mungkin tidak menggambar bagian tersebut. Ubah dulu teks menjadi outline di alat desain Anda.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer: "Tidak. Browser Anda menggambar SVG di perangkat Anda.",
      },
    ],
  },
  "svg-to-webp": {
    name: "SVG ke WebP",
    shortName: "SVG → WebP",
    tagline: "Ubah grafis SVG menjadi gambar WebP yang kecil dengan skala berapa pun, termasuk transparansinya. Konversi berjalan di perangkat Anda.",
    intro: "Kadang situs web, aplikasi, atau pembuat email membutuhkan gambar biasa, bukan SVG. SVG ke WebP menggambar ulang SVG pada skala pilihan Anda, dari 1x hingga 8x, lalu menyimpannya sebagai WebP, format kecil yang ditampilkan semua browser saat ini dan tetap mempertahankan transparansi. Konversi berlangsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah SVG ke WebP – File Kecil, Transparansi Terjaga",
    seoDescription: "Ubah grafis SVG ke WebP di browser dengan skala 1x hingga 8x, dengan transparansi tetap terjaga. Gratis dan tidak ada yang diunggah.",
    keywords: [
      "svg ke webp",
      "ubah svg ke webp",
      "convert svg to webp",
      "svg ke gambar",
      "webp transparan",
    ],
    howToSteps: [
      {
        title: "Tambahkan SVG",
        description: "Seret, pilih, atau tempel file .svg.",
      },
      {
        title: "Pilih skala dan kualitas",
        description: "Pilih 1x, 2x, 4x, atau 8x, serta kualitas WebP.",
      },
      {
        title: "Unduh WebP",
        description: "Simpan WebP lalu pakai di situs atau aplikasi Anda.",
      },
    ],
    features: [
      {
        title: "Tajam di ukuran berapa pun",
        description: "SVG digambar ulang pada skala yang dipilih, jadi tepinya tetap tajam.",
      },
      {
        title: "Transparansi tetap terjaga",
        description: "Area transparan tetap transparan di WebP.",
      },
      {
        title: "File kecil",
        description: "WebP biasanya jauh lebih kecil daripada PNG untuk gambar yang sama.",
      },
      {
        title: "Konversi privat",
        description: "File diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Kenapa tidak pakai SVG-nya saja?",
        answer: "Tetap pakai SVG di tempat yang mendukungnya. Pakai WebP di tempat yang hanya menerima gambar biasa, seperti beberapa aplikasi, pembuat email, dan unggahan gambar.",
      },
      {
        question: "Skala mana yang sebaiknya saya pakai?",
        answer: "2x cocok untuk sebagian besar layar. Pakai 4x atau 8x untuk layar besar.",
      },
      {
        question: "Kenapa SVG saya terlihat berbeda?",
        answer: "SVG yang memuat font atau gambar dari web mungkin tidak menggambar bagian tersebut. Ubah dulu teks menjadi outline di alat desain Anda.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer: "Tidak. Browser Anda menggambar SVG di perangkat Anda.",
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
    tagline: "Hapus background foto dengan AI yang berjalan di perangkat Anda, lalu simpan sebagai PNG transparan.",
    intro:
      "Hapus Background memisahkan subjek utama foto dan menghapus semua yang ada di belakangnya. Alat ini memakai model AI yang berjalan di browser Anda, jadi gambar Anda tidak pernah meninggalkan perangkat. Pilih Cepat, model lebih kecil yang cepat dan paling cocok untuk foto orang, atau Kualitas terbaik, model lebih besar dengan hasil lebih baik untuk subjek apa pun, termasuk produk, hewan peliharaan, dan objek. Simpan hasilnya sebagai PNG transparan, atau taruh di atas warna polos.",
    seoTitle: "Hapus Background Foto – Gratis, di Perangkat Anda",
    seoDescription:
      "Hapus background foto gratis dengan AI di browser Anda. Pilih model Cepat atau Kualitas terbaik, lalu simpan PNG transparan. Foto tetap di perangkat Anda.",
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
        title: "Pilih model",
        description:
          "Cepat dipilih secara default dan cocok untuk foto orang. Pilih Kualitas terbaik untuk produk, hewan peliharaan, objek, atau kapan pun Anda menginginkan tepian paling bersih.",
      },
      {
        title: "Unduh model sekali",
        description:
          "Saat pertama kali Anda memakai sebuah model, browser Anda mengunduhnya: sekitar 16 MB untuk Cepat dan sekitar 100 MB untuk Kualitas terbaik, yang meminta konfirmasi sebelum mulai. Setelah itu model tersimpan di browser Anda.",
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
        title: "Dua model untuk dipilih",
        description: "Cepat memproses dengan cepat dan paling cocok untuk orang. Kualitas terbaik lebih besar dan lebih lambat, tetapi memberi hasil lebih baik untuk subjek apa pun.",
      },
      {
        title: "Diunduh sekali",
        description: "Setiap model disimpan di browser Anda setelah pemakaian pertama, dan alat ini menunjukkan model mana yang sudah diunduh.",
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
        question: "Apa bedanya Cepat dan Kualitas terbaik?",
        answer:
          "Cepat memakai model lebih kecil (sekitar 16 MB) dan butuh sekitar 5 detik per foto; hasilnya bagus untuk orang, tetapi bisa melewatkan sebagian objek. Kualitas terbaik memakai model lebih besar (sekitar 100 MB) dan butuh sekitar 15–30 detik, dengan hasil lebih baik untuk produk, hewan peliharaan, objek, dan orang.",
      },
      {
        question: "Kenapa pemakaian pertama lebih lama?",
        answer:
          "Model harus diunduh dulu. Kualitas terbaik meminta konfirmasi sebelum mengunduh modelnya yang berukuran 100 MB. Setelah pemakaian pertama, browser Anda menyimpan model, jadi foto berikutnya dimulai jauh lebih cepat.",
      },
      {
        question: "Apakah bisa dipakai di HP iPhone dan Android?",
        answer:
          "Bisa. Cepat adalah pilihan terbaik di HP. Kualitas terbaik juga berjalan di HP, tetapi unduhan yang lebih besar dan waktu proses yang lebih lama lebih terasa di sana, terutama dengan data seluler.",
      },
      {
        question: "Bisakah saya memberi warna background baru di belakang subjek?",
        answer:
          "Bisa. Pilih warna polos, lalu simpan sebagai PNG atau JPG. Untuk background transparan, simpan sebagai PNG.",
      },
      {
        question: "Kenapa beberapa tepian tidak sempurna?",
        answer:
          "Rambut halus, bulu, kaca, dan subjek dengan warna yang mirip dengan background sulit bagi model mana pun. Coba Kualitas terbaik, atau pakai foto dengan kontras yang jelas antara subjek dan background.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Kompres Gambar ke KB",
    shortName: "Kompres ke KB",
    tagline: "Buat foto lebih kecil dari ukuran pasti, seperti 20 KB, 50 KB, atau 100 KB, untuk formulir online. Prosesnya berjalan di perangkat Anda.",
    intro:
      "Banyak formulir pendaftaran dan unggahan hanya menerima foto di bawah ukuran tertentu, seperti 20 KB atau 50 KB, padahal foto HP biasa berukuran berkali-kali lipat lebih besar. Kompres Gambar ke KB membuat file lebih kecil dari batas yang Anda pilih. Alat ini mencoba beberapa tingkat kualitas sampai menemukan yang terbaik yang muat, dan baru memperkecil dimensi foto jika kualitas terendah pun masih terlalu besar. Anda juga bisa mengatur dimensi pasti, seperti pasfoto 35 × 45 mm, dan foto akan dipotong dari tengah untuk mengisinya. Semua proses berlangsung di browser Anda, jadi foto diri dan dokumen Anda tidak pernah diunggah.",
    seoTitle: "Kompres Foto ke 20 KB, 50 KB, atau 100 KB – Gratis",
    seoDescription:
      "Kompres foto 20 KB, 50 KB, 100 KB, atau ukuran berapa pun untuk formulir online. Kualitas terbaik yang muat tetap terjaga. Gratis, privat, tanpa unggah file.",
    keywords: [
      "kompres foto 20 kb",
      "kompres foto 50 kb",
      "kompres foto 100 kb",
      "mengecilkan ukuran foto kb",
      "kompres foto 200 kb",
      "cara mengecilkan ukuran foto",
      "kompres pas foto",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto Anda",
        description: "Letakkan, pilih, atau tempel foto JPG, PNG, WebP, atau HEIC dari iPhone.",
      },
      {
        title: "Pilih batas ukuran",
        description: "Pilih 10 KB hingga 1 MB, atau ketik batas pasti yang diminta formulir Anda.",
      },
      {
        title: "Atur dimensi jika perlu",
        description:
          "Biarkan Ukuran asli, atau pilih Pasfoto, persegi 2 × 2 inci, atau Ukuran kustom dengan lebar dan tinggi sendiri.",
      },
      {
        title: "Unduh",
        description: "Pastikan hasilnya menyatakan file sudah di bawah batas, lalu unduh JPG atau WebP.",
      },
    ],
    features: [
      {
        title: "Selalu di bawah batas",
        description: "Alat ini mengukur file sungguhan yang dibuatnya, jadi file yang Anda unduh lebih kecil dari ukuran pilihan Anda, bukan sekadar mendekati.",
      },
      {
        title: "Kualitas terbaik yang muat",
        description: "Kualitas tertinggi yang muat tetap dipertahankan, dan dimensi hanya diperkecil jika memang perlu.",
      },
      {
        title: "Pasfoto dan ukuran kustom",
        description: "Preset untuk pasfoto 35 × 45 mm dan foto 2 × 2 inci, atau lebar dan tinggi berapa pun yang Anda butuhkan.",
      },
      {
        title: "Privat sejak awal",
        description: "Foto Anda diproses di browser dan tidak pernah diunggah, hal penting untuk foto identitas dan foto pendaftaran.",
      },
    ],
    faqs: [
      {
        question: "Apakah file benar-benar di bawah batas?",
        answer:
          "Ya. Alat ini memeriksa ukuran file sungguhan yang dibuatnya, dan hanya menampilkan pesan berhasil jika ukurannya di bawah batas Anda. 1 KB dihitung sebagai 1.024 byte, seperti cara Windows dan sebagian besar formulir menghitung, jadi file juga di bawah batas jika formulir menghitung 1 KB sebagai 1.000 byte.",
      },
      {
        question: "Kenapa dimensi foto saya berubah?",
        answer:
          "Saat Ukuran asli dipilih, alat ini menurunkan kualitas terlebih dahulu. Jika file masih terlalu besar pada kualitas terendah, lebar dan tingginya diperkecil bertahap sampai muat. Pesan hasil akan memberi tahu Anda jika ini terjadi dan menampilkan ukuran barunya.",
      },
      {
        question: "Kenapa batas saya tidak bisa tercapai?",
        answer:
          "Jika Anda mengatur dimensi pasti, alat ini tidak bisa memperkecil fotonya, jadi batas yang sangat rendah dengan dimensi besar mungkin tidak tercapai. Naikkan batasnya, pilih dimensi yang lebih kecil, atau pilih Ukuran asli.",
      },
      {
        question: "Ukuran dan format apa yang dibutuhkan formulir saya?",
        answer:
          "Setiap formulir punya aturan sendiri. Baca petunjuknya untuk ukuran file maksimum, lebar dan tinggi dalam piksel atau milimeter, serta formatnya, lalu atur nilai yang sama di sini. JPG diterima hampir di mana saja.",
      },
      {
        question: "Apakah kompresi menurunkan kualitas?",
        answer:
          "Sebagian kualitas selalu hilang saat foto diperkecil jauh, tetapi alat ini mempertahankan sebanyak yang diizinkan batasnya. Untuk wajah, batas 30 KB atau lebih biasanya terlihat bersih pada dimensi pasfoto.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Foto dikompres oleh browser di perangkat Anda. Tidak ada yang dikirim ke server, jadi aman dipakai untuk foto identitas dan dokumen.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC ke JPG",
    shortName: "HEIC → JPG",
    tagline: "Ubah foto HEIC dari iPhone ke JPG agar bisa dibuka di komputer, HP, atau situs web mana pun. Konversi berjalan di perangkat Anda.",
    intro:
      "iPhone dan banyak HP keluaran baru menyimpan foto sebagai HEIC, format yang menjaga kualitas tetap bagus dengan file lebih kecil. Namun, banyak komputer Windows, aplikasi lama, dan formulir unggahan tidak bisa membukanya. HEIC ke JPG mengubah foto menjadi JPG standar yang bisa dipakai hampir di mana saja. Foto didekode dan dikonversi di dalam browser Anda, jadi tidak pernah meninggalkan perangkat, dan JPG hasil konversi tidak menyertakan detail lokasi, kamera, dan tanggal yang tersimpan di file aslinya.",
    seoTitle: "Ubah HEIC ke JPG – Gratis, Tanpa Unggah",
    seoDescription:
      "Ubah HEIC ke JPG langsung di browser Anda. Foto iPhone jadi JPG yang bisa dibuka di Windows, Mac, Android, dan iPhone. Gratis, privat, tidak ada yang diunggah.",
    keywords: [
      "heic ke jpg",
      "ubah heic ke jpg",
      "convert heic to jpg",
      "foto iphone ke jpg",
      "heic converter",
      "cara membuka file heic di windows",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto HEIC",
        description: "Letakkan, pilih, atau tempel file .heic atau .heif dari iPhone atau komputer Anda.",
      },
      {
        title: "Tunggu pratinjau",
        description: "Browser Anda mendekode foto. Foto besar bisa memakan waktu beberapa detik.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan foto hasil konversi. File ini bisa dibuka di penampil foto, browser, atau formulir unggahan mana pun.",
      },
    ],
    features: [
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dibuka di Windows, Mac, Android, di semua browser, dan di hampir semua situs web.",
      },
      {
        title: "Konversi privat",
        description: "Foto dikonversi di perangkat Anda dan tidak pernah diunggah.",
      },
      {
        title: "Tanpa data lokasi",
        description: "Lokasi GPS, detail kamera, dan tanggal dari file asli tidak disalin ke JPG.",
      },
      {
        title: "Lanjutkan mengedit",
        description: "Kirim foto hasil konversi langsung untuk dipotong, diubah ukurannya, atau dikompres.",
      },
    ],
    faqs: [
      {
        question: "Apa itu file HEIC?",
        answer:
          "HEIC (High Efficiency Image Container) adalah format foto bawaan iPhone sejak iOS 11. Format ini menyimpan foto dengan ruang sekitar setengah dari JPG pada kualitas serupa, tetapi masih banyak komputer dan situs web yang tidak bisa membukanya.",
      },
      {
        question: "Apakah JPG-nya akan terlihat sama?",
        answer:
          "Ya, untuk tampilan biasa. JPG disimpan dengan kualitas tinggi. File JPG biasanya lebih besar dari HEIC aslinya, karena kompresi JPG kurang efisien.",
      },
      {
        question: "Bisakah saya mengonversi beberapa foto HEIC sekaligus?",
        answer:
          "Alat ini mengonversi satu foto sekali jalan. Jika satu file HEIC berisi beberapa gambar, seperti foto burst, gambar pertama yang dikonversi.",
      },
      {
        question: "Bagaimana agar iPhone saya memotret dalam format JPG?",
        answer:
          "Di iPhone, buka Pengaturan, lalu Kamera, lalu Format, dan pilih Paling Kompatibel. Foto baru akan disimpan sebagai JPG. Foto yang sudah Anda ambil tetap dalam format HEIC.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Dekoder HEIC berjalan di browser Anda, jadi foto tetap di perangkat Anda.",
      },
    ],
  },
  "heic-to-png": {
    name: "HEIC ke PNG",
    shortName: "HEIC → PNG",
    tagline: "Ubah foto HEIC dari iPhone ke PNG lossless untuk keperluan edit dan desain. Konversi berjalan di perangkat Anda.",
    intro:
      "HEIC adalah format foto bawaan iPhone, dan banyak alat desain, aplikasi lama, dan situs web tidak bisa membukanya. HEIC ke PNG mengubah foto menjadi PNG, format lossless, jadi tidak ada detail yang hilang lagi saat Anda mengedit dan menyimpannya ulang. Karena itu, PNG cocok untuk foto yang akan Anda retus, masukkan ke desain, atau potong subjeknya. Konversi berlangsung di dalam browser Anda, jadi foto tidak pernah meninggalkan perangkat. Untuk berbagi atau mengunggah, HEIC ke JPG menghasilkan file yang jauh lebih kecil.",
    seoTitle: "Ubah HEIC ke PNG – Gratis, Lossless",
    seoDescription:
      "Ubah HEIC ke PNG lossless langsung di browser Anda. Foto iPhone jadi PNG yang siap diedit dan dipakai untuk desain. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "heic ke png",
      "ubah heic ke png",
      "convert heic to png",
      "foto iphone ke png",
      "heif ke png",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto HEIC",
        description: "Letakkan, pilih, atau tempel file .heic atau .heif.",
      },
      {
        title: "Tunggu pratinjau",
        description: "Browser Anda mendekode foto di perangkat Anda.",
      },
      {
        title: "Unduh PNG",
        description: "Simpan PNG lossless dan buka di editor atau alat desain apa pun.",
      },
    ],
    features: [
      {
        title: "Hasil lossless",
        description: "PNG menyimpan setiap piksel foto yang didekode, jadi mengedit berulang kali tidak menambah artefak kompresi.",
      },
      {
        title: "Bisa dibuka di editor apa pun",
        description: "PNG bisa dipakai di Photoshop, GIMP, Figma, Canva, Office, dan semua browser.",
      },
      {
        title: "Konversi privat",
        description: "Foto dikonversi di perangkat Anda dan tidak pernah diunggah.",
      },
      {
        title: "Tanpa data lokasi",
        description: "Lokasi GPS dan detail kamera dari file asli tidak disalin ke PNG.",
      },
    ],
    faqs: [
      {
        question: "PNG atau JPG: mana yang sebaiknya saya pilih?",
        answer:
          "Pilih PNG jika Anda akan mengedit foto lebih lanjut atau membutuhkan piksel yang persis. Pilih JPG untuk berbagi, email, dan formulir unggahan, karena file PNG untuk foto berukuran beberapa kali lebih besar.",
      },
      {
        question: "Kenapa PNG jauh lebih besar dari HEIC?",
        answer:
          "HEIC memakai kompresi lossy yang sangat efisien. PNG bersifat lossless, jadi menyimpan jauh lebih banyak data. Foto iPhone 2 MB bisa menjadi PNG berukuran 10 MB atau lebih.",
      },
      {
        question: "Apakah PNG-nya punya background transparan?",
        answer:
          "Tidak. Foto tidak memiliki transparansi, jadi PNG-nya sepenuhnya buram. Untuk menghapus background, buka hasilnya di Hapus Background.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Dekoder HEIC berjalan di browser Anda, jadi foto tetap di perangkat Anda.",
      },
    ],
  },
  "heic-to-webp": {
    name: "HEIC ke WebP",
    shortName: "HEIC → WebP",
    tagline: "Ubah foto HEIC dan HEIF dari iPhone menjadi WebP, format web ringan yang bisa dibuka di semua browser. Konversi berjalan di perangkat Anda.",
    intro: "HEIC (juga disebut HEIF) adalah format foto bawaan iPhone dan banyak ponsel Android, tetapi sebagian besar situs web, sistem manajemen konten, dan aplikasi Windows tidak bisa menampilkannya. HEIC ke WebP mengubah foto menjadi WebP, format modern yang didukung semua browser saat ini dan menjaga ukuran file tetap kecil, sering kali lebih kecil daripada JPG dengan kualitas yang sama. Karena itu, format ini cocok untuk foto yang akan Anda pasang di situs web, blog, atau toko online. Konversi berlangsung di browser Anda, jadi foto tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah HEIC ke WebP – Gratis, Privat, HEIF Juga Bisa",
    seoDescription: "Ubah foto HEIC dan HEIF iPhone ke WebP di browser. File ringan untuk situs web, kualitas bisa diatur, dan tidak ada yang diunggah.",
    keywords: [
      "heic ke webp",
      "heif ke webp",
      "ubah heic ke webp",
      "foto iphone ke webp",
      "konverter heic ke webp",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto HEIC",
        description: "Seret, pilih, atau tempel file .heic atau .heif.",
      },
      {
        title: "Pilih kualitas",
        description: "85% cocok untuk sebagian besar foto. Turunkan untuk file yang lebih kecil, naikkan untuk detail yang lebih banyak.",
      },
      {
        title: "Unduh WebP",
        description: "Simpan file WebP lalu unggah ke situs Anda atau bagikan.",
      },
    ],
    features: [
      {
        title: "File kecil",
        description: "Dengan kualitas visual yang sama, file WebP biasanya lebih kecil daripada JPG, jadi halaman lebih cepat dimuat.",
      },
      {
        title: "Bisa di semua browser",
        description: "Chrome, Safari, Firefox, dan Edge menampilkan WebP, begitu juga WordPress, Shopify, dan sebagian besar pembuat situs.",
      },
      {
        title: "Konversi privat",
        description: "Foto diubah di perangkat Anda dan tidak pernah diunggah.",
      },
      {
        title: "Tanpa data lokasi",
        description: "Lokasi GPS dan detail kamera dari foto asli tidak disalin ke file WebP.",
      },
    ],
    faqs: [
      {
        question: "Apakah HEIF sama dengan HEIC?",
        answer: "Untuk foto, ya. HEIF adalah format filenya, sedangkan HEIC adalah nama dan ekstensi yang dipakai Apple untuk foto yang disimpan dalam format itu. File .heic maupun .heif bisa dipakai di sini.",
      },
      {
        question: "WebP atau JPG: mana yang sebaiknya dipilih?",
        answer: "Pilih WebP untuk situs web dan toko online, karena file kecil lebih cepat dimuat. Pilih JPG jika foto akan dikirim lewat email, ke percetakan, atau ke aplikasi dan formulir unggahan lama yang tidak menerima WebP.",
      },
      {
        question: "Kualitas berapa yang sebaiknya dipakai?",
        answer: "Pada 85%, sebagian besar foto terlihat sama dengan aslinya. Pakai 90% atau lebih untuk foto dengan detail halus, atau 70% hingga 80% jika ukuran file paling penting.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer: "Tidak. Dekoder HEIC berjalan di browser Anda, jadi foto tetap ada di perangkat Anda.",
      },
    ],
  },
  "avif-to-jpg": {
    name: "AVIF ke JPG",
    shortName: "AVIF → JPG",
    tagline: "Ubah gambar AVIF ke JPG agar bisa dibuka di semua aplikasi, editor, dan formulir unggah. Konversi berjalan di perangkat Anda.",
    intro: "AVIF adalah format gambar modern yang kini dipakai banyak situs web karena ukuran filenya sangat kecil. Namun, saat Anda menyimpan gambar seperti itu, penampil foto lama, Office, banyak editor, dan berbagai formulir unggah tidak bisa membukanya. AVIF ke JPG mengubah gambar menjadi JPG, format yang bisa dipakai di mana saja. Pilih kualitasnya, lihat pratinjaunya, lalu unduh. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah AVIF ke JPG – Gratis, Cepat, Privat",
    seoDescription: "Ubah gambar AVIF ke JPG di browser. Bisa dipakai di semua aplikasi dan formulir unggah, kualitas bisa diatur, dan tidak ada yang diunggah.",
    keywords: [
      "avif ke jpg",
      "ubah avif ke jpg",
      "convert avif to jpg",
      "avif ke jpeg",
      "cara membuka file avif",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar AVIF",
        description: "Seret, pilih, atau tempel file .avif.",
      },
      {
        title: "Pilih kualitas",
        description: "85% cocok untuk sebagian besar gambar. Naikkan untuk detail yang lebih banyak, turunkan untuk file yang lebih kecil.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan JPG lalu buka, edit, atau unggah di mana saja.",
      },
    ],
    features: [
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dipakai di semua penampil foto, editor, ponsel, aplikasi email, dan formulir unggah.",
      },
      {
        title: "Kualitas bisa diatur",
        description: "Pilih keseimbangan antara ukuran file dan detail sebelum mengunduh.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
      {
        title: "Transparansi ditangani",
        description: "JPG tidak mendukung transparansi, jadi area transparan diisi dengan warna pilihan Anda.",
      },
    ],
    faqs: [
      {
        question: "Apa itu file AVIF?",
        answer: "AVIF adalah format gambar yang berbasis codec video AV1. Format ini menghasilkan file yang jauh lebih kecil daripada JPG dengan kualitas yang sama, sehingga banyak situs web memakainya, tetapi software lama tidak bisa membukanya.",
      },
      {
        question: "Apakah JPG akan lebih besar daripada AVIF?",
        answer: "Biasanya, ya. AVIF mengompres gambar dengan sangat efisien, jadi gambar yang sama dalam JPG sering dua atau tiga kali lebih besar. Itulah harga untuk file yang bisa dibuka semua program.",
      },
      {
        question: "Kenapa browser saya tidak bisa membuka AVIF?",
        answer: "Browser yang sangat lama tidak bisa mendekode AVIF. Versi terbaru Chrome, Edge, Firefox, dan Safari (versi 16 atau lebih baru) semuanya bisa. Jika file tetap tidak terbuka, file itu mungkin rusak.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Browser Anda mendekode dan mengubah gambar di perangkat Anda.",
      },
    ],
  },
  "avif-to-png": {
    name: "AVIF ke PNG",
    shortName: "AVIF → PNG",
    tagline: "Ubah gambar AVIF ke PNG lossless dengan transparansi tetap terjaga, untuk diedit dan didesain. Konversi berjalan di perangkat Anda.",
    intro: "Gambar AVIF kecil dan tajam, tetapi banyak editor, alat desain, dan aplikasi lama tidak bisa membukanya. AVIF ke PNG mengubah gambar menjadi PNG, format lossless yang mempertahankan area transparan, jadi cocok untuk logo, grafis, dan apa pun yang masih akan Anda edit. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda. Untuk foto yang ingin Anda bagikan, AVIF ke JPG menghasilkan file yang lebih kecil.",
    seoTitle: "Ubah AVIF ke PNG – Gratis, Lossless",
    seoDescription: "Ubah gambar AVIF ke PNG lossless di browser, dengan transparansi tetap terjaga. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "avif ke png",
      "ubah avif ke png",
      "convert avif to png",
      "avif ke png transparan",
      "cara membuka file avif",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar AVIF",
        description: "Seret, pilih, atau tempel file .avif.",
      },
      {
        title: "Periksa pratinjau",
        description: "Browser Anda mendekode gambar di perangkat Anda.",
      },
      {
        title: "Unduh PNG",
        description: "Simpan PNG lossless lalu buka di editor atau alat desain apa pun.",
      },
    ],
    features: [
      {
        title: "Hasil lossless",
        description: "PNG menyimpan setiap piksel gambar hasil dekode, jadi mengedit dan menyimpan ulang tidak menambah artefak.",
      },
      {
        title: "Transparansi tetap terjaga",
        description: "Area transparan pada AVIF tetap transparan di PNG.",
      },
      {
        title: "Bisa dibuka di editor apa pun",
        description: "PNG bisa dipakai di Photoshop, GIMP, Figma, Canva, Office, dan semua browser.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Kenapa PNG jauh lebih besar daripada AVIF?",
        answer: "AVIF memakai kompresi lossy yang sangat efisien, sedangkan PNG bersifat lossless dan menyimpan jauh lebih banyak data. Sebuah PNG bisa dengan mudah berukuran sepuluh kali lipat AVIF-nya.",
      },
      {
        question: "Apakah PNG mempertahankan transparansi?",
        answer: "Ya. Jika AVIF punya area transparan, area itu tetap transparan di PNG.",
      },
      {
        question: "PNG atau JPG: mana yang sebaiknya dipilih?",
        answer: "Pilih PNG untuk grafis, transparansi, atau jika gambar masih akan diedit. Pilih JPG untuk foto yang akan dibagikan atau diunggah, karena ukuran filenya jauh lebih kecil.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Konversi berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "jpg-to-avif": {
    name: "JPG ke AVIF",
    shortName: "JPG → AVIF",
    tagline: "Ubah foto JPG ke AVIF, format web modern dengan ukuran file paling kecil. Konversi berjalan di perangkat Anda.",
    intro: "AVIF menghasilkan file yang jauh lebih kecil daripada JPG dengan kualitas visual yang sama, sering kali hanya separuhnya, jadi halaman lebih cepat dimuat dan lebih hemat kuota. Semua browser saat ini bisa menampilkannya. JPG ke AVIF mengubah foto Anda ke AVIF dengan kualitas pilihan Anda, sehingga berguna untuk situs web, toko online, dan blog yang memperhitungkan setiap kilobyte. Proses encoding berlangsung di browser Anda, jadi foto tidak pernah meninggalkan perangkat Anda. Untuk foto besar, prosesnya bisa memakan beberapa detik.",
    seoTitle: "Ubah JPG ke AVIF – Gambar Lebih Kecil, Gratis",
    seoDescription: "Ubah foto JPG ke AVIF di browser untuk gambar web yang jauh lebih kecil. Kualitas bisa diatur, gratis, dan tidak ada yang diunggah.",
    keywords: [
      "jpg ke avif",
      "ubah jpg ke avif",
      "convert jpg to avif",
      "jpeg ke avif",
      "konverter avif",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto JPG",
        description: "Seret, pilih, atau tempel file .jpg atau .jpeg.",
      },
      {
        title: "Pilih kualitas",
        description: "Mulai dari 85%. AVIF tetap tajam pada pengaturan yang lebih rendah daripada JPG, jadi coba nilai yang lebih rendah untuk file yang lebih kecil.",
      },
      {
        title: "Unduh AVIF",
        description: "Simpan file AVIF lalu unggah ke situs web Anda.",
      },
    ],
    features: [
      {
        title: "File jauh lebih kecil",
        description: "AVIF sering kali hanya sekitar separuh ukuran JPG yang tampak sama.",
      },
      {
        title: "Tampil di semua browser saat ini",
        description: "Chrome, Edge, Firefox, dan Safari 16 atau lebih baru menampilkan AVIF.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
      {
        title: "Tanpa data lokasi",
        description: "Lokasi GPS dan detail kamera dari JPG tidak disalin ke AVIF.",
      },
    ],
    faqs: [
      {
        question: "AVIF atau WebP: mana yang lebih baik?",
        answer: "AVIF biasanya menghasilkan file lebih kecil dengan kualitas yang sama, sedangkan WebP lebih cepat di-encode dan bisa dipakai di beberapa aplikasi lama. Keduanya ditampilkan oleh semua browser saat ini.",
      },
      {
        question: "Apakah semua aplikasi bisa membuka AVIF?",
        answer: "Tidak. Browser bisa, tetapi beberapa penampil foto, editor, dan formulir unggah lama tidak bisa. Simpan JPG aslinya untuk keperluan itu, dan pakai AVIF di web.",
      },
      {
        question: "Kenapa konversinya butuh beberapa detik?",
        answer: "Encoding AVIF bekerja keras untuk menemukan file yang paling kecil. Prosesnya berjalan di perangkat Anda, jadi foto besar butuh waktu lebih lama di HP yang lebih lambat.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer: "Tidak. Encoder AVIF berjalan di browser Anda, jadi foto tetap ada di perangkat Anda.",
      },
    ],
  },
  "png-to-avif": {
    name: "PNG ke AVIF",
    shortName: "PNG → AVIF",
    tagline: "Ubah gambar PNG ke AVIF untuk file web yang jauh lebih kecil, termasuk transparansinya. Konversi berjalan di perangkat Anda.",
    intro: "File PNG sering kali besar, terutama screenshot, foto, dan grafis yang detail. AVIF menyimpan gambar yang sama hanya dengan sebagian kecil ruangnya dan tetap mempertahankan transparansi, jadi cocok untuk logo, gambar produk, dan ilustrasi di web. PNG ke AVIF mengubah gambar Anda dengan kualitas pilihan Anda, dan semua browser saat ini bisa menampilkan hasilnya. Proses encoding berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah PNG ke AVIF – File Kecil, Transparansi Terjaga",
    seoDescription: "Ubah gambar PNG ke AVIF di browser. Gambar web jauh lebih kecil dengan transparansi tetap terjaga, kualitas bisa diatur, tanpa unggah.",
    keywords: [
      "png ke avif",
      "ubah png ke avif",
      "convert png to avif",
      "avif transparan",
      "gambar ke avif",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar PNG",
        description: "Seret, pilih, atau tempel file .png.",
      },
      {
        title: "Pilih kualitas",
        description: "85% cocok untuk sebagian besar gambar. Pakai nilai yang lebih tinggi untuk teks tajam dan garis halus.",
      },
      {
        title: "Unduh AVIF",
        description: "Simpan file AVIF lalu unggah ke situs web Anda.",
      },
    ],
    features: [
      {
        title: "Hanya sebagian kecil ukurannya",
        description: "File AVIF sering kali berkali-kali lebih kecil daripada PNG asalnya.",
      },
      {
        title: "Transparansi tetap terjaga",
        description: "Background transparan tetap transparan di AVIF.",
      },
      {
        title: "Tampil di semua browser saat ini",
        description: "Chrome, Edge, Firefox, dan Safari 16 atau lebih baru menampilkan AVIF.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah AVIF lossless seperti PNG?",
        answer: "Tidak di sini. AVIF dikompres dengan kualitas pilihan Anda, jadi detail yang sangat kecil bisa berubah. Pada 85% atau lebih, sebagian besar gambar terlihat sama dengan PNG-nya.",
      },
      {
        question: "Apakah AVIF mempertahankan transparansi?",
        answer: "Ya. Area transparan pada PNG tetap transparan di AVIF.",
      },
      {
        question: "Kapan sebaiknya saya tetap memakai PNG?",
        answer: "Simpan PNG untuk diedit, dicetak, dan untuk aplikasi yang tidak bisa membuka AVIF. Pakai AVIF di situs web.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Encoder AVIF berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "gif-to-png": {
    name: "GIF ke PNG",
    shortName: "GIF → PNG",
    tagline: "Simpan GIF sebagai gambar diam PNG yang lossless, dengan transparansi tetap terjaga. Konversi berjalan di perangkat Anda.",
    intro: "GIF adalah format lama yang hanya bisa menyimpan maksimal 256 warna, dan banyak editor serta formulir unggah kurang baik menanganinya. GIF ke PNG menyimpan gambar sebagai PNG, format lossless yang bisa dibuka semua editor dan alat desain, sekaligus mempertahankan area transparan. Jika GIF-nya animasi, PNG yang dihasilkan adalah gambar diam dari frame pertamanya. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah GIF ke PNG – Gratis, Transparansi Terjaga",
    seoDescription: "Ubah GIF menjadi gambar diam PNG lossless di browser, dengan transparansi tetap terjaga. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "gif ke png",
      "ubah gif ke png",
      "convert gif to png",
      "gif ke png transparan",
      "frame pertama gif ke png",
    ],
    howToSteps: [
      {
        title: "Tambahkan GIF",
        description: "Seret, pilih, atau tempel file .gif.",
      },
      {
        title: "Periksa pratinjau",
        description: "GIF animasi menampilkan frame pertamanya.",
      },
      {
        title: "Unduh PNG",
        description: "Simpan PNG lalu buka di editor apa pun.",
      },
    ],
    features: [
      {
        title: "Lossless",
        description: "Setiap piksel frame GIF disimpan persis sama.",
      },
      {
        title: "Transparansi tetap terjaga",
        description: "Area transparan pada GIF tetap transparan di PNG.",
      },
      {
        title: "Bisa dibuka di editor apa pun",
        description: "PNG bisa dipakai di Photoshop, GIMP, Figma, Canva, Office, dan semua browser.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana dengan GIF animasi?",
        answer: "PNG-nya berupa gambar diam dari frame pertama. File PNG yang dibuat di sini tidak bergerak.",
      },
      {
        question: "Apakah warnanya akan berubah?",
        answer: "Tidak. GIF punya maksimal 256 warna, dan PNG menyimpan semuanya persis sama.",
      },
      {
        question: "Bisakah saya mengubah ukuran gambar sambil mengonversi?",
        answer: "Bisa. Isi lebar atau tinggi baru di kolom ukuran sebelum mengunduh.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Konversi berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "gif-to-jpg": {
    name: "GIF ke JPG",
    shortName: "GIF → JPG",
    tagline: "Simpan GIF sebagai gambar diam JPG yang bisa dibuka di mana saja. Konversi berjalan di perangkat Anda.",
    intro: "Sebagian formulir unggah, layanan cetak, dan aplikasi hanya menerima JPG. GIF ke JPG menyimpan GIF sebagai gambar diam JPG dengan kualitas pilihan Anda. Karena JPG tidak mendukung transparansi, area transparan diisi dengan warna background yang Anda pilih. Jika GIF-nya animasi, JPG menampilkan frame pertamanya. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah GIF ke JPG – Gratis dan Privat",
    seoDescription: "Ubah GIF menjadi gambar diam JPG di browser. Pilih kualitas dan warna background. Gratis, dan tidak ada yang diunggah.",
    keywords: [
      "gif ke jpg",
      "ubah gif ke jpg",
      "convert gif to jpg",
      "gif ke jpeg",
      "frame pertama gif ke jpg",
    ],
    howToSteps: [
      {
        title: "Tambahkan GIF",
        description: "Seret, pilih, atau tempel file .gif.",
      },
      {
        title: "Pilih kualitas dan background",
        description: "Pilih kualitas JPG dan, jika GIF punya area transparan, warna untuk mengisinya.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan JPG lalu pakai di mana saja.",
      },
    ],
    features: [
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dipakai di semua penampil, editor, ponsel, layanan cetak, dan formulir unggah.",
      },
      {
        title: "Warna background pilihan Anda",
        description: "Area transparan diisi dengan putih atau warna apa pun yang Anda pilih.",
      },
      {
        title: "Kualitas bisa diatur",
        description: "Atur keseimbangan antara ukuran file dan detail.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana dengan GIF animasi?",
        answer: "JPG-nya berupa gambar diam dari frame pertama. JPG tidak bisa bergerak.",
      },
      {
        question: "Kenapa ada warna background?",
        answer: "JPG tidak mendukung transparansi, jadi area transparan pada GIF perlu warna solid. Putih dipakai kecuali Anda memilih warna lain.",
      },
      {
        question: "Apakah sebaiknya saya memilih PNG?",
        answer: "Pilih PNG untuk logo, teks, dan grafis dengan warna rata, atau untuk mempertahankan transparansi. Pilih JPG saat formulir atau layanan memintanya.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Konversi berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "bmp-to-jpg": {
    name: "BMP ke JPG",
    shortName: "BMP → JPG",
    tagline: "Ubah gambar BMP Windows yang besar menjadi file JPG yang kecil. Konversi berjalan di perangkat Anda.",
    intro: "BMP adalah format Windows lama yang menyimpan gambar tanpa kompresi, sehingga filenya sangat besar dan banyak situs web serta aplikasi tidak menerimanya. BMP ke JPG mengubah gambar menjadi JPG, yang biasanya hanya sebagian kecil dari ukuran aslinya, dengan kualitas pilihan Anda. Ini solusi cepat untuk hasil scan, screenshot dari software lama, dan gambar yang diekspor dari program lawas. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah BMP ke JPG – Gratis, File Lebih Kecil",
    seoDescription: "Ubah gambar BMP ke JPG di browser. File jauh lebih kecil yang bisa dibuka di mana saja, kualitas bisa diatur, dan tidak ada yang diunggah.",
    keywords: [
      "bmp ke jpg",
      "ubah bmp ke jpg",
      "convert bmp to jpg",
      "bmp ke jpeg",
      "konverter bmp",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar BMP",
        description: "Seret, pilih, atau tempel file .bmp.",
      },
      {
        title: "Pilih kualitas",
        description: "85% cocok untuk sebagian besar gambar. Naikkan untuk screenshot dengan teks kecil.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan JPG yang jauh lebih kecil.",
      },
    ],
    features: [
      {
        title: "File jauh lebih kecil",
        description: "JPG sering kali hanya sepersepuluh ukuran BMP, atau bahkan lebih kecil.",
      },
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dipakai di semua penampil, editor, ponsel, dan formulir unggah.",
      },
      {
        title: "Kualitas bisa diatur",
        description: "Atur keseimbangan antara ukuran file dan detail.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Kenapa file BMP besar sekali?",
        answer: "Sebagian besar file BMP menyimpan setiap piksel tanpa kompresi. JPG mengompres gambar, itulah sebabnya file hasil konversi jauh lebih kecil.",
      },
      {
        question: "Apakah JPG pilihan yang tepat untuk screenshot?",
        answer: "Untuk screenshot dengan teks kecil atau garis tajam, BMP ke PNG menjaganya tetap jelas. JPG paling cocok untuk foto dan hasil scan.",
      },
      {
        question: "File BMP apa saja yang bisa dibuka?",
        answer: "Jenis bitmap Windows umum yang didukung browser. Beberapa varian yang tidak lazim, seperti sebagian file BMP terkompresi atau yang sangat lama, mungkin tidak bisa dibuka.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Konversi berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "bmp-to-png": {
    name: "BMP ke PNG",
    shortName: "BMP → PNG",
    tagline: "Ubah gambar BMP Windows ke PNG lossless dengan ukuran jauh lebih kecil. Konversi berjalan di perangkat Anda.",
    intro: "File BMP tidak terkompresi dan berukuran besar, tetapi mengubahnya ke JPG bisa membuat teks dan garis tajam jadi kabur. BMP ke PNG mengubah gambar menjadi PNG, yang mengompresnya tanpa kehilangan satu piksel pun, jadi screenshot, diagram, dan grafis tetap persis seperti aslinya dalam file yang jauh lebih kecil. Konversi berlangsung di browser Anda, jadi gambar tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah BMP ke PNG – Gratis, Lossless",
    seoDescription: "Ubah gambar BMP ke PNG lossless di browser. File lebih kecil dengan setiap piksel tetap utuh. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "bmp ke png",
      "ubah bmp ke png",
      "convert bmp to png",
      "bitmap ke png",
      "konverter bmp",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar BMP",
        description: "Seret, pilih, atau tempel file .bmp.",
      },
      {
        title: "Periksa pratinjau",
        description: "Browser Anda membuka gambar di perangkat Anda.",
      },
      {
        title: "Unduh PNG",
        description: "Simpan PNG lossless.",
      },
    ],
    features: [
      {
        title: "Lossless",
        description: "Setiap piksel BMP disimpan persis sama.",
      },
      {
        title: "File lebih kecil",
        description: "PNG mengompres gambar tanpa kehilangan kualitas, sering kali hingga sebagian kecil ukuran BMP.",
      },
      {
        title: "Ideal untuk screenshot",
        description: "Teks, garis, dan warna rata tetap tajam.",
      },
      {
        title: "Konversi privat",
        description: "Gambar diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Seberapa kecil PNG-nya?",
        answer: "Tergantung gambarnya. Screenshot dan grafis sering menyusut hingga sepersepuluh ukuran BMP, sedangkan foto yang detail menyusut lebih sedikit.",
      },
      {
        question: "BMP ke PNG atau BMP ke JPG?",
        answer: "Pilih PNG untuk screenshot, diagram, dan grafis, atau saat Anda butuh piksel yang persis. Pilih JPG untuk foto, karena hasilnya jauh lebih kecil.",
      },
      {
        question: "File BMP apa saja yang bisa dibuka?",
        answer: "Jenis bitmap Windows umum yang didukung browser. Beberapa varian yang tidak lazim mungkin tidak bisa dibuka.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. Konversi berjalan di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "tiff-to-jpg": {
    name: "TIFF ke JPG",
    shortName: "TIFF → JPG",
    tagline: "Ubah hasil scan dan gambar TIFF menjadi file JPG kecil yang bisa dibuka di mana saja. Konversi berjalan di perangkat Anda.",
    intro: "TIFF adalah format yang dihasilkan banyak scanner, program faks, kamera, dan alur kerja cetak. Filenya sering berukuran besar, dan Chrome, Edge, Firefox, serta sebagian besar situs web tidak bisa menampilkannya. TIFF ke JPG mengubah gambar menjadi JPG, yang biasanya hanya sebagian kecil dari ukuran aslinya, dengan kualitas pilihan Anda. TIFF terkompresi juga bisa, termasuk file faks hitam putih. Jika file memiliki beberapa halaman, halaman pertama yang diubah; TIFF ke PDF menyimpan semua halaman. Konversi berlangsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah TIFF ke JPG – Gratis, Cepat, Privat",
    seoDescription: "Ubah hasil scan dan gambar TIFF ke JPG di browser. File lebih kecil yang bisa dibuka di mana saja, kualitas bisa diatur, dan tidak ada yang diunggah.",
    keywords: [
      "tiff ke jpg",
      "tif ke jpg",
      "ubah tiff ke jpg",
      "convert tiff to jpg",
      "konverter tiff",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar TIFF",
        description: "Seret, pilih, atau tempel file .tif atau .tiff.",
      },
      {
        title: "Pilih kualitas",
        description: "85% cocok untuk foto. Pakai nilai lebih tinggi untuk hasil scan dengan teks kecil.",
      },
      {
        title: "Unduh JPG",
        description: "Simpan JPG, lalu bagikan atau unggah.",
      },
    ],
    features: [
      {
        title: "File jauh lebih kecil",
        description: "JPG biasanya hanya sebagian kecil dari ukuran TIFF.",
      },
      {
        title: "Bisa dibuka di mana saja",
        description: "JPG bisa dipakai di semua penampil, editor, ponsel, dan formulir unggah.",
      },
      {
        title: "Sebagian besar jenis TIFF",
        description: "TIFF tanpa kompresi, LZW, Deflate, PackBits, JPEG, dan faks hitam putih semuanya bisa dibuka.",
      },
      {
        title: "Konversi privat",
        description: "File diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Mengapa browser saya tidak bisa membuka file TIFF?",
        answer: "Dari browser-browser utama, hanya Safari yang bisa menampilkan TIFF. Chrome, Edge, dan Firefox tidak bisa, jadi alat ini mendekode file itu sendiri, di perangkat Anda.",
      },
      {
        question: "Bagaimana dengan TIFF yang memiliki beberapa halaman?",
        answer: "Halaman pertama yang diubah. Untuk menyimpan semua halaman, gunakan TIFF ke PDF, yang membuat satu halaman PDF untuk setiap halaman TIFF.",
      },
      {
        question: "Apakah hasil scan yang sangat besar diperkecil?",
        answer: "Halaman yang lebih besar dari sekitar 16 megapiksel, misalnya 4.000 × 4.000 piksel, diperkecil ke ukuran itu agar semua browser, termasuk di iPhone, bisa memprosesnya. Hasil scan dan foto biasa tidak diubah ukurannya.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer: "Tidak. TIFF didekode dan diubah di browser Anda, jadi file tetap ada di perangkat Anda.",
      },
    ],
  },
  "tiff-to-png": {
    name: "TIFF ke PNG",
    shortName: "TIFF → PNG",
    tagline: "Ubah gambar TIFF ke PNG lossless yang bisa dibuka di semua browser dan editor. Konversi berjalan di perangkat Anda.",
    intro: "File TIFF dari scanner, kamera, dan software desain tidak bisa ditampilkan di Chrome, Edge, Firefox, atau di sebagian besar situs web. TIFF ke PNG mengubah gambar menjadi PNG, yang lossless seperti TIFF, jadi setiap piksel tetap utuh, begitu juga transparansinya. Karena itu, PNG adalah pilihan yang tepat untuk dokumen hasil scan, gambar garis, dan grafis yang masih akan Anda edit. Jika file memiliki beberapa halaman, halaman pertama yang diubah; TIFF ke PDF menyimpan semua halaman. Konversi berlangsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Ubah TIFF ke PNG – Gratis, Lossless",
    seoDescription: "Ubah gambar TIFF ke PNG lossless di browser, dengan setiap piksel dan transparansi tetap utuh. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "tiff ke png",
      "tif ke png",
      "ubah tiff ke png",
      "convert tiff to png",
      "konverter tiff ke png",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar TIFF",
        description: "Seret, pilih, atau tempel file .tif atau .tiff.",
      },
      {
        title: "Periksa pratinjau",
        description: "Browser Anda mendekode gambar di perangkat Anda.",
      },
      {
        title: "Unduh PNG",
        description: "Simpan PNG lossless dan buka di editor mana pun.",
      },
    ],
    features: [
      {
        title: "Lossless",
        description: "Setiap piksel halaman TIFF disimpan persis sama.",
      },
      {
        title: "Transparansi tetap utuh",
        description: "Area transparan pada TIFF tetap transparan di PNG.",
      },
      {
        title: "Sebagian besar jenis TIFF",
        description: "TIFF tanpa kompresi, LZW, Deflate, PackBits, JPEG, dan faks hitam putih semuanya bisa dibuka.",
      },
      {
        title: "Konversi privat",
        description: "File diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah PNG-nya lebih kecil dari TIFF?",
        answer: "Sering kali ya, terutama untuk TIFF tanpa kompresi dan hasil scan hitam putih. TIFF yang sudah dikompres mungkin menghasilkan PNG dengan ukuran yang mirip.",
      },
      {
        question: "Bagaimana dengan TIFF yang memiliki beberapa halaman?",
        answer: "Halaman pertama yang diubah. Untuk menyimpan semua halaman, gunakan TIFF ke PDF, yang membuat satu halaman PDF untuk setiap halaman TIFF.",
      },
      {
        question: "Apakah hasil scan yang sangat besar diperkecil?",
        answer: "Halaman yang lebih besar dari sekitar 16 megapiksel, misalnya 4.000 × 4.000 piksel, diperkecil ke ukuran itu agar semua browser, termasuk di iPhone, bisa memprosesnya. Hasil scan dan foto biasa tidak diubah ukurannya.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer: "Tidak. TIFF didekode dan diubah di browser Anda, jadi file tetap ada di perangkat Anda.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "JPG ke PDF",
    shortName: "JPG → PDF",
    tagline: "Jadikan satu foto atau lebih sebagai satu PDF, dengan urutan pilihan Anda dan halaman A4 atau Letter. Tidak ada yang diunggah.",
    intro:
      "JPG ke PDF memasukkan foto-foto Anda ke dalam satu file PDF, satu foto per halaman. Inilah cara cepat mengirim halaman hasil scan, struk, catatan, atau foto identitas sebagai satu dokumen. Tambahkan gambar JPG, PNG, WebP, atau HEIC dari iPhone, urutkan, lalu pilih ukuran halaman, orientasi, dan margin. Foto JPG dimasukkan ke PDF tanpa dikompres ulang, jadi kualitas aslinya tetap terjaga. PDF dibuat oleh browser Anda, jadi dokumen Anda tidak pernah diunggah ke server.",
    seoTitle: "JPG ke PDF – Gabungkan Foto Jadi Satu PDF, Gratis",
    seoDescription:
      "JPG ke PDF langsung di browser: ubah foto JPG, PNG, dan iPhone jadi satu PDF. Atur urutan halaman, pilih A4 atau Letter. Gratis, tanpa unggah, tanpa watermark.",
    keywords: [
      "jpg ke pdf",
      "gambar ke pdf",
      "ubah foto ke pdf",
      "png ke pdf",
      "gabungkan foto jadi pdf",
      "convert jpg to pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar Anda",
        description: "Letakkan atau pilih satu atau beberapa gambar JPG, PNG, WebP, atau HEIC. Anda bisa menambahkan lagi kapan saja.",
      },
      {
        title: "Urutkan",
        description: "Gunakan tombol naik dan turun untuk mengatur halaman, dan hapus yang tidak Anda perlukan.",
      },
      {
        title: "Pilih tata letak halaman",
        description: "Pilih A4, Letter, atau halaman yang Sesuai gambar, lalu orientasi dan margin.",
      },
      {
        title: "Buat PDF",
        description: "Unduh satu PDF dengan setiap gambar di halamannya sendiri.",
      },
    ],
    features: [
      {
        title: "Banyak gambar, satu PDF",
        description: "Gabungkan foto sebanyak yang sanggup ditangani perangkat Anda ke dalam satu dokumen.",
      },
      {
        title: "Kualitas JPG asli",
        description: "Foto JPG disematkan apa adanya, tanpa dikompres sekali lagi.",
      },
      {
        title: "A4, Letter, atau sesuai gambar",
        description: "Ukuran kertas standar dengan orientasi otomatis, atau halaman seukuran persis setiap gambar.",
      },
      {
        title: "Privat dan tanpa watermark",
        description: "PDF dibuat di perangkat Anda, tanpa watermark, dan tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Berapa banyak gambar yang bisa saya tambahkan?",
        answer:
          "Tidak ada batas tetap. Puluhan foto HP bisa diproses di sebagian besar perangkat; jumlah yang sangat banyak bisa kehabisan memori di HP lama.",
      },
      {
        question: "Apakah kualitas foto akan turun?",
        answer:
          "Foto JPG dimasukkan ke PDF tanpa dikompres ulang, jadi kualitas aslinya tetap terjaga. Gambar PNG tetap lossless. Gambar WebP dan HEIC dikonversi dulu ke JPG berkualitas tinggi, karena PDF tidak bisa menyimpannya secara langsung.",
      },
      {
        question: "Kenapa PDF saya besar sekali?",
        answer:
          "PDF berisi foto Anda dalam resolusi penuh. Untuk memperkecilnya, kecilkan dulu fotonya dengan Kompres Gambar atau Ubah Ukuran Gambar, lalu tambahkan di sini.",
      },
      {
        question: "Apakah foto HP yang miring akan diputar dengan benar?",
        answer:
          "Ya. Foto ditempatkan sesuai tampilannya di HP Anda, menggunakan orientasi yang tersimpan di file.",
      },
      {
        question: "Apakah dokumen saya diunggah?",
        answer:
          "Tidak. PDF dibuat oleh browser di perangkat Anda, jadi struk, kartu identitas, dan dokumen pribadi tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "png-to-pdf": {
    name: "PNG ke PDF",
    shortName: "PNG → PDF",
    tagline: "Jadikan gambar PNG dan screenshot sebagai satu PDF, dengan urutan pilihan Anda. Konversi berjalan di perangkat Anda.",
    intro: "PNG ke PDF menggabungkan satu atau beberapa gambar PNG, seperti screenshot, hasil scan, atau diagram, menjadi satu PDF yang mudah dikirim lewat email, dicetak, atau diunggah. Atur urutan halaman sesuka Anda, pilih A4, Letter, atau halaman yang Sesuai gambar, lalu atur orientasi dan margin. Gambar tetap dalam resolusi penuh. Semuanya berlangsung di browser Anda, jadi gambar Anda tidak pernah diunggah. Foto JPG, WebP, dan HEIC dari iPhone juga bisa dimasukkan ke PDF yang sama.",
    seoTitle: "Ubah PNG ke PDF – Gabungkan Gambar, Gratis",
    seoDescription: "Ubah gambar PNG dan screenshot jadi satu PDF di browser. Atur urutan halaman, pilih A4 atau Letter. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "png ke pdf",
      "ubah png ke pdf",
      "convert png to pdf",
      "screenshot ke pdf",
      "gabungkan png jadi pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar PNG",
        description: "Letakkan atau pilih satu atau beberapa gambar. Anda bisa menambahkan lagi nanti.",
      },
      {
        title: "Atur halaman",
        description: "Seret atau gunakan tombol panah untuk mengatur urutan, lalu pilih ukuran halaman, orientasi, dan margin.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan satu PDF dengan satu halaman untuk setiap gambar.",
      },
    ],
    features: [
      {
        title: "Banyak gambar, satu PDF",
        description: "Gabungkan screenshot atau hasil scan menjadi satu dokumen.",
      },
      {
        title: "Urutan halaman sesuai keinginan",
        description: "Atur ulang urutan halaman sebelum membuat PDF.",
      },
      {
        title: "Pilihan ukuran halaman",
        description: "A4, Letter, atau setiap halaman seukuran gambarnya.",
      },
      {
        title: "Konversi privat",
        description: "PDF dibuat di perangkat Anda dan tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah kualitas gambar akan turun?",
        answer: "Tidak. Setiap gambar dimasukkan ke PDF dalam resolusi penuh.",
      },
      {
        question: "Bisakah saya mencampur PNG dengan format lain?",
        answer: "Bisa. Gambar JPG, WebP, dan HEIC dari iPhone bisa dimasukkan ke PDF yang sama.",
      },
      {
        question: "Apa fungsi opsi Sesuai gambar?",
        answer: "Setiap halaman mengikuti ukuran dan bentuk gambarnya, tanpa tepi putih, sehingga cocok untuk screenshot dan slide.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer: "Tidak. PDF dibuat di browser Anda, jadi gambar tetap ada di perangkat Anda.",
      },
    ],
  },
  "heic-to-pdf": {
    name: "HEIC ke PDF",
    shortName: "HEIC → PDF",
    tagline: "Jadikan foto HEIC dari iPhone, seperti struk dan dokumen, sebagai satu PDF. Konversi berjalan di perangkat Anda.",
    intro: "iPhone menyimpan foto dalam format HEIC, tetapi formulir klaim biaya, sekolah, bank, dan kantor biasanya meminta PDF. HEIC ke PDF mengubah satu atau beberapa foto HEIC, seperti struk, kartu identitas, formulir, atau halaman tulisan tangan, menjadi satu PDF yang bisa Anda unggah atau kirim lewat email. Urutkan halamannya, lalu pilih A4, Letter, atau halaman seukuran setiap foto. Semuanya berlangsung di browser Anda, jadi foto Anda tidak pernah diunggah.",
    seoTitle: "Ubah HEIC ke PDF – Foto iPhone Jadi PDF, Gratis",
    seoDescription: "Ubah foto HEIC iPhone menjadi satu PDF di browser. Atur urutan halaman, pilih A4 atau Letter. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "heic ke pdf",
      "ubah heic ke pdf",
      "foto iphone ke pdf",
      "heif ke pdf",
      "convert heic to pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto HEIC",
        description: "Letakkan atau pilih satu atau beberapa file .heic atau .heif.",
      },
      {
        title: "Atur halaman",
        description: "Tentukan urutannya, lalu pilih ukuran halaman, orientasi, dan margin.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan satu PDF dengan satu halaman untuk setiap foto.",
      },
    ],
    features: [
      {
        title: "Beberapa foto, satu PDF",
        description: "Gabungkan struk atau halaman dokumen menjadi satu file.",
      },
      {
        title: "Urutan halaman sesuai keinginan",
        description: "Atur ulang urutan halaman sebelum membuat PDF.",
      },
      {
        title: "Pilihan ukuran halaman",
        description: "A4, Letter, atau setiap halaman seukuran fotonya.",
      },
      {
        title: "Konversi privat",
        description: "Foto Anda diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah HEIF sama dengan HEIC?",
        answer: "Untuk foto, ya. File .heic maupun .heif bisa dipakai di sini.",
      },
      {
        question: "Bisakah saya menambahkan gambar JPG atau PNG juga?",
        answer: "Bisa. Gambar JPG, PNG, dan WebP bisa dimasukkan ke PDF yang sama.",
      },
      {
        question: "Apakah PDF-nya akan terbaca jelas untuk dokumen?",
        answer: "Ya. Foto dimasukkan dalam resolusi penuh. Agar hasilnya paling jelas, foto dokumen dalam posisi datar dan dengan cahaya yang cukup.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer: "Tidak. Dekoder HEIC dan pembuat PDF berjalan di browser Anda, jadi foto Anda tetap ada di perangkat Anda.",
      },
    ],
  },
  "tiff-to-pdf": {
    name: "TIFF ke PDF",
    shortName: "TIFF → PDF",
    tagline: "Jadikan hasil scan dan faks TIFF sebagai PDF, dengan semua halaman TIFF multihalaman tetap berurutan. Konversi berjalan di perangkat Anda.",
    intro: "Scanner dan program faks sering menyimpan dokumen sebagai file TIFF multihalaman, padahal kebanyakan orang mengharapkan PDF. TIFF ke PDF mengubah setiap halaman dari setiap TIFF menjadi halaman PDF secara berurutan, sehingga kontrak hasil scan atau faks menjadi satu dokumen yang bisa Anda buka, kirim lewat email, dan unggah di mana saja. Tambahkan beberapa file, atur ulang halaman, lalu pilih A4, Letter, atau halaman seukuran setiap gambar. Semuanya berlangsung di browser Anda, jadi dokumen Anda tidak pernah diunggah.",
    seoTitle: "Ubah TIFF ke PDF – Scan Multihalaman, Gratis",
    seoDescription: "Ubah hasil scan dan faks TIFF ke PDF di browser. Semua halaman TIFF multihalaman tetap berurutan. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "tiff ke pdf",
      "tif ke pdf",
      "ubah tiff ke pdf",
      "convert tiff to pdf",
      "tiff multi halaman ke pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan file TIFF",
        description: "Letakkan atau pilih satu atau beberapa file .tif atau .tiff. Setiap halaman muncul di daftar.",
      },
      {
        title: "Atur halaman",
        description: "Tentukan urutannya, lalu pilih ukuran halaman, orientasi, dan margin.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan satu PDF berisi semua halaman.",
      },
    ],
    features: [
      {
        title: "Semua halaman tetap ada",
        description: "Setiap halaman TIFF multihalaman menjadi halaman PDF, sesuai urutan.",
      },
      {
        title: "Format faks dan scan",
        description: "TIFF faks hitam putih serta TIFF dengan kompresi LZW, Deflate, PackBits, dan JPEG semuanya bisa dibuka.",
      },
      {
        title: "Urutan halaman sesuai keinginan",
        description: "Atur ulang atau hapus halaman sebelum membuat PDF.",
      },
      {
        title: "Konversi privat",
        description: "Dokumen Anda diubah di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Berapa banyak halaman yang bisa dimiliki TIFF?",
        answer: "Hingga 200 halaman per file. Halaman setelah halaman ke-200 tidak disertakan, jadi pisahkan dulu dokumen yang sangat panjang menjadi beberapa TIFF yang lebih kecil.",
      },
      {
        question: "Bisakah saya mencampur TIFF dengan gambar lain?",
        answer: "Bisa. Gambar JPG, PNG, WebP, dan HEIC dari iPhone bisa dimasukkan ke PDF yang sama.",
      },
      {
        question: "Apakah teks di PDF bisa dicari?",
        answer: "Tidak. Setiap halaman ditempatkan sebagai gambar, sama seperti di TIFF. Untuk menyalin teksnya, buka halaman tersebut di Gambar ke Teks.",
      },
      {
        question: "Apakah dokumen saya diunggah?",
        answer: "Tidak. TIFF didekode dan PDF dibuat di browser Anda, jadi dokumen Anda tetap ada di perangkat Anda.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF ke JPG",
    shortName: "PDF → JPG",
    tagline: "Simpan setiap halaman PDF sebagai gambar JPG atau PNG, satu per satu atau sekaligus dalam ZIP. Tidak ada yang diunggah.",
    intro:
      "PDF ke JPG mengubah halaman PDF menjadi gambar yang bisa Anda posting, bagikan di chat, masukkan ke slide, atau unggah ke formulir yang hanya menerima gambar. Pilih JPG untuk file kecil atau PNG untuk teks yang tajam, lalu pilih resolusinya: 72 dpi untuk layar, 150 dpi untuk sebagian besar keperluan, atau 300 dpi untuk mencetak. Unduh satu halaman atau semua halaman sekaligus dalam file ZIP. PDF dibuka oleh browser di perangkat Anda, jadi dokumen pribadi tidak pernah diunggah.",
    seoTitle: "PDF ke JPG – Ubah Setiap Halaman Jadi Gambar, Gratis",
    seoDescription:
      "Ubah PDF ke JPG atau PNG langsung di browser Anda. Pilih 72, 150, atau 300 dpi, lalu unduh satu halaman atau semuanya dalam ZIP. Gratis dan tanpa unggah file.",
    keywords: [
      "pdf ke jpg",
      "pdf ke gambar",
      "ubah pdf ke jpg",
      "pdf ke png",
      "convert pdf to jpg",
      "simpan pdf sebagai jpg",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih file PDF. Halaman-halamannya muncul sebagai pratinjau.",
      },
      {
        title: "Pilih format dan resolusi",
        description: "Pilih JPG atau PNG, dan 72, 150, atau 300 dpi.",
      },
      {
        title: "Unduh",
        description: "Simpan satu halaman, atau unduh semua halaman sekaligus dalam file ZIP.",
      },
    ],
    features: [
      {
        title: "Semua halaman atau satu saja",
        description: "Unduh halaman yang Anda perlukan, atau semua halaman sekaligus sebagai ZIP.",
      },
      {
        title: "Resolusi kualitas cetak",
        description: "Render hingga 300 dpi untuk teks yang tajam dan siap cetak.",
      },
      {
        title: "JPG atau PNG",
        description: "JPG untuk file kecil, PNG untuk teks dan diagram yang tajam.",
      },
      {
        title: "Dokumen pribadi tetap pribadi",
        description: "PDF dibuka di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Resolusi mana yang sebaiknya saya pilih?",
        answer:
          "150 dpi cocok untuk sebagian besar keperluan, dari berbagi hingga slide. Pilih 300 dpi untuk mencetak atau memperbesar teks kecil, dan 72 dpi untuk file paling kecil. Resolusi yang lebih tinggi butuh waktu lebih lama dan menghasilkan file lebih besar.",
      },
      {
        question: "JPG atau PNG?",
        answer:
          "JPG menghasilkan file yang jauh lebih kecil dan paling cocok untuk halaman berisi foto. PNG menjaga teks dan gambar garis tetap tajam sempurna, tetapi filenya lebih besar.",
      },
      {
        question: "Bisakah saya mengonversi PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa perlindungan, lalu coba salinan itu.",
      },
      {
        question: "Apakah teksnya masih bisa dipilih?",
        answer:
          "Tidak. Setiap halaman menjadi gambar, jadi teksnya tidak bisa dipilih atau dicari. Simpan PDF aslinya jika Anda membutuhkan teksnya.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibaca dan dirender oleh browser Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat Anda.",
      },
    ],
  },
  "pdf-to-png": {
    name: "PDF ke PNG",
    shortName: "PDF → PNG",
    tagline: "Simpan setiap halaman PDF sebagai gambar PNG yang tajam dan lossless, satu per satu atau semuanya dalam ZIP. Konversi berjalan di perangkat Anda.",
    intro: "PDF ke PNG mengubah setiap halaman PDF menjadi gambar PNG. PNG bersifat lossless, jadi teks, garis, dan diagram tetap tajam sempurna, sehingga cocok untuk slide, dokumen, dan grafik yang ingin Anda masukkan ke presentasi, desain, atau halaman web. Pilih resolusinya, lalu unduh halaman satu per satu atau semua halaman sekaligus dalam ZIP. PDF dibuka di browser Anda dan tidak pernah diunggah.",
    seoTitle: "Ubah PDF ke PNG – Halaman Tajam, Gratis",
    seoDescription: "Ubah halaman PDF menjadi gambar PNG yang tajam di browser. Pilih 72, 150, atau 300 dpi, lalu unduh satu halaman atau semuanya. Gratis dan privat.",
    keywords: [
      "pdf ke png",
      "ubah pdf ke png",
      "convert pdf to png",
      "halaman pdf ke gambar",
      "pdf ke png resolusi tinggi",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih file PDF. Halaman-halamannya muncul sebagai thumbnail.",
      },
      {
        title: "Pilih resolusi",
        description: "150 dpi cocok untuk layar. Pakai 300 dpi untuk mencetak atau memperbesar tampilan.",
      },
      {
        title: "Unduh halaman",
        description: "Simpan satu halaman sebagai PNG, atau semua halaman sekaligus dalam ZIP.",
      },
    ],
    features: [
      {
        title: "Teks dan garis tajam",
        description: "PNG bersifat lossless, jadi teks kecil dan garis halus tetap jelas.",
      },
      {
        title: "Pilihan resolusi",
        description: "72, 150, atau 300 dpi, untuk apa saja mulai dari pratinjau web hingga cetak.",
      },
      {
        title: "Semua halaman sekaligus",
        description: "Unduh semua halaman dalam satu ZIP, dengan nama file sesuai urutan halaman.",
      },
      {
        title: "Konversi privat",
        description: "PDF dibuka di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "PNG atau JPG untuk halaman PDF?",
        answer: "PNG menjaga teks dan diagram tetap tajam sempurna. JPG menghasilkan file lebih kecil dan cocok untuk halaman yang sebagian besar berisi foto. Anda bisa beralih ke JPG di alat yang sama.",
      },
      {
        question: "Resolusi mana yang sebaiknya saya pilih?",
        answer: "150 dpi terlihat bagus di layar. 300 dpi untuk mencetak atau saat Anda perlu memperbesar tampilan, dan menghasilkan file yang lebih besar.",
      },
      {
        question: "Bisakah saya mengonversi PDF yang dilindungi kata sandi?",
        answer: "Tidak, jika PDF memerlukan kata sandi untuk dibuka. Buka di pembaca PDF, simpan salinan tanpa kata sandi, lalu pakai salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibaca dan digambar oleh browser Anda, jadi tetap ada di perangkat Anda.",
      },
    ],
  },
  "merge-images": {
    name: "Gabungkan Gambar",
    shortName: "Gabung",
    tagline: "Gabungkan foto berdampingan, bertumpuk, atau dalam grid, dengan jarak dan warna background, lalu simpan sebagai satu gambar.",
    intro:
      "Gabungkan Gambar menyatukan beberapa gambar menjadi satu: berdampingan untuk perbandingan sebelum dan sesudah, bertumpuk untuk screenshot panjang dan panduan langkah demi langkah, atau dalam grid untuk kolase sederhana. Urutkan gambar, pilih jarak di antaranya dan warna background, lalu biarkan alat ini menyamakan tinggi atau lebarnya agar tepiannya sejajar. Simpan hasilnya sebagai JPG, PNG, atau WebP. Semuanya berlangsung di browser Anda, jadi foto Anda tidak pernah diunggah.",
    seoTitle: "Gabungkan Foto Online – Jadi Satu Gambar, Gratis",
    seoDescription:
      "Gabungkan foto berdampingan, bertumpuk, atau dalam grid langsung di browser Anda. Tambahkan jarak dan warna background. Gratis, privat, dan tanpa unggah file.",
    keywords: [
      "gabungkan foto",
      "menggabungkan gambar",
      "gabung foto jadi satu",
      "menyatukan dua foto",
      "membuat kolase foto",
      "gabungkan gambar vertikal",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar Anda",
        description: "Letakkan atau pilih dua atau lebih gambar JPG, PNG, WebP, atau HEIC.",
      },
      {
        title: "Atur urutannya",
        description: "Gunakan tombol naik dan turun untuk mengatur urutan, dan hapus yang tidak Anda perlukan.",
      },
      {
        title: "Pilih tata letak",
        description: "Berdampingan, Bertumpuk, atau Grid dengan jumlah kolom yang Anda mau, ditambah jarak dan background.",
      },
      {
        title: "Unduh",
        description: "Simpan gambar gabungan sebagai JPG, PNG, atau WebP.",
      },
    ],
    features: [
      {
        title: "Tiga tata letak",
        description: "Horizontal untuk perbandingan, vertikal untuk screenshot dan panduan, dan grid untuk kolase.",
      },
      {
        title: "Tepian yang sejajar",
        description: "Samakan tinggi atau lebar secara otomatis, atau biarkan setiap gambar dalam ukuran aslinya.",
      },
      {
        title: "Jarak dan background",
        description: "Atur jarak antargambar dan isi dengan warna apa pun, atau biarkan transparan di PNG dan WebP.",
      },
      {
        title: "Privat",
        description: "Gambar digabungkan di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Berapa banyak gambar yang bisa saya gabungkan?",
        answer:
          "Sebanyak yang Anda mau, selama memori perangkat Anda cukup. Hasil yang sangat besar otomatis diperkecil agar tetap dalam ukuran yang bisa disimpan browser.",
      },
      {
        question: "Apa fungsi Samakan ukuran?",
        answer:
          "Dalam satu baris, setiap gambar diskalakan ke tinggi yang sama; dalam satu kolom, ke lebar yang sama; dalam grid, setiap gambar mengisi sel berukuran sama. Matikan untuk membiarkan setiap gambar dalam ukuran aslinya.",
      },
      {
        question: "Bisakah background-nya transparan?",
        answer:
          "Bisa. Pilih Transparan dan simpan sebagai PNG atau WebP. JPG tidak bisa menyimpan transparansi, jadi warna background yang dipakai.",
      },
      {
        question: "Bagaimana cara membuat gambar sebelum dan sesudah?",
        answer:
          "Tambahkan dua foto, pilih Berdampingan, biarkan Samakan ukuran tetap aktif, lalu tambahkan jarak kecil. Kedua gambar akan memiliki tinggi yang sama.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer:
          "Tidak. Gambar digabungkan oleh browser di perangkat Anda.",
      },
    ],
  },
  "merge-pdf": {
    name: "Gabungkan PDF",
    shortName: "Gabung PDF",
    tagline: "Gabungkan beberapa file PDF menjadi satu, sesuai urutan pilihan Anda. File digabungkan di perangkat Anda.",
    intro:
      "Gabungkan PDF menyatukan dua file PDF atau lebih menjadi satu dokumen. Tambahkan file, susun urutannya dengan tombol pindah, periksa halaman pertama setiap file, lalu unduh satu PDF berisi semua halaman secara berurutan. Ini cara cepat untuk mengirim laporan beserta lampirannya, beberapa halaman hasil scan, atau sekumpulan invoice dalam satu file. Penggabungan dilakukan di browser Anda, jadi dokumen Anda tidak pernah diunggah ke server.",
    seoTitle: "Gabung PDF Online – Gratis, Tanpa Unggah File",
    seoDescription:
      "Gabung PDF jadi satu file langsung di browser Anda. Susun file dalam urutan apa pun, lalu unduh satu PDF. Gratis, privat, tanpa unggah file, tanpa watermark.",
    keywords: [
      "gabung pdf",
      "gabungkan pdf",
      "menggabungkan pdf",
      "gabung pdf online gratis",
      "satukan file pdf",
      "merge pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih dua file PDF atau lebih. Anda bisa menambah file kapan saja.",
      },
      {
        title: "Susun urutannya",
        description: "Gunakan tombol atas dan bawah untuk mengatur file, dan hapus yang tidak Anda perlukan.",
      },
      {
        title: "Unduh",
        description: "Simpan satu PDF yang berisi semua halaman, file demi file.",
      },
    ],
    features: [
      {
        title: "Berapa pun jumlah file",
        description: "Gabungkan PDF sebanyak yang sanggup ditangani perangkat Anda, dengan total halaman yang ditampilkan.",
      },
      {
        title: "Urutan Anda sendiri",
        description: "Atur file dengan tombol yang juga bisa dipakai dari keyboard dan pembaca layar.",
      },
      {
        title: "Halaman tidak berubah",
        description: "Halaman disalin apa adanya tanpa kompresi ulang, jadi teks tetap tajam dan bisa dicari.",
      },
      {
        title: "Privat dan gratis",
        description: "File digabungkan di perangkat Anda, tanpa unggah, tanpa daftar, dan tanpa watermark.",
      },
    ],
    faqs: [
      {
        question: "Apakah ada batas jumlah file yang bisa digabungkan?",
        answer:
          "Tidak ada batas tetap. Puluhan PDF biasa bisa diproses di sebagian besar perangkat; file yang sangat besar mungkin lambat di ponsel lama.",
      },
      {
        question: "Apakah tautan dan bookmark tetap berfungsi?",
        answer:
          "Tautan di halaman tetap dipertahankan. Daftar bookmark (kerangka di panel samping pembaca PDF) tidak disalin ke file gabungan.",
      },
      {
        question: "Apakah penggabungan menurunkan kualitas?",
        answer:
          "Tidak. Halaman disalin apa adanya, jadi teks, gambar, dan grafik vektor terlihat persis sama.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "split-pdf": {
    name: "Pisahkan PDF",
    shortName: "Pisah PDF",
    tagline: "Pisahkan PDF berdasarkan rentang halaman, setiap beberapa halaman, atau per halaman. Berjalan di perangkat Anda.",
    intro:
      "Pisahkan PDF memecah satu PDF menjadi beberapa PDF yang lebih kecil. Ketik rentang halaman seperti 1-3, 5, 8- untuk mendapatkan satu file per rentang, pisahkan setiap beberapa halaman untuk membagi hasil scan yang panjang menjadi bagian yang sama, atau simpan setiap halaman sebagai PDF tersendiri. Alat ini menampilkan daftar file yang akan Anda dapatkan sebelum diunduh, dan beberapa file dikirim bersama dalam satu ZIP. Pemisahan dilakukan di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat.",
    seoTitle: "Pisah PDF Online – Per Halaman atau Rentang, Gratis",
    seoDescription:
      "Pisah PDF menjadi beberapa file berdasarkan rentang halaman, setiap N halaman, atau per halaman, langsung di browser Anda. Gratis, privat, tanpa unggah file.",
    keywords: [
      "pisah pdf",
      "memisahkan pdf",
      "split pdf",
      "pisah halaman pdf",
      "pisah pdf online gratis",
      "memecah pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF. Halaman-halamannya muncul sebagai pratinjau.",
      },
      {
        title: "Pilih cara memisahkan",
        description: "Masukkan rentang halaman, pilih jumlah halaman per file, atau pisahkan setiap halaman.",
      },
      {
        title: "Periksa daftarnya",
        description: "Panel menampilkan setiap file yang akan Anda dapatkan beserta halamannya.",
      },
      {
        title: "Unduh",
        description: "Simpan satu PDF, atau ZIP jika ada beberapa file.",
      },
    ],
    features: [
      {
        title: "Tiga cara memisahkan",
        description: "Rentang khusus, kelompok halaman yang sama banyak, atau satu halaman per file.",
      },
      {
        title: "Lihat sebelum menyimpan",
        description: "Setiap file hasil dan nomor halamannya ditampilkan lebih dulu.",
      },
      {
        title: "Satu unduhan ZIP",
        description: "Beberapa file tiba bersamaan, diberi nama sesuai halamannya.",
      },
      {
        title: "Privat",
        description: "PDF dipisahkan di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara menulis rentang halaman?",
        answer:
          "Pisahkan rentang dengan koma. 1-3 berarti halaman 1 sampai 3, 5 berarti halaman 5 saja, dan 8- berarti halaman 8 sampai akhir. Setiap rentang menjadi PDF tersendiri.",
      },
      {
        question: "Bisakah saya mendapatkan satu PDF berisi beberapa halaman saja?",
        answer:
          "Bisa. Masukkan satu rentang, misalnya 2-4, untuk mengunduh halaman itu saja. Ekstrak Halaman PDF juga memungkinkan Anda memilih halaman dengan mengekliknya.",
      },
      {
        question: "Apakah pemisahan mengubah halaman?",
        answer:
          "Tidak. Halaman disalin apa adanya, jadi teks tetap tajam dan bisa dicari.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "Ekstrak Halaman PDF",
    shortName: "Ekstrak Halaman",
    tagline: "Pilih halaman yang Anda perlukan dari PDF dan simpan sebagai PDF baru. Berjalan di perangkat Anda.",
    intro:
      "Ekstrak Halaman PDF memungkinkan Anda memilih halaman dari PDF lewat pratinjaunya dan menyimpan halaman itu saja sebagai dokumen baru. Ini berguna untuk mengirim satu bab dari laporan panjang, halaman kontrak yang sudah ditandatangani, atau satu rekening koran dari sekumpulan dokumen. Centang halaman yang Anda inginkan, atau gunakan Pilih semua lalu hapus centang beberapa yang tidak perlu, kemudian unduh. File asli tidak diubah, dan semuanya terjadi di browser Anda.",
    seoTitle: "Ekstrak Halaman PDF – Gratis, Tanpa Unggah File",
    seoDescription:
      "Ekstrak halaman PDF dengan memilihnya lewat pratinjau, lalu simpan sebagai PDF baru langsung di browser Anda. Gratis, privat, dan tidak ada file yang diunggah.",
    keywords: [
      "ekstrak halaman pdf",
      "ambil halaman pdf",
      "simpan halaman tertentu pdf",
      "pilih halaman pdf",
      "extract pdf pages",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF untuk melihat semua halamannya.",
      },
      {
        title: "Centang halaman yang Anda inginkan",
        description: "Gunakan kotak centang di bawah setiap halaman, atau Pilih semua lalu hapus centang yang tidak Anda perlukan.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF baru yang hanya berisi halaman itu, dalam urutan aslinya.",
      },
    ],
    features: [
      {
        title: "Pilih lewat pratinjau",
        description: "Lihat setiap halaman sebelum memilih.",
      },
      {
        title: "Ramah keyboard",
        description: "Setiap halaman punya kotak centang berlabel, jadi tidak perlu mouse.",
      },
      {
        title: "Halaman tidak berubah",
        description: "Halaman yang dipilih disalin apa adanya, dengan teks yang tajam dan bisa dicari.",
      },
      {
        title: "Privat",
        description: "Halaman diekstrak di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah PDF asli saya diubah?",
        answer:
          "Tidak. PDF baru dibuat dari halaman yang Anda pilih; file asli tetap seperti semula.",
      },
      {
        question: "Bisakah saya mengubah urutan halaman?",
        answer:
          "Halaman yang diekstrak tetap dalam urutan aslinya. Untuk mengubah urutan, memutar, atau menghapus halaman, gunakan Atur Halaman PDF.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "organize-pdf": {
    name: "Atur Halaman PDF",
    shortName: "Atur PDF",
    tagline: "Ubah urutan, putar, dan hapus halaman PDF, lalu simpan PDF barunya. Berjalan di perangkat Anda.",
    intro:
      "Atur Halaman PDF menampilkan setiap halaman PDF agar Anda bisa merapikannya: pindahkan halaman ke depan atau ke belakang, tegakkan hasil scan yang miring ke samping, dan hapus halaman kosong atau yang tidak diinginkan. Setiap halaman punya tombolnya sendiri, yang juga bisa dipakai dari keyboard, dan dengan mouse Anda bisa menyeret halaman ke tempatnya. Batalkan semua perubahan mengembalikan semuanya seperti semula. Jika sudah pas, unduh PDF barunya. Semua ini terjadi di browser Anda, jadi dokumen tidak pernah diunggah.",
    seoTitle: "Atur Halaman PDF – Ubah Urutan, Putar, Hapus",
    seoDescription:
      "Atur halaman PDF di browser Anda: ubah urutan, putar, dan hapus halaman dengan pratinjau, lalu unduh PDF barunya. Gratis, privat, dan tidak ada yang diunggah.",
    keywords: [
      "atur halaman pdf",
      "ubah urutan halaman pdf",
      "hapus halaman pdf",
      "pindah halaman pdf",
      "susun ulang halaman pdf",
      "menghapus halaman pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF untuk melihat semua halamannya.",
      },
      {
        title: "Atur halamannya",
        description: "Gunakan tombol di bawah setiap halaman untuk memindahkan, memutar, atau menghapusnya, atau seret halaman ke tempatnya.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF yang sudah diatur. Batalkan semua perubahan memulai lagi dari file asli.",
      },
    ],
    features: [
      {
        title: "Pindah, putar, hapus",
        description: "Semua operasi halaman dalam satu tampilan, dengan pratinjau yang langsung diperbarui.",
      },
      {
        title: "Seret atau tombol",
        description: "Seret dengan mouse, atau gunakan tombol yang juga bisa dipakai dengan keyboard dan pembaca layar.",
      },
      {
        title: "Tanpa kehilangan kualitas",
        description: "Halaman hanya disusun ulang, tidak dirender ulang, jadi teks tetap tajam dan bisa dicari.",
      },
      {
        title: "Privat",
        description: "PDF diatur di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah memutar halaman menurunkan kualitas?",
        answer:
          "Tidak. Rotasi disimpan sebagai pengaturan halaman, jadi tidak ada yang digambar ulang atau dikompres.",
      },
      {
        question: "Bisakah saya membatalkan perubahan?",
        answer:
          "Bisa. Batalkan semua perubahan mengembalikan setiap halaman ke posisi dan rotasi aslinya. File asli Anda tidak pernah diubah.",
      },
      {
        question: "Bisakah saya menambahkan halaman dari PDF lain?",
        answer:
          "Gabungkan file dengan Gabungkan PDF terlebih dahulu, lalu atur file gabungannya di sini.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Putar PDF",
    shortName: "Putar PDF",
    tagline: "Putar semua halaman, atau hanya halaman yang Anda pilih, sebesar 90 atau 180 derajat. Berjalan di perangkat Anda.",
    intro:
      "Putar PDF memperbaiki halaman yang terbuka miring ke samping atau terbalik, masalah umum pada dokumen hasil scan dan foto yang disimpan sebagai PDF. Pilih 90 derajat ke kanan, 180 derajat, atau 90 derajat ke kiri, lalu terapkan ke semua halaman atau hanya ke halaman yang Anda centang. Pratinjau menampilkan hasilnya sebelum Anda mengunduh. Rotasi disimpan sebagai pengaturan halaman, jadi teks dan gambar tetap dalam kualitas penuh, dan tidak ada yang keluar dari browser Anda.",
    seoTitle: "Putar PDF Online – Simpan Permanen, Gratis",
    seoDescription:
      "Putar PDF di browser Anda: putar semua halaman atau halaman tertentu sebesar 90 atau 180 derajat, lalu simpan permanen. Gratis, privat, tanpa unggah file.",
    keywords: [
      "putar pdf",
      "memutar pdf",
      "putar halaman pdf",
      "rotate pdf",
      "putar pdf dan simpan",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF untuk melihat halamannya.",
      },
      {
        title: "Pilih rotasinya",
        description: "Pilih 90° kanan, 180°, atau 90° kiri, untuk semua halaman atau halaman yang Anda centang.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF dengan halaman yang diputar secara permanen.",
      },
    ],
    features: [
      {
        title: "Semua halaman atau yang dipilih",
        description: "Perbaiki satu hasil scan yang miring tanpa menyentuh halaman lain.",
      },
      {
        title: "Pratinjau langsung",
        description: "Pratinjau halaman ikut berputar saat Anda memilih, sebelum apa pun disimpan.",
      },
      {
        title: "Tanpa penurunan kualitas",
        description: "Rotasi adalah pengaturan halaman, jadi tidak ada yang digambar ulang.",
      },
      {
        title: "Privat",
        description: "PDF diputar di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah rotasinya tersimpan permanen?",
        answer:
          "Ya. PDF yang diunduh akan terbuka dengan halaman yang sudah diputar di semua pembaca PDF.",
      },
      {
        question: "Bisakah saya memutar halaman dengan sudut berbeda?",
        answer:
          "Gunakan Atur Halaman PDF, di mana setiap halaman punya tombol putarnya sendiri.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "Tambah Nomor Halaman ke PDF",
    shortName: "Nomor Halaman",
    tagline: "Beri nomor pada halaman PDF, dengan posisi, format, dan nomor awal pilihan Anda. Berjalan di perangkat Anda.",
    intro:
      "Tambah Nomor Halaman menaruh nomor di setiap halaman PDF, yang sering dibutuhkan untuk laporan, skripsi, dan handout cetak. Pilih salah satu dari enam posisi di atas atau bawah, format (1, 1 / N, atau – 1 –), nomor awal, ukuran teks, dan jarak dari tepi. Anda juga bisa membiarkan halaman pertama, misalnya sampul, tanpa nomor. Pratinjau menampilkan tampilan nomornya. Nomor ditambahkan di browser Anda, jadi dokumen tidak pernah diunggah.",
    seoTitle: "Tambah Nomor Halaman PDF – Gratis, Tanpa Unggah",
    seoDescription:
      "Tambah nomor halaman PDF langsung di browser Anda: pilih posisi, format, dan nomor awal, serta lewati halaman sampul. Gratis, privat, dan tanpa unggah file.",
    keywords: [
      "nomor halaman pdf",
      "tambah nomor halaman pdf",
      "memberi nomor halaman pdf",
      "cara memberi nomor halaman di pdf",
      "add page number pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF yang ingin diberi nomor.",
      },
      {
        title: "Pilih gayanya",
        description: "Pilih posisi, format, nomor awal, ukuran, dan jarak dari tepi.",
      },
      {
        title: "Lewati sampul jika perlu",
        description: "Centang opsinya agar halaman pertama tidak diberi nomor.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF yang sudah bernomor.",
      },
    ],
    features: [
      {
        title: "Enam posisi",
        description: "Atas atau bawah, di kiri, tengah, atau kanan.",
      },
      {
        title: "Tiga format",
        description: "Angka biasa, gaya “1 / 12”, atau “– 1 –”.",
      },
      {
        title: "Nomor awal bebas",
        description: "Lanjutkan penomoran dari dokumen lain, dan lewati halaman sampul.",
      },
      {
        title: "Privat",
        description: "Nomor ditambahkan di perangkat Anda; tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya mulai dari nomor selain 1?",
        answer:
          "Bisa. Atur Mulai dari ke angka berapa pun, misalnya untuk melanjutkan dari bab sebelumnya.",
      },
      {
        question: "Apakah nomornya akan menutupi konten saya?",
        answer:
          "Nomor ditempatkan di margin halaman. Jika margin halaman Anda sangat kecil, pilih jarak dari tepi yang lebih kecil atau ukuran teks yang lebih kecil.",
      },
      {
        question: "Mengapa nomornya miring ke samping di beberapa halaman?",
        answer:
          "Beberapa PDF menyimpan halaman dalam keadaan diputar. Nomor mengikuti orientasi tersimpan halaman tersebut, jadi di halaman itu nomornya bisa tampak berputar. Perbaiki rotasinya dulu dengan Putar PDF atau Atur Halaman PDF.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "watermark-pdf": {
    name: "Watermark PDF",
    shortName: "Watermark PDF",
    tagline: "Bubuhkan teks atau logo di halaman PDF, lalu seret ke posisinya. Berjalan di perangkat Anda.",
    intro:
      "Watermark PDF menambahkan cap seperti RAHASIA, DRAF, nama Anda, atau logo Anda ke halaman PDF. Ketik teks dalam bahasa apa pun atau pilih gambar logo, lalu atur ukuran, opasitas, dan sudutnya, dan seret ke posisi yang Anda inginkan di pratinjau halaman, atau gunakan slider posisi. Terapkan ke semua halaman atau ke rentang halaman tertentu. Watermark ditambahkan di browser Anda, jadi dokumen tidak pernah diunggah.",
    seoTitle: "Watermark PDF Online – Teks atau Logo, Gratis",
    seoDescription:
      "Tambah watermark PDF berupa teks atau logo di browser Anda. Atur ukuran, opasitas, dan sudut, lalu seret ke posisinya. Gratis, privat, tanpa unggah file.",
    keywords: [
      "watermark pdf",
      "tambah watermark pdf",
      "cara memberi watermark di pdf",
      "watermark pdf online",
      "tambah logo ke pdf",
      "cap pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF yang ingin diberi watermark.",
      },
      {
        title: "Buat watermark",
        description: "Ketik teksnya dan pilih warnanya, atau pilih gambar logo.",
      },
      {
        title: "Tempatkan",
        description: "Atur ukuran, opasitas, dan sudut, lalu seret di pratinjau atau gunakan slider.",
      },
      {
        title: "Unduh",
        description: "Pilih semua halaman atau rentang tertentu, lalu simpan PDF ber-watermark.",
      },
    ],
    features: [
      {
        title: "Teks dalam bahasa apa pun",
        description: "Teks digambar sebagai gambar, jadi semua aksara dan aksen tampil dengan benar.",
      },
      {
        title: "Watermark logo",
        description: "Gunakan logo PNG, JPG, WebP, atau SVG.",
      },
      {
        title: "Seret ke posisinya",
        description: "Pindahkan watermark di pratinjau halaman, atau gunakan slider yang juga bisa dipakai dengan keyboard.",
      },
      {
        title: "Privat",
        description: "Watermark ditambahkan di perangkat Anda; tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah watermark dihapus nanti?",
        answer:
          "Watermark ditambahkan sebagai gambar di atas halaman. Orang yang punya editor PDF masih bisa menghapusnya, jadi watermark lebih untuk mencegah orang menyalin daripada benar-benar menghalanginya.",
      },
      {
        question: "Bisakah saya memberi watermark hanya pada beberapa halaman?",
        answer:
          "Bisa. Pilih Halaman lalu masukkan rentang seperti 1-3, 5.",
      },
      {
        question: "Apakah watermark menutupi teks?",
        answer:
          "Turunkan opasitasnya agar halaman tetap mudah dibaca. 15–30% umum dipakai untuk watermark diagonal.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "sign-pdf": {
    name: "Tanda Tangani PDF",
    shortName: "Tanda Tangan PDF",
    tagline: "Gambar, ketik, atau unggah tanda tangan Anda dan tempatkan di halaman mana pun dalam PDF. Berjalan di perangkat Anda.",
    intro:
      "Tanda Tangani PDF membubuhkan tanda tangan tulisan tangan Anda pada dokumen tanpa perlu mencetak dan memindainya. Gambar tanda tangan dengan mouse, jari, atau stylus, ketik nama Anda, atau gunakan foto tanda tangan Anda, yang latar putihnya bisa dibuat transparan. Lalu pilih halamannya, atur ukurannya, dan seret tanda tangan ke posisinya atau gunakan slider posisi. Tanda tangan ditambahkan di browser Anda, jadi dokumen dan tanda tangan Anda tidak pernah diunggah.",
    seoTitle: "Tanda Tangan PDF Online – Gratis, Tanpa Unggah",
    seoDescription:
      "Tanda tangan PDF langsung di browser Anda: gambar, ketik, atau unggah tanda tangan, lalu tempatkan di halaman mana pun. Gratis, privat, tanpa unggah file.",
    keywords: [
      "tanda tangan pdf",
      "tanda tangan pdf online",
      "cara tanda tangan di pdf",
      "tambah tanda tangan ke pdf",
      "ttd pdf",
      "tanda tangan elektronik pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih dokumen yang akan ditandatangani.",
      },
      {
        title: "Buat tanda tangan Anda",
        description: "Gambar, ketik nama Anda, atau pilih foto tanda tangan Anda.",
      },
      {
        title: "Tempatkan",
        description: "Pilih halaman, atur ukurannya, dan seret tanda tangan ke tempatnya, atau gunakan slider.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF yang sudah ditandatangani.",
      },
    ],
    features: [
      {
        title: "Tiga cara tanda tangan",
        description: "Gambar, ketik, atau unggah, dengan tinta biru atau hitam.",
      },
      {
        title: "Tanda tangan bersih dari foto",
        description: "Latar kertas pada foto tanda tangan bisa dibuat transparan.",
      },
      {
        title: "Penempatan presisi",
        description: "Seret di pratinjau, atau gunakan slider yang juga bisa dipakai dengan keyboard.",
      },
      {
        title: "Privat",
        description: "Dokumen dan tanda tangan Anda tetap di perangkat Anda.",
      },
    ],
    faqs: [
      {
        question: "Apakah ini tanda tangan digital yang sah secara hukum?",
        answer:
          "Alat ini menambahkan gambar tanda tangan Anda, seperti menandatangani di atas kertas. Ini bukan tanda tangan digital tersertifikasi dengan sertifikat. Banyak formulir sehari-hari menerimanya, tetapi kontrak yang mewajibkan tanda tangan elektronik tersertifikasi memerlukan layanan tanda tangan khusus.",
      },
      {
        question: "Bisakah saya menandatangani lebih dari satu halaman?",
        answer:
          "Tandatangani satu halaman, unduh, lalu buka lagi PDF yang sudah ditandatangani dan tempatkan tanda tangan di halaman berikutnya.",
      },
      {
        question: "Apakah tanda tangan saya disimpan di suatu tempat?",
        answer:
          "Tidak. Tanda tangan hanya ada di browser Anda selama halaman terbuka dan di dalam PDF yang Anda unduh.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "Isi Formulir PDF",
    shortName: "Isi Formulir",
    tagline: "Isi kolom formulir PDF dan simpan, dengan opsi dikunci. Berjalan di perangkat Anda.",
    intro:
      "Isi Formulir PDF menemukan kolom yang bisa diisi dalam formulir PDF, seperti kotak teks, kotak centang, dan daftar drop-down, lalu menampilkan masing-masing dengan namanya agar Anda bisa mengisinya dengan cepat. Unduh PDF yang sudah diisi, atau ratakan agar jawaban menjadi bagian dari halaman dan tidak bisa diubah lagi. Ini praktis untuk formulir pendaftaran, formulir pajak, dan dokumen registrasi. Formulir diisi di browser Anda, jadi data pribadi Anda tidak pernah diunggah.",
    seoTitle: "Isi Formulir PDF Online – Gratis dan Privat",
    seoDescription:
      "Isi formulir PDF di browser Anda: kolom teks, kotak centang, dan daftar pilihan. Ratakan formulir untuk mengunci jawaban. Gratis, privat, tanpa unggah file.",
    keywords: [
      "isi formulir pdf",
      "isi pdf online",
      "mengisi pdf",
      "cara mengisi formulir pdf",
      "fill pdf form",
    ],
    howToSteps: [
      {
        title: "Tambahkan formulir PDF Anda",
        description: "Letakkan atau pilih PDF yang memiliki kolom yang bisa diisi.",
      },
      {
        title: "Isi kolomnya",
        description: "Ketik di kolom teks, centang kotak centang, dan pilih dari daftar.",
      },
      {
        title: "Kunci jika perlu",
        description: "Centang Ratakan agar jawaban menjadi bagian dari halaman.",
      },
      {
        title: "Unduh",
        description: "Simpan formulir yang sudah diisi.",
      },
    ],
    features: [
      {
        title: "Semua kolom umum",
        description: "Kotak teks, teks multibaris, kotak centang, tombol radio, dan daftar drop-down.",
      },
      {
        title: "Opsi ratakan",
        description: "Kunci jawaban agar formulir tidak bisa diedit sesudahnya.",
      },
      {
        title: "Kolom yang aksesibel",
        description: "Setiap kolom adalah input berlabel biasa yang bisa dipakai dengan keyboard dan pembaca layar.",
      },
      {
        title: "Privat",
        description: "Jawaban Anda tetap di perangkat Anda; tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Mengapa muncul pesan bahwa PDF saya tidak punya kolom yang bisa diisi?",
        answer:
          "Sebagian formulir hanyalah halaman cetak tanpa kolom formulir sungguhan, dan sebagian lagi memakai format lama (XFA) yang tidak bisa dibaca alat ini. Untuk formulir tanpa kolom, tambahkan tanda tangan dengan Tanda Tangani PDF atau cetak dan isi dengan tangan.",
      },
      {
        question: "Apa fungsi Ratakan?",
        answer:
          "Ratakan mengubah jawaban menjadi konten halaman biasa. Formulir tampak sama, tetapi tidak ada yang bisa mengubah jawaban atau kolomnya.",
      },
      {
        question: "Apakah kolom tanda tangan didukung?",
        answer:
          "Kolom tanda tangan dan tombol dilewati. Gunakan Tanda Tangani PDF untuk menempatkan tanda tangan Anda di halaman.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "Hapus Metadata PDF",
    shortName: "Metadata PDF",
    tagline: "Lihat dan hapus penulis, judul, software, dan tanggal yang tersembunyi dalam PDF. Berjalan di perangkat Anda.",
    intro:
      "File PDF sering membawa detail tersembunyi: nama penulis, judul dokumen, software yang membuatnya, serta kapan file dibuat dan diubah. Hapus Metadata PDF menampilkan apa yang tersimpan di file Anda dan mengunduh salinan tanpa informasi itu, yang berguna sebelum membagikan dokumen ke publik atau mengirim CV. Halamannya sendiri tidak diubah. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat.",
    seoTitle: "Hapus Metadata PDF – Lihat dan Hapus, Gratis",
    seoDescription:
      "Hapus metadata PDF di browser Anda: lihat penulis, judul, software, dan tanggal yang tersembunyi dalam PDF, lalu hapus. Gratis, privat, tanpa unggah file.",
    keywords: [
      "hapus metadata pdf",
      "menghapus metadata pdf",
      "hapus author pdf",
      "lihat metadata pdf",
      "remove pdf metadata",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF untuk melihat informasi yang tersimpan di dalamnya.",
      },
      {
        title: "Tinjau yang ditemukan",
        description: "Daftar menampilkan judul, penulis, software, tanggal, dan metadata XMP.",
      },
      {
        title: "Unduh salinan bersih",
        description: "Simpan salinan dengan informasi tersebut dihapus.",
      },
    ],
    features: [
      {
        title: "Lihat sebelum menghapus",
        description: "Setiap detail yang tersimpan ditampilkan beserta nilainya.",
      },
      {
        title: "Info dokumen dan XMP",
        description: "Kedua tempat PDF menyimpan metadata dibersihkan.",
      },
      {
        title: "Halaman tidak disentuh",
        description: "Teks, gambar, dan tata letak tetap persis sama.",
      },
      {
        title: "Privat",
        description: "PDF dibersihkan di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apa saja yang dihapus?",
        answer:
          "Informasi dokumen (judul, penulis, subjek, kata kunci, software pembuat, producer, dan tanggal) serta stream metadata XMP.",
      },
      {
        question: "Apakah semua data pribadi di PDF ikut terhapus?",
        answer:
          "Tidak. Teks di halaman, komentar, dan detail di dalam gambar yang disematkan (seperti data EXIF foto) tidak diubah. Periksa isinya sendiri sebelum membagikan.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "crop-pdf": {
    name: "Potong PDF",
    shortName: "Potong PDF",
    tagline: "Pangkas margin setiap halaman dalam PDF. Berjalan di perangkat Anda.",
    intro:
      "Potong PDF memangkas tepi setiap halaman, menghilangkan margin putih yang lebar, tepi hasil scanner, atau tanda cetak agar konten memenuhi layar saat dibaca di ponsel. Atur seberapa banyak yang dipangkas dari atas, kanan, bawah, dan kiri, dan pratinjau menunjukkan bagian halaman yang tersisa. Pemotongan disimpan sebagai pengaturan halaman, jadi teks tetap dalam kualitas penuh. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah diunggah.",
    seoTitle: "Potong PDF Online – Pangkas Margin Halaman, Gratis",
    seoDescription:
      "Potong PDF dan pangkas margin halaman di browser Anda dengan pratinjau langsung. Hilangkan tepi putih dan tepi scanner. Gratis, privat, tanpa unggah file.",
    keywords: [
      "potong pdf",
      "crop pdf",
      "pangkas margin pdf",
      "hapus margin pdf",
      "potong halaman pdf",
    ],
    howToSteps: [
      {
        title: "Tambahkan PDF Anda",
        description: "Letakkan atau pilih PDF yang ingin dipotong.",
      },
      {
        title: "Atur marginnya",
        description: "Gunakan slider untuk setiap sisi; pratinjau menunjukkan bagian yang tersisa.",
      },
      {
        title: "Unduh",
        description: "Simpan PDF dengan setiap halaman yang sudah dipotong.",
      },
    ],
    features: [
      {
        title: "Kontrol empat sisi",
        description: "Pangkas atas, kanan, bawah, dan kiri secara terpisah.",
      },
      {
        title: "Pratinjau langsung",
        description: "Area yang dipangkas diberi bayangan di halaman pertama.",
      },
      {
        title: "Tanpa penurunan kualitas",
        description: "Halaman tidak digambar ulang, jadi teks tetap tajam dan bisa dicari.",
      },
      {
        title: "Privat",
        description: "PDF dipotong di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah memotong membuat file lebih kecil?",
        answer:
          "Tidak. Area yang dipangkas disembunyikan, bukan dihapus, jadi ukuran file kurang lebih sama. Editor PDF masih bisa menampilkan area yang tersembunyi.",
      },
      {
        question: "Bisakah saya memotong halaman secara berbeda?",
        answer:
          "Margin yang sama diterapkan ke setiap halaman. Untuk memotong halaman secara berbeda, pisahkan PDF, potong setiap bagian, lalu gabungkan lagi.",
      },
      {
        question: "Bisakah saya memakai PDF yang dilindungi kata sandi?",
        answer:
          "Belum bisa. Jika PDF memerlukan kata sandi untuk dibuka, alat ini akan memberi tahu Anda. Buka PDF di pembaca PDF dengan kata sandinya, simpan salinan tanpa kata sandi, lalu gunakan salinan itu.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer:
          "Tidak. PDF dibuka dan diubah oleh browser di perangkat Anda, jadi kontrak, rekening koran, dan dokumen pribadi lainnya tidak pernah meninggalkan perangkat.",
      },
    ],
  },
  "edit-pdf": {
    name: "Edit PDF",
    shortName: "Edit PDF",
    tagline: "Tambahkan teks, gambar, sorotan, gambar bebas, bentuk, dan link ke PDF, atau tutupi dan sensor sebagian isinya. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Edit PDF membuka dokumen Anda halaman demi halaman dan memungkinkan Anda menambahkan isinya: ketik teks dengan ukuran dan warna apa pun, letakkan logo atau stempel, sorot atau garis bawahi baris, buat gambar bebas, tambahkan kotak, lingkaran, dan panah, serta jadikan area tertentu membuka situs web. Kotak Putih menutupi bagian yang tidak ingin Anda tampilkan, dan Sensor menghapus data pribadi dari file secara permanen. Pindahkan, ubah ukuran, dan hapus apa yang Anda tambahkan, urungkan langkah mana pun, lalu unduh PDF yang sudah diedit. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Edit PDF Online – Editor PDF Gratis, Tanpa Unggah",
    seoDescription:
      "Edit PDF di browser: tambahkan teks, gambar, sorotan, gambar bebas, bentuk, dan link, tutupi atau sensor. Gratis, tanpa daftar, tidak ada yang diunggah.",
    keywords: [
      "edit pdf",
      "edit pdf online gratis",
      "cara edit pdf",
      "editor pdf",
      "menambahkan tulisan di pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF. Halamannya terbuka di editor.",
      },
      {
        title: "Tambahkan yang Anda perlukan",
        description:
          "Pilih alat, lalu ketuk atau seret di halaman. Pindahkan, ubah ukuran, atau hapus apa pun yang Anda tambahkan.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan yang sudah diedit. File asli Anda tidak diubah.",
      },
    ],
    features: [
      {
        title: "Semua dalam satu editor",
        description:
          "Teks, gambar, sorotan, gambar bebas, bentuk, link, Kotak Putih, dan Sensor ada di editor yang sama, jadi Anda bisa menggabungkannya.",
      },
      {
        title: "Urungkan dan ulangi",
        description:
          "Pindahkan, ubah ukuran, atau hapus apa pun yang Anda tambahkan, dan urungkan langkah jika Anda berubah pikiran.",
      },
      {
        title: "Sensor sungguhan",
        description: "Area yang disensor dihapus dari file, bukan sekadar ditutupi.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya mengubah teks yang sudah ada di PDF?",
        answer:
          "Tidak secara langsung. Tutupi teks itu dengan Kotak Putih, lalu ketik teks baru di atasnya. Teks lama tetap ada di dalam file di bawahnya, jadi gunakan Sensor untuk apa pun yang bersifat pribadi.",
      },
      {
        question: "Apakah teks yang saya tambahkan bisa dicari?",
        answer:
          "Ya. Teks yang Anda ketik adalah teks PDF asli, jadi bisa dipilih, dicari, dan disalin, kecuali di halaman yang Anda sensor.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "add-text-to-pdf": {
    name: "Tambah Teks ke PDF",
    shortName: "Tambah Teks",
    tagline: "Ketik teks di mana saja pada halaman PDF, dengan font, ukuran, dan warna pilihan Anda. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Tambah Teks ke PDF memungkinkan Anda menulis di dokumen tanpa mencetaknya: isi formulir yang tidak punya kolom, tambahkan catatan, tanggal, atau alamat, atau beri label pada gambar. Ketuk tempat teks akan dimulai, ketik teksnya, lalu pilih font, ukuran, warna, dan huruf tebal. Seret teks untuk merapikan posisinya, dan tambahkan teks sebanyak yang Anda perlukan di halaman mana pun. Teks yang Anda tambahkan adalah teks PDF asli, jadi tetap tajam dan bisa dicari. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Tambah Teks ke PDF – Gratis, Ketik di PDF Mana Pun",
    seoDescription:
      "Ketik teks di mana saja pada PDF di browser Anda. Pilih font, ukuran, dan warna, letakkan dengan tepat, lalu unduh. Gratis dan privat, tanpa unggah file.",
    keywords: [
      "menulis di pdf",
      "tambah teks di pdf",
      "cara mengetik di pdf",
      "menambahkan tulisan di pdf",
      "isi pdf online",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Ketuk tempat teks akan diletakkan",
        description: "Ketik di kotak, lalu pilih font, ukuran, dan warna. Seret teks ke posisinya.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan dengan teks yang sudah ditambahkan.",
      },
    ],
    features: [
      {
        title: "Font, ukuran, dan warna pilihan Anda",
        description:
          "Sans-serif, serif, atau monospace bergaya mesin ketik, dari 6 sampai 72 pt, tebal atau biasa, dengan warna apa pun.",
      },
      {
        title: "Banyak bahasa",
        description: "Teks Latin, Yunani, Sirilik, Jepang, dan Korea semuanya bisa ditulis.",
      },
      {
        title: "Teks tajam dan bisa dicari",
        description: "Teksnya adalah teks PDF asli, bukan gambar teks.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya mengisi formulir yang tidak punya kolom?",
        answer:
          "Bisa. Ketuk setiap baris kosong lalu ketik. Untuk PDF yang punya kolom formulir sungguhan, Isi Formulir PDF lebih cepat.",
      },
      {
        question: "Bisakah saya mengubah teks yang sudah ada di PDF?",
        answer:
          "Tidak secara langsung. Tutupi teks itu dengan Kotak Putih, lalu ketik teks baru di atasnya. Teks lama tetap ada di dalam file di bawahnya, jadi gunakan Sensor untuk apa pun yang bersifat pribadi.",
      },
      {
        question: "Bisakah saya menulis di beberapa halaman?",
        answer:
          "Bisa. Pindah halaman dengan tombol panah di atas halaman; tambahan Anda di setiap halaman tetap tersimpan.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "add-image-to-pdf": {
    name: "Tambah Gambar ke PDF",
    shortName: "Tambah Gambar",
    tagline: "Letakkan logo, foto, atau gambar stempel di halaman mana pun dalam PDF dan atur ukurannya. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Tambah Gambar ke PDF menempatkan gambar di halaman dokumen Anda: logo perusahaan di surat, stempel atau cap di sertifikat, foto di formulir, atau tanda tangan hasil scan. Ketuk tempat gambar akan diletakkan dan pilih gambar dari perangkat Anda. Seret gambar ke posisinya dan tarik sudutnya untuk mengubah ukuran; proporsinya tetap terjaga. Gambar JPG, PNG transparan, WebP, GIF, TIFF, dan HEIC dari iPhone semuanya bisa dipakai. Semuanya terjadi di browser Anda, jadi PDF maupun gambar tidak diunggah.",
    seoTitle: "Tambah Gambar ke PDF – Sisipkan Logo atau Foto, Gratis",
    seoDescription:
      "Sisipkan logo, foto, atau stempel ke PDF di browser Anda. Seret untuk menempatkan, ubah ukuran, lalu unduh. JPG, PNG, HEIC. Gratis, tanpa unggah file.",
    keywords: [
      "tambah gambar ke pdf",
      "menyisipkan gambar di pdf",
      "tambah logo di pdf",
      "cara memasukkan foto ke pdf",
      "tempel stempel di pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF, lalu buka halaman yang Anda inginkan.",
      },
      {
        title: "Tambahkan gambar",
        description:
          "Ketuk halaman di tempat gambar akan diletakkan, lalu pilih gambar. Seret dan ubah ukurannya dari sudut.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan dengan gambar yang sudah ditambahkan.",
      },
    ],
    features: [
      {
        title: "Transparansi tetap terjaga",
        description: "Logo PNG dengan background transparan tetap transparan di halaman.",
      },
      {
        title: "Format gambar apa pun",
        description: "Gambar JPG, PNG, WebP, GIF, TIFF, dan HEIC dari iPhone bisa ditempatkan.",
      },
      {
        title: "Proporsi tetap terjaga",
        description: "Saat diubah ukurannya, bentuk gambar tetap sama, jadi tidak pernah terlihat melar.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah gambarnya akan terlihat tajam?",
        answer:
          "Gambar ditempatkan dengan lebar hingga 2.000 piksel, yang tetap tajam saat dicetak dengan ukuran normal.",
      },
      {
        question: "Bisakah saya memasang logo yang sama di setiap halaman?",
        answer:
          "Untuk mengulang logo di setiap halaman, Watermark PDF bisa melakukannya dalam satu langkah. Di sini Anda menempatkan gambar satu per satu.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "highlight-pdf": {
    name: "Sorot PDF",
    shortName: "Sorot",
    tagline: "Sorot, garis bawahi, atau coret teks di PDF. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Sorot PDF memungkinkan Anda menandai dokumen seperti dengan pena: seret di atas baris untuk menyorotnya dengan warna kuning, hijau, merah muda, atau biru, menggarisbawahinya, atau mencoretnya. Alat ini berguna untuk belajar, memeriksa kontrak, atau menunjukkan kepada orang lain bagian mana yang penting. Tanda bisa dipindahkan, diubah ukurannya, dan dihapus, dan Anda bisa mengurungkan langkah mana pun. Sorotan bersifat tembus pandang, jadi teks di bawahnya tetap terbaca. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Sorot PDF Online – Stabilo PDF Gratis",
    seoDescription:
      "Sorot, garis bawahi, atau coret teks di PDF lewat browser Anda. Empat warna stabilo, bisa diurungkan, tanpa daftar. Tidak ada yang diunggah.",
    keywords: [
      "highlight pdf",
      "stabilo pdf",
      "cara highlight pdf",
      "menandai teks di pdf",
      "garis bawah pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Seret di atas teks",
        description: "Pilih sorotan, garis bawah, atau coret beserta warnanya, lalu seret di atas baris.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan yang sudah ditandai.",
      },
    ],
    features: [
      {
        title: "Warna stabilo",
        description: "Kuning, hijau, merah muda, dan biru, atau warna apa pun pilihan Anda.",
      },
      {
        title: "Garis bawah dan coret",
        description: "Tandai perubahan atau koreksi, juga poin-poin penting.",
      },
      {
        title: "Teks tetap terbaca",
        description: "Sorotan tembus pandang, seperti stabilo sungguhan.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah sorotan otomatis menempel pada teks?",
        answer:
          "Tidak. Sorotan menutupi area yang Anda seret, jadi seret di sepanjang baris yang ingin ditandai. Setelah itu Anda bisa mengubah ukurannya dari sudut.",
      },
      {
        question: "Bisakah saya menghapus sorotan?",
        answer: "Bisa. Pilih sorotan lalu tekan Hapus, atau gunakan Urungkan.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "draw-on-pdf": {
    name: "Menggambar di PDF",
    shortName: "Menggambar di PDF",
    tagline: "Gambar bebas di halaman PDF dengan jari, mouse, atau stylus. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Menggambar di PDF mengubah halaman menjadi lembaran yang bisa Anda tulisi. Lingkari detail pada denah, buat sketsa ide, centang kotak, tambahkan catatan tulisan tangan atau paraf. Pilih warna dan ketebalan, lalu menggambar dengan jari di ponsel atau tablet, dengan stylus, atau dengan mouse. Setiap goresan bisa dipindahkan atau dihapus, dan Anda bisa mengurungkan langkah sebanyak yang diperlukan. Gambar disimpan sebagai garis yang tajam, bukan gambar yang buram. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Menggambar di PDF – Coretan Tangan Bebas, Gratis",
    seoDescription:
      "Menggambar di halaman PDF lewat browser dengan jari, mouse, atau stylus. Pilih warna dan ketebalan, urungkan, lalu unduh. Gratis, tanpa unggah file.",
    keywords: [
      "menggambar di pdf",
      "coret pdf",
      "tulis tangan di pdf",
      "corat-coret pdf online",
      "anotasi pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Menggambar di halaman",
        description: "Pilih warna dan ketebalan, lalu menggambar dengan jari, stylus, atau mouse.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan dengan gambar Anda.",
      },
    ],
    features: [
      {
        title: "Jari, stylus, atau mouse",
        description: "Menggambar bisa dengan sentuhan, stylus, maupun mouse.",
      },
      {
        title: "Garis tajam",
        description: "Goresan disimpan sebagai garis vektor yang tetap tajam saat diperbesar.",
      },
      {
        title: "Urungkan dan ulangi",
        description:
          "Pindahkan, ubah ukuran, atau hapus apa pun yang Anda tambahkan, dan urungkan langkah jika Anda berubah pikiran.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya menandatangani dengan ini?",
        answer:
          "Bisa, tetapi Tanda Tangani PDF membuat tanda tangan yang lebih rapi, yang bisa Anda ketik, gambar, atau unggah lalu tempatkan dengan tepat.",
      },
      {
        question: "Bisakah saya menghapus sebagian goresan?",
        answer: "Setiap goresan adalah satu kesatuan: pilih lalu hapus, atau urungkan, kemudian gambar lagi.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "add-shapes-to-pdf": {
    name: "Tambah Bentuk ke PDF",
    shortName: "Tambah Bentuk",
    tagline: "Tambahkan persegi panjang, lingkaran, garis, dan panah ke PDF untuk menunjukkan sesuatu. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Tambah Bentuk ke PDF membantu Anda menandai denah, screenshot, formulir, dan laporan: buat kotak di sekitar angka total, lingkari kesalahan, atau tambahkan panah yang menunjuk bagian yang perlu diperhatikan. Pilih persegi panjang, elips, garis, atau panah, warna, dan ketebalan garis, lalu seret di halaman. Persegi panjang dan elips bisa berupa garis tepi saja atau diisi penuh. Bentuk bisa dipindahkan, diubah ukurannya, dan dihapus kapan saja. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Tambah Bentuk ke PDF – Kotak, Lingkaran, Panah, Gratis",
    seoDescription:
      "Tambahkan persegi panjang, lingkaran, garis, dan panah ke PDF di browser Anda. Pilih warna dan ketebalan, pindahkan dan ubah ukuran. Gratis, tanpa unggah.",
    keywords: [
      "tambah bentuk di pdf",
      "membuat panah di pdf",
      "membuat kotak di pdf",
      "lingkari teks di pdf",
      "markup pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Gambar bentuknya",
        description: "Pilih persegi panjang, elips, garis, atau panah, lalu seret di halaman.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan yang sudah ditandai.",
      },
    ],
    features: [
      {
        title: "Empat bentuk",
        description: "Persegi panjang, elips, garis, dan panah.",
      },
      {
        title: "Garis tepi atau isi penuh",
        description: "Buat garis tepi kotak atau isi dengan warna solid.",
      },
      {
        title: "Tajam di ukuran apa pun",
        description: "Bentuk disimpan sebagai grafik vektor.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya mengubah bentuk setelah menggambarnya?",
        answer:
          "Bisa. Pilih bentuk untuk memindahkannya, mengubah ukurannya dari sudut, atau mengganti warna dan ketebalannya.",
      },
      {
        question: "Bisakah saya menutupi teks dengan bentuk?",
        answer:
          "Persegi panjang yang diisi penuh menutupi apa yang ada di bawahnya, tetapi kontennya tetap ada di dalam file. Gunakan Sensor untuk menghapus informasi pribadi.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "add-links-to-pdf": {
    name: "Tambah Link ke PDF",
    shortName: "Tambah Link",
    tagline: "Jadikan area mana pun di halaman PDF bisa membuka situs web atau email. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Tambah Link ke PDF membuat dokumen Anda bisa diklik: ubah alamat web yang tercetak di brosur menjadi link sungguhan, tautkan logo ke situs web Anda, atau buat alamat email membuka pesan baru. Seret di atas teks atau area yang harus bisa diklik, lalu ketik alamatnya. Link berfungsi di semua pembaca PDF, di komputer maupun HP. Tampilan halaman tetap sama; garis putus-putus yang Anda lihat saat mengedit tidak disimpan. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Tambah Link ke PDF – Buat Teks PDF Bisa Diklik, Gratis",
    seoDescription:
      "Tambahkan link web dan email yang bisa diklik ke area mana pun di PDF, langsung di browser. Berfungsi di semua pembaca PDF. Gratis, privat, tanpa unggah.",
    keywords: [
      "tambah link di pdf",
      "cara membuat link di pdf",
      "hyperlink pdf",
      "menyisipkan link di pdf",
      "link pdf bisa diklik",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Seret di atas area yang bisa diklik",
        description: "Lalu ketik alamat web, misalnya example.com, atau alamat email.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan dengan link yang berfungsi.",
      },
    ],
    features: [
      {
        title: "Link web dan email",
        description: "Link membuka situs web, atau email baru ke alamat yang Anda masukkan.",
      },
      {
        title: "Tidak terlihat di halaman",
        description: "Halaman tampak tidak berubah; hanya areanya yang menjadi bisa diklik.",
      },
      {
        title: "Berfungsi di semua pembaca",
        description: "Link PDF standar terbuka di Acrobat, browser, Preview, dan aplikasi di HP.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah saya perlu mengetik https://?",
        answer: "Tidak. Ketik example.com dan https:// akan ditambahkan. Alamat email menjadi link mailto.",
      },
      {
        question: "Bisakah link mengarah ke halaman lain di PDF?",
        answer: "Belum bisa. Link di sini membuka situs web dan alamat email.",
      },
      {
        question: "Mengapa link tidak berfungsi di penampil saya?",
        answer:
          "Beberapa penampil gambar dan pratinjau di aplikasi chat tidak membuka link PDF. Buka file di pembaca PDF atau browser.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "whiteout-pdf": {
    name: "Kotak Putih PDF",
    shortName: "Kotak Putih",
    tagline: "Tutupi bagian halaman PDF dengan kotak putih, lalu ketik di atasnya jika perlu. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Kotak Putih PDF bekerja seperti pita koreksi: seret di atas tanggal yang salah, harga lama, atau baris yang tidak ingin Anda tampilkan, dan kotak putih akan menutupinya. Tambahkan teks baru di atasnya dengan alat Teks untuk membuat koreksi. Jika halamannya tidak putih, pilih warna yang sesuai. Kotak Putih hanya menutupi konten; teks aslinya tetap ada di dalam file dan masih bisa disalin atau ditemukan lewat pencarian. Untuk menghapus informasi pribadi secara permanen, gunakan Sensor PDF. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Kotak Putih PDF – Pita Koreksi untuk PDF, Gratis",
    seoDescription:
      "Tutupi bagian PDF dengan kotak putih dan ketik koreksi di atasnya, langsung di browser Anda. Gratis, tanpa daftar, tidak ada yang diunggah.",
    keywords: [
      "whiteout pdf",
      "tutupi tulisan di pdf",
      "hapus tulisan di pdf",
      "tipe-x pdf online",
      "menutup teks pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Seret di atas bagian yang ingin ditutupi",
        description: "Kotak putih akan menutupinya. Tambahkan teks baru di atasnya dengan alat Teks jika perlu.",
      },
      {
        title: "Unduh PDF",
        description: "Simpan salinan yang sudah dikoreksi.",
      },
    ],
    features: [
      {
        title: "Ketik di atasnya",
        description: "Gabungkan Kotak Putih dengan teks untuk mengoreksi tanggal, nama, atau angka.",
      },
      {
        title: "Sesuaikan dengan latar",
        description: "Pilih warna apa pun untuk halaman yang tidak putih.",
      },
      {
        title: "Pindahkan dan ubah ukuran",
        description: "Atur setiap kotak sampai menutupi tepat bagian yang Anda inginkan.",
      },
      {
        title: "Edit secara privat",
        description: "PDF diedit di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah teks yang ditutupi benar-benar hilang?",
        answer:
          "Tidak. Kotak Putih menyembunyikannya, tetapi teks itu tetap ada di dalam file, dan bisa disalin atau ditemukan lewat pencarian. Gunakan Sensor PDF untuk menghapusnya.",
      },
      {
        question: "Bisakah saya mengganti satu kata di PDF?",
        answer: "Tutupi kata itu dengan Kotak Putih, lalu ketik kata baru di atasnya dengan alat Teks.",
      },
      {
        question: "Apakah bisa dipakai di HP?",
        answer: "Bisa. Ketuk dan seret dengan jari Anda; untuk menggambar, gunakan jari atau stylus.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "redact-pdf": {
    name: "Sensor PDF",
    shortName: "Sensor PDF",
    tagline: "Hitamkan informasi pribadi di PDF dan hapus dari file secara permanen. Gratis dan berjalan di perangkat Anda.",
    intro:
      "Sensor PDF menyembunyikan nama, nomor rekening, alamat, dan data pribadi lainnya sebelum Anda membagikan dokumen, dan benar-benar menghapusnya. Seret kotak hitam di atas bagian yang harus dihilangkan. Saat Anda mengunduh, setiap halaman yang disensor diubah menjadi gambar dengan kotak hitam yang menyatu, jadi teks di bawahnya hilang dari file: teks itu tidak bisa disalin, dicari, atau dipulihkan dengan menghapus kotaknya. Isian formulir dan komentar di halaman tersebut juga dihapus. Halaman tanpa sensor tetap seperti semula. Semuanya terjadi di browser Anda, jadi dokumen tidak pernah diunggah.",
    seoTitle: "Sensor PDF – Hapus Teks Pribadi Secara Permanen, Gratis",
    seoDescription:
      "Hitamkan dan hapus permanen informasi pribadi dari PDF, langsung di browser Anda. Sensor sungguhan, bukan sekadar ditutupi. Gratis, tanpa unggah file.",
    keywords: [
      "sensor pdf",
      "redact pdf",
      "hitamkan teks di pdf",
      "sembunyikan data pribadi di pdf",
      "hapus informasi sensitif pdf",
    ],
    howToSteps: [
      {
        title: "Buka PDF Anda",
        description: "Letakkan atau pilih PDF.",
      },
      {
        title: "Seret di atas informasi pribadi",
        description: "Tutupi setiap nama, nomor, atau baris yang harus dihilangkan dengan kotak hitam.",
      },
      {
        title: "Unduh PDF yang sudah disensor",
        description: "Periksa hasilnya, lalu bagikan salinan yang sudah disensor, bukan file aslinya.",
      },
    ],
    features: [
      {
        title: "Benar-benar dihapus",
        description: "Teks yang ditutupi dihapus dari file, bukan disembunyikan di bawah kotak.",
      },
      {
        title: "Isian formulir dan komentar juga",
        description: "Kolom yang sudah diisi dan komentar di halaman yang disensor juga dihapus.",
      },
      {
        title: "Halaman lain tidak tersentuh",
        description: "Hanya halaman yang disensor yang diubah menjadi gambar.",
      },
      {
        title: "Tidak ada yang diunggah",
        description: "Dokumen pribadi disensor di perangkat Anda; tidak ada orang lain yang melihatnya.",
      },
    ],
    faqs: [
      {
        question: "Mengapa saya tidak bisa lagi memilih teks di halaman yang disensor?",
        answer:
          "Agar teks yang tersembunyi benar-benar terhapus, seluruh halaman disimpan sebagai gambar. Teks di halaman lain tetap bisa dipilih.",
      },
      {
        question: "Apakah kotak hitam di editor PDF biasa sama saja?",
        answer:
          "Tidak. Kotak biasa hanya menutupi teks, yang masih bisa disalin atau ditemukan lewat pencarian. Alat ini menghapusnya.",
      },
      {
        question: "Apakah ada hal lain yang dihapus?",
        answer:
          "Di halaman yang disensor, kolom formulir, komentar, dan link juga dihapus, dan tag aksesibilitas dokumen dibuang karena bisa mengulang teks halaman. Judul dan nama penulis tetap ada; Hapus Metadata PDF bisa menghapusnya.",
      },
      {
        question: "Apakah PDF saya diunggah?",
        answer: "Tidak. PDF dibuka dan disimpan di browser Anda, jadi tetap berada di perangkat Anda.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Pembuat Pas Foto",
    shortName: "Pas Foto",
    tagline: "Buat foto paspor atau visa dengan ukuran yang tepat, dengan background polos jika perlu, dan cetak beberapa foto dalam satu lembar.",
    intro:
      "Pembuat Pas Foto mengubah foto biasa menjadi foto paspor, visa, atau kartu identitas dengan ukuran persis yang Anda butuhkan: 35 × 45 mm, 2 × 2 in, 33 × 48 mm, atau ukuran kustom. Geser dan zoom foto sampai puncak kepala dan dagu berada di garis panduan, ganti background dengan putih, abu-abu muda, atau biru muda polos jika perlu, lalu unduh satu foto beresolusi 300 DPI atau lembar cetak untuk kertas foto 4 × 6 in atau A4, lengkap dengan garis potong. Semuanya terjadi di browser Anda, jadi foto Anda tidak pernah diunggah.",
    seoTitle: "Pas Foto Online – Ukuran 35×45 mm & 2×2 in, Gratis",
    seoDescription:
      "Pas foto online untuk paspor dan visa: 35×45 mm, 2×2 in, atau ukuran kustom, background putih, dan lembar cetak 4×6 atau A4. Gratis, privat, tanpa unggah file.",
    keywords: [
      "pas foto online",
      "pembuat pas foto",
      "foto paspor online",
      "ukuran pas foto 35x45",
      "ganti background pas foto",
      "foto visa online",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto",
        description: "Pilih foto yang jelas, menghadap ke depan, dengan cahaya merata dan ekspresi netral.",
      },
      {
        title: "Pilih ukurannya",
        description: "Pilih 35 × 45 mm, 2 × 2 in, 33 × 48 mm, atau masukkan ukuran kustom.",
      },
      {
        title: "Sejajarkan",
        description: "Seret atau gunakan slider agar puncak kepala dan dagu berada di garis putus-putus.",
      },
      {
        title: "Atur background",
        description: "Biarkan apa adanya, atau ganti dengan putih, abu-abu muda, atau biru muda.",
      },
      {
        title: "Unduh",
        description: "Simpan satu foto, atau lembar cetak untuk kertas 4 × 6 in atau A4, sebagai JPG atau PDF.",
      },
    ],
    features: [
      {
        title: "Ukuran umum tersedia",
        description: "35 × 45 mm, 2 × 2 in, dan 33 × 48 mm, ditambah ukuran kustom apa pun dalam milimeter.",
      },
      {
        title: "Panduan kepala",
        description: "Garis putus-putus dan oval menunjukkan di mana kepala harus berada.",
      },
      {
        title: "Background polos",
        description: "Model AI di perangkat Anda mengganti background dengan putih, abu-abu muda, atau biru muda.",
      },
      {
        title: "Lembar cetak",
        description: "Isi kertas foto 4 × 6 in atau A4 dengan beberapa salinan dan garis potong, pada 300 DPI.",
      },
    ],
    faqs: [
      {
        question: "Apakah foto saya akan diterima?",
        answer:
          "Itu tergantung pada instansi tempat Anda mengajukan permohonan. Setiap negara menetapkan aturan untuk ukuran, posisi kepala, background, ekspresi, dan kacamata. Alat ini membuat ukuran dan tata letaknya tepat; periksa aturan resminya sebelum mencetak.",
      },
      {
        question: "Bagaimana cara mencetak lembar dengan ukuran yang tepat?",
        answer:
          "Cetak pada 100% (ukuran sebenarnya), bukan “sesuaikan dengan halaman”. Opsi PDF memakai ukuran kertas yang persis, jadi foto tercetak dengan ukuran sebenarnya di printer apa pun.",
      },
      {
        question: "Berapa resolusi fotonya?",
        answer:
          "300 DPI, standar untuk cetak foto. Foto 35 × 45 mm berukuran 413 × 531 piksel.",
      },
      {
        question: "Bagaimana cara kerja penggantian background?",
        answer:
          "Model AI diunduh sekali (sekitar 16 MB) dan berjalan di browser Anda untuk memisahkan Anda dari background. Periksa tepi di sekitar rambut sebelum mencetak.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Foto diproses di browser pada perangkat Anda, dan tidak ada yang dikirim ke server.",
      },
    ],
  },
  "signature-extractor": {
    name: "Ekstrak Tanda Tangan",
    shortName: "TTD PNG",
    tagline: "Ubah foto tanda tangan Anda menjadi PNG bersih dengan background transparan.",
    intro:
      "Ekstrak Tanda Tangan mengambil foto atau hasil scan tanda tangan Anda di atas kertas dan mengubahnya menjadi gambar bersih yang hanya berisi tinta di atas background transparan. Alat ini mengabaikan bayangan dan cahaya tidak merata dari foto ponsel, memangkas ruang kosong di sekitar tanda tangan, dan bisa mengubah warna tinta menjadi hitam atau biru. Gunakan PNG-nya di Tanda Tangani PDF, di Word, atau di formulir apa pun yang meminta gambar tanda tangan. Foto diproses di browser Anda, jadi tanda tangan Anda tidak pernah diunggah.",
    seoTitle: "Tanda Tangan Transparan – Ubah Foto TTD ke PNG",
    seoDescription:
      "Ubah foto tanda tangan menjadi PNG transparan di browser Anda. Hapus kertas dan bayangan, pangkas, dan ganti warna tinta. Gratis, privat, tanpa unggah file.",
    keywords: [
      "tanda tangan transparan",
      "hapus background tanda tangan",
      "ttd png",
      "membuat tanda tangan png",
      "tanda tangan digital dari foto",
    ],
    howToSteps: [
      {
        title: "Tanda tangani kertas putih",
        description: "Gunakan pena gelap dan ambil foto di tempat yang terang, atau scan halamannya.",
      },
      {
        title: "Tambahkan foto",
        description: "Letakkan atau pilih fotonya. Tanda tangan langsung diekstrak.",
      },
      {
        title: "Sesuaikan",
        description: "Atur sensitivitas dan pilih tinta asli, hitam, atau biru.",
      },
      {
        title: "Unduh",
        description: "Simpan PNG transparannya.",
      },
    ],
    features: [
      {
        title: "Mengatasi bayangan",
        description: "Setiap titik dibandingkan dengan kertas di sekitarnya, jadi cahaya tidak merata tidak meninggalkan bercak abu-abu.",
      },
      {
        title: "Tepi halus",
        description: "Tepi goresan memudar dengan lembut, tidak terlihat bergerigi.",
      },
      {
        title: "Pangkas otomatis",
        description: "Kertas kosong di sekitar tanda tangan dipangkas.",
      },
      {
        title: "Privat",
        description: "Tanda tangan Anda tetap di perangkat Anda.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mendapatkan hasil terbaik?",
        answer:
          "Tanda tangani kertas putih polos dengan pena gelap, lalu foto lurus dari depan di siang hari tanpa bayangan Anda menutupi halaman.",
      },
      {
        question: "Mengapa sebagian tanda tangan saya hilang?",
        answer:
          "Goresan yang samar atau tipis bisa hilang. Naikkan sensitivitas; jika tekstur kertas mulai muncul, turunkan sedikit.",
      },
      {
        question: "Bisakah saya memakainya untuk menandatangani PDF?",
        answer:
          "Bisa. Di Tanda Tangani PDF, pilih Foto lalu pilih PNG yang Anda unduh.",
      },
      {
        question: "Apakah tanda tangan saya diunggah?",
        answer:
          "Tidak. Tanda tangan diproses di browser Anda dan tidak pernah dikirim ke mana pun.",
      },
    ],
  },
  "change-image-dpi": {
    name: "Ubah DPI Gambar",
    shortName: "Ubah DPI",
    tagline: "Atur DPI JPG atau PNG, misalnya 300 DPI untuk cetak atau formulir, tanpa mengubah pikselnya.",
    intro:
      "Ubah DPI Gambar mengatur nilai resolusi yang tersimpan di file JPG atau PNG, misalnya 300 DPI untuk cetak atau nilai yang diminta formulir pendaftaran. Pikselnya tidak disentuh, jadi kualitas dan ukuran file tetap sama: hanya ukuran cetak yang berubah, dan alat ini menampilkannya dalam sentimeter dan inci. Alat ini memperbarui kedua tempat penyimpanan DPI di JPG, jadi Windows, Mac, dan aplikasi foto semuanya membaca nilai baru. Semuanya berjalan di browser Anda, jadi gambar tidak pernah diunggah.",
    seoTitle: "Ubah DPI Gambar ke 300 Online – Gratis",
    seoDescription:
      "Ubah DPI JPG atau PNG ke 300, 200, 72, atau nilai apa pun di browser Anda. Piksel tetap sama; lihat ukuran cetaknya. Gratis, privat, tanpa unggah file.",
    keywords: [
      "ubah dpi gambar",
      "ubah dpi foto",
      "convert foto ke 300 dpi",
      "cara mengubah dpi gambar",
      "ubah dpi jpg",
      "dpi converter online",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar",
        description: "Letakkan atau pilih JPG atau PNG. WebP dan HEIC dikonversi ke JPG terlebih dahulu.",
      },
      {
        title: "Pilih DPI",
        description: "Pilih 72, 96, 150, 200, 300, atau 600, atau ketik nilai apa pun.",
      },
      {
        title: "Periksa ukuran cetak",
        description: "Lihat seberapa besar gambar akan tercetak pada DPI tersebut.",
      },
      {
        title: "Unduh",
        description: "Simpan gambar dengan DPI baru.",
      },
    ],
    features: [
      {
        title: "Tanpa penurunan kualitas",
        description: "Hanya nilai DPI yang diubah; data gambar tidak disentuh.",
      },
      {
        title: "Terbaca di mana saja",
        description: "Resolusi JFIF dan EXIF pada JPG sama-sama diperbarui, jadi setiap aplikasi menampilkan DPI yang sama.",
      },
      {
        title: "Ukuran cetak ditampilkan",
        description: "Lihat ukuran cetak dalam sentimeter dan inci sebelum Anda mengunduh.",
      },
      {
        title: "Privat",
        description: "Gambar diubah di browser Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah mengubah DPI meningkatkan kualitas?",
        answer:
          "Tidak. DPI hanyalah label yang memberi tahu printer seberapa besar gambar dicetak. Untuk mendapatkan detail lebih banyak, Anda butuh piksel lebih banyak, dan tidak ada alat yang benar-benar bisa menciptakannya.",
      },
      {
        question: "Formulir meminta 200 DPI dan ukuran dalam sentimeter. Apa yang harus saya lakukan?",
        answer:
          "Atur DPI di sini, lalu periksa ukuran cetaknya. Jika belum sesuai, ubah ukuran gambar ke ukuran piksel yang diminta formulir: sentimeter ÷ 2,54 × DPI. Misalnya 3,5 cm pada 200 DPI adalah 276 piksel.",
      },
      {
        question: "Mengapa gambar saya tertulis “Belum diatur”?",
        answer:
          "Banyak foto ponsel dan screenshot tidak menyimpan DPI. Kebanyakan aplikasi lalu menganggapnya 72 atau 96. Mengatur nilainya di sini akan memperbaikinya.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer:
          "Tidak. Perubahan terjadi di browser pada perangkat Anda.",
      },
    ],
  },
  "blur-background": {
    name: "Blur Background",
    shortName: "Blur Background",
    tagline: "Blur background foto seperti kamera mode potret, dengan orangnya tetap tajam. Berjalan di perangkat Anda.",
    intro:
      "Blur Background memberi foto apa pun background lembut yang tidak fokus, seperti hasil kamera mode potret. Model AI menemukan orang di foto langsung di perangkat Anda, lalu background di-blur sementara subjeknya tetap tajam, tanpa lingkaran kabur (halo) di sekitar tepinya. Slider mengatur seberapa kuat blur-nya, dan Anda menyimpan hasilnya sebagai JPG atau PNG. Tidak ada yang diunggah: foto dan modelnya tetap berada di browser Anda.",
    seoTitle: "Blur Background Foto Online – Efek Potret Gratis",
    seoDescription:
      "Blur background foto online dan biarkan orangnya tetap tajam, seperti mode potret. Kekuatan blur bisa diatur, berjalan di browser Anda, gratis dan privat.",
    keywords: [
      "blur background foto",
      "blur background online",
      "cara blur background foto",
      "efek bokeh online",
      "mode potret online",
      "bikin background blur",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto",
        description: "Letakkan, pilih, atau tempel foto seseorang. Foto HEIC iPhone juga bisa.",
      },
      {
        title: "Tunggu subjek ditemukan",
        description: "Model AI menemukan orang di foto langsung di perangkat Anda. Saat pertama kali, sekitar 16 MB akan diunduh.",
      },
      {
        title: "Atur blur",
        description: "Geser slider sampai background terlihat pas.",
      },
      {
        title: "Unduh",
        description: "Simpan foto sebagai JPG, atau PNG untuk kualitas terbaik.",
      },
    ],
    features: [
      {
        title: "Tampilan mode potret",
        description: "Background menjadi lembut sementara orangnya tetap tajam.",
      },
      {
        title: "Tanpa halo",
        description: "Area di belakang subjek diisi dari background di sekitarnya sebelum di-blur, jadi tepinya tetap bersih.",
      },
      {
        title: "Bisa diatur",
        description: "Pilih mulai dari sedikit lebih lembut hingga blur yang kuat.",
      },
      {
        title: "Privat",
        description: "Foto diproses di browser Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa untuk foto tanpa orang?",
        answer:
          "Alat ini dibuat untuk foto orang. Hewan peliharaan dan benda sering kali berhasil, tetapi modelnya bisa melewatkan sebagian bagiannya; untuk foto seperti itu, periksa tepinya sebelum Anda menyimpan.",
      },
      {
        question: "Mengapa foto pertama lebih lambat?",
        answer:
          "Model AI diunduh sekali (sekitar 16 MB) dan tetap tersimpan di browser Anda. Setelah itu, foto diproses dalam beberapa detik.",
      },
      {
        question: "Apakah kualitas foto saya akan turun?",
        answer:
          "Orangnya tetap dalam resolusi penuh. Foto yang sangat besar (lebih dari sekitar 16 megapiksel) diperkecil terlebih dahulu agar bisa diproses di ponsel; halaman akan memberi tahu Anda jika itu terjadi.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Pencarian subjek dan proses blur sama-sama terjadi di perangkat Anda.",
      },
    ],
  },
  "change-background": {
    name: "Ganti Background",
    shortName: "Ganti Background",
    tagline: "Ganti background foto dengan warna atau gambar lain. Subjeknya dipotong di perangkat Anda.",
    intro:
      "Ganti Background menukar background foto dengan warna polos atau gambar pilihan Anda. Model AI memotong orang di foto langsung di perangkat Anda, lalu menempatkannya di atas background baru yang diskalakan untuk memenuhi bingkai. Pilih putih untuk tampilan produk atau foto profil yang bersih, warna apa pun dari pemilih warna, atau gambar background Anda sendiri, lalu unduh sebagai JPG atau PNG. Foto tidak pernah diunggah.",
    seoTitle: "Ganti Background Foto Online – Warna atau Gambar, Gratis",
    seoDescription:
      "Ganti background foto jadi putih, warna apa pun, atau gambar Anda sendiri. Subjek dipotong di browser Anda. Gratis, privat, tanpa perlu daftar akun.",
    keywords: [
      "ganti background foto",
      "ganti background foto online",
      "ubah background foto",
      "background putih foto",
      "edit background foto",
      "ganti latar belakang foto",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto",
        description: "Letakkan, pilih, atau tempel foto. Foto HEIC iPhone juga bisa.",
      },
      {
        title: "Tunggu hasil potongan",
        description: "Model AI memisahkan subjek di perangkat Anda. Saat pertama kali, sekitar 16 MB akan diunduh.",
      },
      {
        title: "Pilih background",
        description: "Pilih warna, atau gunakan gambar sebagai background baru.",
      },
      {
        title: "Unduh",
        description: "Simpan foto sebagai JPG atau PNG.",
      },
    ],
    features: [
      {
        title: "Warna atau gambar",
        description: "Warna siap pakai, pemilih warna, atau gambar apa pun milik Anda.",
      },
      {
        title: "Memenuhi bingkai",
        description: "Gambar background diskalakan dan diletakkan di tengah agar menutupi seluruh foto.",
      },
      {
        title: "Resolusi penuh",
        description: "Hasilnya tetap seukuran foto Anda.",
      },
      {
        title: "Privat",
        description: "Semuanya terjadi di browser Anda; tidak ada yang diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya mendapatkan background transparan saja?",
        answer:
          "Bisa: gunakan Hapus Background, yang menyimpan PNG tanpa background sama sekali.",
      },
      {
        question: "Apakah bisa untuk produk dan hewan peliharaan?",
        answer:
          "Hasil terbaiknya pada foto orang. Untuk produk, hewan peliharaan, dan benda, model “Kualitas terbaik” di Hapus Background memberi tepi yang lebih bersih; setelah itu Anda bisa menambahkan background di editor mana pun.",
      },
      {
        question: "Mengapa foto pertama lebih lambat?",
        answer:
          "Model AI diunduh sekali (sekitar 16 MB) dan tetap tersimpan di browser Anda, jadi foto berikutnya hanya butuh beberapa detik.",
      },
      {
        question: "Apakah foto saya diunggah?",
        answer:
          "Tidak. Potongan subjek dan background baru dibuat di perangkat Anda.",
      },
    ],
  },
  "image-to-text": {
    name: "Gambar ke Teks",
    shortName: "Gambar ke Teks",
    tagline: "Salin teks dari foto, screenshot, atau hasil scan (OCR) dalam 10 bahasa. Gambar dibaca di perangkat Anda.",
    intro:
      "Gambar ke Teks membaca kata-kata di foto, screenshot, atau halaman hasil scan dan memberikannya sebagai teks yang bisa Anda salin, edit, atau simpan sebagai file TXT. Alat ini memakai Tesseract OCR yang berjalan di browser Anda, dengan bahasa Inggris, Spanyol, Prancis, Jerman, Portugis, Italia, Jepang, Korea, Indonesia, dan Turki. Bilah progres menunjukkan sejauh mana prosesnya, dan jika gambar terlalu buram untuk hasil yang andal, halaman akan memberi tahu Anda. Gambar tidak pernah diunggah.",
    seoTitle: "Gambar ke Teks – OCR Online Gratis",
    seoDescription:
      "Gambar ke teks dengan OCR gratis: ambil teks dari gambar, screenshot, dan hasil scan dalam 10 bahasa. Salin atau unduh teksnya. Tidak ada yang diunggah.",
    keywords: [
      "gambar ke teks",
      "ocr online",
      "foto jadi teks",
      "ambil teks dari gambar",
      "convert gambar ke teks",
      "screenshot ke teks",
    ],
    howToSteps: [
      {
        title: "Tambahkan gambar",
        description: "Letakkan, pilih, atau tempel foto, screenshot, atau hasil scan yang berisi teks.",
      },
      {
        title: "Periksa bahasanya",
        description: "Bahasa halaman dipilih otomatis; ubah jika teksnya dalam bahasa lain.",
      },
      {
        title: "Tunggu teksnya",
        description: "Teks muncul setelah selesai dibaca. Anda bisa memperbaikinya langsung di kotak.",
      },
      {
        title: "Salin atau unduh",
        description: "Salin teksnya, atau simpan sebagai file TXT.",
      },
    ],
    features: [
      {
        title: "10 bahasa",
        description: "Termasuk Jepang dan Korea. Setiap bahasa mengunduh 1 hingga 4 MB sekali saja.",
      },
      {
        title: "Hasil bisa diedit",
        description: "Perbaiki kata apa pun di kotak sebelum Anda menyalin atau menyimpannya.",
      },
      {
        title: "Jujur soal kualitas",
        description: "Peringatan muncul jika gambar terlalu buram atau kecil untuk dibaca dengan andal.",
      },
      {
        title: "Privat",
        description: "Gambar dibaca di browser Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa membaca tulisan tangan?",
        answer:
          "Tidak dengan andal. Alat ini dibuat untuk teks cetak seperti dokumen, screenshot, papan tanda, dan label. Tulisan tangan yang rapi kadang berhasil, tetapi bersiaplah menemukan kesalahan.",
      },
      {
        question: "Bagaimana cara mendapatkan hasil terbaik?",
        answer:
          "Gunakan foto yang tajam dan terang, diambil lurus dari depan, dengan teks tampak besar di bingkai. Screenshot terbaca hampir sempurna.",
      },
      {
        question: "Apakah bisa membaca PDF?",
        answer:
          "Ubah halamannya menjadi gambar dulu dengan PDF ke JPG, lalu tambahkan gambar itu di sini.",
      },
      {
        question: "Apakah gambar saya diunggah?",
        answer:
          "Tidak. Teks dibaca di perangkat Anda; gambar dan teksnya tidak pernah keluar dari browser Anda.",
      },
    ],
  },
  "qr-code-generator": {
    name: "Buat QR Code",
    shortName: "Buat QR Code",
    tagline: "Buat QR code untuk link, teks, jaringan Wi-Fi, email, nomor telepon, atau kontak, dengan warna dan logo Anda, sebagai PNG atau SVG.",
    intro:
      "Buat QR Code membuat QR code untuk link web, teks biasa, login Wi-Fi, email, nomor telepon, atau kartu kontak. Pilih warna, ukuran, dan koreksi kesalahan, tambahkan logo Anda di tengah, lalu unduh sebagai gambar PNG atau file SVG yang tetap tajam di ukuran berapa pun. Setiap kode diperiksa dengan membacanya kembali, jadi Anda tahu kode itu bisa dipindai sebelum dicetak. Kode dibuat di browser Anda, gratis, tanpa daftar akun, dan tidak pernah kedaluwarsa.",
    seoTitle: "Buat QR Code Gratis – Logo, Warna, PNG & SVG",
    seoDescription:
      "Buat QR code untuk link, Wi-Fi, email, telepon, atau kontak, dengan warna dan logo Anda. Unduh PNG atau SVG. Gratis, tanpa daftar, tidak pernah kedaluwarsa.",
    keywords: [
      "buat qr code",
      "buat qr code gratis",
      "qr code generator",
      "qr code dengan logo",
      "qr code wifi",
      "cara membuat qr code",
    ],
    howToSteps: [
      {
        title: "Pilih isinya",
        description: "Pilih link, teks, Wi-Fi, email, telepon, atau kontak.",
      },
      {
        title: "Isi detailnya",
        description: "QR code diperbarui saat Anda mengetik.",
      },
      {
        title: "Atur tampilannya",
        description: "Atur warna dan ukuran, dan tambahkan logo jika mau.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG, atau SVG untuk cetak dan ukuran besar.",
      },
    ],
    features: [
      {
        title: "Diperiksa sebelum disimpan",
        description: "Kode dibaca kembali secara otomatis, dan Anda diperingatkan jika kode mungkin tidak bisa dipindai.",
      },
      {
        title: "Logo dan warna",
        description: "Tambahkan logo Anda; koreksi kesalahan terkuat dipakai agar kode tetap terbaca.",
      },
      {
        title: "PNG dan SVG",
        description: "SVG tetap tajam di ukuran berapa pun, ideal untuk cetak.",
      },
      {
        title: "Tidak pernah kedaluwarsa",
        description: "Informasinya disimpan di dalam kode itu sendiri, bukan di server, jadi kode berfungsi selamanya.",
      },
    ],
    faqs: [
      {
        question: "Apakah QR code ini bisa kedaluwarsa?",
        answer:
          "Tidak. Ini kode statis: semuanya disimpan di dalam polanya sendiri, tanpa pengalihan lewat server kami, jadi kode terus berfungsi selamanya.",
      },
      {
        question: "Bisakah saya melacak pemindaian atau mengubah link nanti?",
        answer:
          "Tidak. Itu butuh kode dinamis yang mengirim setiap pemindaian lewat server, dan alat ini tidak melakukannya. Sisi baiknya, tidak ada yang bisa melihat siapa yang memindai kode Anda.",
      },
      {
        question: "Bagaimana cara kerja kode Wi-Fi?",
        answer:
          "Ponsel yang memindainya akan menawarkan untuk bergabung ke jaringan dengan nama dan kata sandi yang Anda masukkan. Kata sandi disimpan di dalam kode, jadi bagikan hanya kepada orang yang memang boleh mengetahuinya.",
      },
      {
        question: "Koreksi kesalahan mana yang sebaiknya saya pilih?",
        answer:
          "M cocok untuk sebagian besar keperluan. H lebih tahan kerusakan dan otomatis dipakai jika ada logo; L menghasilkan kode terkecil untuk teks panjang.",
      },
      {
        question: "Apakah yang saya ketik dikirim ke suatu tempat?",
        answer:
          "Tidak. Kode dibuat di browser Anda.",
      },
    ],
  },
  "qr-code-reader": {
    name: "Scan QR Code",
    shortName: "Scan QR",
    tagline: "Baca QR code dari gambar atau kamera, dan lihat link, kata sandi Wi-Fi, atau kontak di dalamnya sebelum Anda membukanya.",
    intro:
      "Scan QR Code membaca QR code dari foto, screenshot, atau kamera Anda. Alat ini menampilkan isi kode sebelum terjadi apa pun: alamat web lengkap, jaringan Wi-Fi dan kata sandinya, email, nomor telepon, atau kartu kontak yang bisa Anda simpan. Link tidak pernah terbuka dengan sendirinya, jadi Anda bisa memeriksanya terlebih dahulu. Ini kebiasaan yang berguna, karena QR code sering dipakai untuk mengarahkan orang ke situs palsu. Gambar dan frame kamera dibaca di perangkat Anda.",
    seoTitle: "Scan QR Code Online – dari Gambar atau Kamera",
    seoDescription:
      "Scan QR code dari gambar, screenshot, atau kamera di browser Anda. Lihat link, kata sandi Wi-Fi, atau kontak sebelum membukanya. Gratis dan privat.",
    keywords: [
      "scan qr code dari gambar",
      "scan qr code online",
      "qr code reader",
      "baca qr code",
      "cara scan qr code di laptop",
      "scan qr code dari screenshot",
    ],
    howToSteps: [
      {
        title: "Tambahkan kodenya",
        description: "Letakkan atau pilih gambar berisi QR code, atau pindai dengan kamera Anda.",
      },
      {
        title: "Lihat isinya",
        description: "Link, detail Wi-Fi, email, nomor telepon, dan kontak ditampilkan dengan jelas.",
      },
      {
        title: "Periksa sebelum membuka",
        description: "Baca alamat lengkapnya sebelum Anda membuka link.",
      },
      {
        title: "Gunakan",
        description: "Salin teksnya, buka link, telepon, kirim email, atau simpan kontak.",
      },
    ],
    features: [
      {
        title: "Gambar atau kamera",
        description: "Baca kode di screenshot dan foto, atau arahkan kamera Anda ke kode.",
      },
      {
        title: "Aman secara bawaan",
        description: "Link tidak pernah terbuka otomatis; Anda melihat alamat lengkapnya terlebih dahulu.",
      },
      {
        title: "Wi-Fi dan kontak",
        description: "Menampilkan kata sandi jaringan dan memungkinkan Anda menyimpan kartu kontak.",
      },
      {
        title: "Privat",
        description: "Gambar dan frame kamera diproses di browser Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara memindai QR code yang ada di layar saya sendiri?",
        answer:
          "Ambil screenshot dan tambahkan di sini; Anda tidak perlu perangkat kedua.",
      },
      {
        question: "Mengapa saya harus memeriksa link terlebih dahulu?",
        answer:
          "QR code di poster, mesin parkir, dan email kadang ditukar dengan kode yang mengarah ke situs palsu. Pastikan alamatnya sesuai dengan yang Anda harapkan sebelum membukanya atau memasukkan data apa pun.",
      },
      {
        question: "Kamera tidak menyala. Apa yang bisa saya lakukan?",
        answer:
          "Izinkan akses kamera untuk situs ini di pengaturan browser Anda, atau foto kodenya lalu tambahkan gambarnya.",
      },
      {
        question: "Apakah gambar atau kamera saya dikirim ke suatu tempat?",
        answer:
          "Tidak. Semuanya dibaca di perangkat Anda.",
      },
    ],
  },
  "barcode-generator": {
    name: "Buat Barcode",
    shortName: "Buat Barcode",
    tagline: "Buat barcode Code 128, EAN, UPC, ISBN, Code 39, ITF-14, GS1-128, Data Matrix, PDF417, dan Aztec dalam PNG atau SVG. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Buat Barcode membuat barcode yang benar-benar dicetak orang: Code 128 untuk label pengiriman dan inventaris, EAN dan UPC untuk produk, ISBN untuk buku, Code 39 untuk suku cadang dan tanda pengenal, ITF-14 untuk karton, GS1-128 untuk logistik, serta kode 2D Data Matrix, PDF417, dan Aztec. Ketik angka atau teks, dan barcode langsung muncul. Digit periksa ditambahkan otomatis dan kesalahan ditunjukkan saat Anda mengetik. Setiap barcode dibaca ulang dengan mesin pemindai sebelum Anda mengunduhnya sebagai PNG atau SVG. Semuanya berlangsung di browser Anda.",
    seoTitle: "Buat Barcode Online Gratis – PNG dan SVG, Tanpa Daftar",
    seoDescription:
      "Buat barcode Code 128, EAN-13, UPC, ISBN, Code 39, Data Matrix, PDF417 di browser. Digit periksa ditambahkan, sudah diuji pindai, PNG atau SVG.",
    keywords: [
      "buat barcode",
      "buat barcode online gratis",
      "barcode generator",
      "cara membuat barcode",
      "generator barcode code 128",
    ],
    howToSteps: [
      {
        title: "Pilih jenis barcode",
        description: "Code 128 cocok untuk sebagian besar label; pilih EAN atau UPC untuk produk dan ISBN untuk buku.",
      },
      {
        title: "Ketik angka atau teks",
        description: "Barcode muncul saat Anda mengetik. Masalah, seperti digit periksa yang salah, dijelaskan.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG, atau SVG untuk dicetak.",
      },
    ],
    features: [
      {
        title: "Diperiksa saat mengetik",
        description: "Panjang yang salah, huruf di kode khusus angka, dan digit periksa yang salah ditunjukkan sebelum Anda mengunduh.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
      {
        title: "Dibuat di perangkat Anda",
        description: "Kode digambar di browser Anda; apa pun yang Anda ketik tidak diunggah.",
      },
    ],
    faqs: [
      {
        question: "Jenis barcode mana yang sebaiknya saya pakai?",
        answer:
          "Untuk label, inventaris, atau pengiriman Anda sendiri, Code 128: bisa memuat huruf dan angka, dan semua pemindai bisa membacanya. Untuk produk yang dijual di toko, EAN-13 (atau UPC-A di Amerika Utara). Untuk buku, ISBN.",
      },
      {
        question: "Apakah saya perlu mendaftarkan nomornya?",
        answer:
          "Untuk menjual produk di toko, ya: nomor EAN dan UPC berasal dari GS1, organisasi yang mengelola sistem ini. Untuk stok, rak, atau keperluan internal Anda sendiri, nomor apa pun bisa dipakai.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "ean-barcode-generator": {
    name: "Buat Barcode EAN",
    shortName: "Barcode EAN",
    tagline: "Buat barcode produk EAN-13 dan EAN-8 dengan digit periksa yang ditambahkan otomatis. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "EAN-13 adalah barcode pada produk di toko di seluruh dunia, dan EAN-8 adalah versi pendeknya untuk kemasan kecil. Ketik 12 digit pertama (atau 7 untuk EAN-8), lalu digit periksa dihitung dan ditambahkan; jika Anda mengetik ke-13 digitnya, alat ini memastikan digit terakhir sudah benar. Barcode digambar sesuai standar, dengan angka di bawahnya, lalu dibaca ulang dengan mesin pemindai sebelum Anda menyimpannya sebagai PNG atau SVG. Tidak ada yang diunggah.",
    seoTitle: "Buat Barcode EAN-13 Gratis – Digit Periksa Otomatis",
    seoDescription:
      "Buat barcode EAN-13 dan EAN-8 di browser. Digit periksa dihitung otomatis, sudah diuji pindai, PNG atau SVG untuk dicetak. Gratis, tidak ada yang diunggah.",
    keywords: [
      "buat barcode ean 13",
      "barcode ean-13",
      "generator barcode ean",
      "barcode ean-8",
      "buat barcode produk",
    ],
    howToSteps: [
      {
        title: "Ketik nomor EAN",
        description: "12 digit untuk EAN-13 atau 7 untuk EAN-8; digit periksa ditambahkan. Ganti jenisnya di daftar.",
      },
      {
        title: "Atur ukuran",
        description: "Atur lebar dan tinggi batang sesuai label Anda.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG, atau SVG untuk desain kemasan.",
      },
    ],
    features: [
      {
        title: "Digit periksa dihitung",
        description: "Kosongkan digit terakhir dan digit itu dihitung; ketik digit itu dan digit itu diperiksa.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
      {
        title: "Dibuat di perangkat Anda",
        description: "Kode digambar di browser Anda; apa pun yang Anda ketik tidak diunggah.",
      },
    ],
    faqs: [
      {
        question: "Apakah saya perlu mendaftarkan nomornya?",
        answer:
          "Untuk menjual produk di toko, ya: nomor EAN dan UPC berasal dari GS1, organisasi yang mengelola sistem ini. Untuk stok, rak, atau keperluan internal Anda sendiri, nomor apa pun bisa dipakai.",
      },
      {
        question: "Apa bedanya EAN-13 dan UPC-A?",
        answer:
          "Keduanya satu sistem: nomor UPC-A adalah EAN-13 dengan angka 0 di depan. Toko di seluruh dunia bisa membaca keduanya. Gunakan UPC-A jika peritel Anda memintanya; jika tidak, EAN-13.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "upc-barcode-generator": {
    name: "Buat Barcode UPC",
    shortName: "Barcode UPC",
    tagline: "Buat barcode produk UPC-A dan UPC-E untuk Amerika Serikat dan Kanada, dengan digit periksa ditambahkan. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "UPC-A adalah barcode 12 digit pada produk yang dijual di Amerika Serikat dan Kanada, dan UPC-E adalah bentuk ringkasnya untuk barang kecil seperti kaleng dan kosmetik. Ketik 11 digit pertama UPC-A dan digit periksa ditambahkan; ketik ke-12 digitnya dan digit itu diperiksa. UPC-E memakai 6 digit, atau 7 sampai 8 digit yang diawali 0 atau 1. Setiap barcode digambar sesuai standar, dibaca ulang dengan mesin pemindai, dan disimpan sebagai PNG atau SVG. Semuanya berlangsung di browser Anda.",
    seoTitle: "Buat Barcode UPC – UPC-A dan UPC-E, Gratis",
    seoDescription:
      "Buat barcode UPC-A dan UPC-E di browser dengan digit periksa ditambahkan. Sudah diuji pindai, PNG atau SVG untuk kemasan. Gratis, tidak ada yang diunggah.",
    keywords: [
      "buat barcode upc",
      "generator upc-a",
      "barcode upc",
      "barcode upc-e",
      "buat kode upc gratis",
    ],
    howToSteps: [
      {
        title: "Ketik nomor UPC",
        description: "11 digit untuk UPC-A, atau nomor UPC-E; pilih jenisnya di daftar.",
      },
      {
        title: "Atur ukuran",
        description: "Atur lebar dan tinggi batang agar pas dengan kemasan Anda.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG, atau SVG untuk dicetak.",
      },
    ],
    features: [
      {
        title: "Digit periksa dihitung",
        description: "Digit terakhir dihitung atau dikonfirmasi untuk Anda.",
      },
      {
        title: "UPC-E untuk barang kecil",
        description: "Buat versi pendek UPC-E untuk kaleng, tube, dan kotak kecil.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
    ],
    faqs: [
      {
        question: "Apakah saya perlu mendaftarkan nomornya?",
        answer:
          "Untuk menjual produk di toko, ya: nomor EAN dan UPC berasal dari GS1, organisasi yang mengelola sistem ini. Untuk stok, rak, atau keperluan internal Anda sendiri, nomor apa pun bisa dipakai.",
      },
      {
        question: "Kapan sebaiknya memakai UPC-E?",
        answer:
          "Hanya jika kemasan terlalu kecil untuk UPC-A dan nomor Anda bisa diringkas; nomor UPC-E diawali 0 atau 1.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "isbn-barcode-generator": {
    name: "Buat Barcode ISBN",
    shortName: "Barcode ISBN",
    tagline: "Buat barcode untuk sampul belakang buku dari ISBN-13 atau ISBN-10. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Barcode di sampul belakang buku adalah ISBN buku tersebut yang ditulis sebagai EAN-13. Ketik ISBN-13 Anda, atau ISBN-10 lama yang akan dikonversi otomatis, dan barcode muncul dengan digit periksa yang sudah diverifikasi. Ketik ISBN beserta tanda hubungnya, seperti yang tercetak di halaman hak cipta, maka baris ISBN dicetak di atas batang sesuai yang diharapkan penerbit dan toko buku. Unduh sebagai SVG untuk desainer sampul Anda, atau PNG. Semuanya berlangsung di browser Anda.",
    seoTitle: "Buat Barcode ISBN Gratis – Barcode Buku, SVG",
    seoDescription:
      "Buat barcode ISBN untuk sampul buku Anda di browser. ISBN-13 atau ISBN-10, digit periksa diverifikasi, SVG untuk dicetak. Gratis, tidak ada yang diunggah.",
    keywords: [
      "buat barcode isbn",
      "barcode buku",
      "barcode isbn",
      "isbn ke barcode",
      "barcode isbn gratis",
    ],
    howToSteps: [
      {
        title: "Ketik ISBN",
        description: "Gunakan tanda hubung dari halaman hak cipta untuk mencetak baris ISBN di atas batang.",
      },
      {
        title: "Periksa pratinjau",
        description: "Digit periksa diverifikasi dan barcode diuji pindai.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai SVG untuk desainer sampul Anda, atau PNG.",
      },
    ],
    features: [
      {
        title: "ISBN-10 dikonversi",
        description: "ISBN-10 lama diubah menjadi ISBN-13 yang dibutuhkan barcode.",
      },
      {
        title: "Baris ISBN di atas batang",
        description: "Dengan tanda hubung, ISBN yang mudah dibaca dicetak di atas barcode.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
    ],
    faqs: [
      {
        question: "Di mana saya bisa mendapatkan ISBN?",
        answer:
          "Dari lembaga ISBN di negara Anda, atau melalui penerbit atau platform self-publishing Anda. Alat ini menggambar barcode untuk ISBN yang sudah Anda miliki.",
      },
      {
        question: "Bisakah saya menambahkan harga (barcode kecil di sebelah kanan)?",
        answer:
          "Belum. Add-on harga 5 digit yang dipakai di Amerika Serikat belum tersedia.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "data-matrix-generator": {
    name: "Buat Data Matrix",
    shortName: "Data Matrix",
    tagline: "Buat kode Data Matrix untuk suku cadang, label, dan kemasan dari teks atau link. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Data Matrix adalah kode 2D persegi kecil yang memuat banyak informasi dalam ruang yang sangat sempit, itulah sebabnya kode ini dipakai pada komponen elektronik, kemasan obat, sampel laboratorium, dan label pengiriman. Ketik teks, nomor seri, atau link, dan kode langsung muncul, dengan ukuran sesuai lebar modul yang Anda pilih. Kamera ponsel dan pemindai industri bisa membacanya, dan setiap kode dibaca ulang sebelum Anda mengunduhnya sebagai PNG atau SVG. Semuanya berlangsung di browser Anda.",
    seoTitle: "Buat Data Matrix Gratis – Kode 2D, PNG dan SVG",
    seoDescription:
      "Buat kode Data Matrix dari teks, nomor seri, atau link di browser. Sudah diuji pindai, PNG atau SVG, ukuran berapa pun. Gratis, tidak ada yang diunggah.",
    keywords: [
      "data matrix generator",
      "buat data matrix",
      "kode data matrix",
      "barcode 2d generator",
      "datamatrix online",
    ],
    howToSteps: [
      {
        title: "Ketik isinya",
        description: "Teks, nomor seri, atau link.",
      },
      {
        title: "Pilih ukuran",
        description: "Atur lebar modul; Data Matrix tetap terbaca meski dicetak sangat kecil.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG.",
      },
    ],
    features: [
      {
        title: "Muat di ruang sempit",
        description: "Memuat jauh lebih banyak daripada barcode 1D dalam persegi kecil.",
      },
      {
        title: "Bahasa apa pun",
        description: "Teks dalam bahasa apa pun disimpan agar pemindai membacanya kembali dengan benar.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
    ],
    faqs: [
      {
        question: "Data Matrix atau QR code?",
        answer:
          "Keduanya kode persegi. Data Matrix tetap terbaca di ukuran lebih kecil dan menjadi standar pada suku cadang dan obat; QR code adalah yang diharapkan kebanyakan ponsel untuk link.",
      },
      {
        question: "Apakah ponsel bisa membaca Data Matrix?",
        answer:
          "Banyak aplikasi pemindai di ponsel bisa, begitu juga Google Lens. Aplikasi kamera bawaan di sebagian ponsel hanya membaca QR code.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "pdf417-generator": {
    name: "Buat Barcode PDF417",
    shortName: "PDF417",
    tagline: "Buat barcode PDF417, kode bertumpuk yang dipakai di tiket, kartu identitas, dan dokumen pengiriman. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "PDF417 adalah barcode lebar dan bertumpuk yang Anda lihat di boarding pass, SIM, dan dokumen pengiriman. Barcode ini memuat ratusan karakter, dan pemindai tetap bisa membacanya meski sebagian rusak. Ketik atau tempel teks dan barcode akan muncul; pilih lebar modul agar sesuai tata letak Anda, lalu unduh sebagai PNG atau SVG setelah dibaca ulang dengan mesin pemindai. Semuanya berlangsung di browser Anda, jadi data tidak pernah meninggalkan perangkat Anda.",
    seoTitle: "Buat Barcode PDF417 Gratis – PNG dan SVG",
    seoDescription:
      "Buat barcode PDF417 di browser untuk tiket, kartu identitas, dan dokumen. Memuat teks panjang, sudah diuji pindai, PNG atau SVG. Gratis, tanpa unggah.",
    keywords: [
      "pdf417 generator",
      "buat barcode pdf417",
      "barcode pdf 417",
      "barcode bertumpuk",
      "barcode boarding pass",
    ],
    howToSteps: [
      {
        title: "Ketik atau tempel teks",
        description: "PDF417 memuat teks panjang, seperti beberapa isian dari formulir.",
      },
      {
        title: "Pilih ukuran",
        description: "Atur lebar modul untuk tiket atau dokumen Anda.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG.",
      },
    ],
    features: [
      {
        title: "Memuat teks panjang",
        description: "Ratusan karakter dalam satu barcode.",
      },
      {
        title: "Tahan kerusakan",
        description: "Koreksi kesalahan bawaan menjaganya tetap terbaca saat tergores.",
      },
      {
        title: "Sudah diuji pindai",
        description: "Setiap barcode dibaca ulang dengan mesin pemindai, jadi Anda tahu barcode itu berfungsi sebelum dicetak.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
    ],
    faqs: [
      {
        question: "Bisakah saya membuat barcode SIM?",
        answer:
          "PDF417 memang jenis barcode yang dipakai, tetapi dokumen identitas resmi mengikuti format yang ketat dan diterbitkan oleh pihak berwenang. Gunakan alat ini untuk tiket, label, dan dokumen Anda sendiri.",
      },
      {
        question: "Pemindai apa yang bisa membaca PDF417?",
        answer:
          "Sebagian besar pemindai 2D dan banyak aplikasi pemindai di ponsel.",
      },
      {
        question: "Seberapa besar sebaiknya dicetak?",
        answer:
          "Jaga agar batangnya tajam dan beri ruang: cetak pada 100% (jangan diregangkan), sisakan margin putih di sekeliling kode, dan gunakan batang gelap di atas background terang.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "barcode-scanner": {
    name: "Scan Barcode",
    shortName: "Scan Barcode",
    tagline: "Baca EAN, UPC, Code 128, Code 39, Data Matrix, PDF417, QR code, dan lainnya dari foto atau kamera. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Scan Barcode membaca barcode dari foto, screenshot, atau kamera Anda: kode produk (EAN dan UPC), ISBN pada buku, label Code 128 dan Code 39, karton ITF, GS1 DataBar, serta kode 2D seperti Data Matrix, PDF417, Aztec, dan QR code. Alat ini menemukan beberapa kode dalam satu gambar dan menampilkan masing-masing beserta jenisnya, siap disalin. Gambar kamera dan foto diproses di browser Anda dan tidak pernah diunggah.",
    seoTitle: "Scan Barcode Online – dari Foto atau Kamera",
    seoDescription:
      "Scan barcode EAN, UPC, Code 128, Data Matrix, PDF417, dan QR code dari foto atau kamera di browser Anda. Gratis, privat, tidak ada yang diunggah.",
    keywords: [
      "scan barcode online",
      "scan barcode dari gambar",
      "barcode scanner",
      "baca barcode dari foto",
      "pembaca barcode",
    ],
    howToSteps: [
      {
        title: "Tambahkan foto atau gunakan kamera",
        description: "Letakkan gambar, tempel screenshot, atau arahkan kamera ke barcode.",
      },
      {
        title: "Baca hasilnya",
        description: "Setiap barcode yang ditemukan ditampilkan beserta jenisnya, seperti EAN-13 atau Data Matrix.",
      },
      {
        title: "Salin",
        description: "Salin angka atau teksnya, atau buka link di dalamnya.",
      },
    ],
    features: [
      {
        title: "Puluhan jenis",
        description: "Barcode 1D, kode 2D, dan QR code dalam satu pemindai.",
      },
      {
        title: "Beberapa sekaligus",
        description: "Menemukan lebih dari satu barcode dalam satu gambar.",
      },
      {
        title: "Kamera atau foto",
        description: "Pindai langsung dengan kamera atau dari gambar yang tersimpan.",
      },
      {
        title: "Privat",
        description: "Gambar dan frame kamera dibaca di perangkat Anda dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Kenapa barcode saya tidak ditemukan?",
        answer:
          "Pastikan barcode fokus, cukup cahaya, dan mengisi sebagian besar gambar, tanpa pantulan cahaya yang kuat. Barcode yang sangat kecil atau buram tidak bisa dibaca.",
      },
      {
        question: "Bisakah alat ini mencari info produknya?",
        answer:
          "Tidak. Alat ini membaca angka di dalam barcode; alat ini tidak mencari di database produk, jadi apa pun yang Anda pindai tidak dikirim ke mana pun.",
      },
      {
        question: "Apakah kamera perlu izin?",
        answer:
          "Ya, browser Anda akan meminta izin sekali. Video tetap di perangkat Anda dan berhenti begitu kode ditemukan.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Gambar dibaca di browser Anda dan tetap di perangkat Anda.",
      },
    ],
  },
  "wifi-qr-code-generator": {
    name: "Buat QR Code Wi-Fi",
    shortName: "QR Code Wi-Fi",
    tagline: "Buat QR code yang dipindai tamu untuk terhubung ke Wi-Fi Anda tanpa mengetik kata sandi. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "QR code Wi-Fi memungkinkan tamu, pelanggan, dan keluarga terhubung ke jaringan Anda cukup dengan mengarahkan kamera ponsel ke kode itu, tanpa perlu mengeja kata sandi yang panjang. Masukkan nama jaringan dan kata sandi, pilih jenis keamanan, dan kode langsung muncul. iPhone dan ponsel Android memahaminya lewat kamera bawaan. Cetak untuk ditempel di kulkas, meja kafe, atau ruang rapat. Kata sandi Anda dimasukkan ke dalam kode di browser Anda dan tidak pernah diunggah.",
    seoTitle: "Buat QR Code Wi-Fi – Bagikan Wi-Fi Tanpa Kata Sandi",
    seoDescription:
      "Buat QR code Wi-Fi di browser agar tamu terhubung ke jaringan Anda cukup dengan memindai. Bisa dengan kamera iPhone dan Android. Gratis, tanpa unggah.",
    keywords: [
      "qr code wifi",
      "buat qr code wifi",
      "barcode wifi",
      "qr code password wifi",
      "cara membuat qr code wifi",
    ],
    howToSteps: [
      {
        title: "Masukkan detail jaringan",
        description: "Nama jaringan (SSID), kata sandi, dan jenis keamanan.",
      },
      {
        title: "Atur tampilannya",
        description: "Pilih warna atau tambahkan logo jika mau.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG, lalu cetak atau tambahkan ke desain Anda.",
      },
    ],
    features: [
      {
        title: "Bisa dengan kamera ponsel",
        description: "Kamera iPhone dan Android menawarkan untuk bergabung ke jaringan saat melihat kode ini.",
      },
      {
        title: "Diuji sebelum disimpan",
        description: "QR code dibaca ulang begitu dibuat, jadi Anda tahu kode itu bisa dipindai.",
      },
      {
        title: "Warna dan logo Anda",
        description: "Pilih warna dan tambahkan logo di tengah; koreksi kesalahan dinaikkan agar kode tetap bisa dipindai.",
      },
      {
        title: "Privat",
        description: "Kode dibuat di browser Anda. Detail Anda tidak diunggah atau disimpan.",
      },
    ],
    faqs: [
      {
        question: "Apakah aman mencetak kata sandi Wi-Fi saya?",
        answer:
          "Siapa pun yang memindai kode bisa bergabung ke jaringan, sama seperti jika Anda memberi tahu kata sandinya. Gunakan jaringan tamu untuk tempat umum.",
      },
      {
        question: "Jenis keamanan mana yang harus saya pilih?",
        answer:
          "WPA/WPA2/WPA3 untuk hampir semua router modern. WEP hanya untuk router yang sangat lama; Tidak ada untuk jaringan tanpa kata sandi.",
      },
      {
        question: "Apakah QR code-nya bisa kedaluwarsa?",
        answer:
          "Tidak. Informasinya ada di dalam kode itu sendiri, bukan di server, jadi kode tetap berfungsi selama detailnya masih benar.",
      },
      {
        question: "Apakah informasi saya disimpan?",
        answer:
          "Tidak. QR code dibuat di browser Anda dan apa pun yang Anda ketik tidak meninggalkan perangkat Anda.",
      },
    ],
  },
  "whatsapp-qr-code-generator": {
    name: "Buat QR Code WhatsApp",
    shortName: "QR WhatsApp",
    tagline: "Buat QR code yang membuka chat WhatsApp dengan nomor Anda, lengkap dengan pesan yang siap dikirim. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "QR code WhatsApp memungkinkan pelanggan memulai chat dengan Anda tanpa harus menyimpan nomor Anda terlebih dahulu. Masukkan nomor telepon Anda dengan kode negara dan, jika mau, pesan yang sudah terketik untuk mereka, misalnya “Halo, saya mau pesan meja”. Memindai kode akan membuka WhatsApp di chat tersebut. Pasang di etalase toko, menu, brosur, atau kartu nama Anda. Kode dibuat di browser Anda dan tidak ada yang diunggah.",
    seoTitle: "Buat QR Code WhatsApp Gratis – QR Link Chat WA",
    seoDescription:
      "Buat QR code yang membuka chat WhatsApp dengan nomor Anda dan pesan siap kirim. Untuk toko, menu, dan kartu nama. Gratis, tidak ada yang diunggah.",
    keywords: [
      "qr code whatsapp",
      "buat qr code whatsapp",
      "barcode whatsapp",
      "qr code link wa",
      "qr code wa.me",
    ],
    howToSteps: [
      {
        title: "Masukkan nomor Anda",
        description: "Dengan kode negara, misalnya +44 7700 900123.",
      },
      {
        title: "Tambahkan pesan",
        description: "Opsional: teks yang sudah terketik untuk orang yang memindainya.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG, lalu cetak atau tambahkan ke desain Anda.",
      },
    ],
    features: [
      {
        title: "Tanpa menyimpan nomor",
        description: "Orang bisa chat dengan Anda tanpa menambahkan Anda ke kontak terlebih dahulu.",
      },
      {
        title: "Pesan siap pakai",
        description: "Mulai percakapan dengan kata-kata Anda sendiri.",
      },
      {
        title: "Diuji sebelum disimpan",
        description: "QR code dibaca ulang begitu dibuat, jadi Anda tahu kode itu bisa dipindai.",
      },
      {
        title: "Warna dan logo Anda",
        description: "Pilih warna dan tambahkan logo di tengah; koreksi kesalahan dinaikkan agar kode tetap bisa dipindai.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa dipakai dengan WhatsApp Business?",
        answer:
          "Ya. Kode ini membuka chat dengan akun WhatsApp mana pun yang memakai nomor tersebut.",
      },
      {
        question: "Kenapa saya perlu kode negara?",
        answer:
          "Link WhatsApp memakai nomor internasional lengkap, jadi kode ini berfungsi dari negara mana pun.",
      },
      {
        question: "Apakah QR code-nya bisa kedaluwarsa?",
        answer:
          "Tidak. Informasinya ada di dalam kode itu sendiri, bukan di server, jadi kode tetap berfungsi selama detailnya masih benar.",
      },
      {
        question: "Apakah informasi saya disimpan?",
        answer:
          "Tidak. QR code dibuat di browser Anda dan apa pun yang Anda ketik tidak meninggalkan perangkat Anda.",
      },
    ],
  },
  "vcard-qr-code-generator": {
    name: "Buat QR Code vCard",
    shortName: "QR Code vCard",
    tagline: "Buat QR code yang menyimpan nama, telepon, email, dan situs web Anda ke kontak ponsel. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "QR code vCard mengubah kartu nama menjadi satu kali pindai: orang mengarahkan kamera ke kode itu, lalu ponsel mereka menawarkan untuk menyimpan Anda sebagai kontak, dengan nama, nomor telepon, email, perusahaan, dan situs web sudah terisi. Masukkan detail Anda, atur tampilan kode dengan warna atau logo Anda, lalu unduh untuk kartu nama, tanda tangan email, ID card, atau booth Anda. Detail dimasukkan ke dalam kode di browser Anda dan tidak disimpan di mana pun.",
    seoTitle: "Buat QR Code vCard Gratis – QR Kartu Nama",
    seoDescription:
      "Buat QR code vCard yang menyimpan detail kontak Anda dalam sekali pindai. Untuk kartu nama dan ID card. Warna dan logo, gratis, tidak ada yang diunggah.",
    keywords: [
      "qr code vcard",
      "qr code kartu nama",
      "qr code kontak",
      "buat qr code vcard",
      "qr code untuk kartu nama",
    ],
    howToSteps: [
      {
        title: "Masukkan detail Anda",
        description: "Nama, telepon, email, perusahaan, dan situs web.",
      },
      {
        title: "Atur tampilannya",
        description: "Pilih warna atau tambahkan logo Anda.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG, lalu cetak atau tambahkan ke desain Anda.",
      },
    ],
    features: [
      {
        title: "Tersimpan dalam sekali pindai",
        description: "Ponsel menawarkan untuk menambahkan kontak dengan semua kolom sudah terisi.",
      },
      {
        title: "Diuji sebelum disimpan",
        description: "QR code dibaca ulang begitu dibuat, jadi Anda tahu kode itu bisa dipindai.",
      },
      {
        title: "Warna dan logo Anda",
        description: "Pilih warna dan tambahkan logo di tengah; koreksi kesalahan dinaikkan agar kode tetap bisa dipindai.",
      },
      {
        title: "Privat",
        description: "Kode dibuat di browser Anda. Detail Anda tidak diunggah atau disimpan.",
      },
    ],
    faqs: [
      {
        question: "Apakah orang perlu aplikasi?",
        answer:
          "Tidak. Kamera bawaan iPhone dan sebagian besar ponsel Android mengenali QR code kontak.",
      },
      {
        question: "Bisakah saya mengubah detail saya nanti?",
        answer:
          "Detailnya ada di dalam kode, jadi buat kode baru saat detail berubah.",
      },
      {
        question: "Apakah QR code-nya bisa kedaluwarsa?",
        answer:
          "Tidak. Informasinya ada di dalam kode itu sendiri, bukan di server, jadi kode tetap berfungsi selama detailnya masih benar.",
      },
      {
        question: "Apakah informasi saya disimpan?",
        answer:
          "Tidak. QR code dibuat di browser Anda dan apa pun yang Anda ketik tidak meninggalkan perangkat Anda.",
      },
    ],
  },
  "payment-qr-code-generator": {
    name: "Buat QR Code Pembayaran",
    shortName: "QR Pembayaran",
    tagline: "Buat QR code untuk pembayaran UPI di India atau transfer bank SEPA di Eropa. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "QR code pembayaran memungkinkan orang membayar Anda dengan memindai, bukan mengetik detail rekening. Pilih UPI, sistem di balik Google Pay, PhonePe, Paytm, dan BHIM di India, atau transfer SEPA, yaitu QR code EPC yang bisa dibaca banyak aplikasi bank di Eropa. Masukkan rekening Anda dan, jika mau, jumlah tetap dan catatan; detailnya diperiksa (format ID UPI, digit periksa IBAN) sebelum kode dibuat. Tidak ada yang diunggah, dan tidak ada uang yang melewati situs ini.",
    seoTitle: "Buat QR Code Pembayaran – UPI dan SEPA, Gratis",
    seoDescription:
      "Buat QR code pembayaran UPI atau QR code transfer bank SEPA (EPC) di browser. Detail rekening diperiksa. Gratis, tidak ada yang diunggah.",
    keywords: [
      "buat qr code pembayaran",
      "qr code upi",
      "qr code sepa",
      "qr code epc",
      "qr code transfer bank",
    ],
    howToSteps: [
      {
        title: "Pilih UPI atau SEPA",
        description: "UPI untuk India; transfer SEPA untuk rekening bank euro di Eropa.",
      },
      {
        title: "Masukkan rekening",
        description: "ID UPI atau IBAN dan nama Anda, ditambah jumlah dan catatan opsional.",
      },
      {
        title: "Unduh",
        description: "Simpan sebagai PNG atau SVG, lalu cetak atau tambahkan ke desain Anda.",
      },
    ],
    features: [
      {
        title: "Detail rekening diperiksa",
        description: "Format ID UPI dan digit periksa IBAN diperiksa.",
      },
      {
        title: "Jumlah tetap opsional",
        description: "Kosongkan agar pembayar mengetik jumlahnya sendiri.",
      },
      {
        title: "Diuji sebelum disimpan",
        description: "QR code dibaca ulang begitu dibuat, jadi Anda tahu kode itu bisa dipindai.",
      },
      {
        title: "Privat",
        description: "Kode dibuat di browser Anda. Detail Anda tidak diunggah atau disimpan.",
      },
    ],
    faqs: [
      {
        question: "Aplikasi apa yang bisa membacanya?",
        answer:
          "Kode UPI terbuka di aplikasi UPI seperti Google Pay, PhonePe, Paytm, dan BHIM. Kode SEPA (EPC) dibaca oleh banyak aplikasi bank di Jerman, Austria, Belanda, Belgia, Finlandia, dan negara SEPA lainnya; tidak semua bank mendukungnya.",
      },
      {
        question: "Apakah aman?",
        answer:
          "Kode ini hanya mengisi detail pembayaran; pembayar tetap mengonfirmasi pembayaran di aplikasinya sendiri. Periksa detailnya dengan teliti sebelum Anda mencetak kode.",
      },
      {
        question: "Apakah QR code-nya bisa kedaluwarsa?",
        answer:
          "Tidak. Informasinya ada di dalam kode itu sendiri, bukan di server, jadi kode tetap berfungsi selama detailnya masih benar.",
      },
      {
        question: "Apakah informasi saya disimpan?",
        answer:
          "Tidak. QR code dibuat di browser Anda dan apa pun yang Anda ketik tidak meninggalkan perangkat Anda.",
      },
    ],
  },
  "bulk-qr-code-generator": {
    name: "Buat QR Code Massal",
    shortName: "QR Code Massal",
    tagline: "Buat ratusan QR code sekaligus dari daftar atau CSV dan unduh semuanya dalam satu ZIP. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Buat QR Code Massal mengubah daftar menjadi QR code: link untuk setiap halaman produk, kode untuk setiap meja, label aset untuk seluruh gudang. Tempel satu link atau teks per baris, atau muat file CSV, dan jika mau, tulis nama file sebelum masing-masing agar file mudah dicocokkan. Pilih PNG atau SVG dan ukurannya, lalu unduh semuanya dalam satu ZIP. Hingga 1.000 kode dibuat di browser Anda; daftar Anda tidak pernah diunggah.",
    seoTitle: "Buat QR Code Massal Gratis – dari CSV ke ZIP",
    seoDescription:
      "Buat hingga 1.000 QR code sekaligus dari daftar atau CSV di browser. Nama file sendiri, PNG atau SVG, satu ZIP. Gratis, tidak ada yang diunggah.",
    keywords: [
      "buat qr code massal",
      "bulk qr code generator",
      "qr code dari csv",
      "buat banyak qr code sekaligus",
      "generate qr code massal",
    ],
    howToSteps: [
      {
        title: "Tempel daftar Anda",
        description: "Satu link atau teks per baris, atau muat file CSV atau teks.",
      },
      {
        title: "Beri nama file",
        description: "Jika mau, awali setiap baris dengan nama file dan koma.",
      },
      {
        title: "Unduh ZIP",
        description: "Pilih PNG atau SVG dan ukurannya, lalu simpan semua kode sekaligus.",
      },
    ],
    features: [
      {
        title: "Hingga 1.000 kode",
        description: "Buat satu batch penuh sekaligus.",
      },
      {
        title: "Nama file Anda",
        description: "Beri nama setiap file agar cocok dengan produk, meja, atau aset Anda.",
      },
      {
        title: "PNG atau SVG",
        description: "Gambar untuk dokumen, atau vektor untuk dicetak.",
      },
      {
        title: "Privat",
        description: "Daftar Anda diproses di browser dan tidak pernah diunggah.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara menambahkan nama file?",
        answer:
          "Centang opsinya dan tulis setiap baris sebagai nama, isi (misalnya: meja-4, https://example.com/menu). Tanpa nama, file diberi nomor.",
      },
      {
        question: "Bisakah saya membuat kode Wi-Fi atau kontak secara massal?",
        answer:
          "Bisa, jika setiap baris memuat isi kode lengkap, seperti WIFI:T:WPA;S:Nama;P:katasandi;;. Untuk kode satuan, Buat QR Code mengisinya otomatis untuk Anda.",
      },
      {
        question: "Apakah ada batasnya?",
        answer:
          "1.000 kode per batch. Buat beberapa batch untuk jumlah yang lebih banyak.",
      },
      {
        question: "Apakah informasi saya disimpan?",
        answer:
          "Tidak. QR code dibuat di browser Anda dan apa pun yang Anda ketik tidak meninggalkan perangkat Anda.",
      },
    ],
  },
  "bulk-barcode-generator": {
    name: "Buat Barcode Massal",
    shortName: "Barcode Massal",
    tagline: "Buat ratusan barcode sekaligus dari daftar atau CSV, sudah diperiksa dan disimpan dalam satu ZIP. Gratis, dan berjalan di perangkat Anda.",
    intro:
      "Buat Barcode Massal membuat barcode untuk setiap baris dalam daftar: kode produk untuk katalog, label Code 128 untuk gudang, ISBN untuk serial buku. Pilih jenis barcode, tempel nomornya atau muat CSV, dan setiap baris diperiksa saat Anda mengetik: panjang yang salah, huruf di kode khusus angka, dan digit periksa yang salah dicantumkan per baris, dan digit periksa yang belum ada ditambahkan. Unduh yang valid sebagai PNG atau SVG dalam satu ZIP. Hingga 1.000 barcode dibuat di browser Anda dan tidak ada yang diunggah.",
    seoTitle: "Buat Barcode Massal – dari CSV ke ZIP, Gratis",
    seoDescription:
      "Buat hingga 1.000 barcode sekaligus dari daftar atau CSV: Code 128, EAN, UPC, ISBN, Data Matrix, dan lainnya. Diperiksa, ZIP PNG atau SVG. Gratis.",
    keywords: [
      "buat barcode massal",
      "bulk barcode generator",
      "barcode dari csv",
      "buat banyak barcode sekaligus",
      "generate barcode massal",
    ],
    howToSteps: [
      {
        title: "Pilih jenis barcode",
        description: "Code 128, EAN-13, UPC-A, ISBN, Data Matrix, dan lainnya.",
      },
      {
        title: "Tempel daftar Anda",
        description: "Satu angka atau teks per baris, bisa diawali nama file; masalah dicantumkan per baris.",
      },
      {
        title: "Unduh ZIP",
        description: "Pilih PNG atau SVG, lalu simpan semua barcode yang valid sekaligus.",
      },
    ],
    features: [
      {
        title: "Diperiksa saat mengetik",
        description: "Panjang yang salah, huruf di kode khusus angka, dan digit periksa yang salah ditunjukkan sebelum Anda mengunduh.",
      },
      {
        title: "Digit periksa ditambahkan",
        description: "Nomor EAN, UPC, ITF-14, dan ISBN mendapat digit periksa jika belum ditulis.",
      },
      {
        title: "Nama file Anda",
        description: "Beri nama setiap file sesuai produk atau barangnya.",
      },
      {
        title: "PNG atau SVG",
        description: "PNG untuk dokumen dan label, SVG untuk cetak dan software desain dalam ukuran berapa pun.",
      },
    ],
    faqs: [
      {
        question: "Apa yang terjadi pada baris yang bermasalah?",
        answer:
          "Baris tersebut dicantumkan beserta alasannya dan tidak dimasukkan ke ZIP; sisanya tetap dibuat.",
      },
      {
        question: "Apakah saya perlu mendaftarkan nomornya?",
        answer:
          "Untuk menjual produk di toko, ya: nomor EAN dan UPC berasal dari GS1, organisasi yang mengelola sistem ini. Untuk stok, rak, atau keperluan internal Anda sendiri, nomor apa pun bisa dipakai.",
      },
      {
        question: "Apakah ada batasnya?",
        answer:
          "1.000 barcode per batch. Buat beberapa batch untuk jumlah yang lebih banyak.",
      },
      {
        question: "Apakah ada yang diunggah?",
        answer:
          "Tidak. Kode dibuat di browser Anda, dan apa yang Anda ketik tetap di perangkat Anda.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word ke PDF",
    shortName: "Word → PDF",
    tagline: "Ubah dokumen Word ke PDF dengan tata letak, font, dan gambar tetap utuh. Gratis, tanpa daftar, dan tanpa watermark.",
    intro:
      "Word ke PDF mengubah dokumen Word menjadi PDF yang tampil sama di setiap perangkat dan siap dikirim lewat email, dicetak, atau diunggah ke portal. Alat ini menerima DOC, DOCX, ODT, RTF, atau TXT. Header, footer, nomor halaman, tabel, dan gambar tetap dipertahankan. Konversi memakai LibreOffice di server kami: file Anda dikirim melalui koneksi terenkripsi dan dihapus begitu PDF-nya kembali.",
    seoTitle: "Ubah Word ke PDF Online – Gratis, Tanpa Daftar",
    seoDescription:
      "Ubah Word ke PDF online secara gratis. Tata letak, font, dan gambar tetap utuh. Tanpa daftar, tanpa watermark; file dihapus segera setelah konversi selesai.",
    keywords: [
      "ubah word ke pdf",
      "word ke pdf",
      "convert word ke pdf",
      "docx ke pdf",
      "doc ke pdf",
      "word to pdf gratis",
    ],
    howToSteps: [
      {
        title: "Pilih file Anda",
        description: "Letakkan atau pilih file berformat DOC, DOCX, ODT, RTF, atau TXT, hingga 30 MB.",
      },
      {
        title: "Ubah",
        description: "Klik Ubah ke PDF. File diubah di server kami, biasanya dalam beberapa detik.",
      },
      {
        title: "Unduh PDF-nya",
        description: "PDF terunduh secara otomatis; Anda bisa mengunduhnya lagi lewat tombol.",
      },
    ],
    features: [
      {
        title: "Tata letak terjaga",
        description: "Teks, tabel, gambar, dan pemisah halaman tetap di tempatnya.",
      },
      {
        title: "Font umum tersedia",
        description: "Font dengan ukuran yang kompatibel untuk Calibri, Cambria, Arial, dan Times, ditambah font Noto untuk sebagian besar bahasa.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah konversi.",
      },
      {
        title: "Gratis",
        description: "Tanpa daftar, tanpa watermark, tanpa batas harian.",
      },
    ],
    faqs: [
      {
        question: "Apakah PDF saya akan terlihat persis seperti aslinya?",
        answer:
          "Untuk sebagian besar dokumen, ya. Font langka yang tidak terpasang di server diganti dengan font yang mirip, dan beberapa tata letak yang sangat rumit bisa sedikit bergeser. Periksa PDF sebelum mengirimnya.",
      },
      {
        question: "Apakah lacak perubahan dan komentar muncul di PDF?",
        answer:
          "Dokumen diubah seperti tampilannya saat dibuka, jadi terima atau tolak lacak perubahan terlebih dahulu jika Anda tidak ingin perubahan itu terlihat.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "excel-to-pdf": {
    name: "Excel ke PDF",
    shortName: "Excel → PDF",
    tagline: "Ubah spreadsheet Excel ke PDF dengan tata letak, font, dan gambar tetap utuh. Gratis, tanpa daftar, dan tanpa watermark.",
    intro:
      "Excel ke PDF mengubah spreadsheet Excel menjadi PDF yang tampil sama di setiap perangkat dan siap dikirim lewat email, dicetak, atau diunggah ke portal. Alat ini menerima XLS, XLSX, ODS, atau CSV. Setiap sheet yang berisi konten menjadi bagian dari PDF, mengikuti pengaturan halaman yang tersimpan di file. Konversi memakai LibreOffice di server kami: file Anda dikirim melalui koneksi terenkripsi dan dihapus begitu PDF-nya kembali.",
    seoTitle: "Ubah Excel ke PDF Online – Gratis, Tanpa Daftar",
    seoDescription:
      "Ubah Excel ke PDF online secara gratis. Tata letak, font, dan gambar spreadsheet tetap utuh. Tanpa daftar, tanpa watermark; file dihapus segera setelahnya.",
    keywords: [
      "ubah excel ke pdf",
      "excel ke pdf",
      "convert excel ke pdf",
      "xlsx ke pdf",
      "xls ke pdf",
      "csv ke pdf",
    ],
    howToSteps: [
      {
        title: "Pilih file Anda",
        description: "Letakkan atau pilih file berformat XLS, XLSX, ODS, atau CSV, hingga 30 MB.",
      },
      {
        title: "Ubah",
        description: "Klik Ubah ke PDF. File diubah di server kami, biasanya dalam beberapa detik.",
      },
      {
        title: "Unduh PDF-nya",
        description: "PDF terunduh secara otomatis; Anda bisa mengunduhnya lagi lewat tombol.",
      },
    ],
    features: [
      {
        title: "Tata letak terjaga",
        description: "Teks, tabel, gambar, dan pemisah halaman tetap di tempatnya.",
      },
      {
        title: "Font umum tersedia",
        description: "Font dengan ukuran yang kompatibel untuk Calibri, Cambria, Arial, dan Times, ditambah font Noto untuk sebagian besar bahasa.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah konversi.",
      },
      {
        title: "Gratis",
        description: "Tanpa daftar, tanpa watermark, tanpa batas harian.",
      },
    ],
    faqs: [
      {
        question: "Apakah PDF saya akan terlihat persis seperti aslinya?",
        answer:
          "Untuk sebagian besar dokumen, ya. Font langka yang tidak terpasang di server diganti dengan font yang mirip, dan beberapa tata letak yang sangat rumit bisa sedikit bergeser. Periksa PDF sebelum mengirimnya.",
      },
      {
        question: "Mengapa sheet saya terbagi ke beberapa halaman?",
        answer:
          "PDF mengikuti pengaturan cetak yang tersimpan di spreadsheet. Agar satu sheet muat di satu halaman, atur skala cetak ke “Fit to page” (Paskan ke halaman) di Excel sebelum mengubahnya.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "powerpoint-to-pdf": {
    name: "PowerPoint ke PDF",
    shortName: "PPT → PDF",
    tagline: "Ubah presentasi PowerPoint ke PDF dengan tata letak, font, dan gambar tetap utuh. Gratis, tanpa daftar, dan tanpa watermark.",
    intro:
      "PowerPoint ke PDF mengubah presentasi PowerPoint menjadi PDF yang tampil sama di setiap perangkat dan siap dikirim lewat email, dicetak, atau diunggah ke portal. Alat ini menerima PPT, PPTX, atau ODP. Setiap slide menjadi satu halaman PDF. Konversi memakai LibreOffice di server kami: file Anda dikirim melalui koneksi terenkripsi dan dihapus begitu PDF-nya kembali.",
    seoTitle: "Ubah PowerPoint ke PDF Online – Gratis",
    seoDescription:
      "Ubah PowerPoint ke PDF online secara gratis. Tata letak, font, dan gambar presentasi tetap utuh. Tanpa daftar, tanpa watermark; file dihapus segera setelahnya.",
    keywords: [
      "ubah ppt ke pdf",
      "powerpoint ke pdf",
      "ppt ke pdf",
      "pptx ke pdf",
      "convert ppt ke pdf",
    ],
    howToSteps: [
      {
        title: "Pilih file Anda",
        description: "Letakkan atau pilih file berformat PPT, PPTX, atau ODP, hingga 30 MB.",
      },
      {
        title: "Ubah",
        description: "Klik Ubah ke PDF. File diubah di server kami, biasanya dalam beberapa detik.",
      },
      {
        title: "Unduh PDF-nya",
        description: "PDF terunduh secara otomatis; Anda bisa mengunduhnya lagi lewat tombol.",
      },
    ],
    features: [
      {
        title: "Tata letak terjaga",
        description: "Teks, tabel, gambar, dan pemisah halaman tetap di tempatnya.",
      },
      {
        title: "Font umum tersedia",
        description: "Font dengan ukuran yang kompatibel untuk Calibri, Cambria, Arial, dan Times, ditambah font Noto untuk sebagian besar bahasa.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah konversi.",
      },
      {
        title: "Gratis",
        description: "Tanpa daftar, tanpa watermark, tanpa batas harian.",
      },
    ],
    faqs: [
      {
        question: "Apakah PDF saya akan terlihat persis seperti aslinya?",
        answer:
          "Untuk sebagian besar dokumen, ya. Font langka yang tidak terpasang di server diganti dengan font yang mirip, dan beberapa tata letak yang sangat rumit bisa sedikit bergeser. Periksa PDF sebelum mengirimnya.",
      },
      {
        question: "Apakah animasi dan video tetap ada?",
        answer:
          "Tidak. PDF menampilkan setiap slide sebagai halaman diam, jadi animasi, transisi, dan video yang disematkan tidak disertakan.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF ke Word",
    shortName: "PDF → Word",
    tagline: "Ubah PDF menjadi dokumen Word (DOCX) yang bisa diedit. Gratis, tanpa daftar.",
    intro:
      "PDF ke Word mengubah PDF menjadi file DOCX yang bisa Anda edit di Word, Google Dokumen, atau LibreOffice. Alat ini bekerja paling baik pada PDF yang dibuat dari dokumen teks, seperti laporan, surat, dan formulir hasil ekspor; teks, paragraf, dan gambar menjadi konten yang bisa diedit. Tata letak rumit seperti majalah, kolom, dan formulir mungkin perlu dirapikan setelahnya. PDF hasil scan hanyalah gambar teks, jadi proses dulu dengan OCR PDF. Konversi memakai LibreOffice di server kami, dan file dihapus segera setelahnya.",
    seoTitle: "PDF ke Word Online – DOCX yang Bisa Diedit, Gratis",
    seoDescription:
      "PDF ke Word online secara gratis: ubah PDF menjadi file DOCX yang bisa diedit. Paling baik untuk PDF berisi teks; file dihapus segera setelahnya. Tanpa daftar.",
    keywords: [
      "pdf ke word",
      "ubah pdf ke word",
      "convert pdf ke word",
      "pdf ke docx",
      "pdf ke word bisa diedit",
    ],
    howToSteps: [
      {
        title: "Pilih PDF Anda",
        description: "Letakkan atau pilih PDF hingga 30 MB.",
      },
      {
        title: "Ubah",
        description: "Klik Ubah ke Word. PDF diubah di server kami.",
      },
      {
        title: "Edit dokumennya",
        description: "Buka DOCX yang terunduh di Word, Google Dokumen, atau LibreOffice.",
      },
    ],
    features: [
      {
        title: "Teks bisa diedit",
        description: "Paragraf dan judul menjadi teks biasa yang bisa diedit.",
      },
      {
        title: "Gambar tetap ada",
        description: "Gambar di PDF ditempatkan di dalam dokumen.",
      },
      {
        title: "Untuk Word dan Google Dokumen",
        description: "DOCX bisa dibuka di Microsoft Word, Google Dokumen, dan LibreOffice.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah konversi.",
      },
    ],
    faqs: [
      {
        question: "Mengapa dokumen saya terlihat berbeda dari PDF-nya?",
        answer:
          "PDF menyimpan posisi yang persis, sedangkan dokumen Word mengalirkan teks. Dokumen sederhana terkonversi dengan baik; kolom, kotak teks, dan formulir yang rumit mungkin perlu disesuaikan setelah konversi.",
      },
      {
        question: "Bisakah alat ini mengubah PDF hasil scan?",
        answer:
          "PDF hasil scan berisi gambar teks, bukan teks. Proses dulu dengan OCR PDF, lalu ubah PDF yang sudah bisa dicari itu ke Word.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "compress-pdf": {
    name: "Kompres PDF",
    shortName: "Kompres PDF",
    tagline: "Perkecil PDF untuk email dan formulir unggah, dengan tiga tingkat kualitas. Gratis, tanpa daftar.",
    intro:
      "Kompres PDF memperkecil ukuran file PDF agar muat sebagai lampiran email dan memenuhi batas ukuran portal unggah. Alat ini paling efektif pada PDF berisi foto dan hasil scan, karena gambarnya dikompres ulang dan diperkecil; pilih Terkecil untuk layar dan email, Seimbang untuk sebagian besar kebutuhan, atau Kualitas tinggi untuk menjaga detail saat dicetak. Hasilnya menunjukkan seberapa kecil file menjadi, dan jika PDF sudah ringkas, Anda mendapatkan file aslinya kembali, bukan file yang lebih besar. Kompresi memakai Ghostscript di server kami, dan file dihapus segera setelahnya.",
    seoTitle: "Kompres PDF Online – Perkecil Ukuran PDF, Gratis",
    seoDescription:
      "Kompres PDF online secara gratis dengan tiga tingkat kualitas. Lihat berapa banyak ukuran yang dihemat; file dihapus segera setelahnya. Tanpa daftar.",
    keywords: [
      "kompres pdf",
      "perkecil ukuran pdf",
      "kecilkan pdf",
      "kompres pdf online",
      "kompres pdf jadi 1mb",
      "mengecilkan file pdf",
    ],
    howToSteps: [
      {
        title: "Pilih PDF Anda",
        description: "Letakkan atau pilih PDF hingga 30 MB.",
      },
      {
        title: "Pilih tingkat",
        description: "Terkecil, Seimbang, atau Kualitas tinggi.",
      },
      {
        title: "Kompres dan unduh",
        description: "Lihat ukuran sebelum dan sesudah, lalu simpan PDF yang lebih kecil.",
      },
    ],
    features: [
      {
        title: "Tiga tingkat kualitas",
        description: "Dari file seukuran email hingga dokumen berkualitas cetak.",
      },
      {
        title: "Tidak pernah lebih besar",
        description: "Jika PDF tidak bisa diperkecil, Anda mendapatkan file aslinya kembali.",
      },
      {
        title: "Kompresi sungguhan",
        description: "Gambar dikompres ulang dan konten duplikat digabungkan, sesuatu yang tidak bisa dilakukan alat berbasis browser.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah kompresi.",
      },
    ],
    faqs: [
      {
        question: "Seberapa kecil PDF saya nantinya?",
        answer:
          "Tergantung isinya. PDF hasil scan dan yang banyak berisi foto sering menyusut 50–90%. PDF yang hanya berisi teks sudah kecil dan mungkin hampir tidak berubah.",
      },
      {
        question: "Apakah teks tetap tajam?",
        answer:
          "Ya. Teks dan grafik vektor dipertahankan apa adanya; hanya gambar yang dikompres ulang.",
      },
      {
        question: "PDF saya harus di bawah ukuran tertentu. Apa yang harus saya lakukan?",
        answer:
          "Coba Terkecil terlebih dahulu. Jika masih terlalu besar, pisahkan PDF menjadi beberapa bagian dengan Pisahkan PDF, lalu kompres setiap bagian.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "protect-pdf": {
    name: "Lindungi PDF",
    shortName: "Lindungi PDF",
    tagline: "Tambahkan kata sandi ke PDF dengan enkripsi AES-256. Gratis, tanpa daftar.",
    intro:
      "Lindungi PDF mengunci PDF dengan kata sandi, sehingga file tidak bisa dibuka tanpanya. Gunakan sebelum mengirim rekening koran, slip gaji, dokumen identitas, atau kontrak lewat email. PDF dienkripsi dengan AES-256, enkripsi terkuat yang didukung pembaca PDF, dan terbuka seperti biasa di Acrobat, browser, dan aplikasi ponsel setelah kata sandi dimasukkan. Pilih kata sandi minimal enam karakter dan simpan baik-baik: tidak ada yang bisa memulihkannya. Enkripsi dijalankan dengan qpdf di server kami; file dan kata sandi dihapus segera setelahnya.",
    seoTitle: "Lindungi PDF dengan Kata Sandi – AES-256, Gratis",
    seoDescription:
      "Lindungi PDF dengan kata sandi dan enkripsi AES-256, online dan gratis. File dan kata sandi dihapus segera setelahnya. Tanpa daftar.",
    keywords: [
      "kunci pdf dengan password",
      "lindungi pdf",
      "password pdf",
      "enkripsi pdf",
      "cara memberi password pdf",
    ],
    howToSteps: [
      {
        title: "Pilih PDF Anda",
        description: "Letakkan atau pilih PDF hingga 30 MB.",
      },
      {
        title: "Atur kata sandi",
        description: "Ketik dua kali; gunakan minimal enam karakter.",
      },
      {
        title: "Lindungi dan unduh",
        description: "Simpan PDF yang terkunci dan simpan kata sandinya di tempat yang aman.",
      },
    ],
    features: [
      {
        title: "Enkripsi AES-256",
        description: "Enkripsi PDF terkuat, didukung semua pembaca modern.",
      },
      {
        title: "Terbuka di mana saja",
        description: "Acrobat, browser, dan aplikasi ponsel akan meminta kata sandinya.",
      },
      {
        title: "Kata sandi tidak pernah disimpan",
        description: "Hanya dipakai sekali untuk mengenkripsi file, lalu dibuang.",
      },
      {
        title: "Gratis",
        description: "Tanpa daftar dan tanpa watermark.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana jika saya lupa kata sandinya?",
        answer:
          "Kata sandi tidak bisa dipulihkan, baik oleh kami maupun orang lain. Simpan salinan file asli yang tidak dilindungi, atau simpan kata sandinya di tempat yang aman.",
      },
      {
        question: "Bisakah saya menghapus kata sandinya nanti?",
        answer:
          "Bisa. Gunakan Buka Kunci PDF dengan kata sandi yang benar.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "unlock-pdf": {
    name: "Buka Kunci PDF",
    shortName: "Buka Kunci PDF",
    tagline: "Hapus kata sandi dari PDF yang bisa Anda buka, agar tidak diminta lagi. Gratis, tanpa daftar.",
    intro:
      "Buka Kunci PDF menghapus kata sandi dari PDF jika Anda mengetahuinya, sehingga file terbuka tanpa meminta kata sandi setiap kali dan bisa diedit, digabungkan, atau ditandatangani dengan alat lain di situs ini. Alat ini juga menghapus batasan cetak dan salin yang dimiliki sebagian PDF. Anda harus memasukkan kata sandi yang benar: alat ini tidak menebak atau membobol kata sandi. Proses buka kunci dijalankan dengan qpdf di server kami; file dan kata sandi dihapus segera setelahnya.",
    seoTitle: "Buka Kunci PDF – Hapus Password PDF, Gratis",
    seoDescription:
      "Buka kunci PDF dan hapus kata sandi dari PDF yang bisa Anda buka, online dan gratis. File dan kata sandi dihapus segera setelahnya. Tanpa daftar.",
    keywords: [
      "buka kunci pdf",
      "hapus password pdf",
      "cara membuka pdf yang dikunci",
      "unlock pdf",
      "menghilangkan password pdf",
    ],
    howToSteps: [
      {
        title: "Pilih PDF Anda",
        description: "Letakkan atau pilih PDF yang dilindungi.",
      },
      {
        title: "Masukkan kata sandi",
        description: "Ketik kata sandi yang membuka PDF tersebut.",
      },
      {
        title: "Buka kunci dan unduh",
        description: "Simpan salinan tanpa kata sandi.",
      },
    ],
    features: [
      {
        title: "Tidak ada lagi permintaan kata sandi",
        description: "Salinan yang sudah dibuka kuncinya langsung terbuka.",
      },
      {
        title: "Edit di sini",
        description: "Gabungkan, tanda tangani, atau atur PDF yang sudah dibuka kuncinya dengan alat lain.",
      },
      {
        title: "Batasan dihapus",
        description: "Batasan cetak dan salin juga dicabut.",
      },
      {
        title: "Kata sandi tidak pernah disimpan",
        description: "Hanya dipakai sekali, lalu dibuang bersama file.",
      },
    ],
    faqs: [
      {
        question: "Bisakah alat ini membuka kunci PDF jika saya tidak tahu kata sandinya?",
        answer:
          "Tidak. Anda memerlukan kata sandi yang membuka file. Alat ini tidak menebak atau membobol kata sandi.",
      },
      {
        question: "Mengapa muncul pesan bahwa kata sandi salah?",
        answer:
          "Periksa huruf kapital dan spasi. Rekening koran sering memakai kombinasi seperti bagian dari nama dan tanggal lahir Anda; pengirim biasanya menjelaskan formatnya.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR PDF",
    shortName: "OCR PDF",
    tagline: "Buat PDF hasil scan bisa dicari dan dipilih dengan mengenali teksnya. Gratis, tanpa daftar.",
    intro:
      "OCR PDF mengenali teks dalam PDF hasil scan dan menambahkannya sebagai lapisan tak terlihat, sehingga Anda bisa mencari, memilih, dan menyalin teks sementara halamannya tetap terlihat sama persis. Alat ini berguna untuk kontrak, struk, buku, dan dokumen lama hasil scan. Pilih bahasa dokumen untuk hasil terbaik; halaman yang sudah berisi teks dibiarkan apa adanya. Pengenalan teks memakai Tesseract dan OCRmyPDF di server kami, dan file dihapus segera setelahnya.",
    seoTitle: "OCR PDF Online – Buat PDF Scan Bisa Dicari, Gratis",
    seoDescription:
      "OCR PDF online dan gratis: buat PDF hasil scan bisa dicari dan disalin teksnya. Mendukung 10 bahasa; file dihapus segera setelah diproses. Tanpa daftar.",
    keywords: [
      "ocr pdf",
      "ocr pdf online",
      "pdf scan ke teks",
      "membuat pdf bisa dicari",
      "ubah pdf scan jadi teks",
      "kenali teks di pdf",
    ],
    howToSteps: [
      {
        title: "Pilih PDF hasil scan",
        description: "Letakkan atau pilih PDF hingga 30 MB.",
      },
      {
        title: "Pilih bahasanya",
        description: "Pilih bahasa yang dipakai dalam dokumen.",
      },
      {
        title: "Buat bisa dicari",
        description: "Unduh PDF dengan teks yang bisa dipilih dan dicari.",
      },
    ],
    features: [
      {
        title: "Tampilan tetap sama",
        description: "Lapisan teksnya tak terlihat; hasil scan tidak berubah.",
      },
      {
        title: "Sepuluh bahasa",
        description: "Inggris, Jerman, Spanyol, Prancis, Portugis, Italia, Jepang, Korea, Indonesia, dan Turki.",
      },
      {
        title: "Lewati halaman berteks",
        description: "Halaman yang sudah berisi teks tidak diproses ulang.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah pengenalan teks.",
      },
    ],
    faqs: [
      {
        question: "Seberapa akurat hasilnya?",
        answer:
          "Hasil scan yang bersih dan lurus pada 300 dpi memberikan hasil yang sangat baik. Tulisan tangan, foto beresolusi rendah, dan font yang tidak biasa dikenali dengan kurang andal.",
      },
      {
        question: "Bisakah saya mengubah hasilnya ke Word?",
        answer:
          "Bisa. Setelah PDF bisa dicari, PDF ke Word dapat mengubah teksnya menjadi dokumen yang bisa diedit.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "pdf-to-pdfa": {
    name: "PDF ke PDF/A",
    shortName: "PDF → PDF/A",
    tagline: "Ubah PDF ke PDF/A untuk arsip jangka panjang dan portal resmi. Gratis, tanpa daftar.",
    intro:
      "PDF ke PDF/A mengubah PDF menjadi PDF/A-2b, versi arsip dari PDF yang menyematkan font dan informasi warna sehingga dokumen tetap terlihat sama selama puluhan tahun. Sebagian pengadilan, portal pajak, universitas, dan situs pemerintah hanya menerima unggahan PDF/A. Konversi memakai OCRmyPDF dan Ghostscript di server kami, dan file dihapus segera setelahnya.",
    seoTitle: "Ubah PDF ke PDF/A Online – PDF/A-2b, Gratis",
    seoDescription:
      "Ubah PDF ke PDF/A-2b untuk arsip dan portal resmi, online dan gratis. File dihapus segera setelah konversi selesai. Tanpa daftar, tanpa watermark.",
    keywords: [
      "pdf ke pdf/a",
      "ubah pdf ke pdf/a",
      "convert pdf ke pdfa",
      "pdf/a-2b",
      "pdf arsip",
    ],
    howToSteps: [
      {
        title: "Pilih PDF Anda",
        description: "Letakkan atau pilih PDF hingga 30 MB.",
      },
      {
        title: "Ubah",
        description: "Klik Ubah ke PDF/A.",
      },
      {
        title: "Unduh",
        description: "Unggah file PDF/A ke mana pun file itu diperlukan.",
      },
    ],
    features: [
      {
        title: "PDF/A-2b",
        description: "Standar arsip yang diterima secara luas.",
      },
      {
        title: "Font disematkan",
        description: "Teks terlihat sama di komputer mana pun.",
      },
      {
        title: "Tampilan tidak berubah",
        description: "Halaman tetap dengan konten dan tata letaknya.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah konversi.",
      },
    ],
    faqs: [
      {
        question: "Versi PDF/A mana yang saya dapatkan?",
        answer:
          "PDF/A-2b, yang diterima sebagian besar portal. Jika portal secara khusus meminta PDF/A-1 atau PDF/A-3, periksa petunjuknya.",
      },
      {
        question: "Mengapa file PDF/A lebih besar?",
        answer:
          "PDF/A harus menyematkan setiap font dan profil warna agar dokumen tetap bisa dibaca dengan sendirinya, dan itu menambah ukuran.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  "repair-pdf": {
    name: "Perbaiki PDF",
    shortName: "Perbaiki PDF",
    tagline: "Perbaiki PDF rusak yang tidak mau terbuka atau menampilkan error. Gratis, tanpa daftar.",
    intro:
      "Perbaiki PDF membangun ulang struktur internal PDF yang rusak, yaitu PDF yang tidak mau terbuka, menampilkan error, atau terbuka dengan halaman yang hilang setelah unduhan terputus atau ekspor yang gagal. Alat ini menulis ulang file agar pembaca PDF bisa membacanya lagi, dan memulihkan apa yang masih bisa dipulihkan. File yang rusak parah tidak selalu bisa diselamatkan. Perbaikan dijalankan dengan qpdf di server kami, dan file dihapus segera setelahnya.",
    seoTitle: "Perbaiki PDF Online – Atasi File PDF Rusak, Gratis",
    seoDescription:
      "Perbaiki file PDF yang rusak atau korup dan tidak mau terbuka, online dan gratis. File dihapus segera setelah diproses. Tanpa daftar, tanpa watermark.",
    keywords: [
      "perbaiki pdf",
      "memperbaiki pdf rusak",
      "pdf rusak",
      "pdf tidak bisa dibuka",
      "repair pdf online",
    ],
    howToSteps: [
      {
        title: "Pilih PDF yang rusak",
        description: "Letakkan atau pilih PDF yang tidak mau terbuka dengan benar.",
      },
      {
        title: "Perbaiki",
        description: "Klik Perbaiki PDF untuk membangun ulang strukturnya.",
      },
      {
        title: "Unduh",
        description: "Buka salinan yang sudah diperbaiki di pembaca PDF Anda.",
      },
    ],
    features: [
      {
        title: "Membangun ulang struktur",
        description: "Memperbaiki tabel referensi silang dan struktur file yang rusak.",
      },
      {
        title: "Menyimpan yang bisa diselamatkan",
        description: "Halaman dan konten yang masih terbaca dipertahankan.",
      },
      {
        title: "Cepat",
        description: "Sebagian besar file diperbaiki dalam hitungan detik.",
      },
      {
        title: "File langsung dihapus",
        description: "Tidak ada yang disimpan setelah perbaikan.",
      },
    ],
    faqs: [
      {
        question: "Apakah semua PDF bisa diperbaiki?",
        answer:
          "Tidak. Jika ada bagian file yang hilang atau tertimpa, bagian itu tidak bisa dipulihkan. Coba unduh atau ekspor file aslinya lagi jika memungkinkan.",
      },
      {
        question: "Mengapa muncul pesan bahwa file bukan PDF?",
        answer:
          "Awal file sama sekali tidak seperti PDF, jadi mungkin itu jenis file lain atau sudah rusak hingga tidak bisa diperbaiki.",
      },
      {
        question: "Apakah file saya diunggah?",
        answer:
          "Ya. Alat ini memerlukan server kami, jadi file dikirim melalui koneksi terenkripsi, diproses, lalu dihapus begitu hasilnya dikirim kembali. File tidak pernah disimpan, dibagikan, atau dilihat. Sebagian besar alat lain di situs ini berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah ada batas ukuran?",
        answer:
          "File bisa berukuran hingga 30 MB. File yang sangat besar atau rumit bisa memakan waktu hingga sekitar dua menit.",
      },
    ],
  },
  // PDF utilities
"pdf-to-text": {
    "name": "PDF ke Teks",
    "shortName": "PDF ke Teks",
    "tagline": "Ambil teks dari PDF sebagai file .txt biasa, halaman demi halaman, siap disalin atau diedit. Gratis dan berjalan di perangkat Anda.",
    "intro": "PDF ke Teks mengambil teks dari PDF agar Anda bisa menyalin, mencari, mengedit, atau menempelkannya di tempat lain, tanpa menyalin satu per satu halaman. Baris dan paragraf tetap terjaga, dan setiap halaman bisa diberi tanda agar Anda tahu asal teksnya. Pilih semua halaman atau sebagian saja, lalu salin teksnya atau unduh sebagai file .txt. Alat ini bekerja untuk PDF yang berisi teks sungguhan, seperti dokumen yang disimpan dari Word atau situs web; untuk halaman hasil scan, gunakan OCR PDF. Semuanya terjadi di browser Anda.",
    "seoTitle": "PDF ke Teks – Gratis, Salin atau Simpan sebagai TXT",
    "seoDescription": "Ambil teks dari PDF langsung di browser Anda, lalu simpan sebagai file .txt atau salin. Pilih halaman, paragraf tetap terjaga. Gratis, tanpa unggah file.",
    "keywords": [
      "pdf ke teks",
      "pdf ke txt",
      "ambil teks dari pdf",
      "salin teks dari pdf",
      "convert pdf to text"
    ],
    "howToSteps": [
      {
        "title": "Buka PDF Anda",
        "description": "Letakkan atau pilih PDF; teksnya langsung dibaca."
      },
      {
        "title": "Pilih halaman",
        "description": "Semua halaman, atau rentang seperti 1-3, 5. Tandai awal halaman jika Anda mau."
      },
      {
        "title": "Salin atau unduh",
        "description": "Salin teksnya, atau simpan sebagai file .txt."
      }
    ],
    "features": [
      {
        "title": "Paragraf tetap terjaga",
        "description": "Jeda baris dan jarak antarparagraf mengikuti halaman aslinya."
      },
      {
        "title": "Halaman demi halaman",
        "description": "Tandai awal setiap halaman, atau pilih sebagian halaman saja."
      },
      {
        "title": "Bahasa apa pun",
        "description": "Teks dalam aksara apa pun yang ada di PDF keluar apa adanya."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Mengapa tidak ada teks yang ditemukan?",
        "answer": "PDF tersebut kemungkinan hasil scan: gambar halaman tanpa teks di dalamnya. OCR PDF bisa membaca teks dari gambar tersebut."
      },
      {
        "question": "Apakah tata letaknya tetap terjaga?",
        "answer": "Kata-kata dan urutannya tetap; desainnya tidak. PDF menyimpan teks berdasarkan posisinya, jadi kolom yang berdampingan bisa terbaca menyamping dan tabel keluar sebagai baris-baris teks."
      },
      {
        "question": "Bisakah saya mendapatkan Markdown?",
        "answer": "Bisa. Ganti formatnya ke Markdown, atau gunakan PDF ke Markdown, yang juga mengenali judul dan daftar."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "pdf-to-markdown": {
    "name": "PDF ke Markdown",
    "shortName": "PDF ke Markdown",
    "tagline": "Ubah PDF menjadi Markdown lengkap dengan judul dan daftar, untuk catatan, wiki, dan alat AI. Gratis dan berjalan di perangkat Anda.",
    "intro": "PDF ke Markdown mengubah teks PDF menjadi Markdown: teks yang lebih besar menjadi judul, baris berpoin dan bernomor menjadi daftar, dan baris yang terpotong digabung kembali menjadi paragraf, termasuk kata yang terpisah oleh tanda hubung. Hasilnya siap dipakai di aplikasi catatan seperti Obsidian dan Notion, untuk wiki dan dokumentasi, atau ditempel ke asisten AI. Pilih halamannya, salin Markdown-nya, atau unduh sebagai file .md. Semuanya terjadi di browser Anda.",
    "seoTitle": "PDF ke Markdown – Gratis, Lengkap dengan Judul dan Daftar",
    "seoDescription": "Ubah PDF ke Markdown di browser Anda: judul dari teks yang lebih besar, daftar, dan paragraf yang tersambung. Untuk catatan, wiki, dan AI. Gratis, tanpa unggah file.",
    "keywords": [
      "pdf ke markdown",
      "ubah pdf ke markdown",
      "pdf ke md",
      "convert pdf to markdown",
      "pdf ke obsidian"
    ],
    "howToSteps": [
      {
        "title": "Buka PDF Anda",
        "description": "Letakkan atau pilih PDF yang berisi teks."
      },
      {
        "title": "Periksa Markdown-nya",
        "description": "Judul dan daftar dikenali; pilih halaman yang Anda perlukan."
      },
      {
        "title": "Salin atau unduh",
        "description": "Salin Markdown-nya, atau simpan sebagai file .md."
      }
    ],
    "features": [
      {
        "title": "Judul dikenali",
        "description": "Teks yang lebih besar dari isi menjadi judul # dengan tingkat yang tepat."
      },
      {
        "title": "Daftar dan paragraf",
        "description": "Poin menjadi daftar, dan baris yang terpotong menjadi paragraf utuh."
      },
      {
        "title": "Cocok untuk alat AI",
        "description": "Markdown yang rapi mudah dibaca oleh asisten AI dan aplikasi catatan."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Apakah tabel ikut dikonversi?",
        "answer": "Tidak. Sel tabel keluar sebagai baris-baris teks; rapikan secara manual jika Anda membutuhkan tabel Markdown."
      },
      {
        "question": "Mengapa tidak ada teks yang ditemukan?",
        "answer": "PDF tersebut kemungkinan hasil scan: gambar halaman tanpa teks di dalamnya. OCR PDF bisa membaca teks dari gambar tersebut."
      },
      {
        "question": "Apakah tata letaknya tetap terjaga?",
        "answer": "Kata-kata dan urutannya tetap; desainnya tidak. PDF menyimpan teks berdasarkan posisinya, jadi kolom yang berdampingan bisa terbaca menyamping dan tabel keluar sebagai baris-baris teks."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "text-to-pdf": {
    "name": "Teks ke PDF",
    "shortName": "Teks ke PDF",
    "tagline": "Ubah teks biasa atau file .txt menjadi PDF yang rapi dengan font, ukuran, dan margin pilihan Anda. Gratis dan berjalan di perangkat Anda.",
    "intro": "Teks ke PDF mengubah catatan, log, daftar, atau teks biasa apa pun menjadi PDF rapi yang tampil sama di semua perangkat. Ketik atau tempel teksnya, atau buka file .txt, lalu pilih A4 atau Letter, font sans, serif, atau gaya mesin tik, ukuran teks, dan margin. Baris panjang terbungkus dengan rapi, jeda baris tetap terjaga, dan halaman bisa diberi nomor. Pratinjau menampilkan PDF persis seperti yang akan disimpan, dan teks di dalamnya tetap bisa dicari. Semuanya terjadi di browser Anda.",
    "seoTitle": "Teks ke PDF – Ubah TXT ke PDF, Gratis",
    "seoDescription": "Ubah teks atau file .txt ke PDF langsung di browser Anda. Pilih font, ukuran, margin, dan nomor halaman; pratinjau langsung. Gratis, tanpa unggah file.",
    "keywords": [
      "teks ke pdf",
      "txt ke pdf",
      "ubah teks ke pdf",
      "notepad ke pdf",
      "convert txt to pdf"
    ],
    "howToSteps": [
      {
        "title": "Tambahkan teks Anda",
        "description": "Ketik, tempel, atau buka file .txt."
      },
      {
        "title": "Pilih tampilannya",
        "description": "Ukuran halaman, font, ukuran teks, margin, dan nomor halaman."
      },
      {
        "title": "Unduh PDF",
        "description": "Periksa pratinjaunya lalu simpan."
      }
    ],
    "features": [
      {
        "title": "Pratinjau langsung",
        "description": "Lihat setiap halaman seperti yang akan disimpan sebelum Anda mengunduh."
      },
      {
        "title": "Teks bisa dicari",
        "description": "PDF berisi teks sungguhan, bukan gambar teks."
      },
      {
        "title": "Banyak bahasa",
        "description": "Teks Latin, Yunani, Sirilik, Jepang, dan Korea ditulis dengan font yang mendukungnya."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Apakah tab dan spasi tetap terjaga?",
        "answer": "Jeda baris dan spasi di awal baris tetap terjaga; tab diubah menjadi empat spasi."
      },
      {
        "question": "Bisakah saya memformat teksnya?",
        "answer": "Untuk judul, teks tebal, dan daftar, gunakan Markdown ke PDF."
      },
      {
        "question": "Apakah ada batas ukuran?",
        "answer": "Tidak ada batas tetap; teks yang sangat panjang hanya butuh beberapa detik lebih lama."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "markdown-to-pdf": {
    "name": "Markdown ke PDF",
    "shortName": "Markdown ke PDF",
    "tagline": "Ubah Markdown menjadi PDF berformat dengan judul, daftar, kode, dan link yang berfungsi. Gratis dan berjalan di perangkat Anda.",
    "intro": "Markdown ke PDF mengubah file README, catatan, dan dokumentasi yang ditulis dalam Markdown menjadi PDF berformat rapi untuk dibagikan atau dicetak. Judul, teks tebal dan miring, kode sebaris, daftar, kutipan, blok kode, garis horizontal, dan link ditata, dan link tetap bisa diklik di PDF. Tempel Markdown Anda atau buka file .md, pilih ukuran halaman, font, dan margin, lalu periksa pratinjau langsung sebelum mengunduh. Semuanya terjadi di browser Anda.",
    "seoTitle": "Markdown ke PDF – Gratis, dengan Pratinjau Langsung",
    "seoDescription": "Ubah Markdown ke PDF langsung di browser Anda: judul, daftar, blok kode, dan link yang bisa diklik, dengan pratinjau langsung. Gratis, tanpa unggah file.",
    "keywords": [
      "markdown ke pdf",
      "md ke pdf",
      "ubah markdown ke pdf",
      "readme ke pdf",
      "convert markdown to pdf"
    ],
    "howToSteps": [
      {
        "title": "Tambahkan Markdown Anda",
        "description": "Tempel teksnya atau buka file .md."
      },
      {
        "title": "Pilih tampilannya",
        "description": "Ukuran halaman, font, ukuran teks, margin, dan nomor halaman."
      },
      {
        "title": "Unduh PDF",
        "description": "Periksa pratinjaunya lalu simpan."
      }
    ],
    "features": [
      {
        "title": "Format tetap terjaga",
        "description": "Judul, tebal, miring, kode, daftar, kutipan, dan garis."
      },
      {
        "title": "Link bisa diklik",
        "description": "Link di Markdown Anda berfungsi di PDF."
      },
      {
        "title": "Pratinjau langsung",
        "description": "Lihat halaman-halamannya sebelum Anda mengunduh."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Apakah tabel dan gambar didukung?",
        "answer": "Belum. Tabel dan gambar di Markdown muncul sebagai teksnya; judul, daftar, kode, dan link ditata."
      },
      {
        "question": "Markdown versi mana yang diikuti?",
        "answer": "Sintaks umum yang dipakai GitHub dan sebagian besar editor: # judul, **tebal**, *miring*, `kode`, daftar, > kutipan, ``` blok kode, dan [link](…)."
      },
      {
        "question": "Apakah teksnya bisa dicari?",
        "answer": "Ya. PDF berisi teks sungguhan, jadi teksnya bisa dipilih, dicari, dan disalin."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "extract-images-from-pdf": {
    "name": "Ekstrak Gambar dari PDF",
    "shortName": "Ekstrak Gambar",
    "tagline": "Simpan setiap gambar di dalam PDF dengan resolusi aslinya, sebagai PNG atau JPG, dalam satu ZIP. Gratis dan berjalan di perangkat Anda.",
    "intro": "Ekstrak Gambar dari PDF menemukan foto, logo, dan ilustrasi yang tertanam di PDF dan menyimpannya dengan resolusi saat disimpan di file, bukan sebagai screenshot halaman. Setiap gambar ditampilkan dengan ukurannya dan halaman tempat gambar itu muncul; gambar yang dipakai di banyak halaman, seperti logo, hanya dicantumkan sekali. Lihat dalam ukuran penuh, hapus centang pada gambar yang tidak Anda perlukan, lalu unduh sebagai PNG tanpa kehilangan kualitas atau JPG yang lebih kecil, sekaligus dalam satu ZIP. Semuanya terjadi di browser Anda.",
    "seoTitle": "Ekstrak Gambar dari PDF – Gratis, Resolusi Asli",
    "seoDescription": "Simpan gambar di dalam PDF dengan resolusi aslinya, langsung di browser Anda. Lihat, pilih, lalu unduh PNG atau JPG dalam satu ZIP. Gratis, tanpa unggah file.",
    "keywords": [
      "ekstrak gambar dari pdf",
      "ambil gambar dari pdf",
      "simpan gambar dari pdf",
      "cara mengambil foto dari pdf",
      "extract images from pdf"
    ],
    "howToSteps": [
      {
        "title": "Buka PDF Anda",
        "description": "Halaman-halamannya dicari untuk menemukan gambar."
      },
      {
        "title": "Pilih gambar",
        "description": "Lihat dalam ukuran penuh dan hapus centang pada gambar yang tidak Anda inginkan."
      },
      {
        "title": "Unduh gambarnya",
        "description": "Simpan file PNG atau JPG, sekaligus dalam satu ZIP."
      }
    ],
    "features": [
      {
        "title": "Resolusi asli",
        "description": "Gambar keluar dengan ukuran yang tersimpan di PDF, bukan sebagai screenshot."
      },
      {
        "title": "Setiap gambar sekali",
        "description": "Logo yang berulang di setiap halaman dicantumkan sekali, beserta halamannya."
      },
      {
        "title": "Lewati yang tidak perlu",
        "description": "Gambar kecil seperti ikon dan garis bisa dilewati."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Mengapa ada gambar yang tidak muncul?",
        "answer": "Beberapa PDF menggambar grafik dengan garis dan bentuk, bukan gambar, dan grafik seperti itu tidak bisa diekstrak sebagai gambar. Untuk menyimpan tampilan halaman, gunakan PDF ke JPG."
      },
      {
        "question": "PNG atau JPG?",
        "answer": "PNG menjaga setiap piksel persis sama; JPG menghasilkan file yang jauh lebih kecil untuk foto."
      },
      {
        "question": "Apakah saya mendapatkan file aslinya kembali?",
        "answer": "Anda mendapatkan data gambar yang tersimpan di PDF, didekode pada resolusinya. Format dan nama file asli tidak disimpan di dalam PDF."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "delete-blank-pages-pdf": {
    "name": "Hapus Halaman Kosong dari PDF",
    "shortName": "Hapus Halaman Kosong",
    "tagline": "Temukan halaman kosong di PDF hasil scan dan hapus setelah diperiksa sebentar. Gratis dan berjalan di perangkat Anda.",
    "intro": "Scan bolak-balik meninggalkan halaman belakang yang kosong di PDF Anda. Hapus Halaman Kosong memeriksa setiap halaman, mencentang yang kosong, dan membiarkan Anda memeriksanya sebelum ada yang dihapus: lihat halaman mana pun dalam ukuran penuh, hapus centang pada halaman yang ingin Anda simpan, atau centang sendiri. Halaman kosong hasil scan jarang benar-benar putih, jadi penggeser sensitivitas menentukan seberapa banyak tekstur kertas, bayangan tembus dari sisi belakang, atau nomor halaman yang berdiri sendiri masih dianggap kosong. Lalu unduh PDF tanpa halaman-halaman itu. Semuanya terjadi di browser Anda.",
    "seoTitle": "Hapus Halaman Kosong dari PDF – Gratis, Otomatis",
    "seoDescription": "Temukan dan hapus halaman kosong dari PDF hasil scan langsung di browser Anda. Deteksi otomatis, sensitivitas bisa diatur, periksa sebelum menghapus. Gratis.",
    "keywords": [
      "hapus halaman kosong pdf",
      "menghapus halaman kosong di pdf",
      "cara hapus halaman kosong pdf",
      "hapus halaman putih pdf",
      "remove blank pages pdf"
    ],
    "howToSteps": [
      {
        "title": "Buka PDF Anda",
        "description": "Setiap halaman diperiksa apakah ada isinya."
      },
      {
        "title": "Periksa halaman yang dicentang",
        "description": "Halaman kosong sudah dicentang; atur sensitivitasnya atau centang dan hapus centang halaman."
      },
      {
        "title": "Unduh",
        "description": "Simpan PDF tanpa halaman yang dicentang."
      }
    ],
    "features": [
      {
        "title": "Deteksi otomatis",
        "description": "Halaman kosong ditemukan dan dicentang untuk Anda."
      },
      {
        "title": "Sensitivitas bisa diatur",
        "description": "Tentukan apakah halaman yang hampir kosong dianggap kosong."
      },
      {
        "title": "Periksa sebelum menghapus",
        "description": "Buka halaman mana pun dalam ukuran penuh sebelum dihapus."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Apakah halaman dengan sedikit tulisan ikut terhapus?",
        "answer": "Pada pengaturan bawaan, halaman dengan satu baris teks tetap disimpan. Naikkan sensitivitasnya untuk juga menghapus halaman yang hanya berisi nomor halaman atau tanda samar."
      },
      {
        "question": "Mengapa halaman kosong tidak dicentang?",
        "answer": "Noise dari scanner, tepi yang gelap, atau bayangan tembus dari sisi belakang bisa terlihat seperti isi. Naikkan sensitivitasnya atau centang sendiri."
      },
      {
        "question": "Apakah bagian lain PDF ikut berubah?",
        "answer": "Tidak. Halaman lainnya disalin apa adanya."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "compare-pdf": {
    "name": "Bandingkan PDF",
    "shortName": "Bandingkan PDF",
    "tagline": "Lihat apa yang berubah di antara dua versi PDF: teks kata demi kata, dan setiap halaman piksel demi piksel. Gratis dan berjalan di perangkat Anda.",
    "intro": "Bandingkan PDF menunjukkan perbedaan antara dua versi dokumen, seperti kontrak sebelum dan sesudah diedit, atau dua draf laporan. Tampilan teks mencantumkan setiap kata yang dihapus dan ditambahkan, bisa hanya bagian yang berubah jika Anda mau, beserta jumlah perubahannya. Tampilan visual menjajarkan halaman-halaman dan menyorot setiap perbedaan dengan warna magenta, jadi Anda juga bisa melihat perubahan pada gambar, tata letak, dan tanda tangan. Unduh perubahannya sebagai laporan teks. Semuanya terjadi di browser Anda.",
    "seoTitle": "Bandingkan PDF Online – Temukan Perbedaannya, Gratis",
    "seoDescription": "Bandingkan dua PDF di browser Anda: kata yang berubah disorot, dan halaman dibandingkan piksel demi piksel. Gratis, privat, tanpa unggah file.",
    "keywords": [
      "bandingkan pdf",
      "membandingkan dua file pdf",
      "cek perbedaan pdf",
      "cari perbedaan dua pdf",
      "compare pdf online"
    ],
    "howToSteps": [
      {
        "title": "Tambahkan kedua PDF",
        "description": "Yang asli dulu, lalu versi yang diubah."
      },
      {
        "title": "Lihat perubahannya",
        "description": "Baca perubahan teks, atau beralih ke perbandingan visual halaman demi halaman."
      },
      {
        "title": "Simpan laporan",
        "description": "Unduh perubahan teks sebagai laporan .txt."
      }
    ],
    "features": [
      {
        "title": "Kata demi kata",
        "description": "Kata yang dihapus berwarna merah, kata yang ditambahkan berwarna hijau, beserta totalnya."
      },
      {
        "title": "Piksel demi piksel",
        "description": "Setiap perbedaan visual di halaman disorot dengan warna magenta."
      },
      {
        "title": "Perubahannya saja",
        "description": "Sembunyikan teks yang tidak berubah untuk fokus pada yang berbeda."
      },
      {
        "title": "Rahasia tetap aman",
        "description": "Kedua dokumen tetap berada di perangkat Anda."
      }
    ],
    "faqs": [
      {
        "question": "Apakah kedua PDF harus punya jumlah halaman yang sama?",
        "answer": "Tidak. Teks dibandingkan secara keseluruhan, jadi halaman yang ditambahkan atau dihapus muncul sebagai teks yang ditambahkan atau dihapus. Tampilan visual membandingkan halaman dengan nomor yang sama."
      },
      {
        "question": "Mengapa tampilan visual menunjukkan perubahan yang tidak ada di tampilan teks?",
        "answer": "Gambar, tata letak, warna, dan tanda tangan bukan teks; tampilan visual menangkapnya."
      },
      {
        "question": "Bisakah membandingkan PDF hasil scan?",
        "answer": "Tampilan visual bisa. Untuk tampilan teks, proses kedua file dengan OCR PDF terlebih dahulu."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  "overlay-pdf": {
    "name": "Overlay PDF",
    "shortName": "Overlay PDF",
    "tagline": "Tempatkan kop surat, latar belakang, atau stempel dari satu PDF di atas atau di bawah halaman PDF lain. Gratis dan berjalan di perangkat Anda.",
    "intro": "Overlay PDF menumpuk dua PDF halaman demi halaman: letakkan kop surat perusahaan Anda di belakang surat, desain latar belakang di bawah laporan, atau lembar “Draf” atau “Disetujui” di atas setiap halaman. Pilih apakah overlay diletakkan di atas atau di bawah, halaman overlay mana yang dipakai di mana (halaman pertama di setiap halaman, atau halaman per halaman), halaman mana yang ditutupi, dan seberapa kuat tampilannya. Pratinjau menampilkan setiap halaman seperti yang akan disimpan. Semuanya terjadi di browser Anda.",
    "seoTitle": "Overlay PDF – Tambah Kop Surat atau Latar Belakang, Gratis",
    "seoDescription": "Tempatkan kop surat, latar belakang, atau stempel PDF di atas atau di bawah halaman PDF lain, langsung di browser Anda. Pratinjau langsung. Gratis, tanpa unggah file.",
    "keywords": [
      "overlay pdf",
      "tambah kop surat ke pdf",
      "latar belakang pdf",
      "tumpuk pdf di atas pdf lain",
      "kop surat pdf"
    ],
    "howToSteps": [
      {
        "title": "Buka PDF Anda",
        "description": "Dokumen yang akan diberi overlay."
      },
      {
        "title": "Pilih PDF overlay",
        "description": "Kop surat, latar belakang, atau lembar stempel; atur di atas atau di bawah, halaman, dan opasitasnya."
      },
      {
        "title": "Unduh PDF",
        "description": "Periksa pratinjaunya lalu simpan."
      }
    ],
    "features": [
      {
        "title": "Di atas atau di bawah",
        "description": "Stempel di atas teks, atau kop surat di belakangnya."
      },
      {
        "title": "Pencocokan halaman",
        "description": "Pakai halaman overlay pertama di semua halaman, atau cocokkan halaman satu per satu."
      },
      {
        "title": "Tetap tajam",
        "description": "Overlay ditempatkan sebagai konten vektor, bukan gambar."
      },
      {
        "title": "Privat",
        "description": "PDF diproses di browser Anda dan tidak pernah diunggah."
      }
    ],
    "faqs": [
      {
        "question": "Mengapa overlay di bawah tidak terlihat?",
        "answer": "Beberapa PDF memberi latar belakang putih di setiap halaman, yang menutupi apa pun di bawahnya. Sebagai gantinya, letakkan overlay di atas dengan opasitas lebih rendah."
      },
      {
        "question": "Bagaimana jika ukuran halamannya berbeda?",
        "answer": "Overlay diskalakan agar pas di setiap halaman, dengan proporsi tetap terjaga, lalu diletakkan di tengah."
      },
      {
        "question": "Bisakah saya memakai gambar sebagai overlay?",
        "answer": "Gunakan JPG ke PDF untuk mengubah gambar menjadi PDF terlebih dahulu, atau Watermark PDF untuk menempatkan gambar secara langsung."
      },
      {
        "question": "Apakah PDF saya diunggah?",
        "answer": "Tidak. Semuanya terjadi di browser Anda, jadi dokumen tetap berada di perangkat Anda."
      }
    ]
  },
  // Social media sizes, print calculators, color blindness simulator
"social-media-image-resizer": {
    "name": "Ubah Ukuran Gambar Media Sosial",
    "shortName": "Media Sosial",
    "tagline": "Ubah ukuran gambar untuk Instagram, YouTube, Facebook, LinkedIn, Pinterest, X, dan TikTok. Gratis dan berjalan di perangkat Anda.",
    "intro": "Ubah Ukuran Gambar Media Sosial memberi satu gambar ukuran persis yang diminta tiap jaringan. Pilih ukuran dari daftar, seret gambar sampai bagian yang tepat masuk bingkai, lalu unduh. Jika gambar tidak cocok dengan bentuknya, tampilkan semuanya di atas salinan buram gambar itu atau warna pilihan Anda. Gambar tetap di perangkat Anda.",
    "seoTitle": "Ubah Ukuran Gambar untuk Media Sosial – Gratis",
    "seoDescription": "Ubah ukuran gambar untuk Instagram, YouTube, Facebook, LinkedIn, Pinterest, X, dan TikTok. Seret untuk mengatur posisi, lalu unduh. Gratis, tanpa unggah.",
    "keywords": ["ubah ukuran gambar media sosial", "ukuran gambar untuk media sosial", "ukuran foto media sosial", "ukuran gambar instagram facebook", "resize foto untuk sosmed"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih JPG, PNG, WebP, HEIC, atau TIFF." },
      { "title": "Pilih ukuran dan atur posisi", "description": "Pilih jaringan dan format, lalu seret gambar atau gunakan penggeser." },
      { "title": "Unduh", "description": "Simpan sebagai JPG, PNG, atau WebP tepat pada ukuran itu." }
    ],
    "features": [
      { "title": "16 ukuran siap pakai", "description": "Post, story, thumbnail, banner, dan sampul untuk jaringan utama." },
      { "title": "Isi atau tampilkan semua", "description": "Potong untuk mengisi bingkai, atau pertahankan seluruh gambar di atas latar buram atau berwarna." },
      { "title": "Privat", "description": "Semuanya berlangsung di browser Anda. Gambar tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Apakah ini ukuran terbaru?", "answer": "Ini ukuran yang dipublikasikan jaringan tersebut, sejauh yang kami tahu. Jaringan mengubahnya dari waktu ke waktu, jadi jika hasil unggahan terlihat salah, periksa halaman bantuan jaringan itu." },
      { "question": "Apakah kualitas gambar saya akan turun?", "answer": "Memperkecil gambar menjaga ketajamannya. Jika gambar lebih kecil dari ukuran yang dipilih, gambar harus diperbesar dan mungkin terlihat kurang tajam; alat ini memberi tahu Anda saat itu terjadi." },
      { "question": "Apa fungsi “Tampilkan semua”?", "answer": "Fitur ini memuat seluruh gambar di dalam bingkai dan mengisi ruang di sekitarnya dengan salinan buram gambar itu atau warna pilihan Anda, jadi tidak ada yang terpotong." },
      { "question": "Apakah gambar saya diunggah?", "answer": "Tidak. Gambar diproses di perangkat Anda dan tetap di sana." }
    ]
  },
"instagram-post-resizer": {
    "name": "Ubah Ukuran Post Instagram",
    "shortName": "Post Instagram",
    "tagline": "Sesuaikan gambar dengan ukuran post Instagram persegi, potret, tinggi, atau lanskap. Gratis dan berjalan di perangkat Anda.",
    "intro": "Ubah Ukuran Post Instagram membuat gambar berbentuk tepat sebelum Anda mempostingnya, jadi Instagram tidak memotongnya untuk Anda. Pilih persegi (1080 × 1080), potret (1080 × 1350), tinggi (1080 × 1440), atau lanskap (1080 × 566), lalu seret gambar sampai bagian yang penting masuk bingkai. Untuk memposting foto lebar tanpa dipotong, tampilkan semuanya di atas latar buram.",
    "seoTitle": "Ubah Ukuran Post Instagram – Persegi, Potret, 3:4, Gratis",
    "seoDescription": "Ubah ukuran foto untuk post Instagram: persegi 1080×1080, potret 1080×1350, tinggi 3:4, atau lanskap. Seret dan hindari potongan tak terduga. Gratis, tanpa unggah.",
    "keywords": ["ukuran post instagram", "ubah ukuran gambar untuk instagram", "resize foto instagram", "instagram 1080x1350", "ukuran instagram 3:4"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih foto yang ingin Anda posting." },
      { "title": "Pilih bentuknya", "description": "Pilih persegi, potret, tinggi, atau lanskap, lalu seret foto ke posisinya." },
      { "title": "Unduh dan posting", "description": "Simpan lalu unggah ke Instagram seperti biasa." }
    ],
    "features": [
      { "title": "Semua bentuk post", "description": "Persegi, potret 4:5, tinggi 3:4, dan lanskap, dengan lebar 1080 piksel." },
      { "title": "Tanpa potongan paksa", "description": "Tampilkan seluruh foto di atas latar buram atau berwarna jika Anda tidak ingin kehilangan bagian mana pun." },
      { "title": "Privat", "description": "Foto diproses di perangkat Anda dan tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Berapa ukuran post Instagram yang tepat?", "answer": "Lebar 1080 piksel. Instagram tidak memotong foto selama bentuknya di antara lebar 1,91:1 (1080 × 566) dan tinggi 3:4 (1080 × 1440). Persegi 1080 × 1080, dan 1080 × 1350 adalah ukuran potret yang populer." },
      { "question": "Bagaimana cara memposting foto utuh tanpa dipotong?", "answer": "Pilih “Tampilkan semua”. Seluruh foto berada di dalam bingkai, di atas salinan buram foto itu atau warna pilihan Anda." },
      { "question": "Format apa yang sebaiknya dipilih?", "answer": "JPG cocok untuk foto. PNG cocok untuk grafis dengan teks, meskipun ukuran filenya lebih besar." }
    ]
  },
  "instagram-story-resizer": {
    "name": "Ubah Ukuran Story Instagram",
    "shortName": "Story Instagram",
    "tagline": "Jadikan gambar berukuran 1080 × 1920 untuk Stories, Reels, dan TikTok. Gratis dan berjalan di perangkat Anda.",
    "intro": "Ubah Ukuran Story Instagram mengubah gambar apa pun menjadi bentuk tinggi 1080 × 1920 yang dipakai Stories, Reels, dan TikTok. Panduan putus-putus menunjukkan letak tombol dan keterangan aplikasi, jadi Anda bisa menjauhkan wajah dan teks dari sana. Foto lebar bisa tetap utuh di atas salinan buramnya sendiri, bukan dipotong.",
    "seoTitle": "Ukuran Story Instagram – 1080×1920, Gratis",
    "seoDescription": "Ubah ukuran gambar apa pun ke 1080×1920 untuk Instagram Stories, Reels, dan TikTok, dengan panduan area aman. Gratis, tanpa daftar, gambar Anda tidak diunggah.",
    "keywords": ["ukuran story instagram", "ubah ukuran gambar untuk story instagram", "gambar 1080x1920", "ukuran cover reels", "ukuran gambar tiktok"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih foto atau grafis." },
      { "title": "Atur posisinya", "description": "Seret ke posisinya, dan jaga hal penting tetap di dalam area aman putus-putus." },
      { "title": "Unduh", "description": "Simpan pada 1080 × 1920, siap ditambahkan ke story Anda." }
    ],
    "features": [
      { "title": "Panduan area aman", "description": "Menunjukkan bagian yang tertutup tombol dan keterangan aplikasi. Panduan ini tidak ikut tersimpan di gambar." },
      { "title": "Latar buram", "description": "Foto lebar muat utuh, dengan salinan buramnya mengisi sisanya." },
      { "title": "Privat", "description": "Gambar tetap di perangkat Anda." }
    ],
    "faqs": [
      { "question": "Berapa ukuran Story Instagram?", "answer": "1080 × 1920 piksel, berbentuk 9:16. Reels dan TikTok memakai bentuk yang sama." },
      { "question": "Apa itu area aman?", "answer": "Bagian tengah bingkai. Sekitar 250 piksel di atas dan sekitar 340 di bawah bisa tertutup nama profil, tombol, dan keterangan, jadi hindari menaruh teks di sana." },
      { "question": "Apakah kotak putus-putus akan muncul di gambar saya?", "answer": "Tidak. Kotak itu hanya muncul di pratinjau dan tidak pernah disimpan." }
    ]
  },
  "youtube-thumbnail-maker": {
    "name": "Pembuat Thumbnail YouTube",
    "shortName": "Thumbnail YouTube",
    "tagline": "Ubah gambar menjadi thumbnail YouTube 16:9 yang tetap dalam batas unggah YouTube. Gratis dan berjalan di perangkat Anda.",
    "intro": "Pembuat Thumbnail YouTube membingkai gambar dalam bentuk 16:9 yang diminta YouTube. Pilih 1280 × 720, yang tetap di bawah batas 2 MB untuk mengunggah dari ponsel, atau 3840 × 2160, ukuran besar yang disarankan YouTube, untuk mengunggah dari komputer. Seret gambar untuk membingkainya, perbesar bagian yang penting, lalu unduh. Untuk menambahkan teks, gunakan Tambah Teks ke Gambar.",
    "seoTitle": "Buat Thumbnail YouTube – 16:9, Hingga 4K, Gratis",
    "seoDescription": "Buat thumbnail YouTube 16:9 dari gambar apa pun: 1280×720 di bawah 2 MB untuk ponsel, atau 4K. Seret, zoom, lalu unduh. Gratis, tanpa daftar, tanpa unggah.",
    "keywords": ["buat thumbnail youtube", "ukuran thumbnail youtube", "thumbnail 1280x720", "ubah ukuran gambar untuk thumbnail youtube", "thumbnail youtube 2mb"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih screenshot atau foto." },
      { "title": "Pilih ukuran dan bingkai gambarnya", "description": "Pilih 1280 × 720 atau 4K, lalu seret dan zoom sampai subjek mengisi bingkai." },
      { "title": "Unduh", "description": "Simpan file dan unggah di YouTube Studio." }
    ],
    "features": [
      { "title": "Dua ukuran", "description": "1280 × 720 untuk file kecil, atau 3840 × 2160, ukuran yang disarankan YouTube." },
      { "title": "Dalam batas unggah", "description": "File JPG dan WebP tetap di bawah 2 MB pada 1280 × 720 dan di bawah 50 MB pada 4K." },
      { "title": "Privat", "description": "Gambar diproses di perangkat Anda dan tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Berapa ukuran thumbnail YouTube?", "answer": "YouTube meminta gambar 16:9 sebesar mungkin: YouTube menyarankan 3840 × 2160 piksel, dengan lebar minimum 640 piksel." },
      { "question": "Berapa batas ukuran file?", "answer": "2 MB saat mengunggah dari ponsel dan 50 MB dari komputer." },
      { "question": "Ukuran mana yang sebaiknya dipilih?", "answer": "1280 × 720 berfungsi di mana saja dan cukup untuk sebagian besar gambar. Pilih 4K jika gambar Anda setidaknya sebesar itu; memperbesar gambar yang lebih kecil tidak menambah detail." },
      { "question": "Bisakah saya menambahkan teks ke thumbnail?", "answer": "Tidak di alat ini. Gunakan Tambah Teks ke Gambar pada thumbnail yang sudah diunduh, lalu unggah hasilnya." }
    ]
  },
  "youtube-banner-maker": {
    "name": "Pembuat Banner YouTube",
    "shortName": "Banner YouTube",
    "tagline": "Buat banner channel YouTube 2560 × 1440, dengan panduan bagian yang ditampilkan tiap perangkat. Gratis dan berjalan di perangkat Anda.",
    "intro": "Pembuat Banner YouTube menyesuaikan gambar ke ukuran 2560 × 1440 yang disarankan YouTube untuk banner channel. Ponsel dan komputer hanya menampilkan satu jalur di tengah, sedangkan TV menampilkan semuanya, jadi panduan putus-putus menandai jalur yang selalu terlihat. Letakkan nama dan logo Anda di dalamnya. File dijaga di bawah batas 6 MB dari YouTube.",
    "seoTitle": "Buat Banner YouTube – 2560×1440, Area Aman, Gratis",
    "seoDescription": "Buat banner channel YouTube 2560×1440 dengan panduan area aman yang menunjukkan tampilan di ponsel dan komputer. Gratis, tanpa daftar, tanpa unggah.",
    "keywords": ["buat banner youtube", "ukuran banner youtube", "ukuran gambar channel youtube", "banner 2560x1440", "area aman banner youtube"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Pilih gambar lebar beresolusi tinggi." },
      { "title": "Atur posisinya", "description": "Seret agar bagian penting berada di dalam jalur putus-putus." },
      { "title": "Unduh", "description": "Simpan lalu unggah di bagian Penyesuaian di YouTube Studio." }
    ],
    "features": [
      { "title": "Panduan area aman", "description": "Menandai jalur 1546 × 423 yang ditampilkan semua perangkat. Panduan ini tidak ikut tersimpan di gambar." },
      { "title": "Di bawah batas unggah", "description": "File JPG dan WebP otomatis dijaga di bawah 6 MB." },
      { "title": "Privat", "description": "Gambar tetap di perangkat Anda." }
    ],
    "faqs": [
      { "question": "Berapa ukuran banner YouTube?", "answer": "YouTube menyarankan 2560 × 1440 piksel. Area yang aman di semua perangkat adalah 1546 × 423 piksel di bagian tengah." },
      { "question": "Mengapa banner saya terpotong di ponsel?", "answer": "Tiap perangkat menampilkan bagian yang berbeda. Ponsel dan komputer hanya menampilkan jalur tengah, jadi letakkan teks dan logo di sana." },
      { "question": "Gambar saya terlihat kurang tajam. Mengapa?", "answer": "Lebar 2560 piksel itu besar, dan gambar yang lebih kecil harus diperbesar. Mulailah dari gambar beresolusi tertinggi yang Anda miliki." }
    ]
  },
  "facebook-cover-maker": {
    "name": "Pembuat Sampul Facebook",
    "shortName": "Sampul Facebook",
    "tagline": "Buat gambar berukuran tepat untuk sampul atau post Facebook. Gratis dan berjalan di perangkat Anda.",
    "intro": "Pembuat Sampul Facebook menyesuaikan gambar ke ukuran 851 × 315 yang disarankan Facebook untuk sampul. Facebook menampilkan sampul dalam bentuk berbeda di komputer dan ponsel, jadi letakkan wajah dan teks di dekat bagian tengah. Tersedia juga ukuran umum 1200 × 630 untuk post link dan gambar. Seret gambar sampai posisinya pas, lalu unduh.",
    "seoTitle": "Buat Sampul Facebook – 851×315, Gratis",
    "seoDescription": "Ubah ukuran gambar untuk sampul (851×315) atau post (1200×630) Facebook. Seret untuk mengatur posisi, lalu unduh. Gratis, tanpa daftar, tanpa unggah.",
    "keywords": ["ukuran foto sampul facebook", "buat sampul facebook", "ubah ukuran gambar untuk sampul facebook", "851x315", "ukuran gambar post facebook"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih gambar lebar." },
      { "title": "Pilih dan atur posisi", "description": "Pilih sampul atau post, lalu seret gambar ke posisinya." },
      { "title": "Unduh", "description": "Simpan lalu unggah ke profil atau halaman Anda." }
    ],
    "features": [
      { "title": "Ukuran yang disarankan Facebook", "description": "851 × 315 piksel untuk sampul." },
      { "title": "Ukuran sampul dan post", "description": "851 × 315 untuk sampul dan 1200 × 630 untuk post." },
      { "title": "Privat", "description": "Gambar tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Berapa ukuran foto sampul Facebook?", "answer": "Menurut Facebook, 851 × 315 piksel paling cepat dimuat, sebagai JPG sRGB di bawah 100 KB. Ukuran minimumnya 400 × 150 piksel." },
      { "question": "Mengapa sampul saya terlihat berbeda di ponsel?", "answer": "Facebook menampilkan sampul dalam bentuk berbeda di ponsel (2,4:1), dan foto profil Anda sedikit menimpa sampul. Letakkan wajah dan teks di dekat bagian tengah, dan periksa tampilan keduanya setelah mengunggah." },
      { "question": "Bagaimana agar di bawah 100 KB?", "answer": "Simpan sebagai JPG dan turunkan kualitas sampai ukuran yang ditampilkan di bawah 100 KB. Di bawah 100 KB adalah saran Facebook agar cepat dimuat, bukan batas." }
    ]
  },
  "linkedin-banner-maker": {
    "name": "Pembuat Banner LinkedIn",
    "shortName": "Banner LinkedIn",
    "tagline": "Buat banner profil LinkedIn 1584 × 396 dari gambar apa pun. Gratis dan berjalan di perangkat Anda.",
    "intro": "Pembuat Banner LinkedIn memotong gambar ke bentuk sangat lebar 1584 × 396 untuk banner profil LinkedIn. Seret gambar ke atas dan ke bawah untuk memilih jalur yang Anda inginkan, dan zoom jika perlu. Tersedia juga ukuran 1200 × 627 untuk post link dan gambar. Foto profil menutupi sebagian kiri bawah banner, jadi jauhkan detail penting dari sana.",
    "seoTitle": "Buat Banner LinkedIn – 1584×396, Gratis",
    "seoDescription": "Buat banner profil LinkedIn 1584×396 atau gambar post 1200×627 dari gambar apa pun. Seret untuk mengatur posisi. Gratis, tanpa daftar, tanpa unggah.",
    "keywords": ["ukuran banner linkedin", "ukuran foto latar linkedin", "buat banner linkedin", "1584x396", "gambar sampul linkedin"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih gambar." },
      { "title": "Pilih jalurnya", "description": "Seret ke atas dan ke bawah sampai bagian yang Anda inginkan masuk bingkai." },
      { "title": "Unduh", "description": "Simpan lalu tambahkan ke profil LinkedIn Anda." }
    ],
    "features": [
      { "title": "Ukuran banner dan post", "description": "1584 × 396 untuk banner profil dan 1200 × 627 untuk post." },
      { "title": "Seret atau gunakan penggeser", "description": "Atur posisi gambar dengan pointer, sentuhan, atau keyboard." },
      { "title": "Privat", "description": "Gambar tetap di perangkat Anda." }
    ],
    "faqs": [
      { "question": "Berapa ukuran banner LinkedIn?", "answer": "1584 × 396 piksel untuk profil pribadi, berbentuk 4:1." },
      { "question": "Bagian mana yang tertutup foto profil saya?", "answer": "Foto profil menimpa bagian kiri bawah banner, jadi hindari menaruh teks atau wajah di sana." },
      { "question": "Apakah ini berlaku untuk halaman perusahaan?", "answer": "Halaman perusahaan memakai bentuk yang berbeda, jadi banner ini akan terpotong di sana." }
    ]
  },
  "pinterest-pin-resizer": {
    "name": "Ubah Ukuran Pin Pinterest",
    "shortName": "Pin Pinterest",
    "tagline": "Ubah ukuran gambar ke bentuk tinggi 1000 × 1500 untuk pin Pinterest. Gratis dan berjalan di perangkat Anda.",
    "intro": "Ubah Ukuran Pin Pinterest membuat gambar berukuran 1000 × 1500, bentuk tinggi 2:3 yang disarankan Pinterest untuk pin. Potong untuk mengisi bingkai dan seret untuk memilih bagian yang tampil, atau pertahankan foto lebar tetap utuh di atas latar buram atau berwarna.",
    "seoTitle": "Ukuran Pin Pinterest – 1000×1500, Gratis",
    "seoDescription": "Ubah ukuran gambar ke 1000×1500 untuk pin Pinterest. Potong untuk mengisi atau pertahankan seluruh gambar di atas latar. Gratis, tanpa daftar, tanpa unggah.",
    "keywords": ["ukuran pin pinterest", "ukuran gambar pinterest", "ubah ukuran gambar untuk pinterest", "1000x1500", "buat pin pinterest"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih foto atau grafis." },
      { "title": "Sesuaikan", "description": "Isi bingkai lalu seret, atau tampilkan seluruh gambar di atas latar." },
      { "title": "Unduh", "description": "Simpan file 1000 × 1500 dan pin." }
    ],
    "features": [
      { "title": "Bentuk yang disarankan", "description": "1000 × 1500 piksel, berbentuk 2:3." },
      { "title": "Foto lebar tetap utuh", "description": "Tampilkan semuanya di atas salinan buramnya atau warna." },
      { "title": "Privat", "description": "Gambar diproses di perangkat Anda." }
    ],
    "faqs": [
      { "question": "Berapa ukuran pin Pinterest yang tepat?", "answer": "Pinterest menyarankan bentuk 2:3, misalnya 1000 × 1500 piksel." },
      { "question": "Bisakah saya memakai foto lanskap?", "answer": "Bisa. Pilih “Tampilkan semua” untuk mempertahankan seluruh foto, atau isi bingkai dan pilih bagian yang ingin disimpan." },
      { "question": "Apakah gambar saya diunggah?", "answer": "Tidak. Gambar tetap di perangkat Anda." }
    ]
  },
  "open-graph-image-maker": {
    "name": "Pembuat Gambar Open Graph",
    "shortName": "Gambar Open Graph",
    "tagline": "Buat gambar 1200 × 630 yang tampil saat link dibagikan. Gratis dan berjalan di perangkat Anda.",
    "intro": "Pembuat Gambar Open Graph menyiapkan gambar yang muncul saat seseorang membagikan halaman Anda di media sosial atau aplikasi chat. Alat ini menyesuaikan gambar apa pun ke ukuran 1200 × 630 yang banyak dipakai. Setelah gambar ada di situs Anda, arahkan tag og:image halaman Anda ke gambar itu.",
    "seoTitle": "Buat Gambar Open Graph – 1200×630 og:image, Gratis",
    "seoDescription": "Buat gambar Open Graph 1200×630 untuk pratinjau link di media sosial dan aplikasi chat. Seret untuk mengatur posisi, lalu unduh. Gratis, tanpa unggah.",
    "keywords": ["ukuran gambar open graph", "generator gambar og", "ukuran og:image", "1200x630", "gambar pratinjau link"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih gambar atau grafis." },
      { "title": "Atur posisinya", "description": "Seret dan zoom sampai terlihat pas." },
      { "title": "Unduh dan tautkan", "description": "Unggah file ke situs Anda dan jadikan og:image halaman Anda." }
    ],
    "features": [
      { "title": "Ukuran pratinjau yang umum", "description": "1200 × 630 piksel, dipakai jaringan utama dan aplikasi chat." },
      { "title": "File kecil", "description": "Disimpan dengan encoder yang efisien, jadi pratinjau cepat dimuat." },
      { "title": "Privat", "description": "Gambar tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Apa itu gambar Open Graph?", "answer": "Gambar yang tampil di kartu pratinjau saat link ke halaman Anda dibagikan. Anda mengaturnya dengan tag og:image di HTML halaman." },
      { "question": "Berapa ukuran yang tepat?", "answer": "1200 × 630 piksel adalah pilihan umum, dengan bentuk sekitar 1,91:1." },
      { "question": "Bagaimana cara memakai filenya?", "answer": "Unggah ke situs web Anda dan tambahkan <meta property=\"og:image\" content=\"the full URL of the image\"> ke halaman Anda." }
    ]
  },
  "pixels-to-inches": {
    "name": "Piksel ke Inci",
    "shortName": "Piksel → Inci",
    "tagline": "Konversi piksel ke inci pada DPI berapa pun. Gratis, tanpa perlu instal apa pun.",
    "intro": "Piksel ke Inci memberi tahu berapa ukuran sejumlah piksel dalam inci. Piksel tidak punya ukuran tetap, jadi jawabannya bergantung pada DPI, yaitu jumlah piksel per inci: bagi piksel dengan DPI. Ketik nilai di kotak mana pun dan kotak lainnya ikut berubah, termasuk sentimeter dan milimeter.",
    "seoTitle": "Konversi Piksel ke Inci – DPI Apa Pun, Gratis",
    "seoDescription": "Konversi piksel ke inci pada 72, 96, 150, 300, atau DPI apa pun, juga ke sentimeter dan milimeter. Gratis, instan, tanpa daftar.",
    "keywords": ["piksel ke inci", "px ke inci", "konversi piksel ke inci", "1000 piksel berapa inci", "piksel ke inci 300 dpi"],
    "howToSteps": [
      { "title": "Masukkan piksel", "description": "Ketik jumlah piksel." },
      { "title": "Pilih DPI", "description": "Pilih nilai umum atau ketik nilai Anda sendiri." },
      { "title": "Baca hasilnya", "description": "Lihat inci, sentimeter, dan milimeter secara langsung." }
    ],
    "features": [
      { "title": "Berfungsi ke segala arah", "description": "Ketik di kotak mana pun dan kotak lainnya diperbarui." },
      { "title": "DPI apa pun", "description": "Nilai umum tinggal diketuk, atau ketik nilai Anda sendiri." },
      { "title": "Tabel praktis", "description": "Nilai umum pada DPI pilihan Anda." }
    ],
    "faqs": [
      { "question": "Bagaimana cara mengonversi piksel ke inci?", "answer": "Bagi piksel dengan DPI. Misalnya, 3000 piksel pada 300 DPI adalah 3000 ÷ 300 = 10 inci." },
      { "question": "Berapa piksel dalam satu inci?", "answer": "Sebanyak nilai DPI: 96 pada 96 DPI, 300 pada 300 DPI. Piksel tidak punya ukuran fisik yang tetap." },
      { "question": "DPI berapa yang sebaiknya dipakai?", "answer": "Pakai 300 untuk cetakan berkualitas dan 150 untuk cetakan sehari-hari. Untuk layar, 96 adalah asumsi umum di web, dan 72 adalah kebiasaan lama." }
    ]
  },
  "inches-to-pixels": {
    "name": "Inci ke Piksel",
    "shortName": "Inci → Piksel",
    "tagline": "Cari tahu berapa piksel yang dibutuhkan ukuran cetak pada DPI berapa pun. Gratis, tanpa perlu instal apa pun.",
    "intro": "Inci ke Piksel memberi tahu berapa piksel yang Anda perlukan untuk mengisi ukuran dalam inci. Kalikan inci dengan DPI: cetakan 6 inci pada 300 DPI memerlukan 1800 piksel. Alat ini berguna untuk memeriksa apakah foto cukup besar untuk dicetak, dan untuk mengatur dokumen pada ukuran yang tepat.",
    "seoTitle": "Konversi Inci ke Piksel – DPI Apa Pun, Gratis",
    "seoDescription": "Konversi inci ke piksel pada 72, 96, 150, 300, atau DPI apa pun dan lihat berapa piksel yang dibutuhkan cetakan. Gratis, instan, tanpa daftar.",
    "keywords": ["inci ke piksel", "inci ke px", "konversi inci ke piksel", "8 inci berapa piksel", "inci ke piksel 300 dpi"],
    "howToSteps": [
      { "title": "Masukkan inci", "description": "Ketik ukuran dalam inci." },
      { "title": "Pilih DPI", "description": "300 untuk cetakan berkualitas, atau ketik nilai Anda sendiri." },
      { "title": "Baca pikselnya", "description": "Lihat piksel yang dibutuhkan, serta sentimeter dan milimeter." }
    ],
    "features": [
      { "title": "Perencanaan cetak", "description": "Langsung lihat berapa piksel yang dibutuhkan cetakan." },
      { "title": "Berfungsi ke segala arah", "description": "Ketik di kotak mana pun dan kotak lainnya diperbarui." },
      { "title": "Tabel praktis", "description": "Ukuran umum pada DPI pilihan Anda." }
    ],
    "faqs": [
      { "question": "Bagaimana cara mengonversi inci ke piksel?", "answer": "Kalikan inci dengan DPI. Misalnya, 8 inci pada 300 DPI adalah 8 × 300 = 2400 piksel." },
      { "question": "Berapa piksel yang dibutuhkan foto 4 × 6?", "answer": "Pada 300 DPI, 1200 × 1800 piksel." },
      { "question": "Bagaimana jika foto saya punya lebih sedikit piksel?", "answer": "Foto tetap bisa dicetak, tetapi pada DPI lebih rendah, jadi mungkin terlihat kurang tajam. Di bawah sekitar 150 DPI, ketidaktajaman biasanya terlihat dari dekat." }
    ]
  },
  "pixels-to-cm": {
    "name": "Piksel ke CM",
    "shortName": "Piksel → CM",
    "tagline": "Konversi piksel ke sentimeter pada DPI berapa pun. Gratis, tanpa perlu instal apa pun.",
    "intro": "Piksel ke CM memberi tahu berapa panjang sejumlah piksel dalam sentimeter. Bagi piksel dengan DPI, lalu kalikan dengan 2,54, karena satu inci sama dengan 2,54 cm. Ketik nilai di kotak mana pun dan inci serta milimeter ikut diperbarui.",
    "seoTitle": "Konversi Piksel ke CM – DPI Apa Pun, Gratis",
    "seoDescription": "Konversi piksel ke sentimeter pada 72, 96, 150, 300, atau DPI apa pun, juga ke inci dan milimeter. Gratis, instan, tanpa daftar.",
    "keywords": ["piksel ke cm", "px ke cm", "konversi piksel ke sentimeter", "piksel ke cm 300 dpi", "1000 piksel berapa cm"],
    "howToSteps": [
      { "title": "Masukkan piksel", "description": "Ketik jumlah piksel." },
      { "title": "Pilih DPI", "description": "Pilih nilai umum atau ketik nilai Anda sendiri." },
      { "title": "Baca hasilnya", "description": "Lihat sentimeter, inci, dan milimeter secara langsung." }
    ],
    "features": [
      { "title": "Berfungsi ke segala arah", "description": "Ketik di kotak mana pun dan kotak lainnya diperbarui." },
      { "title": "DPI apa pun", "description": "Nilai umum tinggal diketuk, atau ketik nilai Anda sendiri." },
      { "title": "Tabel praktis", "description": "Nilai umum pada DPI pilihan Anda." }
    ],
    "faqs": [
      { "question": "Bagaimana cara mengonversi piksel ke sentimeter?", "answer": "Sentimeter = piksel ÷ DPI × 2,54. Misalnya, 1000 piksel pada 300 DPI adalah sekitar 8,47 cm." },
      { "question": "Berapa piksel dalam satu sentimeter?", "answer": "DPI ÷ 2,54. Itu sekitar 118 piksel per cm pada 300 DPI, dan sekitar 38 pada 96 DPI." },
      { "question": "Mengapa saya perlu DPI?", "answer": "Piksel tidak punya ukuran tetap. DPI menyatakan berapa banyak piksel dalam tiap inci saat dicetak atau ditampilkan." }
    ]
  },
  "cm-to-pixels": {
    "name": "CM ke Piksel",
    "shortName": "CM → Piksel",
    "tagline": "Cari tahu berapa piksel yang dibutuhkan ukuran dalam sentimeter pada DPI berapa pun. Gratis, tanpa perlu instal apa pun.",
    "intro": "CM ke Piksel memberi tahu berapa piksel yang mengisi ukuran dalam sentimeter. Bagi dengan 2,54 untuk mendapatkan inci, lalu kalikan dengan DPI: 10 cm pada 300 DPI adalah sekitar 1181 piksel. Alat ini berguna saat formulir atau percetakan memberikan ukuran dalam sentimeter.",
    "seoTitle": "Konversi CM ke Piksel – DPI Apa Pun, Gratis",
    "seoDescription": "Konversi sentimeter ke piksel pada 72, 96, 150, 300, atau DPI apa pun dan lihat berapa piksel yang dibutuhkan cetakan. Gratis, instan, tanpa daftar.",
    "keywords": ["cm ke piksel", "cm ke px", "konversi sentimeter ke piksel", "cm ke piksel 300 dpi", "10 cm berapa piksel"],
    "howToSteps": [
      { "title": "Masukkan sentimeter", "description": "Ketik ukuran dalam sentimeter." },
      { "title": "Pilih DPI", "description": "300 untuk cetakan berkualitas, atau ketik nilai Anda sendiri." },
      { "title": "Baca pikselnya", "description": "Lihat piksel yang dibutuhkan, serta inci dan milimeter." }
    ],
    "features": [
      { "title": "Perencanaan cetak", "description": "Langsung lihat berapa piksel yang dibutuhkan suatu ukuran." },
      { "title": "Berfungsi ke segala arah", "description": "Ketik di kotak mana pun dan kotak lainnya diperbarui." },
      { "title": "Tabel praktis", "description": "Ukuran umum pada DPI pilihan Anda, termasuk lebar A4." }
    ],
    "faqs": [
      { "question": "Bagaimana cara mengonversi sentimeter ke piksel?", "answer": "Piksel = cm ÷ 2,54 × DPI. Misalnya, 21 cm pada 300 DPI adalah sekitar 2480 piksel." },
      { "question": "Berapa piksel ukuran A4 pada 300 DPI?", "answer": "A4 berukuran 21 × 29,7 cm, yaitu sekitar 2480 × 3508 piksel pada 300 DPI." },
      { "question": "Bagaimana dengan formulir yang meminta 3,5 × 4,5 cm?", "answer": "Pada 300 DPI, itu sekitar 413 × 531 piksel. Pembuat Pas Foto bisa membuatkannya untuk Anda." }
    ]
  },
  "resolution-calculator": {
    "name": "Kalkulator Resolusi",
    "shortName": "Resolusi",
    "tagline": "Lihat seberapa besar gambar tercetak pada tiap DPI, serta megapiksel dan rasio aspeknya. Gratis, tanpa perlu instal apa pun.",
    "intro": "Kalkulator Resolusi menjawab pertanyaan “seberapa besar ini bisa dicetak?”. Masukkan lebar dan tinggi gambar dalam piksel untuk melihat ukuran cetak pada tiap DPI umum, serta megapiksel dan rasio aspeknya. Sebagai panduan kasar, 300 DPI terlihat tajam saat dipegang, sedangkan poster besar yang dilihat dari jauh bisa memakai nilai lebih rendah.",
    "seoTitle": "Kalkulator Resolusi Gambar – Ukuran Cetak, DPI, Gratis",
    "seoDescription": "Masukkan ukuran piksel gambar untuk melihat ukuran cetak pada tiap DPI, megapiksel, dan rasio aspeknya. Gratis, instan, tanpa daftar.",
    "keywords": ["kalkulator resolusi gambar", "kalkulator ukuran cetak", "kalkulator dpi", "seberapa besar foto bisa dicetak", "megapiksel ke ukuran cetak"],
    "howToSteps": [
      { "title": "Masukkan ukuran piksel", "description": "Ketik lebar dan tinggi gambar dalam piksel." },
      { "title": "Pilih DPI", "description": "Pilih kualitas cetak yang Anda inginkan." },
      { "title": "Baca hasilnya", "description": "Lihat ukuran cetak dalam inci dan sentimeter, megapiksel, dan rasio aspek." }
    ],
    "features": [
      { "title": "Ukuran cetak di tiap DPI", "description": "Tabel dari 72 hingga 600 DPI, dalam inci dan sentimeter." },
      { "title": "Megapiksel dan bentuk", "description": "Lihat jumlah megapiksel dan rasio aspek, seperti 4:3 atau 16:9." },
      { "title": "Tidak ada yang diunggah", "description": "Alat ini hanya perlu angkanya." }
    ],
    "faqs": [
      { "question": "Seberapa besar foto 12 megapiksel bisa dicetak?", "answer": "Foto 4000 × 3000 tercetak sekitar 13,3 × 10 inci (34 × 25 cm) pada 300 DPI." },
      { "question": "DPI berapa yang dibutuhkan untuk mencetak?", "answer": "300 DPI adalah target umum untuk foto yang dilihat dari dekat. 150 DPI cukup untuk banyak cetakan sehari-hari, dan poster besar yang dilihat dari jauh bisa lebih rendah." },
      { "question": "Di mana saya bisa menemukan ukuran piksel gambar saya?", "answer": "Di properti file pada komputer Anda, atau gunakan Analisis Gambar di situs ini." }
    ]
  },
  "color-blindness-simulator": {
    "name": "Simulator Buta Warna",
    "shortName": "Buta Warna",
    "tagline": "Lihat tampilan gambar, grafik, atau desain pada tiap jenis buta warna. Gratis dan berjalan di perangkat Anda.",
    "intro": "Simulator Buta Warna menunjukkan bagaimana gambar mungkin terlihat bagi orang dengan defisiensi penglihatan warna, yang dialami sekitar 1 dari 12 pria dan 1 dari 200 wanita. Gunakan untuk memeriksa apakah grafik, peta, tombol, dan desain tetap mudah dipahami saat merah dan hijau, atau biru dan kuning, sulit dibedakan. Alat ini mencakup tujuh jenis, berdasarkan model ilmiah yang telah dipublikasikan.",
    "seoTitle": "Simulator Buta Warna – Uji Gambar, Gratis",
    "seoDescription": "Lihat tampilan gambar dengan deuteranopia, protanopia, tritanopia, dan jenis buta warna lainnya. Gratis, tanpa daftar, gambar Anda tidak diunggah.",
    "keywords": ["simulator buta warna", "gambar tes buta warna", "simulator deuteranopia", "simulator protanopia", "cek desain untuk buta warna"],
    "howToSteps": [
      { "title": "Tambahkan gambar", "description": "Letakkan atau pilih grafik, screenshot, desain, atau foto." },
      { "title": "Pilih jenis", "description": "Beralih antarjenis, dan kembali ke aslinya untuk membandingkan." },
      { "title": "Unduh jika mau", "description": "Simpan gambar simulasi sebagai PNG untuk dibagikan ke tim Anda." }
    ],
    "features": [
      { "title": "Tujuh jenis", "description": "Kelemahan dan ketiadaan merah, hijau, dan biru, serta tanpa warna sama sekali." },
      { "title": "Berdasarkan riset", "description": "Memakai model Machado, Oliveira, dan Fernandes (2009)." },
      { "title": "Privat", "description": "Gambar diproses di perangkat Anda dan tidak pernah diunggah." }
    ],
    "faqs": [
      { "question": "Jenis mana yang paling umum?", "answer": "Deuteranomali, yaitu berkurangnya kepekaan terhadap hijau, sejauh ini yang paling umum." },
      { "question": "Apakah ini persis yang dilihat penderita buta warna?", "answer": "Ini perkiraan yang cukup dekat. Penglihatan warna dan tingkat keparahannya berbeda pada tiap orang, jadi jadikan ini panduan dan uji dengan pengguna sungguhan jika penting." },
      { "question": "Apakah ini tes buta warna?", "answer": "Bukan. Alat ini menunjukkan bagaimana gambar mungkin terlihat; alat ini tidak bisa mendiagnosis apa pun. Dokter mata bisa memeriksa penglihatan warna Anda." },
      { "question": "Bagaimana agar desain saya cocok untuk semua orang?", "answer": "Jangan hanya mengandalkan warna. Tambahkan label, pola, atau ikon, dan pilih warna yang berbeda dalam kecerahan sekaligus rona." }
    ]
  },
};
