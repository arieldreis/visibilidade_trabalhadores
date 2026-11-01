import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: fileURLToPath(new URL('../../../.env', import.meta.url)) });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANONKEY = process.env.VITE_SUPABASE_ANONKEY;
export const connection = createClient(SUPABASE_URL, SUPABASE_ANONKEY);