export default function LoadingButton({ isLoading, children, ...props }) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`bg-black text-white py-2 rounded transition flex items-center justify-center gap-2 ${
        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
      } ${props.className || ""}`}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span>Загрузка...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
