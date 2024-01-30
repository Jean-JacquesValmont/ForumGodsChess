import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://frbigrsjfmlppropuszm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyYmlncnNqZm1scHByb3B1c3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MjcyMDcsImV4cCI6MjAyMjEwMzIwN30.2QVziRdYQXatVj3BY36GFapO4k3oNjinGVGXzIvREUs';

export const supabase = createClient(supabaseUrl, supabaseKey);