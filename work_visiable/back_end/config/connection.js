import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: fileURLToPath(new URL('../../.env', import.meta.url)) });

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const PUBLISHABLE_KEY  = import.meta.env.VITE_SUPABASE_KEY;
export const connection = createClient(SUPABASE_URL, PUBLISHABLE_KEY);
