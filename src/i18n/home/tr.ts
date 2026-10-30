import type { LocalizedHomeData } from '../types';

export const trHome: LocalizedHomeData = {
  hero: {
    badge: '',
    title: 'İhtiyacınız olan tüm resim araçları tek bir yerde',
    subtitle:
      'Fotoğrafları ücretsiz olarak kırpın, boyutlandırın, sıkıştırın, dönüştürün, arka planlarını kaldırın ve temizleyin. Kayıt yok, filigran yok ve resimleriniz cihazınızda kalır.',
    dropzoneTitle: 'Başlamak için bir resim bırakın',
    dropzoneSubtitle: 'JPG, PNG, WebP, AVIF, GIF, TIFF, SVG veya iPhone HEIC, en fazla 50 MB',
  },
  sections: {
    indexTitle: 'Tüm araçlar',
    indexSubtitle: 'Her araç aynı çalışma alanını kullanır: resmi açın, ayarlayın, indirin.',
    pillarsTitle: 'Nasıl çalışır',
    faqTitle: 'Sorular',
  },
  trustPillars: [
    {
      title: 'Her iş için tek çalışma alanı',
      description:
        'Her araç aynı şekilde açılır ve resminizi doğrudan bir sonraki araca aktarabilirsiniz; örneğin önce kırpıp sonra sıkıştırabilirsiniz.',
      icon: 'Layers',
    },
    {
      title: 'Resimler asla yüklenmez',
      description:
        'Resimler kendi cihazınızda, tarayıcınız tarafından işlenir. Bu yüzden yükleme beklemesi olmaz ve sunucuda bir kopya kalmaz. Word’den PDF’e Dönüştürme gibi birkaç belge aracı sunucumuza ihtiyaç duyar: bu araçlar işaretlidir ve dosyalar işlemden hemen sonra silinir.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Ücretsiz, hesap gerekmez',
      description: 'Kayıt yok, filigran yok, günlük sınır yok. Tek dosyalar en fazla 50 MB olabilir; toplu araçlar en fazla 50 dosya alır.',
      icon: 'Check',
    },
  ],
  categoryNames: {
    'edit-transform': 'Düzenleme ve dönüştürme',
    'optimize-compress': 'Optimize etme ve sıkıştırma',
    'convert-formats': 'Format dönüştürme',
    'pdf-documents': 'PDF ve Belgeler',
    utilities: 'İnceleme ve yardımcı araçlar',
    developer: 'Geliştirici araçları',
  },
  faqs: [
    {
      question: 'Resimlerim bir yere yükleniyor mu?',
      answer:
        'Hayır. Tüm resim araçları tarayıcınızın içinde çalışır; resimleriniz kendi cihazınızda işlenir ve hiçbir sunucuya gönderilmez. Arka plan kaldırma aracı yapay zekâ modelini bir kez indirir, ardından o da cihazınızda çalışır. Birkaç belge aracı (Word, Excel ve PowerPoint’ten PDF’e Dönüştürme, PDF’ten Word’e Dönüştürme, PDF Sıkıştırma, PDF Koruma, PDF Kilidi Açma, PDF OCR, PDF’ten PDF/A’ya Dönüştürme ve PDF Onarma) sunucumuza ihtiyaç duyar: bu araçlar “Sunucumuzu kullanır” etiketiyle işaretlidir ve sonuç geri gönderilir gönderilmez dosyanız silinir.',
    },
    {
      question: 'Gerçekten ücretsiz mi?',
      answer: 'Evet. Tüm araçlar hesap gerekmeden ücretsiz kullanılabilir ve hiçbir resme filigran eklenmez.',
    },
    {
      question: 'Resimlerim ne kadar büyük olabilir?',
      answer:
        'Tek resimler en fazla 50 MB olabilir. Toplu sıkıştırıcı ve toplu boyutlandırıcı tek seferde en fazla 50 resim alır; her biri en fazla 50 MB olabilir. Çok büyük fotoğraflar eski telefonlarda yavaş işlenebilir.',
    },
    {
      question: 'Hangi formatları açıp kaydedebilirim?',
      answer:
        'JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, SVG ve iPhone HEIC fotoğraflarını açabilirsiniz. Araca bağlı olarak JPG, PNG, WebP veya AVIF olarak kaydedebilirsiniz.',
    },
    {
      question: 'Telefonumda çalışır mı?',
      answer:
        'Evet. Araçlar, iPhone HEIC fotoğrafları dahil olmak üzere iPhone ve Android’deki güncel mobil tarayıcılarda çalışır. Siteyi uygulama olarak da yükleyebilirsiniz. İlk ziyaretten sonra çoğu araç çevrimdışı çalışır; AVIF dışa aktarma ve arka plan kaldırma özelliklerini bir kez çevrimiçiyken kullanmanız gerekir.',
    },
    {
      question: 'Araçları art arda kullanabilir miyim?',
      answer:
        'Evet. Düzenledikten sonra Sıkıştır veya Boyutlandır gibi bir sonraki adımı seçin; resminiz kaydedip yeniden yüklemenize gerek kalmadan o araçta açılır.',
    },
  ],
};
