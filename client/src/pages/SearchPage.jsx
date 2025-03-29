import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import PageTitle from "../components/PageTitle";
import ActionButton from "../components/ActionButton";

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { query } = useParams();

  useEffect(() => {
    axiosInstance
      .get("/search?q=" + query)
      .then((res) => {
        setTotalPages(res.data.totalPages);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div>
      {!query && <div>Поисковый запрос пуст!</div>}
      {query && (
        <>
          <PageTitle>
            Результаты по запросу: <i className="mx-2">{query}</i>
          </PageTitle>
          {products.length === 0 && <div>Ничего не найдено!</div>}
          <div className="grid grid-cols-4 gap-5 mt-5">
            {products.map((item) => (
              <Card {...item} key={item._id} />
            ))}
          </div>

          {totalPages > 1 && <ActionButton>показать еще</ActionButton>}
        </>
      )}
    </div>
  );
}
