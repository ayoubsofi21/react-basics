import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";
function AjouteAuPanier() {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    { id: 1, name: "Produit A", price: 10 },
    { id: 2, name: "Produit B", price: 20 },
    { id: 3, name: "Produit C", price: 15 },
  ];
  const AddtoCart = (count) => {
    setCartItems(cartItems + count);
  };
  return (
    <div>
      <Cart cartItems={cartItems}  />
      <ProductList products={products} AddtoCart={AddtoCart} />
    </div>
  );
}

export default AjouteAuPanier;
