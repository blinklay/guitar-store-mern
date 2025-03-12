import { ROLE } from "../../constants";

const initialState = {
  email: null,
  role: ROLE.GUEST
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER_EMAIL":
      return {
        ...state,
        email: payload
      }
    case "SET_USER_ROLE":
      return {
        ...state,
        role: payload
      }
    default:
      return state;
  }
}