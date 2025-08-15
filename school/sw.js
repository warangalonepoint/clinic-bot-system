/* School PWA – Service Worker */
const VERSION = 'v1.0.0';
const APP_SHELL = [
  './',
  './index.html',
  './parents.html',
  './teacher.html',
  './coordinator.html',
  './admin.html',
  './styles.css',
  './register-sw.js',
  './manifest.webmanifest',
  './assets/banner.png',
  './pins.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shell-' + VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k.includes('shell-') && k !== 'shell-' + VERSION) ? caches.delete(k) : null))
    )
  );
  self.clients.claim();
});

/* Strategy:
   - HTML: network-first (so you see updates), fallback cache.
   - CSS/JS/PNG: stale-while-revalidate.
*/
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== location.origin) return;

  if (req.destination === 'document' || req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open('shell-' + VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  if (['style', 'script', 'image', 'font'].includes(req.destination)) {
    event.respondWith(
      caches.match(req).then((hit) => {
        const fetcher = fetch(req).then((res) => {
          const copy = res.clone();
          caches.open('shell-' + VERSION).then((c) => c.put(req, copy));
          return res;
        });
        return hit || fetcher;
      })
    );
  }
});

// Listen for manual update ping from register-sw.js
self.addEventListener('message', (e) => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});
