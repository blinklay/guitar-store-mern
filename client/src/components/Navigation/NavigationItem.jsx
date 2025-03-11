import { NavLink } from "react-router-dom";

export default function NavigationItem({ to, text, children }) {
  return (
    <li className="capitalize text-xs">
      <NavLink
        to={to}
        className="flex flex-col items-center gap-1 justify-between"
      >
        {children}
        <p>{text}</p>
      </NavLink>
    </li>
  );
}
