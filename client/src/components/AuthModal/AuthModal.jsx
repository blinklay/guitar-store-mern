import { useState } from "react";

export default function AuthModal({ setIsAuthOpen }) {
  const [mode, setMode] = useState("login"); // "login" или "register"
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      // TODO: отправить запрос на вход
      console.log("Login with", form);
    } else {
      // TODO: отправить запрос на регистрацию
      console.log("Register with", form);
    }
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

        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === "login" ? "Вход" : "Регистрация"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded px-4 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="border rounded px-4 py-2"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-black underline hover:text-gray-800"
          >
            {mode === "login" ? "Зарегистрируйтесь" : "Войти"}
          </button>
        </p>
      </div>
    </div>
  );
}
