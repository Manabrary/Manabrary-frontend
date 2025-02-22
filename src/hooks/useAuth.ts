import { useState, useEffect } from 'react';
import axios from 'axios';

interface UseAuthReturn {
  isAuthenticated: boolean | null;
  isLoading: boolean;
  error: Error | null;
}

export function useAuth(): UseAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        await axios.get('/api/user');
        setIsAuthenticated(true);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error);
          setIsAuthenticated(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, isLoading, error };
} 