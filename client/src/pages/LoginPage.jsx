import AuthForm from "../components/AuthForm/AuthForm";
import { AUTH_FORM_TYPES } from "../constants";

export default function LoginPage() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <AuthForm type={AUTH_FORM_TYPES.LOGIN} onSubmit={onSubmit} />
    </>
  );
}
