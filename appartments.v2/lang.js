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
