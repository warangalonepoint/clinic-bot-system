<script>
  // Renders the top banner into <div id="app-banner"></div>
  function renderBanner(){
    const host=document.getElementById('app-banner'); if(!host) return;
    host.innerHTML = `
      <div class="banner">
        <div class="b-left">
          <img src="assets/logo.png" alt="logo" class="logo" onerror="this.style.visibility='hidden'"/>
          <div>
            <div class="title" data-i18n="app_title">Padmashali Community</div>
            <div class="muted" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>
        <div class="b-right">
          <button id="lang-pill" class="pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pill" onclick="cycleTheme()" title="Toggle theme">🌙</button>
        </div>
      </div>`;
    // minimal styles for the banner
    const css = document.createElement("style");
    css.textContent = `
      .banner{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px}
      .b-left{display:flex;align-items:center;gap:12px}
      .logo{width:48px;height:48px;border-radius:10px;border:1px solid #262b38;background:#0f1218;object-fit:cover}
      .title{font-size:28px;font-weight:800;line-height:1.05}
      .muted{opacity:.75}
      .pill{display:inline-flex;align-items:center;background:#0f1218;border:1px solid #262b38;padding:6px 10px;border-radius:999px;font-size:13px;cursor:pointer}
    `;
    document.head.appendChild(css);
    // apply i18n + theme
    applyI18n(); applyTheme();
  }
  document.addEventListener("DOMContentLoaded", renderBanner);
</script>
