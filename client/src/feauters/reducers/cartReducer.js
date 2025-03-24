import { cartTypes } from "../reducerTypes/cart.types";

const initialState = {
  items: [],
  loading: false,
  error: null,

  adding: false,
  addError: null,
  addSuccess: null,

  removing: false,
  removeError: null,
  removeSuccess: null,
}

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartTypes.FETCH_CART_REQUEST:
      return {
        ...state, loading: true,
      }

    case cartTypes.FETCH_CART_SUCCESS:
      return {
        ...state, loading: false, items: payload
      }

    case cartTypes.FETCH_CART_FAILURE:
      return {
        ...state, loading: false, error: payload
      }

    case cartTypes.ADD_TO_CART_REQUEST:
      return {
        ...state, adding: true
      }

    case cartTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state, addSuccess: payload, adding: false
      }

    case cartTypes.ADD_TO_CART_FAILURE:
      return {
        ...state, addError: payload, adding: false
      }

    case cartTypes.REMOVE_FROM_CART_REQUEST:
      return {
        ...state, removing: true
      }

    case cartTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state, removeSuccess: payload, removing: false
      }

    case cartTypes.REMOVE_FROM_CART_FAILURE:
      return {
        ...state, addError: payload, removing: false
      }
    default:
      return state;
  }
}