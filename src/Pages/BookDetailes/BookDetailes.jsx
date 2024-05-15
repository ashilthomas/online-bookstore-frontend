// import React, { useContext } from "react";
// import { Col, Row } from "react-bootstrap";
// import "./BookDetailes.css";
// import Recomended from "../../Components/Recomended/Recomended";
// import { useParams } from "react-router-dom";
// import { StoreContext } from "../../Context/StoreContext";

// function BookDetailes() {
//  const {id}= useParams()
//  console.log(id);

// const {product}=useContext(StoreContext)
// const current = product.filter((item)=> item._id === id)

// console.log(current);
//   return (
//     <div className="section">
//       <div className="container-detaile-books">
//         <Row>
//           <Col className="col-12 col-md-6 ">
//             <img
//               src="https://www.scrolldroll.com/wp-content/uploads/2021/07/harry-potter-and-the-half-blood-prince-best-selling-books-of-all-time-684x1024.jpg" className="product-detaile-img"
//               alt=""
//             />
//           </Col>
//           <Col className="col-12 col-md-6 product-details">
//             <h2>{current.title}</h2>
//             <h3>{current.author}</h3>

//             <p>{current.price}</p>

//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//               tempor est sit amet purus luctus, ac mattis odio fermentum.
//               Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
//               posuere cubilia Curae; Mauris nec ultricies dui.
//             </p>
//             <hr />
//             <div className="product-btn">
//               <button>Add to Cart</button>
//               <button>buy</button>
//             </div>
//             <hr />

//           </Col>
//         </Row>
//       </div>
//       <Recomended/>
//     </div>
//   );
// }

// export default BookDetailes;
// import React, { useContext, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import "./BookDetailes.css";
// import Recomended from "../../Components/Recomended/Recomended";
// import { useParams } from "react-router-dom";
// import { StoreContext } from "../../Context/StoreContext";

// function BookDetailes() {
//   const { id } = useParams();
//   const { product } = useContext(StoreContext);
//   const [cart,setCart]=useState({
//     userId:"",
//     cart:[{
//       productId:"",
//       quantity:""
//     }]
//   })

//   const handileCart = ()=>{

//   }
//   const current = product.find((item) => item._id === id);

//   console.log(current);

//   return (
//     <div className="section">
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
//                   <button onClick={()=>handileCart(userId,productId,quantity)}>Add to Cart</button>
//                   <button>buy</button>
//                 </div>
//                 <hr />
//               </>
//             )}
//           </Col>
//         </Row>
//       </div>
//       <Recomended />
//     </div>
//   );
// }

// export default BookDetailes;

import React, { useContext, useEffect, useState } from "react";
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
  const { product,getAllCart } = useContext(StoreContext);
  const [quantity, setquantity] = useState(1);
  const [productId, setproductId] = useState("6638c46f5211ccbe92b1cd9b");
  const [userId, setUerId] = useState();

  const userDataString = localStorage.getItem("userData")

  

  useEffect(()=>{
 const userData = JSON.parse(userDataString);
 setUerId(userData._id);

  },[])
 
  const handleAddToCart = async (productId) => {
   
    try {
      const res = await axios.post("http://localhost:3003/cart/addcart", {
        quantity,
        productId:productId,
        userId,
      });
      getAllCart()
    
      if (res.data.success) {
        toast(res.data.message);
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);

      toast("already added to product");
    }
  };

  const current = product.find((item) => item._id === id);
 

  return (
    <div className="section">
      <ToastContainer />
      <div className="container-detaile-books">
        <Row>
          <Col className="col-12 col-md-6 ">
            {current && (
              <img
                src={`http://localhost:3003/${current.image}`}
                className="product-detaile-img"
                alt=""
              />
            )}
          </Col>
          <Col className="col-12 col-md-6 product-details">
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
                  {/* Pass appropriate values to handileCart function */}
                  <button onClick={() => handleAddToCart(current._id)}>Add to Cart</button>
                  <button>buy</button>
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
