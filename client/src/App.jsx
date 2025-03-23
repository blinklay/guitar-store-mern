import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./feauters/actions/user.action";

export default function App() {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector((state) => state.userState.isAuthChecked);

  useEffect(() => {
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
