import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "./routes";
import {
  HomePage,
  UsersPage,
  CartPage,
  FavoritesPage,
  SearchPage,
  CurrentProductPage,
  ProductsPage,
  ProfilePage,
  RegisterPage,
  LoginPage,
} from "../pages";
import ProtectedRouteByRole from "./ProtectedRouteByRole";
import ProtectedRouteByAuth from "./ProtectedRouteByAuth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={routes.USERS}
            element={
              <ProtectedRouteByRole role="admin">
                <UsersPage />
              </ProtectedRouteByRole>
            }
          />
          <Route
            path={routes.CART}
            element={
              <ProtectedRouteByAuth>
                <CartPage />
              </ProtectedRouteByAuth>
            }
          />
          <Route
            path={routes.FAVORITES}
            element={
              <ProtectedRouteByAuth>
                <FavoritesPage />
              </ProtectedRouteByAuth>
            }
          />
          <Route path={routes.SEARCH} element={<SearchPage />} />
          <Route
            path={routes.CURRENT_PRODUCT}
            element={<CurrentProductPage />}
          />
          <Route path={routes.PRODUCTS} element={<ProductsPage />} />
          <Route
            path={routes.PROFILE}
            element={
              <>
                <ProtectedRouteByAuth>
                  <ProfilePage />
                </ProtectedRouteByAuth>
              </>
            }
          />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
