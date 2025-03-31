import SearchIcon from "./Icons/SearchIcon";

export default function SearchUserForm({ action }) {
  return (
    <form
      action={action}
      className="relative w-1/3 mt-5 rounded-sm overflow-hidden"
    >
      <input
        type="text"
        name="user"
        placeholder="Найти пользователя"
        className="bg-header py-2 px-4 w-full pe-[3em]"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon />
      </button>
    </form>
  );
}
