self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('clinic-v1').then(c=>c.addAll([
      './',
      './index.html',
      './styles.css',
      './assets/clinic_banner.png'
    ]))
  );
});
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res || fetch(e.request))
  );
});
