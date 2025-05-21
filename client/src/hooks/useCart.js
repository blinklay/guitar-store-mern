import { useDispatch, useSelector } from "react-redux";

export function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const inCart = (id) => cart.includes(id)

  function add(id) {
    dispatch({ type: "ADD_TO_CART", payload: id });
  }

  function remove(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  function openCart() {
    dispatch({ type: "SET_CART_STATUS", payload: true });
  }

  function closeCart() {
    dispatch({ type: "SET_CART_STATUS", payload: false });
  }

  return { inCart, add, remove, openCart, closeCart }
}