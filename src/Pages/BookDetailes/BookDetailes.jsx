import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./BookDetailes.css";
import Recomended from "../../Components/Recomended/Recomended";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import instance from "../../Axios";

function BookDetailes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, getAllCart} = useContext(StoreContext);
  const token = sessionStorage.getItem("token")
 
  const [quantity, setquantity] = useState(1);

  const handleAddToCart = async (productId) => {
    if (!token) {
      toast.error("Please login to add items to cart");
      navigate("/");
      return;
    }
    
    try {
      console.log("Adding to cart:", productId, "quantity:", quantity);
      const res = await instance.post(
        "/cart/addcart",
        {
          quantity,
          productId: productId,
        }
      );
      
      console.log("Cart response:", res.data);
      getAllCart();

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Cart error:", error);
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === "Token expired") {
          sessionStorage.removeItem("token");
          toast.error("Your session has expired. Please log in again.");
          navigate("/");
        } else {
          toast.error("Unauthorized access.");
        }
      } else {
        toast.error(
          error.response ? error.response.data.message : "An error occurred"
        );
      }
    }
  };

  const current = product.find((item) => item._id === id);

  const paymentHandler = async (event, productId) => {
    const selectedCourse = product.find((item) => item._id === productId);
    if (!selectedCourse) return;
    const response = await instance.post(
      "payment/order",
      { amount: selectedCourse.price, productId }
    );

    const order = await response.data.data;

    const option = {
      key: import.meta.env.VITE_SOME_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Anu Codder",
      description: "Test Transaction",
      image: "https://i.ibb.co/5Y3m33n/test.png",
      order_id: order.id,

      handler: async function (response) {
        const body = { ...response, productId };

        const validateResponse = await instance.post(
          "payment/verify",
          body
        );

        const jsonResponse = await validateResponse;

        console.log("jsonResponse", jsonResponse);
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

    const rzp1 = new window.Razorpay(option);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
    });

    rzp1.open();
    event.preventDefault();
  };

  return (
    <div className="section">
      <ToastContainer />
      <div className="container-detaile-books">
        <Row>
          <Col className="col-12 col-md-6 ">
            {current && (
              <img
                src={new URL(`${current.image}`, import.meta.env.VITE_API_URL || "https://online-bookstore-backend-4bsl.onrender.com/").toString()}
                className="product-detaile-img"
                alt=""
              />
            )}
          </Col>
          <Col className="col-12 col-md-6 product-details">
            {current && (
              <>
                <h2>{current.name}</h2>
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
                  <button onClick={() => handleAddToCart(current._id)}>
                    Add to Cart
                  </button>
                  <button
                    onClick={(event) => paymentHandler(event, current._id)}
                  >
                    buy
                  </button>
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
