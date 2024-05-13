import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);
  const [tokens, setToken] = useState("");
  const [product, setProduct] = useState([]);
  const token = sessionStorage.getItem("userToken");


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3003/products/allbooks",  { headers: { Authorization: `Bearer ${token}` } });
      setProduct(res.data.books);
    };
    fetchData();
  }, []);

 

  console.log(product);
  const contextValue = {
    setToken,
    tokens,
    product,
    search,
    setSearch,
    setUserData,
    userData,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
