import { routes } from "../../routes/routes";
import NavigationItem from "./NavigationItem";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";
import UserIcon from "../Icons/UserIcon";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isAuth = !!useSelector((state) => state.userState.user);

  return (
    <nav>
      <ul className="flex items-center gap-3">
        <NavigationItem
          to={isAuth ? routes.PROFILE : routes.LOGIN}
          text={isAuth ? "профиль" : "войти"}
        >
          <UserIcon />
        </NavigationItem>
        <NavigationItem to={routes.FAVORITES} text="избранное">
          <HeartIcon />
        </NavigationItem>
        <NavigationItem to={routes.CART} text="корзина">
          <CartIcon />
        </NavigationItem>
      </ul>
    </nav>
  );
}
