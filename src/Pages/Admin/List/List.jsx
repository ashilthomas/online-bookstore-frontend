import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./List.css";
import axios from "axios";
import { StoreContext } from "../../../Context/StoreContext";

function List() {
  const [list, setList] = useState([]);
  const {product}=useContext(StoreContext)

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get("http://localhost:3003/products/allbooks");
//       setList(res.data.books);
//     };
//     fetchData();
//   }, []);
  console.log(product);
  return (
    <div className="admin-panel section">
      <Sidebar />

      <div className="add ">
        <div className="list add flex-col">
          <p>All Foods List</p>
          <div className="list-table">
            <div className="list-table-format title">
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
            </div>
{
    product.map((items)=>(
         <div className="list-table-format ">
              <img src={`http://localhost:3003/${items.image}`} alt="" />
              <p>{items.title}</p>
              <p>{items.category}</p>
              <p>{items.price}</p>
              <p className="cursor">X</p>
            </div>
    ))
}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
