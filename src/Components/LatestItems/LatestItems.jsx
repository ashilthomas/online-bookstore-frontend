import React, { useContext, useEffect, useState } from "react";
import "./LatestItems.css";
import BooksCard from "../BooksCard/BooksCard";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

function LatestItems() {
  const { handleLatestItems,latestItems}=useContext(StoreContext)
  const { product } = useContext(StoreContext);
  const [latestCategories, setLatestCategories] = useState([]);

  useEffect(() => {
    const fetchCategoies = async () => {
      const res = await axios.get("http://localhost:3003/products/categories");
      setLatestCategories(res.data.categories);
    };
    fetchCategoies();
  }, []);

  // const slilcedProjuect = product.slice(0, 6);
  const sliceCategories = latestCategories.slice(0, 5);
 
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
                {sliceCategories.map((category) => (
                  <li
                    key={category._id}
                    onClick={() => handleLatestItems(category)}
                  >
                    {category}
                  </li>
                ))}

<li
                 
                    onClick={() => handleLatestItems("")}
                  >
                   <span>All</span>
                  </li>

               
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          {latestItems.map((items) => (
            <div class="col">
              <BooksCard
                title={items.title}
                author={items.author}
                price={items.price}
                image={items.image}
                id={items._id}
              />
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
