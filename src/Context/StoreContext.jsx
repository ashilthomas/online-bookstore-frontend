import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);
  const [tokens, setToken] = useState("");
  const [product, setProduct] = useState([]);
  const [latest, setLatest] = useState("");
  const [latestItems, setLatestItems] = useState([]);
  const [userDataCart, setUserDataCart] = useState("");
  const [cartAllItems,setCartAllItems]=useState([])
  const [loading,setLoading]=useState(false)
  const token = sessionStorage.getItem("userToken");

  const userDataforCart = localStorage.getItem("userData");
  
 
// get all books
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:3003/products/allbooks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false)
      setProduct(res.data.books);
    };
    fetchData();
  }, []);

  // handileLatest item filter using quires

  const handleLatestItems = async (items) => {
    setLatest(items);

    const res = await axios.post(
      `http://localhost:3003/products/searchbooks?query=${latest}`
    );
    setLatestItems(res.data);
  };

  //cart
 
   


  const getAllCart = async () => {
    const cartData = await axios.post(
      `http://localhost:3003/cart/getallcart/${userDataCart}`
    );
    setCartAllItems(cartData.data);
  };

 useEffect(()=>{
    handleLatestItems();
 },[])

 useEffect(() => {
  if (userDataCart) {
    getAllCart();
  }
}, [userDataCart]);
  

  useEffect(() => {
    if(userDataforCart){
       const userData = JSON.parse(userDataforCart);
       setUserDataCart(userData._id);
    }
   
   
    // getAllCart();
  }, []);
  const contextValue = {
    setToken,
    tokens,
    product,
    search,
    setSearch,
    setUserData,
    userData,
    handleLatestItems,
    latestItems,
    cartAllItems,
    getAllCart,
    loading,
    setLoading,
    userDataforCart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
