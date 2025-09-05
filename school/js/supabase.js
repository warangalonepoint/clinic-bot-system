<script type="module">
// /school/js/supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// TODO: replace these two:
const SUPABASE_URL = "https://YOURPROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// simple helpers
export async function getUser() {
  return (await sb.auth.getUser()).data.user;
}
export async function requireLogin() {
  const u = await getUser();
  if (!u) location.href = "./login.html";
  return u;
}
</script>
