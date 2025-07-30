const CACHE_NAME = 'bookingbot-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bookings.html',
  '/logs.html',
  '/staff.html',
  '/sync.html',
  '/confirmation.html',
  '/manifest.json',
  '/offline.html',
  '/assets/logos/bookingbot-icon-192.png',
  '/assets/logos/bookingbot-icon-512.png',
  '/assets/css/style.css',
  '/assets/js/main.js'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
