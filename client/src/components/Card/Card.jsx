import { textSeparator } from "../../utils/textSeparator";
import HeartIcon from "../Icons/HeartIcon";

const sampleTitle = "IBANEZ GSR200B-WNF";

const sampleText = `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                natus in excepturi similique, aliquid aspernatur placeat
                voluptate sit nihil temporibus quod, architecto ratione
                corrupti! Ab dicta provident suscipit tenetur quas vel quod
                natus libero!
`;

export default function Card() {
  return (
    <div className="flex flex-col justify-between bg-header rounded-lg overflow-hidden">
      <img
        className="object-cover h-[15em] w-full"
        src="https://www.muztorg.ru/files/189/79c/py8/eqo/o0w/0ws/o0c/4ow/s/18979cpy8eqoo0w0wso0c4ows.jpg"
        alt="Изображение товара"
      />

      <div className="p-3">
        <div className="flex items-center gap-3 justify-between">
          <p className="font-medium mt-3 text-xl uppercase">
            {textSeparator(sampleTitle, 20)}
          </p>
          <button>
            <HeartIcon />
          </button>
        </div>

        <div className="mt-3 text-sm">{textSeparator(sampleText, 140)}</div>

        <div className="flex items-center gap-5 mt-3">
          <p className="text-accent font-medium text-xl">11 000 Р</p>
          <button className="bg-accent py-2 px-3 text-white rounded-md font-medium">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
