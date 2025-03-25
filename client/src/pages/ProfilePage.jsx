import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";
import { logout } from "../feauters/actions/user.action";

export default function ProfilePage() {
  const { username } = useSelector((state) => state.userState.user);
  const loading = useSelector((state) => state.userState.loading);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <PageTitle>Профиль</PageTitle>

      <div className="mt-5 flex items-center gap-5 pb-3 border-[var(--color-main-text)] border-b">
        <div className="w-[5em] h-[5em] bg-header rounded-full flex items-center justify-center font-bold uppercase">
          {username[0] + username[1]}
        </div>

        <div className="text-xl font-bold border-b border-accent">
          {username}
        </div>

        <button
          disabled={loading}
          onClick={onClick}
          className="bg-danger-darker justify-end text-white font-medium px-4 py-2 rounded-md border border-danger ml-auto"
        >
          {loading ? "Загрузка" : "Выйти"}
        </button>
      </div>

      <div className="mt-5  flex gap-3 items-center">
        <p className=" text-2xl font-bold">Заказы</p>
        <p>Всего: 121</p>
      </div>

      <div className="grid grid-cols-5 mt-5">{/* <Card />  */}</div>
    </>
  );
}
