import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";

export default function FavoritesPage() {
  return (
    <>
      <PageTitle>Избранное</PageTitle>

      <div className="grid grid-cols-5 gap-5 mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
