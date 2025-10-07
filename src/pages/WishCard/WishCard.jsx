import React from 'react'
import { Link } from 'react-router'
import { deleteWish } from '../../Utility/AddToLocalStorage';

const WishCard = ({product, handleDeleteWish}) => {
    const { name, category, price, image,id } = product;

    const handleDelete=(id)=>{
        deleteWish(id)
        handleDeleteWish(id)
    }

  return (
   <div className="card bg-base-100 shadow-sm border border-gray-200 hover:scale-105 transform transition">
      <figure>
        <img
          className="w-full h-44 object-cover"
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
        <div className="card-actions justify-between">
          <Link to={`/productdetails/${id}`} className="btn bg-teal-400 hover:bg-teal-500 text-white">
            View Details
          </Link>
          <button onClick={()=>handleDelete(id)} className="btn bg-red-400 hover:bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishCard