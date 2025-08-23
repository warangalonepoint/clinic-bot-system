<script>
// v2 - self-injecting banner; works even if #app-banner is missing
(function(){
  function ensureHost(){
    let host = document.getElementById('app-banner');
    if (!host) {
      // insert at top of <body>
      host = document.createElement('div');
      host.id = 'app-banner';
      // Prefer inside a .wrap if present (your layout uses it)
      const wrap = document.querySelector('.wrap');
      if (wrap) wrap.insertBefore(host, wrap.firstChild);
      else document.body.insertBefore(host, document.body.firstChild);
    }
    return host;
  }

  function render(){
    const host = ensureHost();
    const logoSrc = (window.APP_LOGO_PATH || 'assets/logo.png'); // you have assets/logo.png
    host.innerHTML = `
      <div class="pc-banner">
        <div class="pc-left">
          <img src="${logoSrc}" class="pc-logo" alt="logo" onerror="this.style.display='none'"/>
          <div>
            <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
            <div class="pc-muted" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>
        <div class="pc-right">
          <button id="lang-pill" class="pc-pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pc-pill" onclick="cycleTheme()" title="Theme">🌙</button>
        </div>
      </div>
    `;
    applyI18n(); applyTheme();
  }

  function injectCSS(){
    if (document.getElementById('pc-banner-css')) return;
    const css = document.createElement('style'); css.id='pc-banner-css';
    css.textContent = `
      .pc-banner{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:0 0 14px 0}
      .pc-left{display:flex;align-items:center;gap:12px}
      .pc-logo{width:48px;height:48px;border-radius:10px;border:1px solid #262b38;background:#0f1218;object-fit:cover}
      .pc-title{font-size:28px;font-weight:800;line-height:1.05}
      .pc-muted{opacity:.75}
      .pc-pill{display:inline-flex;align-items:center;background:#0f1218;border:1px solid #262b38;padding:6px 10px;border-radius:999px;font-size:13px;cursor:pointer}
      html[data-theme="light"] .pc-pill{background:#ffffff;border-color:#e5e7eb;color:#0b1220}
      html[data-theme="light"] .pc-logo{background:#fff;border-color:#e5e7eb}
    `;
    document.head.appendChild(css);
  }

  document.addEventListener('DOMContentLoaded', function(){
    injectCSS();
    render();
  });
})();
</script>
