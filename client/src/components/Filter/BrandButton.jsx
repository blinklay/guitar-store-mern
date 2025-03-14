import React from "react";

export default function BrandButton({ logo }) {
  return (
    <button
      aria-label="выбрать бренд"
      className="bg-header rounded-md overflow-hidden p-1"
    >
      <img
        className="w-full object-contain h-full"
        src={logo}
        alt="логотип бренда"
      />
    </button>
  );
}
