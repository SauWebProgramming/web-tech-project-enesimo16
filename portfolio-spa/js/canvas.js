// --- CANVAS İNTERAKTİF ARKAPLAN (NETWORK EFEKTİ) ---
// Bonus Puan için Canvas ve matematiksel çizim kullanılmıştır.

const canvas = document.getElementById('starfield');
// Eğer canvas HTML'de yoksa veya bu dosya yanlış sırada yüklendiyse durdur
if (!canvas) {
    console.error("Canvas element #starfield bulunamadı.");
    // Eğer body arka planı canlı değilse diye fallback ekleyebiliriz:
    // document.body.style.background = '#1e293b'; 
} else {
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    let mouse = { x: 0, y: 0 };

    // Partikül (Nokta) Sınıfı
    class Particle {
        constructor() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.radius = Math.random() * 2 + 1; // 1 ile 3 arasında boyut
            this.vx = Math.random() * 1 - 0.5; // Yatay hız (-0.5 ile 0.5)
            this.vy = Math.random() * 1 - 0.5; // Dikey hız
        }

        draw() {
            // Dark Mode rengine duyarlı çizim
            const color = document.body.classList.contains('dark-mode') ? '#38bdf8' : '#667eea';
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        }

        update() {
            // Sınırlara çarpınca yön değiştir
            if (this.x < 0 || this.x > W) this.vx = -this.vx;
            if (this.y < 0 || this.y > H) this.vy = -this.vy;

            this.x += this.vx;
            this.y += this.vy;
        }
    }

    // Canvas'ı ve Partikülleri Başlat
    function initCanvas() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        particles = [];
        // Ekran boyutuna göre 150-200 arası nokta oluştur
        for (let i = 0; i < 150; i++) {
            particles.push(new Particle());
        }
    }

    // İki nokta arasına çizgi çizer
    function drawLines() {
        let max_dist = 120; // Maksimum çizgi mesafesi
        let mouse_dist = 200; // Fareye olan etki mesafesi

        for (let i = 0; i < particles.length; i++) {
            let p1 = particles[i];
        
            for (let j = 0; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
        
                if (dist < max_dist) {
                    let opacity = 1 - (dist / max_dist);
                    const color = document.body.classList.contains('dark-mode') ? '255, 255, 255' : '102, 126, 234';
                    ctx.strokeStyle = `rgba(${color}, ${opacity * 0.4})`;
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        
            // FARE BAĞLANTISI BURADA OLACAK ⬇⬇⬇
            let mouse_check_dist = Math.sqrt(Math.pow(p1.x - mouse.x, 2) + Math.pow(p1.y - mouse.y, 2));
            if (mouse_check_dist < mouse_dist) {
                let opacity = 1 - (mouse_check_dist / mouse_dist);
                const color = document.body.classList.contains('dark-mode') ? '56, 189, 248' : '79, 70, 229';
                ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }

    // Ana Animasyon Döngüsü
    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.clearRect(0, 0, W, H); // Ekranı temizle

        drawLines(); // Çizgileri çiz

        for (let i = 0; i < particles.length; i++) {
            particles[i].update(); // Partikülleri hareket ettir
            particles[i].draw(); // Partikülleri çiz
        }
    }

    // Event Listenerlar
    window.addEventListener('resize', initCanvas);
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Başlangıç
    initCanvas();
    animateCanvas();
}