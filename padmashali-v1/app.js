/* ====== Theme ====== */
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
function setTheme(mode){
  if(mode==='light'){ root.classList.add('light'); sun?.classList.add('hidden'); moon?.classList.remove('hidden'); }
  else { root.classList.remove('light'); sun?.classList.remove('hidden'); moon?.classList.add('hidden'); }
  localStorage.setItem('pdm-theme', mode);
}
setTheme(localStorage.getItem('pdm-theme') || 'dark');
toggle?.addEventListener('click',()=> setTheme(root.classList.contains('light')?'dark':'light'));

/* ====== Role + PIN Login ====== */
const PINS = {
  member: '1111',
  committee: '5555',
  admin: '9999',
};
let activeRole = localStorage.getItem('pdm-role') || null;

const loginSection = document.getElementById('login');
const app = document.getElementById('app');
const tabbar = document.getElementById('tabbar');
const pinInput = document.getElementById('pinInput');
const loginBtn = document.getElementById('loginBtn');
const loginMsg = document.getElementById('loginMsg');
const roleTabs = document.querySelectorAll('.tab-mini');
let roleSel = 'member';

roleTabs.forEach(b=>{
  b.addEventListener('click', ()=>{
    roleTabs.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    roleSel = b.dataset.role;
  });
});

function applyRoleUI(role){
  // show app, tabs; hide login
  loginSection.style.display = 'none';
  app.style.display = '';
  tabbar.style.display = 'flex';

  // restrict admin-only tabs
  document.querySelectorAll('.admin-only').forEach(el=>{
    el.style.display = (role==='admin' || role==='committee') ? '' : 'none';
  });

  // remember
  localStorage.setItem('pdm-role', role);
  activeRole = role;
}

function logout(){
  localStorage.removeItem('pdm-role');
  activeRole = null;
  // reset UI
  app.style.display = 'none';
  tabbar.style.display = 'none';
  loginSection.style.display = '';
  loginMsg.textContent = '';
  pinInput.value = '';
}
document.getElementById('logoutBtn')?.addEventListener('click', logout);

// boot
if(activeRole){ applyRoleUI(activeRole); }
else { loginSection.style.display=''; tabbar.style.display='none'; app.style.display='none'; }

loginBtn?.addEventListener('click', ()=>{
  const ok = PINS[roleSel] && pinInput.value.trim() === PINS[roleSel];
  if(!ok){ loginMsg.textContent = 'Invalid PIN'; return; }
  loginMsg.textContent = '';
  applyRoleUI(roleSel);
});

/* ====== Tab Nav ====== */
function goTab(id){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.target===id));
  document.querySelectorAll('.tab-panel').forEach(p=>p.dataset.active = (p.id===id) ? 'true' : 'false');
}
window.goTab = goTab;
document.querySelectorAll('.tab-btn').forEach(b=> b.addEventListener('click', ()=> goTab(b.dataset.target)));

/* ====== Demo Data (swap for CSV/Airtable later) ====== */
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

/* ====== Renderers ====== */
// News
const newsList = document.getElementById('newsList');
function renderNews(){
  if(!newsList) return;
  newsList.innerHTML='';
  news.forEach(n=>{
    const li = document.createElement('div'); li.className='list-item glass-lite';
    li.innerHTML = `<div>
        <div class="title">${n.title}</div>
        <div class="sub">${n.tag}</div>
        <p class="muted" style="margin:6px 0 0">${n.body}</p>
      </div>
      <div><a class="chip" target="_blank" href="https://wa.me/919999999999?text=${encodeURIComponent(n.title)}">Share</a></div>`;
    newsList.appendChild(li);
  });
}
renderNews();

