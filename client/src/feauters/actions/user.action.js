import axios from "axios"
import { userTypes } from "../reducerTypes/user.types"

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: userTypes.FETCH_USER_REQUEST })

    try {
      const user = await axios.get("http://localhost:8080/auth/check", { withCredentials: true })
      console.log(user.data.user);

      dispatch({ type: userTypes.FETCH_USER_SUCCESS, payload: user.data.user })
    } catch (error) {
      dispatch({ type: userTypes.FETCH_USER_FAILURE, payload: error.message })
    }
  }
}