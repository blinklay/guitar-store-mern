import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../../constants"
import axiosInstance from "../../utils/axiosInstance"
import { favoritesTypes } from "../reducerTypes/favoritesTypes"
import { showAlert } from "./globalAlert.action"

export const getFavorites = () => {
  return async (dispatch) => {
    dispatch({ type: favoritesTypes.FETCH_FAVORITES_REQUEST })
    try {
      const favorites = await axiosInstance.get("/user/favorites")

      dispatch({ type: favoritesTypes.FETCH_FAVORITES_SUCCESS, payload: favorites.data.favorites })
    } catch (e) {
      dispatch({ type: favoritesTypes.FETCH_FAVORITES_FAILURE, payload: e.message })
    }
  }
}

export const addToFavorites = (productId) => {
  return async (dispatch) => {
    dispatch({ type: favoritesTypes.ADD_TO_FAVORITES_REQUEST })
    try {
      const res = await axiosInstance.post(`/user/favorites/add/${productId}`, {})
      dispatch({ type: favoritesTypes.ADD_TO_FAVORITES_SUCCESS, payload: res.data.message })
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.SUCCESS))
    } catch (e) {
      dispatch({ type: favoritesTypes.ADD_TO_FAVORITES_FAILURE, payload: e.message })
      dispatch(showAlert(e.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}

export const removeFromFavorites = (productId) => {
  return async (dispatch) => {
    dispatch({ type: favoritesTypes.REMOVE_FROM_FAVORITES_REQUEST })
    try {
      const res = await axiosInstance.delete(`/user/favorites/remove/${productId}`, {})
      dispatch({ type: favoritesTypes.REMOVE_FROM_FAVORITES_SUCCESS, payload: res.data.message })
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.SUCCESS))
    } catch (e) {
      dispatch({ type: favoritesTypes.REMOVE_FROM_FAVORITES_FAILURE, payload: e.message })
      dispatch(showAlert(e.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}