const roles = { member: "1111", committee: "5555", admin: "9999" };
let currentRole = "member";
let lang = "en";

const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const pinInput = document.getElementById("pin-input");
const loginBtn = document.getElementById("login-btn");
const roleBtns = document.querySelectorAll(".role-toggle button");
const tabsEl = document.getElementById("tabs");
const contentEl = document.getElementById("content");

const tabs = {
  member: ["Home","Directory","Events","Book Halls","Fees","Loan Request"],
  committee: ["Home","Directory","Events","Book Halls","Fees","Loan Request","Manage"],
  admin: ["Home","Directory","Events","Book Halls","Fees","Loan Request","Manage"]
};

roleBtns.forEach(btn => btn.addEventListener("click", () => {
  roleBtns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentRole = btn.dataset.role;
}));

loginBtn.addEventListener("click", () => {
  if(pinInput.value === roles[currentRole]){
    loginScreen.classList.add("hidden");
    app.classList.remove("hidden");
    renderTabs();
  } else {
    alert("Invalid PIN");
  }
});

function renderTabs(){
  tabsEl.innerHTML = "";
  tabs[currentRole].forEach(t => {
    const b = document.createElement("button");
    b.textContent = t;
    b.onclick = () => setTab(t);
    tabsEl.appendChild(b);
  });
  setTab(tabs[currentRole][0]);
}

function setTab(tab){
  document.querySelectorAll("#tabs button").forEach(b=>b.classList.remove("active"));
  [...tabsEl.children].find(b=>b.textContent===tab).classList.add("active");
  contentEl.innerHTML = `<h2>${tab}</h2><p>Content for ${tab.toLowerCase()}</p>`;
}

// Theme toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Language toggle (demo, pulls from locales/)
document.getElementById("lang-toggle").onclick = () => {
  lang = lang === "en" ? "te" : "en";
  document.getElementById("lang-toggle").textContent = lang === "en" ? "తెలుగు" : "English";
};
