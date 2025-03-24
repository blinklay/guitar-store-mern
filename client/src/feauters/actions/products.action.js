import { productTypes } from "../reducerTypes/products.types"
import axiosInstance from "../../utils/axiosInstance";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productTypes.FETCH_PRODUCTS_REQUEST })

    try {
      const res = await axiosInstance.get("/product")
      dispatch({ type: productTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data.products })
    } catch (error) {
      dispatch({ type: productTypes.FETCH_PRODUCTS_FAILURE, payload: error.message })
    }
  }
}