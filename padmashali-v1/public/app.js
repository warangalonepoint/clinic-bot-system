// Tabs
(function(){
  const btns=document.querySelectorAll('.tab-btn');
  const views=document.querySelectorAll('.tab-content');
  function activate(id){
    btns.forEach(b=>b.classList.toggle('active',b.dataset.tab===id));
    views.forEach(v=>v.classList.toggle('active',v.id===id));
  }
  btns.forEach(b=>b.addEventListener('click',()=>activate(b.dataset.tab)));
  if(btns[0]) activate(btns[0].dataset.tab);
})();

// Language Toggle
document.getElementById('lang-toggle')?.addEventListener('click',()=>{
  const cur=document.getElementById('lang-toggle').innerText;
  document.getElementById('lang-toggle').innerText=(cur==='తెలుగు')?'English':'తెలుగు';
  alert('Language switched (demo only).');
});

// Theme Toggle
document.getElementById('theme-toggle')?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
});

// Simple PIN demo
function checkPin(role,pin){
  if(role==='Member' && pin==='1111') return true;
  if(role==='Committee' && pin==='5555') return true;
  if(role==='Admin' && pin==='9999') return true;
  return false;
}
