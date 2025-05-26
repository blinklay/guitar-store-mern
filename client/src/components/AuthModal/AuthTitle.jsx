export default function AuthTitle({ mode }) {
  return (
    <h2 className="text-2xl font-bold mb-6 text-center">
      {mode === "login" ? "Вход" : "Регистрация"}
    </h2>
  );
}
