import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <p className="text-lg flex justify-center mb-10">
        Articles dans le panier : {cartItems}
      </p>
    </div>
  );
}

export default Cart;
