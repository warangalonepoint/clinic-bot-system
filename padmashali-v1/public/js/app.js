document.addEventListener("DOMContentLoaded",()=>{
  const loginScreen=document.getElementById("login-screen");
  const app=document.getElementById("app");
  const loginBtn=document.getElementById("login-btn");
  const pinInput=document.getElementById("pin-input");
  let role="member";
  document.querySelectorAll("#login-screen .tab-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{role=btn.dataset.role; document.querySelectorAll("#login-screen .tab-btn").forEach(b=>b.classList.remove("active")); btn.classList.add("active");});
  });
  loginBtn.addEventListener("click",()=>{
    const pin=pinInput.value.trim();
    if((role==="member"&&pin==="1111")||(role==="committee"&&pin==="5555")||(role==="admin"&&pin==="9999")){
      loginScreen.classList.add("hidden"); app.classList.remove("hidden");
    } else { alert("Invalid PIN"); }
  });
});