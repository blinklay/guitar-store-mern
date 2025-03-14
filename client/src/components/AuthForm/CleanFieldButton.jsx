export default function CleanFieldButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-danger"
    >
      &times;
    </button>
  );
}
