const ininitalState = {
  products: []
}

export const cartReducer = (state = ininitalState, action) => {
  const { type, payload } = action;

  switch (type) {
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