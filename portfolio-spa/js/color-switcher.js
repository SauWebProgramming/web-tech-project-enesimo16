// en başta bizim çok daha önce yaptığımız arka plan renginin değişmesi varsayılan olarak var fakat artık color-switcher ile değiştirebiliyoruz.
// fakat değiştirdiğimiz an varsayılan renk değiştirme kodları bloke ediliyor, düzeltilemedi.
// artik duzeltildi.

function initColorSwitcher() {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.querySelector('.theme-settings');
    const themeCircles = document.querySelectorAll('.theme-circle');
    const root = document.documentElement;

    if(settingsToggle) {
        settingsToggle.addEventListener('click', () => {
            settingsPanel.classList.toggle('show');
        });
    }

    const themes = {
        purple: { primary: '#667eea', secondary: '#764ba2' },
        green:  { primary: '#10b981', secondary: '#059669' },
        orange: { primary: '#f97316', secondary: '#ea580c' },
        blue:   { primary: '#3b82f6', secondary: '#2563eb' }
    };

    // Fonksiyona 'showToast' parametresi eklendi (Varsayılan: true)
    const setThemeColor = (colorName, showToast = true) => {
        const theme = themes[colorName];
        if (theme) {
            root.style.setProperty('--primary-color', theme.primary);
            root.style.setProperty('--secondary-color', theme.secondary);
            
            localStorage.setItem('siteColor', colorName);

            themeCircles.forEach(circle => {
                circle.classList.remove('active');
                if(circle.getAttribute('data-color') === colorName) {
                    circle.classList.add('active');
                }
            });

        
            if(showToast && typeof Toast !== 'undefined') {
                
                const displayColor = colorName.charAt(0).toUpperCase() + colorName.slice(1);
                
                
                const msg = (typeof currentLang !== 'undefined' && currentLang === 'en') 
                    ? `Theme Changed: ${displayColor} `
                    : `Tema Değiştirildi: ${displayColor} `;
                
                Toast.show(msg, 'success');
            }
        }
    };

    themeCircles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            setThemeColor(color, true); // Tıklayınca bildirim göster
        });
    });

    const savedColor = localStorage.getItem('siteColor') || 'purple';
    setThemeColor(savedColor, false); // Sayfa ilk açıldığında bildirim gösterme
}

// yine terminal gibi otomatik başlatıyoruz.
document.addEventListener('DOMContentLoaded', initColorSwitcher);