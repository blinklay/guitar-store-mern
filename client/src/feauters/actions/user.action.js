import axios from "axios"
import { userTypes } from "../reducerTypes/user.types"

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: userTypes.FETCH_USER_REQUEST })

    try {
      const user = await axios.get("http://localhost:8080/auth/check", { withCredentials: true })

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
      await axios.get("http://localhost:8080/auth/logout", { withCredentials: true })
      dispatch({ type: userTypes.USER_LOGOUT })
    } catch (error) {
      dispatch({ type: userTypes.FETCH_USER_FAILURE, payload: error.message })
    }
  }
}