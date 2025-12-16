// LOCALSTORAGE ile note tutma 

function loadNotesPage() {
    const appContainer = document.getElementById('app-container');
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    
    const titleText = isEn ? 'My Notes' : 'Notlarım';
    const placeholderTitle = isEn ? 'Note Title' : 'Not Başlığı';
    const placeholderDesc = isEn ? 'Write something...' : 'Bir şeyler yaz...';
    const btnText = isEn ? 'Add Note' : 'Not Ekle';
    const noNoteText = isEn ? 'No notes yet.' : 'Henüz not eklenmemiş.';

    let html = `
        <div style="animation: fadeInDown 0.6s ease;">
            <h2 class="text-center" style="color: var(--text-primary, #333); font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                📝 ${titleText}
            </h2>
            <p class="text-center" style="color: var(--text-secondary, #666); margin-bottom: 3rem; font-size: 1.1rem;">
                ${isEn ? 'Save and organize your ideas' : 'Fikirlerinizi kaydedin ve organize edin'}
            </p>
        </div>
        
        <div class="note-form-container" style="max-width: 700px; margin: 0 auto 3rem auto; background: linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.08) 100%); padding: 2rem; border-radius: 20px; border: 2px solid rgba(102,126,234,0.2); box-shadow: 0 8px 32px rgba(0,0,0,0.08); animation: fadeInUp 0.6s ease;">
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <input type="text" id="note-title" placeholder="${placeholderTitle}" 
                    style="width: 100%; padding: 1rem 1.5rem; border: 2px solid transparent; border-radius: 15px; font-size: 1rem; background: white; transition: all 0.3s ease; outline: none; font-family: inherit;"
                    onfocus="this.style.borderColor='#667eea'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 20px rgba(102,126,234,0.15)'"
                    onblur="this.style.borderColor='transparent'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            </div>
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <textarea id="note-desc" rows="4" placeholder="${placeholderDesc}" 
                    style="width: 100%; padding: 1rem 1.5rem; border: 2px solid transparent; border-radius: 15px; font-size: 1rem; background: white; transition: all 0.3s ease; outline: none; resize: vertical; min-height: 120px; font-family: inherit;"
                    onfocus="this.style.borderColor='#667eea'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 20px rgba(102,126,234,0.15)'"
                    onblur="this.style.borderColor='transparent'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"></textarea>
            </div>
            <button onclick="addNote()" class="btn" 
                style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 15px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(102,126,234,0.3);"
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.4)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(102,126,234,0.3)'"
                onmousedown="this.style.transform='translateY(0)'"
                onmouseup="this.style.transform='translateY(-2px)'">
                ➕ ${btnText}
            </button>
        </div>

        <div id="notes-grid" class="notes-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        </div>
        <div id="no-notes-msg" class="text-center" style="display: none; text-align: center; padding: 4rem 2rem; color: var(--text-secondary, #666); animation: fadeIn 0.6s ease;">
            <div style="font-size: 5rem; margin-bottom: 1rem; opacity: 0.3;">📋</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; opacity: 0.8;">${noNoteText}</h3>
            <p style="opacity: 0.6; font-size: 1rem;">${isEn ? 'Use the form above to add your first note!' : 'Yukarıdaki formu kullanarak ilk notunuzu ekleyin!'}</p>
        </div>
        
        <style>
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        </style>
    `;

    appContainer.innerHTML = html;
    renderNotes();
}

function renderNotes() {
    const notesGrid = document.getElementById('notes-grid');
    const noNoteMsg = document.getElementById('no-notes-msg');
    
    const notes = JSON.parse(localStorage.getItem('myPortfolioNotes')) || [];

    if (notes.length === 0) {
        notesGrid.innerHTML = '';
        noNoteMsg.style.display = 'block';
        return;
    }

    noNoteMsg.style.display = 'none';
    let notesHtml = '';

    notes.reverse().forEach(note => {
        notesHtml += `
            <div class="note-card reveal" 
                style="background: white; padding: 1.5rem; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); position: relative; border-left: 5px solid #667eea; transition: all 0.3s ease; animation: fadeInScale 0.5s ease;"
                onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.15)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 20px rgba(0,0,0,0.08)'">
                
                <small style="color: #999; font-size: 0.85rem; display: flex; align-items: center; gap: 5px; margin-bottom: 0.5rem;">
                    📅 ${note.date}
                </small>
                
                <h3 style="margin: 0 0 0.75rem 0; font-size: 1.3rem; font-weight: 600; color: #333; line-height: 1.4;">
                    ${note.title}
                </h3>
                
                <p style="color: #555; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; margin: 0;">
                    ${note.desc}
                </p>
                
                <button onclick="deleteNote(${note.id})" 
                    style="position: absolute; top: 15px; right: 15px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(245,87,108,0.3); font-weight: bold; line-height: 1;"
                    onmouseover="this.style.transform='rotate(90deg) scale(1.1)'; this.style.boxShadow='0 5px 15px rgba(245,87,108,0.5)'"
                    onmouseout="this.style.transform='rotate(0deg) scale(1)'; this.style.boxShadow='0 3px 10px rgba(245,87,108,0.3)'">
                    ×
                </button>
            </div>
        `;
    });

    notesGrid.innerHTML = notesHtml;

    if (document.body.classList.contains('dark-mode')) {
        document.querySelectorAll('.note-card').forEach(card => {
            card.style.background = 'rgba(30, 41, 59, 0.8)';
            card.style.borderLeftColor = '#764ba2';
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (title) title.style.color = '#fff';
            if (desc) desc.style.color = '#cbd5e1';
        });
    }
}

function addNote() {
    const titleInput = document.getElementById('note-title');
    const descInput = document.getElementById('note-desc');

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === '' || desc === '') {
        if(typeof Toast !== 'undefined') Toast.show('Lütfen boş alan bırakmayın.', 'error');
        else alert('Boş alan bırakmayın!');
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title,
        desc: desc,
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString().slice(0,5)
    };

    const notes = JSON.parse(localStorage.getItem('myPortfolioNotes')) || [];
    notes.push(newNote);
    localStorage.setItem('myPortfolioNotes', JSON.stringify(notes));

    titleInput.value = '';
    descInput.value = '';
    renderNotes();
    
    if(typeof Toast !== 'undefined') Toast.show('Not kaydedildi! ✅', 'success');
}

function deleteNote(id) {
    if(!confirm('Bu notu silmek istediğine emin misin?')) return;

    let notes = JSON.parse(localStorage.getItem('myPortfolioNotes')) || [];
    notes = notes.filter(note => note.id !== id);
    
    localStorage.setItem('myPortfolioNotes', JSON.stringify(notes));
    renderNotes();
    
    if(typeof Toast !== 'undefined') Toast.show('Not silindi. 🗑️', 'info');
}