function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card');
    console.log("3D Tilt Başlatılıyor. Bulunan kart sayısı:", cards.length) // debug ı görmek için sorun kartları görmemesiymis app de router icine timeval eklendi

    cards.forEach(card => {
        let isHovering = false;
        
        card.addEventListener('mouseenter', () => {
            isHovering = true;
            card.style.transition = 'none'; 
            card.style.transform = 'translateY(-10px)'; 
        });

        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transition = 'transform 0.5s ease-out, box-shadow 0.4s ease';
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)'; 
        });

        card.addEventListener('mousemove', (e) => {
            if (!isHovering) return;

            const rect = card.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top; 
            
            const rotateY = 30 * ((x - width / 2) / width); 
            const rotateX = -30 * ((y - height / 2) / height); 
            
            card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
}