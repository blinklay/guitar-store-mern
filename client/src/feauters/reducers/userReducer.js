import { userTypes } from "../reducerTypes/user.types";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  cartLoading: false,
  cartError: null,

  favoritesLoading: false,
  favoritesError: null,
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case userTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, items: payload, isAuthenticated: true };

    case userTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: payload };

    case userTypes.FETCH_CART_REQUEST:
      return {
        ...state,
        cartLoading: true,
      }

    case userTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cartLoading: false,
        user: {
          ...state.user,
          cart: payload
        }
      }

    case userTypes.FETCH_CART_FAILURE:
      return {
        ...state,
        cartLoading: false,
        cartError: payload
      }

    case userTypes.USER_LOGOUT:
      return { ...initialState }
    default:
      return state;
  }
}