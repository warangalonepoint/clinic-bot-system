document.addEventListener("DOMContentLoaded",()=>{
  const langToggle=document.getElementById("lang-toggle");
  let current="en";
  const dict={en:{welcome:"Welcome"}, te:{welcome:"స్వాగతం"}};
  langToggle.addEventListener("click",()=>{
    current=current==="en"?"te":"en";
    langToggle.textContent=current==="en"?"తెలుగు":"English";
    document.querySelector("#home h2").textContent=dict[current].welcome;
  });
});