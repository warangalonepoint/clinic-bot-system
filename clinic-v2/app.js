// tiny theme toggle
const KEY='onestop-simple-theme';
if(localStorage.getItem(KEY)==='light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light')?'light':'dark');
});

// show correct tab content + hide banner off Home
function sync(){
  const h=(location.hash||'#home').toLowerCase();
  document.querySelectorAll('.page.default').forEach(p=>p.classList.remove('default'));
  document.querySelector('.hero')?.style.setProperty('display', h==='#home'?'':'none');
}
window.addEventListener('hashchange',sync); sync();
