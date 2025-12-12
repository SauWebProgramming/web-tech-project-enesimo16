// emajil.js konfigürasyonu eklendi.
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfa yenilemesini engellemek icin.
            
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const msgDiv = document.getElementById('form-message'); 

            let isValid = true;

            // DİL DESTEĞİ İÇİN DEĞİŞKENLERİ TANIMLIYORUZ 
            const errName = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Name cannot be empty.' : 'İsim alanı boş bırakılamaz.';
            const errEmailEmpty = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Email cannot be empty.' : 'E-posta alanı boş bırakılamaz.';
            const errEmailInvalid = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Please enter a valid email address.' : 'Geçerli bir e-posta adresi giriniz.';
            const errMsgLength = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Message must be at least 10 characters.' : 'Mesajınız en az 10 karakter olmalıdır.';
            // successMsg değişkeni EmailJS başarılı olursa kullanılacak

            if (nameInput.value.trim() === '') {
                setError(nameInput, errName);
                isValid = false;
            } else {
                setSuccess(nameInput);
            }

            // Oluşturduğumuz isEmail'de regex kullanmıştık onu burada kontrol ediyoruz.
            if (emailInput.value.trim() === '') {
                setError(emailInput, errEmailEmpty);
                isValid = false;
            } else if (!isEmail(emailInput.value.trim())) {
                setError(emailInput, errEmailInvalid);
                isValid = false;
            } else {
                setSuccess(emailInput);
            }

            if (messageInput.value.trim().length < 10) {
                setError(messageInput, errMsgLength);
                isValid = false;
            } else {
                setSuccess(messageInput);
            }

            // isvalid kontrolü yapıyoruz ve backend olmadıgından text olarak success
            if (isValid) {
                // EmailJS Başlangıç
                btn.innerText = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Sending...' : 'Gönderiliyor...';
                btn.disabled = true;

                const serviceID = 'service_neyaj08'; 
                const templateID = 'template_ezq8bss'; 

                emailjs.sendForm(serviceID, templateID, form)
                    .then(() => {
                        // Başarılı
                        btn.innerText = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Sent!' : 'Gönderildi!';
                        btn.style.backgroundColor = '#22c55e';

                        if(typeof Toast !== 'undefined') {
                            const msg = (typeof currentLang !== 'undefined' && currentLang === 'en') 
                                ? 'Message sent successfully!' 
                                : 'Mesajınız başarıyla gönderildi!';
                            
                            Toast.show(msg, 'success');
                        }

                        form.reset(); // çizgileri kaldırmak için
                        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('success'));
                        
                        setTimeout(() => {
                            btn.innerText = originalText;
                            btn.disabled = false;
                            btn.style.backgroundColor = ''; // Rengi sıfırla
                            if(msgDiv) msgDiv.innerHTML = '';
                        }, 5000);
                    }, (err) => {
                        // Hata
                        console.error('EmailJS Error:', err);
                        btn.innerText = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Error!' : 'Hata!';
                        btn.style.backgroundColor = '#ef4444';

                        if(typeof Toast !== 'undefined') {
                            Toast.show((typeof currentLang !== 'undefined' && currentLang === 'en') ? 'Failed to send message.' : 'Mesaj gönderilemedi.', 'error');
                        }

                        setTimeout(() => {
                            btn.innerText = originalText;
                            btn.disabled = false;
                            btn.style.backgroundColor = '';
                        }, 3000);
                    });
            }
        });
    }
}

// EK

function setError(input, message) {
    const formGroup = input.parentElement; // input'un parenti olan form-group'u alıyoruz.
    const small = formGroup.querySelector('small'); 

    small.innerText = message;
    formGroup.className = 'form-group error'; 
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success'; 
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}