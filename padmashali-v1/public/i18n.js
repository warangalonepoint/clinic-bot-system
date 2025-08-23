<script>
  const I18N = {
    en: {
      app_title: "Padmashali Community",
      tagline: "unity • seva • growth",
      enter_pin: "Enter your PIN",
      continue: "Continue",
      invalid_pin: "Invalid PIN. Try again.",
      members_hint: "Members: 1111 · Committee: 5555 · Admin: 9999",
      home: "Home",
      logout: "Logout",
      // Tiles/labels
      directory: "Directory",
      dir_sub: "Search members & contacts",
      events: "Events",
      book_halls: "Book Halls",
      fees: "Fees",
      loan_request: "Loan Request",
      approvals: "Approvals",
      finance: "Finance",
      // misc
      open: "Open",
      reset_sessions: "Reset Sessions"
    },
    te: {
      app_title: "పద్మశాలీ కమ్యూనిటీ",
      tagline: "ఏకత్వం • సేవ • అభివృద్ధి",
      enter_pin: "మీ పిన్ నమోదు చేయండి",
      continue: "కొనసాగించండి",
      invalid_pin: "తప్పు పిన్. మళ్లీ ప్రయత్నించండి.",
      members_hint: "సభ్యులు: 1111 · కమిటీ: 5555 · అడ్మిన్: 9999",
      home: "హోమ్",
      logout: "లాగ్ అవుట్",
      // Tiles/labels
      directory: "డైరెక్టరీ",
      dir_sub: "సభ్యులు & కాంటాక్టుల శోధన",
      events: "ఈవెంట్స్",
      book_halls: "హాల్ బుకింగ్",
      fees: "ఫీజులు",
      loan_request: "లోన్ రిక్వెస్ట్",
      approvals: "అప్రూవల్స్",
      finance: "ఫైనాన్స్",
      // misc
      open: "ఓపెన్",
      reset_sessions: "సెషన్‌లను రీసెట్ చేయండి"
    }
  };

  function getLang(){ return localStorage.getItem("pc_lang") || "en"; }
  function setLang(code){
    localStorage.setItem("pc_lang", code);
    applyI18n();
  }
  function t(k){ const L=getLang(); return (I18N[L] && I18N[L][k]) || I18N.en[k] || k; }

  function applyI18n(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(el.tagName==="INPUT"||el.tagName==="TEXTAREA") el.placeholder=t(key);
      else el.textContent=t(key);
    });
    const pill=document.getElementById("lang-pill");
    if(pill){ pill.textContent = getLang()==="te" ? "తెలుగు" : "English"; }
    // keep page titles readable
    if(document.title.match(/Padmashali|పద్మశాలీ/)) document.title = t("app_title");
  }

  document.addEventListener("DOMContentLoaded", applyI18n);
</script>
