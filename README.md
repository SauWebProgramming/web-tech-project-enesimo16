Kişisel SPA Portfolyo Projesi

Selamlar! Ben Enes Yel. Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği öğrencisiyim. Bu projeyi, "Web Teknolojileri" dersi kapsamında öğrendiklerimi pratiğe dökmek ve modern web geliştirme becerilerimi sergilemek için hazırladım.

Amacım sadece çalışan bir site yapmak değil; hazır kütüphanelere (React, Vue vb.) kaçmadan, işin mutfağını öğrenerek Single Page Application (SPA) mimarisini sıfırdan kurmaktı. Proje, sadece statik bir CV değil, kullanıcıyla etkileşime giren, yaşayan bir web uygulamasıdır.

Canlı Demo: https://sauwebprogramming.github.io/web-tech-project-enesimo16/

Projenin Amacı ve Hikayesi

Bu projeye başlarken kendime şu hedefi koydum: "Herhangi bir framework kullanmadan, sadece JavaScript'in gücüyle modern, hızlı ve uygulama hissi veren bir site yapabilir miyim?"

Sonuç olarak; sayfa yenilenmeden gezilebilen, verilerini dinamik çeken ve telefona uygulama gibi kurulabilen bu portfolyo ortaya çıktı. Hem tasarım hem de kodlama aşamalarında temiz, sürdürülebilir ve modüler bir yapı kurmaya özen gösterdim.

Proje İsterleri ve Karşılanma Durumu

Aşağıdaki tablo, proje ödevinde belirtilen zorunlu gereksinimlerin projede nasıl ve hangi tekniklerle karşılandığını özetlemektedir.

Zorunlu İster (Kriter)

Projedeki Uygulama / Karşılığı

Durum

Single Page Application (SPA)

js/app.js içerisindeki özel Router yapısı ile sayfa yenilenmeden içerik yönetimi sağlanmıştır.

Tamamlandı

Fetch API Kullanımı

Projeler projects.json dosyasından, hava durumu verisi ise Open-Meteo API'den fetch ile asenkron çekilmektedir.

Tamamlandı

LocalStorage Kullanımı

Tema tercihi (Karanlık/Aydınlık), dil seçimi (TR/EN), ses ayarları ve not defteri verileri tarayıcı hafızasında saklanmaktadır.

Tamamlandı

Responsive Tasarım

Mobil uyumlu Grid yapısı, esnek görseller ve özel Hamburger Menü ile tüm cihazlarda uyumlu görünüm sağlanmıştır.

Tamamlandı

Form Validasyonu

İletişim formunda JavaScript (Regex) ile e-posta ve boş alan kontrolü yapılmaktadır.

Tamamlandı

Harici API Entegrasyonu

Footer bölümünde Open-Meteo API kullanılarak canlı hava durumu ve saat verisi gösterilmektedir.

Tamamlandı

Modüler Kod Yapısı

JavaScript ve CSS kodları, işlevlerine göre ayrı dosyalara (utils.js, projects.js, layout.css vb.) bölünmüştür.

Tamamlandı

Semantic HTML

<header>, <nav>, <main>, <article>, <footer> gibi anlamsal etiketler kullanılmıştır.

Tamamlandı

Öne Çıkan Özellikler ve Bonuslar

Bu proje, standart ödev gereksinimlerinin ötesine geçerek, aşağıdaki ileri seviye özellikleri ve Bonus niteliğindeki geliştirmeleri içerir:

Bonus Özellikler (Advanced Features)

PWA (Progressive Web App):

manifest.json ve pwa-sw.js (Service Worker) entegrasyonu sayesinde site, mobil ve masaüstü cihazlara yerel bir uygulama gibi kurulabilir.

Çevrimdışı (offline) durumda bile temel sayfalar önbellekten (cache) çalışmaya devam eder.

Terminal (CLI) Modu:

Site içinde çalışan interaktif bir hacker terminali! (Sol alttaki _> butonu ile açılır).

Ziyaretçiler help, whoami, projects ve gizli bonus komutuyla siteyi gezebilir.

Canlı Hava Durumu API:

Footer kısmında Open-Meteo API kullanılarak çekilen anlık hava durumu ve saat verisi.

Bu özellik, sadece statik JSON verisi değil, Harici API kullanımını da kanıtlar.

Canvas İnteraktif Arka Plan:

HTML5 Canvas ile çizilen, fare hareketine duyarlı ve birbirine bağlanan "Network Ağı" efekti.

3D Tilt Efekti:

Proje kartlarının üzerine gelindiğinde fareye doğru 3 boyutlu eğilmesi (Parallax etkisi).

Konami Code (Easter Egg):

Klavyeden e-n-e-s yazıldığında ekranda sürpriz konfeti patlaması!

Yazdırma Dostu Tasarım (Print CSS):

CTRL + P yapıldığında site, gereksiz görsellerden ve renklerden arınarak temiz bir CV kağıt formatına dönüşür.

Renk Teması Seçici (Color Switcher):

Kullanıcının site ana rengini (Mor, Yeşil, Turuncu, Mavi) değiştirebilmesi ve bu tercihin localStorage ile saklanması.

Custom Cursor:

Site genelinde fareyi takip eden özel imleç ve hover efektleri (Sadece masaüstünde aktif).

Skeleton Loading:

Veriler yüklenirken (Fetch süresince) kullanıcıya YouTube benzeri modern iskelet yükleme ekranı gösterilmesi.

Toast Bildirimleri:

İşlemler (form gönderimi, tema değişimi vb.) sonucunda sağ üstten gelen modern bildirim balonları.

Ses Efektleri & Cyber Audio:

Buton tıklamaları, bildirimler ve özel "Ses Tüpü" ile etkileşimli ses deneyimi.

