import ActionButton from "../components/ActionButton";
import CartCard from "../components/Card/CartCard";
import PageTitle from "../components/PageTitle";

export default function CartPage() {
  return (
    <div>
      <PageTitle>Корзина</PageTitle>

      <div className="flex gap-10 mt-5 items-start">
        <div className="flex flex-col gap-5">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <div className="bg-header p-5 rounded-md flex flex-col justify-between">
          <p className="text-xl font-bold">Оформление заказа</p>

          <div>
            <p className="font-bold mt-3">Итог: 33 000 Р</p>
            <ActionButton>Перейти к оформлению</ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
