import { useCallback, useEffect, useRef, useState } from "react";
import axiosInstance from "../axios";
import ProductList from "../components/ProductList/ProductList";

async function fetchProducts(page, limit) {
  const res = await axiosInstance.get(`/products?limit=${limit}&page=${page}`);
  return res.data.products;
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMoreProducts = useCallback(async () => {
    setLoading(true);
    const newProducts = await fetchProducts(page, 12);
    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => {
        const ids = new Set(prev.map((p) => p._id));
        const newItems = newProducts.filter((p) => !ids.has(p._id));
        return [...prev, ...newItems];
      });
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      loadMoreProducts();
    }
  }, [hasMore, loadMoreProducts]);

  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <ProductList
        items={products}
        lastProductElementRef={lastProductElementRef}
      />
      {!hasMore && (
        <div className="p-3 text-xl text-center border border-body mt-4">
          Вы пролистали все товары...
        </div>
      )}
    </>
  );
}
