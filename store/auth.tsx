import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as apiLogin, saveTokens, loadTokens, clearTokens } from '@/services/auth';

type AuthContextValue = {
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const tokens = await loadTokens();
      setIsAuthenticated(!!tokens.access);
      setLoading(false);
    })();
  }, []);

  const signIn = async (username: string, password: string) => {
    const { access, refresh } = await apiLogin(username, password);
    await saveTokens(access, refresh);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await clearTokens();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthContext no disponible');
  return ctx;
}