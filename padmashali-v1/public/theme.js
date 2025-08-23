<script>
  // Theme: 'auto' (default), 'dark', 'light'
  function getTheme(){ return localStorage.getItem('pc_theme') || 'auto'; }
  function systemDark(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function activeTheme(){ return getTheme()==='auto' ? (systemDark()?'dark':'light') : getTheme(); }
  function applyTheme(){
    const v=activeTheme(); document.documentElement.setAttribute('data-theme', v);
    const pill=document.getElementById('theme-pill'); if(pill) pill.textContent = v==='dark'?'🌙':'☀️';
  }
  function cycleTheme(){
    const options=['auto','dark','light']; const next=options[(options.indexOf(getTheme())+1)%options.length];
    localStorage.setItem('pc_theme', next); applyTheme();
  }
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  document.addEventListener('DOMContentLoaded', applyTheme);
</script>
