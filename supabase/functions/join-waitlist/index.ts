import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limiting: Get IP address from request
    const rateLimitKey = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown';
    
    // Check rate limit: max 5 attempts per IP in the last minute
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { data: recentAttempts, error: rateLimitError } = await supabaseClient
      .from('rate_limit_log')
      .select('id')
      .eq('ip', rateLimitKey)
      .eq('endpoint', 'join-waitlist')
      .gte('created_at', oneMinuteAgo);

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (recentAttempts && recentAttempts.length >= 5) {
      return new Response(
        JSON.stringify({ error: 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Log this attempt
    await supabaseClient
      .from('rate_limit_log')
      .insert([{ ip: rateLimitKey, endpoint: 'join-waitlist' }]);

    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email ist erforderlich' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Ungültige E-Mail-Adresse' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { data, error } = await supabaseClient
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim() }])
      .select();

    if (error) {
      console.error('Error inserting into waitlist:', error);
      
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return new Response(
          JSON.stringify({ error: 'Diese E-Mail ist bereits auf der Warteliste' }),
          { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Fehler beim Eintragen in die Warteliste' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Successfully added to waitlist');

    return new Response(
      JSON.stringify({ success: true, data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in join-waitlist function:', error);
    return new Response(
      JSON.stringify({ error: 'Interner Serverfehler' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
