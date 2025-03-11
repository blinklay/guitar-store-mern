import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export default function ProtectedRouteByAuth({ children }) {
  const isAuth = true;
  return isAuth ? children : <Navigate to={routes.LOGIN} />;
}
