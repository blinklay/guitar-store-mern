import { applyMiddleware, combineReducers, createStore } from "redux"
import { productReducer } from "./feauters/reducers/productReducer"
import { thunk } from "redux-thunk"
import { userReducer } from "./feauters/reducers/userReducer"
import { cartReducer } from "./feauters/reducers/cartReducer"

const reducer = combineReducers({
  productsState: productReducer,
  userState: userReducer,
  cartState: cartReducer,
  // favoritesState: favoritesReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))