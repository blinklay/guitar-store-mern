import { Link } from "react-router-dom";
import CartButton from "./CartButton";

export default function ProductItem({ title, price }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <img
        className="w-full h-[20em] object-contain"
        src="https://www.muztorg.ru/files/71f/4fg/ajf/fgg/gkw/48w/sco/wk4/g/71f4fgajffgggkw48wscowk4g.jpg"
        alt="Изображение товара"
      />
      <Link to="/product/:currentId" className="text-xl fond-bold">
        {title}
      </Link>
      <span className="opacity-[0.5]">Электрогитара</span>
      <p className="text-2xl font-medium">{price}</p>
      <CartButton />
    </li>
  );
}
