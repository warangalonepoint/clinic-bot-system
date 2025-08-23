<script>
  // Theme: 'dark' | 'light' | 'auto'
  function getTheme(){ return localStorage.getItem('pc_theme') || 'auto'; }
  function systemPrefersDark(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function currentThemeValue(){
    const pref=getTheme();
    return pref==='auto' ? (systemPrefersDark() ? 'dark' : 'light') : pref;
  }
  function applyTheme(){
    const v=currentThemeValue();
    document.documentElement.setAttribute('data-theme', v);
    const btn=document.getElementById('theme-pill');
    if(btn) btn.textContent = v==='dark' ? '🌙' : '☀️';
  }
  function cycleTheme(){
    const order=['auto','dark','light'];
    const next=order[(order.indexOf(getTheme())+1)%order.length];
    localStorage.setItem('pc_theme', next);
    applyTheme();
  }
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  document.addEventListener('DOMContentLoaded', applyTheme);
</script>
