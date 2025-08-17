// --- KILL OLD SW CACHE ONCE ---
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(list => {
    list.forEach(reg => reg.unregister());
    // also wipe caches
    if (window.caches) caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
  });
}

// theme toggle
const KEY='onestop-theme';
if (localStorage.getItem(KEY)==='light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light')?'light':'dark');
});
