import React from "react";

function ProductList({ products, AddtoCart }) {
  return (
    <div className="flex justify-center gap-10  ">
      {products.map((product) => (
        <div className="flex flex-col text-center">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <button
            onClick={() => AddtoCart(1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
