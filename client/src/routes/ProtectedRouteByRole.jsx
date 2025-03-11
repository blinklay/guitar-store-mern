import { Navigate } from "react-router-dom";
import { routes } from "./routes";

export default function ProtectedRouteByRole({ children, role }) {
  const userRole = "admin";
  return userRole === role ? children : <Navigate to={routes.HOME} />;
}
