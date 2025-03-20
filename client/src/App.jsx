import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./feauters/actions/products.action";
import { getUser } from "./feauters/actions/user.action";

export default function App() {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector((state) => state.userState.isAuthChecked);

  useEffect(() => {
    dispatch(getProducts());
    if (!isAuthChecked) {
      dispatch(getUser());
    }
  }, [dispatch, isAuthChecked]);

  if (!isAuthChecked) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}
