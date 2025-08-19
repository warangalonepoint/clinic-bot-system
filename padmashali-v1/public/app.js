// --- Simple helpers ---
const $ = (s,sc=document)=>sc.querySelector(s);
const $$ = (s,sc=document)=>[...sc.querySelectorAll(s)];

// --- i18n (English/Telugu) ---
let LANG = localStorage.getItem('pdm-lang') || 'en';
let DICT = {};
async function loadLang(code){
  const res = await fetch(`locales/${code}.json`);
  DICT = await res.json(); LANG = code;
  localStorage.setItem('pdm-lang', LANG);
  applyI18n();
}
function applyI18n(){
  $$('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n; if(DICT[k]) el.textContent = DICT[k];
  });
  $$('[data-i18n-ph]').forEach(el=>{
    const k = el.dataset.i18nPh; if(DICT[k]) el.setAttribute('placeholder', DICT[k]);
  });
  const hallSel = $('#hallSel');
  if(hallSel && DICT['_opt.h1']) {
    hallSel.options[0].text = DICT['_opt.h1'];
    hallSel.options[1].text = DICT['_opt.h2'];
  }
  const hallTime = $('#hallTime');
  if(hallTime && DICT['_opt.m']) {
    hallTime.options[0].text=DICT['_opt.m'];
    hallTime.options[1].text=DICT['_opt.a'];
    hallTime.options[2].text=DICT['_opt.e'];
    hallTime.options[3].text=DICT['_opt.f'];
  }
  // Button label
  const lb = $('#langBtn'); if(lb) lb.textContent = (LANG==='te'?'English':'తెలుగు');
}

// --- Login (PINs) ---
const PINS = { member:'1111', committee:'5555', admin:'9999' };
let ROLE = 'member';

function showApp(role){
  ['appHeader','banner','tabbar','content'].forEach(id=>$('#'+id)?.classList.remove('hide'));
  $('#login')?.classList.add('hide');
  $$('.admin-only').forEach(el=> el.style.display = (role==='admin'||role==='committee')?'':'none');
  localStorage.setItem('pdm-role', role);
}
function showLogin(){
  ['appHeader','banner','tabbar','content'].forEach(id=>$('#'+id)?.classList.add('hide'));
  $('#login')?.classList.remove('hide');
  localStorage.removeItem('pdm-role');
  $('#pinInput').value=''; $('#loginMsg').textContent='';
}

function initLogin(){
  $$('.tab-mini').forEach(btn=>{
    btn.addEventListener('click',()=>{
      $$('.tab-mini').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active'); ROLE = btn.dataset.role;
    });
  });
  $('#loginBtn')?.addEventListener('click',()=>{
    const pin = $('#pinInput').value.trim();
    if(pin===PINS[ROLE]) showApp(ROLE);
    else $('#loginMsg').textContent = (LANG==='te'?'తప్పు PIN':'Invalid PIN');
  });
  $('#logoutBtn')?.addEventListener('click', showLogin);

  const saved = localStorage.getItem('pdm-role');
  if(saved) showApp(saved); else showLogin();
}

// --- Tabs ---
function initTabs(){
  const btns = $$('.tab-btn');
  const views = $$('.tab-content');
  function activate(id){
    btns.forEach(b=>b.classList.toggle('active', b.dataset.tab===id));
    views.forEach(v=>v.classList.toggle('active', v.id===id));
  }
  btns.forEach(b=>b.addEventListener('click', ()=>activate(b.dataset.tab)));
  if(btns[0]) activate(btns[0].dataset.tab);
}

// --- Halls (basic actions) ---
function initHalls(){
  const d = $('#hallDate'); if(d) d.value = new Date().toISOString().slice(0,10);
  $('#hallCheck')?.addEventListener('click', ()=> $('#hallMsg').textContent = (LANG==='te'?'అందుబాటులో ఉండేలా కనిపిస్తోంది':'Looks available'));
  $('#hallBook')?.addEventListener('click', ()=>{
    const msg = encodeURIComponent('Hall booking request from app');
    window.open(`https://wa.me/919999999999?text=${msg}`,'_blank');
  });
}

// --- Loan form quick validate ---
function initLoan(){
  $('#lrSubmit')?.addEventListener('click', ()=>{
    const ok = $('#lrName').value && $('#lrPhone').value && $('#lrAmt').value;
    $('#lrMsg').textContent = ok ? '✓ Submitted (demo)' : (LANG==='te'?'పేరు, ఫోన్, మొత్తం కావాలి':'Name, phone, amount required');
  });
}

// --- Lang + Theme ---
function initGlobal(){
  $('#langBtn')?.addEventListener('click', async ()=>{
    await loadLang(LANG==='en'?'te':'en');
  });
  $('#themeToggle')?.addEventListener('click', (e)=>{
    document.body.classList.toggle('light');
    e.currentTarget.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });
}

// --- Bootstrap ---
(async function start(){
  await loadLang(LANG);
  initLogin();
  initTabs();
  initHalls();
  initLoan();
  initGlobal();
})();
