import { createClient } from '@supabase/supabase-js';

const supaBaseUrl = "https://cxppzpnxyacwsebiykym.supabase.co";
const supanaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supaBaseUrl, supanaseKey);