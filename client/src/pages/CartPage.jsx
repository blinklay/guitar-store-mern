import ActionButton from "../components/ActionButton";
import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";

export default function CartPage() {
  return (
    <div>
      <PageTitle>Корзина</PageTitle>

      <div className="grid grid-cols-3 gap-5 mt-5 items-start">
        <div className="flex flex-col gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="bg-header p-3 rounded-md">
          <table className="w-full border-b">
            <tr>
              <td className="font-bold text-xl">Ваша корзина</td>
            </tr>
            <tr>
              <td>Товары (3)</td>
              <td className="font-bold text-sm">83 989 Р</td>
            </tr>
          </table>

          <ActionButton>Оформить заказ</ActionButton>
        </div>
      </div>
    </div>
  );
}
