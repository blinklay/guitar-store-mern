import axios from "axios"
import { productTypes } from "../reducerTypes/products.types"

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productTypes.FETCH_PRODUCTS_REQUEST })

    try {
      const res = await axios.get("http://localhost:3000/products")
      dispatch({ type: productTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data })
    } catch (error) {
      dispatch({ type: productTypes.FETCH_PRODUCTS_FAILURE, payload: error.message })
    }
  }
}