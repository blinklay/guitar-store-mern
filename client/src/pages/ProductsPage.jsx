import ActionButton from "../components/ActionButton";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import PageTitle from "../components/PageTitle";

export default function ProductsPage() {
  return (
    <div className="container mx-auto">
      <PageTitle>Каталог</PageTitle>

      <div className="flex gap-10 mt-5">
        <Filter />
        <div>
          <div className="grid grid-cols-4 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <ActionButton>Показать еще</ActionButton>
        </div>
      </div>
    </div>
  );
}
