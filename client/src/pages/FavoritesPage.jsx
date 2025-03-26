import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favoritesState.items);
  console.log(favorites);

  return (
    <>
      <PageTitle>Избранное</PageTitle>

      <div className="grid grid-cols-5 gap-5 mt-5">
        {favorites.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>
    </>
  );
}
