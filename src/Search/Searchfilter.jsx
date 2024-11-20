import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import { BsSearch } from "react-icons/bs";
import Cards from "../Components/Cards/Cards";
import "./Searchfilter.css";
import axios from "axios";
import Loading from "../Components/Loading/Loading";
import debounce from "lodash.debounce";
import instance from "../Axios";

export function Searchfilter() {
  const { setSearch, search, setLoading, loading } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchProduct, setSearchProduct] = useState([]);

 

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        setLoading(true);
        const res = await instance.get(
          `products/searchbooks?query=${searchQuery}`
        );
        setSearchProduct(res.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    const debouncedFetchData = debounce(fetchData, 500);
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, [searchQuery, setLoading]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteSearch = () => {
    setSearchQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No need to set search query here because it is already updated on change
  };

  return (
    <div>
      <div id="myOverlay" className={`overlay ${search ? "open" : ""}`}>
        <span
          className="closebtn"
          onClick={() => setSearch(false)}
          title="Close Overlay"
        >
          ×
        </span>

        <div className="overlay-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search book by author"
              name="search"
              value={searchQuery}
              onChange={handleInputChange} // Update searchQuery state onChange
            />
            <span onClick={handleDeleteSearch}>X</span>
            <button type="submit">
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        <div className="search-items mt-5">
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                All items
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
                {loading && <Loading />}
                {searchProduct &&
                  searchProduct.map((item) => (
                    <Cards
                      key={item._id}
                      name={item.name}
                      author={item.author}
                      price={item.price}
                      image={item.image}
                      id={item._id}
                      setSearch={setSearch}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchfilter;
