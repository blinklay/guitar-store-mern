import { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import VideoBoard from "../components/VideoBoard";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/products?page=1&limit=4", {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <VideoBoard />

      <div className="mt-6 flex flex-col gap-5 items-start">
        <ProductList items={products} />
        <Link to="/products" className="text-xl  px-6 py-2 border border-body">
          Показать все
        </Link>
      </div>
    </>
  );
}
