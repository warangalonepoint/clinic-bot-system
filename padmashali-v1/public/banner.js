<script>
(function(){
  function ensureHost(){
    let host=document.getElementById('app-banner');
    if(!host){
      host=document.createElement('div');host.id='app-banner';
      const wrap=document.querySelector('.wrap,.container'); (wrap?wrap:document.body).prepend(host);
    }
    return host;
  }
  function render(){
    const host=ensureHost();
    const logo=(window.APP_LOGO_PATH||'assets/logo.png');
    host.innerHTML=`
      <div class="pc-banner glass card">
        <div class="pc-left">
          <img src="${logo}" class="pc-logo" alt="logo" onerror="this.style.display='none'"/>
          <div>
            <div class="pc-title" data-i18n="app_title">Padmashali Community</div>
            <div class="muted" data-i18n="tagline">unity • seva • growth</div>
          </div>
        </div>
        <div class="pc-right" style="display:flex;gap:8px">
          <button id="lang-pill" class="pc-pill pill" onclick="setLang(getLang()==='te'?'en':'te')">English</button>
          <button id="theme-pill" class="pc-pill pill" onclick="cycleTheme()" title="Theme">🌙</button>
        </div>
      </div>`;
    applyI18n(); applyTheme();
  }
  document.addEventListener('DOMContentLoaded',render);
})();
</script>
