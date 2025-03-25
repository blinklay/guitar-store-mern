import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showAlert } from "../feauters/actions/globalAlert.action"
import axiosInstance from "../utils/axiosInstance"
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../constants"

export const useAuth = (API_URL, navigatePath) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleForm(data) {
    setIsLoading(true)

    try {
      const res = await axiosInstance.post(API_URL, data)
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.SUCCESS))

      navigatePath ? navigate(navigatePath) : null
    } catch (e) {
      setError(e.response?.data?.message || "Ошибка сервера!");
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading, error, handleForm
  }
}