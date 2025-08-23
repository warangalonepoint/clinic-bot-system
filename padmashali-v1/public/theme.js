<script>
function getTheme(){return localStorage.getItem('pc_theme')||'auto';}
function systemDark(){return matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;}
function activeTheme(){return getTheme()==='auto'?(systemDark()?'dark':'light'):getTheme();}
function applyTheme(){const v=activeTheme();document.documentElement.setAttribute('data-theme',v);const p=document.getElementById('theme-pill');if(p)p.textContent=v==='dark'?'🌙':'☀️';}
function cycleTheme(){const a=['auto','dark','light'];const n=a[(a.indexOf(getTheme())+1)%a.length];localStorage.setItem('pc_theme',n);applyTheme();}
matchMedia && matchMedia('(prefers-color-scheme: dark)').addEventListener('change',applyTheme);
document.addEventListener('DOMContentLoaded',applyTheme);
</script>
