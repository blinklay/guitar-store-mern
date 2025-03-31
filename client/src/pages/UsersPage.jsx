import SearchIcon from "../components/Icons/SearchIcon";
import PageTitle from "../components/PageTitle";

export default function UsersPage() {
  const handleForm = (formData) => {
    const searchUserValue = formData.get("user");
    console.log(searchUserValue);
  };

  return (
    <div>
      <PageTitle>Список пользователей</PageTitle>

      <form
        action={handleForm}
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

      <table className="w-full border-collapse border border-gray-300 shadow-lg mt-5">
        <thead>
          <tr className="bg-header">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Имя пользователя
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Телефон
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Роль</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">username</td>
            <td className="border border-gray-300 px-4 py-2">
              +7 951 036 17 84
            </td>
            <td className="border border-gray-300 px-4 py-2">admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
