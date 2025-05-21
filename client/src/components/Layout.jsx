import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import CartModal from "./CartModal/CartModal";

export default function Layout() {
  const { isCartOpen } = useSelector((state) => state.cart);

  return (
    <>
      {isCartOpen && <CartModal />}
      <div className="max-w-[1420px] mx-auto text-body">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
