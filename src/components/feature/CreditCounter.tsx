import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

interface CreditCounterProps {
  onCreditsUpdate?: (remaining: number) => void;
}

export default function CreditCounter({ onCreditsUpdate }: CreditCounterProps) {
  const [credits, setCredits] = useState<{ used: number; total: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const fetchCredits = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        setUser(null);
        setCredits(null);
        setLoading(false);
        return;
      }

      setUser(session.user);

      // Llamar a la función edge para verificar créditos
      const { data, error } = await supabase.functions.invoke('check-credits', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      const remaining = data?.remaining ?? 3;
      const used = 3 - remaining;
      
      setCredits({ used, total: 3 });
      
      if (onCreditsUpdate) {
        onCreditsUpdate(remaining);
      }
    } catch (error) {
      console.error('Error al obtener créditos:', error);
      setCredits({ used: 0, total: 3 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCredits();

    if (!supabase) return;

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchCredits();
    });

    return () => subscription.unsubscribe();
  }, []);

  // Exponer función para refrescar desde el componente padre
  useEffect(() => {
    (window as any).refreshCredits = fetchCredits;
    return () => {
      delete (window as any).refreshCredits;
    };
  }, []);

  if (!supabase || !user) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl animate-pulse">
        <div className="w-20 h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const isLimitReached = credits && credits.used >= credits.total;

  return (
    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all ${
      isLimitReached 
        ? 'bg-red-50 text-red-700 border-2 border-red-200' 
        : 'bg-blue-50 text-blue-700 border-2 border-blue-200'
    }`}>
      <i className={`${isLimitReached ? 'ri-error-warning-line' : 'ri-file-text-line'} text-lg`}></i>
      <span className="text-sm">
        CVs hoy: <span className="font-bold">{credits?.used || 0}/{credits?.total || 3}</span>
      </span>
      {isLimitReached && (
        <div className="ml-2 group relative">
          <i className="ri-information-line text-red-600 cursor-pointer"></i>
          <div className="absolute bottom-full right-0 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl z-50">
            Has usado los 3 CVs gratis de hoy. Los créditos se renuevan mañana a las 00:00 UTC.
            <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}
