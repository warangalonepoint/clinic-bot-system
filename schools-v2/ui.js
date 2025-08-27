<!-- Include this on every page (after ping-ui.css) -->
<script>
/* PING UI controller: theme toggle, language swap, and tab driver.
   Keep your existing app logic (PINs, tables, exports); this only decorates UI.
*/

/* ---------- THEME ---------- */
(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem("theme")||"light";
  if(saved==="dark") root.classList.add("dark");
  document.addEventListener("click",e=>{
    if(e.target.closest("[data-theme-toggle]")){
      root.classList.toggle("dark");
      localStorage.setItem("theme", root.classList.contains("dark")?"dark":"light");
    }
  });
})();

/* ---------- LANGUAGE (EN/TE) ---------- */
const LANG=(()=>{
  const dict={
    en:{
      app:"Onestop School",
      pin_title:"Login PIN",
      welcome:"Welcome",
      submit:"Submit",
      // sections (schools)
      dashboard:"Dashboard", teachers:"Teachers", students:"Students",
      timetable:"Timetable", attendance:"Attendance", exams:"Exams",
      notices:"Notices", settings:"Settings"
    },
    te:{
      app:"వన్‌స్టాప్ స్కూల్",
      pin_title:"లాగిన్ పిన్",
      welcome:"స్వాగతం",
      submit:"సబ్మిట్",
      dashboard:"డ్యాష్‌బోర్డ్", teachers:"గురువులు", students:"విద్యార్థులు",
      timetable:"టైమ్‌టేబుల్", attendance:"హాజరు", exams:"పరీక్షలు",
      notices:"ప్రకటనలు", settings:"సెటింగ్స్"
    }
  };
  let cur=localStorage.getItem("lang")||"en";
  function apply(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      el.textContent = (dict[cur]&&dict[cur][key]) || key;
    });
    localStorage.setItem("lang",cur);
  }
  function set(l){ cur=l; apply(); }
  function get(){ return cur; }
  window.addEventListener("click",e=>{
    const btn=e.target.closest("[data-lang]");
    if(btn){ set(btn.getAttribute("data-lang")); }
  });
  return {apply,set,get};
})();
document.addEventListener("DOMContentLoaded", LANG.apply);

/* ---------- TABS (make your existing .tab switchers pretty) ---------- */
document.addEventListener("click", (e)=>{
  const t = e.target.closest(".tab");
  if(!t) return;
  const g = t.closest(".tabs");
  if(!g) return;
  g.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  t.classList.add("active");
  const sel = t.dataset.t;
  if(sel){
    const all = document.querySelectorAll("section.card[id^='t_']");
    all.forEach(s=> s.classList.add("hidden"));
    const target = document.querySelector(sel);
    if(target) target.classList.remove("hidden");
  }
});
</script>
