import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../feauters/actions/globalAlert.action";
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../constants";
import PageTitle from "../components/PageTitle";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CartButton from "../components/CartButton";
import {
  addToFavorites,
  removeFromFavorites,
} from "../feauters/actions/favorites.action";
import { addToCart, removeFromCart } from "../feauters/actions/cart.action";
import HeartIcon from "../components/Icons/HeartIcon";

export default function CurrentProductPage() {
  const { productId } = useParams();
  const cart = useSelector((state) => state.cartState.items);
  const favorites = useSelector((state) => state.favoritesState.items);
  const inCart = cart.map((item) => item._id).includes(productId);
  const inFavorites = favorites.map((item) => item._id).includes(productId);
  const { isLoading, error, data } = useFetch(
    "/product/current/" + productId,
    {}
  );
  const { adding, addError, removing, removeError } = useSelector(
    (state) => state.cartState
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (error) {
    navigate("/");
    dispatch(
      showAlert(error, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER)
    );
  }

  function handleCart() {
    if (inCart) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(addToCart(productId));
    }
  }

  function handleFavorites() {
    if (inFavorites) {
      dispatch(removeFromFavorites(productId));
    } else {
      dispatch(addToFavorites(productId));
    }
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {!error && (
        <>
          <PageTitle>{data.product?.title}</PageTitle>

          <div className="flex items-center gap-5 mt-5 justify-between">
            <div className="flex items-center border rounded-sm">
              <img
                src={data.product?.brand.logoUrl}
                alt="Логотип бренда"
                className="w-[5em] object-contain"
              />
              <p className="font-medium px-2">{data.product?.brand.name}</p>
            </div>
            <div className="flex items-center gap-5">
              {inCart ? (
                <button
                  onClick={handleCart}
                  className="bg-transparent border border-accent py-2 px-3 text-[var(--color-main-text)] rounded-md font-medium"
                >
                  {removing && "Удаление..."}
                  {!removing && " Удалить из корзины"}
                </button>
              ) : (
                <CartButton disabled={adding} onClick={handleCart}>
                  {adding && "загрузка..."}
                  {!adding && "В корзину"}
                </CartButton>
              )}
              <button onClick={handleFavorites}>
                <HeartIcon active={inFavorites} />
              </button>
            </div>
          </div>

          <div className="flex gap-10 mt-5">
            <div className="w-1/3 rounded-md overflow-hidden bg-header">
              <img
                src={data.product?.imgUrl}
                alt="Изображение товара"
                className="w-full h-auto"
              />
            </div>

            <div className="w-2/3 text-xl">
              <p className="text-2xl font-bold mb-5">Описание</p>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {data.product?.description}
              </ReactMarkdown>
            </div>
          </div>
        </>
      )}
    </>
  );
}
