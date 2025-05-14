import { createStore, combineReducers } from "redux"
import { cartReducer } from "./redux/reducers/cartReducer"

const reducer = combineReducers({
  cart: cartReducer
})

export const store = createStore(reducer)