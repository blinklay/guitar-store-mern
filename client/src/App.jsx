import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./feauters/actions/user.action";
import { getCart } from "./feauters/actions/cart.action";
import { getFavorites } from "./feauters/actions/favorites.action";

export default function App() {
  const dispatch = useDispatch();

  const isAuthChecked = useSelector((state) => state.userState.isAuthChecked);
  const { adding: addToCartLoader, removing: removeFromCartLoader } =
    useSelector((state) => state.cartState);
  const { adding: addToFavoritesLoader, removing: removeFromFavoritesLoader } =
    useSelector((state) => state.favoritesState);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getFavorites());
    if (!isAuthChecked) {
      dispatch(getUser());
    }
  }, [dispatch, isAuthChecked]);

  useEffect(() => {
    dispatch(getCart());
  }, [addToCartLoader, removeFromCartLoader]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [addToFavoritesLoader, removeFromFavoritesLoader]);

  if (!isAuthChecked) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}
