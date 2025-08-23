// Simple theme manager (light/dark) for v16
(function(){
  const KEY = 'pc-theme';
  function get(){ return localStorage.getItem(KEY) || 'light'; }
  function set(t){ localStorage.setItem(KEY, t); document.documentElement.setAttribute('data-theme', t); }
  function apply(){ set(get()); updatePill(); }
  function cycle(){
    set(get()==='dark' ? 'light' : 'dark');
    updatePill();
  }
  function updatePill(){
    const btn = document.getElementById('theme-pill');
    if(!btn) return;
    btn.textContent = (get()==='dark') ? '🌙' : '☀️';
  }
  window.applyTheme = apply;
  window.cycleTheme = cycle;
  window.getTheme = get;
})();
