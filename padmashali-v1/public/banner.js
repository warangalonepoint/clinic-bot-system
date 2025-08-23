// Reusable banner + hero (uses assets/logo.png & assets/banner.png)
(function(){
  const LOGO = window.APP_LOGO_PATH || 'assets/logo.png';
  const BANNER = window.APP_BANNER_PATH || 'assets/banner.png';

  function ensureContainer(){
    let wrap = document.querySelector('.wrap');
    if(!wrap){
      wrap = document.createElement('div');
      wrap.className = 'wrap';
      document.body.prepend(wrap);
    }
    return wrap;
  }

  function inject(){
    const wrap = ensureContainer();

    // Banner (header)
    const top = document.createElement('div');
    top.className = 'section card glass pc-banner';
    top.innerHTML = `
      <div class="pc-header">
        <img src="${LOGO}" alt="Logo" class="pc-logo" onerror="this.style.display='none'">
        <div>
          <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
          <div class="pc-tagline" data-i18n="tagline">unity • seva • growth</div>
        </div>
      </div>
      <div class="pc-pills">
        <button id="lang-pill" class="pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
        <button id="theme-pill" class="pill" onclick="cycleTheme()" title="Theme">☀️</button>
        <button id="logout-pill" class="pill pill-danger" onclick="logout()" data-i18n="logout">Logout</button>
      </div>`;
    wrap.prepend(top);

    // Hero image (separate, below the header)
    const hero = document.createElement('div');
    hero.className = 'section card glass hero';
    hero.innerHTML = `<img class="hero-img" src="${BANNER}" alt="Community Banner">`;
    top.after(hero);
  }

  document.addEventListener('DOMContentLoaded', inject);
})();
