// 3D TILT EFEKTİ - FINAL VERSİYON
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    console.log('🎴 Bulunan kart sayısı:', cards.length);
    
    if (cards.length === 0) {
        console.warn('⚠️ Hiç kart bulunamadı!');
        return;
    }

    cards.forEach((card, index) => {
        // Kartı hazırla
        card.style.transformStyle = 'preserve-3d';
        card.style.transformOrigin = 'center center';
        
        let isHovering = false;
        
        card.addEventListener('mouseenter', function() {
            isHovering = true;
            console.log(`✅ Kart ${index + 1}: Mouse geldi`);
            
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
                console.log(`🎮 rotateX: ${rotateX.toFixed(1)}°, rotateY: ${rotateY.toFixed(1)}°`);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            isHovering = false;
            console.log(`❌ Kart ${index + 1}: Mouse ayrıldı - RESET`);
            

            this.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            

            this.style.transform = `
                translateY(0px) 
                translateZ(0px)
                rotateX(0deg) 
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
            

            setTimeout(() => {
                console.log(`🔍 Kart ${index + 1} son durum:`, this.style.transform);
            }, 700);
        });
    });
    
    console.log('✨ 3D Tilt efekti aktif!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTiltEffect);
} else {
    initTiltEffect();
}

// Test fonksiyonu - Konsolda manuel test için
window.testTilt = function() {
    const card = document.querySelector('.project-card, .skill-card');
    if (card) {
        console.log('🧪 Test başlıyor...');
        card.style.transform = 'translateY(-20px) rotateX(25deg) rotateY(25deg) scale3d(1.1, 1.1, 1.1)';
        console.log('Transform uygulandı:', card.style.transform);
        
        setTimeout(() => {
            card.style.transition = 'all 1s ease';
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            console.log('✅ Test tamamlandı - Kart düz pozisyona döndü');
        }, 2000);
    }
};