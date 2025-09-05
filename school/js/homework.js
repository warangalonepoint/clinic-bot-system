<script type="module">
// /school/js/homework.js
import { sb, getUser } from "./js/supabase.js";

/** List homework (optionally by date) and render into a container */
export async function loadHomework(targetSel = "#hw-list", dateStr) {
  const q = sb.from("homework").select("*").order("due_date", { ascending: true });
  if (dateStr) q.eq("due_date", dateStr);

  const { data, error } = await q;
  if (error) {
    console.error(error);
    document.querySelector(targetSel).innerHTML = `<div class="note">Error loading homework.</div>`;
    return;
  }
  const html = (data || []).map(h => `
    <div class="card">
      <div class="row">
        <b>${h.subject}</b>
        <span class="muted">${h.due_date || ""}</span>
      </div>
      <div class="muted">${h.class}</div>
      <div>${h.task || ""}</div>
    </div>
  `).join('') || `<div class="note">No homework found.</div>`;
  document.querySelector(targetSel).innerHTML = html;
}

/** Teacher creates homework (RLS will restrict) */
export async function addHomework({ klass, subject, task, due }) {
  const user = await getUser();
  if (!user) { alert("Login first"); return false; }
  const { error } = await sb.from("homework").insert({
    class: klass, subject, task, due_date: due || null, created_by: user.id
  });
  if (error) { alert(error.message); return false; }
  return true;
}

// optional realtime refresh for list pages
sb.channel("hw-ch").on(
  "postgres_changes",
  { event: "*", schema: "public", table: "homework" },
  () => loadHomework()
).subscribe();
</script>
