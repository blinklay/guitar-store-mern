import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";

export default function ProductsPage() {
  return (
    <div className="container mx-auto">
      <PageTitle>Каталог</PageTitle>

      <div className="flex gap-10 mt-5">
        <div className="w-[40em] p-3">filters</div>
        <div className="grid grid-cols-4 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
