// ui.js — tabs + theme + helpers

// ---- Theme toggle (persist) ----
const THEME_KEY = 'theme';
function applyTheme(theme){
  document.body.classList.toggle('light', theme==='light');
  document.body.classList.toggle('dark', theme!=='light');
  localStorage.setItem(THEME_KEY, theme);
}
export function toggleTheme(){
  const t = localStorage.getItem(THEME_KEY)==='light' ? 'dark' : 'light';
  applyTheme(t);
}
window.toggleTheme = toggleTheme;
applyTheme(localStorage.getItem(THEME_KEY) || 'dark');

// ---- Tabs (declarative) ----
function initTabs(){
  document.querySelectorAll('.tab-list').forEach(list=>{
    list.addEventListener('click', (e)=>{
      const btn = e.target.closest('.tab-btn'); if(!btn) return;
      const id = btn.getAttribute('data-tab');
      const root = list.parentElement.parentElement; // tabs -> wrapper -> page
      // update buttons
      list.querySelectorAll('.tab-btn').forEach(b=>b.setAttribute('aria-selected','false'));
      btn.setAttribute('aria-selected','true');
      // update panels
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      document.getElementById(id)?.classList.add('active');
    });
    // ensure first selected button is active on load
    const first = list.querySelector('.tab-btn[aria-selected="true"]') || list.querySelector('.tab-btn');
    if(first){
      first.setAttribute('aria-selected','true');
      const id = first.getAttribute('data-tab');
      document.getElementById(id)?.classList.add('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', initTabs);
