import { useSelector } from "react-redux";
import ActionButton from "../components/ActionButton";
import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";

export default function CartPage() {
  const cart = useSelector((state) => state.cartState.items);
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <PageTitle>Корзина</PageTitle>

      {cart.length > 0 ? (
        <div className="grid grid-cols-3 gap-5 mt-5 items-start">
          <div className="flex flex-col gap-5">
            {cart.map((item) => (
              <Card key={item._id} {...item} />
            ))}
          </div>
          <div className="bg-header p-3 rounded-md">
            <table className="w-full border-b">
              <tbody>
                <tr>
                  <td className="font-bold text-xl">Ваша корзина</td>
                </tr>
                <tr>
                  <td>Товары ({cart.length})</td>
                  <td className="font-bold text-sm">{totalPrice} Р</td>
                </tr>
              </tbody>
            </table>

            <ActionButton>Оформить заказ</ActionButton>
          </div>
        </div>
      ) : (
        <div className="mt-5 text-xl">Корзина пуста...</div>
      )}
    </div>
  );
}
