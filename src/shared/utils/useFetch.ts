import { useState, useCallback } from 'react';

type UseFetchResponse<T, R = T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
    fetchData: (options?: RequestInit) => void;
};

export const useFetch = <T>(url: string, baseOptions?: RequestInit, settings: {
    transform(data: T): R;
}): UseFetchResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (options?: RequestInit) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                ...baseOptions,
                ...options,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = (await response.json()) as T;
            setData(result);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, fetchData };
};
