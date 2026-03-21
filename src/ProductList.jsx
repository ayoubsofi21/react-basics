import React from "react";

function ProductList({ products, AddtoCart }) {
  return (
    <div>
      {products.map((product) => {
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>;
      })}
      <button
        onClick={() => AddtoCart(1)}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductList;
