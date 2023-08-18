import React from "react";

const Cart = ({ bookIdforCart }) => {
  console.log(bookIdforCart);
  return (
    <div>
      {bookIdforCart.map((x) => (
        <li>{x}</li>
      ))}
    </div>
  );
};

export default Cart;
