// lang.js — loop-safe i18n (no MutationObserver)
window.AppI18N = (function () {
  const dict = {
    en: {
      "app_title":"Onestop Apartments",
      "Login PIN":"Login PIN",
      "Welcome":"Welcome",
      "4–8 digit PIN":"4–8 digit PIN",
      "Submit":"Submit",
      "Checking…":"Checking…",
      "Invalid PIN.":"Invalid PIN.",
      "Error loading PINs.":"Error loading PINs.",
      "Residents":"Residents","Bookings":"Bookings","Complaints":"Complaints",
      "Notices":"Notices","Visitor Log":"Visitor Log","Pre-Approve a Visitor":"Pre-Approve a Visitor",
      "Flat Number":"Flat Number","Name":"Name","Phone":"Phone","Block":"Block","Save":"Save","Logout":"Logout"
    },
    te: {
      "app_title":"వన్‌స్టాప్ అపార్ట్మెంట్స్",
      "Login PIN":"లాగిన్ పిన్",
      "Welcome":"స్వాగతం",
      "4–8 digit PIN":"4–8 అంకెల పిన్",
      "Submit":"సబ్మిట్",
      "Checking…":"తనిఖీ జరుగుతోంది…",
      "Invalid PIN.":"తప్పు పిన్.",
      "Error loading PINs.":"పిన్‌లను లోడ్ చేయడంలో లోపం.",
      "Residents":"నివాసులు","Bookings":"బుకింగ్స్","Complaints":"ఫిర్యాదులు",
      "Notices":"నోటీసులు","Visitor Log":"విజిటర్ లాగ్","Pre-Approve a Visitor":"విజిటర్ ముందస్తు అనుమతి",
      "Flat Number":"ఫ్లాట్ నంబర్","Name":"పేరు","Phone":"ఫోన్","Block":"బ్లాక్","Save":"సేవ్","Logout":"లాగ్ అవుట్"
    }
  };

  let lang = localStorage.getItem("apt_lang") || "en";
  function t(k){ return dict[lang][k] || k; }

  function apply(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n"); if(!key) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = t(key);
      else el.textContent = t(key);
    });
  }
  function setLang(L){ lang=L; localStorage.setItem("apt_lang",L); apply(); }

  document.addEventListener("DOMContentLoaded", apply, {once:true});
  return { t, setLang, get:()=>lang };
})();
