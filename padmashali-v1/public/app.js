// tiny helpers
const $=(s,sc=document)=>sc.querySelector(s);
const $$=(s,sc=document)=>[...sc.querySelectorAll(s)];

// PINs
const PINS={ member:'1111', committee:'5555', admin:'9999' };
let ROLE='member';

// ===== role gating =====
function applyRoleGate(role){
  // show/hide gated nodes
  $$('.role-gate').forEach(el=>{
    const roles=(el.getAttribute('data-roles')||'').split(',').map(x=>x.trim());
    const show=roles.includes(role);
    el.classList.toggle('hide', !show);
  });

  // show/hide gated tabs
  const tabs=$$('.tab-btn');
  tabs.forEach(btn=>{
    const gate=btn.classList.contains('role-gate') ? (btn.getAttribute('data-roles')||'') : '';
    if(gate){
      const roles=gate.split(',').map(x=>x.trim());
      const show=roles.includes(role);
      btn.style.display = show ? '' : 'none';
    }else{
      btn.style.display = '';
    }
  });

  // if current active tab is hidden, jump to the first visible
  let activeBtn=$('.tab-btn.active');
  if(!activeBtn || activeBtn.style.display==='none'){
    const firstVisible=tabs.find(b=>b.style.display!=='none') || tabs[0];
    if(firstVisible) switchTab(firstVisible.dataset.tab);
  }

  // role badge
  const label = role==="member" ? "Member" : role==="committee" ? "Committee" : "Admin";
  $('#roleBadge').textContent = label;
}

// ===== tabs =====
function switchTab(id){
  $$('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===id));
  $$('.tab-content').forEach(v=>v.classList.toggle('active', v.id===id));
}
function initTabs(){
  $$('.tab-btn').forEach(b=>{
    b.addEventListener('click',()=>switchTab(b.dataset.tab));
  });
  // activate first visible by default
  const firstVisible = $$('.tab-btn').find(b=>b.style.display!=='none') || $('.tab-btn');
  if(firstVisible) switchTab(firstVisible.dataset.tab);
}

// ===== login / logout =====
function showApp(role){
  ['appHeader','banner','tabbar','content'].forEach(id=>$('#'+id)?.classList.remove('hide'));
  $('#login')?.classList.add('hide');
  ROLE=role; localStorage.setItem('pdm-role', role);
  applyRoleGate(role);
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
      btn.classList.add('active'); ROLE=btn.dataset.role;
    });
  });
  $('#loginBtn')?.addEventListener('click',()=>{
    const pin=$('#pinInput').value.trim();
    if(pin===PINS[ROLE]) showApp(ROLE);
    else $('#loginMsg').textContent='Invalid PIN';
  });
  $('#logoutBtn')?.addEventListener('click', showLogin);

  const saved=localStorage.getItem('pdm-role');
  if(saved) showApp(saved); else showLogin();
}

// ===== small demo actions =====
function initHalls(){
  const d=$('#hallDate'); if(d) d.value=new Date().toISOString().slice(0,10);
  $('#hallCheck')?.addEventListener('click',()=> $('#hallMsg').textContent='Looks available');
  $('#hallBook')?.addEventListener('click',()=>{
    const msg=encodeURIComponent('Hall booking request from app');
    window.open(`https://wa.me/919999999999?text=${msg}`,'_blank');
  });
}
function initLoan(){
  $('#lrSubmit')?.addEventListener('click',()=>{
    const ok=$('#lrName').value && $('#lrPhone').value && $('#lrAmt').value;
    $('#lrMsg').textContent = ok ? '✓ Submitted (demo)' : 'Name, phone, amount required';
  });
}

// ===== language + theme (demo) =====
function initGlobal(){
  $('#langBtn')?.addEventListener('click',()=>{
    const cur=$('#langBtn').textContent.trim();
    $('#langBtn').textContent = (cur==='తెలుగు') ? 'English' : 'తెలుగు';
    // (hook your i18n here if needed)
  });
  $('#themeToggle')?.addEventListener('click',(e)=>{
    document.body.classList.toggle('light');
    e.currentTarget.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
  });
}

// ===== boot =====
(function start(){
  initLogin();
  initTabs();
  initHalls();
  initLoan();
  initGlobal();
})();
