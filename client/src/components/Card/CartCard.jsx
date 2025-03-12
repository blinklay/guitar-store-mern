export default function CartCard() {
  return (
    <div className="bg-header flex items-center gap-5 px-4 py-2 rounded-md">
      <img
        className="w-[5em] object-contain rounded-md"
        src="https://www.muztorg.ru/files/189/79c/py8/eqo/o0w/0ws/o0c/4ow/s/18979cpy8eqoo0w0wso0c4ows.jpg"
        alt="Изображение продукта"
      />
      <div>
        <p>IBANEZ GSR200B-WNF</p>

        <div className="flex items-center gap-3 text-sm mt-3">
          <p className="font-bold">11 000 Р</p>
          <button className="bg-danger rounded-md px-2 text-white">
            удалить
          </button>
        </div>
      </div>
    </div>
  );
}
