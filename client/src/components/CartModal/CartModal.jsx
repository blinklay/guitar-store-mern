import { useCart } from "../../hooks/useCart";

export default function CartModal() {
  const { closeCart } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/50 backdrop-blur-sm">
      <div className="w-full sm:w-[480px] bg-white h-full shadow-lg relative animate-slide-in px-6 py-8 overflow-y-auto">
        <button
          onClick={() => closeCart()}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Ваша корзина</h2>

        <ul className="flex flex-col gap-4">{/* Мап по корзине */}</ul>

        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-black text-white py-3 rounded-md text-lg hover:bg-gray-800 transition">
            Оформить заказ
          </button>
          <button
            onClick={() => closeCart()}
            className="text-sm text-gray-500 hover:text-gray-800 transition"
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
}
