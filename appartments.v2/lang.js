// Lightweight i18n for Apartments App (EN ↔ TE)
// Rules: no UI changes, instant swap, persists via localStorage.

(function () {
  const I18N = {
    en: {
      // Core
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
      "Welcome":"Welcome",
      "Action":"Action",
      "Block":"Block",

      // New sections/labels
      "Bookings":"Bookings",
      "No bookings yet.":"No bookings yet.",
      "Clear My Bookings":"Clear My Bookings",
      "Add":"Add",
      "Amenity":"Amenity",

      "Category":"Category",
      "Priority":"Priority",
      "Description":"Description",
      "Assigned To":"Assigned To",
      "No complaints yet.":"No complaints yet.",

      "Notice":"Notice",
      "Audience":"Audience",
      "Mark Read":"Mark Read",
      "No notices yet.":"No notices yet.",

      "Visitor Log":"Visitor Log",
      "Search name/purpose":"Search name/purpose",
      "Export CSV":"Export CSV",
      "Photo":"Photo",
      "No visitors yet.":"No visitors yet.",

      "Pre-Approve a Visitor":"Pre-Approve a Visitor",
      "Visitor Name":"Visitor Name",
      "Clear My Pre-Approvals":"Clear My Pre-Approvals",
      "No pre-approvals yet.":"No pre-approvals yet.",
      "Delete":"Delete",

      // Runtime
      "Checking…":"Checking…",
      "Invalid PIN.":"Invalid PIN.",
      "Error loading PINs.":"Error loading PINs.",
      "Submitted":"Submitted",
      "Saved locally.":"Saved locally.",
      "Save your flat first.":"Save your flat first.",
      "Name required":"Name required"
    },
    te: {
      // Core
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
      "Cancel":"రద్దు చేయి",
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
      "Welcome":"స్వాగతం",
      "Action":"చర్య",
      "Block":"బ్లాక్",

      // New sections/labels
      "Bookings":"బుకింగ్స్",
      "No bookings yet.":"ఇంకా బుకింగ్స్ లేవు.",
      "Clear My Bookings":"నా బుకింగ్స్ క్లియర్ చేయి",
      "Add":"జోడించు",
      "Amenity":"సౌకర్యం",

      "Category":"వర్గం",
      "Priority":"ప్రాధాన్యత",
      "Description":"వివరణ",
      "Assigned To":"కేటాయించిన వ్యక్తి",
      "No complaints yet.":"ఇంకా ఫిర్యాదులు లేవు.",

      "Notice":"నోటీసు",
      "Audience":"ప్రేక్షకులు",
      "Mark Read":"చదివినట్లుగా గుర్తించు",
      "No notices yet.":"ఇంకా నోటీసులు లేవు.",

      "Visitor Log":"సందర్శకుల నమోదు",
      "Search name/purpose":"పేరు/ఉద్దేశ్యం శోధించండి",
      "Export CSV":"CSV ఎగుమతి",
      "Photo":"ఫోటో",
      "No visitors yet.":"ఇంకా సందర్శకులు లేరు.",

      "Pre-Approve a Visitor":"సందర్శకుడిని ముందస్తుగా అనుమతించు",
      "Visitor Name":"సందర్శకుడి పేరు",
      "Clear My Pre-Approvals":"నా ముందస్తు అనుమతులు క్లియర్ చేయి",
      "No pre-approvals yet.":"ఇంకా ముందస్తు అనుమతులు లేవు.",
      "Delete":"తొలగించు",

      // Runtime
      "Checking…":"తనిఖీ జరుగుతోంది…",
      "Invalid PIN.":"చెల్లని పిన్.",
      "Error loading PINs.":"పిన్‌లను లోడ్ చేయడంలో లోపం.",
      "Submitted":"సమర్పించబడింది",
      "Saved locally.":"లోకల్‌గా సేవ్ అయ్యింది.",
      "Save your flat first.":"ముందు మీ ఫ్లాట్ సేవ్ చేయండి.",
      "Name required":"పేరు అవసరం"
    }
  };

  // Load Telugu font only when needed
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
    document
      .querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-aria], [data-i18n-title]')
      .forEach(el => translateElement(el, dict));

    document.documentElement.classList.toggle('lang-te', lang === 'te');
    ensureTeluguFont(lang === 'te');

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

  // Simple translator for runtime strings
  function t(key){
    const lang = localStorage.getItem('lang') || 'en';
    const d = I18N[lang] || I18N.en;
    return d[key] !== undefined ? d[key] : key;
  }

  // Re-translate dynamically added nodes
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

  // Expose tiny API if needed
  window.AppI18N = { setLang, dict: I18N, t };
})();
