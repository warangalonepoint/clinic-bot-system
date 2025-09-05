// /js/supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ytlatpgbdpdfqtvktmqo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0bGF0cGdiZHBkZnF0dmt0bXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMzgxODcsImV4cCI6MjA3MjYxNDE4N30.q0isHJP_oKuXeOdRKOq23WcZniBvKt1jbTV7OdgHubE";

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function requireLogin() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    location.href = "login.html";
    throw new Error("Not logged in");
  }
  return user;
}
