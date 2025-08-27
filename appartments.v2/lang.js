/* lang.js — v3.0 (EN/TE) — global mini i18n for Apartments suite
   - Auto-translates innerText, placeholders, and <option> labels.
   - Prefers explicit [data-i18n] keys; otherwise matches visible English text.
   - API: AppI18N.setLang('en'|'te'), AppI18N.getLang(), AppI18N.apply()
*/

(function (w, d) {
  const STORAGE_KEY = "apt_lang";
  const LANGS = ["en", "te"];

  // ------------ DICTIONARY ------------
  const dict = {
    en: {},

    te: {
      // Common UI
      "Onestop Apartments": "ఒనెస్టాప్ అపార్ట్‌మెంట్స్",
      "Residents": "నివాసులు",
      "Guards": "గార్డులు",
      "Committee": "కమిటీ",
      "Admin": "అడ్మిన్",
      "Dashboard": "డ్యాష్‌బోర్డ్",
      "Bookings": "బుకింగ్స్",
      "Complaints": "ఫిర్యాదులు",
      "Notices": "ప్రకటనలు",
      "Visitor Log": "సందర్శకుల నమోదు",
      "Pre-Approve a Visitor": "సందర్శకుడిని ముందస్తు ఆమోదం",
      "Back to PIN": "పిన్ పేజీకి వెనక్కు",
      "Reset / Cache Tools": "రిసెట్ / క్యాష్ టూల్స్",
      "Logout": "లాగ్ అవుట్",

      // Index / PIN
      "Login PIN": "లాగిన్ పిన్",
      "Welcome": "స్వాగతం",
      "4–8 digit PIN": "4–8 అంకెల పిన్",
      "Submit": "సబ్మిట్",
      "Checking…": "తనిఖీ జరుగుతోంది…",
      "Invalid PIN.": "చెల్లని పిన్.",
      "Error loading PINs.": "పిన్లు లోడ్ కాలేదు.",

      // Hero chips
      "EN": "EN",
      "TE": "TE",

      // Profile (Residents)
      "Flat Number": "ఫ్లాట్ నంబర్",
      "Name": "పేరు",
      "Phone": "ఫోన్",
      "Block": "బ్లాక్",
      "Save": "సేవ్",
      "Saved locally.": "లోకల్‌గా సేవ్ అయ్యింది.",

      // Bookings (Residents)
      "Amenity": "వసతి",
      "Date": "తేదీ",
      "Time": "సమయం",
      "Add Booking": "బుకింగ్ జోడించండి",
      "Export CSV": "CSV ఎగుమతి",
      "Clear My Bookings": "నా బుకింగ్స్ క్లియర్",
      "Cancel": "రద్దు",
      "My Bookings": "నా బుకింగ్స్",

      // Complaints (Residents)
      "Category": "వర్గం",
      "Priority": "ప్రాధాన్యత",
      "Low": "తక్కువ",
      "Medium": "మధ్యస్థ",
      "High": "అత్యధికం",
      "Description": "వివరణ",
      "Status": "స్థితి",
      "Assignee": "నిర్వహించే వ్యక్తి",
      "Add Complaint": "ఫిర్యాదు జోడించండి",
      "Clear": "క్లియర్",
      "Export Complaints CSV": "ఫిర్యాదుల CSV ఎగుమతి",
      "Open": "ఓపెన్",
      "In Progress": "జరుగుతోంది",
      "Closed": "మూసివేయబడింది",

      // Notices (Residents + Committee/Admin list)
      "#": "#",
      "Notice": "ప్రకటన",
      "Audience": "ప్రేక్షకులు",
      "When": "ఎప్పుడు",
      "Time": "సమయం",
      "Action": "చర్య",
      "Mark Read": "చదివినట్లు గుర్తించు",
      "No notices yet.": "ఇప్పటివరకు ప్రకటనలు లేవు.",

      // Visitor Log (Residents)
      "Search name/purpose": "పేరు/ఉద్దేశ్యం శోధించండి",
      "Name": "పేరు",
      "Purpose": "ఉద్దేశ్యం",
      "Photo": "ఫోటో",
      "No visitors yet.": "ఇప్పటి వరకు సందర్శకులు లేరు.",
      "Export Visitors CSV": "సందర్శకుల CSV ఎగుమతి",

      // Pre-Approval (Residents)
      "Visitor Name": "సందర్శకుడి పేరు",
      "10-digit (optional)": "10 అంకెలు (ఐచ్ఛికం)",
      "e.g., Courier / Friend": "ఉదా., కొరియర్ / స్నేహితుడు",
      "e.g., Delivery, Guest": "ఉదా., డెలివరీ, అతిథి",
      "Add": "జోడించండి",
      "Export CSV": "CSV ఎగుమతి",
      "Clear My Pre-Approvals": "నా ముందస్తు ఆమోదాలు క్లియర్",
      "Status": "స్థితి",
      "Delete": "తొలగించు",
      "Queued": "క్యూ చేయబడింది",
      "Checked-In": "చెక్-ఇన్ అయింది",
      "No pre-approvals yet.": "ముందస్తు ఆమోదాలు లేవు.",

      // Guards
      "Guard Console": "గార్డ్ కన్సోల్",
      "Pre-Approved Visitors": "ముందస్తు ఆమోదించిన సందర్శకులు",
      "Search name/flat/purpose": "పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధించండి",
      "From residents’ pre-approvals. Verify ID → tap Check-In.": "నివాసుల ముందస్తు ఆమోదాల నుండి. ఐడి తనిఖీ చేసి → చెక్-ఇన్ ట్యాప్ చేయండి.",
      "Flat": "ఫ్లాట్",
      "Date": "తేదీ",
      "Purpose": "ఉద్దేశ్యం",
      "Check-In": "చెక్-ఇన్",
      "Walk-in Visitor": "వాక్-ఇన్ సందర్శకుడు",
      "Flat / Unit": "ఫ్లాట్ / యూనిట్",
      "Visitor name": "సందర్శకుడి పేరు",
      "optional": "ఐచ్ఛికం",
      "guest/maintenance": "అతిథి/మెయింటెనెన్స్",
      "Open Camera": "కెమెరాను ఓపెన్ చేయండి",
      "Capture Photo": "ఫోటో తీసుకోండి",
      "Couriers / Deliveries": "కొరియర్లు / డెలివరీలు",
      "From / Courier": "ఎవరి నుండి / కొరియర్",
      "Capture Parcel": "పార్సెల్ ఫోటో తీయండి",
      "Add Delivery": "డెలివరీ జోడించండి",
      "Export Deliveries CSV": "డెలివరీలు CSV ఎగుమతి",
      "Dispatch": "డిస్‌పాచ్",
      "At Gate": "గేటు వద్ద",
      "Dispatched": "పంపబడింది",
      "Visitor History (Today)": "ఈరోజు సందర్శకులు",
      "No visitors checked in today.": "ఈరోజు చెక్-ఇన్ అయిన సందర్శకులు లేరు.",

      // Committee
      "Committee Console": "కమిటీ కన్సోల్",
      "Post a Notice": "ప్రకటన పోస్ట్ చేయండి",
      "Title": "శీర్షిక",
      "All Residents": "అన్ని నివాసితులు",
      "Block A": "బ్లాక్ A",
      "Block B": "బ్లాక్ B",
      "Block C": "బ్లాక్ C",
      "Message": "సందేశం",
      "Publish": "ప్రచురించు",
      "Export Notices CSV": "ప్రకటనలు CSV ఎగుమతి",
      "Complaints Board": "ఫిర్యాదుల బోర్డు",
      "All": "అన్ని",
      "Search flat/category/text": "ఫ్లాట్/వర్గం/పాఠ్యం శోధించండి",
      "Details": "వివరాలు",
      "Close": "మూసివేయి",
      "Today at a Glance": "ఈరోజు సమీక్ష",
      "Visitors:": "సందర్శకులు:",
      "Deliveries:": "డెలివరీలు:",
      "Open Complaints:": "తెరిచిన ఫిర్యాదులు:",
      "Notices Posted:": "ప్రచురించిన ప్రకటనలు:",

      // Admin
      "Admin Console": "అడ్మిన్ కన్సోల్",
      "Complaints Operations": "ఫిర్యాదుల నిర్వహణ",
      "Quick Notice": "త్వరిత ప్రకటన",
      "Today Overview": "ఈరోజు అవలోకనం",
      "Export / Backup": "ఎగుమతి / బ్యాకప్",
      "Visitors (Today)": "సందర్శకులు (ఈరోజు)",
      "Deliveries (All)": "డెలివరీలు (అన్ని)",
      "Complaints (All)": "ఫిర్యాదులు (అన్ని)",
      "Notices (All)": "ప్రకటనలు (అన్ని)",

      // Visitors (standalone page)
      "Visitor Pass — offline demo": "విజిటర్ పాస్ — ఆఫ్‌లైన్ డెమో",
      "Visitors": "సందర్శకులు",
      "Create a visitor pass. A short token is generated; you can copy/share the pass text to security.":
        "సందర్శకుడి పాస్ సృష్టించండి. చిన్న టోకెన్ తయారవుతుంది; సెక్యూరిటీతో పాస్ టెక్స్ట్‌ను కాపీ/షేర్ చేయవచ్చు.",
      "Create Visitor": "సందర్శకుడిని సృష్టించండి",
      "Resident / Flat": "నివాసి / ఫ్లాట్",
      "Visitor Name": "సందర్శకుడి పేరు",
      "Phone": "ఫోన్",
      "10-digit number": "10 అంకెల నంబర్",
      "Vehicle (optional)": "వాహనం (ఐచ్ఛికం)",
      "Purpose / Notes (optional)": "ఉద్దేశ్యం / గమనికలు (ఐచ్ఛికం)",
      "Create Pass": "పాస్ సృష్టించండి",
      "Clear All": "అన్నీ క్లియర్ చేయండి",
      "Upcoming Visitors": "రాబోయే సందర్శకులు",
      "No visitors yet.": "ఇప్పటికీ సందర్శకులు లేరు.",
      "Copy Pass": "పాస్ కాపీ చేయండి",

      // Reset
      "SW Reset": "సర్వీస్ వర్కర్ రీసెట్",
      "Unregister SW + Clear Caches": "సర్వీస్ వర్కర్ రద్దు + క్యాష్ క్లియర్",
      "Cleared. Reloading…": "క్లియర్ అయింది. రీలోడ్ అవుతోంది…",
      "Reset failed": "రిసెట్ విఫలమైంది",

      // Misc alerts (app logic)
      "Save your flat first.": "ముందుగా మీ ఫ్లాట్ సేవ్ చేయండి.",
      "Name required": "పేరు అవసరం",
      "Flat and Name required": "ఫ్లాట్ మరియు పేరు అవసరం",
      "Flat and From required": "ఫ్లాట్ మరియు From అవసరం",
      "Title and Message required.": "శీర్షిక మరియు సందేశం అవసరం."
    }
  };

  // ------------ CORE ------------
  const getLang = () => (localStorage.getItem(STORAGE_KEY) || "en");
  const setLang = (code) => {
    const lang = LANGS.includes(code) ? code : "en";
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18N();
  };

  // Translate a single string if present
  function tr(s, lang) {
    if (!s) return s;
    const key = s.trim();
    const hit = dict[lang][key];
    return hit || key;
  }

  // Translate element text/placeholder/option text
  function translateElement(el, lang) {
    // explicit key
    const keyAttr = el.getAttribute && el.getAttribute("data-i18n");
    if (keyAttr) {
      el.textContent = tr(keyAttr, lang);
      return;
    }

    // inputs & textareas placeholders
    if (el.placeholder) el.placeholder = tr(el.placeholder, lang);

    // buttons & tabs & labels & headers & table headers
    const tag = el.tagName;
    if (/(BUTTON|LABEL|H1|H2|H3|H4|TH|TD|SPAN|DIV|A)$/i.test(tag)) {
      const txt = (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3)
        ? el.textContent.trim()
        : el.textContent.trim();
      if (txt) el.textContent = tr(txt, lang);
    }

    // select options
    if (tag === "SELECT") {
      [...el.options].forEach(op => { op.textContent = tr(op.textContent, lang); });
    }
  }

  // Walk the DOM and translate
  function applyI18N(root) {
    const lang = getLang();
    const scope = root || d.body;
    if (!scope) return;

    // Everything with data-i18n first
    scope.querySelectorAll("[data-i18n]").forEach(el => translateElement(el, lang));

    // Then common elements (fallback when data-i18n missing)
    const sel = [
      "input[placeholder]",
      "textarea[placeholder]",
      "button",
      "label",
      "select",
      "th","td",
      "h1","h2","h3","h4",
      ".tab",".btn",".pill","a","span","div"
    ].join(",");
    scope.querySelectorAll(sel).forEach(el => translateElement(el, lang));

    // Page title
    if (d.title) d.title = tr(d.title, lang);
  }

  // Observe dynamic changes (tables, renders)
  const obs = new MutationObserver(muts => {
    if (!muts.length) return;
    // Throttle: translate once per microtask
    applyI18N();
  });

  d.addEventListener("DOMContentLoaded", () => {
    applyI18N();
    try { obs.observe(d.body, { childList: true, subtree: true }); } catch {}
  });

  // Expose API
  w.AppI18N = { setLang, getLang, apply: applyI18N };
})(window, document);
