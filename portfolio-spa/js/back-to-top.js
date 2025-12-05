function initScrollFeatures() {
    const progressBar = document.getElementById("myBar");
    const backToTopBtn = document.getElementById("backToTop");
    
    // Yalnızca buton ve çubuk HTML'de varsa başlat
    if (!progressBar && !backToTopBtn) return;

    window.onscroll = function() {
        // 1. Progress Bar Mantığı
        if(progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // Sıfıra bölme hatasını engellemek için kontrol
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            progressBar.style.width = scrolled + "%";
        }

        // 2. Back To Top Butonu Mantığı
        if (backToTopBtn) {
            // Sayfanın 300 pikselden fazla aşağı kaydığını kontrol et
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }
    };

    // Butona tıklayınca en üste yumuşakça kay
    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}