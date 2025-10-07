import React, { useEffect, useState } from "react";
import { getToLocalStorage } from "../../Utility/AddToLocalStorage";
import useProducts from "../../Hooks/useProducts";
import WishCard from "../WishCard/WishCard";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
      {
        !wishData.length ? <p className="text-center text-3xl font-semibold">No Data at Wish List</p> : (
          <div className="w-3/4 mx-auto h-80 my-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={wishData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="price"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
      
          </BarChart>
        </ResponsiveContainer>
      </div>
        )
      }
    </div>
  );
};

export default WishList;
