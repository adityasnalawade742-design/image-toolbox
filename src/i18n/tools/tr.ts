import type { LocalizedToolItem } from '../types';

export const trTools: Record<string, LocalizedToolItem> = {
  'crop-image': {
    name: 'Resim Kırpma',
    shortName: 'Kırp',
    tagline: 'Resimlerinizi serbestçe veya popüler sosyal medya en boy oranlarına göre anında kırpın.',
    seoTitle: 'Resim Kırpma Online — Ücretsiz Fotoğraf Kırpma Aracı',
    seoDescription: 'Fotoğrafları ve resimleri tarayıcınızda ücretsiz olarak kırpın. Instagram, YouTube, kare veya özel piksel boyutlarında hızlı ve güvenli kırpma.',
    keywords: ['resim kırpma', 'fotoğraf kırpma', 'online resim kırp', 'görsel kırpma aracı', 'ücretsiz resim düzenleyici'],
    howToSteps: [
      { title: 'Resim Yükleyin', description: 'Kırpmak istediğiniz fotoğrafı sürükleyip bırakın veya cihazınızdan seçin.' },
      { title: 'Kırpma Alanını Ayarlayın', description: 'En boy oranı hazır ayarlarından birini seçin veya piksel boyutlarını manuel olarak belirleyin.' },
      { title: 'Sonucu İndirin', description: 'Kırpılan yüksek kaliteli görseli anında cihazınıza kaydedin.' },
    ],
    features: [
      { title: '%100 Tarayıcı İçi Gizlilik', description: 'Fotoğraflarınız sunucuya yüklenmez, tüm işlemler cihazınızda gerçekleşir.' },
      { title: 'Sosyal Medya Hazır Ayarları', description: 'Instagram, YouTube, Avatar ve hikaye formatları için tek tıkla hazır boyutlar.' },
      { title: 'Kayıpsız Hassasiyet', description: 'Piksel bazlı kırpma ile maksimum netlik ve kalite korunur.' },
    ],
    faqs: [
      { question: 'Bu resim kırpma aracı ücretsiz mi?', answer: 'Evet, hiçbir kayıt veya sınır olmadan tamamen ücretsizdir.' },
      { question: 'Resimlerim bir sunucuya yükleniyor mu?', answer: 'Hayır, tüm işlemler doğrudan tarayıcınızda güvenli bir şekilde yapılır.' },
    ],
  },
  'resize-image': {
    name: 'Resim Boyutlandırma',
    shortName: 'Boyutlandır',
    tagline: 'Piksel veya yüzde oranlarına göre en boy oranını koruyarak resimleri yeniden boyutlandırın.',
    seoTitle: 'Resim Boyutlandırma Online — Fotoğraf Boyutunu Değiştir',
    seoDescription: 'Fotoğraflarınızı piksel veya yüzde bazında ücretsiz yeniden boyutlandırın. En boy oranını kilitleme ve kaliteyi koruma desteği.',
    keywords: ['resim boyutlandırma', 'fotoğraf boyutu değiştirme', 'resim küçültme', 'görsel yeniden boyutlandır'],
    howToSteps: [
      { title: 'Görseli Yükleyin', description: 'Boyutlandırmak istediğiniz görseli seçin veya çalışma alanına bırakın.' },
      { title: 'Boyutları Belirleyin', description: 'Hedef piksel genişliğini/yüksekliğini veya yüzde oranını (%50, %75 vb.) girin.' },
      { title: 'İndirin', description: 'Yeniden boyutlandırılan görseli anında indirin.' },
    ],
    features: [
      { title: 'En Boy Oranı Kilidi', description: 'Görselin bozulmaması ve oranların korunması için otomatik senkronizasyon.' },
      { title: 'Büyütme Koruması', description: 'Orijinal boyuttan büyük yaparak pikselleşmeyi önleyen güvenlik kilidi.' },
      { title: 'Çift Mod', description: 'Hem tam piksel hem de yüzde bazlı pratik ölçekleme seçenekleri.' },
    ],
    faqs: [
      { question: 'Boyutlandırma sırasında görüntü kalitesi bozulur mu?', answer: 'Hayır, donanım hızlandırmalı Canvas algoritmaları sayesinde maksimum netlik korunur.' },
    ],
  },
  'rotate-image': {
    name: 'Resim Döndürme',
    shortName: 'Döndür',
    tagline: 'Görselleri 90°, 180° veya dilediğiniz açıda kenarları kesilmeden döndürün.',
    seoTitle: 'Resim Döndürme Online — Fotoğrafı İstenen Açıda Çevir',
    seoDescription: 'Fotoğrafları 90 derece, 180 derece veya özel açılarda ücretsiz döndürün. Otomatik tuval genişletme ile köşelerde kesilme olmaz.',
    keywords: ['resim döndürme', 'fotoğraf çevirme', 'resim açısı değiştirme', 'online döndür'],
    howToSteps: [
      { title: 'Resmi Yükleyin', description: 'Döndürmek istediğiniz resmi panele yükleyin.' },
      { title: 'Açıyı Ayarlayın', description: 'Hızlı 90° butonlarını kullanın veya kaydırıcı ile -180° ile +180° arasında açı verin.' },
      { title: 'Kaydedin', description: 'Döndürülmüş resmi tam kalitede indirin.' },
    ],
    features: [
      { title: 'Akıllı Sınır Kutusu', description: 'Özel açılarda döndürürken görselin köşelerinin kesilmesini önleyen dinamik alan hesaplama.' },
      { title: 'Hızlı Çevirme', description: 'Tek tıkla 90° sağa/sola ve 180° ters çevirme butonları.' },
    ],
    faqs: [
      { question: 'Döndürme işlemi köşeleri kırpar mı?', answer: 'Hayır, tuval boyutları matematiksel olarak otomatik genişletilir.' },
    ],
  },
  'flip-image': {
    name: 'Resim Yansıtma / Çevirme',
    shortName: 'Yansıt',
    tagline: 'Resimlerinizi anında yatay veya dikey olarak ayna gibi yansıtın.',
    seoTitle: 'Resim Yansıtma Online — Yatay ve Dikey Ayna Efekti',
    seoDescription: 'Fotoğrafları yatay veya dikey olarak ayna modunda çevirin. Ücretsiz, anında ve kayıpsız.',
    keywords: ['resim yansıtma', 'fotoğraf ayna efekti', 'yatay çevir', 'dikey çevir'],
    howToSteps: [
      { title: 'Resmi Seçin', description: 'Çevirmek istediğiniz görseli yükleyin.' },
      { title: 'Yön Seçin', description: 'Yatay, Dikey veya Her İkisi butonuna tıklayın.' },
      { title: 'İndirin', description: 'Aynalanmış resmi kaydedin.' },
    ],
    features: [
      { title: 'Anında Önizleme', description: 'Yansıtma etkisini anında tuval üzerinde görüntüleyin.' },
      { title: 'Kayıpsız Çevirme', description: 'Piksel kalitesinde sıfır kayıpla ayna dönüşümü.' },
    ],
    faqs: [
      { question: 'Yansıtma işleminde kalite düşer mi?', answer: 'Hayır, piksel koordinatları matematiksel olarak ters çevrilir, kalite değişmez.' },
    ],
  },
  'add-text-to-image': {
    name: 'Resme Yazı Ekleme',
    shortName: 'Yazı Ekle',
    tagline: 'Fotoğraflarınıza özel yazı tipleri, gölgeler ve renklerle şık metinler ekleyin.',
    seoTitle: 'Resme Yazı Ekleme Online — Fotoğraf Üzerine Metin Yazma',
    seoDescription: 'Fotoğrafların üzerine ücretsiz metin ve başlık ekleyin. Farklı yazı tipleri, boyutlar, gölge ve şeffaflık ayarları.',
    keywords: ['resme yazı ekleme', 'fotoğraf üzerine yazı yazma', 'fotoğrafa metin ekle', 'online yazı yazıcı'],
    howToSteps: [
      { title: 'Resmi Yükleyin', description: 'Yazı eklemek istediğiniz fotoğrafı seçin.' },
      { title: 'Metni ve Stili Özelleştirin', description: 'Yazınızı yazın, yazı tipini, boyutunu, rengini ve konumunu seçin.' },
      { title: 'İndirin', description: 'Metinli görseli yüksek çözünürlükte indirin.' },
    ],
    features: [
      { title: 'Çok Satırlı Metin', description: 'İstediğiniz kadar satır ekleyin, otomatik satır aralığı ile düzenleyin.' },
      { title: 'Gölge ve Şeffaflık', description: 'Okunabilirliği artıran yumuşak gölge efekti ve opaklık kontrolü.' },
    ],
    faqs: [
      { question: 'Hangi yazı tipleri destekleniyor?', answer: 'Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New ve Impact gibi popüler yazı tipleri desteklenir.' },
    ],
  },
  'watermark-image': {
    name: 'Resme Filigran Ekleme',
    shortName: 'Filigran',
    tagline: 'Telif hakkınızı korumak için fotoğraflarınıza metin veya desen filigranı ekleyin.',
    seoTitle: 'Resme Filigran Ekleme Online — Fotoğrafa Logo ve İmza Ekle',
    seoDescription: 'Fotoğraflarınıza ücretsiz filigran ekleyin. 9 noktalı ızgara yerleşimi, opaklık, döndürme ve tüm resmi kaplayan desen desteği.',
    keywords: ['resme filigran ekleme', 'fotoğraf imzalama', 'telif hakkı filigranı', 'online watermark'],
    howToSteps: [
      { title: 'Görseli Yükleyin', description: 'Filigran eklemek istediğiniz resmi açın.' },
      { title: 'Filigranı Ayarlayın', description: 'Metninizi yazın, 9 konumdan birini seçin veya tekrarlayan desen modunu açın.' },
      { title: 'Kaydedin', description: 'Korumalı resminizi indirin.' },
    ],
    features: [
      { title: 'Tekrarlayan Desen', description: 'Görselin her yerine çapraz olarak yayılan silinemez filigran deseni.' },
      { title: '9 Noktalı Yerleşim', description: 'Köşelere, kenarlara veya merkeze tek tıkla hassas yerleştirme.' },
    ],
    faqs: [
      { question: 'Filigran opaklığı ayarlanabilir mi?', answer: 'Evet, %10 ile %100 arasında dilediğiniz şeffaflıkta filigran oluşturabilirsiniz.' },
    ],
  },
  'add-border-to-image': {
    name: 'Resme Kenarlık Ekleme',
    shortName: 'Kenarlık',
    tagline: 'Resimlerinize şık iç veya dış çerçeveler ekleyin.',
    seoTitle: 'Resme Çerçeve Ekleme Online — Fotoğrafa Kenarlık Ekle',
    seoDescription: 'Resim ve fotoğraflara renkli kenarlık ve çerçeve ekleyin. İç çerçeve veya dış tuval genişletme modları.',
    keywords: ['resme kenarlık ekleme', 'fotoğraf çerçevesi', 'resme border ekle', 'online çerçeve'],
    howToSteps: [
      { title: 'Görseli Yükleyin', description: 'Çerçevelemek istediğiniz görseli panele bırakın.' },
      { title: 'Genişlik ve Renk Seçin', description: 'Kenarlık kalınlığını (1-100px), rengi ve opaklığı belirleyin.' },
      { title: 'İndirin', description: 'Çerçeveli resmi cihazınıza kaydedin.' },
    ],
    features: [
      { title: 'Dış ve İç Modlar', description: 'Dış modda resmi büyütür, iç modda orijinal ölçüleri korur.' },
      { title: 'Renk Seçici', description: 'Tüm HEX ve RGB renk kodlarıyla uyumlu zengin renk paleti.' },
    ],
    faqs: [
      { question: 'Dış kenarlık görseli keser mi?', answer: 'Hayır, dış kenarlık modu tuval boyutunu otomatik büyüterek orijinal resmi korur.' },
    ],
  },
  'round-image': {
    name: 'Resim Köşelerini Yuvarlama',
    shortName: 'Yuvarla',
    tagline: 'Köşeleri yumuşatın veya tek tıkla şık yuvarlak profil avatarı oluşturun.',
    seoTitle: 'Resim Köşelerini Yuvarlama — Yuvarlak Profil Fotoğrafı Yapma',
    seoDescription: 'Fotoğraf köşelerini yuvarlayın veya dairesel profil avatarı yapın. Şeffaf PNG veya renkli arkaplan desteği.',
    keywords: ['resim köşesi yuvarlama', 'yuvarlak profil fotoğrafı', 'dairesel resim kesme', 'round image online'],
    howToSteps: [
      { title: 'Fotoğrafınızı Yükleyin', description: 'Yuvarlamak istediğiniz fotoğrafı seçin.' },
      { title: 'Yarıçapı Belirleyin', description: 'Kaydırıcı ile köşe yarıçapını seçin veya Daire Avatar butonuna tıklayın.' },
      { title: 'İndirin', description: 'Şeffaf PNG veya JPG olarak kaydedin.' },
    ],
    features: [
      { title: 'Daire Avatar Hazır Ayarı', description: 'Sosyal medya profilleri için mükemmel tam dairesel maskeleme.' },
      { title: 'Şeffaflık Koruması', description: 'PNG/WebP formatında kesilen köşeler tam şeffaf kalır.' },
    ],
    faqs: [
      { question: 'JPG formatında yuvarlak köşeler nasıl görünür?', answer: 'JPG şeffaflık desteklemediğinden, seçtiğiniz arkaplan dolgu rengi ile birleştirilir.' },
    ],
  },
  'compress-image': {
    name: 'Resim Sıkıştırma',
    shortName: 'Sıkıştır',
    tagline: 'Kaliteyi koruyarak dosya boyutunu %80\'e varan oranda anında küçültün.',
    seoTitle: 'Resim Sıkıştırma Online — Fotoğraf Boyutu Küçültme (KB/MB)',
    seoDescription: 'JPG, PNG ve WebP görsellerinizi ücretsiz sıkıştırın. Canlı boyut karşılaştırması ve tasarruf yüzdesi.',
    keywords: ['resim sıkıştırma', 'fotoğraf boyutu küçültme', 'resim mb düşürme', 'online image compress'],
    howToSteps: [
      { title: 'Resmi Yükleyin', description: 'Boyutunu düşürmek istediğiniz resmi yükleyin.' },
      { title: 'Kaliteyi Ayarlayın', description: 'Canlı tasarruf metriğine bakarak kalite kaydırıcısını ayarlayın.' },
      { title: 'İndirin', description: 'Küçültülmüş dosyayı indirin.' },
    ],
    features: [
      { title: 'Canlı Tasarruf Göstergesi', description: 'Orijinal ve çıktı boyutunu anlık karşılaştırın.' },
      { title: 'Büyüme Uyarısı', description: 'Dosyanın yanlışlıkla büyümesini önleyen akıllı koruma.' },
    ],
    faqs: [
      { question: 'PNG sıkıştırma ile JPG sıkıştırma arasındaki fark nedir?', answer: 'PNG kayıpsız bir formattır; en yüksek sıkıştırma için WebP veya JPG tercih edebilirsiniz.' },
    ],
  },
  'bulk-image-compressor': {
    name: 'Toplu Resim Sıkıştırma',
    shortName: 'Toplu Sıkıştır',
    tagline: 'Aynı anda 50 adede kadar resmi tarayıcınızda sıralı olarak sıkıştırın ve ZIP olarak indirin.',
    seoTitle: 'Toplu Resim Sıkıştırma — Birden Fazla Fotoğrafı Aynı Anda Küçült',
    seoDescription: '50 fotoğrafa kadar toplu resim sıkıştırma. Sıralı güvenli işleme, tekli indirme ve tümünü ZIP olarak indirme.',
    keywords: ['toplu resim sıkıştırma', 'çoklu fotoğraf boyutu küçültme', 'batch image compressor', 'toplu zip indir'],
    howToSteps: [
      { title: 'Dosyaları Seçin', description: '50 adede kadar resmi tek seferde sürükleyip bırakın.' },
      { title: 'Tümünü Sıkıştırın', description: 'Kaliteyi seçip Tümünü Sıkıştır butonuna basın.' },
      { title: 'ZIP Olarak İndirin', description: 'Tüm optimize edilmiş görselleri tek bir ZIP paketi olarak indirin.' },
    ],
    features: [
      { title: 'Sıralı İşleme', description: 'Tarayıcının donmasını önleyen aşırı bellek tüketimsiz sıralı sıkıştırma.' },
      { title: 'Tek Tıkla ZIP', description: 'Tüm dosyaları tek arşivde toplu indirme kolaylığı.' },
    ],
    faqs: [
      { question: 'Kaç dosya yükleyebilirim?', answer: 'Tek seferde 50 adede kadar görseli toplu olarak işleyebilirsiniz.' },
    ],
  },
  'bulk-image-resizer': {
    name: 'Toplu Resim Boyutlandırma',
    shortName: 'Toplu Boyutlandır',
    tagline: 'Birden fazla görseli tek seferde aynı piksel veya yüzde ölçülerine getirin.',
    seoTitle: 'Toplu Resim Boyutlandırma — Çoklu Fotoğraf Yeniden Boyutlandır',
    seoDescription: '50 adede kadar görseli aynı anda piksel veya yüzde bazında yeniden boyutlandırın. Toplu ZIP indirme.',
    keywords: ['toplu resim boyutlandırma', 'çoklu fotoğraf boyutlandırma', 'batch resize online'],
    howToSteps: [
      { title: 'Resimleri Yükleyin', description: 'Toplu boyutlandırmak istediğiniz dosyaları seçin.' },
      { title: 'Ölçüleri Belirleyin', description: 'Yüzde veya piksel genişlik/yükseklik değerlerini ayarlayın.' },
      { title: 'İndirin', description: 'Tek tek veya toplu ZIP olarak indirin.' },
    ],
    features: [
      { title: 'Toplu En Boy Oranı', description: 'Her görselin kendi oranlarını koruyarak ölçekleme.' },
      { title: 'ZIP Arşivi', description: 'Boyutlandırılan tüm görselleri tek tıkla indirme.' },
    ],
    faqs: [
      { question: 'Farklı boyutlardaki resimler bozulur mu?', answer: 'Hayır, En Boy Kilidi aktifken her resim kendi oranına göre orantılı küçültülür.' },
    ],
  },
  'remove-image-metadata': {
    name: 'Resim Meta Verisi (EXIF) Temizleme',
    shortName: 'EXIF Temizle',
    tagline: 'Gizliliğinizi korumak için GPS konumu, kamera modeli ve yazar bilgilerini temizleyin.',
    seoTitle: 'Resim EXIF ve Meta Veri Temizleme — Fotoğraf Konumunu Sil',
    seoDescription: 'Fotoğraflarınızdaki gizli GPS konumlarını, kamera marka/model bilgilerini ve EXIF etiketlerini güvenle temizleyin.',
    keywords: ['resim exif temizleme', 'fotoğraftan konum silme', 'metadata kaldırma', 'fotoğraf gizliliği'],
    howToSteps: [
      { title: 'Fotoğrafı Yükleyin', description: 'Meta verilerini temizlemek istediğiniz fotoğrafı seçin.' },
      { title: 'Doğrulama Kartını İnceleyin', description: 'Silinen GPS, Kamera ve EXIF detaylarını görün.' },
      { title: 'Temiz Resmi İndirin', description: 'Gizliliği korunmuş yeni görselinizi kaydedin.' },
    ],
    features: [
      { title: 'GPS Konumu Silinir', description: 'Fotoğrafın çekildiği harita koordinatları tamamen kaldırılır.' },
      { title: 'Cihaz Bilgisi Temizlenir', description: 'Kamera modeli, seri numarası ve yazılım logları silinir.' },
    ],
    faqs: [
      { question: 'Meta veriler nereye gidiyor?', answer: 'Resim ham pikselleriyle yeniden oluşturulur, meta veriler tamamen yok edilir.' },
    ],
  },
  'convert-image': {
    name: 'Resim Format Dönüştürücü',
    shortName: 'Dönüştür',
    tagline: 'JPG, PNG ve WebP formatları arasında kayıpsız ve hızlı dönüşüm yapın.',
    seoTitle: 'Resim Formatı Dönüştürücü — JPG, PNG, WebP Online',
    seoDescription: 'Görsellerinizi istediğiniz formata anında dönüştürün. Ücretsiz, sınırsız ve tarayıcı içinde hızlı.',
    keywords: ['resim dönüştürücü', 'format değiştirme', 'jpg png webp dönüştür'],
    howToSteps: [
      { title: 'Dosyayı Yükleyin', description: 'Dönüştürmek istediğiniz resmi yükleyin.' },
      { title: 'Format Seçin', description: 'PNG, JPG veya WebP seçeneklerinden birini seçin.' },
      { title: 'İndirin', description: 'Yeni formatındaki görseli indirin.' },
    ],
    features: [
      { title: 'Evrensel Destek', description: 'En popüler modern web formatları arasında tam uyumluluk.' },
      { title: 'Şeffaflık Kontrolü', description: 'PNG ve WebP için tam alfa şeffaflık koruması.' },
    ],
    faqs: [
      { question: 'Hangi formatlar destekleniyor?', answer: 'JPG, PNG ve WebP formatları tam olarak desteklenmektedir.' },
    ],
  },
  'jpg-to-png': {
    name: "JPG'yi PNG'ye Dönüştür",
    shortName: 'JPG → PNG',
    tagline: "JPG fotoğraflarınızı kayıpsız PNG formatına anında dönüştürün.",
    seoTitle: "JPG to PNG Dönüştürücü — JPG'yi PNG Yapma Online Ücretsiz",
    seoDescription: "JPG formatındaki fotoğrafları kayıpsız PNG'ye ücretsiz dönüştürün. Yüksek kalite ve sıfır veri kaybı.",
    keywords: ['jpg to png', 'jpg png yapma', 'jpg png dönüştürme', 'online convert'],
    howToSteps: [
      { title: 'JPG Yükleyin', description: 'Dönüştürmek istediğiniz JPG dosyasını yükleyin.' },
      { title: 'Dönüştürün', description: 'Otomatik olarak kayıpsız PNG tuvaline işlenir.' },
      { title: 'PNG Olarak İndirin', description: 'Yeni PNG dosyanızı kaydedin.' },
    ],
    features: [
      { title: 'Kayıpsız Kalite', description: 'Piksel bazlı netlik korunur.' },
    ],
    faqs: [
      { question: 'PNG dosyası daha mı kaliteli olur?', answer: 'PNG kayıpsız bir formattır ve düzenlemeler sırasında kalitesini kaybetmez.' },
    ],
  },
  'png-to-jpg': {
    name: "PNG'yi JPG'ye Dönüştür",
    shortName: 'PNG → JPG',
    tagline: "Şeffaflık arkaplan rengi seçimiyle PNG dosyalarını JPG formatına dönüştürün.",
    seoTitle: "PNG to JPG Dönüştürücü — PNG'yi JPG Yapma Online",
    seoDescription: "PNG görsellerini JPG formatına dönüştürün. Şeffaf alanlar için beyaz, siyah veya özel arkaplan rengi seçebilme özelliği.",
    keywords: ['png to jpg', 'png jpg yapma', 'png jpg dönüştürücü', 'arkaplan dolgulu jpg'],
    howToSteps: [
      { title: 'PNG Yükleyin', description: 'PNG dosyanızı seçin.' },
      { title: 'Arkaplan Rengini Belirleyin', description: 'Şeffaf pikseller için Beyaz, Siyah veya özel renk seçin.' },
      { title: 'JPG İndirin', description: 'Optimize edilmiş JPG dosyasını indirin.' },
    ],
    features: [
      { title: 'Arkaplan Renk Seçimi', description: 'Şeffaf piksellerin siyah görünmesini önleyen akıllı renk dolgusu.' },
    ],
    faqs: [
      { question: 'Şeffaf PNG alanları JPG olunca ne olur?', answer: 'Seçtiğiniz arkaplan rengi (varsayılan Beyaz) şeffaf alanların arkasına temiz şekilde doldurulur.' },
    ],
  },
  'jpg-to-webp': {
    name: "JPG'yi WebP'ye Dönüştür",
    shortName: 'JPG → WebP',
    tagline: "Web sitenizi hızlandırmak için JPG resimleri yeni nesil WebP formatına dönüştürün.",
    seoTitle: "JPG to WebP Dönüştürücü — JPG'yi WebP Yapma Online",
    seoDescription: "JPG fotoğrafları Google WebP formatına dönüştürerek dosya boyutunu %80 küçültün. Web sitesi hız optimizasyonu için idealdir.",
    keywords: ['jpg to webp', 'jpg webp yapma', 'webp dönüştürücü', 'web sitesi hızlandırma'],
    howToSteps: [
      { title: 'JPG Yükleyin', description: 'Dönüştürmek istediğiniz resmi yükleyin.' },
      { title: 'Kaliteyi Ayarlayın', description: 'Sıkıştırma oranını belirleyin.' },
      { title: 'WebP İndirin', description: 'Ultra hafif WebP dosyasını indirin.' },
    ],
    features: [
      { title: 'Yüksek Sıkıştırma', description: 'JPG kalitesini çok daha küçük dosya boyutlarında sunar.' },
    ],
    faqs: [
      { question: 'WebP tüm tarayıcılarda çalışır mı?', answer: 'Evet, Chrome, Safari, Firefox, Edge dahil tüm modern tarayıcılar WebP destekler.' },
    ],
  },
  'png-to-webp': {
    name: "PNG'yi WebP'ye Dönüştür",
    shortName: 'PNG → WebP',
    tagline: "Şeffaflığı koruyarak PNG dosyalarını hafif WebP formatına dönüştürün.",
    seoTitle: "PNG to WebP Dönüştürücü — Şeffaf PNG'yi WebP Yapma",
    seoDescription: "Şeffaf PNG görsellerini WebP formatına dönüştürün. Alfa şeffaflığı korunurken dosya boyutu önemli ölçüde küçülür.",
    keywords: ['png to webp', 'şeffaf webp yapma', 'png webp dönüştür'],
    howToSteps: [
      { title: 'PNG Yükleyin', description: 'Şeffaf veya opak PNG dosyanızı yükleyin.' },
      { title: 'Dönüştürün', description: 'WebP formatına otomatik olarak işlensin.' },
      { title: 'İndirin', description: 'Hafif WebP dosyasını kaydedin.' },
    ],
    features: [
      { title: 'Şeffaflık Korunur', description: 'Alfa kanalı tam olarak korunur.' },
    ],
    faqs: [
      { question: 'WebP şeffaf arkaplanı destekler mi?', answer: 'Evet, WebP hem kayıplı hem de kayıpsız modda tam şeffaflık desteğine sahiptir.' },
    ],
  },
  'webp-to-jpg': {
    name: "WebP'yi JPG'ye Dönüştür",
    shortName: 'WebP → JPG',
    tagline: "WebP resimlerinizi evrensel uyumlu standart JPG formatına dönüştürün.",
    seoTitle: "WebP to JPG Dönüştürücü — WebP'yi JPG Yapma Online",
    seoDescription: "WebP dosyalarını her cihazda açılabilen standart JPEG formatına ücretsiz dönüştürün.",
    keywords: ['webp to jpg', 'webp jpg yapma', 'webp dönüştürücü'],
    howToSteps: [
      { title: 'WebP Yükleyin', description: 'Dönüştürmek istediğiniz WebP dosyasını seçin.' },
      { title: 'İşleyin', description: 'Standart JPEG kodlamasını uygulayın.' },
      { title: 'JPG İndirin', description: 'Cihazınıza kaydedin.' },
    ],
    features: [
      { title: 'Evrensel Uyumluluk', description: 'Eski cihazlar ve tüm grafik programlarıyla tam uyumlu.' },
    ],
    faqs: [
      { question: 'Neden WebP\'yi JPG\'ye dönüştürmeliyim?', answer: 'Bazı eski programlar veya platformlar WebP formatını açamadığında JPG en güvenli formattır.' },
    ],
  },
  'webp-to-png': {
    name: "WebP'yi PNG'ye Dönüştür",
    shortName: 'WebP → PNG',
    tagline: "WebP dosyalarını kayıpsız PNG formatına dönüştürün.",
    seoTitle: "WebP to PNG Dönüştürücü — WebP'yi PNG Yapma Online",
    seoDescription: "WebP resimlerini şeffaflığıyla birlikte kayıpsız PNG formatına dönüştürün.",
    keywords: ['webp to png', 'webp png yapma', 'şeffaf png dönüştür'],
    howToSteps: [
      { title: 'WebP Yükleyin', description: 'WebP dosyanızı yükleyin.' },
      { title: 'Dönüştürün', description: 'Kayıpsız PNG formatına dönüştürün.' },
      { title: 'İndirin', description: 'Kaydedin.' },
    ],
    features: [
      { title: 'Kayıpsız Format', description: 'Piksel bütünlüğü tam korunur.' },
    ],
    faqs: [
      { question: 'PNG dosyası şeffaf kalır mı?', answer: 'Evet, WebP\'deki şeffaf alanlar PNG\'ye tam olarak aktarılır.' },
    ],
  },
  'image-analyzer': {
    name: 'Resim Analizi ve Bilgi Görüntüleyici',
    shortName: 'Resim Analizi',
    tagline: 'Resminizin gerçek çözünürlük, en boy oranı, megapiksel ve bellek kullanımını inceleyin.',
    seoTitle: 'Resim Analiz Aracı — Fotoğraf Piksel ve Teknik Detay İnceleme',
    seoDescription: 'Fotoğrafların piksel boyutlarını, en boy oranını, megapikselini, MIME tipini ve şeffaflık durumunu anında analiz edin. Tek tıkla rapor kopyalama.',
    keywords: ['resim analizi', 'fotoğraf çözünürlüğü öğrenme', 'megapiksel hesaplama', 'resim teknik bilgileri'],
    howToSteps: [
      { title: 'Resmi Yükleyin', description: 'İncelemek istediğiniz görseli seçin.' },
      { title: 'Detayları İnceleyin', description: 'Piksel, en boy oranı, megapiksel ve RAM tablosunu görün.' },
      { title: 'Raporu Kopyalayın', description: 'Tek tıkla tüm teknik özellikleri panoya kopyalayın.' },
    ],
    features: [
      { title: 'Gerçek Piksel Analizi', description: 'Ölçeklenmemiş gerçek piksel ve renk kanalı taraması.' },
      { title: 'Teknik Rapor', description: 'Tek tıkla panoya kopyalanabilir tam teknik özet.' },
    ],
    faqs: [
      { question: 'Şeffaflık nasıl tespit edilir?', answer: 'Resimdeki piksellerin alfa kanalları tek tek taranarak gerçek şeffaflık belirlenir.' },
    ],
  },
  'image-color-picker': {
    name: 'Resimden Renk Seçici (Damlalık)',
    shortName: 'Renk Seçici',
    tagline: 'Resminizin üzerine tıklayarak herhangi bir pikselin HEX, RGB ve HSL kodlarını alın.',
    seoTitle: 'Resimden Renk Seçme (Eyedropper) — HEX ve RGB Renk Bulucu',
    seoDescription: 'Fotoğraflarınızdan renk damlalığı ile HEX, RGB ve HSL renk kodlarını anında kopyalayın. 12 renkli geçmiş paleti.',
    keywords: ['resimden renk seçme', 'fotoğraftan renk kodu bulma', 'eyedropper online', 'hex rgb renk damlalığı'],
    howToSteps: [
      { title: 'Görseli Yükleyin', description: 'Renk almak istediğiniz görseli açın.' },
      { title: 'Piksele Tıklayın', description: 'Önizleme üzerinde istediğiniz noktaya dokunun veya tıklayın.' },
      { title: 'Kodu Kopyalayın', description: 'HEX, RGB veya HSL kodunu tek tıkla kopyalayın.' },
    ],
    features: [
      { title: 'Canlı Büyüteç ve Damlalık', description: 'Piksel hassasiyetinde tam renk yakalama.' },
      { title: '12 Renk Geçmişi', description: 'Daha önce seçtiğiniz renkleri saklayan akıllı palet çubuğu.' },
    ],
    faqs: [
      { question: 'Dokunmatik ekranlarda çalışır mı?', answer: 'Evet, mobil ve tablet ekranlarında dokunarak renk seçebilirsiniz.' },
    ],
  },
  'image-palette-generator': {
    name: 'Resim Renk Paleti Oluşturucu',
    shortName: 'Palet Oluştur',
    tagline: 'Herhangi bir görselin baskın marka ve tema renk paletini anında çıkarın.',
    seoTitle: 'Resimden Renk Paleti Oluşturma — Fotoğraf Renk Paleti Çıkarıcı',
    seoDescription: 'Fotoğraflardan otomatik olarak 3, 5, 6 veya 8 renkli estetik renk paleti oluşturun. Tek tıkla tüm paleti kopyalama.',
    keywords: ['renk paleti oluşturucu', 'fotoğraftan palet çıkarma', 'baskın renk bulma', 'image palette generator'],
    howToSteps: [
      { title: 'Fotoğrafınızı Yükleyin', description: 'Paletini çıkarmak istediğiniz fotoğrafı seçin.' },
      { title: 'Renk Sayısını Belirleyin', description: '3, 5, 6 veya 8 renk seçeneklerinden birini seçin.' },
      { title: 'Paleti Kopyalayın', description: 'Tek tek veya tüm paleti tek tıkla panoya kopyalayın.' },
    ],
    features: [
      { title: 'Akıllı Kümeleme', description: 'Renk frekansına göre en estetik baskın tonları otomatik seçer.' },
      { title: 'Tüm Paleti Kopyalama', description: 'Tasarım projeleriniz için hazır HEX listesi kopyalama.' },
    ],
    faqs: [
      { question: 'Palet renkleri nasıl hesaplanıyor?', answer: 'Görsel hızlıca taranarak en sık tekrarlanan renk tonları kümelenir ve sıralanır.' },
    ],
  },
  'favicon-generator': {
    name: 'Favicon Oluşturucu',
    shortName: 'Favicon',
    tagline: 'Logonuzu tüm cihazlar, Apple Touch ve PWA uyumlu favicon paketine dönüştürün.',
    seoTitle: 'Favicon Oluşturucu Online — ICO, PNG ve Web Manifest Paketi',
    seoDescription: 'Web siteniz için 16x16\'dan 512x512\'ye tüm favicon boyutlarını, Apple Touch ikonunu ve site.webmanifest dosyasını tek bir ZIP olarak oluşturun.',
    keywords: ['favicon oluşturucu', 'online favicon yapma', 'apple touch icon generator', 'pwa icon pack'],
    howToSteps: [
      { title: 'Logonuzu Yükleyin', description: 'Kare veya yüksek kaliteli bir logo yükleyin.' },
      { title: 'Paketi Oluşturun', description: 'Tüm standart 8 favicon boyutu ve manifest dosyası otomatik üretilir.' },
      { title: 'ZIP Olarak İndirin', description: 'Tüm paketi ZIP olarak indirin ve HTML kodlarını sitenize ekleyin.' },
    ],
    features: [
      { title: '8 Standart Boyut', description: '16x16, 32x32, 48x48, 64x64, 128x128, 180x180 (Apple), 192x192, 512x512.' },
      { title: 'PWA Web Manifest', description: 'Modern web uygulamaları için hazır site.webmanifest dosyası.' },
    ],
    faqs: [
      { question: 'Favicon paketini web siteme nasıl eklerim?', answer: 'İndirdiğiniz ZIP içeriğini sitenizin kök dizinine çıkarıp sağlanan link etiketlerini <head> içerisine yapıştırmanız yeterlidir.' },
    ],
  },
  'image-to-base64': {
    name: "Resmi Base64'e Dönüştür",
    shortName: 'Resim → Base64',
    tagline: 'Resimlerinizi HTML ve CSS içerisine doğrudan gömmek için Base64 dizgesine dönüştürün.',
    seoTitle: "Resmi Base64'e Dönüştürme — Online Image to Base64 Converter",
    seoDescription: "Fotoğraf ve görselleri Base64 koduna dönüştürün. Karakter sayısı, tahmini boyut ve tek tıkla kopyalama.",
    keywords: ['resmi base64 yapma', 'image to base64', 'base64 kodlayıcı', 'inline image converter'],
    howToSteps: [
      { title: 'Resmi Yükleyin', description: 'Kodlamak istediğiniz görseli seçin.' },
      { title: 'Kodu İnceleyin', description: 'Oluşturulan Base64 dizgesini ve karakter sayısını görün.' },
      { title: 'Kopyalayın', description: 'Tek tıkla Base64 kodunu panoya kopyalayın.' },
    ],
    features: [
      { title: 'Pratik Kullanım Kodları', description: 'HTML <img> ve CSS background-image için hazır gömme kodları.' },
    ],
    faqs: [
      { question: 'Base64 nerede kullanılır?', answer: 'Küçük ikonları HTTP isteği yapmadan doğrudan HTML/CSS koduna gömmek için kullanılır.' },
    ],
  },
  'image-to-data-uri': {
    name: "Resmi Data URI'ye Dönüştür",
    shortName: 'Resim → Data URI',
    tagline: "Doğrudan kullanıma hazır data:image/...;base64 URL dizgeleri oluşturun.",
    seoTitle: "Resmi Data URI'ye Dönüştürme — data:image/png;base64 Oluşturucu",
    seoDescription: "Görsellerinizi doğrudan yapıştırılabilir data:image/...;base64 Data URI formatına dönüştürün.",
    keywords: ['image to data uri', 'data uri oluşturucu', 'data image base64'],
    howToSteps: [
      { title: 'Görseli Yükleyin', description: 'Data URI oluşturmak istediğiniz resmi seçin.' },
      { title: 'Kodu Alın', description: 'Hazır data:image formatındaki URI dizgesini görüntüleyin.' },
      { title: 'Kopyalayın', description: 'Panoya kopyalayarak projenize yapıştırın.' },
    ],
    features: [
      { title: 'Hazır Prefiks', description: 'MIME tipi ve base64 prefiksi otomatik eklenmiş temiz çıktı.' },
    ],
    faqs: [
      { question: 'Data URI ile Base64 arasındaki fark nedir?', answer: 'Data URI, tarayıcının doğrudan resim olarak tanıyabileceği "data:image/png;base64," başlığı içerir.' },
    ],
  },
  'base64-to-image': {
    name: "Base64'ten Resme Dönüştür",
    shortName: 'Base64 → Resim',
    tagline: 'Base64 veya Data URI kodlarını çözerek gerçek PNG, JPG veya WebP resim dosyasına dönüştürün.',
    seoTitle: "Base64'ü Resme Dönüştürme — Base64 to Image Decoder Online",
    seoDescription: "Base64 dizgelerini veya metin dosyalarını çözüp gerçek resim dosyası (PNG, JPG, WebP) olarak indirin.",
    keywords: ['base64 to image', 'base64 resme çevirme', 'base64 decode online', 'data uri to image'],
    howToSteps: [
      { title: 'Base64 Kodunu Yapıştırın', description: 'Metin alanına Base64 kodunuzu yapıştırın veya .txt dosyası yükleyin.' },
      { title: 'Önizleyin', description: 'Çözülen görselin boyutlarını ve önizlemesini canlı görün.' },
      { title: 'Resim Olarak İndirin', description: 'PNG, JPG veya WebP formatında cihazınıza kaydedin.' },
    ],
    features: [
      { title: 'Çift Girdi Desteği', description: 'Hem doğrudan metin yapıştırma hem de .txt dosyası yükleme imkanı.' },
      { title: 'Güvenli Çözümleme', description: 'Zararlı kod çalıştırmayan 100% güvenli Canvas çözümlemesi.' },
    ],
    faqs: [
      { question: 'Ham Base64 yapıştırabilir miyim?', answer: 'Evet, başlık içermeyen ham Base64 dizgeleri de otomatik olarak algılanır.' },
    ],
  },
  'svg-to-png': {
    name: "SVG'yi PNG'ye Dönüştür",
    shortName: 'SVG → PNG',
    tagline: 'Vektör SVG çizimlerinizi 1x, 2x, 4x veya 8x çözünürlükte jilet gibi keskin PNG görsellerine dönüştürün.',
    seoTitle: "SVG to PNG Dönüştürücü — Yüksek Çözünürlüklü Vektör Rasterleştirme",
    seoDescription: "SVG vektörlerinizi 1x, 2x, 4x veya 8x çözünürlükte kayıpsız PNG formatına dönüştürün. Ultra keskin çıktı.",
    keywords: ['svg to png', 'svg png yapma', 'vektör rasterleştirici', 'yüksek dpi svg to png'],
    howToSteps: [
      { title: 'SVG Dosyasını Yükleyin', description: 'Rasterleştirmek istediğiniz SVG dosyasını seçin.' },
      { title: 'Ölçek Çarpanını Seçin', description: '1x, 2x, 4x veya 8x çözünürlük ölçeğini belirleyin.' },
      { title: 'PNG İndirin', description: 'Ultra yüksek çözünürlüklü şeffaf PNG dosyanızı indirin.' },
    ],
    features: [
      { title: '8x Süper Çözünürlük', description: 'Vektörleri 8 kata kadar büyüterek baskı ve Retina ekranlar için jilet gibi netleştirme.' },
      { title: 'Güvenli Rasterleştirme', description: 'SVG içerisindeki scriptleri çalıştırmayan güvenli izolasyon.' },
    ],
    faqs: [
      { question: '4x ölçekleme boyutu nasıl etkiler?', answer: 'Örneğin 500x500 piksellik bir SVG vektörü tam 2000x2000 piksel yüksek kaliteli PNG olarak dışa aktarılır.' },
    ],
  },
};
