import AuthForm from "../components/AuthForm/AuthForm";
import DangerMessage from "../components/AuthForm/DangerMessage";
import { AUTH_FORM_TYPES } from "../constants";
import { useAuth } from "../hooks/useAuth";
const LOGIN_API_URL = import.meta.env.VITE_API_URL + "/auth/login";

export default function LoginPage() {
  const { isLoading, error, handleForm } = useAuth(LOGIN_API_URL, "/");

  const onSubmit = (data) => {
    handleForm({
      phoneNumber: data.phone,
      password: data.password,
    });
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
