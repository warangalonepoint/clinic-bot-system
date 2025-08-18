/* ===== i18n (load FIRST) ===== */
const LANGS = { EN: 'en', TE: 'te' };
let curLang = localStorage.getItem('pdm-lang') || LANGS.EN;

const I18N = {
  en:{'app.title':'Padmashali Community','app.tagline':'unity • seva • growth',
      'tab.home':'Home','tab.directory':'Directory','tab.events':'Events','tab.halls':'Book Halls','tab.fees':'Fees','tab.loan':'Loan Request','tab.manage':'Manage',
      'home.news':'Community News','home.quick':'Quick Links','home.whatsapp':'WhatsApp Group','home.upcoming':'Upcoming Events','home.pay':'Pay Membership',
      'dir.title':'Member Directory','dir.search':'Search','dir.searchPh':'Name / Profession / City','dir.profession':'Profession',
      'events.title':'Upcoming Events',
      'halls.title':'Book Community Halls','halls.selectHall':'Select Hall','halls.timeSlot':'Time Slot','halls.purpose':'Purpose','halls.purposePh':'e.g., Engagement, Thread Ceremony','halls.check':'Check Availability','halls.book':'Send Booking Request',
      'fees.title':'Membership Fee','fees.desc':'Pay annual / lifetime fee. Receipts will be shared on WhatsApp.','fees.annual':'Annual','fees.lifetime':'Lifetime','fees.custom':'Custom Amount','fees.payBtn':'Pay via UPI','fees.amountPh':'Amount (₹)','fees.pay':'Pay',
      'loan.title':'Loan / Financial Help Request','loan.submit':'Submit Request','loan.whatsapp':'Send via WhatsApp','loan.namePh':'Applicant name','loan.phonePh':'10-digit number','loan.amountPh':'e.g., 25000','loan.purposePh':'Medical / Education / Business / Other','loan.notesPh':'Explain your need briefly',
      'manage.title':'Manage (Admins & Committee)','manage.desc':'Future: approve hall bookings, verify fee payments, review loan requests.',
      'login.title':'Login','login.member':'Member','login.committee':'Committee','login.admin':'Admin','login.pin':'Enter PIN','login.pinPh':'••••','login.btn':'Login',
      'common.date':'Date','common.name':'Full Name','common.phone':'Phone','common.amount':'Amount (₹)','common.purpose':'Purpose','common.notes':'Notes',
      '_opt.h1':'Hall 1','_opt.h2':'Hall 2','_opt.m':'Morning (8–12)','_opt.a':'Afternoon (1–5)','_opt.e':'Evening (6–10)','_opt.f':'Full Day'},
  te:{'app.title':'పద్మశాలి కమ్యూనిటీ','app.tagline':'ఐక్యత • సేవ • అభివృద్ధి',
      'tab.home':'హోమ్','tab.directory':'సభ్యుల జాబితా','tab.events':'కార్యక్రమాలు','tab.halls':'హాల్ బుకింగ్','tab.fees':'ఫీజులు','tab.loan':'ఋణ అభ్యర్థన','tab.manage':'నిర్వహణ',
      'home.news':'సంస్థ వార్తలు','home.quick':'త్వరిత లింకులు','home.whatsapp':'వాట్సాప్ గ్రూప్','home.upcoming':'రాబోయే కార్యక్రమాలు','home.pay':'సభ్యత్వ చెల్లింపు',
      'dir.title':'సభ్యుల జాబితా','dir.search':'వెతకండి','dir.searchPh':'పేరు / వృత్తి / నగరం','dir.profession':'వృత్తి',
      'events.title':'రాబోయే కార్యక్రమాలు',
      'halls.title':'సమాజ హాళ్ల బుకింగ్','halls.selectHall':'హాల్ ఎంపిక','halls.timeSlot':'సమయ స్లాట్','halls.purpose':'ఉద్దేశ్యం','halls.purposePh':'ఉదా: నిశ్చితార్థం, ఉపనయనం','halls.check':'అందుబాటులో ఉందా?','halls.book':'బుకింగ్ అభ్యర్థన పంపండి',
      'fees.title':'సభ్యత్వ ఫీజు','fees.desc':'వార్షిక / లైఫ్‌టైమ్ ఫీజు చెల్లించండి. రసీదులు వాట్సాప్‌లో పంపబడతాయి.','fees.annual':'వార్షిక','fees.lifetime':'లైఫ్‌టైమ్','fees.custom':'అనుకూల మొత్తం','fees.payBtn':'యూపీఐ ద్వారా చెల్లించండి','fees.amountPh':'మొత్తం (₹)','fees.pay':'చెల్లించండి',
      'loan.title':'ఋణం / ఆర్థిక సహాయం అభ్యర్థన','loan.submit':'అభ్యర్థన పంపండి','loan.whatsapp':'వాట్సాప్ ద్వారా పంపండి','loan.namePh':'అభ్యర్థి పేరు','loan.phonePh':'10 అంకెల మొబైల్','loan.amountPh':'ఉదా: 25000','loan.purposePh':'మెడికల్ / ఎడ్యుకేషన్ / బిజినెస్ / ఇతర','loan.notesPh':'మీ అవసరాన్ని సంక్షిప్తంగా వ్రాయండి',
      'manage.title':'నిర్వహణ (అడ్మిన్ & కమitee)','manage.desc':'తర్వాత: హాల్ బుకింగ్స్ అప్రూవ్, ఫీజు వెరిఫై, లోన్ అభ్యర్థనలు సమీక్ష.',
      'login.title':'లాగిన్','login.member':'సభ్యుడు','login.committee':'కమిటీ','login.admin':'అడ్మిన్','login.pin':'PIN ఇవ్వండి','login.pinPh':'••••','login.btn':'లాగిన్',
      'common.date':'తేదీ','common.name':'పూర్తి పేరు','common.phone':'ఫోన్','common.amount':'మొత్తం (₹)','common.purpose':'ఉద్దేశ్యం','common.notes':'గమనికలు',
      '_opt.h1':'హాల్ 1','_opt.h2':'హాల్ 2','_opt.m':'ఉదయం (8–12)','_opt.a':'మధ్యాహ్నం (1–5)','_opt.e':'సాయంత్రం (6–10)','_opt.f':'రోజంతా'}
};

