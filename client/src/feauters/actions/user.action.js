import { userTypes } from "../reducerTypes/user.types"
import { showAlert } from "./globalAlert.action"
import axiosInstance from "../../utils/axiosInstance"
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../../constants"

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: userTypes.FETCH_USER_REQUEST })

    try {
      const user = await axiosInstance.get("/auth/check", { withCredentials: true })

      dispatch({ type: userTypes.FETCH_USER_SUCCESS, payload: user.data.user })
    } catch (error) {
      dispatch({ type: userTypes.FETCH_USER_FAILURE, payload: error.message })
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: userTypes.FETCH_USER_REQUEST })

    try {
      const res = await axiosInstance.get("/auth/logout", { withCredentials: true })
      dispatch({ type: userTypes.USER_LOGOUT })
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.SUCCESS))
    } catch (error) {
      dispatch({ type: userTypes.FETCH_USER_FAILURE, payload: error.message })
      dispatch(showAlert(error.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}