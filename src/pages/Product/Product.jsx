import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router";

const Product = () => {
  const { products } = useProducts();
  const [sort, setSort] = useState("none");
  const [sortProduct, setSortProduct] = useState([]);

  const handleSort = (type) => {
    setSort(type);
    let doSorted = [...products];
    if (type === "price") {
      doSorted.sort((a, b) => a.price - b.price);
      setSortProduct(doSorted);
    } else if (type === "names") {
      doSorted.sort((a, b) =>
        a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
      );
      setSortProduct(doSorted);
    }
  };
  const displayUpdated =
    sort === "price" || sort === "names" ? sortProduct : products;
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto mt-20">
        <div className="flex justify-between items-center mb-14">
          <h1 className="text-3xl font-bold">All Products</h1>
          <div>
            <details className="dropdown">
              <summary className="btn m-1">sort by: {sort}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={() => handleSort("price")}>Price</a>
                </li>
                <li>
                  <a onClick={() => handleSort("names")}>name</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {displayUpdated.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex justify-center items-center my-5">
          <Link
            to="/"
            className="btn bg-teal-500 text-white hover:bg-teal-600 hover:scale-102 transform transition"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
