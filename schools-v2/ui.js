/* Ping Schools PWA – UI logic (theme + language + demo data) */

const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => Array.from(root.querySelectorAll(q));

/* -------- THEME -------- */
const THEME_KEY = 'ping_school_theme';
const root = document.documentElement;
const themeToggle = $('#themeToggle');

function applyTheme(t) {
  if (t === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  localStorage.setItem(THEME_KEY, t);
  themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
}
applyTheme(localStorage.getItem(THEME_KEY) || 'light');

themeToggle.addEventListener('click', () => {
  const next = root.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
});

/* -------- LANGUAGE -------- */
const LANG_KEY = 'ping_school_lang';
const i18n = {
  en: {
    app_title: 'Ping Schools',
    dash_title: 'Dashboard',
    kpi_students: 'Students', kpi_teachers: 'Teachers', kpi_present: 'Present Today', kpi_dues: 'Fee Dues',
    today_classes: 'Today’s Classes', quick_actions: 'Quick Actions',
    mark_att: 'Mark Attendance', new_notice: 'New Notice',
    classes_title: 'Classes', add_class:'Add Class',
    th_class:'Class', th_teacher:'Teacher', th_room:'Room', th_time:'Time',
    att_title:'Attendance', load_list:'Load List', export_csv:'Export CSV', th_name:'Name', th_status:'Status',
    exams_title:'Exams', schedule_exam:'Schedule',
    fees_title:'Fees', collect_fee:'Collect Fee', th_student:'Student', th_due:'Due', th_action:'Action',
    notices_title:'Notices', publish:'Publish'
  },
  te: {
    app_title: 'పింగ్ స్కూల్స్',
    dash_title: 'డాష్‌బోర్డ్',
    kpi_students: 'విద్యార్థులు', kpi_teachers: 'గురువులు', kpi_present: 'ఈరోజు హాజరు', kpi_dues: 'ఫీజు బకాయిలు',
    today_classes: 'ఈరోజు తరగతులు', quick_actions: 'త్వరిత చర్యలు',
    mark_att: 'హాజరు నమోదు', new_notice: 'క్రొత్త నోటీస్',
    classes_title: 'తరగతులు', add_class:'తరగతి జోడించు',
    th_class:'తరగతి', th_teacher:'గురువు', th_room:'గది', th_time:'సమయం',
    att_title:'హాజరు', load_list:'జాబితా లోడు', export_csv:'CSV ఎగుమతి', th_name:'పేరు', th_status:'స్థితి',
    exams_title:'పరీక్షలు', schedule_exam:'షెడ్యూల్',
    fees_title:'ఫీజులు', collect_fee:'ఫీజు వసూలు', th_student:'విద్యార్థి', th_due:'బకాయి', th_action:'చర్య',
    notices_title:'నోటీసులు', publish:'ప్రచురించు'
  }
};
function applyLang(code){
  const dict = i18n[code] || i18n.en;
  $$('[data-i]').forEach(el => {
    const k = el.getAttribute('data-i');
    if (dict[k]) el.textContent = dict[k];
  });
  $('#app_title').textContent = dict.app_title || 'Ping Schools';
  localStorage.setItem(LANG_KEY, code);
  // chip highlight
  $$('.langChip').forEach(c => {
    c.style.opacity = c.dataset.lang === code ? '1' : '.65';
  });
}
applyLang(localStorage.getItem(LANG_KEY) || 'en');

$$('.langChip').forEach(b=>{
  b.addEventListener('click', ()=>applyLang(b.dataset.lang));
});

/* -------- TABS -------- */
$('#tabs').addEventListener('click', (e)=>{
  const btn = e.target.closest('.nav-pill');
  if(!btn) return;
  $$('.nav-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const tab = btn.dataset.tab;
  $$('section[data-screen]').forEach(s=>{
    s.classList.toggle('hidden', s.getAttribute('data-screen') !== tab);
  });
});

/* -------- DEMO DATA / RENDER -------- */
const demo = {
  kpis: {students: 842, teachers: 58, present: 791, dues: 76},
  classes: [
    {cls:'Grade 8 • Math', teacher:'Anita Rao', room:'B-203', time:'10:00–10:45'},
    {cls:'Grade 10 • Physics', teacher:'K. Varun', room:'Lab-2', time:'11:00–11:45'},
    {cls:'Grade 6 • English', teacher:'R. Lakshmi', room:'A-105', time:'12:00–12:45'},
  ],
  roster: ['Aarav','Nikhil','Ishita','Sanjana','Prashanth','Meera','Dev','Harshita','Kiran','Ananya'],
  fees: [
    {name:'Aman Gupta', due: '₹2,000'},
    {name:'Niharika R', due: '₹1,500'},
    {name:'Rahul S', due: '₹3,200'},
  ],
  exams: []
};

function renderKPIs(){
  $('#k_students').textContent = demo.kpis.students;
  $('#k_teachers').textContent = demo.kpis.teachers;
  $('#k_present').textContent  = demo.kpis.present;
  $('#k_dues').textContent     = demo.kpis.dues;
}
function renderToday(){
  const wrap = $('#list_classes'); wrap.innerHTML = '';
  demo.classes.forEach(c=>{
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<div>
      <div style="font-weight:800">${c.cls}</div>
      <div class="muted" style="font-size:13px">${c.teacher} • ${c.room}</div>
    </div>
    <span class="badge">${c.time}</span>`;
    wrap.appendChild(div);
  });
}
function renderClasses(){
  const tb = $('#class_tbody'); tb.innerHTML = '';
  demo.classes.forEach(c=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${c.cls}</td><td>${c.teacher}</td><td>${c.room}</td><td>${c.time}</td>
                    <td><button class="btn secondary" style="padding:8px 12px">Edit</button></td>`;
    tb.appendChild(tr);
  });
  // class dropdown for attendance
  const sel = $('#att_class'); sel.innerHTML = '';
  demo.classes.forEach((c,i)=>{
    const o = document.createElement('option'); o.value=i; o.textContent=c.cls; sel.appendChild(o);
  });
}
function renderFees(){
  const tb = $('#fee_tbody'); tb.innerHTML='';
  demo.fees.forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.name}</td><td>${s.due}</td>
      <td><button class="btn" style="padding:8px 12px">Pay</button></td>`;
    tb.appendChild(tr);
  });
}
function renderNotices(){
  const box = $('#notice_list'); box.innerHTML = '';
  const arr = JSON.parse(localStorage.getItem('school_notices')||'[]');
  arr.forEach(n=>{
    const d = document.createElement('div');
    d.className = 'item';
    d.innerHTML = `<div>
      <div style="font-weight:800">${n.title} • <span class="muted" style="font-weight:600">${n.aud}</span></div>
      <div class="muted" style="font-size:13px">${n.msg}</div>
    </div>
    <span class="badge">${new Date(n.ts).toLocaleDateString()}</span>`;
    box.appendChild(d);
  });
}

/* Attendance actions */
$('#att_load').addEventListener('click', ()=>{
  const tb = $('#att_tbody'); tb.innerHTML='';
  demo.roster.forEach((name,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td><td>${name}</td>
      <td><select class="in"><option>Present</option><option>Absent</option><option>Late</option></select></td>`;
    tb.appendChild(tr);
  });
});
$('#att_export').addEventListener('click', ()=>{
  const rows = [['#','Name','Status']];
  $$('#att_tbody tr').forEach(tr=>{
    const tds = tr.querySelectorAll('td');
    rows.push([tds[0].innerText, tds[1].innerText, tr.querySelector('select').value]);
  });
  const csv = rows.map(r=>r.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download = 'attendance.csv'; a.click();
});

/* Notices actions */
$('#n_publish').addEventListener('click', ()=>{
  const title = $('#n_title').value.trim(),
        msg   = $('#n_msg').value.trim(),
        aud   = $('#n_aud').value;
  if(!title||!msg) return alert('Title & message required');
  const arr = JSON.parse(localStorage.getItem('school_notices')||'[]');
  arr.unshift({id:crypto.randomUUID(), title, msg, aud, ts:Date.now()});
  localStorage.setItem('school_notices', JSON.stringify(arr));
  $('#n_title').value=''; $('#n_msg').value='';
  renderNotices();
});
$('#n_export').addEventListener('click', ()=>{
  const rows = JSON.parse(localStorage.getItem('school_notices')||'[]');
  const heads = ['id','title','msg','aud','ts'];
  const out = [heads.join(',')].concat(rows.map(r=>heads.map(h=>`"${String(r[h]??'').replace(/"/g,'""')}"`).join(',')));
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([out.join('\n')],{type:'text/csv'}));
  a.download = 'notices.csv'; a.click();
});

/* Init */
renderKPIs();
renderToday();
renderClasses();
renderFees();
renderNotices();
