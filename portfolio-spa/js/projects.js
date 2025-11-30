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
