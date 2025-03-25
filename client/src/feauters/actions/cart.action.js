import { cartTypes } from "../reducerTypes/cart.types"
import axiosInstance from "../../utils/axiosInstance"
import { showAlert } from "./globalAlert.action"
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../../constants"

export const getCart = () => {
  return async (dispatch) => {
    dispatch({ type: cartTypes.FETCH_CART_REQUEST })

    try {
      const cart = await axiosInstance.get("/user/cart")
      dispatch({ type: cartTypes.FETCH_CART_SUCCESS, payload: cart.data.cart })
    } catch (e) {
      dispatch({ type: cartTypes.FETCH_CART_FAILURE, payload: e.message })
    }
  }
}

export const addToCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: cartTypes.ADD_TO_CART_REQUEST })
    try {
      const res = await axiosInstance.post(`user/cart/add/${productId}`, {})
      dispatch({ type: cartTypes.ADD_TO_CART_SUCCESS, payload: res.data.message })
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.SUCCESS))
    } catch (e) {
      dispatch({ type: cartTypes.ADD_TO_CART_FAILURE, payload: e.message })
      dispatch(showAlert(e.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}

export const removeFromCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: cartTypes.REMOVE_FROM_CART_REQUEST })
    try {
      const res = await axiosInstance.delete(`/user/cart/remove/${productId}`, {})
      dispatch({ type: cartTypes.REMOVE_FROM_CART_SUCCESS, payload: res.data.message })
      dispatch(showAlert(res.data.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    } catch (e) {
      dispatch({ type: cartTypes.REMOVE_FROM_CART_FAILURE, payload: e.message })
      dispatch(showAlert(e.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}