const pages = {
    // 1. olarak sayfa içerikleri tasarlanmıştı.
    // 2. olarak reveal eklenmişti.
    // Şuan ise 3. olarak çoklu dil desteği eklendi.
    // TypeWriter eklendi.

    // türkçe
    tr: {
        anasayfa: `
            <section class="home-section reveal" style="text-align:center; padding: 4rem 0;">
                <h1>Merhaba, Ben Enes Yel</h1>
                <h2 style="min-height: 1.5em; font-size: 1.2rem; color: #667eea; font-weight: 600;">
                    <span class="txt-type" data-wait="2000" data-words='["Bilişim Sistemleri Mühendisliği Öğrencisi", "Web Geliştirici", "Teknoloji Tutkunu"]'></span>
                </h2>
                <br>
                <small style="display:block; margin-bottom:10px; color:#667eea; font-weight:bold;">B23120053</small>
                <p style="opacity: 0.8;">Web Teknolojileri | Backend Development | Mechanical | Hardware</p>
                <br>
                <a href="#projelerim" class="btn">Projelerimi İncele</a>
                <a href="#iletisim" class="btn" style="background: transparent; border: 2px solid #667eea; color: #667eea; margin-left: 10px;">Bana Ulaş</a>
            </section>
        `,
        hakkimda: `
            <section class="about-section reveal">
                <h2>Hakkımda</h2>
                <p>Merhaba! Ben Enes. Yazılım geliştirme tutkusu olan bir mühendislik öğrencisiyim. Karmaşık problemleri çözmeyi ve temiz kod yazmayı seviyorum.</p>
                <br>
                <h2>Yeteneklerim</h2>
                <div class="skills-grid">
                    <div class="skill-card reveal"><h3>C# & .NET</h3><p>OOP, Windows Forms ve ASP.NET Core.</p></div>
                    <div class="skill-card reveal"><h3>Web Frontend</h3><p>HTML5, CSS3 ve Modern JS (ES6+).</p></div>
                    <div class="skill-card reveal"><h3>Veritabanı</h3><p>MS SQL Server ve Veri Modelleme.</p></div>
                    <div class="skill-card reveal"><h3>Araçlar</h3><p>Git, GitHub ve VS Code.</p></div>
                </div>
            </section>
        `,
        iletisim: `
            <section class="contact-section reveal" style="max-width: 600px; margin: 0 auto;">
                <h2>İletişim</h2>
                <p>Sorularınız için aşağıdaki formu kullanabilirsiniz.</p>
                <form id="contact-form" style="margin-top: 2rem;" novalidate>
                    <div class="form-group"><label>Adınız Soyadınız</label><input type="text" id="name" placeholder="Örn: Enes Yel"><small class="error-text"></small></div>
                    <div class="form-group"><label>E-posta</label><input type="email" id="email" placeholder="Örn: enes@sakarya.edu.tr"><small class="error-text"></small></div>
                    <div class="form-group"><label>Mesajınız</label><textarea id="message" rows="5" placeholder="En az 10 karakter..."></textarea><small class="error-text"></small></div>
                    <button type="submit" class="btn" style="width:100%;">Gönder</button>
                </form>
                <div id="form-message"></div>
            </section>
        `
    },

    // english
    en: {
        anasayfa: `
            <section class="home-section reveal" style="text-align:center; padding: 4rem 0;">
                <h1>Hello, I'm Enes Yel</h1>
                <h2 style="min-height: 1.5em; font-size: 1.2rem; color: #667eea; font-weight: 600;">
                    <span class="txt-type" data-wait="2000" data-words='["ISE Student", "Web Developer", "Tech Enthusiast"]'></span>
                </h2>
                <br>
                <small style="display:block; margin-bottom:10px; color:#667eea; font-weight:bold;">B23120053</small>
                <p style="opacity: 0.8;">Web Technologies | Backend Development | Mechanical | Hardware</p>
                <br>
                <a href="#projelerim" class="btn">View Projects</a>
                <a href="#iletisim" class="btn" style="background: transparent; border: 2px solid #667eea; color: #667eea; margin-left: 10px;">Contact Me</a>
            </section>
        `,
        hakkimda: `
            <section class="about-section reveal">
                <h2>About Me</h2>
                <p>Hello! I'm Enes. I am an engineering student with a passion for software development. I love solving complex problems and writing clean code.</p>
                <br>
                <h2>My Skills</h2>
                <div class="skills-grid">
                    <div class="skill-card reveal"><h3>C# & .NET</h3><p>OOP, Windows Forms and ASP.NET Core.</p></div>
                    <div class="skill-card reveal"><h3>Web Frontend</h3><p>HTML5, CSS3 and Modern JS (ES6+).</p></div>
                    <div class="skill-card reveal"><h3>Database</h3><p>MS SQL Server and Data Modeling.</p></div>
                    <div class="skill-card reveal"><h3>Tools</h3><p>Git, GitHub and VS Code.</p></div>
                </div>
            </section>
        `,
        iletisim: `
            <section class="contact-section reveal" style="max-width: 600px; margin: 0 auto;">
                <h2>Contact</h2>
                <p>You can use the form below for your questions.</p>
                <form id="contact-form" style="margin-top: 2rem;" novalidate>
                    <div class="form-group"><label>Full Name</label><input type="text" id="name" placeholder="Ex: Dilek Yel"><small class="error-text"></small></div>
                    <div class="form-group"><label>Email</label><input type="email" id="email" placeholder="Ex: dilek16@email.com"><small class="error-text"></small></div>
                    <div class="form-group"><label>Message</label><textarea id="message" rows="5" placeholder="At least 10 characters..."></textarea><small class="error-text"></small></div>
                    <button type="submit" class="btn" style="width:100%;">Send Message</button>
                </form>
                <div id="form-message"></div>
            </section>
        `
    }
};