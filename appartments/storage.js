<script>
// Versioned keys
const DB = {
  notices: 'apt_notices_v1',
  complaints: 'apt_complaints_v1',
  visitors: 'apt_visitors_v1',
  guardAttendance: 'apt_guard_att_v1',
  polls: 'apt_polls_v1',
  pollVotes: 'apt_poll_votes_v1',
  admin: 'apt_admin_v1' // {pin:'1234'}
};

function _get(k){ try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return[]}}
function _set(k,v){ localStorage.setItem(k, JSON.stringify(v)) }
function put(k,item){ const a=_get(k); a.push(item); _set(k,a); return item; }
function del(k,pred){ _set(k, _get(k).filter(x=>!pred(x))) }

function setAdmin(obj){ localStorage.setItem(DB.admin, JSON.stringify(obj)) }
function getAdmin(){ try{return JSON.parse(localStorage.getItem(DB.admin)||'{}')}catch{return{}} }

function toast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.style.display='block';
  clearTimeout(window.__t); window.__t=setTimeout(()=>t.style.display='none',1600);
}

// ----- PIN protection -----
function hasPin(){ const cfg=getAdmin(); return cfg && /^\d{4}$/.test(cfg.pin||''); }

function promptPinOnce(){
  const cfg=getAdmin();
  if(!cfg || !cfg.pin){ alert('No PIN set. Go to Admin → set a 4-digit PIN.'); return false; }
  const input = prompt('Enter 4-digit PIN:','');
  if(input===null) return false;
  if(input.trim()===cfg.pin){ return true; }
  alert('Incorrect PIN'); return false;
}

/** Call on page load to gate a page. If no pin, redirects to admin. */
function requirePinOrRedirect(){
  if(!hasPin()){ alert('PIN is not set. Redirecting to Admin to set one.'); location.href='./admin.html'; return false; }
  const ok = promptPinOnce();
  if(!ok){ history.back(); }
  return ok;
}
</script>