function applyI18N(){
  const t = I18N[curLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n'); if(t[k]) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.getAttribute('data-i18n-ph'); if(t[k]) el.setAttribute('placeholder', t[k]);
  });
  const hallSel = document.getElementById('hallSel');
  if(hallSel){ hallSel.options[0].text = t['_opt.h1']; hallSel.options[1].text = t['_opt.h2']; }
  const hallTime = document.getElementById('hallTime');
  if(hallTime){
    hallTime.options[0].text = t['_opt.m']; hallTime.options[1].text = t['_opt.a'];
    hallTime.options[2].text = t['_opt.e']; hallTime.options[3].text = t['_opt.f'];
  }
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.textContent = (curLang===LANGS.TE) ? 'English' : 'తెలుగు';
}
applyI18N();
document.getElementById('langBtn')?.addEventListener('click', ()=>{
  curLang = (curLang===LANGS.EN)?LANGS.TE:LANGS.EN;
  localStorage.setItem('pdm-lang', curLang);
  applyI18N();
});

/* ===== Theme ===== */
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const sun = document.getElementById('sun'); const moon = document.getElementById('moon');
function setTheme(mode){
  if(mode==='light'){ root.classList.add('light'); sun?.classList.add('hidden'); moon?.classList.remove('hidden'); }
  else { root.classList.remove('light'); sun?.classList.remove('hidden'); moon?.classList.add('hidden'); }
  localStorage.setItem('pdm-theme', mode);
}
setTheme(localStorage.getItem('pdm-theme')||'dark');
toggle?.addEventListener('click', ()=> setTheme(root.classList.contains('light')?'dark':'light'));

/* ===== Role + PIN Login ===== */
const PINS = { member:'1111', committee:'5555', admin:'9999' };
let activeRole = localStorage.getItem('pdm-role') || null;

const loginSec = document.getElementById('login');
const app = document.getElementById('app');
const tabbar = document.getElementById('tabbar');
const pinInput = document.getElementById('pinInput');
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');
const roleTabs = document.querySelectorAll('.tab-mini');
let roleSel = 'member';

