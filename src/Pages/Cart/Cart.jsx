import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="section">
      <div className="container">
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
          </div>
        </div>
        <div>
          <div className="cart-items-title cart-items-item">
            <img src="" alt="" />
            <p>name</p>
            <p>$100</p>
            <p>quantity</p>
            <p>total</p>
            <p>X</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Cart;
