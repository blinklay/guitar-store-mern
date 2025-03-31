import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

export const useFetch = (url, initialState = null) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await axiosInstance.get(url, { signal });
      console.log(response);

      setData(response.data);
    } catch (err) {
      if (!signal.aborted) {
        setError(err.response?.data?.message || err.message);
      }
    } finally {
      if (!signal.aborted) {
        setIsLoading(false);
      }
    }

    return () => controller.abort();
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
