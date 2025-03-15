import { useState } from "react";
import { textSeparator } from "../../utils/textSeparator";
import HeartIcon from "../Icons/HeartIcon";
import ReactMarkdown from "react-markdown";

export default function Card({ id, title, description, imagePreview, price }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFaavorites] = useState([]);

  function handleCart() {
    if (cart.includes(id))
      setCart((prev) => prev.filter((item) => item !== id));
    else setCart((prev) => [...prev, id]);
  }

  function handleFavorites() {
    if (favorites.includes(id))
      setFaavorites((prev) => prev.filter((item) => item !== id));
    else setFaavorites((prev) => [...prev, id]);
  }

  return (
    <div className="flex flex-col justify-between bg-header rounded-lg overflow-hidden">
      <img
        className="object-cover h-[15em] w-full"
        src={imagePreview}
        alt="Изображение товара"
      />

      <div className="p-3">
        <div className="flex items-center gap-3 justify-between">
          <p className="font-medium mt-3 text-xl uppercase">
            {textSeparator(title, 20)}
          </p>
          <button onClick={handleFavorites}>
            <HeartIcon active={favorites.includes(id)} />
          </button>
        </div>

        <div className="mt-3 text-sm">
          <ReactMarkdown>{textSeparator(description, 140)}</ReactMarkdown>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <p className="text-accent font-medium text-xl">{price} Р</p>
          {cart.includes(id) ? (
            <button
              onClick={handleCart}
              className="bg-transparent border border-accent py-2 px-3 text-[var(--color-main-text)] rounded-md font-medium"
            >
              Удалить из корзины
            </button>
          ) : (
            <button
              onClick={handleCart}
              className="border border-transparent bg-accent py-2 px-3 text-white rounded-md font-medium"
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
