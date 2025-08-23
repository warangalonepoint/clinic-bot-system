<script>
  const I18N = {
    en:{app_title:"Padmashali Community",tagline:"unity • seva • growth",
      enter_pin:"Enter your PIN",continue:"Continue",invalid_pin:"Invalid PIN. Try again.",
      members_hint:"Members: 1111 · Committee: 5555 · Admin: 9999",
      home:"Home",logout:"Logout",open:"Open",
      directory:"Directory",dir_sub:"Search members & contacts",
      events:"Events",events_sub_view:"View & RSVP",events_sub_manage:"Create & manage",
      book_halls:"Book Halls",book_halls_sub:"Request slots",
      fees:"Fees",fees_sub_member:"Pay & history",
      finance:"Finance",finance_sub:"Fees & ledger",
      loan_request:"Loan Request",loan_request_sub:"Apply & status",
      loan_desk:"Loan Desk",loan_desk_sub:"Review & decisions",
      approvals:"Approvals"},
    te:{app_title:"పద్మశాలీ కమ్యూనిటీ",tagline:"ఏకత్వం • సేవ • అభివృద్ధి",
      enter_pin:"మీ పిన్ నమోదు చేయండి",continue:"కొనసాగించండి",invalid_pin:"తప్పు పిన్. మళ్లీ ప్రయత్నించండి.",
      members_hint:"సభ్యులు: 1111 · కమిటీ: 5555 · అడ్మిన్: 9999",
      home:"హోమ్",logout:"లాగ్ అవుట్",open:"ఓపెన్",
      directory:"డైరెక్టరీ",dir_sub:"సభ్యులు & కాంటాక్టుల శోధన",
      events:"ఈవెంట్స్",events_sub_view:"చూడండి & RSVP",events_sub_manage:"సృష్టించండి & నిర్వహించండి",
      book_halls:"హాల్ బుకింగ్",book_halls_sub:"స్లాట్స్ అభ్యర్థించండి",
      fees:"ఫీజులు",fees_sub_member:"చెల్లింపులు & హిస్టరీ",
      finance:"ఫైనాన్స్",finance_sub:"ఫీజులు & లెడ్జర్",
      loan_request:"లోన్ రిక్వెస్ట్",loan_request_sub:"అప్లై & స్టేటస్",
      loan_desk:"లోన్ డెస్క్",loan_desk_sub:"రివ్యూ & నిర్ణయాలు",
      approvals:"అప్రూవల్స్"}
  };
  function getLang(){return localStorage.getItem("pc_lang")||"en";}
  function setLang(code){localStorage.setItem("pc_lang",code);applyI18n();}
  function t(k){const L=getLang();return (I18N[L]&&I18N[L][k])||I18N.en[k]||k;}
  function applyI18n(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(/^(INPUT|TEXTAREA)$/.test(el.tagName)) el.placeholder=t(key); else el.textContent=t(key);
    });
    const pill=document.getElementById("lang-pill"); if(pill) pill.textContent=(getLang()==="te"?"తెలుగు":"English");
    if(document.title.match(/Padmashali|పద్మశాలీ/)) document.title=t("app_title");
  }
  document.addEventListener("DOMContentLoaded",applyI18n);
</script>
