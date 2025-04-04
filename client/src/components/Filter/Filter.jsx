import Brand from "./Brand";
import Price from "./Price";

export default function Filter({brands, prices}) {
  return (
    <div className="w-[40em] p-3">
      <Brand brands={brands}/>
      <Price prices={prices}/>

      <button className="bg-action w-full mt-5 px-4 py-2 rounded-md capitalize font-bold text-white">
        применить
      </button>
    </div>
  );
}
