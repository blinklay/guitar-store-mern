import axios from "axios";
import AuthForm from "../components/AuthForm/AuthForm";
import { AUTH_FORM_TYPES } from "../constants";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DangerMessage from "../components/AuthForm/DangerMessage";
const REGISTER_API_URL = import.meta.env.VITE_API_URL + "/auth/register";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      setIsLoading(true);
      setError(null);

      try {
        await axios.post(REGISTER_API_URL, {
          phone: data.phoneNumber,
          password: data.password,
        });

        navigate("/login");
      } catch (e) {
        setError(e.response?.data?.message || "Ошибка регистрации");
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );

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
