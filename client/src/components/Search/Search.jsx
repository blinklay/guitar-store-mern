import { useNavigate } from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";
import { routes } from "../../routes/routes";

export default function Search() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    navigate(routes.SEARCH + `/${searchValue}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative bg-background flex-1 rounded-md"
    >
      <input
        placeholder="Поиск на guitar store"
        type="text"
        name="search"
        className="bg-transparent p-3 w-full pe-[3em]"
      />
      <button className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <SearchIcon />
      </button>
    </form>
  );
}
