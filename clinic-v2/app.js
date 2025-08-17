// ---------- THEME ----------
const KEY = 'onestop-theme';
if (localStorage.getItem(KEY) === 'light') document.body.classList.add('light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(KEY, document.body.classList.contains('light') ? 'light' : 'dark');
});

// ---------- DATA MODEL (mock) ----------
const DB = {
  doctors: [
    { id:'sharma', name:'Dr. A. Sharma', spec:'General Physician', color:'grad-purple' },
    { id:'rao',    name:'Dr. B. Rao',    spec:'Pediatrics',        color:'grad-cyan'   },
    { id:'mehta',  name:'Dr. C. Mehta',  spec:'Dermatology',       color:'grad-pink'   }
  ],
  slots: {
    sharma: ['09:00–09:15','09:15–09:30','10:00–10:15','10:15–10:30','11:00–11:15'],
    rao:    ['09:30–09:45','10:00–10:15','10:15–10:30','11:30–11:45'],
    mehta:  ['10:00–10:15','10:15–10:30','10:45–11:00','11:00–11:15']
  },
  queue: [
    { token:21, patient:'Riya K',   doctor:'sharma', status:'Pending'    },
    { token:22, patient:'Manoj P',  doctor:'rao',    status:'Checked-in' },
    { token:23, patient:'Anika S',  doctor:'mehta',  status:'In-room'    },
    { token:24, patient:'Farhan A', doctor:'sharma', status:'Done'       }
  ],
  stats: {
    sharma: { bookings: 18, online:'Last hr: 6 • Total: 12', walkins:'Queued: 3 • Served: 7', reminders:'WhatsApp: 92%', capacity:{am:70, pm:45, next:22}},
    rao:    { bookings: 14, online:'Last hr: 4 • Total: 10', walkins:'Queued: 2 • Served: 5', reminders:'WhatsApp: 83%', capacity:{am:55, pm:38, next:30}},
    mehta:  { bookings: 10, online:'Last hr: 2 • Total: 6',  walkins:'Queued: 2 • Served: 7', reminders:'WhatsApp: 79%', capacity:{am:40, pm:28, next:18}}
  },
  activity: [
    { t:'09:12', badge:'grad-purple', msg:'Booking created • Riya K (Dr. Sharma)' },
    { t:'09:35', badge:'grad-cyan',   msg:'Reminder sent • Token #21' },
    { t:'10:05', badge:'grad-pink',   msg:'No-show marked • Token #18' },
    { t:'10:40', badge:'grad-orange', msg:'Consult completed • Token #16' }
  ]
};

const state = {
  doctor: localStorage.getItem('activeDoctor') || DB.doctors[0].id
};

// ---------- HELPERS ----------
const qs  = (s, r=document)=>r.querySelector(s);
const qsa = (s, r=document)=>Array.from(r.querySelectorAll(s));

function setActiveDoctor(id){
  state.doctor = id;
  localStorage.setItem('activeDoctor', id);
  renderAll();
}

function fillSelect(el, options, value){
  el.innerHTML = options.map(o =>
    `<option value="${o.value}" ${o.value===value?'selected':''}>${o.label}</option>`
  ).join('');
}

// ---------- RENDERERS ----------
function renderTopDoctorSwitcher(){
  const select = qs('#doctorSelect');
  fillSelect(select, DB.doctors.map(d=>({value:d.id,label:d.name})), state.doctor);
  select.onchange = e => setActiveDoctor(e.target.value);
}

function renderBookingForm(){
  fillSelect(qs('#bkDoctor'), DB.doctors.map(d=>({value:d.id,label:d.name})), state.doctor);
  fillSelect(qs('#bkSlot'), DB.slots[state.doctor].map(s=>({value:s,label:s})), DB.slots[state.doctor][0]);
}

function renderQueue(){
  const list = qs('#queueList');
  const rows = DB.queue.filter(q=>q.doctor===state.doctor)
    .map(q => `<div class="item glass-inner">
      <div><strong>#${q.token}</strong> • ${q.patient} • ${getDoc(q.doctor).name}</div>
      <span class="badge-pill">${q.status}</span>
    </div>`).join('') || `<div class="item glass-inner"><div>No patients yet.</div><span class="badge-pill">—</span></div>`;
  list.innerHTML = rows;
}

