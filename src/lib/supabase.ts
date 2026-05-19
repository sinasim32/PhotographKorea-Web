import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase configuration is missing. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in Environment Variables.");
}

// Fallback to empty strings to prevent initialization crash, 
// though requests will still fail with 'Failed to fetch' or auth errors.
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
