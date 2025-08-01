const cacheName = 'bookingbot-cache-v1';
const assets = [
  './clinic-dashboard.html',
  './manifest.json',
  './logo.png',
  './plans.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
