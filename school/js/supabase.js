// /js/supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://YOURPROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function requireLogin() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    location.href = "login.html";
    throw new Error("Not logged in");
  }
  return user;
}
