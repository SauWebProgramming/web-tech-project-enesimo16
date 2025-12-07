//  TERMINAL 
// oto olarak çalıstırılıyor DOMContentLoaded içinde yapılmıyor sıkıntı çıkmasın diye.

function initTerminal() {
    console.log("📟 Terminal Modülü Yükleniyor...");

    const modal = document.getElementById('terminal-overlay');
    const openBtn = document.getElementById('terminal-btn');
    const closeBtn = document.getElementById('close-terminal');
    const input = document.getElementById('cmd-input');
    const outputDiv = document.getElementById('terminal-output');
    const bodyDiv = document.getElementById('terminal-body');

    if (!modal) { console.error("HATA: #terminal-overlay bulunamadı!"); return; }
    if (!openBtn) { console.error("HATA: #terminal-btn bulunamadı!"); return; }
    if (!input) { console.error("HATA: #cmd-input bulunamadı!"); return; }

    console.log("Terminal çalışıyor...");

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("🖱️ Terminal butonuna tıklandı!");
        
        modal.classList.add('open'); 
        
        setTimeout(() => {
            input.focus();
        }, 100);
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });

    const windowEl = document.querySelector('.terminal-window');
    if (windowEl) {
        windowEl.addEventListener('click', () => {
            input.focus();
        });
    }

    // KOMUT GİRİŞİ
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            if (command) {
                processCommand(command);
            }
            input.value = ''; 
        }
    });

    // KOMUT İŞLEYİCİ
    function processCommand(cmd) {
        const cmdLine = document.createElement('div');
        cmdLine.innerHTML = `<span style="color:#38bdf8">guest@enes:~$</span> ${cmd}`;
        outputDiv.appendChild(cmdLine);

        let response = '';

        switch (cmd) {
            case 'help':
                response = `
                    <div class="cmd-info">Mevcut Komutlar:</div>
                    <div>- <span class="cmd-success">about</span>: Hakkımda</div>
                    <div>- <span class="cmd-success">projects</span>: Projeler</div>
                    <div>- <span class="cmd-success">social</span>: Sosyal Medya</div>
                    <div>- <span class="cmd-success">contact</span>: İletişim</div>
                    <div>- <span class="cmd-success">clear</span>: Temizle</div>
                    <div>- <span class="cmd-success">konami</span>: Konami :)</div>
                    <div>- <span class="cmd-success">bonus</span>: Bonus Ozellikler</div>
                    <div>- <span class="cmd-success">exit</span>: Çıkış</div>
                    
                `;
                break;
            
            case 'about':
                response = "Ben Eneeeeeeeeeeeeeeeeeess!!!";
                break;

            case 'projects':
                response = `
                    <div>Yükleniyor...</div>
                    <div>1. Kule Savunma (C#)</div>
                    <div>2. SPA Portfolyo (Web)</div>
                `;
                break;

            case 'social':
                response = `
                    <div>GitHub: <a href="https://github.com/enesyel" target="_blank" style="color:#fff">github.com/enesyel</a></div>
                    <div>LinkedIn: <a href="https://www.linkedin.com/in/enes-yel-44a1ab297/" target="_blank" style="color:#fff">https://www.linkedin.com/in/enes-yel-44a1ab297/</a></div>
                `;
                break;
            
            case 'contact':
                response = "Email: enes@sakarya.edu.tr";
                break;

            case 'clear':
                outputDiv.innerHTML = '';
                return;

            case 'exit':
                modal.classList.remove('open');
                return;

            case 'sudo':
                response = "<span class='cmd-error'>Yetkisiz erişim! Sen hoca değilsin :)</span>";
                break;
            
            case 'konami':
                response = "<span class='cmd-success'>e,n,e,s</span>";
                break;
            
                case 'bonus':
                    response = `
                        <div class="cmd-info">Bonus komutunu buldunuz! Tebrikler :)</div>
                        <div>İşte projeye eklenen ekstra özellikler:</div>
                        <br>
                        <div>✅ PWA (Mobil Uygulama)</div>
                        <div>✅ Scroll Reveal Animasyonları</div>
                        <div>✅ Dil Desteği (TR/EN)</div>
                        <div>✅ Dark Theme / Light Theme</div>
                        <div>✅ Typewriter (Yazı Yazma) Efekti</div>
                        <div>✅ Canlı Hava Durumu API</div>
                        <div>✅ CV İndir & QR Kod</div>
                        <div>✅ Scroll Progress Bar</div>
                        <div>✅ Back to Top Butonu</div>
                        <div>✅ 3D Tilt (Eğilme) Efekti</div>
                        <div>✅ Yazdırma Tasarımı (Ctrl + P)</div>
                        <div>✅ Konami Code (Klavyeden 'enes' yaz)</div>
                        <div>✅ Skeleton Loading & Custom Cursor</div>
                        <div>✅ Canvas İnteraktif Arkaplan</div>
                        <br>
                        <div class="cmd-success" style="font-weight:bold;">★ Best of Bests - TERMINAL CLI ★</div>
                    `;
                    break;

            default:
                response = `<span class='cmd-error'>Komut bulunamadı: ${cmd}</span>. 'help' yazın.`;
        }

        // Cevabı Ekrana Bas
        const respLine = document.createElement('div');
        respLine.className = 'output-line';
        respLine.innerHTML = response;
        outputDiv.appendChild(respLine);

        // Kaydır
        bodyDiv.scrollTop = bodyDiv.scrollHeight;
    }
}

// Otomatik Başlat (App.js'e gerek kalmadan)
document.addEventListener('DOMContentLoaded', initTerminal);