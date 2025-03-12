export default function Price() {
  return (
    <div className="mt-3">
      <p className="text-md">Цена</p>

      <div className="mt-3 flex gap-5 w-full">
        <input
          type="text"
          className="w-full bg-transparent border border-[var(--color-main-text)] rounded-md p-1"
        />
        <input
          type="text"
          className="w-full bg-transparent border border-[var(--color-main-text)] rounded-md p-1"
        />
      </div>
    </div>
  );
}
