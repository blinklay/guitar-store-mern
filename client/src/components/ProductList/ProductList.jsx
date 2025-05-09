import ProductItem from "./ProductItem";

export default function ProductList({ items }) {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductItem {...item} key={item._id} />
      ))}
    </ul>
  );
}
