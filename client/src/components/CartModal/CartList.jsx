export default function CartList({ items }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item._id} className="flex items-center justify-between">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </ul>
  );
}
