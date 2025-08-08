<script>
// One tiny storage layer (versioned keys)
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
function toast(msg){ let t=document.getElementById('toast'); if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}; t.textContent=msg; t.style.display='block'; clearTimeout(window.__t); window.__t=setTimeout(()=>t.style.display='none',1600); }
</script>
