const ininitalState = {
  products: [],
  isCartOpen: false
}

export const cartReducer = (state = ininitalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART":
      return {
        ...state,
        products: payload
      }

    case "SET_CART_STATUS":
      return {
        ...state,
        isCartOpen: payload
      }

    case "ADD_TO_CART":
      return {
        ...state,
        products: [...new Set([...state.products, payload])]
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(item => item !== payload)
      }
    default:
      return state;
  }
}