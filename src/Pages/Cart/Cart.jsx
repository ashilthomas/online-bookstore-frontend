// import React, { useContext, useState } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../Context/StoreContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Cart() {
//   const { cartAllItems, removeCart } = useContext(StoreContext);
//   const [quantity, setquantity] = useState('');
//   const [updatedquantity,setUpdatedQuantity]=useState()

  

//   const handleChange = async(event,productId) => { 
//     console.log(productId);
//     setquantity(event.target.value);

//   const res = await axios.post("http://localhost:3003/cart/updatequantity",{quantity,productId},{withCredentials:true})

//   setUpdatedQuantity(res.data.updatedCartItem.cart.quantity*quantity);

   
//   };

//   return (
//     <div className="section" >
//        <ToastContainer />
//       <div className="container">
//         <div className="cart">
//           <div className="cart-items">
//             <div className="cart-items-title">
//               <p>Items</p>
//               <p>Title</p>
//               <p>Price</p>
//               <p>Quantity</p>
//               <p>Total</p>
//               <p>Remove</p>
//             </div>
//             <br />
//             <hr />
//           </div>
//         </div>
//         <div>
//           {cartAllItems.map((items) => (
//             <>
//               <div className="cart-items-title cart-items-item">
//                 <img
//                   src={`http://localhost:3003/${items.product.image}`}
//                   alt=""
//                 />
//                 <p>{items.title}</p>
//                 <p>${items.product.price}</p>
//                 <form >
//                   <label htmlFor="cars">Qty:</label>
//                   <select
//                     name="cars"
//                     id="cars"
//                    defaultValue={items.quantity}
//                     onChange={(e)=>handleChange(e,items.product._id)}
//                   >
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                   </select>
                
                
//                 </form>
//                 {/* <p>{items.quantity}</p> */}
//                 <p>{updatedquantity}</p>
//                 <p
//                   className="cursor-pointer"
//                   onClick={() => removeCart(items.product._id)}
//                 >
//                   X
//                 </p>
//               </div>
//               <hr />
//             </>
//           ))}

//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Cart() {
  const { cartAllItems, removeCart,handleChange } = useContext(StoreContext); // Assuming setCartAllItems is available in the context
  // const [quantity, setQuantity] = useState(1); // Default quantity to 1
  

  // const handleChange = async (event, productId) => {
  //   const newQuantity = event.target.value;
  //   setQuantity(newQuantity);

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3003/cart/updatequantity",
  //       { productId, quantity: newQuantity },
  //       { withCredentials: true }
  //     );

     
      
  //     toast.success("Quantity updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating quantity:", error);
  //     toast.error("Failed to update quantity.");
  //   }
  // };
 

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
            <div className="cart-items-title cart-items-item" key={item.product._id}>
              <img
                src={`http://localhost:3003/${item.product.image}`}
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
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Cart;
