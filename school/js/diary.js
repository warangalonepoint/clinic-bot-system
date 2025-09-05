<script type="module">
// /school/js/diary.js
import { sb, getUser } from "./js/supabase.js";

export async function loadDiary(targetSel = "#diary-list", dateStr) {
  const day = dateStr || new Date().toISOString().slice(0,10);
  const { data, error } = await sb
    .from("class_diary")
    .select("*")
    .eq("entry_date", day)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    document.querySelector(targetSel).innerHTML = `<div class="note">Error loading diary.</div>`;
    return;
  }
  document.querySelector(targetSel).innerHTML = (data || []).map(d => `
    <div class="card">
      <div class="row">
        <b>${d.subject}</b>
        <span class="muted">${d.entry_date}</span>
      </div>
      <div class="muted">${d.class}</div>
      <div>${d.note}</div>
    </div>
  `).join('') || `<div class="note">No entries yet.</div>`;
}

// teachers/coordinators/admin only (RLS blocks others)
export async function addDiary({ klass, subject, note, date }) {
  const user = await getUser();
  if (!user) return alert("Login first");
  const { error } = await sb.from("class_diary").insert({
    class: klass, subject, note, entry_date: date || new Date().toISOString().slice(0,10), created_by: user.id
  });
  if (error) return alert(error.message);
  return true;
}

// realtime refresh
sb.channel("diary-ch").on(
  "postgres_changes",
  { event: "*", schema: "public", table: "class_diary" },
  () => loadDiary()
).subscribe();
</script>
