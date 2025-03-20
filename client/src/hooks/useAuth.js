import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = (API_URL, navigatePath) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleForm(data) {
    setIsLoading(true)

    try {
      const res = await axios.post(API_URL, data, {
        withCredentials: true,
      })
      console.log(res);

      navigatePath ? navigate(navigatePath) : null
    } catch (e) {
      setError(e.response?.data?.message || "Ошибка регистрации");
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading, error, handleForm
  }
}