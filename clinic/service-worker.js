// service-worker.js
const CACHE_NAME = 'clinic-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './clinic-dashboard.html',
  './bookings.html',
  './logs.html',
  './staff.html',
  './logo.png',
  './manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
