// PROJELERİ YÜKLEME
async function loadProjects() {
    const appContainer = document.getElementById('app-container');
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    
    // SKELETON YÜKLEME EKRANI
    const skeletonCard = `
        <div class="project-card" style="border: none; box-shadow: none; background: #fff;">
            <div style="width: 100%; height: 200px; background: #e0e0e0; border-radius: 10px; margin-bottom: 1rem; animation: pulse 1.5s infinite ease-in-out;"></div>
            <div style="width: 70%; height: 25px; background: #e0e0e0; border-radius: 5px; margin-bottom: 10px; animation: pulse 1.5s infinite ease-in-out;"></div>
            <div style="width: 90%; height: 15px; background: #e0e0e0; border-radius: 5px; margin-bottom: 5px; animation: pulse 1.5s infinite ease-in-out;"></div>
            <div style="width: 50%; height: 15px; background: #e0e0e0; border-radius: 5px; animation: pulse 1.5s infinite ease-in-out;"></div>
        </div>
    `;

    const loadingTitle = isEn ? 'Projects Loading...' : 'Projeler Yükleniyor...';

    appContainer.innerHTML = `
        <h2 class="text-center" style="opacity: 0.6;">${loadingTitle}</h2>
        <div class="filter-container" style="opacity: 0.5; pointer-events: none;">
             <button class="filter-btn active" style="background:#e0e0e0; color:transparent; border:none; width:80px; height:40px; border-radius:50px;"></button>
             <button class="filter-btn" style="background:#e0e0e0; color:transparent; border:none; width:80px; height:40px; border-radius:50px;"></button>
             <button class="filter-btn" style="background:#e0e0e0; color:transparent; border:none; width:80px; height:40px; border-radius:50px;"></button>
        </div>
        <div class="projects-grid">
            ${skeletonCard.repeat(6)} 
        </div>
        <style>
            @keyframes pulse {
                0% { opacity: 0.5; }
                50% { opacity: 1; }
                100% { opacity: 0.5; }
            }
        </style>
    `;

    // ASENKROM WAIT KULLANIMI
    await new Promise(r => setTimeout(r, 1500)); 

    try {
        const response = await fetch('./data/projects.json');
        const projects = await response.json();

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


        if(typeof initScrollReveal === 'function') initScrollReveal(); 
        if(typeof setupFilters === 'function') setupFilters();
        
        attachModalEvents(projects);

        if(typeof initTiltEffect === 'function') initTiltEffect();

    } catch (err) {
        console.error(err);
        const errorText = isEn ? 'Error loading projects.' : 'Projeler yüklenirken hata oluştu.';
        appContainer.innerHTML = `<h3 style="color:red; text-align:center;">${errorText}</h3>`;
    }
}









// *********************************************** //





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
        if (e.target === modal) closeModal();
    };
}