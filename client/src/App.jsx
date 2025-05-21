import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentProductPage from "./pages/CurrentProductPage";

export default function App() {
  const [storageCart, setStorageCart] = useLocalStorage("cart", []);
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storageCart) {
      dispatch({ type: "SET_CART", payload: storageCart });
    }
  }, []);

  useEffect(() => {
    setStorageCart(cart);
  }, [cart]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:currentId" element={<CurrentProductPage />} />
      </Route>
    </Routes>
  );
}
