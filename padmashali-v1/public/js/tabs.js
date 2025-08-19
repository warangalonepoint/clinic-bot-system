document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.tabs button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab=btn.getAttribute('data-tab');
      document.getElementById('tab-title').innerText=tab.charAt(0).toUpperCase()+tab.slice(1);
      document.getElementById('tab-content').innerText='Content for '+tab;
    });
  });
});