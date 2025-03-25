import { productTypes } from "../reducerTypes/products.types"
import axiosInstance from "../../utils/axiosInstance";
import { showAlert } from "./globalAlert.action";
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../../constants";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productTypes.FETCH_PRODUCTS_REQUEST })

    try {
      const res = await axiosInstance.get("/product")
      dispatch({ type: productTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data.products })
    } catch (error) {
      dispatch({ type: productTypes.FETCH_PRODUCTS_FAILURE, payload: error.message })
      dispatch(showAlert(error.message, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER))
    }
  }
}