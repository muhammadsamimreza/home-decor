import React from "react";
import useProducts from "../../Hooks/useProducts";
import { useParams } from "react-router";
import  {addToLocalStorage, getToLocalStorage } from "../../Utility/AddToLocalStorage";
import { ToastContainer } from "react-toastify";

const ProductDetails = () => {
  const { products } = useProducts();
  const paramId = useParams();
  const getId = Number(paramId.id);

  const product = products.find((product) => product.id === getId);
  if (!product) {
    return <div>Product not found or loading...</div>;
  }
  const { name, category, price, image, material, description,id } = product;

  const handleWishList=(id)=>{
        addToLocalStorage(id)
        getToLocalStorage()

  }


  return (
    <div className="max-w-screen-xl w-full mx-auto mt-20 px-10">
      <div className="flex justify-between items-center bg-base-200 shadow-sm border border-gray-200 px-10 py-5">
        <div>
          <figure>
            <img
              className="w-full h-44 object-cover rounded-2xl"
              src={image}
              alt="productImage"
            />
          </figure>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold">{name}</h2>
          <h1 className="text-xl font-semibold">{category}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="space-y-3">
          <h1 className="font-semibold">$ {price}</h1>
          <h1 className="font-semibold">{material}</h1>
        </div>
        <div className="card-actions justify-end">
          <button onClick={()=>handleWishList(id)} className="btn bg-teal-500 hover:bg-teal-600 text-white">
            Wish List
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
