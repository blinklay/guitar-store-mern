export default function AuthButton({ setIsAuthOpen }) {
  return (
    <button
      onClick={() => setIsAuthOpen(true)}
      className="bg-body text-white px-6 py-2"
    >
      Вход
    </button>
  );
}
