// Dark mode geçişi
const themeBtn = document.getElementById('theme-toggle');
const curtainOverlay = document.getElementById('curtain-overlay');
const body = document.body;

// İlk sayfa açıldığında temayı kontrol ederek ona göre ayarlama
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '☀️';
}

themeBtn.addEventListener('click', () => {
    // Perde
    curtainOverlay.classList.add('active');

        setTimeout(() => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeBtn.innerHTML = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeBtn.innerHTML = '🌙';
            }

            setTimeout(() => {
                curtainOverlay.classList.remove('active');
            }, 200); 

        }, 800); 
});