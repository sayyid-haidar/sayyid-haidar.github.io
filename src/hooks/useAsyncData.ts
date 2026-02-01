import { useState, useEffect, useCallback, useRef } from 'react';

interface UseAsyncDataOptions {
  enabled?: boolean;
  refreshInterval?: number; // in ms, for polling
  cacheBuster?: boolean; // add timestamp to bypass cache
}

interface UseAsyncDataReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  lastUpdated: Date | null;
}

export const useAsyncData = <T>(
  fetcher: () => Promise<T>,
  options: UseAsyncDataOptions = {}
): UseAsyncDataReturn<T> => {
  const { enabled = true, refreshInterval } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(result);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [fetcher, enabled]);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Polling
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      intervalRef.current = setInterval(fetchData, refreshInterval);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [fetchData, refreshInterval]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch, lastUpdated };
};

// Specific hook for JSON files
export const useJsonData = <T>(
  path: string, 
  options: Omit<UseAsyncDataOptions, 'cacheBuster'> & { noCache?: boolean } = {}
): UseAsyncDataReturn<T> => {
  const { noCache = true, ...restOptions } = options;
  
  const fetcher = useCallback(async (): Promise<T> => {
    // Add cache buster in development
    const cacheBuster = noCache ? `?t=${Date.now()}` : '';
    const url = `${path}${cacheBuster}`;
    
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.statusText}`);
    }
    return response.json();
  }, [path, noCache]);

  return useAsyncData<T>(fetcher, restOptions);
};

// Hook untuk file import (static JSON)
export const useStaticData = <T>(importFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    importFn()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, [importFn]);

  return { data, isLoading };
};
