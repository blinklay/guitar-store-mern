import { useState } from "react";
import axiosInstance from "../axios";

export function useAuth(route) {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function onSubmit(formData) {
    if (!formData || Object.values(formData).some(val => !val)) return;

    try {
      setIsLoading(true)
      setError(null)
      const res = await axiosInstance.post(route, formData)
      setResponse(res.data)
    } catch (error) {
      setError(error.response?.data || "Произошла ошибка");
    } finally {
      setIsLoading(false)
    }
  }

  return { response, isLoading, error, onSubmit }
}