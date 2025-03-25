import { Outlet } from "react-router-dom";
import Header from "./Header";
import GlobalAlert from "./GlobalAlert";
import { useSelector } from "react-redux";

export default function Layout() {
  const { show, message, alertType } = useSelector(
    (state) => state.globalAlertState
  );

  return (
    <>
      <GlobalAlert show={show} type={alertType}>
        {message}
      </GlobalAlert>
      <Header />

      <div className="container mx-auto my-10 px-3">
        <Outlet />
      </div>
    </>
  );
}
