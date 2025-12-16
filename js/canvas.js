// CANVAS İNTERAKTİF ARKAPLAN 
// Bonus Puan için Canvas ve matematiksel çizim kullanılmıştır.
// Gemini yardimi alinmistir.

const canvas = document.getElementById('starfield');
if (!canvas) {
    console.error("Canvas element #starfield bulunamadı.");
} else {
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    let mouse = { x: 0, y: 0 };

    class Particle {
        constructor() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.radius = Math.random() * 2 + 1; 
            this.vx = Math.random() * 1 - 0.5; 
            this.vy = Math.random() * 1 - 0.5; 
        }

        draw() {
            const color = document.body.classList.contains('dark-mode') ? '#38bdf8' : '#667eea';
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        }

        update() {
            if (this.x < 0 || this.x > W) this.vx = -this.vx;
            if (this.y < 0 || this.y > H) this.vy = -this.vy;

            this.x += this.vx;
            this.y += this.vy;
        }
    }

    function initCanvas() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;

        particles = [];

        for (let i = 0; i < 150; i++) {
            particles.push(new Particle());
        }
    }

    function drawLines() {
        let max_dist = 120; 
        let mouse_dist = 200; 

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

    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.clearRect(0, 0, W, H); 

        drawLines(); 

        for (let i = 0; i < particles.length; i++) {
            particles[i].update(); 
            particles[i].draw(); 
        }
    }

    window.addEventListener('resize', initCanvas);
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    initCanvas();
    animateCanvas();
}