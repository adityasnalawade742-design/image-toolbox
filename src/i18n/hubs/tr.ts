import type { HubTexts } from './types';

export const trHubs: HubTexts = {
  labels: {
    server: 'Sunucumuzu kullanır',
    more: 'Diğer koleksiyonlar',
    allTools: 'Tüm {count} araç',
  },
  pages: {
    'pdf-tools': {
      title: 'Ücretsiz PDF Araçları: Birleştir, Dönüştür, Düzenle, İmzala',
      description: 'Tek yerde 57 ücretsiz PDF aracı: PDF birleştirin, bölün ve sıkıştırın, Word ya da resimlerden ve onlara dönüştürün, düzenleyin, imzalayın ve koruyun. Kayıt yok, filigran yok.',
      h1: 'PDF araçları',
      intro:
        'PDF’lerle çalışmak için gereken her şey, ücretsiz ve hesapsız: dosyaları birleştirin ve bölün, Word, Excel, PowerPoint ve resimleri PDF’e, PDF’leri de onlara dönüştürün; düzenleyin, doldurun, imzalayın ve koruyun. Araçların çoğu tarayıcınızda çalışır, yani PDF cihazınızdan çıkmaz; sunucumuza ihtiyaç duyan birkaç araç işaretlidir ve dosyaları hemen ardından silinir.',
      groups: {
        toPdf: 'PDF’e dönüştür',
        fromPdf: 'PDF’ten dönüştür',
        edit: 'Düzenle ve not ekle',
        pages: 'Sayfaları düzenle',
        secure: 'İmzala, koru ve temizle',
        fix: 'Sıkıştır, onar ve kontrol et',
      },
      faqs: [
        { question: 'Bu PDF araçları ücretsiz mi?', answer: 'Evet. Tüm araçlar hesapsız, ücretsiz kullanılır; filigran ve günlük sınır yoktur.' },
        {
          question: 'PDF’lerim yükleniyor mu?',
          answer:
            'Araçların çoğu tarayıcınızın içinde çalışır, dosya cihazınızda kalır. Word’den PDF’e Dönüştürme, PDF Sıkıştırma ve PDF OCR gibi “Sunucumuzu kullanır” işaretli araçlar dosyayı şifreli bağlantıyla gönderir ve sonuç döndüğü anda siler.',
        },
      ],
    },
    'image-editing-tools': {
      title: 'Ücretsiz Resim Düzenleme Araçları: Kırp, Boyutlandır',
      description: 'Tarayıcıda 42 ücretsiz fotoğraf düzenleme aracı: kırpın, boyutlandırın ve döndürün, arka planı kaldırın ya da değiştirin, metin ve filigran ekleyin, renkleri düzeltin, resimleri sosyal medyaya uyarlayın.',
      h1: 'Resim düzenleme araçları',
      intro:
        'Hiçbir şey kurmadan hızlı düzenlemeler: kırpın ve boyutlandırın, arka planı kesip çıkarın ya da değiştirin, metin, filigran ve kenarlık ekleyin, keskinleştirip renkleri düzeltin veya bir resmi Instagram, YouTube ve diğer ağlar için boyutlandırın. Tüm araçlar tarayıcınızda çalışır; fotoğraflarınız asla yüklenmez ve mümkün olduğunda biçimlerini korur.',
      groups: {
        basics: 'Kırp, boyutlandır ve döndür',
        background: 'Arka planlar ve kesip çıkarma',
        text: 'Metin, filigran ve işaretler',
        enhance: 'Düzelt ve iyileştir',
        social: 'Sosyal medya boyutları',
        combine: 'Birleştir ve böl',
      },
      faqs: [
        { question: 'Bir uygulama kurmam gerekiyor mu?', answer: 'Hayır. Araçlar bilgisayarda ya da telefonda güncel her tarayıcıda çalışır, fotoğraflarınız cihazınızda kalır.' },
        {
          question: 'Fotoğrafımın kalitesi düşer mi?',
          answer: 'Düzenlemeler fotoğrafın tam boyutlu hâli üzerinde yapılır ve mümkün olduğunda özgün biçiminde kaydedilir. JPG ve WebP dosyaları yüksek kaliteyle yeniden kaydedilir.',
        },
      ],
    },
    'image-format-converters': {
      title: 'Ücretsiz Resim Dönüştürücü: HEIC, JPG, PNG, WebP, AVIF',
      description: 'Tarayıcıda 26 ücretsiz resim dönüştürücü: HEIC’ten JPG’ye, JPG’den PNG, WebP ve AVIF’e, GIF, BMP, TIFF ve SVG’den yaygın biçimlere; birden çok dosya aynı anda.',
      h1: 'Resim biçimi dönüştürücüler',
      intro:
        'Bir resmi ihtiyacınız olan biçime çevirin: iPhone’un HEIC fotoğraflarını JPG’ye, PNG’yi daha küçük dosyalar için JPG ya da WebP’ye, web için AVIF’e veya GIF, BMP, TIFF ve SVG’yi günlük biçimlere. Dönüştürücülerin çoğu birden çok dosyayı aynı anda alır ve hepsi tarayıcınızda çalışır, hiçbir şey yüklenmez. Hangisini seçeceğinizden emin değil misiniz? Evrensel Resim Dönüştürücü neredeyse her resmi açar ve JPG, PNG, WebP ya da AVIF olarak kaydeder.',
      groups: {
        any: 'Her biçim',
        heic: 'iPhone fotoğrafları (HEIC)',
        jpgPng: 'JPG ve PNG',
        web: 'WebP ve AVIF',
        other: 'GIF, BMP, TIFF ve SVG',
        pdf: 'PDF’e ve metne',
      },
      faqs: [
        {
          question: 'Hangi biçimi seçmeliyim?',
          answer: 'Her yerde açılması gereken fotoğraflar için JPG, ekran görüntüleri, logolar ve saydamlık için PNG, web sitelerinde daha küçük dosyalar için WebP ya da AVIF. iPhone’dan gelen HEIC fotoğrafları paylaşmak için JPG’ye çevirmek en iyisidir.',
        },
        { question: 'Birçok resmi aynı anda dönüştürebilir miyim?', answer: 'Evet. Bir dönüştürücüye birden çok dosya bırakın; aynı ayarlarla birlikte dönüştürülür ve tek bir ZIP olarak indirilir.' },
      ],
    },
    'qr-code-and-barcode-tools': {
      title: 'Ücretsiz QR Kod ve Barkod Oluşturucu ve Okuyucu',
      description: 'Bağlantı, Wi-Fi, kişi, WhatsApp ve ödeme için QR kod oluşturan, EAN, UPC ve ISBN barkodları üreten ve kamerayla kod okuyan 15 ücretsiz araç.',
      h1: 'QR kod ve barkod araçları',
      intro:
        'Bir bağlantı, Wi-Fi ağı, kişi kartı, WhatsApp sohbeti ya da ödeme için QR kod oluşturun, EAN, UPC, ISBN, Data Matrix ve PDF417 barkodları üretin veya bir listeden yüzlercesini aynı anda yapıp tek sayfaya yazdırın. Kodları bir fotoğraftan ya da kameradan da okuyabilirsiniz. Her şey tarayıcınızda çalışır, kayıt gerekmez.',
      groups: {
        qr: 'QR kodlar',
        barcodes: 'Barkodlar',
        read: 'Tara ve oku',
      },
      faqs: [
        { question: 'QR kodların süresi dolar mı?', answer: 'Hayır. İçerik kodun kendisinde saklanır, bizim bir bağlantımızın arkasında değil; basılı kod okunabildiği sürece çalışır.' },
        {
          question: 'Bu barkodları mağazadaki ürünlerde kullanabilir miyim?',
          answer: 'Barkodlar standarda uygun çizilir, ancak mağazada satılan ürünlerin EAN ve UPC numaraları GS1’den alınmalıdır. Kendi stokunuz, raflarınız ya da etkinlikleriniz için her numara olur.',
        },
      ],
    },
    'image-utilities': {
      title: 'Ücretsiz Resim Araçları: EXIF Görüntüleyici, Renk Seçici, DPI',
      description: 'Resimleri incelemek ve ölçmek için 21 ücretsiz araç: meta verileri görün ve silin, renk seçin, DPI değiştirin, pikseli inç ya da cm’ye çevirin, fotoğrafları karşılaştırın ve resimlerdeki metni kopyalayın.',
      h1: 'Resim yardımcı araçları',
      intro:
        'Resimlerle ilgili akla gelen sorular için küçük araçlar: bir fotoğrafın meta verileri neyi ortaya koyar ve nasıl silinir, hangi renkleri kullanır, belirli bir DPI’da ne büyüklükte basılır, iki fotoğraf farklı mı ya da içinde hangi metin var. Hepsi tarayıcınızda çalışır; resimleriniz cihazınızda kalır.',
      groups: {
        inspect: 'Fotoğrafları incele',
        colour: 'Renkler',
        size: 'Boyutlar, DPI ve baskı',
        text: 'Metin ve gizli mesajlar',
      },
      faqs: [
        {
          question: 'Bir fotoğraftan konumu silebilir miyim?',
          answer: 'Evet. Resim Meta Verisi Silme; GPS konumunu, kamera bilgilerini ve diğer EXIF verilerini siler; EXIF Görüntüleyici de paylaşmadan önce fotoğrafın neler içerdiğini gösterir.',
        },
        {
          question: 'Baskı için kaç DPI gerekir?',
          answer: 'Fotoğraf ve belgeler için genellikle 300 DPI hedeflenir. DPI yalnızca baskı boyutunu belirler, piksel sayısını değil: Resim DPI Değiştirme bunu dosyaya yazar, Pikselden İnçe Çevirme ve Pikselden CM’ye Çevirme hesaplayıcıları da ne büyüklükte basılacağını gösterir.',
        },
      ],
    },
  },
};
