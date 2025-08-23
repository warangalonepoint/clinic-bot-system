<script>
  // Simple bilingual i18n (EN/TE) with localStorage
  const I18N = {
    en: {
      app_title: "Padmashali Community",
      tagline: "unity • seva • growth",
      enter_pin: "Enter your PIN",
      continue: "Continue",
      invalid_pin: "Invalid PIN. Try again.",
      members_hint: "Members: 1111 · Committee: 5555 · Admin: 9999",
      logout: "Logout",
      home: "Home",
      directory: "Directory",
      events: "Events",
      book_halls: "Book Halls",
      fees: "Fees",
      loan_request: "Loan Request",
      manage_content: "Manage Content",
      user_roles: "User Roles",
      hall_inventory: "Hall Inventory",
      finance: "Finance",
      loan_desk: "Loan Desk",
      backups: "Backups",
      settings: "Settings",
      audit_logs: "Audit Logs",
      danger_zone: "Danger Zone",
      reset_sessions: "Reset Sessions",
      // Directory
      dir_title: "Directory",
      dir_sub: "Search members & contacts",
      search: "Search",
      area: "Area",
      seva: "Seva",
      any: "Any",
      export_csv: "Export CSV",
      phone: "Phone",
      no_results: "No results"
    },
    te: {
      app_title: "పద్మశాలీ కమ్యూనిటీ",
      tagline: "ఏకత్వం • సేవ • అభివృద్ధి",
      enter_pin: "మీ పిన్ నమోదు చేయండి",
      continue: "కొనసాగించండి",
      invalid_pin: "తప్పు పిన్. మళ్లీ ప్రయత్నించండి.",
      members_hint: "సభ్యులు: 1111 · కమిటీ: 5555 · అడ్మిన్: 9999",
      logout: "లాగ్ అవుట్",
      home: "హోమ్",
      directory: "డైరెక్టరీ",
      events: "ఈవెంట్స్",
      book_halls: "హాల్ బుకింగ్",
      fees: "ఫీజులు",
      loan_request: "లోన్ రిక్వెస్ట్",
      manage_content: "కంటెంట్ మేనేజ్‌మెంట్",
      user_roles: "యూజర్ రోల్స్",
      hall_inventory: "హాల్ ఇన్వెంటరీ",
      finance: "ఫైనాన్స్",
      loan_desk: "లోన్ డెస్క్",
      backups: "బ్యాకప్‌లు",
      settings: "సెట్టింగ్స్",
      audit_logs: "ఆడిట్ లాగ్స్",
      danger_zone: "డేంజర్ జోన్",
      reset_sessions: "సెషన్‌లను రీసెట్ చేయండి",
      // Directory
      dir_title: "డైరెక్టరీ",
      dir_sub: "సభ్యులను & కాంటాక్టులను వెతకండి",
      search: "శోధన",
      area: "ప్రాంతం",
      seva: "సేవ",
      any: "ఏదైనా",
      export_csv: "CSV డౌన్‌లోడ్",
      phone: "ఫోన్",
      no_results: "ఫలితాలు లేవు"
    }
  };

  function getLang(){ return localStorage.getItem("pc_lang") || "en"; }
  function setLang(code){ localStorage.setItem("pc_lang", code); applyI18n(); }
  function t(key){ const L=getLang(); return (I18N[L]&&I18N[L][key])||I18N.en[key]||key; }
  function applyI18n(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(el.tagName==="INPUT"||el.tagName==="TEXTAREA") el.placeholder=t(key);
      else el.textContent=t(key);
    });
    // update lang pill label if present
    const pill=document.getElementById("lang-pill");
    if(pill){ pill.textContent = (getLang()==="te" ? "తెలుగు ☀️" : "English ☀️"); }
    document.title = t("app_title");
  }
  document.addEventListener("DOMContentLoaded", applyI18n);
</script>