function renderOverview(){
  const s = DB.stats[state.doctor];
  qs('#todayBookings').textContent = s.bookings;

  qs('#overviewStats').innerHTML = `
    <div class="mini glass-inner"><div class="badge grad-purple"></div><div><h4>Online</h4><p>${s.online}</p></div></div>
    <div class="mini glass-inner"><div class="badge grad-cyan"></div><div><h4>Walk-ins</h4><p>${s.walkins}</p></div></div>
    <div class="mini glass-inner"><div class="badge grad-pink"></div><div><h4>Reminders ✓</h4><p>${s.reminders}</p></div></div>
  `;

  qs('#capacityMeters').innerHTML = `
    <li><div class="row"><span>Morning</span><span>${s.capacity.am}%</span></div><div class="meter"><div class="fill grad-purple" style="width:${s.capacity.am}%"></div></div></li>
    <li><div class="row"><span>Evening</span><span>${s.capacity.pm}%</span></div><div class="meter"><div class="fill grad-cyan" style="width:${s.capacity.pm}%"></div></div></li>
    <li><div class="row"><span>Tomorrow</span><span>${s.capacity.next}%</span></div><div class="meter"><div class="fill grad-pink" style="width:${s.capacity.next}%"></div></div></li>
  `;
}

function renderKPIs(){
  const s = DB.stats[state.doctor];
  qs('#kpiGrid').innerHTML = `
    <div class="kpi glass-inner"><h3>Patients Seen</h3>
      <div class="row"><span>${Math.round(s.bookings*0.67)} / ${s.bookings}</span><span>${Math.round(67)}%</span></div>
      <div class="meter small"><div class="fill grad-purple" style="width:67%"></div></div>
    </div>
    <div class="kpi glass-inner"><h3>Reminders</h3>
      <div class="row"><span>${s.reminders.replace('WhatsApp: ','')}</span><span>WhatsApp</span></div>
      <div class="meter small"><div class="fill grad-cyan" style="width:${parseInt(s.reminders)}%"></div></div>
    </div>
    <div class="kpi glass-inner"><h3>No-shows</h3>
      <div class="row"><span>4</span><span>8%</span></div>
      <div class="meter small"><div class="fill grad-pink" style="width:8%"></div></div>
    </div>
    <div class="kpi glass-inner"><h3>Avg. Wait</h3>
      <div class="row"><span>11m</span><span>OK</span></div>
      <div class="meter small"><div class="fill grad-orange" style="width:45%"></div></div>
    </div>
  `;

  qs('#activityList').innerHTML = DB.activity.map(a =>
    `<div class="mini glass-inner"><div class="badge ${a.badge}"></div><div><h4>${a.t}</h4><p>${a.msg}</p></div></div>`
  ).join('');
}

function renderRoster(){
  const wrap = qs('#roster');
  wrap.innerHTML = DB.doctors.map(d => `
    <div class="member glass-inner">
      <div class="ava ${d.color}"></div>
      <div>
        <strong>${d.name}</strong>
        <div class="role">${d.spec}</div>
      </div>
    </div>`).join('');

  const att = qs('#attendance');
  att.innerHTML = DB.doctors.map(d =>
    `<label class="switch glass-inner"><span>${d.name}</span><input type="checkbox" checked><i></i></label>`
  ).join('');
}

function renderDoctorPanel(){
  const sel = qs('#docPanelDoctor');
  fillSelect(sel, DB.doctors.map(d=>({value:d.id,label:d.name})), state.doctor);
  sel.onchange = e => setActiveDoctor(e.target.value);

  qs('#history').innerHTML = `
    <div class="mini glass-inner"><div class="badge grad-cyan"></div><div><h4>Vitals</h4><p>BP 118/74 • HR 78 • Temp 37.1°C • SpO₂ 98%</p></div></div>
    <div class="mini glass-inner"><div class="badge grad-purple"></div><div><h4>Allergies</h4><p>NKDA</p></div></div>
    <div class="mini glass-inner"><div class="badge grad-pink"></div><div><h4>Past Rx</h4><p>Last consult with ${getDoc(state.doctor).name}</p></div></div>
    <div class="mini glass-inner"><div class="badge grad-orange"></div><div><h4>Next Review</h4><p>In 7–10 days</p></div></div>
  `;
}

function getDoc(id){ return DB.doctors.find(d=>d.id===id); }

function renderAll(){
  renderTopDoctorSwitcher();
  renderBookingForm();
  renderQueue();
  renderOverview();
  renderKPIs();
  renderRoster();
  renderDoctorPanel();
}

// ---------- INIT ----------
function syncBannerWithTab(){
  const hash = (location.hash || '#overview').toLowerCase();
  qs('.hero').style.display = hash === '#overview' ? '' : 'none';
}
window.addEventListener('hashchange', syncBannerWithTab);
syncBannerWithTab();

qs('#bannerToggle')?.addEventListener('change', e=>{
  qs('.hero').style.display = e.target.checked && (location.hash===''||location.hash==='#overview') ? '' : 'none';
});

// Booking form submit (mock)
qs('#bookingForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const doc = qs('#bkDoctor').value;
  const name = qs('#bkName').value.trim();
  if(!name) return;
  const nextToken = Math.max(0,...DB.queue.map(q=>q.token))+1;
  DB.queue.push({ token: nextToken, patient: name, doctor: doc, status:'Pending' });
  setActiveDoctor(doc);
  location.hash = '#bookings';
  alert('Mock: booking created');
});

renderAll();
