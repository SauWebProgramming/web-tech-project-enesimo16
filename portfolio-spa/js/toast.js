const Toast = {
    container: null,

    init() {
        if (!document.getElementById('toast-container')) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            document.body.appendChild(this.container);
        } else {
            this.container = document.getElementById('toast-container');
        }
    },

    show(message, type = 'info', duration = 3000) {
        if (!this.container) this.init();

        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '❌';
        if (type === 'warning') icon = '⚠️';

        const toastEl = document.createElement('div');
        toastEl.className = `toast ${type}`;
        toastEl.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        `;
        this.container.appendChild(toastEl);
        setTimeout(() => {
            toastEl.classList.add('show');
        }, 10)


        setTimeout(() => {
            toastEl.classList.remove('show');
            
            setTimeout(() => {
                if(this.container.contains(toastEl)) {
                    this.container.removeChild(toastEl);
                }
            }, 300); 
        }, duration);
        
        
        toastEl.addEventListener('click', () => {
            toastEl.classList.remove('show');
            setTimeout(() => this.container.removeChild(toastEl), 300);
        });
    }
};