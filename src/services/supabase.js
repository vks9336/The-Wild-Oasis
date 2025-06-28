import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ggnhqfrwcovqlprhobzj.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnbmhxZnJ3Y292cWxwcmhvYnpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NDkzNTIsImV4cCI6MjA2NTEyNTM1Mn0.QNUeUcwU6MaZ4ova9npEAOFi60KHvxPyDnpci7xJeF4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
