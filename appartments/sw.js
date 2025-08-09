const CACHE = "apt-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./residents.html",
  "./guards.html",
  "./committee.html",
  "./admin.html",
  "./styles.css",
  "./assets/apartments_banner.png",
  "./assets/logo.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e=>{
  const url = new URL(e.request.url);
  if(e.request.method!=="GET"){ return; }
  // Network-first for HTML, cache-first for assets
  if(url.pathname.endsWith(".html") || url.pathname==="/" ){
    e.respondWith(fetch(e.request).then(r=>{
      const copy = r.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy));
      return r;
    }).catch(()=>caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(cached=>cached || fetch(e.request)));
  }
});
