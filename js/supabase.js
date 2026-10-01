import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://xzmglqxcsrzivvkpemyt.supabase.co";

const SUPABASE_KEY = "TON_PUBLISHABLE_KEY";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
