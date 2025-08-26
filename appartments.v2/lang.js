<!-- Save as: lang.js  (place next to your HTML files) -->
<script>
// Lightweight i18n for Apartments App (EN ↔ TE)
// Rules: no UI changes, instant swap, persists via localStorage.

(function () {
  const I18N = {
    en: {
      "Dashboard":"Dashboard",
      "Residents":"Residents",
      "Committee":"Committee",
      "Admin":"Admin",
      "Guards":"Guards",
      "Visitors":"Visitors",
      "Notices":"Notices",
      "Complaints":"Complaints",
      "Staff Attendance":"Staff Attendance",
      "Login PIN":"Login PIN",
      "Submit":"Submit",
      "Cancel":"Cancel",
      "Save":"Save",
      "Export":"Export",
      "Search":"Search",
      "Filter":"Filter",
      "Date":"Date",
      "Time":"Time",
      "Name":"Name",
      "Phone":"Phone",
      "Flat Number":"Flat Number",
      "Status":"Status",
      "Approved":"Approved",
      "Pending":"Pending",
      "Rejected":"Rejected",
      "Today":"Today",
      "Yesterday":"Yesterday",
      "From":"From",
      "To":"To",
      "Logout":"Logout",
      "Language":"Language",
      "English":"English",
      "Telugu":"Telugu",
      "Raise Complaint":"Raise Complaint",
      "Guard":"Guard",
      "Gate Pass":"Gate Pass",
      "Vehicle Number":"Vehicle Number",
      "Purpose":"Purpose",
      "Approve":"Approve",
      "Deny":"Deny",
      "OTP":"OTP",
      "Verify":"Verify",
      "Welcome":"Welcome"
    },
    te: {
      "Dashboard":"డ్యాష్‌బోర్డ్",
      "Residents":"నివాసులు",
      "Committee":"కమిటీ",
      "Admin":"అడ్మిన్",
      "Guards":"గార్డులు",
      "Visitors":"సందర్శకులు",
      "Notices":"నోటీసులు",
      "Complaints":"ఫిర్యాదులు",
      "Staff Attendance":"సిబ్బంది హాజరు",
      "Login PIN":"లాగిన్ పిన్",
      "Submit":"సమర్పించు",
      "Cancel":"రద్దు",
      "Save":"సేవ్ చేయి",
      "Export":"ఎగుమతి",
      "Search":"శోధన",
      "Filter":"వడపోత",
      "Date":"తేదీ",
      "Time":"సమయం",
      "Name":"పేరు",
      "Phone":"ఫోన్",
      "Flat Number":"ఫ్లాట్ నంబర్",
      "Status":"స్థితి",
      "Approved":"ఆమోదించబడింది",
      "Pending":"పెండింగ్",
      "Rejected":"తిరస్కరించబడింది",
      "Today":"ఈ రోజు",
      "Yesterday":"నిన్న",
      "From":"నుండి",
      "To":"వరకు",
      "Logout":"లాగ్ అవుట్",
      "Language":"భాష",
      "English":"ఇంగ్లీష్",
      "Telugu":"తెలుగు",
      "Raise Complaint":"ఫిర్యాదు నమోదు చేయి",
      "Guard":"గార్డు",
      "Gate Pass":"గేట్ పాస్",
      "Vehicle Number":"వాహన నంబర్",
      "Purpose":"ఉద్దేశ్యం",
      "Approve":"ఆమోదించు",
      "Deny":"నిరాకరించు",
      "OTP":"ఓటీపీ",
      "Verify":"ధృవీకరించు",
      "Welcome":"స్వాగతం"
    }
  };

  // Inject Telugu font only when needed
  function ensureTeluguFont(active) {
    let link = document.getElementById('te-font');
    if (active && !link) {
      link = document.createElement('link');
      link.id = 'te-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600&display=swap';
      document.head.appendChild(link);
    }
  }

  function translateElement(el, dict) {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) el.textContent = dict[key];

    const phKey = el.getAttribute('data-i18n-placeholder');
    if (phKey && dict[phKey] !== undefined) el.setAttribute('placeholder', dict[phKey]);

    const ariaKey = el.getAttribute('data-i18n-aria');
    if (ariaKey && dict[ariaKey] !== undefined) el.setAttribute('aria-label', dict[ariaKey]);

    const titleKey = el.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey] !== undefined) el.setAttribute('title', dict[titleKey]);
  }

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-aria], [data-i18n-title]')
      .forEach(el => translateElement(el, dict));

    // Toggle HTML class for font
    document.documentElement.classList.toggle('lang-te', lang === 'te');
    ensureTeluguFont(lang === 'te');

    // Update toggle label if present
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = (lang === 'te') ? 'EN' : 'TE';
      btn.setAttribute('title', (lang === 'te') ? 'Switch to English' : 'తెలుగుకు మారండి');
    }
  }

  function setLang(lang) {
    localStorage.setItem('lang', (lang === 'te') ? 'te' : 'en');
    applyTranslations(localStorage.getItem('lang'));
  }

  // Observe future nodes (dynamic content)
  const obs = new MutationObserver(() => {
    const lang = localStorage.getItem('lang') || 'en';
    applyTranslations(lang);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'en';
    applyTranslations(lang);
    obs.observe(document.body, { childList: true, subtree: true });

    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => setLang((localStorage.getItem('lang') === 'te') ? 'en' : 'te'));
  });

  // Expose small API if needed
  window.AppI18N = { setLang, dict: I18N };
})();
</script>
