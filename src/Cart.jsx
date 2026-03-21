import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <p className="text-lg">Articles dans le panier : {cartItems}</p>
    </div>
  );
}

export default Cart;
