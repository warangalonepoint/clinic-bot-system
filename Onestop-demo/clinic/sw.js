/* Onestop Clinic Service Worker
 * Cache-first for app shell + SWR for same-origin GETs.
 */
const VERSION = "clinic-v1.0.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./doctor.html",
  "./admin.html",
  "./booking.html",
  "./styles.css",
  "./manifest.webmanifest",
  "./assets/clinic_banner.png",
  "./pins.json"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === VERSION ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

// Helper: serve from cache first, then update in background
async function staleWhileRevalidate(req) {
  const cache = await caches.open(VERSION);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req)
    .then((resp) => {
      // Cache only successful, basic/opaque GETs
      if (resp && resp.status === 200 && req.method === "GET") {
        cache.put(req, resp.clone());
      }
      return resp;
    })
    .catch(() => null);
  return cached || fetchPromise;
}

self.addEventListener("fetch", (evt) => {
  const { request } = evt;

  // Only handle GET
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  // HTML navigations: App Shell fallback (offline)
  if (request.mode === "navigate") {
    evt.respondWith(
      fetch(request).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Static shell: cache-first
  if (sameOrigin && APP_SHELL.some((p) => url.pathname.endsWith(p.replace("./", "/")))) {
    evt.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
    return;
  }

  // Everything else same-origin: SWR
  if (sameOrigin) {
    evt.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Cross-origin: try network, then cache if available
  evt.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
