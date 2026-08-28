import { createClient } from '@supabase/supabase-js';

{ /* https://cxppzpnxyacwsebiykym.supabase.co/rest/v1/registerUser */  }
const supaBaseUrl = "https://cxppzpnxyacwsebiykym.supabase.co"; { /* Alterar esse link logo após criar às entidaades do projeto*/ }
const supanaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supaBaseUrl, supanaseKey);