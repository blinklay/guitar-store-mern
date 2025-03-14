import BrandButton from "./BrandButton";

export default function Brand({ brands }) {
  return (
    <div>
      <p className="text-md">Бренд</p>

      <div className="mt-3 grid grid-cols-4 grid-rows-4 gap-3">
        {brands.map((item) => (
          <BrandButton key={item.name} {...item} />
        ))}
      </div>

      <button className="text-sm text-action">Показать все</button>
    </div>
  );
}
