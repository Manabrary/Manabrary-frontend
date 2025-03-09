import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../lib/axios';

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
    const checkAuth = async () => {
      try {
        await axiosInstance.get('/sanctum/csrf-cookie');
        setIsLoading(true);
        await axiosInstance.get('/api/user');
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