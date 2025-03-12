const initialState = {
  productsList: [],
  currentProduct: null
}

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        productsList: payload
      }
    default:
      return state;
  }
}