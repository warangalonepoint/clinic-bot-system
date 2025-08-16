/* Onestop Clinic — PWA Service Worker */
const CACHE_NAME = "clinic-pwa-glass-v6";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./booking.html",
  "./doctor.html",
  "./staff.html",
  "./admin.html",
  "./styles.css?v=glass6",
  "./assets/clinic_banner.png",
  "./assets/logo.png",
  "./manifest.webmanifest"
];

// Install: cache core
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS)));
});

// Activate: drop old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first for CSS (so style updates land instantly),
// cache-first for everything else.
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  const isCSS = url.pathname.endsWith("/styles.css") || url.searchParams.get("v")?.startsWith("glass");
  if (isCSS) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((hit) => {
      return (
        hit ||
        fetch(e.request)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
            return res;
          })
          .catch(() => hit)
      );
    })
  );
});