Temel Teknik Özellikler (Core Requirements)

SPA Mimarisi: Sayfa yenilenmeden hızlı geçişler sağlayan özel Router yapısı (hash tabanlı yönlendirme).

Dinamik İçerik: Projeler statik HTML değil, projects.json dosyasından Fetch API ile asenkron olarak çekilir.

Çoklu Dil Desteği (TR/EN): Tek tıkla İngilizce/Türkçe geçişi ve tercihin localStorage ile hatırlanması.

Karanlık Mod (Dark/Light Theme): Göz yormayan tema seçenekleri ve tercihin hafızada tutulması.

Scroll Reveal: Sayfa aşağı kaydırıldıkça içeriklerin animasyonlu olarak (Fade-in/Slide-up) yüklenmesi.

Typewriter Efekti: Anasayfada kendini yazıp silen dinamik unvan animasyonu.

Scroll Progress & Back to Top: Sayfanın ne kadarının okunduğunu gösteren üst çubuk ve hızlı yukarı çıkma butonu.

CV İndir & QR Kod: Profesyonel erişim için PDF indirme butonu ve mobil QR kod alanı.

Responsive Tasarım: Mobil uyumlu Grid yapısı ve özel Hamburger Menü ile her ekranda kusursuz görünüm.

Form Validasyonu: JavaScript ve Regex ile güvenli iletişim formu kontrolü.

Teknik Mimari ve Kod Yapısı

Proje, sürdürülebilirlik ve okunabilirlik için modüler bir dosya yapısı üzerine kurulmuştur. Spagetti koddan kaçınılmış, her işlev ayrı bir dosyada yönetilmiştir.

Kullanılan Teknolojiler

Frontend: HTML5, CSS3 (Grid/Flexbox/Animations), JavaScript (ES6+)

Veri: JSON (Yerel Veri Tabanı Simülasyonu)

API: Open-Meteo (Hava Durumu), EmailJS (İletişim Formu)

Araçlar: Git, VS Code, Google Fonts (Inter)

Kütüphaneler: Canvas Confetti (Sadece Easter Egg için minimal kullanım)

Dosya Yapısı ve İşlevleri

portfolio-spa/
│
├── css/                     # TASARIM KATMANI
│   ├── base.css             # Temel ayarlar, reset, Canlı Arkaplan
│   ├── layout.css           # Navbar, Footer ve Mobil Menü
│   ├── components.css       # Kartlar, Butonlar, Modal
│   ├── theme.css            # Dark Mode renkleri ve Perde Efekti
│   ├── animations.css       # Skeleton ve giriş animasyonları
│   ├── terminal.css         # Hacker Terminali tasarımı
│   ├── color-switcher.css   # Renk Seçici Paneli
│   ├── audio.css            # Ses Kontrol Tüpü tasarımı
│   ├── print.css            # Yazdırma (Print) modu ayarları
│   ├── toast.css            # Bildirim baloncukları
│   ├── weather.css          # Hava Durumu Widget stili
│   ├── timeline.css         # Hakkımda sayfasındaki zaman çizelgesi
│   ├── form-validation.css  # Form hata/başarı durumları
│   ├── cursor.css           # Özel fare imleci stili
│   ├── filter.css           # Proje filtreleme butonları
│   ├── cv.css               # CV indirme ve QR alanı
│   └── skill-bars.css       # Yetenek barları doluluk animasyonu
│
├── js/                      # MANTIK KATMANI (MODÜLER)
│   ├── app.js               # Ana Yönetici: Router ve Başlatıcılar
│   ├── projects.js          # Veri Çekme (Fetch), Skeleton, Filtreleme, Modal
│   ├── utils.js             # Yardımcılar (Genel fonksiyonlar)
│   ├── pages.js             # Sayfa İçerikleri (HTML String & Çoklu Dil)
│   ├── terminal.js          # CLI (Terminal) Mantığı
│   ├── weather.js           # Hava Durumu API Entegrasyonu
│   ├── canvas.js            # İnteraktif Arkaplan Çizimi
│   ├── audio.js             # Ses Efektleri ve Cyber Audio Motoru
│   ├── konami.js            # Gizli Özellik (Easter Egg)
│   ├── colors.js            # Renk Teması Değiştirme Mantığı
│   ├── toast.js             # Bildirim Sistemi Motoru
│   ├── typewriter.js        # Yazı Yazma Efekti Sınıfı
│   ├── lang.js              # Dil Değiştirme Mantığı
│   ├── notes.js             # Not Defteri (CRUD) Uygulaması
│   ├── scroll-reveal.js     # Kaydırma Animasyonları
│   ├── filter.js            # Filtreleme Mantığı
│   ├── color-switcher.js    # Renk Seçici Mantığı
│   ├── card-tilted.js       # 3D Kart Eğilme Efekti
│   └── back-to-top.js       # Yukarı Çık Butonu Mantığı
│
├── data/                    # VERİ KAYNAKLARI
│   └── projects.json        # Proje verileri (Başlık, Resim, Açıklama vb.)
│
├── assets/                  # MEDYA
│   ├── img/                 # Görseller ve ikonlar
│   ├── docs/                # CV Dosyası (.pdf)
│   └── sounds/              # Ses efektleri (.mp3)
│
├── index.html               # Ana Giriş Noktası
└── pwa-sw.js                # PWA Service Worker (Çevrimdışı Çalışma)



Geliştirici

Ad Soyad: Enes Yel

Bölüm: Bilişim Sistemleri Mühendisliği

Numara: B23120053

Ders: Web Teknolojileri

Öğretim Üyesi: Dr. Öğr. Üyesi Baran Kaynak

© 2025 - Tüm Hakları Saklıdır.