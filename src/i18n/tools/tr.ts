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
    tagline: "Cihazınızda çalışan yapay zekâ ile fotoğrafın arka planını kaldırın ve saydam bir PNG kaydedin.",
    intro:
      "Arka Plan Kaldırma, bir fotoğrafın ana konusunu keser ve arkasındaki her şeyi kaldırır. Tarayıcınızda çalışan bir yapay zekâ modeli kullanır, bu yüzden resimleriniz cihazınızdan asla çıkmaz. İki model arasından seçim yapabilirsiniz: Hızlı, çabuk çalışan ve insan fotoğrafları için en uygun olan daha küçük bir modeldir; En iyi kalite ise ürünler, evcil hayvanlar ve nesneler dahil her konuda daha iyi sonuç veren daha büyük bir modeldir. Sonucu saydam bir PNG olarak kaydedin veya düz bir rengin üzerine yerleştirin.",
    seoTitle: "Arka Plan Silme – Ücretsiz, Cihazınızda Çalışır",
    seoDescription:
      "Arka plan silme ücretsiz; yapay zekâ tarayıcınızda çalışır. Hızlı modeli veya en iyi kaliteyi seçin, saydam PNG kaydedin. Fotoğraflarınız cihazınızda kalır.",
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
        title: "Bir model seçin",
        description:
          "Varsayılan olarak Hızlı seçilidir ve insan fotoğraflarında iyi çalışır. Ürünler, evcil hayvanlar ve nesneler için ya da en temiz kenarları istediğiniz her durumda En iyi kalite seçeneğini seçin.",
      },
      {
        title: "Modeli bir kez indirin",
        description:
          "Bir modeli ilk kullandığınızda tarayıcınız onu indirir: Hızlı için yaklaşık 33 MB, En iyi kalite için yaklaşık 100 MB. En iyi kalite, indirme başlamadan önce size sorar. Sonrasında model tarayıcınızda saklanır.",
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
        title: "Seçebileceğiniz iki model",
        description: "Hızlı, çabuk çalışır ve insanlar için en iyisidir. En iyi kalite daha büyük ve daha yavaştır, ancak her konuda daha iyi sonuç verir.",
      },
      {
        title: "Bir kez indirilir",
        description: "Her model ilk kullanımdan sonra tarayıcınızda saklanır ve araç hangilerinin zaten indirildiğini gösterir.",
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
        question: "Hızlı ile En iyi kalite arasındaki fark nedir?",
        answer:
          "Hızlı daha küçük bir model (yaklaşık 33 MB) kullanır ve fotoğraf başına yaklaşık 5 saniye sürer; insanlarda iyi çalışır ancak nesnelerin bazı kısımlarını atlayabilir. En iyi kalite daha büyük bir model (yaklaşık 100 MB) kullanır ve yaklaşık 15–30 saniye sürer; ürünlerde, evcil hayvanlarda, nesnelerde ve insanlarda daha iyi sonuç verir.",
      },
      {
        question: "İlk kullanım neden daha uzun sürüyor?",
        answer:
          "Önce modelin indirilmesi gerekir. En iyi kalite, 100 MB boyutundaki modelini indirmeden önce size sorar. İlk kullanımdan sonra tarayıcınız modeli saklar, bu yüzden sonraki fotoğraflar çok daha hızlı başlar.",
      },
      {
        question: "iPhone ve Android telefonlarda çalışır mı?",
        answer:
          "Evet. Telefonlarda en iyi seçim Hızlı modelidir. En iyi kalite de telefonlarda çalışır, ancak daha büyük indirme boyutu ve daha uzun işlem süresi orada, özellikle mobil veride, daha fazla hissedilir.",
      },
      {
        question: "Konunun arkasına yeni bir arka plan rengi koyabilir miyim?",
        answer:
          "Evet. Düz bir renk seçin, ardından PNG veya JPG olarak kaydedin. Saydam bir arka plan için PNG olarak kaydedin.",
      },
      {
        question: "Bazı kenarlar neden kusursuz değil?",
        answer:
          "İnce saçlar, tüyler, cam ve arka planla benzer renklere sahip konular her model için zordur. En iyi kalite seçeneğini deneyin veya konu ile arka plan arasında belirgin kontrast olan bir fotoğraf kullanın.",
      },
    ],
  },
  "compress-image-to-kb": {
    name: "Resmi KB'a Sıkıştırma",
    shortName: "KB'a Sıkıştır",
    tagline: "Bir fotoğrafı çevrimiçi formlar için 20 KB, 50 KB veya 100 KB gibi kesin bir boyutun altına indirin. İşlem cihazınızda çalışır.",
    intro:
      "Birçok başvuru ve yükleme formu yalnızca 20 KB veya 50 KB gibi sabit bir boyutun altındaki fotoğrafları kabul eder; sıradan bir telefon fotoğrafı ise bunun kat kat üzerindedir. Resmi KB'a Sıkıştırma aracı, dosyayı seçtiğiniz sınırın altına indirir. Sınıra sığan en iyi kaliteyi bulana kadar kalite seviyelerini dener ve fotoğrafın ölçülerini yalnızca en düşük kalitede bile dosya fazla büyük kalacaksa küçültür. 35 × 45 mm pasaport fotoğrafı gibi kesin ölçüler de belirleyebilirsiniz; fotoğraf bu ölçüleri dolduracak şekilde ortadan kırpılır. Her şey tarayıcınızda gerçekleşir, bu yüzden kendi fotoğraflarınız ve belgelerinizin fotoğrafları asla yüklenmez.",
    seoTitle: "Fotoğraf Boyutu Küçültme – 20 KB, 50 KB, 100 KB",
    seoDescription:
      "Fotoğraf boyutu 20 KB küçültme: resmi çevrimiçi formlar için 20 KB, 50 KB, 100 KB veya istediğiniz boyutun altına indirin. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "fotoğraf boyutu 20 kb küçültme",
      "resmi 50 kb yapma",
      "fotoğraf 100 kb küçültme",
      "resim boyutu kb küçültme",
      "fotoğraf kb düşürme",
      "jpg 200 kb küçültme",
      "vesikalık fotoğraf kb küçültme",
    ],
    howToSteps: [
      {
        title: "Fotoğrafınızı ekleyin",
        description: "Bir JPG, PNG, WebP veya iPhone HEIC fotoğrafı bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Boyut sınırını seçin",
        description: "10 KB ile 1 MB arasında bir değer seçin veya formunuzun istediği tam sınırı yazın.",
      },
      {
        title: "Gerekirse ölçüleri ayarlayın",
        description:
          "Orijinal ölçüleri koruyun ya da pasaport fotoğrafı, 2 × 2 inç kare veya özel bir genişlik ve yükseklik seçin.",
      },
      {
        title: "İndirin",
        description: "Sonucun sınırın altında olduğunu belirttiğini kontrol edin, ardından JPG veya WebP dosyasını indirin.",
      },
    ],
    features: [
      {
        title: "Her zaman sınırın altında",
        description:
          "Araç oluşturduğu gerçek dosyayı ölçer; bu yüzden indirdiğiniz dosya seçtiğiniz boyuta yalnızca yakın değil, ondan küçüktür.",
      },
      {
        title: "Sığan en iyi kalite",
        description: "Sınıra sığan en yüksek kaliteyi korur ve ölçüleri yalnızca gerektiğinde küçültür.",
      },
      {
        title: "Pasaport ve özel ölçüler",
        description:
          "35 × 45 mm pasaport fotoğrafları ve 2 × 2 inç fotoğraflar için hazır ayarlar ya da ihtiyacınız olan her genişlik ve yükseklik.",
      },
      {
        title: "Tasarımı gereği gizli",
        description:
          "Fotoğrafınız tarayıcınızda işlenir ve asla yüklenmez; bu, kimlik ve başvuru fotoğrafları için önemlidir.",
      },
    ],
    faqs: [
      {
        question: "Dosya gerçekten sınırın altında olacak mı?",
        answer:
          "Evet. Araç oluşturduğu gerçek dosyanın boyutunu kontrol eder ve yalnızca sınırınızın altındaysa başarı mesajı gösterir. Windows ve çoğu form gibi 1 KB'ı 1.024 bayt olarak sayar; bu yüzden bir form 1 KB'ı 1.000 bayt olarak sayarsa dosya yine sınırın altında kalır.",
      },
      {
        question: "Fotoğrafımın ölçüleri neden değişti?",
        answer:
          "Ölçüleri koru seçiliyken araç önce kaliteyi düşürür. Dosya en düşük kalitede bile fazla büyükse genişliği ve yüksekliği sığana kadar adım adım küçültür. Sonuç mesajı bunun ne zaman olduğunu bildirir ve yeni ölçüleri gösterir.",
      },
      {
        question: "Araç neden sınırıma ulaşamıyor?",
        answer:
          "Kesin ölçüler belirlediğinizde araç fotoğrafı küçültemez; bu yüzden büyük ölçülerle çok düşük bir sınıra ulaşmak mümkün olmayabilir. Sınırı yükseltin, daha küçük ölçüler seçin veya Ölçüleri koru seçeneğini işaretleyin.",
      },
      {
        question: "Formum hangi boyut ve formatı istiyor?",
        answer:
          "Her form kendi kurallarını belirler. Azami dosya boyutu, piksel ya da milimetre cinsinden genişlik ve yükseklik ve format için formun talimatlarını okuyun, ardından aynı değerleri burada ayarlayın. JPG neredeyse her yerde kabul edilir.",
      },
      {
        question: "Sıkıştırma kaliteyi düşürür mü?",
        answer:
          "Bir fotoğraf çok küçültüldüğünde her zaman biraz kalite kaybolur, ama araç sınırın izin verdiği kadarını korur. Yüzler için 30 KB veya üzeri bir sınır, pasaport fotoğrafı ölçülerinde genellikle temiz görünür.",
      },
      {
        question: "Fotoğrafım yükleniyor mu?",
        answer:
          "Hayır. Fotoğraf cihazınızda tarayıcınız tarafından sıkıştırılır. Hiçbir şey bir sunucuya gönderilmez; bu yüzden kimlik fotoğrafları ve belgelerle güvenle kullanabilirsiniz.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC'ten JPG'ye",
    shortName: "HEIC → JPG",
    tagline: "iPhone HEIC fotoğraflarını JPG'ye dönüştürün; böylece her bilgisayarda, telefonda ve web sitesinde açılsınlar. Dönüştürme cihazınızda çalışır.",
    intro:
      "iPhone'lar ve birçok yeni telefon fotoğrafları, daha küçük dosyalarda iyi kalite sunan HEIC formatında kaydeder. Ancak birçok Windows bilgisayar, eski uygulama ve yükleme formu bu formatı açamaz. HEIC'ten JPG'ye aracı, fotoğrafı neredeyse her yerde çalışan standart bir JPG'ye dönüştürür. Fotoğraf tarayıcınızın içinde çözülür ve dönüştürülür, bu yüzden cihazınızdan hiç çıkmaz; dönüştürülen JPG de orijinalde saklanan konum, kamera ve tarih bilgilerini içermez.",
    seoTitle: "HEIC JPG Dönüştürme – Ücretsiz, Yükleme Yok",
    seoDescription:
      "HEIC JPG dönüştürme tarayıcınızda: iPhone fotoğraflarını Windows, Mac, Android ve iPhone'da JPG'ye çevirin. Ücretsiz, gizli, hiçbir şey yüklenmez.",
    keywords: [
      "heic jpg dönüştürme",
      "heic'i jpg'ye çevirme",
      "iphone fotoğrafını jpg yapma",
      "heic dönüştürücü",
      "heic jpeg çevirme",
      "windows'ta heic açma",
    ],
    howToSteps: [
      {
        title: "HEIC fotoğrafınızı ekleyin",
        description: "iPhone'unuzdan veya bilgisayarınızdan bir .heic ya da .heif dosyası bırakın, seçin veya yapıştırın.",
      },
      {
        title: "Önizlemeyi bekleyin",
        description: "Tarayıcınız fotoğrafı çözer. Büyük fotoğraflar birkaç saniye sürebilir.",
      },
      {
        title: "JPG'yi indirin",
        description: "Dönüştürülen fotoğrafı kaydedin. Her fotoğraf görüntüleyicide, tarayıcıda ve yükleme formunda açılır.",
      },
    ],
    features: [
      {
        title: "Her yerde çalışır",
        description: "JPG; Windows, Mac ve Android'de, her tarayıcıda ve neredeyse her web sitesinde açılır.",
      },
      {
        title: "Gizli dönüştürme",
        description: "Fotoğraf cihazınızda dönüştürülür ve asla yüklenmez.",
      },
      {
        title: "Konum bilgisi yok",
        description: "Orijinaldeki GPS konumu, kamera bilgileri ve tarihler JPG'ye kopyalanmaz.",
      },
      {
        title: "Düzenlemeye devam edin",
        description: "Dönüştürülen fotoğrafı kırpmak, boyutlandırmak veya sıkıştırmak için doğrudan ilgili araca gönderin.",
      },
    ],
    faqs: [
      {
        question: "HEIC dosyası nedir?",
        answer:
          "HEIC (High Efficiency Image Container), iPhone'ların iOS 11'den beri varsayılan olarak kullandığı fotoğraf formatıdır. Fotoğrafları benzer kalitedeki bir JPG'nin yaklaşık yarısı kadar yerde saklar, ancak birçok bilgisayar ve web sitesi hâlâ bu formatı açamaz.",
      },
      {
        question: "JPG aynı görünecek mi?",
        answer:
          "Evet, normal görüntülemede. JPG yüksek kalitede kaydedilir. JPG dosyaları genellikle HEIC orijinalinden büyüktür, çünkü JPG sıkıştırması daha az verimlidir.",
      },
      {
        question: "Birden fazla HEIC fotoğrafı aynı anda dönüştürebilir miyim?",
        answer:
          "Bu araç fotoğrafları tek tek dönüştürür. Tek bir HEIC dosyası seri çekim gibi birden fazla resim içeriyorsa ilk resim dönüştürülür.",
      },
      {
        question: "iPhone'umun JPG fotoğraf çekmesini nasıl sağlarım?",
        answer:
          "iPhone'da Ayarlar'ı, ardından Kamera'yı, sonra Biçimler'i açın ve En Uyumlu'yu seçin. Yeni fotoğraflar artık JPG olarak kaydedilir. Daha önce çektiğiniz fotoğraflar HEIC olarak kalır.",
      },
      {
        question: "Fotoğrafım yükleniyor mu?",
        answer: "Hayır. HEIC çözücü tarayıcınızda çalışır, bu yüzden fotoğraf cihazınızda kalır.",
      },
    ],
  },
  "heic-to-png": {
    name: "HEIC'ten PNG'ye",
    shortName: "HEIC → PNG",
    tagline: "iPhone HEIC fotoğraflarını düzenleme ve tasarım işleri için kayıpsız PNG'ye dönüştürün. Dönüştürme cihazınızda çalışır.",
    intro:
      "HEIC, iPhone'ların varsayılan fotoğraf formatıdır ve birçok tasarım aracı, eski uygulama ve web sitesi onu açamaz. HEIC'ten PNG'ye aracı, fotoğrafı kayıpsız bir format olan PNG'ye dönüştürür; böylece düzenleyip yeniden kaydettiğinizde ek ayrıntı kaybolmaz. Bu da onu rötuşlayacağınız, bir tasarıma yerleştireceğiniz veya dekupe edeceğiniz fotoğraflar için iyi bir seçim yapar. Dönüştürme tarayıcınızın içinde gerçekleşir, bu yüzden fotoğraf cihazınızdan hiç çıkmaz. Paylaşmak veya yüklemek için HEIC'ten JPG'ye aracı çok daha küçük dosyalar verir.",
    seoTitle: "HEIC PNG Dönüştürme – Ücretsiz ve Kayıpsız",
    seoDescription:
      "HEIC PNG dönüştürme tarayıcınızda: iPhone fotoğraflarını düzenleme ve tasarım için kayıpsız PNG'ye çevirin. Ücretsiz, gizli, hiçbir şey yüklenmez.",
    keywords: [
      "heic png dönüştürme",
      "heic'i png'ye çevirme",
      "iphone fotoğrafını png yapma",
      "heic png dönüştürücü",
      "heif png çevirme",
    ],
    howToSteps: [
      {
        title: "HEIC fotoğrafınızı ekleyin",
        description: "Bir .heic veya .heif dosyası bırakın, seçin ya da yapıştırın.",
      },
      {
        title: "Önizlemeyi bekleyin",
        description: "Tarayıcınız fotoğrafı cihazınızda çözer.",
      },
      {
        title: "PNG'yi indirin",
        description: "Kayıpsız PNG'yi kaydedin ve herhangi bir düzenleyicide veya tasarım aracında açın.",
      },
    ],
    features: [
      {
        title: "Kayıpsız çıktı",
        description:
          "PNG, çözülen fotoğrafın her pikselini korur; bu yüzden tekrar tekrar düzenlemek sıkıştırma bozulmaları eklemez.",
      },
      {
        title: "Her düzenleyicide açılır",
        description: "PNG; Photoshop, GIMP, Figma, Canva, Office ve tüm tarayıcılarda çalışır.",
      },
      {
        title: "Gizli dönüştürme",
        description: "Fotoğraf cihazınızda dönüştürülür ve asla yüklenmez.",
      },
      {
        title: "Konum bilgisi yok",
        description: "Orijinaldeki GPS konumu ve kamera bilgileri PNG'ye kopyalanmaz.",
      },
    ],
    faqs: [
      {
        question: "PNG mi JPG mi: hangisini seçmeliyim?",
        answer:
          "Fotoğrafı daha sonra düzenleyecekseniz veya piksellerin birebir korunması gerekiyorsa PNG'yi seçin. Paylaşmak, e-postayla göndermek ve yükleme formları için JPG'yi seçin, çünkü fotoğrafların PNG dosyaları birkaç kat daha büyüktür.",
      },
      {
        question: "PNG neden HEIC'ten çok daha büyük?",
        answer:
          "HEIC çok verimli, kayıplı bir sıkıştırma kullanır. PNG kayıpsızdır, bu yüzden çok daha fazla veri saklar. 2 MB'lık bir iPhone fotoğrafı 10 MB veya daha büyük bir PNG'ye dönüşebilir.",
      },
      {
        question: "PNG'nin arka planı saydam mı?",
        answer:
          "Hayır. Fotoğraflarda saydamlık yoktur, bu yüzden PNG tamamen opaktır. Arka planı kaldırmak için sonucu Arka Plan Kaldırma aracında açın.",
      },
      {
        question: "Fotoğrafım yükleniyor mu?",
        answer: "Hayır. HEIC çözücü tarayıcınızda çalışır, bu yüzden fotoğraf cihazınızda kalır.",
      },
    ],
  },
  "jpg-to-pdf": {
    name: "JPG'den PDF'e",
    shortName: "JPG → PDF",
    tagline: "Bir veya daha fazla fotoğrafı seçtiğiniz sırayla, A4 veya Letter (ABD) sayfalarla tek bir PDF'e dönüştürün. Hiçbir şey yüklenmez.",
    intro:
      "JPG'den PDF'e aracı, fotoğraflarınızı her sayfada bir fotoğraf olacak şekilde tek bir PDF dosyasında toplar. Taranmış sayfaları, fişleri, notları veya kimlik fotoğraflarını tek bir belge olarak göndermenin hızlı yoludur. JPG, PNG, WebP veya iPhone HEIC resimlerini ekleyin, sıralayın ve sayfa boyutunu, yönünü ve kenar boşluklarını seçin. JPG fotoğraflar PDF'e yeniden sıkıştırılmadan yerleştirilir, bu yüzden orijinal kalitelerini korur. PDF tarayıcınız tarafından oluşturulur, bu yüzden belgeleriniz asla bir sunucuya yüklenmez.",
    seoTitle: "JPG PDF Çevirme – Fotoğrafları Birleştirin, Ücretsiz",
    seoDescription:
      "JPG PDF çevirme tarayıcıda: JPG, PNG ve iPhone fotoğraflarını tek PDF yapın. Sayfaları sıralayın, A4 veya Letter (ABD) seçin. Ücretsiz, yükleme ve filigran yok.",
    keywords: [
      "jpg pdf çevirme",
      "resmi pdf yapma",
      "fotoğrafı pdf'e dönüştürme",
      "png pdf çevirme",
      "resimleri pdf'te birleştirme",
      "jpg pdf dönüştürücü",
    ],
    howToSteps: [
      {
        title: "Resimlerinizi ekleyin",
        description:
          "Bir veya daha fazla JPG, PNG, WebP ya da HEIC resmi bırakın veya seçin. İstediğiniz zaman daha fazlasını ekleyebilirsiniz.",
      },
      {
        title: "Sıralayın",
        description: "Sayfaları düzenlemek için yukarı ve aşağı düğmelerini kullanın, ihtiyacınız olmayanları kaldırın.",
      },
      {
        title: "Sayfa düzenini seçin",
        description: "A4, Letter (ABD) veya her resme uyan bir sayfa seçin; ardından yönü ve kenar boşluğunu belirleyin.",
      },
      {
        title: "PDF'i oluşturun",
        description: "Her resmin kendi sayfasında olduğu tek bir PDF indirin.",
      },
    ],
    features: [
      {
        title: "Çok sayıda resim, tek PDF",
        description: "Cihazınızın kaldırabildiği kadar fotoğrafı tek bir belgede birleştirin.",
      },
      {
        title: "Orijinal JPG kalitesi",
        description: "JPG fotoğraflar bir kez daha sıkıştırılmadan, olduğu gibi gömülür.",
      },
      {
        title: "A4, Letter (ABD) veya resme göre",
        description: "Otomatik yönlü standart kâğıt boyutları ya da her resmin tam boyutunda sayfalar.",
      },
      {
        title: "Gizli ve filigransız",
        description: "PDF cihazınızda oluşturulur, filigran içermez ve hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Kaç resim ekleyebilirim?",
        answer:
          "Sabit bir sınır yoktur. Çoğu cihazda onlarca telefon fotoğrafı sorunsuz çalışır; çok büyük gruplar eski telefonlarda belleği aşabilir.",
      },
      {
        question: "Fotoğraflar kalite kaybeder mi?",
        answer:
          "JPG fotoğraflar PDF'e yeniden sıkıştırılmadan yerleştirilir, bu yüzden orijinal kalitelerini korur. PNG resimler kayıpsız kalır. WebP ve HEIC resimler önce yüksek kaliteli JPG'ye dönüştürülür, çünkü PDF bunları doğrudan saklayamaz.",
      },
      {
        question: "PDF'im neden bu kadar büyük?",
        answer:
          "PDF, fotoğraflarınızı tam çözünürlükte içerir. Daha küçük hale getirmek için önce fotoğrafları Resim Sıkıştırma veya Resim Boyutlandırma ile küçültün, sonra buraya ekleyin.",
      },
      {
        question: "Yan çekilmiş telefon fotoğrafları doğru döndürülür mü?",
        answer:
          "Evet. Fotoğraflar, dosyada saklanan yön bilgisi kullanılarak telefonunuzda göründükleri gibi yerleştirilir.",
      },
      {
        question: "Belgem yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından oluşturulur, bu yüzden fişler, kimlikler ve özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF'ten JPG'ye",
    shortName: "PDF → JPG",
    tagline: "Bir PDF'in her sayfasını JPG veya PNG resim olarak kaydedin; tek tek ya da hepsini birlikte bir ZIP içinde. Hiçbir şey yüklenmez.",
    intro:
      "PDF'ten JPG'ye aracı, bir PDF'in sayfalarını paylaşabileceğiniz, sohbette gönderebileceğiniz, bir slayta ekleyebileceğiniz veya yalnızca resim kabul eden bir forma yükleyebileceğiniz resimlere dönüştürür. Küçük dosyalar için JPG'yi, keskin metin için PNG'yi seçin ve çözünürlüğü belirleyin: ekranlar için 72 dpi, çoğu kullanım için 150 dpi, baskı için 300 dpi. Tek bir sayfayı veya tüm sayfaları tek seferde bir ZIP dosyası olarak indirin. PDF cihazınızda tarayıcınız tarafından açılır, bu yüzden özel belgeler asla yüklenmez.",
    seoTitle: "PDF JPG Çevirme – Tüm Sayfalar, Ücretsiz",
    seoDescription:
      "PDF JPG çevirme tarayıcıda: sayfaları JPG veya PNG yapın. 72, 150 ya da 300 dpi seçin, bir sayfayı veya hepsini ZIP olarak indirin. Ücretsiz, yükleme yok.",
    keywords: [
      "pdf jpg çevirme",
      "pdf'i resme dönüştürme",
      "pdf jpg dönüştürme",
      "pdf png çevirme",
      "pdf sayfasını resim yapma",
      "pdf'i jpg olarak kaydetme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Bir PDF dosyası bırakın veya seçin. Sayfaları önizleme olarak görünür.",
      },
      {
        title: "Format ve çözünürlük seçin",
        description: "JPG veya PNG ile 72, 150 ya da 300 dpi seçin.",
      },
      {
        title: "İndirin",
        description: "Tek bir sayfayı kaydedin veya tüm sayfaları birlikte bir ZIP dosyası olarak indirin.",
      },
    ],
    features: [
      {
        title: "Tüm sayfalar ya da yalnızca biri",
        description: "İhtiyacınız olan sayfayı ya da tüm sayfaları tek seferde ZIP olarak indirin.",
      },
      {
        title: "Baskı kalitesinde çözünürlük",
        description: "Keskin metin ve baskı için en fazla 300 dpi ile işleyin.",
      },
      {
        title: "JPG veya PNG",
        description: "Küçük dosyalar için JPG, net metin ve diyagramlar için PNG.",
      },
      {
        title: "Özel belgeler özel kalır",
        description: "PDF cihazınızda açılır ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Hangi çözünürlüğü seçmeliyim?",
        answer:
          "150 dpi, paylaşımdan slaytlara kadar çoğu kullanıma uygundur. Yazdırmak veya küçük metinleri yakınlaştırmak için 300 dpi'yı, en küçük dosyalar için 72 dpi'yı seçin. Daha yüksek çözünürlükler daha uzun sürer ve daha büyük dosyalar oluşturur.",
      },
      {
        question: "JPG mi PNG mi?",
        answer:
          "JPG çok daha küçük dosyalar verir ve fotoğraflı sayfalar için en iyisidir. PNG metni ve çizimleri kusursuz keskinlikte korur, ancak dosyalar daha büyüktür.",
      },
      {
        question: "Parola korumalı bir PDF'i dönüştürebilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, korumasız bir kopyasını kaydedin ve o kopyayı deneyin.",
      },
      {
        question: "Metin hâlâ seçilebilir olacak mı?",
        answer:
          "Hayır. Her sayfa bir resme dönüşür, bu yüzden metin seçilemez ve aranamaz. Metne ihtiyacınız varsa orijinal PDF'i saklayın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF tarayıcınız tarafından okunur ve işlenir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "merge-images": {
    name: "Resim Birleştirme",
    shortName: "Birleştir",
    tagline: "Fotoğrafları yan yana, alt alta veya ızgara halinde, aralık ve arka plan rengiyle birleştirip tek bir resim olarak kaydedin.",
    intro:
      "Resim Birleştirme, birkaç resmi tek bir resimde toplar: öncesi-sonrası karşılaştırmaları için yan yana, uzun ekran görüntüleri ve adım adım kılavuzlar için alt alta, basit bir kolaj için ızgara halinde. Resimleri sıralayın, aralarındaki boşluğu ve arka plan rengini seçin; kenarların hizalanması için yüksekliklerini veya genişliklerini araç eşitlesin. Sonucu JPG, PNG veya WebP olarak kaydedin. Hepsi tarayıcınızda gerçekleşir, bu yüzden fotoğraflarınız asla yüklenmez.",
    seoTitle: "Resim Birleştirme – Fotoğrafları Online Birleştirin",
    seoDescription:
      "Resim birleştirme tarayıcıda: fotoğrafları yan yana, alt alta veya ızgara halinde birleştirin. Aralık ve arka plan rengi ekleyin. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "resim birleştirme",
      "fotoğraf birleştirme",
      "iki fotoğrafı yan yana koyma",
      "resimleri alt alta birleştirme",
      "kolaj yapma",
      "fotoğrafları online birleştirme",
    ],
    howToSteps: [
      {
        title: "Resimlerinizi ekleyin",
        description: "İki veya daha fazla JPG, PNG, WebP ya da HEIC resmi bırakın veya seçin.",
      },
      {
        title: "Sıralayın",
        description: "Sırayı belirlemek için yukarı ve aşağı düğmelerini kullanın, ihtiyacınız olmayanları kaldırın.",
      },
      {
        title: "Düzeni seçin",
        description:
          "Yan yana, alt alta veya istediğiniz sütun sayısıyla ızgara düzenini seçin; ayrıca aralığı ve arka planı belirleyin.",
      },
      {
        title: "İndirin",
        description: "Birleştirilmiş resmi JPG, PNG veya WebP olarak kaydedin.",
      },
    ],
    features: [
      {
        title: "Üç düzen",
        description: "Karşılaştırmalar için yatay, ekran görüntüleri ve kılavuzlar için dikey, kolajlar için ızgara.",
      },
      {
        title: "Hizalı kenarlar",
        description: "Yükseklikleri veya genişlikleri otomatik olarak eşitleyin ya da her resmi orijinal boyutunda tutun.",
      },
      {
        title: "Aralık ve arka plan",
        description:
          "Resimler arasındaki boşluğu ayarlayın ve istediğiniz renkle doldurun ya da PNG ve WebP'de saydam bırakın.",
      },
      {
        title: "Gizli",
        description: "Resimler cihazınızda birleştirilir ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Kaç resim birleştirebilirim?",
        answer:
          "Cihazınızın belleği yettiği sürece istediğiniz kadar. Çok büyük sonuçlar, tarayıcıların kaydedebileceği boyutun içinde kalmak için otomatik olarak küçültülür.",
      },
      {
        question: "Boyutları eşitle ne işe yarar?",
        answer:
          "Satırda her resim aynı yüksekliğe, sütunda aynı genişliğe ölçeklenir; ızgarada ise her resim aynı boyuttaki bir hücreyi doldurur. Her resmi orijinal boyutunda tutmak için bu seçeneği kapatın.",
      },
      {
        question: "Arka plan saydam olabilir mi?",
        answer:
          "Evet. Saydam'ı seçin ve PNG veya WebP olarak kaydedin. JPG saydamlık saklayamaz, bu yüzden onun yerine arka plan rengini kullanır.",
      },
      {
        question: "Öncesi-sonrası resmi nasıl yaparım?",
        answer:
          "İki fotoğrafı ekleyin, Yan yana'yı seçin, Boyutları eşitle'yi açık bırakın ve küçük bir aralık ekleyin. İki resim aynı yükseklikte olur.",
      },
      {
        question: "Resimlerim yükleniyor mu?",
        answer: "Hayır. Resimler cihazınızda tarayıcınız tarafından birleştirilir.",
      },
    ],
  },
  "merge-pdf": {
    name: "PDF Birleştirme",
    shortName: "PDF Birleştir",
    tagline: "Birkaç PDF dosyasını seçtiğiniz sırayla tek bir dosyada birleştirin. Dosyalar cihazınızda birleştirilir.",
    intro:
      "PDF Birleştirme, iki veya daha fazla PDF dosyasını tek bir belgede toplar. Dosyaları ekleyin, taşıma düğmeleriyle sıralayın, her birinin ilk sayfasını kontrol edin ve tüm sayfaları sırayla içeren tek bir PDF indirin. Bir raporu ekleriyle, birkaç taranmış sayfayı veya bir grup faturayı tek dosya olarak göndermenin hızlı yoludur. Birleştirme tarayıcınızda gerçekleşir, bu yüzden belgeleriniz asla bir sunucuya yüklenmez.",
    seoTitle: "PDF Birleştirme Online – Ücretsiz, Yükleme Yok",
    seoDescription:
      "PDF birleştirme tarayıcıda: birden fazla PDF dosyasını istediğiniz sırayla tek bir PDF'te toplayın. Ücretsiz, gizli, yükleme ve filigran yok.",
    keywords: [
      "pdf birleştirme",
      "pdf birleştir",
      "pdf dosyalarını birleştirme",
      "online pdf birleştirme ücretsiz",
      "pdf'leri tek dosyada birleştirme",
      "pdf birleştirici",
    ],
    howToSteps: [
      {
        title: "PDF'lerinizi ekleyin",
        description: "İki veya daha fazla PDF dosyası bırakın veya seçin. İstediğiniz zaman daha fazlasını ekleyebilirsiniz.",
      },
      {
        title: "Sıraya koyun",
        description: "Dosyaları yukarı ve aşağı düğmeleriyle düzenleyin, ihtiyacınız olmayanları kaldırın.",
      },
      {
        title: "İndirin",
        description: "Tüm sayfaları dosya dosya sırayla içeren tek bir PDF kaydedin.",
      },
    ],
    features: [
      {
        title: "İstediğiniz kadar dosya",
        description: "Cihazınızın kaldırabileceği kadar PDF'i birleştirin; toplam sayfa sayısı gösterilir.",
      },
      {
        title: "Sizin sıranız",
        description: "Dosyaları klavyeyle ve ekran okuyucularla da çalışan düğmelerle sıralayın.",
      },
      {
        title: "Sayfalar değişmez",
        description:
          "Sayfalar yeniden sıkıştırılmadan olduğu gibi kopyalanır, bu yüzden metin keskin ve aranabilir kalır.",
      },
      {
        title: "Gizli ve ücretsiz",
        description: "Dosyalar cihazınızda birleştirilir; yükleme, kayıt ve filigran yoktur.",
      },
    ],
    faqs: [
      {
        question: "Birleştirebileceğim dosya sayısında bir sınır var mı?",
        answer:
          "Sabit bir sınır yoktur. Normal boyutlu düzinelerce PDF çoğu cihazda sorunsuz çalışır; çok büyük dosyalar eski telefonlarda yavaş olabilir.",
      },
      {
        question: "Bağlantılar ve yer işaretleri çalışmaya devam eder mi?",
        answer:
          "Sayfalardaki bağlantılar korunur. Yer işareti listesi (PDF okuyucunun yan panelindeki ana hat) birleştirilmiş dosyaya kopyalanmaz.",
      },
      {
        question: "Birleştirme kaliteyi düşürür mü?",
        answer:
          "Hayır. Sayfalar olduğu gibi kopyalanır, bu yüzden metin, resimler ve vektör grafikler tamamen aynı görünür.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "split-pdf": {
    name: "PDF Bölme",
    shortName: "PDF Böl",
    tagline: "Bir PDF'i sayfa aralıklarına, birkaç sayfada bir veya tek tek sayfalara bölün. Cihazınızda çalışır.",
    intro:
      "PDF Bölme, bir PDF'i birkaç küçük PDF'e ayırır. Her aralık için ayrı bir dosya almak üzere 1-3, 5, 8- gibi sayfa aralıkları yazın, uzun bir taramayı eşit parçalara ayırmak için belirli sayıda sayfada bir bölün ya da her sayfayı ayrı bir PDF olarak kaydedin. Araç, indirmeden önce alacağınız dosyaları listeler; birden fazla dosya tek bir ZIP içinde birlikte gelir. Bölme işlemi tarayıcınızda gerçekleşir, bu yüzden belge cihazınızdan hiç çıkmaz.",
    seoTitle: "PDF Bölme Online – Sayfa veya Aralığa Göre, Ücretsiz",
    seoDescription:
      "PDF bölme tarayıcıda: bir PDF'i sayfa aralıklarına, her N sayfada bir veya tek sayfalara ayırın. Ücretsiz, gizli ve hiçbir şey yüklenmez.",
    keywords: [
      "pdf bölme",
      "pdf ayırma",
      "pdf sayfalarını ayırma",
      "online pdf bölme ücretsiz",
      "pdf'i parçalara ayırma",
      "pdf bölücü",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Bir PDF bırakın veya seçin. Sayfaları önizleme olarak görünür.",
      },
      {
        title: "Nasıl böleceğinizi seçin",
        description: "Sayfa aralıkları girin, dosya başına sayfa sayısını seçin veya her sayfayı ayırın.",
      },
      {
        title: "Listeyi kontrol edin",
        description: "Panel, alacağınız her dosyayı ve sayfalarını gösterir.",
      },
      {
        title: "İndirin",
        description: "Tek bir PDF'i ya da birden fazla dosya varsa bir ZIP'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Üç bölme yöntemi",
        description: "Özel aralıklar, eşit sayfa grupları veya dosya başına bir sayfa.",
      },
      {
        title: "Kaydetmeden önce görün",
        description: "Oluşacak her dosya ve sayfa numaraları önceden listelenir.",
      },
      {
        title: "Tek ZIP indirmesi",
        description: "Birden fazla dosya, sayfalarına göre adlandırılmış olarak birlikte gelir.",
      },
      {
        title: "Gizli",
        description: "PDF cihazınızda bölünür ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Sayfa aralıklarını nasıl yazarım?",
        answer:
          "Aralıkları virgülle ayırın. 1-3, 1 ile 3 arasındaki sayfaları; 5 yalnızca 5. sayfayı; 8- ise 8. sayfadan sona kadar olan sayfaları ifade eder. Her aralık ayrı bir PDF olur.",
      },
      {
        question: "Yalnızca bazı sayfaları içeren tek bir PDF alabilir miyim?",
        answer:
          "Evet. Yalnızca o sayfaları indirmek için 2-4 gibi tek bir aralık girin. PDF Sayfa Çıkarma aracı da sayfalara tıklayarak seçmenizi sağlar.",
      },
      {
        question: "Bölme sayfaları değiştirir mi?",
        answer: "Hayır. Sayfalar olduğu gibi kopyalanır, bu yüzden metin keskin ve aranabilir kalır.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "extract-pdf-pages": {
    name: "PDF Sayfa Çıkarma",
    shortName: "Sayfa Çıkar",
    tagline: "Bir PDF'ten ihtiyacınız olan sayfaları seçip yeni bir PDF olarak kaydedin. Cihazınızda çalışır.",
    intro:
      "PDF Sayfa Çıkarma, bir PDF'in sayfalarını önizlemelerine bakarak seçmenizi ve yalnızca bu sayfaları yeni bir belge olarak kaydetmenizi sağlar. Uzun bir raporun tek bir bölümünü, bir sözleşmenin imzalı sayfasını veya bir dosya yığınındaki tek bir hesap özetini göndermek için kullanışlıdır. İstediğiniz sayfaları işaretleyin ya da Tümünü seç düğmesine basıp istemediğiniz birkaç sayfanın işaretini kaldırın, ardından indirin. Orijinal dosya değişmez ve her şey tarayıcınızda gerçekleşir.",
    seoTitle: "PDF Sayfa Çıkarma – Ücretsiz, Yükleme Yok",
    seoDescription:
      "PDF sayfa çıkarma tarayıcıda: bir PDF'in sayfalarını önizlemelerden seçin ve yeni bir PDF olarak kaydedin. Ücretsiz, gizli ve hiçbir şey yüklenmez.",
    keywords: [
      "pdf sayfa çıkarma",
      "pdf'ten sayfa çıkarma",
      "pdf sayfalarını ayıklama",
      "pdf'ten sayfa kaydetme",
      "pdf sayfa seçme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Tüm sayfalarını görmek için bir PDF bırakın veya seçin.",
      },
      {
        title: "İstediğiniz sayfaları işaretleyin",
        description:
          "Her sayfanın altındaki onay kutusunu kullanın ya da Tümünü seç düğmesine basıp ihtiyacınız olmayanların işaretini kaldırın.",
      },
      {
        title: "İndirin",
        description: "Yalnızca bu sayfaları orijinal sıralarıyla içeren yeni bir PDF kaydedin.",
      },
    ],
    features: [
      {
        title: "Önizlemeden seçin",
        description: "Seçmeden önce her sayfayı görün.",
      },
      {
        title: "Klavye dostu",
        description: "Her sayfanın etiketli bir onay kutusu vardır, bu yüzden fare gerekmez.",
      },
      {
        title: "Sayfalar değişmez",
        description: "Seçilen sayfalar keskin ve aranabilir metinle olduğu gibi kopyalanır.",
      },
      {
        title: "Gizli",
        description: "Sayfalar cihazınızda çıkarılır ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Orijinal PDF'im değişir mi?",
        answer: "Hayır. Seçtiğiniz sayfalarla yeni bir PDF oluşturulur; orijinal dosya olduğu gibi kalır.",
      },
      {
        question: "Sayfaların sırasını değiştirebilir miyim?",
        answer:
          "Çıkarılan sayfalar orijinal sıralarını korur. Sayfaları yeniden sıralamak, döndürmek veya silmek için PDF Sayfa Düzenleme aracını kullanın.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "organize-pdf": {
    name: "PDF Sayfa Düzenleme",
    shortName: "PDF Düzenle",
    tagline: "PDF sayfalarını yeniden sıralayın, döndürün ve silin, ardından yeni PDF'i kaydedin. Cihazınızda çalışır.",
    intro:
      "PDF Sayfa Düzenleme, bir PDF'in tüm sayfalarını göstererek belgeyi toparlamanızı sağlar: sayfaları öne veya geriye taşıyın, yan duran taramaları düzeltin, boş veya istenmeyen sayfaları silin. Her sayfanın klavyeyle de çalışan kendi düğmeleri vardır; fareyle sayfaları sürükleyerek de yerine koyabilirsiniz. Tüm değişiklikleri geri al düğmesi her şeyi eski haline getirir. Her şey doğru göründüğünde yeni PDF'i indirin. Bunların hepsi tarayıcınızda gerçekleşir, bu yüzden belge asla yüklenmez.",
    seoTitle: "PDF Sayfa Düzenleme – Sırala, Döndür, Sil",
    seoDescription:
      "PDF sayfa düzenleme tarayıcıda: sayfaları önizlemelerle yeniden sıralayın, döndürün ve silin, yeni PDF'i indirin. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf sayfa düzenleme",
      "pdf sayfa sıralama",
      "pdf sayfalarının yerini değiştirme",
      "pdf sayfa silme",
      "pdf'ten sayfa kaldırma",
      "pdf düzenleme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Tüm sayfalarını görmek için bir PDF bırakın veya seçin.",
      },
      {
        title: "Sayfaları düzenleyin",
        description:
          "Her sayfanın altındaki düğmelerle sayfayı taşıyın, döndürün veya silin ya da sayfaları sürükleyerek yerine koyun.",
      },
      {
        title: "İndirin",
        description: "Yeniden düzenlenmiş PDF'i kaydedin. Tüm değişiklikleri geri al düğmesi orijinalden yeniden başlatır.",
      },
    ],
    features: [
      {
        title: "Taşıma, döndürme, silme",
        description: "Tüm sayfa işlemleri tek ekranda; önizlemeler siz çalışırken güncellenir.",
      },
      {
        title: "Sürükleyin veya düğmeleri kullanın",
        description: "Fareyle sürükleyin ya da klavye ve ekran okuyucularla da çalışan düğmeleri kullanın.",
      },
      {
        title: "Kayıpsız",
        description:
          "Sayfalar yeniden işlenmez, yalnızca yeniden düzenlenir; bu yüzden metin keskin ve aranabilir kalır.",
      },
      {
        title: "Gizli",
        description: "PDF cihazınızda düzenlenir ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Bir sayfayı döndürmek kaliteyi düşürür mü?",
        answer:
          "Hayır. Döndürme bir sayfa ayarı olarak saklanır, bu yüzden hiçbir şey yeniden çizilmez veya sıkıştırılmaz.",
      },
      {
        question: "Bir değişikliği geri alabilir miyim?",
        answer:
          "Evet. Tüm değişiklikleri geri al düğmesi her sayfayı orijinal konumuna ve yönüne döndürür. Orijinal dosyanız asla değişmez.",
      },
      {
        question: "Başka bir PDF'ten sayfa ekleyebilir miyim?",
        answer: "Önce dosyaları PDF Birleştirme ile birleştirin, sonra birleştirilmiş dosyayı burada düzenleyin.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "rotate-pdf": {
    name: "PDF Döndürme",
    shortName: "PDF Döndür",
    tagline: "Tüm sayfaları ya da yalnızca seçtiğiniz sayfaları 90 veya 180 derece döndürün. Cihazınızda çalışır.",
    intro:
      "PDF Döndürme, yan veya ters açılan sayfaları düzeltir; bu, taranmış belgelerde ve PDF olarak kaydedilmiş fotoğraflarda sık görülen bir sorundur. Sağa 90 derece, 180 derece veya sola 90 derece seçin ve bunu tüm sayfalara ya da yalnızca işaretlediğiniz sayfalara uygulayın. Önizlemeler, indirmeden önce sonucu gösterir. Döndürme bir sayfa ayarı olarak saklanır, bu yüzden metin ve resimler tam kalitesini korur ve hiçbir şey tarayıcınızdan çıkmaz.",
    seoTitle: "PDF Döndürme Online – Ücretsiz, Kalıcı",
    seoDescription:
      "PDF döndürme tarayıcıda: tüm sayfaları veya seçili sayfaları 90 ya da 180 derece döndürün ve kalıcı olarak kaydedin. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf döndürme",
      "pdf sayfa döndürme",
      "pdf çevirme",
      "pdf döndürüp kaydetme",
      "ters pdf düzeltme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Sayfalarını görmek için bir PDF bırakın veya seçin.",
      },
      {
        title: "Döndürme açısını seçin",
        description: "Tüm sayfalar veya işaretlediğiniz sayfalar için sağa 90°, 180° ya da sola 90° seçin.",
      },
      {
        title: "İndirin",
        description: "Sayfaları kalıcı olarak döndürülmüş PDF'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Tüm veya seçili sayfalar",
        description: "Geri kalanına dokunmadan yan duran tek bir taramayı düzeltin.",
      },
      {
        title: "Canlı önizleme",
        description: "Sayfa önizlemeleri, hiçbir şey kaydedilmeden önce siz seçtikçe döner.",
      },
      {
        title: "Kalite kaybı yok",
        description: "Döndürme bir sayfa ayarıdır, bu yüzden hiçbir şey yeniden çizilmez.",
      },
      {
        title: "Gizli",
        description: "PDF cihazınızda döndürülür ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Döndürme kalıcı olarak kaydedilir mi?",
        answer: "Evet. İndirilen PDF her PDF okuyucuda sayfalar döndürülmüş olarak açılır.",
      },
      {
        question: "Sayfaları farklı açılarla döndürebilir miyim?",
        answer: "Her sayfanın kendi döndürme düğmesi olan PDF Sayfa Düzenleme aracını kullanın.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "add-page-numbers-pdf": {
    name: "PDF'e Sayfa Numarası Ekleme",
    shortName: "Sayfa Numarası",
    tagline: "Bir PDF'in sayfalarını seçtiğiniz konum, biçim ve başlangıç numarasıyla numaralandırın. Cihazınızda çalışır.",
    intro:
      "PDF'e Sayfa Numarası Ekleme, bir PDF'in her sayfasına numara koyar; raporlar, tezler ve basılı ders notları buna sık sık ihtiyaç duyar. Üstte veya altta altı konumdan birini, bir biçimi (1, 1 / N veya – 1 –), başlangıç numarasını, yazı boyutunu ve kenardan uzaklığı seçin. Kapak gibi ilk sayfayı numarasız da bırakabilirsiniz. Bir önizleme, numaranın nasıl görüneceğini gösterir. Numaralar tarayıcınızda eklenir, bu yüzden belge asla yüklenmez.",
    seoTitle: "PDF'e Sayfa Numarası Ekleme – Ücretsiz",
    seoDescription:
      "PDF sayfa numaralandırma tarayıcıda: konumu, biçimi ve başlangıç numarasını seçin, kapak sayfasını atlayın. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf sayfa numarası ekleme",
      "pdf sayfa numaralandırma",
      "pdf'e sayfa numarası koyma",
      "pdf numara ekleme",
      "pdf sayfalarını numaralandırma",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Numaralandırılacak PDF'i bırakın veya seçin.",
      },
      {
        title: "Stili seçin",
        description: "Konumu, biçimi, başlangıç numarasını, boyutu ve kenardan uzaklığı belirleyin.",
      },
      {
        title: "Gerekirse kapağı atlayın",
        description: "İlk sayfayı numarasız bırakmak için seçeneği işaretleyin.",
      },
      {
        title: "İndirin",
        description: "Numaralandırılmış PDF'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Altı konum",
        description: "Üstte veya altta; solda, ortada veya sağda.",
      },
      {
        title: "Üç biçim",
        description: "Düz numaralar, “1 / 12” stili veya “– 1 –”.",
      },
      {
        title: "İstediğiniz başlangıç numarası",
        description: "Numaralandırmaya başka bir belgeden devam edin ve kapak sayfasını atlayın.",
      },
      {
        title: "Gizli",
        description: "Numaralar cihazınızda eklenir; hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "1 dışında bir numaradan başlayabilir miyim?",
        answer:
          "Evet. Başlangıç numarası alanına istediğiniz sayıyı girin; örneğin önceki bir bölümden devam etmek için.",
      },
      {
        question: "Numaralar içeriğimin üstünü kapatır mı?",
        answer:
          "Numaralar sayfa kenar boşluğuna yerleştirilir. Sayfalarınızın kenar boşlukları çok darsa kenardan daha kısa bir uzaklık veya daha küçük bir yazı boyutu seçin.",
      },
      {
        question: "Bazı sayfalarda numaralar neden yan duruyor?",
        answer:
          "Bazı PDF'ler sayfaları döndürülmüş olarak saklar. Numara, sayfanın saklanan yönünü izler, bu yüzden bu sayfalarda dönük görünebilir. Önce PDF Döndürme veya PDF Sayfa Düzenleme ile döndürmeyi düzeltin.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "watermark-pdf": {
    name: "PDF'e Filigran Ekleme",
    shortName: "PDF Filigran",
    tagline: "PDF sayfalarına metin veya logo damgası ekleyin, ardından sürükleyerek yerleştirin. Cihazınızda çalışır.",
    intro:
      "PDF'e Filigran Ekleme, bir PDF'in sayfalarına GİZLİ, TASLAK, adınız veya logonuz gibi bir damga ekler. Metni herhangi bir dilde yazın veya bir logo resmi seçin; ardından boyutunu, opaklığını ve açısını ayarlayıp sayfa önizlemesinde istediğiniz yere sürükleyin ya da konum kaydırıcılarını kullanın. Filigranı tüm sayfalara veya bir sayfa aralığına uygulayın. Filigran tarayıcınızda eklenir, bu yüzden belge asla yüklenmez.",
    seoTitle: "PDF'e Filigran Ekleme – Metin veya Logo, Ücretsiz",
    seoDescription:
      "PDF filigran ekleme tarayıcıda: metin veya logo filigranı ekleyin; boyutu, opaklığı ve açıyı ayarlayıp sürükleyerek yerleştirin. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf filigran ekleme",
      "pdf'e filigran ekleme",
      "pdf filigran",
      "pdf damga ekleme",
      "pdf'e logo ekleme",
      "online pdf filigran ekleme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Damgalanacak PDF'i bırakın veya seçin.",
      },
      {
        title: "Filigranı oluşturun",
        description: "Metni yazıp rengini seçin ya da bir logo resmi seçin.",
      },
      {
        title: "Yerleştirin",
        description:
          "Boyutu, opaklığı ve açıyı ayarlayın, ardından önizlemede sürükleyin veya kaydırıcıları kullanın.",
      },
      {
        title: "İndirin",
        description: "Tüm sayfaları veya bir aralığı seçin ve filigranlı PDF'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Her dilde metin",
        description: "Metin resim olarak çizilir, bu yüzden her alfabe ve aksan doğru görünür.",
      },
      {
        title: "Logo filigranları",
        description: "PNG, JPG, WebP veya SVG logo kullanın.",
      },
      {
        title: "Sürükleyerek yerleştirin",
        description: "Filigranı sayfa önizlemesinde taşıyın veya klavyeyle de çalışan kaydırıcıları kullanın.",
      },
      {
        title: "Gizli",
        description: "Filigran cihazınızda eklenir; hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Filigran daha sonra kaldırılabilir mi?",
        answer:
          "Filigran, sayfanın üzerine bir resim olarak eklenir. PDF düzenleyicisi olan biri yine de kaldırabilir; yani filigran kopyalamayı engellemekten çok caydırır.",
      },
      {
        question: "Yalnızca bazı sayfalara filigran ekleyebilir miyim?",
        answer: "Evet. Sayfalar seçeneğini seçin ve 1-3, 5 gibi bir aralık girin.",
      },
      {
        question: "Filigran metni kapatır mı?",
        answer:
          "Sayfanın okunabilir kalması için opaklığı düşürün. Çapraz filigranlar için genellikle %15–30 kullanılır.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "sign-pdf": {
    name: "PDF İmzalama",
    shortName: "PDF İmzala",
    tagline: "İmzanızı çizin, yazın veya bir resmini kullanın ve bir PDF'in herhangi bir sayfasına yerleştirin. Cihazınızda çalışır.",
    intro:
      "PDF İmzalama, el yazısı imzanızı yazdırıp taramaya gerek kalmadan bir belgeye ekler. İmzayı fare, parmak veya kalemle çizin, adınızı yazın ya da imzanızın bir fotoğrafını kullanın; fotoğrafın beyaz arka planı saydam yapılabilir. Ardından sayfayı seçin, boyutu ayarlayın ve imzayı sürükleyerek yerleştirin ya da konum kaydırıcılarını kullanın. İmza tarayıcınızda eklenir, bu yüzden belge de imzanız da asla yüklenmez.",
    seoTitle: "PDF İmzalama Online – Ücretsiz, Yükleme Yok",
    seoDescription:
      "PDF imzalama tarayıcıda: imzanızı çizin, yazın veya bir resmini kullanın ve herhangi bir sayfaya yerleştirin. Ücretsiz, gizli ve hiçbir şey yüklenmez.",
    keywords: [
      "pdf imzalama",
      "online pdf imzalama ücretsiz",
      "pdf'e imza ekleme",
      "pdf e-imza",
      "pdf'e imza çizme",
      "elektronik imza pdf",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "İmzalanacak belgeyi bırakın veya seçin.",
      },
      {
        title: "İmzanızı oluşturun",
        description: "Çizin, adınızı yazın veya imzanızın bir fotoğrafını seçin.",
      },
      {
        title: "Yerleştirin",
        description:
          "Sayfayı seçin, boyutu ayarlayın ve imzayı olması gereken yere sürükleyin ya da kaydırıcıları kullanın.",
      },
      {
        title: "İndirin",
        description: "İmzalı PDF'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Üç imzalama yolu",
        description: "Mavi veya siyah mürekkeple çizin, yazın ya da resim kullanın.",
      },
      {
        title: "Fotoğraflardan temiz imzalar",
        description: "İmza fotoğrafındaki kâğıt arka planı saydam yapılabilir.",
      },
      {
        title: "Hassas yerleştirme",
        description: "Önizlemede sürükleyin veya klavyeyle de çalışan kaydırıcıları kullanın.",
      },
      {
        title: "Gizli",
        description: "Belgeniz ve imzanız cihazınızda kalır.",
      },
    ],
    faqs: [
      {
        question: "Bu yasal olarak bağlayıcı bir dijital imza mı?",
        answer:
          "Araç, kâğıda imza atar gibi imzanızın bir resmini ekler. Sertifikaya dayalı, onaylı bir dijital imza değildir. Birçok günlük form bunu kabul eder, ancak onaylı elektronik imza gerektiren sözleşmeler için özel bir imza hizmeti gerekir.",
      },
      {
        question: "Birden fazla sayfayı imzalayabilir miyim?",
        answer:
          "Bir sayfayı imzalayıp indirin, sonra imzalı PDF'i yeniden açın ve imzayı sonraki sayfaya yerleştirin.",
      },
      {
        question: "İmzam bir yere kaydediliyor mu?",
        answer:
          "Hayır. İmzanız yalnızca sayfa açıkken tarayıcınızda ve indirdiğiniz PDF'in içinde bulunur.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "fill-pdf-form": {
    name: "PDF Form Doldurma",
    shortName: "Form Doldur",
    tagline: "Bir PDF formunun alanlarını doldurun ve isterseniz kilitleyerek kaydedin. Cihazınızda çalışır.",
    intro:
      "PDF Form Doldurma, bir PDF formundaki metin kutuları, onay kutuları ve açılır listeler gibi doldurulabilir alanları bulur ve her birini adıyla göstererek hızlıca doldurmanızı sağlar. Doldurulmuş PDF'i indirin ya da yanıtların sayfanın bir parçası olması ve artık değiştirilememesi için formu düzleştirin. Başvuru formları, vergi formları ve kayıt belgeleri için kullanışlıdır. Form tarayıcınızda doldurulur, bu yüzden kişisel bilgileriniz asla yüklenmez.",
    seoTitle: "PDF Form Doldurma Online – Ücretsiz ve Gizli",
    seoDescription:
      "PDF form doldurma tarayıcıda: doldurulabilir formlardaki metin alanları, onay kutuları ve listeler. Yanıtları kilitlemek için düzleştirin. Ücretsiz, yükleme yok.",
    keywords: [
      "pdf form doldurma",
      "pdf doldurma",
      "online pdf doldurma",
      "doldurulabilir pdf",
      "pdf form doldurucu",
    ],
    howToSteps: [
      {
        title: "PDF formunuzu ekleyin",
        description: "Doldurulabilir alanları olan bir PDF bırakın veya seçin.",
      },
      {
        title: "Alanları doldurun",
        description: "Metin alanlarına yazın, onay kutularını işaretleyin ve listelerden seçim yapın.",
      },
      {
        title: "Gerekirse kilitleyin",
        description: "Yanıtları sayfanın bir parçası yapmak için Formu düzleştir seçeneğini işaretleyin.",
      },
      {
        title: "İndirin",
        description: "Doldurulmuş formu kaydedin.",
      },
    ],
    features: [
      {
        title: "Tüm yaygın alanlar",
        description: "Metin kutuları, çok satırlı metin, onay kutuları, radyo düğmeleri ve açılır listeler.",
      },
      {
        title: "Düzleştirme seçeneği",
        description: "Formun sonradan düzenlenememesi için yanıtları kilitleyin.",
      },
      {
        title: "Erişilebilir alanlar",
        description: "Her alan, klavye ve ekran okuyucularla çalışan normal, etiketli bir giriş alanıdır.",
      },
      {
        title: "Gizli",
        description: "Yanıtlarınız cihazınızda kalır; hiçbir şey yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "PDF'imde neden doldurulabilir alan olmadığı yazıyor?",
        answer:
          "Bazı formlar gerçek form alanları olmayan basılı sayfalardır, bazıları da bu aracın okuyamadığı eski bir biçimi (XFA) kullanır. Alanı olmayan formlar için PDF İmzalama ile bir imza ekleyin veya yazdırıp elle doldurun.",
      },
      {
        question: "Formu düzleştirmek ne işe yarar?",
        answer:
          "Yanıtları sıradan sayfa içeriğine dönüştürür. Form aynı görünür, ancak artık kimse yanıtları veya alanları değiştiremez.",
      },
      {
        question: "İmza alanları destekleniyor mu?",
        answer: "İmza ve düğme alanları atlanır. İmzanızı sayfaya yerleştirmek için PDF İmzalama aracını kullanın.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "remove-pdf-metadata": {
    name: "PDF Meta Verisi Silme",
    shortName: "PDF Meta Verisi",
    tagline: "Bir PDF'te gizli duran yazar, başlık, yazılım ve tarih bilgilerini görün ve kaldırın. Cihazınızda çalışır.",
    intro:
      "PDF dosyaları çoğu zaman gizli ayrıntılar taşır: yazarın adı, belgenin başlığı, onu oluşturan yazılım ve ne zaman oluşturulup değiştirildiği. PDF Meta Verisi Silme, dosyanızda nelerin saklandığını gösterir ve bu bilgiler olmadan bir kopya indirir; bu, bir belgeyi herkese açık paylaşmadan veya bir özgeçmiş göndermeden önce işe yarar. Sayfaların kendisi değişmez. Her şey tarayıcınızda gerçekleşir, bu yüzden belge cihazınızdan hiç çıkmaz.",
    seoTitle: "PDF Meta Verisi Silme – Görün ve Silin, Ücretsiz",
    seoDescription:
      "PDF meta verisi silme tarayıcıda: bir PDF'te gizli duran yazar, başlık, yazılım ve tarih bilgilerini görün ve kaldırın. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf meta verisi silme",
      "pdf metadata silme",
      "pdf yazar bilgisi silme",
      "pdf meta veri temizleme",
      "pdf meta verisini görme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "İçinde saklanan bilgileri görmek için bir PDF bırakın veya seçin.",
      },
      {
        title: "Bulunanları inceleyin",
        description: "Liste başlığı, yazarı, yazılımı, tarihleri ve XMP meta verilerini gösterir.",
      },
      {
        title: "Temiz kopyayı indirin",
        description: "Bu bilgilerin kaldırıldığı bir kopya kaydedin.",
      },
    ],
    features: [
      {
        title: "Kaldırmadan önce görün",
        description: "Saklanan her ayrıntı değeriyle birlikte listelenir.",
      },
      {
        title: "Belge bilgileri ve XMP",
        description: "PDF'lerin meta veri sakladığı her iki yer de temizlenir.",
      },
      {
        title: "Sayfalara dokunulmaz",
        description: "Metin, resimler ve düzen tamamen aynı kalır.",
      },
      {
        title: "Gizli",
        description: "PDF cihazınızda temizlenir ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Tam olarak ne kaldırılıyor?",
        answer:
          "Belge bilgileri (başlık, yazar, konu, anahtar kelimeler, oluşturan yazılım, üretici ve tarihler) ve XMP meta veri akışı.",
      },
      {
        question: "PDF'teki tüm kişisel bilgileri kaldırır mı?",
        answer:
          "Hayır. Sayfalardaki metin, yorumlar ve gömülü resimlerin içindeki ayrıntılar (fotoğraf EXIF verileri gibi) değişmez. Paylaşmadan önce içeriğin kendisini kontrol edin.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "crop-pdf": {
    name: "PDF Kırpma",
    shortName: "PDF Kırp",
    tagline: "Bir PDF'teki her sayfanın kenar boşluklarını kırpın. Cihazınızda çalışır.",
    intro:
      "PDF Kırpma, her sayfanın kenarlarını kırparak geniş beyaz kenar boşluklarını, tarama kenarlıklarını veya baskı işaretlerini kaldırır; böylece telefonda okurken içerik ekranı doldurur. Üstten, sağdan, alttan ve soldan ne kadar kırpılacağını ayarlayın; önizleme sayfanın hangi kısmının kalacağını gösterir. Kırpma bir sayfa ayarı olarak saklanır, bu yüzden metin tam kalitesini korur. Her şey tarayıcınızda gerçekleşir, bu yüzden belge asla yüklenmez.",
    seoTitle: "PDF Kırpma Online – Kenar Boşluklarını Kırpın, Ücretsiz",
    seoDescription:
      "PDF kırpma tarayıcıda: sayfa kenar boşluklarını canlı önizlemeyle kırpın, beyaz kenarları ve tarama kenarlıklarını kaldırın. Ücretsiz, gizli, yükleme yok.",
    keywords: [
      "pdf kırpma",
      "pdf sayfa kırpma",
      "pdf kenar boşluğu kırpma",
      "pdf kenar boşluklarını kaldırma",
      "pdf sayfası kesme",
    ],
    howToSteps: [
      {
        title: "PDF'inizi ekleyin",
        description: "Kırpılacak PDF'i bırakın veya seçin.",
      },
      {
        title: "Kenar boşluklarını ayarlayın",
        description: "Her kenar için kaydırıcıları kullanın; önizleme neyin kalacağını gösterir.",
      },
      {
        title: "İndirin",
        description: "Tüm sayfaları kırpılmış PDF'i kaydedin.",
      },
    ],
    features: [
      {
        title: "Dört kenar kontrolü",
        description: "Üstü, sağı, altı ve solu ayrı ayrı kırpın.",
      },
      {
        title: "Canlı önizleme",
        description: "Kırpılan alan ilk sayfada gölgeli gösterilir.",
      },
      {
        title: "Kalite kaybı yok",
        description: "Sayfalar yeniden çizilmez, bu yüzden metin keskin ve aranabilir kalır.",
      },
      {
        title: "Gizli",
        description: "PDF cihazınızda kırpılır ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "Kırpma dosyayı küçültür mü?",
        answer:
          "Hayır. Kırpılan alan silinmez, gizlenir; bu yüzden dosya boyutu hemen hemen aynı kalır. Bir PDF düzenleyici gizli alanı yine de gösterebilir.",
      },
      {
        question: "Sayfaları farklı şekilde kırpabilir miyim?",
        answer:
          "Aynı kenar boşlukları her sayfaya uygulanır. Sayfaları farklı kırpmak için PDF'i bölün, her parçayı kırpın ve sonra yeniden birleştirin.",
      },
      {
        question: "Parola korumalı bir PDF kullanabilir miyim?",
        answer:
          "Henüz değil. Bir PDF'i açmak için parola gerekiyorsa araç bunu size bildirir. PDF'i parolayla bir PDF okuyucuda açın, parolasız bir kopyasını kaydedin ve o kopyayı kullanın.",
      },
      {
        question: "PDF'im yükleniyor mu?",
        answer:
          "Hayır. PDF cihazınızda tarayıcınız tarafından açılır ve değiştirilir, bu yüzden sözleşmeler, hesap özetleri ve diğer özel belgeler cihazınızdan hiç çıkmaz.",
      },
    ],
  },
  "passport-photo-maker": {
    name: "Vesikalık Fotoğraf Oluşturucu",
    shortName: "Vesikalık Fotoğraf",
    tagline: "Doğru boyutta, isteğe bağlı düz arka planlı bir pasaport veya vize fotoğrafı oluşturun ve tek sayfaya birkaç tane basın.",
    intro:
      "Vesikalık Fotoğraf Oluşturucu, sıradan bir fotoğrafı tam ihtiyacınız olan boyutta pasaport, vize veya kimlik fotoğrafına dönüştürür: 35 × 45 mm, 2 × 2 inç, 33 × 48 mm ya da özel bir boyut. Başın üstü ve çene kılavuz çizgilerine oturana kadar fotoğrafı taşıyıp yakınlaştırın, gerekirse arka planı düz beyaz, açık gri veya açık mavi ile değiştirin; ardından 300 DPI'da tek bir fotoğraf ya da 4 × 6 inç fotoğraf kâğıdı veya A4 için kesim çizgili bir baskı sayfası indirin. Her şey tarayıcınızda gerçekleşir, bu yüzden fotoğrafınız asla yüklenmez.",
    seoTitle: "Vesikalık Fotoğraf Yapma – 35×45 mm, 2×2 in, Ücretsiz",
    seoDescription:
      "Vesikalık fotoğraf ve pasaport fotoğrafı yapın: 35×45 mm, 2×2 in veya özel boyut, beyaz arka plan, 4×6 ya da A4 baskı sayfası. Ücretsiz ve gizli.",
    keywords: [
      "vesikalık fotoğraf",
      "vesikalık fotoğraf yapma",
      "pasaport fotoğrafı",
      "biyometrik fotoğraf",
      "35x45 fotoğraf",
      "vize fotoğrafı",
    ],
    howToSteps: [
      {
        title: "Fotoğraf ekleyin",
        description: "Eşit ışıklı, önden çekilmiş, nötr ifadeli net bir fotoğraf seçin.",
      },
      {
        title: "Boyutu seçin",
        description: "35 × 45 mm, 2 × 2 in veya 33 × 48 mm seçin ya da özel bir boyut girin.",
      },
      {
        title: "Hizalayın",
        description: "Başın üstü ve çene kesikli çizgilere oturacak şekilde sürükleyin veya kaydırıcıları kullanın.",
      },
      {
        title: "Arka planı ayarlayın",
        description: "Koru seçeneğiyle olduğu gibi bırakın ya da Beyaz, Açık gri veya Açık mavi ile değiştirin.",
      },
      {
        title: "İndirin",
        description: "Tek fotoğraf ya da 4 × 6 in kâğıt veya A4 için bir Baskı sayfası seçip JPG veya PDF olarak kaydedin.",
      },
    ],
    features: [
      {
        title: "Yaygın boyutlar hazır",
        description: "35 × 45 mm, 2 × 2 in ve 33 × 48 mm; ayrıca milimetre cinsinden istediğiniz özel boyut.",
      },
      {
        title: "Baş kılavuzları",
        description: "Kesikli çizgiler ve bir oval, başın nerede durması gerektiğini gösterir.",
      },
      {
        title: "Düz arka planlar",
        description: "Cihazınızdaki bir yapay zekâ modeli arka planı beyaz, açık gri veya açık mavi ile değiştirir.",
      },
      {
        title: "Baskı sayfaları",
        description: "4 × 6 in fotoğraf kâğıdını veya A4 sayfayı 300 DPI'da kopyalar ve kesim çizgileriyle doldurun.",
      },
    ],
    faqs: [
      {
        question: "Fotoğrafım kabul edilir mi?",
        answer:
          "Bu, başvurduğunuz kuruma bağlıdır. Her ülke boyut, baş konumu, arka plan, yüz ifadesi ve gözlük için kendi kurallarını belirler. Bu araç boyutu ve yerleşimi doğru ayarlar; yazdırmadan önce resmî kuralları kontrol edin.",
      },
      {
        question: "Sayfayı doğru boyutta nasıl yazdırırım?",
        answer:
          "“Sayfaya sığdır” ile değil, %100 (gerçek boyut) ile yazdırın. PDF seçeneği tam kâğıt boyutunu kullanır, bu yüzden fotoğraflar her yazıcıda gerçek boyutlarında basılır.",
      },
      {
        question: "Fotoğrafların çözünürlüğü nedir?",
        answer:
          "Fotoğraf baskısı için standart olan 300 DPI. 35 × 45 mm boyutundaki bir fotoğraf 413 × 531 pikseldir.",
      },
      {
        question: "Arka plan değiştirme nasıl çalışır?",
        answer:
          "Bir yapay zekâ modeli bir kez indirilir (yaklaşık 33 MB) ve sizi arka plandan ayırmak için tarayıcınızda çalışır. Yazdırmadan önce saçların çevresindeki kenarları kontrol edin.",
      },
      {
        question: "Fotoğrafım yükleniyor mu?",
        answer:
          "Hayır. Fotoğraf cihazınızda, tarayıcınızda işlenir ve hiçbir şey bir sunucuya gönderilmez.",
      },
    ],
  },
  "signature-extractor": {
    name: "İmza Çıkarıcı",
    shortName: "İmza PNG",
    tagline: "İmzanızın fotoğrafını saydam arka planlı, temiz bir PNG'ye dönüştürün.",
    intro:
      "İmza Çıkarıcı, kâğıt üzerindeki imzanızın fotoğrafını veya taramasını alır ve saydam arka plan üzerinde yalnızca mürekkepten oluşan temiz bir görüntüye dönüştürür. Telefon fotoğraflarındaki gölgeleri ve düzensiz ışığı yok sayar, imzanın etrafındaki boş alanı kırpar ve mürekkebi siyah veya mavi olarak yeniden renklendirebilir. PNG'yi PDF İmzalama aracında, Word'de veya imza resmi isteyen herhangi bir formda kullanın. Fotoğraf tarayıcınızda işlenir, bu yüzden imzanız asla yüklenmez.",
    seoTitle: "İmza Çıkarma – Saydam Arka Planlı İmza PNG",
    seoDescription:
      "İmza arka planı kaldırma: imza fotoğrafınızı tarayıcınızda saydam bir PNG'ye dönüştürün. Kâğıdı ve gölgeleri kaldırır, kırpar, renklendirir. Ücretsiz ve gizli.",
    keywords: [
      "imza arka planı kaldırma",
      "saydam imza",
      "imza png",
      "resimden imza çıkarma",
      "fotoğraftan dijital imza",
    ],
    howToSteps: [
      {
        title: "Beyaz kâğıda imza atın",
        description: "Koyu renkli bir kalem kullanın ve iyi ışıkta fotoğraf çekin ya da sayfayı tarayın.",
      },
      {
        title: "Fotoğrafı ekleyin",
        description: "Fotoğrafı bırakın veya seçin. İmza hemen çıkarılır.",
      },
      {
        title: "İnce ayar yapın",
        description: "Hassasiyeti ayarlayın ve orijinal, siyah veya mavi mürekkebi seçin.",
      },
      {
        title: "İndirin",
        description: "Saydam PNG'yi kaydedin.",
      },
    ],
    features: [
      {
        title: "Gölgelerle başa çıkar",
        description: "Her nokta çevresindeki kâğıtla karşılaştırılır, böylece düzensiz ışık gri lekeler bırakmaz.",
      },
      {
        title: "Yumuşak kenarlar",
        description: "Çizgi kenarları tırtıklı görünmek yerine yumuşakça solar.",
      },
      {
        title: "Otomatik kırpma",
        description: "İmzanın etrafındaki boş kâğıt kırpılır.",
      },
      {
        title: "Gizli",
        description: "İmzanız cihazınızda kalır.",
      },
    ],
    faqs: [
      {
        question: "En iyi sonucu nasıl alırım?",
        answer:
          "Düz beyaz kâğıda koyu renkli bir kalemle imza atın ve fotoğrafı gün ışığında, tam karşıdan, gölgeniz sayfaya düşmeden çekin.",
      },
      {
        question: "İmzamın bazı kısımları neden eksik?",
        answer:
          "Soluk veya ince çizgiler kaybolabilir. Hassasiyeti artırın; kâğıt dokusu görünmeye başlarsa biraz azaltın.",
      },
      {
        question: "PDF imzalamak için kullanabilir miyim?",
        answer:
          "Evet. PDF İmzalama aracında Resim seçeneğini belirleyin ve indirdiğiniz PNG'yi seçin.",
      },
      {
        question: "İmzam yükleniyor mu?",
        answer:
          "Hayır. Tarayıcınızda işlenir ve hiçbir yere gönderilmez.",
      },
    ],
  },
  "change-image-dpi": {
    name: "Resim DPI Değiştirme",
    shortName: "DPI Değiştir",
    tagline: "Bir JPG veya PNG'nin DPI değerini, örneğin baskı ya da formlar için 300 DPI olarak, piksellerini değiştirmeden ayarlayın.",
    intro:
      "Resim DPI Değiştirme, bir JPG veya PNG dosyasında saklanan çözünürlük değerini ayarlar; örneğin baskı için 300 DPI ya da bir başvuru formunun istediği değer. Piksellere dokunulmaz, bu yüzden kalite ve dosya boyutu aynı kalır: yalnızca baskı boyutu değişir ve araç bunu santimetre ve inç olarak gösterir. Bir JPG'nin DPI saklayabildiği iki yeri de güncelleyerek Windows, Mac ve fotoğraf uygulamalarının yeni değeri okumasını sağlar. Her şey tarayıcınızda çalışır, bu yüzden resim asla yüklenmez.",
    seoTitle: "DPI Değiştirme – Resmi 300 DPI Yapın, Ücretsiz",
    seoDescription:
      "DPI değiştirme: JPG veya PNG'yi tarayıcınızda 300, 200, 72 ya da başka bir DPI değerine ayarlayın. Pikseller değişmez; baskı boyutunu görün. Ücretsiz ve gizli.",
    keywords: [
      "dpi değiştirme",
      "resim dpi değiştirme",
      "fotoğraf dpi değiştirme",
      "300 dpi yapma",
      "dpi artırma",
      "dpi ayarlama",
    ],
    howToSteps: [
      {
        title: "Resminizi ekleyin",
        description: "Bir JPG veya PNG bırakın ya da seçin. WebP ve HEIC önce JPG'ye dönüştürülür.",
      },
      {
        title: "DPI değerini seçin",
        description: "72, 96, 150, 200, 300 veya 600 seçin ya da herhangi bir değer yazın.",
      },
      {
        title: "Baskı boyutunu kontrol edin",
        description: "Resmin bu DPI değerinde ne kadar büyük basılacağını görün.",
      },
      {
        title: "İndirin",
        description: "Resmi yeni DPI değeriyle kaydedin.",
      },
    ],
    features: [
      {
        title: "Kalite kaybı yok",
        description: "Yalnızca DPI değeri değişir; görüntü verilerine dokunulmaz.",
      },
      {
        title: "Her yerde okunur",
        description: "Bir JPG'nin hem JFIF hem de EXIF çözünürlüğü güncellenir, böylece her uygulama aynı DPI değerini gösterir.",
      },
      {
        title: "Baskı boyutu gösterilir",
        description: "İndirmeden önce baskı boyutunu santimetre ve inç olarak görün.",
      },
      {
        title: "Gizli",
        description: "Resim tarayıcınızda değiştirilir ve asla yüklenmez.",
      },
    ],
    faqs: [
      {
        question: "DPI değiştirmek kaliteyi artırır mı?",
        answer:
          "Hayır. DPI yalnızca yazıcılara resmin ne kadar büyük basılacağını söyleyen bir etikettir. Daha fazla ayrıntı için daha fazla piksel gerekir ve hiçbir araç bunları gerçekten oluşturamaz.",
      },
      {
        question: "Bir form 200 DPI ve santimetre cinsinden bir boyut istiyor. Ne yapmalıyım?",
        answer:
          "DPI değerini burada ayarlayın, ardından baskı boyutunu kontrol edin. Uymuyorsa resmi, formun istediği piksel boyutuna getirin: santimetre ÷ 2,54 × DPI. Örneğin 200 DPI'da 3,5 cm, 276 piksel eder.",
      },
      {
        question: "Resmim neden “Ayarlanmamış” diyor?",
        answer:
          "Birçok telefon fotoğrafı ve ekran görüntüsü DPI değeri saklamaz. Çoğu uygulama bu durumda 72 veya 96 varsayar. Burada bir değer ayarlamak bunu düzeltir.",
      },
      {
        question: "Resmim yükleniyor mu?",
        answer:
          "Hayır. Değişiklik cihazınızda, tarayıcınızda gerçekleşir.",
      },
    ],
  },
};
