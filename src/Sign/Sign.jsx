import React, { useContext, useState } from "react";
import "./Sign.css";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from "../Context/StoreContext";

function Sign({setSignShow}) {
 const {setUserData,userData}=useContext(StoreContext)
 
  const [currState, setCurrState] = useState("login");
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
 const onChangeHandler=(event)=>{
  const { name, value } = event.target;
  setUser((prevData) => ({ ...prevData, [name]: value }));
}
  
 const onLogin = async (event)=>{
  event.preventDefault();
  let newUrl = ""; // Initialize newUrl to an empty string
  if (currState === "login") {
    newUrl = "http://localhost:3003/user/login"; // Assign newUrl directly
  } else {
    newUrl = "http://localhost:3003/user/register"; // Assign newUrl directly
  }
  try {
    const res = await axios.post(newUrl,user)
   

  
    
    sessionStorage.setItem("userToken", res.data.token);
 
    if(res.data.success){

      setUserData(res.data.user)
      toast.success(res.data.message)
  
      if(currState=="login"){
        setSignShow(false)
      }

    }else{
      toast.error(res.data.message)
    }
  } catch (error) {
    console.log(error);
  }


 }
 


  return (
    <div id="overlay" >
   
      <form action="" className="sign-popup-container" onSubmit={onLogin}>
        <div className="sign-popup-title">
          <h2>{currState}</h2>
          <span onClick={()=>setSignShow(false)}>X</span>
        </div>
        <div className="sign-popup-input">
        <ToastContainer/>
          {currState == "login" ? (
            <></>
          ) : (
            <input type="text" onChange={(onChangeHandler)} value={user.name} name="name" placeholder="your name" required />
          )}
            <input type="email" onChange={(onChangeHandler)} value={user.email} name="email" placeholder="your email" required />
          <input type="password" onChange={(onChangeHandler)} value={user.password} name="password" placeholder="your password" />

        </div>
        <button>{currState == "sign Up" ? "create account" : "login"}</button>
        <div className="sign-popup-conditon">

          <input type="checkbox" />
          <p>By contiuing i agree to the terms of use & privacy policy</p>
        </div>
        
        {currState == "login" ? (
          <p>
            create a new account?{" "}
            <span onClick={() => setCurrState("sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            alredy have an account{" "}
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Sign;
