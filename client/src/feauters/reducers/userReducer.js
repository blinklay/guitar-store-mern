import { userTypes } from "../reducerTypes/user.types";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthChecked: false
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case userTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: payload, isAuthChecked: true };

    case userTypes.FETCH_USER_FAILURE:
      return { ...state, loading: false, error: payload, isAuthChecked: true }

    case userTypes.USER_LOGOUT:
      return { ...initialState }
    default:
      return state;
  }
}