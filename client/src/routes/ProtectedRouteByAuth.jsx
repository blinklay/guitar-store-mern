import { Navigate } from "react-router-dom";
import { routes } from "./routes";
import { useSelector } from "react-redux";

export default function ProtectedRouteByAuth({ children }) {
  const isAuth = !!useSelector((state) => state.userState.user);
  return isAuth ? children : <Navigate to={routes.LOGIN} />;
}
