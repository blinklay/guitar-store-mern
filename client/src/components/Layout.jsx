import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="max-w-[1420px] mx-auto text-body">
      <Header />
      <Outlet />
    </div>
  );
}
