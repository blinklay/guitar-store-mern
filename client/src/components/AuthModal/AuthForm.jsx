import LoadingButton from "./LoadingButton";

export default function AuthForm({
  form,
  onChange,
  onSubmit,
  mode,
  isLoading,
  error,
  response,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Уведомление об ошибке */}
      {error && (
        <div className="bg-red-100 text-red-800 border border-red-300 px-4 py-2 rounded text-sm">
          {typeof error === "string"
            ? error
            : error.message || "Произошла ошибка, попробуйте снова."}
        </div>
      )}

      {/* Уведомление об успехе */}
      {response?.message && (
        <div className="bg-green-100 text-green-800 border border-green-300 px-4 py-2 rounded text-sm">
          {response.message}
        </div>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border rounded px-4 py-2"
        value={form.email}
        disabled={isLoading}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="border rounded px-4 py-2"
        value={form.password}
        onChange={onChange}
        disabled={isLoading}
        required
      />
      <LoadingButton type="submit" isLoading={isLoading}>
        {mode === "login" ? "Войти" : "Зарегистрироваться"}
      </LoadingButton>
    </form>
  );
}
