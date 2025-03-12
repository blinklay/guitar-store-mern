import React from "react";

export default function BrandButton() {
  return (
    <button
      aria-label="выбрать бренд"
      className="bg-header rounded-md overflow-hidden p-1"
    >
      <img
        className="w-full object-contain h-full"
        src="https://images.seeklogo.com/logo-png/5/1/fender-logo-png_seeklogo-53633.png"
        alt="логотип бренда"
      />
    </button>
  );
}
