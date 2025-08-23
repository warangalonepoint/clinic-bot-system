(function () {
  function ensureHost() {
    let host = document.getElementById("app-banner");
    if (!host) {
      host = document.createElement("div");
      host.id = "app-banner";
      const wrap = document.querySelector(".wrap,.container");
      (wrap ? wrap : document.body).prepend(host);
    }
    return host;
  }

  function render() {
    const host = ensureHost();
    const logo = window.APP_LOGO_PATH || "assets/logo.png";
    const banner = window.APP_BANNER_PATH || "assets/banner.png";
    // allow overriding position if you want later, e.g. window.APP_BANNER_POS='center 60%'
    const pos = window.APP_BANNER_POS || "center 60%"; // <-- shift DOWN vs default center

    host.innerHTML = `
      <div class="pc-banner glass card" 
           style="background:url('${banner}') ${pos} / cover no-repeat; 
                  padding:16px; border-radius:16px; min-height:140px; 
                  display:flex; align-items:center; justify-content:space-between; gap:12px;">
        <div class="pc-left" 
             style="background:rgba(255,255,255,0.85); padding:10px 14px; 
                    border-radius:12px; display:flex; align-items:center; gap:10px;">
          <img src="${logo}" class="pc-logo" alt="logo" 
               onerror="this.style.display='none'" 
               style="width:48px;height:48px;object-fit:cover;border-radius:10px;border:1px solid #ccc"/>
          <div>
            <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
            <div class="muted" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>

        <div class="pc-right" style="display:flex;gap:8px;align-items:center">
          <button id="lang-pill" class="pc-pill pill" style="white-space:nowrap"
                  onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pc-pill pill" onclick="cycleTheme()" title="Theme">🌙</button>
        </div>
      </div>
    `;
    applyI18n();
    applyTheme();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
