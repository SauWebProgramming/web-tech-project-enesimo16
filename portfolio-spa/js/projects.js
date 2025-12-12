// BURADA FETCH İLE projects.json DOSYASINI ÇEKİP PROJELERİ YÜKLEYECEĞİZ.
async function loadProjects() {
    const appContainer = document.getElementById('app-container');
    const loadingText = currentLang === 'en' ? 'Projects Loading...' : 'Projeler Yükleniyor...';
    appContainer.innerHTML = `<h2 style="text-align:center;">${loadingText}</h2>`;

    /* DENEME SKELETON */

    // Yükleniyor yazısı yerine 3 tane sahte kutu oluşturuyoruz
    let skeletonHTML = `<h2>${(typeof currentLang !== 'undefined' && currentLang === 'en') ? 'My Projects' : 'Projelerim'}</h2><div class="projects-grid">`;
    
    for(let i=0; i<20; i++) {
        skeletonHTML += `
            <div class="skeleton-card">
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text" style="width: 80%;"></div>
                <div class="skeleton skeleton-btn"></div>
            </div>
        `;
    }
    skeletonHTML += '</div>';
    appContainer.innerHTML = skeletonHTML;

    /* DENEME BİTTİ */



    try {
        const response = await fetch('./data/projects.json');
        const projects = await response.json();

        // Metinler
        const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
        const txtAll = isEn ? 'All' : 'Tümü';
        const txtWeb = isEn ? 'Web Projects' : 'Web Projeleri';
        const txtDesktop = isEn ? 'Desktop / Game' : 'Masaüstü / Oyun';
        const txtTitle = isEn ? 'My Projects' : 'Projelerim';
        const txtBtn = isEn ? 'View Details' : 'İncele';

        let html = `
            <h2>${txtTitle}</h2>
            <div class="filter-container">
                <button class="filter-btn active" data-filter="all">${txtAll}</button>
                <button class="filter-btn" data-filter="web">${txtWeb}</button>
                <button class="filter-btn" data-filter="masaustu">${txtDesktop}</button>
            </div>
            <div class="projects-grid">
        `;
        
        // HTML oluşturma döngüsü
        projects.forEach(proj => {
            const title = isEn ? proj.title_en : proj.title;
            const desc = isEn ? proj.description_en : proj.description;

            html += `
                <article class="project-card reveal" data-category="${proj.category}">
                    <img src="${proj.image}" alt="${title}" loading="lazy" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:1rem;"> 
                    <h3 style="margin-bottom:0.5rem;">${title}</h3>
                    <p style="color: inherit; opacity: 0.8; margin-bottom:1rem; font-size:0.95rem;">${desc}</p>
                    <a href="${proj.link}" class="btn project-btn" style="padding:0.5rem 1.5rem; font-size:0.9rem;">${txtBtn}</a>
                </article>
            `;
        });

        html += '</div>';
        appContainer.innerHTML = html;

        // --- YARDIMCI FONKSİYONLARI ÇAĞIR ---
        if(typeof initScrollReveal === 'function') initScrollReveal(); 
        if(typeof setupFilters === 'function') setupFilters();
        
        // Modal Bağlantısını Yap
        attachModalEvents(projects);

        // --- KRİTİK EKLEME: 3D TILT EFEKTİNİ BAŞLAT ---
        // Projeler HTML'e eklendiği için artık kartlar var ve tilt çalışabilir.
        if(typeof initTiltEffect === 'function') initTiltEffect();

    } catch (err) {
        console.error(err);
        const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
        const errorText = isEn ? 'Error loading projects.' : 'Projeler yüklenirken hata oluştu.';
        appContainer.innerHTML = `<h3 style="color:red; text-align:center;">${errorText}</h3>`;
    }
}

// --- MODAL OLAYLARINI BAĞLAYAN FONKSİYON ---
function attachModalEvents(projects) {
    const modal = document.getElementById('project-modal');
    if (!modal) return; 

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalRepo = document.getElementById('modal-repo');
    
    const buttons = document.querySelectorAll('.project-btn');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 

            const proj = projects[index];
            const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

            modalImg.src = proj.image;
            modalTitle.innerText = isEn ? proj.title_en : proj.title;
            modalDesc.innerText = isEn ? proj.description_en : proj.description;
            
            // Link kontrolü: Eğer link varsa göster, yoksa gizle
            if (modalRepo) {
                if (proj.link && proj.link !== "#") {
                    modalRepo.href = proj.link;
                    modalRepo.style.display = 'inline-flex';
                } else {
                    modalRepo.style.display = 'none';
                }
            }

            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; 
        });
    });

    setupModalCloseLogic(modal);
}

function setupModalCloseLogic(modal) {
    const closeBtn = document.querySelector('.close-btn');

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; 
    };

    if(closeBtn) closeBtn.onclick = closeModal;

    window.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}

