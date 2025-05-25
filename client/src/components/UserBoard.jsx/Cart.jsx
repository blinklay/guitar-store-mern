import { useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const { openCart } = useCart();
  const cart = useSelector((state) => state.cart.products);

  return (
    <button
      onClick={() => openCart()}
      className="relative flex items-center justify-center p-3"
    >
      <CartIcon />

      <div className="absolute top-0 right-0 bg-body w-[20px] h-[20px] rounded-full text-white text-sm text-center">
        {cart.length > 9 ? "9+" : cart.length}
      </div>
    </button>
  );
}
