import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>header</header>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
