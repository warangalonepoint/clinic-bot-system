const CACHE_NAME = 'clinic-bot-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/logs.html',
  '/bookings.html',
  '/freeplan.html',
  '/paidplan.html',
  '/premiumplan.html',
  '/manifest.json',
  '/sync.html',
  '/service-worker.js',
  '/slots.csv',
  '/logo.png',
  '/favicon.ico'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch Interceptor
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
