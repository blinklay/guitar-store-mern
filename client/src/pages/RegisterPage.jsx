import AuthForm from "../components/AuthForm/AuthForm";
import { AUTH_FORM_TYPES } from "../constants";

export default function RegisterPage() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <AuthForm type={AUTH_FORM_TYPES.REGISTER} onSubmit={onSubmit} />
    </>
  );
}
