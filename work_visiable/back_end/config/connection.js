import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: fileURLToPath(new URL('../../.env', import.meta.url)) });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const PUBLISHABLE_KEY = process.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !PUBLISHABLE_KEY) {
    throw new Error('Defina VITE_SUPABASE_URL e VITE_SUPABASE_KEY no arquivo .env.');
}

export const connection = createClient(SUPABASE_URL, PUBLISHABLE_KEY);
