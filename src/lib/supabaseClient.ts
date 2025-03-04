import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://eefhcdyhsezsmvjjwuiz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZmhjZHloc2V6c212amp3dWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDEyNzAsImV4cCI6MjA1NjY3NzI3MH0.W24-ItddYum4ze2wOQAvfPIe7dByS87tHUJ0WZPnWkY",
);
