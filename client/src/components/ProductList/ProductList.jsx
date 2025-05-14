import ProductItem from "./ProductItem";

export default function ProductList({ items, lastProductElementRef }) {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {items.map((item, index) => (
        <ProductItem {...item} index={index} length={items.length} lastProductElementRef={lastProductElementRef} key={item._id} />
      ))}
    </ul>
  );
}
