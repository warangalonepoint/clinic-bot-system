// theme.js v16  (old model: toggles body.dark)
(function () {
  const KEY = 'pc_theme'; // 'light' | 'dark'

  function getTheme(){ try { return localStorage.getItem(KEY) || 'light'; } catch { return 'light'; } }
  function setTheme(v){ try { localStorage.setItem(KEY, v); } catch {} }

  window.applyTheme = function(){
    const t = getTheme();
    document.body.classList.toggle('dark', t === 'dark');
    const pill = document.getElementById('theme-pill');
    if (pill) pill.textContent = (t === 'dark') ? '🌙' : '☀️';
  };

  window.cycleTheme = function(){
    setTheme(getTheme()==='dark' ? 'light' : 'dark');
    applyTheme();
  };

  document.addEventListener('DOMContentLoaded', applyTheme);
})();
