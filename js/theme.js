// Dark mode düzenlendi, toastr eklendi.


const themeBtn = document.getElementById('theme-toggle');
const curtainOverlay = document.getElementById('curtain-overlay');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '☀️';
}

themeBtn.addEventListener('click', () => {
    curtainOverlay.classList.add('active');

    setTimeout(() => {
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');

        if (isDark) {
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '🌙';
        }

        if(typeof Toast !== 'undefined') {
            const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
            
            let msg;
            if (isDark) {
                msg = isEn ? 'Dark Mode 🌙' : 'Koyu Tema 🌙';
            } else {
                msg = isEn ? 'Light Mode ☀️' : 'Açık Tema ☀️';
            }
            
            Toast.show(msg, 'info');
        }

        setTimeout(() => {
            curtainOverlay.classList.remove('active');
        }, 200); 

    }, 800); 
});