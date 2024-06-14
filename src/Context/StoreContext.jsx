
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import instance from "../Axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);
  const [tokens, setToken] = useState("");
  const [product, setProduct] = useState([]);
  const [latestItems, setLatestItems] = useState([]);
  const [cartAllItems, setCartAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartChanged, setCartChanged] = useState(false); 
  const [quantity, setQuantity] = useState(1); 

  // Get all books
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await instance.get(
        "products/allbooks",
        {}
      );
      setLoading(false);
      setProduct(res.data.books);
    };
    fetchData();
  }, []);

 
  const handleLatestItems = async (items) => {
  
    const res = await instance.get(
`products/searchbooks?query=${items}`
);
setLatestItems(res.data);


};
 
 

  // Fetch all cart items
  const getAllCart = async () => {
    const cartData = await instance.post(
      "cart/getallcart",
      {},
      { withCredentials: true }
    );
    setCartAllItems(cartData.data);
  };

  // Remove item from cart
  const removeCart = async (productId) => {
    try {
      console.log(productId);
      await instance.post(
        `cart/deletecart`,
        { productId: productId },
        { withCredentials: true }
      );

      setCartChanged((prev) => !prev);
      if (res.data.success) {
        toast.success(res.data.success);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllCart();
  }, [cartChanged, quantity]);

  const handleChange = async (event, productId) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);

    try {
      const res = await instance.post(
        "cart/updatequantity",
        { productId, quantity: newQuantity },
        { withCredentials: true }
      );

      toast.success("Quantity updated successfully!");
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity.");
    }
  };

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
    handleChange,
    removeCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
