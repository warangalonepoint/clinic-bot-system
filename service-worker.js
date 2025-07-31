const CACHE_NAME = "bookingbot-cache-v1";
const urlsToCache = [
  "index.html",
  "dashboard.html",
  "logs.html",
  "bookings.html",
  "manifest.json",
  "logo-192.png",
  "logo-512.png",
  "styles.css", // Add any CSS you use
  "script.js"    // Add your JS files here
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
