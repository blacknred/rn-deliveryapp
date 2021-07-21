import {useState, useEffect} from 'react';
import API from '../api';

export const BASE_URL = 'http://localhost:3000';

export default function useFetch<T>(
  url: string,
  options?: object,
): {response: T | null; error: Error | null} {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setResponse(null);
        // const validUrl = url.includes('://') ? url : `${BASE_URL}${url}`;
        // const res = await fetch(validUrl, options);
        // const data = await res.json();
        const data = await API[url](options);
        setResponse(data);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, [url, options, setResponse]);

  return {response, error};
}
