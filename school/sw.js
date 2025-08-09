const CACHE = "school-pwa-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./parents.html",
  "./teacher.html",
  "./coordinator.html",
  "./admin.html",
  "./styles.css",
  "./assets/banner.png",
  "./assets/logo.png",
  "./pins.json"
];

// Install
self.addEventListener("install", (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

// Activate (clean old)
self.addEventListener("activate", (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener("fetch", (e)=>{
  if(e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isHTML = url.pathname.endsWith(".html") || url.pathname === "/";

  if(isHTML){
    e.respondWith(
      fetch(e.request).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy));
        return resp;
      }).catch(()=>caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
