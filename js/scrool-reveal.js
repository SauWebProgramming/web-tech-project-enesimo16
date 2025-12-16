// Scrool reveal
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Eğer eleman ekranda görünüyorsa
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Animasyonu başlat
                observer.unobserve(entry.target); // Bir kere çalışsın, sürekli izlemesin 
            }
        });
    }, {
        threshold: 0.1 // Elemanın %10'u ekrana girince tetikle
    });

    // .reveal sınıfına sahip TÜM elemanları bul ve takiple
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
}