// Directory
const dirList = document.getElementById('dirList');
const dirQuery = document.getElementById('dirQuery');
const dirRole = document.getElementById('dirRole');
function renderDir(){
  if(!dirList) return;
  const term = (dirQuery?.value||'').toLowerCase();
  const role = dirRole?.value||'';
  dirList.innerHTML='';
  members
    .filter(m => (!role || m.role===role) &&
      (m.name.toLowerCase().includes(term) || m.role.toLowerCase().includes(term) || m.city.toLowerCase().includes(term)))
    .forEach(m=>{
      const li = document.createElement('div'); li.className='list-item glass-lite';
      li.innerHTML = `<div>
          <div class="title">${m.name}</div>
          <div class="sub">${m.role} • ${m.city}</div>
        </div>
        <div class="row">
          <a class="chip" href="tel:${m.phone}">Call</a>
          <a class="chip" target="_blank" href="https://wa.me/${m.phone}?text=${encodeURIComponent('Jai Padmashali!')}">WhatsApp</a>
        </div>`;
      dirList.appendChild(li);
    });
}
renderDir(); dirQuery?.addEventListener('input',renderDir); dirRole?.addEventListener('change',renderDir);

// Events
const eventList = document.getElementById('eventList');
function renderEvents(){
  if(!eventList) return;
  eventList.innerHTML='';
  events.forEach(ev=>{
    const li = document.createElement('div'); li.className='list-item glass-lite';
    const d = new Date(ev.date).toDateString();
    li.innerHTML = `<div>
        <div class="title">${ev.title}</div>
        <div class="sub">${d} • ${ev.time} • ${ev.place}</div>
      </div>
      <div class="row">
        <a class="chip" href="tel:${ev.contact}">Call</a>
        <a class="chip" target="_blank" href="https://wa.me/${ev.contact}?text=${encodeURIComponent('I want to join: '+ev.title)}">Join</a>
      </div>`;
    eventList.appendChild(li);
  });
}
renderEvents();

/* ====== Halls ====== */
const hallDate = document.getElementById('hallDate');
hallDate && (hallDate.valueAsDate = new Date());
const hallMsg = document.getElementById('hallMsg');
document.getElementById('hallCheck')?.addEventListener('click', ()=>{
  hallMsg.textContent = 'Looks available. (Connect real availability later)';
});
document.getElementById('hallBook')?.addEventListener('click', ()=>{
  const hall = document.getElementById('hallSel').value;
  const date = document.getElementById('hallDate').value;
  const time = document.getElementById('hallTime').value;
  const purpose = document.getElementById('hallPurpose').value || '—';
  if(!date){ hallMsg.textContent='Pick a date.'; return; }
  hallMsg.textContent = 'Request sent via WhatsApp.';
  const msg = `Hall Booking Request%0AHall: ${hall}%0ADate: ${date}%0ATime: ${time}%0APurpose: ${encodeURIComponent(purpose)}`;
  window.open(`https://wa.me/919999999999?text=${msg}`,'_blank');
});

/* ====== Fees ====== */
const feeAmt = document.getElementById('feeAmt');
document.getElementById('feePay')?.addEventListener('click', ()=>{
  const v = Math.max(1, parseInt(feeAmt.value||'0',10));
  location.href = `upi://pay?pa=padmashali@upi&pn=Padmashali%20Trust&am=${v}&cu=INR`;
});

/* ====== Loan Request ====== */
const lrName = document.getElementById('lrName');
const lrPhone = document.getElementById('lrPhone');
const lrAmt = document.getElementById('lrAmt');
const lrPurpose = document.getElementById('lrPurpose');
const lrNotes = document.getElementById('lrNotes');
const lrMsg = document.getElementById('lrMsg');
const lrWA = document.getElementById('lrWA');

function buildLoanText(){
  return `Loan/Help Request%0AName: ${encodeURIComponent(lrName.value||'')}` +
         `%0APhone: ${encodeURIComponent(lrPhone.value||'')}` +
         `%0AAmount: ₹${encodeURIComponent(lrAmt.value||'')}` +
         `%0APurpose: ${encodeURIComponent(lrPurpose.value||'')}` +
         `%0ANotes: ${encodeURIComponent(lrNotes.value||'')}`;
}
document.getElementById('lrSubmit')?.addEventListener('click', ()=>{
  if(!(lrName.value && lrPhone.value && lrAmt.value)){
    lrMsg.textContent = 'Name, Phone, Amount are required.'; return;
  }
  lrMsg.textContent = 'Submitted locally. (Hook Airtable/Sheet next.)';
  lrWA.setAttribute('href', `https://wa.me/919999999999?text=${buildLoanText()}`);
});
lrWA?.setAttribute('href', `https://wa.me/919999999999?text=${buildLoanText()}`);