roleTabs.forEach(b=> b.addEventListener('click', ()=>{
  roleTabs.forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); roleSel=b.dataset.role;
}));

function applyRole(role){
  loginSec.style.display='none'; app.style.display=''; tabbar.style.display='flex';
  document.querySelectorAll('.admin-only').forEach(el=> el.style.display = (role==='admin'||role==='committee')?'':'none');
  localStorage.setItem('pdm-role', role); activeRole = role;
}
function logout(){
  localStorage.removeItem('pdm-role'); activeRole=null;
  app.style.display='none'; tabbar.style.display='none'; loginSec.style.display='';
  loginMsg.textContent=''; pinInput.value='';
}
document.getElementById('logoutBtn')?.addEventListener('click', logout);

if(activeRole){ applyRole(activeRole); } else { logout(); }
loginBtn?.addEventListener('click', ()=>{
  const ok = PINS[roleSel] && pinInput.value.trim() === PINS[roleSel];
  if(!ok){ loginMsg.textContent = (curLang===LANGS.TE ? 'తప్పు PIN' : 'Invalid PIN'); return; }
  loginMsg.textContent=''; applyRole(roleSel);
});

/* ===== Tabs ===== */
function goTab(id){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.target===id));
  document.querySelectorAll('.tab-panel').forEach(p=>p.dataset.active = (p.id===id) ? 'true':'false');
  document.querySelector(`.tab-btn[data-target="${id}"]`)?.scrollIntoView({inline:'center', behavior:'smooth', block:'nearest'});
}
window.goTab = goTab;
document.querySelectorAll('.tab-btn').forEach(b=> b.addEventListener('click', ()=> goTab(b.dataset.target)));

/* ===== Demo Data ===== */
const news = [
  {title:'Scholarship Drive', body:'Apply before 30 Sept.', tag:'Education'},
  {title:'Weavers’ Market — Warangal', body:'Handloom showcase this Sunday.', tag:'Livelihood'},
  {title:'Health Camp', body:'Free BP & sugar checks at community hall.', tag:'Health'}
];
const members = [
  {name:'Srinivas P', role:'Weaver', city:'Warangal', phone:'9100001001'},
  {name:'Bhavani S', role:'Business', city:'Hyderabad', phone:'9100001002'},
  {name:'Karthik R', role:'IT', city:'Bengaluru', phone:'9100001003'},
  {name:'Lavanya M', role:'Student', city:'Warangal', phone:'9100001004'},
  {name:'Dr. Nikhil', role:'Healthcare', city:'Hanamkonda', phone:'9100001005'}
];
const events = [
  {date:'2025-09-08', time:'10:00 AM', title:'Guru Pooja & Annadanam', place:'Community Hall, Warangal', contact:'9100002001'},
  {date:'2025-09-15', time:'6:00 PM', title:'Youth Meetup', place:'Hyderabad Chapter', contact:'9100002002'}
];

/* ===== Renderers ===== */
const newsList = document.getElementById('newsList');
function renderNews(){
  if(!newsList) return;
  newsList.innerHTML='';
  news.forEach(n=>{
    const li = document.createElement('div'); li.className='list-item glass-lite';
    li.innerHTML = `<div><div class="title">${n.title}</div><div class="sub">${n.tag}</div><p class="muted" style="margin:6px 0 0">${n.body}</p></div>
      <div><a class="chip" target="_blank" href="https://wa.me/919999999999?text=${encodeURIComponent(n.title)}">Share</a></div>`;
    newsList.appendChild(li);
  });
}
renderNews();

const dirList = document.getElementById('dirList');
const dirQuery = document.getElementById('dirQuery');
const dirRole = document.getElementById('dirRole');
function renderDir(){
  if(!dirList) return;
  const term = (dirQuery?.value||'').toLowerCase();
  const role = dirRole?.value||'';
  dirList.innerHTML='';
  members.filter(m => (!role||m.role===role) &&
    (m.name.toLowerCase().includes(term)||m.role.toLowerCase().includes(term)||m.city.toLowerCase().includes(term)))
  .forEach(m=>{
    const li = document.createElement('div'); li.className='list-item glass-lite';
    li.innerHTML = `<div><div class="title">${m.name}</div><div class="sub">${m.role} • ${m.city}</div></div>
      <div class="row"><a class="chip" href="tel:${m.phone}">Call</a>
      <a class="chip" target="_blank" href="https://wa.me/${m.phone}?text=${encodeURIComponent('Jai Padmashali!')}">WhatsApp</a></div>`;
    dirList.appendChild(li);
  });
}
renderDir(); dirQuery?.addEventListener('input',renderDir); dirRole?.addEventListener('change',renderDir);

