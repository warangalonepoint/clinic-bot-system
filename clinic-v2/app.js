// Theme toggle (only JS we actually need)
const KEY = 'onestop-theme';
if (localStorage.getItem(KEY) === 'light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light') ? 'light' : 'dark');
});

// Show/hide banner: only on Overview
function syncBannerWithTab() {
  const hash = (location.hash || '#overview').toLowerCase();
  document.querySelector('.hero').style.display = hash === '#overview' ? '' : 'none';
}
window.addEventListener('hashchange', syncBannerWithTab);
syncBannerWithTab();

// If there IS a hash, remove the "default" class so CSS shows the right tab
(function ensureCorrectDefault(){
  if (location.hash) {
    document.querySelectorAll('.tabpage.default').forEach(el => el.classList.remove('default'));
  }
})();
