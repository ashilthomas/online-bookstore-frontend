// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [userData, setUserData] = useState([]);
//   const [search, setSearch] = useState(false);
//   const [tokens, setToken] = useState("");
//   const [product, setProduct] = useState([]);
//   const [latest, setLatest] = useState("");
//   const [latestItems, setLatestItems] = useState([]);
//   const [userDataCart, setUserDataCart] = useState("");
//   const [cartAllItems,setCartAllItems]=useState([])
//   const [loading,setLoading]=useState(false)
//   const token = sessionStorage.getItem("userToken");

//   const userDataforCart = localStorage.getItem("userData");
  
 
// // get all books
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       const res = await axios.get("http://localhost:3003/products/allbooks", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setLoading(false)
//       setProduct(res.data.books);
//     };
//     fetchData();
//   }, []);

//   // handileLatest item filter using quires

//   const handleLatestItems = async (items) => {
//     setLatest(items);

//     const res = await axios.post(
//       `http://localhost:3003/products/searchbooks?query=${latest}`
//     );
//     setLatestItems(res.data);
//   };

//   //cart
 
   


//   const getAllCart = async () => {
//     const cartData = await axios.post(
//       `http://localhost:3003/cart/getallcart/${userDataCart}`
//     );
//     setCartAllItems(cartData.data);
//   };

//   const removeCart = async(productId)=>{
//     const removecartResponce = await axios.post(`http://localhost:3003/cart/deletecart/6648972dc78e51db7b9c478c`,{
//       productId:productId
//     })
   
    
//   }

//  useEffect(()=>{
//     handleLatestItems();
//  },[])

//  useEffect(() => {
//   if (userDataCart) {
//     getAllCart();
//   }
// }, [userDataCart]);
  

//   useEffect(() => {
//     if(userDataforCart){
//        const userData = JSON.parse(userDataforCart);
//        setUserDataCart(userData._id);
//     }
   
   
//     // getAllCart();
//   }, []);
//   const contextValue = {
//     setToken,
//     tokens,
//     product,
//     search,
//     setSearch,
//     setUserData,
//     userData,
//     handleLatestItems,
//     latestItems,
//     cartAllItems,
//     getAllCart,
//     loading,
//     setLoading,
//     userDataforCart,
//     removeCart
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);
  const [tokens, setToken] = useState("");
  const [product, setProduct] = useState([]);
  const [latestItems, setLatestItems] = useState([]);
  const [cartAllItems, setCartAllItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartChanged, setCartChanged] = useState(false); // New state to track cart changes
  const [quantity, setQuantity] = useState(1); // Default quantity to 1




  // Get all books
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3003/products/allbooks",{
       
      });
      setLoading(false);
      setProduct(res.data.books);
    };
    fetchData();
  }, []);

  // Handle latest item filter using queries
  const handleLatestItems = async (items) => {
 
   
    const res = await axios.post(
      `http://localhost:3003/products/searchbooks?query=${items}`
    );
    setLatestItems(res.data);
  };

  // Fetch all cart items
  const getAllCart = async () => {

   
    const cartData = await axios.post("http://localhost:3003/cart/getallcart", {}, { withCredentials: true });
    setCartAllItems(cartData.data);
  };

  // Remove item from cart
  const removeCart = async (productId) => {
    try {
         console.log(productId);
    await axios.post(`http://localhost:3003/cart/deletecart`,{productId:productId},{withCredentials:true});

   
    setCartChanged((prev) => !prev);
    if(res.data.success){
   toast.success(res.data.success)
    }
    } catch (error) {
         toast.error(error)
    }
 
  };

  
  useEffect(() => {
   
      getAllCart();
  
  }, [ cartChanged,quantity]);



  

  const handleChange = async (event, productId) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);

    try {
      const res = await axios.post(
        "http://localhost:3003/cart/updatequantity",
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
