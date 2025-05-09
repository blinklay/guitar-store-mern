import { Link } from "react-router-dom";

export default function Navigaion() {
  return (
    <nav className="text-xl">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/about">Каталог</Link>
        </li>
        <li>
          <Link to="/about">Как заказать</Link>
        </li>
        <li>
          <Link to="/about">Бренды</Link>
        </li>
      </ul>
    </nav>
  );
}
