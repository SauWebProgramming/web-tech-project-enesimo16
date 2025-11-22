document.addEventListener('DOMContentLoaded', () => {
    
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

        // Sayfa içeriğini belirle
        if (pageName === 'projelerim') {
            await loadProjects(); // Aşağıda tanımlanıcak olan loadProjects fonksiyonunu çağırıp projeleri yüklemesi için.
        } else if (pages[pageName]) {
            appContainer.innerHTML = pages[pageName]; // Bu kısımda projeler ve anasayfa hariç kısımlara da gidilebilir, bu yüzden pages.js'de tanımladığımız kısımlardan almasını sağlıyoruz.
        } else {
            appContainer.innerHTML = pages['anasayfa']; // Varsayılan olarak anasayfayı yapıyoruz.
        }

        window.scrollTo(0, 0); // Sayfa yüklenince dinamik olabilmesi için en üste gitmesi gerek bu yüzden pencereyi en yukarıya kaydırıyoruz.

        if (pageName === 'iletisim') setupContactForm(); // İletişim butonunda iletişim sekmesi kullanımı için.
    }

    // URL değişince router çalışsın
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
});

// BURADA FETCH İLE projects.json DOSYASINI ÇEKİP PROJELERİ YÜKLEYECEĞİZ.
async function loadProjects() {
    const appContainer = document.getElementById('app-container');
    
    appContainer.innerHTML = '<h2 style="text-align:center;">Projeler Yükleniyor...</h2>'; 

    try {
        const response = await fetch('./data/projects.json');
        const projects = await response.json();

        let html = '<h2>Projelerim</h2><div class="projects-grid">';
        
        projects.forEach(proj => {
            html += `
                <article class="project-card">
                    <img src="${proj.image}" alt="${proj.title}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:1rem;">
                    <h3 style="margin-bottom:0.5rem;">${proj.title}</h3>
                    <p style="color:#555; margin-bottom:1rem; font-size:0.95rem;">${proj.description}</p>
                    <a href="${proj.link}" class="btn" style="padding:0.5rem 1.5rem; font-size:0.9rem;">İncele</a>
                </article>
            `;
        });

        html += '</div>';
        appContainer.innerHTML = html;

    } catch (err) {
        console.error(err);
        appContainer.innerHTML = '<h3 style="color:red; text-align:center;">HATAHATAHATAHATAHATA</h3>';
    }
}

// İLETİŞİM BUTONU İŞLEMLERİ DEVAMI
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msgDiv = document.getElementById('form-message');
            msgDiv.innerHTML = '<div style="background:#d4edda; color:#155724; padding:1rem; border-radius:10px; margin-top:1rem; text-align:center;">Mesajınız başarıyla gönderildi! (Demo)</div>';
            form.reset();
        });
    }
}