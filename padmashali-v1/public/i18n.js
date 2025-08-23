// i18n (English / Telugu) for v16
(function(){
  const KEY = 'pc-lang';
  const dict = {
    en: {
      app_title: "Padmashali Community",
      tagline: "unity • seva • growth",
      english: "English",
      telugu: "తెలుగు",
      logout: "Logout",

      // Index / login
      pin_title: "Enter your PIN",
      pin_help: "pin_help",
      members_count: "Members",
      committee_count: "Committee",
      admin_count: "Admin",
      continue: "Continue",

      // Member tiles
      directory_title: "Directory", directory_sub: "Search members & contacts",
      events_title: "Events", events_sub: "View & RSVP",
      halls_title: "Book Halls", halls_sub: "Request slots",
      fees_title: "Fees", fees_sub: "Pay & history",
      loans_title: "Loan Request", loans_sub: "Apply & status",

      // Committee tiles
      approvals_title: "Approvals", approvals_sub: "Hall / Loan approvals",
      loan_desk_title: "Loan Desk", loan_desk_sub: "Review & decisions",
      finance_title: "Finance", finance_sub: "Fees & ledger",

      // Generic
      reset_sessions: "Reset Sessions"
    },
    te: {
      app_title: "పద్మశాలి కమ్యూనిటీ",
      tagline: "ఐక్యత • సేవ • అభివృద్ధి",
      english: "English",
      telugu: "తెలుగు",
      logout: "లాగ్ అవుట్",

      pin_title: "మీ పిన్ నమోదు చేయండి",
      pin_help: "pin_help",
      members_count: "సభ్యులు",
      committee_count: "కమిటీ",
      admin_count: "అడ్మిన్",
      continue: "కొనసాగించండి",

      directory_title: "డైరెక్టరీ", directory_sub: "సభ్యులు & కాంటాక్ట్స్ శోధన",
      events_title: "ఈవెంట్స్", events_sub: "చూడండి & RSVP",
      halls_title: "హాల్ బుకింగ్", halls_sub: "స్లాట్‌లు అభ్యర్థించండి",
      fees_title: "ఫీజులు", fees_sub: "చెల్లింపులు & హిస్టరీ",
      loans_title: "లోన్ రిక్వెస్ట్", loans_sub: "అప్లై & స్టేటస్",

      approvals_title: "అప్రూవల్స్", approvals_sub: "హాల్ / లోన్ అప్రూవల్స్",
      loan_desk_title: "లోన్ డెస్క్", loan_desk_sub: "రివ్యూ & డెసిషన్స్",
      finance_title: "ఫైనాన్స్", finance_sub: "ఫీజులు & లెజర్",

      reset_sessions: "సెషన్‌లను రీసెట్ చేయండి"
    }
  };

  function get(){ return localStorage.getItem(KEY) || 'en'; }
  function set(v){ localStorage.setItem(KEY, v); apply(); }
  function t(key){ const L=get(); return (dict[L] && dict[L][key]) || key; }

  function apply(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      el.textContent = t(k);
    });
    const btn = document.getElementById('lang-pill');
    if(btn) btn.textContent = (get()==='te') ? dict.te.telugu : dict.en.english;
  }

  window.getLang = get;
  window.setLang = set;
  window.applyI18n = apply;
  window.i18n = { t };
})();
