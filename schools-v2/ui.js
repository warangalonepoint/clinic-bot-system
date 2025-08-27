/* Ping Schools – shared UI */
const $ = (q,r=document)=>r.querySelector(q);
const $$ = (q,r=document)=>Array.from(r.querySelectorAll(q));

/* THEME */
const THEME='ping_school_theme';
function setTheme(t){ document.documentElement.classList.toggle('dark', t==='dark'); localStorage.setItem(THEME,t);
  const tgl=$('#themeToggle'); if(tgl) tgl.textContent=t==='dark'?'☀️':'🌙'; }
setTheme(localStorage.getItem(THEME)||'light');
$('#themeToggle')?.addEventListener('click',()=>setTheme(document.documentElement.classList.contains('dark')?'light':'dark'));

/* LANGUAGE */
const LANG='ping_school_lang';
const i18n={
  en:{ app:'Ping Schools', login_title:'Login PIN', welcome:'Welcome', pin_ph:'4–8 digit PIN', submit:'Submit',
      dash:'Dashboard', classes:'Classes', attendance:'Attendance', exams:'Exams', fees:'Fees', notices:'Notices',
      k_students:'Students',k_teachers:'Teachers',k_present:'Present Today',k_dues:'Fee Dues',
      quick:'Quick Actions', mark:'Mark Attendance', notice:'New Notice',
      my_classes:'My Classes', homework:'Homework', leaves:'Leaves', parents:'Parents', coordinator:'Coordinator', admin:'Admin'
  },
  te:{ app:'పింగ్ స్కూల్స్', login_title:'పిన్ నమోదు', welcome:'స్వాగతం', pin_ph:'4–8 అంకెల పిన్', submit:'సబ్మిట్',
      dash:'డాష్‌బోర్డ్', classes:'తరగతులు', attendance:'హాజరు', exams:'పరీక్షలు', fees:'ఫీజులు', notices:'నోటీసులు',
      k_students:'విద్యార్థులు',k_teachers:'గురువులు',k_present:'ఈరోజు హాజరు',k_dues:'బకాయిలు',
      quick:'త్వరిత చర్యలు', mark:'హాజరు నమోదు', notice:'క్రొత్త నోటీస్',
      my_classes:'నా తరగతులు', homework:'హోంవర్క్', leaves:'అనుమతులు', parents:'తల్లిదండ్రులు', coordinator:'కోఆర్డినేటర్', admin:'అడ్మిన్'
  }
};
function setLang(code){
  const dict=i18n[code]||i18n.en;
  $$('[data-i]').forEach(el=>{ const k=el.getAttribute('data-i'); if(dict[k]) el.textContent=dict[k];});
  $('#app_title')?.textContent=dict.app;
  localStorage.setItem(LANG,code);
  $$('.langChip').forEach(b=>b.classList.toggle('active', b.dataset.lang===code));
}
setLang(localStorage.getItem(LANG)||'en');
$$('.langChip').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));

/* INDEX: PIN router (optional pins.json; falls back to default map) */
async function initLogin(){
  const pinInp=$('#pin');
  if(!pinInp) return;
  const mapDefault={ '1111':'teacher.html', '2222':'coordinator.html', '3333':'parents.html', '9999':'admin.html' };
  let map=mapDefault;
  try{
    const res=await fetch('pins.json'); if(res.ok){ map=await res.json(); }
  }catch{}
  $('#loginForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    const pin=(pinInp.value||'').trim();
    const goto=map[pin];
    if(!goto){ alert('Invalid PIN'); return; }
    location.href=goto;
  });
}

/* SIMPLE TABS (role pages) */
function initTabs(){
  const tabs=$('#tabs'); if(!tabs) return;
  tabs.addEventListener('click',e=>{
    const b=e.target.closest('.nav-pill'); if(!b) return;
    $$('#tabs .nav-pill').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    const id=b.dataset.tab; $$('section[data-screen]').forEach(s=>s.classList.toggle('hidden', s.dataset.screen!==id));
  });
}

/* Demo data fillers (dashboard) */
function fillKPIs(){
  $('#k_students')?.(function(){}) // noop if not present
  if(!$('#k_students')) return;
  $('#k_students').textContent='842';
  $('#k_teachers').textContent='58';
  $('#k_present').textContent='791';
  $('#k_dues').textContent='76';
}

initLogin();
initTabs();
fillKPIs();
