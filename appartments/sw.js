// ----- Onestop Apartments SW (v5) -----
const CACHE = "apts-v5";
const CORE = [
  "./",
  "./index.html",
  "./residents.html",
  "./guards.html",
  "./committee.html",
  "./admin.html",
  "./styles.css",
  "./pins.json",
  "./assets/banner.png",
  "./assets/logo.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for HTML, cache-first for others
self.addEventListener("fetch", e => {
  const req = e.request;
  const isHTML = req.headers.get("accept")?.includes("text/html");
  if (isHTML) {
    e.respondWith(
      fetch(req).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return r;
      }).catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
  } else {
    e.respondWith(
      caches.match(req).then(r => r || fetch(req).then(net => {
        const copy = net.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return net;
      }))
    );
  }
});
