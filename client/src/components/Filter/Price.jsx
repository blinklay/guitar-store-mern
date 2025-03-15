import { useState } from "react";

export default function Price({ prices }) {
  const [minValue, setMinValue] = useState(prices[0]);
  const [maxValue, setMaxValue] = useState(prices[prices.length - 1]);

  return (
    <div className="mt-3">
      <p className="text-md">Цена</p>

      <div className="mt-3 flex gap-5 w-full">
        <input
          type="number"
          min={minValue}
          onChange={(e) => setMinValue(Number(e.target.value) || minValue)}
          value={minValue}
          max={maxValue}
          className="w-full bg-transparent border border-[var(--color-main-text)] rounded-md p-1"
        />
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value) || maxValue)}
          min={minValue}
          max={maxValue}
          className="w-full bg-transparent border border-[var(--color-main-text)] rounded-md p-1"
        />
      </div>
    </div>
  );
}
