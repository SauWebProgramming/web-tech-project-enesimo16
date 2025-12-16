// Konami Kodu: E, N, E, S
// Sıra: E, N, E, S tuşlarına basıldığında çalışır

function initKonamiCode() {

    const secretCode = ['e', 'n', 'e', 's'];
    
    let cursor = 0; 

    document.addEventListener('keydown', (e) => {

        const key = e.key.toLowerCase();

        if (key === secretCode[cursor]) {
            cursor++; 
            
            if (cursor === secretCode.length) {
                fireConfetti(); 
                cursor = 0; 
            }
        } else {
            cursor = (key === secretCode[0]) ? 1 : 0;
        }
    });
}

function fireConfetti() {

    if (navigator.vibrate) navigator.vibrate(200);

    if (typeof confetti === 'function') {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
            }));
        }, 250);
    }
}