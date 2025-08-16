// ================================
// Neon Glass UI Core (locked)
// ================================

// Theme ---------------------------------------------------
(function initTheme(){
  const qs = new URLSearchParams(location.search);
  const saved = qs.get('theme') || localStorage.getItem('theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');
  else document.body.classList.add('dark');
})();

window.toggleTheme = function(){
  const light = document.body.classList.toggle('light');
  if (!light) document.body.classList.add('dark'); else document.body.classList.remove('dark');
  localStorage.setItem('theme', light ? 'light' : 'dark');
};

// Tabs ----------------------------------------------------
export function initTabs(scope=document){
  const wrap = scope.getElementById('tabs');
  if (!wrap) return;
  const chips = [...wrap.querySelectorAll('.chip')];
  const panels = [...scope.querySelectorAll('[id^="panel-"]')];

  const show = (name) => {
    chips.forEach(c => c.classList.toggle('is-active', c.dataset.tab === name));
    panels.forEach(p => p.hidden = !p.id.endsWith(name));
  };

  const first = chips[0]?.dataset.tab;
  if (first) show(first);

  wrap.addEventListener('click', e=>{
    const b = e.target.closest('.chip'); if (!b) return;
    show(b.dataset.tab);
  });
}

// Tiny toast ----------------------------------------------
export function toast(msg='Saved'){
  let t = document.querySelector('.toast');
  if(!t){ t = document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1300);
}

// Offline queue (very small) -------------------------------
// Queue shape: [{type:'broadcast', payload:{...}, ts:Date.now()}]
export const Queue = {
  get(){ try{ return JSON.parse(localStorage.getItem('queue')||'[]'); }catch{ return []; } },
  set(list){ localStorage.setItem('queue', JSON.stringify(list)); },
  push(item){ const l=this.get(); l.push(item); this.set(l); toast('Queued (offline)'); },
  flush(handler){
    if(!navigator.onLine) return;
    const list=this.get(); if(!list.length) return;
    list.forEach(handler);
    this.set([]);
    toast('Queued actions sent');
  }
};

// On load, wire any forms with [data-queue]
export function bindQueueForms(scope=document){
  scope.querySelectorAll('form[data-queue]').forEach(form=>{
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const fd = new FormData(form);
      const payload = {}; fd.forEach((v,k)=>payload[k]=v);
      if(!navigator.onLine){
        Queue.push({type: form.dataset.queue, payload, ts: Date.now()});
      }else{
        // demo: pretend request OK
        toast('Submitted');
      }
      form.reset?.();
    });
  });

  window.addEventListener('online', ()=>{
    Queue.flush((it)=>{ /* send to server here if available */ });
  });
}

// PIN banner hook (optional) -------------------------------
export function showLoadedPins(keys){
  const el = document.getElementById('pin-info');
  if(!el) return;
  el.textContent = `Loaded pins.json ✓ Keys: ${keys.join(', ')}`;
  el.style.fontSize='12px'; el.classList.add('text-dim');
}
