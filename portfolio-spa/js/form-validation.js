function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfa yenilemesini engellemek icin.
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const msgDiv = document.getElementById('form-message'); 

            let isValid = true;

            // --- DİL DESTEĞİ İÇİN DEĞİŞKENLERİ TANIMLIYORUZ ---
            const errName = currentLang === 'en' ? 'Name cannot be empty.' : 'İsim alanı boş bırakılamaz.';
            const errEmailEmpty = currentLang === 'en' ? 'Email cannot be empty.' : 'E-posta alanı boş bırakılamaz.';
            const errEmailInvalid = currentLang === 'en' ? 'Please enter a valid email address.' : 'Geçerli bir e-posta adresi giriniz.';
            const errMsgLength = currentLang === 'en' ? 'Message must be at least 10 characters.' : 'Mesajınız en az 10 karakter olmalıdır.';
            const successMsg = currentLang === 'en' ? '<strong>Awesome!</strong> Message sent successfully!!!' : '<strong>Harika!</strong> Mesajınız başarıyla gönderildi!!!';

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

            // Burada klasik modelState.isValid gibi kontrol yapıyoruz.
            if (isValid) {
                // Backend olmadığı için görsel başarı mesajı veriyoruz
                msgDiv.innerHTML = `
                    <div style="background:#d4edda; color:#155724; padding:1rem; border-radius:10px; margin-top:1rem; text-align:center; border: 1px solid #c3e6cb;">
                        ${successMsg}
                    </div>
                `;
                
                form.reset(); // çizgileri kaldırmak için
                setTimeout(() => {
                    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('success'));
                    msgDiv.innerHTML = '';
                }, 5000);
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