import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./feauters/actions/user.action";
import { getCart } from "./feauters/actions/cart.action";

export default function App() {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector((state) => state.userState.isAuthChecked);
  const { adding: addToCartLoader, removing: removeFromCartLoader } =
    useSelector((state) => state.cartState);

  useEffect(() => {
    dispatch(getCart());
    if (!isAuthChecked) {
      dispatch(getUser());
    }
  }, [dispatch, isAuthChecked]);

  useEffect(() => {
    dispatch(getCart());
  }, [addToCartLoader, removeFromCartLoader]);

  if (!isAuthChecked) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}
