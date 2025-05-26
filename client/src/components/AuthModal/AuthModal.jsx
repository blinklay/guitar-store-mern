import { useState } from "react";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import AuthSwitch from "./AuthSwitch";
import { useAuth } from "../../hooks/useAuth";

export default function AuthModal({ setIsAuthOpen }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "" });

  const {
    response: loginResponse,
    isLoading: loginIsLoading,
    error: loginError,
    onSubmit: onLogin,
  } = useAuth("/auth/login");

  const {
    response: registerResponse,
    isLoading: registerIsLoading,
    error: registerError,
    onSubmit: onRegister,
  } = useAuth("/auth/register");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") onLogin(form);
    else onRegister(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative animate-fade-in">
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <AuthTitle mode={mode} />
        <AuthForm
          response={loginResponse || registerResponse}
          isLoading={loginIsLoading || registerIsLoading}
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          mode={mode}
          error={loginError || registerError}
        />
        <AuthSwitch mode={mode} setMode={setMode} />
      </div>
    </div>
  );
}
