import React from "react";

export default function Input({ ...inputData }) {
  return (
    <input className="w-full py-2 px-2 bg-header rounded-md" {...inputData} />
  );
}
