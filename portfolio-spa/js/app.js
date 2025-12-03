let currentLang = localStorage.getItem('lang') || 'tr'; // Varsayılan türkçe


document.addEventListener('DOMContentLoaded', () => {

    if(typeof initCustomCursor === 'function') initCustomCursor(); // Direkt en başa koyuyoruz ki diğer js'ler yüklendikten sonra calissin.
    
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



        // Hangi menüde olduğumuzu anlamak için.
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-link')); // sil

        let currentHash = window.location.hash || '#anasayfa';
        const activeBtn = document.querySelector(`.nav-links a[href="${currentHash}"]`);

        if (activeBtn) {
            activeBtn.classList.add('active-link'); // ekle
        }

        
        if (pageName === 'iletisim') setupContactForm(); // İletişim butonunda iletişim sekmesi kullanımı için.

        setTimeout(initScrollReveal, 100); // Yeni içerik yüklendiğinde Scroll Reveal'ı yeniden başlat.

        startTypeWriterSafe(); // Yeni içerik yüklendiğinde TypeWriter'ı yeniden başlat. Alttaki fonksiyonu çağırıyoruz.
    }

    // Typewriter Başlatma.
    // Typewriter kodu değiştirildi çünkü öncekinde bazı durumlarda TypeWriter sınıfı henüz yüklenmemiş olabiliyordu ve bundan kaynaklı yazı çıkmıyordu veya çıkamayabiliyordu.
    // Bu hali ile önce 1. elemanın yüklendiğinden emin oluyoruz, eğer yok ise 50ms aralıklarla 20 kere deniyor, 20 kere de bulamazsa vazgeçiyor.
    function startTypeWriterSafe(attempts = 0) {
        const txtElement = document.querySelector('.txt-type');
        
        if (txtElement) {
            if (typeof TypeWriter !== 'undefined') {
                const wordsAttr = txtElement.getAttribute('data-words');
                const waitAttr = txtElement.getAttribute('data-wait');
                
                if (wordsAttr && waitAttr) {
                    new TypeWriter(txtElement, JSON.parse(wordsAttr), waitAttr);
                }
            }
        } else {
            if (attempts < 20) {
                setTimeout(() => startTypeWriterSafe(attempts + 1), 50);
            }
        }
    }

    // URL değişince router çalışsın
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
});



// PWA SERVICE WORKER KAYDI KISMI
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwa-sw.js')
            .then(reg => console.log('PWA Başarıyla Kaydedildi:', reg.scope))
            .catch(err => console.log('PWA Kayıt Hatası:', err));
    });
}



// CUSTOM CURSOR KISMI
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Mobile mouse efektini gizleme
    if(window.innerWidth < 768) {
        if(cursor) cursor.style.display = 'none';
        if(follower) follower.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        // pozisyonlar
        const posX = e.clientX;
        const posY = e.clientY;

        if(cursor) cursor.style.left = `${posX}px`; cursor.style.top = `${posY}px`;
        
        if(follower) follower.style.left = `${posX}px`; follower.style.top = `${posY}px`;
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('btn') || e.target.closest('a') || e.target.closest('button')) {
            document.body.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('btn') || e.target.closest('a') || e.target.closest('button')) {
            document.body.classList.remove('cursor-hover');
        }
    });
}


