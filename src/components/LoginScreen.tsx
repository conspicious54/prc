import React, { useState } from 'react';
import { Lock, Key, AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function LoginScreen() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const success = login(password.toUpperCase());
    
    if (success) {
      // Force a page refresh to ensure clean state
      window.location.reload();
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex items-center justify-center px-4">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}></div>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img 
              src="https://images.clickfunnels.com/cdn-cgi/image/width=4480,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/JznPnP/image/3440902/file/d7f93c626bc8f9140ada19983080ebf4.png" 
              alt="Challenge Logo" 
              className="h-24 mx-auto mb-6"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to the Challenge
            </h1>
            <p className="text-gray-600">
              Please enter the password to access the content
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter password"
                  autoFocus
                  disabled={isLoading}
                />
              </div>
              {error && (
                <div className="mt-2 flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoading 
                  ? 'opacity-75 cursor-not-allowed'
                  : 'hover:from-blue-700 hover:to-blue-800'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Accessing...
                </div>
              ) : (
                'Access Challenge'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}