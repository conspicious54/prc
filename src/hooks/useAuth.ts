import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const STORAGE_KEY = 'auth_expiry';
const VALID_PASSWORD = 'PASSION';
const EXPIRY_DAYS = 5;

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize state with current authentication status
    const expiryDate = localStorage.getItem(STORAGE_KEY);
    if (expiryDate) {
      return new Date(expiryDate) > new Date();
    }
    return false;
  });

  useEffect(() => {
    const checkAuth = () => {
      const expiryDate = localStorage.getItem(STORAGE_KEY);
      if (expiryDate) {
        const isValid = new Date(expiryDate) > new Date();
        if (!isValid) {
          localStorage.removeItem(STORAGE_KEY);
          setIsAuthenticated(false);
        }
      }
    };

    const interval = setInterval(checkAuth, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const login = (password: string) => {
    if (password === VALID_PASSWORD) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);
      localStorage.setItem(STORAGE_KEY, expiryDate.toISOString());
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}