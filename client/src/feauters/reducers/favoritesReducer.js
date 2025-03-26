import { favoritesTypes } from "../reducerTypes/favoritesTypes";

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

export const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case favoritesTypes.FETCH_FAVORITES_REQUEST:
      return {
        ...state, loading: true,
      }

    case favoritesTypes.FETCH_FAVORITES_SUCCESS:
      return {
        ...state, loading: false, items: payload
      }

    case favoritesTypes.FETCH_FAVORITES_FAILURE:
      return {
        ...state, loading: false, error: payload
      }

    case favoritesTypes.ADD_TO_FAVORITES_REQUEST:
      return {
        ...state, adding: true
      }

    case favoritesTypes.ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state, addSuccess: payload, adding: false
      }

    case favoritesTypes.ADD_TO_FAVORITES_FAILURE:
      return {
        ...state, addError: payload, adding: false
      }

    case favoritesTypes.REMOVE_FROM_FAVORITES_REQUEST:
      return {
        ...state, removing: true
      }

    case favoritesTypes.REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state, removeSuccess: payload, removing: false
      }

    case favoritesTypes.REMOVE_FROM_FAVORITES_FAILURE:
      return {
        ...state, addError: payload, removing: false
      }

    default:
      return state
  }
}