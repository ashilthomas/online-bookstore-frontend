import React, { useContext } from "react";
import "./LatestItems.css";
import { Col, Row } from "react-bootstrap";
import BooksCard from "../BooksCard/BooksCard";
import { StoreContext } from "../../Context/StoreContext";
import Cards from "../Cards/Cards";

function LatestItems() {
  const { product } = useContext(StoreContext);
  const slilcedProjuect = product.slice(0,6)
  return (
    <div class="latestItems">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2>Latest Published Items</h2>
          </div>
          <div class="col-md-6">
            <div class="latest-categories">
              <ul>
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Horror</a>
                </li>
                <li>
                  <a href="#">Science </a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          {slilcedProjuect.map((items) => (
            <div class="col">
              <BooksCard title={items.title} author={items.author}price={items.price} image={items.image} id={items._id} />
            </div>
          ))}

          <div class="col-12 latest-browse text-center mt-4">
            <button>Browse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestItems;
