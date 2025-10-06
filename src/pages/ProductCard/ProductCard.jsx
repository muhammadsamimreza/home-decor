import React from "react";

const ProductCard = ({product}) => {
    const {name, category, price, image} =product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 hover:scale-105 transform transition">
      <figure>
        <img className="w-full h-44 object-cover"
          src={image}
          alt="productImage"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
            <h1>{category}</h1>
            <h1>$ {price}</h1>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-teal-500 hover:bg-teal-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
