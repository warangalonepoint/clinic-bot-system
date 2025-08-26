(function () {
  const I18N = {
    en: {
      // Core
      "Dashboard":"Dashboard","Residents":"Residents","Committee":"Committee","Admin":"Admin","Guards":"Guards","Visitors":"Visitors","Notices":"Notices","Complaints":"Complaints","Staff Attendance":"Staff Attendance","Login PIN":"Login PIN","Submit":"Submit","Cancel":"Cancel","Save":"Save","Export":"Export","Search":"Search","Filter":"Filter","Date":"Date","Time":"Time","Name":"Name","Phone":"Phone","Flat Number":"Flat Number","Status":"Status","Approved":"Approved","Pending":"Pending","Rejected":"Rejected","Today":"Today","Yesterday":"Yesterday","From":"From","To":"To","Logout":"Logout","Language":"Language","English":"English","Telugu":"Telugu","Raise Complaint":"Raise Complaint","Guard":"Guard","Gate Pass":"Gate Pass","Vehicle Number":"Vehicle Number","Purpose":"Purpose","Approve":"Approve","Deny":"Deny","OTP":"OTP","Verify":"Verify","Welcome":"Welcome","Action":"Action","Block":"Block",

      // Residents
      "Bookings":"Bookings","No bookings yet.":"No bookings yet.","Clear My Bookings":"Clear My Bookings","Add":"Add","Amenity":"Amenity","Category":"Category","Priority":"Priority","Description":"Description","Assigned To":"Assigned To","No complaints yet.":"No complaints yet.","Notice":"Notice","Audience":"Audience","Mark Read":"Mark Read","No notices yet.":"No notices yet.","Visitor Log":"Visitor Log","Search name/purpose":"Search name/purpose","Export CSV":"Export CSV","Photo":"Photo","No visitors yet.":"No visitors yet.","Pre-Approve a Visitor":"Pre-Approve a Visitor","Visitor Name":"Visitor Name","Clear My Pre-Approvals":"Clear My Pre-Approvals","No pre-approvals yet.":"No pre-approvals yet.","Delete":"Delete",

      // Committee
      "Committee Console":"Committee Console","Post a Notice":"Post a Notice","Title":"Title","Message":"Message","e.g., Water supply shutdown":"e.g., Water supply shutdown","All Residents":"All Residents","Block A":"Block A","Block B":"Block B","Block C":"Block C","Publish":"Publish","Export Notices CSV":"Export Notices CSV","Complaints Board":"Complaints Board","All":"All","Open":"Open","In Progress":"In Progress","Closed":"Closed","Search flat/category/text":"Search flat/category/text","Flat":"Flat","When":"When","Assignee":"Assignee","Details":"Details","Actions":"Actions","Vendor/Staff":"Vendor/Staff","Close":"Close","Today at a Glance":"Today at a Glance","Visitors:":"Visitors:","Deliveries:":"Deliveries:","Open Complaints:":"Open Complaints:","Notices Posted:":"Notices Posted:","Back to PIN":"Back to PIN","Reset / Cache Tools":"Reset / Cache Tools",

      // Guards
      "Guard Console":"Guard Console",
      "Pre-Approved Visitors":"Pre-Approved Visitors",
      "From residents’ pre-approvals. Verify ID → tap Check-In.":"From residents’ pre-approvals. Verify ID → tap Check-In.",
      "Walk-in Visitor":"Walk-in Visitor",
      "Flat / Unit":"Flat / Unit",
      "Open Camera":"Open Camera",
      "Capture Photo":"Capture Photo",
      "Check-In":"Check-In",
      "Clear":"Clear",
      "Couriers / Deliveries":"Couriers / Deliveries",
      "From / Courier":"From / Courier",
      "Capture Parcel":"Capture Parcel",
      "Add Delivery":"Add Delivery",
      "Export Deliveries CSV":"Export Deliveries CSV",
      "Visitor History (Today)":"Visitor History (Today)",
      "Export Visitors CSV":"Export Visitors CSV",
      "No visitors checked in today.":"No visitors checked in today.",
      "Search name/flat/purpose":"Search name/flat/purpose",
      "No pre-approvals found.":"No pre-approvals found.",
      "Dispatch":"Dispatch","Dispatched":"Dispatched","At Gate":"At Gate",

      // Runtime
      "Checking…":"Checking…","Invalid PIN.":"Invalid PIN.","Error loading PINs.":"Error loading PINs.","Submitted":"Submitted","Saved locally.":"Saved locally.","Save your flat first.":"Save your flat first.","Name required":"Name required","Title and Message required.":"Title and Message required.",
      "Camera not supported":"Camera not supported","Open camera first":"Open camera first","Flat and Name required":"Flat and Name required","Flat and From required":"Flat and From required"
    },
    te: {
      // Core
      "Dashboard":"డ్యాష్‌బోర్డ్","Residents":"నివాసులు","Committee":"కమిటీ","Admin":"అడ్మిన్","Guards":"గార్డులు","Visitors":"సందర్శకులు","Notices":"నోటీసులు","Complaints":"ఫిర్యాదులు","Staff Attendance":"సిబ్బంది హాజరు","Login PIN":"లాగిన్ పిన్","Submit":"సమర్పించు","Cancel":"రద్దు చేయి","Save":"సేవ్ చేయి","Export":"ఎగుమతి","Search":"శోధన","Filter":"వడపోత","Date":"తేదీ","Time":"సమయం","Name":"పేరు","Phone":"ఫోన్","Flat Number":"ఫ్లాట్ నంబర్","Status":"స్థితి","Approved":"ఆమోదించబడింది","Pending":"పెండింగ్","Rejected":"తిరస్కరించబడింది","Today":"ఈ రోజు","Yesterday":"నిన్న","From":"నుండి","To":"వరకు","Logout":"లాగ్ అవుట్","Language":"భాష","English":"ఇంగ్లీష్","Telugu":"తెలుగు","Raise Complaint":"ఫిర్యాదు నమోదు చేయి","Guard":"గార్డు","Gate Pass":"గేట్ పాస్","Vehicle Number":"వాహన నంబర్","Purpose":"ఉద్దేశ్యం","Approve":"ఆమోదించు","Deny":"నిరాకరించు","OTP":"ఓటీపీ","Verify":"ధృవీకరించు","Welcome":"స్వాగతం","Action":"చర్య","Block":"బ్లాక్",

      // Residents
      "Bookings":"బుకింగ్స్","No bookings yet.":"ఇంకా బుకింగ్స్ లేవు.","Clear My Bookings":"నా బుకింగ్స్ క్లియర్ చేయి","Add":"జోడించు","Amenity":"సౌకర్యం","Category":"వర్గం","Priority":"ప్రాధాన్యత","Description":"వివరణ","Assigned To":"కేటాయించిన వ్యక్తి","No complaints yet.":"ఇంకా ఫిర్యాదులు లేవు.","Notice":"నోటీసు","Audience":"ప్రేక్షకులు","Mark Read":"చదివినట్లుగా గుర్తించు","No notices yet.":"ఇంకా నోటీసులు లేవు.","Visitor Log":"సందర్శకుల నమోదు","Search name/purpose":"పేరు/ఉద్దేశ్యం శోధించండి","Export CSV":"CSV ఎగుమతి","Photo":"ఫోటో","No visitors yet.":"ఇంకా సందర్శకులు లేరు.","Pre-Approve a Visitor":"సందర్శకుడిని ముందస్తుగా అనుమతించు","Visitor Name":"సందర్శకుడి పేరు","Clear My Pre-Approvals":"నా ముందస్తు అనుమతులు క్లియర్ చేయి","No pre-approvals yet.":"ఇంకా ముందస్తు అనుమతులు లేవు.","Delete":"తొలగించు",

      // Committee
      "Committee Console":"కమిటీ కన్సోల్","Post a Notice":"నోటీసు పోస్ట్ చేయి","Title":"శీర్షిక","Message":"సందేశం","e.g., Water supply shutdown":"ఉదా., నీటి సరఫరా నిలిపివేత","All Residents":"అన్ని నివాసులు","Block A":"బ్లాక్ A","Block B":"బ్లాక్ B","Block C":"బ్లాక్ C","Publish":"ప్రచురించు","Export Notices CSV":"నోటీసులు CSV ఎగుమతి","Complaints Board":"ఫిర్యాదుల బోర్డు","All":"అన్ని","Open":"ఓపెన్","In Progress":"ప్రగతిలో ఉంది","Closed":"మూసివేయబడింది","Search flat/category/text":"ఫ్లాట్/వర్గం/పాఠ్యం శోధించండి","Flat":"ఫ్లాట్","When":"ఎప్పుడు","Assignee":"కేటాయించిన వ్యక్తి","Details":"వివరాలు","Actions":"చర్యలు","Vendor/Staff":"విక్రేత/సిబ్బంది","Close":"మూసివేయి","Today at a Glance":"ఈ రోజు ఒక చూపులో","Visitors:":"సందర్శకులు:","Deliveries:":"డెలివరీలు:","Open Complaints:":"తెరిచి ఉన్న ఫిర్యాదులు:","Notices Posted:":"పోస్ట్ చేసిన నోటీసులు:","Back to PIN":"పిన్‌కి తిరిగి వెళ్ళు","Reset / Cache Tools":"రీసెట్ / క్యాష్ టూల్స్",

      // Guards
      "Guard Console":"గార్డ్ కన్సోల్",
      "Pre-Approved Visitors":"ముందస్తుగా అనుమతించిన సందర్శకులు",
      "From residents’ pre-approvals. Verify ID → tap Check-In.":"నివాసుల ముందస్తు అనుమతుల నుండి. ఐడీ ధృవీకరించి → చెక్-ఇన్ నొక్కండి.",
      "Walk-in Visitor":"నేరుగా వచ్చిన సందర్శకుడు",
      "Flat / Unit":"ఫ్లాట్ / యూనిట్",
      "Open Camera":"కెమెరా ఆన్ చేయి",
      "Capture Photo":"ఫోటో తీసుకో",
      "Check-In":"చెక్-ఇన్",
      "Clear":"క్లియర్",
      "Couriers / Deliveries":"కూరియర్ / డెలివరీలు",
      "From / Courier":"ఎవరి నుండి / కూరియర్",
      "Capture Parcel":"పార్సెల్ పిక్చర్ తీసుకో",
      "Add Delivery":"డెలివరీ జోడించు",
      "Export Deliveries CSV":"డెలివరీలు CSV ఎగుమతి",
      "Visitor History (Today)":"సందర్శకుల చరిత్ర (ఈరోజు)",
      "Export Visitors CSV":"సందర్శకుల CSV ఎగుమతి",
      "No visitors checked in today.":"ఈరోజు చెక్-ఇన్ చేసిన సందర్శకులు లేరు.",
      "Search name/flat/purpose":"పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధించండి",
      "No pre-approvals found.":"ముందస్తు అనుమతులు కనపడలేదు.",
      "Dispatch":"డిస్పాచ్","Dispatched":"డిస్పాచ్ చేశారు","At Gate":"గేటు వద్ద",

      // Runtime
      "Checking…":"తనిఖీ జరుగుతోంది…","Invalid PIN.":"చెల్లని పిన్.","Error loading PINs.":"పిన్‌లను లోడ్ చేయడంలో లోపం.","Submitted":"సమర్పించబడింది","Saved locally.":"లోకల్‌గా సేవ్ అయ్యింది.","Save your flat first.":"ముందు మీ ఫ్లాట్ సేవ్ చేయండి.","Name required":"పేరు అవసరం","Title and Message required.":"శీర్షిక మరియు సందేశం అవసరం.",
      "Camera not supported":"కెమెరా సపోర్ట్ చేయబడలేదు","Open camera first":"ముందుగా కెమెరాను ఆన్ చేయండి","Flat and Name required":"ఫ్లాట్ మరియు పేరు అవసరం","Flat and From required":"ఫ్లాట్ మరియు పంపినవారు అవసరం"
    }
  };

  function ensureTeluguFont(active){ let link=document.getElementById('te-font'); if(active && !link){ link=document.createElement('link'); link.id='te-font'; link.rel='stylesheet'; link.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600&display=swap'; document.head.appendChild(link);} }

  function translateElement(el, dict){
    const key=el.getAttribute('data-i18n'); if(key && dict[key]!==undefined) el.textContent=dict[key];
    const phKey=el.getAttribute('data-i18n-placeholder'); if(phKey && dict[phKey]!==undefined) el.setAttribute('placeholder',dict[phKey]);
    const ariaKey=el.getAttribute('data-i18n-aria'); if(ariaKey && dict[ariaKey]!==undefined) el.setAttribute('aria-label',dict[ariaKey]);
    const titleKey=el.getAttribute('data-i18n-title'); if(titleKey && dict[titleKey]!==undefined) el.setAttribute('title',dict[titleKey]);
  }

  function applyTranslations(lang){
    const dict=I18N[lang]||I18N.en;
    document.querySelectorAll('[data-i18n],[data-i18n-placeholder],[data-i18n-aria],[data-i18n-title]').forEach(el=>translateElement(el,dict));
    document.documentElement.classList.toggle('lang-te',lang==='te'); ensureTeluguFont(lang==='te');
    const btn=document.getElementById('langToggle'); if(btn){ btn.textContent=(lang==='te')?'EN':'TE'; btn.setAttribute('title',(lang==='te')?'Switch to English':'తెలుగుకు మారండి'); }
  }

  function setLang(lang){ localStorage.setItem('lang',(lang==='te')?'te':'en'); applyTranslations(localStorage.getItem('lang')); }

  function t(key){ const lang=localStorage.getItem('lang')||'en'; const d=I18N[lang]||I18N.en; return d[key]!==undefined?d[key]:key; }

  const obs=new MutationObserver(()=>{ const lang=localStorage.getItem('lang')||'en'; applyTranslations(lang); });

  document.addEventListener('DOMContentLoaded',()=>{ const lang=localStorage.getItem('lang')||'en'; applyTranslations(lang); obs.observe(document.body,{childList:true,subtree:true}); const btn=document.getElementById('langToggle'); if(btn) btn.addEventListener('click',()=>setLang((localStorage.getItem('lang')==='te')?'en':'te')); });

  window.AppI18N={ setLang, dict: I18N, t };
})();
