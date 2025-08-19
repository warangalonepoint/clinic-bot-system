document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
      // highlight tab
      document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // change title/content placeholders (you can replace with real content later)
      const tab = btn.getAttribute("data-tab");
      const title = tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ");
      document.getElementById("tab-title").innerText = title;
      document.getElementById("tab-content").innerText = "Content for " + tab;
    });
  });

  // Activate the first visible tab on load
  const firstVisible = [...document.querySelectorAll(".tabs button")]
    .find(b => b.style.display !== "none") || document.querySelector(".tabs button");
  if (firstVisible) firstVisible.click();
});
