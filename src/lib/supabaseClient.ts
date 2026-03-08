import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sgavjnkjolcgcgzbnzrf.supabase.co';
const supabaseKey = 'sb_publishable_ggzfRrUmv_9nLEK7bFulSA_PtGkRRP5';

export const supabase = createClient(supabaseUrl, supabaseKey);
