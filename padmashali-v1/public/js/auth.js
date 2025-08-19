// ===== Role + PINs =====
const PINS = { member: "1111", committee: "5555", admin: "9999" };
let currentRole = "member";

// Make the role tabs toggle the selected role
function setRole(role) {
  currentRole = role;
  document.querySelectorAll(".role-tabs button").forEach(b => b.classList.remove("active"));
  const btn = document.querySelector(`.role-tabs button[onclick="setRole('${role}')"]`);
  if (btn) btn.classList.add("active");
}

// Gate tabs/sections by role
function applyRoleGate(role) {
  // 1) Tabs that are restricted (e.g., Manage)
  document.querySelectorAll(".tabs .restricted").forEach(btn => {
    const show = (role === "committee" || role === "admin");
    btn.style.display = show ? "" : "none";
  });

  // 2) Any role-gated blocks (optional, only if you've added them)
  document.querySelectorAll("[data-roles]").forEach(el => {
    const allowed = (el.getAttribute("data-roles") || "")
      .split(",").map(s => s.trim());
    el.style.display = allowed.includes(role) ? "" : "none";
  });

  // 3) If active tab is hidden now, jump to the first visible tab
  const active = document.querySelector(".tabs button.active");
  if (!active || active.style.display === "none") {
    const firstVisible = [...document.querySelectorAll(".tabs button")]
      .find(b => b.style.display !== "none");
    if (firstVisible) firstVisible.click();
  }

  // Optional: show role badge if you add <span id="roleBadge"></span> somewhere
  const badge = document.getElementById("roleBadge");
  if (badge) badge.textContent =
    role === "admin" ? "Admin" : role === "committee" ? "Committee" : "Member";
}

// Do the login
function login() {
  const pin = document.getElementById("pin").value.trim();

  // Validate PIN by role
  const ok =
    (currentRole === "member" && pin === PINS.member) ||
    (currentRole === "committee" && pin === PINS.committee) ||
    (currentRole === "admin" && pin === PINS.admin);

  if (!ok) {
    alert("Invalid PIN for selected role");
    return;
  }

  // Hide login, show app
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  // Gate UI now that we know the role
  applyRoleGate(currentRole);

  // Default landing per role (optional)
  // Member -> Home, Committee/Admin -> Manage
  const defaultTab = (currentRole === "member") ? "home" : "manage";
  const btn = document.querySelector(`.tabs button[data-tab="${defaultTab}"]`);
  (btn && btn.style.display !== "none" ? btn : document.querySelector('.tabs button')).click();
}

// Expose setRole/login (used by inline onclicks)
window.setRole = setRole;
window.login = login;

// Initialize default selection
document.addEventListener("DOMContentLoaded", () => setRole("member"));
