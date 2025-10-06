import React from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router";

const Home = () => {
  const { products } = useProducts();

  const FeatureProduct= products.slice(0, 6)

  return (
    <div className="max-w-screen-xl w-full mx-auto mt-20">
      <div className="flex justify-center items-center mb-14">
        <h1 className="text-3xl font-bold">Products Feature</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {FeatureProduct.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to='/products' className="btn bg-teal-500 text-white hover:bg-teal-600 hover:scale-102 transform transition">See all Products</Link>
      </div>
    </div>
  );
};

export default Home;
