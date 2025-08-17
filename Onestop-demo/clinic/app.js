// app.js — kill old SW & caches once, then register this SW
(async () => {
  if ('serviceWorker' in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) await reg.unregister();
      if (window.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
    } catch {}
    // register the new one
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      reg.update();
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      navigator.serviceWorker.addEventListener('controllerchange', () => location.reload());
    } catch {}
  }
})();

// theme toggle
const KEY = 'onestop-theme';
if (localStorage.getItem(KEY) === 'light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light') ? 'light' : 'dark');
});
