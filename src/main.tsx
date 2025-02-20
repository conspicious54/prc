import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthContext, useAuth } from './hooks/useAuth';
import App from './App.tsx';
import './index.css';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);