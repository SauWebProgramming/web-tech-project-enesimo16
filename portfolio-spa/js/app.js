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

    // Typewriter Başlatma.
    setTimeout(() => {
        const txtElement = document.querySelector('.txt-type');
        if (txtElement) {
            const wordsAttr = txtElement.getAttribute('data-words');
            const waitAttr = txtElement.getAttribute('data-wait');
            
            if (wordsAttr && waitAttr) {
                // Temiz bir başlangıç için (varsa) eski içeriği temizleyebiliriz ama
                // sınıf yapımız zaten innerHTML'i güncelliyor.
                const words = JSON.parse(wordsAttr);
                new TypeWriter(txtElement, words, waitAttr);
            }
        }
    }, 200);

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





