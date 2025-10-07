import React, { useEffect, useState } from "react";
import { getToLocalStorage } from "../../Utility/AddToLocalStorage";
import useProducts from "../../Hooks/useProducts";
import WishCard from "../WishCard/WishCard";

const WishList = () => {
  const { products } = useProducts();
  const [wishData, setWishData] = useState([]);
  
  useEffect(() => {
    const dataFromLocalStorage = getToLocalStorage();
    const filteredProducts = products.filter((product) =>
      dataFromLocalStorage.includes(product.id)
    );
    setWishData(filteredProducts);

  }, [products]);
  const handleDeleteWish = (id) => {
    const updatedDelete = wishData.filter((data) => data.id !== id);
    setWishData(updatedDelete);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold mt-10">Wish List</h1>
      </div>
      <div className="max-w-screen-xl w-full mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {wishData.map((product) => (
          <WishCard
            key={product.id}
            product={product}
            handleDeleteWish={handleDeleteWish}
          ></WishCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
