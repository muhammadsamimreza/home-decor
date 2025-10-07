// import React, { useState } from "react";
// import useProducts from "../../Hooks/useProducts";
// import ProductCard from "../ProductCard/ProductCard";
// import { Link } from "react-router";

// const Product = () => {
//   const { products } = useProducts();
//   const [sort, setSort] = useState("none");
//   const [sortProduct, setSortProduct] = useState([]);
//   const [search, setSearch] = useState("");

//   const trimSearch = search.trim().toLowerCase();

//   const searchProduct = trimSearch
//     ? products.filter((product) =>
//         product.name.trim().toLowerCase().includes(trimSearch)
//       )
//     : products;

//   const handleSort = (type) => {
//     setSort(type);
//     let doSorted = [...products];
//     if (type === "price") {
//       doSorted.sort((a, b) => a.price - b.price);
//       setSortProduct(doSorted);
//     } else if (type === "names") {
//       doSorted.sort((a, b) =>
//         a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
//       );
//       setSortProduct(doSorted);
//     }
//   };
//   const displayUpdated =
//     sort === "price" || sort === "names" ? sortProduct : products;
//   return (
//     <>
//       <div className="max-w-screen-xl w-full mx-auto mt-20">
//         <div className="flex justify-between items-center mb-14">
//           <h1 className="text-3xl font-bold">All Products</h1>
//           <div className="flex items-center gap-10">
//             <div>
//               <label className="input">
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   type="search"
//                   placeholder="Search"
//                 />
//               </label>
//             </div>
//             <details className="dropdown">
//               <summary className="btn m-1">sort by: {sort}</summary>
//               <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                 <li>
//                   <a onClick={() => handleSort("price")}>Price</a>
//                 </li>
//                 <li>
//                   <a onClick={() => handleSort("names")}>name</a>
//                 </li>
//                 <li>
//                   <a onClick={() => handleSort("none")}>none</a>
//                 </li>
//               </ul>
//             </details>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
//           {displayUpdated.map((product) => (
//             <ProductCard key={product.id} product={product}></ProductCard>
//           ))}
//         </div>
//         <div className="flex justify-center items-center my-5">
//           <Link
//             to="/"
//             className="btn bg-teal-500 text-white hover:bg-teal-600 hover:scale-102 transform transition"
//           >
//             Back Home
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;

import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router";

const AllProduct = () => {
  const { products } = useProducts();
  const [sort, setSort] = useState("none");
  const [search, setSearch] = useState("");

  
  const getDisplayProducts = () => {
    let filtered = [...products];

    
    const trimmedSearch = search.trim().toLowerCase();
    if (trimmedSearch !== "") {
      filtered = filtered.filter((product) =>
        product.name.trim().toLowerCase().includes(trimmedSearch)
      );
    }

   
    if (sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "names") {
      filtered.sort((a, b) =>
        a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase())
      );
    }

    return filtered;
  };

  const displayUpdated = getDisplayProducts();

  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto mt-20">
        <div className="flex justify-between items-center mb-14">
          <div className="w-[50%]">
            <h1 className="text-3xl font-bold">All Products 
              <span className="text-sm ml-2">({displayUpdated.length})</span></h1>
          </div>

        
          <div className="flex justify-between items-center gap-10 px-3">
          
            <div>
              <label className="input">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="Search products..."
                />
              </label>
            </div>

          
            <div>
              <details className="dropdown">
                <summary className="btn w-full">Sort by: {sort}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <a onClick={() => setSort("price")}>Price</a>
                  </li>
                  <li>
                    <a onClick={() => setSort("names")}>Name</a>
                  </li>
                  <li>
                    <a onClick={() => setSort("none")}>None</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {displayUpdated.length > 0 ? (
            displayUpdated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No products found.
            </p>
          )}
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

export default AllProduct;
