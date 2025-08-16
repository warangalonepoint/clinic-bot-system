// theme toggle (persists across reloads)
const key = 'onestop-theme';
const saved = localStorage.getItem(key);
if (saved === 'light') document.body.classList.add('light');

document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(key, document.body.classList.contains('light') ? 'light' : 'dark');
});
