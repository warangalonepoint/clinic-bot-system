// Theme toggle with persistence
const KEY = 'onestop-theme';
if (localStorage.getItem(KEY) === 'light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light') ? 'light' : 'dark');
});
