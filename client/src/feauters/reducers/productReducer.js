import { productTypes } from "../reducerTypes/products.types";

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case productTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };

    case productTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, items: payload };

    case productTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}