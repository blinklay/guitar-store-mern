import { useCart } from "../../hooks/useCart";

export default function CartButton({ id }) {
  const [inCart, add, remove] = useCart();

  return (
    <button
      onClick={inCart(id) ? () => remove(id) : () => add(id)}
      className="bg-body text-white text-xl px-4 py-2"
    >
      {inCart(id) ? "Убрать" : "В корзину"}
    </button>
  );
}
