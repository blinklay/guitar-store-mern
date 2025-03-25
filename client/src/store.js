import { applyMiddleware, combineReducers, createStore } from "redux"
import { productReducer } from "./feauters/reducers/productReducer"
import { thunk } from "redux-thunk"
import { userReducer } from "./feauters/reducers/userReducer"
import { cartReducer } from "./feauters/reducers/cartReducer"
import { globalAlertReducer } from "./feauters/reducers/globalAlertReducer"

const reducer = combineReducers({
  productsState: productReducer,
  userState: userReducer,
  cartState: cartReducer,
  // favoritesState: favoritesReducer,
  globalAlertState: globalAlertReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))