import type { LocalizedToolItem } from '../types';

export const trTools: Record<string, LocalizedToolItem> = {
  "crop-image": {
    name: "Resim Kırpma",
    shortName: "Kırp",
    tagline: "Fotoğrafın istediğiniz kısmını tutamaçlarla, tam piksel değerleriyle veya hazır en boy oranlarıyla kırpın.",
    intro:
      "Resim Kırpma, fotoğrafı seçtiğiniz alana göre kırpar ve yalnızca o alanı tam çözünürlükte kaydeder. Boş kenarları atmak, bir konuyu çerçevelemek veya sosyal medya gönderisinin istediği şekle uydurmak için kullanın. Serbest kırpmanın yanı sıra 1:1, 4:5, 9:16 ve 16:9 gibi hazır oranlar, tam piksel girişleri ve profil fotoğrafları için daire modu sunar.",
    seoTitle: "Resim Kırpma – Ücretsiz, Yükleme Yok",
    seoDescription:
      "Resim kırpma aracı, ücretsiz ve online. Çerçeveyi sürükleyin veya tam piksel girin, 1:1, 4:5, 16:9 ya da 9:16 oranlarını kullanın, JPG, PNG, WebP veya AVIF kaydedin.",
    keywords: [
      "resim kırpma",
      "fotoğraf kırpma",
      "online resim kırpma",
      "resmi kare kırpma",
      "instagram için fotoğraf kırpma",
      "yuvarlak resim kırpma",
      "kalite kaybetmeden resim kırpma",
    ],
    howToSteps: [
      {
        title: "Fotoğrafınızı ekleyin",
        description:
          "Bir resmi yükleme kutusuna bırakın, dosya seçmek için tıklayın veya Ctrl+V ile yapıştırın. JPG, PNG, WebP, AVIF, GIF ve iPhone HEIC dosyaları desteklenir.",
      },
      {
        title: "Kırpma alanını seçin",
        description:
          "Önizlemede çerçeveyi ve tutamaçlarını sürükleyin veya 1:1 Kare, 9:16 Hikâye ya da bir sosyal medya oranı gibi bir seçeneğe tıklayın. Tam sonuç için X kaydırmasını, Y kaydırmasını, genişliği ve yüksekliği piksel olarak yazın.",
      },
      {
        title: "Şekli ve formatı seçin",
        description:
          "Yuvarlak kırpma için Daire / Avatar (1:1) seçeneğine geçin. Varsayılan olarak orijinal dosya formatı korunur; isterseniz “Kayıt formatı” altından JPG, PNG, WebP veya AVIF seçebilirsiniz.",
      },
      {
        title: "Kırpılan resmi indirin",
        description:
          "Yalnızca seçili alanı tam çözünürlükte kaydetmek için İndir'e tıklayın veya panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Oran ve sosyal medya hazır ayarları",
        description:
          "Orijinal, 1:1, 4:3, 16:9, 9:16, 2:3, 3:2 ve 21:9; ayrıca Instagram dikey (4:5), Reels ve TikTok, YouTube küçük resimleri ve Pinterest pinleri için şekiller.",
      },
      {
        title: "Piksel hassasiyetinde girişler",
        description:
          "Kaydırmayı, genişliği ve yüksekliği piksel olarak yazın, gerekirse oranı kilitleyin ve kaydetmeden önce son çıktı boyutunu görün.",
      },
      {
        title: "Avatarlar için daire kırpma",
        description:
          "Daire modu çerçeveyi kareye kilitler ve yuvarlak bir resim keser. Köşelerin saydam kalması için PNG veya WebP olarak kaydedin.",
      },
      {
        title: "Orijinal piksellerden kırpılır",
        description:
          "Önizleme hız için küçültülmüş olabilir, ancak indirilen dosya cihazınızdaki tam çözünürlüklü fotoğraftan kesilir. Hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Kırpma resim kalitesini düşürür mü?",
        answer:
          "Kırpma yalnızca çerçevenin dışındaki pikselleri siler; geri kalanlar keskin kalır. JPG, WebP veya AVIF olarak kaydederseniz resim yeniden sıkıştırılır. Orijinale yakın kalmak için %90 veya daha yüksek kalite kullanın ya da PNG olarak kaydedin.",
      },
      {
        question: "Instagram için fotoğrafı nasıl kare kırparım?",
        answer:
          "1:1 Kare veya Instagram (1:1) seçeneğine tıklayın ve çerçeveyi saklamak istediğiniz kısmın üzerine sürükleyin. Daha uzun bir dikey gönderi için Insta Dikey (4:5) seçeneğini kullanın.",
      },
      {
        question: "Yuvarlak profil fotoğrafı nasıl yaparım?",
        answer:
          "Daire / Avatar (1:1) seçeneğini seçin, daireyi yüzün üzerine taşıyın ve PNG veya WebP olarak kaydedin. JPG saydamlık saklayamaz, bu yüzden dairenin dışındaki alan beyazla doldurulur.",
      },
      {
        question: "iPhone HEIC fotoğrafını kırpabilir miyim?",
        answer:
          "Evet. HEIC dosyası açıldığında tarayıcınızda dönüştürülür. Kırpılan sonuç varsayılan olarak JPG kaydedilir; PNG, WebP veya AVIF'e geçebilirsiniz.",
      },
      {
        question: "Kırpmadan sonra fotoğrafın EXIF verileri korunur mu?",
        answer:
          "Hayır. Yeni dosya yalnızca resim piksellerinden oluşturulur, bu yüzden orijinaldeki kamera bilgileri ve GPS konumu kopyalanmaz.",
      },
      {
        question: "Hareketli bir GIF'i kırpabilir miyim?",
        answer:
          "GIF açabilirsiniz, ancak sonuç tek bir hareketsiz resim olur; çünkü JPG, PNG, WebP ve AVIF burada animasyonsuz kaydedilir.",
      },
    ],
  },
  "resize-image": {
    name: "Resim Boyutlandırma",
    shortName: "Boyutlandır",
    tagline: "Resmin genişliğini ve yüksekliğini piksel veya yüzde olarak, en boy oranı kilitli ya da serbest şekilde değiştirin.",
    intro:
      "Resim Boyutlandırma, bir fotoğrafın veya grafiğin piksel boyutlarını değiştirir. Büyük bir kamera fotoğrafını e-posta veya web sitesi için küçültmek ya da 1080 × 1080 gibi tam bir boyuta uymak için kullanın. Genişlik ve yükseklik yazabilir veya %10 ile %300 arasında bir yüzdeyle ölçekleyebilirsiniz. “Büyütme yapma” seçeneği, bir resmi yanlışlıkla büyütmenizi önler.",
    seoTitle: "Resim Boyutu Değiştirme – Piksel veya Yüzde",
    seoDescription:
      "Resim boyutu değiştirme, ücretsiz ve online. Genişlik ve yüksekliği piksel olarak girin veya yüzdeyle ölçekleyin, oranı koruyun; JPG, PNG, WebP ya da AVIF kaydedin.",
    keywords: [
      "resim boyutu değiştirme",
      "resim boyutlandırma",
      "fotoğraf boyutu küçültme",
      "piksel olarak resim boyutu değiştirme",
      "kalite kaybetmeden resim boyutlandırma",
      "resmi 1080x1080 yapma",
      "yüzde ile resim ölçekleme",
    ],
    howToSteps: [
      {
        title: "Resminizi açın",
        description: "Bir JPG, PNG, WebP, AVIF veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın (Ctrl+V).",
      },
      {
        title: "Yeni boyutu ayarlayın",
        description:
          "Piksel modunda bir genişlik veya yükseklik yazın; “En boy oranını koru” açıksa diğer kenar otomatik güncellenir. Yüzde modunda kaydırıcıyı veya %25 ile %200 arasındaki düğmeleri kullanın.",
      },
      {
        title: "Dosya formatını seçin",
        description:
          "Varsayılan olarak orijinal format korunur. JPG, PNG, WebP veya AVIF'e geçebilir ve JPG, WebP ile AVIF için kaliteyi ayarlayabilirsiniz.",
      },
      {
        title: "Sonucu indirin",
        description:
          "Boyutlandırılan resmi kaydetmek için İndir'e tıklayın veya dosya boyutunu da küçültmek istiyorsanız resmi Sıkıştır aracına gönderin.",
      },
    ],
    features: [
      {
        title: "Piksel veya yüzde",
        description: "10.000 piksele kadar tam boyutlar yazın veya resmin tamamını %10 ile %300 arasında ölçekleyin.",
      },
      {
        title: "En boy oranı kilidi",
        description:
          "Resmin gerilmemesi için orijinal oranları koruyun veya genişlik ile yüksekliği ayrı ayarlamak için kilidi açın.",
      },
      {
        title: "Büyütmeyi önleme",
        description:
          "Boyutu orijinal ölçülerle sınırlar; böylece küçük bir resim yanlışlıkla büyütülüp bulanıklaşmaz.",
      },
      {
        title: "Dosya türünüzü korur",
        description: "Farklı bir format seçmediğiniz sürece JPG, JPG olarak; PNG, PNG olarak kalır.",
      },
    ],
    faqs: [
      {
        question: "Kalite kaybetmeden resmi nasıl boyutlandırırım?",
        answer:
          "Resmi küçültmek keskinliğini korur. Orijinalden büyük yapmak ayrıntı ekleyemez, bu yüzden resim daha yumuşak görünür; bunu önlemek için “Büyütme yapma” seçeneğini açın. PNG olarak kaydedin veya JPG ve WebP için %90 ya da daha yüksek kalite kullanın.",
      },
      {
        question: "Boyutlandırma dosya boyutunu küçültür mü?",
        answer:
          "Genellikle evet. Genişliği ve yüksekliği yarıya indirmek piksellerin yaklaşık dörtte birini bırakır, bu yüzden dosya çok küçülür. Daha da küçük dosyalar için sonucu ardından sıkıştırın.",
      },
      {
        question: "1080 × 1080 gibi tam bir boyuta getirebilir miyim?",
        answer:
          "Evet. “En boy oranını koru” seçeneğini kapatın ve iki sayıyı da yazın. Orijinal kare değilse gerilir; bu yüzden önce 1:1 oranında kırpın, sonra boyutlandırın.",
      },
      {
        question: "Birçok resmi aynı anda boyutlandırabilir miyim?",
        answer:
          "Bu sayfa resimleri tek tek boyutlandırır. 50'ye kadar resmi tek adımda boyutlandırıp ZIP olarak indirmek için Toplu Resim Boyutlandırma aracını kullanın.",
      },
      {
        question: "iPhone'umdaki fotoğrafları boyutlandırabilir miyim?",
        answer:
          "Evet. HEIC fotoğraflar tarayıcınızda dönüştürülür ve boyutlandırılan resim varsayılan olarak JPG kaydedilir.",
      },
    ],
  },
  "compress-image": {
    name: "Resim Sıkıştırma",
    shortName: "Sıkıştır",
    tagline: "Bir format ve kalite seçerek resim dosyasını küçültün, yeni boyutu indirmeden önce görün.",
    intro:
      "Resim Sıkıştırma, bir fotoğrafın dosya boyutunu küçültür; böylece web sitesinde daha hızlı yüklenir veya e-posta ya da yükleme sınırına sığar. Resmi seçtiğiniz kalitede WebP (varsayılan), AVIF, JPG veya PNG olarak yeniden kaydeder ve kaydırıcıyı hareket ettirdikçe tahmini yeni boyutu ve kazanılan yüzdeyi gösterir. Hedef dosya boyutu modu, 100 KB gibi bir sınırın altında kalmanız gerektiğinde kaliteyi sizin için ayarlar.",
    seoTitle: "Resim Boyutu Küçültme – Online Resim Sıkıştırma",
    seoDescription:
      "Resim boyutu küçültme, ücretsiz. WebP, AVIF, JPG veya PNG seçin, kaliteyi ya da KB cinsinden hedef boyutu ayarlayın, kazancı indirmeden görün. Yükleme yok.",
    keywords: [
      "resim boyutu küçültme",
      "resim sıkıştırma",
      "fotoğraf boyutu küçültme",
      "jpg sıkıştırma",
      "resmi 100 kb yapma",
      "png sıkıştırma",
      "e-posta için fotoğraf küçültme",
      "webp sıkıştırma",
    ],
    howToSteps: [
      {
        title: "Bir resim ekleyin",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Çıktı formatını seçin",
        description:
          "Varsayılan olarak WebP seçilidir. AVIF genellikle en küçük dosyaları oluşturur ama kodlaması daha uzun sürer; JPG her yerde açılır; PNG ise kayıpsız olduğu için en az yer kazandırır.",
      },
      {
        title: "Kaliteyi veya hedef boyutu ayarlayın",
        description:
          "Kalite kaydırıcısını hareket ettirip boyut tahminini izleyin ya da Dosya boyutu moduna geçip KB cinsinden bir boyut yazın veya 50, 100, 200 ya da 500 KB'a tıklayın.",
      },
      {
        title: "Kontrol edin ve indirin",
        description: "Önizlemeye ve kazanılan yüzdeye bakın, ardından İndir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "Canlı boyut tahmini",
        description:
          "Ayarları değiştirdikçe yeni dosya boyutu ve kazanılan yüzde güncellenir; sonuç orijinalden büyük olacaksa uyarılırsınız.",
      },
      {
        title: "AVIF, WebP, JPG ve PNG",
        description:
          "Dört çıktı formatı; buna doğrudan tarayıcınızda bir WebAssembly kodlayıcıyla kodlanan AVIF de dahildir.",
      },
      {
        title: "Hedef dosya boyutu modu",
        description:
          "KB cinsinden bir boyut yazın, araç buna uygun bir kalite ayarı seçsin. Bu bir tahmindir; indirmeden önce canlı boyutu kontrol edin.",
      },
      {
        title: "Boyutlar aynı kalır",
        description:
          "Sıkıştırma genişliği ve yüksekliği korur. Dosyayı çok daha küçültmek için önce boyutlandırın, sonra sıkıştırın.",
      },
    ],
    faqs: [
      {
        question: "Resmim ne kadar küçülür?",
        answer:
          "Resme bağlıdır. Büyük kamera fotoğrafları %70 ile %85 kalitede WebP veya AVIF olarak çoğu zaman çok küçülür; küçük grafikler veya zaten sıkıştırılmış dosyalar ise çok az küçülebilir. Canlı tahmin, sonucu indirmeden önce gösterir.",
      },
      {
        question: "En küçük dosyayı hangi format verir: AVIF, WebP mi, JPG mi?",
        answer:
          "Benzer görsel kalitede genellikle en küçüğü AVIF'tir; onu WebP, sonra JPG izler. AVIF'in tarayıcıda kodlanması, özellikle büyük fotoğraflarda daha uzun sürer ve bazı eski programlar bu formatı açamaz.",
      },
      {
        question: "Bir resmi 100 KB'a nasıl sıkıştırırım?",
        answer:
          "Dosya boyutu modunu seçin ve 100 KB'a tıklayın. Canlı boyut hâlâ 100 KB'ın üzerindeyse kaliteyi biraz daha düşürün veya önce Resim Boyutlandırma ile ölçüleri küçültün.",
      },
      {
        question: "Sıkıştırma fotoğrafımı kötüleştirir mi?",
        answer:
          "WebP, AVIF ve JPG, gözle zor fark edilen ayrıntıları atar. %75 ile %90 kalitede çoğu fotoğraf normal görüntüleme boyutunda aynı görünür; çok düşük ayarlar ise bulanıklık ve bloklu alanlara yol açar.",
      },
      {
        question: "Sıkıştırılan dosya neden orijinalden büyük?",
        answer:
          "Bu, orijinal zaten iyi optimize edilmişse veya bir fotoğraf PNG olarak kaydedilirse olur. WebP ya da AVIF'i veya daha düşük bir kalite ayarını deneyin.",
      },
      {
        question: "Fotoğrafı sıkıştırınca EXIF verileri kaldırılır mı?",
        answer:
          "Evet. Yeni dosya resim piksellerinden oluşturulur, bu yüzden kamera bilgileri ve GPS konumu dahil edilmez.",
      },
    ],
  },
  "rotate-image": {
    name: "Resim Döndürme",
    shortName: "Döndür",
    tagline: "Resmi 90°, 180° veya -180° ile 180° arasında herhangi bir açıyla döndürün ve istediğiniz formatta kaydedin.",
    intro:
      "Resim Döndürme, yan veya ters görünen fotoğrafları düzeltir ve hafif eğik resimleri doğrultur. Hızlı dönüşler için 90° düğmelerini, küçük düzeltmeler için Özel açı kaydırıcısını kullanın. Açı 90°'nin katı değilse tuval, döndürülen resmin tamamını alacak şekilde büyür; böylece hiçbir köşe kesilmez.",
    seoTitle: "Resim Döndürme – 90°, 180° veya Herhangi Bir Açı",
    seoDescription:
      "Resim döndürme, ücretsiz ve online. Fotoğrafı 90° sola veya sağa, 180° ya da düzeltmek için özel bir açıyla döndürün; JPG, PNG, WebP veya AVIF kaydedin.",
    keywords: [
      "resim döndürme",
      "fotoğraf döndürme",
      "resmi 90 derece döndürme",
      "online fotoğraf döndürme",
      "eğik fotoğraf düzeltme",
      "jpg döndürme",
      "resmi açıyla döndürme",
    ],
    howToSteps: [
      {
        title: "Resmi açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Döndürün",
        description:
          "Saat yönünde çevirmek için +90°'ye, saat yönünün tersine çevirmek için -90°'ye, ters çevirmek için 180°'ye tıklayın. Küçük bir düzeltme için Özel açı kaydırıcısını sürükleyin.",
      },
      {
        title: "Formatı seçin",
        description:
          "Varsayılan olarak orijinal format korunur. Özel bir açıdan sonra PNG, WebP ve AVIF yeni köşeleri saydam tutar; JPG ise onları beyazla doldurur.",
      },
      {
        title: "İndirin",
        description: "Döndürülen resmi kaydetmek için İndir'e tıklayın veya panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Hızlı 90° ve 180° dönüşler",
        description: "Yan veya ters fotoğrafları tek tıkla düzeltin, başa dönmek için Sıfırla'yı kullanın.",
      },
      {
        title: "Herhangi bir açı",
        description: "Eğik bir ufku veya belgeyi kaydırıcıyla, -180° ile 180° arasında birer derecelik adımlarla doğrultun.",
      },
      {
        title: "Hiçbir şey kesilmez",
        description: "Özel açılarda çıktı tuvali, döndürülen resmin tamamı sığacak şekilde büyütülür.",
      },
      {
        title: "iPhone fotoğraflarıyla çalışır",
        description: "HEIC fotoğraflar tarayıcınızda dönüştürülür, bu yüzden önce dönüştürmeniz gerekmez.",
      },
    ],
    faqs: [
      {
        question: "Fotoğrafım neden bazı uygulamalarda yan görünüyor?",
        answer:
          "Telefonlar resmi çoğu zaman tek bir yönde kaydeder ve EXIF verilerine bir döndürme etiketi ekler; bazı uygulamalar bu etiketi yok sayar. Burada indirdiğiniz dosyada piksellerin kendisi döndürülmüştür ve döndürme etiketi yoktur, bu yüzden her yerde aynı görünür.",
      },
      {
        question: "Resmi döndürmek kalitesini düşürür mü?",
        answer:
          "90° veya 180° döndürme pikselleri değiştirmeden taşır. Diğer açılarda piksellerin yeniden hesaplanması gerekir; bu da resmi çok az yumuşatır. JPG, WebP veya AVIF olarak kaydetmek de resmi yeniden sıkıştırır; PNG bunu önler.",
      },
      {
        question: "Özel döndürmeden sonra köşeleri ne doldurur?",
        answer:
          "Tuval, döndürülen resme sığacak şekilde büyür. PNG, WebP ve AVIF'te yeni köşe alanları saydamdır; JPG'de beyazdır.",
      },
      {
        question: "iPhone HEIC fotoğrafını döndürebilir miyim?",
        answer:
          "Evet. Fotoğraf tarayıcınızda dönüştürülür ve başka bir format seçmediğiniz sürece döndürülen sürüm JPG olarak kaydedilir.",
      },
    ],
  },
  "flip-image": {
    name: "Resim Çevirme",
    shortName: "Çevir",
    tagline: "Bir resmi yatay veya dikey olarak aynalayın; örneğin ters görünen bir selfie'yi veya yazıyı düzeltin.",
    intro:
      "Resim Çevirme, bir resmin ayna kopyasını oluşturur. Yatay çevirme sol ile sağı yer değiştirir; bu, yazıların ters göründüğü ön kamera selfie'lerini düzeltir. Dikey çevirme resmi sudaki bir yansıma gibi baş aşağı çevirir; iki çevirmeyi birlikte kullanmak 180° döndürmeyle aynı sonucu verir.",
    seoTitle: "Resim Ayna Çevirme – Yatay veya Dikey",
    seoDescription:
      "Resim ayna çevirme, ücretsiz. Fotoğrafı yatay veya dikey aynalayın, ters selfie'leri ve ters yazıları düzeltin; JPG, PNG, WebP ya da AVIF kaydedin. Yükleme yok.",
    keywords: [
      "resim ayna çevirme",
      "fotoğraf ters çevirme",
      "resmi yatay çevirme",
      "resmi dikey çevirme",
      "ayna selfie düzeltme",
      "fotoğrafı soldan sağa çevirme",
      "online resim çevirme",
    ],
    howToSteps: [
      {
        title: "Resmi açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Çevirme yönünü seçin",
        description:
          "Sol ile sağı değiştirmek için Yatay'a, baş aşağı çevirmek için Dikey'e tıklayın. Geri almak için düğmeye yeniden tıklayın veya İkisi birden ya da Sıfırla'yı kullanın.",
      },
      {
        title: "Formatı seçin",
        description: "Varsayılan olarak orijinal format korunur; isterseniz JPG, PNG, WebP veya AVIF olarak kaydedebilirsiniz.",
      },
      {
        title: "İndirin",
        description: "Aynalanan resmi kaydetmek için İndir'e tıklayın veya panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Yatay ve dikey ayna",
        description: "Tek yönde veya iki yönde çevirin ve sonucu hemen önizlemede görün.",
      },
      {
        title: "Pikseller değişmez",
        description: "Çevirme yalnızca pikselleri yeni konumlara taşır. Her pikseli tam olarak korumak için PNG olarak kaydedin.",
      },
      {
        title: "Formatınızı korur",
        description: "Varsayılan olarak JPG, JPG olarak; PNG, PNG olarak kaydedilir; böylece aynı türde dosya geri alırsınız.",
      },
      {
        title: "Tarayıcınızda işlenir",
        description: "Resim cihazınızda çevrilir ve asla bir sunucuya yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Çevirme ile döndürme arasındaki fark nedir?",
        answer:
          "Çevirme ayna görüntüsü oluşturur, bu yüzden yazılar ters okunur. Döndürme ise resmin tamamını merkezi etrafında çevirir ve yazılar okunabilir kalır.",
      },
      {
        question: "Aynalanmış bir selfie'yi nasıl düzeltirim?",
        answer:
          "Birçok ön kamera selfie'leri ayna görüntüsü olarak kaydeder. Fotoğrafı açın, Yatay'a tıklayın ve indirin; arka plandaki yazılar yeniden doğru okunur.",
      },
      {
        question: "Resmi çevirmek kalitesini düşürür mü?",
        answer:
          "Çevirmenin kendisi hiçbir piksel değerini değiştirmez. JPG, WebP veya AVIF olarak kaydederseniz resim yeniden sıkıştırılır; bu yüzden yüksek bir kalite ayarı veya PNG kullanın.",
      },
      {
        question: "Resmi aynı anda iki yönde çevirebilir miyim?",
        answer:
          "Evet. İkisi birden seçeneği resmi hem yatay hem dikey olarak aynalar; sonuç 180° döndürmeyle aynı görünür.",
      },
    ],
  },
  "convert-image": {
    name: "Evrensel Resim Dönüştürücü",
    shortName: "Dönüştürücü",
    tagline: "JPG, PNG, WebP, AVIF, GIF, BMP, SVG veya iPhone HEIC resimlerini JPG, PNG, WebP ya da AVIF'e dönüştürün.",
    intro:
      "Evrensel Resim Dönüştürücü, bir resmi bir dosya formatından diğerine dönüştürür. JPG, PNG, WebP, AVIF, GIF, BMP ve SVG gibi tarayıcınızın gösterebildiği her resmi ve iPhone HEIC fotoğraflarını açar; bunları JPG, PNG, WebP veya AVIF olarak kaydeder. JPG ve HEIC fotoğraflar varsayılan olarak WebP'ye, diğer resimler PNG'ye ayarlanır; ancak dört çıktıdan istediğinizi seçebilirsiniz.",
    seoTitle: "Resim Format Dönüştürme – JPG, PNG, WebP, HEIC",
    seoDescription:
      "Resim format dönüştürme, tarayıcınızda ücretsiz. HEIC, PNG, JPG, WebP, GIF, BMP veya SVG'yi ayarlanabilir kaliteyle JPG, PNG, WebP ya da AVIF'e çevirin.",
    keywords: [
      "resim format dönüştürme",
      "resim dönüştürücü",
      "resmi jpg'ye çevirme",
      "heic jpg dönüştürme",
      "resmi webp'ye çevirme",
      "avif dönüştürme",
      "gif png dönüştürme",
      "bmp jpg dönüştürme",
    ],
    howToSteps: [
      {
        title: "Resminizi açın",
        description: "Tarayıcınızın açabildiği herhangi bir formatta bir resmi veya bir iPhone HEIC fotoğrafını bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Çıktı formatını seçin",
        description: "“Kayıt formatı” altında JPG, PNG, WebP veya AVIF seçin.",
      },
      {
        title: "Kaliteyi ve arka planı ayarlayın",
        description:
          "JPG, WebP ve AVIF için kaliteyi ayarlayın. Resimde saydam alanlar varsa ve JPG seçtiyseniz, bu alanları dolduracak rengi seçin.",
      },
      {
        title: "Dönüştürülen dosyayı indirin",
        description: "İndir'e tıklayın. AVIF tarayıcınızda kodlandığı için büyük fotoğraflarda birkaç saniye sürebilir.",
      },
    ],
    features: [
      {
        title: "Birçok giriş formatı",
        description: "JPG, PNG, WebP, AVIF, GIF, BMP, SVG ve tarayıcınızın desteklediği diğer formatların yanı sıra HEIC ve HEIF dosyalarını açar.",
      },
      {
        title: "Dört modern çıktı",
        description: "JPG, PNG, WebP veya AVIF olarak kaydedin. AVIF, cihazınızda bir WebAssembly kodlayıcıyla kodlanır.",
      },
      {
        title: "Saydamlık doğru işlenir",
        description: "PNG, WebP ve AVIF saydam alanları korur. JPG için bu alanların yerine geçecek rengi siz seçersiniz.",
      },
      {
        title: "Kalite kontrolü",
        description: "Kayıplı formatlarda dosya boyutu ile ayrıntı arasında denge kurmak için kaliteyi %10 ile %100 arasında ayarlayın.",
      },
    ],
    faqs: [
      {
        question: "HEIC'i JPG'ye nasıl dönüştürürüm?",
        answer:
          "HEIC fotoğrafını açın, “Kayıt formatı” altında JPG'yi seçin ve İndir'e tıklayın. Dönüştürme tarayıcınızda yapılır, bu yüzden fotoğraf hiçbir yere gönderilmez.",
      },
      {
        question: "Hangi formatı seçmeliyim?",
        answer:
          "Her yerde açılması gereken fotoğraflar için JPG; ekran görüntüleri, logolar ve keskin kenarlı ya da saydam grafikler için PNG; daha küçük web resimleri için WebP; modern tarayıcılarda en küçük dosyalar için AVIF.",
      },
      {
        question: "GIF, BMP veya SVG'ye dönüştürebilir miyim?",
        answer:
          "Hayır. Bu formatlar açılabilir, ancak çıktı her zaman JPG, PNG, WebP veya AVIF olur. Hareketli bir GIF tek bir hareketsiz resme dönüşür.",
      },
      {
        question: "Saydam arka planım korunur mu?",
        answer:
          "Evet, PNG, WebP veya AVIF olarak kaydederseniz. JPG saydamlık saklayamaz, bu yüzden saydam alanlar seçtiğiniz renkle doldurulur.",
      },
      {
        question: "Dönüştürme kayıpsız mı?",
        answer:
          "PNG olarak kaydetmek kayıpsızdır. JPG, WebP ve AVIF kayıplı formatlardır: daha yüksek kalite daha fazla ayrıntı korur ama daha büyük bir dosya oluşturur.",
      },
    ],
  },
  "jpg-to-png": {
    name: "JPG'den PNG'ye",
    shortName: "JPG → PNG",
    tagline: "Bir JPG fotoğrafını, düzenleyip yeniden kaydettiğinizde daha fazla kalite kaybetmeyecek bir PNG dosyasına dönüştürün.",
    intro:
      "JPG'den PNG'ye aracı, bir JPEG resmi PNG formatına dönüştürür. PNG kayıpsız sıkıştırma kullanır, bu yüzden resim her düzenleyip kaydettiğinizde daha fazla kalite kaybetmez; bu da ekran görüntüleri, grafikler ve daha sonra üzerinde çalışacağınız dosyalar için kullanışlıdır. PNG, JPG'nizle tamamen aynı piksellere ve boyutlara sahiptir, ancak dosya genellikle daha büyüktür.",
    seoTitle: "JPG'yi PNG'ye Dönüştürme – Ücretsiz, Tarayıcıda",
    seoDescription:
      "JPG'yi PNG'ye dönüştürme, ücretsiz ve online. JPEG'inizle aynı piksellere ve boyutlara sahip kayıpsız bir PNG elde edin; dosya yüklenmeden tarayıcınızda oluşturulur.",
    keywords: [
      "jpg'yi png'ye dönüştürme",
      "jpg png çevirme",
      "jpeg png dönüştürme",
      "jpg to png",
      "jpg png dönüştürücü",
      "jpg'yi png olarak kaydetme",
    ],
    howToSteps: [
      {
        title: "Bir JPG açın",
        description: "Bir JPG veya JPEG dosyasını yükleme kutusuna bırakın, seçmek için tıklayın ya da Ctrl+V ile yapıştırın.",
      },
      {
        title: "Önizlemeyi kontrol edin",
        description: "Çıktı her zaman PNG'dir, bu yüzden değiştirilecek ayar yoktur. Boyutlar aynı kalır.",
      },
      {
        title: "PNG'yi indirin",
        description: "PNG indir'e tıklayın veya Sonraki adım düğmeleriyle resmi Boyutlandır gibi başka bir araca gönderin.",
      },
    ],
    features: [
      {
        title: "Birebir piksel kopyası",
        description: "JPG'nin her pikseli, ek sıkıştırma kaybı olmadan PNG'de saklanır.",
      },
      {
        title: "Tekrar tekrar düzenlemeye uygun",
        description: "PNG, yeni sıkıştırma bozulmaları oluşmadan defalarca düzenlenip kaydedilebilir.",
      },
      {
        title: "Aynı boyutlar",
        description: "PNG, orijinal JPG ile aynı genişlik ve yüksekliğe sahiptir.",
      },
      {
        title: "Yükleme yok",
        description: "Dosya tarayıcı sekmenizin içinde dönüştürülür ve cihazınızda kalır.",
      },
    ],
    faqs: [
      {
        question: "JPG'yi PNG'ye dönüştürmek kaliteyi artırır mı?",
        answer:
          "Hayır. PNG resmi şu anki hâliyle tam olarak korur, ancak JPEG sıkıştırmasının daha önce sildiği ayrıntıyı geri getiremez.",
      },
      {
        question: "PNG'ye dönüştürmek arka planı saydam yapar mı?",
        answer:
          "Hayır. JPG'de saydamlık yoktur, bu yüzden PNG aynı düz arka planı korur. Arka planı kaldırmak için Arka Plan Kaldırma aracını kullanın.",
      },
      {
        question: "PNG dosyası neden JPG'den büyük?",
        answer:
          "PNG her pikseli kayıplı sıkıştırma olmadan saklar; JPG ise yer kazanmak için ince ayrıntıları atar. PNG olarak kaydedilen fotoğraflar çoğu zaman birkaç kat daha büyüktür.",
      },
      {
        question: "Birkaç JPG'yi aynı anda PNG'ye dönüştürebilir miyim?",
        answer:
          "Bu sayfa dosyaları tek tek dönüştürür. Ölçeği %100'e ayarlarsanız Toplu Resim Boyutlandırma aracı 50'ye kadar resmi tek bir ZIP içinde PNG olarak kaydedebilir.",
      },
      {
        question: "JPG'nin EXIF verileri korunur mu?",
        answer:
          "Hayır. PNG yalnızca piksellerden oluşturulur, bu yüzden kamera bilgileri ve GPS konumu kopyalanmaz.",
      },
    ],
  },
  "png-to-jpg": {
    name: "PNG'den JPG'ye",
    shortName: "PNG → JPG",
    tagline: "Bir PNG'yi daha küçük bir JPG dosyasına dönüştürün ve saydam alanların yerine geçecek rengi seçin.",
    intro:
      "PNG'den JPG'ye aracı, bir PNG resmi JPEG'e dönüştürür; JPEG fotoğraflar için genellikle çok daha küçüktür ve neredeyse her web sitesi ile uygulama tarafından kabul edilir. JPEG saydamlık saklayamaz, bu yüzden saydam alanları doldurmak için beyaz, siyah veya herhangi bir özel renk seçersiniz. JPG kalitesini de %10 ile %100 arasında ayarlayabilirsiniz.",
    seoTitle: "PNG'yi JPG'ye Dönüştürme – Arka Plan Rengi Seçin",
    seoDescription:
      "PNG'yi JPG'ye dönüştürme, ücretsiz. Saydam alanlar için beyaz, siyah veya özel bir arka plan seçin, JPG kalitesini ayarlayın. Tarayıcınızda çalışır, yükleme yok.",
    keywords: [
      "png'yi jpg'ye dönüştürme",
      "png jpg çevirme",
      "png jpeg dönüştürme",
      "beyaz arka planla png jpg",
      "png jpg dönüştürücü",
      "png dosya boyutu küçültme",
    ],
    howToSteps: [
      {
        title: "Bir PNG açın",
        description: "Bir PNG dosyasını yükleme kutusuna bırakın, seçmek için tıklayın ya da Ctrl+V ile yapıştırın.",
      },
      {
        title: "Arka plan rengini seçin",
        description: "Beyaz, Siyah veya renk seçiciyle herhangi bir renk seçin. Bu renk tüm saydam alanları doldurur.",
      },
      {
        title: "Kaliteyi ayarlayın",
        description: "%85 iyi bir varsayılandır. Yazı veya ince çizgi içeren resimler için daha yüksek bir değer kullanın.",
      },
      {
        title: "JPG'yi indirin",
        description: "Dönüştürülen dosyayı kaydetmek için JPG indir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "İstediğiniz arka plan rengi",
        description: "Saydam ve yarı saydam pikseller beyaz, siyah veya özel bir renkle harmanlanır.",
      },
      {
        title: "Ayarlanabilir kalite",
        description: "Dosya boyutu ile ayrıntı arasında denge kurmak için %10 ile %100 arasında seçin.",
      },
      {
        title: "Fotoğraflar için daha küçük dosyalar",
        description: "Fotoğraflar ve ayrıntılı ekran görüntüleri JPG olarak genellikle PNG'den çok daha küçüktür.",
      },
      {
        title: "Aynı boyutlar",
        description: "JPG, PNG'nin genişliğini ve yüksekliğini aynen korur.",
      },
    ],
    faqs: [
      {
        question: "Saydam arka plana ne olur?",
        answer:
          "JPG'de saydamlık yoktur, bu yüzden saydam ve yarı saydam pikseller seçtiğiniz arka plan rengiyle harmanlanır. Varsayılan olarak beyaz seçilidir.",
      },
      {
        question: "JPG, PNG'den küçük olur mu?",
        answer:
          "Fotoğraflar ve çok renkli resimler için genellikle evet, çoğu zaman çok daha küçük. Az renkli basit grafiklerde PNG zaten küçük olabilir ve JPG daha da büyük çıkabilir.",
      },
      {
        question: "Hangi kalite ayarını kullanmalıyım?",
        answer:
          "Varsayılan olan %85 çoğu fotoğraf için iyi çalışır. Yazı veya ince ayrıntı içeren resimler için %90 ile %100 arası, dosya boyutunun ayrıntıdan daha önemli olduğu durumlarda daha düşük değerler kullanın.",
      },
      {
        question: "JPG'mde yazılar neden bulanık görünüyor?",
        answer:
          "JPEG sıkıştırması keskin yazı ve çizgilerin etrafına yumuşak kenarlar ve küçük lekeler ekleyebilir. Daha yüksek kalite kullanın veya logoları ve ekran görüntülerini PNG ya da WebP olarak tutun.",
      },
    ],
  },
  "jpg-to-webp": {
    name: "JPG'den WebP'ye",
    shortName: "JPG → WebP",
    tagline: "Web sayfalarının daha hızlı yüklenmesi için JPG fotoğrafları daha küçük WebP dosyalarına dönüştürün.",
    intro:
      "JPG'den WebP'ye aracı, JPEG fotoğrafları tüm güncel büyük tarayıcıların gösterebildiği WebP formatına dönüştürür. Benzer görsel kalitede bir WebP dosyası, aynı resmin JPG hâlinden genellikle daha küçüktür; bu yüzden onu kullanan sayfalar daha hızlı yüklenir. Kaliteyi %10 ile %100 arasında bir kaydırıcıyla ayarlarsınız ve resim orijinal boyutlarını korur.",
    seoTitle: "JPG'yi WebP'ye Dönüştürme – Daha Küçük Web Resimleri",
    seoDescription:
      "JPG'yi WebP'ye dönüştürme, ücretsiz. Daha hızlı web siteleri için daha küçük resim dosyaları alın, kaliteyi %10 ile %100 arasında ayarlayın, boyutu koruyun.",
    keywords: [
      "jpg'yi webp'ye dönüştürme",
      "jpg webp çevirme",
      "jpeg webp dönüştürme",
      "jpg to webp",
      "web sitesi için webp dönüştürme",
      "webp dönüştürücü",
    ],
    howToSteps: [
      {
        title: "Bir JPG açın",
        description: "Bir JPG veya JPEG fotoğrafını yükleme kutusuna bırakın, seçmek için tıklayın ya da Ctrl+V ile yapıştırın.",
      },
      {
        title: "Kaliteyi ayarlayın",
        description: "%80 civarından başlayın. Yüksek değerler daha fazla ayrıntı korur; düşük değerler daha küçük dosyalar oluşturur.",
      },
      {
        title: "WebP'yi indirin",
        description: "WebP indir'e tıklayın ve yeni dosya boyutunu orijinalle karşılaştırın.",
      },
    ],
    features: [
      {
        title: "Benzer kalitede daha küçük dosyalar",
        description: "Aynı görünen bir fotoğraf için WebP genellikle JPG'den daha az bayt gerektirir.",
      },
      {
        title: "Kalite kaydırıcısı",
        description: "Sayfa hızı ve resim ayrıntısı ihtiyaçlarınıza göre %10 ile %100 arasında herhangi bir kalite seçin.",
      },
      {
        title: "Orijinal boyutlar",
        description: "Fotoğraf, genişliği veya yüksekliği değiştirilmeden dönüştürülür.",
      },
      {
        title: "Cihazınızda dönüştürülür",
        description: "Fotoğrafınız tarayıcıda işlenir ve yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "WebP, JPG'den daha mı iyi?",
        answer:
          "Web siteleri için WebP genellikle aynı görsel kalitede daha küçük dosyalar sunar ve saydamlık da saklayabilir. JPG ise hâlâ daha fazla eski program, yazıcı ve yükleme formu tarafından kabul edilir.",
      },
      {
        question: "Tüm tarayıcılar WebP'yi destekliyor mu?",
        answer:
          "Chrome, Edge, Firefox ve Safari'nin güncel sürümleri WebP resimlerini gösterir. Bazı eski uygulamalar ve işletim sistemleri bunları açamaz.",
      },
      {
        question: "Neden WebP yerine PNG aldım?",
        answer:
          "Safari'nin bazı sürümleri dahil bazı tarayıcılar WebP'yi gösterebilir ama oluşturamaz. Bu durumda araç sizi bilgilendirir ve PNG kaydeder; WebP dosyası almak için Chrome, Edge veya Firefox kullanın.",
      },
      {
        question: "İndirmeden önce dosya boyutunu nasıl görebilirim?",
        answer:
          "Bu dönüştürücü boyut tahmini göstermez. WebP seçiliyken Resim Sıkıştırma aracı, kaliteyi ayarladığınız sırada beklenen boyutu ve kazanılan yüzdeyi gösterir.",
      },
    ],
  },
  "png-to-webp": {
    name: "PNG'den WebP'ye",
    shortName: "PNG → WebP",
    tagline: "PNG resimlerini saydam arka planları koruyarak, genellikle çok daha küçük bir dosyayla WebP'ye dönüştürün.",
    intro:
      "PNG'den WebP'ye aracı, ekran görüntüleri, logolar ve grafikler gibi PNG dosyalarını WebP formatına dönüştürür. WebP saydamlığı desteklediği için saydam alanlar dönüştürmeden sonra da saydam kalır. Sonuç genellikle PNG'den çok daha küçüktür ve kalite kaydırıcısı yazıların ve ince çizgilerin keskin kalmasını sağlar.",
    seoTitle: "PNG'yi WebP'ye Dönüştürme – Saydamlık Korunur",
    seoDescription:
      "PNG'yi WebP'ye dönüştürme, ücretsiz. Saydam arka planlar korunur, dosyalar genellikle çok daha küçük olur ve kaliteyi ayarlayabilirsiniz. Tamamen tarayıcıda.",
    keywords: [
      "png'yi webp'ye dönüştürme",
      "png webp çevirme",
      "saydam png webp",
      "png to webp",
      "web sitesi için png küçültme",
      "saydam webp",
    ],
    howToSteps: [
      {
        title: "Bir PNG açın",
        description: "Bir PNG dosyasını yükleme kutusuna bırakın, seçmek için tıklayın veya Ctrl+V ile bir ekran görüntüsü yapıştırın.",
      },
      {
        title: "Kaliteyi ayarlayın",
        description: "Logolar, yazılar ve ekran görüntüleri için %90 veya üzerini kullanın; fotoğraflar için %75 ile %85 arası genellikle yeterlidir.",
      },
      {
        title: "WebP'yi indirin",
        description: "WebP indir'e tıklayın. Saydam alanlar yeni dosyada da saydam kalır.",
      },
    ],
    features: [
      {
        title: "Saydamlık korunur",
        description: "PNG'nizin alfa kanalı WebP'de saklanır; böylece logolar ve simgeler saydam arka planlarını korur.",
      },
      {
        title: "Çok daha küçük dosyalar",
        description: "WebP sıkıştırması, PNG ekran görüntülerini ve grafiklerini genellikle boyutlarının küçük bir kısmına indirir.",
      },
      {
        title: "Kalite kontrolü",
        description: "Resmin ne kadar ayrıntıya ihtiyacı olduğuna göre kaliteyi %10 ile %100 arasında ayarlayın.",
      },
      {
        title: "Aynı boyutlar",
        description: "WebP, PNG'nin genişliğini ve yüksekliğini aynen korur.",
      },
    ],
    faqs: [
      {
        question: "PNG'den WebP'ye dönüştürme saydam arka planı korur mu?",
        answer: "Evet. WebP saydamlığı destekler, bu yüzden saydam ve yarı saydam pikseller korunur.",
      },
      {
        question: "WebP neden PNG'den bu kadar küçük?",
        answer:
          "PNG kayıpsızdır ve her pikseli tam olarak saklar. Buradaki WebP ise kayıplı sıkıştırma kullanır; gözle zor fark edilen ayrıntıları atar ve çok yer kazandırır.",
      },
      {
        question: "Logolar ve ekran görüntüleri için hangi kaliteyi kullanmalıyım?",
        answer:
          "Yazıların, simgelerin ve ince çizgilerin keskin kalması için %90 ile %100 arası kullanın. Fotoğraflar için %75 ile %85 arası genellikle yeterlidir.",
      },
      {
        question: "WebP resimlerini web sitemde kullanabilir miyim?",
        answer:
          "Evet. Tüm güncel büyük tarayıcılar WebP'yi gösterir. Çok eski tarayıcıları veya uygulamaları da destekliyorsanız orijinal PNG'yi yedek olarak saklayın.",
      },
    ],
  },
  "webp-to-jpg": {
    name: "WebP'den JPG'ye",
    shortName: "WebP → JPG",
    tagline: "WebP resimlerini her uygulamada, fotoğraf görüntüleyicide veya yükleme formunda açılması için JPG'ye dönüştürün.",
    intro:
      "WebP'den JPG'ye aracı, web sitelerinde yaygın olan WebP dosyalarını standart JPEG resimlere dönüştürür. Eski bir program, bir yükleme formu veya bir baskı hizmeti WebP kabul etmediğinde en güvenli seçim JPG'dir. WebP'de saydam alanlar varsa, JPG saydamlık saklayamadığı için bu alanları dolduracak rengi siz seçersiniz.",
    seoTitle: "WebP'yi JPG'ye Dönüştürme – Ücretsiz, Yükleme Yok",
    seoDescription:
      "WebP'yi JPG'ye dönüştürme, ücretsiz. WebP resimlerini her uygulamada açılır hâle getirin, saydam alanlar için dolgu rengi seçin, kaliteyi ayarlayın. Yükleme yok.",
    keywords: [
      "webp'yi jpg'ye dönüştürme",
      "webp jpg çevirme",
      "webp jpeg dönüştürme",
      "webp'yi jpg olarak kaydetme",
      "webp to jpg",
      "webp dosyası açma",
    ],
    howToSteps: [
      {
        title: "Bir WebP dosyası açın",
        description: "Bir WebP resmini yükleme kutusuna bırakın, seçmek için tıklayın ya da Ctrl+V ile yapıştırın.",
      },
      {
        title: "Kaliteyi ve dolgu rengini ayarlayın",
        description:
          "%10 ile %100 arasında bir kalite seçin. Resimde saydam kısımlar varsa, onların yerine geçecek rengi seçin.",
      },
      {
        title: "JPG'yi indirin",
        description: "Neredeyse her yerde açılan bir dosya kaydetmek için JPG indir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "En yüksek uyumluluk",
        description: "JPG neredeyse her programda, cihazda, yazıcıda ve web sitesi yükleme formunda açılır.",
      },
      {
        title: "Saydamlık için dolgu rengi",
        description: "WebP'nin saydam alanları beyazla veya seçtiğiniz herhangi bir renkle doldurulur.",
      },
      {
        title: "Ayarlanabilir kalite",
        description: "Dosya boyutu ile ayrıntı arasında denge kurmak için kalite kaydırıcısını kullanın.",
      },
      {
        title: "Gizli dönüştürme",
        description: "Resim tarayıcınızda çözülür ve JPG olarak kaydedilir; hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Web sitelerindeki resimler neden WebP olarak kaydediliyor?",
        answer:
          "Birçok web sitesi, dosyalar daha küçük olduğu için resimleri WebP olarak sunar. Birini kaydettiğinizde WebP dosyasını alırsınız ve bazı eski programlar bu dosyayı açamaz.",
      },
      {
        question: "WebP'nin saydam kısımlarına ne olur?",
        answer:
          "JPG saydamlık saklayamaz, bu yüzden bu alanlar düz bir renkle doldurulur. Varsayılan olarak beyaz kullanılır; başka bir renk de seçebilirsiniz.",
      },
      {
        question: "Hareketli bir WebP'yi dönüştürebilir miyim?",
        answer: "JPG animasyon saklayamadığı için yalnızca tek bir hareketsiz kare dönüştürülür.",
      },
      {
        question: "JPG kalite kaybeder mi?",
        answer:
          "WebP çözülür ve kayıplı bir format olan JPG olarak yeniden kaydedilir. Sonucu orijinale çok yakın tutmak için %90 veya daha yüksek kalite kullanın.",
      },
    ],
  },
  "webp-to-png": {
    name: "WebP'den PNG'ye",
    shortName: "WebP → PNG",
    tagline: "WebP resimlerini saydamlığı ve her pikseli koruyan kayıpsız PNG dosyalarına dönüştürün.",
    intro:
      "WebP'den PNG'ye aracı, WebP resimlerini neredeyse tüm düzenleyicilerin ve görüntüleyicilerin desteklediği kayıpsız bir format olan PNG'ye dönüştürür. Saydam alanlar saydam kalır ve çözülen pikseller tam olarak kaydedilir; böylece resim düzenleyip yeniden kaydettiğinizde kalite kaybetmez. Bir uygulama WebP'yi açamadığında veya üzerinde çalışmaya devam edeceğiniz bir dosyaya ihtiyacınız olduğunda kullanın.",
    seoTitle: "WebP'yi PNG'ye Dönüştürme – Kayıpsız, Saydam",
    seoDescription:
      "WebP'yi PNG'ye dönüştürme, ücretsiz. Saydam arka planları koruyun, her resim düzenleyicide açılan kayıpsız bir PNG alın. Dosya tarayıcınızda dönüştürülür.",
    keywords: [
      "webp'yi png'ye dönüştürme",
      "webp png çevirme",
      "saydam webp png",
      "webp to png",
      "kalite kaybetmeden webp png",
      "webp'yi png olarak kaydetme",
    ],
    howToSteps: [
      {
        title: "Bir WebP dosyası açın",
        description: "Bir WebP resmini yükleme kutusuna bırakın, seçmek için tıklayın ya da Ctrl+V ile yapıştırın.",
      },
      {
        title: "Önizlemeyi kontrol edin",
        description: "Çıktı her zaman aynı boyutta kayıpsız bir PNG'dir, bu yüzden kalite ayarı yoktur.",
      },
      {
        title: "PNG'yi indirin",
        description: "Dönüştürülen dosyayı kaydetmek için PNG indir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "Saydamlık korunur",
        description: "WebP'nin saydam ve yarı saydam alanları PNG'de de saydam kalır.",
      },
      {
        title: "Kayıpsız çıktı",
        description: "Çözülen pikseller, yeni bir sıkıştırma kaybı olmadan tam olarak saklanır.",
      },
      {
        title: "Her yerde açılır",
        description: "PNG, neredeyse tüm resim düzenleyicileri, görüntüleyiciler ve ofis programları tarafından desteklenir.",
      },
      {
        title: "Yükleme yok",
        description: "Dönüştürme tarayıcınızda çalışır, bu yüzden dosya cihazınızda kalır.",
      },
    ],
    faqs: [
      {
        question: "WebP'den PNG'ye dönüştürme saydam arka planı korur mu?",
        answer: "Evet. PNG saydamlığı tam olarak destekler, bu yüzden arka plan saydam kalır.",
      },
      {
        question: "PNG neden WebP'den büyük?",
        answer:
          "Çoğu WebP resmi kayıplı sıkıştırma kullanır; PNG ise her pikseli kayıpsız saklar. Bu yüzden aynı resim PNG olarak genellikle daha fazla bayt gerektirir.",
      },
      {
        question: "PNG'ye dönüştürmek resim kalitesini artırır mı?",
        answer:
          "Hayır. PNG resmi şu anki görünümüyle tam olarak korur, ancak WebP sıkıştırmasının daha önce sildiği ayrıntıyı geri getiremez.",
      },
      {
        question: "Hareketli bir WebP'yi PNG'ye dönüştürebilir miyim?",
        answer:
          "Araç tek bir hareketsiz resim kaydeder. Buradaki PNG çıktısı animasyon karelerini içermez.",
      },
    ],
  },
  "bulk-image-resizer": {
    name: "Toplu Resim Boyutlandırma",
    shortName: "Toplu Boyutlandır",
    tagline: "50'ye kadar resmi yüzdeyle, tam genişlikle veya en büyük kutu ölçüsüyle aynı anda boyutlandırın ve tek bir ZIP olarak indirin.",
    intro:
      "Toplu Resim Boyutlandırma, aynı boyut kuralını tek adımda birçok resme uygular. Tüm dosyaları bir yüzdeyle ölçekleyebilir, tam bir genişlik belirleyebilir veya her resmi 1200 × 800 gibi bir kutunun içine sığdırarak hiçbir kenarın kutudan büyük olmamasını sağlayabilirsiniz. Her dosya orijinal formatını koruyabilir ve tüm sonuçlar tek bir ZIP içinde birlikte indirilir.",
    seoTitle: "Toplu Resim Boyutlandırma – Birden Fazla Resim",
    seoDescription:
      "Toplu resim boyutlandırma, ücretsiz. 50'ye kadar JPG, PNG veya WebP dosyasını yüzdeyle, tam genişlikle ya da en büyük kutuyla ölçekleyin, tek ZIP alın.",
    keywords: [
      "toplu resim boyutlandırma",
      "birden fazla resmi boyutlandırma",
      "toplu fotoğraf boyutlandırma",
      "online toplu resim küçültme",
      "çoklu resim boyutu değiştirme",
      "resimleri boyutlandırıp zip indirme",
    ],
    howToSteps: [
      {
        title: "Resimlerinizi ekleyin",
        description: "50'ye kadar JPG, PNG veya WebP dosyasını (her biri en fazla 50 MB) yükleme alanına bırakın ya da seçmek için tıklayın.",
      },
      {
        title: "Bir boyutlandırma modu seçin",
        description:
          "Yüzde modu her resmi %10 ile %200 arasında boyutlandırır. Tam piksel modu genişliği, en boy oranının kilidini açarsanız yüksekliği de belirler. Kutuya sığdır modu her resmi girdiğiniz genişlik ve yüksekliğin içine sığacak şekilde küçültür.",
      },
      {
        title: "Çıktı formatını seçin",
        description:
          "Orijinal formatı koruyun veya her şeyi PNG, JPG ya da WebP'ye dönüştürün. “Küçük resimleri büyütme” seçeneği varsayılan olarak açıktır, böylece küçük resimler büyütülmez.",
      },
      {
        title: "Boyutlandırın ve indirin",
        description: "Tümünü boyutlandır'a, ardından ZIP indir'e tıklayın veya listeden tek tek dosyaları kaydedin.",
      },
    ],
    features: [
      {
        title: "Üç boyutlandırma modu",
        description: "Yüzdeyle ölçekleyin, tam bir genişlik belirleyin veya en büyük genişlik ve yüksekliğin içine sığdırın.",
      },
      {
        title: "Her dosyanın formatını korur",
        description: "Orijinal seçeneğiyle JPG'ler JPG, PNG'ler PNG ve WebP dosyaları WebP olarak kalır.",
      },
      {
        title: "Büyütmeyi önleme",
        description:
          "Tam piksel ve Kutuya sığdır modlarında, hedeften zaten küçük olan resimler boyutlarını korur.",
      },
      {
        title: "Tek ZIP indirmesi",
        description: "Boyutlandırılan dosyalar, sonuna -resized eklenmiş orijinal adlarını korur ve tek bir arşivde birlikte indirilir.",
      },
    ],
    faqs: [
      {
        question: "Aynı anda kaç resmi boyutlandırabilirim?",
        answer:
          "Grup başına 50'ye kadar resim, her biri en fazla 50 MB. Çok büyük fotoğraflar çok bellek kullanır; bu yüzden telefonda daha küçük gruplarla çalışmak işe yarayabilir.",
      },
      {
        question: "Resimlerim gerilir mi?",
        answer:
          "Oranları her zaman koruyan Yüzde ve Kutuya sığdır modlarında gerilmez. Tam piksel modunda en boy oranının kilidini açıp iki kenarı da belirlerseniz, farklı şekildeki resimler gerilir.",
      },
      {
        question: "Hangi dosya formatları destekleniyor?",
        answer:
          "JPG, PNG ve WebP. iPhone HEIC dosyaları burada kabul edilmez; önce Evrensel Resim Dönüştürücü ile dönüştürün.",
      },
      {
        question: "JPG ve WebP dosyaları için hangi kalite kullanılır?",
        answer:
          "Boyutlandırılan JPG ve WebP dosyaları %90 kalitede kaydedilir. Saydam resimleri JPG'ye dönüştürdüğünüzde saydam alanlar beyaz olur.",
      },
      {
        question: "Dosyalarım bir yere yükleniyor mu?",
        answer: "Hayır. Tüm resimler bu tarayıcı sekmesinde boyutlandırılır ve ZIP dosyası cihazınızda oluşturulur.",
      },
    ],
  },
  "bulk-image-compressor": {
    name: "Toplu Resim Sıkıştırma",
    shortName: "Toplu Sıkıştır",
    tagline: "50'ye kadar resmi aynı anda WebP, AVIF, JPG veya PNG olarak sıkıştırın ve tek bir ZIP içinde indirin.",
    intro:
      "Toplu Resim Sıkıştırma, birçok resmin dosya boyutunu tek seferde küçültür. Tüm dosyalar için tek bir çıktı formatı ve kalite seçer, sıkıştırmayı başlatır ve her resim için orijinal boyutu, yeni boyutu ve kazanılan yüzdeyi görürsünüz. Bir klasör dolusu fotoğrafı web sitesi, online mağaza veya e-posta için hazırlamakta kullanışlıdır.",
    seoTitle: "Toplu Resim Sıkıştırma – Çok Sayıda Resmi Küçültün",
    seoDescription:
      "Toplu resim sıkıştırma, ücretsiz. 50'ye kadar JPG, PNG ve WebP dosyasını WebP, AVIF, JPG veya PNG'ye çevirin, dosya başına kazancı görün, tek ZIP alın.",
    keywords: [
      "toplu resim sıkıştırma",
      "birden fazla resmi sıkıştırma",
      "toplu fotoğraf küçültme",
      "online toplu resim sıkıştırma",
      "resimleri toplu webp'ye çevirme",
      "fotoğrafları sıkıştırıp zip indirme",
    ],
    howToSteps: [
      {
        title: "Resimlerinizi ekleyin",
        description: "50'ye kadar JPG, PNG veya WebP dosyasını (her biri en fazla 50 MB) bırakın ya da seçmek için tıklayın.",
      },
      {
        title: "Format ve kaliteyi seçin",
        description:
          "Varsayılan olarak %80 kalitede WebP seçilidir. En küçük dosyalar için AVIF'i, uyumluluk için JPG'yi, kayıpsız çıktı için PNG'yi seçin.",
      },
      {
        title: "Tüm dosyaları sıkıştırın",
        description: "Tümünü sıkıştır'a tıklayın ve her dosyanın yeni boyutunun ve kazanılan yüzdenin listede belirmesini izleyin.",
      },
      {
        title: "Sonuçları indirin",
        description: "Sıkıştırılan tüm dosyaları tek seferde kaydetmek için ZIP indir'e tıklayın veya listeden tek tek dosyaları indirin.",
      },
    ],
    features: [
      {
        title: "Her dosya için sonuçlar",
        description:
          "Her resim için önceki ve sonraki boyutu ve kazanılan yüzdeyi görün; büyüyen dosyalar açıkça etiketlenir.",
      },
      {
        title: "Dört çıktı formatı",
        description: "AVIF, WebP, JPG veya PNG; tüm grup için %10 ile %100 arasında tek bir kalite ayarı.",
      },
      {
        title: "Orijinal adlarla ZIP",
        description: "Her dosya, sonuna -compressed eklenmiş adını korur; aynı adlar otomatik olarak numaralandırılır.",
      },
      {
        title: "Cihazınızda çalışır",
        description: "Tüm dosyalar tarayıcınızda sıkıştırılır ve bilgisayarınızdan ya da telefonunuzdan asla çıkmaz.",
      },
    ],
    faqs: [
      {
        question: "Tek seferde kaç resim sıkıştırabilirim?",
        answer: "En fazla 50 resim ekleyebilirsiniz; her biri en fazla 50 MB olabilir.",
      },
      {
        question: "Hangi çıktı formatını seçmeliyim?",
        answer:
          "WebP; boyut, kalite ve destek arasında iyi bir dengedir. AVIF genellikle daha küçüktür ama daha yavaş kodlanır; bu, çok sayıda büyük fotoğrafta fark edilir. JPG her yerde açılır; PNG ise kayıpsızdır ama boyutu en az küçültür.",
      },
      {
        question: "Dosyalarımdan biri neden büyüdü?",
        answer:
          "Bazı resimler zaten iyi sıkıştırılmıştır ve onları yeniden kaydetmek işe yaramaz. Liste bu dosyaları işaretler, böylece onlar için orijinali saklayabilirsiniz.",
      },
      {
        question: "Toplu sıkıştırma resim boyutlarını değiştirir mi?",
        answer:
          "Hayır, genişlik ve yükseklik aynı kalır. Boyutları da küçültmek için dosyaları önce Toplu Resim Boyutlandırma aracından geçirin.",
      },
      {
        question: "JPG seçtiğimde saydam PNG'lere ne olur?",
        answer: "JPG saydamlık saklayamaz, bu yüzden saydam alanlar beyazla doldurulur.",
      },
    ],
  },
  "remove-image-metadata": {
    name: "Resim Meta Verisi Silme",
    shortName: "EXIF Temizleyici",
    tagline: "Paylaşmadan önce bir fotoğraftan GPS konumu, kamera modeli ve tarih gibi EXIF verilerini kaldırın.",
    intro:
      "Resim Meta Verisi Silme, fotoğrafınızın gizli EXIF bilgileri olmadan temiz bir kopyasını oluşturur. Telefon ve kamera fotoğrafları çoğu zaman çekildikleri yerin GPS konumunu, cihaz modelini ve tarih ile saati kaydeder. Bu araç resmi piksellerinden yeniden çizip yeni bir dosya kaydeder; böylece bu bilgiler aktarılmaz. İndirmeden önce yeni dosya boyutunu da gösterir.",
    seoTitle: "Fotoğraftan EXIF Silme – GPS ve Meta Veri",
    seoDescription:
      "Fotoğraftan EXIF ve meta veri silme, ücretsiz. Bir resmi paylaşmadan önce GPS konumunu, kamera modelini ve tarihi kaldırın. Tarayıcınızda işlenir, asla yüklenmez.",
    keywords: [
      "exif silme",
      "fotoğraftan meta veri silme",
      "fotoğraftan konum bilgisi silme",
      "exif temizleme",
      "resim meta verisi kaldırma",
      "fotoğraf gps bilgisi silme",
      "iphone fotoğrafından meta veri silme",
    ],
    howToSteps: [
      {
        title: "Fotoğrafı açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC fotoğrafını bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Temiz kopyayı kontrol edin",
        description: "Önizleme, kaydedilecek resmi yeni dosya boyutuyla birlikte gösterir.",
      },
      {
        title: "Format ve kaliteyi seçin",
        description:
          "Varsayılan olarak orijinal format korunur. JPG ve WebP için orijinale yakın kalmak üzere %90 ile %100 kalite kullanın veya kayıpsız çıktı için PNG'yi seçin.",
      },
      {
        title: "Yeni dosyayı indirip paylaşın",
        description: "İndir'e tıklayın ve orijinal fotoğraf yerine bu kopyayı paylaşın.",
      },
    ],
    features: [
      {
        title: "Konum ve kamera verilerini kaldırır",
        description:
          "GPS koordinatları, kamera markası ve modeli, lens, çekim tarihi ve diğer EXIF ile IPTC alanları yeni dosyaya yazılmaz.",
      },
      {
        title: "Piksellerden temiz kopya",
        description: "Resim piksellerinden yeniden çizilir, bu yüzden hiçbir gizli veri yanlışlıkla kopyalanamaz.",
      },
      {
        title: "Dosya boyutu göstergesi",
        description: "Temiz dosyanın boyutunu indirmeden önce görün.",
      },
      {
        title: "Cihazınızda yapılır",
        description: "Fotoğrafınız asla yüklenmez, bu yüzden işlem sırasında konum verileri kimseyle paylaşılmaz.",
      },
    ],
    faqs: [
      {
        question: "Hangi meta veriler kaldırılır?",
        answer:
          "Hepsi: EXIF verileri (kamera, ayarlar, tarih ve GPS), yazar veya telif hakkı gibi IPTC ve XMP alanları ve gömülü renk profili. Yalnızca görünen resim korunur.",
      },
      {
        question: "Meta verileri kaldırmak resim kalitesini değiştirir mi?",
        answer:
          "Resim yeniden kaydedilir. PNG her pikseli korur; JPG, WebP ve AVIF ise yeniden sıkıştırılır, bu yüzden yüksek bir kalite seçin. Birçok iPhone fotoğrafı gibi geniş renk profilli fotoğraflar, profil korunmadığı için biraz daha az canlı görünebilir.",
      },
      {
        question: "Konumun silindiğini nasıl kontrol edebilirim?",
        answer:
          "İndirilen dosyayı Resim Analiz Aracı'nda açın. Bu araç EXIF verilerini cihazınızda okur ve bir GPS konumu varsa uyarı gösterir.",
      },
      {
        question: "Uygulamalar ve web siteleri EXIF verilerini benim için kaldırır mı?",
        answer:
          "Bazı büyük platformlar yükleme sırasında meta verilerin bir kısmını kaldırır, ancak e-posta, mesajlaşma uygulamaları ve dosya paylaşımı çoğu zaman orijinal dosyayı değiştirmeden gönderir. Verileri kendiniz kaldırmak güvenli seçimdir.",
      },
      {
        question: "iPhone HEIC fotoğraflarından meta verileri kaldırabilir miyim?",
        answer:
          "Evet. HEIC fotoğrafı tarayıcınızda dönüştürülür ve temiz kopya varsayılan olarak JPG kaydedilir.",
      },
    ],
  },
  "image-analyzer": {
    name: "Resim Analiz Aracı",
    shortName: "Analiz",
    tagline: "Bir resmin boyutlarını, dosya boyutunu, en boy oranını, baskı boyutunu ve kamera EXIF verilerini görün; GPS konumu varsa uyarı alın.",
    intro:
      "Resim Analiz Aracı, bir resim dosyasının teknik ayrıntılarını dosyayı değiştirmeden gösterir. Dosya boyutunu, formatı, piksel boyutlarını, en boy oranını, megapikseli ve resimde saydamlık olup olmadığını bildirir. Fotoğraflar için kamera modeli, lens, pozlama, ISO, çekim tarihi ve GPS konumu gibi kamera EXIF verilerini de okur ve bir fotoğraf çekildiği yeri ortaya çıkarıyorsa sizi uyarır.",
    seoTitle: "EXIF Görüntüleme – Resim Boyutu ve Bilgileri",
    seoDescription:
      "Resim bilgilerini ücretsiz kontrol edin: boyutlar, dosya boyutu, en boy oranı, baskı boyutu ve kamera EXIF verileri. Fotoğrafta GPS konumu varsa uyarı gösterilir.",
    keywords: [
      "exif görüntüleme",
      "resim meta verisi görüntüleme",
      "resim boyutlarını öğrenme",
      "fotoğraf exif bilgisi",
      "fotoğrafta konum bilgisi var mı",
      "resim çözünürlüğü öğrenme",
      "online resim bilgisi",
    ],
    howToSteps: [
      {
        title: "Bir resim açın",
        description: "Tarayıcınızın açabildiği herhangi bir resmi, iPhone HEIC fotoğrafları dahil, bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Teknik özellikleri okuyun",
        description:
          "Dosya boyutunu, formatı, boyutları, en boy oranını, megapikseli, saydamlığı ve 300 DPI'daki baskı boyutunu görün.",
      },
      {
        title: "Kamera verilerini kontrol edin",
        description:
          "EXIF bölümü kamerayı, lensi, pozlamayı ve tarihi listeler. Fotoğrafta GPS konumu varsa, meta verileri kaldırmak için bir düğmeyle birlikte uyarı görünür.",
      },
      {
        title: "Raporu kopyalayın",
        description: "Tüm değerleri düz metin olarak kopyalamak için Raporu kopyala'ya tıklayın.",
      },
    ],
    features: [
      {
        title: "Teknik özellikler",
        description:
          "Dosya boyutu, format, MIME türü, boyutlar, en boy oranı, megapiksel, renk derinliği, saydamlık ve tahmini bellek kullanımı.",
      },
      {
        title: "Kamera EXIF okuyucu",
        description:
          "Varsa kamerayı, lensi, çekim tarihini, pozlama süresini, diyaframı, ISO'yu, odak uzaklığını, flaşı, yönü ve düzenleme yazılımını gösterir.",
      },
      {
        title: "GPS konumu uyarısı",
        description:
          "Fotoğraf koordinat içeriyorsa bunları gösterir ve tek tıkla meta verisiz bir kopya oluşturma imkânı sunar.",
      },
      {
        title: "Baskı boyutu tahmini",
        description: "Resmin 300 DPI'da ne kadar büyük basılacağını inç ve santimetre olarak gösterir.",
      },
      {
        title: "Salt okunur ve yerel",
        description: "Dosya değiştirilmez ve tüm veriler cihazınızda okunur.",
      },
    ],
    faqs: [
      {
        question: "Bir fotoğrafın EXIF verilerini nasıl görürüm?",
        answer:
          "Fotoğrafı burada açın ve Kamera ve EXIF verileri bölümüne bakın. EXIF verisi olmadığı yazıyorsa dosya bu veriler olmadan kaydedilmiştir; bu, ekran görüntülerinde ve sosyal medyadan indirilen resimlerde yaygındır.",
      },
      {
        question: "Bir fotoğrafın çekildiği yeri gösterip göstermediğini nasıl anlarım?",
        answer:
          "Fotoğraf GPS koordinatları içeriyorsa analiz aracı bunları gösterir ve bir uyarı görüntüler. Konum bilgisi olmayan bir kopya oluşturmak için Meta verileri kaldır'a tıklayın.",
      },
      {
        question: "Hangi dosyalar EXIF verisi içerir?",
        answer:
          "Telefon ve kameralardan çıkan JPG ve HEIC formatındaki fotoğraflar genellikle içerir. WebP ve AVIF dosyaları da içerebilir; ekran görüntüleri ve dışa aktarılmış ya da düzenlenmiş birçok resimde ise çok az veri vardır veya hiç yoktur.",
      },
      {
        question: "300 DPI'daki baskı boyutu ne anlama gelir?",
        answer:
          "Bu, fotoğraf baskıları için yaygın bir kalite olan inç başına 300 noktada bir baskının boyutudur. Örneğin 3000 × 2000 piksellik bir resim yaklaşık 10 × 6,7 inç boyutunda basılır.",
      },
      {
        question: "Renk derinliği değeri kesin mi?",
        answer:
          "Bu değer formata ve resimde saydamlık olup olmadığına göre belirlenir (24 bit RGB veya 32 bit RGBA). 16 bit veya HDR resimleri algılamaz.",
      },
    ],
  },
  "image-color-picker": {
    name: "Resimden Renk Seçici",
    shortName: "Renk Seçici",
    tagline: "Bir resmin herhangi bir noktasına tıklayarak tam rengini HEX, RGB, HSL, HSV ve CMYK olarak alın.",
    intro:
      "Resimden Renk Seçici, bir resimdeki herhangi bir pikselin tam rengini bulur. Altındaki piksellerin büyütülmüş görünümünü görmek için işaretçiyi resmin üzerinde gezdirin, ardından bir renk seçmek için tıklayın ve kodunu HEX, RGB, HSL, HSV veya CMYK olarak kopyalayın. Renkler küçültülmüş önizlemeden değil, tam çözünürlüklü resimden okunur.",
    seoTitle: "Resimden Renk Bulma – HEX ve RGB Kodu Alın",
    seoDescription:
      "Resimden renk bulma, ücretsiz ve online. Bir piksele tıklayıp HEX, RGB, HSL, HSV ve CMYK kodunu alın, hassasiyet için büyüteci kullanın, tek tıkla kopyalayın.",
    keywords: [
      "resimden renk bulma",
      "resimden renk kodu alma",
      "resimden hex kodu bulma",
      "online renk seçici",
      "damlalık aracı online",
      "fotoğraftaki rengi bulma",
      "resimden rgb renk kodu",
    ],
    howToSteps: [
      {
        title: "Bir resim açın",
        description: "Bir resmi bırakın, seçin ya da yapıştırın. Ctrl+V ile yapıştırılan bir ekran görüntüsü iyi çalışır.",
      },
      {
        title: "Büyüteçle hedefleyin",
        description: "Fareyi önizlemenin üzerinde gezdirin; yuvarlak bir büyüteç işaretçinin altındaki pikselleri büyütülmüş olarak gösterir.",
      },
      {
        title: "Rengi seçmek için tıklayın",
        description: "İstediğiniz noktaya tıklayın veya dokunun. Renk; HEX, RGB, HSL, HSV ve CMYK değerleriyle birlikte görünür.",
      },
      {
        title: "Kodu kopyalayın",
        description: "İhtiyacınız olan formatın yanındaki Kopyala'ya tıklayın. Son renkler hızlıca yeniden kullanmak için aşağıda saklanır.",
      },
    ],
    features: [
      {
        title: "Büyüteç",
        description: "Yakınlaştırılmış 7 × 7 piksellik görünüm, ince bir çizgi veya tek bir harf gibi küçük ayrıntıları tutturmanıza yardımcı olur.",
      },
      {
        title: "Beş renk formatı",
        description: "HEX, RGB, HSL, HSV veya CMYK değerlerini her biri için tek tıkla kopyalayın.",
      },
      {
        title: "Renk geçmişi",
        description: "Seçtiğiniz son 12 renk renk örneği olarak saklanır; birine tıklamak onu yeniden seçer.",
      },
      {
        title: "Tam çözünürlükte örnekleme",
        description: "Her renk orijinal resim piksellerinden okunur, bu yüzden değer önizleme boyutundan etkilenmez.",
      },
    ],
    faqs: [
      {
        question: "Resimdeki bir rengin HEX kodunu nasıl alırım?",
        answer:
          "Resmi açın, istediğiniz renge tıklayın ve HEX değerinin yanındaki Kopyala'ya basın. Kodu herhangi bir tasarım programına veya CSS dosyasına yapıştırabilirsiniz.",
      },
      {
        question: "Ekran görüntüsünden renk seçebilir miyim?",
        answer:
          "Evet. Bir ekran görüntüsü alın, yapıştırmak için bu sayfada Ctrl+V'ye basın ve ihtiyacınız olan renge tıklayın.",
      },
      {
        question: "Renk seçici telefonlarda çalışır mı?",
        answer:
          "Evet. Renk seçmek için resme dokunun. Büyüteç yalnızca fare işaretçisiyle görünür; çok küçük bir alanı tutturmanız gerekiyorsa sayfayı yakınlaştırın.",
      },
      {
        question: "Bir fotoğrafta yan yana pikseller neden biraz farklı renkte?",
        answer:
          "Fotoğraflar parazit, renk geçişleri ve sıkıştırma etkileri içerir, bu yüzden komşu pikseller nadiren tam olarak eşleşir. Birkaç nokta seçin ve doğru görüneni kullanın.",
      },
      {
        question: "CMYK değeri neden baskı yazılımımdakinden farklı?",
        answer:
          "Buradaki CMYK değerleri RGB'den yapılan basit bir matematiksel dönüşümdür. Baskı yazılımları belirli mürekkepler ve kâğıtlar için renk profilleri kullanır, bu yüzden sayıları farklı olabilir.",
      },
    ],
  },
  "image-palette-generator": {
    name: "Resimden Renk Paleti Oluşturucu",
    shortName: "Palet",
    tagline: "Bir resmin ana renklerini palet olarak çıkarın ve HEX kodları, CSS değişkenleri veya JSON olarak kopyalayın.",
    intro:
      "Resimden Renk Paleti Oluşturucu, bir fotoğraftaki veya tasarımdaki baskın renkleri bulur ve renk örnekleri olarak gösterir. 3, 4, 5, 6 veya 8 renk seçebilirsiniz; renkler en geniş alanı kaplayandan başlayarak sıralanır ve birbirine çok benzeyen tonlar birleştirilir, böylece her renk örneği farklıdır. Paleti CSS değişkenleri veya JSON dizisi olarak kopyalayın ya da PNG renk kartelası olarak indirin.",
    seoTitle: "Resimden Renk Paleti Çıkarma – HEX Kodları",
    seoDescription:
      "Resimden renk paleti çıkarma, ücretsiz. 3 ile 8 arası baskın rengi bulun, HEX kodlarını, CSS değişkenlerini veya JSON'u kopyalayın ve PNG renk kartelası indirin.",
    keywords: [
      "resimden renk paleti çıkarma",
      "resimdeki renkleri bulma",
      "renk paleti oluşturucu",
      "fotoğraftan renk paleti",
      "resmin baskın renkleri",
      "resimden hex kodları çıkarma",
    ],
    howToSteps: [
      {
        title: "Bir resim açın",
        description: "Bir fotoğrafı, çizimi, logoyu veya ekran görüntüsünü bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Renk sayısını seçin",
        description: "3, 4, 5, 6 veya 8'e tıklayın. Renk örnekleri hemen güncellenir.",
      },
      {
        title: "Tek tek renkleri kopyalayın",
        description: "HEX kodunu kopyalamak için bir renk örneğindeki kopyalama simgesine tıklayın.",
      },
      {
        title: "Paleti dışa aktarın",
        description: "CSS değişkenlerini kopyala veya JSON kopyala'yı kullanın ya da paleti PNG renk kartelası olarak indirin.",
      },
    ],
    features: [
      {
        title: "Kapladığı alana göre sıralı",
        description: "İlk renk örneği, resmin en büyük kısmını kaplayan renktir.",
      },
      {
        title: "Birbirinden farklı tonlar",
        description: "Neredeyse aynı olan renkler birleştirilir, böylece palet aynı tonu tekrarlamaz.",
      },
      {
        title: "Geliştiricilere hazır",
        description: "CSS özel özellikleri (--color-1, --color-2 vb.) veya HEX kodlarından oluşan bir JSON dizisi olarak dışa aktarın.",
      },
      {
        title: "PNG renk kartelası",
        description: "Her renk örneğinin altında HEX kodunun yazılı olduğu bir palet resmi indirin.",
      },
    ],
    faqs: [
      {
        question: "Palet renkleri nasıl seçiliyor?",
        answer:
          "Resim küçük bir boyutta örneklenir, benzer renkler gruplanır ve en fazla alanı kaplayan gruplar önce gösterilir. Saydam pikseller yok sayılır.",
      },
      {
        question: "Neden seçtiğimden daha az renk alıyorum?",
        answer:
          "Birbirine çok yakın tonlar birleştirilir, böylece her renk örneği açıkça farklı olur. Yalnızca birkaç farklı rengi olan bir resim daha az renk örneği verebilir.",
      },
      {
        question: "Paleti CSS'te nasıl kullanırım?",
        answer:
          "--color-1, --color-2 gibi adlara sahip değişkenler içeren bir :root bloğu almak için CSS değişkenlerini kopyala'ya tıklayın, ardından stil dosyanıza yapıştırın.",
      },
      {
        question: "Küçük bir vurgu rengi neden eksik?",
        answer:
          "Palet daha geniş alan kaplayan renklere öncelik verir, bu yüzden küçük bir logo gibi minik bir ayrıntı görünmeyebilir. Belirli bir noktanın tam değerini almak için Resimden Renk Seçici'yi kullanın.",
      },
    ],
  },
  "add-text-to-image": {
    name: "Resme Yazı Ekleme",
    shortName: "Yazı Ekle",
    tagline: "Bir fotoğrafa istediğiniz yazı tipi, boyut, renk, dış çizgi ve arka plan kutusuyla başlık veya alt yazı yazın.",
    intro:
      "Resme Yazı Ekleme, bir resmin üzerine bir veya daha fazla satır metin yerleştirir. Metni önizlemede istediğiniz yere sürükleyin veya üste, ortaya ya da alta yerleştirin; yedi yazı tipi, kalın veya italik, hizalama, opaklık, gölge, dış çizgi ve renkli bir arka plan kutusuyla biçimlendirin. Metin, indirdiğinizde tam çözünürlüklü resmin üzerine çizilir.",
    seoTitle: "Resme Yazı Ekleme – Ücretsiz ve Online",
    seoDescription:
      "Resme yazı ekleme, ücretsiz ve online. Yazıyı istediğiniz yere sürükleyin; yazı tipi, boyut, renk, dış çizgi, gölge ve arka plan kutusu seçip indirin.",
    keywords: [
      "resme yazı ekleme",
      "fotoğrafa yazı yazma",
      "resim üzerine yazı yazma",
      "online fotoğrafa yazı ekleme",
      "fotoğrafa alt yazı ekleme",
      "resme metin ekleme",
    ],
    howToSteps: [
      {
        title: "Resminizi açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Metninizi yazın",
        description: "Metni kutuya girin. Yeni satır için Enter'a basın.",
      },
      {
        title: "Biçimlendirin ve konumlandırın",
        description:
          "Yazı tipini, boyutu (12 ile 240 px arası), rengi, opaklığı ve hizalamayı seçin. Metni önizlemede sürükleyin veya Üst, Orta, Alt ya da Özel (dikey %) seçeneğini kullanın.",
      },
      {
        title: "İndirin",
        description: "Orijinal formatı koruyun veya JPG, PNG, WebP ya da AVIF seçin, ardından İndir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "Sürükleyerek yerleştirin",
        description: "Metni tam istediğiniz yere koymak için doğrudan önizlemede taşıyın.",
      },
      {
        title: "Yedi yazı tipi",
        description: "Kalın ve italik seçenekleriyle Inter, Arial, Helvetica, Georgia, Times New Roman, Courier New ve Impact.",
      },
      {
        title: "Her fotoğrafta okunaklı",
        description: "Gölge, 1 ile 20 px arasında dış çizgi veya kendi rengi ve opaklığı olan bir arka plan kutusu ekleyin.",
      },
      {
        title: "Çok satırlı metin",
        description: "Birkaç satır yazın ve sola, ortaya ya da sağa hizalayın.",
      },
    ],
    faqs: [
      {
        question: "Kalabalık bir fotoğrafta metni nasıl okunaklı yaparım?",
        answer:
          "Dış çizgi'yi açıp metinle kontrast oluşturan bir renk seçin veya arkasına düz ya da yarı saydam bir kutu koymak için Arka plan kutusu'nu etkinleştirin. Gölge de parlak alanlarda yardımcı olur.",
      },
      {
        question: "Birden fazla metin bloğu ekleyebilir miyim?",
        answer:
          "Araç, birkaç satırdan oluşabilen tek bir metin bloğu ekler. İkinci bir yere metin eklemek için sonucu indirin, yeniden açın ve sonraki metni ekleyin.",
      },
      {
        question: "Hangi yazı tiplerini kullanabilirim?",
        answer:
          "Yedi yazı tipi arasından seçim yapabilirsiniz. Çoğu sistem yazı tipidir; biri cihazınızda yüklü değilse tarayıcı onun yerine benzer bir yazı tipi kullanır.",
      },
      {
        question: "İndirilen resimde metin keskin görünür mü?",
        answer:
          "Evet. Metin, resminizin tam çözünürlüğünde çizilir. JPG olarak kaydederseniz harf kenarlarının temiz kalması için yüksek bir kalite ayarı kullanın.",
      },
    ],
  },
  "watermark-image": {
    name: "Resme Filigran Ekleme",
    shortName: "Filigran",
    tagline: "Fotoğraflarınızı tek bir noktaya yerleştirilen veya resim boyunca tekrarlanan bir metin ya da logo filigranıyla koruyun.",
    intro:
      "Resme Filigran Ekleme, bir fotoğrafın üzerine telif hakkı notu, web sitesi adı veya logo ekler. Bir metin veya logo filigranını dokuz konumdan birine yerleştirip boyutunu ve opaklığını ayarlayın ya da metni resmin tamamında tekrarlayın; bu, kırparak çıkarmayı çok daha zorlaştırır. Logolar PNG, WebP, JPG veya SVG dosyası olabilir; saydam arka planlı bir logo en iyi görünür.",
    seoTitle: "Resme Filigran Ekleme – Yazı veya Logo",
    seoDescription:
      "Fotoğrafa filigran ekleme, ücretsiz. Metin veya logonuzu kullanın, dokuz konumdan birini seçin, opaklığı ve açıyı ayarlayın ya da metni resim boyunca tekrarlayın.",
    keywords: [
      "resme filigran ekleme",
      "fotoğrafa filigran ekleme",
      "fotoğrafa logo ekleme",
      "ücretsiz online filigran",
      "telif hakkı filigranı",
      "tekrarlı filigran",
      "saydam filigran",
    ],
    howToSteps: [
      {
        title: "Fotoğrafınızı açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Metin veya logo seçin",
        description:
          "Metin'i seçip metninizi yazın veya Logo resmi'ni seçip bir PNG, WebP, JPG ya da SVG dosyası seçin.",
      },
      {
        title: "Yerleştirin ve biçimlendirin",
        description:
          "3 × 3 ızgarada bir konuma tıklayın, ardından opaklığı ve boyutu ayarlayın. Metin için rengi ve açıyı da ayarlayabilir veya “Resim boyunca tekrarla” seçeneğini açabilirsiniz.",
      },
      {
        title: "İndirin",
        description: "Orijinal formatı koruyun veya başka bir format seçin, ardından İndir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "Metin veya logo",
        description: "Bir telif hakkı satırı veya web sitesi adresi kullanın ya da kendi logo resminizi yükleyin.",
      },
      {
        title: "Dokuz konum",
        description: "Köşeler, kenarlar veya orta; kenar boşluğu resim boyutuna göre ayarlanır.",
      },
      {
        title: "Tekrarlı metin deseni",
        description: "Metninizi seçtiğiniz açıyla fotoğrafın tamamında tekrarlayın.",
      },
      {
        title: "Opaklık, boyut ve döndürme",
        description: "%10 ile %100 arası opaklık, 14 ile 140 px arası yazı boyutu, resmin %5 ile %60'ı arası logo genişliği ve -90° ile 90° arası metin döndürme.",
      },
    ],
    faqs: [
      {
        question: "Logomu filigran olarak nasıl eklerim?",
        answer:
          "Logo resmi'ni seçin, Logo resmi seçin'e tıklayıp dosyanızı seçin. Logo boyutunu resim genişliğinin yüzdesi olarak ayarlayın, bir konum seçin ve fotoğrafın görünür kalması için opaklığı düşürün.",
      },
      {
        question: "Filigranın opaklığı ne kadar olmalı?",
        answer:
          "%30 ile %50 civarı, fotoğrafı gizlemeden görünür olur. Filigranın kolay okunması gerekiyorsa daha yüksek bir değer kullanın.",
      },
      {
        question: "Tekrarlı filigran nedir?",
        answer:
          "“Resim boyunca tekrarla” seçeneği metninizi fotoğrafın tamamına birçok kez basar. Köşedeki tek bir işarete göre kırparak çıkarılması çok daha zordur. Metin filigranları için kullanılabilir.",
      },
      {
        question: "Logomun etrafında neden beyaz bir kutu var?",
        answer:
          "Logo dosyasının düz bir arka planı var. Saydam arka planlı bir PNG, WebP veya SVG kullanın ya da önce Arka Plan Kaldırma aracıyla arka planı kaldırın.",
      },
      {
        question: "Filigran, insanların fotoğrafımı kopyalamasını engeller mi?",
        answer:
          "Filigran kopyalamayı daha az cazip hâle getirir ve resmin kime ait olduğunu gösterir, ancak kopyalamayı tamamen engelleyemez. Büyük, ortada veya tekrarlı işaretlerin kaldırılması, köşedeki küçük bir işarete göre daha zordur.",
      },
    ],
  },
  "add-border-to-image": {
    name: "Resme Kenarlık Ekleme",
    shortName: "Kenarlık Ekle",
    tagline: "Bir fotoğrafın etrafına, resmin dışına veya kenarlarının üzerine düz renkli bir kenarlık ya da çerçeve ekleyin.",
    intro:
      "Resme Kenarlık Ekleme, bir resmin etrafına renkli bir çerçeve çizer. Dışta modunda tuval büyür, böylece fotoğrafın tamamı kenarlığın içinde görünür kalır; İçte modunda kenarlık kenarların üzerine çizilir ve resim orijinal boyutunu korur. Genişliği 1 ile 100 piksel arasında, herhangi bir rengi ve bir opaklık düzeyini ayarlayabilirsiniz.",
    seoTitle: "Resme Çerçeve Ekleme – Ücretsiz Kenarlık Aracı",
    seoDescription:
      "Resme çerçeve ekleme, ücretsiz ve online. Renk, 1 ile 100 px arası genişlik ve opaklık seçin; kenarlığı fotoğrafın dışına veya kenarlarına koyun. Yükleme yok.",
    keywords: [
      "resme çerçeve ekleme",
      "resme kenarlık ekleme",
      "fotoğrafa çerçeve ekleme",
      "online resim kenarlığı",
      "instagram için beyaz çerçeve",
      "fotoğraf kenarlığı",
    ],
    howToSteps: [
      {
        title: "Resminizi açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Kenarlık modunu seçin",
        description: "Dışta (boyutu büyütür) kenarlığı fotoğrafın etrafına ekler. İçte (boyutu korur) kenarlığı kenarların üzerine çizer.",
      },
      {
        title: "Genişliği, rengi ve opaklığı ayarlayın",
        description: "Genişlik kaydırıcısını 1 ile 100 px arasında sürükleyin, herhangi bir renk seçin ve daha yumuşak bir çerçeve için opaklığı düşürün.",
      },
      {
        title: "İndirin",
        description: "Orijinal formatı koruyun veya JPG, PNG, WebP ya da AVIF seçin, ardından İndir'e tıklayın.",
      },
    ],
    features: [
      {
        title: "Dışta veya içte",
        description: "Fotoğrafın etrafına boşluk ekleyin veya orijinal boyutları aynen koruyun.",
      },
      {
        title: "Her genişlik ve renk",
        description: "1 px'lik ince bir çizgiden 100 px'lik geniş bir çerçeveye kadar, istediğiniz renkte.",
      },
      {
        title: "Ayarlanabilir opaklık",
        description: "Daha hafif bir etki için kenarlığı yarı saydam yapın.",
      },
      {
        title: "Formatınızı korur",
        description: "Başka bir format seçmediğiniz sürece kenarlıklı resim orijinalle aynı formatta kaydedilir.",
      },
    ],
    faqs: [
      {
        question: "Kenarlık eklemek resim boyutunu değiştirir mi?",
        answer:
          "Dışta modunda kenarlık genişliği her kenara eklenir; 20 px kenarlıklı 1000 × 800 bir resim 1040 × 840 olur. İçte modu boyutu korur ve fotoğrafın dış kenarını kaplar.",
      },
      {
        question: "Instagram için beyaz çerçeveyi nasıl eklerim?",
        answer:
          "Önce fotoğrafı 1:1 oranında kırpın, ardından Dışta modunda beyaz bir kenarlık ekleyin. Her kenara aynı genişlik eklendiği için sonuç kare kalır.",
      },
      {
        question: "Yuvarlak köşeli bir kenarlık yapabilir miyim?",
        answer:
          "Kenarlığın kendisi dikdörtgendir. Yuvarlak bir görünüm için önce kenarlığı ekleyin, ardından sonucu Resim Köşelerini Yuvarlama aracında açın.",
      },
      {
        question: "Kenarlık opaklığı ne işe yarar?",
        answer:
          "Düşük opaklık kenarlığı saydam yapar. İçte modunda fotoğraf kenarlığın arkasından görünür; Dışta modunda kenarlık alanı PNG, WebP ve AVIF'te kısmen saydam olur, JPG'de ise beyazla karışır.",
      },
    ],
  },
  "round-image": {
    name: "Resim Köşelerini Yuvarlama",
    shortName: "Köşe Yuvarla",
    tagline: "Bir resmin köşelerini yuvarlayın veya daire şeklinde kesin; PNG'de arka plan saydam olur.",
    intro:
      "Resim Köşelerini Yuvarlama, bir resme yumuşak yuvarlak köşeler verir veya onu profil fotoğrafı ya da uygulama simgesi için bir daireye dönüştürür. Küçük, Orta veya Büyük hazır ayarını seçin, kaydırıcıyla tam bir yarıçap belirleyin veya Daire yap'a tıklayın. Sonuç varsayılan olarak PNG kaydedilir, böylece kesilen köşeler saydam kalır.",
    seoTitle: "Resim Köşelerini Yuvarlama – Yuvarlak Resim Yapma",
    seoDescription:
      "Resim köşelerini yuvarlama, ücretsiz; fotoğrafı daire şeklinde de kesebilirsiniz. Yarıçapı ayarlayın, PNG ile saydam arka plan alın veya JPG için renk seçin.",
    keywords: [
      "resim köşelerini yuvarlama",
      "yuvarlak köşeli resim",
      "resmi yuvarlak yapma",
      "yuvarlak profil fotoğrafı yapma",
      "daire profil resmi",
      "yuvarlak köşeli png",
    ],
    howToSteps: [
      {
        title: "Resminizi açın",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Şekli seçin",
        description: "Daire yap'a tıklayın, Küçük, Orta veya Büyük köşeleri seçin ya da yarıçap kaydırıcısını sürükleyin.",
      },
      {
        title: "Formatı seçin",
        description:
          "Varsayılan olarak PNG seçilidir. JPG seçerseniz köşeler için beyaz, siyah veya özel bir renk seçin.",
      },
      {
        title: "İndirin",
        description: "Yuvarlatılmış resmi kaydetmek için İndir'e tıklayın veya panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Hazır ayarlar ve tam yarıçap",
        description: "Küçük, Orta ve Büyük hazır ayarları veya 0'dan kısa kenarın yarısına kadar herhangi bir yarıçap.",
      },
      {
        title: "Daire avatar",
        description: "Resmi tek tıkla profil fotoğraflarına hazır bir daireye dönüştürür.",
      },
      {
        title: "Saydam köşeler",
        description: "PNG, WebP ve AVIF, eğrinin dışındaki alanı saydam tutar.",
      },
      {
        title: "JPG için dolgu rengi",
        description: "JPG olarak kaydettiğinizde köşeler beyaz, siyah veya seçtiğiniz bir renkle doldurulur.",
      },
    ],
    faqs: [
      {
        question: "Yuvarlak profil fotoğrafını nasıl yaparım?",
        answer:
          "Daire yap'a tıklayın. Daire resmin kısa kenarını kullanır ve ortalanır; bu yüzden kare olmayan bir fotoğrafta yüzü ortalamak ve yanlarda boşluk kalmaması için önce 1:1 oranında kırpın.",
      },
      {
        question: "Köşelerim neden saydam değil de beyaz veya siyah?",
        answer: "JPG saydamlık saklayamaz. Köşelerin saydam kalması için PNG, WebP veya AVIF seçin.",
      },
      {
        question: "Küçük, Orta ve Büyük hazır ayarları ne anlama gelir?",
        answer:
          "Olabilecek en büyük yarıçap, resmin kısa kenarının yarısıdır. Küçük, Orta ve Büyük bu en büyük değerin sırasıyla %10'unu, %25'ini ve %50'sini kullanır.",
      },
      {
        question: "Yuvarlatılmış resim dosyam neden bu kadar büyük?",
        answer:
          "PNG kayıpsızdır, bu yüzden tam boyutlu bir kamera fotoğrafı büyük bir dosya oluşturabilir. Önce fotoğrafı boyutlandırın veya saydamlığı da koruyan ve çok daha küçük olan WebP olarak kaydedin.",
      },
    ],
  },
  "favicon-generator": {
    name: "Favicon Oluşturucu",
    shortName: "Favicon",
    tagline: "Tek bir resimden favicon.ico, Apple touch simgesi, Android simgeleri ve web manifest dosyasını tek bir ZIP içinde oluşturun.",
    intro:
      "Favicon Oluşturucu, bir logoyu veya resmi web sitesinin ihtiyaç duyduğu simge dosyaları setine dönüştürür. Resmi ortalanmış bir kareye kırpar ve favicon.ico (16, 32 ve 48 piksel boyutlarıyla), 16 ile 512 piksel arası PNG simgeleri, 180 × 180 boyutunda apple-touch-icon.png ve bir site.webmanifest dosyası oluşturur; hepsi tek bir ZIP içindedir. Sayfa ayrıca sitenizin head bölümüne yapıştıracağınız HTML link etiketlerini de gösterir.",
    seoTitle: "Favicon Oluşturma – ICO, PNG ve Apple Touch Simgesi",
    seoDescription:
      "Ücretsiz favicon oluşturma. PNG, JPG veya SVG logo yükleyin; favicon.ico, 16 ile 512 px arası PNG simgeleri, Apple touch simgesi ve manifest'i tek ZIP'te alın.",
    keywords: [
      "favicon oluşturma",
      "favicon oluşturucu",
      "favicon ico yapma",
      "png'den ico'ya dönüştürme",
      "apple touch icon oluşturma",
      "resimden favicon yapma",
      "web sitesi simgesi oluşturma",
    ],
    howToSteps: [
      {
        title: "Logonuzu yükleyin",
        description:
          "Bir PNG, JPG, SVG veya HEIC resmi bırakın ya da seçin. En az 512 × 512 piksellik kare bir resim en iyi sonucu verir.",
      },
      {
        title: "Ortalandığından emin olun",
        description:
          "Simgeler resmin ortasından kesilir. Logonuz ortada değilse veya resim kare değilse, önce Resim Kırpma ile 1:1 oranında kırpın.",
      },
      {
        title: "Favicon paketini indirin",
        description: "Tüm simge dosyalarını ve manifest'i almak için Favicon paketini indir (ZIP) düğmesine tıklayın.",
      },
      {
        title: "Web sitenize ekleyin",
        description:
          "Dosyaları sitenizin kök klasörüne yükleyin, ardından Kodu kopyala'ya tıklayıp HTML etiketlerini sayfalarınızın head bölümüne yapıştırın.",
      },
    ],
    features: [
      {
        title: "Çok boyutlu favicon.ico",
        description: "Tarayıcı sekmeleri ve yer imleri için 16 × 16, 32 × 32 ve 48 × 48 simgeleri içeren tek bir ICO dosyası.",
      },
      {
        title: "Her cihaz için PNG simgeleri",
        description: "16, 32, 48, 64, 128, 192 ve 512 piksellik PNG dosyaları ile 180 × 180 boyutunda apple-touch-icon.png.",
      },
      {
        title: "Web uygulaması manifest'i",
        description: "Android ve yüklenebilir web uygulamaları için 192 ve 512 piksellik simgelere işaret eden bir site.webmanifest dosyası.",
      },
      {
        title: "Net küçük boyutlar",
        description: "Simgeler tam resimden birkaç adımda küçültülür; bu, 16 ve 32 piksellik sürümleri daha temiz tutar.",
      },
      {
        title: "Yapıştırmaya hazır HTML",
        description: "Simgeler ve manifest için link etiketlerini tek tıkla kopyalayın.",
      },
    ],
    faqs: [
      {
        question: "Favicon resmim hangi boyutta olmalı?",
        answer:
          "En büyük simgenin keskin kalması için en az 512 × 512 piksellik kare bir resim kullanın. Basit şekiller ve canlı renkler 16 × 16 boyutunda da tanınabilir kalır.",
      },
      {
        question: "ZIP içinde hangi dosyalar var?",
        answer:
          "favicon.ico, favicon-16x16.png ile favicon-512x512.png arası dosyalar (16, 32, 48, 64, 128, 192 ve 512), 180 × 180 boyutunda apple-touch-icon.png ve site.webmanifest.",
      },
      {
        question: "Favicon dosyalarını nereye koymalıyım?",
        answer:
          "Bunları web sitenizin kök klasörüne, ana sayfanızla aynı yere yükleyin. Ardından bu sayfada gösterilen HTML etiketlerini her sayfanın head bölümüne yapıştırın.",
      },
      {
        question: "Logomun bir kısmı neden kesiliyor?",
        answer:
          "Araç, resminizden ortalanmış en büyük kareyi alır. Logo genişse veya ortada değilse, simgeleri oluşturmadan önce etrafında biraz boşluk kalacak şekilde kare olarak kırpın.",
      },
      {
        question: "SVG logo kullanabilir miyim?",
        answer:
          "Evet. SVG bir resim olarak çizilir ve PNG ile ICO dosyaları olarak kaydedilir. ZIP bir SVG favicon içermez.",
      },
      {
        question: "Manifest dosyasını düzenlemem gerekir mi?",
        answer:
          "Evet. site.webmanifest, yer tutucu ad olarak App'i ve koyu tema renklerini kullanır. Dosyayı bir metin düzenleyicide açın ve name, short_name ile renkleri sitenize uyacak şekilde değiştirin.",
      },
    ],
  },
  "image-to-base64": {
    name: "Resmi Base64'e Dönüştürme",
    shortName: "Resim → Base64",
    tagline: "Bir resim dosyasını, hazır HTML ve CSS kodlarıyla birlikte kopyalayabileceğiniz bir Base64 dizesine dönüştürün.",
    intro:
      "Resmi Base64'e Dönüştürme aracı, bir resim dosyasını Base64 metni olarak kodlar; böylece örneğin JSON, bir HTML sayfası veya bir CSS dosyası içinde düz metin olarak saklanabilir ya da gönderilebilir. Dize dosyanın orijinal baytlarından oluşturulur, bu yüzden resim yeniden sıkıştırılmaz veya değiştirilmez. Araç karakter sayısını gösterir ve resmin tamamını içeren bir HTML img etiketi ile bir CSS background-image kuralı da verir.",
    seoTitle: "Resmi Base64'e Dönüştürme – Base64 Kodunu Kopyalayın",
    seoDescription:
      "Resmi Base64'e dönüştürme, ücretsiz. Orijinal JPG, PNG, WebP, GIF veya SVG baytlarını kodlayın; dizeyi, HTML img etiketini veya CSS kuralını tek tıkla kopyalayın.",
    keywords: [
      "resmi base64'e dönüştürme",
      "resim base64 çevirme",
      "base64 resim kodlama",
      "png base64 dönüştürme",
      "jpg base64 dönüştürme",
      "svg base64 dönüştürme",
      "base64 resim kodu",
    ],
    howToSteps: [
      {
        title: "Bir resim açın",
        description: "Herhangi bir resim dosyasını bırakın, seçin ya da yapıştırın. Simgeler gibi küçük resimler en iyi sonucu verir.",
      },
      {
        title: "Base64 dizesini alın",
        description: "Dize, karakter cinsinden uzunluğu ve yaklaşık boyutuyla birlikte hemen görünür.",
      },
      {
        title: "İhtiyacınız olanı kopyalayın",
        description: "Yalın dize için Base64 kopyala'ya tıklayın veya hazır bir kod için HTML kopyala ya da CSS kopyala'yı kullanın.",
      },
      {
        title: "Kodunuza yapıştırın",
        description: "Dizeyi JSON, HTML, CSS veya betik dosyanıza yapıştırın.",
      },
    ],
    features: [
      {
        title: "Bayt bayt birebir kodlama",
        description: "Orijinal dosya olduğu gibi kodlanır; yeniden sıkıştırma veya kalite değişikliği olmaz.",
      },
      {
        title: "Boyut bilgisi",
        description: "Dizeyi kullanmadan önce karakter sayısını ve yaklaşık boyutunu görün.",
      },
      {
        title: "HTML ve CSS kodları",
        description: "Tam data URI'nin dahil olduğu bir img etiketini veya background-image kuralını kopyalayın.",
      },
      {
        title: "Yerel olarak kodlanır",
        description: "Dosya tarayıcınızda okunur ve kodlanır, asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Base64 resimlerde ne için kullanılır?",
        answer:
          "Base64, ikili resim verilerini düz metin karakterlerine dönüştürür. Geliştiriciler bunu küçük resimleri doğrudan HTML, CSS, JSON veya e-posta şablonlarına yerleştirmek için kullanır; böylece ayrı bir resim dosyasının yüklenmesi gerekmez.",
      },
      {
        question: "Base64 dizesi neden resim dosyasından büyük?",
        answer:
          "Base64 her 3 bayt için 4 metin karakteri kullanır, bu yüzden sonuç yaklaşık %33 daha büyüktür. 30 KB'lık bir resim kabaca 40 KB'lık metne dönüşür.",
      },
      {
        question: "Base64 ile data URI arasındaki fark nedir?",
        answer:
          "Base64 yalnızca kodlanmış metindir. Data URI ise tarayıcıların dosya türünü bilmesi için data:image/png;base64, gibi bir ön ek ekler. Bu araç yalın dizeyi verir; Resmi Data URI'ye Dönüştürme aracı tam sürümü verir.",
      },
      {
        question: "Büyük resimleri Base64'e dönüştürmeli miyim?",
        answer:
          "Genellikle hayır. Base64 en iyi simgeler gibi küçük resimlerde işe yarar. Büyük fotoğraflar HTML veya CSS dosyanızı çok ağırlaştırır ve tarayıcı resmi ayrı bir dosya olarak önbelleğe alamaz.",
      },
      {
        question: "Kodlama sırasında resmim değişir mi?",
        answer:
          "Hayır, orijinal baytlar kodlanır. Tek istisna iPhone HEIC fotoğraflarıdır; çoğu tarayıcı HEIC gösteremediği için bunlar önce PNG'ye dönüştürülür.",
      },
    ],
  },
  "image-to-data-uri": {
    name: "Resmi Data URI'ye Dönüştürme",
    shortName: "Data URI",
    tagline: "Bir resmi, HTML src özniteliğine veya CSS url() değerine yapıştırmaya hazır eksiksiz bir data URI'ye dönüştürün.",
    intro:
      "Resmi Data URI'ye Dönüştürme aracı, bir resim dosyasını data URI'ye çevirir: hem dosya türünü hem de Base64 ile kodlanmış resmi içeren tek satırlık bir metin. Bunu doğrudan bir img src özniteliğine veya CSS url() değerine yapıştırabilirsiniz; resim ayrı bir dosya olmadan görüntülenir. Ön ekteki MIME türü dosyanızdan alınır ve resim baytları değiştirilmez.",
    seoTitle: "Resmi Data URI'ye Dönüştürme – HTML ve CSS İçin",
    seoDescription:
      "Resmi data URI'ye dönüştürme, ücretsiz. Doğru MIME türüyle bir data:image Base64 dizesi alın, HTML img etiketi veya CSS arka plan kuralı olarak kopyalayın.",
    keywords: [
      "resmi data uri'ye dönüştürme",
      "data uri oluşturucu",
      "resmi data url'ye çevirme",
      "base64 data uri",
      "css içine resim gömme",
      "html'ye resim gömme",
      "data url resim",
    ],
    howToSteps: [
      {
        title: "Bir resim açın",
        description: "Simge, logo veya küçük bir grafik gibi herhangi bir resim dosyasını bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Data URI'yi alın",
        description: "data:image/ ile başlayan eksiksiz data URI, uzunluğu ve yaklaşık boyutuyla birlikte görünür.",
      },
      {
        title: "Kopyalayın",
        description: "Data URI kopyala'ya tıklayın veya hazır bir kod için HTML kopyala ya da CSS kopyala'yı kullanın.",
      },
      {
        title: "Sayfanıza yapıştırın",
        description: "Normal bir resim URL'sinin çalıştığı her yerde kullanın; örneğin bir img etiketinde veya CSS arka planında.",
      },
    ],
    features: [
      {
        title: "Doğru MIME türü",
        description: "Ön ek dosyanıza uyar; örneğin image/png, image/jpeg veya image/svg+xml.",
      },
      {
        title: "Orijinal baytlar",
        description: "Dosya olduğu gibi kodlanır, bu yüzden kalite ve boyut yeniden sıkıştırmayla değişmez.",
      },
      {
        title: "Kopyalamaya hazır kodlar",
        description: "İçinde data URI bulunan eksiksiz bir img etiketi veya background-image kuralı alın.",
      },
      {
        title: "Gizli",
        description: "Data URI tarayıcınızda oluşturulur, bu yüzden resim yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Data URI nedir?",
        answer:
          "Data URI, bir dosyaya işaret etmek yerine dosyanın kendisini içeren bir bağlantıdır. Resimler için data:image/png;base64, veya benzer bir ön ekle başlar ve tarayıcılar onu normal bir resim URL'si gibi gösterir.",
      },
      {
        question: "CSS'te data URI'yi nasıl kullanırım?",
        answer:
          "Tam URI'nin url() içinde yer aldığı bir background-image kuralı almak için CSS kopyala'ya tıklayın ve stil dosyanıza yapıştırın.",
      },
      {
        question: "Data URI'lerden ne zaman kaçınmalıyım?",
        answer:
          "Büyük resimlerde ve birçok sayfada kullanılan resimlerde kaçının. Kodlanmış metin dosyadan yaklaşık üçte bir daha büyüktür ve tarayıcı onu ayrı olarak önbelleğe alamaz.",
      },
      {
        question: "Data URI resimleri e-postalarda çalışır mı?",
        answer:
          "Destek değişir. Bazı web posta hizmetleri dahil birçok e-posta programı data URI resimlerini göstermez; bu yüzden e-postanızı test edin veya internette barındırılan bir resim kullanın.",
      },
      {
        question: "Hangi resim türleri destekleniyor?",
        answer:
          "Tarayıcınızın açabildiği her resim; örneğin JPG, PNG, GIF, WebP, AVIF ve SVG. iPhone HEIC fotoğrafları önce PNG'ye dönüştürülür, bu yüzden data URI'leri image/png kullanır.",
      },
    ],
  },
  "base64-to-image": {
    name: "Base64'ten Resme",
    shortName: "Base64 → Resim",
    tagline: "Resmi önizlemek ve PNG, JPG veya WebP olarak indirmek için bir Base64 dizesi ya da data URI yapıştırın.",
    intro:
      "Base64'ten Resme aracı, Base64 metnini görüp kaydedebileceğiniz bir resme geri çözer. Yalın bir Base64 dizesi, eksiksiz bir data URI veya bunlardan birini içeren bir CSS url() ya da HTML src kodu yapıştırabilirsiniz; URL güvenli Base64 ve satır sonları otomatik olarak işlenir. Araç verinin PNG, JPEG, GIF, WebP, SVG, BMP veya AVIF olup olmadığını algılar ve çözülen resmi boyutlarıyla birlikte gösterir.",
    seoTitle: "Base64'ten Resme Dönüştürme – Önizleyin ve İndirin",
    seoDescription:
      "Base64'ü resme dönüştürme, ücretsiz ve online. Bir Base64 dizesi, data URI veya CSS ya da HTML kodu yapıştırın, resmi önizleyin ve PNG, JPG veya WebP olarak indirin.",
    keywords: [
      "base64'ten resme dönüştürme",
      "base64 resim çözme",
      "base64 png dönüştürme",
      "base64 jpg dönüştürme",
      "data uri'den resme",
      "base64 kodunu resme çevirme",
      "base64 resim görüntüleyici",
    ],
    howToSteps: [
      {
        title: "Base64 verisini yapıştırın",
        description: "Metin kutusuna yapıştırın, Yapıştır'a tıklayın veya dizeyi içeren bir .txt dosyası yükleyin.",
      },
      {
        title: "Önizlemeyi kontrol edin",
        description: "Resim otomatik olarak çözülür ve genişliği ile yüksekliğiyle birlikte gösterilir. Metin geçerli değilse bir hata mesajı görünür.",
      },
      {
        title: "Bir dışa aktarma formatı seçin",
        description: "PNG, JPG veya WebP seçin.",
      },
      {
        title: "Resmi indirin",
        description: "Resmi cihazınıza kaydetmek için İndir düğmesine tıklayın.",
      },
    ],
    features: [
      {
        title: "Birçok giriş biçimini kabul eder",
        description:
          "Yalın Base64, data URI'ler, CSS url() ve HTML src kodları, URL güvenli Base64 ve birkaç satıra bölünmüş metin.",
      },
      {
        title: "Otomatik format algılama",
        description: "Ön ek eksik veya yanlış olsa bile PNG, JPEG, GIF, WebP, SVG, BMP ve AVIF'i verinin kendisinden tanır.",
      },
      {
        title: "Anında önizleme",
        description: "Yapıştırır yapıştırmaz çözülen resmi ve boyutlarını görün.",
      },
      {
        title: "Üç dışa aktarma formatı",
        description: "Sonucu PNG, JPG veya WebP olarak kaydedin.",
      },
    ],
    faqs: [
      {
        question: "Ne tür Base64 metni yapıştırabilirim?",
        answer:
          "Yalın bir Base64 dizesi, data:image/png;base64,... gibi bir data URI veya bunlardan birini içeren bir CSS ya da HTML kodu. Boşluklar, satır sonları ve URL güvenli karakterler otomatik olarak temizlenir.",
      },
      {
        question: "Neden hata alıyorum?",
        answer:
          "Metin kopyalanırken çoğu zaman kesilir. Sonunda = işaretleri olabilecek kısım dahil, dizenin tamamını kopyaladığınızdan emin olun.",
      },
      {
        question: "İndirilen dosya orijinalle aynı mı?",
        answer:
          "Resim çözülür ve seçtiğiniz formatta yeniden kaydedilir. PNG her pikseli korur; JPG ve WebP ise yeniden sıkıştırılır. Hareketli GIF'ler tek bir hareketsiz resme dönüşür ve SVG grafikleri piksel tabanlı resim olarak kaydedilir.",
      },
      {
        question: "Araç resim türünü nasıl anlıyor?",
        answer:
          "Her format bilinen bir imzayla başlar; örneğin PNG için iVBORw0KGgo, JPEG için /9j/. Araç, resmi doğru çözmek için bu ilk karakterleri okur.",
      },
      {
        question: "Base64 verim bir sunucuya gönderiliyor mu?",
        answer: "Hayır. Metin tarayıcınızda çözülür ve resim cihazınızda oluşturulur.",
      },
    ],
  },
  "svg-to-png": {
    name: "SVG'den PNG'ye",
    shortName: "SVG → PNG",
    tagline: "SVG vektör dosyalarını saydamlığı koruyarak 1x, 2x, 4x veya 8x boyutunda keskin PNG resimlerine dönüştürün.",
    intro:
      "SVG'den PNG'ye aracı, logo veya simge gibi bir vektör grafiği, SVG dosyası kabul etmeyen yerler için PNG resmine dönüştürür. SVG'nin kendi boyutunun 1x, 2x, 4x veya 8x katını seçin; vektör bu boyutta yeniden çizildiği için daha büyük ölçek bulanık değil, daha keskin bir resim verir. Saydam arka planlar PNG'de de saydam kalır.",
    seoTitle: "SVG'yi PNG'ye Dönüştürme – Yüksek Çözünürlük",
    seoDescription:
      "SVG'yi PNG'ye dönüştürme, ücretsiz. Saydam arka planlı, keskin ve yüksek çözünürlüklü resimler için 1x, 2x, 4x veya 8x dışa aktarın. Tarayıcınızda dönüştürülür.",
    keywords: [
      "svg'yi png'ye dönüştürme",
      "svg png çevirme",
      "yüksek çözünürlüklü svg png",
      "saydam svg png",
      "svg'yi png olarak kaydetme",
      "svg dönüştürücü",
    ],
    howToSteps: [
      {
        title: "Bir SVG dosyası açın",
        description: "Bir .svg dosyasını yükleme kutusuna bırakın veya seçmek için tıklayın.",
      },
      {
        title: "Ölçeği seçin",
        description: "1x, 2x, 4x veya 8x seçin. Piksel cinsinden çıktı genişliği ve yüksekliği düğmelerin altında gösterilir.",
      },
      {
        title: "PNG'yi indirin",
        description: "Resmi kaydetmek için PNG indir'e tıklayın veya panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Her ölçekte keskin",
        description: "Vektör seçilen boyutta yeniden çizilir, bu yüzden çizgiler ve yazılar net kalır.",
      },
      {
        title: "Saydam arka plan",
        description: "SVG'de dolgusu olmayan alanlar PNG'de saydam kalır.",
      },
      {
        title: "Çıktı boyutu önizlemesi",
        description: "İndirmeden önce her ölçek için tam piksel boyutlarını görün.",
      },
      {
        title: "Kayıpsız PNG",
        description: "Çizilen resim, sıkıştırma kaybı olmadan PNG olarak kaydedilir.",
      },
    ],
    faqs: [
      {
        question: "SVG'den yüksek çözünürlüklü PNG nasıl alırım?",
        answer:
          "4x veya 8x seçin. 256 × 256 bir SVG, 4x'te 1024 × 1024, 8x'te 2048 × 2048 olur ve o boyutta yeniden çizildiği için keskin kalır.",
      },
      {
        question: "Çıktı boyutu neden beklediğim gibi değil?",
        answer:
          "1x boyutu, SVG dosyasında belirtilen genişlik ve yükseklikten gelir. SVG'de yalnızca viewBox varsa ve genişlik ya da yükseklik yoksa, tarayıcı varsayılan bir boyut kullanabilir; boyutu kontrol etmek için width ve height öznitelikleri ekleyin.",
      },
      {
        question: "PNG'mde yazı tipleri veya resimler neden eksik?",
        answer:
          "Bir SVG resim olarak çizildiğinde tarayıcılar, web yazı tipleri veya bağlantılı resimler gibi onun bağlantı verdiği harici dosyaları yüklemez. Dönüştürmeden önce yazıları dış hatlara çevirin ve resimleri SVG'ye gömün.",
      },
      {
        question: "PNG saydam arka planı korur mu?",
        answer: "Evet. SVG'nin dolgusu veya arka planı olmayan her alanı saydam kalır.",
      },
      {
        question: "SVG'yi JPG'ye dönüştürebilir miyim?",
        answer:
          "Bu araç yalnızca PNG kaydeder. JPG almak için önce PNG'ye dönüştürün, ardından PNG'yi arka plan rengi de seçebileceğiniz PNG'den JPG'ye aracında açın.",
      },
    ],
  },
  "photo-filters": {
    name: "Fotoğraf Filtreleri ve Efektleri",
    shortName: "Filtreler",
    tagline: "Vintage, Noir veya Sinematik gibi hazır görünümler uygulayın, ardından parlaklığı, kontrastı, rengi ve vinyeti ayarlayın.",
    intro:
      "Fotoğraf Filtreleri ve Efektleri, bir fotoğrafın görünümünü ve havasını değiştirir. Sinematik, Vintage 70'ler, Karanlık Noir veya Sıcak Gün Batımı gibi sekiz hazır filtreden biriyle başlayın; ardından parlaklığı, kontrastı, doygunluğu, sepyayı, siyah beyazı, tonu, netliği, vinyeti ve yumuşak bulanıklığı kaydırıcılarla ayarlayın. Bölünmüş görünüm, düzenlenen fotoğrafı PNG, JPG veya WebP olarak indirmeden önce orijinalle karşılaştırmanızı sağlar.",
    seoTitle: "Fotoğraf Filtreleri – Ücretsiz Efektler ve Hazır Ayarlar",
    seoDescription:
      "Fotoğrafa filtre ekleme, ücretsiz. Vintage, Noir, Sinematik ve fazlasını deneyin; parlaklık, kontrast, doygunluk ve vinyeti ayarlayın, önce ve sonrayı karşılaştırın.",
    keywords: [
      "fotoğrafa filtre ekleme",
      "online fotoğraf filtreleri",
      "fotoğrafı siyah beyaz yapma",
      "vintage fotoğraf efekti",
      "sepya efekti",
      "online parlaklık ve kontrast ayarlama",
      "vinyet efekti",
    ],
    howToSteps: [
      {
        title: "Bir fotoğraf yükleyin",
        description: "Bir JPG, PNG veya WebP resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Hazır bir filtre seçin",
        description:
          "Sinematik, Vintage 70'ler, Cyberpunk, Karanlık Noir, Sıcak Gün Batımı, Soğuk Solgun, Dramatik HDR veya Negatif'i deneyin. Orijinal tüm efektleri kaldırır.",
      },
      {
        title: "Kaydırıcılarla ince ayar yapın",
        description:
          "Fotoğraf doğru görünene kadar parlaklığı, kontrastı, doygunluğu, sepyayı, siyah beyazı, ton kaydırmayı, netliği, vinyeti ve yumuşak odağı ayarlayın.",
      },
      {
        title: "Karşılaştırın ve indirin",
        description: "Önceki ve sonraki hâli kontrol etmek için Orijinalle karşılaştır'ı kullanın, ardından PNG, WebP veya JPG olarak indirin ya da resmi kopyalayın.",
      },
    ],
    features: [
      {
        title: "Tek tıkla sekiz hazır filtre",
        description: "Sıcak vintage tonlardan yüksek kontrastlı siyah beyaza kadar hazır görünümler.",
      },
      {
        title: "Dokuz ayar kaydırıcısı",
        description: "%200'e kadar parlaklık, kontrast ve doygunluk; ayrıca sepya, siyah beyaz, ton, netlik, vinyet ve bulanıklık.",
      },
      {
        title: "Önce ve sonra görünümü",
        description: "Masaüstünde veya dokunmatik ekranlarda, orijinal ile düzenlenen sürümü karşılaştırmak için ayırma çizgisini fotoğrafın üzerinde sürükleyin.",
      },
      {
        title: "Tam çözünürlükte dışa aktarma",
        description: "Efektler, indirdiğinizde tam boyutlu fotoğrafa uygulanır.",
      },
    ],
    faqs: [
      {
        question: "Bir fotoğrafı nasıl siyah beyaz yaparım?",
        answer:
          "Yüksek kontrastlı bir görünüm için Karanlık Noir filtresine tıklayın veya Siyah beyaz kaydırıcısını %100'e getirip parlaklığı ve kontrastı kendiniz ayarlayın.",
      },
      {
        question: "Bir filtreyi geri alabilir miyim?",
        answer:
          "Evet. İstediğiniz zaman orijinal görünüme dönmek için Sıfırla'ya tıklayın. Orijinal dosyanız asla değiştirilmez.",
      },
      {
        question: "Filtre uygulamak çözünürlüğü düşürür mü?",
        answer:
          "Hayır. İndirilen dosya, orijinal fotoğrafınızla aynı genişlik ve yüksekliğe sahiptir.",
      },
      {
        question: "Hangi indirme formatını seçmeliyim?",
        answer:
          "JPG ve WebP %95 kalitede kaydedilir ve fotoğraflar için çok daha küçüktür. PNG her pikseli korur ama fotoğraflarda büyük dosyalar oluşturur.",
      },
      {
        question: "iPhone HEIC fotoğraflarında filtre kullanabilir miyim?",
        answer:
          "Bu araç HEIC dosyalarını açmaz. Önce fotoğrafı Evrensel Resim Dönüştürücü ile JPG'ye dönüştürün, ardından JPG'yi burada açın.",
      },
    ],
  },
  "meme-generator": {
    name: "Meme Oluşturucu",
    shortName: "Meme Yap",
    tagline: "Kendi fotoğrafınızdan veya hazır bir şablondan, üstte, ortada ve altta kalın yazılarla bir meme yapın.",
    intro:
      "Meme Oluşturucu, bir resme klasik meme yazıları ekler. Kendi resminizi yükleyin veya sekiz basit hazır şablondan biriyle başlayın, ardından üst, orta ve alt yazıları yazın; uzun satırlar genişliğe sığacak şekilde otomatik olarak kaydırılır. Yazı tipini (varsayılan Impact), boyutu, yazı ve dış çizgi renklerini, hizalamayı ve büyük harf kullanımını seçin; meme'i filigran olmadan PNG, JPG veya WebP olarak indirin.",
    seoTitle: "Meme Oluşturucu – Caps Yapma, Resme Yazı Ekleme",
    seoDescription:
      "Ücretsiz online meme ve caps yapma. Fotoğrafınıza veya bir şablona üst, orta ve alt yazı ekleyin; yazı tipini, boyutu ve dış çizgiyi seçin, filigransız indirin.",
    keywords: [
      "meme oluşturucu",
      "caps yapma",
      "meme yapma",
      "online caps oluşturma",
      "resme meme yazısı ekleme",
      "filigransız meme yapma",
      "fotoğraftan caps yapma",
    ],
    howToSteps: [
      {
        title: "Bir resim seçin",
        description: "Bir JPG, PNG veya WebP resmi yükleyin ya da yapıştırın veya hızlı şablonlardan birine tıklayın.",
      },
      {
        title: "Yazıları yazın",
        description: "Üst ve alt yazıları yazın; gerekirse bir orta yazı ekleyin.",
      },
      {
        title: "Yazıyı biçimlendirin",
        description: "Yazı tipini, boyutu, yazı rengini, dış çizgi rengini ve kalınlığını, hizalamayı ve büyük harf kullanılıp kullanılmayacağını seçin.",
      },
      {
        title: "İndirin veya kopyalayın",
        description: "Meme'i PNG, WebP veya JPG olarak indirin ya da bir sohbete yapıştırmak için panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Üç yazı alanı",
        description: "Uzun metinler için otomatik satır kaydırmalı üst, orta ve alt yazılar.",
      },
      {
        title: "Klasik meme stili",
        description: "Varsayılan olarak siyah dış çizgili beyaz Impact yazı; ayrıca Arial, Comic Sans, Montserrat ve Times yazı tipleri.",
      },
      {
        title: "Yazı resimle birlikte ölçeklenir",
        description: "Yazı boyutu resim yüksekliğine göre belirlenir, bu yüzden yazılar küçük ve büyük resimlerde aynı görünür.",
      },
      {
        title: "Filigran yok",
        description: "Meme'iniz, eklenmiş hiçbir logo olmadan tam gördüğünüz gibi kaydedilir.",
      },
    ],
    faqs: [
      {
        question: "Meme'de filigran var mı?",
        answer: "Hayır. İndirilen resim yalnızca sizin resminizi ve yazılarınızı içerir.",
      },
      {
        question: "Meme'lerde genellikle hangi yazı tipi kullanılır?",
        answer:
          "Klasik meme stili, siyah dış çizgili beyaz Impact yazıdır; burada da varsayılan budur. Bir yazı tipi cihazınızda yüklü değilse tarayıcı benzer bir yazı tipi kullanır.",
      },
      {
        question: "Kendi resmimi kullanabilir miyim?",
        answer: "Evet. Bir JPG, PNG veya WebP resmi yükleyin ya da Ctrl+V ile panodan yapıştırın.",
      },
      {
        question: "Yazım resmin çok fazla kısmını kaplıyor. Ne yapabilirim?",
        answer:
          "Yazı boyutunu küçültün veya metnin bir kısmını orta ya da alt yazıya taşıyın. Uzun yazılar otomatik olarak birkaç satıra kaydırılır.",
      },
      {
        question: "Telefonumda meme yapabilir miyim?",
        answer:
          "Evet. Meme oluşturucu mobil tarayıcılarda çalışır; yazılarınızı yazın ve resmi kaydetmek için indirme düğmesini kullanın.",
      },
    ],
  },
  "split-image": {
    name: "Resim Bölme ve Izgara Kesici",
    shortName: "Izgara Böl",
    tagline: "Bir resmi 3×3 Instagram ızgarası veya panorama kaydırmalı gönderi gibi parçalara bölün ve ZIP olarak indirin.",
    intro:
      "Resim Bölme ve Izgara Kesici, bir resmi satır ve sütunlar hâlinde ayrı resim dosyalarına böler. Profil ızgarası için Instagram 3×3 hazır ayarını, kaydırmalı gönderiler için Panorama 3×1 veya Kaydırmalı gönderi 2×1'i, dört eşit parça için 2×2'yi kullanın ya da en fazla 12 satır ve 12 sütunluk kendi ızgaranızı belirleyin. Tüm parçalar numaralı PNG dosyaları olarak bir ZIP içinde birlikte indirilir veya yalnızca birini kaydetmek için tek bir parçaya tıklayabilirsiniz.",
    seoTitle: "Resmi Parçalara Bölme – Instagram 3×3 ve Panorama",
    seoDescription:
      "Resmi parçalara bölme, ücretsiz. 3x3 Instagram ızgarası, panorama kaydırmalı gönderi dilimleri veya 12x12'ye kadar özel ızgara yapın, parçaları ZIP olarak indirin.",
    keywords: [
      "resmi parçalara bölme",
      "resim bölme",
      "instagram ızgara yapma",
      "instagram için panorama bölme",
      "fotoğrafı parçalara ayırma",
      "3x3 fotoğraf bölme",
      "resmi kareler hâlinde bölme",
    ],
    howToSteps: [
      {
        title: "Resminizi yükleyin",
        description: "Bir JPG, PNG veya WebP resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Izgarayı seçin",
        description:
          "Instagram 3×3 ızgara, Panorama 3×1, Kaydırmalı gönderi 2×1 veya Dört kare (2×2) seçin ya da kendi satır ve sütun sayınızı yazın.",
      },
      {
        title: "Önizlemeyi kontrol edin",
        description: "Önizleme, resmin nereden kesileceğini ve her parçanın numarasını gösterir.",
      },
      {
        title: "Parçaları indirin",
        description: "Tüm parçaları indir (ZIP) düğmesine tıklayın veya yalnızca birini indirmek için önizlemede tek bir parçaya tıklayın.",
      },
    ],
    features: [
      {
        title: "Sosyal medya hazır ayarları",
        description: "3×3 profil ızgarası, 3 veya 2 slaytlık panorama kaydırmalı gönderi ya da 2×2 bölme için tek tık.",
      },
      {
        title: "Özel ızgaralar",
        description: "1 ile 12 satır ve 1 ile 12 sütun arasında her kombinasyon, en fazla 144 parça.",
      },
      {
        title: "Numaralı parçalar",
        description: "Dosyalar soldan sağa ve yukarıdan aşağıya doğru tile_01, tile_02 şeklinde adlandırılır.",
      },
      {
        title: "Kalite kaybı yok",
        description: "Parçalar tam çözünürlüklü resimden kesilir ve kayıpsız PNG dosyaları olarak kaydedilir.",
      },
    ],
    faqs: [
      {
        question: "Parçaları Instagram'da hangi sırayla paylaşmalıyım?",
        answer:
          "Parçalar tile_01'den başlayarak soldan sağa ve yukarıdan aşağıya numaralandırılır. Instagram en yeni gönderiyi önce gösterir; bu yüzden önce son parçayı (3×3 ızgarada tile_09) yükleyin ve tile_01 ile bitirin.",
      },
      {
        question: "3×3 ızgara için hangi resmi kullanmalıyım?",
        answer:
          "Kare parçalar için kare bir resimle başlayın; gerekirse önce 1:1 oranında kırpın. Instagram profil küçük resimlerini farklı bir kırpmayla gösterebilir, bu yüzden paylaştıktan sonra sonucu kontrol edin.",
      },
      {
        question: "Kaydırmalı gönderi için panoramayı nasıl bölerim?",
        answer:
          "Üç slayt için Panorama 3×1'i, iki slayt için Kaydırmalı gönderi 2×1'i seçin. Kare slaytlar için resmin genişliği yüksekliğinin üç katı (veya iki katı) olmalıdır.",
      },
      {
        question: "Tüm parçalar tam olarak aynı boyutta mı?",
        answer:
          "Genişlik veya yükseklik eşit bölünemiyorsa fazla pikseller son sütuna veya satıra eklenir; bu yüzden o parça bir iki piksel daha büyük olabilir.",
      },
      {
        question: "Bölme resim kalitesini düşürür mü?",
        answer: "Hayır. Her parça orijinal piksellerden kesilir ve kayıpsız olan PNG formatında kaydedilir.",
      },
    ],
  },
  "censor-image": {
    name: "Bulanıklaştırma ve Pikselleştirme Sansürü",
    shortName: "Fotoğraf Sansürle",
    tagline: "Bir fotoğraftaki yüzleri, plakaları, adları veya numaraları siyah bant, pikselleştirme ya da bulanıklaştırmayla gizleyin.",
    intro:
      "Bulanıklaştırma ve Pikselleştirme Sansürü, bir resmi paylaşmadan önce içindeki özel ayrıntıları gizler. Yüzlerin, plakaların, adreslerin veya hesap numaralarının üzerine dikdörtgenler ya da ovaller çizin ve her alan için düz siyah bant, pikselleştirme veya bulanıklaştırma seçin. Bulanıklaştırılan alanlar iri pikselli bir katmanın üzerine yerleştirilir, böylece orijinal ayrıntılar kenarlardan görünemez.",
    seoTitle: "Resim Bulanıklaştırma – Yüz ve Yazı Sansürleme",
    seoDescription:
      "Resim bulanıklaştırma ve sansürleme, ücretsiz. Yüzleri, plakaları ve özel yazıları dikdörtgen veya ovallerle bulanıklaştırın, pikselleştirin ya da kapatın.",
    keywords: [
      "resim bulanıklaştırma",
      "fotoğraf bulanıklaştırma",
      "resim pikselleştirme",
      "fotoğraf sansürleme",
      "fotoğrafta yüz bulanıklaştırma",
      "ekran görüntüsünde yazı gizleme",
      "plaka bulanıklaştırma",
    ],
    howToSteps: [
      {
        title: "Resmi yükleyin",
        description: "Fotoğraf veya ekran görüntüsü gibi bir JPG, PNG ya da WebP resmi bırakın, seçin veya yapıştırın.",
      },
      {
        title: "Şekli ve yöntemi seçin",
        description:
          "Dikdörtgen veya Oval'i, ardından Pikselleştir, Bulanıklaştır ya da Siyah bant'ı seçin. Pikselleştirme ve bulanıklaştırma için gücü 4 ile 45 arasında ayarlayın.",
      },
      {
        title: "Özel ayrıntıların üzerine çizin",
        description: "Gizlemek istediğiniz her alanın üzerinde sürükleyin. Son alanı kaldırmak için Son kutuyu geri al'ı, baştan başlamak için Tüm kutuları kaldır'ı kullanın.",
      },
      {
        title: "Sansürlenen resmi indirin",
        description: "PNG, WebP veya JPG olarak indirin ya da panoya kopyalayın.",
      },
    ],
    features: [
      {
        title: "Üç gizleme yöntemi",
        description: "Düz siyah kutular, mozaik pikselleştirme veya pikselli bir taban üzerinde bulanıklaştırma.",
      },
      {
        title: "Dikdörtgenler ve ovaller",
        description: "Yüzler için ovalleri, yazılar, plakalar ve numaralar için dikdörtgenleri kullanın.",
      },
      {
        title: "Tek resimde farklı yöntemler",
        description: "Her alan çizildiği yöntemi ve gücü korur; böylece bir adı siyah bantla kapatıp bir yüzü bulanıklaştırabilirsiniz.",
      },
      {
        title: "Büyük fotoğraflarda tutarlı",
        description: "Güç resim çözünürlüğüne göre ölçeklenir, bu yüzden yüksek çözünürlüklü fotoğraflar da aynı derecede iyi gizlenir.",
      },
      {
        title: "Geri alma ve temizleme",
        description: "Fotoğrafı yeniden yüklemeden son alanı veya tüm alanları kaldırın.",
      },
    ],
    faqs: [
      {
        question: "Yazıyı gizlemek için en güvenli yöntem hangisi?",
        answer:
          "Siyah bant pikselleri tamamen değiştirir ve şifreler, hesap numaraları ve belgeler için en güvenli seçimdir. Güçlü pikselleştirme veya bulanıklaştırma da işe yarar, ancak zayıf ayarlarla küçük yazılar bazen tahmin edilebilir.",
      },
      {
        question: "Biri indirilen dosyadaki bulanıklığı geri alabilir mi?",
        answer:
          "Her alanın içindeki pikseller, ayrı bir katmanda gizlenmek yerine indirilen resimde değiştirilir. Cihazınızdaki orijinal fotoğraf değiştirilmez, bu yüzden yalnızca sansürlenen kopyayı paylaşın.",
      },
      {
        question: "EXIF verileri de kaldırılıyor mu?",
        answer:
          "Evet. İndirilen dosya tuvaldeki piksellerden oluşturulur, bu yüzden orijinaldeki kamera bilgileri ve GPS konumu dahil edilmez.",
      },
      {
        question: "Aynı resimde farklı efektler kullanabilir miyim?",
        answer:
          "Evet. Sonraki alanı çizmeden önce yöntemi veya gücü değiştirin. Daha önce çizdiğiniz alanlar kendi ayarlarını korur.",
      },
      {
        question: "Telefonlarda çalışır mı?",
        answer: "Evet. Kutu veya oval çizmek için parmağınızı gizlemek istediğiniz alanın üzerinde sürükleyin.",
      },
    ],
  },
  "remove-background": {
    name: "Arka Plan Kaldırma",
    shortName: "Arka Planı Sil",
    tagline: "Cihazınızda çalışan bir yapay zekâ modeliyle fotoğrafın arka planını kaldırın ve saydam bir PNG kaydedin.",
    intro:
      "Arka Plan Kaldırma, bir fotoğrafın ana konusunu keser ve arkasındaki her şeyi kaldırır. Tarayıcınızda çalışan bir yapay zekâ modeli kullanır, bu yüzden resimleriniz cihazınızdan asla çıkmaz. İnsanlar (portre) modu, telefonlarda iyi çalışan ve insanlar için en uygun olan küçük, hızlı bir model kullanır; Nesneler (HQ) modu ise ürünler, evcil hayvanlar ve diğer nesneler için daha büyük bir model kullanır. Sonucu saydam bir PNG olarak kaydedin veya düz bir rengin üzerine yerleştirip PNG ya da JPG olarak kaydedin.",
    seoTitle: "Arka Plan Silme – Ücretsiz, Cihazınızda Çalışır",
    seoDescription:
      "Resim arka planını ücretsiz silin; yapay zekâ tarayıcınızda çalışır. Saydam PNG veya düz renkli bir arka plan alın. Fotoğraflarınız cihazınızdan çıkmaz.",
    keywords: [
      "arka plan silme",
      "resim arka planı kaldırma",
      "fotoğraf arka planı silme",
      "ücretsiz arka plan silme",
      "arka planı saydam yapma",
      "şeffaf arka plan yapma",
      "online arka plan kaldırma",
    ],
    howToSteps: [
      {
        title: "Bir fotoğraf yükleyin",
        description: "Bir JPG, PNG veya WebP resmi bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Bir mod seçin",
        description:
          "Varsayılan olarak İnsanlar seçilidir ve insanlar için en iyisidir. Ürünler, evcil hayvanlar ve diğer konular için Nesneler (HQ) modunu, tercihen bir masaüstü tarayıcıda seçin.",
      },
      {
        title: "Sonucu bekleyin",
        description:
          "İlk seferde model tarayıcınıza indirilir; sonrasında tarayıcı önbelleğinden yüklenir. Ardından arka plan cihazınızda kaldırılır.",
      },
      {
        title: "Arka planı seçin ve indirin",
        description: "Saydam bırakıp PNG olarak kaydedin veya düz bir renk seçip PNG ya da JPG olarak kaydedin.",
      },
    ],
    features: [
      {
        title: "Cihazınızda çalışan yapay zekâ",
        description: "Model tarayıcınızın içinde çalışır, bu yüzden fotoğraflarınız asla bir sunucuya yüklenmez.",
      },
      {
        title: "İki model",
        description: "İnsanlar için küçük ve hızlı bir portre modeli; ürünler, evcil hayvanlar ve nesneler için daha büyük, yüksek kaliteli bir model.",
      },
      {
        title: "Bir kez indirilir",
        description: "Tarayıcınız modeli ilk kullanımdan sonra saklar, bu yüzden sonraki resimler çok daha hızlı başlar.",
      },
      {
        title: "Saydam veya renkli arka plan",
        description: "Saydam bir PNG kaydedin veya konuyu seçtiğiniz düz bir rengin üzerine yerleştirin.",
      },
    ],
    faqs: [
      {
        question: "Fotoğraflarım bir sunucuya yükleniyor mu?",
        answer:
          "Hayır. Tarayıcınıza yalnızca yapay zekâ modeli indirilir. Fotoğraflarınız cihazınızda işlenir ve hiçbir yere gönderilmez.",
      },
      {
        question: "İlk kullanım neden daha uzun sürüyor?",
        answer:
          "Önce modelin indirilmesi gerekir: İnsanlar (portre) modu için yaklaşık 7 ile 13 MB, Nesneler (HQ) modu için yaklaşık 115 MB. Tarayıcınız modeli saklar, bu yüzden sonraki kullanımlar çok daha hızlı başlar.",
      },
      {
        question: "Hangi modu kullanmalıyım?",
        answer:
          "İnsan fotoğrafları için İnsanlar modunu kullanın; hızlıdır ve telefonlarda çalışır. Ürünler, evcil hayvanlar ve diğer konular için, özellikle kenarlar önemliyse Nesneler (HQ) modunu kullanın.",
      },
      {
        question: "iPhone ve Android telefonlarda çalışır mı?",
        answer:
          "Evet, İnsanlar (portre) modu telefonlarda çalışacak şekilde tasarlanmıştır. Nesneler (HQ) modu çok daha büyüktür ve en iyi WebGPU destekli bir masaüstü tarayıcıda çalışır; telefonda yavaş olabilir veya belleği yetmeyebilir.",
      },
      {
        question: "Konunun arkasına yeni bir arka plan rengi koyabilir miyim?",
        answer:
          "Evet. Düz bir renk seçin, ardından PNG veya JPG olarak kaydedin. Saydam bir arka plan için PNG olarak kaydedin.",
      },
      {
        question: "Bazı kenarlar neden kusursuz değil?",
        answer:
          "İnce saçlar, tüyler, cam ve arka planla benzer renklere sahip konular her model için zordur. Nesneler (HQ) modunu deneyin veya konu ile arka plan arasında belirgin kontrast olan bir fotoğraf kullanın.",
      },
    ],
  },
};
