document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.card').forEach(el=>el.classList.add('glass'));
  document.querySelectorAll('.tile').forEach(el=>el.classList.add('glass'));
  document.querySelectorAll('.ghost').forEach(el=>el.classList.add('glass'));
  if(!localStorage.getItem('pc_uid')) localStorage.setItem('pc_uid','U'+Math.random().toString(36).slice(2,10));
});
