<!-- include this file with <script src="./lang.js" defer></script> on every page -->
<script>
/* v2.2 – global mini i18n with auto mapping */
(function(w){
  const KEY="apt_lang";
  const dict={
    en:{},
    te:{
      "Onestop Apartments":"ఒనెస్టాప్ అపార్ట్‌మెంట్స్",
      "Login PIN":"లాగిన్ పిన్",
      "Welcome":"స్వాగతం",
      "4–8 digit PIN":"4–8 అంకెల పిన్",
      "Submit":"సబ్మిట్",
      "Residents":"నివాసులు",
      "Bookings":"బుకింగ్స్",
      "Complaints":"ఫిర్యాదులు",
      "Notices":"ప్రకటనలు",
      "Visitor Log":"సందర్శకుల లాగ్",
      "Pre-Approve a Visitor":"సందర్శకుడిని ముందస్తుగా ఆమోదించండి",
      "Flat Number":"ఫ్లాట్ నంబర్",
      "Name":"పేరు",
      "Phone":"ఫోన్",
      "Block":"బ్లాక్",
      "Save":"సేవ్",
      "Pre-Approved Visitors":"ముందస్తు ఆమోదించిన సందర్శకులు",
      "Walk-in Visitor":"వాకిన్ సందర్శకుడు",
      "Couriers / Deliveries":"కొరియర్ / డెలివరీలు",
      "Visitor History (Today)":"నేటి సందర్శకులు",
      "Guard Console":"గార్డ్ కన్సోల్",
      "Committee Console":"కమిటీ కన్సోల్",
      "Admin Console":"అడ్మిన్ కన్సోల్",
      "Post a Notice":"ప్రకటన పోస్ట్ చేయండి",
      "Complaints Board":"ఫిర్యాదుల బోర్డు",
      "Today at a Glance":"ఈరోజు సమీక్ష",
      "Quick Notice":"త్వరిత ప్రకటన",
      "Today Overview":"ఈరోజు విశ్లేషణ",
      "Reset / Cache Tools":"రిసెట్ / క్యాష్ టూల్స్",
      "Back to PIN":"పిన్ పేజీకి వెనుకకు"
    }
  };
// Add into dict.te = { ... } in lang.js
Object.assign(dict.te,{
  "Guards":"గార్డులు",
  "Guard Console":"గార్డ్ కన్సోల్",
  "Pre-Approved Visitors":"ముందస్తు ఆమోదించిన సందర్శకులు",
  "Search name/flat/purpose":"పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధించండి",
  "From residents’ pre-approvals. Verify ID → tap Check-In.":"నివాసుల ముందస్తు ఆమోదాల నుండి. ఐడి చూసి → చెక్-ఇన్ చేయండి.",
  "#":"#", "Flat":"ఫ్లాట్", "Name":"పేరు", "Date":"తేదీ", "Purpose":"ఉద్దేశ్యం",
  "Action":"చర్య", "Check-In":"చెక్-ఇన్",
  "Walk-in Visitor":"వాకిన్ సందర్శకుడు",
  "Flat / Unit":"ఫ్లాట్ / యూనిట్",
  "Visitor name":"సందర్శకుడి పేరు",
  "Phone":"ఫోన్",
  "optional":"ఐచ్ఛికం",
  "guest/maintenance":"అతిథి/మెయింటెనెన్స్",
  "Open Camera":"కెమెరా ఓపెన్ చేయండి",
  "Capture Photo":"ఫోటో తీసుకోండి",
  "Clear":"క్లియర్",
  "Couriers / Deliveries":"కొరియర్లు / డెలివరీలు",
  "From / Courier":"ఎవరి నుండి / కొరియర్",
  "Capture Parcel":"పార్సెల్ క్లిక్ చేయండి",
  "Add Delivery":"డెలివరీ జోడించండి",
  "Export Deliveries CSV":"డెలివరీలు CSV ఎగుమతి",
  "Time":"సమయం","Photo":"ఫోటో","Status":"స్థితి",
  "Dispatch":"డిస్‌పాచ్","At Gate":"గేటు వద్ద","Dispatched":"పంపబడ్డాయి",
  "Visitor History (Today)":"ఈరోజు సందర్శకులు",
  "Search name/flat/purpose":"పేరు/ఫ్లాట్/ఉద్దేశ్యం శోధించండి",
  "Export Visitors CSV":"సందర్శకుల CSV ఎగుమతి",

  "Committee Console":"కమిటీ కన్సోల్",
  "Post a Notice":"ప్రకటన పోస్ట్ చేయండి",
  "Title":"శీర్షిక",
  "Audience":"ప్రేక్షకులు",
  "All Residents":"అన్ని నివాసితులు",
  "Block A":"బ్లాక్ A","Block B":"బ్లాక్ B","Block C":"బ్లాక్ C",
  "Message":"సందేశం",
  "Publish":"ప్రచురించు",
  "Export Notices CSV":"ప్రకటనలు CSV ఎగుమతి",
  "Notice":"ప్రకటన",
  "When":"ఎప్పుడు",
  "Delete":"తొలగించు",
  "Complaints Board":"ఫిర్యాదుల బోర్డు",
  "All":"అన్ని","Open":"ఓపెన్","In Progress":"జరుగుతోంది","Closed":"క్లోజ్",
  "Search flat/category/text":"ఫ్లాట్/వర్గం/పాఠ్యం శోధించండి",
  "Flat":"ఫ్లాట్","Category":"వర్గం","Priority":"ప్రాధాన్యత","Assignee":"పనిచేసే వ్యక్తి","Details":"వివరాలు",
  "Close":"క్లోజ్",
  "Today at a Glance":"ఈరోజు సమీక్ష",
  "Visitors:":"సందర్శకులు:","Deliveries:":"డెలివరీలు:","Open Complaints:":"తెరిచిన ఫిర్యాదులు:","Notices Posted:":"పోస్ట్ చేసిన ప్రకటనలు:",

  "Admin Console":"అడ్మిన్ కన్సోల్",
  "Complaints Operations":"ఫిర్యాదుల నిర్వహణ",
  "Quick Notice":"త్వరిత ప్రకటన",
  "Today Overview":"ఈరోజు అవలోకనం",
  "Export / Backup":"ఎగుమతి / బ్యాకప్",
  "Visitors (Today)":"సందర్శకులు (ఈరోజు)",
  "Deliveries (All)":"డెలివరీలు (అన్ని)",
  "Complaints (All)":"ఫిర్యాదులు (అన్ని)",
  "Notices (All)":"ప్రకటనలు (అన్ని)",

  "Back to PIN":"పిన్ పేజీకి వెనక్కు",
  "Reset / Cache Tools":"రిసెట్ / క్యాష్ టూల్స్"
});
  function t(str,lang){ if(!str) return str; const m=dict[lang||get()]?.[str.trim()]; return m||str; }
  function get(){ return localStorage.getItem(KEY)||"en"; }
  function set(lang){ localStorage.setItem(KEY,lang||"en"); apply(); }

  function apply(){
    const lang=get();

    // data-i18n first (explicit)
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(key) el.textContent=t(key,lang);
    });

    // placeholders / value / innerText fallback (implicit)
    const all=[...document.querySelectorAll("input[placeholder],textarea[placeholder],button,th,h1,h2,h3,label,.tab,.btn")];
    all.forEach(el=>{
      if(el.placeholder){ el.placeholder=t(el.placeholder,lang); }
      if(el.tagName==="BUTTON" && !el.hasAttribute("data-i18n")){
        el.textContent=t(el.textContent.trim(),lang);
      }
      if((/^(H1|H2|H3|TH|LABEL|DIV|SPAN)$/).test(el.tagName) && !el.hasAttribute("data-i18n")){
        const s=el.textContent.trim(); el.textContent=t(s,lang);
      }
    });

    // page title
    if(document.title){ document.title=t(document.title,lang); }
  }

  w.AppI18N={setLang:set, getLang:get, apply};
  document.addEventListener("DOMContentLoaded",apply);
})(window);
</script>
