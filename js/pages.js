const pages = {
    // 1. olarak sayfa içerikleri tasarlanmıştı.
    // 2. olarak reveal eklenmişti.
    // Şuan ise 3. olarak çoklu dil desteği eklendi.
    // TypeWriter eklendi.
    // 404 not found eklendi.

    // türkçe
    tr: {
        anasayfa: `
            <section class="home-section reveal text-center py-4">
                <h1>Kişisel Portfolyo Sitesi</h1>
                <h2 class="typewriter-wrapper">
                    <span class="txt-type" data-wait="2000" data-words='["Bilişim Sistemleri Mühendisliği Öğrencisi", "Web Geliştiricisi", "Yardımsever"]'></span>
                </h2>
                <br>
                <small class="student-id">B23120053</small>
                <p class="subtitle">Web Teknolojileri | Backend Development | Mechanical | Hardware</p>
                <br>
                <a href="#projelerim" class="btn">Projelerimi İncele</a>
                <a href="#iletisim" class="btn">Bana Ulaş</a>
            </section>
        `,
        hakkimda: `
            <section class="about-section reveal">
                <h2>Hakkımda</h2>
                <p>Herkese merhaba, ben Enes Yel, Sakarya Üniversitesinde Bilişim Sistemleri Mühendisliği 2.sınıf öğrencisiyim. ÇAP kapsamında Makine mühendisliği, yandal tarafında ise bilgisayar donanımı okumaktayım.</p>
                
                <br>
                <h3>Eğitim & Gelişim Süreci</h3>
                <div class="timeline">
                    <!-- 2025: Web & Backend -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2025 - Günümüz</span>
                            <h4>Web & Backend</h4>
                            <p>Web teknolojileri üzerine yoğunlaştım. JavaScript, HTML, CSS, Bootstrap ve React ile frontend; modern mimarilerle backend tarafında kendimi geliştiriyorum.</p>
                        </div>
                    </div>

                    <!-- 2025: Akademik (Makine & Donanım) -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2025</span>
                            <h4>Çift Anadal & Yandal</h4>
                            <p>Sakarya Üniversitesi'nde <strong>Makine Mühendisliği</strong> (Çift Anadal) ve <strong>Bilgisayar Donanımı</strong> (Yandal) eğitimlerine başladım.</p>
                        </div>
                    </div>

                    <!-- 2024: Bilişim & C++ -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2024</span>
                            <h4>Bilişim Sistemleri & C++</h4>
                            <p>Bölüm derslerime başladım. Algoritma mantığını kavrayarak C++ dilinde orta düzeye ulaştım ve yazılım temellerimi sağlamlaştırdım.</p>
                        </div>
                    </div>

                    <!-- 2023: Hazırlık -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2023</span>
                            <h4>Üniversiteye Başlangıç</h4>
                            <p>Sakarya Üniversitesi Bilişim Sistemleri Mühendisliği Hazırlık eğitimini tamamladım.</p>
                        </div>
                    </div>
                </div>

                <br>
                <h2>Teknik Yetkinlikler</h2>
                <div class="skills-wrapper" style="max-width: 800px; margin: 0 auto;">
    
                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>C# & .NET Core</span>
                            <span>90%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>Web Frontend (HTML/CSS/JS)</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 85%"></div>
                        </div>
                    </div>
                    
                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>Python</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>SQL & Veritabanı Yönetimi</span>
                            <span>80%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 80%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>React & Modern JavaScript</span>
                            <span>75%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 75%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>C++ & Algoritma</span>
                            <span>70%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 70%"></div>
                        </div>
                    </div>

                    <!-- CV -->
                    <div class="cv-section reveal">
                    <a href="portfolio-spa/assets/img/docs/enes-yel-cv.pdf" class="btn-download" download>
                        <span>📄</span> CV'mi İndir (.pdf)
                    </a>

                    <!-- QR Kod (Mobil Erişim İçin) -->
                    <div class="qr-box">
                        <!-- Buraya kendi QR kod resmini koyacağız -->
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/enesyel" alt="Mobil QR">
                        <div class="qr-text">Mobilden İncele</div>
                    </div>
                </div>

                </div>
            </section>
        `,
        iletisim: `
            <section class="contact-section reveal mx-auto-600">
                <h2>İletişim</h2>
                <p>Sorularınız için aşağıdaki formu kullanabilirsiniz.</p>
                <form id="contact-form" class="mt-2" novalidate>
                    <div class="form-group"><label>Adınız Soyadınız</label><input type="text" id="name" placeholder="Örn: Enes Yel"><small class="error-text"></small></div>
                    <div class="form-group"><label>E-posta</label><input type="email" id="email" placeholder="Örn: enes@sakarya.edu.tr"><small class="error-text"></small></div>
                    <div class="form-group"><label>Mesajınız</label><textarea id="message" rows="5" placeholder="En az 10 karakter..."></textarea><small class="error-text"></small></div>
                    <button type="submit" class="btn w-100">Gönder</button>
                </form>
                <div id="form-message"></div>
            </section>
        `
    },

    // english
    en: {
        anasayfa: `
            <section class="home-section reveal text-center py-4">
                <h1>Personal Portfolio Site</h1>
                <h2 class="typewriter-wrapper">
                    <span class="txt-type" data-wait="2000" data-words='["ISE Student", "Web Developer", "Philanthropist"]'></span>
                </h2>
                <br>
                <small class="student-id">B23120053</small>
                <p class="subtitle">Web Technologies | Backend Development | Mechanical | Hardware</p>
                <br>
                <a href="#projelerim" class="btn">View Projects</a>
                <a href="#iletisim" class="btn">Contact Me</a>
            </section>
        `,
        hakkimda: `
            <section class="about-section reveal">
                <h2>About Me</h2>
                <p>Hello everyone, my name is Enes Yel, and I am a second-year student studying Computer Systems Engineering at Sakarya University. I am also studying Mechanical Engineering as part of the double major program and Computer Hardware as a minor.</p>
                
                <br>
                <h3>Education & Experience</h3>
                <div class="timeline">
                    <!-- 2025: Web & Backend -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2025 - Present</span>
                            <h4>Web & Backend</h4>
                            <p>Focused on web technologies. Improving frontend skills with JS, HTML, CSS, Bootstrap, React, and backend with modern architectures.</p>
                        </div>
                    </div>

                    <!-- 2025: Academic -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2025</span>
                            <h4>Double Major & Minor</h4>
                            <p>Started <strong>Mechanical Engineering</strong> (Double Major) and <strong>Computer Hardware</strong> (Minor) at Sakarya University.</p>
                        </div>
                    </div>

                    <!-- 2024: ISE & C++ -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2024</span>
                            <h4>Information Systems & C++</h4>
                            <p>Started departmental courses. Reached intermediate level in C++ by mastering algorithms and software fundamentals.</p>
                        </div>
                    </div>

                    <!-- 2023: Prep School -->
                    <div class="timeline-item">
                        <span class="timeline-dot"></span>
                        <div class="timeline-content">
                            <span class="timeline-date">2023</span>
                            <h4>University Start</h4>
                            <p>Completed English Preparatory School at Sakarya University Information Systems Engineering.</p>
                        </div>
                    </div>
                </div>

                <br>
                <h2>Technical Skills</h2>
                <div class="skills-wrapper" style="max-width: 800px; margin: 0 auto;">
                    
                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>C# & .NET Core</span>
                            <span>90%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>Web Frontend (HTML/CSS/JS)</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>Python</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 85%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>SQL & Database Management</span>
                            <span>80%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 80%"></div>
                        </div>
                    </div>

                    <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>React & Modern JS</span>
                            <span>75%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 75%"></div>
                        </div>
                    </div>

                     <div class="skill-bar-container reveal">
                        <div class="skill-info">
                            <span>C++ & Algorithms</span>
                            <span>70%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 70%"></div>
                        </div>
                    </div>

                    
                    <div class="cv-section reveal">
                    <a href="assets/docs/enes-yel-cv.pdf" class="btn-download" download>
                        <span>📄</span> Download CV (.pdf)
                    </a>

                    <div class="qr-box">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/enesyel" alt="Mobile QR">
                        <div class="qr-text">Scan for Mobile</div>
                    </div>
                </div>

                </div>
            </section>
        `,
        iletisim: `
            <section class="contact-section reveal mx-auto-600">
                <h2>Contact</h2>
                <p>You can use the form below for your questions.</p>
                <form id="contact-form" class="mt-2" novalidate>
                    <div class="form-group"><label>Full Name</label><input type="text" id="name" placeholder="Ex: Dilek Yel"><small class="error-text"></small></div>
                    <div class="form-group"><label>Email</label><input type="email" id="email" placeholder="Ex: dilek16@email.com"><small class="error-text"></small></div>
                    <div class="form-group"><label>Message</label><textarea id="message" rows="5" placeholder="At least 10 characters..."></textarea><small class="error-text"></small></div>
                    <button type="submit" class="btn w-100">Send Message</button>
                </form>
                <div id="form-message"></div>
            </section>
        `
    }
};