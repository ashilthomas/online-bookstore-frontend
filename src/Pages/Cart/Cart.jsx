import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Cart() {
  const { cartAllItems, removeCart,handleChange } = useContext(StoreContext); 
  
  


  return (
    <div className="section">
      <ToastContainer />
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
          {cartAllItems.map((item) => (
            <>
            <div className="cart-items-title cart-items-item" key={item.product._id}>
              <img 
                src={`https://online-bookstore-backend-4bsl.onrender.com/${item.product.image}`}
                alt=""
              />
              <p>{item.title}</p>
              <p>${item.product.price}</p>
              <form>
                <label htmlFor={`qty-${item.product._id}`}>Qty:</label>
                <select
                  name={`qty-${item.product._id}`}
                  id={`qty-${item.product._id}`}
                  value={item.quantity}
                  onChange={(e) => handleChange(e, item.product._id)}
                >
                  {[1, 2, 3, 4, 5, 6].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </form>
              <p>{item.product.price * item.quantity}</p>
              <p
                className="cursor-pointer"
                onClick={() => removeCart(item.product._id)}
              >
                X
              </p>
            </div>  <hr />
            </>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Cart;