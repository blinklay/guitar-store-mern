import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="container mx-auto my-10 px-3">
        <Outlet />
      </div>
    </>
  );
}
