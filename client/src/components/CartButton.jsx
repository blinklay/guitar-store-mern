import React from "react";

export default function CartButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-transparent bg-accent py-2 px-3 text-white rounded-md font-medium"
    >
      {children}
    </button>
  );
}
