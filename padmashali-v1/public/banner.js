<!-- banner.js -->
<script>
(function () {
  // prevent double mount
  if (window.__PC_BANNER_MOUNTED__) return;
  window.__PC_BANNER_MOUNTED__ = true;

  function getHost() {
    // prefer explicit placeholder if present
    let host = document.getElementById('app-banner');
    if (!host) {
      // create one at the top of .wrap (or body) if missing
      const wrap = document.querySelector('.wrap') || document.body;
      host = document.createElement('div');
      host.id = 'app-banner';
      wrap.prepend(host);
    }
    // clean any older static banners inside the host
    host.querySelectorAll('.pc-banner').forEach(n => n.remove());
    return host;
  }

  function render() {
    const host = getHost();
    const logo = (window.APP_LOGO_PATH || 'assets/logo.png');
    const bannerImg = (window.APP_BANNER_PATH || 'assets/banner.png');

    host.innerHTML = `
      <style>
        .pc-banner{width:100%; box-sizing:border-box;}
      </style>
      <div class="pc-banner glass card">
        <div class="pc-brand">
          <img src="${logo}" class="pc-logo" alt="logo" onerror="this.style.display='none'"/>
          <div class="pc-brand-text">
            <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
            <div class="pc-sub" data-i18n="tagline">unity • seva • growth</div>
            <div class="pc-pills">
              <button id="lang-pill" class="pc-pill pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
              <button id="theme-pill" class="pc-pill pill" onclick="cycleTheme()" title="Theme">🌙</button>
              <button id="logout-pill" class="pc-pill pill" onclick="logout()" data-i18n="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <img class="hero-img card" src="${bannerImg}" alt="" loading="lazy"
           onerror="this.style.display='none'"/>
    `;
    applyI18n?.(); applyTheme?.();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
</script>
