import React, { useContext, useEffect, useState } from "react";
import "./LatestItems.css";
import BooksCard from "../BooksCard/BooksCard";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import instance from "../../Axios";

function LatestItems() {
  const { handleLatestItems, latestItems } = useContext(StoreContext);
  const [visibleItems, setVisibleItems] = useState(6);
  const [latestCategories, setLatestCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await instance.get("products/categories");
      setLatestCategories(res.data.categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    handleLatestItems(currentCategory);
  }, [currentCategory,]);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); 
  };

  const sliceCategories = latestCategories.slice(0, 5);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    handleLatestItems(category);
  };

  return (
    <div className="latestItems">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Latest Published Items</h2>
          </div>
          <div className="col-md-6">
            <div className="latest-categories">
              <ul>
                <li className={currentCategory === "" ? "active" : ""}
                    onClick={() => handleCategoryClick("")}>
                  <span>All</span>
                </li>
                {sliceCategories.map((category) => (
                  <li className={category === currentCategory ? "active" : ""}
                      key={category}
                      onClick={() => handleCategoryClick(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {latestItems &&
            latestItems.slice(0, visibleItems).map((items) => (
              <div className="col-md-2 col-6" key={items._id}> {/* Added key here */}
                <BooksCard
                  name={items.name}
                  author={items.author}
                  price={items.price}
                  image={items.image}
                  id={items._id}
                />
              </div>
            ))}
          <div className="col-12 latest-browse text-center mt-4">
            {visibleItems < latestItems.length && (
              <button onClick={handleSeeMore}>See More</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestItems;
