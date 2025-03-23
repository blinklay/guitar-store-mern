import React from "react";

export default function BrandButton({ logoUrl }) {
  return (
    <button
      aria-label="выбрать бренд"
      className="bg-header rounded-md overflow-hidden p-1"
    >
      <img
        className="w-full object-contain h-full"
        src={logoUrl}
        alt="логотип бренда"
      />
    </button>
  );
}
