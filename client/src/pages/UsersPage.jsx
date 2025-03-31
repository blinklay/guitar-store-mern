import { useDispatch } from "react-redux";
import PageTitle from "../components/PageTitle";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../feauters/actions/globalAlert.action";
import { GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES } from "../constants";
import SearchUserForm from "../components/SearchUserForm";

export default function UsersPage() {
  const { data, error, isLoading } = useFetch("/admin/users", {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (formData) => {
    const searchUserValue = formData.get("user");
    console.log(searchUserValue);
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) {
    navigate("/");
    dispatch(
      showAlert(error, GLOBAL_ALERT_TIMEROUT, GLOBAL_ALERT_TYPES.DANGER)
    );
  }
  return (
    <div>
      <PageTitle>Список пользователей</PageTitle>
      <SearchUserForm action={handleForm} />
      <table className="w-full border-collapse border border-gray-300 shadow-lg mt-5">
        <thead>
          <tr className="bg-header">
            {["Имя пользователя", "Телефон", "Роль"].map((title) => (
              <th
                key={title}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.phoneNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
