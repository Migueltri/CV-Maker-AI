import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export default function GuestBanner() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async () => {
    if (!supabase) return;

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/generator`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  if (loading || user || dismissed || !supabase) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 shadow-lg z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <i className="ri-information-line text-2xl hidden sm:block"></i>
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">Inicia sesión con Google</span> para guardar tus CVs y obtener <span className="font-bold">3 generaciones gratuitas</span> al día
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-google-fill"></i>
            <span className="hidden sm:inline">Iniciar sesión</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
