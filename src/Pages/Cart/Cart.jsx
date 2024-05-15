import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

function Cart() {
  const {cartAllItems}=useContext(StoreContext)

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
          {
            cartAllItems.map((items)=>(
              <>
               <div className="cart-items-title cart-items-item">
          

                <img  src={`http://localhost:3003/${items.product.image}`} alt="" />
                <p>{items.title}</p>
                <p>${items.product.price}</p>
                <p>{items.quantity}</p>
                <p>{items.product.price}</p>
                <p>X</p>
           
               
          </div>
           <hr />
           </>
          
            )

            )
          }
         
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Cart;
