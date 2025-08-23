(function () {
  // host container
  function host() {
    let el = document.getElementById("app-banner");
    if (!el) {
      el = document.createElement("div");
      el.id = "app-banner";
      const wrap = document.querySelector(".wrap,.container");
      (wrap ? wrap : document.body).prepend(el);
    }
    return el;
  }

  // session + logout
  function hasSession() {
    try { return !!JSON.parse(localStorage.getItem("pc_session") || "null"); }
    catch { return false; }
  }
  function onLogout() {
    try { localStorage.removeItem("pc_session"); } catch {}
    location.href = "index.html";
  }

  // big, full banner height (responsive)
  function heroHeight() {
    const h = Math.round(window.innerHeight * (window.APP_HERO_VH || 0.30)); // 30vh default
    return Math.max(160, Math.min(300, h)); // clamp
  }

  function render() {
    const el     = host();
    const logo   = window.APP_LOGO_PATH   || "assets/logo.png";
    const banner = window.APP_BANNER_PATH || "assets/banner.png";

    el.innerHTML = `
      <!-- Header row: title left, pills right -->
      <div class="pc-header card glass"
           style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;">
        <div style="display:flex;align-items:center;gap:12px;min-width:0">
          <img src="${logo}" alt="logo" class="pc-logo"
               onerror="this.style.display='none'"
               style="width:44px;height:44px;border-radius:10px;object-fit:cover;border:1px solid var(--muted-border,#d0d7de)"/>
          <div style="min-width:0">
            <div class="pc-title" data-i18n="app_title" style="line-height:1.1">Padmashali Community</div>
            <div class="muted" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>

        <div class="pc-actions" style="display:flex;gap:8px;flex:0 0 auto">
          <button id="lang-pill"  class="pc-pill pill" style="white-space:nowrap"
                  onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pc-pill pill" onclick="cycleTheme()" title="Theme">🌙</button>
          ${hasSession() ? `<button id="logout-pill" class="pc-pill pill" onclick="(${onLogout.toString()})()">Logout</button>` : ``}
        </div>
      </div>

      <!-- Full banner underneath (no overlay text) -->
      <div class="pc-hero card glass" style="margin-top:12px;padding:0;overflow:hidden">
        <img src="${banner}" alt="banner"
             style="width:100%;height:${heroHeight()}px;object-fit:cover;display:block;border-radius:16px"/>
      </div>
    `;

    // fallback if banner missing
    const img = el.querySelector(".pc-hero img");
    img.onerror = () => {
      const hero = el.querySelector(".pc-hero");
      hero.innerHTML = `<div style="height:${heroHeight()}px;border-radius:16px;background:linear-gradient(135deg,#dbeafe,#ede9fe)"></div>`;
    };

    if (typeof applyI18n === "function") applyI18n();
    if (typeof applyTheme === "function") applyTheme();
  }

  // resize/rotate -> keep banner tall
  window.addEventListener("resize", () => {
    clearTimeout(window.__pc_bnr_resize);
    window.__pc_bnr_resize = setTimeout(render, 120);
  });

  document.addEventListener("DOMContentLoaded", render);
})();
