const pages = {
    // ANASAYFA BUTONU
    anasayfa: `
        <section class="home-section" style="text-align:center; padding: 4rem 0;">
            <h1>DENEMEDENEMEDENEMEDENEME</h1>
            <h1>Merhaba, Ben Enes Yel</h1>
            <p>Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği Öğrencisi/p><br>
            <small>B23120053 - BSM</small>
            <p style="opacity: 0.8;">Web Teknolojileri | Backend Development | Mechanical | Hardware </p>
            <br>
            <a href="#projelerim" class="btn">Projelerimi incele</a>
            <a href="#iletisim" class="btn" style="background: transparent; border: 2px solid #667eea; color: #667eea; margin-left: 10px;">Bana Ulaş</a>
        </section>
    `,

    // HAKKIMDA BUTONU FAKAT CSS İLE BİRLİKTE
    hakkimda: `
        <section class="about-section">
            <h2>Hakkımda</h2>
            <small>Deneme</small>
            <p>Merhaba! Ben Enes. Yazılım geliştirme tutkusu olan bir mühendislik öğrencisiyim. Aynı zamanda donanım ve makine üzerine çalışıyorum.
            Karmaşık problemleri çözmeyi ve temiz kod yazmayı seviyorum. Hem web teknolojileri hem de masaüstü uygulama geliştirme alanlarında
            projeler üretmeye çalışıyorum.</p>
            
            <br>
            <h2>Yeteneklerim</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>C# & .NET</h3>
                    <p>OOP, Windows Forms ve ASP.NET Core mimarisine hakimim.</p>
                </div>
                <div class="skill-card">
                    <h3>Web Frontend</h3>
                    <p>HTML5, CSS3 (Grid/Flex) ve Modern JavaScript (ES6+) kullanıyorum.</p>
                </div>
                <div class="skill-card">
                    <h3>Veritabanı</h3>
                    <p>MS SQL server ile veri modelleme ve yönetimi yapabiliyorum.</p>
                </div>
                 <div class="skill-card">
                    <h3>Araçlar</h3>
                    <p>Git, GitHub ve VS Code ile proje süreçlerini yönetiyorum.</p>
                </div>
            </div>
        </section>
    `,

    // İLETİŞİM BUTONU 
    iletisim: `
        <section class="contact-section" style="max-width: 600px; margin: 0 auto;">
            <h2>İletişim</h2>
            <p>Projeleriniz veya sorularınız için aşağıdaki formu kullanabilirsiniz.</p>
            
            <form id="contact-form" style="margin-top: 2rem;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Adınız Soyadınız</label>
                    <input type="text" id="name" required style="width:100%; padding:1rem; border-radius:10px; border:1px solid #ddd; outline:none;">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:600;">E-posta Adresiniz</label>
                    <input type="email" id="email" required style="width:100%; padding:1rem; border-radius:10px; border:1px solid #ddd; outline:none;">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:600;">Mesajınız</label>
                    <textarea id="message" rows="5" required style="width:100%; padding:1rem; border-radius:10px; border:1px solid #ddd; outline:none; font-family:inherit;"></textarea>
                </div>
                
                <button type="submit" class="btn" style="width:100%;">Gönder</button>
            </form>
            <div id="form-message"></div>
        </section>
    `
};