import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { getProducts } from "./feauters/actions/products.action";
const API_URL = "http://localhost:3000/products";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}
