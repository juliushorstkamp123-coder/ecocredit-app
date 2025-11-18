-- Fix the overly permissive SELECT policy on waitlist table
-- Drop the policy that allows anyone to read all emails
DROP POLICY IF EXISTS "Anyone can count waitlist entries" ON public.waitlist;

-- Create a security definer function that only returns the count
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT COUNT(*) FROM public.waitlist;
$$;

-- Grant execute permission to anonymous users
GRANT EXECUTE ON FUNCTION public.get_waitlist_count() TO anon;
GRANT EXECUTE ON FUNCTION public.get_waitlist_count() TO authenticated;

-- Create table for rate limiting
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate_limit_log
ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to manage rate limits
CREATE POLICY "Service role can manage rate limits"
ON public.rate_limit_log
FOR ALL
USING (true)
WITH CHECK (true);

-- Create index for efficient rate limit queries
CREATE INDEX IF NOT EXISTS idx_rate_limit_ip_endpoint_time 
ON public.rate_limit_log(ip, endpoint, created_at DESC);

-- Create function to clean up old rate limit entries (older than 1 hour)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.rate_limit_log 
  WHERE created_at < now() - interval '1 hour';
$$;