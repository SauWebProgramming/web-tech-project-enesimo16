// PWA


const CACHE_NAME = 'enes-portfolio-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './css/theme.css',   
    './js/app.js',
    './js/pages.js',
    './js/theme.js'      
  ]

// Önbelleğe alma.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Dosyalar önbelleğe alınıyor...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Önbellek temizleme.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service Worker] Eski önbellek siliniyor:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// FETCH
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Önbellekte varsa onu döndür, yoksa internetten çek
        return response || fetch(event.request);
      })
      .catch(() => {
        // Eğer hem önbellekte yok hem internet yoksa.
        console.log('İnternet yok ve dosya önbellekte bulunamadı.');
      })
  );
});