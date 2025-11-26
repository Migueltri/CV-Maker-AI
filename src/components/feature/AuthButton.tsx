import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

interface User {
  id: string;
  email: string;
  user_metadata: {
    name?: string;
    avatar_url?: string;
    full_name?: string;
  };
}

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Verificar sesión actual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user as User || null);
      setLoading(false);
    });

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user as User || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async () => {
    if (!supabase) {
      alert('Supabase no está configurado. Por favor, conecta Supabase primero.');
      return;
    }

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
      alert('Error al iniciar sesión con Google');
    }
  };

  const handleSignOut = async () => {
    if (!supabase) return;

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setShowMenu(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (loading) {
    return (
      <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse"></div>
    );
  }

  if (!supabase) {
    return (
      <button
        onClick={() => alert('Por favor, conecta Supabase para habilitar la autenticación')}
        className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
      >
        <i className="ri-google-fill text-lg"></i>
        Iniciar sesión con Google
      </button>
    );
  }

  if (!user) {
    return (
      <button
        onClick={handleSignIn}
        className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
      >
        <i className="ri-google-fill text-lg text-[#4285F4]"></i>
        Iniciar sesión con Google
      </button>
    );
  }

  const userName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Usuario';
  const userAvatar = user.user_metadata?.avatar_url;
  const initials = userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-3 px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
      >
        {userAvatar ? (
          <img 
            src={userAvatar} 
            alt={userName}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {initials}
          </div>
        )}
        <span className="font-semibold text-gray-900 hidden sm:block">{userName}</span>
        <i className={`ri-arrow-down-s-line text-gray-600 transition-transform ${showMenu ? 'rotate-180' : ''}`}></i>
      </button>

      {showMenu && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-600 truncate">{user.email}</p>
            </div>
            <button
              onClick={() => {
                setShowMenu(false);
                // Aquí se puede navegar a la página de cuenta
              }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <i className="ri-user-line text-gray-600"></i>
              Mi cuenta
            </button>
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors cursor-pointer"
            >
              <i className="ri-logout-box-line"></i>
              Cerrar sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
}
