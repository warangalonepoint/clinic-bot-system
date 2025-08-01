<!-- trial.js --><script>
  async function checkTrialStatus() {
    const PLANS_URL = "plans.json";
    try {
      const res = await fetch(PLANS_URL);
      const data = await res.json();
      const overrideLock = data.overrideLock;
      if (overrideLock === true) return; // skip lock if override is on

      const firstUseKey = 'trialStartDate';
      const now = new Date();
      let startDate = localStorage.getItem(firstUseKey);
      if (!startDate) {
        localStorage.setItem(firstUseKey, now.toISOString());
        return;
      }
      const diffDays = Math.floor((now - new Date(startDate)) / (1000 * 60 * 60 * 24));
      if (diffDays >= 3) showTrialExpired();
    } catch (err) {
      console.error("Trial check failed", err);
    }
  }

  function showTrialExpired() {
    const lockScreen = document.createElement("div");
    lockScreen.style.position = "fixed";
    lockScreen.style.top = 0;
    lockScreen.style.left = 0;
    lockScreen.style.width = "100vw";
    lockScreen.style.height = "100vh";
    lockScreen.style.background = "#000000ee";
    lockScreen.style.zIndex = 9999;
    lockScreen.style.color = "#fff";
    lockScreen.style.display = "flex";
    lockScreen.style.flexDirection = "column";
    lockScreen.style.alignItems = "center";
    lockScreen.style.justifyContent = "center";
    lockScreen.innerHTML = `
      <h2 style='color: red;'>🚫 Trial Expired</h2>
      <p>Your 3-day trial has ended. Contact admin to unlock full version.</p>
    `;
    document.body.appendChild(lockScreen);
  }

  checkTrialStatus();
</script>
