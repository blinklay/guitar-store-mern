export default function DangerMessage({ children }) {
  return (
    <div className="text-danger bg-danger-darker border border-danger py-2 px-4">
      {children}
    </div>
  );
}
