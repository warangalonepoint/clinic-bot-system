// Simple service worker for offline shell
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("school-pwa").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./login.html",
        "./signup.html",
        "./logout.html",
        "./styles.css",
        "./ui.js",
        "./manifest.webmanifest"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
