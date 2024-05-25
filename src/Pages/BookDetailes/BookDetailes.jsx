
// import React, { useContext, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import "./BookDetailes.css";
// import Recomended from "../../Components/Recomended/Recomended";
// import { useParams } from "react-router-dom";
// import { StoreContext } from "../../Context/StoreContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function BookDetailes() {
//   const { id } = useParams();
//   const { product,getAllCart } = useContext(StoreContext);
//   const [quantity, setquantity] = useState(1);
  


  


 
//   const handleAddToCart = async (productId) => {
   
//     try {
//       const res = await axios.post("http://localhost:3003/cart/addcart", {
//         quantity,
//         productId:productId,
    
//       },{withCredentials:true});
//       getAllCart()
    
//       if (res.data.success) {
//         toast(res.data.message);
//       } else {
//         toast(res.data.message);
//       }
//     } catch (error) {
//       console.error("Error adding product to cart:", error);

//       toast("already added to product");
//     }
//   };

//   const current = product.find((item) => item._id === id);

//   const paymentHandler = async (event, courseId) => {
//     const selectedCourse = product.find((item) => item._id === courseId);
//     if (!selectedCourse) return;
//     const response = await axios.post(
//       "http://localhost:3003/payment/order",
//       { amount: selectedCourse.price },
//     );

//     const order = await response.data.data;
//     console.log(order);
//     const option = {
//       key: import.meta.env.VITE_SOME_KEY,
//       amount: order.amount,
//       currency: order.currency,
//       name: "Anu Codder",
//       description: "Test Transaction",
//       image: "https://i.ibb.co/5Y3m33n/test.png",
//       order_id: order.id,
//       handler: async function (response) {
//         const body = { ...response };

//         const validateResponse = await axios.post(
//           "http://localhost:3003/payment/verify",
//           body,
//         );

//         const jsonResponse = await validateResponse;

//         console.log("jsonResponse", jsonResponse);
//       },
//       prefill: {
//         name: "Anu Coder",
//         email: "anucoder@example.com",
//         contact: "00000000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp1 = new window.Razorpay(option);

//     rzp1.on("payment.failed", function (response) {
//       alert(response.error.code);
//     });

//     rzp1.open();
//     event.preventDefault();
//   };


//   return (
//     <div className="section">
//       <ToastContainer />
//       <div className="container-detaile-books">
//         <Row>
//           <Col className="col-12 col-md-6 ">
//             {current && (
//               <img
//                 src={`http://localhost:3003/${current.image}`}
//                 className="product-detaile-img"
//                 alt=""
//               />
//             )}
//           </Col>
//           <Col className="col-12 col-md-6 product-details">
//             {current && (
//               <>
//                 <h2>{current.title}</h2>
//                 <h3>{current.author}</h3>
//                 <p>{current.price}</p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   tempor est sit amet purus luctus, ac mattis odio fermentum.
//                   Vestibulum ante ipsum primis in faucibus orci luctus et
//                   ultrices posuere cubilia Curae; Mauris nec ultricies dui.
//                 </p>
//                 <hr />
//                 <div className="product-btn">
                 
//                   <button onClick={() => handleAddToCart(current._id)}>Add to Cart</button>
//                   <button onClick={(event)=>paymentHandler(event,current._id)}>buy</button>
//                 </div>
//                 <hr />
//               </>
//             )}
//           </Col>
//         </Row>     
//       </div>
//  <Recomended />
//     </div>
//   );
// }

// export default BookDetailes;
import React, { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./BookDetailes.css";
import Recomended from "../../Components/Recomended/Recomended";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function BookDetailes() {
  const { id } = useParams();
  const { product, getAllCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async (productId) => {
    try {
      const res = await axios.post(
        "http://localhost:3003/cart/addcart",
        {
          quantity,
          productId: productId,
        },
        { withCredentials: true }
      );
      getAllCart();

      toast(res.data.message);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast("Already added to product");
    }
  };

  const current = product.find((item) => item._id === id);

  const paymentHandler = async (event, courseId) => {
    event.preventDefault();
    const selectedCourse = product.find((item) => item._id === courseId);
    if (!selectedCourse) return;

    try {
      const response = await axios.post(
        "http://localhost:3003/payment/order",
        { amount: selectedCourse.price }
      );

      const order = response.data.data;
      const options = {
        key: import.meta.env.VITE_SOME_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "Anu Codder",
        description: "Test Transaction",
        image: "https://i.ibb.co/5Y3m33n/test.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };
          const validateResponse = await axios.post(
            "http://localhost:3003/api/v1/payment/verify",
            body
          );

          console.log("jsonResponse", validateResponse);
        },
        prefill: {
          name: "Anu Coder",
          email: "anucoder@example.com",
          contact: "00000000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
        });

        rzp1.open();
      } else {
        console.error("Razorpay SDK not loaded");
      }
    } catch (error) {
      console.error("Error in payment handler:", error);
    }
  };

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="section">
      <ToastContainer />
      <div className="container-detaile-books">
        <Row>
          <Col xs={12} md={6}>
            {current && (
              <img
                src={`http://localhost:3003/${current.image}`}
                className="product-detaile-img"
                alt=""
              />
            )}
          </Col>
          <Col xs={12} md={6} className="product-details">
            {current && (
              <>
                <h2>{current.title}</h2>
                <h3>{current.author}</h3>
                <p>{current.price}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempor est sit amet purus luctus, ac mattis odio fermentum.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Mauris nec ultricies dui.
                </p>
                <hr />
                <div className="product-btn">
                  <button onClick={() => handleAddToCart(current._id)}>Add to Cart</button>
                  <button onClick={(event) => paymentHandler(event, current._id)}>Buy</button>
                </div>
                <hr />
              </>
            )}
          </Col>
        </Row>
      </div>
      <Recomended />
    </div>
  );
}

export default BookDetailes;
