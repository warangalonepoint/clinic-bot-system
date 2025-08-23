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

  function bannerHeight() {
    // 28vh, but clamped to keep it pretty on all screens
    const h = Math.round(window.innerHeight * 0.28);
    return Math.max(120, Math.min(220, h));
  }

  function render() {
    const host = ensureHost();
    const logo = window.APP_LOGO_PATH || "assets/logo.png";
    const banner = window.APP_BANNER_PATH || "assets/banner.png";
    const pos   = window.APP_BANNER_POS  || "center 65%"; // shift DOWN a bit

    const H = bannerHeight();

    host.innerHTML = `
      <div class="pc-banner glass card"
           style="
             position:relative;
             background:url('${banner}') ${pos} / cover no-repeat;
             min-height:${H}px;
             border-radius:16px;
             padding:16px;
             display:flex;
             align-items:center;
             justify-content:space-between;
             gap:12px;">
        <div style="
              display:flex;align-items:center;gap:12px;
              background:rgba(255,255,255,0.85);
              padding:10px 14px;border-radius:12px;">
          <img src="${logo}" alt="logo"
               onerror="this.style.display='none'"
               style="width:48px;height:48px;object-fit:cover;border-radius:10px;border:1px solid #d0d7de"/>
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

        <!-- subtle gradient for readability on busy banners -->
        <div aria-hidden="true" style="
             position:absolute;inset:0;border-radius:16px;pointer-events:none;
             background:linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(0,0,0,0.08));"></div>
      </div>
    `;

    // If banner image is missing, keep a neutral background
    const bg = host.querySelector(".pc-banner");
    const img = new Image();
    img.onload = () => {}; // ok
    img.onerror = () => { bg.style.background = "linear-gradient(135deg,#dbeafe,#ede9fe)"; };
    img.src = banner;

    if (typeof applyI18n === "function") applyI18n();
    if (typeof applyTheme === "function") applyTheme();
  }

  window.addEventListener("resize", () => {
    // re-render to adjust min-height on rotation/resize
    clearTimeout(window.__pc_bnr_t);
    window.__pc_bnr_t = setTimeout(render, 120);
  });

  document.addEventListener("DOMContentLoaded", render);
})();
