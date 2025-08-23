// theme.js (old model - body.dark)
(function () {
  const KEY = 'pc_theme'; // 'light' | 'dark'

  function getTheme() {
    try { return localStorage.getItem(KEY) || 'light'; } catch { return 'light'; }
  }
  function setTheme(v) {
    try { localStorage.setItem(KEY, v); } catch {}
  }

  // Apply by toggling body.dark (old model)
  window.applyTheme = function applyTheme() {
    const t = getTheme();
    document.body.classList.toggle('dark', t === 'dark');
    // update pill (if present)
    const pill = document.getElementById('theme-pill');
    if (pill) pill.textContent = (t === 'dark') ? '🌙' : '☀️';
  };

  // Toggle + persist
  window.cycleTheme = function cycleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme();
  };

  // Init
  document.addEventListener('DOMContentLoaded', applyTheme);
})();
