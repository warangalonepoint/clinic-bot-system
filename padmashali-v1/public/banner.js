// banner.js v16
(function () {
  window.pcLogout = function(){
    try{ localStorage.removeItem('pc_session'); }catch{}
    location.href = 'index.html';
  };

  function ensureHost(){
    let el = document.getElementById('app-banner');
    if (!el){
      el = document.createElement('div'); el.id='app-banner';
      const wrap = document.querySelector('.wrap,.container') || document.body;
      wrap.prepend(el);
    }
    return el;
  }

  function hasSession(){
    try { return !!JSON.parse(localStorage.getItem('pc_session')||'null'); }
    catch { return false; }
  }

  function render(){
    const host   = ensureHost();
    const logo   = window.APP_LOGO_PATH   || 'assets/logo.png';
    const banner = window.APP_BANNER_PATH || 'assets/banner.png';

    host.innerHTML = `
      <div class="pc-header card">
        <div class="pc-header-left">
          <img class="pc-logo" src="${logo}" alt="logo" onerror="this.style.display='none'"/>
          <div style="min-width:0">
            <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
            <div class="pc-tagline" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>
        <div class="pc-actions">
          <button id="lang-pill"  class="pc-pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pc-pill" onclick="cycleTheme()" title="Theme">☀️</button>
          ${hasSession()?`<button id="logout-pill" class="pc-pill" onclick="pcLogout()" data-i18n="logout">Logout</button>`:''}
        </div>
      </div>

      <div class="pc-hero card">
        <img src="${banner}" alt="banner">
      </div>
    `;

    // Hide any legacy logout buttons in page markup
    document.querySelectorAll('button').forEach(b=>{
      const t=(b.textContent||'').trim();
      if(b.id!=='logout-pill' && (t==='Logout'||t==='లాగ్ అవుట్')) b.style.display='none';
    });

    if (typeof applyI18n === 'function') applyI18n();
    if (typeof applyTheme === 'function') applyTheme();

    // Fallback if banner is missing
    const img = host.querySelector('.pc-hero img');
    img.onerror = () => {
      const hero = host.querySelector('.pc-hero');
      hero.innerHTML = `<div style="height:220px;border-radius:16px;background:linear-gradient(135deg,#dbeafe,#ede9fe)"></div>`;
    };
  }

  window.addEventListener('resize', ()=>{ clearTimeout(window.__bnr_r); window.__bnr_r=setTimeout(render,120); });
  document.addEventListener('DOMContentLoaded', render);
})();
