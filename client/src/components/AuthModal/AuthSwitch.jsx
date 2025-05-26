export default function AuthSwitch({ mode, setMode }) {
  return (
    <p className="text-center mt-4 text-sm text-gray-600">
      {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
      <button
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        className="text-black underline hover:text-gray-800"
      >
        {mode === "login" ? "Зарегистрируйтесь" : "Войти"}
      </button>
    </p>
  );
}
