export default function ActionButton({ children }) {
  return (
    <button className="mt-5 rounded-md px-4 py-2 bg-action text-white">
      {children}
    </button>
  );
}
