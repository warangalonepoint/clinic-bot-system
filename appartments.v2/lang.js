/* lang.js — final */

(function(){
  const STORAGE_KEY = "apt_lang";
  const FALLBACK = "en";

  // Dictionary
  const dict = {
    en: {
      app_title: "Onestop Apartments",
      submit: "Submit",
      welcome: "Welcome",
      login_pin: "Login PIN",
      pin_placeholder: "4–8 digit PIN",

      // Tabs / titles
      dashboard: "Dashboard",
      residents_title: "Residents",
      guards_title: "Guards",
      committee_title: "Committee",
      log_title: "Visitor Log",
      visitors_title: "Pre-Approve a Visitor",
      bookings_title: "Bookings",
      complaints_title: "Complaints",
      notices_title: "Notices",

      // Common fields / actions
      save: "Save",
      flat_number: "Flat Number",
      name: "Name",
      phone: "Phone",
      block: "Block",
      date: "Date",
      time: "Time",
      purpose: "Purpose",
      status: "Status",
      action: "Action",
      export_csv: "Export CSV",
      delete: "Delete",
      close: "Close",
      cancel: "Cancel",
      add: "Add",
      checkin: "Check-In",
      open_camera: "Open Camera",
      capture_photo: "Capture Photo",
      at_gate: "At Gate",
      dispatched: "Dispatched",

      // Guards
      preapproved_visitors: "Pre-Approved Visitors",
      search_hint_pa: "Search name/flat/purpose",
      walkin_visitor: "Walk-in Visitor",
      flat_unit: "Flat / Unit",
      visitor_name: "Visitor Name",
      phone_opt: "Phone (optional)",
      purpose_hint: "guest / maintenance",
      deliveries: "Couriers / Deliveries",
      from_courier: "From / Courier",
      capture_parcel: "Capture Parcel",
      add_delivery: "Add Delivery",
      visitors_today: "Visitor History (Today)",
      search_hint_vh: "Search name/flat/purpose",

      // Committee
      post_notice: "Post a Notice",
      title: "Title",
      audience: "Audience",
      message: "Message",
      publish: "Publish",
      all_residents: "All Residents",
      block_a: "Block A",
      block_b: "Block B",
      block_c: "Block C",
      complaints_board: "Complaints Board",
      filter_all: "All",
      filter_open: "Open",
      filter_inprogress: "In Progress",
      filter_closed: "Closed",
      when: "When",
      category: "Category",
      priority: "Priority",
      assignee: "Assignee",
      details: "Details",
      today_glance: "Today at a Glance",
      visitors_count: "Visitors",
      deliveries_count: "Deliveries",
      open_complaints_count: "Open Complaints",
      notices_posted_count: "Notices Posted",

      // Admin
      admin_console: "Admin Console",
      quick_notice: "Quick Notice",
      today_overview: "Today Overview",
      export_backup: "Export / Backup",
      visitors_today_btn: "Visitors (Today)",
      deliveries_all_btn: "Deliveries (All)",
      complaints_all_btn: "Complaints (All)",
      notices_all_btn: "Notices (All)",

      // Residents sections
      visitor_log: "Visitor Log",
      preapprove_title: "Pre-Approve a Visitor",
      no_visitors: "No visitors yet.",
      no_notices: "No notices yet.",
      no_preapprovals: "No pre-approvals yet.",
      invalid_pin: "Invalid PIN.",
      checking: "Checking…",
      error_loading_pins: "Error loading PINs."
    },

    te: {
      app_title: "ఒనెస్టాప్ అపార్ట్‌మెంట్స్",
      submit: "సబ్మిట్",
      welcome: "స్వాగతం",
      login_pin: "లాగిన్ పిన్",
      pin_placeholder: "4–8 అంకెల పిన్",

      // Tabs / titles
      dashboard: "డ్యాష్‌బోర్డ్",
      residents_title: "నివాసితులు",
      guards_title: "గార్డ్స్",
      committee_title: "కమిటీ",
      log_title: "విజిటర్ లాగ్",
      visitors_title: "ప్రీ-అప్రూవ్ విజిటర్",
      bookings_title: "బుకింగ్స్",
      complaints_title: "ఫిర్యాదులు",
      notices_title: "ప్రకటనలు",

      // Common fields / actions
      save: "సేవ్",
      flat_number: "ఫ్లాట్ నంబర్",
      name: "పేరు",
      phone: "ఫోన్",
      block: "బ్లాక్",
      date: "తేదీ",
      time: "సమయం",
      purpose: "ఉద్దేశ్యం",
      status: "స్థితి",
      action: "చర్య",
      export_csv: "CSV ఎగుమతి",
      delete: "డిలీట్",
      close: "క్లోజ్",
      cancel: "రద్దు",
      add: "జోడించు",
      checkin: "చెక్-ఇన్",
      open_camera: "కెమేరా ఓపెన్",
      capture_photo: "ఫోటో తీసుకోండి",
      at_gate: "గేటు వద్ద",
      dispatched: "డిస్పాచ్ చేశారు",

      // Guards
      preapproved_visitors: "ప్రీ-అప్రూవ్ చేసిన విజిటర్లు",
      search_hint_pa: "పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధన",
      walkin_visitor: "వాక్-ఇన్ విజిటర్",
      flat_unit: "ఫ్లాట్ / యూనిట్",
      visitor_name: "విజిటర్ పేరు",
      phone_opt: "ఫోన్ (ఐచ్ఛికం)",
      purpose_hint: "గెస్ట్ / మెయింటెనెన్స్",
      deliveries: "కూరియర్ / డెలివరీలు",
      from_courier: "ఎక్కడి నుండి / కూరియర్",
      capture_parcel: "పార్సెల్ ఫోటో",
      add_delivery: "డెలివరీ జోడించు",
      visitors_today: "ఈ రోజు విజిటర్ హిస్టరీ",
      search_hint_vh: "పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధన",

      // Committee
      post_notice: "ప్రకటన పోస్ట్ చేయండి",
      title: "శీర్షిక",
      audience: "ఎవరికి",
      message: "సందేశం",
      publish: "పబ్లిష్",
      all_residents: "అన్ని నివాసితులు",
      block_a: "బ్లాక్ A",
      block_b: "బ్లాక్ B",
      block_c: "బ్లాక్ C",
      complaints_board: "ఫిర్యాదుల బోర్డు",
      filter_all: "అన్నీ",
      filter_open: "ఓపెన్",
      filter_inprogress: "ప్రోగ్రెస్‌లో",
      filter_closed: "క్లోజ్డ్",
      when: "ఎప్పుడు",
      category: "కేటగిరీ",
      priority: "ప్రాధాన్యం",
      assignee: "బాధ్యతవహించినవారు",
      details: "వివరాలు",
      today_glance: "ఈ రోజు ఒక చూపు",
      visitors_count: "విజిటర్లు",
      deliveries_count: "డెలివరీలు",
      open_complaints_count: "ఓపెన్ ఫిర్యాదులు",
      notices_posted_count: "పోస్ట్ చేసిన ప్రకటనలు",

      // Admin
      admin_console: "అడ్మిన్ కన్సోల్",
      quick_notice: "త్వరిత ప్రకటన",
      today_overview: "ఈ రోజు అవలోకనం",
      export_backup: "ఎగుమతి / బ్యాకప్",
      visitors_today_btn: "విజిటర్లు (ఈ రోజు)",
      deliveries_all_btn: "డెలివరీలు (అన్ని)",
      complaints_all_btn: "ఫిర్యాదులు (అన్ని)",
      notices_all_btn: "ప్రకటనలు (అన్ని)",

      // Residents sections
      visitor_log: "విజిటర్ లాగ్",
      preapprove_title: "విజిటర్ ప్రీ-అప్రూవ్",
      no_visitors: "ఇంకా విజిటర్లు లేరు.",
      no_notices: "ఇంకా ప్రకటనలు లేవు.",
      no_preapprovals: "ఇంకా ప్రీ-అప్రూవల్స్ లేవు.",
      invalid_pin: "తప్పుడు పిన్.",
      checking: "పరిశీలిస్తున్నాం…",
      error_loading_pins: "పిన్‌లను లోడ్ చేయడంలో పొరపాటు."
    }
  };

  function t(key){
    const lang = (localStorage.getItem(STORAGE_KEY) || FALLBACK);
    const table = dict[lang] || dict[FALLBACK];
    return table[key] || key; // fallback: show key if missing
  }

  function applyI18n(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      const val = t(k);
      // If input/placeholder
      if(el.tagName === "INPUT" || el.tagName === "TEXTAREA"){
        if(el.hasAttribute("placeholder")) el.placeholder = val;
        else el.value = val;
      }else{
        el.textContent = val;
      }
    });
    // title update if present
    const titleEl = document.querySelector("title");
    if(titleEl){
      const base = titleEl.getAttribute("data-i18n-base");
      if(base){ titleEl.textContent = t(base); }
    }
  }

  // public API
  window.setLang = function(lang){
    if(!dict[lang]) lang = FALLBACK;
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18n();
  };

  // init on ready + load (extra safe)
  function init(){
    const saved = localStorage.getItem(STORAGE_KEY) || FALLBACK;
    if(!dict[saved]) localStorage.setItem(STORAGE_KEY, FALLBACK);
    applyI18n();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, {once:true});
  }else{
    init();
  }
  window.addEventListener("load", applyI18n);
})();
