import AuthForm from "../components/AuthForm/AuthForm";
import { AUTH_FORM_TYPES } from "../constants";
import DangerMessage from "../components/AuthForm/DangerMessage";
import { useAuth } from "../hooks/useAuth";
const REGISTER_API_URL = import.meta.env.VITE_API_URL + "/auth/register";

export default function RegisterPage() {
  const { isLoading, error, handleForm } = useAuth(REGISTER_API_URL, "/login");

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
        type={AUTH_FORM_TYPES.REGISTER}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
}
