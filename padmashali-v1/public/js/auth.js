let currentRole = null;
function setRole(role){ currentRole = role; }
function login(){
  const pin = document.getElementById('pin').value;
  if((currentRole==='member' && pin==='1111')||
     (currentRole==='committee' && pin==='5555')||
     (currentRole==='admin' && pin==='9999')){
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    if(currentRole!=='committee' && currentRole!=='admin'){
      document.querySelector('button[data-tab="manage"]').style.display='none';
    }
  } else { alert('Invalid PIN or role'); }
}