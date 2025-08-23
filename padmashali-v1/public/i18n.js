<script>
  // Simple bilingual i18n (EN/TE) with localStorage persistence
  const I18N = {
    en: {
      app_title: "Padmashali Community",
      tagline: "unity • seva • growth",
      // Common
      home: "Home",
      logout: "Logout",
      open: "Open",
      // Dash tiles
      directory: "Directory",
      dir_sub: "Search members & contacts",
      events: "Events",
      events_sub_view: "View & RSVP",
      events_sub_manage: "Create & manage",
      book_halls: "Book Halls",
      book_halls_sub: "Request slots",
      approvals: "Approvals",
      approvals_sub: "Hall / Loan approvals",
      fees: "Fees",
      fees_sub_member: "Pay & history",
      finance: "Finance",
      finance_sub: "Fees & ledger",
      loan_request: "Loan Request",
      loan_request_sub: "Apply & status",
      loan_desk: "Loan Desk",
      loan_desk_sub: "Review & decisions",
      manage_content: "Manage Content",
      user_roles: "User Roles",
      hall_inventory: "Hall Inventory",
      backups: "Backups",
      settings: "Settings",
      audit_logs: "Audit Logs",
      danger_zone: "Danger Zone",
      reset_sessions: "Reset Sessions"
    },
    te: {
      app_title: "పద్మశాలీ కమ్యూనిటీ",
      tagline: "ఏకత్వం • సేవ • అభివృద్ధి",
      // Common
      home: "హోమ్",
      logout: "లాగ్ అవుట్",
      open: "ఓపెన్",
      // Dash tiles
      directory: "డైరెక్టరీ",
      dir_sub: "సభ్యులు & కాంటాక్టుల శోధన",
      events: "ఈవెంట్స్",
      events_sub_view: "చూడండి & RSVP",
      events_sub_manage: "సృష్టించండి & నిర్వహించండి",
      book_halls: "హాల్ బుకింగ్",
      book_halls_sub: "స్లాట్స్ అభ్యర్థించండి",
      approvals: "అప్రూవల్స్",
      approvals_sub: "హాల్ / లోన్ అప్రూవల్స్",
      fees: "ఫీజులు",
      fees_sub_member: "చెల్లింపులు & హిస్టరీ",
      finance: "ఫైనాన్స్",
      finance_sub: "ఫీజులు & లెడ్జర్",
      loan_request: "లోన్ రిక్వెస్ట్",
      loan_request_sub: "అప్లై & స్టేటస్",
      loan_desk: "లోన్ డెస్క్",
      loan_desk_sub: "రివ్యూ & నిర్ణయాలు",
      manage_content: "కంటెంట్ నిర్వహణ",
      user_roles: "యూజర్ రోల్స్",
      hall_inventory: "హాల్ ఇన్వెంటరీ",
      backups: "బ్యాకప్‌లు",
      settings: "సెట్టింగ్స్",
      audit_logs: "ఆడిట్ లాగ్స్",
      danger_zone: "డేంజర్ జోన్",
      reset_sessions: "సెషన్‌లను రీసెట్ చేయండి"
    }
  };

  function getLang(){ return localStorage.getItem("pc_lang") || "en"; }
  function setLang(code){ localStorage.setItem("pc_lang", code); applyI18n(); }
  function t(key){ const L=getLang(); return (I18N[L]&&I18N[L][key])||I18N.en[key]||key; }

  function applyI18n(){
    // Swap text on any element that has data-i18n="key"
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(el.tagName==="INPUT"||el.tagName==="TEXTAREA") el.placeholder=t(key);
      else el.textContent=t(key);
    });
    // Update language pill
    const pill=document.getElementById("lang-pill");
    if(pill){ pill.textContent = (getLang()==="te" ? "తెలుగు ☀️" : "English ☀️"); }
    // Try update <title> if it holds app name
    if(document.title && /Padmashali|పద్మశాలీ/.test(document.title)){
      document.title = t("app_title");
    }
  }

  document.addEventListener("DOMContentLoaded", applyI18n);
</script>
