// /school/sw.js
// Basic cache for static assets. Supabase traffic is network-only.

const CACHE_NAME = "school-pwa-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./parents.html",
  "./teacher.html",
  "./styles.css",
  "./ui.js",
  "./js/supabase.js",
  "./js/diary.js",
  "./manifest.webmanifest",
  "./assets/banner.png",
  "./assets/logo.png"
];

// Don’t touch Supabase traffic
const SUPABASE_HOST_PART = "supabase.co";

// Install: pre-cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for same-origin static; network-only for Supabase
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET
  if (req.method !== "GET") return;

  // Bypass Supabase APIs completely (auth/db/storage)
  if (url.hostname.includes(SUPABASE_HOST_PART)) {
    return; // let the network handle it; no caching
  }

  // Only cache same-origin files
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((resp) => {
          // Cache successful GETs
          const copy = resp.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return resp;
        }).catch(() => {
          // Optional: offline fallback
          if (req.destination === "document") {
            return caches.match("./index.html");
          }
        });
      })
    );
  }
});
