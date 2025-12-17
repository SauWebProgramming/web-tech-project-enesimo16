// UI SES EFEKTLERİ VE SES YÖNETİMİ

const AudioManager = {
    sounds: {},
    isMuted: localStorage.getItem('siteMuted') === 'true',  // LOCALSTORAGE

    init() {
        this.sounds = {
            hover: new Audio('assets/sounds/hover.mp3'),
            click: new Audio('assets/sounds/click.mp3'),
            success: new Audio('assets/sounds/success.mp3')
        };

        Object.values(this.sounds).forEach(audio => {
            audio.volume = 0.5; 
            audio.load(); 
        });

        this.createMuteButton();

        this.attachListeners();
    },

    createMuteButton() {

        const terminalBtn = document.getElementById('terminal-btn');

        const muteBtn = document.createElement('button');
        muteBtn.id = 'mute-toggle';
        
        muteBtn.className = 'terminal-toggle'; 
        muteBtn.style.left = '90px'; 
        muteBtn.style.bottom = '30px'; 
        muteBtn.setAttribute('aria-label', 'Sesi Aç/Kapat');
        
        this.updateMuteIcon(muteBtn);

        muteBtn.addEventListener('click', () => {
            this.isMuted = !this.isMuted;
            localStorage.setItem('siteMuted', this.isMuted);
            this.updateMuteIcon(muteBtn);
            
            if(typeof Toast !== 'undefined') {
                const msg = this.isMuted ? 'Ses Kapatıldı 🔇' : 'Ses Açıldı 🔊';
                Toast.show(msg, 'info');
            }
        });


        // navbara ekleyemedim mecbur terminal yanına ekledim.
        if (terminalBtn) {
            
           
            terminalBtn.insertAdjacentElement('afterend', muteBtn);
        } else {
            document.body.appendChild(muteBtn);
        }
    },

    updateMuteIcon(btn) {
        btn.innerHTML = this.isMuted ? '🔇' : '🔊';
    },

    play(soundName) {
        if (this.isMuted || !this.sounds[soundName]) return;

        const sound = this.sounds[soundName].cloneNode();
        sound.volume = 0.3;
        
        sound.play().catch(e => {

        });
    },

    attachListeners() {
        if (window.matchMedia("(hover: hover)").matches) {
            document.addEventListener('mouseover', (e) => {
                const target = e.target.closest('a, button, .btn, .project-card, .theme-circle');
                if (target && !target.dataset.soundPlayed) {
                    this.play('hover');
                    target.dataset.soundPlayed = "true"; 
                    
                    target.addEventListener('mouseleave', () => {
                        delete target.dataset.soundPlayed;
                    }, { once: true });
                }
            });
        }

        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .btn, .project-card, .theme-circle');
            if (target) {
                this.play('click');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => AudioManager.init());

window.playSuccessSound = () => AudioManager.play('success');