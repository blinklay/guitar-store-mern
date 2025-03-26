import { textSeparator } from "../../utils/textSeparator";
import HeartIcon from "../Icons/HeartIcon";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../feauters/actions/cart.action";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../feauters/actions/favorites.action";

export default function Card({ _id, title, description, imgUrl, price }) {
  const cart = useSelector((state) => state.cartState.items);
  const favorites = useSelector((state) => state.favoritesState.items);
  const { adding, addError, removing, removeError } = useSelector(
    (state) => state.cartState
  );

  const inCart = cart.map((item) => item._id).includes(_id);
  const inFavorites = favorites.map((item) => item._id).includes(_id);

  const dispatch = useDispatch();

  function handleCart() {
    if (inCart) {
      dispatch(removeFromCart(_id));
    } else {
      dispatch(addToCart(_id));
    }
  }

  function handleFavorites() {
    if (inFavorites) {
      dispatch(removeFromFavorites(_id));
    } else {
      dispatch(addToFavorites(_id));
    }
  }

  return (
    <div className="flex flex-col justify-between bg-header rounded-lg overflow-hidden">
      <img
        className="object-cover h-[15em] w-full"
        src={imgUrl}
        alt="Изображение товара"
      />

      <div className="p-3">
        <div className="flex items-center gap-3 justify-between">
          <p className="font-medium mt-3 text-xl uppercase">
            {textSeparator(title, 20)}
          </p>
          <button onClick={handleFavorites}>
            <HeartIcon active={inFavorites} />
          </button>
        </div>

        <div className="mt-3 text-sm">
          <ReactMarkdown>{textSeparator(description, 140)}</ReactMarkdown>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <p className="text-accent font-medium text-xl">{price} Р</p>
          {inCart ? (
            <button
              onClick={handleCart}
              className="bg-transparent border border-accent py-2 px-3 text-[var(--color-main-text)] rounded-md font-medium"
            >
              {removing && "Удаление..."}
              {!removing && " Удалить из корзины"}
            </button>
          ) : (
            <button
              disabled={adding}
              onClick={handleCart}
              className="border border-transparent bg-accent py-2 px-3 text-white rounded-md font-medium"
            >
              {adding && "загрузка..."}
              {!adding && "В корзину"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
