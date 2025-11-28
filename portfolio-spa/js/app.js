let currentLang = localStorage.getItem('lang') || 'tr'; // Varsayılan türkçe


document.addEventListener('DOMContentLoaded', () => {
    
    // Dil butonu eventlistener
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.innerText = currentLang.toUpperCase();
        
        langBtn.addEventListener('click', () => {

            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            localStorage.setItem('lang', currentLang);

            langBtn.innerText = currentLang.toUpperCase();

            router();
        });
    }

    // HAMBURGER MENÜ İSTERİ
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Linke tıklayınca menüyü kapatma işlemi
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if(hamburger) hamburger.classList.remove('toggle');
        });
    });

    // SAYFAYI DİNAMİK YAPMA, YÖNLENDİRME
    async function router() {
        const appContainer = document.getElementById('app-container');
        let hash = window.location.hash || '#anasayfa';
        let pageName = hash.slice(1); // Burada # işaretini dikkate almasın diye slice kullandık

        // Sayfa içeriğini belirle (DİL DESTEĞİ EKLENDİ)
        if (pageName === 'projelerim') {
            await loadProjects(); // Aşağıda tanımlanıcak olan loadProjects fonksiyonunu çağırıp projeleri yüklemesi için.
        } else if (pages[currentLang] && pages[currentLang][pageName]) {
            appContainer.innerHTML = pages[currentLang][pageName]; // Bu kısımda projeler ve anasayfa hariç kısımlara da gidilebilir, bu yüzden pages.js'de tanımladığımız kısımlardan almasını sağlıyoruz.
        } else {
            appContainer.innerHTML = pages[currentLang]['anasayfa']; // Varsayılan olarak anasayfayı yapıyoruz.
        }

        window.scrollTo(0, 0); // Sayfa yüklenince dinamik olabilmesi için en üste gitmesi gerek bu yüzden pencereyi en yukarıya kaydırıyoruz.

        if (pageName === 'iletisim') setupContactForm(); // İletişim butonunda iletişim sekmesi kullanımı için.

        setTimeout(initScrollReveal, 100); // Yeni içerik yüklendiğinde Scroll Reveal'ı yeniden başlat.
    }

    // URL değişince router çalışsın
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
});

// BURADA FETCH İLE projects.json DOSYASINI ÇEKİP PROJELERİ YÜKLEYECEĞİZ.
async function loadProjects() {
    const appContainer = document.getElementById('app-container');
    const loadingText = currentLang === 'en' ? 'Projects Loading...' : 'Projeler Yükleniyor...';
    appContainer.innerHTML = `<h2 style="text-align:center;">${loadingText}</h2>`;

    try {
        const response = await fetch('./data/projects.json');
        const projects = await response.json();

        // Buton Metinleri Dile Göre
        const txtAll = currentLang === 'en' ? 'All' : 'Tümü';
        const txtWeb = currentLang === 'en' ? 'Web Projects' : 'Web Projeleri';
        const txtDesktop = currentLang === 'en' ? 'Desktop / Game' : 'Masaüstü / Oyun';
        const txtTitle = currentLang === 'en' ? 'My Projects' : 'Projelerim';
        const txtBtn = currentLang === 'en' ? 'View Details' : 'İncele';

        // 1. Filtre Butonları HTML'i
        let html = `
            <h2>${txtTitle}</h2>
            
            <div class="filter-container">
                <button class="filter-btn active" data-filter="all">${txtAll}</button>
                <button class="filter-btn" data-filter="web">${txtWeb}</button>
                <button class="filter-btn" data-filter="masaustu">${txtDesktop}</button>
            </div>

            <div class="projects-grid">
        `;
        
        // 2. Proje Kartlarını Oluştur (Dile göre içerik seçimi)
        projects.forEach(proj => {
            const title = currentLang === 'en' ? proj.title_en : proj.title;
            const desc = currentLang === 'en' ? proj.description_en : proj.description;

            // Performans için resimlere lazy loading ekledik.
            html += `
                <article class="project-card reveal" data-category="${proj.category}">
                    <img src="${proj.image}" alt="${title}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:1rem;" loading="lazy"> 
                    <h3 style="margin-bottom:0.5rem;">${title}</h3>
                    <p style="color: inherit; opacity: 0.8; margin-bottom:1rem; font-size:0.95rem;">${desc}</p>
                    <a href="${proj.link}" class="btn" style="padding:0.5rem 1.5rem; font-size:0.9rem;">${txtBtn}</a>
                </article>
            `;
        });

        html += '</div>';
        appContainer.innerHTML = html;

        // İçerik geldikten hemen sonra animasyonları başlat
        initScrollReveal(); 

        // Filtreleme Olaylarını Başlat
        setupFilters();

    } catch (err) {
        console.error(err);
        const errorText = currentLang === 'en' ? 'Error loading projects.' : 'Projeler yüklenirken hata oluştu.';
        appContainer.innerHTML = `<h3 style="color:red; text-align:center;">${errorText}</h3>`;
    }
}

// Filtre Butonları İçin Yardımcı Fonksiyon
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block'; // Göster
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none'; // Gizle
                }
            });
        });
    });
}


// PWA SERVICE WORKER KAYDI KISMI
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwa-sw.js')
            .then(reg => console.log('PWA Başarıyla Kaydedildi:', reg.scope))
            .catch(err => console.log('PWA Kayıt Hatası:', err));
    });
}



// --- SCROLL REVEAL (Gözlemci API) ---
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Eğer eleman ekranda görünüyorsa
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Animasyonu başlat
                observer.unobserve(entry.target); // Bir kere çalışsın, sürekli izlemesin (Performans)
            }
        });
    }, {
        threshold: 0.1 // Elemanın %10'u ekrana girince tetikle
    });

    // .reveal sınıfına sahip TÜM elemanları bul ve takibe al
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
}
