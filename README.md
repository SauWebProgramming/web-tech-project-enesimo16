# 🚀 Kişisel SPA Portfolyo Projesi

Merhaba! Ben **Enes Yel**, Sakarya Üniversitesi **Bilişim Sistemleri Mühendisliği** öğrencisiyim. Bu proje, **Web Teknolojileri** dersi kapsamında öğrendiklerimi gerçek bir ürün disiplininde uygulamak ve modern web geliştirme yetkinliklerimi sergilemek amacıyla geliştirilmiştir.

Bu çalışma, basit bir statik CV sayfası değildir. Herhangi bir hazır framework (React, Vue vb.) kullanmadan, **Single Page Application (SPA)** mimarisini **sıfırdan** inşa etmeyi hedefleyen; etkileşimli, yaşayan ve genişletilebilir bir web uygulamasıdır.

🔗 **Canlı Demo:** [https://sauwebprogramming.github.io/web-tech-project-enesimo16/](https://sauwebprogramming.github.io/web-tech-project-enesimo16/)

---

## 🎯 Projenin Amacı ve Yaklaşımı

Projeye başlarken kendime net bir hedef koydum:

> *"Sadece saf JavaScript kullanarak, modern, hızlı ve uygulama hissi veren bir SPA geliştirebilir miyim?"*

Bu doğrultuda;

* Sayfa yenilenmeden çalışan bir mimari kuruldu,
* Dinamik veri yönetimi sağlandı,
* Mobil cihazlara **uygulama gibi kurulabilen (PWA)** bir yapı geliştirildi.

Kod kalitesi, sürdürülebilirlik ve modülerlik temel önceliklerim oldu.

---

## ✅ Zorunlu Proje İsterleri – Teknik Karşılıklar

Aşağıda, ödev kapsamında talep edilen tüm zorunlu isterlerin **nasıl** ve **hangi tekniklerle** karşılandığı net ve bozulmaya dayanıklı bir yapı ile sunulmuştur:

### 🔹 SPA Mimarisi

* `js/app.js` içerisinde geliştirilen **özel Router** yapısı
* Hash tabanlı yönlendirme ile **tamamen sayfa yenilemesiz** gezinme

### 🔹 Fetch API Kullanımı

* Proje verileri: `data/projects.json`
* Canlı veriler: **Open-Meteo API** (hava durumu & saat)
* Asenkron veri yönetimi ve loading state kontrolü

### 🔹 LocalStorage Entegrasyonu

* Tema (Dark / Light)
* Dil seçimi (TR / EN)
* Renk teması
* Ses ayarları
* Not defteri (CRUD)

### 🔹 Responsive Tasarım

* CSS Grid & Flexbox tabanlı yapı
* Mobil uyumlu layout
* Özel Hamburger Menü

### 🔹 Form Validasyonu

* JavaScript + Regex ile

  * Boş alan kontrolü
  * E-posta format doğrulaması

### 🔹 Harici API Kullanımı

* Open-Meteo API ile **canlı hava durumu ve saat bilgisi**

### 🔹 Modüler Kodlama

* JavaScript ve CSS dosyaları **işlevlerine göre ayrılmıştır**
* Spagetti koddan kaçınılmıştır

### 🔹 Semantic HTML

* `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` gibi anlamsal etiketler

> ✔️ Tüm zorunlu isterler eksiksiz ve işlevsel biçimde tamamlanmıştır.

---

## ⭐ Öne Çıkan Özellikler ve Bonus Geliştirmeler

Bu proje, standart gereksinimlerin ötesine geçerek ileri seviye ve **bonus** nitelikli birçok özellik içermektedir.

### ⚡ Advanced & Bonus Özellikler

* **PWA (Progressive Web App)**

  * Offline çalışma (Service Worker & Cache)
  * Mobil ve masaüstüne kurulabilir yapı

* **Terminal (CLI) Modu**

  * Site içinde çalışan interaktif terminal
  * `help`, `whoami`, `projects` ve gizli bonus komutlar

* **HTML5 Canvas Arka Plan**

  * Fare hareketine duyarlı, interaktif network efekti

* **3D Tilt & Parallax Efekti**

  * Proje kartlarında fareye duyarlı 3D eğilme

* **Konami Code (Easter Egg)**

  * Klavyeden `e-n-e-s` yazıldığında konfeti animasyonu 🎉

* **Print (Yazdırma) Modu**

  * `CTRL + P` ile sade, profesyonel CV çıktısı

* **Renk Teması Seçici**

  * Ana renk tercihi (Mor, Yeşil, Turuncu, Mavi)
  * LocalStorage ile kalıcı ayar

* **Skeleton Loading**

  * Fetch süresince modern iskelet ekran

* **Toast Bildirimleri**

  * Kullanıcı aksiyonlarına görsel geri bildirim

* **Ses Efektleri & Cyber Audio**

  * Etkileşimli ses deneyimi ve kontrol paneli

---

## 🧩 Temel Teknik Özellikler

* SPA mimarisi (hash-based routing)
* Dinamik içerik yönetimi
* Çoklu dil desteği (TR / EN)
* Dark / Light tema
* Scroll Reveal animasyonları
* Typewriter efektleri
* Scroll progress & Back-to-top
* CV indirme ve QR kod alanı
* Mobil uyumlu tasarım

---

## 🏗️ Teknik Mimari ve Dosya Yapısı

Proje, sürdürülebilir ve okunabilir bir mimari üzerine kurulmuştur.

```portfolio-spa/
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

```

---

## 🛠️ Kullanılan Teknolojiler

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Veri:** JSON
* **API:** Open-Meteo, EmailJS
* **Araçlar:** Git, VS Code
* **Font:** Google Fonts – Inter

---



##  Geliştirici Bilgileri

* **Ad Soyad:** Enes Yel
* **Bölüm:** Bilişim Sistemleri Mühendisliği
* **Numara:** B23120053
* **Ders:** Web Teknolojileri
* **Öğretim Üyesi:** Dr. Öğr. Üyesi Baran Kaynak

---

© 2025 – Tüm Hakları Saklıdır
