import { applyMiddleware, combineReducers, createStore } from "redux"
import { productReducer } from "./feauters/reducers/productReducer"
import { thunk } from "redux-thunk"
import { userReducer } from "./feauters/reducers/userReducer"

const reducer = combineReducers({
  productsState: productReducer,
  userState: userReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))