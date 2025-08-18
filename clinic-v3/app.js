// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    panels.forEach(p=>{
      p.dataset.active = (p.id === target) ? 'true' : 'false';
    });
  });
});

// Theme toggle (dark = default)
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const applyTheme = (mode)=>{
  if(mode === 'light'){ root.classList.add('light'); sun.classList.add('hidden'); moon.classList.remove('hidden'); }
  else { root.classList.remove('light'); sun.classList.remove('hidden'); moon.classList.add('hidden'); }
  localStorage.setItem('glass-theme', mode);
};

applyTheme(localStorage.getItem('glass-theme') || 'dark');

toggle.addEventListener('click', ()=>{
  const isLight = root.classList.contains('light');
  applyTheme(isLight ? 'dark' : 'light');
});
