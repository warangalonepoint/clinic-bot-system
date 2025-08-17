// sw.js — glass UI, force-refresh friendly
const CACHE = 'onestop-glass-v5'; // bump this to bust old caches
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=glass-1708',
  './app.js?v=glass-1708',
  './assets/logo.png',
  './assets/banner.png'
];

// install fast + take control
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for everything (so updates win), cache fallback offline
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    try {
      const fresh = await fetch(e.request, { cache: 'no-store' });
      const cache = await caches.open(CACHE);
      cache.put(e.request, fresh.clone());
      return fresh;
    } catch {
      return (await caches.match(e.request)) || new Response('Offline', { status: 503 });
    }
  })());
});
