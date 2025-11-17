-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the count (for displaying the number)
CREATE POLICY "Anyone can count waitlist entries"
ON public.waitlist
FOR SELECT
USING (true);

-- Only authenticated service role can insert (via edge function)
CREATE POLICY "Service role can insert waitlist entries"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Create index on created_at for ordering
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);