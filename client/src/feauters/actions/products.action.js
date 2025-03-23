import axios from "axios"
import { productTypes } from "../reducerTypes/products.types"
const API_URL = import.meta.env.VITE_API_URL + "/product";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productTypes.FETCH_PRODUCTS_REQUEST })

    try {
      const res = await axios.get(API_URL)
      dispatch({ type: productTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data.products })
    } catch (error) {
      dispatch({ type: productTypes.FETCH_PRODUCTS_FAILURE, payload: error.message })
    }
  }
}