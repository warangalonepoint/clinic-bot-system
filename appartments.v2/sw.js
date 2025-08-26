/* Onestop Apartments — Service Worker (v3)
   - Precaches app shell
   - Network-first for HTML + pins.json (so updates flow)
   - Cache-first for static assets
*/

const SW_VERSION = 'apt-v3';
const APP_SHELL = [
  './',
  './index.html',
  './residents.html',
  './guards.html',
  './committee.html',
  './admin.html',
  './visitors.html',
  './log.html',
  './reset.html',
  './styles.css',
  './lang.js',
  './manifest.webmanifest',
  './assets/logo.png',
  './assets/apartments_banner.png'
];

// Install: pre-cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SW_VERSION).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('apt-') && k !== SW_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== location.origin) return;

  // Network-first for HTML and pins.json (fresh content)
  const isHTML = req.destination === 'document' || req.headers.get('accept')?.includes('text/html');
  const isPins = url.pathname.endsWith('/pins.json');

  if (isHTML || isPins) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(SW_VERSION).then(cache => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for everything else (CSS/JS/images)
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        const copy = res.clone();
        caches.open(SW_VERSION).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => {
        // Optional: fallback image or nothing
        return caches.match('./assets/logo.png');
      });
    })
  );
});
