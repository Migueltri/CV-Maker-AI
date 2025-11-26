
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Obtener token de autorización
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Crear cliente Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    // Verificar usuario autenticado
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Obtener datos del CV del body
    const { cvData } = await req.json();
    
    if (!cvData) {
      return new Response(
        JSON.stringify({ error: 'CV data is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Obtener fecha actual (UTC)
    const today = new Date().toISOString().split('T')[0];

    // Buscar registro de uso de hoy
    const { data: usageData, error: usageError } = await supabaseClient
      .from('cv_usage')
      .select('*')
      .eq('user_id', user.id)
      .eq('date', today)
      .single();

    const currentCount = usageData?.count || 0;

    // Verificar si ha alcanzado el límite
    if (currentCount >= 3) {
      return new Response(
        JSON.stringify({ 
          error: 'quota_exhausted',
          message: 'Has alcanzado el límite de 3 CVs gratuitos por día. Los créditos se renuevan mañana a las 00:00 UTC.',
          remaining: 0,
          used: currentCount,
          total: 3
        }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Incrementar contador de uso
    if (usageData) {
      // Actualizar registro existente
      await supabaseClient
        .from('cv_usage')
        .update({ 
          count: currentCount + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', usageData.id);
    } else {
      // Crear nuevo registro
      await supabaseClient
        .from('cv_usage')
        .insert({
          user_id: user.id,
          date: today,
          count: 1
        });
    }

    // Aquí iría la lógica de generación con IA
    // Por ahora, devolvemos los datos mejorados simulados
    const enhancedCV = {
      ...cvData,
      enhanced: true,
      generatedAt: new Date().toISOString()
    };

    return new Response(
      JSON.stringify({
        success: true,
        cv: enhancedCV,
        remaining: 3 - (currentCount + 1),
        used: currentCount + 1,
        total: 3
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error generating CV:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
