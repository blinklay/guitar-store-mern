import BrandButton from "./BrandButton";

export default function Brand() {
  return (
    <div>
      <p className="text-md">Бренд</p>

      <div className="mt-3 grid grid-cols-4 grid-rows-4 gap-3">
        <BrandButton />
        <BrandButton />
        <BrandButton />
        <BrandButton />
        <BrandButton />
        <BrandButton />
      </div>

      <button className="text-sm text-action">Показать все</button>
    </div>
  );
}
