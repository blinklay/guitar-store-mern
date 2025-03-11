import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export default function ProtectedRouteByAuth({ children }) {
  const isAuth = false;
  return isAuth ? children : <Navigate to={routes.LOGIN} />;
}
