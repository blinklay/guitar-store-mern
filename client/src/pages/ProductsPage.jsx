import { useSelector } from "react-redux";
import ActionButton from "../components/ActionButton";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import PageTitle from "../components/PageTitle";

export default function ProductsPage() {
  const { items, loading, error } = useSelector((state) => state.productsState);
  const brands = items
    .map((item) => item.brand)
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );
  const prices = items.map((item) => item.price);

  return (
    <div className="container mx-auto">
      <PageTitle>Каталог</PageTitle>

      {loading && <div>Загрузка...</div>}
      {!loading && (
        <div className="flex gap-10 mt-5">
          <Filter brands={brands} prices={prices}/>
          <div>
            <div className="grid grid-cols-4 gap-5">
              {items.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>

            <ActionButton>Показать еще</ActionButton>
          </div>
        </div>
      )}
    </div>
  );
}
