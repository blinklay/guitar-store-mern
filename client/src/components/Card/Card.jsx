import { textSeparator } from "../../utils/textSeparator";
import HeartIcon from "../Icons/HeartIcon";
import ReactMarkdown from "react-markdown";

export default function Card({ id, title, description, imagePreview, price }) {
  return (
    <div className="flex flex-col justify-between bg-header rounded-lg overflow-hidden">
      <img
        className="object-cover h-[15em] w-full"
        src={imagePreview}
        alt="Изображение товара"
      />

      <div className="p-3">
        <div className="flex items-center gap-3 justify-between">
          <p className="font-medium mt-3 text-xl uppercase">
            {textSeparator(title, 20)}
          </p>
          <button>
            <HeartIcon />
          </button>
        </div>

        <div className="mt-3 text-sm">
          <ReactMarkdown>{textSeparator(description, 140)}</ReactMarkdown>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <p className="text-accent font-medium text-xl">{price} Р</p>
          <button className="bg-accent py-2 px-3 text-white rounded-md font-medium">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
