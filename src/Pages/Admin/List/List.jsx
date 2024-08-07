import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./List.css";

import { StoreContext } from "../../../Context/StoreContext";

function List() {
  const { product } = useContext(StoreContext);

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
            {product.map((items) => (
              <div className="list-table-format ">
                <img src={`https://online-bookstore-backend-4bsl.onrender.com/${items.image}`} alt="" />
                <p>{items.title}</p>
                <p>{items.category}</p>
                <p>{items.price}</p>
                <p className="cursor">X</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
