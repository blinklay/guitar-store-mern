import { useDispatch, useSelector } from "react-redux";

export default function CartButton({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const inCart = cart.includes(id);

  function addToCart() {
    dispatch({ type: "ADD_TO_CART", payload: id });
  }

  function removeFromCart() {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  return (
    <button
      onClick={inCart ? removeFromCart : addToCart}
      className="bg-body text-white text-xl px-4 py-2"
    >
      {inCart ? "Убрать" : "В корзину"}
    </button>
  );
}
