import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import DangerMessage from "../components/AuthForm/DangerMessage";
import { AUTH_FORM_TYPES } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { getUser } from "../feauters/actions/user.action";
const LOGIN_API_URL = "/auth/login";

export default function LoginPage() {
  const { isLoading, error, handleForm } = useAuth(LOGIN_API_URL, "/");
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await handleForm({
      phoneNumber: data.phone,
      password: data.password,
    });
    dispatch(getUser());
  };

  return (
    <>
      {error && <DangerMessage>{error}</DangerMessage>}
      <AuthForm
        type={AUTH_FORM_TYPES.LOGIN}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}
