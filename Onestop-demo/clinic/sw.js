/* sw.js — Clinic PWA */
const SW_VERSION = 'v7';                 // bump this to invalidate old caches
const STATIC_CACHE = `static-${SW_VERSION}`;
const STATIC_ASSETS = [
  './',
  './index.html',
  './admin.html',
  './doctor.html',
  './booking.html',
  './reset.html',
  './staff.html',
  './styles.css',
  './manifest.webmanifest',
  './assets/clinic_banner.png',
  './assets/admin.png',
  './assets/doctor.png',
  './assets/booking.png',
  './assets/reset.png',
  './assets/logo.png'
  // NOTE: intentionally NOT including pins.json
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(STATIC_ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

// Network-first for pins.json (never cache), cache-first for everything else
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Always bypass cache for pins.json
  if (url.pathname.endsWith('/pins.json')) {
    e.respondWith(
      fetch(new Request(e.request, { cache: 'no-store' }))
        .catch(() => new Response('{"error":"offline"}', { status: 503, headers: { 'Content-Type': 'application/json' } }))
    );
    return;
  }

  // Normal: cache-first for app shell/assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // only cache GET success, skip opaque/cross-origin if you want
        const copy = res.clone();
        if (e.request.method === 'GET' && res.ok && url.origin === location.origin) {
          caches.open(STATIC_CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        }
        return res;
      }).catch(() => {
        // Optional: offline fallback
        if (e.request.destination === 'document') return caches.match('./index.html');
      });
    })
  );
});
