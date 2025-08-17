// Theme toggle
const THEME_KEY = 'onestop-theme';
if (localStorage.getItem(THEME_KEY) === 'light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(THEME_KEY, document.body.classList.contains('light') ? 'light' : 'dark');
});

// Tab router (hash-based so tabs can be linked)
const tabs = Array.from(document.querySelectorAll('.tab'));
const pages = Array.from(document.querySelectorAll('.tabpage'));
const byId = (id) => document.getElementById(id);

function showTab(name, pushHash=true){
  pages.forEach(p => p.classList.toggle('active', p.id === `tab-${name}`));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  if (pushHash) location.hash = `tab=${name}`;
  // extras
  document.querySelector('.hero').style.display =
    (name === 'overview') ? '' : (document.getElementById('bannerToggle')?.checked ? '' : 'none');
}

tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
document.querySelectorAll('[data-tab]').forEach(el => {
  // allow cards inside pages to navigate tabs
  if (!el.classList.contains('tab')) el.addEventListener('click', () => showTab(el.dataset.tab));
});

// hash sync
function readHash(){
  const m = /tab=([a-z]+)/.exec(location.hash || '');
  return m ? m[1] : 'overview';
}
window.addEventListener('hashchange', () => showTab(readHash(), false));
showTab(readHash(), false);

// simple setting toggles
document.getElementById('bannerToggle')?.addEventListener('change', (e) => {
  const on = e.target.checked;
  document.querySelector('.hero').style.display = on ? '' : 'none';
});
document.getElementById('compactToggle')?.addEventListener('change', (e) => {
  document.body.classList.toggle('compact', e.target.checked);
});
