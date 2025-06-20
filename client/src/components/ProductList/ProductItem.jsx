import { Link } from "react-router-dom";
import CartButton from "./CartButton";
const apiUrl = import.meta.env.VITE_API_URL;

export default function ProductItem({
  _id,
  title,
  price,
  lastProductElementRef,
  index,
  length,
  imgUrl,
}) {
  return (
    <li
      className="flex flex-col items-center gap-2 justify-between"
      ref={length === index + 1 ? lastProductElementRef : null}
    >
      <img
        className="w-full h-[20em] object-contain"
        src={`${apiUrl}${imgUrl}`}
        alt="Изображение товара"
      />
      <Link to="/product/:currentId" className="text-xl fond-bold text-center">
        {title}
      </Link>
      <span className="text-[#00000080]">Электрогитара</span>
      <p className="text-2xl font-medium">{price}</p>
      <CartButton id={_id} />
    </li>
  );
}
