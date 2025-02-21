import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isVIP: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const STORAGE_KEY = 'auth_expiry';
const VIP_STORAGE_KEY = 'vip_status';
const VALID_PASSWORD = 'PASSION';
const VIP_PASSWORD = 'PASSIONVIP';
const EXPIRY_DAYS = 5;

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isVIP: false,
  login: () => false,
  logout: () => {},
});

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const expiryDate = localStorage.getItem(STORAGE_KEY);
    if (!expiryDate) return false;
    return new Date(expiryDate) > new Date();
  });

  const [isVIP, setIsVIP] = useState<boolean>(() => {
    if (!isAuthenticated) return false;
    return localStorage.getItem(VIP_STORAGE_KEY) === 'true';
  });

  useEffect(() => {
    const checkAuth = () => {
      const expiryDate = localStorage.getItem(STORAGE_KEY);
      if (!expiryDate) {
        setIsAuthenticated(false);
        setIsVIP(false);
        return;
      }

      const isValid = new Date(expiryDate) > new Date();
      if (!isValid) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(VIP_STORAGE_KEY);
        setIsAuthenticated(false);
        setIsVIP(false);
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 60000);
    return () => clearInterval(interval);
  }, []);

  const login = (password: string) => {
    const isVIPPassword = password === VIP_PASSWORD;
    const isRegularPassword = password === VALID_PASSWORD;

    if (isVIPPassword || isRegularPassword) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);
      localStorage.setItem(STORAGE_KEY, expiryDate.toISOString());
      localStorage.setItem(VIP_STORAGE_KEY, isVIPPassword.toString());
      setIsAuthenticated(true);
      setIsVIP(isVIPPassword);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(VIP_STORAGE_KEY);
    setIsAuthenticated(false);
    setIsVIP(false);
  };

  return { isAuthenticated, isVIP, login, logout };
}