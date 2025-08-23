// Shared helpers – v16
(function(){
  const COUNTS = {members:1111, committee:5555, admin:9999}; // demo numbers

  // --- Auth helpers
  function isAuthed(){
    return !!(localStorage.getItem('pc-role') || localStorage.getItem('pc-authed'));
  }
  function logout(){
    localStorage.removeItem('pc-role');
    localStorage.removeItem('pc-authed');
    localStorage.removeItem('pc-pin');
    location.href = 'index.html';
  }
  window.logout = logout;

  // --- Banner logic (show/hide logout)
  function authVisibility(){
    const pill = document.getElementById('logout-pill');
    if(!pill) return;
    const onIndex = /index\.html$/.test(location.pathname) || document.body.dataset.noLogout === '1';
    pill.classList.toggle('hide', onIndex || !isAuthed());
  }

  // --- Login demo wire-up (PIN form)
  function wireLogin(){
    const form = document.getElementById('pin-form');
    if(!form) return;
    const input = document.getElementById('pin-input');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const pin = (input.value||'').trim();
      if(!pin) return;
      // Very simple role map (demo)
      let role = 'member';
      if(pin==='5555') role='committee';
      if(pin==='9999') role='admin';
      localStorage.setItem('pc-role', role);
      localStorage.setItem('pc-authed', '1');
      localStorage.setItem('pc-pin', pin);
      location.href = role==='member' ? 'members.html' :
                      role==='committee' ? 'committee.html' : 'admin.html';
    });

    // Fill counts
    const $m=document.getElementById('count-members');
    const $c=document.getElementById('count-committee');
    const $a=document.getElementById('count-admin');
    if($m) $m.textContent = `${i18n.t('members_count')}: ${COUNTS.members}`;
    if($c) $c.textContent = `${i18n.t('committee_count')}: ${COUNTS.committee}`;
    if($a) $a.textContent = `${i18n.t('admin_count')}: ${COUNTS.admin}`;
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    applyTheme();
    applyI18n();
    authVisibility();
    wireLogin();
  });
})();