const eventList = document.getElementById('eventList');
function renderEvents(){
  if(!eventList) return;
  eventList.innerHTML='';
  events.forEach(ev=>{
    const li = document.createElement('div'); li.className='list-item glass-lite';
    const d = new Date(ev.date).toDateString();
    li.innerHTML = `<div><div class="title">${ev.title}</div><div class="sub">${d} • ${ev.time} • ${ev.place}</div></div>
      <div class="row"><a class="chip" href="tel:${ev.contact}">Call</a>
      <a class="chip" target="_blank" href="https://wa.me/${ev.contact}?text=${encodeURIComponent('I want to join: '+ev.title)}">Join</a></div>`;
    eventList.appendChild(li);
  });
}
renderEvents();

document.getElementById('hallDate')?.setAttribute('value', new Date().toISOString().slice(0,10));
const hallMsg = document.getElementById('hallMsg');
document.getElementById('hallCheck')?.addEventListener('click', ()=>{ hallMsg.textContent = (curLang===LANGS.TE?'అందుబాటులో ఉంది అనిపిస్తుంది':'Looks available'); });
document.getElementById('hallBook')?.addEventListener('click', ()=>{
  const hall = document.getElementById('hallSel').value;
  const date = document.getElementById('hallDate').value;
  const time = document.getElementById('hallTime').value;
  const purpose = document.getElementById('hallPurpose').value || '—';
  if(!date){ hallMsg.textContent = (curLang===LANGS.TE?'తేదీ ఎంపిక చేయండి':'Pick a date'); return; }
  const msg=`Hall Booking Request%0AHall:${hall}%0ADate:${date}%0ATime:${time}%0APurpose:${encodeURIComponent(purpose)}`;
  window.open(`https://wa.me/919999999999?text=${msg}`,'_blank');
  hallMsg.textContent = (curLang===LANGS.TE?'వాట్సాప్‌కి పంపబడింది':'Request sent via WhatsApp');
});

document.getElementById('feePay')?.addEventListener('click', ()=>{
  const v = Math.max(1, parseInt((document.getElementById('feeAmt').value||'0'),10));
  location.href = `upi://pay?pa=padmashali@upi&pn=Padmashali%20Trust&am=${v}&cu=INR`;
});

const lrName = document.getElementById('lrName'), lrPhone = document.getElementById('lrPhone'),
      lrAmt = document.getElementById('lrAmt'), lrPurpose = document.getElementById('lrPurpose'),
      lrNotes = document.getElementById('lrNotes'), lrMsg = document.getElementById('lrMsg'),
      lrWA = document.getElementById('lrWA');
function loanText(){
  return `Loan/Help Request%0AName:${encodeURIComponent(lrName.value||'')}`+
         `%0APhone:${encodeURIComponent(lrPhone.value||'')}`+
         `%0AAmount:₹${encodeURIComponent(lrAmt.value||'')}`+
         `%0APurpose:${encodeURIComponent(lrPurpose.value||'')}`+
         `%0ANotes:${encodeURIComponent(lrNotes.value||'')}`;
}
document.getElementById('lrSubmit')?.addEventListener('click', ()=>{
  if(!(lrName.value&&lrPhone.value&&lrAmt.value)){
    lrMsg.textContent = (curLang===LANGS.TE?'పేరు, ఫోన్, మొత్తం తప్పనిసరి':'Name, Phone, Amount are required'); return;
  }
  lrMsg.textContent = (curLang===LANGS.TE?'స్థానికంగా సేవ్‌ైంది.':'Saved locally.');
  lrWA.setAttribute('href', `https://wa.me/919999999999?text=${loanText()}`);
});
lrWA?.setAttribute('href', `https://wa.me/919999999999?text=${loanText()}`);
