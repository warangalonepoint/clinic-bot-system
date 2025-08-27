// sw.js — no-op SW to avoid fetch/activate loops
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(clients.claim()); });
// No fetch handler → SW will not intercept requests
