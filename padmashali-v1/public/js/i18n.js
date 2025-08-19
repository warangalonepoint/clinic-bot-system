let currentLang='en';
const translations={};
async function loadLang(lang){
  const res=await fetch('locales/'+lang+'.json');
  translations[lang]=await res.json();
  applyLang();
}
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    el.textContent=translations[currentLang][key]||el.textContent;
  });
}
function toggleLang(){
  currentLang=currentLang==='en'?'te':'en';
  loadLang(currentLang);
}
document.addEventListener('DOMContentLoaded',()=>loadLang('en'));