/* Onestop Apartments – tiny storage helpers
   Safe to include on any page (no side effects). */

(function (w) {
  if (w.Store) return; // avoid redefining

  const Store = {
    jget(key, fallback = []) {
      try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
      catch { return Array.isArray(fallback) ? [...fallback] : fallback; }
    },
    jset(key, val) {
      localStorage.setItem(key, JSON.stringify(val));
    },
    uid() {
      return Math.random().toString(36).slice(2, 9);
    },
    today() {
      return new Date().toISOString().slice(0, 10);
    },
    ymd(ts) {
      try { return new Date(ts).toISOString().slice(0, 10); } catch { return ""; }
    },
    csv(rows, headers, filename = "export.csv") {
      const out = [headers.join(",")];
      rows.forEach(r =>
        out.push(headers.map(h => `"${String(r[h] ?? "").replace(/"/g, '""')}"`).join(","))
      );
      const blob = new Blob([out.join("\n")], { type: "text/csv" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    }
  };

  w.Store = Store;
})(window);
