// 3D TILT EFEKTİ
// Bazen calisiyor bazen calismiyor duzeltilemedi.

function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    console.log('kart:', cards.length);
    
    if (cards.length === 0) {
        console.warn('kart yok');
        return;
    }

    cards.forEach((card, index) => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transformOrigin = 'center center';
        
        let isHovering = false;
        
        card.addEventListener('mouseenter', function() {
            isHovering = true;
            this.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            if (!isHovering) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 20; 
            const rotateX = ((centerY - y) / centerY) * 20;
            

            this.style.transform = `
                translateY(-12px) 
                translateZ(50px)
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                scale3d(1.03, 1.03, 1.03)
            `;
            
            if (Math.random() < 0.05) {   
            }
        })
        
        card.addEventListener('mouseleave', function() {
            isHovering = false;

            this.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            

            this.style.transform = `
                translateY(0px) 
                translateZ(0px)
                rotateX(0deg) 
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
            

            setTimeout(() => {
                console.log(` Kart ${index + 1} son durum:`, this.style.transform);
            }, 700);
        });
    });
    
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTiltEffect);
} else {
    initTiltEffect();
}

window.testTilt = function() {
    const card = document.querySelector('.project-card, .skill-card');
    if (card) {
        card.style.transform = 'translateY(-20px) rotateX(25deg) rotateY(25deg) scale3d(1.1, 1.1, 1.1)';
        
        setTimeout(() => {
            card.style.transition = 'all 1s ease';
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }, 2000);
    }
};