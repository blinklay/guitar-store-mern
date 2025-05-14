import AuthButton from "./AuthButton";
import Cart from "./Cart";
import { useSelector } from "react-redux";

export default function UserBoard() {
  const cart = useSelector((state) => state.cart.products);

  return (
    <div className="flex items-center gap-4">
      {cart.length > 0 && <Cart />}
      <AuthButton />
    </div>
  );
}
