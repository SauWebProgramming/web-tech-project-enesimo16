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
                    card.style.display = 'block'; 
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    });
}